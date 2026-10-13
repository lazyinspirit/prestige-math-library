# Step 3a reader report — batch 66

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Reviewed: 2026-10-13

## Opened inventory

Assigned pages:

- `gr-tensors-and-observers` (A page, draft): `library/general-relativity/gr-tensors-and-observers.md`.
- `gr-tensors-and-observers-examples` (B page, draft): `library/general-relativity/gr-tensors-and-observers-examples.md`.

Assigned A-page items, read in dependency order:

- `def-gr-observer-and-rest-space`
- `def-gr-tensor-fields-and-components`
- `def-gr-observer-congruence-and-adapted-charts`
- `lem-gr-observer-projection-decomposition`
- `lem-gr-tensor-component-transformation-law`
- `lem-gr-contraction-of-smooth-tensor-fields`
- `lem-gr-observer-pairing-with-future-causal-vectors`
- `def-gr-local-frame-and-tetrad-fields`
- `lem-gr-tetrad-change-of-basis-is-lorentz`
- `thm-gr-local-lorentz-tetrad-existence`
- `thm-gr-observer-relative-velocity-decomposition`
- `cor-gr-adapted-chart-existence`
- `prop-gr-rest-space-integrability-criterion`
- `def-gr-observer-relative-energy-and-momentum`
- `lem-gr-observer-energy-momentum-identities`
- `rem-gr-chart-tetrad-congruence-and-observer-distinctions`

Assigned B-page items:

- `ex-gr-mixed-tensor-transformation-and-contraction`
- `ex-gr-boosted-constant-tetrad-field`
- `ex-gr-shearing-congruence-tetrad-and-adapted-chart`
- `ex-gr-observer-relative-velocity-of-a-boost`
- `ex-gr-observer-energy-of-a-boosted-test-body`
- `cex-gr-tetrad-field-need-not-be-a-coordinate-frame`
- `cex-gr-shearing-congruence-rest-spaces-not-integrable`

I opened the 52 distinct direct item dependencies named by the batch manifest:

`cor-codimension-one-frobenius-criterion`, `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `def-causal-classification-of-lorentz-vectors`, `def-continuous-map-top`, `def-contraction-of-a-mixed-tensor`, `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union`, `def-countable-choice`, `def-derivation-at-a-point-and-tangent-space`, `def-euclidean-inner-product`, `def-exterior-derivative-by-the-invariant-vector-field-formula`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-gr-smooth-covariant-two-tensor-field`, `def-gr-smooth-lorentzian-objects`, `def-integrable-distribution`, `def-integral-curve-of-a-vector-field`, `def-involutive-distribution`, `def-lie-bracket-of-smooth-vector-fields`, `def-lorentz-orthogonality-and-orthogonal-complement`, `def-rational-power`, `def-smooth-differential-k-form`, `def-smooth-distribution-on-a-manifold`, `def-smooth-tensor-field`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `def-smoothly-compatible-charts`, `def-time-orientation-and-future-causal-sets`, `def-type-r-s-tensor-bundle`, `def-type-r-s-tensor-on-a-finite-dimensional-vector-space`, `def-wedge-product-of-differential-forms`, `lem-contraction-is-independent-of-the-basis-formula`, `lem-coordinate-derivations-are-well-defined-derivations`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-lorentz-form-has-orthonormal-basis`, `lem-matrix-inversion-preserves-ck-regularity`, `lem-timelike-cone-has-two-convex-components`, `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure`, `prop-coordinate-formula-for-the-lie-bracket`, `prop-exterior-derivative-of-a-function-is-its-differential`, `prop-local-frame-characterization-of-a-smooth-distribution`, `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-change-of-coordinate-formula-for-tangent-bases`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-coordinate-derivations-form-a-basis-of-the-tangent-space`, `thm-coordinate-differentials-form-the-dual-cotangent-basis`, `thm-flow-box-theorem`, `thm-frobenius-local-coordinate-theorem`, `thm-tensor-transition-laws-define-a-smooth-vector-bundle`, `thm-the-exterior-derivative-is-a-graded-derivation`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, and `thm-unique-maximal-integral-curve-through-each-point`.

Additional prerequisite context opened for the tensor-bundle claim included `thm-coordinate-derivations-form-a-basis-of-the-tangent-space`, `thm-coordinate-differentials-form-the-dual-cotangent-basis`, `thm-change-of-coordinate-formula-for-tangent-bases`, `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian`, `thm-vector-bundle-construction-from-a-smooth-cocycle`, and `def-vector-bundle-chart-and-transition-function`. I also opened the required `gr-framework-and-geometry` page and its `def-gr-si-unit-and-coordinate-conventions` item for the page's stated physical-unit context.

## Repairs

- `def-gr-tensor-fields-and-components`, Definition (c): corrected the lowering example so its result has two lower indices, added the matching first-slot raising formula, and stated explicitly that raising/lowering changes tensor type through the nondegenerate metric. The previous expression displayed an upper index on the left but a lower index on the right, and did not specify the type of the output. The change follows the item's stated tensor-slot convention and the exact musical maps in `def-gr-inverse-metric-and-musical-isomorphisms`.
- `def-gr-observer-congruence-and-adapted-charts`, Definition (b): replaced `$\lVert n\rVert_g=1$`, which is undefined for the Lorentzian metric, by the explicit equation `$g_{\gamma_q(s)}(n_{\gamma_q(s)},n_{\gamma_q(s)})=-1$`; the sentence now also states directly that this makes the curve tangent nonzero. This follows the observer definition's exact normalization and future-direction hypotheses.
- Neither definition has a proof contract in the batch-66 proof-contract scope or a `verification.judge` record, so no contract or judge record required updating.
- Reflow and precheck ran for both changed item paths. Reflow reported both unchanged; each precheck reported `0 checked, 0 failing`. The final batched proof-layout command reported `2 items, 0 steps, 0 defects`.

## Unedited finding

- Published dependency `thm-tensor-transition-laws-define-a-smooth-vector-bundle`, Proof Step 2.1, reverses the coordinate factors for the declared tensor convention. For the component definition used by its assigned consumer, an upper/contravariant slot is evaluated on a coordinate covector `dy^a = (\partial y^a/\partial x^c) dx^c` and therefore contributes the Jacobian; a lower/covariant slot is evaluated on `\partial/\partial y^b = (\partial x^d/\partial y^b)\partial/\partial x^d` and contributes the inverse Jacobian. Step 2.1 states the opposite. The assigned `lem-gr-tensor-component-transformation-law` proves these factors directly. Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 11, equations (11.6)–(11.7), printed pp. 275–276 (PDF pp. 292–293), gives the corresponding vector and covector component changes: [source PDF](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf). The theorem's smooth-bundle conclusion may be true, but this proof does not establish the correct tensor transition maps used by the assigned definition. The supplier is published and outside this batch's edit scope; it is reported in the findings JSON with assigned consumer `def-gr-tensor-fields-and-components`.

## Page verdicts

- `gr-tensors-and-observers`: the definitions, conditional results, constructions, and page summary are supported by the inspected arguments. **Hold** on the assigned tensor-field definition's published tensor-bundle supplier proof noted above.
- `gr-tensors-and-observers-examples`: the component calculations, boost and shearing constructions, and both counterexamples check out. **Hold** for the same published supplier defect in the mixed-tensor example's dependency closure; the remaining examples and counterexamples passed this review.

## Blocker and coverage note

There is no local repair blocker. Owner disposition is needed for the published tensor-bundle supplier proof; it was not edited. I reviewed the assigned carriers and pages, all 52 distinct direct item dependencies, and the specific additional tensor-bundle suppliers and source passage used to establish the reported defect. I did not audit every transitive dependency closure of all 52 suppliers or re-check every bibliography entry where no citation defect was suspected.
