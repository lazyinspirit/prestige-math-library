---
id: thm-currying-is-an-adjunction-in-set
kind: theorem
title: 'Currying gives the adjunction $-\times A\dashv(-)^A$ in $\mathbf{Set}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-set-of-functions-from-one-set-to-another, lem-the-set-of-functions-between-two-sets-is-a-set, def-cartesian-product, prop-sets-and-functions-form-category-set, thm-the-adjunction-hom-set-bijection-under-local-smallness]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.4.9'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 2.1.6'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

For every set $A$, the product functor $-\times A:\mathbf{Set}\to\mathbf{Set}$ is left adjoint to the function-set functor $(-)^A$. Naturally in $X$ and $Y$,

$$\mathbf{Set}(X\times A,Y)\cong\mathbf{Set}(X,Y^A).$$

The bijection sends $h$ to $\widehat h(x)(a)=h(x,a)$ and sends $k$ to $\check k(x,a)=k(x)(a)$.

## Facts & Assumptions

**Given:** Sets $A,X,Y$.

[F1] The functions $A\to Y$ form the set $Y^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[F2] The function collection between two sets is a set ([[lem-the-set-of-functions-between-two-sets-is-a-set]]).

[F3] The cartesian product $X\times A$ consists of ordered pairs $(x,a)$ with $x\in X$, $a\in A$ ([[def-cartesian-product]]).

[F4] Sets and functions form the locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[L1] Natural hom-set bijections determine an adjunction ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 For $h:X\times A\to Y$, define $\widehat h:X\to Y^A$ by $\widehat h(x)(a)=h(x,a)$; [F1] and [F3] make this a well-defined function. [F1, F3, construct]

1.2 For $k:X\to Y^A$, define $\check k:X\times A\to Y$ by $\check k(x,a)=k(x)(a)$. [F1, F3, construct]

2.1 For all $(x,a)$, $\check{\widehat h}(x,a)=h(x,a)$, so function extensionality gives $\check{\widehat h}=h$; similarly $\widehat{\check k}(x)(a)=k(x)(a)$ gives $\widehat{\check k}=k$. [step 1.1, step 1.2, F2]

2.2 Precomposition in $X$ and postcomposition in $Y$ commute with evaluation at $(x,a)$, so the bijection is natural in both variables. [step 1.1, step 1.2, algebra]

3.1 Since $\mathbf{Set}$ is locally small by [F4], [L1] applies and gives $-\times A\dashv(-)^A$. The formulas also cover $A=\varnothing$ without exception. [step 2.1, step 2.2, F4, L1] ∎
