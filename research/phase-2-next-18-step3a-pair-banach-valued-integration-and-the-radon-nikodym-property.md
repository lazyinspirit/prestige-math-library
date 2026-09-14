# Step 3a scope review — Banach-valued integration and the Radon–Nikodým property

Run: `phase-2-next-18`  
A page: `banach-valued-integration-and-the-radon-nikodym-property`  
B page: `banach-valued-integration-and-the-radon-nikodym-property-examples`

## Decision

**Sufficient.** The planned pair adequately covers its intended subject and
needs no enrichment or merger.

## Evidence

- The current batch manifest retains every item in the controlling FA-12 prose
  design: all 21 designed A-page results and all 8 designed B-page examples.
  The A page has 29 items because it also makes the long arguments explicit
  through vector-variation, the two dentability directions, isomorphism
  invariance, separable determination, interval testing, the curve/measure
  correspondence, and a local Hilbert-reflexivity supplier.
- The resulting progression is adequate for the title and the library's role:
  simple Banach-valued integration, strong versus weak measurability and the
  Pettis criterion, the Bochner integrability criterion, norm control,
  dominated convergence and bounded-map functoriality; then vector measures,
  variation, RNP, dentability and Lipschitz differentiability; then the main
  positive and negative classes, the `c0` non-dual consequence, and the
  Dunford–Pettis criterion. The B page supplies the designed concrete integral,
  measurability counterexample, density-induced measure, Hilbert example,
  `c0` slice computation, `ell-one`/nonatomic `L1` warning, scalar/vector RN
  seam, and uniformly-integrable/spike comparison.
- This inventory discharges the two relevant deferred-functional-analysis
  promises, RNP and `c0` not being a dual, while providing the Bochner
  integration interface required later by functional calculus and compact or
  locally compact group representation theory. Pettis integration, general
  vector-valued Fubini theory, martingale geometry beyond the RNP route, and
  metric/Carnot-domain differentiability are not promises of FA-12 and are not
  needed by these downstream interfaces.
- Coverage records four complete, fetch-verified sources at exact locators:
  Teschl, §11.6, printed pp. 332–336; Pisier, Chapter 2 §2.1, printed pp. 33–44;
  Brezis, Theorem 4.30 and Problem 23 with its solution; and Cheeger–Kleiner,
  the RNP introduction and the interval-curve example. I reread the complete
  relevant Teschl and Pisier arguments. They confirm that the manifest includes
  the elementary Bochner theory, the vector-density variation identity, the
  dentability/RNP equivalence, separable determination, interval testing, and
  the reflexive/separable-dual examples.
- The source dispositions omit no result needed for the intended subject. The
  closed-unbounded-operator commutation extension is correctly deferred to
  `unbounded-self-adjoint-operators-and-stones-theorem`; martingale
  p-independence and its `Lp` refinement are later martingale geometry; and
  Pansu differentiability on Carnot groups is outside this one-dimensional
  Banach-target page.
- The current plan agrees on page ids, titles, category, order, companion
  relation and page prerequisites; its empty item arrays are the expected
  pre-splice state. The prerequisite-drift report finds the functional-analysis
  and measure-theory interfaces in the declared backward closure. The pair has
  no cross-batch item edge, and all 37 current Step-1 item receipts are `ready`.
  No Step-3a owner receipt exists for this A page.

## Minor record note

The B-page manifest summary still says the Hilbert RNP example is escalated
because its later FA-13 supplier is absent. That sentence predates the added
local item `thm-hilbert-spaces-are-reflexive-by-riesz-representation`; the live
dependency and readiness receipt now use that local supplier. This stale
summary is not a scope omission and does not require owner enrichment.

## Checks

- `manifest-deps` on batch 1: 73 items, 0 errors.
- `content-policy --manifest-only` on batch 1: 73 items, 0 errors or warnings.
- `coverage-checklist --require-destination` on batch 1: 2 A pages, 58
  harvested results, 0 errors or warnings.
- `source-fetch-check` on batch 1: 10/10 sources fetch-verified and resolved;
  the owned pair accounts for 4 of them.
- `validate-plan research/plan-spec.json`: success; declared page order and
  item dependencies are acyclic and consistent.

This is a scope determination only. It does not approve individual proofs or
replace the Step 3b mathematical audit.
