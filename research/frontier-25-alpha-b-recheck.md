# frontier-25 · Alpha group `b` · Step 3 recheck

Group `b` owns batches `2`, `3`, and `9` in
`research/frontier-25-alpha-groups.json`: the four A pages
`the-moore-penrose-pseudoinverse-and-regularised-least-squares`,
`eigenvalue-iterations-and-the-qr-algorithm`,
`the-radon-nikodym-theorem-and-lebesgue-decomposition`, and
`rank-theorems-and-embedded-submanifolds`.

I re-read the governing task files on Sunday, August 30, 2026, then verified
the current bytes in:

- `research/frontier-25-alpha-b-step3-scaffold-review.md`
- `research/frontier-25-batch-2.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-3.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-9.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-2.pages.json`
- `research/frontier-25-batch-3.pages.json`
- `research/frontier-25-batch-9.pages.json`
- `research/frontier-25-batch-2.coverage.json`
- `research/frontier-25-batch-3.coverage.json`
- `research/frontier-25-batch-9.coverage.json`
- `research/plan-spec.json`
- `research/plan-algebra-track-expansion-v2.md`
- `research/plan-measure-theory-track.md`
- `research/plan-probability-track.md`
- `research/plan-differential-geometry-track.md`
- `research/frontier-25-alpha-b-scope-decisions.json`
- `research/frontier-25-alpha-b-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-25 --group b`
  - result: `scope-decisions: b: 13 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-25 --group b`
  - result: `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-2.coverage.json research/frontier-25-batch-3.coverage.json research/frontier-25-batch-9.coverage.json --require-destination`
  - result: `coverage-checklist: 4 page(s), 130 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-2.pages.json research/frontier-25-batch-3.pages.json research/frontier-25-batch-9.pages.json`
  - result: `content-policy: 135 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-2.coverage.json`
  - result: `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-3.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-9.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- temporary splice of the three owned batch manifests into `research/plan-spec.json`
  - artifact: `/private/tmp/frontier-25-alpha-b-spliced-plan.json`
- `node tools/validate-plan.mjs /private/tmp/frontier-25-alpha-b-spliced-plan.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-b-spliced-plan.json --page the-moore-penrose-pseudoinverse-and-regularised-least-squares`
  - result: `18` external deps, all `published`; `0` planned-later, homeless, or unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-b-spliced-plan.json --page eigenvalue-iterations-and-the-qr-algorithm`
  - result: `16` external deps, all `published`; `0` planned-later, homeless, or unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-b-spliced-plan.json --page the-radon-nikodym-theorem-and-lebesgue-decomposition`
  - result: `40` external deps, all `published`; `0` planned-later, homeless, or unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-b-spliced-plan.json --page rank-theorems-and-embedded-submanifolds`
  - result: `38` external deps, all `published`; `0` planned-later, homeless, or unresolved

No newly pending scope row appeared after refresh, so no further
scope-decision resolution was required.

## Dispositions

1. `eigenvalue-iterations-and-the-qr-algorithm` / `B2-1`: **closed**.
   The accepted repair is still present on current disk. In
   `research/frontier-25-batch-2.pages.json`,
   `prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient`
   still appears before
   `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration`,
   and the latter still depends on the former. The combined temp-splice
   `validate-plan` run closes the original same-page `[intra-order]` defect,
   and the current LA-19 route in
   `research/plan-algebra-track-expansion-v2.md` still matches the manifest's
   explicit-hypothesis eigenvalue-iteration scope. No further manifest or
   coverage edit is owed.

2. `the-radon-nikodym-theorem-and-lebesgue-decomposition` / `B3-1`: **closed**.
   The accepted repair is still present on current disk. In
   `research/frontier-25-batch-3.pages.json`,
   `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness`
   now uses the singleton-mass contradiction route and depends only on
   `def-counting-measure`, `prop-counting-measure-is-a-measure`,
   `def-measure-with-density`, and
   `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, so the
   foreign B-page dependency is gone. The current coverage file still backs the
   counterexample with Hunter's `Example 6.23` and `Example 6.28`, and the
   temp-splice `validate-plan` run reports no `[b-leaf]` defect. The live MT-13
   and PT-10 design sections still keep conditional expectation on the later
   `conditional-expectation` page rather than widening this scalar page.

3. Batch `9` Step-3 fix pass: **closed with no finding owed**.
   The stable Alpha review issues no numbered `B9-*` finding, and
   `research/frontier-25-batch-9.notes.md` records that accurately. The live
   manifest still matches the current DG-4 route: it keeps
   `constant-rank-submersions-and-regular-level-sets` in `requires`, inherits
   the intrinsic differential from `tangent-cotangent-and-the-differential`,
   and does not re-home the RC-2 Euclidean regular-level-set examples. The
   page therefore remains sufficient on the current bytes with no additional
   Step-3 repair.

4. Group `b` scope decisions: **closed**.
   After refresh and check, `research/frontier-25-alpha-b-scope-decisions.json`
   still carries `13` current decline rows and `0` pending rows, all resolved
   as `stands`. That matches the current design and plan: LA-18 remains scoped
   to the unshifted Tikhonov / spectral-filter route, LA-19 remains scoped to
   exact-iteration convergence rather than floating-point QR stability, MT-13
   still defers the conditional-expectation application to PT-10's
   `conditional-expectation`, and DG-4 still defers the Euclidean level-set
   examples to RC-2 and the intrinsic derivative definition to DG-3.

## Outcome

All four owned A pages remain sufficient on the current bytes, and
`research/frontier-25-alpha-b-step3-verdicts.json` already matches that
verified state:

- `the-moore-penrose-pseudoinverse-and-regularised-least-squares` -> `sufficient`
- `eigenvalue-iterations-and-the-qr-algorithm` -> `sufficient`
- `the-radon-nikodym-theorem-and-lebesgue-decomposition` -> `sufficient`
- `rank-theorems-and-embedded-submanifolds` -> `sufficient`

No Step-3 scaffold blocker remains for Alpha group `b`.
