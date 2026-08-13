# subjects-01 — run record and resume state

**Objective.** Owner commission, 2026-08-13: amend and expand the prose scaffolds
so future mathematical content is richer, across **thirteen subjects**, one Opus 5
`scaffolder` lane each (xhigh, 1M window), each free to fan out to its own Opus 5
research subagents. Deliverable is **prose scaffolds only** — nothing is spliced
into `plan-spec.json`, no item is authored, nothing is published.

The owner's fourth requirement is the orchestrator's own: *identify and
reconcile the dependencies between these subjects; minimize forward references
wherever possible, but do NOT drop content to avoid forward references.*

## Governing artifacts

| file | what it is |
|---|---|
| `research/subjects-01-SEAMS.md` | **the ownership, anchor and seam contract.** Outranks any scaffolder's judgment on a seam |
| `briefs/subject-scaffold.md` | the shared `scaffolder` brief |
| `research/subjects-01-<track>.task.md` | the 13 per-subject dispatches |
| `research/subjects-01-dispatch/` | prompts, logs, result JSON |

## Machinery added this run

- **`scaffolder` role in `tools/dispatch.mjs`** — claude runner, `claude-opus-5[1m]`,
  `xhigh`, `workspace-write`, **cap 4**. Documented in `ARCHITECTURE.md` in the
  same commit. It is a separate row from `alpha` on purpose: Alpha's cap of 1 is a
  mutual-exclusion guarantee over shared artifacts, not a resource limit, and
  raising it would delete that guarantee for every future build. A scaffolder owns
  exactly one file, so exclusion comes from the ownership contract and the cap
  expresses the real constraint, which is **memory on a 16 GB host**.

## Wave plan — a dependency PIPELINE, not a barrier

Launch a wave-2 track the moment the specific wave-1 track it depends on
finishes; do not wait for a whole wave.

| wave | tracks | waits on |
|---|---|---|
| 1 | `measure-theory`, `abstract-algebra`, `combinatorics`, `monoidal-abelian-categories` | nothing |
| 2 | `functional-analysis` ← measure-theory · `commutative-algebra` ← abstract-algebra · `group-theory` ← abstract-algebra · `homological-algebra` ← monoidal-abelian-categories | as shown |
| 3 | `probability-theory` ← measure-theory · `pde` ← functional-analysis · `number-theory` ← commutative-algebra · `differential-geometry` ← homological-algebra | as shown |
| 4 | `complex-analysis` ← measure-theory, functional-analysis, pde, number-theory | runs last so it can reconcile against all four |

## Current state

**Wave 1 launched 2026-08-13, all four lanes running detached** (`nohup`, cap 4
saturated). Timeout 21600 s each. Nothing has returned yet.

## Exact next action

Poll `research/subjects-01-dispatch/scaffolder-<label>.result.json`. As each wave-1
lane lands: read its track file summary, then **immediately dispatch its
dependent wave-2 track** in the same turn. Do not pause at a wave boundary to
report — a cleared stage is a dispatch trigger, not a reporting checkpoint.

## Reconciliation, still owed after all 13 land

1. Collect every "Amendments owed to other scaffolds" section and apply them —
   scaffolders may not write each other's files, so these are pending by design.
2. Resolve every "Unresolved seam" record, by moving a block in reading order if
   that is what removes a forward reference.
3. Sweep for duplicate minted ids across all thirteen tracks, and against the
   4172 published items.
4. Convert anchors to concrete plan orders in **ONE splice pass**, by anchor page
   id, never by composing shift tables — the hazard
   `research/scaffold-expansion-2026-07-28.md` records. Free integers 98–101 take
   the Galois block; everything else needs fractional orders in the `5.1`/`53.2`
   idiom, which renumber nothing.
5. The splice itself is a separate operation and is **not** part of this
   commission unless the owner asks for it.

## Working-tree baseline

Branch `main`, clean at `78d83700` before this run. This run adds
`tools/dispatch.mjs` (scaffolder role), `ARCHITECTURE.md` (its documentation),
`briefs/subject-scaffold.md`, `research/subjects-01-*`.
