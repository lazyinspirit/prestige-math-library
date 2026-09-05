# frontier-30 · Alpha group `d` · Step 3 scaffold recheck

Date checked: Saturday, September 5, 2026 (Australia/Sydney).

Scope owned by this dispatch: batches `4`, `7`, and `15` only, covering:

- `the-analytic-hahn-banach-theorem`
- `partial-differential-equations-and-characteristics`
- `distributions-integral-manifolds-and-the-frobenius-theorem`

I re-checked the current disk state against:

- `research/frontier-30-alpha-d-step3-scaffold-review.md`
- `research/frontier-30-batch-4.notes.md`, `research/frontier-30-batch-7.notes.md`, and `research/frontier-30-batch-15.notes.md`, including each `## Step-3 fix pass`
- `research/frontier-30-batch-4.pages.json`, `research/frontier-30-batch-7.pages.json`, and `research/frontier-30-batch-15.pages.json`
- `research/frontier-30-batch-4.coverage.json`, `research/frontier-30-batch-7.coverage.json`, and `research/frontier-30-batch-15.coverage.json`
- the live `research/plan-spec.json`
- `research/frontier-30-alpha-d-scope-decisions.json`
- `research/frontier-30-alpha-d-step3-verdicts.json`

Checks run on current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group d`
  - `scope-decisions: d: 15 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group d`
  - `scope-decisions: 15 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-4.coverage.json research/frontier-30-batch-7.coverage.json research/frontier-30-batch-15.coverage.json`
  - `coverage-checklist: 3 page(s), 118 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-4.pages.json research/frontier-30-batch-7.pages.json research/frontier-30-batch-15.pages.json`
  - `content-policy: 96 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-4.coverage.json`
  - `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-7.coverage.json`
  - `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-15.coverage.json`
  - `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - terminal status: `OK — declared page order is acyclic and consistent...`
  - printed diagnostics: only the standing repository-wide `redundant-prereq` advisories
- spliced the six owned pages into `/tmp/frontier-30-alpha-d-spliced-plan.json`
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-d-spliced-plan.json`
  - terminal status: `OK — declared page order is acyclic and consistent...`
  - printed diagnostics: only the standing repository-wide `redundant-prereq` advisories

## Scope receipt

The refreshed scope ledger is current on disk. No new pending row appeared.

All `15` current decline rows still stand exactly as recorded:

- batch `4`: `7` deferred rows, all still routed to later FA pages
- batch `7`: `7` deferred rows, all still routed to `quasilinear-characteristics-and-cauchy-kovalevskaya`
- batch `15`: `1` out-of-scope row, still matching the DG-10 boundary that leaves Pfaffian/PDE applications to DG-12 and the PDE track

No current scope row required a new resolution.

## Dispositions

### Finding: `the-analytic-hahn-banach-theorem`

Disposition: `sufficient`.

Evidence:

- current manifest size is `13` A-page items and `6` B-page items
- the two batch-4 Step-3 repairs are still present on current bytes: the notes now match the `4` recorded source rows, and the B page still declares `the-duality-of-lp-and-lq` in `requires`, closing the `ex-norming-functionals-in-lp-from-the-measure-duality-page` dependency on `cor-l-p-norm-recovery-by-unit-l-q-pairings`
- the deferred FA rows still land on existing later pages in current plan order: FA-5, FA-7, and FA-11 remain present on disk
- source support remains current enough for authoring: `4/4` recorded source URLs are fetch-verified
- the fresh merged-plan validation for `/tmp/frontier-30-alpha-d-spliced-plan.json` exited `0` and ended with the standard `OK` line for `704` pages with item lists

Changed scaffold record: none.

### Finding: `partial-differential-equations-and-characteristics`

Disposition: `sufficient`.

Evidence:

- current manifest size is `21` A-page items and `8` B-page items
- batch `7` still matches its fix-pass pushback: all seven scope-decision rows remain exact deferments to `quasilinear-characteristics-and-cauchy-kovalevskaya` at order `288.143`
- the no-id Teschl provenance repair is still present on current bytes: the landing-page headings remain `inline` route provenance rather than `included` theorem backing in `research/frontier-30-batch-7.coverage.json`
- source support remains current enough for authoring: `3/3` recorded source URLs are fetch-verified
- the fresh merged-plan validation for `/tmp/frontier-30-alpha-d-spliced-plan.json` exited `0` and ended with the standard `OK` line for `704` pages with item lists

Changed scaffold record: none.

### Finding: `distributions-integral-manifolds-and-the-frobenius-theorem`

Disposition: `sufficient`.

Evidence:

- current manifest size is `38` A-page items and `10` B-page items
- batch `15` still has no pending scope row, and its one out-of-scope Lee heading remains an honest DG-10 boundary call
- the batch-15 scaffold-fix closure is present on current bytes: `distributions-integral-manifolds-and-the-frobenius-theorem-examples` now declares both `the-seifert-van-kampen-theorem` and its companion A page in `requires`
- `ex-irrational-linear-foliation-of-the-two-torus` still depends on `def-two-dimensional-torus`, whose published home remains `the-seifert-van-kampen-theorem` at order `297`, so that dependency is now honestly inside the B-page's declared closure
- the fresh merged-plan validation for `/tmp/frontier-30-alpha-d-spliced-plan.json` exited `0` and ended with the standard `OK` line for `704` pages with item lists
- source support remains current enough for authoring: `3/3` recorded source URLs are fetch-verified

Changed scaffold record: none.

## Verdict file

`research/frontier-30-alpha-d-step3-verdicts.json` now matches the current-byte
recheck:

- `the-analytic-hahn-banach-theorem` -> `sufficient`
- `partial-differential-equations-and-characteristics` -> `sufficient`
- `distributions-integral-manifolds-and-the-frobenius-theorem` -> `sufficient`
