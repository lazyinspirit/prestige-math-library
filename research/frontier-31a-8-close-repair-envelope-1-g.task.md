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
  "group": "g",
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
      "output": "CRITICAL 9 [thm-the-tensor-product-in-a-multitensor-category-is-biexact] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nORDINARY 1 [thm-dualization-in-a-multitensor-category-is-exact] 1:3 cited facts\nMODERATE 3 [thm-images-commute-with-tensor-products-in-a-multitensor-category] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-tensoring-with-a-dualizable-object-preserves-projectives] 1:3 cited facts\nMODERATE 4 [cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [thm-the-unit-object-of-a-multitensor-category-is-semisimple] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-unit-object-of-a-tensor-category-is-simple] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects] no signals\nORDINARY 0 [thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful] no signals\nHIGH 5 [thm-the-grothendieck-ring-multiplication-is-well-defined] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-duality-induces-an-anti-involution-on-the-grothendieck-ring] 1:3 cited facts\nORDINARY 1 [thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category] 1:2 cited facts\nHIGH 5 [fs-every-finite-k-linear-abelian-category-is-semisimple] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category] 1:2 cited facts\nORDINARY 1 [fs-a-tensor-functor-is-just-a-strong-monoidal-functor] 1:2 cited facts\nORDINARY 0 [fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative] no signals\nORDINARY 1 [fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure] 1:2 cited facts\nORDINARY 1 [ex-finite-dimensional-vector-spaces-form-a-fusion-category] 1:3 cited facts\nHIGH 5 [ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-a-matrix-multifusion-category-with-nonsimple-unit] 1:2 cited facts\nMODERATE 3 [ex-fusion-rules-for-a-supplied-finite-simple-family] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-singular-boundary-descends-to-relative-chains] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-relative-homology-is-functorial-for-maps-of-pairs] 2:quotient or equivalence-class construction\nORDINARY 2 [prop-relative-homology-of-the-empty-and-total-subspace] 2:boundary-sensitive language\nORDINARY 2 [thm-long-exact-sequence-of-a-pair-in-singular-homology] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-the-relative-connecting-map-is-independent-of-lift-and-representative] 2:boundary-sensitive language\nORDINARY 2 [thm-naturality-of-the-long-exact-sequence-of-a-pair] 2:quotient or equivalence-class construction\nORDINARY 2 [thm-barycentric-subdivision-is-a-chain-map] 2:induction, recursion, or minimality\nORDINARY 2 [thm-barycentric-subdivision-is-chain-homotopic-to-the-identity] 2:induction, recursion, or minimality\nORDINARY 2 [lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero] 2:boundary-sensitive language\nMODERATE 4 [lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [thm-cover-small-singular-chains-compute-singular-homology] 2:boundary-sensitive language\nCRITICAL 8 [thm-cover-small-inclusion-is-a-chain-homotopy-equivalence] 2:5 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 2 [thm-excision-for-singular-homology] 2:quotient or equivalence-class construction\nMODERATE 4 [cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes] no signals\nORDINARY 0 [thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence] no signals\nORDINARY 2 [thm-mayer-vietoris-sequence-in-singular-homology] 2:boundary-sensitive language\nORDINARY 2 [lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition] 2:boundary-sensitive language\nMODERATE 4 [thm-naturality-of-singular-mayer-vietoris] 2:5 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [thm-simplicial-and-singular-homology-agree-for-simplicial-complexes] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [cor-homology-of-spheres] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cor-suspension-isomorphism-in-reduced-singular-homology] 2:5 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-relative-homology-of-a-disk-and-its-boundary] 2:boundary-sensitive language\nORDINARY 2 [ex-relative-homology-of-an-interval-and-its-endpoints] 2:boundary-sensitive language\nORDINARY 2 [ex-first-barycentric-subdivision-of-a-triangle] 2:boundary-sensitive language\nHIGH 6 [ex-cover-small-chains-for-the-two-arc-cover-of-a-circle] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-mayer-vietoris-computation-of-sphere-homology] 2:boundary-sensitive language\nORDINARY 2 [ex-mayer-vietoris-computation-of-the-torus-first-homology] 2:boundary-sensitive language\nORDINARY 2 [cex-excision-fails-without-the-closure-inside-interior-hypothesis] 2:boundary-sensitive language\nORDINARY 2 [cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small] 2:boundary-sensitive language\nORDINARY 2 [cex-relative-homology-is-not-the-homology-of-the-set-difference] 2:boundary-sensitive language\nHIGH 6 [lem-riemannian-gradient-vanishes-exactly-at-critical-points] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [lem-negative-gradient-energy-identity] 1:3 cited facts\nMODERATE 3 [cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-a-limit-point-of-a-gradient-trajectory-is-critical] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-morse-trajectories-have-positive-energy-drop] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [lem-stable-and-unstable-manifolds-are-flow-invariant] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 0 [cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits] no signals\nCRITICAL 8 [prop-proper-morse-slabs-give-complete-connecting-trajectories] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [ex-negative-gradient-lines-for-a-quadratic-morse-function] no signals\nMODERATE 4 [ex-meridian-trajectories-for-height-on-the-sphere] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [ex-gradient-flow-on-the-torus-morse-function] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [cex-positive-gradient-reverses-stable-and-unstable-dimensions] 2:boundary-sensitive language\nORDINARY 2 [cex-an-incomplete-gradient-flow-on-a-noncompact-manifold] 2:boundary-sensitive language\nrisk-report: 15 error(s), 704 item(s) routed\nERROR risk-review-missing [ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces]: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cor-suspension-isomorphism-in-reduced-singular-homology]: cor-suspension-isomorphism-in-reduced-singular-homology is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [ex-cover-small-chains-for-the-two-arc-cover-of-a-circle]: ex-cover-small-chains-for-the-two-arc-cover-of-a-circle is high risk and lacks a complete Alpha risk_review",
      "named_ids": [
        "thm-the-tensor-product-in-a-multitensor-category-is-biexact",
        "thm-dualization-in-a-multitensor-category-is-exact",
        "thm-images-commute-with-tensor-products-in-a-multitensor-category",
        "thm-tensoring-with-a-dualizable-object-preserves-projectives",
        "cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple",
        "thm-the-unit-object-of-a-multitensor-category-is-semisimple",
        "thm-the-unit-object-of-a-tensor-category-is-simple",
        "cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects",
        "thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful",
        "thm-the-grothendieck-ring-multiplication-is-well-defined",
        "thm-duality-induces-an-anti-involution-on-the-grothendieck-ring",
        "thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category",
        "fs-every-finite-k-linear-abelian-category-is-semisimple",
        "fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category",
        "fs-a-tensor-functor-is-just-a-strong-monoidal-functor",
        "fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative",
        "fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure",
        "ex-finite-dimensional-vector-spaces-form-a-fusion-category",
        "ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces",
        "ex-a-matrix-multifusion-category-with-nonsimple-unit",
        "ex-fusion-rules-for-a-supplied-finite-simple-family",
        "lem-singular-boundary-descends-to-relative-chains",
        "prop-relative-homology-is-functorial-for-maps-of-pairs",
        "prop-relative-homology-of-the-empty-and-total-subspace",
        "thm-long-exact-sequence-of-a-pair-in-singular-homology",
        "lem-the-relative-connecting-map-is-independent-of-lift-and-representative",
        "thm-naturality-of-the-long-exact-sequence-of-a-pair",
        "thm-barycentric-subdivision-is-a-chain-map",
        "thm-barycentric-subdivision-is-chain-homotopic-to-the-identity",
        "lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero",
        "lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision",
        "thm-cover-small-singular-chains-compute-singular-homology",
        "thm-cover-small-inclusion-is-a-chain-homotopy-equivalence",
        "thm-excision-for-singular-homology",
        "cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient",
        "lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes",
        "thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence",
        "thm-mayer-vietoris-sequence-in-singular-homology",
        "lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition",
        "thm-naturality-of-singular-mayer-vietoris",
        "thm-simplicial-and-singular-homology-agree-for-simplicial-complexes",
        "cor-homology-of-spheres",
        "cor-suspension-isomorphism-in-reduced-singular-homology",
        "ex-relative-homology-of-a-disk-and-its-boundary",
        "ex-relative-homology-of-an-interval-and-its-endpoints",
        "ex-first-barycentric-subdivision-of-a-triangle",
        "ex-cover-small-chains-for-the-two-arc-cover-of-a-circle",
        "ex-mayer-vietoris-computation-of-sphere-homology",
        "ex-mayer-vietoris-computation-of-the-torus-first-homology",
        "cex-excision-fails-without-the-closure-inside-interior-hypothesis",
        "cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small",
        "cex-relative-homology-is-not-the-homology-of-the-set-difference",
        "lem-riemannian-gradient-vanishes-exactly-at-critical-points",
        "lem-negative-gradient-energy-identity",
        "cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function",
        "prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold",
        "lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant",
        "lem-a-limit-point-of-a-gradient-trajectory-is-critical",
        "lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits",
        "lem-morse-trajectories-have-positive-energy-drop",
        "thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point",
        "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces",
        "lem-stable-and-unstable-manifolds-are-flow-invariant",
        "cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits",
        "prop-proper-morse-slabs-give-complete-connecting-trajectories",
        "ex-negative-gradient-lines-for-a-quadratic-morse-function",
        "ex-meridian-trajectories-for-height-on-the-sphere",
        "ex-gradient-flow-on-the-torus-morse-function",
        "cex-positive-gradient-reverses-stable-and-unstable-dimensions",
        "cex-an-incomplete-gradient-flow-on-a-noncompact-manifold"
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
      "id": "thm-the-tensor-product-in-a-multitensor-category-is-biexact",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-dualization-in-a-multitensor-category-is-exact",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-images-commute-with-tensor-products-in-a-multitensor-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-tensoring-with-a-dualizable-object-preserves-projectives",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-the-unit-object-of-a-multitensor-category-is-semisimple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-the-unit-object-of-a-tensor-category-is-simple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-the-grothendieck-ring-multiplication-is-well-defined",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-duality-induces-an-anti-involution-on-the-grothendieck-ring",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-every-finite-k-linear-abelian-category-is-semisimple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-a-tensor-functor-is-just-a-strong-monoidal-functor",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-finite-dimensional-vector-spaces-form-a-fusion-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-matrix-multifusion-category-with-nonsimple-unit",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-fusion-rules-for-a-supplied-finite-simple-family",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-singular-boundary-descends-to-relative-chains",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-relative-homology-is-functorial-for-maps-of-pairs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-relative-homology-of-the-empty-and-total-subspace",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-long-exact-sequence-of-a-pair-in-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-the-relative-connecting-map-is-independent-of-lift-and-representative",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-naturality-of-the-long-exact-sequence-of-a-pair",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-barycentric-subdivision-is-a-chain-map",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-barycentric-subdivision-is-chain-homotopic-to-the-identity",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-cover-small-singular-chains-compute-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-cover-small-inclusion-is-a-chain-homotopy-equivalence",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-excision-for-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-mayer-vietoris-sequence-in-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-naturality-of-singular-mayer-vietoris",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-simplicial-and-singular-homology-agree-for-simplicial-complexes",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-homology-of-spheres",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-suspension-isomorphism-in-reduced-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-relative-homology-of-a-disk-and-its-boundary",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-relative-homology-of-an-interval-and-its-endpoints",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-first-barycentric-subdivision-of-a-triangle",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-cover-small-chains-for-the-two-arc-cover-of-a-circle",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-mayer-vietoris-computation-of-sphere-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-mayer-vietoris-computation-of-the-torus-first-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-excision-fails-without-the-closure-inside-interior-hypothesis",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-relative-homology-is-not-the-homology-of-the-set-difference",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-riemannian-gradient-vanishes-exactly-at-critical-points",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-negative-gradient-energy-identity",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-limit-point-of-a-gradient-trajectory-is-critical",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-morse-trajectories-have-positive-energy-drop",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-stable-and-unstable-manifolds-are-flow-invariant",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-proper-morse-slabs-give-complete-connecting-trajectories",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-negative-gradient-lines-for-a-quadratic-morse-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-meridian-trajectories-for-height-on-the-sphere",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-gradient-flow-on-the-torus-morse-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-positive-gradient-reverses-stable-and-unstable-dimensions",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-an-incomplete-gradient-flow-on-a-noncompact-manifold",
      "scope": "run",
      "owner": "g"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-the-tensor-product-in-a-multitensor-category-is-biexact",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-dualization-in-a-multitensor-category-is-exact",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-images-commute-with-tensor-products-in-a-multitensor-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-tensoring-with-a-dualizable-object-preserves-projectives",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-the-unit-object-of-a-multitensor-category-is-semisimple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-the-unit-object-of-a-tensor-category-is-simple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-the-grothendieck-ring-multiplication-is-well-defined",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-duality-induces-an-anti-involution-on-the-grothendieck-ring",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-every-finite-k-linear-abelian-category-is-semisimple",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-a-tensor-functor-is-just-a-strong-monoidal-functor",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-finite-dimensional-vector-spaces-form-a-fusion-category",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-matrix-multifusion-category-with-nonsimple-unit",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-fusion-rules-for-a-supplied-finite-simple-family",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-singular-boundary-descends-to-relative-chains",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-relative-homology-is-functorial-for-maps-of-pairs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-relative-homology-of-the-empty-and-total-subspace",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-long-exact-sequence-of-a-pair-in-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-the-relative-connecting-map-is-independent-of-lift-and-representative",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-naturality-of-the-long-exact-sequence-of-a-pair",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-barycentric-subdivision-is-a-chain-map",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-barycentric-subdivision-is-chain-homotopic-to-the-identity",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-cover-small-singular-chains-compute-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-cover-small-inclusion-is-a-chain-homotopy-equivalence",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-excision-for-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-mayer-vietoris-sequence-in-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-naturality-of-singular-mayer-vietoris",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-simplicial-and-singular-homology-agree-for-simplicial-complexes",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-homology-of-spheres",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-suspension-isomorphism-in-reduced-singular-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-relative-homology-of-a-disk-and-its-boundary",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-relative-homology-of-an-interval-and-its-endpoints",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-first-barycentric-subdivision-of-a-triangle",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-cover-small-chains-for-the-two-arc-cover-of-a-circle",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-mayer-vietoris-computation-of-sphere-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-mayer-vietoris-computation-of-the-torus-first-homology",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-excision-fails-without-the-closure-inside-interior-hypothesis",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-relative-homology-is-not-the-homology-of-the-set-difference",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-riemannian-gradient-vanishes-exactly-at-critical-points",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-negative-gradient-energy-identity",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-limit-point-of-a-gradient-trajectory-is-critical",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-morse-trajectories-have-positive-energy-drop",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-stable-and-unstable-manifolds-are-flow-invariant",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-proper-morse-slabs-give-complete-connecting-trajectories",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-negative-gradient-lines-for-a-quadratic-morse-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-meridian-trajectories-for-height-on-the-sphere",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-gradient-flow-on-the-torus-morse-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-positive-gradient-reverses-stable-and-unstable-dimensions",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-an-incomplete-gradient-flow-on-a-noncompact-manifold",
      "scope": "run",
      "owner": "g"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **g**, run `frontier-31a`

You are the group Alpha for batches **7**, **12**, **20**: 3 A/B pair(s), 6 page(s), 97 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 7 | `tensor-and-fusion-categories` | A | category-theory | 365.035 | `enriched-categories-examples` |
| 7 | `tensor-and-fusion-categories-examples` | B | category-theory | 365.036 | `tensor-and-fusion-categories` |
| 12 | `relative-homology-excision-and-mayer-vietoris` | A | algebraic-topology | 366.005 | `singular-chains-and-singular-homology-examples` |
| 12 | `relative-homology-excision-and-mayer-vietoris-examples` | B | algebraic-topology | 366.006 | `relative-homology-excision-and-mayer-vietoris` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories` | A | differential-topology | 521 | `morse-functions-critical-values-and-genericity-examples` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories-examples` | B | differential-topology | 522 | `gradient-like-vector-fields-and-morse-trajectories` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tensor-and-fusion-categories` — Tensor and Fusion Categories (29 item(s))

- `def-k-linear-category-and-k-linear-functor` · definition — k-linear categories and k-linear functors
- `def-locally-finite-k-linear-abelian-category` · definition — Locally finite k-linear abelian categories
- `def-finite-k-linear-abelian-category` · definition — Finite k-linear abelian categories
- `def-semisimple-object-and-semisimple-abelian-category` · definition — Semisimple objects and semisimple abelian categories
- `def-tensor-and-multitensor-category` · definition — Tensor and multitensor categories
- `def-fusion-and-multifusion-category` · definition — Fusion and multifusion categories
- `rem-tensor-category-terminology-is-source-dependent` · remark — Tensor-category terminology follows the EGNO convention
- `thm-the-tensor-product-in-a-multitensor-category-is-biexact` · theorem — Tensor product in a multitensor category is biexact
- `thm-dualization-in-a-multitensor-category-is-exact` · theorem — Dualization in a multitensor category is exact
- `thm-images-commute-with-tensor-products-in-a-multitensor-category` · theorem — Images commute with tensor products in a multitensor category
- `thm-tensoring-with-a-dualizable-object-preserves-projectives` · theorem — Tensoring with a dualizable object preserves projectives
- `cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple` · corollary — The unit is projective exactly when the tensor category is semisimple
- `thm-the-unit-object-of-a-multitensor-category-is-semisimple` · theorem — The unit object of a multitensor category is semisimple
- `thm-the-unit-object-of-a-tensor-category-is-simple` · theorem — The unit object of a tensor category is simple
- `cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects` · corollary — Evaluation is epic and coevaluation monic for nonzero objects
- `def-tensor-functor-between-tensor-categories` · definition — Tensor functors between tensor categories
- `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` · theorem — An exact k-linear strong monoidal functor out of a tensor category is faithful
- `def-grothendieck-ring-of-a-tensor-category` · definition — The Grothendieck ring of a tensor category
- `thm-the-grothendieck-ring-multiplication-is-well-defined` · theorem — Grothendieck-ring multiplication is well-defined
- `def-fusion-rules` · definition — Fusion rules
- `thm-duality-induces-an-anti-involution-on-the-grothendieck-ring` · theorem — Duality induces an anti-involution on the Grothendieck ring
- `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` · theorem — Left and right dual objects are isomorphic in a semisimple multitensor category
- `rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure` · remark — Objectwise double-dual isomorphisms do not supply a pivotal structure
- `rem-the-boundary-of-the-fusion-category-development` · remark — The boundary of this fusion-category development
- `fs-every-finite-k-linear-abelian-category-is-semisimple` · false-statement — Every finite k-linear abelian category is semisimple
- `fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category` · false-statement — Every rigid k-linear abelian monoidal category is a tensor category
- `fs-a-tensor-functor-is-just-a-strong-monoidal-functor` · false-statement — A tensor functor is just a strong monoidal functor
- `fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative` · false-statement — The Grothendieck ring of a tensor category is always commutative
- `fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure` · false-statement — Objectwise isomorphisms X isomorphic to its double dual supply a pivotal structure

### `tensor-and-fusion-categories-examples` — Tensor and Fusion Categories — Examples (4 item(s))

- `ex-finite-dimensional-vector-spaces-form-a-fusion-category` · example — Finite-dimensional vector spaces form a fusion category
- `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` · example — The Grothendieck ring of finite-dimensional vector spaces
- `ex-a-matrix-multifusion-category-with-nonsimple-unit` · example — A matrix multifusion category with nonsimple unit
- `ex-fusion-rules-for-a-supplied-finite-simple-family` · example — Fusion rules for a supplied finite simple family

### `relative-homology-excision-and-mayer-vietoris` — Relative Homology Excision and Mayer Vietoris (30 item(s))

- `def-singular-chain-complex-of-a-pair` · definition — Relative singular chain complex
- `lem-singular-boundary-descends-to-relative-chains` · lemma — Boundary on relative chains
- `def-relative-singular-homology` · definition — Relative singular homology
- `prop-relative-homology-is-functorial-for-maps-of-pairs` · proposition — Functoriality of relative homology
- `prop-relative-homology-of-the-empty-and-total-subspace` · proposition — Relative homology for the empty and total subspace
- `thm-long-exact-sequence-of-a-pair-in-singular-homology` · theorem — Long exact sequence of a pair
- `def-relative-homology-connecting-homomorphism-on-cycles` · definition — Relative connecting homomorphism on cycles
- `lem-the-relative-connecting-map-is-independent-of-lift-and-representative` · lemma — Well-definedness of the relative connector
- `thm-naturality-of-the-long-exact-sequence-of-a-pair` · theorem — Naturality of the pair long exact sequence
- `def-barycenter-and-affine-cone-on-a-singular-chain` · definition — Barycenter and affine cone
- `def-barycentric-subdivision-chain-operator` · definition — Barycentric subdivision operator
- `thm-barycentric-subdivision-is-a-chain-map` · theorem — Barycentric subdivision is a chain map
- `def-barycentric-subdivision-prism-homotopy` · definition — Subdivision prism homotopy
- `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` · theorem — Subdivision is chain homotopic to the identity
- `lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero` · lemma — Mesh tends to zero under iterated subdivision
- `def-cover-small-singular-chain-subcomplex` · definition — Cover-small singular chains
- `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` · lemma — Finite chains eventually become cover-small
- `thm-cover-small-singular-chains-compute-singular-homology` · theorem — Cover-small chains compute singular homology
- `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` · theorem — The cover-small inclusion is a chain-homotopy equivalence
- `thm-excision-for-singular-homology` · theorem — Excision for singular homology
- `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` · corollary — Good pairs and quotient reduced homology
- `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` · lemma — Cover-small chains for a two-open cover
- `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence` · theorem — Short exact chain Mayer–Vietoris sequence
- `thm-mayer-vietoris-sequence-in-singular-homology` · theorem — Mayer–Vietoris sequence in singular homology
- `def-mayer-vietoris-connecting-class` · definition — Mayer–Vietoris connecting class
- `lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition` · lemma — Well-definedness of the Mayer–Vietoris connector
- `thm-naturality-of-singular-mayer-vietoris` · theorem — Naturality of singular Mayer–Vietoris
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` · theorem — Simplicial and singular homology agree
- `cor-homology-of-spheres` · corollary — Homology of spheres
- `cor-suspension-isomorphism-in-reduced-singular-homology` · corollary — Suspension isomorphism in reduced singular homology

### `relative-homology-excision-and-mayer-vietoris-examples` — Relative Homology Excision and Mayer Vietoris — Examples (9 item(s))

- `ex-relative-homology-of-a-disk-and-its-boundary` · example — Relative homology of a disk and its boundary
- `ex-relative-homology-of-an-interval-and-its-endpoints` · example — Relative homology of an interval and its endpoints
- `ex-first-barycentric-subdivision-of-a-triangle` · example — First barycentric subdivision of a triangle
- `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` · example — Cover-small chains for a two-arc cover of a circle
- `ex-mayer-vietoris-computation-of-sphere-homology` · example — Mayer–Vietoris computation of sphere homology
- `ex-mayer-vietoris-computation-of-the-torus-first-homology` · example — Mayer–Vietoris computation of first homology of the torus
- `cex-excision-fails-without-the-closure-inside-interior-hypothesis` · counterexample — Excision fails without closure inside interior
- `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` · counterexample — No uniform subdivision depth for all singular simplices
- `cex-relative-homology-is-not-the-homology-of-the-set-difference` · counterexample — Relative homology is not homology of the set difference

### `gradient-like-vector-fields-and-morse-trajectories` — Gradient Like Vector Fields and Morse Trajectories (20 item(s))

- `def-riemannian-gradient-of-a-smooth-function` · definition — The Riemannian gradient is the metric dual of the differential
- `lem-riemannian-gradient-vanishes-exactly-at-critical-points` · lemma — The Riemannian gradient vanishes exactly at the critical points
- `def-negative-gradient-trajectory-of-a-morse-function` · definition — Negative-gradient trajectories of a Morse function
- `lem-negative-gradient-energy-identity` · lemma — A negative-gradient trajectory satisfies the energy identity
- `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` · corollary — Nonconstant negative-gradient trajectories strictly decrease the function
- `def-downward-gradient-like-vector-field` · definition — Downward gradient-like vector fields for a Morse function
- `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` · proposition — Every Morse function admits a complete downward gradient-like field on a closed manifold
- `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` · lemma — Precompact trajectory tails have nonempty compact connected flow-invariant limit sets
- `lem-a-limit-point-of-a-gradient-trajectory-is-critical` · lemma — Every precompact end-limit point of a negative-gradient trajectory is critical
- `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` · lemma — A negative-gradient trajectory on a compact Morse manifold has single critical alpha and omega limits
- `def-morse-trajectory-from-p-to-q` · definition — A Morse trajectory from one critical point to another
- `lem-morse-trajectories-have-positive-energy-drop` · lemma — Morse trajectories have a positive energy drop
- `def-stable-and-unstable-sets-of-a-critical-point` · definition — Stable and unstable sets of a critical point
- `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` · theorem — Local stable and unstable manifolds at a Morse critical point
- `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` · theorem — Global stable and unstable manifolds are immersed Euclidean spaces
- `lem-stable-and-unstable-manifolds-are-flow-invariant` · lemma — Stable and unstable manifolds are flow invariant
- `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` · corollary — A downward gradient flow has no nonconstant periodic or recurrent orbit
- `def-proper-smooth-function-and-compact-morse-slab` · definition — Proper smooth functions and compact Morse slabs
- `prop-proper-morse-slabs-give-complete-connecting-trajectories` · proposition — Proper Morse slabs prevent finite-time escape of connecting trajectories
- `rem-noncompact-flow-completeness-is-an-extra-hypothesis` · remark — Completeness of a gradient flow is an extra hypothesis on a noncompact manifold

### `gradient-like-vector-fields-and-morse-trajectories-examples` — Gradient Like Vector Fields and Morse Trajectories — Examples (5 item(s))

- `ex-negative-gradient-lines-for-a-quadratic-morse-function` · example — Negative-gradient lines for a quadratic Morse function
- `ex-meridian-trajectories-for-height-on-the-sphere` · example — Meridian trajectories for height on the sphere
- `ex-gradient-flow-on-the-torus-morse-function` · example — Gradient flow for a Morse function on the flat torus
- `cex-positive-gradient-reverses-stable-and-unstable-dimensions` · counterexample — Using the positive gradient reverses the stable and unstable dimensions
- `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` · counterexample — A gradient flow on a noncompact manifold can be incomplete

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

5 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-93b925f4c1ffce51fe33418e · `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful`** (from group g, would-be-fatal) — The stated target is an arbitrary multitensor category, but def-tensor-and-multitensor-category does not require a nonzero unit, and the published def-category explicitly permits the empty category. The zero k-linear abelian rigid monoidal category satisfies the local definition of multitensor category; the zero functor from a tensor category to it is exact, k-linear, and strong monoidal, but is not faithful. Step 1.1 assumes without a stated premise that the target unit is nonzero.
- **s8a-76e67cbce18449dc106b5592 · `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category`** (from group g, would-be-fatal) — The local setup defines k only as a field. Its cited EGNO result occurs under the source section's algebraically closed-field assumption, while the proof's step 2.1 invokes equality of the two Hom-space dimensions from semisimplicity without a local result establishing that equality over an arbitrary k. Adjudicate whether the claimed generality is valid or the field hypothesis is required.
- **s8a-bef3f6664e848ad42bdaec3b · `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`** (from group g, would-be-fatal) — Neither this item nor any item in the corpus defines the decisive hypothesis 'good pair'. Thus the exact deformation-neighborhood condition needed for the quotient theorem is not stated or linked, so the claim's domain is indeterminate.
- **s8a-9572fde0899aae1f37932e53 · `cor-suspension-isomorphism-in-reduced-singular-homology`** (from group g, would-be-fatal) — Neither this item nor any corpus item defines 'based well-pointed space'. The qualifier is used to support the cone-neighborhood Mayer-Vietoris argument, but its exact condition is absent.
- **s8a-7a16928d2f2e586234d0b01d · `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`** (from group g, gap-a-reader-closes) — The cited flow theorem supplies only a maximal local flow. The conclusion says the limit set is invariant under every Phi_s, and step 3 applies both s and -s, but it does not establish that Phi_s is defined for all real s at every point of the compact limit set. A compact-set extension argument can likely close this, but it is not supplied.

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
