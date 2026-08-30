---
id: ex-endofunctor-composition-as-a-strict-tensor
kind: example
title: "Endofunctor composition as a strict tensor product"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal C$ be the discrete category on the two objects $0$ and $1$. Define endofunctors $S,T:\mathcal C\to\mathcal C$ by $S(0)=1$, $S(1)=0$, $T(0)=0$, and $T(1)=0$. Since $\mathcal C$ is discrete, these object assignments determine the whole functors.

## Facts & Assumptions

**Given:** The endofunctor category of a small category under composition.

[L1] For a small category, endofunctor composition makes the endofunctor category strict monoidal ([[thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition]]).

## Verification

**Proof technique:** direct.

1.1 The category $\mathcal C$ is small, so [L1] applies. Its endofunctors are determined by their action on the two objects because every morphism is an identity. [L1]

2.1 The composites are easy to compute: $S\circ S=1_{\mathcal C}$, $T\circ S=T$, and $S\circ T$ is the constant functor at $1$. Hence $((S\circ T)\circ S)=S\circ(T\circ S)$ as literal equalities of functors, and $1_{\mathcal C}\circ S=S=S\circ1_{\mathcal C}$. [step 1.1]

3.1 This concrete pair therefore realizes composition as a strict tensor product. [step 2.1, L1] ∎
