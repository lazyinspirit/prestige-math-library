# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-25",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "d",
  "failures": [
    {
      "id": "rendercheck",
      "stage": "8-preflight",
      "why": "FAIL",
      "output": "  [multiline-display] items/def-valuation-on-a-field.md: display math must be one source line between `$$`; a hard line break mis-renders\n      $$ \\gamma<\\infty,\\qquad \\gamma+\\infty=\\infty+\\gamma=\\infty, \\qquad \\infty+\\infty=\\infty $$\n\n1 ERROR(s) across 10732 file(s)\n\nFAIL\n",
      "named_ids": [
        "def-valuation-on-a-field"
      ]
    },
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [thm-every-valuation-ring-arises-from-its-value-group]: L1 quote does not occur in def-valuation-on-a-field's Definition",
      "output": "proof-contract: 61 error(s), 0 warning(s), 290/290 item(s) checked\nERROR citation-quote-mismatch [thm-every-valuation-ring-arises-from-its-value-group]: L1 quote does not occur in def-valuation-on-a-field's Definition\nERROR citation-quote-mismatch [ex-rank-two-valuation-ring-not-dvr]: F2 quote does not occur in def-valuation-on-a-field's Definition\nERROR citation-quote-mismatch [ex-nondiscrete-ordered-subgroup-valuation]: F2 quote does not occur in def-valuation-on-a-field's Definition\nERROR citation-quote-mismatch [thm-grand-equivalence-for-simply-connected-plane-domains]: L2 quote does not occur in rem-analytic-equivalences-from-global-cauchy-theory's Remark\nERROR citation-quote-mismatch [cex-the-punctured-plane-separates-c-complement-from-spherical-complement]: L2 quote does not occur in cor-winding-number-classifies-loops-in-the-punctured-plane's Statement\nERROR citation-quote-mismatch [thm-monoidal-functors-compose-and-laxness-is-preserved]: L1 quote does not occur in def-lax-strong-and-strict-monoidal-functor's Definition\nERROR citation-quote-mismatch [thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects]: L1 quote does not occur in def-lax-strong-and-strict-monoidal-functor's Definition\nERROR citation-quote-mismatch [fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms]: L1 quote does not occur in def-lax-strong-and-strict-monoidal-functor's Definition\nERROR citation-quote-mismatch [fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category]: L1 quote does not occur in rem-unbracketed-tensor-strings-are-not-yet-defined's Remark\nERROR citation-source-not-in-fact [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: L1 does not link [[thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad]]\nERROR citation-use-step-missing [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: L1 names missing step 1.2\nERROR citation-use-unmapped [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: L1 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: L1 -> def-monad needs an exact citation contract\nERROR citation-fact-uncontracted [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: L2 -> thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad needs an exact citation contract\nERROR citation-fact-uncontracted [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: L2 -> rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists needs an exact citation contract\nERROR step-entry-input-omitted [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: step-1-1 omits L1, cited by 1.1\nERROR step-entry-step-missing [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-omitted [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-step-missing [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: step-2-1 names missing step 1.2\nERROR step-unmapped [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [ex-a-lax-monoidal-functor-that-is-not-strong]: L2 quote does not occur in def-lax-strong-and-strict-monoidal-functor's Definition\nERROR citation-quote-mismatch [prop-chain-homotopy-is-an-equivalence-relation]: L1 quote does not occur in def-chain-homotopy's Definition\nERROR citation-quote-mismatch [lem-chain-homotopy-is-compatible-with-addition-and-composition]: L1 quote does not occur in def-chain-homotopy's Definition\nERROR citation-quote-mismatch [prop-null-homotopic-maps-form-a-two-sided-additive-ideal]: L2 quote does not occur in lem-chain-homotopy-is-compatible-with-addition-and-composition's Statement\nERROR citation-quote-mismatch [thm-chain-homotopic-maps-induce-the-same-map-on-homology]: L1 quote does not occur in def-chain-homotopy's Definition\nERROR citation-quote-mismatch [lem-composition-of-homotopy-classes-is-well-defined]: L2 quote does not occur in lem-chain-homotopy-is-compatible-with-addition-and-composition's Statement\nERROR citation-quote-mismatch [lem-composition-of-homotopy-classes-is-well-defined]: L3 quote does not occur in prop-null-homotopic-maps-form-a-two-sided-additive-ideal's Statement\nERROR citation-quote-mismatch [thm-the-homotopy-category-is-additive]: L2 quote does not occur in prop-null-homotopic-maps-form-a-two-sided-additive-ideal's Statement\nERROR citation-quote-mismatch [prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes]: L2 quote does not occur in lem-chain-homotopy-is-compatible-with-addition-and-composition's Statement\nERROR citation-quote-mismatch [fs-chain-homotopic-maps-are-equal-as-chain-maps]: L1 quote does not occur in def-chain-homotopy's Definition\nERROR citation-quote-mismatch [fs-every-acyclic-complex-is-contractible]: L2 quote does not occur in prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category's Statement\nERROR citation-quote-mismatch [fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence]: L3 quote does not occur in prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category's Statement\nERROR citation-use-unmapped [fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign]: L1 is cited by 1.1 but the contract omits it\nERROR step-entry-input-omitted [fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign]: step-1-1 omits L1, cited by 1.1\nERROR citation-quote-mismatch [ex-a-contracting-homotopy-for-the-two-term-identity-complex]: L1 quote does not occur in def-chain-homotopy's Definition\nERROR citation-quote-mismatch [ex-two-homotopic-maps-with-different-components]: L2 quote does not occur in def-chain-homotopy's Definition\nERROR citation-quote-mismatch [cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension]: L2 quote does not occur in prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category's Statement\nERROR citation-quote-mismatch [thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb]: L4 quote does not occur in def-rooted-stable-tooth-comb's Definition\nERROR citation-quote-mismatch [lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle]: L1 quote does not occur in def-rooted-stable-tooth-comb's Definition\nERROR citation-quote-mismatch [ex-a-rooted-stable-tooth-comb-with-two-teeth]: L1 quote does not occur in def-rooted-stable-tooth-comb's Definition\nERROR citation-quote-mismatch [lem-epsilon-closure-is-a-closure-operator]: L1 quote does not occur in def-epsilon-closure-of-a-state-set's Definition\nERROR citation-quote-mismatch [lem-subset-construction-state-invariant]: L2 quote does not occur in def-extended-nfa-transition's Definition\nERROR citation-quote-mismatch [thm-epsilon-elimination-for-nfas]: L1 quote does not occur in def-epsilon-closure-of-a-state-set's Definition\nERROR citation-quote-mismatch [thm-pda-to-cfg-construction]: L3 quote does not occur in lem-pda-fragment-variables-compose's Statement\nERROR citation-quote-mismatch [lem-dpdas-have-unique-computations]: L1 quote does not occur in def-deterministic-pda's Definition\nERROR citation-quote-mismatch [prop-deterministic-cfls-are-unambiguous]: L1 quote does not occur in def-deterministic-pda's Definition\nERROR citation-use-unmapped [prop-deterministic-cfls-are-unambiguous]: L1 is cited by 2.1 but the contract omits it\nERROR citation-use-unmapped [prop-deterministic-cfls-are-unambiguous]: L1 is cited by 3.1 but the contract omits it\nERROR citation-quote-mismatch [prop-deterministic-cfls-are-unambiguous]: L2 quote does not occur in lem-dpdas-have-unique-computations's Statement\nERROR citation-use-not-supported [prop-deterministic-cfls-are-unambiguous]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [prop-deterministic-cfls-are-unambiguous]: L2 is cited by 3.2 but the contract omits it\nERROR citation-use-not-supported [prop-deterministic-cfls-are-unambiguous]: L3 is not cited by declared use 3.1\nERROR citation-use-unmapped [prop-deterministic-cfls-are-unambiguous]: L3 is cited by 4.1 but the contract omits it\nERROR step-entry-input-omitted [prop-deterministic-cfls-are-unambiguous]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [prop-deterministic-cfls-are-unambiguous]: step-3-1 omits L1, cited by 3.1\nERROR step-unmapped [prop-deterministic-cfls-are-unambiguous]: 3.2 has no derivation or routine-step contract\nERROR step-unmapped [prop-deterministic-cfls-are-unambiguous]: 4.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [prop-deterministic-cfls-are-closed-under-complement]: L1 quote does not occur in def-deterministic-pda's Definition\nERROR citation-quote-mismatch [fs-swapping-dpda-accept-states-complements-the-language]: L1 quote does not occur in def-deterministic-pda's Definition\nERROR citation-quote-mismatch [ex-a-n-b-n-is-deterministic-context-free-and-unambiguous]: L1 quote does not occur in def-deterministic-pda's Definition\nERROR citation-quote-mismatch [lem-acceptance-is-configuration-reachability]: L2 quote does not occur in def-nondeterministic-accepting-computation's Definition\n",
      "named_ids": [
        "thm-every-valuation-ring-arises-from-its-value-group",
        "ex-rank-two-valuation-ring-not-dvr",
        "ex-nondiscrete-ordered-subgroup-valuation",
        "thm-grand-equivalence-for-simply-connected-plane-domains",
        "cex-the-punctured-plane-separates-c-complement-from-spherical-complement",
        "thm-monoidal-functors-compose-and-laxness-is-preserved",
        "thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects",
        "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
        "fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category",
        "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
        "thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad",
        "ex-a-lax-monoidal-functor-that-is-not-strong",
        "prop-chain-homotopy-is-an-equivalence-relation",
        "lem-chain-homotopy-is-compatible-with-addition-and-composition",
        "prop-null-homotopic-maps-form-a-two-sided-additive-ideal",
        "thm-chain-homotopic-maps-induce-the-same-map-on-homology",
        "lem-composition-of-homotopy-classes-is-well-defined",
        "thm-the-homotopy-category-is-additive",
        "prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes",
        "fs-chain-homotopic-maps-are-equal-as-chain-maps",
        "fs-every-acyclic-complex-is-contractible",
        "fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence",
        "fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign",
        "ex-a-contracting-homotopy-for-the-two-term-identity-complex",
        "ex-two-homotopic-maps-with-different-components",
        "cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension",
        "thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb",
        "lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle",
        "ex-a-rooted-stable-tooth-comb-with-two-teeth",
        "lem-epsilon-closure-is-a-closure-operator",
        "lem-subset-construction-state-invariant",
        "thm-epsilon-elimination-for-nfas",
        "thm-pda-to-cfg-construction",
        "lem-dpdas-have-unique-computations",
        "prop-deterministic-cfls-are-unambiguous",
        "prop-deterministic-cfls-are-closed-under-complement",
        "fs-swapping-dpda-accept-states-complements-the-language",
        "ex-a-n-b-n-is-deterministic-context-free-and-unambiguous",
        "lem-acceptance-is-configuration-reachability"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]: thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 4 [lem-valuation-ring-is-local] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-valuation-ring-characterisations] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-every-valuation-ring-arises-from-its-value-group] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-valuation-ring-is-integrally-closed] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-dvr-element-normal-form] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-ideals-in-a-dvr] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nMODERATE 3 [cor-prime-ideals-and-dimension-of-a-dvr] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 15 [thm-equivalent-characterisations-of-a-dvr] 3:14 declared dependencies; 2:13 cited facts; 2:12 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [thm-noetherian-valuation-ring-characterisation] 1:3 cited facts; 3:biconditional / both-direction claim\nCRITICAL 8 [thm-dvr-ideal-and-module-length] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-height-one-localisation-of-normal-noetherian-domain-is-dvr] 3:8 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [cor-dvr-is-a-pid] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-p-adic-dvr] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [ex-localisation-of-a-pid-at-a-prime] 2:5 declared dependencies; 2:5 cited facts\nHIGH 5 [ex-plane-curve-local-ring-not-dvr] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-rank-two-valuation-ring-not-dvr] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-nondiscrete-ordered-subgroup-valuation] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [ex-dvr-length-computation] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [ex-uniformisers-and-dvr-ideal-arithmetic] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-valuation-ring-ideals-linearly-ordered] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-moore-penrose-pseudoinverse-exists-and-is-unique] 1:2 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant] 1:2 cited facts; 1:6 numbered proof steps\nHIGH 6 [thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-moore-penrose-image-and-kernel-identities] 1:3 cited facts\nMODERATE 4 [prop-full-column-rank-pseudoinverse-formula] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [prop-full-row-rank-pseudoinverse-formula] 1:2 cited facts\nCRITICAL 8 [thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [prop-reduced-qr-formulas-for-full-rank-pseudoinverses] 1:3 cited facts\nHIGH 5 [thm-tikhonov-regularised-least-squares-has-a-unique-minimiser] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [prop-tikhonov-regularisation-has-singular-filter-factors] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:analytic limiting/completeness language\nMODERATE 3 [ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution] 1:2 cited facts\nMODERATE 3 [ex-an-underdetermined-system-and-its-minimum-norm-exact-solution] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers] 2:boundary-sensitive language\nORDINARY 0 [ex-a-full-column-rank-pseudoinverse-from-reduced-qr] no signals\nORDINARY 0 [ex-ridge-regularisation-filters-a-diagonal-inverse-problem] no signals\nORDINARY 1 [ex-truncated-svd-denoising-on-a-diagonal-problem] 1:2 cited facts\nORDINARY 2 [fs-reverse-order-pseudoinversion-holds-without-hypotheses] 2:boundary-sensitive language\nORDINARY 2 [cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family] 2:analytic limiting/completeness language\nHIGH 5 [thm-eigenpair-residual-realises-the-minimum-norm-backward-error] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap] 1:2 cited facts\nMODERATE 3 [thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity] 1:2 cited facts\nHIGH 5 [thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [prop-shifted-qr-preserves-upper-hessenberg-form] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 2 [ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate] 2:analytic limiting/completeness language\nORDINARY 2 [cex-equal-dominant-moduli-can-make-power-iteration-cycle] 2:analytic limiting/completeness language\nMODERATE 4 [cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration] 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 0 [ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue] no signals\nHIGH 6 [ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix] no signals\nORDINARY 2 [ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix] 2:boundary-sensitive language\nORDINARY 2 [ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail] 2:boundary-sensitive language\nORDINARY 0 [cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors] no signals\nMODERATE 3 [thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data] 2:6 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures] 3:11 declared dependencies; 2:9 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 11 [thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality] 3:7 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [cor-finite-complex-measures-admit-integrable-radon-nikodym-densities] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-integration-against-a-radon-nikodym-derivative] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [thm-additivity-of-radon-nikodym-derivatives] 1:2 cited facts\nHIGH 5 [thm-chain-rule-for-radon-nikodym-derivatives] 3:7 declared dependencies; 2:5 cited facts\nMODERATE 3 [cor-reciprocal-rule-for-equivalent-sigma-finite-measures] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 14 [thm-polar-decomposition-for-signed-and-complex-measures] 3:10 declared dependencies; 2:9 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [ex-a-piecewise-quadratic-distribution-function-recovers-its-density] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-homotopy-invariance-of-holomorphic-line-integrals] 3:7 declared dependencies; 2:7 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-cauchy-theorem-for-null-homotopic-loops] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-winding-number-equals-circle-degree] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-trivial-fundamental-group-implies-null-homology-for-plane-domains] 3:10 declared dependencies; 2:10 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-connected-spherical-complement-implies-null-homology] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [lem-null-homology-implies-connected-spherical-complement] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-null-homology-is-equivalent-to-global-harmonic-conjugates] 3:10 declared dependencies; 2:10 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-null-homology-gives-the-plane-or-disc-alternative] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [lem-the-plane-or-disc-alternative-gives-contractibility] 1:3 cited facts\nCRITICAL 9 [lem-contractibility-implies-trivial-fundamental-group] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [thm-grand-equivalence-for-simply-connected-plane-domains] 3:14 declared dependencies; 2:14 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [cor-spherical-complement-characterization-of-plane-simple-connectivity] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [cor-winding-number-classifies-loops-in-the-punctured-plane] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 0 [ex-the-unit-disc-satisfies-all-grand-equivalence-clauses] no signals\nORDINARY 2 [ex-the-complex-plane-satisfies-all-grand-equivalence-clauses] 2:boundary-sensitive language\nMODERATE 4 [ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-every-convex-plane-domain-is-simply-connected] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-every-star-shaped-plane-domain-is-simply-connected] 1:2 cited facts\nMODERATE 4 [ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [cex-the-punctured-plane-separates-c-complement-from-spherical-complement] 1:2 cited facts\nORDINARY 1 [cex-a-round-annulus-is-connected-but-not-simply-connected] 1:2 cited facts\nORDINARY 1 [cex-the-punctured-disc-is-connected-but-not-simply-connected] 1:2 cited facts\nORDINARY 1 [fs-connected-complement-in-c-implies-simple-connectivity] 1:2 cited facts\nORDINARY 1 [fs-simply-connected-plane-domains-are-convex] 1:2 cited facts\nORDINARY 1 [fs-simply-connected-plane-domains-are-star-shaped] 1:2 cited facts\nMODERATE 4 [thm-dirichlet-convolution-commutative-ring] 2:5 declared dependencies; 2:boundary-sensitive language\nCRITICAL 9 [thm-dirichlet-convolution-invertibility-criterion] 3:7 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-dirichlet-convolution-preserves-multiplicativity] 3:7 declared dependencies; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [thm-multiplicative-functions-determined-by-prime-powers] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [prop-divisor-functions-under-dirichlet-convolution] 2:6 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [thm-von-mangoldt-divisor-sum-identity] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [cor-von-mangoldt-mobius-inversion-formula] no signals\nORDINARY 2 [cor-number-of-monic-irreducible-polynomials-over-a-finite-field] 2:boundary-sensitive language\nORDINARY 2 [prop-liouville-convolution-square-indicator] 2:5 declared dependencies\nORDINARY 2 [ex-dirichlet-convolution-table-through-twelve] 2:boundary-sensitive language\nMODERATE 4 [ex-dirichlet-inverse-recursion] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [ex-divisor-counting-and-sum-prime-power-formulas] no signals\nORDINARY 2 [ex-euler-totient-as-a-mobius-convolution] 2:boundary-sensitive language\nORDINARY 2 [ex-von-mangoldt-divisor-sum] 2:boundary-sensitive language\nORDINARY 0 [ex-liouville-square-indicator] no signals\nORDINARY 0 [cex-multiplicative-does-not-mean-completely-multiplicative] no signals\nORDINARY 0 [cex-the-mertens-conjecture-is-false] no signals\nORDINARY 2 [thm-the-pentagon-and-the-triangle-are-independent] 2:boundary-sensitive language\nHIGH 5 [thm-a-category-with-finite-products-is-monoidal] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [cor-set-cat-and-every-complete-category-are-cartesian-monoidal] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition] 1:3 cited facts\nORDINARY 1 [thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad] 1:3 cited facts\nORDINARY 0 [def-a-module-over-a-monoid-object] no signals\nORDINARY 1 [thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense] 1:3 cited facts\nHIGH 5 [thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product] 3:7 declared dependencies; 2:6 cited facts\nORDINARY 1 [thm-monoid-objects-in-abelian-groups-are-rings] 1:3 cited facts\nMODERATE 4 [thm-modules-over-a-commutative-ring-form-a-monoidal-category] 2:6 declared dependencies; 2:6 cited facts\nMODERATE 3 [thm-a-poset-with-finite-meets-is-a-strict-monoidal-category] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [thm-the-left-unitor-of-a-tensor-product-is-determined] no signals\nORDINARY 0 [thm-the-right-unitor-of-a-tensor-product-is-determined] no signals\nMODERATE 3 [cor-the-two-unitors-agree-on-the-unit-object] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-monoidal-functors-compose-and-laxness-is-preserved] 1:2 cited facts\nORDINARY 1 [thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects] 1:2 cited facts\nORDINARY 2 [thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers] 2:boundary-sensitive language\nORDINARY 1 [fs-every-monoidal-category-is-strict] 1:2 cited facts\nORDINARY 1 [fs-the-unit-constraints-must-be-imposed-as-axioms] 1:3 cited facts\nORDINARY 1 [fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms] 1:2 cited facts\nORDINARY 0 [fs-the-pentagon-follows-from-the-triangle] no signals\nORDINARY 0 [fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category] no signals\nORDINARY 1 [fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad] 1:3 cited facts\nORDINARY 2 [ex-the-cartesian-monoidal-structure-on-sets-computed] 2:boundary-sensitive language\nORDINARY 0 [ex-the-pentagon-checked-for-cartesian-products] no signals\nHIGH 5 [ex-a-monoid-as-a-one-object-monoidal-category] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-the-five-bracketings-of-a-four-fold-product] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-free-monoid-monad-as-a-monoid-object] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-a-lax-monoidal-functor-that-is-not-strong] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [cex-the-skeleton-of-set-cannot-be-made-strict-by-identification] 2:boundary-sensitive language\nORDINARY 0 [ex-endofunctor-composition-as-a-strict-tensor] no signals\nORDINARY 2 [lem-the-hom-complex-differential-squares-to-zero] 2:boundary-sensitive language\nHIGH 6 [prop-zero-cocycles-in-the-hom-complex-are-chain-maps] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [prop-chain-homotopy-is-an-equivalence-relation] 2:boundary-sensitive language\nORDINARY 1 [lem-chain-homotopy-is-compatible-with-addition-and-composition] 1:3 cited facts\nMODERATE 3 [prop-null-homotopic-maps-form-a-two-sided-additive-ideal] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-chain-homotopic-maps-induce-the-same-map-on-homology] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-null-homotopic-maps-induce-zero-on-homology] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [cor-a-contractible-complex-is-acyclic] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-composition-of-homotopy-classes-is-well-defined] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-the-homotopy-category-is-additive] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-homology-factors-uniquely-through-the-homotopy-category] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nCRITICAL 11 [prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-the-shifted-differential-squares-to-zero] 2:boundary-sensitive language\nCRITICAL 8 [thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [prop-homology-of-a-shift-is-shifted-homology] 1:2 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 9 [prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-chain-homotopic-maps-are-equal-as-chain-maps] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-every-acyclic-complex-is-contractible] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-contracting-homotopy-for-the-two-term-identity-complex] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-two-homotopic-maps-with-different-components] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-hom-complex-of-two-two-term-complexes] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-split-exact-complex-and-its-contraction] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cex-a-quasi-isomorphism-with-no-homotopy-inverse] 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-shifting-a-three-term-complex-with-all-signs] 1:3 cited facts\nMODERATE 3 [ex-homotopy-classes-as-h-zero-of-a-hom-complex] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears] 2:boundary-sensitive language\nHIGH 5 [thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb] 2:6 declared dependencies; 2:6 cited facts; 1:9 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle] 1:3 cited facts\nCRITICAL 12 [thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound] 3:10 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [cor-the-five-cycle-has-the-erdos-hajnal-property] 1:2 cited facts\nORDINARY 0 [ex-a-rooted-stable-tooth-comb-with-two-teeth] no signals\nMODERATE 3 [ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 1 [cex-a-comb-can-have-an-edge-between-two-blocks] 1:2 cited facts\nORDINARY 1 [fs-every-comb-has-pairwise-anticomplete-blocks] 1:2 cited facts\nORDINARY 1 [cor-the-immersion-and-submersion-loci-are-open] 1:3 cited facts\nHIGH 6 [thm-smooth-inverse-function-theorem-on-manifolds] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-constant-rank-theorem-for-manifolds] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-local-normal-form-for-immersions] 1:2 cited facts\nORDINARY 1 [cor-local-normal-form-for-submersions] 1:2 cited facts\nORDINARY 0 [cor-every-immersion-is-locally-an-embedding] no signals\nORDINARY 1 [cor-every-submersion-is-an-open-map] 1:3 cited facts\nORDINARY 1 [prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank] 1:3 cited facts\nMODERATE 3 [lem-slice-chart-restrictions-form-a-smooth-atlas] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [prop-the-smooth-structure-of-an-embedded-submanifold-is-unique] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding] 1:2 cited facts\nORDINARY 1 [prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold] 1:3 cited facts\nHIGH 5 [cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding] 3:7 declared dependencies; 2:7 cited facts\nHIGH 6 [prop-smoothness-into-an-embedded-submanifold-is-an-initial-property] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [thm-embedded-submanifolds-admit-local-defining-submersions] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-a-regular-level-set-is-an-embedded-submanifold] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-tangent-space-of-a-regular-level-set-is-the-kernel] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-preimage-theorem-for-submanifolds-under-submersions] 2:5 declared dependencies; 2:5 cited facts\nORDINARY 1 [prop-the-diagonal-is-an-embedded-submanifold] 1:3 cited facts\nMODERATE 3 [prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable] 2:4 declared dependencies; 2:4 cited facts\nHIGH 6 [fs-every-injective-immersion-is-an-embedding] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nHIGH 6 [fs-the-image-of-every-immersion-is-an-embedded-submanifold] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-a-regular-value-must-belong-to-the-image] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-constant-rank-at-one-point-implies-constant-rank-nearby] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold] 1:2 cited facts\nHIGH 6 [fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-coordinate-inclusions-and-projections-as-immersion-and-submersion] 1:2 cited facts\nHIGH 7 [ex-the-special-linear-group-as-a-regular-level-set] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nMODERATE 4 [ex-a-cylinder-as-the-preimage-of-a-circle-under-projection] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [ex-the-graph-of-the-sine-function-as-an-embedded-submanifold] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-regular-value-with-empty-fibre] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold] 1:3 cited facts\nHIGH 6 [cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-a-rank-drop-at-a-point-need-not-persist-locally] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-epsilon-closure-is-a-closure-operator] 2:boundary-sensitive language\nHIGH 7 [prop-every-dfa-is-an-nfa] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [lem-subset-construction-state-invariant] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [thm-subset-construction-preserves-language] 1:3 cited facts\nMODERATE 4 [cor-dfas-and-nfas-recognize-the-same-languages] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [thm-epsilon-elimination-for-nfas] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [thm-nfa-constructions-for-union-concatenation-and-star] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-subset-construction-can-require-exponentially-many-states] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [fs-an-nfa-accepts-only-if-every-branch-accepts] 2:boundary-sensitive language\nORDINARY 2 [fs-epsilon-is-an-input-symbol] 2:boundary-sensitive language\nORDINARY 2 [ex-every-dfa-is-an-nfa] 2:boundary-sensitive language\nMODERATE 3 [ex-subset-construction-can-require-exponentially-many-states] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-an-nfa-accepts-only-if-every-branch-accepts] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-final-state-and-empty-stack-acceptance-are-equivalent] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-cfg-to-pda-construction] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [lem-pda-fragment-variables-compose] 2:boundary-sensitive language\nCRITICAL 10 [thm-pda-to-cfg-construction] 2:5 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [thm-pdas-recognize-exactly-the-cfls] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [lem-dpdas-have-unique-computations] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [prop-pda-to-cfg-construction-preserves-unambiguity] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-deterministic-cfls-are-unambiguous] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [prop-deterministic-cfls-are-closed-under-complement] no signals\nMODERATE 3 [fs-swapping-dpda-accept-states-complements-the-language] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-final-state-and-empty-stack-acceptance-are-literally-identical] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-cfg-to-pda-construction] 2:boundary-sensitive language\nMODERATE 3 [ex-a-n-b-n-is-deterministic-context-free-and-unambiguous] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-swapping-dpda-accept-states-complements-the-language] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-deterministic-nonhalting-configurations-have-unique-successors] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [prop-valid-computation-histories-are-decidable] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [lem-acceptance-is-configuration-reachability] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [fs-rejection-is-divergence] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-nondeterministic-acceptance-requires-every-branch-to-halt] 2:boundary-sensitive language\nMODERATE 3 [ex-valid-computation-histories-are-decidable] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-acceptance-is-configuration-reachability] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [cex-rejection-is-divergence] 1:2 cited facts; 2:boundary-sensitive language\nrisk-report: 9 error(s), 290 item(s) routed\nERROR risk-review-missing [thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]: thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss]: thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-eigenpair-residual-realises-the-minimum-norm-backward-error]: thm-eigenpair-residual-realises-the-minimum-norm-backward-error is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [ex-a-piecewise-quadratic-distribution-function-recovers-its-density]: ex-a-piecewise-quadratic-distribution-function-recovers-its-density is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion]: cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative]: cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure]: fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives]: fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-the-image-of-every-immersion-is-an-embedded-submanifold]: fs-the-image-of-every-immersion-is-an-embedded-submanifold is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-valuation-ring-is-local",
        "thm-valuation-ring-characterisations",
        "thm-every-valuation-ring-arises-from-its-value-group",
        "thm-valuation-ring-is-integrally-closed",
        "thm-dvr-element-normal-form",
        "thm-ideals-in-a-dvr",
        "cor-prime-ideals-and-dimension-of-a-dvr",
        "thm-equivalent-characterisations-of-a-dvr",
        "thm-noetherian-valuation-ring-characterisation",
        "thm-dvr-ideal-and-module-length",
        "thm-height-one-localisation-of-normal-noetherian-domain-is-dvr",
        "cor-dvr-is-a-pid",
        "ex-p-adic-dvr",
        "ex-localisation-of-a-pid-at-a-prime",
        "ex-plane-curve-local-ring-not-dvr",
        "ex-rank-two-valuation-ring-not-dvr",
        "ex-nondiscrete-ordered-subgroup-valuation",
        "ex-dvr-length-computation",
        "ex-uniformisers-and-dvr-ideal-arithmetic",
        "ex-valuation-ring-ideals-linearly-ordered",
        "thm-moore-penrose-pseudoinverse-exists-and-is-unique",
        "prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant",
        "thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces",
        "cor-moore-penrose-image-and-kernel-identities",
        "prop-full-column-rank-pseudoinverse-formula",
        "prop-full-row-rank-pseudoinverse-formula",
        "thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution",
        "thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b",
        "prop-reduced-qr-formulas-for-full-rank-pseudoinverses",
        "thm-tikhonov-regularised-least-squares-has-a-unique-minimiser",
        "prop-tikhonov-regularisation-has-singular-filter-factors",
        "thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution",
        "prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters",
        "thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss",
        "ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections",
        "ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution",
        "ex-an-underdetermined-system-and-its-minimum-norm-exact-solution",
        "ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers",
        "ex-a-full-column-rank-pseudoinverse-from-reduced-qr",
        "ex-ridge-regularisation-filters-a-diagonal-inverse-problem",
        "ex-truncated-svd-denoising-on-a-diagonal-problem",
        "fs-reverse-order-pseudoinversion-holds-without-hypotheses",
        "cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family",
        "thm-eigenpair-residual-realises-the-minimum-norm-backward-error",
        "thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue",
        "thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift",
        "prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient",
        "prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration",
        "thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence",
        "thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap",
        "thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form",
        "prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity",
        "thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses",
        "prop-shifted-qr-preserves-upper-hessenberg-form",
        "thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties",
        "prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules",
        "ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate",
        "cex-equal-dominant-moduli-can-make-power-iteration-cycle",
        "cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration",
        "ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue",
        "ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix",
        "ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix",
        "ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix",
        "ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail",
        "cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors",
        "thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero",
        "thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data",
        "thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures",
        "thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures",
        "thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality",
        "cor-finite-complex-measures-admit-integrable-radon-nikodym-densities",
        "thm-integration-against-a-radon-nikodym-derivative",
        "thm-additivity-of-radon-nikodym-derivatives",
        "thm-chain-rule-for-radon-nikodym-derivatives",
        "cor-reciprocal-rule-for-equivalent-sigma-finite-measures",
        "thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value",
        "prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite",
        "thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures",
        "thm-polar-decomposition-for-signed-and-complex-measures",
        "thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition",
        "ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda",
        "ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure",
        "ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts",
        "ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one",
        "ex-a-piecewise-quadratic-distribution-function-recovers-its-density",
        "cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness",
        "cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion",
        "cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set",
        "cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure",
        "cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative",
        "fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure",
        "fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function",
        "fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure",
        "fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness",
        "fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives",
        "thm-homotopy-invariance-of-holomorphic-line-integrals",
        "cor-cauchy-theorem-for-null-homotopic-loops",
        "thm-winding-number-equals-circle-degree",
        "lem-trivial-fundamental-group-implies-null-homology-for-plane-domains",
        "lem-connected-spherical-complement-implies-null-homology",
        "lem-null-homology-implies-connected-spherical-complement",
        "thm-null-homology-is-equivalent-to-global-harmonic-conjugates",
        "lem-null-homology-gives-the-plane-or-disc-alternative",
        "lem-the-plane-or-disc-alternative-gives-contractibility",
        "lem-contractibility-implies-trivial-fundamental-group",
        "thm-grand-equivalence-for-simply-connected-plane-domains",
        "cor-spherical-complement-characterization-of-plane-simple-connectivity",
        "cor-winding-number-classifies-loops-in-the-punctured-plane",
        "ex-the-unit-disc-satisfies-all-grand-equivalence-clauses",
        "ex-the-complex-plane-satisfies-all-grand-equivalence-clauses",
        "ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm",
        "ex-every-convex-plane-domain-is-simply-connected",
        "ex-every-star-shaped-plane-domain-is-simply-connected",
        "ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped",
        "cex-the-punctured-plane-separates-c-complement-from-spherical-complement",
        "cex-a-round-annulus-is-connected-but-not-simply-connected",
        "cex-the-punctured-disc-is-connected-but-not-simply-connected",
        "fs-connected-complement-in-c-implies-simple-connectivity",
        "fs-simply-connected-plane-domains-are-convex",
        "fs-simply-connected-plane-domains-are-star-shaped",
        "thm-dirichlet-convolution-commutative-ring",
        "thm-dirichlet-convolution-invertibility-criterion",
        "thm-dirichlet-convolution-preserves-multiplicativity",
        "thm-multiplicative-functions-determined-by-prime-powers",
        "prop-divisor-functions-under-dirichlet-convolution",
        "thm-von-mangoldt-divisor-sum-identity",
        "cor-von-mangoldt-mobius-inversion-formula",
        "cor-number-of-monic-irreducible-polynomials-over-a-finite-field",
        "prop-liouville-convolution-square-indicator",
        "ex-dirichlet-convolution-table-through-twelve",
        "ex-dirichlet-inverse-recursion",
        "ex-divisor-counting-and-sum-prime-power-formulas",
        "ex-euler-totient-as-a-mobius-convolution",
        "ex-von-mangoldt-divisor-sum",
        "ex-liouville-square-indicator",
        "cex-multiplicative-does-not-mean-completely-multiplicative",
        "cex-the-mertens-conjecture-is-false",
        "thm-the-pentagon-and-the-triangle-are-independent",
        "thm-a-category-with-finite-products-is-monoidal",
        "cor-set-cat-and-every-complete-category-are-cartesian-monoidal",
        "thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid",
        "thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition",
        "thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad",
        "def-a-module-over-a-monoid-object",
        "thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense",
        "thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product",
        "thm-monoid-objects-in-abelian-groups-are-rings",
        "thm-modules-over-a-commutative-ring-form-a-monoidal-category",
        "thm-a-poset-with-finite-meets-is-a-strict-monoidal-category",
        "thm-the-left-unitor-of-a-tensor-product-is-determined",
        "thm-the-right-unitor-of-a-tensor-product-is-determined",
        "cor-the-two-unitors-agree-on-the-unit-object",
        "thm-monoidal-functors-compose-and-laxness-is-preserved",
        "thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects",
        "thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers",
        "fs-every-monoidal-category-is-strict",
        "fs-the-unit-constraints-must-be-imposed-as-axioms",
        "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
        "fs-the-pentagon-follows-from-the-triangle",
        "fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category",
        "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
        "ex-the-cartesian-monoidal-structure-on-sets-computed",
        "ex-the-pentagon-checked-for-cartesian-products",
        "ex-a-monoid-as-a-one-object-monoidal-category",
        "ex-the-five-bracketings-of-a-four-fold-product",
        "ex-the-free-monoid-monad-as-a-monoid-object",
        "ex-a-lax-monoidal-functor-that-is-not-strong",
        "cex-the-skeleton-of-set-cannot-be-made-strict-by-identification",
        "ex-endofunctor-composition-as-a-strict-tensor",
        "lem-the-hom-complex-differential-squares-to-zero",
        "prop-zero-cocycles-in-the-hom-complex-are-chain-maps",
        "prop-chain-homotopy-is-an-equivalence-relation",
        "lem-chain-homotopy-is-compatible-with-addition-and-composition",
        "prop-null-homotopic-maps-form-a-two-sided-additive-ideal",
        "thm-chain-homotopic-maps-induce-the-same-map-on-homology",
        "cor-null-homotopic-maps-induce-zero-on-homology",
        "thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism",
        "cor-a-contractible-complex-is-acyclic",
        "lem-composition-of-homotopy-classes-is-well-defined",
        "thm-the-homotopy-category-is-additive",
        "prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive",
        "thm-homology-factors-uniquely-through-the-homotopy-category",
        "prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category",
        "thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex",
        "lem-the-shifted-differential-squares-to-zero",
        "thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories",
        "prop-homology-of-a-shift-is-shifted-homology",
        "prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms",
        "lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible",
        "thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split",
        "thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split",
        "prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes",
        "prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence",
        "fs-chain-homotopic-maps-are-equal-as-chain-maps",
        "fs-every-acyclic-complex-is-contractible",
        "fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence",
        "fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities",
        "fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign",
        "ex-a-contracting-homotopy-for-the-two-term-identity-complex",
        "ex-two-homotopic-maps-with-different-components",
        "ex-the-hom-complex-of-two-two-term-complexes",
        "ex-a-split-exact-complex-and-its-contraction",
        "cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension",
        "cex-a-quasi-isomorphism-with-no-homotopy-inverse",
        "ex-shifting-a-three-term-complex-with-all-signs",
        "ex-homotopy-classes-as-h-zero-of-a-hom-complex",
        "lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears",
        "thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side",
        "thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb",
        "lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree",
        "cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree",
        "lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle",
        "thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound",
        "cor-the-five-cycle-has-the-erdos-hajnal-property",
        "ex-a-rooted-stable-tooth-comb-with-two-teeth",
        "ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle",
        "cex-a-comb-can-have-an-edge-between-two-blocks",
        "fs-every-comb-has-pairwise-anticomplete-blocks",
        "cor-the-immersion-and-submersion-loci-are-open",
        "thm-smooth-inverse-function-theorem-on-manifolds",
        "thm-constant-rank-theorem-for-manifolds",
        "cor-local-normal-form-for-immersions",
        "cor-local-normal-form-for-submersions",
        "cor-every-immersion-is-locally-an-embedding",
        "cor-every-submersion-is-an-open-map",
        "prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank",
        "lem-slice-chart-restrictions-form-a-smooth-atlas",
        "prop-the-smooth-structure-of-an-embedded-submanifold-is-unique",
        "prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding",
        "prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold",
        "cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding",
        "prop-smoothness-into-an-embedded-submanifold-is-an-initial-property",
        "prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space",
        "thm-embedded-submanifolds-admit-local-defining-submersions",
        "thm-a-regular-level-set-is-an-embedded-submanifold",
        "prop-tangent-space-of-a-regular-level-set-is-the-kernel",
        "thm-preimage-theorem-for-submanifolds-under-submersions",
        "prop-the-diagonal-is-an-embedded-submanifold",
        "prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold",
        "prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form",
        "cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable",
        "fs-every-injective-immersion-is-an-embedding",
        "fs-the-image-of-every-immersion-is-an-embedded-submanifold",
        "fs-a-regular-value-must-belong-to-the-image",
        "fs-constant-rank-at-one-point-implies-constant-rank-nearby",
        "fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold",
        "fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology",
        "ex-coordinate-inclusions-and-projections-as-immersion-and-submersion",
        "ex-the-special-linear-group-as-a-regular-level-set",
        "ex-a-cylinder-as-the-preimage-of-a-circle-under-projection",
        "ex-the-graph-of-the-sine-function-as-an-embedded-submanifold",
        "ex-a-regular-value-with-empty-fibre",
        "cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold",
        "cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding",
        "cex-a-rank-drop-at-a-point-need-not-persist-locally",
        "lem-epsilon-closure-is-a-closure-operator",
        "prop-every-dfa-is-an-nfa",
        "lem-subset-construction-state-invariant",
        "thm-subset-construction-preserves-language",
        "cor-dfas-and-nfas-recognize-the-same-languages",
        "thm-epsilon-elimination-for-nfas",
        "thm-nfa-constructions-for-union-concatenation-and-star",
        "prop-subset-construction-can-require-exponentially-many-states",
        "fs-an-nfa-accepts-only-if-every-branch-accepts",
        "fs-epsilon-is-an-input-symbol",
        "ex-every-dfa-is-an-nfa",
        "ex-subset-construction-can-require-exponentially-many-states",
        "cex-an-nfa-accepts-only-if-every-branch-accepts",
        "thm-final-state-and-empty-stack-acceptance-are-equivalent",
        "thm-cfg-to-pda-construction",
        "lem-pda-fragment-variables-compose",
        "thm-pda-to-cfg-construction",
        "thm-pdas-recognize-exactly-the-cfls",
        "lem-dpdas-have-unique-computations",
        "prop-pda-to-cfg-construction-preserves-unambiguity",
        "prop-deterministic-cfls-are-unambiguous",
        "prop-deterministic-cfls-are-closed-under-complement",
        "fs-swapping-dpda-accept-states-complements-the-language",
        "fs-final-state-and-empty-stack-acceptance-are-literally-identical",
        "ex-cfg-to-pda-construction",
        "ex-a-n-b-n-is-deterministic-context-free-and-unambiguous",
        "cex-swapping-dpda-accept-states-complements-the-language",
        "lem-deterministic-nonhalting-configurations-have-unique-successors",
        "prop-valid-computation-histories-are-decidable",
        "lem-acceptance-is-configuration-reachability",
        "fs-rejection-is-divergence",
        "fs-nondeterministic-acceptance-requires-every-branch-to-halt",
        "ex-valid-computation-histories-are-decidable",
        "ex-acceptance-is-configuration-reachability",
        "cex-rejection-is-divergence"
      ]
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 773 citation(s) over 290 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 21.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  cex-the-punctured-plane-separates-c-complement-from-spherical-complement  [L2] -> cor-winding-number-classifies-loops-in-the-punctured-plane (searched: Statement)\n    quote: \"For based loops in $\\mathbb C^\\times$ at $1$, the assignment $$[\\gamma]\\longmapsto n(\\gamma,0)$$ defines the standard isomorphism $$\\pi_1(\\mathbb C^\\times,1)\\cong(\\mathbb Z,+).$$\"\n\n  fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category  [L1] -> rem-unbracketed-tensor-strings-are-not-yet-defined (searched: Remark)\n    quote: \"Before coherence is proved, the expression $A_1\\otimes\\cdots\\otimes A_n$ has no meaning by itself on this page. What is defined is a parenthesised tensor word and its evaluation fu…\"\n\n  prop-chain-homotopy-is-an-equivalence-relation  [L1] -> def-chain-homotopy (searched: Definition)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps. A chain homotopy $s:f\\simeq g$ is a graded morphism of degree $1$, $$s_n:C_n\\to D_{n+1},$$ such that for every $n\\in\\mathbb Z$, $$f_…\"\n\n  lem-chain-homotopy-is-compatible-with-addition-and-composition  [L1] -> def-chain-homotopy (searched: Definition)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps. A chain homotopy $s:f\\simeq g$ is a graded morphism of degree $1$, $$s_n:C_n\\to D_{n+1},$$ such that for every $n\\in\\mathbb Z$, $$f_…\"\n\n  prop-null-homotopic-maps-form-a-two-sided-additive-ideal  [L2] -> lem-chain-homotopy-is-compatible-with-addition-and-composition (searched: Statement)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps with $f\\simeq g$. 1. If $f',g':C_\\bullet\\to D_\\bullet$ are chain maps with $f'\\simeq g'$, then $f+f'\\simeq g+g'$. 2. If $v:B_\\bullet\\…\"\n\n  thm-chain-homotopic-maps-induce-the-same-map-on-homology  [L1] -> def-chain-homotopy (searched: Definition)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps. A chain homotopy $s:f\\simeq g$ is a graded morphism of degree $1$, $$s_n:C_n\\to D_{n+1},$$ such that for every $n\\in\\mathbb Z$, $$f_…\"\n\n  lem-composition-of-homotopy-classes-is-well-defined  [L2] -> lem-chain-homotopy-is-compatible-with-addition-and-composition (searched: Statement)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps with $f\\simeq g$. 1. If $f',g':C_\\bullet\\to D_\\bullet$ are chain maps with $f'\\simeq g'$, then $f+f'\\simeq g+g'$. 2. If $v:B_\\bullet\\…\"\n\n  lem-composition-of-homotopy-classes-is-well-defined  [L3] -> prop-null-homotopic-maps-form-a-two-sided-additive-ideal (searched: Statement)\n    quote: \"In $\\operatorname{Ch}(\\mathcal A)$, the null-homotopic maps form a two-sided additive ideal: the zero map is null-homotopic, sums of null-homotopic maps are null-homotopic, and whi…\"\n\n  thm-the-homotopy-category-is-additive  [L2] -> prop-null-homotopic-maps-form-a-two-sided-additive-ideal (searched: Statement)\n    quote: \"In $\\operatorname{Ch}(\\mathcal A)$, the null-homotopic maps form a two-sided additive ideal: the zero map is null-homotopic, sums of null-homotopic maps are null-homotopic, and whi…\"\n\n  prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes  [L2] -> lem-chain-homotopy-is-compatible-with-addition-and-composition (searched: Statement)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps with $f\\simeq g$. 1. If $f',g':C_\\bullet\\to D_\\bullet$ are chain maps with $f'\\simeq g'$, then $f+f'\\simeq g+g'$. 2. If $v:B_\\bullet\\…\"\n\n  fs-chain-homotopic-maps-are-equal-as-chain-maps  [L1] -> def-chain-homotopy (searched: Definition)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps. A chain homotopy $s:f\\simeq g$ is a graded morphism of degree $1$, $$s_n:C_n\\to D_{n+1},$$ such that for every $n\\in\\mathbb Z$, $$f_…\"\n\n  fs-every-acyclic-complex-is-contractible  [L2] -> prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category (searched: Statement)\n    quote: \"For a chain complex $C_\\bullet$, the identity class $$[1_C]\\in\\operatorname{Hom}_{K(\\mathcal A)}(C,C)$$ is zero if and only if $C_\\bullet$ is contractible. Consequently, vanishing …\"\n\n  fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence  [L3] -> prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category (searched: Statement)\n    quote: \"For a chain complex $C_\\bullet$, the identity class $$[1_C]\\in\\operatorname{Hom}_{K(\\mathcal A)}(C,C)$$ is zero if and only if $C_\\bullet$ is contractible. Consequently, vanishing …\"\n\n  ex-a-contracting-homotopy-for-the-two-term-identity-complex  [L1] -> def-chain-homotopy (searched: Definition)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps. A chain homotopy $s:f\\simeq g$ is a graded morphism of degree $1$, $$s_n:C_n\\to D_{n+1},$$ such that for every $n\\in\\mathbb Z$, $$f_…\"\n\n  ex-two-homotopic-maps-with-different-components  [L2] -> def-chain-homotopy (searched: Definition)\n    quote: \"Let $f,g:C_\\bullet\\to D_\\bullet$ be chain maps. A chain homotopy $s:f\\simeq g$ is a graded morphism of degree $1$, $$s_n:C_n\\to D_{n+1},$$ such that for every $n\\in\\mathbb Z$, $$f_…\"\n\n  cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension  [L2] -> prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category (searched: Statement)\n    quote: \"For a chain complex $C_\\bullet$, the identity class $$[1_C]\\in\\operatorname{Hom}_{K(\\mathcal A)}(C,C)$$ is zero if and only if $C_\\bullet$ is contractible. Consequently, vanishing …\"\n\n  lem-dpdas-have-unique-computations  [L1] -> def-deterministic-pda (searched: Definition)\n    quote: \"A deterministic pushdown automaton (DPDA) is a PDA $$ M=(Q,\\Sigma\\cup\\{\\dashv\\},\\Gamma,\\delta,q_0,Z_0,F) $$ with a distinguished endmarker $\\dashv\\notin\\Sigma$ such that: - for eac…\"\n\n  prop-deterministic-cfls-are-unambiguous  [L1] -> def-deterministic-pda (searched: Definition)\n    quote: \"A deterministic pushdown automaton (DPDA) is a PDA $$ M=(Q,\\Sigma\\cup\\{\\dashv\\},\\Gamma,\\delta,q_0,Z_0,F) $$ with a distinguished endmarker $\\dashv\\notin\\Sigma$ such that: - for eac…\"\n\n  prop-deterministic-cfls-are-closed-under-complement  [L1] -> def-deterministic-pda (searched: Definition)\n    quote: \"A deterministic pushdown automaton (DPDA) is a PDA $$ M=(Q,\\Sigma\\cup\\{\\dashv\\},\\Gamma,\\delta,q_0,Z_0,F) $$ with a distinguished endmarker $\\dashv\\notin\\Sigma$ such that: - for eac…\"\n\n  fs-swapping-dpda-accept-states-complements-the-language  [L1] -> def-deterministic-pda (searched: Definition)\n    quote: \"A deterministic pushdown automaton (DPDA) is a PDA $$ M=(Q,\\Sigma\\cup\\{\\dashv\\},\\Gamma,\\delta,q_0,Z_0,F) $$ with a distinguished endmarker $\\dashv\\notin\\Sigma$ such that: - for eac…\"\n\n  ex-a-n-b-n-is-deterministic-context-free-and-unambiguous  [L1] -> def-deterministic-pda (searched: Definition)\n    quote: \"A deterministic pushdown automaton (DPDA) is a PDA $$ M=(Q,\\Sigma\\cup\\{\\dashv\\},\\Gamma,\\delta,q_0,Z_0,F) $$ with a distinguished endmarker $\\dashv\\notin\\Sigma$ such that: - for eac…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "defect-ledger",
      "stage": "8-preflight",
      "why": "ERROR frontier-25-S8-d-009 is open in the ledger but prop-deterministic-cfls-are-unambiguous is not open in the closure receipt — one of them is stale",
      "output": "defect-ledger: 232 defect row(s) checked for frontier-25, 1 error(s)\nERROR frontier-25-S8-d-009 is open in the ledger but prop-deterministic-cfls-are-unambiguous is not open in the closure receipt — one of them is stale\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-every-valuation-ring-arises-from-its-value-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-rank-two-valuation-ring-not-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-nondiscrete-ordered-subgroup-valuation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-grand-equivalence-for-simply-connected-plane-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-punctured-plane-separates-c-complement-from-spherical-complement",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-monoidal-functors-compose-and-laxness-is-preserved",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-lax-monoidal-functor-that-is-not-strong",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-chain-homotopy-is-an-equivalence-relation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-chain-homotopy-is-compatible-with-addition-and-composition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-null-homotopic-maps-form-a-two-sided-additive-ideal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-chain-homotopic-maps-induce-the-same-map-on-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-composition-of-homotopy-classes-is-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-homotopy-category-is-additive",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-chain-homotopic-maps-are-equal-as-chain-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-acyclic-complex-is-contractible",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-contracting-homotopy-for-the-two-term-identity-complex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-two-homotopic-maps-with-different-components",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-rooted-stable-tooth-comb-with-two-teeth",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-epsilon-closure-is-a-closure-operator",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-subset-construction-state-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-epsilon-elimination-for-nfas",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-pda-to-cfg-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-dpdas-have-unique-computations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-deterministic-cfls-are-unambiguous",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-deterministic-cfls-are-closed-under-complement",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-swapping-dpda-accept-states-complements-the-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-n-b-n-is-deterministic-context-free-and-unambiguous",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-acceptance-is-configuration-reachability",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-valuation-ring-is-local",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-valuation-ring-characterisations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-valuation-ring-is-integrally-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dvr-element-normal-form",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-ideals-in-a-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-prime-ideals-and-dimension-of-a-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-equivalent-characterisations-of-a-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-noetherian-valuation-ring-characterisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dvr-ideal-and-module-length",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-height-one-localisation-of-normal-noetherian-domain-is-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-dvr-is-a-pid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-p-adic-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-localisation-of-a-pid-at-a-prime",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-plane-curve-local-ring-not-dvr",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dvr-length-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-uniformisers-and-dvr-ideal-arithmetic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-valuation-ring-ideals-linearly-ordered",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-moore-penrose-pseudoinverse-exists-and-is-unique",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-moore-penrose-image-and-kernel-identities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-full-column-rank-pseudoinverse-formula",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-full-row-rank-pseudoinverse-formula",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-reduced-qr-formulas-for-full-rank-pseudoinverses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tikhonov-regularised-least-squares-has-a-unique-minimiser",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tikhonov-regularisation-has-singular-filter-factors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-underdetermined-system-and-its-minimum-norm-exact-solution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-full-column-rank-pseudoinverse-from-reduced-qr",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ridge-regularisation-filters-a-diagonal-inverse-problem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-truncated-svd-denoising-on-a-diagonal-problem",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-reverse-order-pseudoinversion-holds-without-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-eigenpair-residual-realises-the-minimum-norm-backward-error",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-shifted-qr-preserves-upper-hessenberg-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-equal-dominant-moduli-can-make-power-iteration-cycle",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-finite-complex-measures-admit-integrable-radon-nikodym-densities",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-integration-against-a-radon-nikodym-derivative",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-additivity-of-radon-nikodym-derivatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-chain-rule-for-radon-nikodym-derivatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-reciprocal-rule-for-equivalent-sigma-finite-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-polar-decomposition-for-signed-and-complex-measures",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-piecewise-quadratic-distribution-function-recovers-its-density",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-homotopy-invariance-of-holomorphic-line-integrals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-cauchy-theorem-for-null-homotopic-loops",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-winding-number-equals-circle-degree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-trivial-fundamental-group-implies-null-homology-for-plane-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-connected-spherical-complement-implies-null-homology",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-null-homology-implies-connected-spherical-complement",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-null-homology-is-equivalent-to-global-harmonic-conjugates",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-null-homology-gives-the-plane-or-disc-alternative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-plane-or-disc-alternative-gives-contractibility",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-contractibility-implies-trivial-fundamental-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-spherical-complement-characterization-of-plane-simple-connectivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-winding-number-classifies-loops-in-the-punctured-plane",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-unit-disc-satisfies-all-grand-equivalence-clauses",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-plane-satisfies-all-grand-equivalence-clauses",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-every-convex-plane-domain-is-simply-connected",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-every-star-shaped-plane-domain-is-simply-connected",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-round-annulus-is-connected-but-not-simply-connected",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-punctured-disc-is-connected-but-not-simply-connected",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-connected-complement-in-c-implies-simple-connectivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-simply-connected-plane-domains-are-convex",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-simply-connected-plane-domains-are-star-shaped",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dirichlet-convolution-commutative-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dirichlet-convolution-invertibility-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-dirichlet-convolution-preserves-multiplicativity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-multiplicative-functions-determined-by-prime-powers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-divisor-functions-under-dirichlet-convolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-von-mangoldt-divisor-sum-identity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-von-mangoldt-mobius-inversion-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-number-of-monic-irreducible-polynomials-over-a-finite-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-liouville-convolution-square-indicator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dirichlet-convolution-table-through-twelve",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-dirichlet-inverse-recursion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-divisor-counting-and-sum-prime-power-formulas",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-euler-totient-as-a-mobius-convolution",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-von-mangoldt-divisor-sum",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-liouville-square-indicator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-multiplicative-does-not-mean-completely-multiplicative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-mertens-conjecture-is-false",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-pentagon-and-the-triangle-are-independent",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-category-with-finite-products-is-monoidal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-set-cat-and-every-complete-category-are-cartesian-monoidal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-a-module-over-a-monoid-object",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-monoid-objects-in-abelian-groups-are-rings",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-modules-over-a-commutative-ring-form-a-monoidal-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-poset-with-finite-meets-is-a-strict-monoidal-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-left-unitor-of-a-tensor-product-is-determined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-right-unitor-of-a-tensor-product-is-determined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-two-unitors-agree-on-the-unit-object",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-monoidal-category-is-strict",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-unit-constraints-must-be-imposed-as-axioms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-pentagon-follows-from-the-triangle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-cartesian-monoidal-structure-on-sets-computed",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-pentagon-checked-for-cartesian-products",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-monoid-as-a-one-object-monoidal-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-five-bracketings-of-a-four-fold-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-free-monoid-monad-as-a-monoid-object",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-skeleton-of-set-cannot-be-made-strict-by-identification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-endofunctor-composition-as-a-strict-tensor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-the-hom-complex-differential-squares-to-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-zero-cocycles-in-the-hom-complex-are-chain-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-null-homotopic-maps-induce-zero-on-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-a-contractible-complex-is-acyclic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-homology-factors-uniquely-through-the-homotopy-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-the-shifted-differential-squares-to-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-homology-of-a-shift-is-shifted-homology",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-hom-complex-of-two-two-term-complexes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-split-exact-complex-and-its-contraction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-quasi-isomorphism-with-no-homotopy-inverse",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-shifting-a-three-term-complex-with-all-signs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-homotopy-classes-as-h-zero-of-a-hom-complex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-five-cycle-has-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-comb-can-have-an-edge-between-two-blocks",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-comb-has-pairwise-anticomplete-blocks",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-the-immersion-and-submersion-loci-are-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-smooth-inverse-function-theorem-on-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-constant-rank-theorem-for-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-local-normal-form-for-immersions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-local-normal-form-for-submersions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-immersion-is-locally-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-every-submersion-is-an-open-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-slice-chart-restrictions-form-a-smooth-atlas",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-smooth-structure-of-an-embedded-submanifold-is-unique",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smoothness-into-an-embedded-submanifold-is-an-initial-property",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-embedded-submanifolds-admit-local-defining-submersions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-regular-level-set-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tangent-space-of-a-regular-level-set-is-the-kernel",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-preimage-theorem-for-submanifolds-under-submersions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-diagonal-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-injective-immersion-is-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-image-of-every-immersion-is-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-regular-value-must-belong-to-the-image",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-constant-rank-at-one-point-implies-constant-rank-nearby",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-coordinate-inclusions-and-projections-as-immersion-and-submersion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-special-linear-group-as-a-regular-level-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-cylinder-as-the-preimage-of-a-circle-under-projection",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-graph-of-the-sine-function-as-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-regular-value-with-empty-fibre",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-rank-drop-at-a-point-need-not-persist-locally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-every-dfa-is-an-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-subset-construction-preserves-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-dfas-and-nfas-recognize-the-same-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nfa-constructions-for-union-concatenation-and-star",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-subset-construction-can-require-exponentially-many-states",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-nfa-accepts-only-if-every-branch-accepts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-epsilon-is-an-input-symbol",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-every-dfa-is-an-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-subset-construction-can-require-exponentially-many-states",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-nfa-accepts-only-if-every-branch-accepts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-final-state-and-empty-stack-acceptance-are-equivalent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cfg-to-pda-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-pda-fragment-variables-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-pdas-recognize-exactly-the-cfls",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-pda-to-cfg-construction-preserves-unambiguity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-final-state-and-empty-stack-acceptance-are-literally-identical",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cfg-to-pda-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-swapping-dpda-accept-states-complements-the-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-deterministic-nonhalting-configurations-have-unique-successors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-valid-computation-histories-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-rejection-is-divergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-nondeterministic-acceptance-requires-every-branch-to-halt",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-valid-computation-histories-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-acceptance-is-configuration-reachability",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-rejection-is-divergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-valuation-on-a-field",
      "scope": "run",
      "owner": "a"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-epsilon-closure-is-a-closure-operator",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-subset-construction-state-invariant",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-epsilon-elimination-for-nfas",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-pda-to-cfg-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-dpdas-have-unique-computations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-deterministic-cfls-are-unambiguous",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-deterministic-cfls-are-closed-under-complement",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-swapping-dpda-accept-states-complements-the-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-n-b-n-is-deterministic-context-free-and-unambiguous",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-acceptance-is-configuration-reachability",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-every-dfa-is-an-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-subset-construction-preserves-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-dfas-and-nfas-recognize-the-same-languages",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-nfa-constructions-for-union-concatenation-and-star",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-subset-construction-can-require-exponentially-many-states",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-nfa-accepts-only-if-every-branch-accepts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-epsilon-is-an-input-symbol",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-every-dfa-is-an-nfa",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-subset-construction-can-require-exponentially-many-states",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-nfa-accepts-only-if-every-branch-accepts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-final-state-and-empty-stack-acceptance-are-equivalent",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cfg-to-pda-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-pda-fragment-variables-compose",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-pdas-recognize-exactly-the-cfls",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-pda-to-cfg-construction-preserves-unambiguity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-final-state-and-empty-stack-acceptance-are-literally-identical",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-cfg-to-pda-construction",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-swapping-dpda-accept-states-complements-the-language",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-deterministic-nonhalting-configurations-have-unique-successors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-valid-computation-histories-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-rejection-is-divergence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-nondeterministic-acceptance-requires-every-branch-to-halt",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-valid-computation-histories-are-decidable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-acceptance-is-configuration-reachability",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-rejection-is-divergence",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **d**, run `frontier-25`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-25-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `nondeterministic-finite-automata-and-subset-construction` | A | computability-theory | 585 | `deterministic-finite-automata-and-regular-languages`, `the-zfc-axioms-and-basic-set-constructions` |
| 10 | `nondeterministic-finite-automata-and-subset-construction-examples` | B | computability-theory | 586 | `nondeterministic-finite-automata-and-subset-construction` |
| 10 | `pushdown-automata-and-context-free-languages` | A | computability-theory | 593 | `context-free-grammars-and-normal-forms`, `deterministic-finite-automata-and-regular-languages` |
| 10 | `pushdown-automata-and-context-free-languages-examples` | B | computability-theory | 594 | `pushdown-automata-and-context-free-languages` |
| 11 | `turing-machines-configurations-and-computation` | A | computability-theory | 597 | `formal-languages-encodings-and-decision-problems`, `graphs-walks-and-connectivity`, `eulerian-and-hamiltonian-graphs` |
| 11 | `turing-machines-configurations-and-computation-examples` | B | computability-theory | 598 | `turing-machines-configurations-and-computation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nondeterministic-finite-automata-and-subset-construction` — Nondeterministic Finite Automata and Subset Construction (15 item(s))

- `def-nfa-with-epsilon-moves` · definition — Nondeterministic finite automata with epsilon-moves
- `def-epsilon-closure-of-a-state-set` · definition — The epsilon-closure of a set of NFA states
- `lem-epsilon-closure-is-a-closure-operator` · lemma — Epsilon-closure is a closure operator
- `def-extended-nfa-transition` · definition — The extended transition function of an NFA
- `def-nfa-acceptance-and-recognized-language` · definition — Acceptance of a word by an NFA and the recognized language
- `prop-every-dfa-is-an-nfa` · proposition — Every DFA is an NFA
- `def-subset-construction-dfa` · definition — The subset-construction DFA
- `lem-subset-construction-state-invariant` · lemma — Subset construction tracks exactly the reachable NFA state set
- `thm-subset-construction-preserves-language` · theorem — The subset construction preserves the recognized language
- `cor-dfas-and-nfas-recognize-the-same-languages` · corollary — DFAs and NFAs recognize the same languages
- `thm-epsilon-elimination-for-nfas` · theorem — Epsilon-moves can be eliminated from NFAs
- `thm-nfa-constructions-for-union-concatenation-and-star` · theorem — NFAs can be constructed for union, concatenation, and Kleene star
- `prop-subset-construction-can-require-exponentially-many-states` · proposition — The subset construction can require exponentially many states
- `fs-an-nfa-accepts-only-if-every-branch-accepts` · false-statement — FALSE: an NFA accepts only if every branch accepts
- `fs-epsilon-is-an-input-symbol` · false-statement — FALSE: epsilon is an input symbol

### `nondeterministic-finite-automata-and-subset-construction-examples` — Nondeterministic Finite Automata and Subset Construction: Examples and Counterexamples (3 item(s))

- `ex-every-dfa-is-an-nfa` · example — Viewing a small DFA as an NFA with singleton transitions
- `ex-subset-construction-can-require-exponentially-many-states` · example — A three-state NFA whose equivalent DFA needs four states
- `cex-an-nfa-accepts-only-if-every-branch-accepts` · counterexample — One accepting branch is enough for an NFA to accept

### `pushdown-automata-and-context-free-languages` — Pushdown Automata and Context-Free Languages (17 item(s))

- `def-nondeterministic-pushdown-automaton` · definition — Nondeterministic pushdown automata
- `def-pda-configuration-and-step` · definition — PDA configurations and one-step moves
- `def-pda-acceptance-by-final-state` · definition — Acceptance by final state for a PDA
- `def-pda-acceptance-by-empty-stack` · definition — Acceptance by empty stack for a PDA
- `thm-final-state-and-empty-stack-acceptance-are-equivalent` · theorem — Acceptance by final state and by empty stack are equivalent for PDAs
- `thm-cfg-to-pda-construction` · theorem — Every context-free grammar has an equivalent PDA
- `def-pda-computation-fragment-variable` · definition — The PDA fragment variable $[p,Z,q]$
- `lem-pda-fragment-variables-compose` · lemma — PDA fragment variables compose
- `thm-pda-to-cfg-construction` · theorem — Every PDA has an equivalent context-free grammar
- `thm-pdas-recognize-exactly-the-cfls` · theorem — PDAs recognize exactly the context-free languages
- `def-deterministic-pda` · definition — Deterministic pushdown automata and deterministic context-free languages
- `lem-dpdas-have-unique-computations` · lemma — A DPDA has at most one computation on each input
- `prop-pda-to-cfg-construction-preserves-unambiguity` · proposition — If a PDA has at most one accepting computation on each word, the standard PDA-to-CFG construction is unambiguous
- `prop-deterministic-cfls-are-unambiguous` · proposition — Deterministic context-free languages are unambiguous
- `prop-deterministic-cfls-are-closed-under-complement` · proposition — Deterministic context-free languages are closed under complement
- `fs-swapping-dpda-accept-states-complements-the-language` · false-statement — FALSE: swapping the accepting states of a DPDA automatically complements its language
- `fs-final-state-and-empty-stack-acceptance-are-literally-identical` · false-statement — FALSE: acceptance by final state and by empty stack are literally identical

### `pushdown-automata-and-context-free-languages-examples` — Pushdown Automata and Context-Free Languages: Examples and Counterexamples (3 item(s))

- `ex-cfg-to-pda-construction` · example — Building a PDA for $\{a^n b^n : n \ge 0\}$ from the standard grammar
- `ex-a-n-b-n-is-deterministic-context-free-and-unambiguous` · example — The language $\{a^n b^n : n \ge 0\}$ is deterministic context-free and unambiguous
- `cex-swapping-dpda-accept-states-complements-the-language` · counterexample — A looping DPDA shows naive final-state complementation can fail

### `turing-machines-configurations-and-computation` — Turing Machines, Configurations, and Computation (16 item(s))

- `def-deterministic-one-tape-turing-machine` · definition — Deterministic one-tape Turing machines with designated accept and reject states
- `def-tape-finite-support-convention` · definition — Right-infinite tapes as finite-support functions
- `def-turing-machine-configuration` · definition — Configurations of a deterministic one-tape Turing machine
- `def-one-step-configuration-relation` · definition — The one-step configuration relation
- `lem-deterministic-nonhalting-configurations-have-unique-successors` · lemma — Every nonhalting deterministic configuration has a unique successor
- `def-initial-accepting-and-rejecting-configurations` · definition — Initial, accepting, and rejecting configurations
- `def-halting-computation-and-divergence` · definition — Finite computation histories, halting computations, and divergence
- `def-language-recognized-and-decided` · definition — Languages recognized and decided by a Turing machine
- `def-partial-function-computed-by-a-machine` · definition — Partial functions computed by a machine under fixed encodings
- `def-multitape-and-nondeterministic-machines` · definition — Multitape and nondeterministic Turing machine variants
- `def-nondeterministic-accepting-computation` · definition — Accepting computations of a nondeterministic machine
- `prop-valid-computation-histories-are-decidable` · proposition — For a fixed machine and input, valid accepting computation histories form a decidable language
- `def-configuration-graph` · definition — The configuration graph of a machine on an input
- `lem-acceptance-is-configuration-reachability` · lemma — Acceptance is reachability of an accepting configuration
- `fs-rejection-is-divergence` · false-statement — FALSE: rejection is divergence
- `fs-nondeterministic-acceptance-requires-every-branch-to-halt` · false-statement — FALSE: nondeterministic acceptance requires every branch to halt

### `turing-machines-configurations-and-computation-examples` — Turing Machines, Configurations, and Computation: Examples and Counterexamples (3 item(s))

- `ex-valid-computation-histories-are-decidable` · example — Checking a short accepting history for a unary increment machine
- `ex-acceptance-is-configuration-reachability` · example — A branching configuration graph with one accepting path and one looping path
- `cex-rejection-is-divergence` · counterexample — Immediate rejection is a halting computation, not a divergence

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
`research/frontier-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-25`

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
