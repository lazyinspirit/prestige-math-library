---
id: thm-monad-morphisms-on-a-fixed-category-form-a-category
kind: theorem
title: "Whenever the endofunctor category exists, monads on a fixed category and their morphisms form a category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-monad-morphism, def-functor-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter VI, Section 1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a category for which the functor category $[\mathcal C,\mathcal C]$ exists. Monads on $\mathcal C$ as objects and monad morphisms as arrows form a category.

## Facts & Assumptions

**Given:** Monads $(T,\eta^T,\mu^T)$, $(S,\eta^S,\mu^S)$, and $(R,\eta^R,\mu^R)$ on $\mathcal C$.

[L1] A monad morphism is a natural transformation preserving the unit and multiplication ([[def-monad-morphism]]).

[L2] When $[\mathcal C,\mathcal C]$ exists, natural transformations between endofunctors are arrows of a category and compose vertically ([[def-functor-category]]).

## Proof

**Proof technique:** direct.

1.1 The identity $1_T:T\Rightarrow T$ satisfies $1_T\eta^T=\eta^T$ and $1_T\mu^T=\mu^T\,T1_T\,(1_T)T$, so it is a monad morphism. [L1]

2.1 If $\alpha:T\Rightarrow S$ and $\beta:S\Rightarrow R$ are monad morphisms, then $(\beta\alpha)\eta^T=\beta\eta^S=\eta^R$, so their vertical composite preserves the unit. [L1, step 1.1]

3.1 Naturality of $\beta$ gives $\beta S\circ S\alpha=R\alpha\circ\beta T$; substituting the multiplication equations for $\alpha$ and $\beta$ yields $(\beta\alpha)\mu^T=\mu^R\,R(\beta\alpha)\,(\beta\alpha)T$, so the composite preserves multiplication. [L1, L2, step 2.1]

4.1 By [L2], vertical composition is associative and the transformations in step 1.1 are identities. Steps 2.1 and 3.1 give closure under composition under the stated endofunctor-category size condition. Hence these objects and arrows form a category. [L2, step 1.1, step 3.1] ∎
