"use client";

import { useId, useRef, useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCorners,
  useDroppable,
  useSensor,
  useSensors,
  type Announcements,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { site } from "@/content/site";

/**
 * Anfragen-Board zu Stufe 3: fünf Spalten, Karten lassen sich mit Maus, Finger (kurz gedrückt halten) oder Tastatur
 * verschieben. Farbe, Status, Wert und die Kennzahlen unten richten sich nach der Spalte, in der eine Karte liegt.
 */
const b = site.sales.board;
const IMG = "/images/wp/vertrieb";
const GLOW = "rgba(242,107,75,0.38) 0%, rgba(201,71,43,0.149) 45%, rgba(201,71,43,0) 68%";

type Card = (typeof b.cards)[number];
type ColId = (typeof b.columns)[number]["id"];
type Items = Record<ColId, string[]>;

const cardById = Object.fromEntries(b.cards.map((c) => [c.id, c])) as Record<string, Card>;
const colById = Object.fromEntries(b.columns.map((c) => [c.id, c])) as Record<ColId, (typeof b.columns)[number]>;
const initial = Object.fromEntries(b.columns.map((col) => [col.id, b.cards.filter((c) => c.col === col.id).map((c) => c.id)])) as Items;

// Spalten, deren Karten als Atex-Scale-qualifiziert zählen
const QUALIFIED: ColId[] = ["qualifiziert", "kontaktiert", "abgeschlossen"];
const euro = (n: number) => `${n.toLocaleString("de-DE")} €`;

function findCol(items: Items, id: UniqueIdentifier): ColId | undefined {
  if (id in items) return id as ColId;
  return (Object.keys(items) as ColId[]).find((k) => items[k].includes(String(id)));
}

const tones = {
  plain: {
    bg: "linear-gradient(180deg, #2b2b2b, #1a1a1a)",
    border: "rgba(255,255,255,0.1)",
    shadow: "0 6px 14px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
    pill: "rgba(255,255,255,0.08)",
    pillText: "#e9e9e6",
    time: "#8f8f8b",
    title: "#ffffff",
    who: "#cfcfcb",
    status: "#f26b4b",
  },
  hot: {
    bg: "linear-gradient(148.9deg, #262322 10.7%, #352620 53.6%, #9a442b 82.1%)",
    border: "rgba(242,107,75,0.4)",
    shadow: "0 8px 18px rgba(242,107,75,0.16), inset 0 1px 0 rgba(255,255,255,0.14)",
    pill: "rgba(255,255,255,0.16)",
    pillText: "#e9e9e6",
    time: "#8f8f8b",
    title: "#ffffff",
    who: "#cfcfcb",
    status: "#f7a98f",
  },
  muted: {
    bg: "linear-gradient(180deg, #2b2b2b, #1a1a1a)",
    border: "rgba(255,255,255,0.06)",
    shadow: "0 6px 14px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
    pill: "rgba(255,255,255,0.08)",
    pillText: "#9a9a96",
    time: "#6f6f6c",
    title: "#9a9a96",
    who: "#777774",
    status: "#c8463a",
  },
} as const;

const toneOf = (col: ColId) => (col === "neu" ? tones.plain : col === "abgelehnt" ? tones.muted : tones.hot);

export function SalesBoard() {
  const [items, setItems] = useState<Items>(initial);
  const [active, setActive] = useState<string | null>(null);
  const [overCol, setOverCol] = useState<ColId | null>(null);
  const snapshot = useRef<Items>(initial);
  const dndId = useId();

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 180, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const onDragStart = ({ active }: DragStartEvent) => {
    snapshot.current = items;
    setActive(String(active.id));
    setOverCol(findCol(items, active.id) ?? null);
  };

  // Beim Überfahren einer anderen Spalte wandert die Karte sofort dorthin
  const onDragOver = ({ active, over }: DragOverEvent) => {
    if (!over) return;
    const from = findCol(items, active.id);
    const to = findCol(items, over.id);
    if (!from || !to) return;
    setOverCol(to);
    if (from === to) return;
    setItems((prev) => {
      const target = prev[to];
      const overIndex = target.indexOf(String(over.id));
      const translated = active.rect.current.translated;
      const below = translated ? translated.top > over.rect.top + over.rect.height / 2 : false;
      const index = overIndex >= 0 ? overIndex + (below ? 1 : 0) : target.length;
      return {
        ...prev,
        [from]: prev[from].filter((id) => id !== active.id),
        [to]: [...target.slice(0, index), String(active.id), ...target.slice(index)],
      };
    });
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    const from = findCol(items, active.id);
    const to = over ? findCol(items, over.id) : undefined;
    if (from && to && from === to && over) {
      const a = items[from].indexOf(String(active.id));
      const o = items[to].indexOf(String(over.id));
      if (o >= 0 && a !== o) setItems((prev) => ({ ...prev, [to]: arrayMove(prev[to], a, o) }));
    }
    setActive(null);
    setOverCol(null);
  };

  const onDragCancel = () => {
    setItems(snapshot.current);
    setActive(null);
    setOverCol(null);
  };

  const announcements: Announcements = {
    onDragStart: ({ active }) => `${cardById[active.id]?.title} ${b.a11y.picked}.`,
    onDragOver: ({ active, over }) => {
      const col = over ? findCol(items, over.id) : undefined;
      return col ? `${cardById[active.id]?.title} ${b.a11y.over} ${colById[col].title}.` : undefined;
    },
    onDragEnd: ({ active, over }) => {
      const col = over ? findCol(items, over.id) : undefined;
      return col ? `${cardById[active.id]?.title} ${b.a11y.dropped} ${colById[col].title}.` : b.a11y.cancelled;
    },
    onDragCancel: () => b.a11y.cancelled,
  };

  // Kennzahlen aus der aktuellen Lage der Karten
  const total = Object.values(items).flat().length;
  const qualified = QUALIFIED.reduce((n, c) => n + items[c].length, 0);
  const won = items.abgeschlossen;
  const volume = won.reduce((n, id) => n + cardById[id].amount, 0);
  const kpis = [
    { value: String(total), label: b.kpis.total, accent: false },
    { value: String(qualified), label: b.kpis.qualified, accent: false },
    { value: String(won.length), label: b.kpis.won, accent: false },
    { value: euro(volume), label: b.kpis.volume, accent: true },
    { value: b.kpis.response.value, label: b.kpis.response.label, accent: false },
  ];
  const changed = JSON.stringify(items) !== JSON.stringify(initial);
  const activeCol = active ? findCol(items, active) : undefined;

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 lg:mt-10">
        <p className="text-[14px] text-[#6b6869]">
          <span className="hidden lg:inline">{b.hint}</span>
          <span className="lg:hidden">{b.hintTouch}</span>
        </p>
        <button
          type="button"
          onClick={() => setItems(initial)}
          className={`text-[14px] font-semibold text-[#231f20] underline-offset-4 transition-opacity hover:underline ${changed ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden={!changed}
          tabIndex={changed ? 0 : -1}
        >
          ↺ {b.reset}
        </button>
      </div>

      <div className="-mx-5 mt-3 overflow-x-auto px-5 pb-7 md:-mx-10 md:px-10 lg:-mx-4 lg:px-4">
        <DndContext
          id={dndId}
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDragCancel={onDragCancel}
          accessibility={{ announcements, screenReaderInstructions: { draggable: b.a11y.instructions } }}
        >
          <div
            className="relative min-w-[1100px] overflow-hidden rounded-[18px] p-[18px]"
            style={{ backgroundImage: "linear-gradient(162.1deg, #242424 0%, #050505 71.4%)", boxShadow: "0 12px 24px -12px rgba(0,0,0,0.35)" }}
          >
            <span aria-hidden className="pointer-events-none absolute -right-[30%] -top-[90%] aspect-square w-[70%] opacity-50 blur-[4px]" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${GLOW})` }} />
            <span aria-hidden className="pointer-events-none absolute -bottom-[60%] -left-[20%] aspect-square w-[46%] opacity-25 blur-[3px]" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${GLOW})` }} />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.13em] text-[#f26b4b]">{b.title}</p>
                <p className="mt-1 text-[12.5px] text-[#a8a8a4]">{b.sub}</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-[rgba(47,143,91,0.5)] bg-[rgba(47,143,91,0.18)] px-2.5 py-1 text-[11px] font-semibold text-[#7ed4a0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/live.svg`} alt="" aria-hidden width={7} height={7} className="size-[7px] motion-safe:animate-pulse" />
                {b.live} · {total} {b.requests}
              </span>
            </div>

            <div className="relative mt-4 grid grid-cols-5 gap-3">
              {b.columns.map((col) => (
                <Column key={col.id} col={col} ids={items[col.id]} highlight={active !== null && overCol === col.id} />
              ))}
            </div>

            {/* Kennzahlen */}
            <dl className="relative mt-3 grid grid-cols-5 rounded-[12px] border border-white/[0.08] bg-white/[0.06]">
              {kpis.map((k, i) => (
                <div key={k.label} className={`flex flex-col-reverse px-4 py-3 ${i > 0 ? "border-l border-white/10" : ""}`}>
                  <dt className="mt-0.5 text-[12px] text-[#a8a8a4]">{k.label}</dt>
                  <dd className={`text-[21px] font-semibold leading-tight tabular-nums ${k.accent ? "text-[#f26b4b]" : "text-[#f4f4f2]"}`}>{k.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <DragOverlay>{active && activeCol ? <LeadCard card={cardById[active]} col={activeCol} lifted /> : null}</DragOverlay>
        </DndContext>
      </div>
    </>
  );
}

function Column({ col, ids, highlight }: { col: (typeof b.columns)[number]; ids: string[]; highlight: boolean }) {
  const { setNodeRef } = useDroppable({ id: col.id });
  return (
    <div
      ref={setNodeRef}
      className={`relative flex flex-col rounded-[12px] border transition-colors duration-150 ${
        highlight ? "border-[rgba(242,107,75,0.55)] bg-white/[0.09]" : "border-white/[0.08] bg-white/[0.06]"
      }`}
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] rounded-t-[12px]" style={{ background: col.bar }} />
      <div className="flex items-center justify-between gap-2 px-3 pb-2 pt-3">
        <span className="truncate text-[13.5px] font-semibold text-[#f4f4f2]">{col.title}</span>
        <span className="grid h-[19px] min-w-[22px] place-items-center rounded-full bg-white/[0.12] px-1.5 text-[11px] font-semibold tabular-nums text-[#f4f4f2]">{ids.length}</span>
      </div>
      <SortableContext id={col.id} items={ids} strategy={verticalListSortingStrategy}>
        <ul className="flex min-h-[240px] flex-1 flex-col gap-2 px-2 pb-2">
          {ids.map((id) => (
            <SortableCard key={id} id={id} col={col.id} />
          ))}
        </ul>
      </SortableContext>
    </div>
  );
}

function SortableCard({ id, col }: { id: string; col: ColId }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={`cursor-grab touch-manipulation select-none rounded-[12px] outline-none [-webkit-touch-callout:none] focus-visible:ring-2 focus-visible:ring-[#f26b4b] active:cursor-grabbing ${
        isDragging ? "opacity-30" : ""
      }`}
    >
      <LeadCard card={cardById[id]} col={col} />
    </li>
  );
}

function LeadCard({ card, col, lifted = false }: { card: Card; col: ColId; lifted?: boolean }) {
  const t = toneOf(col);
  const home = card.col === col;
  const status = home ? card.status : colById[col].moved;
  const value =
    !card.amount || col === "neu" || col === "abgelehnt"
      ? ""
      : `${col === "abgeschlossen" ? "" : `${b.approx} `}${euro(card.amount)}${card.per}`;
  return (
    <div
      className={`relative rounded-[12px] border px-3 py-2.5 transition-[background,border-color] duration-200 ${lifted ? "cursor-grabbing" : ""}`}
      style={{
        borderColor: t.border,
        backgroundImage: t.bg,
        boxShadow: lifted ? "0 22px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(242,107,75,0.35)" : t.shadow,
        transform: lifted ? "rotate(-2deg) scale(1.03)" : undefined,
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1 rounded-full px-2 py-[3px]" style={{ background: t.pill }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/quelle-${card.dot}.svg`} alt="" aria-hidden width={7} height={7} className="size-[7px] shrink-0" />
          <span className="truncate text-[10.5px] font-semibold" style={{ color: t.pillText }}>
            {card.source}
          </span>
        </span>
        <span className="shrink-0 text-[10.5px]" style={{ color: t.time }}>
          {card.time}
        </span>
      </div>
      <p className="mt-2 truncate text-[14px] font-semibold leading-tight" style={{ color: t.title }}>
        {card.title}
      </p>
      <div className="mt-1 flex items-baseline justify-between gap-2">
        <span className="truncate text-[12px]" style={{ color: t.who }}>
          {card.who}
        </span>
        {value && <span className="shrink-0 text-[12.5px] font-semibold text-white">{value}</span>}
      </div>
      <div className="mt-2.5 flex min-h-[18px] items-center justify-between gap-2">
        <span className="truncate text-[11.5px]" style={{ color: t.status }}>
          {status}
        </span>
        {t === tones.hot && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`${IMG}/qualifiziert.svg`} alt="Atex-Scale-qualifiziert" width={18} height={18} className="size-[18px] shrink-0" />
        )}
      </div>
    </div>
  );
}
