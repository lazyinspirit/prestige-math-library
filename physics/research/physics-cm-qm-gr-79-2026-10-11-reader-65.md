# Step 3a reader report — batch 65

Run: physics-cm-qm-gr-79-2026-10-11  
Role: independent reader. Scope: batch 65.

## Opened inventory

Pages:

- library/general-relativity/gr-framework-and-geometry.md (A page).
- library/general-relativity/gr-framework-and-geometry-examples.md (B page).

Assigned A-page items, read in dependency order:

- def-gr-smooth-covariant-two-tensor-field
- lem-gr-covariant-two-tensor-transformation-law
- def-gr-smooth-lorentzian-objects
- lem-gr-future-causal-classification-by-a-timelike-field
- def-gr-inverse-metric-and-musical-isomorphisms
- lem-gr-timelike-fields-define-equal-or-opposite-future-cones
- lem-gr-inverse-metric-is-smooth
- def-gr-metric-selected-connection
- def-gr-si-unit-and-coordinate-conventions
- lem-gr-connection-conditions-in-chart-components
- def-gr-stress-energy-tensor-field
- def-gr-energy-conditions
- post-gr-spacetime-and-classical-domain
- post-gr-field-and-matter-assumptions
- rem-gr-primitive-and-derived-status

Assigned examples-page items:

- ex-gr-minkowski-chart-as-a-lorentzian-manifold
- ex-gr-spherical-coordinates-flat-metric-components
- ex-gr-flat-connection-is-metric-selected
- cex-gr-torsion-free-does-not-imply-metric-compatible
- ex-gr-unit-conventions-for-two-time-coordinates
- cex-gr-symmetric-nondegenerate-field-need-not-be-lorentzian
- ex-gr-reversing-the-timelike-field-reverses-future

External supplier statements and relevant hypotheses checked:

- Linear algebra and forms: cor-inverse-matrix-by-adjugate; cor-real-symmetric-bilinear-forms-are-classified-by-inertia; def-algebraic-dual-and-linear-functional; def-definiteness-inertia-and-signature-data-over-the-reals; def-euclidean-inner-product; def-lorentz-form-and-inertia; def-lorentz-orthogonality-and-orthogonal-complement; def-trace-of-an-endomorphism; lem-lorentz-form-has-orthonormal-basis; lem-matrix-inversion-preserves-ck-regularity; thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces; thm-unique-coordinates-with-respect-to-an-ordered-basis.
- Manifolds, charts and tangent spaces: def-c-r-and-smooth-maps-between-smooth-manifolds; def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union; def-derivation-at-a-point-and-tangent-space; def-differential-of-a-smooth-map; def-induced-tangent-bundle-chart; def-smooth-atlas; def-smooth-manifold; def-smooth-vector-field-as-a-tangent-bundle-section; def-smoothly-compatible-charts; def-velocity-derivation-of-a-smooth-curve; ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds; lem-coordinate-derivations-are-well-defined-derivations; prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure; prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components; thm-coordinate-derivations-form-a-basis-of-the-tangent-space.
- Causal and topological facts: def-causal-classification-of-lorentz-vectors; def-connected-space; def-continuous-map-top; def-countable-choice; def-interval; def-time-orientation-and-future-causal-sets; lem-timelike-cone-has-two-convex-components.
- Connections and curvature: def-affine-connection-on-a-smooth-manifold; def-christoffel-symbols-of-an-affine-connection; def-curvature-of-an-affine-connection; def-lie-bracket-of-smooth-vector-fields; def-torsion-tensor-of-an-affine-connection; lem-torsion-is-c-infinity-bilinear-and-skew-symmetric; prop-coordinate-vector-fields-commute; prop-leibniz-rules-for-the-lie-bracket-with-function-multiples; thm-curvature-is-a-type-one-three-tensor.
- Calculus and integration: cor-mean-value-theorem; cor-primitives-of-a-continuous-function; def-total-derivative-in-euclidean-space; lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space; thm-chain-rule-for-total-derivatives; thm-ck-euclidean-maps-closed-under-algebra-and-composition; thm-intermediate-value; thm-real-power-continuity-and-derivatives.

For the draft Lorentz-basis and timelike-cone suppliers, I also checked the relevant statements of thm-sylvesters-law-of-inertia, def-convex-subset-of-euclidean-space, cor-triangle-inequality-for-inner-product-norm, ex-convex-subsets-of-rn-are-path-connected, def-metric-space, def-metric-topology, def-connected-component-and-quasicomponent, def-subspace-topology-top, and thm-path-connected-implies-connected. I read the proofs of lem-gr-covariant-two-tensor-transformation-law, lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-timelike-fields-define-equal-or-opposite-future-cones, lem-gr-inverse-metric-is-smooth, lem-gr-connection-conditions-in-chart-components, lem-lorentz-form-has-orthonormal-basis, and lem-timelike-cone-has-two-convex-components. I also inspected def-gr-timelike-worldline-and-proper-time in batch 67 while tracing the worldline terminology.

## Repairs

1. In lem-gr-covariant-two-tensor-transformation-law, Proof steps 3.1 and 4.1 wrongly treated an arbitrary maximal-atlas chart as though it belonged to the single atlas where smoothness was assumed. Step 3.1 now fixes an arbitrary maximal chart and, at each point, uses a chart from the supplied atlas that contains that point. The transformation law, smooth transition derivatives, and closure of smooth functions under sums, products and composition give local smoothness; these neighbourhoods cover the maximal chart. The affected step-3.1 proof-contract derivation was updated. No stale verification.judge record was present.

2. In def-gr-si-unit-and-coordinate-conventions clause (e), I replaced the undefined “null ray” phrasing with a conditional statement about a nonzero null tangent vector in a chart whose metric and coordinate units are specified. The resulting norm ratio follows directly from the null condition and makes no claim about light propagation.

3. In post-gr-spacetime-and-classical-domain clause (i), I replaced “along any worldline” with the pointwise causal classification already defined in def-gr-smooth-lorentzian-objects. The postulate no longer relies on an undefined curve term.

4. In post-gr-field-and-matter-assumptions clauses (i), (iii), and (iv), and the status paragraph, I defined the chart-transformation content of covariance, distinguished a model-specific conservation equation from a universal action claim, and clarified that the framework imposes no energy condition automatically while a particular matter model may imply one. The item remains an adopted model postulate; it does not claim that a theory is established by data.

5. In rem-gr-primitive-and-derived-status, the summary of the future-causal lemma now names its exact conclusion for the specified orientation vector N_p, matching the lemma's statement.

6. In the assigned A-page gr-framework-and-geometry summary, I aligned the matter-postulate synopsis with the revised requirement to derive any conservation identity for the specified model, and with the distinction between framework assumptions and consequences of a particular matter model.

## Consumer checks

I computed the current-run dependency and justified_by closure for the changed unit definition and two postulates, then checked direct linked uses in the general-relativity items. The changes preserve the geometry, unit constants, stress-energy definitions, and model-assumption scope used downstream. The revised unit sentence does not remove a unit convention used by any consumer. The revised spacetime sentence is an explicit pointwise restatement of the already-supplied causal definition; post-gr-ideal-clocks-and-free-fall continues to use its own exact timelike-worldline supplier. Matter consumers continue to rely on model-specific equations, field-law consistency, and optional energy conditions; the action postulate specifies its matter sectors, and the Einstein-consistency theorem states that the field law alone imposes no energy condition.

Current-run downstream consumer closure (grouped by batch; roots omitted):

| Batch | Consumers checked |
|---|---|
| 65 | def-gr-stress-energy-tensor-field; def-gr-energy-conditions; rem-gr-primitive-and-derived-status; ex-gr-unit-conventions-for-two-time-coordinates |
| 67 | post-gr-ideal-clocks-and-free-fall; pthm-gr-free-fall-worldline-is-determined-by-initial-data; rem-gr-normal-coordinates-and-local-inertial-frames-scope |
| 68 | pthm-gr-tidal-comparison; rem-gr-curvature-tidal-scope-and-conventions |
| 69 | post-gr-classical-gravitational-action; post-gr-einstein-field-law; pthm-gr-adopted-action-and-einstein-equations; pthm-gr-einstein-consistency-and-energy-conditions; rem-gr-einstein-matter-scope-and-conventions; cex-gr-energy-conditions-do-not-imply-conservation; ex-gr-perfect-fluid-energy-conditions |
| 70 | def-gr-measured-energy-density-flux-and-stress; def-gr-killing-energy-charge; pthm-gr-local-energy-balance; rem-gr-no-universal-global-energy; rem-gr-local-and-global-energy-scope-and-deferrals; ex-gr-killing-energy-charge-of-a-static-dust; cex-gr-measured-energy-density-depends-on-the-observer; cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density |
| 71 | def-gr-newtonian-comparison-model-and-identification; pthm-gr-minkowski-vacuum-model; pthm-gr-uniform-weak-slow-correspondence; rem-gr-flat-bridge-scope-and-limits |
| 72 | pthm-gr-schwarzschild-vacuum-model; pthm-gr-schwarzschild-stationary-redshift; pthm-gr-schwarzschild-circular-orbit-predictions; rem-gr-schwarzschild-horizon-and-singularity; rem-gr-schwarzschild-scope-and-limits |
| 73 | post-gr-flrw-homogeneous-cosmological-model; pthm-gr-flrw-field-equations-reduction; pthm-gr-flrw-power-law-solutions; pthm-gr-flrw-de-sitter-solutions; pthm-gr-flrw-cosmological-redshift; rem-gr-flrw-observation-and-model-dependence |
| 74 | pthm-gr-linearized-field-equations; def-gr-linearized-wave-regime-and-detector-coupling; pthm-gr-plane-wave-polarizations; pthm-gr-plane-wave-tidal-detector-response; rem-gr-linearized-wave-scope-and-deferred; ex-gr-sinusoidal-tt-plane-wave |
| 75 | rem-gr-causal-and-initial-value-scope |
| 76 | def-gr-observation-and-analysis-architecture; rem-gr-primary-report-research-queue; ex-gr-cosmological-redshift-interface-record-window; cex-gr-bounded-redshift-record-does-not-identify-the-parameter |
| 77 | rem-gr-convex-normal-neighborhoods-scope |
| 78 | pthm-gr-high-regularity-local-development; rem-gr-high-regularity-scope |
| 79 | pthm-gr-smooth-maximal-development; rem-gr-mghd-scope |

No outside-batch consumer repair was indicated by these checks.

## Source and empirical scope

The direct arXiv PDF of Carroll's Lecture Notes on General Relativity (https://arxiv.org/pdf/gr-qc/9712019) was accessible. I checked the metric canonical form and coordinate examples (chapter 2, PDF pp. 54–56), torsion and the torsion-free metric-compatible connection (chapter 3, PDF pp. 65–67), and the Hilbert stress-energy definition and WEC (chapter 4, PDF pp. 122–123). These passages support the general source scope; they do not replace the local conditional proofs.

The cited Reall and Tong PDFs, both archived and direct Cambridge URLs, were not retrievable through the web tool (HTTP 502 or inaccessible archive URL). Their exact cited passages were therefore not independently checked in this review. No inaccurate citation was confirmed, but source-fidelity coverage for those two texts remains limited.

## Validation and verdicts

- reflow and precheck ran on all five changed item paths. The tensor lemma passed direct precheck; the two edited postulates passed nonproof-structure precheck; the definition and remark reported zero proof-bearing rows. All commands exited successfully.
- The required final proof-layout command covered the five changed item paths: 5 items, 4 numbered steps, 0 defects.
- No stale verification.judge record was present on the repaired item.

| Page | Verdict |
|---|---|
| gr-framework-and-geometry | Pass after the listed proof, terminology and synopsis repairs. |
| gr-framework-and-geometry-examples | Pass; the seven computations and witnesses agree with the assigned definitions and proofs. |

No confirmed in-scope defect remains unedited. There is no workflow blocker; the source-retrieval limit above remains a genuine evidence limitation.

