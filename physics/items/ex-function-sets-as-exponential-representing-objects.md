---
id: ex-function-sets-as-exponential-representing-objects
kind: example
title: 'The function set $B^A$ represents $X\mapsto\mathbf{Set}(X\times A,B)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation,
       prop-sets-and-functions-form-category-set,
       def-the-set-of-functions-from-one-set-to-another,
       def-cartesian-product, def-function,
       lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 2.1.6(iv)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For sets $A$ and $B$, let $B^A$ be the set of functions $A\to B$. The
presheaf

$$H(X)=\mathbf{Set}(X\times A,B)$$

is represented by $B^A$. Its representing natural isomorphism is currying:

$$\mathbf{Set}(X,B^A)\longrightarrow\mathbf{Set}(X\times A,B),\qquad g\longmapsto((x,a)\mapsto g(x)(a)).$$

## Facts & Assumptions

**Given:** Sets $A,B$, the category $\mathbf{Set}$, and an arbitrary set $X$.

[F1] A presheaf is represented by $R$ when it is naturally isomorphic to $\mathbf{Set}(-,R)$ ([[def-presheaf-representable-functor-and-representation]]).

[F2] Sets and functions form a category under ordinary composition ([[prop-sets-and-functions-form-category-set]]).

[F3] The function set $B^A$ consists of all functions from $A$ to $B$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[F4] The product $X\times A$ consists of the pairs $(x,a)$ with $x\in X$ and $a\in A$ ([[def-cartesian-product]]).

[F5] A function assigns exactly one value to each domain element, and two functions with the same domain and codomain are equal exactly when their values agree everywhere ([[def-function]], [[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

## Verification

**Proof technique:** constructive.

1.1 For $g:X\to B^A$, define $\Phi_X(g):X\times A\to B$ by $\Phi_X(g)(x,a)=g(x)(a)$. [F3, F4, construct]

1.2 For $f:X\times A\to B$, define $\Psi_X(f):X\to B^A$ by $\Psi_X(f)(x)(a)=f(x,a)$. [F3, F4, construct]

2.1 For all $(x,a)$, $\Phi_X\Psi_X(f)(x,a)=f(x,a)$, and for all $x,a$, $\Psi_X\Phi_X(g)(x)(a)=g(x)(a)$; [F5] makes $\Phi_X$ and $\Psi_X$ inverse functions. [step 1.1, step 1.2, F3, F4, F5]

2.2 If $k:Y\to X$, then $\Phi_Y(g\circ k)(y,a)=g(k(y))(a)=\Phi_X(g)(k(y),a)$, which is precomposition of $\Phi_X(g)$ by $k\times1_A$. Thus $\Phi$ is natural in $X$. [step 1.1, F2, F4]

3.1 By steps 2.1 and 2.2, $\Phi$ is a natural isomorphism $\mathbf{Set}(-,B^A)\cong H$; [F1] gives the representation, also when $A$, $B$, or $X$ is empty. [step 2.1, step 2.2, F1, discharge-construct] ∎
