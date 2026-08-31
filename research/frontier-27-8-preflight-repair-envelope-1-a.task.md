# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-27",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "a",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-use-unmapped [lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold]: L1 is cited by 1.1 but the contract omits it",
      "output": "proof-contract: 94 error(s), 3 warning(s), 357/357 item(s) checked\nERROR citation-use-unmapped [lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold]: L1 is cited by 1.1 but the contract omits it\nERROR step-entry-input-omitted [lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold]: step-1-1 omits L1, cited by 1.1\nERROR citation-fact-uncontracted [prop-a-countable-chart-cover-detects-manifold-null-sets]: F1 -> def-null-subset-of-a-smooth-manifold needs an exact citation contract\nERROR step-entry-input-omitted [prop-a-countable-chart-cover-detects-manifold-null-sets]: step-1-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [prop-a-countable-chart-cover-detects-manifold-null-sets]: step-2-1 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [prop-a-countable-chart-cover-detects-manifold-null-sets]: step-3-1 omits 1.2, cited by 3.1\nERROR step-unmapped [prop-a-countable-chart-cover-detects-manifold-null-sets]: 1.2 has no derivation or routine-step contract\nERROR citation-use-not-supported [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L1 is not cited by declared use 1.2\nERROR citation-use-unmapped [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L1 is cited by 2.1 but the contract omits it\nERROR citation-source-not-in-fact [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 does not link [[def-null-and-content-zero-in-rn]]\nERROR citation-use-not-supported [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 is not cited by declared use 1.1\nERROR citation-source-not-in-fact [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 does not link [[thm-countable-union-of-null-is-null]]\nERROR citation-undeclared-dependency [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 cites thm-countable-union-of-null-is-null, which is absent from deps/justified_by/forward_refs\nERROR citation-use-not-supported [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 is not cited by declared use 1.1\nERROR citation-fact-uncontracted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: F1 -> def-null-and-content-zero-in-rn needs an exact citation contract\nERROR citation-fact-uncontracted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: A1 -> def-countable-choice needs an exact citation contract\nERROR citation-fact-uncontracted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 -> thm-n-cross-n-countable needs an exact citation contract\nERROR citation-fact-uncontracted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: L2 -> thm-geometric-series needs an exact citation contract\nERROR step-entry-input-omitted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: step-1-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: step-1-2 omits A1, cited by 1.2\nERROR step-entry-input-omitted [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: step-2-1 omits L1, cited by 2.1\nERROR step-unmapped [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]: L1 quote does not occur in prop-a-countable-chart-cover-detects-manifold-null-sets's Statement\nERROR citation-use-not-supported [lem-sard-slicing-for-compact-null-sections]: F1 is not cited by declared use 1.1\nERROR citation-use-unmapped [lem-sard-slicing-for-compact-null-sections]: F1 is cited by 1.2 but the contract omits it\nERROR citation-fact-uncontracted [lem-sard-slicing-for-compact-null-sections]: L1 -> thm-lebesgue-number-lemma needs an exact citation contract\nERROR citation-fact-uncontracted [lem-sard-slicing-for-compact-null-sections]: L2 -> prop-the-image-of-a-lower-dimensional-c1-manifold-is-null needs an exact citation contract\nERROR step-entry-input-omitted [lem-sard-slicing-for-compact-null-sections]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [lem-sard-slicing-for-compact-null-sections]: step-2-1 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [lem-sard-slicing-for-compact-null-sections]: step-3-1 omits L1, cited by 3.1\nERROR step-entry-input-omitted [lem-sard-slicing-for-compact-null-sections]: step-4-1 omits 1.1, cited by 4.1\nERROR step-unmapped [lem-sard-slicing-for-compact-null-sections]: 1.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-morse-sard-for-euclidean-maps]: L1 quote does not occur in lem-sard-slicing-for-compact-null-sections's Statement\nERROR citation-quote-mismatch [thm-morse-sard-for-euclidean-maps]: L1 quote does not occur in lem-sard-on-the-infinitely-flat-critical-stratum's Statement\nERROR citation-quote-mismatch [thm-morse-sard-for-smooth-manifolds]: L1 quote does not occur in prop-a-countable-chart-cover-detects-manifold-null-sets's Statement\nERROR citation-quote-mismatch [fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology]: L1 quote does not occur in prop-transversality-is-stable-on-a-compact-source's Statement\nERROR citation-quote-mismatch [prop-linear-pullback-respects-tensor-products-and-permutations]: F1 quote does not occur in def-pullback-of-a-covariant-tensor-by-a-linear-map's Definition\nERROR citation-quote-mismatch [thm-universal-property-of-the-finite-dimensional-exterior-power]: F1 quote does not occur in def-finite-dimensional-exterior-power-of-vectors's Definition\nERROR citation-quote-mismatch [prop-exterior-power-duality-pairing]: F1 quote does not occur in def-finite-dimensional-exterior-power-of-vectors's Definition\nERROR citation-quote-mismatch [prop-the-top-exterior-power-is-one-dimensional]: L1 quote does not occur in cor-dimension-of-the-kth-exterior-power-is-binomial's Statement\nERROR citation-quote-mismatch [prop-interior-product-is-a-graded-antiderivation]: F1 quote does not occur in def-interior-product-on-alternating-covectors's Definition\nERROR citation-quote-mismatch [prop-pullback-of-covariant-tensors-is-smooth-and-functorial]: L1 quote does not occur in prop-linear-pullback-respects-tensor-products-and-permutations's Statement\nERROR citation-quote-mismatch [prop-pullback-of-covariant-tensors-is-smooth-and-functorial]: L1 quote does not occur in prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth's Statement\nERROR citation-quote-mismatch [fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map]: L1 quote does not occur in prop-pullback-of-covariant-tensors-is-smooth-and-functorial's Statement\nERROR citation-quote-mismatch [prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]: L1 quote does not occur in prop-pullback-of-covariant-tensors-is-smooth-and-functorial's Statement\nERROR citation-quote-mismatch [prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]: L2 quote does not occur in prop-linear-pullback-respects-tensor-products-and-permutations's Statement\nERROR citation-quote-mismatch [prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically]: L1 quote does not occur in prop-pullback-of-covariant-tensors-is-smooth-and-functorial's Statement\nERROR citation-quote-mismatch [fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n]: L1 quote does not occur in cor-dimension-of-the-kth-exterior-power-is-binomial's Statement\nERROR citation-quote-mismatch [ex-determinant-as-the-pairing-of-top-exterior-powers]: L2 quote does not occur in prop-the-top-exterior-power-is-one-dimensional's Statement\nERROR citation-quote-mismatch [cex-a-vector-field-with-no-pullback-under-a-noninjective-map]: L1 quote does not occur in fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map's Statement\nERROR citation-fact-uncontracted [thm-myhill-nerode-characterization]: L1 -> def-regular-language-by-dfa-recognition needs an exact citation contract\nERROR citation-fact-uncontracted [thm-pumping-lemma-for-regular-languages]: L0 -> def-regular-language-by-dfa-recognition needs an exact citation contract\nERROR step-entry-input-omitted [thm-pumping-lemma-for-regular-languages]: step-1-1 omits L0, cited by 1.1\nERROR citation-fact-uncontracted [cex-the-pumping-lemma-characterizes-regular-languages]: L3 -> fs-the-pumping-lemma-characterizes-regular-languages needs an exact citation contract\nERROR step-entry-input-omitted [cex-the-pumping-lemma-characterizes-regular-languages]: step-1-2 omits L3, cited by 1.2\nERROR citation-quote-mismatch [thm-recognizable-iff-enumerable]: L1 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [thm-decidable-iff-language-and-complement-are-recognizable]: L1 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [thm-recognizable-languages-are-closed-under-union-and-intersection]: L1 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [thm-decidable-languages-are-closed-under-boolean-operations]: L1 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [prop-machine-descriptions-form-a-decidable-language]: L2 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [fs-recognizable-means-total]: L1 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [fs-every-countable-language-is-decidable]: L3 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR step-entry-input-omitted [fs-every-countable-language-is-decidable]: step-2-1 omits F1, cited by 2.1\nERROR citation-quote-mismatch [cex-recognizable-means-total]: L1 quote does not occur in def-decidable-and-recognizable-language's Definition\nERROR citation-quote-mismatch [thm-kleene-normal-form]: L1 quote does not occur in def-mu-minimization-and-partial-recursive-function's Definition\nERROR citation-quote-mismatch [thm-kleene-normal-form]: L2 quote does not occur in def-kleene-t-predicate-and-output-function's Definition\nERROR citation-quote-mismatch [thm-partial-recursive-iff-turing-computable]: L2 quote does not occur in def-mu-minimization-and-partial-recursive-function's Definition\nERROR citation-quote-mismatch [thm-partial-recursive-iff-turing-computable]: L3 quote does not occur in thm-kleene-normal-form's Statement\nERROR citation-use-not-supported [thm-partial-recursive-iff-turing-computable]: L4 is not cited by declared use 1.1\nERROR citation-quote-mismatch [thm-partial-recursive-iff-turing-computable]: L5 quote does not occur in def-kleene-t-predicate-and-output-function's Definition\nERROR citation-quote-mismatch [thm-lambda-definable-iff-partial-recursive]: L1 quote does not occur in def-lambda-term-beta-reduction-and-represented-function's Definition\nERROR citation-quote-mismatch [thm-lambda-definable-iff-partial-recursive]: L2 quote does not occur in def-mu-minimization-and-partial-recursive-function's Definition\nERROR citation-fact-uncontracted [thm-lambda-definable-iff-partial-recursive]: L4 -> def-natural-number-coding-of-finite-sequences needs an exact citation contract\nERROR citation-fact-uncontracted [thm-lambda-definable-iff-partial-recursive]: L4 -> thm-sequence-length-and-coordinate-functions-are-primitive-recursive needs an exact citation contract\nERROR step-entry-input-omitted [thm-lambda-definable-iff-partial-recursive]: step-1-2 omits L4, cited by 1.2\nERROR citation-quote-mismatch [fs-mu-minimization-is-always-total]: L1 quote does not occur in def-mu-minimization-and-partial-recursive-function's Definition\nERROR citation-use-unmapped [ex-lambda-definable-iff-partial-recursive]: L1 is cited by 3.1 but the contract omits it\nERROR step-entry-step-missing [ex-lambda-definable-iff-partial-recursive]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-step-missing [ex-lambda-definable-iff-partial-recursive]: step-2-1 names missing step 1.2\nERROR step-unmapped [ex-lambda-definable-iff-partial-recursive]: 3.1 has no derivation or routine-step contract\nERROR boundary-evidence-step-missing [ex-lambda-definable-iff-partial-recursive]: zero names missing step 1.2\nERROR boundary-evidence-step-missing [ex-lambda-definable-iff-partial-recursive]: one names missing step 1.2\nERROR citation-quote-mismatch [lem-time-bounds-imply-space-bounds]: L2 quote does not occur in def-asymptotic-resource-comparison's Definition\nERROR citation-quote-mismatch [thm-multitape-to-single-tape-time-simulation]: L3 quote does not occur in def-asymptotic-resource-comparison's Definition\nERROR citation-quote-mismatch [thm-multitape-to-single-tape-time-simulation]: L4 quote does not occur in def-dtime-ntime-dspace-and-nspace's Definition\nERROR citation-quote-mismatch [thm-multitape-to-single-tape-space-simulation]: L3 quote does not occur in def-asymptotic-resource-comparison's Definition\nERROR citation-quote-mismatch [thm-multitape-to-single-tape-space-simulation]: L4 quote does not occur in def-dtime-ntime-dspace-and-nspace's Definition\nERROR citation-fact-missing [thm-universal-simulation-with-logarithmic-overhead]: L4 is not a fact in thm-universal-simulation-with-logarithmic-overhead\nERROR step-entry-input-fact-missing [thm-universal-simulation-with-logarithmic-overhead]: step-2-1 names missing fact L4\nERROR citation-fact-missing [prop-polynomial-time-and-space-are-model-invariant]: L3 is not a fact in prop-polynomial-time-and-space-are-model-invariant\nERROR citation-fact-missing [prop-polynomial-time-and-space-are-model-invariant]: L4 is not a fact in prop-polynomial-time-and-space-are-model-invariant\nERROR step-entry-input-fact-missing [prop-polynomial-time-and-space-are-model-invariant]: step-1-2 names missing fact L3\nERROR step-entry-input-fact-missing [prop-polynomial-time-and-space-are-model-invariant]: step-1-2 names missing fact L4\nERROR citation-quote-mismatch [prop-polynomially-related-encodings-preserve-polynomial-classes]: L3 quote does not occur in def-dtime-ntime-dspace-and-nspace's Definition\nWARN shotgun-bracket [thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property]: 2.2 cites 4 of 7 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\nWARN shotgun-bracket [lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement]: 1.2 cites 4 of 5 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\nWARN shotgun-bracket [thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property]: 2.2 cites 4 of 6 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
        "prop-a-countable-chart-cover-detects-manifold-null-sets",
        "prop-countable-unions-and-subsets-of-manifold-null-sets-are-null",
        "def-null-and-content-zero-in-rn",
        "thm-countable-union-of-null-is-null",
        "prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold",
        "lem-sard-slicing-for-compact-null-sections",
        "thm-morse-sard-for-euclidean-maps",
        "thm-morse-sard-for-smooth-manifolds",
        "fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology",
        "prop-linear-pullback-respects-tensor-products-and-permutations",
        "thm-universal-property-of-the-finite-dimensional-exterior-power",
        "prop-exterior-power-duality-pairing",
        "prop-the-top-exterior-power-is-one-dimensional",
        "prop-interior-product-is-a-graded-antiderivation",
        "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
        "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
        "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges",
        "prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically",
        "fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n",
        "ex-determinant-as-the-pairing-of-top-exterior-powers",
        "cex-a-vector-field-with-no-pullback-under-a-noninjective-map",
        "thm-myhill-nerode-characterization",
        "thm-pumping-lemma-for-regular-languages",
        "cex-the-pumping-lemma-characterizes-regular-languages",
        "thm-recognizable-iff-enumerable",
        "thm-decidable-iff-language-and-complement-are-recognizable",
        "thm-recognizable-languages-are-closed-under-union-and-intersection",
        "thm-decidable-languages-are-closed-under-boolean-operations",
        "prop-machine-descriptions-form-a-decidable-language",
        "fs-recognizable-means-total",
        "fs-every-countable-language-is-decidable",
        "cex-recognizable-means-total",
        "thm-kleene-normal-form",
        "thm-partial-recursive-iff-turing-computable",
        "thm-lambda-definable-iff-partial-recursive",
        "fs-mu-minimization-is-always-total",
        "ex-lambda-definable-iff-partial-recursive",
        "lem-time-bounds-imply-space-bounds",
        "thm-multitape-to-single-tape-time-simulation",
        "thm-multitape-to-single-tape-space-simulation",
        "thm-universal-simulation-with-logarithmic-overhead",
        "prop-polynomial-time-and-space-are-model-invariant",
        "prop-polynomially-related-encodings-preserve-polynomial-classes",
        "thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property",
        "lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement",
        "thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint]: thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint is critical risk and lacks a ",
      "output": "CRITICAL 9 [cor-minimal-prime-has-height-zero] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [lem-prime-chains-in-a-domain-start-at-zero] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-height-in-quotient-is-relative-chain-length] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 16 [lem-principal-ideal-theorem-reduction-to-local-domain] 3:8 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 13 [lem-principal-ideal-theorem-associated-prime-step] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-krull-principal-ideal-theorem] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [cor-noetherian-local-domain-dimension-zero-iff-field] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-minimal-prime-over-a-nonzerodivisor-has-height-one] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 12 [lem-height-theorem-first-generator-reduction] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 9 [lem-height-theorem-quotient-induction] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [thm-krull-height-theorem] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 8 [cor-height-of-a-prime-bounded-by-minimal-number-of-generators] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 10 [lem-height-converse-parameter-selection] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 12 [thm-krull-height-theorem-converse] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [lem-parameter-ideal-equivalent-m-primary] 1:2 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 14 [lem-parameter-selection-avoids-minimal-components] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-parameter-dimension-drop-is-exact] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [thm-existence-of-systems-of-parameters] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-dimension-as-minimal-number-of-radical-generators] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 5 [cor-dimension-drops-under-a-parameter] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-localisation-dimension-does-not-increase] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [cor-quotient-dimension-does-not-increase] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-polynomial-ring-dimension-lower-chain] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 11 [lem-polynomial-prime-contraction-height-jump-at-most-one] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 11 [lem-polynomial-ring-dimension-upper-bound] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-dimension-of-a-finite-polynomial-ring-over-a-field] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-affine-domain-normalisation-dimension-upper-bound] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [lem-affine-domain-normalisation-dimension-lower-bound] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-affine-domain-dimension-transcendence-degree] 2:5 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [lem-affine-domain-chain-dimension-formula-step] 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-dimension-formula-for-affine-domains] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-height-plus-quotient-dimension-affine-domain] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-affine-domain-maximal-ideal-height-equals-dimension] 1:2 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 10 [cor-maximal-chains-in-affine-domains-have-equal-length] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-relative-height-in-a-quotient] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-principal-ideal-height-zero-for-a-zerodivisor] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [ex-height-theorem-bound-sharp] 1:3 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 13 [ex-system-of-parameters-not-a-minimal-generating-set] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 8 [ex-localisation-strictly-lowers-dimension] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-polynomial-dimension-zero-ring-boundary] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-affine-dimension-formula] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [prop-conjugate-gradient-denominators-are-positive-before-convergence] 1:2 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate] 1:3 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 6 [thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-conjugate-gradient-chebyshev-bound-in-the-a-norm] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space] 2:4 declared dependencies; 2:4 cited facts\nCRITICAL 13 [thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues] no signals\nMODERATE 3 [cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix] 1:2 cited facts\nORDINARY 2 [ex-minres-on-a-symmetric-indefinite-system] 2:boundary-sensitive language\nHIGH 6 [ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number] 2:boundary-sensitive language\nORDINARY 1 [cex-a-preconditioner-can-worsen-the-preconditioned-condition-number] 1:2 cited facts\nCRITICAL 9 [thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 3 [thm-box-step-functions-are-dense-in-l-p-of-rn] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-c-c-rn-is-dense-in-l-p-of-rn] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language\nMODERATE 4 [lem-countable-generators-yield-countable-set-algebras] 2:5 declared dependencies; 2:5 cited facts\nCRITICAL 8 [lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-l-infinity-of-unit-interval-is-not-separable] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p] 2:5 declared dependencies; 2:5 cited facts\nHIGH 6 [thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nMODERATE 4 [lem-borel-representatives-make-the-convolution-integrand-borel-measurable] 2:6 declared dependencies; 2:4 cited facts\nHIGH 5 [lem-convolution-is-independent-of-the-chosen-borel-representatives] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [prop-l-one-convolution-is-bilinear-commutative-and-associative] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-elementary-duality-formula-for-nonnegative-l-p-functions] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-minkowski-integral-inequality] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-young-convolution-inequality] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [prop-mollifier-families-are-l-one-approximate-identities] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign] 2:4 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-l-one-approximate-identities-converge-in-l-p] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-c-c-infinity-rn-is-dense-in-l-p-of-rn] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-mollifying-the-unit-interval-indicator-at-two-scales] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval] 2:boundary-sensitive language\nORDINARY 2 [ex-initial-interval-indicators-are-one-separated-in-l-infinity] 2:boundary-sensitive language\nORDINARY 0 [ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function] no signals\nORDINARY 2 [ex-the-gaussian-family-is-an-l-one-approximate-identity] 2:boundary-sensitive language\nMODERATE 4 [fs-c-c-of-rn-is-dense-in-l-infinity-of-rn] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [fs-l-p-of-every-measure-space-is-separable-for-finite-p] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 2 [fs-translation-is-continuous-in-l-infinity] 2:boundary-sensitive language\nMODERATE 4 [fs-l-one-convolution-is-defined-at-every-point] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-two-l-two-functions-can-have-convolution-outside-l-two] 2:boundary-sensitive language\nORDINARY 1 [fs-convolution-is-measurable-for-every-lebesgue-representative] 1:3 cited facts\nORDINARY 0 [lem-reverse-triangle-inequality-in-a-normed-space] no signals\nMODERATE 4 [lem-complete-subspace-is-closed] 1:2 cited facts; 3:biconditional / both-direction claim\nMODERATE 4 [lem-closed-subspace-of-a-banach-space-is-banach] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [lem-vector-operations-are-continuous-in-a-normed-space] 2:6 declared dependencies; 1:2 cited facts\nHIGH 5 [lem-finite-product-norms-are-equivalent] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-finite-products-of-banach-spaces-are-banach] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-absolutely-convergent-series-is-cauchy] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-banach-series-criterion] 2:4 declared dependencies; 1:2 cited facts; 1:6 numbered proof steps; 2:analytic limiting/completeness language\nCRITICAL 11 [lem-completion-operations-are-well-defined] 3:8 declared dependencies; 2:8 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-metric-completion-carries-a-unique-banach-space-structure] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-completion-universal-property-for-bounded-linear-maps] 3:8 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 6 [cor-normed-space-completions-are-uniquely-linearly-isometric] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [ex-ell-infinity-is-a-banach-space] 2:analytic limiting/completeness language\nMODERATE 3 [ex-c0-is-a-banach-space] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-cb-of-a-space-is-banach] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-c-of-a-compact-space-is-banach] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-finite-sequences-c00-with-standard-norms] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-polynomials-are-not-complete-in-the-supremum-norm] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-lp-banach-space-dictionary] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cex-an-incomplete-subspace-need-not-be-closed] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [cex-equivalent-metrics-need-not-come-from-equivalent-norms] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [thm-in-a-symmetric-monoidal-category-the-two-closures-agree] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [cex-a-monoidal-category-need-not-be-closed] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 5 [thm-the-internal-hom-is-continuous-in-each-variable] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 0 [thm-the-internal-hom-composition-morphism] no signals\nORDINARY 1 [thm-the-unit-is-an-internal-hom-unit] 1:2 cited facts\nMODERATE 3 [thm-set-is-cartesian-closed] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-the-category-of-small-categories-is-cartesian-closed] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-a-presheaf-category-on-a-small-category-is-cartesian-closed] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-currying-and-uncurrying-are-mutually-inverse] 2:4 declared dependencies; 2:4 cited facts\nHIGH 5 [cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-cartesian-closed-preorders-have-relative-implications] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed] 1:2 cited facts\nMODERATE 3 [thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 5 [thm-set-is-locally-cartesian-closed] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-a-subobject-classifier-represents-the-subobject-functor] 2:5 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-the-two-element-set-is-a-subobject-classifier-for-sets] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 1 [fs-every-monoidal-category-is-closed] 1:2 cited facts\nORDINARY 1 [fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category] 1:3 cited facts\nMODERATE 4 [fs-a-cartesian-closed-category-has-all-finite-limits] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-every-cartesian-closed-category-is-locally-cartesian-closed] 2:boundary-sensitive language\nMODERATE 3 [fs-a-subobject-classifier-is-any-object-representing-monomorphisms] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-the-function-set-as-an-exponential-computed] 2:boundary-sensitive language\nORDINARY 0 [ex-currying-for-sets-of-three-variables] no signals\nORDINARY 1 [ex-the-internal-hom-of-abelian-groups] 1:2 cited facts\nORDINARY 2 [ex-the-exponential-of-two-small-categories] 2:boundary-sensitive language\nMODERATE 3 [ex-a-locally-cartesian-closed-slice-computed] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-the-subobject-classifier-of-a-presheaf-category] no signals\nMODERATE 3 [lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-the-preconnecting-arrow-annihilates-boundaries] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [prop-elementwise-formula-for-the-connecting-map-in-module-categories] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [lem-exactness-at-the-homology-of-the-left-complex] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-exactness-at-the-homology-of-the-middle-complex] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-exactness-at-the-homology-of-the-right-complex] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-exactness-at-the-target-of-the-connecting-map] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-long-exact-sequence-in-homology] 2:6 declared dependencies; 2:5 cited facts\nHIGH 6 [thm-naturality-of-the-homology-connecting-morphism] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-the-long-exact-homology-sequence-is-natural] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-long-exact-sequence-in-cohomology] 1:3 cited facts\nORDINARY 1 [thm-naturality-of-the-cohomology-connecting-morphism] 1:3 cited facts\nMODERATE 3 [cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-the-cone-long-exact-sequence] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 3 [prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-the-cone-criterion-from-the-general-long-exact-sequence] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 4 [thm-long-exact-sequence-of-relative-homology-for-a-composable-pair] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 3 [cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-homology-of-a-degreewise-split-direct-sum-sequence] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-short-five-lemma-for-quasi-isomorphisms] 2:boundary-sensitive language\nORDINARY 2 [prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees] 2:boundary-sensitive language\nORDINARY 1 [prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws] 1:3 cited facts\nMODERATE 3 [fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-the-cohomology-connecting-morphism-lowers-degree] 2:boundary-sensitive language\nORDINARY 1 [fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square] 1:2 cited facts\nORDINARY 2 [ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes] 2:boundary-sensitive language\nORDINARY 1 [ex-a-degreewise-split-sequence-with-nonzero-connecting-map] 1:2 cited facts\nORDINARY 0 [ex-the-cone-long-exact-sequence-for-multiplication-by-m] no signals\nORDINARY 2 [ex-two-out-of-three-for-a-diagram-of-finite-complexes] 2:boundary-sensitive language\nORDINARY 2 [ex-a-six-term-cohomology-sequence] 2:boundary-sensitive language\nORDINARY 2 [cex-homology-is-not-an-exact-functor] 2:boundary-sensitive language\nMODERATE 3 [ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-relative-homology-of-a-composable-pair-of-stalk-complexes] 2:quotient or equivalence-class construction\nORDINARY 1 [cor-the-four-vertex-path-has-the-erdos-hajnal-property] 1:2 cited facts\nMODERATE 4 [thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 3 [cor-the-bull-graph-has-the-erdos-hajnal-property] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement] 2:6 declared dependencies; 2:6 cited facts; 1:8 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-the-h-zero-graph-has-the-erdos-hajnal-property] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [ex-the-e-graph-and-co-e-graph-by-adjacency] 1:3 cited facts\nMODERATE 3 [ex-the-bird-graph-and-co-bird-graph-by-adjacency] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-h-zero-is-the-five-wheel] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments] 2:boundary-sensitive language\nMODERATE 4 [lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair] 1:3 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 9 [lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph] 3:7 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold] 2:induction, recursion, or minimality\nCRITICAL 8 [lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair] 3:7 declared dependencies; 2:4 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [ex-the-five-vertex-path-is-leaf-reducible] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-a-nearly-covered-sparse-pair-at-small-parameters] no signals\nORDINARY 2 [ex-a-numeric-run-of-the-lemma-two-nine-iteration] 2:boundary-sensitive language\nORDINARY 0 [ex-a-four-tooth-comb-with-an-external-complete-vertex] no signals\nORDINARY 1 [lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets] 1:3 cited facts\nCRITICAL 9 [lem-c1-local-diffeomorphisms-preserve-null-sets-locally] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [prop-the-null-set-definition-is-independent-of-the-smooth-atlas] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [prop-a-countable-chart-cover-detects-manifold-null-sets] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold] 2:boundary-sensitive language\nMODERATE 3 [prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-the-image-of-a-lower-dimensional-c1-manifold-is-null] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-positive-codimension-immersed-submanifolds-are-null] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-sard-slicing-for-compact-null-sections] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-sard-on-the-nonflat-critical-strata] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-sard-on-the-infinitely-flat-critical-stratum] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-morse-sard-for-euclidean-maps] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-morse-sard-for-smooth-manifolds] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-regular-values-have-null-complement-and-are-dense] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [cor-regular-values-form-a-dense-g-delta-set] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient] 1:2 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nHIGH 6 [thm-transverse-preimage-theorem] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [cor-transverse-intersection-theorem] 1:2 cited facts\nMODERATE 4 [thm-transverse-fibre-product-theorem] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [cor-a-submersion-is-transverse-to-every-embedded-submanifold] 1:2 cited facts\nMODERATE 3 [prop-transversality-to-a-point-is-the-regular-value-condition] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [prop-local-graph-characterization-by-transversality-to-vertical-fibres] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [prop-global-graph-characterization-by-one-point-transverse-fibres] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 9 [thm-parametric-transversality] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [cor-generic-translations-of-a-map-to-euclidean-space-are-transverse] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-transversality-is-stable-on-a-compact-source] 2:4 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-every-critical-point-is-an-isolated-point] 2:boundary-sensitive language\nHIGH 5 [fs-the-set-of-critical-values-is-always-closed] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-two-submanifolds-with-nonempty-intersection-are-transverse] 2:boundary-sensitive language\nORDINARY 0 [fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold] no signals\nORDINARY 2 [fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology] 2:boundary-sensitive language\nORDINARY 2 [ex-critical-points-and-values-of-a-height-function-on-a-sphere] 2:boundary-sensitive language\nMODERATE 3 [ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-a-smooth-map-with-a-nonclosed-critical-value-set] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-transverse-and-tangent-intersections-of-plane-curves] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set] no signals\nMODERATE 3 [ex-a-fibre-product-of-submersions] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely] 2:boundary-sensitive language\nORDINARY 2 [ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids] 2:boundary-sensitive language\nORDINARY 0 [cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension] no signals\nORDINARY 0 [prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear] no signals\nORDINARY 0 [prop-symmetrization-and-alternation-are-projections] no signals\nORDINARY 1 [lem-contraction-is-independent-of-the-basis-formula] 1:2 cited facts\nORDINARY 1 [prop-linear-pullback-respects-tensor-products-and-permutations] 1:3 cited facts\nORDINARY 0 [lem-the-wedge-product-is-alternating-and-bilinear] no signals\nORDINARY 1 [thm-wedge-product-is-associative-and-graded-commutative] 1:2 cited facts\nMODERATE 3 [lem-wedge-monomials-in-a-dual-basis-form-a-basis] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-dimension-of-the-kth-exterior-power-is-binomial] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-universal-property-of-the-finite-dimensional-exterior-power] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [prop-functoriality-of-finite-dimensional-exterior-powers] no signals\nHIGH 5 [prop-exterior-power-duality-pairing] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-the-top-exterior-power-is-one-dimensional] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [prop-interior-product-is-a-graded-antiderivation] 1:2 cited facts\nHIGH 6 [thm-tensor-transition-laws-define-a-smooth-vector-bundle] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-pullback-of-covariant-tensors-is-smooth-and-functorial] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 2 [fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map] 2:boundary-sensitive language\nHIGH 6 [thm-symmetric-and-alternating-images-are-smooth-subbundles] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-exterior-power-transition-laws-define-a-smooth-vector-bundle] 1:2 cited facts\nHIGH 6 [prop-local-coordinate-expression-for-a-differential-form] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [prop-differential-forms-form-a-graded-commutative-algebra] 1:3 cited facts\nORDINARY 1 [prop-interior-product-on-forms-is-a-graded-antiderivation] 1:2 cited facts\nMODERATE 3 [prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 1 [prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically] 1:3 cited facts\nORDINARY 2 [fs-the-wedge-product-is-commutative] 2:boundary-sensitive language\nORDINARY 2 [fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product] 2:boundary-sensitive language\nMODERATE 3 [fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions] no signals\nORDINARY 2 [fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis] 2:boundary-sensitive language\nORDINARY 1 [ex-tensor-product-and-contraction-in-a-basis] 1:2 cited facts\nORDINARY 0 [ex-a-bilinear-form-as-a-type-zero-two-tensor] no signals\nORDINARY 0 [ex-an-endomorphism-as-a-type-one-one-tensor] no signals\nORDINARY 1 [ex-the-identity-endomorphism-and-its-coordinate-independent-trace] 1:2 cited facts\nORDINARY 1 [ex-wedge-products-of-the-standard-dual-basis] 1:2 cited facts\nMODERATE 3 [ex-determinant-as-the-pairing-of-top-exterior-powers] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-euclidean-metric-as-a-symmetric-two-tensor] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-the-area-form-in-polar-coordinates] 1:2 cited facts\nORDINARY 0 [ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve] no signals\nORDINARY 0 [cex-a-vector-field-with-no-pullback-under-a-noninjective-map] no signals\nORDINARY 0 [cex-the-volume-coordinate-expression-changes-sign-under-a-reflection] no signals\nMODERATE 3 [ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-state-equivalence-is-a-right-congruence] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 1:finite countermodel smoke test selected\nCRITICAL 15 [lem-quotient-dfa-is-well-defined-and-equivalent] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [lem-nerode-equivalence-is-a-right-congruence] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [lem-dfa-states-refine-nerode-classes] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 11 [thm-myhill-nerode-characterization] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-nerode-classes-give-the-canonical-minimal-dfa] 1:2 cited facts; 2:induction, recursion, or minimality\nHIGH 5 [thm-minimal-dfa-is-unique-up-to-pointed-isomorphism] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-table-filling-minimization-algorithm] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [thm-pumping-lemma-for-regular-languages] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [cor-distinguishable-prefix-nonregularity-criterion] 1:2 cited facts\nORDINARY 2 [fs-the-pumping-lemma-characterizes-regular-languages] 2:boundary-sensitive language\nORDINARY 2 [fs-pumping-quantifiers-may-be-reordered] 2:boundary-sensitive language\nORDINARY 2 [ex-quotient-dfa-is-well-defined-and-equivalent] 2:quotient or equivalence-class construction\nMODERATE 3 [ex-distinguishable-prefix-nonregularity-criterion] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-the-pumping-lemma-characterizes-regular-languages] 1:3 cited facts\nHIGH 6 [thm-recognizable-iff-enumerable] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [thm-decidable-iff-language-and-complement-are-recognizable] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-recognizable-languages-are-closed-under-union-and-intersection] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-decidable-languages-are-closed-under-boolean-operations] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-dovetailing-reaches-every-finite-stage] no signals\nHIGH 6 [thm-domains-and-ranges-of-partial-computable-functions-are-ce] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [thm-every-ce-set-is-a-domain] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-infinite-ce-sets-have-computable-injective-enumerations] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-machine-descriptions-form-a-decidable-language] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-recognizable-means-total] 2:boundary-sensitive language\nHIGH 6 [fs-every-countable-language-is-decidable] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-decidable-iff-language-and-complement-are-recognizable] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [ex-machine-descriptions-form-a-decidable-language] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cex-recognizable-means-total] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [thm-sequence-length-and-coordinate-functions-are-primitive-recursive] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [prop-ackermann-is-total-computable-but-not-primitive-recursive] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [lem-turing-step-coding-is-primitive-recursive] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-kleene-normal-form] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-partial-recursive-iff-turing-computable] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-lambda-definable-iff-partial-recursive] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [fs-every-total-computable-function-is-primitive-recursive] no signals\nORDINARY 0 [fs-mu-minimization-is-always-total] no signals\nORDINARY 2 [ex-sequence-length-and-coordinate-functions-are-primitive-recursive] 2:analytic limiting/completeness language\nHIGH 5 [ex-lambda-definable-iff-partial-recursive] 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nORDINARY 2 [cex-every-total-computable-function-is-primitive-recursive] 2:boundary-sensitive language\nORDINARY 2 [lem-time-at-least-input-length-permits-complete-input-reading] 2:boundary-sensitive language\nMODERATE 3 [lem-time-bounds-imply-space-bounds] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-multitape-to-single-tape-time-simulation] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [thm-multitape-to-single-tape-space-simulation] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-universal-simulation-with-logarithmic-overhead] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [prop-polynomial-time-and-space-are-model-invariant] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-clocked-machine-construction] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [prop-polynomially-related-encodings-preserve-polynomial-classes] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-model-invariance-means-equal-step-counts] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-time-bounds-never-need-constructibility] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-time-bounds-imply-space-bounds] no signals\nMODERATE 4 [ex-polynomially-related-encodings-preserve-polynomial-classes] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-model-invariance-means-equal-step-counts] 2:boundary-sensitive language\nrisk-report: 10 error(s), 357 item(s) routed\nERROR risk-review-missing [thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint]: thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-the-preconnecting-arrow-annihilates-boundaries]: lem-the-preconnecting-arrow-annihilates-boundaries is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-exactness-at-the-homology-of-the-left-complex]: lem-exactness-at-the-homology-of-the-left-complex is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-exactness-at-the-homology-of-the-middle-complex]: lem-exactness-at-the-homology-of-the-middle-complex is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-exactness-at-the-homology-of-the-right-complex]: lem-exactness-at-the-homology-of-the-right-complex is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-exactness-at-the-target-of-the-connecting-map]: lem-exactness-at-the-target-of-the-connecting-map is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-naturality-of-the-homology-connecting-morphism]: thm-naturality-of-the-homology-connecting-morphism is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence]: prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]: prop-countable-unions-and-subsets-of-manifold-null-sets-are-null is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-sard-slicing-for-compact-null-sections]: lem-sard-slicing-for-compact-null-sections is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "cor-minimal-prime-has-height-zero",
        "lem-prime-chains-in-a-domain-start-at-zero",
        "lem-height-in-quotient-is-relative-chain-length",
        "lem-principal-ideal-theorem-reduction-to-local-domain",
        "lem-principal-ideal-theorem-associated-prime-step",
        "thm-krull-principal-ideal-theorem",
        "cor-noetherian-local-domain-dimension-zero-iff-field",
        "cor-minimal-prime-over-a-nonzerodivisor-has-height-one",
        "lem-height-theorem-first-generator-reduction",
        "lem-height-theorem-quotient-induction",
        "thm-krull-height-theorem",
        "cor-height-of-a-prime-bounded-by-minimal-number-of-generators",
        "lem-height-converse-parameter-selection",
        "thm-krull-height-theorem-converse",
        "lem-parameter-ideal-equivalent-m-primary",
        "lem-parameter-selection-avoids-minimal-components",
        "lem-parameter-dimension-drop-is-exact",
        "thm-existence-of-systems-of-parameters",
        "thm-dimension-as-minimal-number-of-radical-generators",
        "cor-dimension-drops-under-a-parameter",
        "cor-localisation-dimension-does-not-increase",
        "cor-quotient-dimension-does-not-increase",
        "lem-polynomial-ring-dimension-lower-chain",
        "lem-polynomial-prime-contraction-height-jump-at-most-one",
        "lem-polynomial-ring-dimension-upper-bound",
        "thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring",
        "cor-dimension-of-a-finite-polynomial-ring-over-a-field",
        "lem-affine-domain-normalisation-dimension-upper-bound",
        "lem-affine-domain-normalisation-dimension-lower-bound",
        "thm-affine-domain-dimension-transcendence-degree",
        "lem-affine-domain-chain-dimension-formula-step",
        "thm-dimension-formula-for-affine-domains",
        "cor-height-plus-quotient-dimension-affine-domain",
        "cor-affine-domain-maximal-ideal-height-equals-dimension",
        "cor-maximal-chains-in-affine-domains-have-equal-length",
        "ex-relative-height-in-a-quotient",
        "ex-principal-ideal-height-zero-for-a-zerodivisor",
        "ex-height-theorem-bound-sharp",
        "ex-system-of-parameters-not-a-minimal-generating-set",
        "ex-localisation-strictly-lowers-dimension",
        "ex-polynomial-dimension-zero-ring-boundary",
        "ex-affine-dimension-formula",
        "thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer",
        "prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate",
        "prop-conjugate-gradient-denominators-are-positive-before-convergence",
        "thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate",
        "thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error",
        "thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic",
        "thm-conjugate-gradient-chebyshev-bound-in-the-a-norm",
        "thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence",
        "thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space",
        "thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one",
        "prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps",
        "thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem",
        "ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system",
        "ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension",
        "ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues",
        "cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system",
        "cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix",
        "ex-minres-on-a-symmetric-indefinite-system",
        "ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison",
        "ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number",
        "cex-a-preconditioner-can-worsen-the-preconditioned-condition-number",
        "thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p",
        "thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum",
        "lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes",
        "thm-box-step-functions-are-dense-in-l-p-of-rn",
        "lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff",
        "lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess",
        "thm-c-c-rn-is-dense-in-l-p-of-rn",
        "thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn",
        "thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn",
        "lem-countable-generators-yield-countable-set-algebras",
        "lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra",
        "thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable",
        "thm-l-infinity-of-unit-interval-is-not-separable",
        "lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p",
        "thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity",
        "lem-borel-representatives-make-the-convolution-integrand-borel-measurable",
        "lem-convolution-is-independent-of-the-chosen-borel-representatives",
        "thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound",
        "prop-l-one-convolution-is-bilinear-commutative-and-associative",
        "thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset",
        "lem-elementary-duality-formula-for-nonnegative-l-p-functions",
        "thm-minkowski-integral-inequality",
        "thm-young-convolution-inequality",
        "cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity",
        "prop-mollifier-families-are-l-one-approximate-identities",
        "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
        "thm-l-one-approximate-identities-converge-in-l-p",
        "cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions",
        "thm-c-c-infinity-rn-is-dense-in-l-p-of-rn",
        "ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function",
        "ex-mollifying-the-unit-interval-indicator-at-two-scales",
        "ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval",
        "ex-initial-interval-indicators-are-one-separated-in-l-infinity",
        "ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function",
        "ex-the-gaussian-family-is-an-l-one-approximate-identity",
        "fs-c-c-of-rn-is-dense-in-l-infinity-of-rn",
        "fs-l-p-of-every-measure-space-is-separable-for-finite-p",
        "fs-translation-is-continuous-in-l-infinity",
        "fs-l-one-convolution-is-defined-at-every-point",
        "cex-two-l-two-functions-can-have-convolution-outside-l-two",
        "fs-convolution-is-measurable-for-every-lebesgue-representative",
        "lem-reverse-triangle-inequality-in-a-normed-space",
        "lem-complete-subspace-is-closed",
        "lem-closed-subspace-of-a-banach-space-is-banach",
        "lem-vector-operations-are-continuous-in-a-normed-space",
        "lem-finite-product-norms-are-equivalent",
        "thm-finite-products-of-banach-spaces-are-banach",
        "lem-absolutely-convergent-series-is-cauchy",
        "thm-banach-series-criterion",
        "lem-completion-operations-are-well-defined",
        "thm-metric-completion-carries-a-unique-banach-space-structure",
        "thm-completion-universal-property-for-bounded-linear-maps",
        "cor-normed-space-completions-are-uniquely-linearly-isometric",
        "ex-ell-infinity-is-a-banach-space",
        "ex-c0-is-a-banach-space",
        "ex-cb-of-a-space-is-banach",
        "ex-c-of-a-compact-space-is-banach",
        "ex-finite-sequences-c00-with-standard-norms",
        "ex-polynomials-are-not-complete-in-the-supremum-norm",
        "ex-lp-banach-space-dictionary",
        "cex-an-incomplete-subspace-need-not-be-closed",
        "cex-equivalent-metrics-need-not-come-from-equivalent-norms",
        "thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism",
        "thm-in-a-symmetric-monoidal-category-the-two-closures-agree",
        "cex-a-monoidal-category-need-not-be-closed",
        "thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable",
        "thm-the-internal-hom-is-continuous-in-each-variable",
        "thm-the-internal-hom-composition-morphism",
        "thm-the-unit-is-an-internal-hom-unit",
        "thm-set-is-cartesian-closed",
        "thm-the-category-of-small-categories-is-cartesian-closed",
        "thm-a-presheaf-category-on-a-small-category-is-cartesian-closed",
        "thm-currying-and-uncurrying-are-mutually-inverse",
        "cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects",
        "thm-cartesian-closed-preorders-have-relative-implications",
        "thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed",
        "thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed",
        "thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits",
        "thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint",
        "thm-set-is-locally-cartesian-closed",
        "thm-a-subobject-classifier-represents-the-subobject-functor",
        "thm-the-two-element-set-is-a-subobject-classifier-for-sets",
        "fs-every-monoidal-category-is-closed",
        "fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category",
        "fs-a-cartesian-closed-category-has-all-finite-limits",
        "fs-every-cartesian-closed-category-is-locally-cartesian-closed",
        "fs-a-subobject-classifier-is-any-object-representing-monomorphisms",
        "ex-the-function-set-as-an-exponential-computed",
        "ex-currying-for-sets-of-three-variables",
        "ex-the-internal-hom-of-abelian-groups",
        "ex-the-exponential-of-two-small-categories",
        "ex-a-locally-cartesian-closed-slice-computed",
        "ex-the-subobject-classifier-of-a-presheaf-category",
        "lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes",
        "lem-the-preconnecting-arrow-annihilates-boundaries",
        "prop-elementwise-formula-for-the-connecting-map-in-module-categories",
        "lem-exactness-at-the-homology-of-the-left-complex",
        "lem-exactness-at-the-homology-of-the-middle-complex",
        "lem-exactness-at-the-homology-of-the-right-complex",
        "lem-exactness-at-the-target-of-the-connecting-map",
        "thm-long-exact-sequence-in-homology",
        "thm-naturality-of-the-homology-connecting-morphism",
        "cor-the-long-exact-homology-sequence-is-natural",
        "thm-long-exact-sequence-in-cohomology",
        "thm-naturality-of-the-cohomology-connecting-morphism",
        "cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology",
        "cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes",
        "cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram",
        "prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence",
        "thm-the-cone-long-exact-sequence",
        "prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign",
        "cor-the-cone-criterion-from-the-general-long-exact-sequence",
        "thm-long-exact-sequence-of-relative-homology-for-a-composable-pair",
        "cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone",
        "prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence",
        "cor-homology-of-a-degreewise-split-direct-sum-sequence",
        "cor-short-five-lemma-for-quasi-isomorphisms",
        "prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees",
        "prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws",
        "fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof",
        "fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map",
        "fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes",
        "fs-the-cohomology-connecting-morphism-lowers-degree",
        "fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square",
        "ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes",
        "ex-a-degreewise-split-sequence-with-nonzero-connecting-map",
        "ex-the-cone-long-exact-sequence-for-multiplication-by-m",
        "ex-two-out-of-three-for-a-diagram-of-finite-complexes",
        "ex-a-six-term-cohomology-sequence",
        "cex-homology-is-not-an-exact-functor",
        "ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences",
        "ex-relative-homology-of-a-composable-pair-of-stalk-complexes",
        "cor-the-four-vertex-path-has-the-erdos-hajnal-property",
        "thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property",
        "cor-the-bull-graph-has-the-erdos-hajnal-property",
        "lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement",
        "thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property",
        "cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property",
        "cor-the-h-zero-graph-has-the-erdos-hajnal-property",
        "ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull",
        "ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime",
        "ex-the-e-graph-and-co-e-graph-by-adjacency",
        "ex-the-bird-graph-and-co-bird-graph-by-adjacency",
        "ex-h-zero-is-the-five-wheel",
        "ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments",
        "lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair",
        "lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph",
        "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
        "lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair",
        "ex-the-five-vertex-path-is-leaf-reducible",
        "ex-a-nearly-covered-sparse-pair-at-small-parameters",
        "ex-a-numeric-run-of-the-lemma-two-nine-iteration",
        "ex-a-four-tooth-comb-with-an-external-complete-vertex",
        "lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets",
        "lem-c1-local-diffeomorphisms-preserve-null-sets-locally",
        "prop-the-null-set-definition-is-independent-of-the-smooth-atlas",
        "prop-a-countable-chart-cover-detects-manifold-null-sets",
        "prop-countable-unions-and-subsets-of-manifold-null-sets-are-null",
        "prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold",
        "prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets",
        "prop-the-image-of-a-lower-dimensional-c1-manifold-is-null",
        "cor-positive-codimension-immersed-submanifolds-are-null",
        "lem-sard-slicing-for-compact-null-sections",
        "lem-sard-on-the-nonflat-critical-strata",
        "lem-sard-on-the-infinitely-flat-critical-stratum",
        "thm-morse-sard-for-euclidean-maps",
        "thm-morse-sard-for-smooth-manifolds",
        "cor-regular-values-have-null-complement-and-are-dense",
        "prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact",
        "cor-regular-values-form-a-dense-g-delta-set",
        "cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective",
        "lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient",
        "thm-transverse-preimage-theorem",
        "cor-transverse-intersection-theorem",
        "thm-transverse-fibre-product-theorem",
        "cor-a-submersion-is-transverse-to-every-embedded-submanifold",
        "prop-transversality-to-a-point-is-the-regular-value-condition",
        "prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target",
        "prop-local-graph-characterization-by-transversality-to-vertical-fibres",
        "prop-global-graph-characterization-by-one-point-transverse-fibres",
        "thm-parametric-transversality",
        "cor-generic-translations-of-a-map-to-euclidean-space-are-transverse",
        "cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation",
        "prop-transversality-is-stable-on-a-compact-source",
        "fs-every-critical-point-is-an-isolated-point",
        "fs-the-set-of-critical-values-is-always-closed",
        "fs-two-submanifolds-with-nonempty-intersection-are-transverse",
        "fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold",
        "fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology",
        "ex-critical-points-and-values-of-a-height-function-on-a-sphere",
        "ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value",
        "ex-a-smooth-map-with-a-nonclosed-critical-value-set",
        "ex-transverse-and-tangent-intersections-of-plane-curves",
        "ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set",
        "ex-a-fibre-product-of-submersions",
        "ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely",
        "ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids",
        "cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension",
        "prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear",
        "prop-symmetrization-and-alternation-are-projections",
        "lem-contraction-is-independent-of-the-basis-formula",
        "prop-linear-pullback-respects-tensor-products-and-permutations",
        "lem-the-wedge-product-is-alternating-and-bilinear",
        "thm-wedge-product-is-associative-and-graded-commutative",
        "lem-wedge-monomials-in-a-dual-basis-form-a-basis",
        "cor-dimension-of-the-kth-exterior-power-is-binomial",
        "thm-universal-property-of-the-finite-dimensional-exterior-power",
        "prop-functoriality-of-finite-dimensional-exterior-powers",
        "prop-exterior-power-duality-pairing",
        "prop-the-top-exterior-power-is-one-dimensional",
        "prop-interior-product-is-a-graded-antiderivation",
        "thm-tensor-transition-laws-define-a-smooth-vector-bundle",
        "prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components",
        "prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth",
        "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
        "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
        "thm-symmetric-and-alternating-images-are-smooth-subbundles",
        "thm-exterior-power-transition-laws-define-a-smooth-vector-bundle",
        "prop-local-coordinate-expression-for-a-differential-form",
        "prop-differential-forms-form-a-graded-commutative-algebra",
        "prop-interior-product-on-forms-is-a-graded-antiderivation",
        "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges",
        "prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically",
        "fs-the-wedge-product-is-commutative",
        "fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product",
        "fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n",
        "fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions",
        "fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis",
        "ex-tensor-product-and-contraction-in-a-basis",
        "ex-a-bilinear-form-as-a-type-zero-two-tensor",
        "ex-an-endomorphism-as-a-type-one-one-tensor",
        "ex-the-identity-endomorphism-and-its-coordinate-independent-trace",
        "ex-wedge-products-of-the-standard-dual-basis",
        "ex-determinant-as-the-pairing-of-top-exterior-powers",
        "ex-the-euclidean-metric-as-a-symmetric-two-tensor",
        "ex-the-area-form-in-polar-coordinates",
        "ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve",
        "cex-a-vector-field-with-no-pullback-under-a-noninjective-map",
        "cex-the-volume-coordinate-expression-changes-sign-under-a-reflection",
        "ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor",
        "lem-state-equivalence-is-a-right-congruence",
        "lem-quotient-dfa-is-well-defined-and-equivalent",
        "lem-nerode-equivalence-is-a-right-congruence",
        "lem-dfa-states-refine-nerode-classes",
        "thm-myhill-nerode-characterization",
        "cor-nerode-classes-give-the-canonical-minimal-dfa",
        "thm-minimal-dfa-is-unique-up-to-pointed-isomorphism",
        "thm-table-filling-minimization-algorithm",
        "thm-pumping-lemma-for-regular-languages",
        "cor-distinguishable-prefix-nonregularity-criterion",
        "fs-the-pumping-lemma-characterizes-regular-languages",
        "fs-pumping-quantifiers-may-be-reordered",
        "ex-quotient-dfa-is-well-defined-and-equivalent",
        "ex-distinguishable-prefix-nonregularity-criterion",
        "cex-the-pumping-lemma-characterizes-regular-languages",
        "thm-recognizable-iff-enumerable",
        "thm-decidable-iff-language-and-complement-are-recognizable",
        "thm-recognizable-languages-are-closed-under-union-and-intersection",
        "thm-decidable-languages-are-closed-under-boolean-operations",
        "lem-dovetailing-reaches-every-finite-stage",
        "thm-domains-and-ranges-of-partial-computable-functions-are-ce",
        "thm-every-ce-set-is-a-domain",
        "thm-infinite-ce-sets-have-computable-injective-enumerations",
        "prop-machine-descriptions-form-a-decidable-language",
        "fs-recognizable-means-total",
        "fs-every-countable-language-is-decidable",
        "ex-decidable-iff-language-and-complement-are-recognizable",
        "ex-machine-descriptions-form-a-decidable-language",
        "cex-recognizable-means-total",
        "prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive",
        "thm-sequence-length-and-coordinate-functions-are-primitive-recursive",
        "prop-ackermann-is-total-computable-but-not-primitive-recursive",
        "lem-turing-step-coding-is-primitive-recursive",
        "thm-kleene-normal-form",
        "thm-partial-recursive-iff-turing-computable",
        "thm-lambda-definable-iff-partial-recursive",
        "fs-every-total-computable-function-is-primitive-recursive",
        "fs-mu-minimization-is-always-total",
        "ex-sequence-length-and-coordinate-functions-are-primitive-recursive",
        "ex-lambda-definable-iff-partial-recursive",
        "cex-every-total-computable-function-is-primitive-recursive",
        "lem-time-at-least-input-length-permits-complete-input-reading",
        "lem-time-bounds-imply-space-bounds",
        "thm-multitape-to-single-tape-time-simulation",
        "thm-multitape-to-single-tape-space-simulation",
        "thm-universal-simulation-with-logarithmic-overhead",
        "prop-polynomial-time-and-space-are-model-invariant",
        "lem-clocked-machine-construction",
        "prop-polynomially-related-encodings-preserve-polynomial-classes",
        "fs-model-invariance-means-equal-step-counts",
        "fs-time-bounds-never-need-constructibility",
        "ex-time-bounds-imply-space-bounds",
        "ex-polynomially-related-encodings-preserve-polynomial-classes",
        "cex-model-invariance-means-equal-step-counts"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 2856 rows over 1 contract file(s); 2464 marked not_applicable\n\nTEMPLATE REUSE — none at or above 3 members.\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\n  ex-lambda-definable-iff-partial-recursive  [zero]\n    the row credits step 1.2, which does not occur in the proof\n    row says: \"step 1.2 uses the base clause returning $\\overline 1$ at input 0 in the displayed lambda term.\"\n\n  ex-lambda-definable-iff-partial-recursive  [one]\n    the row credits step 1.2, which does not occur in the proof\n    row says: \"step 1.1 and step 1.2 both cover the first successor case through the recursive update for factorial.\"\n\nUPHELD BY REVIEW — 10 row(s) an Alpha read and kept, with reasons on the record:\n  ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system  [zero]  by alpha-contract-audit-6: The detector keys off symbolic denominators, but steps 1.1 and 2.1 compute them numerically as 9, 5, and 200/729 in this\n  ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension  [zero]  by alpha-contract-audit-6: The only denominator here is p_0^T A p_0 = 2 in the fixed 3x3 witness, so the symbolic-zero heuristic is not pointing to\n  cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix  [zero]  by alpha-contract-audit-6: Step 1.1 fixes r_0^T r_0 = 1 and computes the next search direction directly, so the symbolic denominator comes from a f\n  lem-finite-product-norms-are-equivalent  [empty]  by alpha-contract-audit-6: The statement assumes n>=1, so the product index {k<n} is already nonempty; the detector is reacting to the product nota\n  thm-finite-products-of-banach-spaces-are-banach  [empty]  by alpha-contract-audit-6: The theorem begins with n>=1, so the finite product never collapses to the empty product; the detector is reacting to th\n  lem-absolutely-convergent-series-is-cauchy  [empty]  by alpha-contract-audit-6: The indexed tail sum runs over integers with m>ell>=N, so the proof never quantifies over an empty ambient family; the d\n  prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws  [empty]  by alpha-contract-audit-6: Here the word family names the homology functors (H_n, partial_n); the proof does not quantify over an index set that co\n  lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph  [empty]  by alpha-contract-audit-6: In this item, family names the fixed forbidden family F while the proof applies to one y-sparse graph G, so no indexed a\n  lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair  [empty]  by alpha-contract-audit-6: The detector fires on the union notation inside one explicit witness, but the proof only splits into outcomes 1, 2, and \n  thm-parametric-transversality  [empty]  by alpha-contract-audit-6: The item studies one smooth family F and the bad-parameter subset of S; the detector fires on the noun family, not on a \n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 948 citation(s) over 357 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 22.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-morse-sard-for-euclidean-maps  [L1] -> lem-sard-slicing-for-compact-null-sections (searched: Statement)\n    quote: \"Let $n\\ge 1$ and let $K\\subseteq [a,b]\\times\\mathbb R^n$ be compact. For each $t\\in[a,b]$, write $$ K_t:=\\{y\\in\\mathbb R^n:(t,y)\\in K\\}. $$ If every section $K_t$ is a null subset …\"\n\n  thm-morse-sard-for-euclidean-maps  [L1] -> lem-sard-on-the-infinitely-flat-critical-stratum (searched: Statement)\n    quote: \"Let $U\\subseteq\\mathbb R^m$ be open and $f:U\\to\\mathbb R^n$ be $C^r$ with $rn\\ge m$. Let $$ C_r:=\\{x\\in U:D^\\alpha f(x)=0\\text{ for every multi-index }1\\le |\\alpha|\\le r\\}. $$ If $…\"\n\n  fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology  [L1] -> prop-transversality-is-stable-on-a-compact-source (searched: Statement)\n    quote: \"Let $M$ be compact, let $Z\\subseteq N$ be an embedded submanifold, and let $F:M\\to\"\n\n  prop-linear-pullback-respects-tensor-products-and-permutations  [F1] -> def-pullback-of-a-covariant-tensor-by-a-linear-map (searched: Definition)\n    quote: \"Let $A:V\\to W$ be linear, and let $T:W^k\\to\\mathbb R$ be a covariant tensor of\"\n\n  thm-universal-property-of-the-finite-dimensional-exterior-power  [F1] -> def-finite-dimensional-exterior-power-of-vectors (searched: Definition)\n    quote: \"Let $V$ be finite-dimensional and let $k\\ge 0$. The $k$th exterior power of $V$\"\n\n  prop-exterior-power-duality-pairing  [F1] -> def-finite-dimensional-exterior-power-of-vectors (searched: Definition)\n    quote: \"Let $V$ be finite-dimensional and let $k\\ge 0$. The $k$th exterior power of $V$\"\n\n  prop-the-top-exterior-power-is-one-dimensional  [L1] -> cor-dimension-of-the-kth-exterior-power-is-binomial (searched: Statement)\n    quote: \"If $\\dim V=n$, then $$ \\dim\\operatorname{Alt}^k(V)=\\binom{n}{k}. $$ In particular, $\\operatorname{Alt}^k(V)=0$ for $k>n$.\"\n\n  prop-interior-product-is-a-graded-antiderivation  [F1] -> def-interior-product-on-alternating-covectors (searched: Definition)\n    quote: \"Let $v\\in V$ and $\\omega\\in\\operatorname{Alt}^k(V)$ with $k\\ge 1$. The interior product $\\iota_v\\omega\\in\\operatorname{Alt}^{k-1}(V)$ is defined\"\n\n  prop-pullback-of-covariant-tensors-is-smooth-and-functorial  [L1] -> prop-linear-pullback-respects-tensor-products-and-permutations (searched: Statement)\n    quote: \"Let $A:V\\to W$ be linear. For covariant tensors $S,T$ on $W$ and every permutation\"\n\n  prop-pullback-of-covariant-tensors-is-smooth-and-functorial  [L1] -> prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth (searched: Statement)\n    quote: \"The tensor product of smooth tensor fields is smooth, and every contraction of a\"\n\n  fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map  [L1] -> prop-pullback-of-covariant-tensors-is-smooth-and-functorial (searched: Statement)\n    quote: \"If $F:M\\to N$ is smooth and $T$ is a covariant tensor field on $N$,\"\n\n  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges  [L1] -> prop-pullback-of-covariant-tensors-is-smooth-and-functorial (searched: Statement)\n    quote: \"If $F:M\\to N$ is smooth and $T$ is a covariant tensor field on $N$,\"\n\n  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges  [L2] -> prop-linear-pullback-respects-tensor-products-and-permutations (searched: Statement)\n    quote: \"Let $A:V\\to W$ be linear. For covariant tensors $S,T$ on $W$ and every permutation\"\n\n  prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically  [L1] -> prop-pullback-of-covariant-tensors-is-smooth-and-functorial (searched: Statement)\n    quote: \"If $F:M\\to N$ is smooth and $T$ is a covariant tensor field on $N$,\"\n\n  fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n  [L1] -> cor-dimension-of-the-kth-exterior-power-is-binomial (searched: Statement)\n    quote: \"If $\\dim V=n$, then $$ \\dim\\operatorname{Alt}^k(V)=\\binom{n}{k}. $$ In particular, $\\operatorname{Alt}^k(V)=0$ for $k>n$.\"\n\n  ex-determinant-as-the-pairing-of-top-exterior-powers  [L2] -> prop-the-top-exterior-power-is-one-dimensional (searched: Statement)\n    quote: \"If $\\dim V=n$, then $\\bigwedge^nV$ and $\\bigwedge^nV^*$ are one-dimensional.\"\n\n  cex-a-vector-field-with-no-pullback-under-a-noninjective-map  [L1] -> fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map (searched: Statement)\n    quote: \"False claim: every mixed tensor field has a pullback along every smooth map.\"\n\n  thm-kleene-normal-form  [L1] -> def-mu-minimization-and-partial-recursive-function (searched: Definition)\n    quote: \"Let $g:\\mathbb N^{k+1}\\to\\mathbb N$ be a total function. Its unbounded minimization is the partial function $$ \\mu y\\,g(x,y) $$ defined on $x\\in\\mathbb N^k$ exactly when there exis…\"\n\n  thm-partial-recursive-iff-turing-computable  [L2] -> def-mu-minimization-and-partial-recursive-function (searched: Definition)\n    quote: \"Let $g:\\mathbb N^{k+1}\\to\\mathbb N$ be a total function. Its unbounded minimization is the partial function $$ \\mu y\\,g(x,y) $$ defined on $x\\in\\mathbb N^k$ exactly when there exis…\"\n\n  thm-partial-recursive-iff-turing-computable  [L3] -> thm-kleene-normal-form (searched: Statement)\n    quote: \"For every partial recursive function $f:\\mathbb N\\rightharpoonup\\mathbb N$, there exists a natural number $e$ such that for every input $x$: - if $f(x)$ is defined, then $$ f(x)=U\\…\"\n\n  thm-lambda-definable-iff-partial-recursive  [L2] -> def-mu-minimization-and-partial-recursive-function (searched: Definition)\n    quote: \"Let $g:\\mathbb N^{k+1}\\to\\mathbb N$ be a total function. Its unbounded minimization is the partial function $$ \\mu y\\,g(x,y) $$ defined on $x\\in\\mathbb N^k$ exactly when there exis…\"\n\n  fs-mu-minimization-is-always-total  [L1] -> def-mu-minimization-and-partial-recursive-function (searched: Definition)\n    quote: \"Let $g:\\mathbb N^{k+1}\\to\\mathbb N$ be a total function. Its unbounded minimization is the partial function $$ \\mu y\\,g(x,y) $$ defined on $x\\in\\mathbb N^k$ exactly when there exis…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-countable-chart-cover-detects-manifold-null-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-countable-unions-and-subsets-of-manifold-null-sets-are-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-null-and-content-zero-in-rn",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-countable-union-of-null-is-null",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-sard-slicing-for-compact-null-sections",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-sard-for-euclidean-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-morse-sard-for-smooth-manifolds",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-linear-pullback-respects-tensor-products-and-permutations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-universal-property-of-the-finite-dimensional-exterior-power",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-exterior-power-duality-pairing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-top-exterior-power-is-one-dimensional",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-interior-product-is-a-graded-antiderivation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-pullback-of-covariant-tensors-is-smooth-and-functorial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-determinant-as-the-pairing-of-top-exterior-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-vector-field-with-no-pullback-under-a-noninjective-map",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-myhill-nerode-characterization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-pumping-lemma-for-regular-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-the-pumping-lemma-characterizes-regular-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-recognizable-iff-enumerable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-decidable-iff-language-and-complement-are-recognizable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-recognizable-languages-are-closed-under-union-and-intersection",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-decidable-languages-are-closed-under-boolean-operations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-machine-descriptions-form-a-decidable-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-recognizable-means-total",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-countable-language-is-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-recognizable-means-total",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-kleene-normal-form",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-partial-recursive-iff-turing-computable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-lambda-definable-iff-partial-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-mu-minimization-is-always-total",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-lambda-definable-iff-partial-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-time-bounds-imply-space-bounds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-multitape-to-single-tape-time-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-multitape-to-single-tape-space-simulation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-universal-simulation-with-logarithmic-overhead",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-polynomial-time-and-space-are-model-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-polynomially-related-encodings-preserve-polynomial-classes",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-minimal-prime-has-height-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-prime-chains-in-a-domain-start-at-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-height-in-quotient-is-relative-chain-length",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-principal-ideal-theorem-reduction-to-local-domain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-principal-ideal-theorem-associated-prime-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-krull-principal-ideal-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-noetherian-local-domain-dimension-zero-iff-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-minimal-prime-over-a-nonzerodivisor-has-height-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-height-theorem-first-generator-reduction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-height-theorem-quotient-induction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-krull-height-theorem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-height-of-a-prime-bounded-by-minimal-number-of-generators",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-height-converse-parameter-selection",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-krull-height-theorem-converse",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-parameter-ideal-equivalent-m-primary",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-parameter-selection-avoids-minimal-components",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-parameter-dimension-drop-is-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-existence-of-systems-of-parameters",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dimension-as-minimal-number-of-radical-generators",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-dimension-drops-under-a-parameter",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-localisation-dimension-does-not-increase",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-quotient-dimension-does-not-increase",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-polynomial-ring-dimension-lower-chain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-polynomial-prime-contraction-height-jump-at-most-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-polynomial-ring-dimension-upper-bound",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-dimension-of-a-finite-polynomial-ring-over-a-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-affine-domain-normalisation-dimension-upper-bound",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-affine-domain-normalisation-dimension-lower-bound",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-affine-domain-dimension-transcendence-degree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-affine-domain-chain-dimension-formula-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-dimension-formula-for-affine-domains",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-height-plus-quotient-dimension-affine-domain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-affine-domain-maximal-ideal-height-equals-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-maximal-chains-in-affine-domains-have-equal-length",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-relative-height-in-a-quotient",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-principal-ideal-height-zero-for-a-zerodivisor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-height-theorem-bound-sharp",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-system-of-parameters-not-a-minimal-generating-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-localisation-strictly-lowers-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-polynomial-dimension-zero-ring-boundary",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-affine-dimension-formula",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-conjugate-gradient-denominators-are-positive-before-convergence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-chebyshev-bound-in-the-a-norm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-minres-on-a-symmetric-indefinite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-preconditioner-can-worsen-the-preconditioned-condition-number",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-box-step-functions-are-dense-in-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-c-c-rn-is-dense-in-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-countable-generators-yield-countable-set-algebras",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-infinity-of-unit-interval-is-not-separable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-borel-representatives-make-the-convolution-integrand-borel-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-convolution-is-independent-of-the-chosen-borel-representatives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-l-one-convolution-is-bilinear-commutative-and-associative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-duality-formula-for-nonnegative-l-p-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-minkowski-integral-inequality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-young-convolution-inequality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-mollifier-families-are-l-one-approximate-identities",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-one-approximate-identities-converge-in-l-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-c-c-infinity-rn-is-dense-in-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-mollifying-the-unit-interval-indicator-at-two-scales",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-initial-interval-indicators-are-one-separated-in-l-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-gaussian-family-is-an-l-one-approximate-identity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-c-c-of-rn-is-dense-in-l-infinity-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-l-p-of-every-measure-space-is-separable-for-finite-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-translation-is-continuous-in-l-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-l-one-convolution-is-defined-at-every-point",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-two-l-two-functions-can-have-convolution-outside-l-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-convolution-is-measurable-for-every-lebesgue-representative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-reverse-triangle-inequality-in-a-normed-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-complete-subspace-is-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-closed-subspace-of-a-banach-space-is-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-vector-operations-are-continuous-in-a-normed-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-product-norms-are-equivalent",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-products-of-banach-spaces-are-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-absolutely-convergent-series-is-cauchy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-banach-series-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-completion-operations-are-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-metric-completion-carries-a-unique-banach-space-structure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-universal-property-for-bounded-linear-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-normed-space-completions-are-uniquely-linearly-isometric",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-ell-infinity-is-a-banach-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-c0-is-a-banach-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cb-of-a-space-is-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-c-of-a-compact-space-is-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-sequences-c00-with-standard-norms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-polynomials-are-not-complete-in-the-supremum-norm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-lp-banach-space-dictionary",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-incomplete-subspace-need-not-be-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-equivalent-metrics-need-not-come-from-equivalent-norms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-in-a-symmetric-monoidal-category-the-two-closures-agree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-monoidal-category-need-not-be-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-internal-hom-is-continuous-in-each-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-internal-hom-composition-morphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-unit-is-an-internal-hom-unit",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-set-is-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-category-of-small-categories-is-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-presheaf-category-on-a-small-category-is-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-currying-and-uncurrying-are-mutually-inverse",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-cartesian-closed-preorders-have-relative-implications",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-set-is-locally-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-subobject-classifier-represents-the-subobject-functor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-two-element-set-is-a-subobject-classifier-for-sets",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-monoidal-category-is-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-cartesian-closed-category-has-all-finite-limits",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-cartesian-closed-category-is-locally-cartesian-closed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-subobject-classifier-is-any-object-representing-monomorphisms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-function-set-as-an-exponential-computed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-currying-for-sets-of-three-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-internal-hom-of-abelian-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-exponential-of-two-small-categories",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-locally-cartesian-closed-slice-computed",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-subobject-classifier-of-a-presheaf-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-preconnecting-arrow-annihilates-boundaries",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-elementwise-formula-for-the-connecting-map-in-module-categories",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-left-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-middle-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-homology-of-the-right-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-exactness-at-the-target-of-the-connecting-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-in-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-naturality-of-the-homology-connecting-morphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-long-exact-homology-sequence-is-natural",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-in-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-naturality-of-the-cohomology-connecting-morphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cone-long-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-cone-criterion-from-the-general-long-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-of-relative-homology-for-a-composable-pair",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-homology-of-a-degreewise-split-direct-sum-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-short-five-lemma-for-quasi-isomorphisms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-cohomology-connecting-morphism-lowers-degree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-degreewise-split-sequence-with-nonzero-connecting-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-cone-long-exact-sequence-for-multiplication-by-m",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-two-out-of-three-for-a-diagram-of-finite-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-six-term-cohomology-sequence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-homology-is-not-an-exact-functor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-relative-homology-of-a-composable-pair-of-stalk-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-four-vertex-path-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-bull-graph-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-h-zero-graph-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-e-graph-and-co-e-graph-by-adjacency",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-bird-graph-and-co-bird-graph-by-adjacency",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-h-zero-is-the-five-wheel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-five-vertex-path-is-leaf-reducible",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-nearly-covered-sparse-pair-at-small-parameters",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-numeric-run-of-the-lemma-two-nine-iteration",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-four-tooth-comb-with-an-external-complete-vertex",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-c1-local-diffeomorphisms-preserve-null-sets-locally",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-null-set-definition-is-independent-of-the-smooth-atlas",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-image-of-a-lower-dimensional-c1-manifold-is-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-positive-codimension-immersed-submanifolds-are-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-sard-on-the-nonflat-critical-strata",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-sard-on-the-infinitely-flat-critical-stratum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-regular-values-have-null-complement-and-are-dense",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-regular-values-form-a-dense-g-delta-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-transverse-preimage-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-transverse-intersection-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-transverse-fibre-product-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-a-submersion-is-transverse-to-every-embedded-submanifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-transversality-to-a-point-is-the-regular-value-condition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-local-graph-characterization-by-transversality-to-vertical-fibres",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-global-graph-characterization-by-one-point-transverse-fibres",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-parametric-transversality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-generic-translations-of-a-map-to-euclidean-space-are-transverse",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-transversality-is-stable-on-a-compact-source",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-critical-point-is-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-set-of-critical-values-is-always-closed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-two-submanifolds-with-nonempty-intersection-are-transverse",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-critical-points-and-values-of-a-height-function-on-a-sphere",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-smooth-map-with-a-nonclosed-critical-value-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-transverse-and-tangent-intersections-of-plane-curves",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-fibre-product-of-submersions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-symmetrization-and-alternation-are-projections",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-contraction-is-independent-of-the-basis-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-the-wedge-product-is-alternating-and-bilinear",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-wedge-product-is-associative-and-graded-commutative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-wedge-monomials-in-a-dual-basis-form-a-basis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-dimension-of-the-kth-exterior-power-is-binomial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-functoriality-of-finite-dimensional-exterior-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tensor-transition-laws-define-a-smooth-vector-bundle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-symmetric-and-alternating-images-are-smooth-subbundles",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-exterior-power-transition-laws-define-a-smooth-vector-bundle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-local-coordinate-expression-for-a-differential-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-differential-forms-form-a-graded-commutative-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-interior-product-on-forms-is-a-graded-antiderivation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-wedge-product-is-commutative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-tensor-product-and-contraction-in-a-basis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-bilinear-form-as-a-type-zero-two-tensor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-an-endomorphism-as-a-type-one-one-tensor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-identity-endomorphism-and-its-coordinate-independent-trace",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-wedge-products-of-the-standard-dual-basis",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-euclidean-metric-as-a-symmetric-two-tensor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-area-form-in-polar-coordinates",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-volume-coordinate-expression-changes-sign-under-a-reflection",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-state-equivalence-is-a-right-congruence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-quotient-dfa-is-well-defined-and-equivalent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-nerode-equivalence-is-a-right-congruence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-dfa-states-refine-nerode-classes",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-nerode-classes-give-the-canonical-minimal-dfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-minimal-dfa-is-unique-up-to-pointed-isomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-table-filling-minimization-algorithm",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-distinguishable-prefix-nonregularity-criterion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-pumping-lemma-characterizes-regular-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-pumping-quantifiers-may-be-reordered",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-quotient-dfa-is-well-defined-and-equivalent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-distinguishable-prefix-nonregularity-criterion",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-dovetailing-reaches-every-finite-stage",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-domains-and-ranges-of-partial-computable-functions-are-ce",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-every-ce-set-is-a-domain",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-infinite-ce-sets-have-computable-injective-enumerations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-decidable-iff-language-and-complement-are-recognizable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-machine-descriptions-form-a-decidable-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-sequence-length-and-coordinate-functions-are-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-ackermann-is-total-computable-but-not-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-turing-step-coding-is-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-every-total-computable-function-is-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-sequence-length-and-coordinate-functions-are-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-every-total-computable-function-is-primitive-recursive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-time-at-least-input-length-permits-complete-input-reading",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-clocked-machine-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-model-invariance-means-equal-step-counts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-time-bounds-never-need-constructibility",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-time-bounds-imply-space-bounds",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-polynomially-related-encodings-preserve-polynomial-classes",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-model-invariance-means-equal-step-counts",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "def-null-and-content-zero-in-rn",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-countable-union-of-null-is-null",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-conjugate-gradient-denominators-are-positive-before-convergence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-conjugate-gradient-chebyshev-bound-in-the-a-norm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-minres-on-a-symmetric-indefinite-system",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-preconditioner-can-worsen-the-preconditioned-condition-number",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-box-step-functions-are-dense-in-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-c-c-rn-is-dense-in-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-countable-generators-yield-countable-set-algebras",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-infinity-of-unit-interval-is-not-separable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-borel-representatives-make-the-convolution-integrand-borel-measurable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-convolution-is-independent-of-the-chosen-borel-representatives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-l-one-convolution-is-bilinear-commutative-and-associative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-elementary-duality-formula-for-nonnegative-l-p-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-minkowski-integral-inequality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-young-convolution-inequality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-mollifier-families-are-l-one-approximate-identities",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-l-one-approximate-identities-converge-in-l-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-c-c-infinity-rn-is-dense-in-l-p-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-mollifying-the-unit-interval-indicator-at-two-scales",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-initial-interval-indicators-are-one-separated-in-l-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-gaussian-family-is-an-l-one-approximate-identity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-c-c-of-rn-is-dense-in-l-infinity-of-rn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-l-p-of-every-measure-space-is-separable-for-finite-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-translation-is-continuous-in-l-infinity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-l-one-convolution-is-defined-at-every-point",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-two-l-two-functions-can-have-convolution-outside-l-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-convolution-is-measurable-for-every-lebesgue-representative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-reverse-triangle-inequality-in-a-normed-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-complete-subspace-is-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-closed-subspace-of-a-banach-space-is-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-vector-operations-are-continuous-in-a-normed-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-finite-product-norms-are-equivalent",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-products-of-banach-spaces-are-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-absolutely-convergent-series-is-cauchy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-banach-series-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-completion-operations-are-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-metric-completion-carries-a-unique-banach-space-structure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-completion-universal-property-for-bounded-linear-maps",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-normed-space-completions-are-uniquely-linearly-isometric",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-ell-infinity-is-a-banach-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-c0-is-a-banach-space",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-cb-of-a-space-is-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-c-of-a-compact-space-is-banach",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-sequences-c00-with-standard-norms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-polynomials-are-not-complete-in-the-supremum-norm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-lp-banach-space-dictionary",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-incomplete-subspace-need-not-be-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-equivalent-metrics-need-not-come-from-equivalent-norms",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **a**, run `frontier-27`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 106 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `conjugate-gradients-minres-and-preconditioning` | A | linear-algebra | 288.000061 | `krylov-subspaces-arnoldi-and-gmres`, `convex-and-semicontinuous-functions-on-rn` |
| 2 | `conjugate-gradients-minres-and-preconditioning-examples` | B | linear-algebra | 288.000062 | `conjugate-gradients-minres-and-preconditioning` |
| 3 | `density-separability-and-convolution-in-lp` | A | measure-theory | 288.029 | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` |
| 3 | `density-separability-and-convolution-in-lp-examples` | B | measure-theory | 288.03 | `density-separability-and-convolution-in-lp` |
| 4 | `normed-and-banach-spaces` | A | functional-analysis | 288.047 | `rn-as-a-normed-space`, `completeness-and-uniform-continuity`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `normed-and-banach-spaces-examples` | B | functional-analysis | 288.048 | `normed-and-banach-spaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `conjugate-gradients-minres-and-preconditioning` — Conjugate Gradients, MINRES and Preconditioning (21 item(s))

- `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix` · definition — The energy inner product $\langle u,v\rangle_A=\langle Au,v\rangle$ and energy norm $\|u\|_A$ for a Hermitian positive-definite matrix
- `def-quadratic-energy-of-a-hermitian-positive-definite-linear-system` · definition — The quadratic energy $\phi(x)=\tfrac12\langle Ax,x\rangle-\operatorname{Re}\langle b,x\rangle$ of a Hermitian positive-definite linear system
- `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer` · theorem — For Hermitian positive-definite $A$, the exact solution of $Ax=b$ is the unique minimizer of the quadratic energy
- `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system` · definition — The $m$th Krylov Galerkin iterate in the affine space $x_0+K_m(A,r_0)$ for a Hermitian positive-definite system
- `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate` · proposition — Galerkin orthogonality turns residual orthogonality into $A$-orthogonality of the error, and the Galerkin iterate is unique
- `def-conjugate-gradient-recurrence` · definition — The conjugate-gradient recurrence
- `prop-conjugate-gradient-denominators-are-positive-before-convergence` · proposition — Before convergence, every CG denominator $p_k^*Ap_k$ is positive
- `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate` · theorem — In exact arithmetic, CG residuals are mutually orthogonal and the search directions are $A$-conjugate
- `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error` · theorem — CG is the Krylov Galerkin method, and the $m$th iterate uniquely minimizes the $A$-norm of the error over $x_0+K_m(A,r_0)$
- `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic` · theorem — In exact arithmetic, CG terminates no later than the relative grade and hence in at most $n$ steps
- `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` · theorem — CG obeys the Chebyshev $A$-norm bound in terms of the spectral condition number $\kappa_2(A)$
- `rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination` · remark — In floating-point arithmetic, CG can lose exact residual orthogonality, $A$-conjugacy, and the finite-termination guarantee
- `def-lanczos-process-as-hermitian-arnoldi` · definition — The Lanczos process as Arnoldi specialized to a Hermitian matrix, with the usual real-subdiagonal phase convention
- `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence` · theorem — With a Hermitian matrix, Arnoldi collapses to the Lanczos three-term recurrence and a real symmetric tridiagonal projection
- `def-minres-iterate-from-the-lanczos-tridiagonalization` · definition — The MINRES iterate from the Lanczos tridiagonal least-squares problem
- `thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space` · theorem — For Hermitian $A$, including the indefinite case, MINRES minimizes the Euclidean residual over $x_0+K_m(A,r_0)$
- `def-stationary-iteration-from-a-matrix-splitting` · definition — Stationary iteration from a matrix splitting $A=M-N$
- `thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one` · theorem — A stationary splitting converges for every start if and only if its iteration matrix has spectral radius below $1$
- `def-left-right-and-symmetric-positive-definite-preconditioning` · definition — Left preconditioning, right preconditioning, and symmetric preconditioning of a linear system
- `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` · proposition — Invertible preconditioners give equivalent linear systems, with the transformed residuals and errors written explicitly
- `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem` · theorem — Symmetric positive-definite preconditioning preserves a Hermitian positive-definite CG problem, and the CG bound uses the transformed condition number

### `conjugate-gradients-minres-and-preconditioning-examples` — Conjugate Gradients, MINRES and Preconditioning: Examples and Counterexamples (9 item(s))

- `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system` · example — CG on a $2\times2$ Hermitian positive-definite system reaches the solution in at most two steps
- `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension` · example — CG can terminate at a relative grade strictly smaller than the ambient dimension
- `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues` · example — Clustered eigenvalues give a visibly better CG condition-number bound than equally sized spread spectra
- `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system` · counterexample — A symmetric indefinite matrix can make the CG denominator vanish or change sign before convergence
- `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix` · counterexample — A nonsymmetric invertible matrix does not fit the CG orthogonality and minimization theory
- `ex-minres-on-a-symmetric-indefinite-system` · example — MINRES still minimizes the residual on a small symmetric indefinite system
- `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison` · example — Jacobi and Gauss-Seidel splittings can be compared by the spectral radii of their iteration matrices
- `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number` · example — A diagonal positive-definite preconditioner can improve the relevant condition number
- `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number` · counterexample — A preconditioner can worsen the condition number that actually controls CG

### `density-separability-and-convolution-in-lp` — Density Separability and Convolution in $L^p$ (35 item(s))

- `def-translation-of-a-function-on-rn` · definition — Translation of a function on $\mathbb{R}^n$
- `def-c-c-and-c-c-infinity-on-rn` · definition — The spaces $C_c(\mathbb{R}^n)$ and $C_c^\infty(\mathbb{R}^n)$
- `def-c-zero-on-rn` · definition — The space $C_0(\mathbb{R}^n)$ of continuous functions vanishing at infinity
- `def-convolution-of-two-functions-on-rn` · definition — Convolution of two functions on $\mathbb{R}^n$
- `def-l-one-approximate-identity-on-rn` · definition — An $L^1$ approximate identity on $\mathbb{R}^n$
- `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` · definition — The mollifier family generated by a unit-mass smooth bump
- `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p` · theorem — Simple functions with finite-measure support are dense in $L^p(\mu)$ for $1 \le p < \infty$
- `thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum` · theorem — Simple functions are dense in $L^\infty(\mu)$ in the essential-supremum norm
- `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes` · lemma — A finite-measure measurable set in $\mathbb{R}^n$ is approximable in measure by a finite union of boxes
- `thm-box-step-functions-are-dense-in-l-p-of-rn` · theorem — Finite linear combinations of box indicators are dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff` · lemma — A compact set inside a bounded open set admits an explicit compactly supported continuous cutoff
- `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` · lemma — A finite-measure measurable set in $\mathbb{R}^n$ has a compact core and a bounded open neighbourhood of arbitrarily small excess
- `thm-c-c-rn-is-dense-in-l-p-of-rn` · theorem — $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn` · theorem — The $L^\infty$-closure of $C_c(\mathbb{R}^n)$ is $C_0(\mathbb{R}^n)$, not all of $L^\infty(\mathbb{R}^n)$
- `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` · theorem — Rational box-step functions form a countable dense subset of $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `lem-countable-generators-yield-countable-set-algebras` · lemma — A countable generator of a sigma-algebra yields a countable algebra of sets
- `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra` · lemma — Finite-measure sets are approximable in measure by sets from a countable generating algebra
- `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable` · theorem — If $\mu$ is sigma-finite and $\mathcal{A}$ is countably generated, then $L^p(\mu)$ is separable for $1 \le p < \infty$
- `thm-l-infinity-of-unit-interval-is-not-separable` · theorem — $L^\infty[0,1]$ is not separable
- `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p` · lemma — Continuous compactly supported functions are translation-continuous in $L^p$
- `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` · theorem — $\|\tau_h f - f\|_p \to 0$ in $L^p(\mathbb{R}^n)$ as $h \to 0$, for $1 \le p < \infty$
- `lem-borel-representatives-make-the-convolution-integrand-borel-measurable` · lemma — Borel representatives make the convolution integrand Borel measurable
- `lem-convolution-is-independent-of-the-chosen-borel-representatives` · lemma — Convolution on $L^1(\mathbb{R}^n)$ is independent of the chosen Borel representatives
- `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound` · theorem — If $f,g \in L^1(\mathbb{R}^n)$, then $f*g$ exists almost everywhere, belongs to $L^1$, and $\|f*g\|_1 \le \|f\|_1 \|g\|_1$
- `prop-l-one-convolution-is-bilinear-commutative-and-associative` · proposition — Convolution on $L^1(\mathbb{R}^n)$ is bilinear, commutative, and associative
- `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset` · theorem — The support of a convolution lies in the closure of the support sumset
- `lem-elementary-duality-formula-for-nonnegative-l-p-functions` · lemma — For $1 < p < \infty$, the $L^p$ norm of a nonnegative function is the supremum of its pairings with $L^q$ unit vectors
- `thm-minkowski-integral-inequality` · theorem — Minkowski's integral inequality
- `thm-young-convolution-inequality` · theorem — Young's convolution inequality
- `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity` · corollary — If $1/p + 1/q = 1$, then $f*g$ is continuous and vanishes at infinity
- `prop-mollifier-families-are-l-one-approximate-identities` · proposition — A unit-mass smooth bump generates an $L^1$ approximate identity
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign` · theorem — Convolution with a mollifier is smooth, and derivatives pass under the integral sign
- `thm-l-one-approximate-identities-converge-in-l-p` · theorem — Every $L^1$ approximate identity converges to the identity in $L^p$ for $1 \le p < \infty$
- `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions` · corollary — $L^1$ approximate identities converge uniformly on compacta for continuous functions
- `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` · theorem — $C_c^\infty(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$

### `density-separability-and-convolution-in-lp-examples` — Density Separability and Convolution in $L^p$ — Examples (12 item(s))

- `ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function` · example — $\mathbf{1}_{[0,1]} * \mathbf{1}_{[0,1]}$ is the tent function
- `ex-mollifying-the-unit-interval-indicator-at-two-scales` · example — Mollifying $\mathbf{1}_{[0,1]}$ at two scales
- `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval` · example — A concrete countable dense family in $L^2[0,1]$
- `ex-initial-interval-indicators-are-one-separated-in-l-infinity` · example — The family $\{\mathbf{1}_{[0,t]} : t \in [0,1]\}$ is $1$-separated in $L^\infty[0,1]$
- `ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function` · example — Young's inequality on an $L^1 * L^2$ pair
- `ex-the-gaussian-family-is-an-l-one-approximate-identity` · example — The Gaussian family is an $L^1$ approximate identity
- `fs-c-c-of-rn-is-dense-in-l-infinity-of-rn` · false-statement — FALSE: $C_c(\mathbb{R}^n)$ is dense in $L^\infty(\mathbb{R}^n)$
- `fs-l-p-of-every-measure-space-is-separable-for-finite-p` · false-statement — FALSE: $L^p(\mu)$ is separable for every measure $\mu$ and every $1 \le p < \infty$
- `fs-translation-is-continuous-in-l-infinity` · false-statement — FALSE: translation is continuous in $L^\infty$
- `fs-l-one-convolution-is-defined-at-every-point` · false-statement — FALSE: if $f,g \in L^1(\mathbb{R}^n)$, then $f*g(x)$ is defined for every $x$
- `cex-two-l-two-functions-can-have-convolution-outside-l-two` · counterexample — Two $L^2$ functions can have convolution outside $L^2$
- `fs-convolution-is-measurable-for-every-lebesgue-representative` · false-statement — FALSE: the Borel-representative discipline in convolution is unnecessary because continuous precomposition always preserves Lebesgue measurability

### `normed-and-banach-spaces` — Normed and Banach Spaces (20 item(s))

- `rem-real-and-complex-normed-space-convention` · remark — Real and complex scalar conventions for normed spaces
- `def-banach-space` · definition — Banach space
- `lem-reverse-triangle-inequality-in-a-normed-space` · lemma — The reverse triangle inequality in a normed space
- `def-linear-isometry-and-isometric-isomorphism` · definition — Linear isometries and isometric isomorphisms
- `def-normed-subspace` · definition — Normed subspace
- `lem-complete-subspace-is-closed` · lemma — A complete normed subspace is closed
- `lem-closed-subspace-of-a-banach-space-is-banach` · lemma — A closed subspace of a Banach space is Banach
- `def-product-norms-on-finitely-many-normed-spaces` · definition — The standard product norms on a finite product of normed spaces
- `lem-vector-operations-are-continuous-in-a-normed-space` · lemma — Vector addition and scalar multiplication are continuous in a normed space
- `lem-finite-product-norms-are-equivalent` · lemma — The standard finite product norms are equivalent
- `thm-finite-products-of-banach-spaces-are-banach` · theorem — Finite products of Banach spaces are Banach
- `def-series-and-absolute-convergence-in-a-normed-space` · definition — Series and absolute convergence in a normed space
- `lem-absolutely-convergent-series-is-cauchy` · lemma — An absolutely convergent series has Cauchy partial sums
- `thm-banach-series-criterion` · theorem — Series criterion for Banach spaces
- `def-completion-of-a-normed-space` · definition — Completion of a normed space
- `lem-completion-operations-are-well-defined` · lemma — The Cauchy-class operations of a normed-space completion are well defined
- `thm-metric-completion-carries-a-unique-banach-space-structure` · theorem — The metric completion of a normed space carries a unique compatible Banach-space structure
- `thm-completion-universal-property-for-bounded-linear-maps` · theorem — Bounded linear maps extend uniquely across the completion
- `cor-normed-space-completions-are-uniquely-linearly-isometric` · corollary — Any two completions of a normed space are uniquely linearly isometric
- `rem-lp-spaces-are-banach-spaces` · remark — The classical $L^p$ spaces are Banach spaces

### `normed-and-banach-spaces-examples` — Normed and Banach Spaces — Examples (9 item(s))

- `ex-ell-infinity-is-a-banach-space` · example — $\ell^\infty$ is Banach for the supremum norm
- `ex-c0-is-a-banach-space` · example — $c_0$ is Banach for the supremum norm
- `ex-cb-of-a-space-is-banach` · example — $C_b(X)$ is Banach for the supremum norm
- `ex-c-of-a-compact-space-is-banach` · example — $C(K)$ is Banach when $K$ is compact metric
- `ex-finite-sequences-c00-with-standard-norms` · example — The finitely supported sequences form an incomplete normed space with different standard completions
- `ex-polynomials-are-not-complete-in-the-supremum-norm` · example — Polynomials are not complete in the supremum norm on a compact interval
- `ex-lp-banach-space-dictionary` · example — Dictionary of the classical $L^p$ and $\ell^p$ Banach spaces
- `cex-an-incomplete-subspace-need-not-be-closed` · counterexample — An incomplete normed subspace need not be closed
- `cex-equivalent-metrics-need-not-come-from-equivalent-norms` · counterexample — Topologically equivalent metrics on a vector space need not come from equivalent norms

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
`research/frontier-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-27`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
