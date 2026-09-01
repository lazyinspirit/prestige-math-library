# frontier-28 · Alpha group `d` · Step 3 recheck

Group `d` owns batches `9` and `11`: `leaf-reducibility-and-wonderful-families`,
`diagonalization-and-the-halting-problem`, and
`p-np-conp-and-polynomial-reductions`.

I re-read the authoritative Step-3 task, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `CLAUDE.md`, the current group-`d` scaffold review, each
assigned batch's `## Step-3 fix pass` notes, the live batch manifests and
coverage files, and the current `research/plan-spec.json` together with the
controlling design sections in
`research/plan-combinatorics-and-categories.md` and
`research/plan-computability-theory-track.md`.

Checks run against the current bytes on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group d`
  - `scope-decisions: d: 4 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-28 --group d`
  - `scope-decisions: 4 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-9.coverage.json`
  - `WARN coverage-low-yield [leaf-reducibility-and-wonderful-families]: frontier-28-batch-9.coverage.json: leaf-reducibility-and-wonderful-families: 9/32 harvested results scaffolded; confirm the declines with Alpha`
  - `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 1 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-11.coverage.json`
  - `coverage-checklist: 2 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-9.coverage.json`
  - `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-11.coverage.json`
  - `source-fetch-check: 10/10 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  - `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - terminal note: `NOTE: 671 planned page(s) carry no item list yet ...`
  - terminal status: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`

No newly pending scope row appeared after the refresh, so no new
scope-decision resolution was required in this pass.

## Finding dispositions

1. Finding `D9-1` on `leaf-reducibility-and-wonderful-families`: closed as
   sufficient.
   The accepted repair is present on current disk. The batch-9 coverage file no
   longer carries the inexact omnibus deferment to
   `blockades-combs-and-pattern-graphs`; it now records four exact
   `already-published` rows for
   `def-c-sparse-and-c-restricted-vertex-set`,
   `def-directional-and-weak-sparsity-between-vertex-sets`,
   `def-blockade-length-and-width`, and `def-comb-in-a-graph`, and the
   batch-9 fix-pass notes still describe that exact split. The only remaining
   scope row for page `425` is Chudnovsky `Conjecture 2.3`, which still has no
   exact current destination page in the plan and therefore remains a valid
   `owner-decision`.

2. `diagonalization-and-the-halting-problem`: closed as sufficient.
   No batch-11 finding id was issued in the stable review, and the current
   pushbacks still verify on the live bytes. Turing section `11` remains
   outside the TC-12 route; Rice's theorem still has the exact later home
   `computable-reductions-and-rices-theorem` at order `605`; and the
   busy-beaver value table remains extra illustration rather than missing scope.
   The current manifest still carries the intended `15` A-page items and `3`
   B-page items. One stable-review check line is now stale on current bytes:
   batch `11`'s fix pass increased the current coverage count from `50` to
   `54`, and the live coverage file and notes agree with the newer `54`-row
   state.

3. `p-np-conp-and-polynomial-reductions`: closed as sufficient.
   No batch-11 finding id was issued in the stable review, and the current
   scaffold still matches the TC-20 route on current disk. The two recorded
   authoring seams remain honest rather than missing scope: the SAT
   self-reduction theorem must define enough SAT vocabulary locally to avoid a
   forward dependency on page `621`, and the final containment proposition must
   define `PSPACE` inline instead of silently inventing a new scaffold item.
   Those are Step-5 proof-writing constraints, not Step-3 scaffold blockers.

## Scope decisions

`research/frontier-28-alpha-d-scope-decisions.json` is current after the
refresh. The four current decline rows still resolve correctly as:

- `stands`: `3` rows
- `owner-decision`: `1` row

The remaining owner-level row is Chudnovsky survey `Conjecture 2.3` on page
`425`. The current combinatorics design still maps Lemmas `2.1–2.2` to page
`425`, while the only generic catalogue page on current disk remains
`open-problems-and-research-frontier` as an `X` page at order `5`. Routing the
conjecture there would still be a new published-catalogue scope choice rather
than an exact current-page deferment, so `owner-decision` remains the correct
status.

## Pair verdicts

- `leaf-reducibility-and-wonderful-families`: `sufficient`
  - current manifest size: `7` A-page items, `2` B-page items
- `diagonalization-and-the-halting-problem`: `sufficient`
  - current manifest size: `15` A-page items, `3` B-page items
- `p-np-conp-and-polynomial-reductions`: `sufficient`
  - current manifest size: `17` A-page items, `3` B-page items

`research/frontier-28-alpha-d-step3-verdicts.json` already matches these
verified current-byte outcomes, so no JSON content change was required in this
recheck pass.
