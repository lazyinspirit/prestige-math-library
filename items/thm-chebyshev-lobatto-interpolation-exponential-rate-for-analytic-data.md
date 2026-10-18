---
id: thm-chebyshev-lobatto-interpolation-exponential-rate-for-analytic-data
kind: theorem
title: "Analytic ellipse data give exponential Chebyshev–Lobatto interpolation error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-chebyshev-gauss-lobatto-collocation-grid, lem-chebyshev-lobatto-mode-aliasing, def-chebyshev-arcsine-weighted-l2-pairing, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain, thm-chebyshev-multiple-angle-identities, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, thm-geometric-series, def-complex-trigonometric-and-hyperbolic-functions, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-natural-logarithm, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; contour integration and the explicit coefficient series give the rate."
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 65–67 / PDF pp. 71–73; the Chebyshev–Gauss–Lobatto analytic interpolation estimate."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); Chebyshev series and analytic approximation."
---

## Statement

Let $\rho>1$, and let $E_\rho$ be the closed Bernstein ellipse
$$
E_\rho=\left\{\frac{\rho e^{it}+\rho^{-1}e^{-it}}2:0\le t\le2\pi\right\}
$$
together with its interior. Suppose $f$ is real-valued on $[-1,1]$, extends holomorphically to an open neighborhood of $E_\rho$, and satisfies $|f(z)|\le M$ on $E_\rho$. Then for every $N\ge1$,
$$
\|f-I_N^Lf\|_C\le \frac{4\sqrt{\pi}M}{\rho-1}\rho^{-N}.
$$

## Facts & Assumptions

**Given:** $\rho>1$, a function $f$ holomorphic near $E_\rho$ with $|f|\le M$ there, and $N\ge1$.

[F1] [[thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain]]: a holomorphic function on a star-shaped open set has zero integral around every closed rectifiable contour in that set.

[F2] [[thm-chebyshev-multiple-angle-identities]] and [[thm-quarter-turn-values-and-shift-formulas]]: $T_n(\cos\theta)=\cos(n\theta)$ and cosine is $2\pi$-periodic on the real line; [[cor-trigonometric-parity-and-pythagorean-identity]] gives its evenness.

[F3] [[lem-chebyshev-lobatto-mode-aliasing]]: $I_N^LT_n=T_{\rho_N(n)}$ for the folded degree $0\le\rho_N(n)\le N$.

[F4] [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]]: the Chebyshev modes have squared norms $\pi$ at degree zero and $\pi/2$ at positive degrees, and a continuous function pairing to zero with every mode is zero. The coefficient convention used in this proof is defined explicitly in step 2.1.

[F5] [[def-chebyshev-arcsine-weighted-l2-pairing]]: the angular measure has total mass $\pi$, so $\|h\|_C\le\sqrt\pi\|h\|_\infty$.

[F6] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: $|\cos t|\le1$ for real $t$.

[F7] [[thm-geometric-series]]: for $r\in\mathbb R$ with $|r|<1$, $\sum_{k\ge0}r^k=1/(1-r)$.

[F8] [[def-complex-trigonometric-and-hyperbolic-functions]] and [[cor-complex-trigonometric-and-hyperbolic-derivatives]]: complex cosine is entire and $\cos z=(\exp(iz)+\exp(-iz))/2$. The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]); its sums, products, and compositions are complex differentiable by [[thm-chain-rule-for-complex-derivatives]] and [[thm-algebra-of-complex-derivatives]], and complex differentiability implies continuity ([[cor-complex-differentiability-implies-continuity]]).

[F9] [[thm-complex-exponential-addition-and-real-extension]] and [[thm-kernel-and-fibres-of-complex-exponential]]: the complex exponential adds and $\exp(2\pi i k)=1$ for every integer $k$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives its Cartesian form and modulus; [[cor-trigonometric-parity-and-pythagorean-identity]] gives the real sine and cosine parity used in the coefficient formula.

[F10] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: for $L=\log\rho$ with $\rho>1$, $L>0$ and $e^L=\rho$. The real exponential is strictly increasing and $e^0=1$ ([[thm-exponential-is-strictly-increasing]], [[def-real-exponential-function-and-e]]).

[F11] [[cor-exponential-reciprocal-and-positivity]], [[def-integer-power]], and [[lem-power-laws]]: $e^{-nL}=(e^{-L})^n=(1/\rho)^n=\rho^{-n}$ for each natural $n$.

## Proof

1.1 Put $L=\log\rho>0$. For $z=\theta-it$, $0\le t\le L$, let $r=e^t$, so $1\le r\le\rho$ by [F10]. The definitions in [F8] and Cartesian formula [F9] give $\cos(\theta-it)=A_r\cos\theta+iB_r\sin\theta$, where $A_r=(r+r^{-1})/2$ and $B_r=(r-r^{-1})/2$. For $1\le r\le\rho$, $A_r\le A_\rho$ and $B_r\le B_\rho$: the differences are $(\rho-r)(1-1/(\rho r))/2$ and $(\rho-r)(1+1/(\rho r))/2$. Therefore $x^2/A_\rho^2+y^2/B_\rho^2\le\cos^2\theta+\sin^2\theta=1$ for $r>1$, so the image lies in the filled ellipse $E_\rho$; at $r=1$ it lies on $[-1,1]\subset E_\rho$. The closed rectangle $R_0=\{-\pi\le\Re z\le\pi,\ -L\le\Im z\le0\}$ is compact and lies in the open set $\cos^{-1}(V)$, where $V$ is a neighborhood on which $f$ is holomorphic. Hence a slightly larger open rectangle $R$ still lies in $\cos^{-1}(V)$; it is convex and therefore star-shaped. By [F8], $g=f\circ\cos$ is holomorphic on $R$, and each $H_n(z)=g(z)e^{-inz}$ is holomorphic and continuous there by [F8]. On the lower edge $|g(\theta-iL)|\le M$. [given, F8, F9, F10, algebra]

2.1 For each $n\ge1$ define $c_n=\frac2\pi\int_0^\pi f(\cos\theta)\cos(n\theta)\,d\theta$, and define $c_0=\frac1\pi\int_0^\pi f(\cos\theta)\,d\theta$. For real $\theta$, $g$ is even and $f(\cos\theta)$ is real; Euler's identity [F9] makes the sine part of $\int_{-\pi}^{\pi}g(\theta)e^{-in\theta}\,d\theta$ vanish, so this integral is $\pi c_n$. Also $H_n(z)=g(z)e^{-inz}$ is $2\pi$-periodic: $g$ is periodic by [F8]--[F9], and $e^{-2\pi in}=1$ by [F9]. Apply [F1] to the boundary of $R_0$; the vertical integrals cancel by periodicity, so the top and lower horizontal integrals, both oriented from left to right, are equal. On the lower edge, [F9] and [F11] give $|e^{-in(\theta-iL)}|=e^{-nL}=\rho^{-n}$, hence $|c_n|\le2M\rho^{-n}$. Also $|c_0|\le M$ by the defining integral and the bound $|f|\le M$. [F1, F2, F8, F9, F11, step 1.1, algebra]

3.1 The coefficient bounds in step 2.1 make $\sum_{n\ge0}c_nT_n$ uniformly convergent, since [F2] and [F6] give $|T_n(x)|\le1$. Uniform convergence permits termwise integration against each bounded $T_k$; orthogonality [F4] shows that this series and $f$ have the same coefficients as defined in step 2.1. Their continuous difference therefore pairs to zero with every Chebyshev mode, so [F4] gives $f=\sum_{n\ge0}c_nT_n$ on $[-1,1]$. [F2, F4, F6, step 2.1, algebra]

4.1 By [F3], every mode $T_n$ with $n>N$ interpolates to a Chebyshev mode. Each such mode has sup norm at most one by [F2] and [F6]. Thus the series tail and its interpolant each have sup norm at most $\sum_{n>N}|c_n|$, and $\|f-I_N^Lf\|_\infty\le2\sum_{n>N}|c_n|\le4M\sum_{n>N}\rho^{-n}=\frac{4M}{\rho-1}\rho^{-N},$ where [F7] evaluates the geometric tail. [F2, F3, F6, F7, step 3.1, algebra]

5.1 Apply [F5] to the uniform error in step 4.1. This yields $\|f-I_N^Lf\|_C\le4\sqrt\pi M(\rho-1)^{-1}\rho^{-N}$, as claimed. [F5, step 4.1, algebra] ∎

