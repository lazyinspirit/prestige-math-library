# Prerequisite drift review — `phase-2-remaining-26`

Reviewed the scope ledger, all assigned manifests and prose scaffolds, the current canonical plan, and the generated drift evidence. Candidate/nearby page names were treated only as prompts for checking the actual mathematical load. The edges below are the direct declared prerequisites; I also checked their transitive closures against the prose designs. No plan edit was applied. The one blocker is a claim-level scope decision for the owner, not an edge that can be repaired safely in this role.

### banach-algebras-spectrum-and-holomorphic-functional-calculus

VERDICT: no-drift

Declared edges: compact-self-adjoint-hilbert-schmidt-and-trace-class-operators (order 288.077); complex-power-series-and-analytic-functions (order 288.07803); contour-integration (order 288.07805); goursat-and-cauchys-theorem-in-a-convex-domain (order 288.07807); analyticity-liouville-and-morera (order 288.07809); the-winding-number-and-the-global-cauchy-theorem (order 288.07813). The FA17 scaffold's Banach-space/operator prerequisites and complex-analysis chain are all direct or transitive ancestors; no nearby candidate adds a load-bearing prerequisite.

### banach-space-differential-calculus-and-banach-manifolds

VERDICT: no-drift

Declared edges: normed-and-banach-spaces (order 288.047); bounded-linear-operators-and-quotient-spaces (order 288.049); compact-operators-and-riesz-schauder-theory (order 288.075); completeness-and-uniform-continuity (order 118). These match the controlling Banach-calculus addition in the differential-topology prose. The inverse/implicit-function and manifold setup can be developed from this closure; no additional catalogue page is assumed.

### brownian-motion-markov-properties-and-hitting-times

VERDICT: no-drift

Declared edges: independence-borel-cantelli-and-zero-one-laws (order 288.099); weak-convergence-tightness-and-representation (order 288.109); conditional-expectation (order 288.115); conditional-distributions-and-regular-conditional-probability (order 288.117); stopping-times-and-optional-stopping (order 288.123); markov-kernels-and-markov-chains (order 288.125); brownian-motion-construction-and-continuity (order 288.131). This is the exact PT19 load-bearing list, and its closure supplies the measure/probability foundations used in the strong Markov and hitting-time arguments.

### brownian-path-properties

VERDICT: no-drift

Declared edges: independence-borel-cantelli-and-zero-one-laws (order 288.099); modes-of-convergence-for-random-variables (order 288.103); brownian-motion-construction-and-continuity (order 288.131); brownian-motion-markov-properties-and-hitting-times (order 288.133); the-lebesgue-integral-and-the-convergence-theorems (order 288.015); product-measures-and-the-fubini-tonelli-theorems (order 288.021); absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus (order 288.037). These match PT20 and cover the Borel–Cantelli, Markov, integration, and absolute-continuity inputs for variation, modulus, and nowhere-differentiability results.

### cartan-subalgebras-and-root-space-decompositions

VERDICT: no-drift

Declared edges: lie-algebra-representations-enveloping-algebras-and-pbw (order 495); solvable-and-nilpotent-lie-algebras (order 497); semisimple-lie-algebras-cohomology-and-levi-theory (order 499); the-spectral-theorem-and-singular-value-decomposition (order 141). They agree with DG30's controlling requirement list and supply the representation, solvability, semisimplicity, and simultaneous spectral input used by the root-space decomposition.

### chern-and-pontryagin-classes-by-splitting-and-complexification

VERDICT: no-drift

Declared edges: topological-vector-bundles-and-grassmannian-classification (order 366.029); generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence (order 366.033); leray-hirsch-thom-isomorphism-and-gysin-sequences (order 366.035); stiefel-whitney-and-euler-classes-by-universal-constructions (order 366.037). The AT20 scaffold uses precisely this vector-bundle, splitting/cohomology, Thom–Gysin, and preceding characteristic-class closure.

### choice-strength-in-baire-urysohn-stone-and-tychonoff

VERDICT: drift-blocked — dependent-choice-and-the-complete-metric-baire-theorem (order 664.1) and halpern-lauchli-and-bpi-without-choice (order 695) are already present, but no prerequisite edge can justify the unresolved assertion that DMC is strictly weaker than DC in ZF; owner authorization is required either to correct/rescope that claim or to supply an authoritative primary ZF separation proof.

The SET22 prerequisite closure is otherwise complete and does not cross the Foundations deferred-catalogue boundary. The mathematical-status conflict is exact: Dodu–Morillon, §7, defines DMC, states DC implies DMC, records a separation in ZFA, and says that whether DMC implies DC in ZF is open ([author PDF, pp. 12–13](https://lim.univ-reunion.fr/staff/mar/dodu.pdf)); Fossy–Morillon's published abstract identifies DMC with the compact-Hausdorff Baire statement in ZF but does not claim a ZF separation ([JLMS article](https://londmathsoc.onlinelibrary.wiley.com/doi/abs/10.1112/S0024610798005675)). Tachtsis's slide 20 asserts strictness without a recovered proof or primary citation ([slides](https://people.dm.unipi.it/dinasso/SWIP/Tachtsis-slides.pdf)), so it does not resolve the conflict. Proposed owner placement: keep the discussion on choice-strength-in-baire-urysohn-stone-and-tychonoff (order 697), but state “DC implies DMC; strictness is known in ZFA; DMC implies DC in ZF is open” unless a primary ZF result is supplied. That is a substantive claim/scope correction and was not applied without authorization.

### compact-lie-groups-maximal-tori-and-peter-weyl-theory

VERDICT: no-drift

Declared edges: riemannian-metrics-length-distance-and-volume (order 477); riemann-curvature-and-riemannian-submanifolds (order 483); lie-groups-invariant-fields-and-the-exponential-map (order 491); lie-subgroups-actions-and-homogeneous-spaces (order 493); lie-algebra-representations-enveloping-algebras-and-pbw (order 495); solvable-and-nilpotent-lie-algebras (order 497); semisimple-lie-algebras-cohomology-and-levi-theory (order 499); cartan-subalgebras-and-root-space-decompositions (order 501); root-systems-dynkin-diagrams-and-cartan-killing-classification (order 503); highest-weight-theory-for-complex-semisimple-lie-algebras (order 505); haar-measure-existence-and-uniqueness (order 506.1); stone-weierstrass-general (order 287); hilbert-space-geometry-and-riesz-representation (order 288.071); orthonormal-bases-parseval-and-fourier-series (order 288.073); compact-self-adjoint-hilbert-schmidt-and-trace-class-operators (order 288.077). This matches DG33's controlling cross-track closure for maximal tori and Peter–Weyl; all edges are backward.

### compact-operators-and-riesz-schauder-theory

VERDICT: no-drift

Declared edge: orthonormal-bases-parseval-and-fourier-series (order 288.073). FA15's other explicit inputs—normed/Banach spaces, bounded operators, Hilbert-space geometry, measure theory, and compactness—are already transitive ancestors of this edge. The Ascoli page is assigned only to the paired examples page, so it is not an A-page prerequisite.

### compact-self-adjoint-hilbert-schmidt-and-trace-class-operators

VERDICT: no-drift

Declared edge: compact-operators-and-riesz-schauder-theory (order 288.075). Its closure contains FA16's Hilbert-space and compact-operator inputs, including the orthonormal-basis machinery; no missing backward edge was found.

### continuous-functional-calculus-for-self-adjoint-and-normal-operators

VERDICT: no-drift

Declared edge: gelfand-theory-and-commutative-c-star-algebras (order 288.081). The Gelfand page's closure supplies the Banach-algebra, compactness, complex-analysis, and Hilbert/operator inputs named by FA19, so the functional-calculus construction is closed without another direct edge.

### gelfand-theory-and-commutative-c-star-algebras

VERDICT: no-drift

Declared edges: banach-algebras-spectrum-and-holomorphic-functional-calculus (order 288.079); tychonoff-embedding-and-stone-cech (order 271). Their closures include the functional-analysis, complex-analysis, compact-Hausdorff, Stone–Weierstrass, and choice inputs named by FA18. In particular, the needed choice assumptions transitively reach def-axiom-of-choice; no hidden Foundations dependency was found.

### generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence

VERDICT: no-drift

Declared edges: cw-complexes-and-cellular-homology (order 366.007); bocksteins-steenrod-squares-and-cohomology-operations (order 366.017); complex-topological-k-theory-and-bott-periodicity (order 366.031); spectral-sequences (order 365.065); double-complexes-exact-couples-and-convergence (order 365.067). These are the controlling AT17 requirements and give the CW filtration, cohomology operations, generalized theory example, exact-couple construction, and convergence machinery used by the AHSS.

### highest-weight-theory-for-complex-semisimple-lie-algebras

VERDICT: no-drift

Declared edges: lie-algebra-representations-enveloping-algebras-and-pbw (order 495); semisimple-lie-algebras-cohomology-and-levi-theory (order 499); cartan-subalgebras-and-root-space-decompositions (order 501); root-systems-dynkin-diagrams-and-cartan-killing-classification (order 503). This is DG32's exact controlling list and supplies PBW, semisimplicity, weights/roots, and the Cartan decomposition used in the classification proof.

### hilbert-space-geometry-and-riesz-representation

VERDICT: no-drift

Declared edge: banach-valued-integration-and-the-radon-nikodym-property (order 288.069). Its transitive closure contains the Banach-space, bounded-operator, measure, and inner-product foundations listed in FA13, while the page itself develops the specifically Hilbertian completion and Riesz argument.

### itos-formula-and-brownian-martingales

VERDICT: no-drift

Declared edges: conditional-expectation (order 288.115); martingale-inequalities-and-convergence (order 288.121); stopping-times-and-optional-stopping (order 288.123); brownian-motion-construction-and-continuity (order 288.131); brownian-motion-markov-properties-and-hitting-times (order 288.133); brownian-path-properties (order 288.135); the-ito-integral-with-respect-to-brownian-motion (order 288.137); mixed-partials-taylor-and-extrema (order 231); fubini-and-change-of-variables (order 237). This exactly matches PT22 and closes the stochastic-integral, martingale, Taylor-expansion, stopping, and measure-theoretic inputs.

### moment-maps-and-symplectic-reduction

VERDICT: no-drift

Declared edges: rank-theorems-and-embedded-submanifolds (order 449); lie-subgroups-actions-and-homogeneous-spaces (order 493); semisimple-lie-algebras-cohomology-and-levi-theory (order 499); compact-lie-groups-maximal-tori-and-peter-weyl-theory (order 507); symplectic-manifolds-moser-stability-and-darboux-weinstein-theory (order 511); hamiltonian-mechanics-and-completely-integrable-systems (order 513); subspaces-products-and-quotients (order 251); compactness (order 255). These match DG37's controlling requirements and cover regular values, group actions, compactness/quotients, symplectic geometry, and Hamiltonian mechanics.

### normal-moore-spaces-pmea-and-consistency-strength

VERDICT: no-drift

Declared edges: proper-forcing-countable-support-iterations-and-pfa (order 707); shelahs-baire-property-model-and-inner-model-lower-bounds (order 703); choice-strength-in-baire-urysohn-stone-and-tychonoff (order 697); product-measures-and-the-fubini-tonelli-theorems (order 288.021). They match SET28 and close the PFA/PMEA, inner-model, choice-strength, and product-measure inputs without a deferred-catalogue dependency. This page is downstream-held by the unresolved order-697 claim above, but its own declared prerequisite set has no drift.

### orthonormal-bases-parseval-and-fourier-series

VERDICT: no-drift

Declared edge: hilbert-space-geometry-and-riesz-representation (order 288.071). FA14's measure/topology, Stone–Weierstrass, and complex-exponential inputs are already in the transitive closure, and the page can develop maximal orthonormal families and Parseval/Fourier theory from them.

### real-forms-and-real-semisimple-lie-algebras

VERDICT: no-drift

Declared edges: lie-groups-invariant-fields-and-the-exponential-map (order 491); lie-subgroups-actions-and-homogeneous-spaces (order 493); lie-algebra-representations-enveloping-algebras-and-pbw (order 495); solvable-and-nilpotent-lie-algebras (order 497); semisimple-lie-algebras-cohomology-and-levi-theory (order 499); cartan-subalgebras-and-root-space-decompositions (order 501); root-systems-dynkin-diagrams-and-cartan-killing-classification (order 503); highest-weight-theory-for-complex-semisimple-lie-algebras (order 505); compact-lie-groups-maximal-tori-and-peter-weyl-theory (order 507); covering-spaces-and-lifting (order 293). This is DG34's controlling list and supplies the complex classification, compact real-form, Lie-group, and covering-space inputs.

### root-systems-dynkin-diagrams-and-cartan-killing-classification

VERDICT: no-drift

Declared edges: lie-algebra-representations-enveloping-algebras-and-pbw (order 495); semisimple-lie-algebras-cohomology-and-levi-theory (order 499); cartan-subalgebras-and-root-space-decompositions (order 501); inner-product-spaces-and-orthogonality (order 94); trees-forests-and-spanning-trees (order 209). These match DG31 and supply the Lie-theoretic, Euclidean-reflection, and graph/tree inputs needed for roots, Dynkin diagrams, and classification.

### shelahs-baire-property-model-and-inner-model-lower-bounds

VERDICT: no-drift

Declared edges: solovays-model-and-regularity-of-all-sets-of-reals (order 701); finite-support-iterations-and-martins-axiom (order 685). The SET25 closure contains the forcing, large-cardinal/inner-model, and regularity infrastructure named in the scaffold and stays inside the Foundations bootstrapping boundary.

### spectral-measures-and-borel-functional-calculus

VERDICT: no-drift

Declared edge: continuous-functional-calculus-for-self-adjoint-and-normal-operators (order 288.083). Its closure contains the Gelfand/Banach-algebra, Hilbert/operator, compactness, and measure foundations named by FA20; the page itself supplies spectral measures and Borel extension.

### stiefel-whitney-and-euler-classes-by-universal-constructions

VERDICT: no-drift

Declared edges: bocksteins-steenrod-squares-and-cohomology-operations (order 366.017); leray-hirsch-thom-isomorphism-and-gysin-sequences (order 366.035). These are AT19's controlling requirements; their closures supply vector-bundle classification, Thom classes, cohomology operations, and obstruction-theoretic context.

### the-ito-integral-with-respect-to-brownian-motion

VERDICT: no-drift

Declared edges: modes-of-convergence-for-random-variables (order 288.103); conditional-expectation (order 288.115); discrete-time-martingales (order 288.119); martingale-inequalities-and-convergence (order 288.121); stopping-times-and-optional-stopping (order 288.123); brownian-motion-construction-and-continuity (order 288.131); brownian-motion-markov-properties-and-hitting-times (order 288.133); brownian-path-properties (order 288.135); product-measures-and-the-fubini-tonelli-theorems (order 288.021); the-lp-spaces-holder-minkowski-and-riesz-fischer (order 288.027). This exactly matches PT21 and closes the adapted-process, isometry/completion, martingale, stopping, path, product-measure, and L2 inputs.

### unbounded-self-adjoint-operators-and-stones-theorem

VERDICT: no-drift

Declared edge: spectral-measures-and-borel-functional-calculus (order 288.085). Its closure contains FA21's Banach/Hilbert, operator, spectral, integration, and complex-analysis inputs; the unbounded-domain and one-parameter-group work therefore needs no additional catalogue predecessor.
