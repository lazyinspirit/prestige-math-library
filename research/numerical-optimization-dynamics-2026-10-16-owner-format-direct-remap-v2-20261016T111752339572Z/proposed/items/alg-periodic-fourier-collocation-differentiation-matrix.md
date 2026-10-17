---
id: alg-periodic-fourier-collocation-differentiation-matrix
kind: algorithm
title: "Periodic Fourier collocation differentiation matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-periodic-fourier-collocation-grid, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-quarter-turn-values-and-shift-formulas]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the algorithm is a finite exact-arithmetic formula."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 79–83 / PDF pp. 85–89; Fourier differentiation matrices and even-N treatment of odd derivatives."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 7"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 7, printed pp. 231–244 (complete book PDF); periodic Fourier differentiation."
---

## Definition

Input an integer $N\ge2$ and real data $U_0,\ldots,U_{N-1}$ on the grid of [[def-periodic-fourier-collocation-grid]]. Set $K=(N-1)/2$ when $N$ is odd and $K=N/2$ when $N$ is even. Form the $(N\times N)$ matrix
$$(D_N)_{ij}= \begin{cases} -\dfrac2N\displaystyle\sum_{k=1}^{K}k\sin(k(x_i-x_j)),&N\text{ odd},\\[1.2ex] -\dfrac2N\displaystyle\sum_{k=1}^{K-1}k\sin(k(x_i-x_j)),&N\text{ even}, \end{cases} \qquad 0\le i,j<N.$$
The algorithm returns $D_N$ and the derivative vector $D_NU$. In the even case it omits the derivative of the Nyquist cosine because $\sin((N/2)(x_i-x_j))=0$ for grid indices $i,j$. All operations are in exact real arithmetic; no floating-point stability or error guarantee is asserted.

