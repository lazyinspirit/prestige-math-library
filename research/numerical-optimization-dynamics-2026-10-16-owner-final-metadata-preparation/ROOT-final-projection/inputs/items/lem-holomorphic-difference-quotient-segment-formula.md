---
id: lem-holomorphic-difference-quotient-segment-formula
kind: lemma
title: "On a convex open set the difference quotient is an average of the derivative along the segment"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-fundamental-theorem-for-complex-line-integrals, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-cauchy-integral-formula-higher-derivatives, def-convex-subset-of-euclidean-space, thm-complex-coordinate-isometry-and-topology-transport, def-vector-valued-derivative-and-integral, def-complex-primitive, cor-complex-differentiability-implies-continuity, thm-linearity-of-the-integral, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-analysis-comprehensive-2026-10-16-owner-supplier-lem-holomorphic-difference-quotient-segment-formula-published-repair.json
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $V\subseteq\mathbb C$ be open and convex
([[def-convex-subset-of-euclidean-space]]) and let $f:V\to\mathbb C$ be
holomorphic. Then for all $z,w\in V$

$$f(w)-f(z)=(w-z)\int_0^1 f'\bigl(z+t(w-z)\bigr)\,dt,$$

the integral being the componentwise integral of a continuous
$\mathbb R^2$-valued function of $t$
([[def-vector-valued-derivative-and-integral]]). In particular, for $w\ne z$,

$$\frac{f(w)-f(z)}{w-z}=\int_0^1 f'\bigl(z+t(w-z)\bigr)\,dt,$$

while for $w=z$ the displayed integral equals $f'(z)$ and both sides of the first
identity are $0$.

## Facts & Assumptions

**Given:** An open convex $V\subseteq\mathbb C$, a holomorphic $f:V\to\mathbb C$ and points $z,w\in V$; write $\Phi(a+bi)=(a,b)$, and read convexity as that of $\Phi[V]$ in [[def-convex-subset-of-euclidean-space]]. The bijective isometry $\Phi$ preserves affine segments by [[thm-complex-coordinate-isometry-and-topology-transport]], so $(1-t)z+tw\in V$ for $0\le t\le1$.

[L1] If $F$ is a primitive of a continuous $f$ on an open set containing the trace of a rectifiable contour $\gamma:[a,b]\to\mathbb C$ and $F'=f$ is continuous, then $\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]], [[def-complex-primitive]]).

[L2] For a piecewise-$C^1$ contour $\gamma$ and $f$ continuous on its trace, $\int_\gamma f(z)\,dz=\sum_j\int_{t_j}^{t_{j+1}}f(\gamma(t))\gamma'_j(t)\,dt$ ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L3] A holomorphic $f=u+iv$ on an open subset of $\mathbb C$ has $(u,v)$ of class $C^k$ for every natural $k$, hence smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), and every holomorphic function has complex derivatives of every natural order ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L4] A subset $U\subseteq\mathbb R^m$ is convex when $(1-t)x+ty\in U$ for all $x,y\in U$ and $t\in[0,1]$ ([[def-convex-subset-of-euclidean-space]]).

[L5] Integrals of $\mathbb R^m$-valued functions are taken componentwise and are real-linear ([[def-vector-valued-derivative-and-integral]]); the real integral is linear in the integrand ([[thm-linearity-of-the-integral]]).

[L6] A function complex differentiable at a point is continuous there ([[cor-complex-differentiability-implies-continuity]]).

[L7] A continuous path differentiable with a continuous derivative on each piece of a partition is rectifiable ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] the derivative $f'$ is again holomorphic on $V$, hence continuous there by [L6], so $f$ is a primitive of the continuous $f'$ with continuous $F'$ in the sense of [L1]. [given, L1, L3, L6]

1.2 The map $\ell(t)=z+t(w-z)$ on $[0,1]$ has values in $V$ by [L4], since $V$ is convex, and is differentiable with the constant continuous derivative $w-z$, so it is a piecewise-$C^1$, hence rectifiable, contour with trace in $V$ ([L7]); its endpoints are $\ell(0)=z$ and $\ell(1)=w$. In real coordinates the path is $\Phi(\ell(t))=\Phi(z)+t\Phi(w-z)$, so this real derivative and the complex difference quotient both give the same constant velocity $w-z$. [given, L4, L7]

2.1 By [L1] applied to $\ell$, $\int_\ell f'(\zeta)\,d\zeta=f(\ell(1))-f(\ell(0))=f(w)-f(z)$. [step 1.1, step 1.2, L1]

2.2 By [L2] applied to $\ell$, whose derivative is the constant $w-z$, $\int_\ell f'(\zeta)\,d\zeta=\int_0^1 f'\bigl(z+t(w-z)\bigr)(w-z)\,dt$, and multiplication by $w-z$ is the fixed real-linear coordinate map $(x,y)\mapsto(\operatorname{Re}(w-z)x-\operatorname{Im}(w-z)y,\operatorname{Im}(w-z)x+\operatorname{Re}(w-z)y)$; applying [L5] to its two real components therefore pulls this constant out of the integral, so this equals $(w-z)\int_0^1 f'(z+t(w-z))\,dt$. [step 1.1, step 1.2, L2, L5, algebra]

3.1 Steps 2.1 and 2.2 give $f(w)-f(z)=(w-z)\int_0^1f'(z+t(w-z))\,dt$; dividing by $w-z$ when $w\ne z$ gives the difference-quotient form, and when $w=z$ the integrand is the constant $f'(z)$, whose integral over $[0,1]$ is $f'(z)$ by [L5], while both sides of the first identity are $0$. [step 2.1, step 2.2, L5, algebra] ∎
