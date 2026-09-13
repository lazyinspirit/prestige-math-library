# phase-2-next-21 — Step 9 owner report

Run phase-2-next-21's frozen content - 42 pages and 765 items across seven categories, bound to content_sha256 562e3f8941eaf33a9105452f40fbb14d2768f403ba85c2d14c2505235b9d6011 - carries the packet's verdict publishable-pending-owner-approval: closure_closed is true, there are no workflow-owned blockers and no open fatal defect, 725 of 765 items have complete current verdicts, and the remaining 40 are closed by owner terminal resolution. That closure rests on an unusually heavy accuracy campaign: 217 fatal defects, every one classed accuracy, fixed or narrowed, overwhelmingly as a result of Step-7 adjudication after a judge rejection, with 27 items repaired two or more times. So the mathematics is closed in the sense that no known defect remains open, not in the sense that the text is unchanged or first-pass; the corpus this verdict would publish is the product of many late corrections. The packet's own remaining owner actions are the personal mathematical audit, the deliberate status:published change, and push/deployment. I performed no independent verification of any proof, statement, citation or rendering; everything below interprets the packet, with the named judge ledger opened only to explain one coverage caveat, and that cross-check is identified where used.

## What was built

- 42 pages and 765 items across 7 categories.
- Categories: algebraic-topology, differential-geometry, foundations, functional-analysis, measure-theory, probability, representation-theory.
- Item kinds: corollary 37; counterexample 34; definition 156; example 121; false-statement 47; lemma 94; proposition 76; remark 10; theorem 190.

## Verification closure

- Judge lineup: terra.
- Current judge verdicts complete: 725/765.
- Terminal resolutions after the 1-rejudge cap: 40 (owner: 40; items: cex-bch-truncation-fails-when-higher-commutators-do-not-vanish, cex-l1-bounded-martingale-need-not-converge-in-l1, def-conjugation-and-the-adjoint-representation-of-a-lie-group, def-milnor-infinite-join-model-of-eg, def-real-and-complex-lie-groups, def-square-integrable-martingale-difference-array-and-variance-clock, ex-azuma-bound-for-simple-random-walk, ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space, ex-general-and-special-linear-lie-groups, ex-reflexivity-of-ell-p-and-lp, ex-reverse-martingale-and-the-tail-sigma-algebra, ex-the-real-symplectic-matrix-group, ex-unitary-and-special-unitary-lie-groups, fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions, lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints, lem-free-cyclic-resolution-and-transfer-for-power-operations, lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold, lem-wreath-double-power-coefficient-symmetry, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, prop-lagrangian-neighborhood-germ-is-not-canonical, prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping, prop-loop-space-of-bg-recovers-g-up-to-homotopy, thm-cellular-cochains-compute-cohomology-with-local-coefficients, thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage, thm-doob-lp-maximal-inequality, thm-excision-and-mayer-vietoris-with-local-coefficients, thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra, thm-lie-subgroup-lie-subalgebra-correspondence, thm-local-normal-form-near-a-coisotropic-submanifold, thm-martingale-central-limit-theorem, thm-moser-stability-theorem, thm-obstruction-theory-for-lifting-through-a-fibration, thm-poincare-birkhoff-witt, thm-polynomial-growth-functions-define-tempered-distributions, thm-principal-bundles-are-classified-by-maps-to-bg, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations, thm-steenrod-squares-are-well-defined-and-natural, thm-symplectic-neighborhood-theorem, thm-the-primary-obstruction-class-is-independent-of-cellular-choices).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `5e62ea1f276458fe9886a788e813600a524fa941a0f5968e4d1e858af4921631`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 217 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| p2-next21-5a-d-two-step-ccc-limit-direction | thm-two-step-generic-factorization-and-ccc | accuracy | invalid-inference | proof-step 2.1 | fixed | 5a-adjudicate |
| p2-next21-5a-owner-finite-support-zf-carrier-and-top | def-finite-support-forcing-iteration | accuracy | missing-choice-scope | definition | fixed | 5a-adjudicate |
| p2-next21-5a-owner-hs-choice-free-rank-bound | thm-hereditarily-symmetric-interpretations-form-a-zf-model | accuracy | missing-choice-scope | proof-step 1.2 | fixed | 5a-adjudicate |
| p2-next21-5a-owner-hs-godel-criterion | thm-hereditarily-symmetric-interpretations-form-a-zf-model | accuracy | invalid-inference | proof-step 2.1 | fixed | 5a-adjudicate |
| p2-next21-5a-owner-two-step-set-carrier | def-two-step-forcing-iteration | accuracy | ill-typed-construction | definition | fixed | 5a-adjudicate |
| p2-next21-5a-owner-two-step-syntactic-ccc | thm-two-step-generic-factorization-and-ccc | accuracy | invalid-inference | proof-step 2.1 | fixed | 5a-adjudicate |
| p2-next21-5b-root-jech-embedding-unbounded-separation | thm-jech-sochor-first-embedding | accuracy | invalid-inference | proof-step 3.2 | fixed | 5b-cross |
| p2-next21-5b-root-lie-leaf-inverse-circularity | thm-lie-subgroup-lie-subalgebra-correspondence | accuracy | invalid-inference | proof-step 2.1 | fixed | 5b-cross |
| p2-next21-5b-root-obstruction-n1-relative-hurewicz | thm-the-primary-obstruction-cochain-is-a-cocycle | accuracy | invalid-inference | proof-step 3.1 | fixed | 5b-cross |
| p2-next21-5b-root-stability-degree-zero | cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces | accuracy | false-or-overstrong-statement | Statement | narrowed | 5b-cross |
| p2-next21-7-c-001 | def-equidistribution-mod-one | accuracy | undefined-notation | definition | fixed | 6-judge |
| p2-next21-7-c-002 | lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces | accuracy | ill-typed-claim | statement | fixed | 6-judge |
| p2-next21-7-c-003 | lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints | accuracy | false-or-overstrong-statement | statement | narrowed | 6-judge |
| p2-next21-7-c-004 | thm-polynomial-growth-functions-define-tempered-distributions | accuracy | invalid-inference | proof-step 3.1 | fixed | 6-judge |
| p2-next21-7-c-005 | ex-fourier-transform-of-dirac-and-one | accuracy | citation-inflated | proof-step 2.1 | fixed | 6-judge |
| p2-next21-7-c-006 | ex-fourier-transform-of-a-plane-wave | accuracy | citation-inflated | facts-block | fixed | 6-judge |
| p2-next21-7-c-007 | ex-fourier-transform-of-delta-derivatives-and-monomials | accuracy | citation-missing | proof-step 2.1 | fixed | 6-judge |
| p2-next21-7-c-008 | ex-dirac-comb-and-poisson-summation | accuracy | citation-missing | proof-step 1.1 | fixed | 6-judge |
| p2-next21-7-c-009 | def-schur-property | accuracy | false-claim | remark | fixed | 6-judge |
| p2-next21-7-c-010 | thm-ell-one-has-the-schur-property | accuracy | citation-missing | proof-step 4.1 | fixed | 6-judge |
| p2-next21-7-c-011 | ex-reflexivity-of-ell-p-and-lp | accuracy | citation-missing | proof-step 2.1 | fixed | 6-judge |
| p2-next21-7-c-012 | lem-eberlein-smulian-countable-compactness-closes-in-the-bidual | accuracy | citation-inflated | facts-block | fixed | 6-judge |
| p2-next21-7-c-013 | lem-james-norm-attainment-compactness-criterion | accuracy | ill-typed-claim | proof-step 1.3 | fixed | 6-judge |
| p2-next21-7-c-014 | thm-milman-converse-for-compact-generating-sets | accuracy | citation-inflated | facts-block | fixed | 6-judge |
| phase-2-next-21-step7-a-001 | def-sectional-curvature | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-002 | prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-003 | prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-004 | prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-005 | thm-gauss-equation-for-a-riemannian-submanifold | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-006 | thm-gausss-theorema-egregium | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-007 | fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-008 | prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-009 | fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-010 | ex-the-round-sphere-has-positive-constant-sectional-curvature | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-011 | cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending | accuracy | other | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-012 | ex-a-great-sphere-is-totally-geodesic | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-013 | ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-014 | cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-015 | cex-bch-truncation-fails-when-higher-commutators-do-not-vanish | accuracy | other | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-016 | def-conjugation-and-the-adjoint-representation-of-a-lie-group | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-017 | def-local-logarithm-on-a-lie-group | accuracy | other | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-018 | def-real-and-complex-lie-groups | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-019 | ex-general-and-special-linear-lie-groups | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-020 | ex-matrix-exponential-as-the-lie-group-exponential | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-021 | ex-the-additive-and-multiplicative-real-lie-groups | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-022 | ex-the-affine-group-of-the-line | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-023 | ex-the-heisenberg-lie-group-and-algebra | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-024 | ex-the-n-torus-and-its-exponential-lattice | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-025 | ex-the-real-symplectic-matrix-group | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-026 | ex-unitary-and-special-unitary-lie-groups | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-027 | fs-the-exponential-map-is-surjective-on-every-connected-lie-group | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-028 | fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism | accuracy | other | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-029 | prop-adjoint-exponential-identity | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-030 | prop-adjoint-is-a-smooth-lie-group-representation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-031 | prop-commuting-lie-algebra-elements-have-multiplicative-exponentials | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-032 | def-fundamental-vector-field-of-a-left-action | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-033 | def-principal-h-bundle-g-to-g-mod-h | accuracy | other | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-034 | def-semidirect-product-of-lie-algebras | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-035 | ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-036 | ex-standard-representations-of-classical-matrix-lie-algebras | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-037 | ex-the-kernel-and-image-of-the-determinant-homomorphism | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-038 | fs-a-free-action-always-has-a-manifold-orbit-space | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-039 | fs-every-lie-subalgebra-integrates-to-a-closed-lie-subgroup | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-040 | fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions | accuracy | other | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-041 | lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-042 | lem-the-smooth-structure-on-g-mod-h-is-independent-of-the-local-complement | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-043 | prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-044 | thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure | accuracy | other | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-045 | thm-continuous-homomorphisms-between-lie-groups-are-smooth | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-046 | thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-047 | thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-048 | thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-049 | thm-lie-subgroup-lie-subalgebra-correspondence | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-050 | thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-051 | thm-poincare-birkhoff-witt | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-052 | thm-quotient-manifold-by-a-closed-lie-subgroup | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-053 | thm-universal-covering-lie-group | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-054 | cex-poisson-commuting-functions-with-dependent-differentials-do-not-give-liouville-arnold-coordinates | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-055 | cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-056 | def-action-and-angle-coordinates | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-057 | def-fibre-derivative-and-legendre-transform-of-a-lagrangian | accuracy | other | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-058 | def-tautological-one-form-on-a-cotangent-bundle | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-059 | def-time-dependent-hamiltonian-vector-field-and-flow | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-060 | ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-061 | ex-darboux-coordinates-for-a-nonconstant-area-form | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-062 | ex-isotropic-coisotropic-and-lagrangian-coordinate-subspaces | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-063 | ex-the-cotangent-bundle-of-a-circle-as-a-symplectic-cylinder | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-064 | lem-moser-pullback-differentiation-equation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-065 | lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-066 | prop-f-is-a-first-integral-of-h-iff-f-and-h-poisson-commute | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-067 | prop-hamiltonian-vector-fields-are-symplectic-and-symplectic-fields-are-locally-hamiltonian | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-068 | prop-lagrangian-neighborhood-germ-is-not-canonical | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-069 | prop-regular-common-level-sets-are-lagrangian-submanifolds | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-070 | rem-compatible-almost-complex-structures-and-kahler-geometry | accuracy | other | remark | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-071 | thm-equivalent-characterizations-of-lagrangian-subspaces | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-072 | thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-073 | thm-liouville-arnold-action-angle-theorem | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-074 | thm-local-normal-form-near-a-coisotropic-submanifold | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-075 | thm-moser-stability-theorem | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-076 | thm-symplectic-neighborhood-theorem | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-a-077 | thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup | accuracy | scope-loss | frontmatter | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-001 | cex-the-top-square-formula-does-not-define-all-lower-squares | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-002 | cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-003 | cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces | accuracy | citation-truncated | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-004 | def-bockstein-connecting-operation | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-005 | def-right-group-ring-action-on-the-chains-of-a-universal-cover | accuracy | citation-missing | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-006 | def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-007 | ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-008 | ex-p-sections-and-brauer-subsections-in-a-small-finite-group | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-009 | ex-real-projective-infinity-as-b-z-two | accuracy | citation-missing | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-010 | ex-second-main-theorem-with-no-inducing-local-block | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-011 | ex-steenrod-squares-on-real-projective-space | accuracy | false-boundary-disposition | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-012 | ex-the-orientation-system-of-the-mobius-band | accuracy | citation-truncated | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-013 | ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map | accuracy | missing-hypothesis | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-014 | ex-wu-classes-of-a-closed-surface | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-015 | lem-adem-double-power-comparison | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-016 | lem-equivariant-p-fold-external-power-and-diagonal | accuracy | missing-hypothesis | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-017 | lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere | accuracy | false-or-overstrong-statement | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-018 | lem-free-cyclic-resolution-and-transfer-for-power-operations | accuracy | false-or-overstrong-title | title | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-019 | lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-020 | lem-local-block-projection-controls-generalized-decomposition-support | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-021 | lem-mod-two-cohomology-ring-of-infinite-real-projective-space | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-022 | lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail | accuracy | citation-inflated | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-023 | lem-wreath-double-power-coefficient-symmetry | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-024 | prop-loop-space-of-bg-recovers-g-up-to-homotopy | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-025 | prop-steenrod-square-normalization-instability-and-top-square | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-026 | prop-the-manifold-orientation-system-is-a-local-system | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-027 | prop-the-mod-two-bockstein-is-a-derivation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-028 | prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-029 | thm-cellular-chains-compute-homology-with-local-coefficients | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-030 | thm-cellular-cochains-compute-cohomology-with-local-coefficients | accuracy | missing-choice-scope | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-031 | thm-cup-i-coboundary-identity | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-032 | thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-033 | thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-034 | thm-excision-and-mayer-vietoris-with-local-coefficients | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-035 | thm-generalized-decomposition-numbers-exist-and-are-unique | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-036 | thm-obstruction-theory-for-lifting-through-a-fibration | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-037 | thm-poincare-duality-with-the-orientation-local-system | accuracy | citation-inflated | statement | narrowed | 7-adjudicate |
| phase-2-next-21-step7-b-038 | thm-principal-bundles-are-classified-by-maps-to-bg | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-039 | thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-040 | thm-milnor-join-model-is-a-contractible-free-g-space | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-041 | thm-simple-postnikov-stages-are-classified-by-k-invariants | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-042 | thm-steenrod-squares-are-well-defined-and-natural | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-b-043 | thm-the-primary-obstruction-class-is-independent-of-cellular-choices | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-001 | cex-l1-bounded-martingale-need-not-converge-in-l1 | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-002 | cex-almost-sure-martingale-convergence-need-not-preserve-expectation | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-003 | cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time | accuracy | undefined-notation | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-004 | cor-gamblers-ruin-hitting-probability-from-optional-stopping | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-005 | def-square-integrable-martingale-difference-array-and-variance-clock | accuracy | ill-formed | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-006 | ex-azuma-bound-for-simple-random-walk | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-007 | ex-dyadic-martingale-converges-to-the-original-l1-variable | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-008 | ex-expected-duration-of-simple-gamblers-ruin | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-009 | ex-gamblers-ruin-probability-for-a-biased-walk | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-010 | ex-lp-bounded-martingale-with-an-lp-terminal-value | accuracy | undefined-notation | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-011 | ex-nonnegative-martingale-converges-almost-surely | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-012 | ex-reverse-martingale-and-the-tail-sigma-algebra | accuracy | ill-formed | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-013 | ex-stopping-a-likelihood-ratio-martingale | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-014 | ex-walds-equation-for-a-bounded-stopping-time | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-015 | lem-conditional-hoeffding-bound-for-bounded-martingale-differences | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-016 | lem-doob-upcrossing-inequality | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-017 | lem-equivalent-event-tests-for-a-discrete-stopping-time | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-018 | lem-minimum-maximum-and-bounded-shifts-of-stopping-times | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-019 | rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis | accuracy | false-claim | remark | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-020 | thm-a-stopped-martingale-is-a-martingale | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-021 | thm-azuma-hoeffding-inequality | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-022 | thm-closed-martingale-characterization | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-023 | thm-doob-l1-maximal-inequality | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-024 | thm-doob-lp-maximal-inequality | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-025 | thm-levy-downward-convergence-of-conditional-expectations | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-026 | thm-lp-bounded-martingale-convergence | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-027 | thm-martingale-central-limit-theorem | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-028 | thm-optional-sampling-for-bounded-stopping-times | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-029 | thm-optional-stopping-under-uniform-integrability | accuracy | undefined-notation | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-030 | thm-optional-stopping-with-integrable-time-and-bounded-increments | accuracy | ill-formed | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-031 | ex-two-cohen-reals-as-mutually-generic-coordinates | accuracy | ill-formed | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-032 | fs-ccc-means-countably-closed | accuracy | ill-formed | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-033 | thm-collapse-and-levy-collapse-effects | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-034 | thm-mutually-generic-cohen-coordinate-reals | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-035 | thm-nice-name-reduction-and-counting | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-036 | lem-formal-cohen-forcing-verification-compiler | accuracy | missing-hypothesis | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-037 | def-finite-support-forcing-iteration | accuracy | ill-formed | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-038 | def-martins-axiom | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-039 | def-omega-two-ma-bookkeeping-iteration | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-040 | ex-ma-diagonal-real | accuracy | ill-formed | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-041 | lem-bounded-stage-capture-in-finite-support-iterations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-042 | lem-finite-support-iteration-size-bound | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-043 | lem-iteration-restrictions-and-complete-embeddings | accuracy | citation-inaccurate | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-044 | lem-ma-reduction-to-small-ccc-orders | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-045 | lem-formal-ma-iteration-verification-compiler | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-046 | thm-finite-support-iterations-preserve-ccc | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-047 | thm-ma-products-of-ccc-spaces-are-ccc | accuracy | false-or-overstrong-title | title | narrowed | 7-adjudicate |
| phase-2-next-21-step7-d-048 | thm-ma-small-unions-of-meagre-sets | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-049 | thm-ma-small-unions-of-null-sets | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-050 | thm-omega-two-iteration-forces-ma-and-not-ch | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-051 | thm-two-step-generic-factorization-and-ccc | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-052 | def-zfa-universe-atoms-and-kernel | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-053 | def-symmetric-and-hereditarily-symmetric-sets | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-054 | def-boundable-sentence-over-an-atom-set | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-055 | thm-fraenkel-mostowski-permutation-model | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-056 | def-forcing-name-automorphism-action | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-057 | def-symmetric-forcing-system-and-hereditarily-symmetric-names | accuracy | ill-typed-claim | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-058 | def-basic-cohen-symmetric-system | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-059 | lem-symmetry-lemma-for-forcing-automorphisms | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-060 | thm-hereditarily-symmetric-interpretations-form-a-zf-model | accuracy | invalid-witness | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-061 | lem-basic-cohen-generic-reals-form-a-symmetric-set | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-062 | thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-063 | thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-064 | cor-basic-cohen-model-fails-well-orderability-and-choice | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-065 | ex-basic-cohen-orbit-name-without-enumeration | accuracy | citation-truncated | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-066 | thm-second-fraenkel-model-countable-pairs-without-choice | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-067 | ex-second-fraenkel-sock-swap | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-068 | ex-atom-free-socks-coordinate-swap | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-069 | thm-jech-sochor-first-embedding | accuracy | citation-misattributed | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-070 | thm-jech-sochor-transfer-for-boundable-sentences | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-071 | lem-jech-sochor-socks-transfer-is-uniformly-formalizable | accuracy | unsupported-inference | proof-step | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-072 | cor-zf-countable-family-of-pairs-without-choice | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-next-21-step7-d-073 | lem-basic-cohen-symmetric-construction-is-uniformly-formalizable | accuracy | unsupported-inference | proof-step | fixed | 7-adjudicate |

Grouped by class: accuracy 217.
Grouped by location: definition 27; facts-block 38; frontmatter 1; proof-step 100; proof-step 1.1 1; proof-step 1.2 1; proof-step 1.3 1; proof-step 2.1 7; proof-step 3.1 2; proof-step 3.2 1; proof-step 4.1 1; remark 3; statement 31; Statement 1; title 2.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-5.6-terra | 1015 | 713 | 302 | 0 |

Across 1015 text version(s) with configured-judge evidence: 1015 complete model set(s), 713 all keep, 302 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 206; confirmed_nonfatal 6; false_positive 12.

## Repeated repairs and pathway closure

Items repaired more than once: def-boundable-sentence-over-an-atom-set (3); lem-finite-support-iteration-size-bound (3); lem-symmetry-lemma-for-forcing-automorphisms (3); thm-jech-sochor-first-embedding (3); cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper (2); cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces (2); cor-gamblers-ruin-hitting-probability-from-optional-stopping (2); def-finite-support-forcing-iteration (2); def-forcing-name-automorphism-action (2); def-omega-two-ma-bookkeeping-iteration (2); ex-reflexivity-of-ell-p-and-lp (2); ex-wu-classes-of-a-closed-surface (2); lem-basic-cohen-symmetric-construction-is-uniformly-formalizable (2); lem-bounded-stage-capture-in-finite-support-iterations (2); lem-doob-upcrossing-inequality (2); lem-iteration-restrictions-and-complete-embeddings (2); lem-ma-reduction-to-small-ccc-orders (2); prop-regular-common-level-sets-are-lagrangian-submanifolds (2); thm-finite-support-iterations-preserve-ccc (2); thm-fraenkel-mostowski-permutation-model (2); thm-hereditarily-symmetric-interpretations-form-a-zf-model (2); thm-lie-subgroup-lie-subalgebra-correspondence (2); thm-ma-small-unions-of-null-sets (2); thm-nice-name-reduction-and-counting (2); thm-optional-stopping-under-uniform-integrability (2); thm-optional-stopping-with-integrable-time-and-bounded-increments (2); thm-two-step-generic-factorization-and-ccc (2).
Pathway obligations closed: 3/3; categories: foundations, functional-analysis, measure-theory.

## Caveats

- Coverage is a mix of certifications, not 765 judge-verified items. The packet's 40 owner terminal resolutions are excluded from the 725 complete verdicts; checking the named judge ledger to explain this caveat, the 28 repaired items' final text carries no judge verdict at all, while the 12 accepted-after-review items carry a judge rejection (keep=false) on the identical frozen item hash, overruled by the owner. Publication should not be described as judge-verified throughout.
- Every fatal defect is class accuracy, and the dominant failure mode is overclaiming from sources or dependencies: of the 217 fatal rows, citation-inflated 72, invalid-inference 37, missing-hypothesis 22, citation-inaccurate 14, citation-missing 11, citation-truncated 9, citation-misattributed 1. The characteristic risk in this corpus is a citation asked to carry more than the cited statement supplies, not a computational slip.
- Defects were not confined to proofs. by_location records 100 proof-step rows but also 38 facts-block, 31 statement plus 1 Statement, 27 definition, 3 remark, 2 title and 1 frontmatter rows, so published statements, definitions and titles were themselves corrected; a reader meets those interfaces before any proof.
- Twelve fatal rows were closed by narrowing - ten statements and two titles (for example phase-2-next-21-step7-b-018 on lem-free-cyclic-resolution-and-transfer-for-power-operations and phase-2-next-21-step7-d-047 on thm-ma-products-of-ccc-spaces-are-ccc), one at cost narrow-statement. Those items now assert strictly less than what was originally authored, and I did not re-derive whether dependents relied on the removed strength.
- Churn is concentrated rather than uniform: 27 items were repaired two or more times and four were repaired three times (def-boundable-sentence-over-an-atom-set, lem-finite-support-iteration-size-bound, lem-symmetry-lemma-for-forcing-automorphisms, thm-jech-sochor-first-embedding). Repeated repair is direct evidence that earlier repairs failed review, so these carry the highest residual risk.
- Eighteen judge rejections were overruled rather than repaired - 6 confirmed_nonfatal and 12 false_positive out of 224 adjudication rows. Those items keep their content against a recorded judge rejection; the overrule is an adjudicator judgement I did not re-audit, so their retained text is a deliberate decision rather than a judge-kept one.
- Unresolved certification basis for two ids. The named judge-closure artifact binds four items in the auditor-created certification class, and two of them - lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure and lem-mod-two-cohomology-ring-of-infinite-real-projective-space - hold only a rejected judge row and no judge verdict on the current text. The step-9 packet does not surface this class, so whether it applies as the sanctioned genuinely-created-by-an-authorised-auditor exception, rather than as an edit of a pre-existing item requiring ordinary judge evidence, cannot be confirmed from the packet; I flag it as an open question, not as a finding.
- This is interpretation, not verification. No proof, statement, citation, dependency or rendering was re-derived for this report; the judge statistics are version-level (1015 judged versions, 713 kept and 302 rejected, no mixed rows) under one configured judge set with no cross-judge agreement recorded; and closure_closed is a bookkeeping state about the record, not a new mathematical result. The only independent mathematical check on the frozen content remains the owner's personal audit.

## Owner reading priorities

- The four thrice-repaired items: def-boundable-sentence-over-an-atom-set, lem-finite-support-iteration-size-bound, lem-symmetry-lemma-for-forcing-automorphisms, thm-jech-sochor-first-embedding: These are the run's churn maxima, where earlier versions already failed review at least twice; if any accuracy defect survives, it is most likely here. Read each end to end against the exact statements it cites.
- The twelve statements and titles closed by narrowing, for example lem-free-cyclic-resolution-and-transfer-for-power-operations, thm-ma-products-of-ccc-spaces-are-ccc, thm-cellular-cochains-compute-cohomology-with-local-coefficients: Narrowing changed the content contract rather than a proof step. Confirm the weakened claim is still the mathematics the library should teach, and that no dependent item silently assumes the strength that was removed.
- The forcing / Martin's-Axiom / Cohen-model cluster around thm-finite-support-iterations-preserve-ccc, thm-two-step-generic-factorization-and-ccc, thm-hereditarily-symmetric-interpretations-form-a-zf-model, thm-jech-sochor-first-embedding: This cluster combines the heaviest repair churn with the run's dominant defect class (citation-inflation) and leans on sources outside the library, so its dependency interfaces and formalization claims deserve the closest reading.
- The twelve accepted-after-review items, for example thm-poincare-birkhoff-witt, prop-loop-space-of-bg-recovers-g-up-to-homotopy, lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints: Publishing these ships text the configured judge rejected at exactly that frozen hash. The owner acceptance should be re-affirmed deliberately on the record, or the item re-opened, rather than inherited as an engine closure.
- The twenty-eight repaired items whose final text has no judge verdict, for example ex-reflexivity-of-ell-p-and-lp, thm-martingale-central-limit-theorem, thm-moser-stability-theorem, thm-lie-subgroup-lie-subalgebra-correspondence: These publish on owner-terminal closure alone. Decide consciously between accepting that basis and spending a re-judge cycle on the exact final hashes, and note that any further content change restarts certification.
- Statement- and definition-level corrections in the Lie-group, symplectic and Riemannian items, for example def-sectional-curvature, def-real-and-complex-lie-groups, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials: Readers and dependents meet these interfaces first, and the packet shows definitions and statements were corrected rather than only proof steps; a wrong definition or statement propagates further than a wrong proof step.
- The two auditor-certified ids with a standing judge rejection: lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure and lem-mod-two-cohomology-ring-of-infinite-real-projective-space: Their certification basis is not visible anywhere in the step-9 packet. Confirm it matches the sanctioned auditor-created class; if these are instead edits of pre-existing items, ordinary current judge evidence is required before publication.
- The three rewritten reading-order briefs for foundations, functional-analysis and measure-theory: The pathway section shows all three obligations closed by rewriting. These reader-facing maps changed late, cover newly gained pages, and sit outside the item-level judge pipeline, so a coherence skim is cheap insurance.

## Workflow recommendations

1. Have the owner read the four thrice-repaired items end to end against the exact dependency statements they cite before publication. (risk: low) — Concentrates scarce personal-audit attention where repairs already failed at least twice, the likeliest location of any surviving accuracy defect. Evidence: research/phase-2-next-21-step9-evidence.json repeated_repairs lists def-boundable-sentence-over-an-atom-set, lem-finite-support-iteration-size-bound, lem-symmetry-lemma-for-forcing-automorphisms and thm-jech-sochor-first-embedding with repairs: 3.
2. Re-decide every narrowed statement or title explicitly: either re-affirm the weaker claim as the intended content, or restore the intended strength with a fresh proof and a fresh judge pass. (risk: medium) — Prevents publishing claims that no longer say what the library set out to teach, and catches dependents that assumed the strength removed by narrowing. Evidence: defects.fatal rows with disposition narrowed, e.g. phase-2-next-21-step7-b-018 (title of lem-free-cyclic-resolution-and-transfer-for-power-operations), phase-2-next-21-step7-d-047 (title of thm-ma-products-of-ccc-spaces-are-ccc) and phase-2-next-21-step7-b-030 (narrow-statement); a material rewrite invalidates the prior judge record.
3. Aim the personal mathematical audit at dependency and citation text: sample the forcing/MA/Cohen items and the symplectic/Lie items, and re-check each citation against the cited item's exact statement. (risk: low) — Attacks the run's dominant defect class where a citation is load-bearing for a proof, which is where a reader is least able to notice a mismatch. Evidence: defects.by_subclass: citation-inflated 72, citation-inaccurate 14, citation-missing 11, citation-truncated 9 and citation-misattributed 1 among the 217 fatal accuracy rows.
4. Choose and record a policy for the 40 owner-terminal items: accept them under terminal closure, or run one confirmatory pass on those exact final hashes. (risk: medium) — Removes the only gap between 765 items in scope and 725 with complete verdicts, so the published state can be described without qualification. Evidence: verification.verdicts_complete 725 against scope 765; verification.terminal_resolutions 40 rows with resolved_by owner; the named judge ledger holds no keep row at the repaired items' final item_sha256.
5. Re-affirm in writing, or re-open, the twelve accepted-after-review items whose frozen hashes carry a judge rejection. (risk: medium) — Makes the owner overrule auditable and prevents a judge-rejected version shipping as if it had been judge-kept. Evidence: terminal_resolutions dispositions accepted-after-review with item_sha256 values such as 2f8b4d05 for thm-poincare-birkhoff-witt and 18a7ca8c for thm-steenrod-squares-are-well-defined-and-natural, each matching a judge row with keep=false.
6. Confirm the auditor-created certification basis for the two flagged ids, or route them through the ordinary judge evidence path. (risk: medium) — Closes an unresolved certification question that the step-9 packet cannot answer and that would otherwise surface only after publication. Evidence: the named judge-closure artifact lists lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure and lem-mod-two-cohomology-ring-of-infinite-real-projective-space as auditor_certified, while the judge ledger holds only a keep=false row for each.
7. Spot-check the repaired false-statement and counterexample items, where the item's contract is the exact falsity or the refutation direction. (risk: low) — Protects the pedagogically load-bearing false-statement and counterexample items, whose value collapses if the claimed failure direction is subtly wrong. Evidence: fatal subjects include fs-ccc-means-countably-closed, fs-the-exponential-map-is-surjective-on-every-connected-lie-group and cex-bch-truncation-fails-when-higher-commutators-do-not-vanish, within the build's 47 false-statements and 34 counterexamples.
8. Skim the three rewritten pathway briefs for reading-order coherence before deployment. (risk: low) — Keeps the reader-facing map correct and complete after late rewrites in categories whose pages gained new material. Evidence: pathway section: obligations 3, closed 3, dispositions rewritten 3, categories foundations, functional-analysis, measure-theory.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
