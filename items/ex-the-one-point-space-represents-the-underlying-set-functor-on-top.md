---
id: ex-the-one-point-space-represents-the-underlying-set-functor-on-top
kind: example
title: 'The one-point space represents the underlying-set functor on $\mathbf{Top}$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-presheaf-representable-functor-and-representation,
       prop-topological-spaces-and-continuous-maps-form-category-top,
       def-topological-space, def-continuous-map-top, def-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 2.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $1=\{*\}$ carry its unique topology $\{\varnothing,1\}$. The one-point
space represents the underlying-set functor
$U:\mathbf{Top}\to\mathbf{Set}$ through the natural bijection

$$\mathbf{Top}(1,X)\xrightarrow{\cong}U(X),\qquad f\longmapsto f(*).$$

## Facts & Assumptions

**Given:** The singleton space $1=\{*\}$ and an arbitrary topological space $X$.

[F1] A topology contains the empty set and the whole underlying set ([[def-topological-space]]).

[F2] A function is continuous when inverse images of open sets are open, equivalently when it is continuous at every point ([[def-continuous-map-top]]).

[F3] Topological spaces and continuous maps form the large locally small category $\mathbf{Top}$ ([[prop-topological-spaces-and-continuous-maps-form-category-top]]).

[F4] A covariant set-valued functor is represented by $R$ when it is naturally isomorphic to the hom-functor $\mathbf{Top}(R,-)$ ([[def-presheaf-representable-functor-and-representation]]).

[F5] A function assigns exactly one value to each domain element, and two functions agree when all their values agree ([[def-function]]).

## Verification

**Proof technique:** constructive.

1.1 For every point $x\in X$, define $f_x:1\to X$ by $f_x(*)=x$. For every open $V\subseteq X$, the inverse image $f_x^{-1}[V]$ is $1$ if $x\in V$ and $\varnothing$ otherwise; [F1] and [F2] make $f_x$ continuous. [F1, F2, construct]

2.1 Every function $f:1\to X$ equals $f_{f(*)}$ by [F5], and $f_x(*)=x$. Thus $f\mapsto f(*)$ and $x\mapsto f_x$ are inverse bijections. [step 1.1, F5]

3.1 If $g:X\to Y$ is continuous, then $(g\circ f)(*)=g(f(*))$, so the bijections in step 2.1 commute with the hom-functor action and the underlying function $U(g)$. They are natural in $X$, and $U$ is a functor because [F3] uses ordinary function composition. [step 2.1, F3]

4.1 By [F4], the singleton space represents $U$. When $X=\varnothing$, both $\mathbf{Top}(1,X)$ and $U(X)$ are empty, so the same bijection includes that boundary case. [step 3.1, F4, discharge-construct] ∎
