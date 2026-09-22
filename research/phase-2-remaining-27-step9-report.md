# phase-2-remaining-27 — Step 9 owner report

The packet closes run phase-2-remaining-27 at a frozen content state (readiness.content_sha256 b9ef8afbdcbf0429276604458ad713cccc7a2f621383368f29f801b168ce8e17): 54 pages and 1040 items across five categories, with 1007 items carrying complete in-loop judge verdict pairs and 33 closed by terminal final-adjudicator resolutions, closure_closed true and zero workflow-owned blockers. The defect record is large but almost entirely discharged: 1322 total rows, 1107 fatal rows over 749 distinct subjects (1095 fixed, 8 narrowed, 4 deferred), and 317 adjudicated rejections resolving to 128 confirmed-fatal, 166 confirmed-nonfatal and 23 false-positive outcomes. My reading is that mathematical closure is real but rests on heterogeneous certification: ordinary in-loop judge evidence for most items, adjudicator authority for the 33 terminal items, and one confirmed fatal definition defect on a published item deferred to the owner. No packet field is an unresolved workflow blocker; the remaining decisions are the three recorded owner actions, so approval should follow the owner's own audit of the deferred defect and of the highest-churn and terminal-lane item classes rather than the closure flags alone.

## What was built

- 54 pages and 1040 items across 5 categories.
- Categories: algebraic-topology, differential-geometry, foundations, functional-analysis, probability.
- Item kinds: corollary 56; counterexample 48; definition 186; example 158; false-statement 39; lemma 164; proposition 74; remark 34; theorem 281.

## Verification closure

- Judge lineup: terra.
- Current judge verdicts complete: 1007/1040.
- Terminal resolutions after the 1-rejudge cap: 33 (final-adjudicator: 33; items: cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian, cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two, cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation, cor-brownian-paths-have-infinite-total-variation-on-every-interval, cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus, cor-normalized-haar-measure-on-a-compact-lie-group, def-quadratic-variation-along-a-partition-sequence, def-reduced-generalized-cohomology-theory, def-torus-and-maximal-torus-in-a-compact-lie-group, ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle, ex-diagonal-action-and-addition-of-angular-momenta, ex-normalized-haar-measure-on-a-torus, ex-standard-inner-products-on-kn-ell-two-and-l-two, fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant, fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition, lem-brownian-zero-set-has-lebesgue-measure-zero, lem-edge-maps-of-a-bounded-skeletal-ahss, lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three, lem-pi-three-so-three-generated-by-the-quaternion-double-cover, lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants, prop-ahss-collapse-determines-only-the-associated-graded-object, prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system, prop-root-systems-decompose-uniquely-into-irreducible-components, thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval, thm-brownian-paths-are-nowhere-differentiable, thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, thm-hilbert-adjoint-properties, thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra, thm-maximal-tori-exist-in-compact-lie-groups, thm-structure-of-a-compact-connected-abelian-lie-group, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `d3e638db38f99e52c6f7aab84a75641ff6d84be96642d956fe1ff1e8b1367bb1`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 1107 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| e-14-bing-disjointness | thm-bing-q-set-moore-space-is-normal-and-nonmetrizable | accuracy | unlicensed-inference | proof-step 2.5 | fixed | 5a-adjudicate |
| e-14-qset-base | lem-ma-produces-an-uncountable-q-set | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| e-14-solovay-hypothesis | lem-solovay-almost-disjoint-extension-under-ma | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| e-14-solovay-poset | lem-solovay-almost-disjoint-extension-under-ma | accuracy | unlicensed-inference | proof-steps 2.2-2.3 | fixed | 5a-adjudicate |
| e-14-touched-bing | thm-bing-q-set-moore-space-is-normal-and-nonmetrizable | accuracy | false-claim | proof-step 2.5 | fixed | 5a-adjudicate |
| e-14-touched-dc-baire | thm-dc-iff-products-compact-hausdorff-are-baire | accuracy | ill-formed | proof-steps 4.1-7.1 | fixed | 5a-adjudicate |
| e-14-touched-dmc-tree | thm-dmc-tree-and-successor-menu-formulations | accuracy | false-claim | proof-step 3.1 | fixed | 5a-adjudicate |
| e-14-touched-effective | thm-effective-metacompact-discrete-metrics-implies-ac | accuracy | unlicensed-inference | proof-steps 1.1-4.1 | fixed | 5a-adjudicate |
| e-15-raisonnier-boundary | thm-raisonnier-filter-is-rapid-from-null-code-measurability | accuracy | unlicensed-inference | proof-step 3.2 | fixed | 5a-adjudicate |
| e-15-touched-composition | thm-shelah-universal-meagre-composition-preserves-sweetness | accuracy | unlicensed-inference | proof-step 5.2 | fixed | 5a-adjudicate |
| e-15-touched-rapid-filters | thm-rapid-filters-are-not-lebesgue-measurable | accuracy | arithmetic-error | proof-step 3.2 | fixed | 5a-adjudicate |
| e-15-touched-um-definition | def-shelah-universal-meagre-forcing | accuracy | false-claim | definition | fixed | 5a-adjudicate |
| e-15-um-compatibility | def-shelah-universal-meagre-forcing | accuracy | false-claim | definition | fixed | 5a-adjudicate |
| e-15-union-automorphism-reader | thm-shelah-ch-omega-one-sweet-construction | accuracy | unlicensed-inference | proof-step 3.2 | fixed | 5a-adjudicate |
| e-15-union-automorphism-refuter | thm-shelah-ch-omega-one-sweet-construction | accuracy | unlicensed-inference | proof-step 3.2 | fixed | 5a-adjudicate |
| e-3-ell-infinity-ambient | cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold | accuracy | false-claim | statement | narrowed | 5a-adjudicate |
| e-3-manifold-remark | def-countable-base-banach-manifold-and-smooth-map | accuracy | false-claim | remark | fixed | 5a-adjudicate |
| e-3-projection-hypothesis | ex-a-projection-with-finite-dimensional-kernel-is-fredholm | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| e-3-regular-level-hypothesis | ex-a-regular-level-set-in-a-banach-space | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| e-3-touched-ift | thm-inverse-function-theorem-for-banach-spaces | accuracy | false-claim | proof-steps 9.1-10.1 | fixed | 5a-adjudicate |
| e-3-touched-local-reduction | lem-local-finite-dimensional-reduction-for-a-fredholm-map | accuracy | unlicensed-inference | proof-step 5.1 | fixed | 5a-adjudicate |
| p2r27-c-5a-004 | ex-adjoints-of-shifts-multiplication-and-integral-operators | accuracy | false-computation | proof-step 1.3 | fixed | 5a-adjudicate |
| p2r27-c-5a-005 | thm-hilbert-space-fourier-expansion | accuracy | false-claim | Statement | fixed | 5a-adjudicate |
| p2r27-c-5a-007 | thm-atkinson | accuracy | false-claim | proof-step 2.2 | fixed | 5a-adjudicate |
| p2r27-c-5a-008 | thm-l-two-kernels-give-hilbert-schmidt-operators | accuracy | false-computation | proof-step 4.1 | fixed | 5a-adjudicate |
| p2r27-c-5a-013 | ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection | accuracy | false-computation | proof-step 1.2 | fixed | 5a-adjudicate |
| p2r27-c-5a-016 | thm-numerical-radius-is-an-equivalent-operator-norm | accuracy | false-computation | proof-step 2.2 | fixed | 5a-adjudicate |
| p2r27-step7-preflight-d-004-correction | ex-expected-exit-time-from-an-interval-via-ito-formula | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| p2r27-step7-preflight-d-005-correction | lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| p2r27-step7-preflight-d-006-correction | thm-brownian-paths-are-nowhere-differentiable | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| p2r27-step7-preflight-d-008 | cex-finite-quadratic-variation-does-not-imply-finite-total-variation | accuracy | false-or-overstrong-statement | statement | narrowed | 7-adjudicate |
| p2r27-step7-preflight-d-009 | thm-density-of-elementary-predictable-processes-in-predictable-l2 | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-5a-b-002 | ex-complex-k-ahss-for-a-closed-oriented-surface | accuracy | false-computation | proof-steps 2.1-4.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-003 | ex-complex-k-ahss-for-real-projective-space | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-005 | lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions | accuracy | false-claim | proof-step 1.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-006 | lem-edge-maps-of-a-bounded-skeletal-ahss | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-008 | lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-020 | prop-first-stiefel-whitney-class-classifies-orientability | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-021 | prop-first-stiefel-whitney-class-classifies-orientability | accuracy | invalid-inference | proof-step 1.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-024 | def-invertible-element-and-general-linear-group-of-a-banach-algebra | accuracy | false-claim | remark | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-028 | ex-spectrum-of-the-unilateral-shift | accuracy | false-claim | proof-step 3.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-031 | lem-submultiplicative-root-limit | accuracy | arithmetic-error | proof-step 2.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-033 | thm-boundary-of-spectrum-lies-in-approximate-point-spectrum | accuracy | false-claim | proof-step 1.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-036 | thm-spectral-radius-formula | accuracy | arithmetic-error | proof-step 3.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-037 | thm-gelfand-mazur | accuracy | false-claim | remark | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-038 | thm-spectral-radius-formula | accuracy | unlicensed-inference | proof-step 6.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-039 | ex-spectrum-of-the-unilateral-shift | accuracy | false-claim | proof-step 2.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-5a-b-040 | ex-unitization-of-a-nonunital-banach-algebra | accuracy | false-claim | proof-step 1.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-a-5a-11 | def-toral-and-maximal-toral-subalgebra | accuracy | false-claim | definition | fixed | 5a-adjudicate |
| phase-2-remaining-27-a-5a-28 | thm-conjugacy-of-maximal-tori | accuracy | false-claim | proof-step 4.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-a-5a-43 | lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| phase-2-remaining-27-A7-e-001 | cex-compact-does-not-imply-hilbert-schmidt | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-002 | cex-trace-of-products-is-not-cyclic-without-summability | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-003 | cor-brunner-models-also-refute-tietze-extension | accuracy | citation-misattributed | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-004 | cor-compact-operator-iff-approximation-numbers-tend-to-zero | accuracy | ill-typed-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-005 | cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators | accuracy | arithmetic-error | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-006 | cor-zf-does-not-prove-urysohn-lemma | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-007 | def-absolute-value-and-singular-values-of-a-compact-operator | accuracy | ill-typed-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-008 | def-boldface-sigma-one-three-measurability | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-009 | def-brunner-ordered-lauchli-permutation-models | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-010 | def-corson-ordered-rational-permutation-model | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-011 | def-countable-base-banach-manifold-and-smooth-map | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-012 | def-dependent-multiple-choice-finite-level-tree | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-013 | def-fleissner-hyp-covering-interface | accuracy | false-or-overstrong-statement | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-014 | def-good-tree-watson-symmetric-stone-model | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-015 | def-metacompact-space | accuracy | false-or-overstrong-statement | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-016 | def-moore-spaces-and-developments | accuracy | missing-case | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-017 | def-product-measure-extension-axioms-pmea-and-pmea-sigma | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-018 | def-q-sets-and-heath-moore-space-interface | accuracy | missing-case | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-019 | def-rapid-and-raisonnier-filters | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-020 | def-shelah-sweetness-model | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-021 | def-shelah-universal-meagre-forcing | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-022 | def-smooth-banach-vector-bundle-and-section | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-023 | def-split-banach-submanifold | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-024 | def-tangent-space-and-differential-on-a-banach-manifold | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-025 | def-trace-class-operator | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-026 | ex-a-projection-with-finite-dimensional-kernel-is-fredholm | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-027 | ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-028 | ex-canonical-least-ball-selection-in-separable-baire-proof | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-029 | ex-development-stars-form-a-countable-local-base | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-030 | ex-diagonal-schatten-class-criteria-on-ell-two | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-031 | ex-dmc-urysohn-finite-menu-intersection | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-032 | ex-pmea-three-quarter-event-calculation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-033 | ex-rank-one-operator-adjoint-norm-and-trace | accuracy | citation-missing | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-034 | ex-sweet-amalgam-over-a-common-complete-subalgebra | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-035 | ex-uniform-null-capture-on-a-block-function | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-036 | ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-037 | fs-bpi-proves-stone-for-metric-spaces | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-038 | fs-zfc-proves-normal-moore-space-conjecture | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-039 | lem-banach-mean-value-estimate-on-a-convex-set | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-040 | lem-brunner-choice-and-urysohn-obstructions | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-041 | lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-042 | lem-corson-rational-metric-not-metacompact | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-043 | lem-corson-stone-obstruction-is-ordinal-boundable | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-044 | lem-good-tree-watson-omega-sequence-closure | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-045 | lem-good-tree-watson-selector-obstruction | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-046 | lem-isolated-point-kelley-repair | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-047 | lem-ladder-separation-from-hyp | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-048 | lem-local-finite-dimensional-reduction-for-a-fredholm-map | accuracy | ill-typed-construction | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-049 | lem-ma-produces-an-uncountable-q-set | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-050 | lem-measurable-null-code-orders-bound-constructible-null-unions | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-051 | lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-052 | lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-053 | lem-nuclear-series-characterizes-trace-norm | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-054 | lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-055 | lem-pmea-three-quarter-separation-estimate | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-056 | lem-pmea-three-quarter-separation-estimate | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-057 | lem-positive-square-root-of-a-compact-positive-operator | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-058 | lem-raisonnier-family-is-a-sigma-one-three-filter | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-059 | lem-shelah-continuous-unions-of-sweetness-models | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-060 | lem-shelah-homogeneous-truth-has-baire-representatives | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-061 | lem-shelah-inner-model-is-closed-under-ambient-omega-sequences | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-062 | lem-shelah-continuous-unions-of-sweetness-models | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-063 | lem-shelah-homogeneous-truth-has-baire-representatives | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-064 | lem-brunner-choice-and-urysohn-obstructions | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-065 | lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-066 | lem-corson-rational-metric-not-metacompact | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-067 | lem-corson-stone-obstruction-is-ordinal-boundable | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-068 | lem-good-tree-watson-omega-sequence-closure | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-069 | lem-good-tree-watson-selector-obstruction | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-070 | lem-isolated-point-kelley-repair | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-071 | lem-ladder-separation-from-hyp | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-072 | lem-local-finite-dimensional-reduction-for-a-fredholm-map | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-073 | lem-ma-produces-an-uncountable-q-set | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-074 | lem-measurable-null-code-orders-bound-constructible-null-unions | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-075 | lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-076 | lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-077 | lem-nuclear-series-characterizes-trace-norm | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-078 | lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-079 | lem-pmea-three-quarter-separation-estimate | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-080 | lem-positive-square-root-of-a-compact-positive-operator | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-081 | lem-raisonnier-family-is-a-sigma-one-three-filter | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-082 | lem-pmea-three-quarter-separation-estimate | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-083 | lem-brunner-choice-and-urysohn-obstructions | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-084 | lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-085 | lem-corson-rational-metric-not-metacompact | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-086 | lem-corson-stone-obstruction-is-ordinal-boundable | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-087 | lem-good-tree-watson-omega-sequence-closure | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-088 | lem-good-tree-watson-selector-obstruction | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-089 | lem-isolated-point-kelley-repair | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-090 | lem-ladder-separation-from-hyp | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-091 | lem-local-finite-dimensional-reduction-for-a-fredholm-map | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-092 | lem-ma-produces-an-uncountable-q-set | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-093 | lem-measurable-null-code-orders-bound-constructible-null-unions | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-094 | lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-095 | lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-096 | lem-nuclear-series-characterizes-trace-norm | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-097 | lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-098 | lem-pmea-three-quarter-separation-estimate | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-099 | lem-positive-square-root-of-a-compact-positive-operator | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-100 | lem-raisonnier-family-is-a-sigma-one-three-filter | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-101 | lem-shelah-continuous-unions-of-sweetness-models | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-102 | lem-shelah-homogeneous-truth-has-baire-representatives | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-103 | lem-pmea-three-quarter-separation-estimate | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-104 | lem-shelah-real-name-capture-and-coded-meagre-unions | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-105 | lem-shelah-sweet-density-transfer-along-complete-suborders | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-A7-e-106 | lem-shelah-sweet-forcings-are-sigma-directed-ccc | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-fa-countable-recharting-lem-a-bundle-embedding-produces-its-grassmannian-classifying-map | lem-a-bundle-embedding-produces-its-grassmannian-classifying-map | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-fa-d-indistinguishability-completion | def-law-modification-and-indistinguishability-of-processes | accuracy | false-or-overstrong-statement | definition | deferred | 7-rejudge |
| phase-2-remaining-27-fa-e-cantor-choice-interface | thm-cantor-intersection-metric | accuracy | missing-choice-scope | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-fa-e-gtw-source-reflection-group | Good–Tree–Watson, On Stone’s theorem and the axiom of choice, Theorem 1 group description, printed p.3 | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-fa-e-ishii-null-order-definition | Ishii Definition 3.4 and Lemma 3.10, printed p.48 | accuracy | false-or-overstrong-statement | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-fa-e-ishii-rapid-bound | Ishii Lemma 3.6, printed p.45 | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-fa-rank-zero-def-thom-euler-class-of-an-oriented-vector-bundle | def-thom-euler-class-of-an-oriented-vector-bundle | accuracy | false-or-overstrong-statement | definition | deferred | 7-rejudge |
| phase-2-remaining-27-fa-rank-zero-thm-thom-isomorphism-for-oriented-vector-bundles | thm-thom-isomorphism-for-oriented-vector-bundles | accuracy | false-or-overstrong-statement | proof-step | deferred | 7-rejudge |
| phase-2-remaining-27-g6-rf1-relative-compactness-sign | def-relative-compactness-with-respect-to-an-operator | accuracy | false-claim | definition | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-rf2-weyl-invariance-a2-sign | thm-weyl-essential-spectrum-invariance | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-rf3-cayley-adjoint-sign | def-cayley-transform-of-a-self-adjoint-operator | accuracy | false-claim | definition | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-rf4-pvm-integral-conjugate | lem-unbounded-pvm-integral-is-well-defined-and-closed | accuracy | false-claim | statement | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-rf5-periodic-derivative-sign | ex-periodic-derivative-and-its-unitary-translation-group | accuracy | false-claim | verification step 1.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-rf6-resolvent-star-bound | lem-resolvent-star-algebra-is-dense-in-c-zero | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-rf7-kato-rellich-finiteness | thm-kato-rellich | accuracy | unlicensed-inference | proof-step 3.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-t10-von-neumann-injectivity | thm-von-neumann-self-adjoint-extension-parameterization | accuracy | invalid-inference | proof-step 2.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-t11-weyl-circularity | thm-weyl-essential-spectrum-invariance | accuracy | false-claim | proof-step 3.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-t6-second-resolvent-identity | lem-second-resolvent-identity-for-closed-operator-perturbations | accuracy | false-claim | statement | fixed | 5a-adjudicate |
| phase-2-remaining-27-g6-t7-kato-rellich-convention | thm-kato-rellich | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-g7-rf1-annular-splice | lem-planar-brownian-annular-exit-probability | accuracy | false-claim | proof-step 1.2 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g7-t1-annular-reader-repair | lem-planar-brownian-annular-exit-probability | accuracy | reader-repair | proof-step 1.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g7-t6-fixed-time-witness | cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability | accuracy | invalid-witness | statement | fixed | 5a-adjudicate |
| phase-2-remaining-27-g8-rd1-representation-completion | thm-brownian-filtration-martingale-representation | accuracy | false-claim | proof-step 4.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g8-rf1-representation-completion | thm-brownian-filtration-martingale-representation | accuracy | false-claim | proof-step 4.1 | fixed | 5a-adjudicate |
| phase-2-remaining-27-g8-rf3-integration-by-parts-rho-c | thm-integration-by-parts-for-brownian-ito-processes | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-g8-rf4-ito-formula-rho-c | thm-ito-formula-one-dimensional | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-g8-rf5-multidimensional-ito-rho-c | thm-multidimensional-ito-formula-for-brownian-driven-processes | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| phase-2-remaining-27-step7-a-001 | def-cartan-subalgebra-of-a-lie-algebra | accuracy | false-or-overstrong-statement | definition | narrowed | 7-adjudicate |
| phase-2-remaining-27-step7-a-002 | thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-003 | def-toral-and-maximal-toral-subalgebra | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-004 | thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-005 | prop-brackets-of-root-spaces | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-006 | cor-opposite-root-spaces-pair-nondegenerately | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-007 | prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-008 | thm-root-sl-two-triple | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-009 | cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-010 | def-root-and-root-space-relative-to-a-cartan-subalgebra | accuracy | missing-choice-scope | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-011 | thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-012 | prop-root-reflections-are-induced-by-inner-automorphisms | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-013 | fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple | accuracy | citation-missing | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-014 | lem-killing-length-of-a-root-is-nonzero | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-015 | fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-016 | fs-all-integer-multiples-of-a-root-are-roots | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-017 | thm-finite-dimensional-representations-of-sl-two | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-018 | prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-019 | ex-root-strings-in-type-a-two | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-020 | ex-root-space-brackets-for-matrix-units | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-021 | cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-022 | prop-dimension-formula-from-roots | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-023 | fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data | accuracy | invalid-refutation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-024 | ex-cartan-subalgebra-and-roots-of-sl-two | accuracy | missing-hypothesis | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-025 | thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-026 | ex-diagonal-cartan-subalgebra-and-roots-of-sl-n | accuracy | missing-hypothesis | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-027 | prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system | accuracy | false-or-overstrong-statement | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-028 | def-reducible-and-irreducible-root-system | accuracy | false-boundary-disposition | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-029 | def-open-and-closed-weyl-chambers | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-030 | prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-031 | prop-root-systems-decompose-uniquely-into-irreducible-components | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-032 | thm-classification-of-irreducible-reduced-crystallographic-root-systems | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-033 | thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-034 | def-free-lie-algebra-on-a-vector-space | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-035 | thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-036 | thm-universal-property-of-the-free-lie-algebra | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-037 | prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers | accuracy | ill-typed-construction | proof-step 1.3 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-038 | cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-039 | ex-cartan-subalgebras-of-a-direct-sum | accuracy | missing-choice-scope | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-040 | prop-dimensions-of-the-exceptional-simple-lie-algebras | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-041 | thm-rank-two-root-system-classification | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-042 | thm-rank-two-root-system-classification | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-043 | prop-weyl-length-equals-positive-root-inversion-number | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-044 | thm-cartan-killing-classification-of-complex-simple-lie-algebras | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-045 | thm-existence-of-each-classified-root-system | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-046 | fs-every-connected-finite-graph-is-a-dynkin-diagram | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-047 | rem-dynkin-diagrams-do-not-classify-global-lie-groups | accuracy | citation-inflated | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-048 | def-classical-complex-matrix-lie-algebras | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-049 | ex-root-system-a-one | accuracy | false-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-050 | ex-weyl-group-of-a-n-is-the-symmetric-group | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-051 | prop-classical-types-correspond-to-sl-so-and-sp | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-052 | fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-053 | prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-054 | ex-dynkin-diagram-duality-of-b-n-and-c-n | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-055 | ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras | accuracy | false-claim | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-056 | ex-classical-root-systems-in-euclidean-coordinates | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-057 | fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-058 | ex-low-rank-dynkin-coincidences | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-059 | ex-root-systems-a-two-b-two-and-g-two | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-060 | thm-existence-theorem-for-complex-semisimple-lie-algebras | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-061 | fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system | accuracy | invalid-witness | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-062 | ex-serre-relations-for-a-two-recover-sl-three | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-063 | thm-root-string-property | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-064 | lem-simple-reflections-preserve-weight-multiplicities | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-065 | prop-root-vectors-shift-weight-spaces | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-066 | lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-067 | cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-068 | def-partial-order-on-weights | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-069 | def-integral-dominant-and-strictly-dominant-weights | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-070 | prop-root-systems-of-the-classical-complex-lie-algebras | accuracy | missing-case | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-071 | def-dominant-integrable-highest-weight-cyclic-module | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-072 | ex-positive-roots-and-highest-root-of-g-two | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-073 | lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-074 | lem-integrability-relations-for-a-dominant-highest-weight | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-075 | def-weyl-vector-rho | accuracy | citation-missing | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-076 | cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules | accuracy | ill-typed-claim | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-077 | prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-078 | lem-simple-root-integrability-bounds-the-dominant-cyclic-module | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-079 | lem-highest-weight-modules-have-weights-below-the-top-weight | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-080 | ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups | accuracy | missing-case | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-081 | prop-the-adjoint-representation-has-highest-weight-the-highest-root | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-082 | ex-the-adjoint-representation-and-the-highest-root | accuracy | missing-case | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-083 | ex-verma-modules-for-sl-two | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-084 | cor-normalized-haar-measure-on-a-compact-lie-group | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-085 | prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-086 | thm-conjugacy-of-maximal-tori | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-087 | thm-schur-orthogonality-for-compact-lie-groups | accuracy | ill-typed-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-088 | thm-maximal-tori-exist-in-compact-lie-groups | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-089 | thm-weyl-integration-formula | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-090 | prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-091 | thm-compact-connected-lie-groups-are-classified-by-root-data | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-092 | thm-analytic-and-root-system-weyl-groups-agree | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-093 | thm-highest-weight-classification-for-a-compact-connected-lie-group | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-094 | thm-structure-of-a-compact-connected-abelian-lie-group | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-095 | thm-weyl-character-formula-for-compact-connected-lie-groups | accuracy | ill-typed-construction | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-096 | thm-compact-group-weyl-group-is-finite | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-097 | prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-098 | thm-peter-weyl-for-compact-lie-groups | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-099 | thm-peter-weyl-for-compact-lie-groups | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-100 | cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-101 | cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-102 | cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-103 | cor-complete-reducibility-for-compact-lie-groups | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-104 | cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus | accuracy | missing-choice-scope | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-105 | cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group | accuracy | unsupported-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-106 | cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-107 | cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group | accuracy | ill-typed-construction | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-108 | cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-109 | cor-rank-of-a-compact-connected-lie-group-is-well-defined | accuracy | missing-case | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-110 | cor-representation-ring-has-the-dominant-character-basis | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-111 | cor-zero-level-symplectic-reduction-and-dimension-formula | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-112 | def-character-and-cocharacter-lattices-of-a-torus | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-113 | def-coadjoint-representation-of-a-lie-group | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-114 | def-continuous-and-unitary-representation-of-a-compact-lie-group | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-115 | def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group | accuracy | false-claim | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-116 | def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group | accuracy | unsupported-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-117 | def-maximal-split-abelian-subspace-and-real-rank | accuracy | missing-hypothesis | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-118 | def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-119 | def-positive-restricted-roots-and-nilpotent-n-algebra | accuracy | missing-choice-scope | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-120 | def-riemannian-symmetric-pair-of-noncompact-type | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-121 | def-root-datum-of-a-compact-connected-lie-group | accuracy | missing-case | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-122 | def-roots-of-a-compact-connected-lie-group | accuracy | citation-inflated | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-123 | def-satake-diagram | accuracy | ill-typed-construction | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-124 | def-theta-stable-cartan-subalgebra-and-compact-split-parts | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-125 | def-torus-and-maximal-torus-in-a-compact-lie-group | accuracy | false-claim | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-126 | def-vogan-diagram | accuracy | false-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-127 | def-weyl-group-of-a-compact-connected-lie-group | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-128 | ex-a-nonreduced-bc-root-system-from-a-real-form | accuracy | false-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-129 | ex-a-tensor-product-decomposition-for-sl-two | accuracy | missing-case | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-130 | ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-131 | ex-cartan-involution-and-k-plus-p-for-sl-n-r | accuracy | false-claim | proof-step 4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-132 | ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map | accuracy | ill-typed-construction | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-133 | ex-compact-and-split-cartan-subalgebras-of-sl-two-r | accuracy | invalid-inference | proof-steps 1.2-1.3 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-134 | ex-compact-and-split-real-forms-of-sl-two-c | accuracy | missing-choice-scope | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-135 | ex-complex-projective-space-as-a-circle-symplectic-reduction | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-136 | ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra | accuracy | false-claim | proof-step 5.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-137 | ex-cotangent-reduction-for-a-principal-bundle-at-zero | accuracy | ill-typed-construction | proof-steps 2.1-4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-138 | ex-diagonal-action-and-addition-of-angular-momenta | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-139 | ex-fourier-series-on-a-torus-as-peter-weyl | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-140 | ex-grassmannians-from-unitary-symplectic-reduction | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-141 | ex-hyperbolic-space-as-so-zero-n-one-mod-so-n | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-142 | ex-iwasawa-decomposition-of-sl-two-r | accuracy | missing-hypothesis | proof-step 4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-143 | ex-matrix-coefficients-of-the-standard-su-two-representation | accuracy | false-computation | proof-step 1.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-144 | ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n | accuracy | false-computation | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-145 | ex-normalized-haar-measure-on-a-torus | accuracy | unsupported-inference | proof-step 2.2 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-146 | ex-polar-cartan-decomposition-of-sl-n-r | accuracy | missing-hypothesis | proof-step 4.2 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-147 | ex-reduced-harmonic-oscillator-flow-on-projective-space | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-148 | ex-restricted-roots-of-sl-n-r | accuracy | invalid-inference | proof-step 1.3 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-149 | ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case | accuracy | false-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-150 | ex-shifting-trick-for-a-nonzero-coadjoint-orbit | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-151 | ex-standard-and-dual-representations-of-sl-n-by-highest-weights | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-152 | ex-the-eight-dimensional-adjoint-representation-of-sl-three | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-153 | prop-top-highest-weight-summand-in-a-tensor-product | accuracy | invalid-inference | proof-step 1.3 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-154 | fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-155 | prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system | accuracy | invalid-inference | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-156 | lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-157 | thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-158 | thm-serre-presentation-theorem | accuracy | false-computation | proof-step 5.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-159 | prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-160 | prop-central-quotients-correspond-to-intermediate-character-lattices | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-161 | lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-162 | lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-163 | thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-164 | thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part | accuracy | false-claim | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-165 | prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-166 | ex-symmetric-powers-as-highest-weight-modules | accuracy | false-computation | proof-step 1.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-167 | fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-168 | lem-weyl-denominator-and-anti-invariant-orbit-sum-basis | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-169 | fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-170 | ex-weyl-integration-formula-for-su-two | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-171 | fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional | accuracy | false-or-overstrong-statement | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-172 | lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-173 | lem-compact-lie-groups-admit-central-continuous-approximate-identities | accuracy | invalid-inference | proof-step 4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-174 | fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-175 | thm-real-forms-correspond-to-conjugate-linear-involutions | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-176 | prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-177 | thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space | accuracy | invalid-inference | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-178 | ex-the-peter-weyl-decomposition-of-l-two-su-two | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-179 | thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-180 | thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications | accuracy | invalid-inference | proof-step 1.5 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-181 | thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-182 | ex-two-sphere-as-a-coadjoint-orbit-of-so-three | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-183 | ex-vogan-diagrams-for-real-forms-of-sl-three-c | accuracy | ill-typed-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-184 | ex-weighted-circle-actions-and-weighted-projective-singular-quotients | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-185 | fs-a-plain-dynkin-diagram-classifies-real-forms | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-186 | fs-every-symplectic-action-is-hamiltonian | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-187 | fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-188 | fs-moment-maps-are-unique-without-normalization | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-189 | fs-restricted-root-systems-are-always-reduced | accuracy | missing-choice-scope | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-190 | fs-the-cotangent-lift-moment-map-has-a-plus-sign-under-the-library-fundamental-field-convention | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-191 | fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-192 | lem-characteristic-kernel-on-a-regular-moment-level | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-193 | prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-194 | prop-dimension-of-a-regular-nonzero-reduced-space | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-195 | prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-196 | prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-197 | prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-198 | prop-invariant-hamiltonians-descend-to-reduced-hamiltonians | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-199 | prop-reduction-commutes-with-products | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-200 | prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-201 | prop-restricted-root-systems-may-be-nonreduced | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-202 | prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-203 | prop-whitehead-two-removes-the-infinitesimal-equivariance-obstruction-for-semisimple-actions | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-204 | rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds | accuracy | citation-missing | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-205 | thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification | accuracy | false-computation | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-206 | thm-classification-of-real-forms-by-vogan-diagrams | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-207 | thm-classification-of-real-semisimple-lie-algebras | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-208 | thm-coadjoint-orbits-are-symplectic-manifolds | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-209 | thm-existence-of-a-compact-real-form | accuracy | citation-truncated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-210 | thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-211 | thm-global-iwasawa-decomposition | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-212 | thm-marsden-weinstein-meyer-symplectic-reduction | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-213 | thm-reduction-in-stages-for-free-proper-regular-actions | accuracy | unsupported-universal-property | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-214 | thm-restricted-root-space-decomposition | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-215 | prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-216 | prop-classical-real-forms-of-the-classical-complex-lie-algebras | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-217 | prop-real-cartan-subalgebras-need-not-be-conjugate | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-218 | prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-219 | rem-representation-theory-of-noncompact-real-reductive-groups | accuracy | false-or-overstrong-statement | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-220 | thm-complexification-dichotomy-for-a-real-simple-lie-algebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-221 | thm-conjugacy-of-compact-real-forms | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-222 | cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group | accuracy | ill-typed-construction | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-223 | ex-the-peter-weyl-decomposition-of-l-two-su-two | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-224 | ex-weyl-integration-formula-for-su-two | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-225 | fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-226 | fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional | accuracy | false-or-overstrong-statement | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-227 | fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-228 | fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-229 | lem-compact-lie-groups-admit-central-continuous-approximate-identities | accuracy | invalid-inference | proof-step 4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-230 | lem-weyl-denominator-and-anti-invariant-orbit-sum-basis | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-231 | lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-232 | prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-233 | thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space | accuracy | invalid-inference | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-234 | thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-235 | thm-real-forms-correspond-to-conjugate-linear-involutions | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-236 | thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications | accuracy | invalid-inference | proof-step 1.5 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-237 | thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-238 | cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group | accuracy | ill-typed-construction | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-239 | ex-the-peter-weyl-decomposition-of-l-two-su-two | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-240 | ex-weyl-integration-formula-for-su-two | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-241 | fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-242 | fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional | accuracy | false-or-overstrong-statement | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-243 | fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-244 | fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-245 | lem-compact-lie-groups-admit-central-continuous-approximate-identities | accuracy | invalid-inference | proof-step 4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-246 | lem-weyl-denominator-and-anti-invariant-orbit-sum-basis | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-247 | lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-248 | prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-249 | thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space | accuracy | invalid-inference | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-250 | thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one | accuracy | false-claim | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-251 | thm-real-forms-correspond-to-conjugate-linear-involutions | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-252 | thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications | accuracy | invalid-inference | proof-step 1.5 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-253 | thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-recertify-001 | prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system | accuracy | citation-inaccurate | frontmatter | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-a-recertify-002 | def-coadjoint-representation-of-a-lie-group | accuracy | missing-choice-scope | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-001 | def-invertible-element-and-general-linear-group-of-a-banach-algebra | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-002 | lem-neumann-series | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-003 | def-unital-banach-algebra | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-004 | def-spectral-radius | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-005 | thm-spectrum-is-nonempty-compact-and-norm-bounded | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-006 | def-complexification-and-spectrum-of-a-real-operator | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-007 | lem-submultiplicative-root-limit | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-008 | lem-canonical-banach-complexification-of-a-real-banach-space | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-009 | def-spectrum-and-resolvent-set-in-a-banach-algebra | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-010 | def-banach-algebra-valued-contour-integral | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-011 | lem-contour-integral-commutes-with-bounded-linear-maps | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-012 | thm-holomorphic-functional-calculus-homomorphism | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-013 | def-approximate-point-and-compression-spectrum | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-014 | lem-banach-valued-cauchy-integral-vanishes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-015 | lem-holomorphic-functional-calculus-is-contour-independent | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-016 | def-calkin-algebra | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-017 | cex-norm-need-not-equal-spectral-radius | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-018 | thm-boundary-of-spectrum-lies-in-approximate-point-spectrum | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-019 | ex-bounded-operators-form-a-noncommutative-banach-algebra | accuracy | citation-inaccurate | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-020 | ex-continuous-functions-form-a-commutative-banach-algebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-021 | thm-polynomial-spectral-mapping | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-022 | ex-spectrum-of-a-multiplication-operator | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-023 | def-point-continuous-and-residual-spectrum | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-024 | ex-unitization-of-a-nonunital-banach-algebra | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-025 | ex-riesz-projection-for-a-matrix-with-separated-spectrum | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-026 | lem-characters-on-a-commutative-c-star-algebra-preserve-star | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-027 | cex-spectrum-can-shrink-in-a-larger-banach-algebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-028 | def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-029 | def-gelfand-transform | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-030 | def-jacobson-radical-and-semisimple-commutative-banach-algebra | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-031 | thm-commutative-gelfand-duality | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-032 | lem-zero-free-entire-function-of-exponential-type-is-an-exponential | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-033 | def-zero-set-filter-and-zero-set-ultrafilter | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-034 | lem-characters-of-continuous-functions-are-evaluations | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-035 | ex-spectrum-of-the-unilateral-shift | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-036 | lem-boolean-ultrafilter-extension-from-compact-products | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-037 | thm-characters-on-a-unital-banach-algebra-are-continuous | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-038 | def-algebraic-unitization-of-a-star-algebra | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-039 | thm-stone-representation-for-boolean-algebras | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-040 | def-approximate-unit-and-proper-c-star-morphism | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-041 | def-character-and-maximal-ideal-space | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-042 | thm-minimal-c-star-unitization | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-043 | def-stone-space-and-clopen-algebra | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-044 | lem-zero-set-ultrafilters-and-stone-cech-points | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-045 | ex-maximal-ideal-space-of-the-disc-algebra | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-046 | ex-banach-stone-weighted-composition-isometries | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-047 | cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-048 | ex-stone-duality-for-a-power-set-algebra | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-049 | ex-stone-duality-for-a-finite-boolean-algebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-050 | thm-gleason-kahane-zelazko | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-051 | thm-banach-stone | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-052 | thm-character-space-of-the-unitization-is-one-point-compactification | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-053 | thm-every-commutative-c-star-algebra-has-an-approximate-unit | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-054 | rem-nagata-cp-theorem-remains-topological | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-055 | thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-056 | thm-locally-compact-gelfand-duality | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-057 | thm-spectral-radius-formula | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-058 | ex-c-zero-of-a-locally-compact-space | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-059 | ex-gelfand-transform-of-ell-one-of-z | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-060 | thm-gelfand-kolmogorov-for-rings-of-continuous-functions | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-061 | ex-unitization-corresponds-to-one-point-compactification | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-062 | prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-063 | def-coefficient-groups-of-a-generalized-cohomology-theory | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-064 | lem-the-ahss-first-differential-is-the-cellular-coboundary | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-065 | thm-naturality-and-edge-maps-of-the-ahss | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-066 | prop-ahss-collapse-determines-only-the-associated-graded-object | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-067 | cor-complex-k-theory-ahss | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-068 | lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-069 | thm-homological-atiyah-hirzebruch-spectral-sequence | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-070 | lem-homological-ahss-exact-couple-from-the-skeletal-filtration | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-071 | def-real-projective-bundle-and-tautological-line | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-072 | def-reduced-generalized-cohomology-theory | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-073 | ex-complex-k-ahss-for-complex-projective-space | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-074 | prop-reduced-and-unreduced-generalized-cohomology-theories-correspond | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-075 | lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-076 | rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-077 | def-characteristic-class-as-a-universal-natural-bundle-class | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-078 | thm-cohomological-atiyah-hirzebruch-spectral-sequence | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-079 | lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-080 | ex-complex-k-ahss-for-real-projective-space | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-081 | def-real-flag-bundle-and-stiefel-whitney-roots | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-082 | thm-mod-two-euler-class-is-the-top-stiefel-whitney-class | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-083 | ex-euler-class-of-the-universal-oriented-two-plane | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-084 | ex-stiefel-whitney-class-of-the-universal-real-line | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-085 | thm-naturality-of-stiefel-whitney-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-086 | ex-euler-class-of-zero-and-trivial-positive-rank-bundles | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-087 | prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-088 | thm-whitney-sum-formula-for-stiefel-whitney-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-089 | lem-edge-maps-of-a-bounded-skeletal-ahss | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-090 | lem-tautological-degree-one-class-is-well-defined-and-fiber-generating | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-091 | prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-092 | lem-integral-cohomology-ring-of-complex-projective-space-by-splitting | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-093 | thm-mod-two-real-projective-bundle-theorem | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-094 | lem-cohomology-ring-of-infinite-complex-projective-space | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-095 | lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-096 | thm-real-splitting-principle-with-mod-two-injective-pullback | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-097 | def-complex-projective-bundle-and-tautological-complex-line | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-098 | lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-099 | thm-integral-complex-projective-bundle-theorem | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-100 | lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-101 | thm-complex-splitting-principle-with-integral-injective-pullback | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-102 | thm-uniqueness-of-chern-classes-from-the-splitting-principle | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-103 | lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-104 | prop-complexification-is-conjugation-invariant | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-105 | thm-mod-two-reduction-of-chern-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-106 | prop-first-chern-class-of-tensor-dual-and-conjugate-lines | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-107 | thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-108 | thm-integral-cohomology-of-bu-n | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-109 | thm-naturality-orientation-sign-and-whitney-product-for-euler-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-110 | thm-mod-two-cohomology-of-bo-n | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-111 | def-complex-flag-bundle-and-chern-roots | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-112 | thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-113 | ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-114 | thm-top-pontryagin-class-is-the-square-of-the-euler-class | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-115 | thm-pontryagin-whitney-product-away-from-two | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-116 | lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-117 | def-tautological-degree-one-class-on-a-real-projective-bundle | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-118 | def-chern-character-of-a-complex-vector-bundle | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-119 | thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-120 | thm-first-chern-class-classifies-complex-line-bundles | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-121 | lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-122 | thm-thom-identity-for-stiefel-whitney-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-123 | ex-chern-classes-of-a-sum-of-universal-complex-lines | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-124 | def-graded-chern-character-by-suspension-and-bott-periodicity | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-125 | lem-integral-powers-of-the-complexified-universal-real-line | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-126 | thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-127 | lem-universal-complex-flag-bundle-is-bt-n | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-128 | lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-129 | cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-130 | thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-131 | lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-132 | thm-naturality-normalization-and-whitney-sum-for-chern-classes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-133 | lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-134 | ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-135 | lem-ku-representability-and-skeletal-postnikov-d-three-comparison | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-136 | ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-137 | lem-complex-orientation-of-underlying-real-bundles | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-138 | lem-pi-three-so-three-generated-by-the-quaternion-double-cover | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-139 | prop-first-stiefel-whitney-class-classifies-orientability | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-b-141 | lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-001 | def-c-star-algebra-generated-by-a-normal-operator | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-002 | def-cyclic-vector-and-cyclic-normal-operator | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-003 | def-projection-valued-measure | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-004 | def-integral-of-a-simple-function-against-a-pvm | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-005 | def-borel-functional-calculus-for-a-bounded-normal-operator | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-006 | lem-weak-and-strong-additivity-of-orthogonal-projections | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-007 | cor-spectral-projections-and-resolution-of-the-identity | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-008 | thm-stone-resolvent-formula-for-spectral-projections | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-009 | cex-a-normal-operator-need-not-have-any-eigenvectors | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-010 | rem-direct-integrals-and-general-multiplicity-theory | accuracy | citation-inaccurate | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-011 | ex-pvm-of-a-diagonal-normal-operator | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-012 | ex-pvm-of-a-multiplication-operator | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-013 | ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-014 | cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-015 | lem-scalar-and-complex-measures-from-a-pvm | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-016 | lem-simple-pvm-integral-is-representation-independent | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-017 | thm-bounded-borel-pvm-integral | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-018 | thm-pvm-integral-is-a-star-homomorphism | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-019 | thm-borel-functional-calculus-for-bounded-normal-operators | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-020 | thm-spectral-theorem-for-bounded-normal-operators-pvm-form | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-021 | thm-support-and-uniqueness-of-the-spectral-measure | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-022 | thm-cyclic-spectral-representation | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-023 | lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-024 | thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-025 | lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-026 | ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-027 | lem-spectrum-of-a-positive-operator-is-nonnegative | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-028 | thm-self-adjoint-norm-and-spectrum-extrema | accuracy | citation-inaccurate | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-029 | lem-character-space-of-generated-normal-algebra-is-operator-spectrum | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-030 | thm-partial-isometry-characterizations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-031 | thm-bounded-normal-operator-abstract-spectral-theorem | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-032 | thm-spectral-mapping-for-continuous-normal-functional-calculus | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-033 | lem-two-dimensional-numerical-range-is-convex | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-034 | thm-continuous-functional-calculus-for-bounded-self-adjoint-operators | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-035 | ex-functional-calculus-for-a-multiplication-operator | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-036 | ex-square-root-and-absolute-value-of-a-matrix | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-037 | thm-positive-square-root | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-038 | thm-numerical-radius-is-an-equivalent-operator-norm | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-039 | cex-self-adjointness-cannot-be-dropped-from-the-order-calculus | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-040 | lem-spectral-permanence-for-unital-c-star-subalgebras | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-041 | thm-projection-onto-a-nonempty-closed-convex-set | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-042 | lem-inner-product-is-jointly-continuous | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-043 | thm-hilbert-adjoint-properties | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-044 | lem-orthogonal-projection-is-linear-self-adjoint-contractive | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-045 | thm-orthogonal-decomposition-by-a-closed-subspace | accuracy | citation-inaccurate | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-046 | thm-double-orthogonal-complement-is-closure | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-047 | thm-completion-of-an-inner-product-space-is-hilbert | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-048 | thm-jordan-von-neumann-polarization | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-049 | def-square-summable-family-on-an-arbitrary-index-set | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-050 | def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-051 | thm-separable-hilbert-space-has-a-countable-orthonormal-basis | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-052 | thm-l-two-fourier-series-converges-in-mean-square | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-053 | ex-standard-inner-products-on-kn-ell-two-and-l-two | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-054 | ex-adjoints-of-shifts-multiplication-and-integral-operators | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-055 | thm-parseval-equivalences-for-a-complete-orthonormal-family | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-056 | lem-trigonometric-characters-are-orthonormal | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-057 | ex-standard-basis-of-ell-two | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-058 | thm-hilbert-space-fourier-expansion | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-059 | thm-fourier-basis-and-parseval-on-the-n-torus | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-060 | lem-finite-tori-are-compact-hausdorff-character-spaces | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-061 | def-the-one-dimensional-torus-and-normalized-haar-integral | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-062 | thm-existence-of-a-maximal-orthonormal-family | accuracy | other | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-063 | ex-fourier-series-of-a-sawtooth | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-064 | ex-fourier-series-of-a-square-wave | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-065 | ex-legendre-polynomials-from-gram-schmidt | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-066 | ex-haar-orthonormal-basis-of-l-two-zero-one | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-067 | thm-riesz-fischer-for-fourier-coefficients | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-067-c1 | thm-riesz-fischer-for-fourier-coefficients | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-068 | lem-kernel-of-identity-minus-compact-is-finite-dimensional | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-068-c1 | lem-kernel-of-identity-minus-compact-is-finite-dimensional | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-069 | lem-linear-combinations-of-compact-operators-are-compact | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-069-c1 | lem-linear-combinations-of-compact-operators-are-compact | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-070 | lem-neumann-series-and-small-perturbations-of-bounded-inverses | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-070-c1 | lem-neumann-series-and-small-perturbations-of-bounded-inverses | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-071 | def-fredholm-operator-cokernel-and-index | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-071-c1 | def-fredholm-operator-cokernel-and-index | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-072 | def-spectrum-and-resolvent-of-a-bounded-operator | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-072-c1 | def-spectrum-and-resolvent-of-a-bounded-operator | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-073 | lem-compositions-with-a-compact-operator-are-compact | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-073-c1 | lem-compositions-with-a-compact-operator-are-compact | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-074 | thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-074-c1 | thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-075 | lem-dependent-choice-implies-countable-choice | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-075-c1 | lem-dependent-choice-implies-countable-choice | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-076 | ex-fredholm-alternative-for-an-integral-equation | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-076-c1 | ex-fredholm-alternative-for-an-integral-equation | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-077 | lem-riesz-schauder-ascent-and-descent-stabilize | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-077-c1 | lem-riesz-schauder-ascent-and-descent-stabilize | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-078 | cex-identity-is-compact-iff-the-space-is-finite-dimensional | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-078-c1 | cex-identity-is-compact-iff-the-space-is-finite-dimensional | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-079 | lem-range-of-identity-minus-compact-is-closed | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-079-c1 | lem-range-of-identity-minus-compact-is-closed | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-080 | thm-fredholm-index-is-stable-under-compact-perturbations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-080-c1 | thm-fredholm-index-is-stable-under-compact-perturbations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-081 | lem-a-compact-remainder-estimate-forces-closed-range | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-081-c1 | lem-a-compact-remainder-estimate-forces-closed-range | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-082 | thm-fredholm-index-is-locally-constant | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-082-c1 | thm-fredholm-index-is-locally-constant | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-083 | thm-fredholm-alternative-for-identity-minus-compact | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-083-c1 | thm-fredholm-alternative-for-identity-minus-compact | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-084 | thm-riesz-schauder-spectrum-of-a-compact-operator | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-084-c1 | thm-riesz-schauder-spectrum-of-a-compact-operator | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-085 | ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-085-c1 | ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-086 | thm-hilbert-schmidt-norm-is-basis-independent | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-086-c1 | thm-hilbert-schmidt-norm-is-basis-independent | accuracy | invalid-inference | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-087 | ex-square-integrable-separable-product-kernel | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-087-c1 | ex-square-integrable-separable-product-kernel | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-088 | ex-square-integrable-kernel-finite-rank-truncations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-088-c1 | ex-square-integrable-kernel-finite-rank-truncations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-089 | thm-l-two-kernels-give-hilbert-schmidt-operators | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-089-c1 | thm-l-two-kernels-give-hilbert-schmidt-operators | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-090 | ex-square-integrable-kernel-without-continuous-representative | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-090-c1 | ex-square-integrable-kernel-without-continuous-representative | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-091 | lem-product-rectangle-kernels-are-dense-in-product-l-two | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-091-c1 | lem-product-rectangle-kernels-are-dense-in-product-l-two | accuracy | invalid-inference | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-c-preflight-001 | thm-bounded-borel-pvm-integral | accuracy | citation-missing | frontmatter | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-001 | cex-a-nonadapted-step-integrand-breaks-the-ito-isometry | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-002 | cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-003 | cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-004 | cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-005 | cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands | accuracy | ill-typed-construction | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-006 | cex-strongly-continuous-unitary-group-need-not-be-norm-continuous | accuracy | invalid-witness | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-007 | cex-symmetric-need-not-be-self-adjoint | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-008 | cex-the-minimal-derivative-is-symmetric-not-self-adjoint | accuracy | missing-choice-scope | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-009 | cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation | accuracy | invalid-inference | proof-step | narrowed | 7-adjudicate |
| phase-2-remaining-27-step7-d-010 | cor-brownian-paths-have-infinite-total-variation-on-every-interval | accuracy | ill-typed-claim | statement | narrowed | 7-adjudicate |
| phase-2-remaining-27-step7-d-011 | cor-critical-holder-boundary-at-zero-from-the-brownian-lil | accuracy | false-or-overstrong-statement | statement | narrowed | 7-adjudicate |
| phase-2-remaining-27-step7-d-012 | cor-deterministic-ito-integrals-are-gaussian | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-013 | cor-distribution-of-a-one-sided-brownian-hitting-time | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-014 | cor-exponential-brownian-martingale | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-015 | cor-heat-semigroup-martingale | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-016 | cor-law-of-the-brownian-maximum | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-017 | cor-one-dimensional-brownian-motion-hits-every-point-almost-surely | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-018 | cor-square-integrable-brownian-terminal-variables-have-ito-representations | accuracy | false-boundary-disposition | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-019 | cor-unitary-groups-converge-under-strong-resolvent-convergence | accuracy | missing-hypothesis | statement | narrowed | 7-adjudicate |
| phase-2-remaining-27-step7-d-020 | cor-vector-levy-characterization | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-021 | def-adjoint-of-a-densely-defined-unbounded-operator | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-022 | def-brownian-generator | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-022-c1 | def-brownian-generator | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-023 | def-brownian-motion-started-at-x | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-023-c1 | def-brownian-motion-started-at-x | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-024 | def-cayley-transform-of-a-self-adjoint-operator | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-024-c1 | def-cayley-transform-of-a-self-adjoint-operator | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-025 | def-continuous-brownian-ito-process | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-025-c1 | def-continuous-brownian-ito-process | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-026 | def-continuous-time-adapted-process-and-martingale | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-026-c1 | def-continuous-time-adapted-process-and-martingale | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-027 | def-continuous-time-stopping-time | accuracy | false-boundary-disposition | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-027-c1 | def-continuous-time-stopping-time | accuracy | false-boundary-disposition | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-028 | def-deficiency-subspaces-and-deficiency-indices | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-028-c1 | def-deficiency-subspaces-and-deficiency-indices | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-029 | def-discrete-and-essential-spectrum-of-a-self-adjoint-operator | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-029-c1 | def-discrete-and-essential-spectrum-of-a-self-adjoint-operator | accuracy | citation-missing | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-030 | def-elementary-predictable-brownian-integrand | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-030-c1 | def-elementary-predictable-brownian-integrand | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-031 | def-infinitesimal-generator-of-a-unitary-group | accuracy | arithmetic-error | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-031-c1 | def-infinitesimal-generator-of-a-unitary-group | accuracy | arithmetic-error | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-032 | def-ito-integral-for-square-integrable-predictable-processes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-032-c1 | def-ito-integral-for-square-integrable-predictable-processes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-033 | def-ito-integral-of-an-elementary-predictable-process | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-033-c1 | def-ito-integral-of-an-elementary-predictable-process | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-034 | def-natural-and-usual-augmented-brownian-filtrations | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-034-c1 | def-natural-and-usual-augmented-brownian-filtrations | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-035 | def-progressively-measurable-and-predictable-process | accuracy | false-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-035-c1 | def-progressively-measurable-and-predictable-process | accuracy | false-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-036 | def-quadratic-covariation-of-brownian-ito-processes | accuracy | arithmetic-error | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-036-c1 | def-quadratic-covariation-of-brownian-ito-processes | accuracy | arithmetic-error | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-037 | def-quadratic-variation-along-a-partition-sequence | accuracy | false-boundary-disposition | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-037-c1 | def-quadratic-variation-along-a-partition-sequence | accuracy | false-boundary-disposition | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-038 | def-relative-compactness-with-respect-to-an-operator | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-038-c1 | def-relative-compactness-with-respect-to-an-operator | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-039 | def-resolvent-and-spectrum-of-a-closed-unbounded-operator | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-039-c1 | def-resolvent-and-spectrum-of-a-closed-unbounded-operator | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-040 | def-unbounded-integral-against-a-pvm | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-040-c1 | def-unbounded-integral-against-a-pvm | accuracy | ill-typed-construction | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-041 | ex-brownian-hitting-probability-from-an-exponential-martingale | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-042 | ex-brownian-path-p-variation-threshold | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-043 | ex-brownian-transition-density-and-semigroup-convolution | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-044 | ex-covariance-of-two-deterministic-ito-integrals | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-045 | ex-density-and-infinite-mean-of-a-one-sided-hitting-time | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-046 | ex-exit-side-probability-from-an-interval | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-047 | ex-expected-dyadic-quadratic-variation | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-048 | ex-expected-exit-time-from-an-interval-via-ito-formula | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-049 | ex-exponential-martingale-and-a-brownian-tail-bound | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-050 | ex-harmonic-functions-of-planar-brownian-motion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-051 | ex-integral-of-a-deterministic-step-function-against-brownian-motion | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-052 | ex-integral-of-brownian-motion-against-itself-preview | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-053 | ex-ito-formula-for-brownian-powers | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-054 | ex-lil-rules-out-a-global-square-root-time-bound | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-055 | ex-logarithm-of-geometric-brownian-motion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-056 | ex-maximum-crossing-probability-before-a-fixed-time | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-057 | ex-periodic-derivative-and-its-unitary-translation-group | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-058 | ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-059 | ex-position-operator-on-l-two-of-r | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-060 | ex-successive-brownian-hits-restart-independent-copies | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-061 | ex-unbounded-multiplication-operator-and-its-domain | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-061-c1 | ex-unbounded-multiplication-operator-and-its-domain | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-062 | ex-zero-set-has-zero-measure-but-is-uncountable | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-062-c1 | ex-zero-set-has-zero-measure-but-is-uncountable | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-063 | lem-adapted-continuous-processes-are-progressively-measurable | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-063-c1 | lem-adapted-continuous-processes-are-progressively-measurable | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-064 | lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-064-c1 | lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-065 | lem-brownian-step-potential-resolvent-at-zero | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-065-c1 | lem-brownian-step-potential-resolvent-at-zero | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-066 | lem-brownian-transition-semigroup-property | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-066-c1 | lem-brownian-transition-semigroup-property | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-067 | lem-brownian-zero-set-has-lebesgue-measure-zero | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-067-c1 | lem-brownian-zero-set-has-lebesgue-measure-zero | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-068 | lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-068-c1 | lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-069 | lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-069-c1 | lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-070 | lem-conditioning-a-known-state-and-independent-noise | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-070-c1 | lem-conditioning-a-known-state-and-independent-noise | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-071 | lem-elementary-ito-integral-is-independent-of-the-step-representation | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-071-c1 | lem-elementary-ito-integral-is-independent-of-the-step-representation | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-072 | lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-072-c1 | lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-073 | lem-generator-of-a-unitary-group-is-skew-adjoint | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-073-c1 | lem-generator-of-a-unitary-group-is-skew-adjoint | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-074 | lem-laplace-resolvents-of-a-unitary-group | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-074-c1 | lem-laplace-resolvents-of-a-unitary-group | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-075 | lem-planar-brownian-annular-exit-probability | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-075-c1 | lem-planar-brownian-annular-exit-probability | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-076 | lem-resolvent-star-algebra-is-dense-in-c-zero | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-076-c1 | lem-resolvent-star-algebra-is-dense-in-c-zero | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-077 | lem-second-resolvent-identity-for-closed-operator-perturbations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-077-c1 | lem-second-resolvent-identity-for-closed-operator-perturbations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-078 | lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-078-c1 | lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-079 | lem-spectral-form-domain-and-core-of-a-semibounded-operator | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-079-c1 | lem-spectral-form-domain-and-core-of-a-semibounded-operator | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-080 | lem-unbounded-pvm-integral-is-well-defined-and-closed | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-080-c1 | lem-unbounded-pvm-integral-is-well-defined-and-closed | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-081 | rem-general-semimartingale-calculus-is-outside-this-block | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-081-c1 | rem-general-semimartingale-calculus-is-outside-this-block | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-082 | rem-ito-versus-stratonovich-boundary | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-082-c1 | rem-ito-versus-stratonovich-boundary | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-083 | rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-083-c1 | rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-084 | rem-raw-versus-usual-filtration-in-the-strong-markov-theorem | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-084-c1 | rem-raw-versus-usual-filtration-in-the-strong-markov-theorem | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-085 | thm-brownian-filtration-martingale-representation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-085-c1 | thm-brownian-filtration-martingale-representation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-086 | thm-brownian-future-path-markov-property | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-086-c1 | thm-brownian-future-path-markov-property | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-087 | thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-087-c1 | thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-088 | thm-brownian-markov-property | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-088-c1 | thm-brownian-markov-property | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-089 | thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-089-c1 | thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-090 | thm-brownian-paths-are-nowhere-differentiable | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-090-c1 | thm-brownian-paths-are-nowhere-differentiable | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-091 | thm-brownian-positive-occupation-proportion-has-the-arcsine-law | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-091-c1 | thm-brownian-positive-occupation-proportion-has-the-arcsine-law | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-092 | thm-brownian-reflection-principle | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-092-c1 | thm-brownian-reflection-principle | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-093 | thm-brownian-zero-set-has-no-isolated-points | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-093-c1 | thm-brownian-zero-set-has-no-isolated-points | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-094 | thm-canonical-spectral-type-decomposition | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-094-c1 | thm-canonical-spectral-type-decomposition | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-095 | thm-cayley-correspondence | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-095-c1 | thm-cayley-correspondence | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-096 | thm-closable-iff-adjoint-domain-is-dense | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-096-c1 | thm-closable-iff-adjoint-domain-is-dense | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-097 | thm-continuous-functional-calculus-under-resolvent-convergence | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-097-c1 | thm-continuous-functional-calculus-under-resolvent-convergence | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-098 | thm-doob-maximal-bound-for-the-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-098-c1 | thm-doob-maximal-bound-for-the-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-099 | thm-dynkin-formula-for-bounded-brownian-stopping | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-099-c1 | thm-dynkin-formula-for-bounded-brownian-stopping | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-100 | thm-integration-by-parts-for-brownian-ito-processes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-100-c1 | thm-integration-by-parts-for-brownian-ito-processes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-101 | thm-ito-formula-one-dimensional | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-101-c1 | thm-ito-formula-one-dimensional | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-102 | thm-ito-integral-process-has-a-continuous-martingale-version | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-102-c1 | thm-ito-integral-process-has-a-continuous-martingale-version | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-103 | thm-ito-isometry-for-elementary-integrands | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-103-c1 | thm-ito-isometry-for-elementary-integrands | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-104 | thm-kato-rellich | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-104-c1 | thm-kato-rellich | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-105 | thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-105-c1 | thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-106 | thm-localized-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-106-c1 | thm-localized-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-107 | thm-min-max-principle-below-essential-spectrum | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-107-c1 | thm-min-max-principle-below-essential-spectrum | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-108 | thm-multidimensional-ito-formula-for-brownian-driven-processes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-108-c1 | thm-multidimensional-ito-formula-for-brownian-driven-processes | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-109 | thm-quadratic-covariation-of-brownian-ito-processes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-109-c1 | thm-quadratic-covariation-of-brownian-ito-processes | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-110 | thm-quadratic-variation-of-an-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-110-c1 | thm-quadratic-variation-of-an-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-111 | thm-self-adjoint-resolvent-estimate | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-111-c1 | thm-self-adjoint-resolvent-estimate | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-112 | thm-self-adjointness-range-criterion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-112-c1 | thm-self-adjointness-range-criterion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-113 | thm-space-time-harmonic-functions-yield-brownian-local-martingales | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-113-c1 | thm-space-time-harmonic-functions-yield-brownian-local-martingales | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-114 | thm-spectral-theorem-for-unbounded-self-adjoint-operators | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-114-c1 | thm-spectral-theorem-for-unbounded-self-adjoint-operators | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-115 | thm-stone-one-parameter-unitary-groups | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-115-c1 | thm-stone-one-parameter-unitary-groups | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-116 | thm-stopping-an-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-116-c1 | thm-stopping-an-ito-integral | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-117 | thm-strong-markov-property-of-brownian-motion | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-117-c1 | thm-strong-markov-property-of-brownian-motion | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-118 | thm-two-sided-exit-probability-for-brownian-motion | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-118-c1 | thm-two-sided-exit-probability-for-brownian-motion | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-119 | thm-unbounded-borel-functional-calculus | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-119-c1 | thm-unbounded-borel-functional-calculus | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-120 | thm-von-neumann-self-adjoint-extension-parameterization | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-120-c1 | thm-von-neumann-self-adjoint-extension-parameterization | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-121 | thm-weyl-criterion-for-essential-spectrum | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-121-c1 | thm-weyl-criterion-for-essential-spectrum | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-122 | thm-weyl-essential-spectrum-invariance | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-d-122-c1 | thm-weyl-essential-spectrum-invariance | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-107 | lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-108 | lem-sigma-cellular-base-yields-a-compatible-metric | accuracy | false-claim | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-109 | lem-solovay-almost-disjoint-extension-under-ma | accuracy | false-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-110 | lem-uniform-null-g-delta-capture-functions | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-111 | rem-choice-strength-ledger-baire-urysohn-stone-tychonoff | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-112 | rem-choice-strength-ledger-baire-urysohn-stone-tychonoff | accuracy | false-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-113 | rem-dmc-versus-dc-over-zf-is-open | accuracy | invalid-inference | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-114 | rem-schatten-p-classes | accuracy | ill-typed-construction | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-115 | rem-stone-exact-choice-strength-open-status | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-116 | rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel | accuracy | false-claim | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-117 | rem-urysohn-implies-dmc-open-status | accuracy | citation-inflated | remark | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-118 | thm-all-real-sets-measurable-gives-an-inaccessible-inner-model | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-119 | thm-baire-property-model-equiconsistent-with-zfc | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-120 | thm-bing-q-set-moore-space-is-normal-and-nonmetrizable | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-121 | thm-ch-normal-nonmetrizable-moore-space | accuracy | invalid-witness | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-122 | thm-chain-sum-product-and-composition-rules-for-banach-derivatives | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-123 | thm-compact-hausdorff-baire-implies-dmc | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-124 | thm-compact-t1-product-theorem-iff-ac | accuracy | citation-inflated | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-125 | thm-cyclicity-of-the-trace | accuracy | citation-inflated | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-126 | thm-dmc-implies-urysohn-lemma | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-127 | thm-dmc-tree-and-successor-menu-formulations | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-128 | thm-effective-metacompact-discrete-metrics-implies-ac | accuracy | missing-hypothesis | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-129 | thm-extreme-amenability-yields-bpi-in-finite-support-models | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-130 | thm-fleissner-hyp-normal-nonmetrizable-moore-space | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-131 | thm-fleissner-normal-moore-space-construction | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-132 | thm-formal-nmsc-consistency-lower-bound | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-133 | thm-hilbert-schmidt-operators-form-a-two-sided-ideal | accuracy | invalid-inference | proof-step 2.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-134 | thm-inverse-function-theorem-for-banach-spaces | accuracy | ill-typed-construction | proof-step 4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-135 | thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-136 | thm-normal-moore-consistency-strength-sandwich | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-137 | thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-138 | thm-pmea-implies-normal-moore-space-conjecture | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-139 | thm-pmea-normal-low-character-spaces-are-collectionwise-normal | accuracy | invalid-inference | proof-step 3.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-140 | thm-products-of-cofinite-spaces-compact-iff-bpi | accuracy | invalid-inference | proof-steps 2.1-4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-141 | thm-raisonnier-filter-is-rapid-from-null-code-measurability | accuracy | invalid-inference | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-142 | thm-rapid-filters-are-not-lebesgue-measurable | accuracy | invalid-inference | proof-steps 1.2-4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-143 | thm-relative-consistency-bpi-without-stone | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-144 | thm-relative-consistency-bpi-without-urysohn | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-145 | thm-relative-consistency-countable-choice-without-urysohn | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-146 | thm-relative-consistency-dc-without-stone | accuracy | citation-inaccurate | statement-and-proof | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-147 | thm-separable-complete-metric-baire-in-zf | accuracy | invalid-inference | proof-steps 3.1-7.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-148 | thm-shelah-baire-model-separates-baire-property-from-measurability | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-149 | thm-shelah-ch-omega-one-sweet-construction | accuracy | citation-inaccurate | proof-steps 3.1-6.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-150 | thm-shelah-inner-model-all-sets-of-reals-have-baire-property | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-151 | thm-shelah-inner-model-satisfies-zf-and-dependent-choice | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-152 | thm-shelah-sweet-amalgamation-preserves-sweetness | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-153 | thm-shelah-sweet-partial-isomorphism-extension | accuracy | invalid-inference | proof-steps 3.1-4.1 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-154 | thm-shelah-universal-meagre-composition-preserves-sweetness | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-155 | thm-singular-value-decomposition-for-compact-operators | accuracy | ill-typed-claim | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-156 | thm-spectral-theorem-for-compact-self-adjoint-operators | accuracy | false-or-overstrong-statement | statement | narrowed | 7-adjudicate |
| phase-2-remaining-27-step7-e-157 | thm-strongly-compact-relative-consistency-normal-moore | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-158 | thm-trace-class-iff-product-of-two-hilbert-schmidt-operators | accuracy | citation-inaccurate | proof-step 1.2 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-159 | thm-trace-class-is-a-two-sided-banach-operator-ideal | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-e-160 | thm-trace-is-absolutely-convergent-and-basis-independent | accuracy | ill-typed-claim | proof-step 1.2 | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-001 | prop-root-systems-of-the-classical-complex-lie-algebras | accuracy | citation-inaccurate | frontmatter | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-002 | ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras | accuracy | frontmatter-schema | frontmatter | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-003 | prop-dimension-formula-from-roots | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-004 | cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-005 | fs-every-symplectic-action-is-hamiltonian | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-006 | ex-low-rank-dynkin-coincidences | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-007 | fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-preflight-a-008 | fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-007 | lem-killing-length-of-a-root-is-nonzero | accuracy | citation-inaccurate | facts-block | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-008 | prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra | accuracy | unsupported-inference | facts-block | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-009 | prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types | accuracy | citation-inaccurate | facts-block | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-010 | prop-killing-form-orthogonality-of-root-spaces | accuracy | unsupported-inference | facts-block | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-011 | thm-fleissner-normal-moore-space-construction | accuracy | arithmetic-error | proof-step | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-015 | thm-shelah-universal-meagre-composition-preserves-sweetness | accuracy | ill-typed-claim | proof-step | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-017 | ex-the-derivative-of-a-bounded-bilinear-map | accuracy | ill-typed-claim | statement | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-018 | lem-singular-values-equal-approximation-numbers | accuracy | ill-typed-claim | statement | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-019 | lem-extreme-points-of-the-dual-ball-of-c-of-k | accuracy | missing-hypothesis | remark | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-023 | cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable | accuracy | invalid-witness | statement | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-024 | cex-finite-quadratic-variation-does-not-imply-finite-total-variation | accuracy | missing-hypothesis | facts-block | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-026 | def-continuous-time-adapted-process-and-martingale | accuracy | missing-hypothesis | definition | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-028 | def-reduced-generalized-homology-theory | accuracy | ill-typed-construction | definition | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u1-029 | lem-complex-orientation-of-underlying-real-bundles | accuracy | missing-hypothesis | statement | fixed | 7-rejudge |
| phase-2-remaining-27-step7-v2-impact-repeat-r1-u3-003 | thm-integration-by-parts-for-brownian-ito-processes | accuracy | missing-hypothesis | statement | fixed | owner |
| phase-2-remaining-27-step7-v2-ledger-gate-001 | ex-legendre-polynomials-from-gram-schmidt | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-002 | cor-separable-infinite-dimensional-hilbert-space-is-ell-two | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-003 | def-stiefel-whitney-classes-from-the-projective-bundle-relation | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-004 | thm-real-splitting-principle-with-mod-two-injective-pullback | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-005 | def-euler-class-by-zero-section-pullback-of-the-thom-class | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-006 | ex-euler-class-of-the-universal-oriented-two-plane | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-007 | cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-008 | prop-killing-form-orthogonality-of-root-spaces | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-009 | thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-010 | def-regular-root-hyperplanes | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-011 | prop-centralizer-dimension-from-vanishing-roots | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-012 | prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-013 | ex-cartan-subalgebras-of-a-direct-sum | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-014 | prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-015 | prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-016 | prop-dimensions-of-the-exceptional-simple-lie-algebras | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-017 | fs-b-n-and-c-n-are-isomorphic-root-systems-for-all-n | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-018 | prop-root-systems-of-the-classical-complex-lie-algebras | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-019 | thm-isomorphism-theorem-for-complex-semisimple-lie-algebras | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-020 | ex-positive-roots-and-highest-root-of-g-two | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-021 | lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-022 | lem-simple-reflections-preserve-weight-multiplicities | accuracy | ill-typed-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-023 | thm-analytic-and-root-system-weyl-groups-agree | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-024 | thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-025 | thm-compact-connected-lie-groups-are-classified-by-root-data | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-026 | prop-central-quotients-correspond-to-intermediate-character-lattices | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-027 | ex-character-lattices-of-su-two-and-so-three | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-028 | thm-highest-weight-classification-for-a-compact-connected-lie-group | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-029 | thm-weyl-integration-formula | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-030 | lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-031 | ex-the-peter-weyl-decomposition-of-l-two-su-two | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-032 | def-complexification-of-a-real-lie-algebra | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-033 | thm-real-forms-correspond-to-conjugate-linear-involutions | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-034 | thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-035 | def-maximal-split-abelian-subspace-and-real-rank | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-036 | fs-all-real-forms-of-a-complex-semisimple-lie-algebra-are-isomorphic | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-037 | ex-compact-and-split-real-forms-of-sl-two-c | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-038 | thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-039 | ex-compact-and-split-cartan-subalgebras-of-sl-two-r | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-040 | lem-characteristic-kernel-on-a-regular-moment-level | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-041 | thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-042 | thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-043 | ex-grassmannians-from-unitary-symplectic-reduction | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-044 | ex-two-sphere-as-a-coadjoint-orbit-of-so-three | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-045 | cex-kelley-cofinite-set-is-not-closed | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-046 | ex-isolated-point-repair-recovers-choice-function | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-047 | thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions | accuracy | missing-choice-scope | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-048 | lem-brunner-urysohn-obstruction-is-injectively-boundable | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-049 | cor-dmc-is-not-provable-in-zf | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-050 | cor-zf-does-not-prove-urysohn-lemma | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-051 | thm-moore-spaces-are-subparacompact | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-052 | thm-formal-nmsc-consistency-lower-bound | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-053 | thm-fleissner-normal-moore-space-construction | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-054 | def-rapid-and-raisonnier-filters | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-055 | lem-shelah-homogeneous-truth-has-baire-representatives | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-056 | thm-shelah-baire-model-separates-baire-property-from-measurability | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-057 | thm-shelah-inner-model-all-sets-of-reals-have-baire-property | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-058 | fs-the-baire-property-model-needs-an-inaccessible | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-059 | lem-raisonnier-family-is-a-sigma-one-three-filter | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-060 | thm-spectral-theorem-for-compact-self-adjoint-operators | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-061 | lem-singular-values-equal-approximation-numbers | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-062 | ex-rank-one-operator-adjoint-norm-and-trace | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-063 | ex-integral-operator-trace-under-a-valid-diagonal-hypothesis | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-064 | thm-regular-value-theorem-for-banach-manifolds | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-065 | thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-066 | lem-local-finite-dimensional-reduction-for-a-fredholm-map | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-067 | ex-the-derivative-of-a-bounded-bilinear-map | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-068 | thm-resolvent-is-banach-valued-holomorphic | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-069 | lem-contour-integral-commutes-with-bounded-linear-maps | accuracy | ill-typed-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-070 | def-riesz-spectral-projection | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-071 | thm-holomorphic-functional-calculus-homomorphism | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-072 | lem-admissible-cycle-around-a-compact-plane-set | accuracy | ill-typed-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-073 | lem-zero-set-ultrafilters-and-stone-cech-points | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-074 | ex-maximal-ideal-space-of-the-disc-algebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-075 | thm-self-adjoint-norm-and-spectrum-extrema | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-076 | def-densely-defined-closed-and-closable-operator | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-077 | def-cayley-transform-of-a-self-adjoint-operator | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-078 | thm-spectral-theorem-for-unbounded-self-adjoint-operators | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-079 | def-norm-and-strong-resolvent-convergence | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-080 | def-strongly-continuous-one-parameter-unitary-group | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-081 | def-infinitesimal-generator-of-a-unitary-group | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-082 | ex-maximum-crossing-probability-before-a-fixed-time | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-083 | cor-one-dimensional-brownian-motion-hits-every-point-almost-surely | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-084 | ex-density-and-infinite-mean-of-a-one-sided-hitting-time | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-085 | cex-strong-markov-fails-at-a-nonstopping-random-time | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-086 | thm-ito-integral-process-has-a-continuous-martingale-version | accuracy | ill-typed-claim | definition | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-087 | ex-time-changed-quadratic-variation-of-an-ito-integral | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-088 | cor-exponential-brownian-martingale | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-089 | cor-brownian-square-martingale | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-090 | cex-the-ordinary-chain-rule-fails-for-brownian-motion | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-091 | cor-vector-levy-characterization | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-092 | thm-space-time-harmonic-functions-yield-brownian-local-martingales | accuracy | missing-hypothesis | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-093 | def-reduced-generalized-homology-theory | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-094 | lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss | accuracy | ill-typed-claim | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-095 | lem-homological-ahss-exact-couple-from-the-skeletal-filtration | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-096 | lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-097 | lem-ku-representability-and-skeletal-postnikov-d-three-comparison | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-098 | lem-integral-cohomology-ring-of-complex-projective-space-by-splitting | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-099 | thm-pontryagin-whitney-product-away-from-two | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-100 | ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space | accuracy | missing-hypothesis | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-101 | ex-complex-k-ahss-for-complex-projective-space | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-102 | prop-killing-form-orthogonality-of-root-spaces | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-103 | lem-killing-length-of-a-root-is-nonzero | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-104 | prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-105 | ex-weyl-reflection-in-sl-two | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-106 | prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-107 | lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-108 | prop-central-quotients-correspond-to-intermediate-character-lattices | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-109 | thm-analytic-and-root-system-weyl-groups-agree | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-110 | thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-111 | thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-112 | thm-fleissner-normal-moore-space-construction | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-113 | thm-formal-nmsc-consistency-lower-bound | accuracy | false-or-overstrong-title | title | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-114 | lem-shelah-homogeneous-truth-has-baire-representatives | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-115 | thm-shelah-universal-meagre-composition-preserves-sweetness | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-116 | ex-the-derivative-of-a-bounded-bilinear-map | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-117 | lem-singular-values-equal-approximation-numbers | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-118 | lem-extreme-points-of-the-dual-ball-of-c-of-k | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-119 | def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-120 | cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-121 | cex-finite-quadratic-variation-does-not-imply-finite-total-variation | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-122 | def-continuous-time-adapted-process-and-martingale | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-123 | cor-deterministic-ito-integrals-are-gaussian | accuracy | missing-choice-scope | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-124 | def-reduced-generalized-homology-theory | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-125 | lem-complex-orientation-of-underlying-real-bundles | accuracy | citation-inaccurate | facts-block | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-126 | ex-complex-k-ahss-for-spheres | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-127 | lem-homological-ahss-exact-couple-from-the-skeletal-filtration | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step7-v2-ledger-gate-128 | lem-ku-representability-and-skeletal-postnikov-d-three-comparison | accuracy | arithmetic-error | proof-step | fixed | 7-adjudicate |
| phase-2-remaining-27-step8-sweep-def-thom-euler-rank-zero | def-thom-euler-class-of-an-oriented-vector-bundle | accuracy | false-or-overstrong-statement | definition | fixed | 8-scope |
| phase-2-remaining-27-step8-sweep-indistinguishability-completion | def-law-modification-and-indistinguishability-of-processes | accuracy | false-or-overstrong-statement | definition | deferred | 8-scope |
| phase-2-remaining-27-step8-sweep-thm-thom-rank-zero | thm-thom-isomorphism-for-oriented-vector-bundles | accuracy | false-or-overstrong-statement | proof-step | fixed | 8-scope |

Grouped by class: accuracy 1107.
Grouped by location: definition 94; facts-block 244; frontmatter 4; proof-step 524; proof-step 1.1 4; proof-step 1.2 7; proof-step 1.3 4; proof-step 1.5 3; proof-step 2.1 12; proof-step 2.2 5; proof-step 2.5 2; proof-step 3.1 12; proof-step 3.2 6; proof-step 4.1 10; proof-step 4.2 1; proof-step 5.1 3; proof-step 5.2 1; proof-step 6.1 1; proof-steps 1.1-4.1 1; proof-steps 1.2-1.3 1; proof-steps 1.2-4.1 1; proof-steps 2.1-4.1 3; proof-steps 2.2-2.3 1; proof-steps 3.1-4.1 1; proof-steps 3.1-6.1 1; proof-steps 3.1-7.1 1; proof-steps 4.1-7.1 1; proof-steps 9.1-10.1 1; remark 15; statement 110; Statement 1; statement-and-proof 19; title 12; verification step 1.1 1.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-5.6-terra | 1341 | 1020 | 321 | 0 |

Across 1341 text version(s) with configured-judge evidence: 1341 complete model set(s), 1020 all keep, 321 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 128; confirmed_nonfatal 166; false_positive 23.

## Repeated repairs and pathway closure

Items repaired more than once: cex-symmetric-need-not-be-self-adjoint (3); def-cayley-transform-of-a-self-adjoint-operator (3); def-characteristic-class-as-a-universal-natural-bundle-class (3); def-continuous-time-adapted-process-and-martingale (3); def-discrete-and-essential-spectrum-of-a-self-adjoint-operator (3); def-invertible-element-and-general-linear-group-of-a-banach-algebra (3); def-natural-and-usual-augmented-brownian-filtrations (3); def-quadratic-covariation-of-brownian-ito-processes (3); def-relative-compactness-with-respect-to-an-operator (3); def-riesz-spectral-projection (3); def-spectral-radius (3); def-spectrum-and-resolvent-set-in-a-banach-algebra (3); def-theta-stable-cartan-subalgebra-and-compact-split-parts (3); ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets (3); ex-c-zero-of-a-locally-compact-space (3); ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space (3); ex-euler-class-of-the-universal-oriented-two-plane (3); ex-exit-side-probability-from-an-interval (3); ex-fourier-series-of-a-square-wave (3); ex-ito-formula-for-brownian-powers (3); ex-periodic-derivative-and-its-unitary-translation-group (3); ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection (3); ex-successive-brownian-hits-restart-independent-copies (3); lem-homological-ahss-exact-couple-from-the-skeletal-filtration (3); lem-ladder-separation-from-hyp (3); lem-local-finite-dimensional-reduction-for-a-fredholm-map (3); lem-nuclear-series-characterizes-trace-norm (3); lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss (3); lem-resolvent-star-algebra-is-dense-in-c-zero (3); lem-shelah-homogeneous-truth-has-baire-representatives (3); lem-simple-reflections-preserve-weight-multiplicities (3); lem-simple-root-integrability-bounds-the-dominant-cyclic-module (3); lem-spectral-form-domain-and-core-of-a-semibounded-operator (3); lem-the-ahss-first-differential-is-the-cellular-coboundary (3); lem-zero-set-ultrafilters-and-stone-cech-points (3); prop-central-quotients-correspond-to-intermediate-character-lattices (3); prop-classical-real-forms-of-the-classical-complex-lie-algebras (3); thm-classification-of-real-semisimple-lie-algebras (3); thm-fleissner-normal-moore-space-construction (3); thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group (3); thm-integration-by-parts-for-brownian-ito-processes (3); thm-ito-integral-process-has-a-continuous-martingale-version (3); thm-kato-rellich (3); thm-min-max-principle-below-essential-spectrum (3); thm-self-adjointness-range-criterion (3); thm-shelah-universal-meagre-composition-preserves-sweetness (3); thm-space-time-harmonic-functions-yield-brownian-local-martingales (3); thm-trace-class-iff-product-of-two-hilbert-schmidt-operators (3); thm-trace-class-is-a-two-sided-banach-operator-ideal (3); thm-von-neumann-self-adjoint-extension-parameterization (3); thm-weyl-essential-spectrum-invariance (3); cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold (2); cex-finite-quadratic-variation-does-not-imply-finite-total-variation (2); cex-kelley-cofinite-set-is-not-closed (2); cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients (2); cex-self-adjointness-cannot-be-dropped-from-the-order-calculus (2); cex-spectrum-can-shrink-in-a-larger-banach-algebra (2); cex-trace-of-products-is-not-cyclic-without-summability (2); cor-brownian-filtration-local-martingales-have-continuous-versions (2); cor-brunner-models-also-refute-tietze-extension (2); cor-deterministic-ito-integrals-are-gaussian (2); cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group (2); cor-exponential-brownian-martingale (2); cor-heat-semigroup-martingale (2); cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group (2); cor-one-dimensional-brownian-motion-hits-every-point-almost-surely (2); cor-opposite-root-spaces-pair-nondegenerately (2); cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra (2); cor-square-integrable-brownian-terminal-variables-have-ito-representations (2); cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root (2); cor-vector-levy-characterization (2); cor-zf-does-not-prove-urysohn-lemma (2); def-absolute-value-and-singular-values-of-a-compact-operator (2); def-adjoint-of-a-densely-defined-unbounded-operator (2); def-approximate-point-and-compression-spectrum (2); def-brownian-motion-started-at-x (2); def-complex-flag-bundle-and-chern-roots (2); def-complex-projective-bundle-and-tautological-complex-line (2); def-continuous-brownian-ito-process (2); def-countable-base-banach-manifold-and-smooth-map (2); def-cyclic-vector-and-cyclic-normal-operator (2); def-deficiency-subspaces-and-deficiency-indices (2); def-dependent-multiple-choice-finite-level-tree (2); def-dominant-integrable-highest-weight-cyclic-module (2); def-good-tree-watson-symmetric-stone-model (2); def-graded-chern-character-by-suspension-and-bott-periodicity (2); def-infinitesimal-generator-of-a-unitary-group (2); def-integral-dominant-and-strictly-dominant-weights (2); def-maximal-split-abelian-subspace-and-real-rank (2); def-point-continuous-and-residual-spectrum (2); def-positive-restricted-roots-and-nilpotent-n-algebra (2); def-progressively-measurable-and-predictable-process (2); def-rapid-and-raisonnier-filters (2); def-real-flag-bundle-and-stiefel-whitney-roots (2); def-real-projective-bundle-and-tautological-line (2); def-root-datum-of-a-compact-connected-lie-group (2); def-shelah-universal-meagre-forcing (2); def-split-banach-submanifold (2); def-toral-and-maximal-toral-subalgebra (2); def-trace-class-operator (2); def-unital-banach-algebra (2); ex-a-nonreduced-bc-root-system-from-a-real-form (2); ex-a-projection-with-finite-dimensional-kernel-is-fredholm (2); ex-a-regular-level-set-in-a-banach-space (2); ex-adjoints-of-shifts-multiplication-and-integral-operators (2); ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function (2); ex-bounded-operators-form-a-noncommutative-banach-algebra (2); ex-brownian-path-p-variation-threshold (2); ex-cartan-subalgebra-and-roots-of-sl-two (2); ex-cartan-subalgebras-of-a-direct-sum (2); ex-chern-classes-of-a-sum-of-universal-complex-lines (2); ex-compact-and-split-cartan-subalgebras-of-sl-two-r (2); ex-compact-and-split-real-forms-of-sl-two-c (2); ex-complex-k-ahss-for-complex-projective-space (2); ex-complex-k-ahss-for-real-projective-space (2); ex-complex-k-ahss-for-spheres (2); ex-density-and-infinite-mean-of-a-one-sided-hitting-time (2); ex-development-stars-form-a-countable-local-base (2); ex-diagonal-schatten-class-criteria-on-ell-two (2); ex-euler-class-of-zero-and-trivial-positive-rank-bundles (2); ex-expected-exit-time-from-an-interval-via-ito-formula (2); ex-exponential-martingale-and-a-brownian-tail-bound (2); ex-gelfand-transform-of-ell-one-of-z (2); ex-grassmannians-from-unitary-symplectic-reduction (2); ex-hyperbolic-space-as-so-zero-n-one-mod-so-n (2); ex-integral-of-brownian-motion-against-itself-preview (2); ex-integral-operator-trace-under-a-valid-diagonal-hypothesis (2); ex-legendre-polynomials-from-gram-schmidt (2); ex-maximal-ideal-space-of-the-disc-algebra (2); ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n (2); ex-maximum-crossing-probability-before-a-fixed-time (2); ex-position-operator-on-l-two-of-r (2); ex-positive-roots-and-highest-root-of-g-two (2); ex-rank-one-operator-adjoint-norm-and-trace (2); ex-restricted-roots-of-sl-n-r (2); ex-root-strings-in-type-a-two (2); ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras (2); ex-spectrum-of-the-unilateral-shift (2); ex-standard-and-dual-representations-of-sl-n-by-highest-weights (2); ex-stone-duality-for-a-finite-boolean-algebra (2); ex-stone-duality-for-a-power-set-algebra (2); ex-the-adjoint-representation-and-the-highest-root (2); ex-the-derivative-of-a-bounded-bilinear-map (2); ex-the-eight-dimensional-adjoint-representation-of-sl-three (2); ex-the-peter-weyl-decomposition-of-l-two-su-two (2); ex-the-same-sequence-in-real-and-p-adic-metrics (2); ex-two-sphere-as-a-coadjoint-orbit-of-so-three (2); ex-unbounded-multiplication-operator-and-its-domain (2); ex-unitization-of-a-nonunital-banach-algebra (2); ex-verma-modules-for-sl-two (2); fs-all-integer-multiples-of-a-root-are-roots (2); fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root (2); fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition (2); fs-zfc-proves-normal-moore-space-conjecture (2); lem-a-bundle-embedding-produces-its-grassmannian-classifying-map (2); lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics (2); lem-brownian-transition-semigroup-property (2); lem-characteristic-kernel-on-a-regular-moment-level (2); lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type (2); lem-compact-lie-groups-admit-central-continuous-approximate-identities (2); lem-complex-orientation-of-underlying-real-bundles (2); lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator (2); lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions (2); lem-conditioning-a-known-state-and-independent-noise (2); lem-contour-integral-commutes-with-bounded-linear-maps (2); lem-corson-stone-obstruction-is-ordinal-boundable (2); lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching (2); lem-edge-maps-of-a-bounded-skeletal-ahss (2); lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence (2); lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations (2); lem-highest-weight-modules-have-weights-below-the-top-weight (2); lem-integral-cohomology-ring-of-complex-projective-space-by-splitting (2); lem-killing-length-of-a-root-is-nonzero (2); lem-ku-representability-and-skeletal-postnikov-d-three-comparison (2); lem-laplace-resolvents-of-a-unitary-group (2); lem-ma-produces-an-uncountable-q-set (2); lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle (2); lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one (2); lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign (2); lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives (2); lem-planar-brownian-annular-exit-probability (2); lem-polynomial-calculus-is-isometric-for-self-adjoint-operators (2); lem-product-rectangle-kernels-are-dense-in-product-l-two (2); lem-raisonnier-family-is-a-sigma-one-three-filter (2); lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square (2); lem-second-resolvent-identity-for-closed-operator-perturbations (2); lem-shelah-sweet-density-transfer-along-complete-suborders (2); lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets (2); lem-solovay-almost-disjoint-extension-under-ma (2); lem-spectrum-of-a-positive-operator-is-nonnegative (2); lem-submultiplicative-root-limit (2); lem-tautological-degree-one-class-is-well-defined-and-fiber-generating (2); lem-trigonometric-characters-are-orthonormal (2); lem-unbounded-pvm-integral-is-well-defined-and-closed (2); lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space (2); lem-weyl-denominator-and-anti-invariant-orbit-sum-basis (2); lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator (2); lem-zero-free-entire-function-of-exponential-type-is-an-exponential (2); prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish (2); prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra (2); prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k (2); prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras (2); prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics (2); prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits (2); prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t (2); prop-dimensions-of-the-exceptional-simple-lie-algebras (2); prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion (2); prop-first-stiefel-whitney-class-classifies-orientability (2); prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system (2); prop-reduced-and-unreduced-generalized-cohomology-theories-correspond (2); prop-reduction-commutes-with-products (2); prop-restricted-root-systems-may-be-nonreduced (2); prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group (2); prop-root-systems-of-the-classical-complex-lie-algebras (2); prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra (2); prop-top-highest-weight-summand-in-a-tensor-product (2); rem-choice-strength-ledger-baire-urysohn-stone-tychonoff (2); rem-dynkin-diagrams-do-not-classify-global-lie-groups (2); rem-ito-versus-stratonovich-boundary (2); rem-nagata-cp-theorem-remains-topological (2); rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds (2); rem-raw-versus-usual-filtration-in-the-strong-markov-theorem (2); rem-self-adjoint-extensions-and-deficiency-indices (2); rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel (2); thm-all-real-sets-measurable-gives-an-inaccessible-inner-model (2); thm-analytic-and-root-system-weyl-groups-agree (2); thm-atkinson (2); thm-baire-property-model-equiconsistent-with-zfc (2); thm-bing-q-set-moore-space-is-normal-and-nonmetrizable (2); thm-boundary-of-spectrum-lies-in-approximate-point-spectrum (2); thm-bounded-normal-operator-abstract-spectral-theorem (2); thm-brownian-filtration-martingale-representation (2); thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law (2); thm-brownian-markov-property (2); thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval (2); thm-brownian-positive-occupation-proportion-has-the-arcsine-law (2); thm-brownian-zero-set-has-no-isolated-points (2); thm-canonical-spectral-type-decomposition (2); thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space (2); thm-cartan-killing-classification-of-complex-simple-lie-algebras (2); thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras (2); thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate (2); thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification (2); thm-ch-normal-nonmetrizable-moore-space (2); thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero (2); thm-compact-connected-lie-groups-are-classified-by-root-data (2); thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems (2); thm-compact-group-weyl-group-is-finite (2); thm-complex-splitting-principle-with-integral-injective-pullback (2); thm-conjugacy-of-maximal-tori (2); thm-cyclicity-of-the-trace (2); thm-density-of-elementary-predictable-processes-in-predictable-l2 (2); thm-dmc-implies-compact-hausdorff-baire (2); thm-dmc-implies-urysohn-lemma (2); thm-dmc-tree-and-successor-menu-formulations (2); thm-dynkin-formula-for-bounded-brownian-stopping (2); thm-effective-metacompact-discrete-metrics-implies-ac (2); thm-every-commutative-c-star-algebra-has-an-approximate-unit (2); thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space (2); thm-existence-of-each-classified-root-system (2); thm-first-chern-class-classifies-complex-line-bundles (2); thm-fleissner-hyp-normal-nonmetrizable-moore-space (2); thm-formal-nmsc-consistency-lower-bound (2); thm-fourier-basis-and-parseval-on-the-n-torus (2); thm-gelfand-mazur (2); thm-highest-weight-classification-for-a-compact-connected-lie-group (2); thm-hilbert-space-fourier-expansion (2); thm-holomorphic-functional-calculus-homomorphism (2); thm-homological-atiyah-hirzebruch-spectral-sequence (2); thm-integral-complex-projective-bundle-theorem (2); thm-inverse-function-theorem-for-banach-spaces (2); thm-ito-formula-one-dimensional (2); thm-l-two-kernels-give-hilbert-schmidt-operators (2); thm-localized-ito-integral (2); thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra (2); thm-minimal-c-star-unitization (2); thm-mod-two-cohomology-of-bo-n (2); thm-multidimensional-ito-formula-for-brownian-driven-processes (2); thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem (2); thm-naturality-orientation-sign-and-whitney-product-for-euler-classes (2); thm-numerical-radius-is-an-equivalent-operator-norm (2); thm-p-adic-completion-is-a-field (2); thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions (2); thm-polynomial-spectral-mapping (2); thm-pontryagin-whitney-product-away-from-two (2); thm-positive-square-root (2); thm-quadratic-covariation-of-brownian-ito-processes (2); thm-raisonnier-filter-is-rapid-from-null-code-measurability (2); thm-rank-two-root-system-classification (2); thm-rapid-filters-are-not-lebesgue-measurable (2); thm-real-forms-correspond-to-conjugate-linear-involutions (2); thm-real-splitting-principle-with-mod-two-injective-pullback (2); thm-relative-consistency-countable-choice-without-urysohn (2); thm-relative-consistency-dc-without-stone (2); thm-root-sl-two-triple (2); thm-root-string-property (2); thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system (2); thm-schur-orthogonality-for-compact-lie-groups (2); thm-self-adjoint-norm-and-spectrum-extrema (2); thm-serre-presentation-theorem (2); thm-shelah-baire-model-separates-baire-property-from-measurability (2); thm-shelah-ch-omega-one-sweet-construction (2); thm-shelah-inner-model-all-sets-of-reals-have-baire-property (2); thm-shelah-sweet-amalgamation-preserves-sweetness (2); thm-shelah-sweet-partial-isomorphism-extension (2); thm-singular-value-decomposition-for-compact-operators (2); thm-spectral-mapping-for-continuous-normal-functional-calculus (2); thm-spectral-radius-formula (2); thm-spectral-theorem-for-compact-self-adjoint-operators (2); thm-spectral-theorem-for-unbounded-self-adjoint-operators (2); thm-stopping-an-ito-integral (2); thm-thom-isomorphism-for-oriented-vector-bundles (2); thm-unbounded-borel-functional-calculus (2); thm-universal-property-of-the-free-lie-algebra (2); thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications (2); thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence (2); thm-weyl-criterion-for-essential-spectrum (2); thm-weyl-integration-formula (2); thm-whitney-sum-formula-for-stiefel-whitney-classes (2).
Pathway obligations closed: 2/2; categories: foundations, functional-analysis.

## Caveats

- One confirmed fatal defect is deferred rather than repaired. The packet's fatal rows record a false-or-overstrong-statement at the definition of def-law-modification-and-indistinguishability-of-processes, deferred at 7-rejudge and again at the 8-scope sweep; the item is currently published with its own judge pass recorded, so a published interface-level definition coexists with a confirmed fatal adjudication.
- For that deferral the packet gives no narrative, so I opened the named row phase-2-remaining-27-step8-sweep-indistinguishability-completion in research/defect-ledger.jsonl (line 10122), which states that no published-repair licence row exists for the item, that owner decisions D3 record that a separate published-repair decision and its own judge verdict are owed, and that the flagged clause is the requirement that the all-times equality event be measurable.
- Closure of 33 items rests on terminal resolutions recorded as 'repaired' by a final adjudicator with item and context hashes but no fresh in-loop judge verdict; the 1007 complete verdict pairs cover the other items. The named artifact research/phase-2-remaining-27-judge-closure.json records 51 further terminal resolutions as superseded by later in-loop verdicts, and briefs/tasks/final-adjudicator-step7.md describes the terminal final-adjudicator lane as retired, so these 33 are where publication approval would rest on adjudicator authority rather than current judge evidence.
- The packet provides row-level detail only for fatal rows. With 1322 total defect rows and 1107 fatal rows, roughly two hundred rows, including the 166 confirmed-nonfatal and 23 false-positive adjudication outcomes, appear only in aggregate counts, so the packet alone cannot show which items those were or how each was dispositioned.
- 319 items carry two or more recorded repairs (268 with two, 51 with three), i.e. the same item re-entered repair after earlier judgement. This churn is the packet's clearest internal signal that first-pass verification and early repairs were not reliable for those items, and it concentrates in interface locations: of the 204 distinct items with a fatal row at statement, definition, title or statement-and-proof, 95 also appear in the repeated-repair list.
- Interface-level repairs are not reconciled downstream inside this packet. The fatal rows sit at statement (110), definition (94), title (12), statement-and-proof (19) and Statement (1), reaching 204 distinct items, and interface changes are exactly the class that can invalidate consumer evidence; the packet contains no outside-consumer reconciliation for them.
- All 1341 judge ledger rows are exact and complete with no mixed, null or incomplete outcomes, but they come from a single configured judge model, so independent agreement across judging models is not part of this evidence, and the adjudication record itself shows 23 rejections were false positives: a judge pass is not by itself proof of correctness.
- Traceability is incomplete for part of the record: 68 fatal rows carry repair_cost 'unknown', and three fatal rows (phase-2-remaining-27-fa-e-gtw-source-reflection-group, phase-2-remaining-27-fa-e-ishii-null-order-definition, phase-2-remaining-27-fa-e-ishii-rapid-bound) carry a source citation rather than an item id in the subject field, so those rows cannot be attributed to a specific item from the packet alone.

## Owner reading priorities

- def-law-modification-and-indistinguishability-of-processes (deferred confirmed fatal definition defect): This is the only item-level defect the packet leaves unresolved and it sits on a published definition. The flagged clause requires the all-times equality event itself to be measurable, which is stronger than the usual convention of agreement outside a null exceptional set, so the owner must settle the intended convention before approving publication; the D3 record states the published-repair decision and its own judge verdict are still owed, and the escalation lane left the measurability clause standing.
- The 33 items closed by terminal final-adjudicator resolutions, prioritising thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras, fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition, lem-edge-maps-of-a-bounded-skeletal-ahss and prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system: These six are both terminal-resolved and repeatedly repaired, so their current content was fixed late and never re-entered the in-loop judged set. Reading them directly tells the owner whether adjudicator-authority closure is acceptable for the items where the repair history is least stable.
- Items with three recorded repair rounds whose defect touched a statement or definition: 51 items carry three repairs and 16 of them have an interface-location defect (for example def-cayley-transform-of-a-self-adjoint-operator, def-continuous-time-adapted-process-and-martingale, thm-ito-integral-process-has-a-continuous-martingale-version, thm-integration-by-parts-for-brownian-ito-processes). The frozen artifact is the last edit, so an owner read of the final statement and proof is the cheapest check that the successive repairs cohere.
- The largest per-item defect clusters, led by lem-pmea-three-quarter-separation-estimate and lem-local-finite-dimensional-reduction-for-a-fredholm-map: The packet shows a handful of items with five to six fatal rows, meaning the statement or proof was rebuilt repeatedly rather than touched once. These are the places where a partial repair would be least visible, and they concentrate the citation and inference subclasses that dominate the record.
- Repaired citation claims, especially the 185 citation rows located in facts blocks and the 312 citation-inaccurate rows: Citation accuracy is the largest subclass and the least mechanically checkable part of the record; facts blocks carry the library's external-source claims and are consumed by readers as given. Spot-checking the repaired citations against the cited works is the owner's main remaining defence of source fidelity.
- The 204 items whose fatal defect sat at a statement, definition or title interface: Interface repairs are the ones that can invalidate consumer evidence, and this packet shows the scale of that exposure without any consumer reconciliation. Before approving publication the owner should confirm the published-consumer ledger and Phase-3 records carry a downstream disposition for the interface changes made in this run.
- The two rewritten pathway obligations in foundations and functional-analysis: The packet records both pathway obligations as closed by rewriting rather than by proving the original claims. Rewriting a reading pathway changes what the library asserts to readers, so the owner should confirm the rewritten text is the intended final statement.

## Workflow recommendations

1. Decide the published repair for def-law-modification-and-indistinguishability-of-processes before approving publication: either authorise the smallest coherent correction to the definition, with its own judge verdict and a downstream-consumer check, or record an explicit owner rationale for retaining the measurability clause as written. (risk: medium) — Removes the only acknowledged open fatal defect, fixes the definition's convention against the usual agreement-off-a-null-set reading, and protects every process-theory item that consumes modification or indistinguishability from an overstrong interface. Evidence: Packet defects.fatal rows phase-2-remaining-27-fa-d-indistinguishability-completion (7-rejudge) and phase-2-remaining-27-step8-sweep-indistinguishability-completion (8-scope), both disposition 'deferred'; the linked ledger row records no repair licence, D3's statement that a published-repair decision and judge verdict are owed, and that the measurability clause still stands; the item currently carries status published with a 2026-09-06 judge pass.
2. Either obtain fresh in-loop judge evidence for the 33 terminal-resolved items or record an explicit owner acceptance of adjudicator-authority closure for them, starting with the six that also required repeat repairs. (risk: medium) — Converts the largest ambiguity in the closure record into either current judge evidence or a documented owner decision, so the publication state does not silently depend on a retired terminal lane. Evidence: Packet verification.terminal_resolutions lists 33 items with resolved_by final-adjudicator and disposition 'repaired' while verdicts_complete is 1007 of scope 1040; research/phase-2-remaining-27-judge-closure.json records terminal_superseded 51, terminal_escalated 0 and closed true; briefs/tasks/final-adjudicator-step7.md states the terminal final-adjudicator lane is retired.
3. Read the frozen statement and proof of the 51 three-repair items and the five-to-six-row items such as lem-pmea-three-quarter-separation-estimate, rather than relying on their repair history. (risk: low) — Targets the items where verification and repair demonstrably iterated, giving the owner the best return per item read for catching a partial or locally-scoped repair that left the surrounding argument unchanged. Evidence: Packet repeated_repairs records 319 items with two or more repairs (268 with two, 51 with three); defects.fatal rows per subject peak at six for lem-pmea-three-quarter-separation-estimate and five for lem-local-finite-dimensional-reduction-for-a-fredholm-map and lem-shelah-homogeneous-truth-has-baire-representatives.
4. Spot-check the repaired citation claims against the cited works, prioritising facts blocks and the 312 citation-inaccurate rows. (risk: low) — Citation and inference subclasses dominate the defect record, and citation fidelity cannot be confirmed by structural gates; checking a sample restores the owner's confidence that quoted or paraphrased source claims match what the sources say. Evidence: Packet defects.by_subclass shows citation-inaccurate 312, citation-inflated 37, citation-missing 37, citation-misattributed 1, citation-truncated 3, against invalid-inference 343; defects.by_location places 244 fatal rows in facts blocks, including 185 of the citation rows.
5. Confirm that every statement, definition or title repair made in this run has a recorded downstream consumer disposition in the published-consumer or Phase-3 record before approving publication. (risk: medium) — Prevents shipping an interface change whose consumer evidence was produced against the earlier statement, which is the one defect class that can silently invalidate work outside this run's frontier. Evidence: Packet defects.by_location records 110 statement, 94 definition, 12 title, 19 statement-and-proof and 1 Statement fatal rows, spanning 204 distinct items, while the packet contains no consumer-reconciliation evidence; CLAUDE.md rule 12 requires such findings to be tracked in the published-consumer supplier ledger.
6. Re-verify the build at the frozen content hash immediately before the deliberate status:published changes and push, and record the three owner actions as performed. (risk: low) — Ensures the artifact that becomes public is exactly the artifact this evidence binds, so no content drift can occur between the interpreted packet and the published state. Evidence: Packet readiness.content_sha256 b9ef8afbdcbf0429276604458ad713cccc7a2f621383368f29f801b168ce8e17 with owner_actions_remaining listing personal mathematical audit, deliberate status:published changes, and push/deployment; input_sha256 and evidence_sha256 bind every source artifact this report interprets.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
