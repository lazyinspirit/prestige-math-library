# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-31a",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": "a",
  "full_evidence": "research/frontier-31a-8-close-repair-evidence-1-3eaa01a3ee60a3c3d98f0f29f88985b1ecf8b5bb9ff764f0b01fc9fe68e01fe1.json",
  "full_evidence_sha256": "3eaa01a3ee60a3c3d98f0f29f88985b1ecf8b5bb9ff764f0b01fc9fe68e01fe1",
  "failures": [
    {
      "id": "splice-verify",
      "stage": "8-close",
      "why": "A licensed in-flight change is applied with: splice-plan --run <run> --batch <i> --update",
      "output": "splice-plan: 14 page(s) where the plan and the batch manifest disagree\n  schur-multipliers-and-universal-central-extensions (frontier-31a-batch-1.pages.json): same ids, 1 item object(s) changed (fs-the-universal-coefficient-short-exact-sequence-splits-naturally) — re-splice to propagate\n  group-cohomology-as-a-derived-functor (frontier-31a-batch-10.pages.json): same ids, 1 item object(s) changed (def-restriction-and-corestriction-on-group-cohomology) — re-splice to propagate\n  relative-homology-excision-and-mayer-vietoris (frontier-31a-batch-12.pages.json): same ids, 3 item object(s) changed (thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, thm-naturality-of-singular-mayer-vietoris, cor-suspension-isomorphism-in-reduced-singular-homology) — re-splice to propagate\n  the-structural-criterion-for-property-star-examples (frontier-31a-batch-15.pages.json): same ids, 1 item object(s) changed (ex-a-large-y-part-in-a-structural-comb-partition) — re-splice to propagate\n  the-exterior-derivative-and-cartan-calculus (frontier-31a-batch-17.pages.json): same ids, 2 item object(s) changed (thm-the-exterior-derivative-is-a-graded-derivation, prop-the-exterior-derivative-commutes-with-restriction) — re-splice to propagate\n  time-and-space-hierarchy-theorems (frontier-31a-batch-21.pages.json): same ids, 1 item object(s) changed (prop-hierarchy-theorems-do-not-separate-p-from-np) — re-splice to propagate\n  logarithmic-space-nl-and-reachability (frontier-31a-batch-22.pages.json): same ids, 1 item object(s) changed (thm-immerman-szelepcsenyi-nl-equals-conl) — re-splice to propagate\n  geometric-hahn-banach-and-convex-separation (frontier-31a-batch-3.pages.json): same ids, 2 item object(s) changed (def-continuous-annihilator-of-a-subspace, def-linear-hyperplane) — re-splice to propagate\n  infinite-product-measures-and-kolmogorov-extension-examples (frontier-31a-batch-4.pages.json): same ids, 1 item object(s) changed (ex-iid-sequence-with-a-prescribed-law) — re-splice to propagate\n  ext-and-balanced-resolutions (frontier-31a-batch-8.pages.json): same ids, 5 item object(s) changed (prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable, thm-long-exact-ext-sequence-in-the-first-variable, prop-the-two-ext-long-exact-sequences-agree-under-balance, …) — re-splice to propagate\n  yoneda-extensions-and-homological-dimension (frontier-31a-batch-8.pages.json): same ids, 3 item object(s) changed (cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set, thm-yoneda-product-is-associative-and-unital, thm-higher-yoneda-ext-agrees-with-derived-ext) — re-splice to propagate\n  yoneda-extensions-and-homological-dimension-examples (frontier-31a-batch-8.pages.json): same ids, 1 item object(s) changed (ex-baer-sum-of-two-extensions-of-cyclic-groups) — re-splice to propagate\n  tor-flatness-and-global-dimension (frontier-31a-batch-9.pages.json): same ids, 4 item object(s) changed (thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes, …) — re-splice to propagate\n  universal-coefficients-and-kunneth-theorems (frontier-31a-batch-9.pages.json): same ids, 2 item object(s) changed (thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally, lem-the-kunneth-tor-map) — re-splice to propagate\nA licensed in-flight change is applied with: splice-plan --run <run> --batch <i> --update\n",
      "named_ids": []
    },
    {
      "id": "proof-contract",
      "stage": "8-close",
      "why": "ERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement",
      "output": "proof-contract: 151 error(s), 0 warning(s), 704/704 item(s) checked\nERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement",
      "named_ids": [
        "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-close",
      "why": "ERROR risk-review-missing [fs-the-universal-coefficient-short-exact-sequence-splits-naturally]: fs-the-universal-coefficient-short-exact-sequence-splits-naturally is high risk and lacks a complete Alpha risk_review",
      "output": "ORDINARY 2 [lem-distinct-components-commute] 2:boundary-sensitive language\nORDINARY 2 [thm-generalized-fitting-subgroup-contains-its-centralizer] 2:4 declared dependencies\nORDINARY 0 [fs-cfsg-says-every-finite-group-is-simple] no signals\nORDINARY 2 [fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism] 2:analytic limiting/completeness language\nORDINARY 0 [fs-all-finite-simple-groups-are-alternating-or-cyclic] no signals\nORDINARY 0 [fs-the-library-proves-the-classification-of-finite-simple-groups] no signals\nORDINARY 2 [fs-the-second-generation-cfsg-proof-is-complete-as-of-2026] 2:analytic limiting/completeness language\nORDINARY 0 [fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure] no signals\nORDINARY 1 [ex-cyclic-simple-groups-of-prime-order] 1:finite countermodel smoke test selected\nORDINARY 0 [ex-a-five-as-the-smallest-nonabelian-simple-group] no signals\nORDINARY 0 [ex-psl-two-seven-and-a-low-rank-coincidence] no signals\nORDINARY 0 [ex-a-suzuki-group-family-entry] no signals\nORDINARY 0 [ex-the-mathieu-groups-among-the-sporadics] no signals\nORDINARY 0 [cex-composition-factors-do-not-determine-the-extension] no signals\nORDINARY 2 [lem-every-finite-group-is-finitely-presented] 2:boundary-sensitive language\nORDINARY 2 [lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists] 2:quotient or equivalence-class construction\nMODERATE 4 [lem-five-term-homology-sequence-for-a-free-presentation] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [thm-hopf-formula-for-the-schur-multiplier] no signals\nORDINARY 2 [cor-hopf-formula-is-independent-of-the-free-presentation] 2:quotient or equivalence-class construction\nORDINARY 2 [cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated] 2:quotient or equivalence-class construction\nMODERATE 4 [prop-schur-multiplier-of-a-free-group-is-trivial] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [prop-schur-multiplier-of-a-cyclic-group-is-trivial] no signals\nORDINARY 0 [lem-exterior-square-has-the-alternating-universal-property] no signals\nORDINARY 2 [thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-universal-central-extension-is-unique-up-to-unique-isomorphism] 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-free-presentation-construction-is-a-central-extension] no signals\nORDINARY 2 [thm-free-presentation-construction-has-the-universal-property] 2:4 declared dependencies\nORDINARY 0 [cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier] no signals\nORDINARY 0 [prop-universal-central-extension-group-is-superperfect] no signals\nHIGH 5 [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two] 2:4 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion] 2:boundary-sensitive language\nMODERATE 4 [lem-schur-multiplier-of-a-finite-group-is-finite] 2:4 declared dependencies; 2:analytic limiting/completeness language\nMODERATE 4 [thm-existence-of-schur-covering-groups-for-finite-groups] 2:4 declared dependencies; 2:quotient or equivalence-class construction\nORDINARY 1 [fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units] 1:2 cited facts\nORDINARY 2 [fs-hopfs-formula-is-obviously-independent-of-the-presentation] 2:quotient or equivalence-class construction\nMODERATE 3 [fs-every-group-has-a-universal-central-extension] 3:biconditional / both-direction claim\nORDINARY 0 [fs-every-central-extension-is-a-stem-extension] no signals\nMODERATE 4 [fs-schur-covering-groups-are-unique-for-all-finite-groups] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [fs-the-universal-coefficient-short-exact-sequence-splits-naturally] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-schur-multiplier-of-a-cyclic-group] no signals\nORDINARY 2 [ex-schur-multiplier-of-a-finite-abelian-group] 2:boundary-sensitive language\nORDINARY 2 [ex-the-binary-icosahedral-cover-of-a-five] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-hopf-formula-from-a-one-relator-presentation] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-a-stem-extension-that-is-not-universal] no signals\nMODERATE 4 [cex-nonuniqueness-of-schur-covering-groups] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-universal-property-of-verma-modules] 2:boundary-sensitive language\nORDINARY 0 [thm-pbw-model-of-a-verma-module] no signals\nORDINARY 2 [prop-weights-of-a-verma-module-lie-below-lambda] 2:boundary-sensitive language\nMODERATE 3 [prop-formal-character-of-a-verma-module] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 0 [lem-a-proper-verma-submodule-misses-the-highest-weight-line] no signals\nMODERATE 3 [lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-verma-module-has-a-unique-simple-quotient] 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-every-nonzero-verma-submodule-contains-a-singular-vector] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-existence-and-uniqueness-of-the-shapovalov-form] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal] no signals\nHIGH 7 [prop-the-shapovalov-radical-is-the-maximal-submodule] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-shapovalov-determinant-formula] 3:8 declared dependencies; 2:4 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [cor-verma-irreducibility-criterion-from-shapovalov-determinants] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-sl2-verma-action-in-the-pbw-basis] 1:2 cited facts; 2:induction, recursion, or minimality\nMODERATE 3 [ex-sl2-shapovalov-norm-product] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-sl2-reducible-and-generic-verma-modules] 1:2 cited facts\nMODERATE 3 [ex-an-a2-verma-weight-space-of-dimension-two] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [cex-the-shapovalov-form-is-not-positive-definite-in-general] no signals\nMODERATE 3 [ex-finite-dimensional-sl2-quotient-of-a-verma-module] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed] no signals\nMODERATE 4 [lem-induction-ideal-of-a-subgroup-family-is-an-ideal] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [lem-p-primary-character-value-congruence] 2:boundary-sensitive language\nHIGH 6 [lem-hyperelementary-permutation-subring-reduction] 2:5 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-banaschewski-prime-obstruction] no signals\nCRITICAL 9 [lem-elementary-detection-at-a-fixed-element] 3:7 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 0 [lem-isaacs-linear-character-step] no signals\nCRITICAL 8 [lem-p-elementary-groups-are-supersolvable] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 4 [prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup] 2:5 declared dependencies; 2:induction, recursion, or minimality\nORDINARY 2 [lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup] 2:analytic limiting/completeness language\nHIGH 6 [lem-monomiality-lifts-along-a-quotient] 2:4 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-finite-supersolvable-groups-are-monomial] 2:6 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [lem-p-elementary-characters-are-induced-from-linear-characters] 2:4 declared dependencies; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-brauer-induction] 2:6 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 4 [cor-elementary-restriction-detects-generalized-characters] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [cor-elementary-local-integrality-criterion] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [cor-cyclotomic-field-splits-a-finite-group] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 0 [ex-elementary-and-hyperelementary-small-groups] no signals\nMODERATE 4 [ex-brauer-induction-for-s3] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 0 [ex-trivial-factors-in-an-elementary-group] no signals\nMODERATE 4 [cex-cyclic-subgroups-do-not-give-integral-induction-in-general] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nrisk-report: 15 error(s), 704 item(s) routed\nERROR risk-review-missing [fs-the-universal-coefficient-short-exact-sequence-splits-naturally]: fs-the-universal-coefficient-short-exact-sequence-splits-naturally is high risk and lacks a complete Alpha risk_review",
      "named_ids": [
        "lem-distinct-components-commute",
        "thm-generalized-fitting-subgroup-contains-its-centralizer",
        "fs-cfsg-says-every-finite-group-is-simple",
        "fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism",
        "fs-all-finite-simple-groups-are-alternating-or-cyclic",
        "fs-the-library-proves-the-classification-of-finite-simple-groups",
        "fs-the-second-generation-cfsg-proof-is-complete-as-of-2026",
        "fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure",
        "ex-cyclic-simple-groups-of-prime-order",
        "ex-a-five-as-the-smallest-nonabelian-simple-group",
        "ex-psl-two-seven-and-a-low-rank-coincidence",
        "ex-a-suzuki-group-family-entry",
        "ex-the-mathieu-groups-among-the-sporadics",
        "cex-composition-factors-do-not-determine-the-extension",
        "lem-every-finite-group-is-finitely-presented",
        "lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists",
        "lem-five-term-homology-sequence-for-a-free-presentation",
        "thm-hopf-formula-for-the-schur-multiplier",
        "cor-hopf-formula-is-independent-of-the-free-presentation",
        "cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated",
        "prop-schur-multiplier-of-a-free-group-is-trivial",
        "prop-schur-multiplier-of-a-cyclic-group-is-trivial",
        "lem-exterior-square-has-the-alternating-universal-property",
        "thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square",
        "lem-universal-central-extension-is-unique-up-to-unique-isomorphism",
        "thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect",
        "lem-free-presentation-construction-is-a-central-extension",
        "thm-free-presentation-construction-has-the-universal-property",
        "cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier",
        "prop-universal-central-extension-group-is-superperfect",
        "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two",
        "cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier",
        "lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion",
        "lem-schur-multiplier-of-a-finite-group-is-finite",
        "thm-existence-of-schur-covering-groups-for-finite-groups",
        "fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units",
        "fs-hopfs-formula-is-obviously-independent-of-the-presentation",
        "fs-every-group-has-a-universal-central-extension",
        "fs-every-central-extension-is-a-stem-extension",
        "fs-schur-covering-groups-are-unique-for-all-finite-groups",
        "fs-the-universal-coefficient-short-exact-sequence-splits-naturally",
        "ex-schur-multiplier-of-a-cyclic-group",
        "ex-schur-multiplier-of-a-finite-abelian-group",
        "ex-the-binary-icosahedral-cover-of-a-five",
        "ex-hopf-formula-from-a-one-relator-presentation",
        "ex-a-stem-extension-that-is-not-universal",
        "cex-nonuniqueness-of-schur-covering-groups",
        "thm-universal-property-of-verma-modules",
        "thm-pbw-model-of-a-verma-module",
        "prop-weights-of-a-verma-module-lie-below-lambda",
        "prop-formal-character-of-a-verma-module",
        "lem-a-proper-verma-submodule-misses-the-highest-weight-line",
        "lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper",
        "thm-verma-module-has-a-unique-simple-quotient",
        "lem-every-nonzero-verma-submodule-contains-a-singular-vector",
        "thm-existence-and-uniqueness-of-the-shapovalov-form",
        "lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal",
        "prop-the-shapovalov-radical-is-the-maximal-submodule",
        "thm-shapovalov-determinant-formula",
        "cor-verma-irreducibility-criterion-from-shapovalov-determinants",
        "ex-sl2-verma-action-in-the-pbw-basis",
        "ex-sl2-shapovalov-norm-product",
        "ex-sl2-reducible-and-generic-verma-modules",
        "ex-an-a2-verma-weight-space-of-dimension-two",
        "cex-the-shapovalov-form-is-not-positive-definite-in-general",
        "ex-finite-dimensional-sl2-quotient-of-a-verma-module",
        "lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed",
        "lem-induction-ideal-of-a-subgroup-family-is-an-ideal",
        "lem-p-primary-character-value-congruence",
        "lem-hyperelementary-permutation-subring-reduction",
        "lem-banaschewski-prime-obstruction",
        "lem-elementary-detection-at-a-fixed-element",
        "lem-isaacs-linear-character-step",
        "lem-p-elementary-groups-are-supersolvable",
        "prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup",
        "lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup",
        "lem-monomiality-lifts-along-a-quotient",
        "thm-finite-supersolvable-groups-are-monomial",
        "lem-p-elementary-characters-are-induced-from-linear-characters",
        "thm-brauer-induction",
        "cor-elementary-restriction-detects-generalized-characters",
        "cor-elementary-local-integrality-criterion",
        "cor-cyclotomic-field-splits-a-finite-group",
        "ex-elementary-and-hyperelementary-small-groups",
        "ex-brauer-induction-for-s3",
        "ex-trivial-factors-in-an-elementary-group",
        "cex-cyclic-subgroups-do-not-give-integral-induction-in-general"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4633 marked not_applicable\n\nTEMPLATE REUSE — 25 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–5.1: finite face maxima and least natural depths need no global choice; small simplices including vertices have depth zero; repeated faces/cancellatio…\"\n    items: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Step 1.1 uses the supplied basepoint, excluding empty X; steps 3.1–4.1 check n=0, n=-1, lower degrees, the point, and G=0.\"\n    items: cor-suspension-isomorphism-in-reduced-singular-homology\n\n  6 rows · axes: empty, endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–4.1 handle finite short-input exceptions, endmarkers, invalid configuration names, exact reachability equivalence, and both co-class inclusions.\"\n    items: thm-immerman-szelepcsenyi-nl-equals-conl\n\n  5 rows · axes: empty, endpoints, iff-forward, iff-reverse, one\n    \"The refutation uses the fixed nontrivial finite groups V=C_2 x C_2 and A=C_2; no variable family, endpoint, or biconditional branch is asserted.\"\n    items: fs-the-universal-coefficient-short-exact-sequence-splits-naturally\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  5 rows · axes: empty, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1 and 2.1 account for malformed inputs, empty source, zero unary padding, and both independently hypothesized translations.\"\n    items: lem-padding-transfers-time-bounds\n\n  5 rows · axes: endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–5.1 include n=0, early halting, boundary head positions, and exact configuration induction in both acceptance directions.\"\n    items: lem-polynomial-time-computations-have-logspace-uniform-circuits\n\n  4 rows · axes: degenerate, empty, one, zero\n    \"Step 1.1 includes the zero space/empty direct sum and negative virtual classes; step 2.1 preserves zero, multiplication, and the unit [k].\"\n    items: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Suprema in N union infinity are determined by finite upper bounds; sup empty=0 handles the zero ring. DC and supplied resolutions on both hands permit the crite…\"\n    items: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric\n\n  4 rows · axes: degenerate, empty, endpoints, zero\n    \"Step 3.1 covers empty overlap/cover members, G=0, degree zero, and terminal zero maps; the inclusion square in step 2.1 holds in every degree.\"\n    items: thm-naturality-of-singular-mayer-vietoris\n\n  … 13 further cluster(s); use --json for all\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 421 citation(s) over 704 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 1.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two  [L2] -> thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally (searched: Statement)\n    quote: \"the cohomological UCT sequence splits after choices of complements, but no natural splitting is claimed\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-distinct-components-commute",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-generalized-fitting-subgroup-contains-its-centralizer",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-cfsg-says-every-finite-group-is-simple",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-all-finite-simple-groups-are-alternating-or-cyclic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-library-proves-the-classification-of-finite-simple-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-second-generation-cfsg-proof-is-complete-as-of-2026",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cyclic-simple-groups-of-prime-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-five-as-the-smallest-nonabelian-simple-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-psl-two-seven-and-a-low-rank-coincidence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-suzuki-group-family-entry",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-mathieu-groups-among-the-sporadics",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-composition-factors-do-not-determine-the-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-every-finite-group-is-finitely-presented",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-five-term-homology-sequence-for-a-free-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hopf-formula-for-the-schur-multiplier",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-hopf-formula-is-independent-of-the-free-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-schur-multiplier-of-a-free-group-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-schur-multiplier-of-a-cyclic-group-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-exterior-square-has-the-alternating-universal-property",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-universal-central-extension-is-unique-up-to-unique-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-free-presentation-construction-is-a-central-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-free-presentation-construction-has-the-universal-property",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-universal-central-extension-group-is-superperfect",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schur-multiplier-of-a-finite-group-is-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-existence-of-schur-covering-groups-for-finite-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-hopfs-formula-is-obviously-independent-of-the-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-group-has-a-universal-central-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-central-extension-is-a-stem-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schur-covering-groups-are-unique-for-all-finite-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-universal-coefficient-short-exact-sequence-splits-naturally",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-schur-multiplier-of-a-cyclic-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-schur-multiplier-of-a-finite-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-binary-icosahedral-cover-of-a-five",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hopf-formula-from-a-one-relator-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-stem-extension-that-is-not-universal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-nonuniqueness-of-schur-covering-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-universal-property-of-verma-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-pbw-model-of-a-verma-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-weights-of-a-verma-module-lie-below-lambda",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-formal-character-of-a-verma-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-proper-verma-submodule-misses-the-highest-weight-line",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-verma-module-has-a-unique-simple-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-every-nonzero-verma-submodule-contains-a-singular-vector",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-existence-and-uniqueness-of-the-shapovalov-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-shapovalov-radical-is-the-maximal-submodule",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-shapovalov-determinant-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-verma-irreducibility-criterion-from-shapovalov-determinants",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-verma-action-in-the-pbw-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-shapovalov-norm-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-reducible-and-generic-verma-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-a2-verma-weight-space-of-dimension-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-shapovalov-form-is-not-positive-definite-in-general",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-dimensional-sl2-quotient-of-a-verma-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-induction-ideal-of-a-subgroup-family-is-an-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-p-primary-character-value-congruence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hyperelementary-permutation-subring-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-banaschewski-prime-obstruction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-detection-at-a-fixed-element",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-isaacs-linear-character-step",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-p-elementary-groups-are-supersolvable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-monomiality-lifts-along-a-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-supersolvable-groups-are-monomial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-p-elementary-characters-are-induced-from-linear-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brauer-induction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-elementary-restriction-detects-generalized-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-elementary-local-integrality-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-cyclotomic-field-splits-a-finite-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-elementary-and-hyperelementary-small-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-brauer-induction-for-s3",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-trivial-factors-in-an-elementary-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-cyclic-subgroups-do-not-give-integral-induction-in-general",
      "scope": "run",
      "owner": "a"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-distinct-components-commute",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-generalized-fitting-subgroup-contains-its-centralizer",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-cfsg-says-every-finite-group-is-simple",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-all-finite-simple-groups-are-alternating-or-cyclic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-library-proves-the-classification-of-finite-simple-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-second-generation-cfsg-proof-is-complete-as-of-2026",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cyclic-simple-groups-of-prime-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-five-as-the-smallest-nonabelian-simple-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-psl-two-seven-and-a-low-rank-coincidence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-suzuki-group-family-entry",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-mathieu-groups-among-the-sporadics",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-composition-factors-do-not-determine-the-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-every-finite-group-is-finitely-presented",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-five-term-homology-sequence-for-a-free-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hopf-formula-for-the-schur-multiplier",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-hopf-formula-is-independent-of-the-free-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-schur-multiplier-of-a-free-group-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-schur-multiplier-of-a-cyclic-group-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-exterior-square-has-the-alternating-universal-property",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-universal-central-extension-is-unique-up-to-unique-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-free-presentation-construction-is-a-central-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-free-presentation-construction-has-the-universal-property",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-universal-central-extension-group-is-superperfect",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schur-multiplier-of-a-finite-group-is-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-existence-of-schur-covering-groups-for-finite-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-hopfs-formula-is-obviously-independent-of-the-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-group-has-a-universal-central-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-central-extension-is-a-stem-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schur-covering-groups-are-unique-for-all-finite-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-universal-coefficient-short-exact-sequence-splits-naturally",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-schur-multiplier-of-a-cyclic-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-schur-multiplier-of-a-finite-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-binary-icosahedral-cover-of-a-five",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-hopf-formula-from-a-one-relator-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-stem-extension-that-is-not-universal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-nonuniqueness-of-schur-covering-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-universal-property-of-verma-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-pbw-model-of-a-verma-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-weights-of-a-verma-module-lie-below-lambda",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-formal-character-of-a-verma-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-proper-verma-submodule-misses-the-highest-weight-line",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-verma-module-has-a-unique-simple-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-every-nonzero-verma-submodule-contains-a-singular-vector",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-existence-and-uniqueness-of-the-shapovalov-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-shapovalov-radical-is-the-maximal-submodule",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-shapovalov-determinant-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-verma-irreducibility-criterion-from-shapovalov-determinants",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-verma-action-in-the-pbw-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-shapovalov-norm-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-reducible-and-generic-verma-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-a2-verma-weight-space-of-dimension-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-shapovalov-form-is-not-positive-definite-in-general",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-dimensional-sl2-quotient-of-a-verma-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-induction-ideal-of-a-subgroup-family-is-an-ideal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-p-primary-character-value-congruence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hyperelementary-permutation-subring-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-banaschewski-prime-obstruction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-detection-at-a-fixed-element",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-isaacs-linear-character-step",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-p-elementary-groups-are-supersolvable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-monomiality-lifts-along-a-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-supersolvable-groups-are-monomial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-p-elementary-characters-are-induced-from-linear-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brauer-induction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-elementary-restriction-detects-generalized-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-elementary-local-integrality-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-cyclotomic-field-splits-a-finite-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-elementary-and-hyperelementary-small-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-brauer-induction-for-s3",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-trivial-factors-in-an-elementary-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-cyclic-subgroups-do-not-give-integral-induction-in-general",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **a**, run `frontier-31a`

You are the group Alpha for batches **1**, **18**, **19**: 4 A/B pair(s), 8 page(s), 121 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `the-finite-simple-group-classification-landscape` | A | group-theory | 150.005 | `brauer-characters-and-decomposition-matrices-examples`, `socles-and-the-onan-scott-landscape` |
| 1 | `the-finite-simple-group-classification-landscape-examples` | B | group-theory | 150.006 | `the-finite-simple-group-classification-landscape` |
| 1 | `schur-multipliers-and-universal-central-extensions` | A | group-theory | 365.075 | `second-cohomology-and-abelian-kernel-extensions-examples`, `group-cohomology-as-a-derived-functor-examples` |
| 1 | `schur-multipliers-and-universal-central-extensions-examples` | B | group-theory | 365.076 | `schur-multipliers-and-universal-central-extensions` |
| 18 | `verma-modules-and-shapovalov-forms` | A | lie-theory | 510.003 | `harish-chandra-isomorphism-casimir-and-central-characters-examples` |
| 18 | `verma-modules-and-shapovalov-forms-examples` | B | lie-theory | 510.004 | `verma-modules-and-shapovalov-forms` |
| 19 | `brauer-induction-and-elementary-subgroups` | A | representation-theory | 510.033 | `artin-induction-and-rational-characters-examples` |
| 19 | `brauer-induction-and-elementary-subgroups-examples` | B | representation-theory | 510.034 | `brauer-induction-and-elementary-subgroups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-finite-simple-group-classification-landscape` — The Finite Simple Group Classification Landscape (24 item(s))

- `rem-simple-groups-as-composition-factors` · remark — Simple groups as composition factors
- `def-quasisimple-group-component-and-layer` · definition — Quasisimple groups, components, and the layer
- `lem-distinct-components-commute` · lemma — Distinct components commute
- `def-generalized-fitting-subgroup` · definition — The generalized Fitting subgroup
- `thm-generalized-fitting-subgroup-contains-its-centralizer` · theorem — The generalized Fitting subgroup contains its centralizer
- `def-p-local-subgroup` · definition — p-local subgroup
- `rem-cyclic-and-alternating-simple-families` · remark — Cyclic and alternating simple families
- `rem-finite-simple-groups-of-lie-type-as-named-families` · remark — Finite simple groups of Lie type as named families
- `rem-the-twenty-six-sporadic-simple-groups` · remark — The twenty-six sporadic simple groups
- `rem-classification-of-finite-simple-groups` · remark — Classification of finite simple groups
- `rem-low-rank-coincidences-and-duplicate-family-names` · remark — Low-rank coincidences and duplicate names
- `rem-history-of-the-first-generation-classification` · remark — History of the first-generation classification
- `rem-the-quasithin-gap-and-its-repair` · remark — The quasithin gap and its repair
- `rem-status-of-the-second-generation-proof` · remark — Status of the second-generation proof
- `rem-feit-thompson-odd-order-theorem` · remark — Feit–Thompson odd-order theorem
- `rem-schreier-conjecture-as-a-cfsg-consequence` · remark — Schreier’s conjecture as a CFSG consequence
- `rem-two-generation-of-finite-simple-groups` · remark — Two-generation of finite simple groups
- `rem-what-the-library-does-and-does-not-prove-about-cfsg` · remark — What the library proves and does not prove about CFSG
- `fs-cfsg-says-every-finite-group-is-simple` · false-statement — CFSG says every finite group is simple
- `fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism` · false-statement — Composition factors determine the finite group
- `fs-all-finite-simple-groups-are-alternating-or-cyclic` · false-statement — All finite simple groups are alternating or cyclic
- `fs-the-library-proves-the-classification-of-finite-simple-groups` · false-statement — The library proves CFSG
- `fs-the-second-generation-cfsg-proof-is-complete-as-of-2026` · false-statement — The second-generation CFSG proof is complete as of 2026
- `fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure` · false-statement — Lie type is developed here through Lie algebras

### `the-finite-simple-group-classification-landscape-examples` — The Finite Simple Group Classification Landscape — Examples (6 item(s))

- `ex-cyclic-simple-groups-of-prime-order` · example — Cyclic simple groups of prime order
- `ex-a-five-as-the-smallest-nonabelian-simple-group` · example — A5 as the smallest nonabelian simple group
- `ex-psl-two-seven-and-a-low-rank-coincidence` · example — PSL(2,7) and a low-rank family entry
- `ex-a-suzuki-group-family-entry` · example — A Suzuki group family entry
- `ex-the-mathieu-groups-among-the-sporadics` · example — The Mathieu groups among the sporadics
- `cex-composition-factors-do-not-determine-the-extension` · counterexample — Composition factors do not determine the extension

### `schur-multipliers-and-universal-central-extensions` — Schur Multipliers and Universal Central Extensions (38 item(s))

- `def-schur-multiplier-of-a-group` · definition — Schur multiplier
- `def-free-presentation-kernel-data` · definition — Free-presentation kernel data
- `lem-every-finite-group-is-finitely-presented` · lemma — Every finite group is finitely presented
- `lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists` · lemma — The Hopf-formula quotient exists
- `def-hopf-formula-quotient` · definition — Hopf-formula quotient
- `lem-five-term-homology-sequence-for-a-free-presentation` · lemma — Low-degree sequence of a free presentation
- `thm-hopf-formula-for-the-schur-multiplier` · theorem — Hopf formula for the Schur multiplier
- `cor-hopf-formula-is-independent-of-the-free-presentation` · corollary — Hopf formula is presentation-independent
- `cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated` · corollary — Multiplier of a finitely presented group
- `prop-schur-multiplier-of-a-free-group-is-trivial` · proposition — Multiplier of a free group
- `prop-schur-multiplier-of-a-cyclic-group-is-trivial` · proposition — Multiplier of a cyclic group
- `def-exterior-square-of-an-abelian-group` · definition — Exterior square
- `lem-exterior-square-has-the-alternating-universal-property` · lemma — Alternating universal property
- `thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square` · theorem — Multiplier of an abelian group
- `def-central-and-stem-extensions` · definition — Central and stem extensions
- `def-perfect-group` · definition — Perfect group
- `def-universal-central-extension` · definition — Universal central extension
- `lem-universal-central-extension-is-unique-up-to-unique-isomorphism` · lemma — Uniqueness of universal central extensions
- `thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect` · theorem — Existence criterion for universal central extensions
- `def-universal-central-extension-from-a-free-presentation` · definition — Free-presentation universal extension
- `lem-free-presentation-construction-is-a-central-extension` · lemma — Free-presentation construction is central
- `thm-free-presentation-construction-has-the-universal-property` · theorem — Free-presentation construction is universal
- `cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier` · corollary — Kernel of the universal central extension
- `def-superperfect-group` · definition — Superperfect group
- `prop-universal-central-extension-group-is-superperfect` · proposition — Universal central extension groups are superperfect
- `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two` · theorem — Universal coefficients in degree two
- `cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier` · corollary — Central extensions of perfect groups
- `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion` · lemma — Positive-degree homology of a finite group is order-torsion
- `lem-schur-multiplier-of-a-finite-group-is-finite` · lemma — Multiplier of a finite group is finite
- `def-schur-covering-group-of-a-finite-group` · definition — Schur covering group
- `thm-existence-of-schur-covering-groups-for-finite-groups` · theorem — Existence of Schur covering groups
- `rem-projective-representations-and-the-schur-multiplier` · remark — Projective representations and the multiplier
- `fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units` · false-statement — Multiplier defined as H²(G,C×)
- `fs-hopfs-formula-is-obviously-independent-of-the-presentation` · false-statement — Hopf formula is obviously independent
- `fs-every-group-has-a-universal-central-extension` · false-statement — Every group has a universal central extension
- `fs-every-central-extension-is-a-stem-extension` · false-statement — Every central extension is stem
- `fs-schur-covering-groups-are-unique-for-all-finite-groups` · false-statement — All finite Schur covers are unique
- `fs-the-universal-coefficient-short-exact-sequence-splits-naturally` · false-statement — Universal coefficients split naturally

### `schur-multipliers-and-universal-central-extensions-examples` — Schur Multipliers and Universal Central Extensions — Examples (6 item(s))

- `ex-schur-multiplier-of-a-cyclic-group` · example — Multiplier of a cyclic group
- `ex-schur-multiplier-of-a-finite-abelian-group` · example — Multiplier of a finite abelian group
- `ex-the-binary-icosahedral-cover-of-a-five` · example — Binary icosahedral cover of A5
- `ex-hopf-formula-from-a-one-relator-presentation` · example — Hopf formula from a one-relator presentation
- `ex-a-stem-extension-that-is-not-universal` · example — A stem extension that is not universal
- `cex-nonuniqueness-of-schur-covering-groups` · counterexample — Nonuniqueness of Schur covers

### `verma-modules-and-shapovalov-forms` — Verma Modules and Shapovalov Forms (17 item(s))

- `def-one-dimensional-borel-module-of-weight-lambda` · definition — The one-dimensional Borel module of weight lambda
- `def-verma-module` · definition — Verma modules
- `thm-universal-property-of-verma-modules` · theorem — The universal property of Verma modules
- `thm-pbw-model-of-a-verma-module` · theorem — The PBW model of a Verma module
- `prop-weights-of-a-verma-module-lie-below-lambda` · proposition — Weights of a Verma module lie below lambda
- `prop-formal-character-of-a-verma-module` · proposition — The formal character of a Verma module
- `lem-a-proper-verma-submodule-misses-the-highest-weight-line` · lemma — A proper Verma submodule misses the highest-weight line
- `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper` · lemma — The sum of all proper Verma submodules is proper
- `thm-verma-module-has-a-unique-simple-quotient` · theorem — A Verma module has a unique simple quotient
- `lem-every-nonzero-verma-submodule-contains-a-singular-vector` · lemma — Every nonzero Verma submodule contains a singular vector
- `def-chevalley-contravariant-form` · definition — Chevalley-contravariant forms
- `thm-existence-and-uniqueness-of-the-shapovalov-form` · theorem — Existence and uniqueness of the Shapovalov form
- `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal` · lemma — Distinct Verma weight spaces are Shapovalov-orthogonal
- `prop-the-shapovalov-radical-is-the-maximal-submodule` · proposition — The Shapovalov radical is the maximal submodule
- `def-shapovalov-determinant-on-a-weight-space` · definition — The Shapovalov determinant on a weight space
- `thm-shapovalov-determinant-formula` · theorem — The Shapovalov determinant formula
- `cor-verma-irreducibility-criterion-from-shapovalov-determinants` · corollary — The Verma irreducibility criterion from Shapovalov determinants

### `verma-modules-and-shapovalov-forms-examples` — Verma Modules and Shapovalov Forms — Examples (6 item(s))

- `ex-sl2-verma-action-in-the-pbw-basis` · example — The sl2 Verma action in the PBW basis
- `ex-sl2-shapovalov-norm-product` · example — The sl2 Shapovalov norm product
- `ex-sl2-reducible-and-generic-verma-modules` · example — Reducible and generic sl2 Verma modules
- `ex-an-a2-verma-weight-space-of-dimension-two` · example — A two-dimensional A2 Verma weight space
- `cex-the-shapovalov-form-is-not-positive-definite-in-general` · counterexample — The Shapovalov form is not positive-definite in general
- `ex-finite-dimensional-sl2-quotient-of-a-verma-module` · example — The finite-dimensional sl2 quotient of a Verma module

### `brauer-induction-and-elementary-subgroups` — Brauer Induction and Elementary Subgroups (20 item(s))

- `def-p-elementary-and-p-hyperelementary-finite-groups` · definition
- `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed` · lemma
- `def-induction-ideal-of-a-family-of-subgroups` · definition
- `lem-induction-ideal-of-a-subgroup-family-is-an-ideal` · lemma
- `lem-p-primary-character-value-congruence` · lemma
- `lem-hyperelementary-permutation-subring-reduction` · lemma
- `lem-banaschewski-prime-obstruction` · lemma
- `lem-elementary-detection-at-a-fixed-element` · lemma
- `lem-isaacs-linear-character-step` · lemma
- `def-supersolvable-groups-and-monomial-characters` · definition
- `lem-p-elementary-groups-are-supersolvable` · lemma
- `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup` · proposition
- `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup` · lemma
- `lem-monomiality-lifts-along-a-quotient` · lemma
- `thm-finite-supersolvable-groups-are-monomial` · theorem
- `lem-p-elementary-characters-are-induced-from-linear-characters` · lemma
- `thm-brauer-induction` · theorem
- `cor-elementary-restriction-detects-generalized-characters` · corollary
- `cor-elementary-local-integrality-criterion` · corollary
- `cor-cyclotomic-field-splits-a-finite-group` · corollary

### `brauer-induction-and-elementary-subgroups-examples` — Brauer Induction and Elementary Subgroups — Examples (4 item(s))

- `ex-elementary-and-hyperelementary-small-groups` · example
- `ex-brauer-induction-for-s3` · example
- `ex-trivial-factors-in-an-elementary-group` · example
- `cex-cyclic-subgroups-do-not-give-integral-induction-in-general` · counterexample

## Your seams

Your pages depend on another group's:

- `schur-multipliers-and-universal-central-extensions` requires `group-cohomology-as-a-derived-functor-examples` (group b, batch 10)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-08b2fe0e4c3979a6ec3610eb · `thm-free-presentation-construction-has-the-universal-property`** (from group a, gap-a-reader-closes) — Step 2.1 establishes that the constructed map is independent of the selected lifts, but then concludes uniqueness among all maps over G without the needed additional argument: two such maps differ by a homomorphism from [F,F]/[F,R] to the central kernel, and this source must be shown perfect. The statement is standard and the omitted argument is supplied in more detail in thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect.
- **s8a-d7889507e2d4158bc78c848c · `lem-banaschewski-prime-obstruction`** (from group a, gap-a-reader-closes) — In the contrapositive argument, the sentence 'Expanding the finite product would put 1_X in A' suppresses the essential identity 0=∏(1_X-a_x)=1_X+(terms in A). Since A need not be unital, the conclusion follows only after this expansion; the statement is otherwise correct.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-31a`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
