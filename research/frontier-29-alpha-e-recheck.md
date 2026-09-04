# frontier-29 · Alpha group `e` · Step 3 recheck

Checks run against the current bytes on Wednesday, September 2, 2026
(Australia/Sydney local time):

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group e` -> `scope-decisions: e: 7 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group e` -> `scope-decisions: 7 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-5.coverage.json research/frontier-29-batch-16.coverage.json --require-destination` -> `coverage-checklist: 2 page(s), 74 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-5.coverage.json` -> `source-fetch-check: 7/7 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-16.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-5.pages.json research/frontier-29-batch-16.pages.json` -> `content-policy: 83 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends with `OK` and only the standing repository-wide `redundant-prereq` advisories plus the standard note that `643` planned pages still have no item list

I re-read the current:

- `research/frontier-29-alpha-e-step3-scaffold-review.md`
- `research/frontier-29-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-16.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-5.pages.json`
- `research/frontier-29-batch-16.pages.json`
- `research/frontier-29-batch-5.coverage.json`
- `research/frontier-29-batch-16.coverage.json`
- `research/plan-spec.json`
- `research/plan-functional-analysis-track.md` (`FA-3`)
- `research/plan-differential-geometry-track.md` (`DG-9`)

## Dispositions

1. `finite-dimensional-normed-spaces-and-riesz-lemma` / finding `B5-1`: **closed**.
   The batch-5 Step-3 fix-pass note is accurate on the current bytes. The live FA-3 design and batch-5 manifest still make `lem-riesz-lemma` load-bearing for `thm-locally-compact-normed-space-iff-finite-dimensional` and `thm-closed-unit-ball-compact-iff-finite-dimensional`, but `research/frontier-29-batch-5.coverage.json` now carries the Tomasz Kochanek lecture-note PDF row with both an inline `Lecture 1` carrier and an included `Lemma 1.3 Riesz' lemma` carrier for `lem-riesz-lemma`, plus `Corollary 1.8` for the local-compactness theorem. Howard-Tachtsis remains corroboration rather than the sole carrier. Coverage, fetch-verification, content-policy, and plan validation all stay clean, so the previous source-sufficiency block is gone.

2. `vector-fields-flows-and-lie-derivatives` / finding `B16-1`: **closed**.
   The batch-16 Step-3 fix-pass note is accurate on the current bytes. The live DG-9 design and batch-16 manifest still keep the flowout items `33`-`34` and the time-dependent items `41`-`44` in scope, and `research/frontier-29-batch-16.coverage.json` now carries a recovered Lee full-text row for `def-flowout-of-an-embedded-submanifold` and `thm-flowout-theorem`, plus a Wurzbacher full-text row for `def-time-dependent-vector-field-and-evolution-operator`, `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`, `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`, and `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`. The focused coverage and fetch checks pass on current bytes, so the Step-3 source-tail defect is closed.

3. Group `e` scope decisions: **closed**.
   Refresh on Wednesday, September 2, 2026 returned `7 decline(s), 0 pending`, so no newly pending row required resolution. The follow-up check passed with `7 current decline(s), 0 error(s)`, and the current owned rows still honestly stand as the same FA-3 and DG-9 scope boundaries recorded in `research/frontier-29-alpha-e-scope-decisions.json`.

## Outcome

The current-byte Step-3 verdicts for group `e` are:

- `finite-dimensional-normed-spaces-and-riesz-lemma` -> `sufficient`
- `vector-fields-flows-and-lie-derivatives` -> `sufficient`

`research/frontier-29-alpha-e-step3-verdicts.json` was updated to match this
verified state on current bytes.
