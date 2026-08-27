# frontier-21 · Alpha step 4 adjudication

Lane: `step4-adjudicate-1`  
Run date: Thursday, August 27, 2026

I read `research/frontier-21-splice-refusals.json`, the generated step-4 task,
the owning batch scaffolds, the cited target pages and items in the current
`research/plan-spec.json`, and the live output of
`node tools/validate-plan.mjs research/plan-spec.json`.

`research/frontier-21-splice-refusals.json` contains one refusing batch:
batch `9`, page `abelian-categories`, with refused `requires`
`localisation-of-modules-and-support` and `uniform-spaces`.

The live `validate-plan` run initially reported three
`[undeclared-prereq]` errors:

- `the-lebesgue-and-riemann-integrals-compared-examples` -> `the-riemann-integral-examples`
- `the-lebesgue-and-riemann-integrals-compared-examples` -> `the-residue-theorem-examples`
- `domains-of-holomorphy-and-pseudoconvexity` -> `convex-and-semicontinuous-functions-on-rn`

## Splice-refusal adjudication

### 1. Refused edge `abelian-categories` -> `localisation-of-modules-and-support`

**Evidence read.**

- The refused A page is `abelian-categories` (order `775`).
- Its current live closure already reaches `limits-and-colimits` and
  `reflective-subcategories-and-the-adjoint-functor-theorems` through
  `preadditive-and-additive-categories-and-biproducts-examples`, but it does
  not reach `localisation-of-modules-and-support`.
- In `research/frontier-21-batch-9.pages.json`, the A page
  `abelian-categories` does not cite any item from
  `localisation-of-modules-and-support`.
- The actual citation is on the companion B page
  `abelian-categories-examples`: item
  `ex-an-exact-functor-between-module-categories` depends on
  `thm-localisation-of-modules-is-exact`, homed on the published A page
  `localisation-of-modules-and-support` (order `158`).

**Disposition.** The refused A-page edge is not genuine on
`abelian-categories`; it belongs on `abelian-categories-examples`.

**Exact edit.**

- Removed `localisation-of-modules-and-support` from the `requires` array of
  `abelian-categories` in `research/frontier-21-batch-9.pages.json`.
- Added `localisation-of-modules-and-support` to the `requires` array of
  `abelian-categories-examples` in `research/frontier-21-batch-9.pages.json`.
- Synced the same B-page `requires` edit into `research/plan-spec.json`.

**Blocker.** None from this edge itself.

### 2. Refused edge `abelian-categories` -> `uniform-spaces`

**Evidence read.**

- The refused A page `abelian-categories` likewise has no A-page item depending
  on `uniform-spaces`.
- The actual citation is again on the companion B page
  `abelian-categories-examples`: item
  `cex-topological-abelian-groups-are-additive-and-not-abelian` depends on
  `def-topological-group`, homed on the published A page `uniform-spaces`
  (order `389`).

**Disposition.** The refused A-page edge is not genuine on
`abelian-categories`; it belongs on `abelian-categories-examples`.

**Exact edit.**

- Removed `uniform-spaces` from the `requires` array of `abelian-categories`
  in `research/frontier-21-batch-9.pages.json`.
- Added `uniform-spaces` to the `requires` array of
  `abelian-categories-examples` in `research/frontier-21-batch-9.pages.json`.
- Synced the same B-page `requires` edit into `research/plan-spec.json`.

**Blocker.** None from this edge itself.

### 3. Latent batch-9 A-page edge `abelian-categories` -> `modules-over-a-pid-and-canonical-forms`

**Evidence read.**

- While inspecting the batch-9 scaffold, I found one real A-page dependency not
  named in the refusal artifact.
- In `research/frontier-21-batch-9.pages.json`, both
  `thm-abelian-groups-form-an-abelian-category` and
  `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category` depend on
  `prop-abelian-groups-are-z-modules`.
- `prop-abelian-groups-are-z-modules` is homed on the published A page
  `modules-over-a-pid-and-canonical-forms` (order `154`).
- The current live closure from `abelian-categories` does not reach
  `modules-over-a-pid-and-canonical-forms`.

**Disposition.** Apply the genuine backward A-page edge now so the next splice
does not introduce a fresh undeclared prerequisite immediately.

**Exact edit.**

- Added `modules-over-a-pid-and-canonical-forms` to the `requires` array of
  `abelian-categories` in `research/frontier-21-batch-9.pages.json`.
- Synced the same `requires` edge into `research/plan-spec.json`.

**Blocker.** This does not close batch 9 by itself; see the latent reading-order
blockers below.

## `validate-plan` undeclared prerequisites

### 4. `the-lebesgue-and-riemann-integrals-compared-examples` -> `the-riemann-integral-examples`

**Evidence read.**

- The live page `the-lebesgue-and-riemann-integrals-compared-examples`
  (order `442`) has closure only through
  `the-lebesgue-and-riemann-integrals-compared`; it does not reach
  `the-riemann-integral-examples`.
- `validate-plan` flags item
  `ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable`.
- In both the live plan and `research/frontier-21-batch-7.pages.json`, that
  item depended on the published B-page item
  `cex-dirichlet-is-not-riemann-integrable`, homed on
  `the-riemann-integral-examples` (order `262`).
- Because the target is an `-examples` page, this cannot be repaired by a page
  edge.
- Published A-page replacements already exist:
  `thm-dirichlet-and-thomae-continuity-sets` on
  `monotone-functions-and-discontinuities` (order `253`),
  `lem-countable-sets-are-null` on
  `cantor-set-baire-and-measure-zero` (order `229`),
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` on
  `the-lebesgue-integral-and-the-convergence-theorems` (order `439`), and
  `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets` on
  `lebesgue-measure-on-euclidean-space` (order `431`).

**Disposition.** Strike the B-page dependency and reroute the item through the
published A-page results.

**Exact edit.**

- Rewrote the item strategy in `research/frontier-21-batch-7.pages.json` and
  `research/plan-spec.json` to cite the A-page route rather than the examples
  page route.
- Replaced the old dependency list with:
  `def-dirichlet-and-thomae-functions`,
  `thm-dirichlet-and-thomae-continuity-sets`,
  `lem-countable-sets-are-null`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets`.
- This also removes the separate B-page dependency on
  `cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral`.

**Blocker.** None from this item after the reroute.

### 5. `the-lebesgue-and-riemann-integrals-compared-examples` -> `the-residue-theorem-examples`

**Evidence read.**

- The same page closure does not reach `the-residue-theorem-examples`.
- `validate-plan` flags item
  `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable`.
- In both the live plan and `research/frontier-21-batch-7.pages.json`, that
  item depended on the published B-page item
  `cex-sine-over-x-is-only-conditionally-convergent`, homed on
  `the-residue-theorem-examples` (order `700`).
- Because the target is an `-examples` page, this cannot be repaired by a page
  edge.
- Published A-page replacements already exist on `improper-integrals`
  (order `267`): `def-absolute-and-conditional-improper-convergence`,
  `thm-dirichlet-test-for-improper-integrals`, and
  `thm-absolute-divergence-from-uniform-tail-mass`.

**Disposition.** Strike the B-page dependency and reroute the item through the
published A-page improper-integral results.

**Exact edit.**

- Rewrote the item strategy in `research/frontier-21-batch-7.pages.json` and
  `research/plan-spec.json` to cite the A-page route rather than the examples
  page route.
- Replaced the old dependency list with:
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `def-absolute-and-conditional-improper-convergence`,
  `thm-dirichlet-test-for-improper-integrals`,
  `thm-absolute-divergence-from-uniform-tail-mass`.

**Blocker.** None from this item after the reroute.

### 6. `domains-of-holomorphy-and-pseudoconvexity` -> `convex-and-semicontinuous-functions-on-rn`

**Evidence read.**

- The live page `domains-of-holomorphy-and-pseudoconvexity` (order `751`)
  initially required `the-hartogs-phenomena`,
  `holomorphic-functions-of-several-variables`,
  `subharmonic-functions-and-the-dirichlet-problem`, and `convexity`; that
  closure omitted `convex-and-semicontinuous-functions-on-rn`.
- `validate-plan` flags item
  `lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point`.
- In both the live plan and `research/frontier-21-batch-8.pages.json`, that
  lemma depends on
  `thm-strict-separation-of-a-point-from-a-closed-convex-set`, homed on the
  published A page `convex-and-semicontinuous-functions-on-rn` (order `403`).
- The target is a genuine earlier A page, not a forward edge and not an
  examples page.

**Disposition.** Apply the backward page edge.

**Exact edit.**

- Added `convex-and-semicontinuous-functions-on-rn` to the `requires` array of
  `domains-of-holomorphy-and-pseudoconvexity` in
  `research/frontier-21-batch-8.pages.json`.
- Synced the same `requires` edge into `research/plan-spec.json`.

**Blocker.** None from this edge itself.

## Post-edit validation

`node tools/validate-plan.mjs research/plan-spec.json` now returns:

```text
3 ERROR(s):
  [intra-order] domains-of-holomorphy-and-pseudoconvexity: thm-holomorphic-pullback-of-plurisubharmonic-functions depends on thm-decreasing-limits-of-plurisubharmonic-functions, which appears LATER on the same page
  [b-leaf] ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable (the-lebesgue-and-riemann-integrals-compared-examples) depends on published ex-a-dense-open-subset-of-the-unit-interval-of-small-measure, which is homed on examples page lebesgue-measure-on-euclidean-space-examples; B pages must be leaves
  [b-leaf] cex-a-null-set-that-is-no-functions-discontinuity-set (the-lebesgue-and-riemann-integrals-compared-examples) depends on published ex-a-dense-null-g-delta-set-containing-the-rationals, which is homed on examples page lebesgue-measure-on-euclidean-space-examples; B pages must be leaves
FAIL
```

The three original undeclared-prerequisite errors are gone.

The four edited JSON files all parse successfully.

## Remaining blockers

### Live blockers still present on disk

- `domains-of-holomorphy-and-pseudoconvexity` still has one same-page
  `intra-order` defect. Repairing it would require a reading-order change or a
  different local dependency route, and this task classifies reading-order
  changes as owner blockers.
- `the-lebesgue-and-riemann-integrals-compared-examples` still has two B-page
  leaf violations:
  `ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable`
  still needs the published B-page witness
  `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure`, and
  `cex-a-null-set-that-is-no-functions-discontinuity-set` still needs the
  published B-page witness
  `ex-a-dense-null-g-delta-set-containing-the-rationals`.
  I did not find A-page replacements for either witness on disk, so these are
  not edge repairs I can apply without inventing new content.

### Latent batch-9 blockers after the withheld splice is replayed

- In the batch-9 scaffold, `thm-abelian-groups-form-an-abelian-category`
  depends on later same-page `thm-modules-over-a-ring-form-an-abelian-category`.
- In the same scaffold, `cex-an-exact-functor-need-not-be-faithful` depends on
  later same-page `thm-a-small-product-of-abelian-categories-is-abelian`.

These are real same-page reading-order defects in `abelian-categories`. They do
not appear in the current live `validate-plan` output only because batch 9 is
still withheld from the last splice. Once the engine replays the splice, they
will surface unless the owning scaffold is repaired separately.

## Summary

- Splice-refusal edges adjudicated from the artifact: `2`, both rehomed from
  `abelian-categories` to `abelian-categories-examples`.
- Additional genuine backward edge found while inspecting the refusing scaffold:
  `abelian-categories -> modules-over-a-pid-and-canonical-forms`.
- Live `undeclared-prereq` errors repaired: `3`.
- Live `validate-plan` result after edits: `FAIL`, reduced from `9` errors to
  `3`, all remaining failures outside the licensed page-edge fixes executed
  here.
- I did not run the mechanical splice; the task assigns that to the engine.
