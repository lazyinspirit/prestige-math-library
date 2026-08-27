# frontier-20 · Alpha step 4 adjudication

Lane: `step4-adjudicate-1`  
Run date: Wednesday, August 26, 2026

I read `research/frontier-20-splice-refusals.json`, the generated step-4 task,
the owning batch scaffolds, the cited published target items, and the current
`research/plan-spec.json`. `research/frontier-20-splice-refusals.json` contains
an empty `refusals` array, so this lane adjudicates only the undeclared
prerequisites emitted by `node tools/validate-plan.mjs research/plan-spec.json`.

No target below is a forward edge, a new page, a reading-order change, or an
`-examples` page. All three targets are published A pages with orders strictly
below the declaring pages, so each repair is a licensed backward prerequisite.

## `validate-plan` undeclared prerequisites

### 1. `prime-spectra-and-radicals` → `algebraic-extensions-degree-and-finite-fields`

**Evidence read.**

- `validate-plan` flags `lem-radical-is-an-ideal`.
- In `research/frontier-20-batch-6.pages.json`, that item depends on
  `thm-binomial-theorem-over-a-commutative-ring`.
- The item strategy says: “Use the binomial theorem for sums, ideal absorption
  for scalar multiples, and exponent nesting for idempotence and monotonicity.”
- `thm-binomial-theorem-over-a-commutative-ring` is homed on the published A
  page `algebraic-extensions-degree-and-finite-fields` (order `96`).
- The current page closure from
  `prime-spectra-and-radicals -> localisation-of-modules-and-support-examples`
  does not include that page.

**Disposition.** Apply the backward page edge.

**Exact edit.**

- Added `algebraic-extensions-degree-and-finite-fields` to the `requires` array
  of `prime-spectra-and-radicals` in
  `research/frontier-20-batch-6.pages.json`.
- Synced the same `requires` edge into `research/plan-spec.json`.

**Blocker.** None.

### 2. `the-lebesgue-integral-and-the-convergence-theorems` → `convexity`

**Evidence read.**

- `validate-plan` flags `thm-jensens-integral-inequality`.
- In `research/frontier-20-batch-2.pages.json`, that theorem depends on
  `thm-supporting-lines-for-convex-functions`.
- The item strategy says: “Take a supporting line to `\varphi` at
  `\int f\,d\mu`, integrate its inequality against the probability measure, and
  use the normalization `\mu(X)=1`.”
- `thm-supporting-lines-for-convex-functions` is homed on the published A page
  `convexity` (order `157`).
- `research/frontier-20-batch-2.notes.md` already records the design/spec
  mismatch: the MT-8 design requires `convexity`, but the generated spec gave
  only `measurable-functions-and-simple-approximation-examples`.
- The current closure from
  `the-lebesgue-integral-and-the-convergence-theorems -> measurable-functions-and-simple-approximation-examples`
  omits `convexity`.

**Disposition.** Apply the backward page edge.

**Exact edit.**

- Added `convexity` to the `requires` array of
  `the-lebesgue-integral-and-the-convergence-theorems` in
  `research/frontier-20-batch-2.pages.json`.
- Synced the same `requires` edge into `research/plan-spec.json`.

**Blocker.** None.

### 3. `hyperbolic-spaces-and-hyperbolic-groups` → `sylow-theorems-and-nilpotent-groups`

**Evidence read.**

- `validate-plan` flags
  `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic`.
- In `research/frontier-20-batch-4.pages.json`, that theorem depends on
  `def-centralizer-of-a-subgroup`.
- The theorem strategy uses centralizing elements preserving a quasi-axis and
  passing to an action on the axis; the dependency is the actual notion of the
  centralizer, not a disposable example witness.
- `def-centralizer-of-a-subgroup` is homed on the published A page
  `sylow-theorems-and-nilpotent-groups` (order `70`).
- `research/frontier-20-batch-4.notes.md` explicitly says the GT-12 source set
  carries the hyperbolic-group centralizer branch, so the concept is in-scope.
- The current closure from
  `hyperbolic-spaces-and-hyperbolic-groups -> geometric-actions-svarc-milnor-and-growth-examples`
  does not include `sylow-theorems-and-nilpotent-groups`.

**Disposition.** Apply the backward page edge.

**Exact edit.**

- Added `sylow-theorems-and-nilpotent-groups` to the `requires` array of
  `hyperbolic-spaces-and-hyperbolic-groups` in
  `research/frontier-20-batch-4.pages.json`.
- Synced the same `requires` edge into `research/plan-spec.json`.

**Blocker.** None.

## Validation result

After the three edits, `node tools/validate-plan.mjs research/plan-spec.json`
returns:

`OK — declared page order is acyclic and consistent; no item-level cycles,
forward references, B-page dependencies, or unresolved ids among the 432
page(s) with item lists.`

The three undeclared-prerequisite errors are gone.

## Summary

- Splice refusals file: empty; no declared-requires refusal to adjudicate.
- Undeclared prerequisites repaired: `3`.
- Dependency strikes: `0`.
- Forward-edge / reading-order blocker: none.
