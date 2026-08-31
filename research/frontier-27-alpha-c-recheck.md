# frontier-27 · Alpha group `c` · Step 3 recheck

Group `c` owns batch `8` in `research/frontier-27-alpha-groups.json`:
`sard-theorem-and-transversality` and
`tensor-fields-exterior-algebra-and-differential-forms`.

I re-read the governing task files on Monday, August 31, 2026, then verified
the current bytes in:

- `research/frontier-27-alpha-c-step3-scaffold-review.md`
- `research/frontier-27-batch-8.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-8.pages.json`
- `research/frontier-27-batch-8.coverage.json`
- `research/plan-spec.json`
- `research/plan-differential-geometry-track.md`
- `research/frontier-27-alpha-c-scope-decisions.json`
- `research/frontier-27-alpha-c-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group c`
  - result: `scope-decisions: c: 11 decline(s), 1 pending`
- resolved the single reopened row in
  `research/frontier-27-alpha-c-scope-decisions.json`
  - row: `Lie Derivatives of Tensor Fields`
  - resolution: `stands`
- `node tools/scope-decisions.mjs check --run frontier-27 --group c`
  - result: `scope-decisions: 11 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-27-batch-8.coverage.json --require-destination`
  - result: `coverage-checklist: 2 page(s), 119 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-8.pages.json`
  - result: `content-policy: 116 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-8.coverage.json --stamp`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- exact manifest-to-coverage audit over the two owned A-page manifests
  - result: `sard-theorem-and-transversality` has `44/44` A-page items carrier-covered; `tensor-fields-exterior-algebra-and-differential-forms` has `50/50` A-page items carrier-covered

## Dispositions

1. `B8-1` under-harvest on `sard-theorem-and-transversality`: **closed**.
   The accepted coverage repair still stands on current disk. The live
   manifest still carries the same `44` A-page items in
   `research/frontier-27-batch-8.pages.json`, and the current
   `research/frontier-27-batch-8.coverage.json` now includes exact carrier
   rows for the previously missing DG-6 null-set, Sard, transversality, and
   false-statement items. My direct manifest-to-coverage audit on current bytes
   reports `44/44` A-page items carrier-covered, and `coverage-checklist`
   passes with `0` errors and `0` warnings. The DG-6 design block in
   `research/plan-differential-geometry-track.md` still matches that route, so
   no further manifest or coverage repair is owed.

2. `B8-2` under-harvest on
   `tensor-fields-exterior-algebra-and-differential-forms`: **closed**. The
   accepted coverage repair still stands on current disk. The live manifest
   still carries the same `50` A-page items in
   `research/frontier-27-batch-8.pages.json`, and the current
   `research/frontier-27-batch-8.coverage.json` now includes exact carrier
   rows for the previously missing multilinear-tensor, exterior-power,
   tensor-bundle, differential-form, and false-statement items. My direct
   manifest-to-coverage audit on current bytes reports `50/50` A-page items
   carrier-covered, and `coverage-checklist` passes with `0` errors and `0`
   warnings. The DG-11 design block in
   `research/plan-differential-geometry-track.md` still matches that route, so
   no further manifest or coverage repair is owed.

3. `B8-3` routing ambiguity for `Lie Derivatives of Tensor Fields`: **closed**.
   The accepted local repair now stands on current disk. The live coverage row
   in `research/frontier-27-batch-8.coverage.json` defers Lee's heading to
   `the-exterior-derivative-and-cartan-calculus`. That destination is supported
   by the current plan text: DG-11 still stops at pullback, wedge, and
   interior-product operations and defers Lie/Cartan calculus, while DG-12
   explicitly owns tensor-field Lie derivatives at items `14` through `20`.
   DG-9 still contains one stale forward-reference sentence pointing tensor
   Lie derivatives to DG-11, but the more specific current owning block is the
   DG-12 section, so this is no longer a pending scope-decision conflict.

4. Group `c` scope decisions: **closed**.
   After refresh, one row reopened because the tensor-field Lie-derivative
   deferment changed destination on current bytes. I resolved that row as
   `stands`, then reran `scope-decisions check`, which now passes with `11`
   current decline rows and `0` errors. The remaining ten prior `stands` rows
   also still match the current bytes: DG-6 still defers Whitney
   embedding/approximation/tubular-neighbourhood material to DG-7, the
   boundary-sensitive transversality extension theorem remains out of scope
   until the later boundary block, and DG-11 still defers the exterior
   derivative and form-level Lie/Cartan calculus to DG-12.

## Outcome

Both owned A pages are sufficient on the current bytes. I updated
`research/frontier-27-alpha-c-step3-verdicts.json` to match that verified
state:

- `sard-theorem-and-transversality` -> `sufficient`
- `tensor-fields-exterior-algebra-and-differential-forms` -> `sufficient`
