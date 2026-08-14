# subjects-02 — build the reconciliation report

**You are an expert mathematician auditing six freshly written prose scaffolds
for cross-track consistency.**

Six subject tracks were scaffolded concurrently under
`research/subjects-02-SEAMS.md`, which forbade any track from writing another's
file. Every cross-track finding was therefore parked in an "Amendments owed",
"Seam", "Interface" or "Blocker" section instead of being applied. Collect and
classify all of it into one report the orchestrator can adjudicate from.

**You produce exactly one file: `research/subjects-02-RECONCILIATION.md`.** Do
not edit any track file, `plan-spec.json`, `items/**`, `library/**`, or any
normative doc. You apply nothing. You classify.

## The six tracks and their files

| track | prefix | file |
|---|---|---|
| algebraic geometry | `AV` | `research/plan-algebraic-geometry-track.md` |
| algebraic topology | `AT` | `research/plan-algebraic-topology-track.md` |
| differential topology | `DT` | `research/plan-differential-topology-track.md` |
| Fourier analysis | `FR` | `research/plan-fourier-analysis-track.md` |
| representation theory of groups | `RG` | `research/plan-representation-theory-groups-track.md` |
| representation theory of Lie algebras | `RL` | `research/plan-representation-theory-lie-track.md` |

They also raise amendments against tracks OUTSIDE this commission —
differential geometry, functional analysis, PDE, homological algebra, abstract
algebra, group theory, commutative algebra, topology. Those count too.

## Classify every route into exactly one of

- **`apply`** — a concrete, uncontested change to a named target. Say exactly what
  and where.
- **`conflict`** — two tracks want incompatible things, or both claim the same
  concept. State both positions and what turns on the choice.
- **`stale`** — the target already does this. **Verify from the target file, not
  from the requesting track's assertion.** In subjects-01 more than half of all
  routes were stale, so check every one.
- **`owner`** — it needs a deletion, an id change, a reading-order change, or a
  new mathematical commitment the seam contract did not authorise.

## Known conflicts to adjudicate — these are already identified, verify and detail them

1. **Fourier ↔ functional analysis, seven ids.** `FR` proposes seven ids that the
   functional-analysis scaffold also proposes, and records them as a transfer of
   FA-14's classical Fourier-series items with the argument that FA can obtain
   trigonometric density from Stone–Weierstrass so the transfer creates no forward
   citation. Verify that argument against `research/plan-functional-analysis-track.md`.
2. **PDE-19 holds Calderón–Zygmund items.** `FR` claims the CZ kernel definition,
   decomposition, weak endpoint, interpolation/duality split, generic $L^p$
   theorem and two endpoint counterexamples in PDE-19 belong to FR-8. Verify
   against `research/plan-pde-track.md` and say what PDE-19 retains.
3. **`AT` owes differential geometry an interface.** DG plans
   `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` and
   `the-de-rham-theorem-and-degree`, which compare against singular cohomology
   that `AT` now owns. Name the exact interface each DG page needs.
4. **Unresolved concurrent cross-references.** `DT` records descriptive
   `AT-n[...]` tokens, `RG` records unresolved `RL-n` and `FR-n` citations, and
   `AV` cites `AT-n`. Resolve each to a concrete pair label, or flag it.
5. **Characteristic classes.** The seam split construction (`AT`) from application
   (`DT`). Verify both honoured it and that no result is orphaned between them.

## Also check, mechanically, and report the numbers

- **Duplicate-id candidates**, both within a track and across all six plus the
  outside tracks they cite. The orchestrator already measured **zero** collisions
  among the six and against `items/` and `plan-spec.json` — confirm or refute
  independently, and check against the other scaffold files too.
- **Whether each track's stated pair count, item count and ratio match the file.**
  Every subjects-01 lane's briefed figures were wrong; recompute from disk.
- **Any pair whose source matrix has fewer than two independent treatments**, and
  whether it is recorded as a deliberate dash with a reason.

## Report format

A table per route: `from | to | request | evidence (file and line) | class + reason`.
Then a summary count by class, the duplicate-id findings, and a numbered list of
the questions only the orchestrator can settle.

Be concise and factual. Cite file and line for every claim. Do not speculate
about intent — read the files.

**No permission prompts of any kind.** Record a blocker in your report if truly
stuck.
