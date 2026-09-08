# Phase 2 A/B-pair build manifest

Snapshot date: 2026-09-08.

This is the executable pair-level closure of the direct unpublished suppliers
in `published-consumer-supplier-ledger.md` under the page requirements in
`plan-spec.json`. Phase 2 builds all and only these pairs. Recompute the
readiness column whenever a pair publishes or either controlling file changes.

`D` means a direct supplier root with a published consumer. `P` means an
unpublished prerequisite of a direct root. Each row names its A page; its B
page is the exact A-page id followed by `-examples`.

Current census: **70 pairs = 32 direct roots + 38 prerequisite pairs**.
Twenty-nine were introduced by the 2026-09-08 audit; forty-one were already
planned but unpublished. **Twenty pairs are buildable now.** Fifty wait on an
unpublished Phase 2 predecessor. Two waiting Functional Analysis pairs also
retain the full-text gates stated below.

No pair in this manifest may depend on a Recorded, Not Proved Here page or
item. In particular, SET-20, SET-21, and SET-22 are outside this closure.

## Pair inventory

| category | role | current state | A page id |
|---|---:|---|---|
| abstract-algebra | D | ready | `finite-averaging-and-character-theory-prerequisites` |
| algebraic-geometry | D | ready | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` |
| algebraic-topology | D | ready | `simplicial-subdivision-and-simplicial-approximation` |
| combinatorics | D | ready | `quantitative-induced-density-and-the-loglog-step` |
| computability-theory | D | ready | `finite-automata-transition-and-determinisation-interfaces` |
| computability-theory | D | ready | `turing-machine-configuration-boundary-interface` |
| computability-theory | D | waiting | `one-tape-simulation-normal-forms` |
| computability-theory | D | waiting | `effective-numberings-reductions-resources-and-randomness` |
| computability-theory | D | waiting | `sat-tableaux-and-quantified-space-completeness` |
| differential-geometry | P | ready | `measurable-densities-and-radon-volume-on-manifolds` |
| differential-geometry | D | waiting | `riemannian-metrics-length-distance-and-volume` |
| differential-geometry | D | waiting | `connections-levi-civita-and-parallel-transport` |
| differential-geometry | P | waiting | `geodesics-the-exponential-map-completeness-and-hopf-rinow` |
| differential-geometry | P | waiting | `lie-groups-invariant-fields-and-the-exponential-map` |
| differential-geometry | P | waiting | `lie-subgroups-actions-and-homogeneous-spaces` |
| differential-geometry | P | waiting | `lie-algebra-representations-enveloping-algebras-and-pbw` |
| differential-geometry | P | waiting | `solvable-and-nilpotent-lie-algebras` |
| differential-geometry | P | waiting | `semisimple-lie-algebras-cohomology-and-levi-theory` |
| differential-geometry | D | waiting | `cartan-subalgebras-and-root-space-decompositions` |
| differential-geometry | P | waiting | `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| differential-geometry | D | waiting | `highest-weight-theory-for-complex-semisimple-lie-algebras` |
| fourier-analysis | D | waiting | `kolmogorov-block-construction-and-almost-everywhere-divergence` |
| fourier-analysis | D | waiting | `carleson-hunt-time-frequency-theorem` |
| functional-analysis | D | ready | `norming-and-separation-under-hahn-banach` |
| functional-analysis | P | waiting | `sequential-uniform-boundedness-with-countable-choice` |
| functional-analysis | P | waiting | `locally-convex-spaces-and-continuous-separation` |
| functional-analysis | P | waiting | `weak-and-weak-star-topologies` |
| functional-analysis | P | waiting | `banach-alaoglu-goldstine-and-krein-milman` |
| functional-analysis | P | waiting; James full-text gate | `reflexivity-and-eberlein-smulian` |
| functional-analysis | P | waiting | `schauder-bases-approximation-and-banach-space-pathologies` |
| functional-analysis | P | waiting; RNP full-text gate | `banach-valued-integration-and-the-radon-nikodym-property` |
| functional-analysis | P | waiting | `hilbert-space-geometry-and-riesz-representation` |
| functional-analysis | P | waiting | `orthonormal-bases-parseval-and-fourier-series` |
| functional-analysis | P | waiting | `compact-operators-and-riesz-schauder-theory` |
| functional-analysis | D | waiting | `banach-space-differential-calculus-and-banach-manifolds` |
| functional-analysis | P | waiting | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| functional-analysis | D | waiting | `banach-algebras-spectrum-and-holomorphic-functional-calculus` |
| functional-analysis | P | waiting | `gelfand-theory-and-commutative-c-star-algebras` |
| functional-analysis | P | waiting | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` |
| functional-analysis | P | waiting | `spectral-measures-and-borel-functional-calculus` |
| functional-analysis | P | waiting | `unbounded-self-adjoint-operators-and-stones-theorem` |
| functional-analysis | P | waiting | `fourier-transform-convolution-and-approximate-identities` |
| functional-analysis | P | waiting | `schwartz-space-and-the-plancherel-theorem` |
| foundations | P | ready | `deduction-soundness-completeness-and-compactness` |
| foundations | P | waiting | `arithmetization-incompleteness-and-relative-consistency` |
| foundations | P | waiting | `reflection-absoluteness-and-elementary-submodels` |
| foundations | D | ready | `dependent-choice-and-the-complete-metric-baire-theorem` |
| foundations | P | waiting | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` |
| foundations | P | ready | `set-theoretic-trees-delta-systems-and-diamond` |
| foundations | P | waiting | `the-constructible-hierarchy-and-inner-models` |
| foundations | P | waiting | `condensation-gch-and-diamond-in-l` |
| foundations | P | waiting | `forcing-orders-names-and-generic-extensions` |
| foundations | P | waiting | `the-forcing-theorem-and-formal-consistency-transfer` |
| foundations | P | waiting | `preservation-cohen-forcing-and-the-continuum` |
| foundations | P | waiting | `finite-support-iterations-and-martins-axiom` |
| foundations | D | waiting | `suslin-trees-lines-algebras-and-independence` |
| foundations | P | waiting | `permutation-models-and-transfer-to-zf` |
| foundations | P | waiting | `symmetric-extensions-and-basic-choice-failure-models` |
| foundations | D | waiting | `boolean-prime-ideal-theorem-in-the-basic-cohen-model` |
| group-theory | D | ready | `small-cancellation-disc-diagrams-and-torsion-toolkit` |
| group-theory | D | ready | `modular-traces-and-brauer-character-independence` |
| group-theory | D | ready | `hall-malcev-coordinates-and-bass-guivarch-growth` |
| group-theory | D | ready | `quantitative-hyperbolic-geometry-toolkit` |
| group-theory | D | ready | `group-homology-transfer-and-low-degree-exact-sequences` |
| lie-theory | D | waiting | `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| measure-theory | D | ready | `complex-lp-spaces-and-test-function-conventions` |
| measure-theory | D | waiting | `complex-riesz-thorin-endpoint-interpolation` |
| pde | D | ready | `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` |
| pde | D | ready | `euclidean-surface-measure-divergence-and-green-identities` |
| representation-theory | D | ready | `galois-orbits-and-descent-of-simple-finite-group-modules` |

## Buildable now

These twenty A/B pairs have only published page prerequisites in the current
checkout and have no unresolved source gate in their binding scaffold:

1. `small-cancellation-disc-diagrams-and-torsion-toolkit` / `small-cancellation-disc-diagrams-and-torsion-toolkit-examples`
2. `finite-averaging-and-character-theory-prerequisites` / `finite-averaging-and-character-theory-prerequisites-examples`
3. `modular-traces-and-brauer-character-independence` / `modular-traces-and-brauer-character-independence-examples`
4. `complex-lp-spaces-and-test-function-conventions` / `complex-lp-spaces-and-test-function-conventions-examples`
5. `norming-and-separation-under-hahn-banach` / `norming-and-separation-under-hahn-banach-examples`
6. `hall-malcev-coordinates-and-bass-guivarch-growth` / `hall-malcev-coordinates-and-bass-guivarch-growth-examples`
7. `quantitative-hyperbolic-geometry-toolkit` / `quantitative-hyperbolic-geometry-toolkit-examples`
8. `group-homology-transfer-and-low-degree-exact-sequences` / `group-homology-transfer-and-low-degree-exact-sequences-examples`
9. `simplicial-subdivision-and-simplicial-approximation` / `simplicial-subdivision-and-simplicial-approximation-examples`
10. `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` / `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples`
11. `quantitative-induced-density-and-the-loglog-step` / `quantitative-induced-density-and-the-loglog-step-examples`
12. `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` / `analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples`
13. `euclidean-surface-measure-divergence-and-green-identities` / `euclidean-surface-measure-divergence-and-green-identities-examples`
14. `measurable-densities-and-radon-volume-on-manifolds` / `measurable-densities-and-radon-volume-on-manifolds-examples`
15. `galois-orbits-and-descent-of-simple-finite-group-modules` / `galois-orbits-and-descent-of-simple-finite-group-modules-examples`
16. `finite-automata-transition-and-determinisation-interfaces` / `finite-automata-transition-and-determinisation-interfaces-examples`
17. `turing-machine-configuration-boundary-interface` / `turing-machine-configuration-boundary-interface-examples`
18. `deduction-soundness-completeness-and-compactness` / `deduction-soundness-completeness-and-compactness-examples`
19. `dependent-choice-and-the-complete-metric-baire-theorem` / `dependent-choice-and-the-complete-metric-baire-theorem-examples`
20. `set-theoretic-trees-delta-systems-and-diamond` / `set-theoretic-trees-delta-systems-and-diamond-examples`

## Content gates

- `reflexivity-and-eberlein-smulian`: acquire and inspect a complete proof of
  the general James theorem before authoring that endpoint.
- `banach-valued-integration-and-the-radon-nikodym-property`: acquire and
  inspect complete proofs of the stated RNP equivalences before authoring
  those endpoints.

The other forty-eight waiting pairs are released by publishing their listed
Phase 2 predecessors and then recomputing this manifest. A pair is not ready
merely because its page shell exists or its prose inventory is complete.
