# frontier-19 · Alpha step 4 adjudication

Lane: `step4-adjudicate-1`  
Run date: Tuesday, August 25, 2026

I listed `research/frontier-19-dispatch/` before deriving anything. This lane had
only `alpha-step4-adjudicate-1.prompt.md`; there was no prior result/log to
inherit.

## Splice refusals

### 1. `isolated-singularities-and-laurent-series-examples` → `the-complex-exponential-and-eulers-formula`

**Evidence read.** In `research/frontier-19-batch-8.pages.json`, the examples
page has three items that cite page-189 results directly:

- `cex-sine-one-over-z-is-essential` depends on
  `def-complex-trigonometric-and-hyperbolic-functions` and
  `thm-complex-trigonometric-hyperbolic-dictionary`.
- `cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero` depends on
  those same two items.
- `cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms`
  depends on those same two items.

Those items are homed on `the-complex-exponential-and-eulers-formula`
(order 189), strictly below this B page (order 318).

**Decision.** Apply.

**Exact edit.** Added
`the-complex-exponential-and-eulers-formula` to the page's `requires` in
`research/plan-spec.json`.

### 2. `isolated-singularities-and-laurent-series-examples` → `sine-cosine-and-the-definition-of-pi`

**Evidence read.** The same page's item
`cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero`
depends on `thm-sine-cosine-zero-sets-and-fundamental-period`, homed on
`sine-cosine-and-the-definition-of-pi` (order 179).

**Decision.** Apply.

**Exact edit.** Added `sine-cosine-and-the-definition-of-pi` to the page's
`requires` in `research/plan-spec.json`.

### 3. `isolated-singularities-and-laurent-series-examples` → `complex-differentiability-and-cauchy-riemann`

**Evidence read.** Two items on the page,
`ex-residue-of-exp-over-z-cubed-by-derivative-formula` and
`cex-exp-one-over-z-is-essential-and-omits-zero`, both depend on
`thm-complex-exponential-is-entire-with-derivative-itself`, homed on
`complex-differentiability-and-cauchy-riemann` (order 303).

**Decision.** Apply.

**Exact edit.** Added `complex-differentiability-and-cauchy-riemann` to the
page's `requires` in `research/plan-spec.json`.

### 4. `harmonic-functions-and-the-poisson-integral` → `complex-differentiability-and-cauchy-riemann`

**Evidence read.** In `research/frontier-19-batch-8.pages.json`, the harmonic
page cites page-303 items throughout its actual proof spine:

- `thm-local-holomorphic-potential-for-harmonic-functions` depends on
  `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic`.
- `thm-harmonic-conjugate-on-homologically-simply-connected-domains` depends on
  `thm-algebra-of-complex-derivatives` and
  `cor-complex-differentiability-implies-continuity`.
- `thm-conformal-invariance-of-plane-harmonicity` depends on
  `thm-chain-rule-for-complex-derivatives` and
  `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps`.

Batch-8 notes already recorded this as `Finding 2` and named the same page.
Order 303 is strictly below order 327.

**Decision.** Apply.

**Exact edit.** Added `complex-differentiability-and-cauchy-riemann` to the
page's `requires` in `research/plan-spec.json`.

### 5. `harmonic-functions-and-the-poisson-integral` → `analyticity-liouville-and-morera`

**Evidence read.** The same page directly cites page-311 items:

- `thm-plane-harmonic-functions-are-smooth-and-real-analytic` depends on
  `cor-holomorphic-functions-are-real-analytic-and-smooth`.
- `thm-mean-value-property-for-plane-harmonic-functions` and
  `lem-poisson-kernel-properties-on-the-disc` depend on
  `cor-holomorphic-mean-value-property`.
- `cor-liouville-theorem-for-plane-harmonic-functions` depends on
  `thm-liouville-bounded-entire-function`.

Batch-8 notes `Finding 2` also names this exact prerequisite. Order 311 is
strictly below order 327.

**Decision.** Apply.

**Exact edit.** Added `analyticity-liouville-and-morera` to the page's
`requires` in `research/plan-spec.json`.

### 6. `harmonic-functions-and-the-poisson-integral` → `isolated-singularities-and-laurent-series`

**Evidence read.** The item
`thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions`
depends on `thm-removable-singularity-characterizations`, homed on
`isolated-singularities-and-laurent-series` (order 317). Batch-8 notes
`Finding 2` names the same dependency and says it is an earlier same-batch
prerequisite for the bounded removable-harmonic-singularity theorem.

**Decision.** Apply.

**Exact edit.** Added `isolated-singularities-and-laurent-series` to the page's
`requires` in `research/plan-spec.json`.

### 7. `harmonic-functions-and-the-poisson-integral-examples` → `the-complex-exponential-and-eulers-formula`

**Evidence read.** The B page item
`cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane`
depends on `thm-no-continuous-logarithm-on-the-punctured-complex-plane`,
homed on `the-complex-exponential-and-eulers-formula` (order 189).

**Decision.** Apply.

**Exact edit.** Added
`the-complex-exponential-and-eulers-formula` to the page's `requires` in
`research/plan-spec.json`.

### 8. `harmonic-functions-and-the-poisson-integral-examples` → `complex-differentiability-and-cauchy-riemann`

**Evidence read.** Multiple B-page items depend on page-303 results:

- `ex-real-parts-of-z-powers-are-harmonic`,
- `ex-a-harmonic-conjugate-of-x-squared-minus-y-squared`,
- `ex-poisson-integral-of-cos-theta`,
- `cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture`.

The cited items are `thm-complex-polynomials-and-rational-functions-are-holomorphic`
and `thm-c2-holomorphic-components-are-harmonic`, both homed on
`complex-differentiability-and-cauchy-riemann` (order 303).

**Decision.** Apply.

**Exact edit.** Added `complex-differentiability-and-cauchy-riemann` to the
page's `requires` in `research/plan-spec.json`.

## `validate-plan` prerequisite decisions

### 9. `geometric-actions-svarc-milnor-and-growth` → `modules-over-a-pid-and-canonical-forms`

**Evidence read.** The A-page definition
`def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group`
depends on
`cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`
and `def-free-rank-of-a-finitely-generated-pid-module`, both homed on
`modules-over-a-pid-and-canonical-forms` (order 110). That is a genuine
backward prerequisite; without it the page closure does not contain the module
structure results used in the definition.

**Decision.** Apply.

**Exact edit.** Added `modules-over-a-pid-and-canonical-forms` to
`research/frontier-19-batch-1.pages.json` and synced the same `requires` edge
into `research/plan-spec.json`.

### 10. `geometric-actions-svarc-milnor-and-growth-examples` → strike `ex-heisenberg-group-is-nilpotent-of-class-two`

**Evidence read.** The only offending dependency is the B-page example
`ex-heisenberg-group-is-nilpotent-of-class-two` from
`composition-series-and-solvable-groups-examples`. The current strategy of
`ex-growth-degree-of-the-discrete-heisenberg-group` uses that item only as a
witness that the discrete Heisenberg group has nilpotency class two.

That witness is elementary and local to the example: the example can compute the
commutator subgroup and lower-central quotients directly. This is exactly the
class where adding a B-page edge would hide the real repair.

**Decision.** Strike the B-page dependency and rebuild the route inline.

**Exact edit.** Removed `ex-heisenberg-group-is-nilpotent-of-class-two` from the
deps of `ex-growth-degree-of-the-discrete-heisenberg-group` in
`research/frontier-19-batch-1.pages.json`, rewrote the strategy to compute the
Heisenberg commutators directly, and synced that item into
`research/plan-spec.json`.

### 11. `solvability-by-radicals-and-kummer-theory` → strike `ex-composition-and-derived-series-of-s-three` and `ex-composition-and-derived-series-of-s-four`

**Evidence read.** The corollary
`cor-polynomials-of-degree-at-most-four-are-solvable-by-radicals` depended on
the published B-page witnesses for `S_3` and `S_4`. Those are illegal
dependencies because examples pages are leaves. The current strategy really uses
the mathematical fact that `S_n` is solvable for `n<=4`, not those particular
example items as such.

The published A-page closure already contains the ingredients needed to state
that fact directly: `thm-solvable-iff-it-has-an-abelian-factor-series`,
`def-alternating-group`,
`cor-alternating-group-is-normal-and-has-half-the-elements`,
`cor-order-of-a-quotient-group`,
`cor-prime-order-group-is-cyclic`, and
`lem-conjugating-a-cycle-relabels-its-entries`.

**Decision.** Strike the B-page dependencies and add the missing A-page lemma.

**Exact edit.**

- Added `lem-symmetric-groups-up-to-four-are-solvable` to
  `research/frontier-19-batch-3.pages.json`.
- Rewired `cor-polynomials-of-degree-at-most-four-are-solvable-by-radicals` to
  depend on that lemma plus the existing subgroup-solvability theorem.
- Synced the updated A page into `research/plan-spec.json`.

### 12. `localisation-of-modules-and-support-examples` → strike `ex-fraction-field-of-the-integers-is-the-rationals`

**Evidence read.** The B-page example
`ex-nakayama-finite-generation-is-essential` cited the examples-page item
`ex-fraction-field-of-the-integers-is-the-rationals`. Its strategy does not
need a separate B-page witness: it can identify `\mathbb Z_{(p)}` inside
`\mathbb Q` directly from the localisation definition together with the
field-of-fractions embedding theorem already in scope.

**Decision.** Strike the B-page dependency and make the identification explicit
in the strategy.

**Exact edit.** Removed `ex-fraction-field-of-the-integers-is-the-rationals`
from that example's deps, rewrote the strategy accordingly, updated
`research/frontier-19-batch-4.pages.json`, and synced the B page into
`research/plan-spec.json`.

### 13. `non-measurable-sets-and-the-cost-of-choice` → strike `ex-free-ultrafilter-on-naturals`

**Evidence read.** The theorem
`thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` is conditional on a
free ultrafilter already being given. Its proof uses invariance under finite
modification, the zero-one lemma, and the ultrafilter characterization for the
complement argument. It does not use the B-page existence witness
`ex-free-ultrafilter-on-naturals`.

**Decision.** Strike the dependency as unnecessary.

**Exact edit.** Removed `ex-free-ultrafilter-on-naturals` from the theorem's
deps in `research/frontier-19-batch-7.pages.json` and synced the A page into
`research/plan-spec.json`.

### 14. `non-measurable-sets-and-the-cost-of-choice-examples` → strike `cex-dense-set-of-measure-zero`

**Evidence read.** The false statement
`fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist`
was repaired at step 3 away from an AI-generated target, but it still depended
on the B-page item `cex-dense-set-of-measure-zero`, which is illegal as a leaf.

The actual route needed is A-page material:

- `prop-countable-subsets-of-rn-are-lebesgue-null` gives `\lambda_1(\mathbb Q)=0`;
- `lem-q-and-irrationals-dense-r` gives density of `\mathbb Q` and its complement;
- the page's own inner-measure criterion then gives full inner measure to the
  complement on each bounded interval.

**Decision.** Strike the B-page dependency and replace it with the A-page route.

**Exact edit.** Rewrote the strategy and replaced the deps of that false
statement with
`prop-countable-subsets-of-rn-are-lebesgue-null`,
`lem-q-and-irrationals-dense-r`,
`thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree`,
`def-lebesgue-inner-measure-on-r`, and
`thm-lebesgue-measure-of-a-box-of-every-kind` in
`research/frontier-19-batch-7.pages.json`, then synced the B page into
`research/plan-spec.json`.

## Additional `validate-plan` cleanup needed to make the prerequisite decisions visible

### 15. Batch-4 kind schema normalization

**Evidence read.** `validate-plan` reported forty-six `prefix` errors because the
batch-4 page used short item kinds (`def`, `thm`, `lem`, `cor`, `ex`) instead of
the schema's full names.

**Decision.** Normalize mechanically.

**Exact edit.** Rewrote the item `kind` fields on both
`research/frontier-19-batch-4.pages.json` and the corresponding pages already
present in `research/plan-spec.json` to
`definition`, `theorem`, `lemma`, `corollary`, and `example`.

### 16. Batch-4 intra-order repair

**Evidence read.** `validate-plan` reported
`[intra-order] localisation-of-modules-and-support: thm-support-of-a-tensor-product-of-finite-modules depends on thm-nakayama-lemma, which appears LATER on the same page`.

This is a real ordering defect, not a page-level prerequisite problem. The
support-of-tensor theorem genuinely cites Nakayama, so the honest repair is to
move it.

**Decision.** Reorder.

**Exact edit.** Moved
`thm-support-of-a-tensor-product-of-finite-modules` to after
`cor-minimal-generators-over-a-local-ring` in
`research/frontier-19-batch-4.pages.json` and synced the same order into
`research/plan-spec.json`.

## Validation

I reran:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result: **OK**.

The specific step-4 failure classes are now cleared:

- no `[undeclared-prereq]`
- no `[b-leaf]`
- no `[intra-order]`
- no `[prefix]`

There were no forward-edge owner blocks in this pass.
