---
page: least-squares-fem-and-practical-dpg-examples
title: First-order least-squares FEM and practical DPG — Examples
status: published
items: []
examples:
  - cex-na-least-squares-boundary-omission-nonunique
  - ex-na-least-squares-poisson-residual-certificate
  - cex-na-practical-dpg-too-small-test-space
  - ex-na-ideal-and-practical-dpg-test-vectors
---

These examples check the boundary and stability caveats. If the homogeneous Dirichlet condition is dropped, constants give distinct zero-residual states for zero data. If the practical test space has smaller dimension than its trial space, the restricted Riesz map has a kernel and unique solvability cannot be guaranteed.

The finite-dimensional DPG calculation compares ideal and practical trial-to-test vectors for the nonsymmetric matrix $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. It yields coefficients $1/2$ and $1$ under the same load, so the practical method need not reproduce the ideal test vector.

On the unit square with a two-triangle conforming mesh, $u=x(1-x)y(1-y)$, $\sigma=-\nabla u$, and $f=2x(1-x)+2y(1-y)$ give an exact least-squares residual certificate: the scalar vanishes on the boundary, the first residual is zero by construction, and $\operatorname{div}\sigma=f$.
