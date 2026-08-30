# frontier-24 · Alpha group `c` · Step 3 recheck

Group `c` owns batches `4`, `5`, and `6` in
`research/frontier-24-alpha-groups.json`: MT-12
`signed-and-complex-measures-hahn-and-jordan`, CA-16
`the-riemann-mapping-theorem`, CA-23 `bloch-schottky-and-picard`, CA-19
`mittag-leffler-and-runges-theorem`, and CA-21 `the-gamma-function`.

I re-read the governing task files on Saturday, August 29, 2026, then
verified the current bytes in:

- `research/frontier-24-alpha-c-step3-scaffold-review.md`
- `research/frontier-24-batch-4.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-6.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-4.pages.json`
- `research/frontier-24-batch-5.pages.json`
- `research/frontier-24-batch-6.pages.json`
- `research/frontier-24-batch-4.coverage.json`
- `research/frontier-24-batch-5.coverage.json`
- `research/frontier-24-batch-6.coverage.json`
- `research/plan-spec.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group c`
  - result: `scope-decisions: c: 4 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-24 --group c`
  - result: `scope-decisions: 4 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-24-batch-4.coverage.json research/frontier-24-batch-5.coverage.json research/frontier-24-batch-6.coverage.json --require-destination`
  - result: `coverage-checklist: 5 page(s), 145 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-4.pages.json research/frontier-24-batch-5.pages.json research/frontier-24-batch-6.pages.json`
  - result: `content-policy: 145 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-4.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-5.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-6.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...`
    and reports only the standing repository-wide `redundant-prereq`
    advisories

## Dispositions

### `bloch-schottky-and-picard` / finding `C5-1`

- Disposition: **closed**.
- Evidence: the live CA-23 manifest entry
  `rem-agreement-between-classical-and-nevanlinna-picard-theorems` now carries
  only backward `deps` on `thm-little-picard-theorem` and
  `thm-great-picard-theorem`, with no `forward_refs` field.
- Evidence: `research/plan-spec.json` still exposes no live target item
  `cor-nevanlinna-picard-theorems`, while
  `research/plan-complex-analysis-track.md` still keeps that result only in the
  later CA-NV-2 design block. The batch-5 notes therefore describe the seam
  honestly as non-load-bearing later-proof agreement rather than a current
  formal forward edge.
- Coverage/plan check: batch `5` remains source-backed on current bytes with
  `5/5` fetch-verified sources, `coverage-checklist` passes group-wide, and
  `validate-plan` ends cleanly with no forward-reference failure.

## Outcome

All five owned A pages remain closed on the current bytes:

- `signed-and-complex-measures-hahn-and-jordan` -> `sufficient`
- `the-riemann-mapping-theorem` -> `sufficient`
- `bloch-schottky-and-picard` -> `sufficient`
- `mittag-leffler-and-runges-theorem` -> `sufficient`
- `the-gamma-function` -> `sufficient`

The refreshed scope ledger is current with `4` decline rows and `0` pending
rows. `research/frontier-24-alpha-c-step3-verdicts.json` already matches this
verified state, so no verdict downgrade or missing-list edit is owed.
