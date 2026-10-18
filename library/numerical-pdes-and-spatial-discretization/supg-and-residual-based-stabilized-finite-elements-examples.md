---
page: supg-and-residual-based-stabilized-finite-elements-examples
title: "SUPG, residual stabilization and variational multiscale methods — Examples"
status: published
items: []
examples:
  - ex-supg-q1-equal-order-pressure-checkerboard
  - ex-supg-grad-div-does-not-fix-pressure-kernel
  - ex-supg-vms-two-scale-closure-defect-sharp
  - ex-supg-overlarge-stabilization-smears-solution
  - ex-supg-convection-boundary-layer-coarse-mesh
---

These examples separate what each stabilization term controls. The two-cell boundary-layer calculation shows exact nodal fitting with a large within-cell error; the one-degree-of-freedom load example shows how an oversized parameter can damp the discrete solution. The periodic Q1/Q1 example gives an exact pressure mode in the divergence-coupling kernel, which a PSPG pressure-gradient term detects; the next example proves that grad-div alone leaves that kernel unchanged. The final VMS example attains the residual-closure defect bound exactly.

The checkerboard nodal pattern on the $2\times2$ periodic Q1 mesh is shown below. Opposite edges are identified periodically; the corner and edge signs therefore agree under those identifications. On each cell the bilinear interpolant is $\sigma_{ij}(1-2\xi)(1-2\eta)$, as verified algebraically in its item.

```tikz
\begin{tikzpicture}[scale=1.2]
\draw[step=1,gray!70] (0,0) grid (2,2);
\node at (0,0) {$+$};
\node at (1,0) {$-$};
\node at (2,0) {$+$};
\node at (0,1) {$-$};
\node at (1,1) {$+$};
\node at (2,1) {$-$};
\node at (0,2) {$+$};
\node at (1,2) {$-$};
\node at (2,2) {$+$};
\draw[<->,dashed] (-0.25,0.2) -- (-0.25,1.8);
\draw[<->,dashed] (0.2,2.25) -- (1.8,2.25);
\node[left] at (-0.25,1) {$y$-periodic};
\node[above] at (1,2.25) {$x$-periodic};
\end{tikzpicture}
```
