---
id: thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor
kind: theorem
title: "A dual object in the endofunctor category is an adjoint functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-zig-zag-identities, def-adjunction-by-unit-counit-and-triangle-identities]
landmark: true
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
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 2.10.4"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Emily Riehl, Category Theory in Context, Definition 4.1.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Let $\mathcal C$ be a category and write tensor product in its endofunctor
category as composition. Then a left dual of an endofunctor $F:\mathcal C\to
\mathcal C$ is exactly a left adjoint of $F$, and a right dual of $F$ is
exactly a right adjoint of $F$.

## Facts & Assumptions

**Given:** Endofunctors $L,F,R:\mathcal C\to\mathcal C$.

[L1] A left dual of $F$ consists of natural transformations $\operatorname{ev}:L\circ F\Rightarrow1_{\mathcal C}$ and $\operatorname{coev}:1_{\mathcal C}\Rightarrow F\circ L$ satisfying the two zig-zag identities ([[def-the-zig-zag-identities]]).

[L2] An adjunction $L\dashv F$ is a unit $1_{\mathcal C}\Rightarrow F\circ L$ and counit $L\circ F\Rightarrow1_{\mathcal C}$ satisfying the two triangle identities ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 Under the tensor-by-composition convention, the data named in [L1] and [L2] are literally the same pair of natural transformations with the same sources and targets. [given, L1, L2]

2.1 The two zig-zag identities for a left dual in the composition monoidal structure are exactly the two triangle identities for an adjunction, because both say that the composites $$F\xRightarrow{\operatorname{coev}F}F L F\xRightarrow{F\operatorname{ev}}F\qquad\text{and}\qquad L\xRightarrow{L\operatorname{coev}}L F L\xRightarrow{\operatorname{ev}L}L$$ are identities. [step 1.1, L1, L2]

3.1 Therefore $L$ is a left dual of $F$ exactly when $L\dashv F$. The same comparison with the mirrored data shows that $R$ is a right dual of $F$ exactly when $F\dashv R$. [step 2.1] ∎
