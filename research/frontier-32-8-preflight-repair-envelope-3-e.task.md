# Exact Step-8 repair envelope — 8-preflight, round 3

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-32",
  "stage": "8-preflight",
  "round": 3,
  "mode": "preflight",
  "group": "e",
  "full_evidence": "research/frontier-32-8-preflight-repair-evidence-3-62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0.json",
  "full_evidence_sha256": "62fc9959a02345adc947e2750e8eaa846c64f6873afec8b546b2c39e5575bbf0",
  "failures": [
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [lem-local-logarithmic-derivative-zeta]: lem-local-logarithmic-derivative-zeta is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 4 [prop-zero-and-split-triangles-are-distinguished] 2:5 declared dependencies; 2:boundary-sensitive language\nHIGH 5 [prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nMODERATE 3 [thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological] 3:7 declared dependencies\nORDINARY 0 [thm-long-exact-hom-sequences-of-a-distinguished-triangle] no signals\nORDINARY 0 [cor-triangulated-five-lemma] no signals\nORDINARY 2 [prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third] 2:boundary-sensitive language\nHIGH 5 [prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [prop-a-distinguished-triangle-with-zero-first-map-is-split] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 5 [prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf] 2:boundary-sensitive language\nORDINARY 0 [prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility] no signals\nORDINARY 2 [prop-the-total-kernel-of-a-cohomological-functor-is-thick] 2:boundary-sensitive language\nORDINARY 2 [prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category] 2:5 declared dependencies\nMODERATE 4 [lem-cone-triangles-satisfy-tr-one] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [lem-cone-triangles-satisfy-tr-three] no signals\nORDINARY 0 [lem-cone-triangles-satisfy-the-octahedral-axiom] no signals\nMODERATE 3 [thm-the-homotopy-category-of-an-abelian-category-is-triangulated] 3:8 declared dependencies\nORDINARY 2 [thm-homology-is-a-homological-functor-on-the-homotopy-category] 2:4 declared dependencies\nMODERATE 4 [prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language] 2:4 declared dependencies\nHIGH 6 [fs-the-third-map-in-a-morphism-of-triangles-is-unique] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [fs-cones-form-a-functor-in-every-triangulated-category] no signals\nORDINARY 2 [fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish] 2:boundary-sensitive language\nORDINARY 0 [fs-the-octahedral-axiom-is-the-associativity-of-composition] no signals\nORDINARY 0 [fs-every-triangulated-subcategory-is-thick] no signals\nORDINARY 0 [fs-the-rotation-of-a-distinguished-triangle-has-no-sign] no signals\nORDINARY 2 [ex-the-split-distinguished-triangle] 2:boundary-sensitive language\nORDINARY 1 [ex-the-cone-triangle-of-multiplication-by-m] 1:2 cited facts\nORDINARY 0 [ex-the-long-exact-hom-sequence-of-a-cone-triangle] no signals\nORDINARY 1 [ex-an-octahedron-for-two-composable-maps-of-stalk-complexes] 1:2 cited facts\nORDINARY 0 [ex-the-thick-subcategory-of-acyclic-complexes] no signals\nORDINARY 2 [cex-a-three-term-zero-composite-diagram-that-is-not-distinguished] 2:boundary-sensitive language\nMODERATE 4 [cex-nonuniqueness-of-a-tr-three-completion] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition] 2:induction, recursion, or minimality\nMODERATE 4 [lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex] no signals\nORDINARY 0 [prop-relative-cw-inclusions-are-cofibrations] no signals\nHIGH 5 [prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 6 [thm-relative-homology-of-consecutive-cw-skeleta] 2:6 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-the-cellular-boundary-squares-to-zero] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-skeletal-homology-stabilizes-away-from-the-cell-dimension] 2:boundary-sensitive language\nMODERATE 4 [lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-cellular-homology-computes-singular-homology] 2:4 declared dependencies; 2:analytic limiting/completeness language\nHIGH 6 [thm-relative-cellular-homology-computes-relative-singular-homology] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-cellular-boundary-is-the-incidence-degree-matrix] 2:boundary-sensitive language\nORDINARY 0 [prop-cellular-maps-induce-cellular-chain-maps] no signals\nORDINARY 2 [cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary] 2:boundary-sensitive language\nMODERATE 4 [thm-euler-poincare-formula-for-finite-cw-complexes] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [prop-euler-characteristic-is-additive-for-finite-cw-pairs] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [prop-euler-characteristic-of-a-finite-cw-product] no signals\nMODERATE 4 [ex-cellular-homology-of-real-projective-space] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space] 2:boundary-sensitive language\nORDINARY 2 [ex-cellular-boundary-matrix-of-a-closed-orientable-surface] 2:boundary-sensitive language\nORDINARY 2 [ex-cellular-homology-of-a-lens-space] 2:boundary-sensitive language\nORDINARY 2 [ex-cellular-homology-of-an-infinite-dimensional-projective-space] 2:analytic limiting/completeness language\nORDINARY 2 [ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic] 2:boundary-sensitive language\nORDINARY 2 [cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball] 2:boundary-sensitive language\nORDINARY 0 [cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex] no signals\nORDINARY 0 [cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells] no signals\nHIGH 5 [prop-parametrized-morse-trajectory-space-is-a-manifold] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-time-translation-acts-freely-on-nonconstant-trajectories] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-unparametrized-trajectory-space-is-a-smooth-manifold] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-no-morse-smale-trajectories-for-nonpositive-index-drop] 2:boundary-sensitive language\nCRITICAL 12 [lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator] 2:5 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [thm-sard-smale-residual-regular-values-for-fredholm-maps] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [lem-universal-metric-trajectory-projection-is-fredholm] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function] 2:6 declared dependencies\nHIGH 5 [thm-relative-morse-smale-perturbation-of-a-gradient-like-field] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [prop-index-one-trajectory-spaces-are-zero-dimensional] 2:boundary-sensitive language\nORDINARY 2 [prop-index-two-trajectory-spaces-are-one-dimensional] 2:boundary-sensitive language\nHIGH 5 [lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [ex-morse-smale-flow-on-the-circle] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [ex-a-morse-smale-height-function-on-a-tilted-torus] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-symmetric-torus-height-flow-is-not-morse-smale] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-an-index-one-moduli-space-can-be-infinite-without-compactness] 2:boundary-sensitive language\nORDINARY 2 [ex-regular-level-slices-for-unparametrized-trajectories] 2:boundary-sensitive language\nrisk-report: 2 error(s), 478 item(s) routed",
      "named_ids": [
        "prop-zero-and-split-triangles-are-distinguished",
        "prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations",
        "thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological",
        "thm-long-exact-hom-sequences-of-a-distinguished-triangle",
        "cor-triangulated-five-lemma",
        "prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third",
        "prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes",
        "prop-a-distinguished-triangle-with-zero-first-map-is-split",
        "prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes",
        "prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism",
        "prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf",
        "prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility",
        "prop-the-total-kernel-of-a-cohomological-functor-is-thick",
        "prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category",
        "lem-cone-triangles-satisfy-tr-one",
        "lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign",
        "lem-cone-triangles-satisfy-tr-three",
        "lem-cone-triangles-satisfy-the-octahedral-axiom",
        "thm-the-homotopy-category-of-an-abelian-category-is-triangulated",
        "thm-homology-is-a-homological-functor-on-the-homotopy-category",
        "prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories",
        "prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language",
        "fs-the-third-map-in-a-morphism-of-triangles-is-unique",
        "fs-cones-form-a-functor-in-every-triangulated-category",
        "fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish",
        "fs-the-octahedral-axiom-is-the-associativity-of-composition",
        "fs-every-triangulated-subcategory-is-thick",
        "fs-the-rotation-of-a-distinguished-triangle-has-no-sign",
        "ex-the-split-distinguished-triangle",
        "ex-the-cone-triangle-of-multiplication-by-m",
        "ex-the-long-exact-hom-sequence-of-a-cone-triangle",
        "ex-an-octahedron-for-two-composable-maps-of-stalk-complexes",
        "ex-the-thick-subcategory-of-acyclic-complexes",
        "cex-a-three-term-zero-composite-diagram-that-is-not-distinguished",
        "cex-nonuniqueness-of-a-tr-three-completion",
        "lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure",
        "prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition",
        "lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells",
        "cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex",
        "prop-relative-cw-inclusions-are-cofibrations",
        "prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology",
        "thm-relative-homology-of-consecutive-cw-skeleta",
        "lem-the-cellular-boundary-squares-to-zero",
        "lem-skeletal-homology-stabilizes-away-from-the-cell-dimension",
        "lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology",
        "thm-cellular-homology-computes-singular-homology",
        "thm-relative-cellular-homology-computes-relative-singular-homology",
        "thm-cellular-boundary-is-the-incidence-degree-matrix",
        "prop-cellular-maps-induce-cellular-chain-maps",
        "cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary",
        "thm-euler-poincare-formula-for-finite-cw-complexes",
        "prop-euler-characteristic-is-additive-for-finite-cw-pairs",
        "prop-euler-characteristic-of-a-finite-cw-product",
        "ex-cellular-homology-of-real-projective-space",
        "ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space",
        "ex-cellular-boundary-matrix-of-a-closed-orientable-surface",
        "ex-cellular-homology-of-a-lens-space",
        "ex-cellular-homology-of-an-infinite-dimensional-projective-space",
        "ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic",
        "cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball",
        "cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex",
        "cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells",
        "prop-parametrized-morse-trajectory-space-is-a-manifold",
        "lem-time-translation-acts-freely-on-nonconstant-trajectories",
        "lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories",
        "thm-unparametrized-trajectory-space-is-a-smooth-manifold",
        "cor-no-morse-smale-trajectories-for-nonpositive-index-drop",
        "lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator",
        "thm-sard-smale-residual-regular-values-for-fredholm-maps",
        "lem-universal-metric-trajectory-projection-is-fredholm",
        "lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics",
        "thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function",
        "thm-relative-morse-smale-perturbation-of-a-gradient-like-field",
        "prop-index-one-trajectory-spaces-are-zero-dimensional",
        "prop-index-two-trajectory-spaces-are-one-dimensional",
        "lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices",
        "ex-morse-smale-flow-on-the-circle",
        "ex-a-morse-smale-height-function-on-a-tilted-torus",
        "cex-symmetric-torus-height-flow-is-not-morse-smale",
        "cex-an-index-one-moduli-space-can-be-infinite-without-compactness",
        "ex-regular-level-slices-for-unparametrized-trajectories"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "prop-zero-and-split-triangles-are-distinguished",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-long-exact-hom-sequences-of-a-distinguished-triangle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-triangulated-five-lemma",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-distinguished-triangle-with-zero-first-map-is-split",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-total-kernel-of-a-cohomological-functor-is-thick",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-one",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-three",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-the-octahedral-axiom",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-the-homotopy-category-of-an-abelian-category-is-triangulated",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-homology-is-a-homological-functor-on-the-homotopy-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-third-map-in-a-morphism-of-triangles-is-unique",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-cones-form-a-functor-in-every-triangulated-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-octahedral-axiom-is-the-associativity-of-composition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-triangulated-subcategory-is-thick",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-rotation-of-a-distinguished-triangle-has-no-sign",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-split-distinguished-triangle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-cone-triangle-of-multiplication-by-m",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-long-exact-hom-sequence-of-a-cone-triangle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-an-octahedron-for-two-composable-maps-of-stalk-complexes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-thick-subcategory-of-acyclic-complexes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-three-term-zero-composite-diagram-that-is-not-distinguished",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-nonuniqueness-of-a-tr-three-completion",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-relative-cw-inclusions-are-cofibrations",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-relative-homology-of-consecutive-cw-skeleta",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-cellular-boundary-squares-to-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-skeletal-homology-stabilizes-away-from-the-cell-dimension",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-cellular-homology-computes-singular-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-relative-cellular-homology-computes-relative-singular-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-cellular-boundary-is-the-incidence-degree-matrix",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-cellular-maps-induce-cellular-chain-maps",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-euler-poincare-formula-for-finite-cw-complexes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-euler-characteristic-is-additive-for-finite-cw-pairs",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-euler-characteristic-of-a-finite-cw-product",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-of-real-projective-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-boundary-matrix-of-a-closed-orientable-surface",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-of-a-lens-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-of-an-infinite-dimensional-projective-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-parametrized-morse-trajectory-space-is-a-manifold",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-time-translation-acts-freely-on-nonconstant-trajectories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-unparametrized-trajectory-space-is-a-smooth-manifold",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-no-morse-smale-trajectories-for-nonpositive-index-drop",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-sard-smale-residual-regular-values-for-fredholm-maps",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-universal-metric-trajectory-projection-is-fredholm",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-relative-morse-smale-perturbation-of-a-gradient-like-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-index-one-trajectory-spaces-are-zero-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-index-two-trajectory-spaces-are-one-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-morse-smale-flow-on-the-circle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-morse-smale-height-function-on-a-tilted-torus",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-symmetric-torus-height-flow-is-not-morse-smale",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-an-index-one-moduli-space-can-be-infinite-without-compactness",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-regular-level-slices-for-unparametrized-trajectories",
      "scope": "run",
      "owner": "e"
    }
  ],
  "assigned_items": [
    {
      "id": "prop-zero-and-split-triangles-are-distinguished",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-long-exact-hom-sequences-of-a-distinguished-triangle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-triangulated-five-lemma",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-distinguished-triangle-with-zero-first-map-is-split",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-total-kernel-of-a-cohomological-functor-is-thick",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-one",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-three",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-cone-triangles-satisfy-the-octahedral-axiom",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-the-homotopy-category-of-an-abelian-category-is-triangulated",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-homology-is-a-homological-functor-on-the-homotopy-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-third-map-in-a-morphism-of-triangles-is-unique",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-cones-form-a-functor-in-every-triangulated-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-octahedral-axiom-is-the-associativity-of-composition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-triangulated-subcategory-is-thick",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-rotation-of-a-distinguished-triangle-has-no-sign",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-split-distinguished-triangle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-cone-triangle-of-multiplication-by-m",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-long-exact-hom-sequence-of-a-cone-triangle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-an-octahedron-for-two-composable-maps-of-stalk-complexes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-thick-subcategory-of-acyclic-complexes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-three-term-zero-composite-diagram-that-is-not-distinguished",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-nonuniqueness-of-a-tr-three-completion",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-relative-cw-inclusions-are-cofibrations",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-relative-homology-of-consecutive-cw-skeleta",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-cellular-boundary-squares-to-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-skeletal-homology-stabilizes-away-from-the-cell-dimension",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-cellular-homology-computes-singular-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-relative-cellular-homology-computes-relative-singular-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-cellular-boundary-is-the-incidence-degree-matrix",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-cellular-maps-induce-cellular-chain-maps",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-euler-poincare-formula-for-finite-cw-complexes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-euler-characteristic-is-additive-for-finite-cw-pairs",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-euler-characteristic-of-a-finite-cw-product",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-of-real-projective-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-boundary-matrix-of-a-closed-orientable-surface",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-of-a-lens-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cellular-homology-of-an-infinite-dimensional-projective-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-parametrized-morse-trajectory-space-is-a-manifold",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-time-translation-acts-freely-on-nonconstant-trajectories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-unparametrized-trajectory-space-is-a-smooth-manifold",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-no-morse-smale-trajectories-for-nonpositive-index-drop",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-sard-smale-residual-regular-values-for-fredholm-maps",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-universal-metric-trajectory-projection-is-fredholm",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-relative-morse-smale-perturbation-of-a-gradient-like-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-index-one-trajectory-spaces-are-zero-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-index-two-trajectory-spaces-are-one-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-morse-smale-flow-on-the-circle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-morse-smale-height-function-on-a-tilted-torus",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-symmetric-torus-height-flow-is-not-morse-smale",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-an-index-one-moduli-space-can-be-infinite-without-compactness",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-regular-level-slices-for-unparametrized-trajectories",
      "scope": "run",
      "owner": "e"
    }
  ],
  "fatal_repair_licences": [
    {
      "id": "cex-an-index-one-moduli-space-can-be-infinite-without-compactness",
      "model": "gpt-5.6-terra",
      "context_sha256": "1806ca2aa65513cae615509c05a3f8b50795aa46caad7d81be09bc9d695d6221",
      "item_sha256": "1c5d1f2722908c604654fe27606fd0473df8a0e1d860e7d86f777d0df62a442f",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Removed Morse--Smale consequences from data that are explicitly not Morse--Smale and proved discreteness directly."
    },
    {
      "id": "cex-symmetric-torus-height-flow-is-not-morse-smale",
      "model": "gpt-5.6-terra",
      "context_sha256": "85d08a768c41ea933ba8dee9403691c93fce7625b4ab6fc558aa3ef7f1a65d1b",
      "item_sha256": "720dd2f4b23a7e98b5388f347e8988cf64ed36c41a968de5e907070aa5889261",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Specified the induced metric and negative-gradient field needed for the claimed symmetric nontransverse flow."
    },
    {
      "id": "ex-a-morse-smale-height-function-on-a-tilted-torus",
      "model": "gpt-5.6-terra",
      "context_sha256": "89402c16c10f652b25325f96e7e57a765bc475a093c28f9deaa0dc64eb71dca9",
      "item_sha256": "913ea5fca1c5e9f55ef14bdb41dde4bc71fde1e6f66bfc1ce90348c7585ae684",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Specified the induced metric, negative-gradient field, and pair whose transversality is asserted."
    },
    {
      "id": "ex-an-octahedron-for-two-composable-maps-of-stalk-complexes",
      "model": "gpt-5.6-terra",
      "context_sha256": "7cf1d42412c510b4cda4ff27abf5c34baffb3363ce3b86c1a312f884ea5fe5a1",
      "item_sha256": "bbec139a96b55da0bbed57ab8d165099d2bb64b979c4756e449c8442a66c9b21",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Used only the two valid induced cone maps and obtained the signed fourth face from the octahedral proposition."
    },
    {
      "id": "ex-cellular-homology-of-an-infinite-dimensional-projective-space",
      "model": "gpt-5.6-terra",
      "context_sha256": "e8ea572f58cdd0d3d18b1b9d94fcf76b9cefb3ad58ee653688dddf452a450668",
      "item_sha256": "41a243a51b245c57b42371077c20bd03818a196ce7d22b8746d53c3e76bc65ae",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Added the finite real-projective-space calculation that supplies the alternating cellular differentials."
    },
    {
      "id": "ex-morse-smale-flow-on-the-circle",
      "model": "gpt-5.6-terra",
      "context_sha256": "f4554ab8251d0f605768c10425e93855c4046f8f4fad3c3e6fe61934864925e3",
      "item_sha256": "4cd1df6d654e3c20de6fbefc7fe0be991146ef92145096a877a6e4e16ca878c7",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Restored the Morse--Smale definition and verified every stable/unstable pair, not just the trajectory count."
    },
    {
      "id": "ex-the-cone-triangle-of-multiplication-by-m",
      "model": "gpt-5.6-terra",
      "context_sha256": "4eed2d501034f26b5a3317572300eea6ea80e6916358449bc41cbbc656b2ba5c",
      "item_sha256": "ae609cdb76c3dd8140ff4bffe5bd5a5abf2e16428a114ef5bd261a9f6562c44a",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Added the mapping-cone definition required to compute the displayed cone complex."
    },
    {
      "id": "ex-the-thick-subcategory-of-acyclic-complexes",
      "model": "gpt-5.6-terra",
      "context_sha256": "782dafa171c29e8c0c04b072a8557c5179947bb8d447a889620a4db6770766d5",
      "item_sha256": "32daa3746907d830e2b573cd0b429901602b6d92d0d9f3d9ea75eb155a426423",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Required the ambient category to be abelian so acyclicity and homology are defined."
    },
    {
      "id": "lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics",
      "model": "gpt-5.6-terra",
      "context_sha256": "08d20bce44b2b15efb2f6c35f3a605198e78e2b2942508e6b6d42f616e7d68ab",
      "item_sha256": "fce2e07c498cec6fe9a1aa8ae4c0f0f65e1441a17c6c482ea8cb9811f50118d6",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Established the missing equivalence between regularity of the universal projection and surjectivity of the fixed-metric trajectory operator."
    },
    {
      "id": "lem-cone-triangles-satisfy-the-octahedral-axiom",
      "model": "gpt-5.6-terra",
      "context_sha256": "3f517cb510f64c92f978806e3988e8312955732a565731107363ddb3e765b8cd",
      "item_sha256": "a0432637470f6c10df3af9a57971618d37e2909fc7f887525429b1161df38456",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Added the explicit cone maps and checked the two compatibility identities defining the octahedral face."
    },
    {
      "id": "lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign",
      "model": "gpt-5.6-terra",
      "context_sha256": "73691dd2b596338866ea5a7060013ef476a438ec9ecfc0ea3b453c186bb0f4d3",
      "item_sha256": "ffd11a4fefa7f6ab00958f28df48cb86a3b16c3f0ef3156436004292e5075df7",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Proved the converse rotation direction by a direct right-rotation cone calculation."
    },
    {
      "id": "lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator",
      "model": "gpt-5.6-terra",
      "context_sha256": "675cd2a85a101ba6e2735cdd317d89a9588647acbc9438102fe551e78fb965be",
      "item_sha256": "fa67c1ee2b85732265e0164eca0f56bef04a3a5d6bf426cea76c0f52ce994571",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Added the missing hypothesis that the function is Morse."
    },
    {
      "id": "lem-skeletal-homology-stabilizes-away-from-the-cell-dimension",
      "model": "gpt-5.6-terra",
      "context_sha256": "6602c940696d75e25ded5a627790ed8b3702bdcac4e919c137782638d1a215ed",
      "item_sha256": "8e47fb8467d91e68fb827e37ba0c0a5c404f7e623b985d07e51c1eceaccfc437",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Quantified the CW complex, coefficient group, and nonnegative skeletal degree."
    },
    {
      "id": "lem-the-cellular-boundary-squares-to-zero",
      "model": "gpt-5.6-terra",
      "context_sha256": "083b0f1b78b904c57aabf034ad9bae8443bd4a05c57ccd6382bbc4872b6bbd36",
      "item_sha256": "de1e0e5634e6a80dc18f11353b1424209597b58bcf861cdd48333f8ba44b3b25",
      "outcome": "confirmed_fatal",
      "defect_type": "logic",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Separated the n=1 boundary case and supplied the exact-sequence maps needed for n at least 2."
    },
    {
      "id": "prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes",
      "model": "gpt-5.6-terra",
      "context_sha256": "106d0f064510404d1d403c63b8af706b1207bf53a9b2d6faffbc18c1422f795b",
      "item_sha256": "7cf352f3dbc00a84ad316fdaa462edf48f331a5084c0732168f17e49a178debd",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Narrowed the title to splitting up to rotation, matching the statement and proof."
    },
    {
      "id": "prop-cellular-maps-induce-cellular-chain-maps",
      "model": "gpt-5.6-terra",
      "context_sha256": "aef88cc4536818bfb66430f42f2f197acf9f3c0f548789a4593bbf1eb5040cc9",
      "item_sha256": "1c83f365657da25acfe7b20c17846777ed22cc7af45592057cbcbdbd83e41324",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Quantified the abelian coefficient group used by the cellular complexes."
    },
    {
      "id": "thm-cellular-boundary-is-the-incidence-degree-matrix",
      "model": "gpt-5.6-terra",
      "context_sha256": "e22678e9175c789c9fb45f648b9aa5bcc14c6856faebe2517f5be8ecc72cd168",
      "item_sha256": "4d58cfc9cde1604a49c9b285677e87b1766eb84202e8a54469a38d2aa8d70c6f",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Restricted incidence numbers to positive dimensions and stated the degree-zero boundary separately."
    },
    {
      "id": "thm-cellular-homology-computes-singular-homology",
      "model": "gpt-5.6-terra",
      "context_sha256": "6073cfb2853947dc0f8ad2350db57abbd12b3445930ee8a70daaf85237620b4f",
      "item_sha256": "1e1ec48c18626c198c765fa850013df96b83d8702ee0f820a782957c9f4f3d90",
      "outcome": "confirmed_fatal",
      "defect_type": "other",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Qualified naturality by cellular maps, the maps that preserve the skeletal filtration used in the construction."
    },
    {
      "id": "thm-homology-is-a-homological-functor-on-the-homotopy-category",
      "model": "gpt-5.6-terra",
      "context_sha256": "e54a49ee1dc7b0aece687a0000b168374d4b8265b6f6adecaee37fba2541118d",
      "item_sha256": "1e63aa3d2382c7f4f9a4487aae7ab4a80a14c0e6ff59877632be6832856b65e6",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Removed the module-only citation and used the arbitrary-abelian cone long exact sequence under an explicit abelian hypothesis."
    },
    {
      "id": "thm-relative-cellular-homology-computes-relative-singular-homology",
      "model": "gpt-5.6-terra",
      "context_sha256": "4b81d249899ceb773926db7e65fdfd3eeddeff42689dbe781c61ef4da3f55322",
      "item_sha256": "a935960118d27a567b5fb51ff7e81ad93936962ae66bb6e9330631787f9810a3",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Supplied the actual CW-pair good-pair argument instead of inferring it from HEP alone."
    },
    {
      "id": "thm-relative-morse-smale-perturbation-of-a-gradient-like-field",
      "model": "gpt-5.6-terra",
      "context_sha256": "ca949e6b6f8fff127c2f591d85c3ffa7de2ca062f3684ce3dde2345857785605",
      "item_sha256": "0d4ae6779493c5cf233e48318d53ed9bdb26f6c84d0cc9c9ab9ac194b3bb5736",
      "outcome": "confirmed_fatal",
      "defect_type": "dependency_citation",
      "group": "e",
      "at": "2026-09-06T10:48:34.000Z",
      "note": "Performed the regular-level perturbation componentwise so every invoked level is nonempty."
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **e**, run `frontier-32`

You are the group Alpha for batches **8**, **10**, **18**: 3 A/B pair(s), 6 page(s), 113 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `triangulated-categories` | A | homological-algebra | 365.061 | `group-cohomology-as-a-derived-functor-examples` |
| 8 | `triangulated-categories-examples` | B | homological-algebra | 365.062 | `triangulated-categories` |
| 10 | `cw-complexes-and-cellular-homology` | A | algebraic-topology | 366.007 | `relative-homology-excision-and-mayer-vietoris-examples` |
| 10 | `cw-complexes-and-cellular-homology-examples` | B | algebraic-topology | 366.008 | `cw-complexes-and-cellular-homology` |
| 18 | `stable-unstable-manifolds-and-morse-smale-transversality` | A | differential-topology | 523 | `gradient-like-vector-fields-and-morse-trajectories-examples`, `complete-metrizability-and-baire` |
| 18 | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | B | differential-topology | 524 | `stable-unstable-manifolds-and-morse-smale-transversality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `triangulated-categories` — Triangulated Categories (46 item(s))

- `def-category-with-translation` · definition — Category with translation
- `def-triangle-in-a-category-with-translation` · definition — Triangle in a category with translation
- `def-morphism-and-isomorphism-of-triangles` · definition — Morphism and isomorphism of triangles
- `def-rotation-of-a-triangle` · definition — Rotation of a triangle
- `def-distinguished-triangle` · definition — Distinguished triangle
- `def-triangulated-category-axiom-tr-one` · definition — Triangulated-category axiom TR1
- `def-triangulated-category-axiom-tr-two` · definition — Triangulated-category axiom TR2
- `def-triangulated-category-axiom-tr-three` · definition — Triangulated-category axiom TR3
- `def-triangulated-category-axiom-tr-four-octahedral` · definition — Triangulated-category axiom TR4 (octahedral)
- `def-triangulated-category` · definition — Triangulated category
- `rem-triangulated-sign-convention` · remark — The triangulated rotation-sign convention
- `prop-zero-and-split-triangles-are-distinguished` · proposition — Zero and split triangles are distinguished
- `prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations` · proposition — Distinguished triangles are closed under shifts and both rotations
- `def-homological-functor-on-a-triangulated-category` · definition — Homological functor on a triangulated category
- `def-cohomological-functor-on-a-triangulated-category` · definition — Cohomological functor on a triangulated category
- `thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological` · theorem — Representable Hom functors on a triangulated category are homological or cohomological
- `thm-long-exact-hom-sequences-of-a-distinguished-triangle` · theorem — Long exact Hom sequences of a distinguished triangle
- `cor-triangulated-five-lemma` · corollary — The triangulated five lemma
- `prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third` · proposition — Two isomorphism components of a morphism of triangles force the third
- `prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes` · proposition — A map is zero exactly when the corresponding representable map vanishes
- `prop-a-distinguished-triangle-with-zero-first-map-is-split` · proposition — A distinguished triangle with zero first map is split
- `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes` · proposition — A distinguished triangle splits exactly when one connecting map vanishes
- `prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism` · proposition — The cone object of a map is unique up to nonunique isomorphism
- `prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf` · proposition — The octahedral axiom gives a triangle relating the cones of f, g, and gf
- `def-exact-functor-between-triangulated-categories` · definition — Exact functor between triangulated categories
- `prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility` · proposition — A translation-compatible natural isomorphism of exact functors respects triangles
- `def-triangulated-subcategory` · definition — Triangulated subcategory
- `def-thick-subcategory` · definition — Thick subcategory
- `prop-the-total-kernel-of-a-cohomological-functor-is-thick` · proposition — The total kernel of a cohomological functor is thick
- `prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category` · proposition — The full subcategory of acyclic complexes is thick in the homotopy category
- `def-standard-cone-triangle-in-the-homotopy-category` · definition — Standard cone triangle in the homotopy category
- `def-distinguished-cone-triangle-in-the-homotopy-category` · definition — Distinguished cone triangle in the homotopy category
- `lem-cone-triangles-satisfy-tr-one` · lemma — Cone triangles satisfy TR1
- `lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign` · lemma — Cone triangles satisfy TR2 with the declared rotation sign
- `lem-cone-triangles-satisfy-tr-three` · lemma — Cone triangles satisfy TR3
- `lem-cone-triangles-satisfy-the-octahedral-axiom` · lemma — Cone triangles satisfy the octahedral axiom
- `thm-the-homotopy-category-of-an-abelian-category-is-triangulated` · theorem — The homotopy category of an abelian category is triangulated
- `thm-homology-is-a-homological-functor-on-the-homotopy-category` · theorem — Homology is a homological functor on the homotopy category
- `prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories` · proposition — An additive functor on abelian categories induces an exact functor on homotopy categories
- `prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language` · proposition — A quasi-isomorphism has an acyclic cone in the triangulated language
- `fs-the-third-map-in-a-morphism-of-triangles-is-unique` · false-statement — The third map in a morphism of triangles is unique
- `fs-cones-form-a-functor-in-every-triangulated-category` · false-statement — Cones form a functor in every triangulated category
- `fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish` · false-statement — A triangle is distinguished whenever the three composites vanish
- `fs-the-octahedral-axiom-is-the-associativity-of-composition` · false-statement — The octahedral axiom is the associativity of composition
- `fs-every-triangulated-subcategory-is-thick` · false-statement — Every triangulated subcategory is thick
- `fs-the-rotation-of-a-distinguished-triangle-has-no-sign` · false-statement — The rotation of a distinguished triangle has no sign

### `triangulated-categories-examples` — Triangulated Categories — Examples (7 item(s))

- `ex-the-split-distinguished-triangle` · example — The split distinguished triangle
- `ex-the-cone-triangle-of-multiplication-by-m` · example — The cone triangle of multiplication by m
- `ex-the-long-exact-hom-sequence-of-a-cone-triangle` · example — The long exact Hom sequence of a cone triangle
- `ex-an-octahedron-for-two-composable-maps-of-stalk-complexes` · example — An octahedron for two composable maps of stalk complexes
- `ex-the-thick-subcategory-of-acyclic-complexes` · example — The thick subcategory of acyclic complexes
- `cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` · counterexample — A three-term zero-composite diagram that is not distinguished
- `cex-nonuniqueness-of-a-tr-three-completion` · counterexample — Nonuniqueness of a TR3 completion

### `cw-complexes-and-cellular-homology` — Cw Complexes and Cellular Homology (26 item(s))

- `def-cell-attachment-by-a-characteristic-map` · definition — Cell attachment by a characteristic map
- `lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure` · lemma — The interior of an attached cell embeds openly in its closure
- `def-cw-complex-with-closure-finiteness-and-weak-topology` · definition — CW complex with closure finiteness and weak topology
- `def-skeleta-cw-subcomplex-and-relative-cw-complex` · definition — Skeleta, CW subcomplexes, and relative CW complexes
- `prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition` · proposition — CW skeleta are closed and cells form a disjoint partition
- `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` · lemma — A compact subspace of a CW complex meets only finitely many cells
- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex` · corollary — The image of a compact space lies in a finite CW subcomplex
- `prop-relative-cw-inclusions-are-cofibrations` · proposition — Relative CW inclusions are cofibrations
- `prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology` · proposition — A CW complex is the colimit of its skeleta in the weak topology
- `thm-relative-homology-of-consecutive-cw-skeleta` · theorem — Relative homology of consecutive CW skeleta
- `def-oriented-cellular-chain-group` · definition — Oriented cellular chain group
- `def-cellular-boundary-from-three-consecutive-skeleta` · definition — Cellular boundary from three consecutive skeleta
- `lem-the-cellular-boundary-squares-to-zero` · lemma — The cellular boundary squares to zero
- `def-cellular-homology` · definition — Cellular homology
- `lem-skeletal-homology-stabilizes-away-from-the-cell-dimension` · lemma — Skeletal homology stabilizes away from the cell dimension
- `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology` · lemma — Homology of an infinite CW complex is the colimit of skeletal homology
- `thm-cellular-homology-computes-singular-homology` · theorem — Cellular homology computes singular homology
- `thm-relative-cellular-homology-computes-relative-singular-homology` · theorem — Relative cellular homology computes relative singular homology
- `def-incidence-number-of-two-cw-cells` · definition — Incidence number of two CW cells
- `thm-cellular-boundary-is-the-incidence-degree-matrix` · theorem — Cellular boundary is the incidence degree matrix
- `prop-cellular-maps-induce-cellular-chain-maps` · proposition — Cellular maps induce cellular chain maps
- `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary` · corollary — A CW complex with no cells in adjacent dimensions has zero cellular boundary
- `def-euler-characteristic-of-a-finite-cw-complex` · definition — Euler characteristic of a finite CW complex
- `thm-euler-poincare-formula-for-finite-cw-complexes` · theorem — Euler–Poincare formula for finite CW complexes
- `prop-euler-characteristic-is-additive-for-finite-cw-pairs` · proposition — Euler characteristic is additive for finite CW pairs
- `prop-euler-characteristic-of-a-finite-cw-product` · proposition — Euler characteristic of a finite CW product

### `cw-complexes-and-cellular-homology-examples` — Cw Complexes and Cellular Homology — Examples (9 item(s))

- `ex-cellular-homology-of-real-projective-space` · example — Cellular homology of real projective space
- `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space` · example — Cellular homology and ring-independent groups of complex projective space
- `ex-cellular-boundary-matrix-of-a-closed-orientable-surface` · example — Cellular boundary matrix of a closed orientable surface
- `ex-cellular-homology-of-a-lens-space` · example — Cellular homology of a lens space
- `ex-cellular-homology-of-an-infinite-dimensional-projective-space` · example — Cellular homology of an infinite-dimensional projective space
- `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic` · example — Two CW structures on the circle have the same Euler characteristic
- `cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball` · counterexample — The closure of a CW cell need not be a closed ball
- `cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex` · counterexample — A cell decomposition without the weak topology need not be a CW complex
- `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells` · counterexample — The Hawaiian earring is not a CW complex with its punctured circles as cells

### `stable-unstable-manifolds-and-morse-smale-transversality` — Stable Unstable Manifolds and Morse Smale Transversality (20 item(s))

- `def-morse-smale-pair` · definition — Morse--Smale pairs
- `def-parametrized-morse-trajectory-space` · definition — Parametrized Morse trajectory space
- `prop-parametrized-morse-trajectory-space-is-a-manifold` · proposition — A parametrized Morse trajectory space is a manifold
- `lem-time-translation-acts-freely-on-nonconstant-trajectories` · lemma — Time translation acts freely on nonconstant trajectories
- `def-unparametrized-morse-trajectory-moduli-space` · definition — Unparametrized Morse trajectory moduli space
- `lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories` · lemma — A regular level identifies unparametrized trajectories
- `thm-unparametrized-trajectory-space-is-a-smooth-manifold` · theorem — The unparametrized trajectory space is a smooth manifold
- `cor-no-morse-smale-trajectories-for-nonpositive-index-drop` · corollary — No Morse--Smale trajectories for nonpositive index drop
- `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator` · lemma — Morse--Smale transversality and surjectivity of the linearized flow operator
- `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds` · definition — Fredholm maps and regular values on countable-base Banach manifolds
- `thm-sard-smale-residual-regular-values-for-fredholm-maps` · theorem — Sard--Smale residual regular values for Fredholm maps
- `lem-universal-metric-trajectory-projection-is-fredholm` · lemma — The universal metric--trajectory projection is Fredholm
- `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics` · lemma — Baire diagonal passage from finite regularity to smooth metrics
- `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` · theorem — Morse--Smale metrics are residual for a fixed Morse function
- `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` · theorem — Relative Morse--Smale perturbation of a gradient-like field
- `prop-index-one-trajectory-spaces-are-zero-dimensional` · proposition — Index-one trajectory spaces are zero-dimensional
- `prop-index-two-trajectory-spaces-are-one-dimensional` · proposition — Index-two trajectory spaces are one-dimensional
- `lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices` · lemma — Broken Morse trajectories have strictly decreasing critical values and indices
- `rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data` · remark — Morse--Smale residuality does not assert simultaneous genericity for all data
- `rem-ambient-orientability-is-not-required-for-morse-smale-transversality` · remark — Ambient orientability is not required for Morse--Smale transversality

### `stable-unstable-manifolds-and-morse-smale-transversality-examples` — Stable Unstable Manifolds and Morse Smale Transversality — Examples (5 item(s))

- `ex-morse-smale-flow-on-the-circle` · example — A Morse--Smale flow on the circle
- `ex-a-morse-smale-height-function-on-a-tilted-torus` · example — A Morse--Smale height function on a tilted torus
- `cex-symmetric-torus-height-flow-is-not-morse-smale` · counterexample — The symmetric torus height flow is not Morse--Smale
- `cex-an-index-one-moduli-space-can-be-infinite-without-compactness` · counterexample — An index-one moduli locus can be infinite without compactness
- `ex-regular-level-slices-for-unparametrized-trajectories` · example — Regular-level slices for unparametrized trajectories

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-8824c5b08fc1f41e96253c0f · `def-triangulated-category-axiom-tr-four-octahedral`** (from group e, would-be-fatal) — The displayed fourth face ends in $Q_g\xrightarrow{p_f[1]d_g}Q_f[1]$, but this definition never introduces $p_f$ or $d_g`; moreover, under the apparent standard typings (the third maps of the chosen $f$- and $g$-triangles), that composite is not type-correct. Thus TR4 as written does not define a valid axiom, and downstream octahedral claims rest on an ill-typed formulation.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-32`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
