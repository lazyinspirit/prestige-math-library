# Frontier 34 alpha step-0 prerequisite-drift review

### minkowski-theory-and-number-field-class-groups

Read `research/plan-number-theory-track.md`, §NT-22. The design requires NT-19–NT-20, the ideal-class-group and class-number-one/PID interface, and finite-dimensional Euclidean topology and volume. The current closure through NT-21 contains those number-theory, Dedekind-domain/ideal-class, finite-dimensional normed-space, and Lebesgue-measure suppliers.
VERDICT: no-drift

### measure-preserving-transformations-and-poincare-recurrence

Read `research/plan-measure-theory-track.md`, §MT-22, together with the downstream DG-36 mention in `research/plan-differential-geometry-track.md`. MT-22 requires MT-2, MT-3, MT-4, MT-8, MT-17, compactness, Euclidean topology, and sequences/limits; all are in the current closure. DG-36 consumes this page and does not impose a prerequisite on it.
VERDICT: no-drift

### weak-and-weak-star-topologies

Read `research/plan-functional-analysis-track.md`, §FA-8. Its stated inputs are FA-5–FA-7 plus the published initial/product-topology, net, and filter interfaces. The current closure through FA-7 contains each of them.
VERDICT: no-drift

### strong-laws-of-large-numbers

Read `research/plan-probability-track.md`, §PT-6. The proof is routed through PT-1–PT-5 and the cited MT-8/MT-11/MT-14 measure interfaces, all present in the current closure; the future Birkhoff route is explicitly an agreement target rather than a proof dependency.
VERDICT: no-drift

### fourier-multipliers-and-sobolev-characterisations

Read `research/plan-fourier-analysis-track.md`, §FR-6. Besides the functional-analysis and interpolation suppliers already in closure, the design explicitly declares PDE-11 `weak-derivatives-and-sobolev-spaces` and PDE-14 `sobolev-poincare-and-morrey-inequalities`. I added both to `requires`. Because their orders are 458.019 and 458.025, I moved this page and its complete dependent Fourier suffix into the open interval after the PDE-14 companion at 458.026 and before the next PDE page at 458.027.
VERDICT: drift-reordered — fourier-multipliers-and-sobolev-characterisations (order 288.14022 -> 458.02601), fourier-multipliers-and-sobolev-characterisations-examples (order 288.14024 -> 458.02602), hilbert-and-riesz-transforms (order 288.14026 -> 458.02603), hilbert-and-riesz-transforms-examples (order 288.14028 -> 458.02604), calderon-zygmund-decomposition-and-singular-integrals (order 288.1403 -> 458.02605), calderon-zygmund-decomposition-and-singular-integrals-examples (order 288.14032 -> 458.02606), real-hardy-spaces-maximal-functions-and-atoms (order 288.14034 -> 458.02607), real-hardy-spaces-maximal-functions-and-atoms-examples (order 288.14036 -> 458.02608), bmo-john-nirenberg-and-h1-duality (order 288.14038 -> 458.02609), bmo-john-nirenberg-and-h1-duality-examples (order 288.1404 -> 458.0261), littlewood-paley-theory-and-square-functions (order 288.14042 -> 458.02611), littlewood-paley-theory-and-square-functions-examples (order 288.14044 -> 458.02612), muckenhoupt-weights-and-weighted-estimates (order 288.14046 -> 458.02613), muckenhoupt-weights-and-weighted-estimates-examples (order 288.14048 -> 458.02614), fourier-restriction-and-the-stein-tomas-theorem (order 288.1405 -> 458.02615), fourier-restriction-and-the-stein-tomas-theorem-examples (order 288.14052 -> 458.02616), pontryagin-duality-for-locally-compact-abelian-groups (order 288.14054 -> 458.02617), pontryagin-duality-for-locally-compact-abelian-groups-examples (order 288.14056 -> 458.02618), bochner-inversion-and-plancherel-on-lca-groups (order 288.14058 -> 458.02619), bochner-inversion-and-plancherel-on-lca-groups-examples (order 288.1406 -> 458.0262), finite-fourier-analysis-and-the-fast-fourier-transform (order 288.14062 -> 458.02621), finite-fourier-analysis-and-the-fast-fourier-transform-examples (order 288.14064 -> 458.02622), poisson-summation-sampling-and-lattice-duality (order 288.14066 -> 458.02623), poisson-summation-sampling-and-lattice-duality-examples (order 288.14068 -> 458.02624), uncertainty-principles-for-fourier-analysis (order 288.1407 -> 458.02625), uncertainty-principles-for-fourier-analysis-examples (order 288.14072 -> 458.02626)

### fundamental-solutions-newtonian-potentials-and-green-functions

Read `research/plan-pde-track.md`, §PDE-5. The stated inputs include PDE-3–PDE-4, MT-8/MT-11/MT-15, FA-24, change of variables, and published partition-of-unity machinery. The first groups are in closure, but the smooth gluing supplier was absent, so I declared `smooth-partitions-of-unity-and-exhaustions`.
VERDICT: drift-applied — added smooth-partitions-of-unity-and-exhaustions (order 445)

### tor-flatness-and-global-dimension

Read `research/plan-homological-algebra-track.md`, §HA-10. The design requires HA-7–HA-9, tensor products and chain conditions, together with the flat/projective module interface. The current closure through Yoneda extensions and flatness contains all of these.
VERDICT: no-drift

### spectral-sequences

Read `research/plan-homological-algebra-track.md`, §HA-15. Its construction starts from the chain-complex interface and the preceding derived-category development, both already in the current closure.
VERDICT: no-drift

### singular-cohomology-and-coefficient-theorems

Read `research/plan-algebraic-topology-track.md`, §AT-6. The design asks for singular homology and the universal-coefficient/Künneth interfaces; the current closure through the homology companion contains them.
VERDICT: no-drift

### zariski-tangent-spaces-regular-points-smoothness-and-bertini

Read `research/plan-algebraic-geometry-track.md`, §AV-6. AV-2, AV-5, local rings/Nakayama, and Krull dimension are already in closure; specifically Nakayama is supplied by `localisation-of-modules-and-support`. The dual-number proof deferred to AV-16 and later base-change compatibility are labelled later results, not prerequisites for this page.
VERDICT: no-drift

### diagonals-separated-morphisms-and-valuative-uniqueness

Read `research/plan-algebraic-geometry-track.md`, §AV-14. The stated prerequisites are AV-12, AV-13, and valuation rings, all of which occur in the current closure, including `valuation-rings-and-discrete-valuation-rings`.
VERDICT: no-drift

### erdos-hajnal-for-the-e-graph-and-bird

Read the final E/Bird deduction and dependency ledger in `research/plan-combinatorics-and-categories.md`. The E route through P5, wonderfulness, property-star, and co-E, and the Bird route through the bull and co-Bird structure, are all contained in the two currently declared predecessor closures.
VERDICT: no-drift

### the-de-rham-complex-homotopy-and-mayer-vietoris

Read `research/plan-differential-geometry-track.md`, §DG-15 and its dependency table. DG-2, DG-7, DG-11, DG-12, DG-14, homotopy, and the fundamental theorem of calculus were already in closure. The design also names three homological-algebra interfaces that were absent, so I declared all three.
VERDICT: drift-applied — added chain-complexes-and-homology (order 365.037), chain-homotopy-and-the-homotopy-category (order 365.039), long-exact-sequences-in-homology (order 365.043)

### riemannian-metrics-length-distance-and-volume

Read `research/plan-differential-geometry-track.md`, §DG-18. The required DG-2, DG-3, DG-5, DG-11–DG-14, compactness, and line-integral interfaces match the page's declared closure.
VERDICT: no-drift

### projectives-standard-filtrations-and-bgg-reciprocity

Read `research/plan-representation-theory-lie-track.md`, §RL-5 and its dependency table. RL-4 and the complete-reducibility interface were already reachable, but the explicitly named projective-resolution, balanced-Ext, and Yoneda interfaces were not, so I declared them.
VERDICT: drift-applied — added projective-and-injective-resolutions (order 365.045), ext-and-balanced-resolutions (order 365.051), yoneda-extensions-and-homological-dimension (order 365.053)

### projective-extensions-and-the-little-group-method

Read `research/plan-representation-theory-groups-track.md`, §RG-5. The design requires RG-4 plus group extensions and quotient groups from abstract algebra. Quotient groups were already reachable, but the extension supplier was not, so I declared it; the design expressly says general Schur-multiplier theory is not required.
VERDICT: drift-applied — added group-extensions-complements-and-schur-zassenhaus (order 71.017)

### handle-decompositions-duality-and-rearrangement

Read `research/plan-differential-topology-track.md`, §DT-6. The stated DT-2–DT-5, collar/orientation, singular-homology, and cellular-homology interfaces are all present in the current closure, including `cw-complexes-and-cellular-homology`.
VERDICT: no-drift

### the-ip-equals-pspace-theorem

Read `research/plan-theoretical-computer-science-track.md`, §TC-32. The design's arithmetisation and sum-check prerequisites are exactly the two declared predecessors and their closures.
VERDICT: no-drift

### gap-amplification-and-assignment-testing

Read `research/plan-theoretical-computer-science-track.md`, §TC-34. Its three stated PCP/gap-testing inputs are the three current direct prerequisites.
VERDICT: no-drift

### deduction-soundness-completeness-and-compactness

Read `research/plan-set-theory-track.md`, §SET-2 and the track dependency graph. SET-2 requires only SET-1, which is its declared predecessor; it does not depend on the deferred set-theory catalog.
VERDICT: no-drift

### set-theoretic-trees-delta-systems-and-diamond

Read `research/plan-set-theory-track.md`, §SET-9 and the track dependency graph. SET-9 requires SET-8, exactly as declared, with no deferred-catalog edge.
VERDICT: no-drift

### borel-analytic-sets-perfect-sets-and-determinacy

Read `research/plan-set-theory-track.md`, §SET-10 and the track dependency graph. SET-4, complete metrizability, and Lebesgue measure are all present in its current closure; no deferred determinacy catalog is used as a prerequisite.
VERDICT: no-drift

### pcf-scales-and-zfc-dowker-spaces

Read `research/plan-set-theory-track.md`, §SET-30 and the track dependency graph. Its SET-8 and paracompactness inputs are both in the current closure, and the page remains independent of the deferred set-theory catalog.
VERDICT: no-drift

### graded-bimodules-and-tensor-functors

Read `research/plan-homological-algebra-track.md`, §HA-18. The five stated graded-module, tensor, and category interfaces are exactly the five current direct prerequisites.
VERDICT: no-drift

### homological-gaussian-elimination

Read `research/plan-homological-algebra-track.md`, §HA-24. The required chain-homotopy/additive-category machinery is reached through the declared `chain-homotopy-and-the-homotopy-category` predecessor.
VERDICT: no-drift
