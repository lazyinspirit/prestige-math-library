---
id: thm-holomorphic-parameter-riemann-integral
kind: theorem
title: "A jointly continuous finite-interval parameter integral of holomorphic functions is holomorphic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-fubini-on-product-rectangles, def-vector-valued-derivative-and-integral, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, thm-goursat-triangle-theorem, thm-morera-triangle-theorem, thm-fundamental-theorem-for-complex-line-integrals, thm-heine-borel-rn, thm-heine-cantor-metric, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-norm-inequality-for-the-vector-valued-integral, thm-complex-numbers-are-the-real-coordinate-plane, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: true
short: "holomorphic parameter integrals"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 5.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $a\le b$ be real, let $\Omega\subseteq\mathbb C$ be open, and let $\varphi:[a,b]\times\Omega\to\mathbb C$ be jointly continuous. Suppose $\varphi(t,\cdot)$ is holomorphic on $\Omega$ for every $t\in[a,b]$. Then the componentwise Riemann integral

$$F(z):=\int_a^b\varphi(t,z)\,dt$$

is holomorphic on $\Omega$.

If, in addition, $\partial_z\varphi(t,z)$ exists everywhere and is jointly continuous on $[a,b]\times\Omega$, then

$$F'(z)=\int_a^b\partial_z\varphi(t,z)\,dt.$$

If $\varphi:[a,b]\times\Omega\to\mathbb C$ is jointly continuous and $\varphi(t,\cdot)$ is holomorphic for every $t$, then $F(z)=\int_a^b\varphi(t,z)\,dt$ is holomorphic on $\Omega$.

## Facts & Assumptions

**Given:** Real numbers $a\le b$, an open set $\Omega\subseteq\mathbb C$, and a jointly continuous function $\varphi:[a,b]\times\Omega\to\mathbb C$ whose $z$-slice is holomorphic for every parameter; the identification $\mathbb C=\mathbb R^2$ from [[thm-complex-numbers-are-the-real-coordinate-plane]].

[L1] Complex-valued Riemann integration is the componentwise vector integral in $\mathbb R^2$, with zero integral when the limits agree and with linearity on every nondegenerate interval ([[def-vector-valued-derivative-and-integral]]).

[L2] On a piecewise-$C^1$ contour, the complex contour integral equals the sum of the parameter integrals of $f(\gamma(s))\gamma'(s)$ over its smooth pieces ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L3] A Riemann-integrable real function on a product of nondegenerate closed rectangles has equal iterated integrals in either order when all sections are integrable ([[thm-riemann-fubini-on-product-rectangles]]).

[L4] A holomorphic function has zero integral around every contained filled triangle ([[thm-goursat-triangle-theorem]]).

[L5] A continuous function with zero integral around every contained filled triangle is holomorphic ([[thm-morera-triangle-theorem]]).

[L6] If $H$ is a primitive of a continuous function $h$ on a neighbourhood of a rectifiable contour $\gamma$, then $\int_\gamma h=H(\gamma(b))-H(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L7] A continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L8] Closed bounded subsets of Euclidean space are compact ([[thm-heine-borel-rn]]).

[L9] Every continuous real function on a closed nondegenerate rectangle is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[L10] Let $a\le b$. If $a<b$ and $h:[a,b]\to\mathbb R^m$ is integrable, then $t\mapsto\|h(t)\|_2$ is integrable, and in all cases $\|\int_a^b h\|_2\le\int_a^b\|h\|_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L11] If $q$ is Riemann integrable and $0\le q(t)\le B$ on $[a,b]$ with $a<b$, then $\int_a^bq(t)\,dt\le B(b-a)$ ([[lem-integral-elementary-bounds]]).

## Proof

**Proof technique:** direct.

1.1 If $a=b$, [L1] makes $F=0$, so all conclusions are immediate. Suppose $a<b$. For each $z$, continuity of $t\mapsto\varphi(t,z)$ and [L9] make the componentwise integral exist; near any fixed $z_0$, choose a compactly contained closed disc $K$, so [L8] makes $[a,b]\times K$ compact, [L7] makes $\varphi$ uniformly continuous there, and [L10] with [L11] gives $\|F(z)-F(z_0)\|_2\le(b-a)\sup_{t\in[a,b]}|\varphi(t,z)-\varphi(t,z_0)|\to0$, hence $F$ is continuous. [given, L1, L7, L8, L9, L10, L11]

1.2 For a filled triangle $\Delta\subseteq\Omega$, parametrize each directed edge by its affine map on $[0,1]$; [L2] rewrites the edge contribution to $\int_{\partial\Delta}F(z)\,dz$ as an iterated parameter integral on $[a,b]\times[0,1]$. [given, L2]

1.3 For the differentiation-under-the-integral conclusion, now assume $\psi:=\partial_z\varphi$ exists and is jointly continuous. Fix $z\in\Omega$ and a closed disc about $z$ contained in $\Omega$; for sufficiently small nonzero $h$, [L6] and the parametrization in [L2] on the segment from $z$ to $z+h$ give $(\varphi(t,z+h)-\varphi(t,z))/h=\int_0^1\psi(t,z+sh)\,ds$, and [L7] on the compact parameter-disc product from [L8] makes this quotient converge to $\psi(t,z)$ uniformly in $t$. [given, L2, L6, L7, L8]

2.1 For the basic holomorphy conclusion, each real and imaginary component of the edge integrand in step 1.2 is continuous, hence Riemann integrable by [L9]; [L3] interchanges its parameter and edge integrals, and [L4] makes the resulting inner contour integral $\int_{\partial\Delta}\varphi(t,z)\,dz$ zero for every fixed $t$, so $\int_{\partial\Delta}F(z)\,dz=0$. [step 1.2, L3, L4, L9]

3.1 For the basic holomorphy conclusion, the continuity from step 1.1 and the vanishing triangle integrals from step 2.1 satisfy [L5], so $F$ is holomorphic on $\Omega$. [step 1.1, step 2.1, L5]

4.1 For the differentiation-under-the-integral conclusion, by linearity in [L1], the difference quotient of $F$ minus $\int_a^b\psi(t,z)\,dt$ is the integral over $t$ of the error in step 1.3; [L10] and [L11] bound its modulus by $(b-a)$ times the uniform error, which tends to zero, so $F'(z)=\int_a^b\partial_z\varphi(t,z)\,dt$, including the already settled case $a=b$. [step 1.3, L1, L10, L11] ∎
