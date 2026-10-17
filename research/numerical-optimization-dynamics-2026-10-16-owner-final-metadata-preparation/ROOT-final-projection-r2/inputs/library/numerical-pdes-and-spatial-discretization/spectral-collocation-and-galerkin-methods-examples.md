---
page: spectral-collocation-and-galerkin-methods-examples
title: Spectral collocation and Galerkin methods — Examples
status: draft
items: []
examples:
  - ex-periodic-fourier-collocation-exactness-and-nyquist-mode
  - ex-chebyshev-lobatto-endpoint-clustering
  - ex-analytic-and-nonsmooth-chebyshev-coefficient-decay
  - ex-quadratic-product-aliases-on-even-fourier-grid
  - ex-gaussian-and-simpson-weighted-mass-matrix-check
requires:
  - spectral-collocation-and-galerkin-methods
---

The examples compute a periodic Fourier derivative including its even-grid Nyquist mode, quantify the quadratic endpoint spacing of Lobatto nodes, and compare geometric Chebyshev coefficient decay for analytic data with algebraic decay for a cusp. A quadratic Fourier product shows the exact aliasing of frequencies three and four on a four-point grid. The final mass-matrix check computes a two-node Gaussian Legendre matrix and a two-panel Simpson approximation for the Chebyshev weight, including the proved Simpson error bound.
