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
  "group": "c",
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
      "output": "proof-contract: 151 error(s), 0 warning(s), 704/704 item(s) checked",
      "named_ids": []
    },
    {
      "id": "risk-report",
      "stage": "8-close",
      "why": "ERROR risk-review-missing [fs-the-universal-coefficient-short-exact-sequence-splits-naturally]: fs-the-universal-coefficient-short-exact-sequence-splits-naturally is high risk and lacks a complete Alpha risk_review",
      "output": "ORDINARY 2 [lem-exterior-algebra-basis-monomials] 2:boundary-sensitive language\nMODERATE 3 [lem-exterior-multiplication-koszul-sign-rule] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-koszul-differential-coordinate-formula] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-koszul-differential-square-pairwise-cancellation] 1:2 cited facts\nHIGH 5 [lem-koszul-differential-is-well-defined-and-squares-to-zero] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-empty-koszul-complex-is-the-coefficient-module] 2:boundary-sensitive language\nORDINARY 2 [lem-one-element-koszul-complex] 2:boundary-sensitive language\nMODERATE 3 [cor-one-element-koszul-homology] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-basic-koszul-homology] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-koszul-complex-concatenation-tensor-isomorphism] 1:2 cited facts\nMODERATE 3 [lem-koszul-append-one-element-mapping-cone-identification] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-koszul-mapping-cone-homology-exact-sequence] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-koszul-concatenation-and-mapping-cone] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-koszul-generator-contraction-homotopy] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-sequence-ideal-annihilates-koszul-homology] no signals\nMODERATE 3 [lem-koszul-generators-act-null-homotopically] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-koszul-homology-supported-on-sequence-vanishing-set] 1:3 cited facts\nORDINARY 1 [lem-koszul-complex-localises-termwise] 1:2 cited facts\nMODERATE 3 [cor-koszul-homology-localises] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [lem-koszul-complex-flat-base-change] 1:2 cited facts\nMODERATE 3 [cor-koszul-homology-flat-base-change] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-koszul-generator-matrix-chain-map] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-koszul-complex-invariant-under-invertible-generator-change] no signals\nMODERATE 4 [thm-functoriality-base-change-and-generator-change-for-koszul-complexes] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 4 [lem-regular-sequence-first-element-boundary] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-regular-sequence-tail-on-quotient] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-initial-subsequences-of-a-regular-sequence-are-regular] 2:quotient or equivalence-class construction\nMODERATE 3 [thm-localisation-and-flat-base-change-of-regular-sequences] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [lem-regular-one-element-koszul-acyclicity] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-regular-sequence-koszul-acyclicity-induction] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-regular-sequences-give-acyclic-koszul-complexes] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [cor-koszul-complex-resolves-a-regular-quotient] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [lem-local-koszul-h-one-detects-first-regularity-failure] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language\nHIGH 7 [lem-local-koszul-acyclicity-inductive-converse] 3:7 declared dependencies; 2:7 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-koszul-acyclicity-characterises-local-regular-sequences] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-local-koszul-acyclicity-iff-regular-sequence] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-koszul-regular-implies-h-one-regular] 2:boundary-sensitive language\nCRITICAL 11 [lem-h-one-regular-local-implies-koszul-regular] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-regular-sequence-permutation-adjacent-swap] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nORDINARY 0 [cor-regular-sequences-permutable-local] no signals\nHIGH 5 [lem-positive-powers-of-a-regular-sequence-remain-regular] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [cor-regularity-notions-coincide-local-finite] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-regularity-notions-and-permutation-invariance-local] 1:2 cited facts\nHIGH 7 [lem-koszul-resolution-minimality-maximal-ideal-sequence] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-complete-intersection-betti-numbers-binomial] 1:3 cited facts; 2:induction, recursion, or minimality\nHIGH 5 [ex-koszul-complex-one-and-two-elements] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-koszul-complex-polynomial-variables] 2:quotient or equivalence-class construction\nHIGH 5 [ex-koszul-resolution-complete-intersection] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-koszul-homology-zero-divisor] 2:boundary-sensitive language\nHIGH 5 [ex-nonpermutable-regular-sequence] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-koszul-homology-after-localisation] 2:boundary-sensitive language\nHIGH 5 [ex-empty-and-unit-koszul-boundaries] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-koszul-d-square-sign-check-three-elements] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-koszul-homology-of-a-zero-divisor] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-generator-change-koszul-isomorphism] 1:2 cited facts\nMODERATE 3 [ex-regular-sequence-powers-and-permutation] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-koszul-resolution-betti-table-complete-intersection] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [lem-homogeneous-polynomial-zero-locus-well-defined] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [thm-projective-zariski-topology] 2:boundary-sensitive language\nORDINARY 0 [lem-standard-projective-opens-are-affine-spaces] no signals\nORDINARY 0 [lem-homogenization-dehomogenization-correspondence] no signals\nORDINARY 2 [thm-ideal-projective-closure-saturation] 2:4 declared dependencies\nHIGH 7 [lem-projective-irreducibility-homogeneous-prime] 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-projective-regular-function-chart-compatibility] no signals\nHIGH 6 [thm-global-regular-functions-projective-variety] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-projective-coordinate-morphisms-well-defined] 2:boundary-sensitive language\nMODERATE 4 [thm-closed-projective-embedding-by-homogeneous-generators] 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-projective-variety-cone-irreducible] no signals\nORDINARY 0 [lem-projective-closure-dense-affine-chart] no signals\nORDINARY 0 [lem-projective-hypersurface-affine-pieces] no signals\nORDINARY 2 [cex-naive-homogenization-adds-component] 2:boundary-sensitive language\nORDINARY 2 [cex-inhomogeneous-equation-not-projectively-well-defined] 2:boundary-sensitive language\nHIGH 6 [lem-structure-presheaf-basic-open-well-defined] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [thm-structure-sheaf-affine-scheme] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [thm-sections-basic-open-affine-scheme] 2:boundary-sensitive language\nMODERATE 4 [thm-stalk-structure-sheaf-prime-localization] 2:5 declared dependencies; 2:analytic limiting/completeness language\nORDINARY 0 [cor-spectrum-with-structure-sheaf-locally-ringed] no signals\nORDINARY 0 [thm-global-sections-affine-scheme] no signals\nMODERATE 3 [lem-spectrum-localization-open-immersion] 2:4 declared dependencies; 1:2 cited facts\nMODERATE 3 [lem-spectrum-map-stalk-homomorphisms-local] 2:4 declared dependencies; 1:2 cited facts\nMODERATE 3 [thm-affine-scheme-ring-anti-equivalence] 2:5 declared dependencies; 1:3 cited facts\nMODERATE 3 [cor-affine-scheme-isomorphism-ring-isomorphism] 3:biconditional / both-direction claim\nORDINARY 1 [lem-classical-points-inside-affine-scheme] 1:2 cited facts\nORDINARY 2 [thm-spectrum-sober] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [thm-affine-schemes-determined-by-functor-of-points] no signals\nHIGH 5 [lem-basic-opens-quasi-compact] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [cor-affine-scheme-quasi-compact] no signals\nHIGH 5 [ex-spectrum-field-one-point] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-spectrum-zero-ring-empty] 2:boundary-sensitive language\nCRITICAL 11 [ex-spectrum-integers-generic-and-closed-points] 3:8 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [ex-dual-numbers-one-point-nonreduced] 2:5 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-spectrum-product-ring-disjoint-union] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [ex-basic-open-affine-line] no signals\nMODERATE 3 [cex-scheme-not-determined-by-underlying-space] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-functor-points-affine-line] no signals\nHIGH 7 [cex-nonclosed-scheme-point-no-k-valued-coordinate] 2:6 declared dependencies; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nrisk-report: 15 error(s), 704 item(s) routed\nERROR risk-review-missing [ex-koszul-complex-one-and-two-elements]: ex-koszul-complex-one-and-two-elements is high risk and lacks a complete Alpha risk_review",
      "named_ids": [
        "lem-exterior-algebra-basis-monomials",
        "lem-exterior-multiplication-koszul-sign-rule",
        "lem-koszul-differential-coordinate-formula",
        "lem-koszul-differential-square-pairwise-cancellation",
        "lem-koszul-differential-is-well-defined-and-squares-to-zero",
        "cor-empty-koszul-complex-is-the-coefficient-module",
        "lem-one-element-koszul-complex",
        "cor-one-element-koszul-homology",
        "thm-basic-koszul-homology",
        "lem-koszul-complex-concatenation-tensor-isomorphism",
        "lem-koszul-append-one-element-mapping-cone-identification",
        "lem-koszul-mapping-cone-homology-exact-sequence",
        "thm-koszul-concatenation-and-mapping-cone",
        "lem-koszul-generator-contraction-homotopy",
        "cor-sequence-ideal-annihilates-koszul-homology",
        "lem-koszul-generators-act-null-homotopically",
        "cor-koszul-homology-supported-on-sequence-vanishing-set",
        "lem-koszul-complex-localises-termwise",
        "cor-koszul-homology-localises",
        "lem-koszul-complex-flat-base-change",
        "cor-koszul-homology-flat-base-change",
        "lem-koszul-generator-matrix-chain-map",
        "cor-koszul-complex-invariant-under-invertible-generator-change",
        "thm-functoriality-base-change-and-generator-change-for-koszul-complexes",
        "lem-regular-sequence-first-element-boundary",
        "lem-regular-sequence-tail-on-quotient",
        "cor-initial-subsequences-of-a-regular-sequence-are-regular",
        "thm-localisation-and-flat-base-change-of-regular-sequences",
        "lem-regular-one-element-koszul-acyclicity",
        "lem-regular-sequence-koszul-acyclicity-induction",
        "thm-regular-sequences-give-acyclic-koszul-complexes",
        "cor-koszul-complex-resolves-a-regular-quotient",
        "lem-local-koszul-h-one-detects-first-regularity-failure",
        "lem-local-koszul-acyclicity-inductive-converse",
        "thm-koszul-acyclicity-characterises-local-regular-sequences",
        "cor-local-koszul-acyclicity-iff-regular-sequence",
        "lem-koszul-regular-implies-h-one-regular",
        "lem-h-one-regular-local-implies-koszul-regular",
        "lem-regular-sequence-permutation-adjacent-swap",
        "cor-regular-sequences-permutable-local",
        "lem-positive-powers-of-a-regular-sequence-remain-regular",
        "cor-regularity-notions-coincide-local-finite",
        "thm-regularity-notions-and-permutation-invariance-local",
        "lem-koszul-resolution-minimality-maximal-ideal-sequence",
        "cor-complete-intersection-betti-numbers-binomial",
        "ex-koszul-complex-one-and-two-elements",
        "ex-koszul-complex-polynomial-variables",
        "ex-koszul-resolution-complete-intersection",
        "ex-koszul-homology-zero-divisor",
        "ex-nonpermutable-regular-sequence",
        "ex-koszul-homology-after-localisation",
        "ex-empty-and-unit-koszul-boundaries",
        "ex-koszul-d-square-sign-check-three-elements",
        "ex-koszul-homology-of-a-zero-divisor",
        "ex-generator-change-koszul-isomorphism",
        "ex-regular-sequence-powers-and-permutation",
        "ex-koszul-resolution-betti-table-complete-intersection",
        "lem-homogeneous-polynomial-zero-locus-well-defined",
        "thm-projective-zariski-topology",
        "lem-standard-projective-opens-are-affine-spaces",
        "lem-homogenization-dehomogenization-correspondence",
        "thm-ideal-projective-closure-saturation",
        "lem-projective-irreducibility-homogeneous-prime",
        "lem-projective-regular-function-chart-compatibility",
        "thm-global-regular-functions-projective-variety",
        "lem-projective-coordinate-morphisms-well-defined",
        "thm-closed-projective-embedding-by-homogeneous-generators",
        "lem-projective-variety-cone-irreducible",
        "lem-projective-closure-dense-affine-chart",
        "lem-projective-hypersurface-affine-pieces",
        "cex-naive-homogenization-adds-component",
        "cex-inhomogeneous-equation-not-projectively-well-defined",
        "lem-structure-presheaf-basic-open-well-defined",
        "thm-structure-sheaf-affine-scheme",
        "thm-sections-basic-open-affine-scheme",
        "thm-stalk-structure-sheaf-prime-localization",
        "cor-spectrum-with-structure-sheaf-locally-ringed",
        "thm-global-sections-affine-scheme",
        "lem-spectrum-localization-open-immersion",
        "lem-spectrum-map-stalk-homomorphisms-local",
        "thm-affine-scheme-ring-anti-equivalence",
        "cor-affine-scheme-isomorphism-ring-isomorphism",
        "lem-classical-points-inside-affine-scheme",
        "thm-spectrum-sober",
        "thm-affine-schemes-determined-by-functor-of-points",
        "lem-basic-opens-quasi-compact",
        "cor-affine-scheme-quasi-compact",
        "ex-spectrum-field-one-point",
        "ex-spectrum-zero-ring-empty",
        "ex-spectrum-integers-generic-and-closed-points",
        "ex-dual-numbers-one-point-nonreduced",
        "ex-spectrum-product-ring-disjoint-union",
        "ex-basic-open-affine-line",
        "cex-scheme-not-determined-by-underlying-space",
        "ex-functor-points-affine-line",
        "cex-nonclosed-scheme-point-no-k-valued-coordinate"
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
      "output": "citation-fidelity: 421 citation(s) over 704 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 1.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-exterior-algebra-basis-monomials",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-exterior-multiplication-koszul-sign-rule",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-differential-coordinate-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-differential-square-pairwise-cancellation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-differential-is-well-defined-and-squares-to-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-empty-koszul-complex-is-the-coefficient-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-one-element-koszul-complex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-one-element-koszul-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-basic-koszul-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-complex-concatenation-tensor-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-append-one-element-mapping-cone-identification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-mapping-cone-homology-exact-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koszul-concatenation-and-mapping-cone",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-generator-contraction-homotopy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-sequence-ideal-annihilates-koszul-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-generators-act-null-homotopically",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-homology-supported-on-sequence-vanishing-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-complex-localises-termwise",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-homology-localises",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-complex-flat-base-change",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-homology-flat-base-change",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-generator-matrix-chain-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-complex-invariant-under-invertible-generator-change",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-functoriality-base-change-and-generator-change-for-koszul-complexes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-first-element-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-tail-on-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-initial-subsequences-of-a-regular-sequence-are-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-localisation-and-flat-base-change-of-regular-sequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-one-element-koszul-acyclicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-koszul-acyclicity-induction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-regular-sequences-give-acyclic-koszul-complexes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-complex-resolves-a-regular-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-local-koszul-h-one-detects-first-regularity-failure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-local-koszul-acyclicity-inductive-converse",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koszul-acyclicity-characterises-local-regular-sequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-local-koszul-acyclicity-iff-regular-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-regular-implies-h-one-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-h-one-regular-local-implies-koszul-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-permutation-adjacent-swap",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-regular-sequences-permutable-local",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-positive-powers-of-a-regular-sequence-remain-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-regularity-notions-coincide-local-finite",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-regularity-notions-and-permutation-invariance-local",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-resolution-minimality-maximal-ideal-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-complete-intersection-betti-numbers-binomial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-complex-one-and-two-elements",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-complex-polynomial-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-resolution-complete-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-homology-zero-divisor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-nonpermutable-regular-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-homology-after-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-empty-and-unit-koszul-boundaries",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-d-square-sign-check-three-elements",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-homology-of-a-zero-divisor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-generator-change-koszul-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-regular-sequence-powers-and-permutation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-resolution-betti-table-complete-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-homogeneous-polynomial-zero-locus-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-projective-zariski-topology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-standard-projective-opens-are-affine-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-homogenization-dehomogenization-correspondence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-ideal-projective-closure-saturation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-irreducibility-homogeneous-prime",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-regular-function-chart-compatibility",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-global-regular-functions-projective-variety",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-coordinate-morphisms-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-closed-projective-embedding-by-homogeneous-generators",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-variety-cone-irreducible",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-closure-dense-affine-chart",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-hypersurface-affine-pieces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-naive-homogenization-adds-component",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-inhomogeneous-equation-not-projectively-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-structure-presheaf-basic-open-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-structure-sheaf-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sections-basic-open-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stalk-structure-sheaf-prime-localization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-spectrum-with-structure-sheaf-locally-ringed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-global-sections-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-localization-open-immersion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-map-stalk-homomorphisms-local",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-affine-scheme-ring-anti-equivalence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-affine-scheme-isomorphism-ring-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-classical-points-inside-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectrum-sober",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-affine-schemes-determined-by-functor-of-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-basic-opens-quasi-compact",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-affine-scheme-quasi-compact",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-field-one-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-zero-ring-empty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-integers-generic-and-closed-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-dual-numbers-one-point-nonreduced",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-product-ring-disjoint-union",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-basic-open-affine-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-scheme-not-determined-by-underlying-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-functor-points-affine-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-nonclosed-scheme-point-no-k-valued-coordinate",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-exterior-algebra-basis-monomials",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-exterior-multiplication-koszul-sign-rule",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-differential-coordinate-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-differential-square-pairwise-cancellation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-differential-is-well-defined-and-squares-to-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-empty-koszul-complex-is-the-coefficient-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-one-element-koszul-complex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-one-element-koszul-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-basic-koszul-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-complex-concatenation-tensor-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-append-one-element-mapping-cone-identification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-mapping-cone-homology-exact-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koszul-concatenation-and-mapping-cone",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-generator-contraction-homotopy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-sequence-ideal-annihilates-koszul-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-generators-act-null-homotopically",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-homology-supported-on-sequence-vanishing-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-complex-localises-termwise",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-homology-localises",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-complex-flat-base-change",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-homology-flat-base-change",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-generator-matrix-chain-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-complex-invariant-under-invertible-generator-change",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-functoriality-base-change-and-generator-change-for-koszul-complexes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-first-element-boundary",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-tail-on-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-initial-subsequences-of-a-regular-sequence-are-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-localisation-and-flat-base-change-of-regular-sequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-one-element-koszul-acyclicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-koszul-acyclicity-induction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-regular-sequences-give-acyclic-koszul-complexes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-koszul-complex-resolves-a-regular-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-local-koszul-h-one-detects-first-regularity-failure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-local-koszul-acyclicity-inductive-converse",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-koszul-acyclicity-characterises-local-regular-sequences",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-local-koszul-acyclicity-iff-regular-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-regular-implies-h-one-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-h-one-regular-local-implies-koszul-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-regular-sequence-permutation-adjacent-swap",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-regular-sequences-permutable-local",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-positive-powers-of-a-regular-sequence-remain-regular",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-regularity-notions-coincide-local-finite",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-regularity-notions-and-permutation-invariance-local",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-koszul-resolution-minimality-maximal-ideal-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-complete-intersection-betti-numbers-binomial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-complex-one-and-two-elements",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-complex-polynomial-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-resolution-complete-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-homology-zero-divisor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-nonpermutable-regular-sequence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-homology-after-localisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-empty-and-unit-koszul-boundaries",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-d-square-sign-check-three-elements",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-homology-of-a-zero-divisor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-generator-change-koszul-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-regular-sequence-powers-and-permutation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-koszul-resolution-betti-table-complete-intersection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-homogeneous-polynomial-zero-locus-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-projective-zariski-topology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-standard-projective-opens-are-affine-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-homogenization-dehomogenization-correspondence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-ideal-projective-closure-saturation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-irreducibility-homogeneous-prime",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-regular-function-chart-compatibility",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-global-regular-functions-projective-variety",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-coordinate-morphisms-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-closed-projective-embedding-by-homogeneous-generators",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-variety-cone-irreducible",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-closure-dense-affine-chart",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-projective-hypersurface-affine-pieces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-naive-homogenization-adds-component",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-inhomogeneous-equation-not-projectively-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-structure-presheaf-basic-open-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-structure-sheaf-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sections-basic-open-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stalk-structure-sheaf-prime-localization",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-spectrum-with-structure-sheaf-locally-ringed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-global-sections-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-localization-open-immersion",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-spectrum-map-stalk-homomorphisms-local",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-affine-scheme-ring-anti-equivalence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-affine-scheme-isomorphism-ring-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-classical-points-inside-affine-scheme",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectrum-sober",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-affine-schemes-determined-by-functor-of-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-basic-opens-quasi-compact",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-affine-scheme-quasi-compact",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-field-one-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-zero-ring-empty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-integers-generic-and-closed-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-dual-numbers-one-point-nonreduced",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-spectrum-product-ring-disjoint-union",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-basic-open-affine-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-scheme-not-determined-by-underlying-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-functor-points-affine-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-nonclosed-scheme-point-no-k-valued-coordinate",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **c**, run `frontier-31a`

You are the group Alpha for batches **11**, **13**, **14**: 3 A/B pair(s), 6 page(s), 132 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 11 | `koszul-complexes-and-regular-sequences` | A | commutative-algebra | 365.901 | `zariski-topology-on-prime-spectra-examples`, `long-exact-sequences-in-homology` |
| 11 | `koszul-complexes-and-regular-sequences-examples` | B | commutative-algebra | 365.902 | `koszul-complexes-and-regular-sequences` |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones` | A | algebraic-geometry | 366.045 | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones-examples` | B | algebraic-geometry | 366.046 | `projective-algebraic-sets-projective-morphisms-and-cones` |
| 14 | `affine-schemes-and-the-structure-sheaf` | A | scheme-theory | 366.061 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`, `zariski-topology-on-prime-spectra` |
| 14 | `affine-schemes-and-the-structure-sheaf-examples` | B | scheme-theory | 366.062 | `affine-schemes-and-the-structure-sheaf` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `koszul-complexes-and-regular-sequences` — Koszul Complexes and Regular Sequences (51 item(s))

- `def-exterior-algebra-of-a-finite-free-module` · definition
- `lem-exterior-algebra-basis-monomials` · lemma
- `lem-exterior-multiplication-koszul-sign-rule` · lemma
- `def-koszul-complex-of-a-sequence-with-coefficients` · definition
- `lem-koszul-differential-coordinate-formula` · lemma
- `lem-koszul-differential-square-pairwise-cancellation` · lemma
- `lem-koszul-differential-is-well-defined-and-squares-to-zero` · lemma
- `cor-empty-koszul-complex-is-the-coefficient-module` · corollary
- `lem-one-element-koszul-complex` · lemma
- `cor-one-element-koszul-homology` · corollary
- `thm-basic-koszul-homology` · theorem
- `lem-koszul-complex-concatenation-tensor-isomorphism` · lemma
- `lem-koszul-append-one-element-mapping-cone-identification` · lemma
- `lem-koszul-mapping-cone-homology-exact-sequence` · lemma
- `thm-koszul-concatenation-and-mapping-cone` · theorem
- `lem-koszul-generator-contraction-homotopy` · lemma
- `cor-sequence-ideal-annihilates-koszul-homology` · corollary
- `lem-koszul-generators-act-null-homotopically` · lemma
- `cor-koszul-homology-supported-on-sequence-vanishing-set` · corollary
- `lem-koszul-complex-localises-termwise` · lemma
- `cor-koszul-homology-localises` · corollary
- `lem-koszul-complex-flat-base-change` · lemma
- `cor-koszul-homology-flat-base-change` · corollary
- `lem-koszul-generator-matrix-chain-map` · lemma
- `cor-koszul-complex-invariant-under-invertible-generator-change` · corollary
- `thm-functoriality-base-change-and-generator-change-for-koszul-complexes` · theorem
- `def-regular-sequence-on-a-module` · definition
- `lem-regular-sequence-first-element-boundary` · lemma
- `lem-regular-sequence-tail-on-quotient` · lemma
- `cor-initial-subsequences-of-a-regular-sequence-are-regular` · corollary
- `thm-localisation-and-flat-base-change-of-regular-sequences` · theorem
- `lem-regular-one-element-koszul-acyclicity` · lemma
- `lem-regular-sequence-koszul-acyclicity-induction` · lemma
- `thm-regular-sequences-give-acyclic-koszul-complexes` · theorem
- `cor-koszul-complex-resolves-a-regular-quotient` · corollary
- `lem-local-koszul-h-one-detects-first-regularity-failure` · lemma
- `lem-local-koszul-acyclicity-inductive-converse` · lemma
- `thm-koszul-acyclicity-characterises-local-regular-sequences` · theorem
- `cor-local-koszul-acyclicity-iff-regular-sequence` · corollary
- `def-koszul-regular-and-h-one-regular-sequences` · definition
- `lem-koszul-regular-implies-h-one-regular` · lemma
- `lem-h-one-regular-local-implies-koszul-regular` · lemma
- `lem-regular-sequence-permutation-adjacent-swap` · lemma
- `cor-regular-sequences-permutable-local` · corollary
- `lem-positive-powers-of-a-regular-sequence-remain-regular` · lemma
- `cor-regularity-notions-coincide-local-finite` · corollary
- `thm-regularity-notions-and-permutation-invariance-local` · theorem
- `def-minimal-free-resolution-over-a-local-ring` · definition
- `def-koszul-betti-numbers-over-a-local-ring` · definition
- `lem-koszul-resolution-minimality-maximal-ideal-sequence` · lemma
- `cor-complete-intersection-betti-numbers-binomial` · corollary

### `koszul-complexes-and-regular-sequences-examples` — Koszul Complexes and Regular Sequences — Examples (12 item(s))

- `ex-koszul-complex-one-and-two-elements` · example
- `ex-koszul-complex-polynomial-variables` · example
- `ex-koszul-resolution-complete-intersection` · example
- `ex-koszul-homology-zero-divisor` · example
- `ex-nonpermutable-regular-sequence` · example
- `ex-koszul-homology-after-localisation` · example
- `ex-empty-and-unit-koszul-boundaries` · example
- `ex-koszul-d-square-sign-check-three-elements` · example
- `ex-koszul-homology-of-a-zero-divisor` · example
- `ex-generator-change-koszul-isomorphism` · example
- `ex-regular-sequence-powers-and-permutation` · example
- `ex-koszul-resolution-betti-table-complete-intersection` · example

### `projective-algebraic-sets-projective-morphisms-and-cones` — Projective Algebraic Sets Projective Morphisms and Cones (25 item(s))

- `def-projective-space-points` · definition — Projective space as scalar-equivalence classes
- `def-homogeneous-polynomial-and-homogeneous-ideal` · definition — Homogeneous polynomials and homogeneous ideals
- `lem-homogeneous-polynomial-zero-locus-well-defined` · lemma — A homogeneous zero locus is well-defined on projective points
- `def-projective-algebraic-set` · definition — Projective algebraic set
- `thm-projective-zariski-topology` · theorem — Projective Zariski topology
- `lem-standard-projective-opens-are-affine-spaces` · lemma — Standard projective opens are affine spaces
- `lem-homogenization-dehomogenization-correspondence` · lemma — Homogenization and dehomogenization
- `def-projective-closure-affine-set` · definition — Projective closure of an affine algebraic set
- `def-homogeneous-ideal-saturation` · definition — Saturation of a homogeneous ideal
- `thm-ideal-projective-closure-saturation` · theorem — Ideal of a projective closure via saturation
- `def-homogeneous-coordinate-ring` · definition — Homogeneous coordinate ring
- `def-projective-variety-classical` · definition — Classical projective variety
- `lem-projective-irreducibility-homogeneous-prime` · lemma — Irreducibility and homogeneous prime ideals
- `def-regular-function-projective-variety` · definition — Regular functions on a projective variety
- `lem-projective-regular-function-chart-compatibility` · lemma — Compatibility of projective regular-function charts
- `thm-global-regular-functions-projective-variety` · theorem — Global regular functions on an irreducible projective variety
- `def-morphism-to-projective-space-homogeneous-coordinates` · definition — Projective morphisms in homogeneous coordinates
- `lem-projective-coordinate-morphisms-well-defined` · lemma — Homogeneous coordinate formulas define morphisms
- `thm-closed-projective-embedding-by-homogeneous-generators` · theorem — Closed projective embedding from a radical homogeneous ideal
- `def-affine-cone-projective-set` · definition — Affine cone over a projective algebraic set
- `lem-projective-variety-cone-irreducible` · lemma — The cone over a projective variety is irreducible
- `lem-projective-closure-dense-affine-chart` · lemma — The affine chart is dense in a projective closure
- `def-degree-projective-hypersurface` · definition — Degree of a reduced projective hypersurface
- `lem-projective-hypersurface-affine-pieces` · lemma — Affine pieces of a projective hypersurface
- `rem-projective-coordinate-ring-not-function-ring` · remark — A homogeneous coordinate ring is not the global function ring

### `projective-algebraic-sets-projective-morphisms-and-cones-examples` — Projective Algebraic Sets Projective Morphisms and Cones — Examples (7 item(s))

- `ex-projective-line-two-affine-charts` · example — The two standard affine charts of the projective line
- `ex-projective-closure-parabola` · example — Projective closure of a parabola
- `cex-naive-homogenization-adds-component` · counterexample — Raw homogenized generators can add a projective component
- `ex-projective-conic-standard-charts` · example — Standard affine charts of a projective conic
- `ex-affine-cone-over-conic` · example — Affine cone over a smooth projective conic
- `cex-inhomogeneous-equation-not-projectively-well-defined` · counterexample — An inhomogeneous equation does not define a projective zero locus
- `ex-morphism-projective-line-power-map` · example — The power map on the projective line

### `affine-schemes-and-the-structure-sheaf` — Affine Schemes and the Structure Sheaf (28 item(s))

- `def-affine-scheme-spectrum` · definition — The underlying space of an affine spectrum
- `def-structure-presheaf-on-basic-opens` · definition — The localization presheaf on distinguished opens
- `lem-structure-presheaf-basic-open-well-defined` · lemma — Localization sections are independent of a distinguished-open presentation
- `thm-structure-sheaf-affine-scheme` · theorem — The localization construction extends to the structure sheaf on Spec A
- `thm-sections-basic-open-affine-scheme` · theorem — Sections and restrictions on distinguished opens of an affine scheme
- `thm-stalk-structure-sheaf-prime-localization` · theorem — The stalk of the affine structure sheaf at a prime is A_p
- `cor-spectrum-with-structure-sheaf-locally-ringed` · corollary — Spec A with its structure sheaf is a locally ringed space
- `def-residue-field-scheme-point` · definition — The residue field at a point of an affine scheme
- `thm-global-sections-affine-scheme` · theorem — Global functions on Spec A recover A
- `lem-spectrum-localization-open-immersion` · lemma — A principal localization identifies its spectrum with a distinguished open
- `def-affine-scheme` · definition — Affine schemes and their coordinate rings
- `def-morphism-affine-schemes-from-ring-map` · definition — The map of affine spectra induced by a ring homomorphism
- `lem-spectrum-map-stalk-homomorphisms-local` · lemma — The stalk maps induced by a ring map are local
- `thm-affine-scheme-ring-anti-equivalence` · theorem — Affine schemes are contravariantly equivalent to commutative rings
- `cor-affine-scheme-isomorphism-ring-isomorphism` · corollary — Affine-scheme isomorphisms are exactly coordinate-ring isomorphisms in reverse direction
- `def-closed-point-scheme` · definition — Closed points of an affine scheme
- `lem-classical-points-inside-affine-scheme` · lemma — Classical k-points give closed points over an algebraically closed field
- `def-generic-point-irreducible-closed-subset` · definition — Generic points of irreducible closed subsets
- `thm-spectrum-sober` · theorem — Every irreducible closed subset of an affine spectrum has a unique generic point
- `def-reduced-affine-scheme` · definition — Reduced affine schemes
- `def-integral-affine-scheme` · definition — Integral affine schemes
- `def-nonreduced-infinitesimal-thickening-affine` · definition — An affine nilpotent thickening
- `def-functor-of-points-affine-scheme` · definition — The functor of points of an affine scheme
- `thm-affine-schemes-determined-by-functor-of-points` · theorem — An affine scheme is determined by its functor of points
- `def-dual-numbers-scheme` · definition — The affine scheme of dual numbers
- `lem-basic-opens-quasi-compact` · lemma — Every distinguished open of an affine spectrum is quasi-compact
- `cor-affine-scheme-quasi-compact` · corollary — Every affine scheme is quasi-compact
- `rem-spec-contravariance-and-points` · remark — Contravariance reverses coordinates and scheme points are not only classical points

### `affine-schemes-and-the-structure-sheaf-examples` — Affine Schemes and the Structure Sheaf — Examples (9 item(s))

- `ex-spectrum-field-one-point` · example — The spectrum of a field is a one-point affine scheme
- `ex-spectrum-zero-ring-empty` · example — The zero ring has empty spectrum
- `ex-spectrum-integers-generic-and-closed-points` · example — Spec Z has one generic point and closed prime-number points
- `ex-dual-numbers-one-point-nonreduced` · example — Dual numbers give a one-point nonreduced affine scheme
- `ex-spectrum-product-ring-disjoint-union` · example — The spectrum of a product ring is a disjoint union
- `ex-basic-open-affine-line` · example — A basic open of the affine line is affine
- `cex-scheme-not-determined-by-underlying-space` · counterexample — The underlying topological space does not determine a scheme
- `ex-functor-points-affine-line` · example — Relative points of the affine line are elements of a test k-algebra
- `cex-nonclosed-scheme-point-no-k-valued-coordinate` · counterexample — A nonclosed scheme point need not be a k-valued coordinate

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-78cf866a9faa8e832d5e5c09 · `def-affine-cone-projective-set`** (from group c, would-be-fatal) — The definition allows arbitrary X⊂P_k^n, including X=∅, but asserts that C(X)=V(I_+(X)) “contains 0”. For X=∅, I_+(X) is the whole homogeneous ring (including 1), so C(X)=∅ and does not contain 0.
- **s8a-ce319a5e775a3a9ede422908 · `ex-koszul-complex-one-and-two-elements`** (from group c, would-be-fatal) — With the fixed increasing-wedge convention, d(e_1∧e_2)=u e_2-v e_1 for the sequence (u,v). The example instead states d_2(1)=v e_1-u e_2 without declaring that 1 corresponds to −e_1∧e_2, so its asserted explicit differential has the opposite sign.

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
