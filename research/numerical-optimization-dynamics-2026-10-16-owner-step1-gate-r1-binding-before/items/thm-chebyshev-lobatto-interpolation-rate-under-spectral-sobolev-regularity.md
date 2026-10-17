---
id: thm-chebyshev-lobatto-interpolation-rate-under-spectral-sobolev-regularity
kind: theorem
title: "Chebyshev–Lobatto interpolation has an algebraic weighted spectral-Sobolev rate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-chebyshev-weighted-spectral-sobolev-scale, lem-chebyshev-lobatto-mode-aliasing, def-cardinal-polynomial-interpolation, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, thm-chebyshev-multiple-angle-identities, thm-sine-cosine-signs-monotonicity-and-ranges, lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz, thm-cauchy-schwarz-finite]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No choice axiom is used; the argument uses explicit alias classes, finite Cauchy–Schwarz, and the stated coefficient completion."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 61–67 / PDF pp. 67–73; polynomial projection/interpolation rates under weighted regularity."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); Chebyshev series and interpolation."
---

## Statement

Let $s>1/2$, $N\ge1$, and $u=\sum_{n\ge0}c_nT_n\in H_C^s$. Then the series converges uniformly, its nodal interpolant $I_N^Lu$ is defined, and
$$
\|u-I_N^Lu\|_C\le C_sN^{-s}\|u\|_{H_C^s},\qquad
C_s=1+2\sqrt{1+\frac1{2s-1}}.
$$

## Facts & Assumptions

**Given:** A real $s>1/2$, an integer $N\ge1$, and a Chebyshev coefficient sequence in $H_C^s$.

[F1] [[def-chebyshev-weighted-spectral-sobolev-scale]]: $\|u\|_{H_C^s}^2=\pi|c_0|^2+\frac\pi2\sum_{n\ge1}(1+n^2)^s|c_n|^2$.

[F2] [[lem-chebyshev-lobatto-mode-aliasing]]: $I_N^LT_n=T_{\rho_N(n)}$ for the unique folded degree $\rho_N(n)\in\{0,\ldots,N\}$.

[F3] [[def-cardinal-polynomial-interpolation]]: $I_N^Lf$ is the finite Lagrange cardinal sum at the $N+1$ distinct Lobatto nodes, hence is linear and continuous in the uniform norm.

[F4] [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]]: $\|T_0\|_C^2=\pi$ and $\|T_r\|_C^2=\pi/2$ for $r\ge1$, with distinct modes orthogonal.

[F5] [[thm-chebyshev-multiple-angle-identities]] and [[thm-sine-cosine-signs-monotonicity-and-ranges]]: $T_n(\cos\theta)=\cos(n\theta)$ and $|\cos t|\le1$ for real $t$.

[F6] [[lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz]]: for $s>1/2$, a sequence with $\sum_{k\in\mathbb Z}(1+|k|)^{2s}|a_k|^2<\infty$ is absolutely summable.

[F7] [[thm-cauchy-schwarz-finite]]: for finite real lists, $|\sum a_kb_k|^2\le(\sum a_k^2)(\sum b_k^2)$.

## Proof

1.1 Put $a_n=c_n$ for $n\ge0$ and $a_n=0$ for negative $n$. By [F1], $\sum_{n\ge0}(1+n^2)^s|c_n|^2<\infty$; since $(1+n)^{2s}\le2^s(1+n^2)^s$, [F6] gives $\sum_{n\ge0}|c_n|<\infty$. By [F5], $|T_n(x)|\le1$ on $[-1,1]$, so the series converges uniformly and its nodal values are defined. [given, F1, F5, F6, algebra]

2.1 Write $u=S_N+R_N$, where $S_N=\sum_{n=0}^Nc_nT_n$ and $R_N=\sum_{n>N}c_nT_n$. The Lagrange operator [F3] reproduces $S_N$ and is continuous in the uniform norm; therefore $u-I_N^Lu=R_N-I_N^LR_N$. By [F2], uniform convergence and the finite cardinal sum give $I_N^LR_N=\sum_{r=0}^Nb_rT_r$, where $b_r=\sum_{n>N:\rho_N(n)=r}c_n$. [F2, F3, step 1.1, algebra]

3.1 Fix $r\in\{0,\ldots,N\}$. Since $n\equiv r$ or $-r\pmod{2N}$, every index in its alias class has form $2qN+r$ or $2qN-r$. When $n>N$ the corresponding integer $q$ is positive. For each $q$ there are at most two candidates; the plus candidate is at least $qN$, and the minus candidate is at least $(2q-1)N\ge qN$. Hence $\sum_{n>N:\rho_N(n)=r}(1+n^2)^{-s}\le2N^{-2s}\sum_{q\ge1}q^{-2s}\le2\left(1+\frac1{2s-1}\right)N^{-2s}.$ The last inequality separates the $q=1$ term and bounds the decreasing tail by $\int_1^\infty x^{-2s}\,dx$. [given, F2, step 2.1, algebra]

4.1 Let $A_s=1+1/(2s-1)$. Apply [F7] to finite partial sums over an alias class, use step 3.1, and pass to the limit; the coefficient sums converge absolutely by step 1.1. This gives $|b_r|^2\le2A_sN^{-2s}\sum_{n>N:\rho_N(n)=r}(1+n^2)^s|c_n|^2.$ The alias classes partition $n>N$. By [F4], $\|I_N^LR_N\|_C^2\le\pi\sum_{r=0}^N|b_r|^2\le2\pi A_sN^{-2s}\sum_{n>N}(1+n^2)^s|c_n|^2\le4A_sN^{-2s}\|u\|_{H_C^s}^2,$ where the last inequality uses [F1]. Also [F1] and [F4] give $\|R_N\|_C^2=\frac\pi2\sum_{n>N}|c_n|^2\le(N+1)^{-2s}\|u\|_{H_C^s}^2.$ Thus $\|R_N\|_C\le(N+1)^{-s}\|u\|_{H_C^s}$. [F1, F2, F4, F7, step 1.1, step 3.1, algebra]

5.1 By step 2.1 and the triangle inequality, $\|u-I_N^Lu\|_C\le\|R_N\|_C+\|I_N^LR_N\|_C\le(1+2\sqrt{A_s})N^{-s}\|u\|_{H_C^s}$ because $(N+1)^{-s}\le N^{-s}$. This is the claimed estimate. [step 2.1, step 4.1, algebra] ∎

