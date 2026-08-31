# frontier-27 — Alpha group `d` Step 3 scaffold review

Scope: batches `7`, `9`, and `10`, covering
`small-graph-erdos-hajnal-consequences`,
`iterative-restriction-and-comb-extraction-lemmas`,
`myhill-nerode-theory-and-dfa-minimization`,
`decidable-recognizable-and-enumerable-languages`,
`primitive-recursive-and-partial-computable-functions`, and
`resource-bounds-and-machine-invariance`.

I read each owned batch manifest, coverage file, notes file, the controlling
design sections in `research/plan-combinatorics-and-categories.md` and
`research/plan-computability-theory-track.md`, and the current
`research/plan-spec.json`. On Monday, August 31, 2026, I refreshed
`research/frontier-27-alpha-d-scope-decisions.json`, resolved its 29 pending
rows, repaired the owned scaffold defects below, and reran the required checks
on the repaired bytes.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `small-graph-erdos-hajnal-consequences` | 7 | sufficient | The page still matches the small-graph design boundary, its later-route deferrals land on exact current pages `409`, `437`, and `441`, and every current A-page item has a coverage carrier. |
| `iterative-restriction-and-comb-extraction-lemmas` | 7 | sufficient | The low-yield warning is explained by already-published carriers for source Lemmas `2.4`, `2.5`, and `2.8`; the current page-423 items and the canonical Claim `5.2.1` bridge cover the reusable authoring route without a missing current result. |
| `myhill-nerode-theory-and-dfa-minimization` | 9 | sufficient | The TC-5 manifest still matches the design spine, duplicate pumping witnesses remain honestly excluded, and every current A-page item has a source or canonical carrier. |
| `decidable-recognizable-and-enumerable-languages` | 9 | sufficient | After adding the missing boolean-operations carrier, TC-11 is coverage-complete and its deferred witness material still lands exactly on pages `599` and `603`. |
| `primitive-recursive-and-partial-computable-functions` | 10 | sufficient | After adding carriers for the step-coding bridge and the two false statements, TC-15 is coverage-complete and the `s-m-n` seam remains exactly deferred to page `611`. |
| `resource-bounds-and-machine-invariance` | 10 | sufficient | After adding the missing TC-19 carriers and correcting the notes' TC-19 source list, the quantitative simulation route is coverage-complete and the later hierarchy/Savitch exclusions remain honest. |

## Direct repairs applied

### Batch 9 — `decidable-recognizable-and-enumerable-languages`

`research/frontier-27-batch-9.coverage.json` lacked a direct carrier for the
current A-page item
`thm-decidable-languages-are-closed-under-boolean-operations`. I added a
canonical carrier recording the local decider-composition route. That closes
the only missing current TC-11 item without widening the page scope.

### Batch 10 — `primitive-recursive-and-partial-computable-functions`

`research/frontier-27-batch-10.coverage.json` lacked direct carriers for:

- `lem-turing-step-coding-is-primitive-recursive`
- `fs-every-total-computable-function-is-primitive-recursive`
- `fs-mu-minimization-is-always-total`

I added canonical carriers for all three. The repaired coverage now matches the
current TC-15 manifest exactly.

### Batch 10 — `resource-bounds-and-machine-invariance`

`research/frontier-27-batch-10.coverage.json` also lacked direct carriers for:

- `def-asymptotic-resource-comparison`
- `lem-time-at-least-input-length-permits-complete-input-reading`
- `thm-multitape-to-single-tape-space-simulation`
- `lem-clocked-machine-construction`
- `fs-model-invariance-means-equal-step-counts`
- `fs-time-bounds-never-need-constructibility`

I added canonical carriers for those six current A-page items.

`research/frontier-27-batch-10.notes.md` also misstated the TC-19 source set:
the live coverage file carries Panetta's reasonable-encoding note, not a
Hartmanis-Stearns row. I corrected the note so its source list and TC-19 risk
discussion now match the actual coverage artifact.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-27 --group d` produced
29 pending decline rows for this group. All 29 now resolve as `stands`.

The current bytes support those retained boundaries:

- Page `421` still keeps Theorems `1.7-1.8` on page `409`, Lemma `6.3` on page
  `437`, and the final E/Bird theorems on page `441`, while excluding the
  broader class-H theorem, the unresolved remaining six-vertex pair, and the
  bull-exponent sharpness paragraph.
- Page `423` still reuses already-published carriers for source Lemmas `2.4`,
  `2.5`, and `2.8`, keeps the generalized Claim `5.2.1` bridge canonical on
  the current page, and leaves the bounded-VC endpoint and the P5-specific
  supplier refinements outside the local authoring route.
- Page `601` still keeps explicit undecidable and nonrecognizable witnesses on
  page `603`, keeps the machine-model recognizability equivalence on page
  `599`, and does not widen to concatenation/star closure, the NTM decidability
  reformulation, or the semidecidable-complement nonclosure fact.
- Page `609` still stops before the next-page `s-m-n` development and does not
  add a separate general-recursive terminology item.
- Page `617` still keeps hierarchy theorems for page `time-and-space-hierarchy-theorems`
  and Savitch's theorem for page `space-complexity-savitch-and-tqbf`, preserving
  the current page's quantitative simulation and invariance scope.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group d`
  Result: `scope-decisions: d: 29 decline(s), 29 pending`.
- `node tools/scope-decisions.mjs check --run frontier-27 --group d`
  Result: `scope-decisions: 29 current decline(s), 0 error(s)`.
- Current A-item carrier audit across the six owned A pages
  Result: all six pages now have zero missing current A-page carriers.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-7.coverage.json`
  Result: `WARN coverage-low-yield [iterative-restriction-and-comb-extraction-lemmas]: frontier-27-batch-7.coverage.json: iterative-restriction-and-comb-extraction-lemmas: 7/23 harvested results scaffolded; confirm the declines with Alpha`
  and then `coverage-checklist: 2 page(s), 59 harvested result(s), 0 error(s), 1 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-9.coverage.json`
  Result: `coverage-checklist: 2 page(s), 76 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-10.coverage.json`
  Result: `coverage-checklist: 2 page(s), 71 harvested result(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- research/frontier-27-alpha-d-scope-decisions.json research/frontier-27-batch-9.coverage.json research/frontier-27-batch-10.coverage.json research/frontier-27-batch-10.notes.md`
  Result: clean.
