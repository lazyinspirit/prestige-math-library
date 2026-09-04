---
id: thm-flow-box-theorem
kind: theorem
title: "The flow-box theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-on-flows, prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains, def-embedded-submanifold-and-slice-chart, thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: true
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

Let $X$ be a smooth vector field on $M$, and let $p\in M$ satisfy $X_p\neq 0$.
Then there are local coordinates $(u^1,\dots,u^n)$ near $p$ in which

$$ X=\frac{\partial}{\partial u^1}. $$

## Facts & Assumptions

**Given:** A smooth vector field $X$ and a point $p$ with $X_p\neq 0$.

[L1] The maximal flow of $X$ is smooth on an open domain ([[thm-fundamental-theorem-on-flows]]).

[L2] The manifold inverse function theorem turns a map with invertible differential into a local diffeomorphism ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L3] Time-$t$ flow maps are diffeomorphisms between open domains ([[prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]]).

## Proof

**Proof technique:** direct.

1.1 Choose a chart around $p$ in which the first coordinate component of $X_p$ is nonzero, and let $S$ be the codimension-one slice where that first coordinate is constant. Then $T_pM=\mathbb R X_p\oplus T_pS$. [given]

2.1 Let $\Phi$ be the maximal flow of $X$ and define $F(t,q):=\Phi_t(q)$ for $(t,q)$ near $(0,p)$ with $q\in S$. By [L1], $F$ is smooth. Its differential at $(0,p)$ sends the time direction to $X_p$ and sends $T_pS$ identically into itself, so $dF_{(0,p)}$ is an isomorphism by step 1.1. [L1, step 1.1]

3.1 Applying [L2] to $F$ at $(0,p)$ gives local coordinates $(u^1,\dots,u^n)$ in which $F$ becomes the identity on an open set of $\mathbb R\times\mathbb R^{n-1}$. In those coordinates, the flow translates the first coordinate, and therefore its generating vector field is $\partial/\partial u^1$. [L2, step 2.1]

4.1 Hence every nonvanishing point of a smooth vector field has a neighbourhood in which the field is straightened to a coordinate vector field. [step 3.1, L3] ∎
