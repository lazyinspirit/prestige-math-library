---
id: thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras
kind: theorem
title: "Under dependent choice, a finitary monad on a complete cocomplete locally small category has complete and cocomplete algebras"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finitary-functor-and-finitary-monad, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-dependent-choice, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits, lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice, prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers, thm-the-eilenberg-moore-adjunction-induces-the-given-monad]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.6.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume dependent choice. If $T$ is a finitary monad on a complete, cocomplete, locally small category $\mathcal C$, then its Eilenberg–Moore category $\mathcal C^T$ is complete and cocomplete.

The completeness conclusion itself uses no choice; dependent choice enters only in the construction of coequalizers used for cocompleteness.

## Facts & Assumptions

**Given:** Dependent choice and a finitary monad $T$ on a complete cocomplete locally small category $\mathcal C$.

[L1] The Eilenberg–Moore forgetful functor strictly creates every limit that exists in the base ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits]]).

[L2] Under dependent choice, algebras for such a finitary monad have coequalizers ([[lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice]]).

[L3] Over a cocomplete base, a monadic category is cocomplete exactly when it has coequalizers ([[prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers]]).

[L4] The Eilenberg–Moore adjunction induces the given monad on the nose ([[thm-the-eilenberg-moore-adjunction-induces-the-given-monad]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal C$ has every small limit, [L1] creates every such limit in $\mathcal C^T$, including the empty limit. Thus $\mathcal C^T$ is complete without using dependent choice. [L1]

1.2 Under the stated dependent-choice hypothesis, [L2] gives every coequalizer in $\mathcal C^T$, including equal parallel maps and the zero-stage case of its construction. [L2]

2.1 By [L4], the Eilenberg–Moore adjunction induces $T$ on the nose, so its forgetful functor is monadic. Applying [L3] to the cocomplete base and step 1.2 makes $\mathcal C^T$ cocomplete, including the empty colimit. [step 1.2, L3, L4]

3.1 Combining step 1.1 with step 2.1 proves that $\mathcal C^T$ is complete and cocomplete. [step 1.1, step 2.1] ∎
