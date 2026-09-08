# Frontier 34 functional-analysis prerequisite drift review

The spec was validated with `node tools/validate-plan.mjs research/plan-spec.json` after the prerequisite and order edits below. The validator reported an acyclic, consistent declared page order with no unresolved page ids or forward references.

### weak-and-weak-star-topologies

Read `research/plan-functional-analysis-track.md`, §FA-8 and its summary seam. The design requires FA-5–FA-7 and the published initial-topology, product-topology, nets, and filters machinery. The old closure contained the initial/product-topology suppliers but omitted the actual net/filter page, so I added it.
VERDICT: drift-applied — added nets-and-filters (order 259)

### banach-alaoglu-goldstine-and-krein-milman

Read `research/plan-functional-analysis-track.md`, §FA-9. The design requires FA-4, FA-5, FA-7, FA-8, compact-Hausdorff Tychonoff through the ultrafilter-lemma route, and MT-20 for the RMK examples. With FA-8's corrected net/filter edge, the current closure contains the complete stated stack.
VERDICT: no-drift

### reflexivity-and-eberlein-smulian

Read `research/plan-functional-analysis-track.md`, §FA-10. The design requires FA-6–FA-9 and MT-14/MT-16 for the concrete Lp consequences; all are in the current closure. The FA-13 mentions on the examples page are later finalization references, not prerequisites of this A page.
VERDICT: no-drift

### schauder-bases-approximation-and-banach-space-pathologies

Read `research/plan-functional-analysis-track.md`, §FA-11. The design requires FA-4 and FA-6–FA-10. The full set is already in closure, while the Enflo and Szankowski boundaries are explicitly non-load-bearing leaves.
VERDICT: no-drift

### banach-valued-integration-and-the-radon-nikodym-property

Read `research/plan-functional-analysis-track.md`, §FA-12. It requires FA-1, FA-7, FA-9, FA-10 and MT-2, MT-7, MT-8, MT-10, MT-12–MT-16 for scalar measure, integration, uniform integrability, Radon–Nikodym, L1, and duality. Every named predecessor is in the current closure.
VERDICT: no-drift

### hilbert-space-geometry-and-riesz-representation

Read `research/plan-functional-analysis-track.md`, §FA-13, together with the measure- and differential-geometry-track mentions supplied by the evidence. The A design requires FA-1, FA-2, FA-7, FA-10 and the published finite-dimensional Euclidean inner-product interface, all already in closure. MT-23 is expressly an agreement-only remark; the other tracks consume this page rather than supply it.
VERDICT: no-drift

### orthonormal-bases-parseval-and-fourier-series

Read `research/plan-functional-analysis-track.md`, §FA-14, and the Fourier-track ownership/prerequisite passages. The design requires FA-13; MT-8, MT-11, MT-14, MT-15; `stone-weierstrass-general`; and the published complex exponential and compact-circle topology. Those suppliers are all in closure, and the Fourier track is a downstream consumer.
VERDICT: no-drift

### compact-operators-and-riesz-schauder-theory

Read `research/plan-functional-analysis-track.md`, §FA-15, plus the measure, differential-geometry, and representation-theory mentions in the evidence. The A design requires FA-2, FA-3, FA-5–FA-10, FA-13, compactness, and the published real compact-metric Ascoli theorem, all in closure. It explicitly rejects the empty planned `ascoli-arzela` page as a supplier and keeps FA-17's Calkin reformulation as a later cross-reference; the other documents consume FA-15.
VERDICT: no-drift

### compact-self-adjoint-hilbert-schmidt-and-trace-class-operators

Read `research/plan-functional-analysis-track.md`, §FA-16, together with its downstream differential-geometry and representation-theory mentions. The design requires FA-13–FA-15 and MT-11/MT-14, all already in closure. FA-19 only reconciles the later general functional calculus with the compact square-root construction and is not a prerequisite.
VERDICT: no-drift

### banach-algebras-spectrum-and-holomorphic-functional-calculus

Read `research/plan-functional-analysis-track.md`, §FA-17, including the summary's unresolved-dependency warning, and checked the representation-theory mentions as downstream consumers. Besides FA-1, FA-2, and FA-12, the design says this page must wait for `complex-power-series-and-analytic-functions`, `contour-integration`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `analyticity-liouville-and-morera`, and `the-winding-number-and-the-global-cauchy-theorem`. I added all five edges. They were forward at orders 305, 307, 309, 311, and 315, so I moved the internally dependent CA-1–CA-7 A/B block into the open interval after FA-16's companion and before FA-17.
VERDICT: drift-reordered — complex-differentiability-and-cauchy-riemann (order 303 -> 288.07801), complex-differentiability-and-cauchy-riemann-examples (order 304 -> 288.07802), complex-power-series-and-analytic-functions (order 305 -> 288.07803), complex-power-series-and-analytic-functions-examples (order 306 -> 288.07804), contour-integration (order 307 -> 288.07805), contour-integration-examples (order 308 -> 288.07806), goursat-and-cauchys-theorem-in-a-convex-domain (order 309 -> 288.07807), goursat-and-cauchys-theorem-in-a-convex-domain-examples (order 310 -> 288.07808), analyticity-liouville-and-morera (order 311 -> 288.07809), analyticity-liouville-and-morera-examples (order 312 -> 288.0781), the-identity-theorem-and-the-open-mapping-theorem (order 313 -> 288.07811), the-identity-theorem-and-the-open-mapping-theorem-examples (order 314 -> 288.07812), the-winding-number-and-the-global-cauchy-theorem (order 315 -> 288.07813), the-winding-number-and-the-global-cauchy-theorem-examples (order 316 -> 288.07814)

### gelfand-theory-and-commutative-c-star-algebras

Read `research/plan-functional-analysis-track.md`, §FA-18, and the representation-theory consumer passages. The design requires FA-5, FA-9, FA-13, FA-17, MT-20, the general complex Stone–Weierstrass supplier, and the authored `tychonoff-embedding-and-stone-cech` page. Only the last page was absent from the old closure, so I added its backward edge.
VERDICT: drift-applied — added tychonoff-embedding-and-stone-cech (order 271)

### continuous-functional-calculus-for-self-adjoint-and-normal-operators

Read `research/plan-functional-analysis-track.md`, §FA-19, and the probability-track covariance-square-root interface. The design requires FA-13, FA-17, FA-18, and the Stone–Weierstrass dependency already available through FA-18. The current closure contains all of them; probability consumes FA-19 rather than supplying it.
VERDICT: no-drift

### spectral-measures-and-borel-functional-calculus

Read `research/plan-functional-analysis-track.md`, §FA-20, and the representation-theory consumer sections. The design requires FA-9, FA-12–FA-14, FA-18–FA-19 and MT-8, MT-11, MT-12, MT-20. All are in the current closure, while the representation-theory pages depend on this page in the other direction.
VERDICT: no-drift

### unbounded-self-adjoint-operators-and-stones-theorem

Read `research/plan-functional-analysis-track.md`, §FA-21, and the representation-theory boundary mention. The design requires FA-6, FA-12–FA-13, FA-17, and FA-19–FA-20; all are in closure. It expressly has no Sobolev-space prerequisite, and representation theory uses Stone's theorem only downstream.
VERDICT: no-drift

### fourier-transform-convolution-and-approximate-identities

Read `research/plan-functional-analysis-track.md`, §FA-22, together with the complex-, Fourier-, and probability-track mentions. The A design requires MT-4, MT-8, MT-11, MT-14, MT-15, MT-17 and the published complex-exponential and Euclidean-calculus interfaces. All are in closure; the other cited tracks are consumers of this page.
VERDICT: no-drift

### schwartz-space-and-the-plancherel-theorem

Read `research/plan-functional-analysis-track.md`, §FA-23, and its complex-, Fourier-, and PDE-track consumer passages. The design requires FA-13–FA-14, FA-22, MT-8, MT-11, MT-14, MT-15, and published multivariable differential notation and smooth cutoffs. The current closure reaches the calculus pages and MT-15's explicit compactly supported cutoff lemma; the other mentions are downstream uses.
VERDICT: no-drift

### distributions-test-functions-and-differentiation

Read `research/plan-functional-analysis-track.md`, §FA-24, and the Fourier-track mention. The A design requires FA-6, FA-23, MT-7, MT-8, MT-15, and the published multivariable-calculus pages. The full stack is in closure, and Sobolev spaces are expressly not required.
VERDICT: no-drift

### tempered-distributions-and-the-fourier-transform

Read `research/plan-functional-analysis-track.md`, §FA-25, together with the complex-, Fourier-, PDE-, and probability-track mentions. The design requires FA-23–FA-24 and MT-14, all in the current closure. The other passages consume FA-25 or declare downstream interfaces and add no prerequisite to this A page.
VERDICT: no-drift
