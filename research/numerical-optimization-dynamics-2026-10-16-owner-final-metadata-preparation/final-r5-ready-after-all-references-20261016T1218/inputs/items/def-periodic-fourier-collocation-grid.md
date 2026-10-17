---
id: def-periodic-fourier-collocation-grid
kind: definition
title: "Periodic Fourier collocation grid and even-grid Nyquist convention"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-sine-and-cosine-by-power-series, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-derivatives, thm-chain-rule]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the grid and frequency sets are finite and explicit."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 79–83 / PDF pp. 85–89; even periodic grids, discrete Fourier representation, and the Nyquist multiplier convention."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 7"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 7, printed pp. 231–244 (complete book PDF); periodic grids and Fourier differentiation."
---

## Definition

Let $N\ge2$ be an integer, let $x_j=2\pi j/N$ for $j=0,\ldots,N-1$, and identify $x_N$ with $x_0$ periodically. The real trigonometric interpolation space is
$$\mathcal T_N= \begin{cases} \operatorname{span}_{\mathbb R}\{1,\cos(kx),\sin(kx):1\le k\le (N-1)/2\},&N\text{ odd},\\ \operatorname{span}_{\mathbb R}\{1,\cos(kx),\sin(kx):1\le k<N/2\}\oplus\operatorname{span}_{\mathbb R}\{\cos(Nx/2)\},&N\text{ even}. \end{cases}$$
For real nodal data $U=(U_0,\ldots,U_{N-1})$, define its periodic Fourier interpolant by
$$
I_NU(x)=\sum_{j=0}^{N-1}U_jL_j(x),
$$
where, for $N=2K+1$,
$$
L_j(x)=\frac1N\left(1+2\sum_{k=1}^{K}\cos(k(x-x_j))\right),
$$
and, for $N=2K$,
$$
L_j(x)=\frac1N\left(1+2\sum_{k=1}^{K-1}\cos(k(x-x_j))+\cos(K(x-x_j))\right).
$$
Thus the even-grid Nyquist component is the real cosine $\cos(Nx/2)$ only. Its sampled derivative is defined by differentiating this interpolant; the resulting Nyquist derivative values are zero at every grid point.

