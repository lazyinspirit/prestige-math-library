---
id: prop-a-vector-field-acts-as-a-derivation-of-smooth-functions
kind: proposition
title: "A vector field acts as a derivation of smooth functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-action-of-a-vector-field-on-smooth-functions, def-derivation-at-a-point-and-tangent-space, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $X$ be a smooth vector field on $M$. Then $f\mapsto Xf$ is an
$\mathbb R$-linear derivation of $C^\infty(M)$:

$$ X(fg)=f\,Xg+g\,Xf $$

for all $f,g\in C^\infty(M)$.

## Facts & Assumptions

**Given:** A smooth vector field $X$ on $M$ and smooth functions $f,g$ on $M$.

[L1] Each tangent vector $X_p\in T_pM$ is a derivation at the point $p$ ([[def-derivation-at-a-point-and-tangent-space]]).

[L2] A smooth vector field has smooth coordinate coefficient functions in every chart ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

## Proof

**Proof technique:** direct.

1.1 For each point $p\in M$, [L1] gives $X_p(fg)=f(p)X_p(g)+g(p)X_p(f)$. By the definition of the action on functions, this is exactly $(X(fg))(p)=f(p)(Xg)(p)+g(p)(Xf)(p)$. [L1, given]

1.2 To see that $Xf$ is smooth, write locally $X=\sum_i X^i\partial/\partial x^i$ using [L2]. Then $Xf=\sum_i X^i\,\partial_i(f\circ x^{-1})\circ x$, a sum of products of smooth functions. [L2]

2.1 Since the equality in step 1.1 holds for every $p$, one has $X(fg)=f\,Xg+g\,Xf$ as functions on $M$. The map $f\mapsto Xf$ is $\mathbb R$-linear for the same pointwise reason. [step 1.1]

3.1 Therefore $X$ acts on $C^\infty(M)$ as an $\mathbb R$-linear derivation. [step 2.1, step 1.2] ∎
