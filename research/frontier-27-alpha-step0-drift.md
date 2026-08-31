### krull-dimension-and-height-theorems
Read `research/plan-commutative-algebra-track.md` CA-10. The design requires CA-1--CA-3 and CA-5--CA-7; the current closure already contains `noetherian-rings-and-hilbert-basis`, `localisation-of-modules-and-support`, `associated-primes-and-primary-decomposition`, `integral-extensions-and-going-up`, `noether-normalisation-and-nullstellensatz`, and `valuation-rings-and-discrete-valuation-rings` through `dedekind-domains-and-ideal-classes-examples`.
VERDICT: no-drift

### conjugate-gradients-minres-and-preconditioning
Read `research/plan-algebra-track-expansion-v2.md` LA-22. The design explicitly requires `krylov-subspaces-arnoldi-and-gmres` and `convex-and-semicontinuous-functions-on-rn`, and both are already declared directly in the current spec.
VERDICT: no-drift

### density-separability-and-convolution-in-lp
Read `research/plan-measure-theory-track.md` MT-15. Its design requires MT-14, MT-4, MT-10, MT-11, `urysohn-lemma-and-tietze`, `the-topology-of-euclidean-space`, `countability-axioms-and-cardinal-functions`, and smoothness input for mollifiers; the current closure already contains those, with the named smoothness vocabulary reached through published `darboux-lhopital-and-taylor` even though the prose uses the stale label `higher-derivatives-and-smoothness`.
VERDICT: no-drift

### normed-and-banach-spaces
Read `research/plan-functional-analysis-track.md` FA-1. The design needs `rn-as-a-normed-space`, the published metric-completion and completeness machinery, and MT-14 only for the `L^p` agreement remark; all of that is already in the current closure through the page's declared prerequisites.
VERDICT: no-drift

### closed-monoidal-categories-and-the-internal-hom
Read `research/plan-category-theory-track.md` MA-14. The design explicitly requires `strictification-and-mac-lanes-coherence-theorem`, `adjunctions-units-and-counits`, `limits-and-colimits`, and `universal-properties-and-the-yoneda-lemma`, and all four already lie in the current closure via `strictification-and-mac-lanes-coherence-theorem-examples`.
VERDICT: no-drift

### long-exact-sequences-in-homology
Read `research/plan-homological-algebra-track.md` HA-4. The design explicitly requires both `mapping-cones-cylinders-and-chain-triangles` and `the-diagram-lemmas-in-an-abelian-category`; the latter was absent from the page's declared closure, so I added the backward prerequisite in `research/plan-spec.json`.
VERDICT: drift-applied - added the-diagram-lemmas-in-an-abelian-category (order 365.021)

### small-graph-erdos-hajnal-consequences
Read the combinatorics block rows around `research/plan-combinatorics-and-categories.md` 417/422. The design scopes the small-graph Erdos-Hajnal consequences but does not state any prerequisite beyond the already-earlier EH pages the spec already names.
VERDICT: no-drift

### iterative-restriction-and-comb-extraction-lemmas
Read the combinatorics block row at `research/plan-combinatorics-and-categories.md` 423/424. The design scopes Lemmas 2.4, 2.5, and 2.7--2.10, with no extra page-level prerequisite beyond the existing `iterative-sparsification-and-the-five-vertex-path` edge.
VERDICT: no-drift

### sard-theorem-and-transversality
Read `research/plan-differential-geometry-track.md` DG-6. The design explicitly requires `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `smooth-partitions-of-unity-and-exhaustions`, `cantor-set-baire-and-measure-zero`, `the-riemann-integral-in-rn-and-jordan-content`, `fubini-and-change-of-variables`, and `mixed-partials-taylor-and-extrema`; the current closure already contains all of them transitively from the page's declared prerequisites.
VERDICT: no-drift

### tensor-fields-exterior-algebra-and-differential-forms
Read `research/plan-differential-geometry-track.md` DG-11. The design requires DG-3 and DG-5 plus the published determinant, dual-space, and rank-nullity pages, and the current closure already reaches those linear-algebra prerequisites through `tangent-cotangent-and-the-differential` and `smooth-vector-bundles-and-sections`.
VERDICT: no-drift

### myhill-nerode-theory-and-dfa-minimization
Read `research/plan-computability-theory-track.md` TC-5. The design explicitly requires `regular-expressions-and-kleenes-theorem` and `relations-functions-and-quotients`, exactly matching the page's current declared prerequisites.
VERDICT: no-drift

### decidable-recognizable-and-enumerable-languages
Read `research/plan-computability-theory-track.md` TC-11. The design explicitly requires `robust-machine-models-and-universal-computation` and `countability-and-uncountability`, and both are already declared directly in the current spec.
VERDICT: no-drift

### primitive-recursive-and-partial-computable-functions
Read `research/plan-computability-theory-track.md` TC-15. The design explicitly requires `robust-machine-models-and-universal-computation` and `construction-of-the-natural-numbers`, exactly as the current spec already declares.
VERDICT: no-drift

### resource-bounds-and-machine-invariance
Read `research/plan-computability-theory-track.md` TC-19. The design explicitly requires `robust-machine-models-and-universal-computation` and `the-logarithm-and-general-powers`, and both are already declared directly in the current spec.
VERDICT: no-drift
