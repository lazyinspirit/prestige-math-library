---
id: thm-hp-simplex-p-dependent-face-trace-inverse
kind: theorem
title: Degree-explicit polynomial trace inverse inequality on simplices
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-reference-jacobi-weighted-endpoint-kernel
  - lem-shape-regular-affine-simplex-scaling
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is required only by the shape-regular affine-simplex scaling supplier."
verification:
  precheck: pass
sources:
  references:
    - title: Tim Warburton and Jan S. Hesthaven, On the Constants in hp-Finite Element Trace Inverse Inequalities
      url: https://infoscience.epfl.ch/server/api/core/bitstreams/a541b153-f562-48eb-baa1-b42f9335269d/content
      locator: "§§3–4, pp. 4–14: exact Jacobi endpoint-kernel trace bounds on intervals, triangles, and simplices."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11, Local interpolation on affine meshes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.1, printed pp. 117–119: affine simplex scaling and shape-regular face/volume factors."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]), as required by the affine-scaling supplier used below.

Let $K$ be a nondegenerate $d$-simplex, $d\ge2$, let $F$ be one of its facets, and let $p\ge0$. For every $v\in\mathbb P_p(K)$,
$$
\|v\|_{L^2(F)}^2\le\frac{(p+1)(p+d)|F|}{d|K|}\|v\|_{L^2(K)}^2.
$$
If $K$ belongs to a shape-regular affine simplex family with $h_K=\operatorname{diam}(K)$ and shape bound $\sigma$, then
$$
\|v\|_{L^2(F)}^2\le C_{d,\sigma}\frac{(p+1)(p+d)}{h_K}\|v\|_{L^2(K)}^2.
$$
For $p\ge1$, the normal derivative of $v$ has degree at most $p-1$ on $K$ and satisfies the same inequalities with $(p+1)(p+d)$ replaced by $p(p+d-1)$. In particular, polynomial normal-flux trace penalties have the explicit scale $p(p+d-1)/h_K$; this is an inverse trace bound, not a p-approximation or a DG coercivity theorem.

## Facts & Assumptions

**Given:** Countable Choice, a nondegenerate simplex $K$, a face $F$, an integer $p\ge0$, and, for the scaled inequality, a shape-regular family.

[F1] [[lem-reference-jacobi-weighted-endpoint-kernel]]: every degree-$m$ polynomial $q$ on $[0,1]$ satisfies $|q(0)|^2\le(m+1)(m+d)\int_0^1(1-t)^{d-1}|q(t)|^2\,dt$.

[F2] The altitude from the opposite vertex $a$ to $F$ is $H_F=d|K|/|F|$, and the map $x=(1-t)y+ta$ has volume Jacobian $H_F(1-t)^{d-1}$ for $y\in F$, $0<t<1$.

[F3] [[lem-shape-regular-affine-simplex-scaling]]: under shape bound $\sigma$, $|F|/|K|\le C_{d,\sigma}/h_K$. The supplier assumes Countable Choice.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the simplex-pyramid parameterization in [F2] permits integrating the bounded polynomial integrand first along $t$ and then over $F$.

[A1] The mesh and polynomial-degree conventions for affine simplices are those of [[def-hp-variable-degree-spaces-on-matching-meshes]]; in particular the unit normal to a flat face is constant.

## Proof

1.1 Fix $y\in F$ and let $q_y(t)=v((1-t)y+ta)$. This is a polynomial of degree at most $p$ in $t$, and $q_y(0)=v(y)$. Apply [F1] with $m=p$, then integrate the resulting inequality over $F$. In the map $(y,t)\mapsto(1-t)y+ta$, each tangent direction in $F$ is scaled by $1-t$, while the remaining component is the altitude $H_F$; hence the absolute volume Jacobian is $H_F(1-t)^{d-1}$, as stated in [F2]. By Fubini [F4], $\|v\|_{L^2(F)}^2\le(p+1)(p+d)\int_F\int_0^1(1-t)^{d-1}|v((1-t)y+ta)|^2\,dt\,dS_y=\frac{(p+1)(p+d)|F|}{d|K|}\|v\|_{L^2(K)}^2$. This proves the exact reference-geometric inequality. [F1, F2, F4, given, algebra]

2.1 The cellwise normal derivative $\partial_n v=n_F\cdot\nabla v$ is a polynomial of degree at most $p-1$. If $p=0$ it is zero. If $p\ge1$, repeat step 1.1 with degree $m=p-1$; the endpoint factor becomes $p(p+d-1)$. [A1, F1, F2, step 1.1]

3.1 In a shape-regular family, apply [F3] to the factor $|F|/|K|$ in step 1.1 and in the same argument for $\partial_n v$. This gives both $h_K^{-1}$ estimates. The only declared choice assumption is the Countable Choice required by [F3]; [F4] adds no choice hypothesis, and the linewise kernel uses finite-dimensional algebra. [F3, step 1.1, step 2.1, algebra] ∎
