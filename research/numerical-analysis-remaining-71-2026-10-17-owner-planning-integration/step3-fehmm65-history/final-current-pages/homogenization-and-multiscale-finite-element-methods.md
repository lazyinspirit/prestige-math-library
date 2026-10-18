---
page: homogenization-and-multiscale-finite-element-methods
title: "Homogenization, multiscale FEM and heterogeneous media"
status: draft
items:
  - def-periodic-scalar-diffusion-data
  - def-periodic-zero-mean-cell-space
  - lem-unit-cube-h01-separability-and-l2-compactness
  - def-periodic-cell-problem
  - lem-periodic-cell-poincare
  - lem-periodic-averaging-on-cube
  - def-periodic-two-scale-convergence
  - lem-periodic-cell-corrector-wellposedness
  - thm-two-scale-compactness-for-l2-bounded-sequences
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-two-scale-gradient-decomposition-for-h01
  - thm-periodic-effective-tensor-symmetric-elliptic
  - alg-fehmm-periodic-cell-micro-macro
  - lem-fehmm-period-aligned-sampling-has-zero-resonance
  - lem-fehmm-one-dimensional-nonaligned-resonance-bound
  - thm-periodic-dirichlet-homogenization-on-unit-cube
  - lem-periodic-flux-corrector
  - lem-fehmm-micro-cell-solves-wellposedness
  - cor-periodic-dirichlet-homogenization-strong-l2
  - thm-periodic-boundary-layer-corrector-estimate
  - lem-fehmm-micro-tensor-approximation-error
  - thm-fehmm-macro-micro-resonance-error-decomposition
examples: []
---
This page treats measurable, uniformly elliptic scalar coefficients that are periodic on the unit lattice. It defines the mean-zero periodic cell space, proves cell solvability and the symmetric uniformly elliptic effective tensor, then establishes two-scale compactness and identifies the weak Dirichlet homogenized limit on the unit cube. Strong $L^2$ convergence follows from a locally proved Fourier compactness argument. A quantitative first-order corrector estimate is stated only for $C^2$ homogenized solutions and includes an explicit boundary cutoff and antisymmetric flux potential.

The multiscale discretization branch is FE-HMM on a square in two dimensions. It uses an admissible newest-vertex-bisection macro triangulation, continuous zero-boundary P1 macro functions, periodic P1 micro functions, barycenter samples, and exact cell integrals. The local proof separates the macro best-approximation error, finite micro-space error, and continuum sampling/resonance error. Integer-aligned periods remove only the resonance term; the one-dimensional nonaligned calculation exhibits a nonzero sampling error. No general accuracy claim is made for arbitrary scale ratios or nonperiodic coefficients.

## Macro and micro sampling convention

In the schematic, $K$ is one closed macro triangle and $x_K$ its barycenter. The translated micro square $x_K+\delta Y$ has lower corner $x_K$ and center $x_K+\delta(1/2,1/2)$. Opposite micro edges are identified for the fluctuation space; the colored edges and arrows show matching traces under translations by $\delta e_1$ and $\delta e_2$. The coefficient in rescaled micro coordinates is $b_K(y)=a(x_K/\epsilon+(\delta/\epsilon)y)$. The drawing illustrates the data layout only; every equation and error bound is proved in the item text.

```tikz
\begin{tikzpicture}[scale=1.0, line cap=round, line join=round]
  \draw[thick] (0,0) -- (3.4,0) -- (0,2.5) -- cycle;
  \node at (0.85,0.95) {$K$};
  \fill[red] (1.13,0.83) circle (2pt);
  \node[red, below right] at (1.13,0.83) {$x_K$};
  \draw[dashed,gray] (1.13,0.83) -- (4.3,1.35);
  \draw[thick,blue] (4.5,0.45) rectangle (6.9,2.85);
  \node at (5.7,1.55) {$x_K+\delta Y$};
  \draw[->,blue,thick] (4.75,0.25) -- (6.55,0.25);
  \draw[->,blue,thick] (7.15,0.7) -- (7.15,2.5);
  \draw[<-,blue,thick] (4.75,3.05) -- (6.55,3.05);
  \draw[<-,blue,thick] (4.25,0.7) -- (4.25,2.5);
  \node[blue] at (5.65,-0.05) {$\delta e_1$};
  \node[blue,rotate=90] at (7.45,1.65) {$\delta e_2$};
  \node at (5.7,3.35) {periodic P1 fluctuation};
\end{tikzpicture}
```
