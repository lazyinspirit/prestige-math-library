---
id: cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad
kind: corollary
title: "The Kleisli and Eilenberg–Moore categories of an idempotent monad are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras, thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory, def-full-faithful-and-essentially-surjective-functor, def-equivalence-and-adjoint-equivalence-of-categories, thm-fully-faithful-split-essentially-surjective-characterises-equivalence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.3.i"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For an idempotent monad $T$, the canonical comparison $M:\mathcal C_T\to\mathcal C^T$ is an equivalence of categories.

## Facts & Assumptions

**Given:** The comparison theorem and the characterisation of algebras for an idempotent monad ([[thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras]], [[thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory]]).

[L1] A functor is an equivalence exactly when it is fully faithful and split essentially surjective ([[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 The canonical comparison is fully faithful, and its strict image consists of the free algebras. [given]

1.2 For each algebra $(A,a)$, the idempotent-algebra theorem gives $a=\eta_A^{-1}$. The map $\eta_A:(A,a)\to(TA,\mu_A)$ is therefore a specified algebra isomorphism from $(A,a)$ to the free algebra on $A$, with inverse $a$. [given]

2.1 The specified isomorphisms of step 1.2 make the fully faithful comparison of step 1.1 split essentially surjective; [L1] therefore makes it an equivalence. [step 1.1, step 1.2, L1] ∎
