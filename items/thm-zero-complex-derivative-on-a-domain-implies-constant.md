---
id: thm-zero-complex-derivative-on-a-domain-implies-constant
kind: theorem
title: "A holomorphic function with zero derivative on a domain is constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-domain,
       thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant,
       def-polygonal-path-and-polygonal-connectedness,
       thm-open-connected-subsets-of-rn-are-polygonally-connected,
       cor-complex-differentiability-implies-continuity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 2.2.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Theorem 3.2.13"
      url: "https://complexanalysis.org/web/sec_cauchy-riemann.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be a domain. If $f:U\to\mathbb C$ is holomorphic and $f'(z)=0$ for every $z\in U$, then $f$ is constant on $U$.

## Facts & Assumptions
**Given:** A complex domain $U$ and a holomorphic function $f:U\to\mathbb C$ with $f'=0$ throughout $U$.

[F1] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

[L1] For an open subset of $\mathbb R^n$, connectedness, path-connectedness, and polygonal connectedness are equivalent ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

[F2] A polygonal path is a finite concatenation of affine line segments with consecutive vertices ([[def-polygonal-path-and-polygonal-connectedness]]).

[L2] If $f$ is complex differentiable at a point, then its real total derivative is multiplication by $f'$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L3] The total derivative of a composite is the composite of the total derivatives ([[thm-chain-rule-for-total-derivatives]]).

[L4] A complex-differentiable function is continuous at the point of differentiability ([[cor-complex-differentiability-implies-continuity]]).

[L5] A real function continuous on an order-convex interval and differentiable at every interior point, with derivative zero there, is constant on that interval ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Let $p,q\in U$. By [F1] and [L1], choose a polygonal path in $U$ from $p$ to $q$, with vertices $v_0=p,v_1,\ldots,v_m=q$ as in [F2]. [given, F1, L1, F2, choose]

2.1 For each segment put $\gamma_j(t)=(1-t)v_{j-1}+tv_j$ for $0\le t\le1$. The composite $f\circ\gamma_j$ is continuous on $[0,1]$ by [L4], including at the endpoints. [step 1.1, L4]

2.2 At every $t\in(0,1)$, [L2] makes $Df(\gamma_j(t))$ multiplication by $0$, and [L3] therefore gives $D(f\circ\gamma_j)(t)=0$. Hence the real and imaginary components of $f\circ\gamma_j$ have derivative zero on $(0,1)$. [step 1.1, given, L2, L3, algebra]

3.1 By [L5], both components are constant on $[0,1]$, so $f(v_{j-1})=f(v_j)$ for each segment, including a zero-length segment if one occurs. [step 2.1, step 2.2, L5]

4.1 Chaining the finitely many equalities from step 3.1 gives $f(p)=f(q)$. Since $p,q$ were arbitrary, $f$ is constant on the nonempty domain $U$. [step 1.1, step 3.1, F1] ∎
