# Step 3a reader report — batch 68

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Scope: batch 68 only

## Opened inventory

Assigned pages:

- A page, library/general-relativity/gr-curvature-and-tides.md — draft; 13 listed items.
- B page, library/general-relativity/gr-curvature-and-tides-examples.md — draft; 6 listed examples/counterexamples.

Assigned items, all opened and reviewed:

- A page: def-gr-curvature-tensor-and-derived-tensors; thm-gr-curvature-tensoriality-and-coordinate-formula; thm-gr-curvature-algebraic-symmetries; thm-gr-second-bianchi-and-divergence-free-einstein; def-gr-jacobi-field-and-conjugate-instant; thm-gr-jacobi-equation-and-geodesic-deviation; lem-gr-conjugacy-via-the-exponential-map; lem-gr-normal-index-form-factorization; thm-gr-conjugacy-and-local-timelike-maximum; lem-gr-algebraic-curvature-vanishing-criterion; pthm-gr-tidal-comparison; rem-gr-curvature-tidal-scope-and-conventions; ex-gr-curvature-in-a-point-normal-chart.
- B page: ex-gr-flat-metric-in-cylindrical-coordinates; ex-gr-curvature-of-a-product-with-a-round-sphere; ex-gr-jacobi-fields-in-flat-space; ex-gr-conjugate-instant-on-a-round-sphere-factor; cex-gr-symmetries-do-not-imply-bianchi; cex-gr-vanishing-tidal-operator-for-one-observer.

Dependency context opened to check the uses of curvature, tensor components, proper time, parallel transport, conjugacy, local maximality, and the physical model: def-gr-smooth-lorentzian-objects; def-gr-smooth-covariant-two-tensor-field; def-gr-metric-selected-connection; thm-gr-nondegenerate-levi-civita-and-tensor-derivative; def-affine-connection-on-a-smooth-manifold; def-gr-tensor-fields-and-components; def-gr-inverse-metric-and-musical-isomorphisms; def-contraction-of-a-mixed-tensor; def-lie-bracket-of-smooth-vector-fields; def-christoffel-symbols-of-an-affine-connection; def-covariant-derivative-along-a-curve; def-vector-field-and-section-along-a-smooth-curve; def-geodesic-of-an-affine-connection; def-gr-observer-and-rest-space; lem-gr-observer-projection-decomposition; lem-gr-observer-pairing-with-future-causal-vectors; def-gr-local-frame-and-tetrad-fields; def-gr-observer-congruence-and-adapted-charts; lem-gr-connection-conditions-in-chart-components; thm-gr-point-normal-and-exponential-coordinate-charts; thm-gr-local-geodesics-and-exponential-map; thm-gr-lorentz-gauss-lemma-and-normal-maximum; lem-gr-parallel-transport-and-geodesic-speed; lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval; thm-existence-and-uniqueness-of-parallel-sections; def-gr-timelike-worldline-and-proper-time; lem-gr-proper-time-reparametrization-and-four-velocity; def-gr-si-unit-and-coordinate-conventions; post-gr-spacetime-and-classical-domain; post-gr-ideal-clocks-and-free-fall; pthm-gr-free-fall-worldline-is-determined-by-initial-data; def-causal-classification-of-lorentz-vectors; and def-interval.

I also inspected the assigned batch manifest, proof contracts, coverage record, cross-batch dependency evidence, and batch notes as navigation evidence. They did not determine the verdicts.

## Page verdicts

- gr-curvature-and-tides — PASS after the proof repairs below. The page summary matches the current item inventory, describes the conditional scope of the physical theorem, and does not present any model deduction as an observation.
- gr-curvature-and-tides-examples — PASS. The six computations and counterexamples support the page summary, including the curvature and Ricci contractions, the Jacobi field on the sphere factor, and the two algebraic counterexamples.

## Repairs

1. thm-gr-jacobi-equation-and-geodesic-deviation, Proof 1.3: replaced the ill-typed pairing of a vector with a purported “dual frame” member by the unique coefficient expansion in the parallel vector frame. The frame is a basis of each tangent fibre, so the coefficients are defined and smooth; this supplies the continuous matrix needed for the Jacobi initial-value system.

2. pthm-gr-tidal-comparison, Proof 2.1: corrected the rescaled family to use the original parameter order, defining Γ(r, σ) = γ(r, σ/c) on (-ε, ε) × cI. Its variation field is J(r, σ/c), so the cited Jacobi-variation theorem applies and the constant rescaling gives D_t²J = R(U_r, J)U_r.

3. thm-gr-conjugacy-and-local-timelike-maximum, Proof 2.1: replaced an unnecessary post-cover shrink of the inverse neighborhoods, which could invalidate the asserted finite cover, with the direct consequence that each local diffeomorphism neighborhood already has invertible differential throughout. The later lift and timelike-control steps therefore retain the finite cover they require.

The affected proof-contract entries were regenerated for those three items. None had a verification.judge record to remove. The repairs alter proofs only; no Statement, Definition, physical scope, or empirical qualification changed.

## Checks

- Reflow: Jacobi theorem reflowed; tidal theorem and local-maximum theorem were unchanged.
- Precheck: all three changed items passed.
- Proof layout: 3 changed items, 22 steps, 0 defects.

## Unedited defects and blocker

No confirmed uneditable defect remains in the assigned items or pages. No blocker.

## Source limitation

I read the relevant argument in Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019: equations (3.65)–(3.71) for the curvature commutator and convention (PDF pp. 81–83); the normal-coordinate curvature symmetries and Bianchi contractions (3.77)–(3.96, PDF pp. 85–88); and the geodesic-variation computation (3.107)–(3.113, PDF pp. 92–94). The source is available at https://arxiv.org/pdf/gr-qc/9712019. The cited Reall archive PDF was inaccessible through web retrieval in this session. The claims reviewed here are proved in the local items, and none relies solely on that inaccessible source.
