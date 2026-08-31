# frontier-27 · Alpha group `d` · Step 3 recheck

Group `d` owns batches `7`, `9`, and `10` in
`research/frontier-27-alpha-groups.json`: CA-21
`small-graph-erdos-hajnal-consequences`, CA-22
`iterative-restriction-and-comb-extraction-lemmas`, TC-5
`myhill-nerode-theory-and-dfa-minimization`, TC-11
`decidable-recognizable-and-enumerable-languages`, TC-15
`primitive-recursive-and-partial-computable-functions`, and TC-19
`resource-bounds-and-machine-invariance`.

I re-read the governing task files, then verified the current Monday, August
31, 2026 bytes in:

- `research/frontier-27-alpha-d-step3-scaffold-review.md`
- `research/frontier-27-batch-7.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-9.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-10.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-7.pages.json`
- `research/frontier-27-batch-9.pages.json`
- `research/frontier-27-batch-10.pages.json`
- `research/frontier-27-batch-7.coverage.json`
- `research/frontier-27-batch-9.coverage.json`
- `research/frontier-27-batch-10.coverage.json`
- `research/plan-combinatorics-and-categories.md`
- `research/plan-computability-theory-track.md`
- `research/plan-spec.json`
- `research/frontier-27-alpha-d-scope-decisions.json`
- `research/frontier-27-alpha-d-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group d`
  - result: `scope-decisions: d: 29 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-27 --group d`
  - result: `scope-decisions: 29 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-27-batch-7.coverage.json research/frontier-27-batch-9.coverage.json research/frontier-27-batch-10.coverage.json --require-destination`
  - result: `coverage-checklist: 6 page(s), 206 harvested result(s), 0 error(s), 1 warning(s)`
  - note: the one warning is the already-known `coverage-low-yield` notice for `iterative-restriction-and-comb-extraction-lemmas`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-7.pages.json research/frontier-27-batch-9.pages.json research/frontier-27-batch-10.pages.json`
  - result: `content-policy: 101 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-7.coverage.json`
  - result: `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-9.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-10.coverage.json`
  - result: `source-fetch-check: 12/12 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; the command ends `OK` and reports only the repository's standing `redundant-prereq` advisories plus the usual note that many planned pages still have no item list
- focused manifest-to-carrier audit over the current A-page manifests
  - result: all six owned A pages have `0` missing carriers when current `included`, `inline`, `already-published`, and canonical coverage rows are counted

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Dispositions

1. Batch `7` page `small-graph-erdos-hajnal-consequences`: **closed**.
   The stable review's sufficiency call still stands on current disk. The live
   page manifest still matches the CA-21 plan boundary at
   `research/plan-combinatorics-and-categories.md:3910`, while the later-route
   theorems remain assigned to the exact current pages at `:3904`, `:3918`,
   and `:3920`. The current manifest-to-carrier audit reports `missing=0`, and
   no further scaffold edit is owed.

2. Batch `7` page `iterative-restriction-and-comb-extraction-lemmas`: **closed**.
   The expected low-yield warning remains justified rather than blocking. The
   plan still fixes this page to Lemmas `2.4`, `2.5`, and `2.7`-`2.10` at
   `research/plan-combinatorics-and-categories.md:3911`, and the live
   coverage still closes the page with the local items, the canonical
   generalized Claim `5.2.1` bridge, and the already-published carriers for
   source Lemmas `2.4`, `2.5`, and `2.8`. `coverage-checklist` reports the
   same one warning and `0` errors, and the current A-page audit reports
   `missing=0`.

3. Batch `9` page `myhill-nerode-theory-and-dfa-minimization`: **closed**.
   The live manifest still matches the TC-5 item spine at
   `research/plan-computability-theory-track.md:324-344`, including the
   pumping-lemma theorem, the distinguishable-prefix corollary, and the two
   false statements, without widening to duplicate pumping witnesses. The
   current coverage closes every A-page item, and the stable review's exclusion
   decisions still match the live batch notes and coverage.

4. Batch `9` page `decidable-recognizable-and-enumerable-languages`: **closed**.
   The direct repair recorded in the stable review remains present on current
   bytes. The live canonical section of
   `research/frontier-27-batch-9.coverage.json` still includes
   `thm-decidable-languages-are-closed-under-boolean-operations`, matching the
   TC-11 item list at
   `research/plan-computability-theory-track.md:546-565`. The current A-page
   audit reports `missing=0`, and the deferred witness material still lands on
   `diagonalization-and-the-halting-problem` at `:579-600`.

5. Batch `10` page `primitive-recursive-and-partial-computable-functions`: **closed**.
   The stable review's carrier repair still stands on current disk. The live
   manifest still matches the TC-15 item list at
   `research/plan-computability-theory-track.md:687-707`, and the current
   canonical coverage rows still include
   `lem-turing-step-coding-is-primitive-recursive`,
   `fs-every-total-computable-function-is-primitive-recursive`, and
   `fs-mu-minimization-is-always-total`. The current A-page audit reports
   `missing=0`, and the `s-m-n` material remains correctly deferred to
   `acceptable-numberings-smn-and-the-recursion-theorem` at `:723-743`.

6. Batch `10` page `resource-bounds-and-machine-invariance`: **closed**.
   The stable review's TC-19 carrier repair still stands on current disk. The
   live manifest still matches the TC-19 item list at
   `research/plan-computability-theory-track.md:839-857`, and the current
   canonical coverage rows still include
   `def-asymptotic-resource-comparison`,
   `lem-time-at-least-input-length-permits-complete-input-reading`,
   `thm-multitape-to-single-tape-space-simulation`,
   `lem-clocked-machine-construction`,
   `fs-model-invariance-means-equal-step-counts`, and
   `fs-time-bounds-never-need-constructibility`. The current fix-pass notes
   also record a later Turing source-row swap that now leaves
   `source-fetch-check` at `12/12`; that source-verification update does not
   reopen any scope or carrier defect. The hierarchy and Savitch material still
   remains on `time-and-space-hierarchy-theorems` and
   `space-complexity-savitch-and-tqbf` at
   `research/plan-computability-theory-track.md:981-1004` and `:1020-1041`.

7. Group `d` scope decisions: **closed**.
   After refresh and check,
   `research/frontier-27-alpha-d-scope-decisions.json` now carries `29`
   current decline rows and `0` pending rows. That verified state is stronger
   than the stable review's earlier `29 pending` refresh output, and the live
   plan and coverage bytes still support those retained boundaries across pages
   `421`, `423`, `589`, `601`, `609`, and `617`. No scope-boundary change is
   owed.

## Outcome

All six owned A pages remain sufficient on the current bytes, and
`research/frontier-27-alpha-d-step3-verdicts.json` already matches that
verified state:

- `small-graph-erdos-hajnal-consequences` -> `sufficient`
- `iterative-restriction-and-comb-extraction-lemmas` -> `sufficient`
- `myhill-nerode-theory-and-dfa-minimization` -> `sufficient`
- `decidable-recognizable-and-enumerable-languages` -> `sufficient`
- `primitive-recursive-and-partial-computable-functions` -> `sufficient`
- `resource-bounds-and-machine-invariance` -> `sufficient`

No verdict-byte change was required in this recheck pass.
