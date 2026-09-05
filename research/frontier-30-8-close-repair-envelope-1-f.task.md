# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-30",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": "f",
  "failures": [
    {
      "id": "splice-verify",
      "stage": "8-close",
      "why": "A licensed in-flight change is applied with: splice-plan --run <run> --batch <i> --update",
      "output": "splice-plan: 8 page(s) where the plan and the batch manifest disagree\n  delta-functors-and-universality (frontier-30-batch-10.pages.json): same ids, 4 item object(s) changed (lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts, thm-right-derived-functors-form-a-cohomological-delta-functor, lem-extend-a-degree-zero-transformation-through-one-dimension-shift, …) — re-splice to propagate\n  delta-functors-and-universality-examples (frontier-30-batch-10.pages.json): same ids, 1 item object(s) changed (ex-two-universal-delta-functors-and-their-unique-isomorphism) — re-splice to propagate\n  singular-chains-and-singular-homology (frontier-30-batch-11.pages.json): same ids, 1 item object(s) changed (lem-singular-chain-cross-product-boundary-formula) — re-splice to propagate\n  distributions-integral-manifolds-and-the-frobenius-theorem (frontier-30-batch-15.pages.json): same ids, 3 item object(s) changed (thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds, prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution, fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold) — re-splice to propagate\n  differentiation-of-monotone-functions-and-the-vitali-covering-theorem (frontier-30-batch-3.pages.json): same ids, 3 item object(s) changed (thm-riesz-rising-sun-lemma, thm-increasing-functions-split-uniquely-as-jump-plus-continuous, fs-bounded-variation-implies-absolute-continuity) — re-splice to propagate\n  fejer-and-poisson-summability-of-fourier-series (frontier-30-batch-6.pages.json): same ids, 1 item object(s) changed (thm-gibbs-overshoot-at-a-piecewise-c-one-jump) — re-splice to propagate\n  partial-differential-equations-and-characteristics (frontier-30-batch-7.pages.json): same ids, 3 item object(s) changed (thm-homogeneous-linear-transport-by-the-flow, thm-inhomogeneous-linear-transport-formula, thm-local-linear-transport-cauchy-problem) — re-splice to propagate\n  enriched-categories (frontier-30-batch-9.pages.json): same ids, 2 item object(s) changed (thm-strong-enriched-yoneda-lemma-as-a-particular-end, thm-conical-limits-do-not-suffice-in-the-enriched-setting) — re-splice to propagate\nA licensed in-flight change is applied with: splice-plan --run <run> --batch <i> --update\n",
      "named_ids": []
    },
    {
      "id": "proof-contract",
      "stage": "8-close",
      "why": "ERROR citation-quote-mismatch [thm-enriched-categories-functors-and-natural-transformations-form-a-two-category]: L1 quote does not occur in def-enriched-category's Definition",
      "output": "proof-contract: 14 error(s), 1 warning(s), 527/527 item(s) checked\nERROR citation-quote-mismatch [thm-enriched-categories-functors-and-natural-transformations-form-a-two-category]: L1 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs]: L1 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category]: L3 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category]: L1 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set]: L2 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [cor-the-enriched-yoneda-embedding-is-fully-faithful]: L2 quote does not occur in thm-strong-enriched-yoneda-lemma-as-a-particular-end's Statement\nERROR citation-quote-mismatch [thm-the-free-enriched-category-two-adjunction]: L2 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-there-is-in-general-no-constant-enriched-functor]: L3 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-enriched-completeness-is-cotensors-plus-small-conical-limits]: L3 quote does not occur in def-enriched-weighted-limit's Definition\nERROR citation-quote-mismatch [thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories]: L2 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [thm-a-right-enriched-adjoint-preserves-weighted-limits]: L2 quote does not occur in def-enriched-weighted-limit's Definition\nERROR citation-quote-mismatch [ex-a-metric-space-as-an-enriched-category]: L2 quote does not occur in def-enriched-category's Definition\nERROR citation-quote-mismatch [fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category]: L1 quote does not occur in thm-strong-enriched-yoneda-lemma-as-a-particular-end's Statement\nERROR citation-quote-mismatch [fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category]: L2 quote does not occur in rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims's Remark\nWARN shotgun-bracket [lem-clopen-subset-gives-idempotent-decomposition]: 1.1 cites 4 of 5 declared facts while 4 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "thm-enriched-categories-functors-and-natural-transformations-form-a-two-category",
        "thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs",
        "thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category",
        "thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category",
        "thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set",
        "cor-the-enriched-yoneda-embedding-is-fully-faithful",
        "thm-the-free-enriched-category-two-adjunction",
        "thm-there-is-in-general-no-constant-enriched-functor",
        "thm-enriched-completeness-is-cotensors-plus-small-conical-limits",
        "thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories",
        "thm-a-right-enriched-adjoint-preserves-weighted-limits",
        "ex-a-metric-space-as-an-enriched-category",
        "fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category",
        "lem-clopen-subset-gives-idempotent-decomposition"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-close",
      "why": "ERROR risk-review-missing [fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold]: fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold is critical risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 3 [lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers] 3:biconditional / both-direction claim\nORDINARY 2 [lem-teichmuller-lift-is-multiplicative-and-unique] 2:boundary-sensitive language\nORDINARY 1 [lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation] 1:2 cited facts\nORDINARY 1 [prop-brauer-characters-are-class-functions-on-p-regular-elements] 1:2 cited facts\nMODERATE 3 [thm-brauer-character-is-additive-on-short-exact-sequences] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-brauer-nesbitt-module-determination] 1:2 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 0 [cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes] no signals\nORDINARY 0 [thm-decomposition-map-is-independent-of-the-stable-lattice] no signals\nORDINARY 0 [lem-decomposition-numbers-are-nonnegative-integers] no signals\nHIGH 6 [thm-brauer-reciprocity] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [thm-cartan-matrix-is-d-transpose-d] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-blocks-partition-ordinary-and-brauer-irreducible-characters] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-decomposition-matrix-is-block-diagonal-after-block-ordering] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace] no signals\nORDINARY 0 [fs-modular-representations-are-determined-by-ordinary-characters] no signals\nMODERATE 3 [fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-the-cartan-matrix-equals-the-decomposition-matrix] no signals\nMODERATE 3 [fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-brauer-characters-of-a-p-group] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [ex-p-regular-classes-of-s-three] 1:2 cited facts\nORDINARY 1 [ex-decomposition-matrix-of-s-three-in-characteristic-two] 1:3 cited facts\nORDINARY 1 [ex-cartan-matrix-from-d-transpose-d] 1:2 cited facts\nORDINARY 2 [ex-a-block-with-one-ordinary-and-one-brauer-character] 2:boundary-sensitive language\nORDINARY 1 [cex-ordinary-trace-on-a-p-singular-unipotent-element] 1:2 cited facts\nORDINARY 2 [lem-normalized-two-cocycles-and-coboundaries-form-groups] 2:boundary-sensitive language\nCRITICAL 9 [thm-factor-set-model-agrees-with-derived-second-group-cohomology] 1:2 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-factor-set-of-a-section-is-a-normalized-two-cocycle] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-changing-the-section-changes-the-factor-set-by-a-coboundary] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-an-extension-determines-a-well-defined-h-two-class] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 11 [lem-cohomologous-two-cocycles-give-equivalent-extensions] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action] 1:2 cited facts\nHIGH 6 [cor-zero-h-two-class-is-equivalent-to-splitting] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [lem-baer-sum-is-independent-of-extension-representatives] 2:quotient or equivalence-class construction\nORDINARY 1 [thm-baer-sum-agrees-with-addition-in-h-two] 1:3 cited facts\nHIGH 5 [cor-central-extensions-are-classified-by-h-two-with-trivial-action] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-five-term-exact-sequence-as-extension-and-transgression-data] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-every-function-g-times-g-to-m-is-a-factor-set] 2:boundary-sensitive language\nORDINARY 2 [fs-the-factor-set-is-independent-of-the-section-as-a-function] 2:boundary-sensitive language\nMODERATE 3 [fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic] 2:quotient or equivalence-class construction\nORDINARY 2 [fs-the-zero-h-two-class-corresponds-to-the-direct-product-only] 2:boundary-sensitive language\nHIGH 5 [ex-the-cp-squared-extension-as-a-nonzero-two-cocycle] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-split-extension-as-the-zero-cocycle] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-central-extensions-of-a-cyclic-group] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-the-quaternion-and-dihedral-central-extension-classes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-changing-a-section-by-a-one-cochain] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-baer-sum-of-two-factor-sets] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-same-middle-group-with-inequivalent-extension-maps] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-zariski-closed-set-axioms] 2:boundary-sensitive language\nMODERATE 3 [lem-every-zariski-closed-set-has-a-radical-defining-ideal] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [lem-distinguished-opens-cover-every-open] no signals\nORDINARY 2 [lem-distinguished-open-refinement-at-a-point] 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [cor-spectrum-is-a-contravariant-topological-functor] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-quotient-spectrum-map-is-closed] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-localisation-spectrum-map-homeomorphism-onto-image] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [cor-principal-localisation-spectrum-is-distinguished-open] 1:2 cited facts\nMODERATE 4 [lem-spectrum-compactness-open-cover-to-unit-ideal] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-spectrum-compactness-unit-expression-finite-subcover] 2:boundary-sensitive language\nCRITICAL 8 [thm-prime-spectrum-is-compact] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cor-every-distinguished-open-is-compact] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [lem-closure-of-a-point-is-its-vanishing-set] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [cor-specialisation-order-is-prime-inclusion] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-spectrum-is-t-zero] 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [cor-closed-points-of-spectrum-are-maximal-ideals] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 9 [thm-irreducible-closed-subsets-and-prime-ideals] 3:7 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [thm-irreducible-components-and-minimal-primes] 2:4 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nMODERATE 3 [thm-noetherian-ring-has-noetherian-spectrum] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [cor-noetherian-spectrum-has-finitely-many-irreducible-components] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nCRITICAL 9 [lem-clopen-subset-gives-idempotent-decomposition] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-idempotent-gives-clopen-spectrum-partition] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [cor-spectrum-connected-iff-no-nontrivial-idempotents] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-support-is-specialisation-closed] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 8 [cor-closed-points-dense-in-affine-spectra] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-distinguished-open-finite-subcover-from-unit-expression] 2:boundary-sensitive language\nMODERATE 3 [ex-zariski-spectrum-of-the-integers] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-zariski-spectrum-not-hausdorff] 1:2 cited facts\nHIGH 5 [ex-specialisation-poset-of-a-small-spectrum] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [ex-idempotent-clopen-product-ring] no signals\nHIGH 6 [ex-nonclosed-support-without-finiteness] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nCRITICAL 13 [thm-dini-derivatives-exist-are-ordered-and-detect-differentiability] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [thm-riesz-rising-sun-lemma] 2:4 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 5 [thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun] 3:8 declared dependencies; 2:boundary-sensitive language\nHIGH 7 [thm-increasing-functions-split-uniquely-as-jump-plus-continuous] 2:5 declared dependencies; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-jump-functions-have-derivative-zero-almost-everywhere] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun] 2:6 declared dependencies; 2:boundary-sensitive language\nHIGH 7 [thm-vitali-covering-theorem-for-fine-covers-on-the-line] 3:8 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-mini-vitali-fine-cover-characterisation-of-null-sets] 3:7 declared dependencies; 2:boundary-sensitive language\nHIGH 7 [thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures] 3:12 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase] 3:10 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous] 3:10 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [thm-bv-functions-are-differentiable-almost-everywhere] no signals\nMODERATE 4 [thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions] 2:5 declared dependencies; 2:analytic limiting/completeness language\nORDINARY 0 [fs-every-continuous-function-is-differentiable-almost-everywhere] no signals\nHIGH 6 [fs-every-increasing-function-satisfies-newton-leibniz] 2:5 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-vitali-covering-theorem-holds-for-arbitrary-covers] 2:boundary-sensitive language\nMODERATE 4 [fs-zero-derivative-almost-everywhere-implies-constancy] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 5 [fs-bounded-variation-implies-absolute-continuity] 3:9 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points] 2:5 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one] 2:6 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values] 2:4 declared dependencies\nMODERATE 4 [ex-jump-and-continuous-parts-of-x-plus-rational-jumps] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-vitali-covering-theorem-needs-a-fine-cover] 2:boundary-sensitive language\nORDINARY 2 [ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere] 2:boundary-sensitive language\nCRITICAL 8 [lem-hahn-banach-one-step-extension] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [lem-union-of-a-chain-of-dominated-extensions] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-hahn-banach-dominated-extension] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-hahn-banach-norm-preserving-extension] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [lem-real-part-determines-a-complex-linear-functional] 1:2 cited facts\nHIGH 5 [thm-complex-hahn-banach-norm-preserving-extension] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [thm-dual-norms-every-vector] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [cor-dual-separates-points] 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [cor-norm-recovered-from-the-dual-unit-ball] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-norm-preserving-extension-from-any-subspace] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [ex-norming-functionals-in-lp-from-the-measure-duality-page] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-many-extensions-from-a-codimension-one-subspace] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [ex-banach-limit-from-hahn-banach] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-banach-limit-properties] 2:4 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-hahn-banach-extension-need-not-be-unique] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-independent-families-pass-to-subfamilies] 2:boundary-sensitive language\nHIGH 5 [lem-independent-events-remain-independent-under-complements] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nORDINARY 1 [thm-pi-system-criterion-for-independent-sigma-algebras] 1:2 cited facts\nORDINARY 1 [thm-grouping-independent-sigma-algebras] 1:2 cited facts\nORDINARY 1 [thm-rectangle-criterion-for-independent-random-elements] 1:2 cited facts\nMODERATE 4 [cor-finite-random-variable-independence-agreement] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [lem-measurable-functions-preserve-independence] 1:2 cited facts\nMODERATE 4 [thm-independent-random-elements-have-product-joint-law] 2:5 declared dependencies; 2:5 cited facts\nHIGH 7 [thm-factorization-of-expectations-for-independent-variables] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-covariance-vanishes-under-independence] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-first-borel-cantelli-lemma-for-events] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [thm-pairwise-independent-borel-cantelli-frequency-law] 3:8 declared dependencies; 2:8 cited facts; 1:9 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [cor-second-borel-cantelli-lemma-under-pairwise-independence] 1:2 cited facts\nMODERATE 3 [lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-kolmogorov-zero-one-law] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [ex-independent-events-that-are-not-disjoint] 1:2 cited facts\nORDINARY 1 [ex-functions-of-disjoint-independent-coordinate-blocks] 1:3 cited facts\nORDINARY 0 [ex-borel-cantelli-eventually-no-large-deviations] no signals\nMODERATE 4 [ex-zero-one-law-for-convergence-of-a-random-series] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cex-divergent-probability-sum-without-independence] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs] 1:2 cited facts\nMODERATE 4 [lem-fejer-kernel-is-a-positive-approximate-identity] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-fejer-convergence-in-lp] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-fejer-uniform-convergence-for-continuous-periodic-functions] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-fejer-means-converge-at-lebesgue-points] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [thm-cesaro-summability-implies-abel-summability] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-fejer-theorem-for-pointwise-midpoint-values] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-gibbs-overshoot-at-a-piecewise-c-one-jump] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-fejer-means-of-a-single-character] 2:analytic limiting/completeness language\nMODERATE 4 [ex-poisson-integral-of-a-single-character] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-fejer-summation-of-the-square-wave] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-abel-summability-does-not-imply-ordinary-convergence] 2:analytic limiting/completeness language\nMODERATE 3 [lem-principal-symbol-under-a-c-one-coordinate-change] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-characteristic-hypersurface-is-independent-of-defining-function] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-symmetric-principal-part-has-a-signature-normal-form] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-two-variable-constant-coefficient-canonical-principal-forms] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-transport-equation-along-a-characteristic] 1:2 cited facts\nCRITICAL 11 [lem-transport-characteristics-depend-c-one-on-initial-position] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-homogeneous-linear-transport-by-the-flow] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-inhomogeneous-linear-transport-formula] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-local-linear-transport-cauchy-problem] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [cor-support-propagates-along-transport-characteristics] no signals\nORDINARY 0 [ex-constant-velocity-transport] no signals\nORDINARY 2 [ex-transport-with-growth-and-source] 2:analytic limiting/completeness language\nORDINARY 0 [ex-radial-transport-flow] no signals\nHIGH 5 [cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-classification-of-laplace-heat-and-wave-equations] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-canonical-coordinates-for-a-hyperbolic-equation] 1:2 cited facts\nHIGH 5 [ex-tricomi-equation-changes-type] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cex-threefold-classification-is-not-global] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-dirichlet-character-extension-well-defined] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [lem-dirichlet-character-arithmetic-function-characterization] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-dirichlet-character-values] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-dirichlet-character-orthogonality] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-dirichlet-character-residue-class-indicator] 2:quotient or equivalence-class construction\nHIGH 5 [lem-nonprincipal-dirichlet-character-complete-sum] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-nonprincipal-dirichlet-character-partial-sums] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-dirichlet-l-euler-product] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-principal-dirichlet-l-factorization] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-positive-log-dirichlet-series-nonvanishing] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-product-dirichlet-l-nonvanishing-line-one] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-dirichlet-l-nonvanishing-line-one] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-nonreal-dirichlet-l-nonzero-at-one] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [lem-real-dirichlet-l-nonzero-at-one] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [thm-dirichlet-l-nonzero-at-one] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-natural-density-implies-dirichlet-density] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-primes-residue-class-dirichlet-density] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 11 [thm-mertens-primes-arithmetic-progressions] 3:12 declared dependencies; 2:12 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [thm-dirichlet-primes-arithmetic-progressions] 2:quotient or equivalence-class construction\nHIGH 5 [ex-dirichlet-characters-modulo-three-four-and-five] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-dirichlet-characters-modulo-eight-and-twelve] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-dirichlet-character-orthogonality-table] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-principal-dirichlet-l-missing-euler-factors] no signals\nCRITICAL 10 [ex-the-character-chi-four-and-leibniz-series] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [ex-dirichlet-density-of-primes-in-a-small-progression] 2:quotient or equivalence-class construction\nORDINARY 2 [cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion] 2:quotient or equivalence-class construction\nORDINARY 1 [cex-dirichlet-density-does-not-mean-integer-natural-density] 1:3 cited facts\nMODERATE 3 [lem-equivalent-definitions-of-the-hilbert-symbol] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-hilbert-symbol-depends-only-on-square-classes] no signals\nORDINARY 0 [thm-real-hilbert-symbol-formula] no signals\nCRITICAL 9 [thm-odd-p-hilbert-symbol-formula] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-two-adic-hilbert-symbol-formula] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-binary-quadratic-representation-via-hilbert-symbol] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [cor-ternary-isotropy-via-hilbert-symbol] 3:biconditional / both-direction claim\nMODERATE 3 [lem-finite-field-quadratic-isotropy-in-dimension-at-least-three] 2:4 declared dependencies; 1:3 cited facts\nHIGH 5 [thm-local-isotropy-at-almost-all-primes] 2:4 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 7 [thm-hilbert-reciprocity-over-the-rationals] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-ternary-hilbert-one-place-principle] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 14 [thm-hasse-minkowski-for-ternary-forms-over-q] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [lem-global-square-class-approximation] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 13 [thm-hasse-minkowski-over-the-rationals] 3:8 declared dependencies; 2:8 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [ex-hilbert-symbol-over-the-reals] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-hilbert-symbol-at-an-odd-prime] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-two-adic-hilbert-symbol] 2:boundary-sensitive language\nORDINARY 0 [ex-local-obstruction-to-a-rational-conic] no signals\nORDINARY 1 [ex-finite-bad-place-test-for-a-ternary-form] 1:2 cited facts\nORDINARY 2 [ex-hilbert-one-place-principle] 2:boundary-sensitive language\nORDINARY 1 [ex-hasse-minkowski-for-a-quaternary-form] 1:2 cited facts\nHIGH 5 [cex-local-global-fails-for-a-cubic-curve] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cex-rational-isotropy-is-not-integral-representation] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-the-compact-square-form-of-enriched-naturality] 3:biconditional / both-direction claim\nMODERATE 4 [thm-enriched-categories-functors-and-natural-transformations-form-a-two-category] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [thm-the-underlying-category-construction-is-a-two-functor] 1:3 cited facts\nORDINARY 1 [thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs] 1:3 cited facts\nMODERATE 3 [thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-a-closed-monoidal-category-is-enriched-in-itself] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 4 [thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set] 1:2 cited facts; 3:biconditional / both-direction claim\nMODERATE 4 [thm-weak-enriched-yoneda-lemma] 2:5 declared dependencies; 2:5 cited facts\nHIGH 6 [thm-strong-enriched-yoneda-lemma-as-a-particular-end] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [cor-the-enriched-yoneda-embedding-is-fully-faithful] 1:2 cited facts\nMODERATE 3 [cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-free-enriched-category-two-adjunction] 2:5 declared dependencies; 1:3 cited facts\nHIGH 5 [thm-there-is-in-general-no-constant-enriched-functor] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-conical-limits-do-not-suffice-in-the-enriched-setting] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-enriched-completeness-is-cotensors-plus-small-conical-limits] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories] 1:2 cited facts\nORDINARY 1 [thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor] 1:3 cited facts\nORDINARY 1 [cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base] 1:2 cited facts\nHIGH 5 [thm-a-right-enriched-adjoint-preserves-weighted-limits] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [thm-enriched-adjoint-functor-theorem-for-cotensored-categories] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [ex-a-two-category-as-a-cat-enriched-category] no signals\nORDINARY 0 [ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice] no signals\nORDINARY 1 [ex-a-metric-space-as-an-enriched-category] 1:2 cited facts\nMODERATE 3 [ex-a-ring-as-a-one-object-ab-enriched-category] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells] 1:2 cited facts\nORDINARY 1 [ex-a-cotensor-computed-in-sets] 1:2 cited facts\nORDINARY 2 [cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor] 2:boundary-sensitive language\nORDINARY 2 [ex-change-of-base-along-the-underlying-set-functor] 2:boundary-sensitive language\nMODERATE 4 [fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [fs-every-enriched-category-has-constant-enriched-functors] no signals\nORDINARY 0 [fs-the-underlying-ordinary-category-determines-the-enriched-category] no signals\nORDINARY 0 [fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category] no signals\nORDINARY 0 [fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors] no signals\nMODERATE 3 [fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-a-monoidal-category-carries-at-most-one-symmetry] 2:boundary-sensitive language\nMODERATE 4 [lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor] 2:6 declared dependencies; 2:5 cited facts\nMODERATE 4 [lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts] 2:6 declared dependencies; 2:6 cited facts\nHIGH 6 [thm-left-derived-functors-form-a-homological-delta-functor] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-right-derived-functors-form-a-cohomological-delta-functor] 3:9 declared dependencies; 2:9 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors] 3:8 declared dependencies; 2:8 cited facts\nORDINARY 1 [cor-derived-long-exact-sequence] 1:2 cited facts\nHIGH 5 [prop-positive-left-derived-functors-are-effaceable-by-projectives] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-positive-right-derived-functors-are-effaceable-by-injectives] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle] 2:boundary-sensitive language\nORDINARY 2 [lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle] 2:boundary-sensitive language\nCRITICAL 8 [lem-extend-a-degree-zero-transformation-through-one-dimension-shift] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-the-effacement-extension-is-independent-of-the-effacing-morphism] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-the-effacement-extension-commutes-with-connecting-morphisms] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-effaceable-homological-delta-functors-are-universal] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-effaceable-cohomological-delta-functors-are-universal] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [thm-derived-functors-are-universal-delta-functors] 2:6 declared dependencies; 2:6 cited facts\nHIGH 5 [cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-an-exact-base-functor-has-the-trivial-universal-delta-functor] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-satellites-give-the-first-derived-functor] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 6 [fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [fs-effaceability-means-every-positive-value-is-zero] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [fs-universality-removes-the-need-for-supplied-resolution-data] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-homology-as-a-homological-delta-functor] 1:3 cited facts\nORDINARY 2 [ex-the-trivial-delta-functor-of-an-exact-functor] 2:boundary-sensitive language\nMODERATE 3 [ex-one-dimension-shift-along-a-projective-presentation] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-one-dimension-shift-along-an-injective-copresentation] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [ex-extending-a-degree-zero-natural-transformation] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-two-universal-delta-functors-and-their-unique-isomorphism] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-affine-face-maps-satisfy-the-cosimplicial-identities] 2:boundary-sensitive language\nMODERATE 3 [thm-the-singular-boundary-squares-to-zero] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-induced-singular-chain-maps-commute-with-boundaries] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-singular-chains-and-homology-are-covariantly-functorial] 2:4 declared dependencies; 1:3 cited facts\nHIGH 5 [lem-singular-augmentation-commutes-with-boundary] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [prop-zero-th-singular-homology-is-free-on-path-components] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [cor-path-connected-spaces-have-zero-reduced-zero-th-homology] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [prop-singular-homology-of-a-disjoint-union-is-the-direct-sum] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-the-prism-triangulation-has-the-stated-oriented-boundary] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-singular-chain-homotopy-formula] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [cor-homotopic-maps-induce-the-same-map-on-singular-homology] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology] 1:3 cited facts\nHIGH 6 [cor-contractible-nonempty-spaces-have-the-homology-of-a-point] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [prop-singular-homology-is-invariant-under-deformation-retracts] 1:2 cited facts\nHIGH 5 [lem-singular-chain-cross-product-boundary-formula] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [prop-singular-chain-cross-products-are-natural] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [lem-simplicial-to-singular-chains-commute-with-boundaries] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-singular-chain-complex-of-a-point] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-boundaries-of-the-standard-one-and-two-simplices] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-prism-operator-for-a-path-homotopy] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-homology-of-an-interval-from-contractibility] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-homology-of-punctured-euclidean-space-by-deformation-retraction] 1:2 cited facts\nCRITICAL 8 [cex-equal-homology-does-not-imply-homotopy-equivalence] 3:8 declared dependencies; 2:7 cited facts; 1:6 numbered proof steps; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-a-singular-cochain-is-not-a-finite-singular-chain] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-regular-functions-form-sheaf-classical] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-global-regular-functions-affine-variety-coordinate-ring] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [thm-affine-morphisms-coordinate-ring-anti-equivalence] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nORDINARY 1 [cor-affine-algebraic-set-coordinate-duality-complete] 1:2 cited facts\nHIGH 6 [lem-morphism-equality-on-dense-open] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-local-ring-affine-variety-localization] 3:8 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 12 [thm-function-field-independent-affine-open] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [lem-rational-map-equivalence-transitive] 1:3 cited facts\nCRITICAL 9 [lem-dominant-map-pullback-function-fields] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-rational-maps-to-affine-variety-function-field] 3:9 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nMODERATE 4 [thm-birational-equivalence-function-fields] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [lem-direct-image-is-sheaf] 1:3 cited facts\nHIGH 5 [thm-inverse-direct-image-adjunction] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-stalk-inverse-image-sheaf] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 7 [thm-abelian-sheaves-form-abelian-category] 3:7 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-exactness-of-sheaves-stalkwise] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [lem-global-sections-left-exact] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-extension-by-zero-adjunction-exactness] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-local-homomorphism-residue-field-map] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-stalk-tensor-product] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-pullback-pushforward-module-adjunction] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 4 [lem-pullback-modules-right-exact] 2:6 declared dependencies; 2:6 cited facts\nHIGH 5 [thm-gluing-sheaves] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-gluing-ringed-and-locally-ringed-spaces] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-direct-image-open-immersion] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-extension-by-zero-differs-direct-image] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [ex-skyscraper-sheaf-exact-sequence] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [cex-global-sections-not-right-exact] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-ringed-space-continuous-functions] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [cex-ringed-space-map-not-locally-ringed] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-pullback-free-module] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-glue-line-bundle-transition-functions] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-presheaf-cokernel-needs-sheafification] 2:boundary-sensitive language\nHIGH 6 [lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set] 1:2 cited facts; 1:9 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades] 2:6 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 8 [thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property] 3:12 declared dependencies; 2:9 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 9 [lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes] 2:5 declared dependencies; 2:5 cited facts; 1:9 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome] 1:3 cited facts; 1:9 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph] 1:2 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives] 1:3 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem] 1:2 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade] 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [thm-property-star-and-leaf-reducibility-imply-generalized-niceness] 2:6 declared dependencies; 2:4 cited facts; 1:8 numbered proof steps\nORDINARY 2 [ex-the-lemma-three-five-parameter-choice-on-a-large-graph] 2:boundary-sensitive language\nORDINARY 2 [ex-a-complete-four-blockade-gives-a-four-vertex-clique] 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star] 1:2 cited facts\nORDINARY 0 [ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade] no signals\nORDINARY 2 [ex-the-square-root-rescaling-in-lemma-four-four] 2:boundary-sensitive language\nORDINARY 0 [ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one] no signals\nORDINARY 2 [prop-local-frame-characterization-of-a-smooth-distribution] 2:4 declared dependencies\nMODERATE 4 [prop-sections-of-a-distribution-form-a-locally-free-module] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [prop-double-annihilator-recovers-a-finite-rank-distribution] no signals\nORDINARY 2 [prop-integral-manifolds-have-the-distribution-dimension] 2:analytic limiting/completeness language\nMODERATE 4 [prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds] 2:5 declared dependencies; 2:analytic limiting/completeness language\nORDINARY 2 [prop-involutivity-can-be-checked-on-a-local-frame] 2:boundary-sensitive language\nMODERATE 4 [prop-integrable-distributions-are-involutive] 2:6 declared dependencies; 2:analytic limiting/completeness language\nHIGH 6 [lem-involutive-frame-reduction] 2:5 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-commuting-independent-vector-fields-give-a-coordinate-system] 2:4 declared dependencies\nHIGH 7 [thm-frobenius-local-coordinate-theorem] 2:6 declared dependencies; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-frobenius-local-first-integrals] 2:analytic limiting/completeness language\nMODERATE 4 [cor-kernel-of-a-constant-rank-submersion-is-integrable] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-level-set-distributions-are-involutive] 2:4 declared dependencies\nHIGH 6 [lem-integral-manifolds-are-locally-contained-in-plaques] 2:5 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-overlapping-plaques-through-a-point-have-compatible-germs] 2:analytic limiting/completeness language\nORDINARY 0 [lem-tangent-curve-reachability-is-an-equivalence-relation] no signals\nCRITICAL 14 [thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds] 3:16 declared dependencies; 2:12 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [cor-maximal-integral-manifolds-partition-the-manifold] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-regular-foliations-and-integrable-distributions-correspond] 3:7 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution] 2:boundary-sensitive language\nORDINARY 2 [fs-every-smooth-distribution-is-integrable] 2:analytic limiting/completeness language\nMODERATE 4 [fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 12 [fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold] 3:9 declared dependencies; 2:9 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology] no signals\nORDINARY 0 [fs-frobenius-applies-to-any-variable-rank-family-of-subspaces] no signals\nMODERATE 4 [ex-coordinate-plane-distribution-and-its-affine-leaves] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-kernel-of-a-submersion-as-an-integrable-distribution] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-level-set-foliation-of-a-regular-function] 2:boundary-sensitive language\nORDINARY 0 [ex-product-foliation] no signals\nMODERATE 4 [ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [ex-irrational-linear-foliation-of-the-two-torus] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [ex-the-mobius-band-line-foliation] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cex-the-standard-contact-plane-field-is-not-integrable] 2:5 declared dependencies\nORDINARY 0 [cex-a-variable-rank-involutive-family-outside-regular-frobenius] no signals\nHIGH 6 [ex-leaves-of-a-lie-subalgebra-distribution] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra] 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 5 [prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [prop-associated-graded-of-the-pbw-filtration-is-commutative] 2:boundary-sensitive language\nMODERATE 4 [thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-root-space-decomposition-relative-to-a-cartan-subalgebra] 2:boundary-sensitive language\nORDINARY 2 [prop-root-space-brackets-add-their-roots] 2:boundary-sensitive language\nORDINARY 2 [prop-killing-form-pairs-only-opposite-root-spaces] 2:boundary-sensitive language\nORDINARY 2 [prop-opposite-root-spaces-bracket-to-the-killing-dual-line] 2:4 declared dependencies\nORDINARY 2 [thm-triangular-decomposition-from-a-chosen-positive-root-system] 2:boundary-sensitive language\nORDINARY 0 [prop-centralizer-of-a-cartan-element-from-its-vanishing-roots] no signals\nORDINARY 2 [lem-regular-elements-form-a-connected-dense-open-subset] 2:boundary-sensitive language\nORDINARY 0 [thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra] no signals\nHIGH 6 [thm-the-root-set-is-a-reduced-crystallographic-root-system] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-central-action-on-a-cyclic-highest-weight-module-is-scalar] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-the-casimir-element-is-independent-of-dual-bases] no signals\nORDINARY 0 [prop-the-quadratic-casimir-element-is-central] no signals\nHIGH 5 [prop-casimir-eigenvalue-on-a-highest-weight-module] 3:9 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [lem-central-elements-have-weight-zero] 2:boundary-sensitive language\nORDINARY 2 [prop-harish-chandra-projection-is-multiplicative-on-the-center] 2:boundary-sensitive language\nORDINARY 2 [lem-harish-chandra-projection-computes-highest-weight-scalars] 2:boundary-sensitive language\nHIGH 6 [lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [prop-harish-chandra-map-is-injective] 2:boundary-sensitive language\nMODERATE 4 [lem-associated-graded-symbol-of-a-central-element-is-invariant] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [lem-regular-semisimple-elements-form-a-dense-open-subset] 2:5 declared dependencies\nORDINARY 2 [lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction] 2:boundary-sensitive language\nCRITICAL 8 [lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 0 [thm-symmetric-invariants-restrict-to-weyl-invariants] no signals\nHIGH 7 [thm-harish-chandra-isomorphism-for-the-center] 2:6 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-central-characters-are-dot-weyl-orbits] 3:biconditional / both-direction claim\nORDINARY 2 [cor-the-center-is-a-polynomial-algebra-of-rank-many-generators] 2:induction, recursion, or minimality\nORDINARY 2 [thm-enveloping-algebra-is-free-over-its-center] 2:5 declared dependencies\nORDINARY 0 [ex-sl2-casimir-and-its-highest-weight-eigenvalue] no signals\nORDINARY 2 [ex-sl3-harish-chandra-center-generators] 2:boundary-sensitive language\nORDINARY 0 [ex-dot-conjugate-weights-have-the-same-central-character] no signals\nORDINARY 0 [cex-unshifted-weyl-orbits-do-not-classify-central-characters] no signals\nORDINARY 2 [ex-the-zero-weight-singular-central-character] 2:boundary-sensitive language\nORDINARY 2 [cex-a-noninvariant-quadratic-pbw-element-is-not-central] 2:boundary-sensitive language\nMODERATE 3 [lem-induction-image-is-an-ideal-in-the-representation-ring] 1:2 cited facts; 2:induction, recursion, or minimality\nCRITICAL 9 [lem-cyclic-generator-class-functions-by-moebius-inversion] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 1:finite countermodel smoke test selected\nHIGH 7 [lem-artin-cyclic-permutation-relation] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 7 [thm-artin-induction-for-rational-characters] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 12 [cor-cyclic-fixed-points-detect-rational-representations] 3:9 declared dependencies; 2:8 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 7 [cor-rank-of-the-rational-representation-ring] 2:4 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [cor-cyclic-local-integrality-criterion] 2:4 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [ex-artin-induction-for-a-cyclic-group] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [ex-artin-permutation-relation-for-a5] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [ex-cyclic-fixed-point-detection-for-s3] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-rational-valued-character-need-not-be-defined-over-the-rationals] 1:2 cited facts\nCRITICAL 11 [lem-morse-functions-are-transverse-differentials] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-morse-functions-are-dense-by-relative-jet-transversality] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-morse-functions-form-a-residual-subset] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-compact-morse-critical-points-have-uniform-hessian-gaps] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-no-new-critical-points-under-a-compact-c1-small-perturbation] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-morse-functions-are-open-dense-on-a-compact-manifold] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-finitely-many-critical-values-can-be-separated-locally] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 6 [thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-generic-squared-distance-functions-are-morse] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-every-compact-smooth-manifold-admits-an-excellent-morse-function] 1:3 cited facts\nORDINARY 2 [lem-properness-survives-a-controlled-locally-finite-perturbation] 2:analytic limiting/completeness language\nMODERATE 3 [prop-proper-morse-exhaustions-exist-on-smooth-manifolds] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-generic-and-exceptional-height-directions-on-a-torus] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-squared-distance-to-a-circle-and-its-medial-axis] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-separating-equal-critical-values-by-bump-functions] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cex-morse-functions-need-not-have-distinct-critical-values] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity] 2:boundary-sensitive language\nCRITICAL 13 [lem-computation-history-domino-encoding] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-modified-pcp-is-undecidable] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [lem-modified-pcp-reduces-to-pcp] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-post-correspondence-is-undecidable] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [prop-post-correspondence-is-recognizable] no signals\nCRITICAL 8 [thm-cfg-intersection-emptiness-is-undecidable] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-cfg-universality-is-undecidable] 2:6 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-cfg-equivalence-is-undecidable] 1:2 cited facts; 3:biconditional / both-direction claim\nCRITICAL 9 [thm-cfg-ambiguity-is-undecidable] 2:6 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [thm-proper-inclusions-in-the-chomsky-hierarchy] 3:7 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nORDINARY 2 [fs-pcp-allows-symbol-reordering-within-dominoes] 2:boundary-sensitive language\nMODERATE 3 [fs-two-decidable-cfls-have-decidable-intersection-emptiness] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-modified-pcp-is-undecidable] 2:boundary-sensitive language\nHIGH 6 [ex-proper-inclusions-in-the-chomsky-hierarchy] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-pcp-allows-symbol-reordering-within-dominoes] 2:boundary-sensitive language\nHIGH 6 [prop-fixed-machine-coding-is-acceptable] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-smn-parameter-theorem] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nORDINARY 2 [cor-effective-program-specialization] 2:boundary-sensitive language\nMODERATE 4 [lem-self-reference-construction-from-smn] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-kleenes-second-recursion-theorem] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 5 [thm-recursion-theorem-with-parameters] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 5 [thm-nonhalting-is-productive-and-halting-is-creative] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 13 [thm-myhill-isomorphism-theorem-for-creative-sets] 2:4 declared dependencies; 1:3 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [prop-acceptable-numberings-are-computably-intertranslatable] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [fs-recursion-theorem-needs-source-file-access] 1:2 cited facts; 2:induction, recursion, or minimality\nMODERATE 4 [fs-program-indices-are-unique] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [ex-smn-parameter-theorem] no signals\nORDINARY 0 [ex-acceptable-numberings-are-computably-intertranslatable] no signals\nORDINARY 2 [cex-recursion-theorem-needs-source-file-access] 2:induction, recursion, or minimality\nCRITICAL 8 [thm-three-sat-reduces-to-clique] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [cor-clique-is-np-complete] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [cor-independent-set-and-vertex-cover-are-np-complete] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-three-sat-reduces-to-directed-hamiltonian-cycle] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [thm-directed-reduces-to-undirected-hamiltonian-cycle] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [cor-hamiltonian-path-and-cycle-are-np-complete] 2:5 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nHIGH 6 [thm-three-sat-reduces-to-subset-sum] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-subset-sum-reduces-to-partition] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [thm-vertex-cover-reduces-to-set-cover] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-three-sat-reduces-to-three-colourability] 2:4 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [fs-gadget-correctness-needs-only-one-direction] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [fs-pseudopolynomial-is-polynomial-in-bit-length] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [ex-clique-is-np-complete] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [ex-three-sat-reduces-to-three-colourability] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [cex-gadget-correctness-needs-only-one-direction] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nrisk-report: 1 error(s), 527 item(s) routed\nERROR risk-review-missing [fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold]: fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold is critical risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers",
        "lem-teichmuller-lift-is-multiplicative-and-unique",
        "lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation",
        "prop-brauer-characters-are-class-functions-on-p-regular-elements",
        "thm-brauer-character-is-additive-on-short-exact-sequences",
        "thm-brauer-nesbitt-module-determination",
        "thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions",
        "cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes",
        "thm-decomposition-map-is-independent-of-the-stable-lattice",
        "lem-decomposition-numbers-are-nonnegative-integers",
        "thm-brauer-reciprocity",
        "thm-cartan-matrix-is-d-transpose-d",
        "thm-blocks-partition-ordinary-and-brauer-irreducible-characters",
        "prop-decomposition-matrix-is-block-diagonal-after-block-ordering",
        "fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace",
        "fs-modular-representations-are-determined-by-ordinary-characters",
        "fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible",
        "fs-the-cartan-matrix-equals-the-decomposition-matrix",
        "fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character",
        "ex-brauer-characters-of-a-p-group",
        "ex-p-regular-classes-of-s-three",
        "ex-decomposition-matrix-of-s-three-in-characteristic-two",
        "ex-cartan-matrix-from-d-transpose-d",
        "ex-a-block-with-one-ordinary-and-one-brauer-character",
        "cex-ordinary-trace-on-a-p-singular-unipotent-element",
        "lem-normalized-two-cocycles-and-coboundaries-form-groups",
        "thm-factor-set-model-agrees-with-derived-second-group-cohomology",
        "lem-factor-set-of-a-section-is-a-normalized-two-cocycle",
        "lem-changing-the-section-changes-the-factor-set-by-a-coboundary",
        "cor-an-extension-determines-a-well-defined-h-two-class",
        "lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle",
        "lem-cohomologous-two-cocycles-give-equivalent-extensions",
        "thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action",
        "cor-zero-h-two-class-is-equivalent-to-splitting",
        "lem-baer-sum-is-independent-of-extension-representatives",
        "thm-baer-sum-agrees-with-addition-in-h-two",
        "cor-central-extensions-are-classified-by-h-two-with-trivial-action",
        "thm-five-term-exact-sequence-as-extension-and-transgression-data",
        "fs-every-function-g-times-g-to-m-is-a-factor-set",
        "fs-the-factor-set-is-independent-of-the-section-as-a-function",
        "fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel",
        "fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic",
        "fs-the-zero-h-two-class-corresponds-to-the-direct-product-only",
        "ex-the-cp-squared-extension-as-a-nonzero-two-cocycle",
        "ex-the-split-extension-as-the-zero-cocycle",
        "ex-central-extensions-of-a-cyclic-group",
        "ex-the-quaternion-and-dihedral-central-extension-classes",
        "ex-changing-a-section-by-a-one-cochain",
        "ex-baer-sum-of-two-factor-sets",
        "cex-same-middle-group-with-inequivalent-extension-maps",
        "lem-zariski-closed-set-axioms",
        "lem-every-zariski-closed-set-has-a-radical-defining-ideal",
        "lem-distinguished-opens-cover-every-open",
        "lem-distinguished-open-refinement-at-a-point",
        "cor-spectrum-is-a-contravariant-topological-functor",
        "lem-quotient-spectrum-map-is-closed",
        "lem-localisation-spectrum-map-homeomorphism-onto-image",
        "cor-principal-localisation-spectrum-is-distinguished-open",
        "lem-spectrum-compactness-open-cover-to-unit-ideal",
        "lem-spectrum-compactness-unit-expression-finite-subcover",
        "thm-prime-spectrum-is-compact",
        "cor-every-distinguished-open-is-compact",
        "lem-closure-of-a-point-is-its-vanishing-set",
        "cor-specialisation-order-is-prime-inclusion",
        "cor-spectrum-is-t-zero",
        "cor-closed-points-of-spectrum-are-maximal-ideals",
        "thm-irreducible-closed-subsets-and-prime-ideals",
        "thm-irreducible-components-and-minimal-primes",
        "thm-noetherian-ring-has-noetherian-spectrum",
        "cor-noetherian-spectrum-has-finitely-many-irreducible-components",
        "lem-clopen-subset-gives-idempotent-decomposition",
        "lem-idempotent-gives-clopen-spectrum-partition",
        "cor-spectrum-connected-iff-no-nontrivial-idempotents",
        "lem-support-is-specialisation-closed",
        "cor-closed-points-dense-in-affine-spectra",
        "ex-distinguished-open-finite-subcover-from-unit-expression",
        "ex-zariski-spectrum-of-the-integers",
        "ex-zariski-spectrum-not-hausdorff",
        "ex-specialisation-poset-of-a-small-spectrum",
        "ex-idempotent-clopen-product-ring",
        "ex-nonclosed-support-without-finiteness",
        "thm-dini-derivatives-exist-are-ordered-and-detect-differentiability",
        "thm-riesz-rising-sun-lemma",
        "thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions",
        "thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun",
        "thm-increasing-functions-split-uniquely-as-jump-plus-continuous",
        "thm-jump-functions-have-derivative-zero-almost-everywhere",
        "thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun",
        "thm-vitali-covering-theorem-for-fine-covers-on-the-line",
        "thm-mini-vitali-fine-cover-characterisation-of-null-sets",
        "thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures",
        "thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase",
        "thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous",
        "thm-bv-functions-are-differentiable-almost-everywhere",
        "thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions",
        "fs-every-continuous-function-is-differentiable-almost-everywhere",
        "fs-every-increasing-function-satisfies-newton-leibniz",
        "fs-vitali-covering-theorem-holds-for-arbitrary-covers",
        "fs-zero-derivative-almost-everywhere-implies-constancy",
        "fs-bounded-variation-implies-absolute-continuity",
        "fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points",
        "ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one",
        "ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere",
        "ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series",
        "ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values",
        "ex-jump-and-continuous-parts-of-x-plus-rational-jumps",
        "cex-vitali-covering-theorem-needs-a-fine-cover",
        "ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere",
        "lem-hahn-banach-one-step-extension",
        "lem-union-of-a-chain-of-dominated-extensions",
        "thm-hahn-banach-dominated-extension",
        "thm-hahn-banach-norm-preserving-extension",
        "lem-real-part-determines-a-complex-linear-functional",
        "thm-complex-hahn-banach-norm-preserving-extension",
        "thm-dual-norms-every-vector",
        "cor-dual-separates-points",
        "cor-norm-recovered-from-the-dual-unit-ball",
        "thm-norm-preserving-extension-from-any-subspace",
        "ex-norming-functionals-in-lp-from-the-measure-duality-page",
        "ex-many-extensions-from-a-codimension-one-subspace",
        "ex-banach-limit-from-hahn-banach",
        "lem-banach-limit-properties",
        "cex-hahn-banach-extension-need-not-be-unique",
        "lem-independent-families-pass-to-subfamilies",
        "lem-independent-events-remain-independent-under-complements",
        "thm-pi-system-criterion-for-independent-sigma-algebras",
        "thm-grouping-independent-sigma-algebras",
        "thm-rectangle-criterion-for-independent-random-elements",
        "cor-finite-random-variable-independence-agreement",
        "lem-measurable-functions-preserve-independence",
        "thm-independent-random-elements-have-product-joint-law",
        "thm-factorization-of-expectations-for-independent-variables",
        "cor-covariance-vanishes-under-independence",
        "cor-first-borel-cantelli-lemma-for-events",
        "thm-pairwise-independent-borel-cantelli-frequency-law",
        "cor-second-borel-cantelli-lemma-under-pairwise-independence",
        "lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra",
        "thm-kolmogorov-zero-one-law",
        "cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event",
        "ex-independent-events-that-are-not-disjoint",
        "ex-functions-of-disjoint-independent-coordinate-blocks",
        "ex-borel-cantelli-eventually-no-large-deviations",
        "ex-zero-one-law-for-convergence-of-a-random-series",
        "cex-divergent-probability-sum-without-independence",
        "cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs",
        "lem-fejer-kernel-is-a-positive-approximate-identity",
        "thm-fejer-convergence-in-lp",
        "thm-fejer-uniform-convergence-for-continuous-periodic-functions",
        "thm-fejer-means-converge-at-lebesgue-points",
        "lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity",
        "thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points",
        "thm-cesaro-summability-implies-abel-summability",
        "thm-fejer-theorem-for-pointwise-midpoint-values",
        "thm-gibbs-overshoot-at-a-piecewise-c-one-jump",
        "ex-fejer-means-of-a-single-character",
        "ex-poisson-integral-of-a-single-character",
        "ex-fejer-summation-of-the-square-wave",
        "cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data",
        "cex-abel-summability-does-not-imply-ordinary-convergence",
        "lem-principal-symbol-under-a-c-one-coordinate-change",
        "lem-characteristic-hypersurface-is-independent-of-defining-function",
        "thm-symmetric-principal-part-has-a-signature-normal-form",
        "thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant",
        "thm-two-variable-constant-coefficient-canonical-principal-forms",
        "lem-transport-equation-along-a-characteristic",
        "lem-transport-characteristics-depend-c-one-on-initial-position",
        "thm-homogeneous-linear-transport-by-the-flow",
        "thm-inhomogeneous-linear-transport-formula",
        "thm-local-linear-transport-cauchy-problem",
        "cor-support-propagates-along-transport-characteristics",
        "ex-constant-velocity-transport",
        "ex-transport-with-growth-and-source",
        "ex-radial-transport-flow",
        "cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible",
        "ex-classification-of-laplace-heat-and-wave-equations",
        "ex-canonical-coordinates-for-a-hyperbolic-equation",
        "ex-tricomi-equation-changes-type",
        "cex-threefold-classification-is-not-global",
        "lem-dirichlet-character-extension-well-defined",
        "lem-dirichlet-character-arithmetic-function-characterization",
        "lem-dirichlet-character-values",
        "thm-dirichlet-character-orthogonality",
        "cor-dirichlet-character-residue-class-indicator",
        "lem-nonprincipal-dirichlet-character-complete-sum",
        "lem-nonprincipal-dirichlet-character-partial-sums",
        "thm-dirichlet-l-euler-product",
        "thm-principal-dirichlet-l-factorization",
        "thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane",
        "lem-positive-log-dirichlet-series-nonvanishing",
        "thm-product-dirichlet-l-nonvanishing-line-one",
        "thm-dirichlet-l-nonvanishing-line-one",
        "lem-nonreal-dirichlet-l-nonzero-at-one",
        "lem-real-dirichlet-l-nonzero-at-one",
        "thm-dirichlet-l-nonzero-at-one",
        "thm-natural-density-implies-dirichlet-density",
        "thm-primes-residue-class-dirichlet-density",
        "thm-mertens-primes-arithmetic-progressions",
        "thm-dirichlet-primes-arithmetic-progressions",
        "ex-dirichlet-characters-modulo-three-four-and-five",
        "ex-dirichlet-characters-modulo-eight-and-twelve",
        "ex-dirichlet-character-orthogonality-table",
        "ex-principal-dirichlet-l-missing-euler-factors",
        "ex-the-character-chi-four-and-leibniz-series",
        "ex-dirichlet-density-of-primes-in-a-small-progression",
        "cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion",
        "cex-dirichlet-density-does-not-mean-integer-natural-density",
        "lem-equivalent-definitions-of-the-hilbert-symbol",
        "lem-hilbert-symbol-depends-only-on-square-classes",
        "thm-real-hilbert-symbol-formula",
        "thm-odd-p-hilbert-symbol-formula",
        "thm-two-adic-hilbert-symbol-formula",
        "thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate",
        "lem-binary-quadratic-representation-via-hilbert-symbol",
        "cor-ternary-isotropy-via-hilbert-symbol",
        "lem-finite-field-quadratic-isotropy-in-dimension-at-least-three",
        "thm-local-isotropy-at-almost-all-primes",
        "thm-hilbert-reciprocity-over-the-rationals",
        "cor-ternary-hilbert-one-place-principle",
        "thm-hasse-minkowski-for-ternary-forms-over-q",
        "lem-global-square-class-approximation",
        "thm-hasse-minkowski-over-the-rationals",
        "ex-hilbert-symbol-over-the-reals",
        "ex-hilbert-symbol-at-an-odd-prime",
        "ex-two-adic-hilbert-symbol",
        "ex-local-obstruction-to-a-rational-conic",
        "ex-finite-bad-place-test-for-a-ternary-form",
        "ex-hilbert-one-place-principle",
        "ex-hasse-minkowski-for-a-quaternary-form",
        "cex-local-global-fails-for-a-cubic-curve",
        "cex-rational-isotropy-is-not-integral-representation",
        "thm-the-compact-square-form-of-enriched-naturality",
        "thm-enriched-categories-functors-and-natural-transformations-form-a-two-category",
        "thm-the-underlying-category-construction-is-a-two-functor",
        "thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs",
        "thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category",
        "thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category",
        "cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts",
        "thm-a-closed-monoidal-category-is-enriched-in-itself",
        "thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set",
        "thm-weak-enriched-yoneda-lemma",
        "thm-strong-enriched-yoneda-lemma-as-a-particular-end",
        "cor-the-enriched-yoneda-embedding-is-fully-faithful",
        "cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor",
        "thm-the-free-enriched-category-two-adjunction",
        "thm-there-is-in-general-no-constant-enriched-functor",
        "thm-conical-limits-do-not-suffice-in-the-enriched-setting",
        "thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category",
        "thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit",
        "thm-enriched-completeness-is-cotensors-plus-small-conical-limits",
        "thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories",
        "thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor",
        "cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base",
        "thm-a-right-enriched-adjoint-preserves-weighted-limits",
        "thm-enriched-adjoint-functor-theorem-for-cotensored-categories",
        "thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint",
        "thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables",
        "ex-a-two-category-as-a-cat-enriched-category",
        "ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice",
        "ex-a-metric-space-as-an-enriched-category",
        "ex-a-ring-as-a-one-object-ab-enriched-category",
        "ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells",
        "ex-a-cotensor-computed-in-sets",
        "cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor",
        "ex-change-of-base-along-the-underlying-set-functor",
        "fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category",
        "fs-every-enriched-category-has-constant-enriched-functors",
        "fs-the-underlying-ordinary-category-determines-the-enriched-category",
        "fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category",
        "fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors",
        "fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category",
        "fs-a-monoidal-category-carries-at-most-one-symmetry",
        "lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor",
        "lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts",
        "thm-left-derived-functors-form-a-homological-delta-functor",
        "thm-right-derived-functors-form-a-cohomological-delta-functor",
        "prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors",
        "cor-derived-long-exact-sequence",
        "prop-positive-left-derived-functors-are-effaceable-by-projectives",
        "prop-positive-right-derived-functors-are-effaceable-by-injectives",
        "lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle",
        "lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle",
        "lem-extend-a-degree-zero-transformation-through-one-dimension-shift",
        "lem-the-effacement-extension-is-independent-of-the-effacing-morphism",
        "lem-the-effacement-extension-commutes-with-connecting-morphisms",
        "thm-effaceable-homological-delta-functors-are-universal",
        "thm-effaceable-cohomological-delta-functors-are-universal",
        "thm-derived-functors-are-universal-delta-functors",
        "cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic",
        "cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero",
        "prop-an-exact-base-functor-has-the-trivial-universal-delta-functor",
        "prop-satellites-give-the-first-derived-functor",
        "fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor",
        "fs-effaceability-means-every-positive-value-is-zero",
        "fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends",
        "fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof",
        "fs-universality-removes-the-need-for-supplied-resolution-data",
        "ex-homology-as-a-homological-delta-functor",
        "ex-the-trivial-delta-functor-of-an-exact-functor",
        "ex-one-dimension-shift-along-a-projective-presentation",
        "ex-one-dimension-shift-along-an-injective-copresentation",
        "ex-extending-a-degree-zero-natural-transformation",
        "cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor",
        "ex-two-universal-delta-functors-and-their-unique-isomorphism",
        "lem-affine-face-maps-satisfy-the-cosimplicial-identities",
        "thm-the-singular-boundary-squares-to-zero",
        "lem-induced-singular-chain-maps-commute-with-boundaries",
        "prop-singular-chains-and-homology-are-covariantly-functorial",
        "lem-singular-augmentation-commutes-with-boundary",
        "prop-zero-th-singular-homology-is-free-on-path-components",
        "cor-path-connected-spaces-have-zero-reduced-zero-th-homology",
        "prop-singular-homology-of-a-disjoint-union-is-the-direct-sum",
        "lem-the-prism-triangulation-has-the-stated-oriented-boundary",
        "thm-singular-chain-homotopy-formula",
        "cor-homotopic-maps-induce-the-same-map-on-singular-homology",
        "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology",
        "cor-contractible-nonempty-spaces-have-the-homology-of-a-point",
        "prop-singular-homology-is-invariant-under-deformation-retracts",
        "lem-singular-chain-cross-product-boundary-formula",
        "prop-singular-chain-cross-products-are-natural",
        "lem-simplicial-to-singular-chains-commute-with-boundaries",
        "ex-singular-chain-complex-of-a-point",
        "ex-boundaries-of-the-standard-one-and-two-simplices",
        "ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex",
        "ex-the-prism-operator-for-a-path-homotopy",
        "ex-homology-of-an-interval-from-contractibility",
        "ex-homology-of-punctured-euclidean-space-by-deformation-retraction",
        "cex-equal-homology-does-not-imply-homotopy-equivalence",
        "cex-a-singular-cochain-is-not-a-finite-singular-chain",
        "lem-regular-functions-form-sheaf-classical",
        "thm-global-regular-functions-affine-variety-coordinate-ring",
        "thm-affine-morphisms-coordinate-ring-anti-equivalence",
        "cor-affine-algebraic-set-coordinate-duality-complete",
        "lem-morphism-equality-on-dense-open",
        "thm-local-ring-affine-variety-localization",
        "thm-function-field-independent-affine-open",
        "lem-rational-map-equivalence-transitive",
        "lem-dominant-map-pullback-function-fields",
        "thm-rational-maps-to-affine-variety-function-field",
        "thm-birational-equivalence-function-fields",
        "lem-direct-image-is-sheaf",
        "thm-inverse-direct-image-adjunction",
        "lem-stalk-inverse-image-sheaf",
        "thm-abelian-sheaves-form-abelian-category",
        "thm-exactness-of-sheaves-stalkwise",
        "lem-global-sections-left-exact",
        "thm-extension-by-zero-adjunction-exactness",
        "lem-local-homomorphism-residue-field-map",
        "lem-stalk-tensor-product",
        "thm-pullback-pushforward-module-adjunction",
        "lem-pullback-modules-right-exact",
        "thm-gluing-sheaves",
        "thm-gluing-ringed-and-locally-ringed-spaces",
        "ex-direct-image-open-immersion",
        "cex-extension-by-zero-differs-direct-image",
        "ex-skyscraper-sheaf-exact-sequence",
        "cex-global-sections-not-right-exact",
        "ex-ringed-space-continuous-functions",
        "cex-ringed-space-map-not-locally-ringed",
        "ex-pullback-free-module",
        "ex-glue-line-bundle-transition-functions",
        "cex-presheaf-cokernel-needs-sheafification",
        "lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set",
        "lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades",
        "thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property",
        "lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes",
        "lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome",
        "lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph",
        "lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives",
        "lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem",
        "lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade",
        "thm-property-star-and-leaf-reducibility-imply-generalized-niceness",
        "ex-the-lemma-three-five-parameter-choice-on-a-large-graph",
        "ex-a-complete-four-blockade-gives-a-four-vertex-clique",
        "ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set",
        "ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star",
        "ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade",
        "ex-the-square-root-rescaling-in-lemma-four-four",
        "ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one",
        "prop-local-frame-characterization-of-a-smooth-distribution",
        "prop-sections-of-a-distribution-form-a-locally-free-module",
        "prop-double-annihilator-recovers-a-finite-rank-distribution",
        "prop-integral-manifolds-have-the-distribution-dimension",
        "prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds",
        "prop-involutivity-can-be-checked-on-a-local-frame",
        "prop-integrable-distributions-are-involutive",
        "lem-involutive-frame-reduction",
        "lem-commuting-independent-vector-fields-give-a-coordinate-system",
        "thm-frobenius-local-coordinate-theorem",
        "cor-frobenius-local-first-integrals",
        "cor-kernel-of-a-constant-rank-submersion-is-integrable",
        "prop-level-set-distributions-are-involutive",
        "lem-integral-manifolds-are-locally-contained-in-plaques",
        "lem-overlapping-plaques-through-a-point-have-compatible-germs",
        "lem-tangent-curve-reachability-is-an-equivalence-relation",
        "thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds",
        "cor-maximal-integral-manifolds-partition-the-manifold",
        "thm-regular-foliations-and-integrable-distributions-correspond",
        "prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution",
        "prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded",
        "fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution",
        "fs-every-smooth-distribution-is-integrable",
        "fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors",
        "fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold",
        "fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology",
        "fs-frobenius-applies-to-any-variable-rank-family-of-subspaces",
        "ex-coordinate-plane-distribution-and-its-affine-leaves",
        "ex-kernel-of-a-submersion-as-an-integrable-distribution",
        "ex-level-set-foliation-of-a-regular-function",
        "ex-product-foliation",
        "ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin",
        "ex-irrational-linear-foliation-of-the-two-torus",
        "ex-the-mobius-band-line-foliation",
        "cex-the-standard-contact-plane-field-is-not-integrable",
        "cex-a-variable-rank-involutive-family-outside-regular-frobenius",
        "ex-leaves-of-a-lie-subalgebra-distribution",
        "prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra",
        "prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra",
        "prop-associated-graded-of-the-pbw-filtration-is-commutative",
        "thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra",
        "thm-root-space-decomposition-relative-to-a-cartan-subalgebra",
        "prop-root-space-brackets-add-their-roots",
        "prop-killing-form-pairs-only-opposite-root-spaces",
        "prop-opposite-root-spaces-bracket-to-the-killing-dual-line",
        "thm-triangular-decomposition-from-a-chosen-positive-root-system",
        "prop-centralizer-of-a-cartan-element-from-its-vanishing-roots",
        "lem-regular-elements-form-a-connected-dense-open-subset",
        "thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra",
        "thm-the-root-set-is-a-reduced-crystallographic-root-system",
        "thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights",
        "lem-central-action-on-a-cyclic-highest-weight-module-is-scalar",
        "lem-the-casimir-element-is-independent-of-dual-bases",
        "prop-the-quadratic-casimir-element-is-central",
        "prop-casimir-eigenvalue-on-a-highest-weight-module",
        "lem-central-elements-have-weight-zero",
        "prop-harish-chandra-projection-is-multiplicative-on-the-center",
        "lem-harish-chandra-projection-computes-highest-weight-scalars",
        "lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions",
        "prop-harish-chandra-map-is-injective",
        "lem-associated-graded-symbol-of-a-central-element-is-invariant",
        "lem-regular-semisimple-elements-form-a-dense-open-subset",
        "lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction",
        "lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants",
        "thm-symmetric-invariants-restrict-to-weyl-invariants",
        "thm-harish-chandra-isomorphism-for-the-center",
        "cor-central-characters-are-dot-weyl-orbits",
        "cor-the-center-is-a-polynomial-algebra-of-rank-many-generators",
        "thm-enveloping-algebra-is-free-over-its-center",
        "ex-sl2-casimir-and-its-highest-weight-eigenvalue",
        "ex-sl3-harish-chandra-center-generators",
        "ex-dot-conjugate-weights-have-the-same-central-character",
        "cex-unshifted-weyl-orbits-do-not-classify-central-characters",
        "ex-the-zero-weight-singular-central-character",
        "cex-a-noninvariant-quadratic-pbw-element-is-not-central",
        "lem-induction-image-is-an-ideal-in-the-representation-ring",
        "lem-cyclic-generator-class-functions-by-moebius-inversion",
        "lem-artin-cyclic-permutation-relation",
        "thm-artin-induction-for-rational-characters",
        "cor-cyclic-fixed-points-detect-rational-representations",
        "cor-rank-of-the-rational-representation-ring",
        "cor-cyclic-local-integrality-criterion",
        "ex-artin-induction-for-a-cyclic-group",
        "ex-artin-permutation-relation-for-a5",
        "ex-cyclic-fixed-point-detection-for-s3",
        "cex-rational-valued-character-need-not-be-defined-over-the-rationals",
        "lem-morse-functions-are-transverse-differentials",
        "thm-morse-functions-are-dense-by-relative-jet-transversality",
        "thm-morse-functions-form-a-residual-subset",
        "lem-compact-morse-critical-points-have-uniform-hessian-gaps",
        "lem-no-new-critical-points-under-a-compact-c1-small-perturbation",
        "thm-morse-functions-are-open-dense-on-a-compact-manifold",
        "lem-finitely-many-critical-values-can-be-separated-locally",
        "thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold",
        "thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse",
        "thm-generic-squared-distance-functions-are-morse",
        "cor-every-compact-smooth-manifold-admits-an-excellent-morse-function",
        "lem-properness-survives-a-controlled-locally-finite-perturbation",
        "prop-proper-morse-exhaustions-exist-on-smooth-manifolds",
        "ex-generic-and-exceptional-height-directions-on-a-torus",
        "ex-squared-distance-to-a-circle-and-its-medial-axis",
        "ex-separating-equal-critical-values-by-bump-functions",
        "cex-morse-functions-need-not-have-distinct-critical-values",
        "cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity",
        "lem-computation-history-domino-encoding",
        "thm-modified-pcp-is-undecidable",
        "lem-modified-pcp-reduces-to-pcp",
        "thm-post-correspondence-is-undecidable",
        "prop-post-correspondence-is-recognizable",
        "thm-cfg-intersection-emptiness-is-undecidable",
        "thm-cfg-universality-is-undecidable",
        "thm-cfg-equivalence-is-undecidable",
        "thm-cfg-ambiguity-is-undecidable",
        "thm-proper-inclusions-in-the-chomsky-hierarchy",
        "fs-pcp-allows-symbol-reordering-within-dominoes",
        "fs-two-decidable-cfls-have-decidable-intersection-emptiness",
        "ex-modified-pcp-is-undecidable",
        "ex-proper-inclusions-in-the-chomsky-hierarchy",
        "cex-pcp-allows-symbol-reordering-within-dominoes",
        "prop-fixed-machine-coding-is-acceptable",
        "thm-smn-parameter-theorem",
        "cor-effective-program-specialization",
        "lem-self-reference-construction-from-smn",
        "thm-kleenes-second-recursion-theorem",
        "thm-recursion-theorem-with-parameters",
        "thm-nonhalting-is-productive-and-halting-is-creative",
        "thm-myhill-isomorphism-theorem-for-creative-sets",
        "prop-acceptable-numberings-are-computably-intertranslatable",
        "fs-recursion-theorem-needs-source-file-access",
        "fs-program-indices-are-unique",
        "ex-smn-parameter-theorem",
        "ex-acceptable-numberings-are-computably-intertranslatable",
        "cex-recursion-theorem-needs-source-file-access",
        "thm-three-sat-reduces-to-clique",
        "cor-clique-is-np-complete",
        "thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible",
        "cor-independent-set-and-vertex-cover-are-np-complete",
        "thm-three-sat-reduces-to-directed-hamiltonian-cycle",
        "thm-directed-reduces-to-undirected-hamiltonian-cycle",
        "cor-hamiltonian-path-and-cycle-are-np-complete",
        "thm-three-sat-reduces-to-subset-sum",
        "thm-subset-sum-reduces-to-partition",
        "thm-vertex-cover-reduces-to-set-cover",
        "thm-three-sat-reduces-to-three-colourability",
        "fs-gadget-correctness-needs-only-one-direction",
        "fs-pseudopolynomial-is-polynomial-in-bit-length",
        "ex-clique-is-np-complete",
        "ex-three-sat-reduces-to-three-colourability",
        "cex-gadget-correctness-needs-only-one-direction"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 4216 rows over 1 contract file(s); 3598 marked not_applicable\n\nTEMPLATE REUSE — none at or above 3 members.\n\nCONTRADICTED DISPOSITIONS — 3 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\n  thm-hasse-minkowski-over-the-rationals  [zero]\n    the proof divides by a symbolic denominator (2a_1, 2a_1r) — the zero case is a real obligation unless a hypothesis excludes it\n    row says: \"In Hasse-Minkowski theorem over Q, zero is either excluded by the nonzero hypotheses or not a distinct boundary regime needing a separate ar…\"\n\n  thm-strong-enriched-yoneda-lemma-as-a-particular-end  [empty]\n    the item quantifies over a family or indexed aggregate (\\bcollection of\\b)\n    row says: \"Strong enriched Yoneda lemma as a particular end is written for explicit categories, functors, objects, or witnesses rather than an arbitrar…\"\n\n  thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables  [empty]\n    the item quantifies over a family or indexed aggregate (\\bcollection of\\b)\n    row says: \"Every enriched functor into the base is a weighted colimit of representables when the displayed weighted colimit exists is written for expli…\"\n\nUPHELD BY REVIEW — 37 row(s) an Alpha read and kept, with reasons on the record:\n  fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic  [iff-forward]  by contract-audit-6: In FALSE: equivalent extensions mean only that the middle groups are isomorphic, the written counterexample is aimed at \n  lem-distinguished-opens-cover-every-open  [empty]  by contract-audit-6: In Every Zariski-open subset is a union of distinguished opens, the union is indexed by the ideal I itself, and every id\n  lem-union-of-a-chain-of-dominated-extensions  [empty]  by contract-audit-6: In The union of a chain of dominated extensions is a well-defined dominated linear functional, the Statement explicitly \n  thm-pi-system-criterion-for-independent-sigma-algebras  [empty]  by contract-audit-6: In Independent pi-systems generate independent sigma-algebras, [L1] reduces independence to finite subfamilies with n>=1\n  thm-rectangle-criterion-for-independent-random-elements  [empty]  by contract-audit-6: In Independent random elements are characterized by finite rectangle probabilities, clause 2 already quantifies only ove\n  cor-finite-random-variable-independence-agreement  [empty]  by contract-audit-6: In The general rectangle criterion agrees with the published finite random-variable definition, the item compares two in\n  thm-independent-random-elements-have-product-joint-law  [empty]  by contract-audit-6: In Independent random elements have product joint law, the Statement begins with n>=1, so the product space, measurable \n  thm-factorization-of-expectations-for-independent-variables  [empty]  by contract-audit-6: In Expectations factor over finite products of independent random variables, the Statement fixes n>=1, so the displayed \n  thm-pairwise-independent-borel-cantelli-frequency-law  [empty]  by contract-audit-6: In Pairwise-independent Borel-Cantelli frequency law, the theorem is about one fixed infinite sequence (A_n)_{n>=1} with\n  cor-second-borel-cantelli-lemma-under-pairwise-independence  [empty]  by contract-audit-6: In Second Borel-Cantelli lemma under pairwise independence, the corollary is indexed by the whole sequence (A_n)_{n in N\n  cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event  [empty]  by contract-audit-6: In Almost-sure convergence of an independent series is a zero-one event, the event is defined from one fixed infinite se\n  lem-fejer-kernel-is-a-positive-approximate-identity  [empty]  by contract-audit-6: In The Fejer kernel is a positive approximate identity, the sums run from 0 to N with N>=0, so the indexed family always\n  thm-fejer-means-converge-at-lebesgue-points  [zero]  by contract-audit-6: In Fejer means converge at Lebesgue points, step 1.1 chooses delta in (0,1/2] and step 2.1 sets a_N=min(delta,(N+1)^(-1)\n  lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity  [empty]  by contract-audit-6: In The Poisson kernel on the circle is a positive approximate identity, the Fourier series is indexed by all integers k \n  thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points  [zero]  by contract-audit-6: In Abel means converge in L^p, uniformly, and at Lebesgue points, step 1.3 enters the tail estimate only with r>=1/2 and\n  ex-fejer-summation-of-the-square-wave  [zero]  by contract-audit-6: In Fejer summation of the square wave, the denominator 2m+1 comes from the odd Fourier modes with m>=0, so it is always \n  cex-abel-summability-does-not-imply-ordinary-convergence  [zero]  by contract-audit-6: In Abel summability does not imply ordinary convergence, step 2.1 evaluates the Abel sum only for 0<=r<1, so the denomin\n  lem-principal-symbol-under-a-c-one-coordinate-change  [empty]  by contract-audit-6: In The principal symbol depends only on the first derivative of a smooth coordinate change, the multi-index set {alpha: \n  lem-transport-equation-along-a-characteristic  [zero]  by contract-audit-6: In A transport equation restricts to a linear ODE along each characteristic, the detector is reading the derivative nota\n  lem-transport-characteristics-depend-c-one-on-initial-position  [zero]  by contract-audit-6: In Transport characteristics depend C^1 on the initial position, step 2.1 explicitly fixes a nonzero scalar h before for\n  thm-inhomogeneous-linear-transport-formula  [empty]  by alpha-step8-preflight-d: The word family refers to the characteristic flow over U. If U is empty the universal claim is vacuous, and otherwise th\n  thm-dirichlet-character-orthogonality  [empty]  by contract-audit-6: In Orthogonality relations for Dirichlet characters modulo q, the character sum runs over all Dirichlet characters modul\n  cor-dirichlet-character-residue-class-indicator  [empty]  by contract-audit-6: In A residue-class indicator from character sums, the average is again over all Dirichlet characters modulo q, so the fa\n  lem-nonprincipal-dirichlet-character-complete-sum  [empty]  by contract-audit-6: In A nonprincipal character has zero complete sum, a complete residue system modulo q has q representatives and q>=1, so\n  lem-nonprincipal-dirichlet-character-partial-sums  [empty]  by contract-audit-6: In Nonprincipal Dirichlet character partial sums are bounded, the sum is over 1<=n<=x with x>=1, so the index range is n\n  thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane  [empty]  by contract-audit-6: In Nonprincipal Dirichlet L-functions are holomorphic on Re s greater than 0, the Dirichlet series starts at n>=1, so th\n  lem-positive-log-dirichlet-series-nonvanishing  [empty]  by contract-audit-6: In Positive logarithmic Dirichlet series force boundary nonvanishing, the logarithmic Dirichlet series begins at n>=2 an\n  thm-product-dirichlet-l-nonvanishing-line-one  [empty]  by contract-audit-6: In The full product of Dirichlet L-functions has no zero on Re s = 1, the product ranges over all Dirichlet characters m\n  thm-primes-residue-class-dirichlet-density  [empty]  by contract-audit-6: In Primes in one reduced residue class have Dirichlet density 1 over phi(q), the prime sum is the arithmetic set whose d\n  thm-mertens-primes-arithmetic-progressions  [empty]  by contract-audit-6: In Mertens sum for primes in an arithmetic progression, the prime sum is the specific residue-class counting function un\n  thm-mertens-primes-arithmetic-progressions  [zero]  by contract-audit-6: In Mertens sum for primes in an arithmetic progression, the denominators p and p^m are prime powers and therefore positi\n  thm-hilbert-reciprocity-over-the-rationals  [empty]  by contract-audit-6: In Hilbert reciprocity over the rationals, the product is over all places of Q, which always includes the real place and\n  lem-global-square-class-approximation  [zero]  by contract-audit-6: In Global approximation of finitely many square classes, step 2.1 chooses ell to be an odd prime outside S union P, so t\n  thm-rational-maps-to-affine-variety-function-field  [zero]  by contract-audit-6: In Dominant rational maps to an affine variety correspond to injective homomorphisms of function fields, step 1.2 explic\n  prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds  [empty]  by contract-audit-6: In Local diffeomorphisms carry distributions and integral manifolds, the displayed family is indexed by the points of th\n  fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution  [empty]  by contract-audit-6: In Every constant-dimensional family of tangent subspaces is a smooth distribution, the refutation fixes one explicit on\n  fs-frobenius-applies-to-any-variable-rank-family-of-subspaces  [empty]  by contract-audit-6: In Frobenius applies to any variable-rank family of subspaces, the refutation uses one explicit variable-rank family on \n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 1132 citation(s) over 527 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 4.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  cor-the-enriched-yoneda-embedding-is-fully-faithful  [L2] -> thm-strong-enriched-yoneda-lemma-as-a-particular-end (searched: Statement)\n    quote: \"Assume $\\mathcal V$ is symmetric monoidal right closed and locally small. Let $\\mathcal A$ be a small $\\mathcal V$-category, let $K\\in\\mathcal A$, and let $F:\\mathcal A\\to\\mathcal …\"\n\n  thm-enriched-completeness-is-cotensors-plus-small-conical-limits  [L3] -> def-enriched-weighted-limit (searched: Definition)\n    quote: \"Assume $\\mathcal V$ is symmetric monoidal right closed, so that it is enriched in itself and enriched opposites are defined using the symmetry ([[thm-a-closed-monoidal-category-is-…\"\n\n  thm-a-right-enriched-adjoint-preserves-weighted-limits  [L2] -> def-enriched-weighted-limit (searched: Definition)\n    quote: \"Assume $\\mathcal V$ is symmetric monoidal right closed, so that it is enriched in itself and enriched opposites are defined using the symmetry ([[thm-a-closed-monoidal-category-is-…\"\n\n  fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category  [L1] -> thm-strong-enriched-yoneda-lemma-as-a-particular-end (searched: Statement)\n    quote: \"Assume $\\mathcal V$ is symmetric monoidal right closed and locally small. Let $\\mathcal A$ be a small $\\mathcal V$-category, let $K\\in\\mathcal A$, and let $F:\\mathcal A\\to\\mathcal …\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nUPHELD BY REVIEW — 1 citation row(s) an Alpha read and kept, with reasons on the record:\n  lem-the-effacement-extension-is-independent-of-the-effacing-morphism  [L1] -> lem-extend-a-degree-zero-transformation-through-one-dimension-shift  by step8-preflight-e-1: The fact concerns an arbitrary choice of effacing morphism at the fixed degree of the cited lemma. It does not quantify \n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-enriched-categories-functors-and-natural-transformations-form-a-two-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-enriched-yoneda-embedding-is-fully-faithful",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-the-free-enriched-category-two-adjunction",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-there-is-in-general-no-constant-enriched-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-enriched-completeness-is-cotensors-plus-small-conical-limits",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-right-enriched-adjoint-preserves-weighted-limits",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-metric-space-as-an-enriched-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-clopen-subset-gives-idempotent-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-teichmuller-lift-is-multiplicative-and-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-brauer-characters-are-class-functions-on-p-regular-elements",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brauer-character-is-additive-on-short-exact-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brauer-nesbitt-module-determination",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-decomposition-map-is-independent-of-the-stable-lattice",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-decomposition-numbers-are-nonnegative-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-brauer-reciprocity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-cartan-matrix-is-d-transpose-d",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-blocks-partition-ordinary-and-brauer-irreducible-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-decomposition-matrix-is-block-diagonal-after-block-ordering",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-modular-representations-are-determined-by-ordinary-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-cartan-matrix-equals-the-decomposition-matrix",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-brauer-characters-of-a-p-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-p-regular-classes-of-s-three",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-decomposition-matrix-of-s-three-in-characteristic-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cartan-matrix-from-d-transpose-d",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-block-with-one-ordinary-and-one-brauer-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-ordinary-trace-on-a-p-singular-unipotent-element",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-normalized-two-cocycles-and-coboundaries-form-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-factor-set-model-agrees-with-derived-second-group-cohomology",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-factor-set-of-a-section-is-a-normalized-two-cocycle",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-changing-the-section-changes-the-factor-set-by-a-coboundary",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-an-extension-determines-a-well-defined-h-two-class",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-cohomologous-two-cocycles-give-equivalent-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-zero-h-two-class-is-equivalent-to-splitting",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-baer-sum-is-independent-of-extension-representatives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-baer-sum-agrees-with-addition-in-h-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-central-extensions-are-classified-by-h-two-with-trivial-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-five-term-exact-sequence-as-extension-and-transgression-data",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-function-g-times-g-to-m-is-a-factor-set",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-factor-set-is-independent-of-the-section-as-a-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-zero-h-two-class-corresponds-to-the-direct-product-only",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-cp-squared-extension-as-a-nonzero-two-cocycle",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-split-extension-as-the-zero-cocycle",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-central-extensions-of-a-cyclic-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-quaternion-and-dihedral-central-extension-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-changing-a-section-by-a-one-cochain",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-baer-sum-of-two-factor-sets",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-same-middle-group-with-inequivalent-extension-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-zariski-closed-set-axioms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-every-zariski-closed-set-has-a-radical-defining-ideal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-distinguished-opens-cover-every-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-distinguished-open-refinement-at-a-point",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-spectrum-is-a-contravariant-topological-functor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-quotient-spectrum-map-is-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-localisation-spectrum-map-homeomorphism-onto-image",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-principal-localisation-spectrum-is-distinguished-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-spectrum-compactness-open-cover-to-unit-ideal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-spectrum-compactness-unit-expression-finite-subcover",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-prime-spectrum-is-compact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-distinguished-open-is-compact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-closure-of-a-point-is-its-vanishing-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-specialisation-order-is-prime-inclusion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-spectrum-is-t-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-closed-points-of-spectrum-are-maximal-ideals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-irreducible-closed-subsets-and-prime-ideals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-irreducible-components-and-minimal-primes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-noetherian-ring-has-noetherian-spectrum",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-noetherian-spectrum-has-finitely-many-irreducible-components",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-idempotent-gives-clopen-spectrum-partition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-spectrum-connected-iff-no-nontrivial-idempotents",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-support-is-specialisation-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-closed-points-dense-in-affine-spectra",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-distinguished-open-finite-subcover-from-unit-expression",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-zariski-spectrum-of-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-zariski-spectrum-not-hausdorff",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-specialisation-poset-of-a-small-spectrum",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-idempotent-clopen-product-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-nonclosed-support-without-finiteness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dini-derivatives-exist-are-ordered-and-detect-differentiability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riesz-rising-sun-lemma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-increasing-functions-split-uniquely-as-jump-plus-continuous",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-jump-functions-have-derivative-zero-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-vitali-covering-theorem-for-fine-covers-on-the-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mini-vitali-fine-cover-characterisation-of-null-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bv-functions-are-differentiable-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-continuous-function-is-differentiable-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-increasing-function-satisfies-newton-leibniz",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-vitali-covering-theorem-holds-for-arbitrary-covers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-zero-derivative-almost-everywhere-implies-constancy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-bounded-variation-implies-absolute-continuity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-jump-and-continuous-parts-of-x-plus-rational-jumps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-vitali-covering-theorem-needs-a-fine-cover",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-hahn-banach-one-step-extension",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-union-of-a-chain-of-dominated-extensions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-hahn-banach-dominated-extension",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-hahn-banach-norm-preserving-extension",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-real-part-determines-a-complex-linear-functional",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-complex-hahn-banach-norm-preserving-extension",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-dual-norms-every-vector",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-dual-separates-points",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-norm-recovered-from-the-dual-unit-ball",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-norm-preserving-extension-from-any-subspace",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-norming-functionals-in-lp-from-the-measure-duality-page",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-many-extensions-from-a-codimension-one-subspace",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-banach-limit-from-hahn-banach",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-banach-limit-properties",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-hahn-banach-extension-need-not-be-unique",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-independent-families-pass-to-subfamilies",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-independent-events-remain-independent-under-complements",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-pi-system-criterion-for-independent-sigma-algebras",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-grouping-independent-sigma-algebras",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-rectangle-criterion-for-independent-random-elements",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-finite-random-variable-independence-agreement",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-measurable-functions-preserve-independence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-independent-random-elements-have-product-joint-law",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-factorization-of-expectations-for-independent-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-covariance-vanishes-under-independence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-first-borel-cantelli-lemma-for-events",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-pairwise-independent-borel-cantelli-frequency-law",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-second-borel-cantelli-lemma-under-pairwise-independence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-kolmogorov-zero-one-law",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-independent-events-that-are-not-disjoint",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-functions-of-disjoint-independent-coordinate-blocks",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-borel-cantelli-eventually-no-large-deviations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-zero-one-law-for-convergence-of-a-random-series",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-divergent-probability-sum-without-independence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-fejer-kernel-is-a-positive-approximate-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fejer-convergence-in-lp",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fejer-uniform-convergence-for-continuous-periodic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fejer-means-converge-at-lebesgue-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-cesaro-summability-implies-abel-summability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fejer-theorem-for-pointwise-midpoint-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gibbs-overshoot-at-a-piecewise-c-one-jump",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-fejer-means-of-a-single-character",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-poisson-integral-of-a-single-character",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-fejer-summation-of-the-square-wave",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-abel-summability-does-not-imply-ordinary-convergence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-principal-symbol-under-a-c-one-coordinate-change",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-characteristic-hypersurface-is-independent-of-defining-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-symmetric-principal-part-has-a-signature-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-two-variable-constant-coefficient-canonical-principal-forms",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-transport-equation-along-a-characteristic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-transport-characteristics-depend-c-one-on-initial-position",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-homogeneous-linear-transport-by-the-flow",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-inhomogeneous-linear-transport-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-local-linear-transport-cauchy-problem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-support-propagates-along-transport-characteristics",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-constant-velocity-transport",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-transport-with-growth-and-source",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-radial-transport-flow",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-classification-of-laplace-heat-and-wave-equations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-canonical-coordinates-for-a-hyperbolic-equation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-tricomi-equation-changes-type",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-threefold-classification-is-not-global",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-dirichlet-character-extension-well-defined",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-dirichlet-character-arithmetic-function-characterization",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-dirichlet-character-values",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-character-orthogonality",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-dirichlet-character-residue-class-indicator",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-nonprincipal-dirichlet-character-complete-sum",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-nonprincipal-dirichlet-character-partial-sums",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-l-euler-product",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-principal-dirichlet-l-factorization",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-positive-log-dirichlet-series-nonvanishing",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-product-dirichlet-l-nonvanishing-line-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-l-nonvanishing-line-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-nonreal-dirichlet-l-nonzero-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-real-dirichlet-l-nonzero-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-l-nonzero-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-natural-density-implies-dirichlet-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-primes-residue-class-dirichlet-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-mertens-primes-arithmetic-progressions",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-primes-arithmetic-progressions",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-characters-modulo-three-four-and-five",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-characters-modulo-eight-and-twelve",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-character-orthogonality-table",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-principal-dirichlet-l-missing-euler-factors",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-character-chi-four-and-leibniz-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-density-of-primes-in-a-small-progression",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-dirichlet-density-does-not-mean-integer-natural-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-equivalent-definitions-of-the-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-hilbert-symbol-depends-only-on-square-classes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-real-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-odd-p-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-two-adic-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-binary-quadratic-representation-via-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-ternary-isotropy-via-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-finite-field-quadratic-isotropy-in-dimension-at-least-three",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-isotropy-at-almost-all-primes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hilbert-reciprocity-over-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-ternary-hilbert-one-place-principle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hasse-minkowski-for-ternary-forms-over-q",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-global-square-class-approximation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hasse-minkowski-over-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hilbert-symbol-over-the-reals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hilbert-symbol-at-an-odd-prime",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-two-adic-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-local-obstruction-to-a-rational-conic",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-finite-bad-place-test-for-a-ternary-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hilbert-one-place-principle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hasse-minkowski-for-a-quaternary-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-local-global-fails-for-a-cubic-curve",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-rational-isotropy-is-not-integral-representation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-the-compact-square-form-of-enriched-naturality",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-the-underlying-category-construction-is-a-two-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-closed-monoidal-category-is-enriched-in-itself",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-weak-enriched-yoneda-lemma",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-strong-enriched-yoneda-lemma-as-a-particular-end",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-conical-limits-do-not-suffice-in-the-enriched-setting",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-enriched-adjoint-functor-theorem-for-cotensored-categories",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-two-category-as-a-cat-enriched-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-ring-as-a-one-object-ab-enriched-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-cotensor-computed-in-sets",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-change-of-base-along-the-underlying-set-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-enriched-category-has-constant-enriched-functors",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-underlying-ordinary-category-determines-the-enriched-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-monoidal-category-carries-at-most-one-symmetry",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-left-derived-functors-form-a-homological-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-right-derived-functors-form-a-cohomological-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-derived-long-exact-sequence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-positive-left-derived-functors-are-effaceable-by-projectives",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-positive-right-derived-functors-are-effaceable-by-injectives",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-extend-a-degree-zero-transformation-through-one-dimension-shift",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-effacement-extension-is-independent-of-the-effacing-morphism",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-effacement-extension-commutes-with-connecting-morphisms",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-effaceable-homological-delta-functors-are-universal",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-effaceable-cohomological-delta-functors-are-universal",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-derived-functors-are-universal-delta-functors",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-an-exact-base-functor-has-the-trivial-universal-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-satellites-give-the-first-derived-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-effaceability-means-every-positive-value-is-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-universality-removes-the-need-for-supplied-resolution-data",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-homology-as-a-homological-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-trivial-delta-functor-of-an-exact-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-one-dimension-shift-along-a-projective-presentation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-one-dimension-shift-along-an-injective-copresentation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-extending-a-degree-zero-natural-transformation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-two-universal-delta-functors-and-their-unique-isomorphism",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-affine-face-maps-satisfy-the-cosimplicial-identities",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-the-singular-boundary-squares-to-zero",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-induced-singular-chain-maps-commute-with-boundaries",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-singular-chains-and-homology-are-covariantly-functorial",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-singular-augmentation-commutes-with-boundary",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-zero-th-singular-homology-is-free-on-path-components",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-path-connected-spaces-have-zero-reduced-zero-th-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-singular-homology-of-a-disjoint-union-is-the-direct-sum",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-prism-triangulation-has-the-stated-oriented-boundary",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-singular-chain-homotopy-formula",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-homotopic-maps-induce-the-same-map-on-singular-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-contractible-nonempty-spaces-have-the-homology-of-a-point",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-singular-homology-is-invariant-under-deformation-retracts",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-singular-chain-cross-product-boundary-formula",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-singular-chain-cross-products-are-natural",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-simplicial-to-singular-chains-commute-with-boundaries",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-singular-chain-complex-of-a-point",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-boundaries-of-the-standard-one-and-two-simplices",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-prism-operator-for-a-path-homotopy",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-homology-of-an-interval-from-contractibility",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-homology-of-punctured-euclidean-space-by-deformation-retraction",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-equal-homology-does-not-imply-homotopy-equivalence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-a-singular-cochain-is-not-a-finite-singular-chain",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-regular-functions-form-sheaf-classical",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-global-regular-functions-affine-variety-coordinate-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-affine-morphisms-coordinate-ring-anti-equivalence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-affine-algebraic-set-coordinate-duality-complete",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-morphism-equality-on-dense-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-local-ring-affine-variety-localization",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-function-field-independent-affine-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-rational-map-equivalence-transitive",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-dominant-map-pullback-function-fields",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-rational-maps-to-affine-variety-function-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-birational-equivalence-function-fields",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-direct-image-is-sheaf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-inverse-direct-image-adjunction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-stalk-inverse-image-sheaf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-abelian-sheaves-form-abelian-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-exactness-of-sheaves-stalkwise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-global-sections-left-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-extension-by-zero-adjunction-exactness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-local-homomorphism-residue-field-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-stalk-tensor-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-pullback-pushforward-module-adjunction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-pullback-modules-right-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-gluing-sheaves",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-gluing-ringed-and-locally-ringed-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-direct-image-open-immersion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-extension-by-zero-differs-direct-image",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-skyscraper-sheaf-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-global-sections-not-right-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ringed-space-continuous-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-ringed-space-map-not-locally-ringed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-pullback-free-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-glue-line-bundle-transition-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-presheaf-cokernel-needs-sheafification",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-property-star-and-leaf-reducibility-imply-generalized-niceness",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-the-lemma-three-five-parameter-choice-on-a-large-graph",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-complete-four-blockade-gives-a-four-vertex-clique",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-the-square-root-rescaling-in-lemma-four-four",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-local-frame-characterization-of-a-smooth-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-sections-of-a-distribution-form-a-locally-free-module",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-double-annihilator-recovers-a-finite-rank-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-integral-manifolds-have-the-distribution-dimension",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-involutivity-can-be-checked-on-a-local-frame",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-integrable-distributions-are-involutive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-involutive-frame-reduction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-commuting-independent-vector-fields-give-a-coordinate-system",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-frobenius-local-coordinate-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-frobenius-local-first-integrals",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-kernel-of-a-constant-rank-submersion-is-integrable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-level-set-distributions-are-involutive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-integral-manifolds-are-locally-contained-in-plaques",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-overlapping-plaques-through-a-point-have-compatible-germs",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-tangent-curve-reachability-is-an-equivalence-relation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-maximal-integral-manifolds-partition-the-manifold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-regular-foliations-and-integrable-distributions-correspond",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-smooth-distribution-is-integrable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-frobenius-applies-to-any-variable-rank-family-of-subspaces",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-coordinate-plane-distribution-and-its-affine-leaves",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-kernel-of-a-submersion-as-an-integrable-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-level-set-foliation-of-a-regular-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-product-foliation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-irrational-linear-foliation-of-the-two-torus",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-mobius-band-line-foliation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-the-standard-contact-plane-field-is-not-integrable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-variable-rank-involutive-family-outside-regular-frobenius",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-leaves-of-a-lie-subalgebra-distribution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-associated-graded-of-the-pbw-filtration-is-commutative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-root-space-decomposition-relative-to-a-cartan-subalgebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-root-space-brackets-add-their-roots",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-killing-form-pairs-only-opposite-root-spaces",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-opposite-root-spaces-bracket-to-the-killing-dual-line",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-triangular-decomposition-from-a-chosen-positive-root-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-centralizer-of-a-cartan-element-from-its-vanishing-roots",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-regular-elements-form-a-connected-dense-open-subset",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-root-set-is-a-reduced-crystallographic-root-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-central-action-on-a-cyclic-highest-weight-module-is-scalar",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-casimir-element-is-independent-of-dual-bases",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-quadratic-casimir-element-is-central",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-casimir-eigenvalue-on-a-highest-weight-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-central-elements-have-weight-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-harish-chandra-projection-is-multiplicative-on-the-center",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-harish-chandra-projection-computes-highest-weight-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-harish-chandra-map-is-injective",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-associated-graded-symbol-of-a-central-element-is-invariant",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-regular-semisimple-elements-form-a-dense-open-subset",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-symmetric-invariants-restrict-to-weyl-invariants",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-harish-chandra-isomorphism-for-the-center",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-central-characters-are-dot-weyl-orbits",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-center-is-a-polynomial-algebra-of-rank-many-generators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-enveloping-algebra-is-free-over-its-center",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl2-casimir-and-its-highest-weight-eigenvalue",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-sl3-harish-chandra-center-generators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dot-conjugate-weights-have-the-same-central-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-unshifted-weyl-orbits-do-not-classify-central-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-zero-weight-singular-central-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-noninvariant-quadratic-pbw-element-is-not-central",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-induction-image-is-an-ideal-in-the-representation-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-cyclic-generator-class-functions-by-moebius-inversion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-artin-cyclic-permutation-relation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-artin-induction-for-rational-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-cyclic-fixed-points-detect-rational-representations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-rank-of-the-rational-representation-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-cyclic-local-integrality-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-artin-induction-for-a-cyclic-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-artin-permutation-relation-for-a5",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cyclic-fixed-point-detection-for-s3",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-rational-valued-character-need-not-be-defined-over-the-rationals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-morse-functions-are-transverse-differentials",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-morse-functions-are-dense-by-relative-jet-transversality",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-morse-functions-form-a-residual-subset",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-compact-morse-critical-points-have-uniform-hessian-gaps",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-no-new-critical-points-under-a-compact-c1-small-perturbation",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-morse-functions-are-open-dense-on-a-compact-manifold",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-finitely-many-critical-values-can-be-separated-locally",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-generic-squared-distance-functions-are-morse",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-every-compact-smooth-manifold-admits-an-excellent-morse-function",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-properness-survives-a-controlled-locally-finite-perturbation",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-proper-morse-exhaustions-exist-on-smooth-manifolds",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-generic-and-exceptional-height-directions-on-a-torus",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-squared-distance-to-a-circle-and-its-medial-axis",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-separating-equal-critical-values-by-bump-functions",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-morse-functions-need-not-have-distinct-critical-values",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-computation-history-domino-encoding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-modified-pcp-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-modified-pcp-reduces-to-pcp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-post-correspondence-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-post-correspondence-is-recognizable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-intersection-emptiness-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-universality-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-equivalence-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-ambiguity-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-proper-inclusions-in-the-chomsky-hierarchy",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-pcp-allows-symbol-reordering-within-dominoes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-two-decidable-cfls-have-decidable-intersection-emptiness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-modified-pcp-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-proper-inclusions-in-the-chomsky-hierarchy",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-pcp-allows-symbol-reordering-within-dominoes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-fixed-machine-coding-is-acceptable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-smn-parameter-theorem",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-effective-program-specialization",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-self-reference-construction-from-smn",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-kleenes-second-recursion-theorem",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-recursion-theorem-with-parameters",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-nonhalting-is-productive-and-halting-is-creative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-myhill-isomorphism-theorem-for-creative-sets",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-acceptable-numberings-are-computably-intertranslatable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-recursion-theorem-needs-source-file-access",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-program-indices-are-unique",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-smn-parameter-theorem",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-acceptable-numberings-are-computably-intertranslatable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-recursion-theorem-needs-source-file-access",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-clique",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-clique-is-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-independent-set-and-vertex-cover-are-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-directed-hamiltonian-cycle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-directed-reduces-to-undirected-hamiltonian-cycle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-hamiltonian-path-and-cycle-are-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-subset-sum",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-subset-sum-reduces-to-partition",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-vertex-cover-reduces-to-set-cover",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-gadget-correctness-needs-only-one-direction",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-pseudopolynomial-is-polynomial-in-bit-length",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-clique-is-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-gadget-correctness-needs-only-one-direction",
      "scope": "run",
      "owner": "f"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-dirichlet-character-extension-well-defined",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-dirichlet-character-arithmetic-function-characterization",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-dirichlet-character-values",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-character-orthogonality",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-dirichlet-character-residue-class-indicator",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-nonprincipal-dirichlet-character-complete-sum",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-nonprincipal-dirichlet-character-partial-sums",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-l-euler-product",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-principal-dirichlet-l-factorization",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-positive-log-dirichlet-series-nonvanishing",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-product-dirichlet-l-nonvanishing-line-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-l-nonvanishing-line-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-nonreal-dirichlet-l-nonzero-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-real-dirichlet-l-nonzero-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-l-nonzero-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-natural-density-implies-dirichlet-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-primes-residue-class-dirichlet-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-mertens-primes-arithmetic-progressions",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-primes-arithmetic-progressions",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-characters-modulo-three-four-and-five",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-characters-modulo-eight-and-twelve",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-character-orthogonality-table",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-principal-dirichlet-l-missing-euler-factors",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-character-chi-four-and-leibniz-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-density-of-primes-in-a-small-progression",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-dirichlet-density-does-not-mean-integer-natural-density",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-equivalent-definitions-of-the-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-hilbert-symbol-depends-only-on-square-classes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-real-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-odd-p-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-two-adic-hilbert-symbol-formula",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-binary-quadratic-representation-via-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-ternary-isotropy-via-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-finite-field-quadratic-isotropy-in-dimension-at-least-three",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-local-isotropy-at-almost-all-primes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hilbert-reciprocity-over-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-ternary-hilbert-one-place-principle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hasse-minkowski-for-ternary-forms-over-q",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-global-square-class-approximation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hasse-minkowski-over-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hilbert-symbol-over-the-reals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hilbert-symbol-at-an-odd-prime",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-two-adic-hilbert-symbol",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-local-obstruction-to-a-rational-conic",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-finite-bad-place-test-for-a-ternary-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hilbert-one-place-principle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-hasse-minkowski-for-a-quaternary-form",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-local-global-fails-for-a-cubic-curve",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-rational-isotropy-is-not-integral-representation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-computation-history-domino-encoding",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-modified-pcp-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-modified-pcp-reduces-to-pcp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-post-correspondence-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-post-correspondence-is-recognizable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-intersection-emptiness-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-universality-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-equivalence-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-cfg-ambiguity-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-proper-inclusions-in-the-chomsky-hierarchy",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-pcp-allows-symbol-reordering-within-dominoes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-two-decidable-cfls-have-decidable-intersection-emptiness",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-modified-pcp-is-undecidable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-proper-inclusions-in-the-chomsky-hierarchy",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-pcp-allows-symbol-reordering-within-dominoes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-fixed-machine-coding-is-acceptable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-smn-parameter-theorem",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-effective-program-specialization",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-self-reference-construction-from-smn",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-kleenes-second-recursion-theorem",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-recursion-theorem-with-parameters",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-nonhalting-is-productive-and-halting-is-creative",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-myhill-isomorphism-theorem-for-creative-sets",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-acceptable-numberings-are-computably-intertranslatable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-recursion-theorem-needs-source-file-access",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-program-indices-are-unique",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-smn-parameter-theorem",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-acceptable-numberings-are-computably-intertranslatable",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-recursion-theorem-needs-source-file-access",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-clique",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-clique-is-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-independent-set-and-vertex-cover-are-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-directed-hamiltonian-cycle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-directed-reduces-to-undirected-hamiltonian-cycle",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-hamiltonian-path-and-cycle-are-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-subset-sum",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-subset-sum-reduces-to-partition",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-vertex-cover-reduces-to-set-cover",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-gadget-correctness-needs-only-one-direction",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-pseudopolynomial-is-polynomial-in-bit-length",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-clique-is-np-complete",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-three-sat-reduces-to-three-colourability",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-gadget-correctness-needs-only-one-direction",
      "scope": "run",
      "owner": "f"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **f**, run `frontier-30`

You are the group Alpha for batches **8**, **19**, **20**: 5 A/B pair(s), 10 page(s), 117 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `dirichlet-characters-l-functions-and-primes-in-progressions` | A | number-theory | 348.009 | `dirichlet-series-and-euler-products-examples`, `characters-and-the-orthogonality-relations` |
| 8 | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` | B | number-theory | 348.01 | `dirichlet-characters-l-functions-and-primes-in-progressions` |
| 8 | `hilbert-symbols-and-the-quadratic-local-global-principle` | A | number-theory | 348.017 | `absolute-values-completions-and-p-adic-numbers-examples`, `quadratic-residues-and-the-legendre-symbol`, `quadratic-reciprocity-and-the-jacobi-symbol`, `dirichlet-characters-l-functions-and-primes-in-progressions` |
| 8 | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` | B | number-theory | 348.018 | `hilbert-symbols-and-the-quadratic-local-global-principle` |
| 19 | `post-correspondence-and-language-undecidability` | A | computability-theory | 607 | `computable-reductions-and-rices-theorem`, `context-free-pumping-ogden-and-parsing`, `myhill-nerode-theory-and-dfa-minimization` |
| 19 | `post-correspondence-and-language-undecidability-examples` | B | computability-theory | 608 | `post-correspondence-and-language-undecidability` |
| 19 | `acceptable-numberings-smn-and-the-recursion-theorem` | A | computability-theory | 611 | `primitive-recursive-and-partial-computable-functions`, `computable-reductions-and-rices-theorem` |
| 19 | `acceptable-numberings-smn-and-the-recursion-theorem-examples` | B | computability-theory | 612 | `acceptable-numberings-smn-and-the-recursion-theorem` |
| 20 | `classical-np-completeness-reductions` | A | computability-theory | 623 | `the-cook-levin-theorem`, `graphs-walks-and-connectivity` |
| 20 | `classical-np-completeness-reductions-examples` | B | computability-theory | 624 | `classical-np-completeness-reductions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dirichlet-characters-l-functions-and-primes-in-progressions` — Dirichlet Characters L Functions and Primes in Progressions (24 item(s))

- `def-dirichlet-character-modulo-q` · definition — Dirichlet characters modulo q
- `lem-dirichlet-character-extension-well-defined` · lemma — Extension by zero is well defined and periodic
- `lem-dirichlet-character-arithmetic-function-characterization` · lemma — Arithmetic characterization of Dirichlet characters modulo q
- `def-principal-dirichlet-character` · definition — The principal character modulo q
- `lem-dirichlet-character-values` · lemma — Character values on units are roots of unity
- `thm-dirichlet-character-orthogonality` · theorem — Orthogonality relations for Dirichlet characters modulo q
- `cor-dirichlet-character-residue-class-indicator` · corollary — A residue-class indicator from character sums
- `lem-nonprincipal-dirichlet-character-complete-sum` · lemma — A nonprincipal character has zero complete sum
- `lem-nonprincipal-dirichlet-character-partial-sums` · lemma — Nonprincipal Dirichlet character partial sums are bounded
- `def-dirichlet-l-function` · definition — Dirichlet L-functions
- `thm-dirichlet-l-euler-product` · theorem — Euler product for Dirichlet L-functions
- `thm-principal-dirichlet-l-factorization` · theorem — The principal Dirichlet L-function factors through zeta
- `thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane` · theorem — Nonprincipal Dirichlet L-functions are holomorphic on Re s greater than 0
- `lem-positive-log-dirichlet-series-nonvanishing` · lemma — Positive logarithmic Dirichlet series force boundary nonvanishing
- `thm-product-dirichlet-l-nonvanishing-line-one` · theorem — The full product of Dirichlet L-functions has no zero on Re s = 1
- `thm-dirichlet-l-nonvanishing-line-one` · theorem — Nonprincipal Dirichlet L-functions do not vanish on Re s = 1 away from s = 1
- `lem-nonreal-dirichlet-l-nonzero-at-one` · lemma — A nonreal Dirichlet L-function is nonzero at one
- `lem-real-dirichlet-l-nonzero-at-one` · lemma — A real nonprincipal Dirichlet L-function is nonzero at one
- `thm-dirichlet-l-nonzero-at-one` · theorem — Nonprincipal Dirichlet L-functions are nonzero at one
- `def-natural-and-dirichlet-density` · definition — Natural and Dirichlet density
- `thm-natural-density-implies-dirichlet-density` · theorem — Natural density implies Dirichlet density
- `thm-primes-residue-class-dirichlet-density` · theorem — Primes in one reduced residue class have Dirichlet density 1 over phi(q)
- `thm-mertens-primes-arithmetic-progressions` · theorem — Mertens sum for primes in an arithmetic progression
- `thm-dirichlet-primes-arithmetic-progressions` · theorem — Dirichlet's theorem on primes in arithmetic progressions

### `dirichlet-characters-l-functions-and-primes-in-progressions-examples` — Dirichlet Characters L Functions and Primes in Progressions -- Examples (8 item(s))

- `ex-dirichlet-characters-modulo-three-four-and-five` · example — Dirichlet character tables modulo 3, 4, and 5
- `ex-dirichlet-characters-modulo-eight-and-twelve` · example — Dirichlet character tables modulo 8 and 12
- `ex-dirichlet-character-orthogonality-table` · example — An orthogonality table for Dirichlet characters
- `ex-principal-dirichlet-l-missing-euler-factors` · example — Missing Euler factors for a principal Dirichlet L-function
- `ex-the-character-chi-four-and-leibniz-series` · example — The character chi_4 and the Gregory-Leibniz series
- `ex-dirichlet-density-of-primes-in-a-small-progression` · example — Dirichlet density for a small prime progression
- `cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion` · counterexample — A noncoprime residue class has no Dirichlet conclusion
- `cex-dirichlet-density-does-not-mean-integer-natural-density` · counterexample — Positive prime Dirichlet density does not give positive integer natural density

### `hilbert-symbols-and-the-quadratic-local-global-principle` — Hilbert Symbols and the Quadratic Local Global Principle (17 item(s))

- `def-rational-local-fields` · definition — The rational local fields
- `def-hilbert-symbol-over-a-rational-completion` · definition — The Hilbert symbol over a rational completion
- `lem-equivalent-definitions-of-the-hilbert-symbol` · lemma — Equivalent formulations of the Hilbert symbol
- `lem-hilbert-symbol-depends-only-on-square-classes` · lemma — The Hilbert symbol depends only on square classes
- `thm-real-hilbert-symbol-formula` · theorem — The real Hilbert symbol formula
- `thm-odd-p-hilbert-symbol-formula` · theorem — The odd-prime Hilbert symbol formula
- `thm-two-adic-hilbert-symbol-formula` · theorem — The two-adic Hilbert symbol formula
- `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate` · theorem — The Hilbert symbol is a symmetric bilinear nondegenerate pairing
- `lem-binary-quadratic-representation-via-hilbert-symbol` · lemma — Binary quadratic representation via the Hilbert symbol
- `cor-ternary-isotropy-via-hilbert-symbol` · corollary — Ternary isotropy via the Hilbert symbol
- `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` · lemma — Quadratic forms of dimension at least three over odd finite fields are isotropic
- `thm-local-isotropy-at-almost-all-primes` · theorem — Almost all local completions are isotropic in dimension at least three
- `thm-hilbert-reciprocity-over-the-rationals` · theorem — Hilbert reciprocity over the rationals
- `cor-ternary-hilbert-one-place-principle` · corollary — One local place is determined by the others for ternary forms
- `thm-hasse-minkowski-for-ternary-forms-over-q` · theorem — Hasse-Minkowski for ternary forms over Q
- `lem-global-square-class-approximation` · lemma — Global approximation of finitely many square classes
- `thm-hasse-minkowski-over-the-rationals` · theorem — Hasse-Minkowski theorem over Q

### `hilbert-symbols-and-the-quadratic-local-global-principle-examples` — Hilbert Symbols and the Quadratic Local Global Principle -- Examples (9 item(s))

- `ex-hilbert-symbol-over-the-reals` · example — Hilbert symbols over the real numbers
- `ex-hilbert-symbol-at-an-odd-prime` · example — A Hilbert-symbol computation at an odd prime
- `ex-two-adic-hilbert-symbol` · example — The two-adic Hilbert symbol table
- `ex-local-obstruction-to-a-rational-conic` · example — A local obstruction to a rational conic
- `ex-finite-bad-place-test-for-a-ternary-form` · example — Finite bad places for a ternary form
- `ex-hilbert-one-place-principle` · example — The one-place principle in action
- `ex-hasse-minkowski-for-a-quaternary-form` · example — A quaternary Hasse-Minkowski calculation
- `cex-local-global-fails-for-a-cubic-curve` · counterexample — Selmer's cubic is locally soluble but globally insoluble
- `cex-rational-isotropy-is-not-integral-representation` · counterexample — Rational isotropy does not solve an integral representation problem

### `post-correspondence-and-language-undecidability` — Post Correspondence and Language Undecidability (15 item(s))

- `def-post-correspondence-problem` · definition — The Post correspondence problem
- `def-modified-post-correspondence-problem` · definition — The modified Post correspondence problem
- `lem-computation-history-domino-encoding` · lemma — Accepting computation histories can be encoded by modified-PCP domino matches
- `thm-modified-pcp-is-undecidable` · theorem — The modified Post correspondence problem is undecidable
- `lem-modified-pcp-reduces-to-pcp` · lemma — Modified PCP many-one reduces to PCP
- `thm-post-correspondence-is-undecidable` · theorem — The Post correspondence problem is undecidable
- `prop-post-correspondence-is-recognizable` · proposition — The Post correspondence problem is recognizable
- `thm-cfg-intersection-emptiness-is-undecidable` · theorem — Emptiness of the intersection of two CFGs is undecidable
- `thm-cfg-universality-is-undecidable` · theorem — CFG universality is undecidable
- `thm-cfg-equivalence-is-undecidable` · theorem — CFG equivalence is undecidable
- `thm-cfg-ambiguity-is-undecidable` · theorem — CFG ambiguity is undecidable
- `def-chomsky-hierarchy` · definition — The Chomsky hierarchy of regular, context-free, decidable, and computably enumerable languages
- `thm-proper-inclusions-in-the-chomsky-hierarchy` · theorem — The inclusions in the Chomsky hierarchy are proper
- `fs-pcp-allows-symbol-reordering-within-dominoes` · false-statement — FALSE: PCP permits reordering symbols inside a domino
- `fs-two-decidable-cfls-have-decidable-intersection-emptiness` · false-statement — FALSE: decidable CFLs have a decidable intersection-emptiness problem

### `post-correspondence-and-language-undecidability-examples` — Post Correspondence and Language Undecidability: Examples and Counterexamples (3 item(s))

- `ex-modified-pcp-is-undecidable` · example — A computation-history domino system whose matches spell a halting run
- `ex-proper-inclusions-in-the-chomsky-hierarchy` · example — Witness languages for the proper inclusions in the Chomsky hierarchy
- `cex-pcp-allows-symbol-reordering-within-dominoes` · counterexample — A domino family where matching fails unless one illegally permutes symbols inside a tile

### `acceptable-numberings-smn-and-the-recursion-theorem` — Acceptable Numberings, the s-m-n Theorem, and Recursion (16 item(s))

- `def-numbering-of-partial-computable-functions` · definition — Numberings of partial computable functions
- `def-universal-and-acceptable-numbering` · definition — Universal and acceptable numberings
- `prop-fixed-machine-coding-is-acceptable` · proposition — The fixed machine coding gives an acceptable numbering
- `def-parameter-specialization-function` · definition — Parameter-specialization functions
- `thm-smn-parameter-theorem` · theorem — The s-m-n theorem
- `cor-effective-program-specialization` · corollary — Effective program specialization
- `def-computable-program-transformer` · definition — Computable program transformers
- `lem-self-reference-construction-from-smn` · lemma — The diagonal self-reference construction from s-m-n
- `thm-kleenes-second-recursion-theorem` · theorem — Kleene's second recursion theorem
- `thm-recursion-theorem-with-parameters` · theorem — The recursion theorem with parameters
- `def-productive-and-creative-set` · definition — Productive and creative sets
- `thm-nonhalting-is-productive-and-halting-is-creative` · theorem — The nonhalting set is productive and the halting set is creative
- `thm-myhill-isomorphism-theorem-for-creative-sets` · theorem — Myhill's isomorphism theorem for creative sets
- `prop-acceptable-numberings-are-computably-intertranslatable` · proposition — Acceptable numberings are computably intertranslatable
- `fs-recursion-theorem-needs-source-file-access` · false-statement — FALSE: the recursion theorem requires source-code access
- `fs-program-indices-are-unique` · false-statement — FALSE: a partial computable function has a unique program index

### `acceptable-numberings-smn-and-the-recursion-theorem-examples` — Acceptable Numberings, the s-m-n Theorem, and Recursion: Examples and Counterexamples (3 item(s))

- `ex-smn-parameter-theorem` · example — Specializing a two-argument program to obtain a unary residual program
- `ex-acceptable-numberings-are-computably-intertranslatable` · example — Compiling between two acceptable numberings
- `cex-recursion-theorem-needs-source-file-access` · counterexample — A quine obtained without inspecting its own source file

### `classical-np-completeness-reductions` — Classical NP-Completeness Reductions (19 item(s))

- `def-reduction-gadget-and-interface-invariant` · definition — Reduction gadgets and interface invariants
- `def-clique-independent-set-and-vertex-cover-problems` · definition — Clique, independent set, and vertex cover decision problems
- `thm-three-sat-reduces-to-clique` · theorem — 3SAT polynomial-time many-one reduces to CLIQUE
- `cor-clique-is-np-complete` · corollary — CLIQUE is NP-complete
- `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible` · theorem — CLIQUE, INDEPENDENT SET, and VERTEX COVER are polynomially interreducible
- `cor-independent-set-and-vertex-cover-are-np-complete` · corollary — INDEPENDENT SET and VERTEX COVER are NP-complete
- `def-directed-hamiltonian-path-and-cycle-problems` · definition — Directed and undirected Hamiltonian path and cycle decision problems
- `thm-three-sat-reduces-to-directed-hamiltonian-cycle` · theorem — 3SAT polynomial-time many-one reduces to directed Hamiltonian cycle
- `thm-directed-reduces-to-undirected-hamiltonian-cycle` · theorem — Directed Hamiltonian cycle polynomial-time many-one reduces to undirected Hamiltonian cycle
- `cor-hamiltonian-path-and-cycle-are-np-complete` · corollary — Directed and undirected Hamiltonian path and cycle are NP-complete
- `def-subset-sum-and-partition` · definition — Subset sum and partition decision problems
- `thm-three-sat-reduces-to-subset-sum` · theorem — 3SAT polynomial-time many-one reduces to subset sum
- `thm-subset-sum-reduces-to-partition` · theorem — Subset sum polynomial-time many-one reduces to partition
- `def-set-cover` · definition — The set cover decision problem
- `thm-vertex-cover-reduces-to-set-cover` · theorem — Vertex cover polynomial-time many-one reduces to set cover
- `def-three-colourability` · definition — The three-colourability decision problem
- `thm-three-sat-reduces-to-three-colourability` · theorem — 3SAT polynomial-time many-one reduces to 3-COLORABILITY
- `fs-gadget-correctness-needs-only-one-direction` · false-statement — A gadget reduction is correct as soon as every yes-instance maps to a yes-instance
- `fs-pseudopolynomial-is-polynomial-in-bit-length` · false-statement — A pseudopolynomial algorithm is polynomial in the binary input length

### `classical-np-completeness-reductions-examples` — Classical NP-Completeness Reductions: Examples and Counterexamples (3 item(s))

- `ex-clique-is-np-complete` · example — A worked clause-cluster instance witnessing that CLIQUE is NP-complete
- `ex-three-sat-reduces-to-three-colourability` · example — A small 3SAT instance and its three-colourability gadget graph
- `cex-gadget-correctness-needs-only-one-direction` · counterexample — A forward-only mapping that is not a correct many-one reduction

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-30`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
