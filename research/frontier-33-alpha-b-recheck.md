# frontier-33 — group Alpha `b`, Step 3 scaffold recheck

This recheck covers batches `2` and `12`. It verifies the Step-3 review
against the current manifests, coverage records, published prerequisite homes,
and `research/plan-spec.json`; it does not rely on the stale premise in the
batch-2 fix note that the two sequence-space prerequisites are B-page items.

## Dispositions

1. **Batch 2 — RMK backward prerequisite: closed.** The current B-page plan
   entry `dual-spaces-adjoint-operators-and-annihilators-examples` (order
   `288.060`) requires both its A companion and
   `radon-measures-and-the-riesz-markov-kakutani-theorem` (order `288.039`).
   Its manifest's evaluation-functional and Riesz-name items retain the
   corresponding RMK-backed dependencies. The current batch-2 splice dry run
   accepts both pages and reports 41 new items.

2. **Batch 2 — `c_0`/`ell-infinity` home pushback: overturned and closed.**
   `def-c-zero-and-ell-infinity` is listed on the published A page
   `geometric-hahn-banach-and-convex-separation` (order `288.055`), not its
   examples page. Thus its explicit dependencies from
   `lem-finite-truncations-are-dense-in-c0-and-ell-one`,
   `thm-dual-of-c0-is-ell-one`, and
   `thm-complex-dual-of-ell-one-is-ell-infinity` are admissible. No clone,
   rehome, or B-page exception is required.

3. **Batch 2 — norm-closedness pushback: overturned and closed.**
   `lem-c-zero-is-a-closed-subspace-of-ell-infinity` is also listed on that
   same published A page. Its dependency from
   `cex-transpose-range-need-not-be-norm-dense` therefore remains both
   admissible and mathematically load-bearing: the example's conclusion is
   norm closure `c_0`, not merely weak-star density. The current splice dry
   run finds no B-leaf or other dependency error.

4. **Batch 12 — harmonic open-mapping attribution: corrected and closed.**
   Hunter, *Notes on Partial Differential Equations*, §2.3, p.27, gives the
   connected-domain open-mapping consequence directly from the strong maximum
   principle. No assigned PDE-4 item states or uses it, so its deferral to
   `poisson-problems-and-interior-harmonic-estimates` (order `458.009`) remains
   sound.

5. **Batch 2 — stale fix-pass/coverage prose: non-blocking record conflict.**
   The batch-2 Step-3 fix-pass notes still describe the two published
   sequence-space items as B-page homes and consequently call the pair
   insufficient. That premise conflicts with the current published A-page
   inventory, manifest dependencies, plan, and successful splice diagnostic.
   It does not leave a missing prerequisite or block authoring; this recheck
   records the current disposition without editing the batch-owned notes.

6. **Batch 12 — refreshed scope rows: resolved.** The current manifest's
   monotone Cauchy-difference route does not use derivative convergence,
   normal-family compactness, Ascoli compactness, general continuous boundary
   data, measure-valued boundary representation, or the open-mapping result.
   Five rows therefore `stand`: their PDE-6 or published-Ascoli destinations
   are current, or their boundary-measure material remains out of scope. The
   Gantumur Theorem 28 row is an `owner-decision`: the named published PDE-3
   page has the local-uniform-limit theorem but not the normal-family
   subsequence theorem, and adding it to that published predecessor is outside
   this group's authority.

## Pair verdicts

- `dual-spaces-adjoint-operators-and-annihilators`: **sufficient**.
- `maximum-principles-harnack-and-liouville-in-rn`: **sufficient**.

The verdict file was checked after these current-byte checks and already
contains exactly these two sufficient rows.

## Checks run on current bytes

- `scope-decisions refresh --run frontier-33 --group b`, followed by
  `scope-decisions check --run frontier-33 --group b`: 27 current declines,
  0 errors.
- `manifest-deps` over the two assigned manifests: 77 items, 0 normalized,
  0 errors.
- `coverage-checklist --require-destination` over both coverage records: 148
  harvested results, 0 errors, 0 warnings.
- `source-fetch-check --coverage` on each assigned coverage record: 2/2
  batch-2 sources and 3/3 batch-12 sources fetch-verified.
- `content-policy --manifest-only` over the two assigned manifests: 77 scoped
  items, 0 errors, 0 warnings.
- `splice-plan --dry-run --batch 2 --run frontier-33`: 2 pages, 41 new items.
- `splice-plan --dry-run --batch 12 --run frontier-33`: 2 pages already
  correct, 0 new items.
- `validate-plan research/plan-spec.json` was also run. It reports two
  unrelated existing undeclared-prerequisite errors on the algebraic-geometry
  page `dimension-constructible-images-and-dimensions-of-fibres`; it does not
  report an error in either assigned pair and is not claimed as a passing
  whole-plan gate here.

No manifest, plan, published content, or another group's artifact was changed
by this recheck. The unresolved owner-decision is recorded in this group's
scope-decision artifact; it does not block either assigned pair because the
PDE-4 route does not use Theorem 28.
