---
id: thm-chebyshev-lobatto-interpolation-exponential-rate-for-analytic-data
kind: theorem
title: "Analytic ellipse data give exponential Chebyshev–Lobatto interpolation error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-chebyshev-gauss-lobatto-collocation-grid, lem-chebyshev-lobatto-mode-aliasing, def-chebyshev-arcsine-weighted-l2-pairing, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain, thm-chebyshev-multiple-angle-identities, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, thm-geometric-series]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; contour integration and the explicit coefficient series give the rate."
verification:
  precheck: pending
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

[F2] [[thm-chebyshev-multiple-angle-identities]] and [[thm-quarter-turn-values-and-shift-formulas]]: $T_n(\cos\theta)=\cos(n\theta)$ and cosine is even and $2\pi$-periodic.

[F3] [[lem-chebyshev-lobatto-mode-aliasing]]: $I_N^LT_n=T_{\rho_N(n)}$ for the folded degree $0\le\rho_N(n)\le N$.

[F4] [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]]: the coefficient convention is $c_0=\pi^{-1}\int_0^\pi f(\cos\theta)d\theta$, $c_n=2\pi^{-1}\int_0^\pi f(\cos\theta)\cos(n\theta)d\theta$ for $n\ge1$, and a continuous function with all Chebyshev coefficients zero is zero.

[F5] [[def-chebyshev-arcsine-weighted-l2-pairing]]: the angular measure has total mass $\pi$, so $\|h\|_C\le\sqrt\pi\|h\|_\infty$.

[F6] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: $|\cos t|\le1$ for real $t$.

[F7] [[thm-geometric-series]]: for $r\in\mathbb R$ with $|r|<1$, $\sum_{k\ge0}r^k=1/(1-r)$.

## Proof

1.1 For $z=\theta-it$ with $0\le t\le\log\rho$, $\cos z=\cos\theta\cosh t+i\sin\theta\sinh t.$ For fixed $t>0$, its real and imaginary parts satisfy $x^2/\cosh^2t+y^2/\sinh^2t=1$, so the image is the Bernstein ellipse with parameter $e^t$; these ellipses are nested. Since $f$ is holomorphic on a neighborhood of $E_\rho$, $g(z):=f(\cos z)$ is holomorphic on an open strip containing the rectangle $-\pi\le\Re z\le\pi$, $-\log\rho\le\Im z\le0$. On its lower edge $|g(\theta-i\log\rho)|\le M$. [given, F1, algebra]

2.1 For $n\ge1$, set $H_n(z)=g(z)e^{-inz}$. It is holomorphic on that strip and $2\pi$-periodic. Apply [F1] to the boundary of the rectangle with vertices $-\pi,\pi,\pi-i\log\rho,-\pi-i\log\rho$. The vertical integrals cancel by periodicity, so the top and lower horizontal integrals, both oriented from left to right, are equal. By [F2] and evenness, the coefficient in [F4] is $c_n=\frac1\pi\int_{-\pi}^{\pi}g(\theta)e^{-in\theta}\,d\theta.$ On the lower edge, $|e^{-in(\theta-i\log\rho)}|=\rho^{-n}$, so the shifted integral gives $|c_n|\le2M\rho^{-n}$. Also [F4] and $|f|\le M$ give $|c_0|\le M$. [F1, F2, F4, step 1.1, algebra]

3.1 The coefficient bounds in step 2.1 make $\sum_{n\ge0}c_nT_n$ uniformly convergent, since [F2] and [F6] give $|T_n(x)|\le1$. Uniform convergence permits termwise integration against each bounded $T_k$; orthogonality [F4] shows that this series and $f$ have the same Chebyshev coefficients. Their continuous difference therefore has every coefficient zero, so [F4] gives $f=\sum_{n\ge0}c_nT_n$ on $[-1,1]$. [F2, F4, F6, step 2.1, algebra]

4.1 By [F3], every mode $T_n$ with $n>N$ interpolates to a Chebyshev mode. Each such mode has sup norm at most one by [F2] and [F6]. Thus the series tail and its interpolant each have sup norm at most $\sum_{n>N}|c_n|$, and $\|f-I_N^Lf\|_\infty\le2\sum_{n>N}|c_n|\le4M\sum_{n>N}\rho^{-n}=\frac{4M}{\rho-1}\rho^{-N},$ where [F7] evaluates the geometric tail. [F2, F3, F6, F7, step 3.1, algebra]

5.1 Apply [F5] to the uniform error in step 4.1. This yields $\|f-I_N^Lf\|_C\le4\sqrt\pi M(\rho-1)^{-1}\rho^{-N}$, as claimed. [F5, step 4.1, algebra] ∎

