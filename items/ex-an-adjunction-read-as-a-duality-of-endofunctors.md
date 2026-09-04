---
id: ex-an-adjunction-read-as-a-duality-of-endofunctors
kind: example
title: "An adjunction read as a duality of endofunctors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor, thm-currying-is-an-adjunction-in-set]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Section 4.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Example

Fix a set $A$. In the endofunctor category of $\mathbf{Set}$ under composition,
the functor $(-)\times A$ has right dual the exponential functor $(-)^A$.

## Facts & Assumptions

**Given:** A set $A$ and the endofunctors $(-)\times A$ and $(-)^A$ of
$\mathbf{Set}$.

[L1] Currying gives an adjunction $(-)\times A\dashv(-)^A$
([[thm-currying-is-an-adjunction-in-set]]).

[L2] In the composition monoidal category, right adjoints are exactly right
duals ([[thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor]]).

## Verification

**Proof technique:** direct.

1.1 The currying theorem [[thm-currying-is-an-adjunction-in-set]] says exactly that $(-)\times A\dashv(-)^A$. [given, L1]

2.1 By [[thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor]], a right adjoint of an endofunctor is exactly its right dual in the composition monoidal category. Therefore $(-)^A$ is the right dual of $(-)\times A$. [step 1.1, L2]

3.1 So this ordinary adjunction is literally an instance of categorical duality in an endofunctor monoidal category. [step 2.1] ∎
