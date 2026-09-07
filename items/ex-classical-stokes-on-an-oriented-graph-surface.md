---
id: ex-classical-stokes-on-an-oriented-graph-surface
title: "Surface Stokes on a graph disk"
kind: example
status: published
origin: pipeline
deps: ["cor-classical-three-dimensional-stokes-theorem", "prop-integration-of-top-forms-by-finite-parametrizations"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.34 proof, p.427 (explicit smooth graph specialization)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

Let $S$ be the graph $z=x^2+y^2$ over the closed unit disk, with upward orientation, and let $F=(-y/2,x/2,0)$. Then $\operatorname{curl}F=(0,0,1)$, its upward curl flux over $S$ is $\pi$, and its induced boundary circulation is also $\pi$.

## Facts & Assumptions

[F1] [[cor-classical-three-dimensional-stokes-theorem]]: Let $S\subset\mathbb R^3$ be a compact oriented smooth embedded surface with boundary, and let $F$ be smooth on an open neighborhood of $S$. Set $\alpha=F_xdx+F_ydy+F_zdz$ and $\mu=dx\wedge dy\wedge dz$. Then $$d\alpha=\iota_{\operatorname{curl}F}\mu,\qquad \int_{\partial S}\alpha=\int_S\iota_{\operatorname{curl}F}\mu.$$ On an oriented parametrization $r(u,v)$ the latter integrand is $(\operatorname{curl}F)(r)\cdot(r_u\times r_v)\,du\wedge dv$; on a boundary curve it is $F(r)\cdot r^{\prime}\,dt$. On the common smooth patch scope this is the published classical Stokes theorem, using the standard Euclidean metric identification.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 The graph parametrization is $r(x,y)=(x,y,x^2+y^2)$ with $r_x\times r_y=(-2x,-2y,1)$, whose last component is positive. The curl is $(0,0,1)$, so its scalar product with this cross product is one. The surface is a smooth compact embedded disk and F is smooth on all of Euclidean space. [F1, algebra]

2.1 The flux is the area of the unit parameter disk. Using polar parameters it is $\int_0^{2\pi}\int_0^1r\,dr\,d\theta=\pi$; finite parametrizations allow their boundary degeneracy. [F2, step 1.1]

3.1 The induced boundary is $c(t)=(\cos t,\sin t,1)$ with increasing t. Along it $F(c)\cdot c^{\prime}=1/2$, so circulation is $\int_0^{2\pi}(1/2)dt=\pi$. The graph orientation gives the same increasing-angle boundary orientation as its disk parametrization, so these are the two sides of Stokes with matching signs. [F1, F2, step 1.1, step 2.1] ∎
