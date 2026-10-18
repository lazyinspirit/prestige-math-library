---
page: high-resolution-tvd-eno-and-weno-methods
title: High-resolution TVD, ENO and WENO reconstruction
status: draft
items:
  - def-na-high-resolution-reconstruction
  - thm-na-linear-monotone-first-order-barrier
  - lem-na-eno2-reconstruction-third-order
  - lem-na-weno5-optimal-linear-reconstruction
  - thm-na-musc-minmod-second-order-on-smooth-data
  - thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl
  - cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one
  - thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction
examples: []
---

## Objective

This page separates nodal ENO2 from finite-volume cell-average reconstruction, defines minmod MUSCL, WENO5-JS and the WENO-Z comparison, and proves their stated smooth-region face accuracy. The scalar linear monotonicity barrier is proved by a finite-stencil moment argument. The unchanged direct reconstructed-upwind forward-Euler MUSCL/minmod update is TVD under the sharp CFL bound $|a|\Delta t/h\le2/3$, proved in [[thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl]]. The exact CFL-one counterexample remains in [[cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one]]; the theorem also shows failure for every larger CFL number through one.

For the cell-average convention, each rectangle below is one half-open cell and its label is the cell average. The dashed vertical line is the target face. The three lower bars show the five-cell WENO5 candidate stencils; the nodal ENO2 rule uses separate point samples and is defined by its own divided-difference formula in [[def-na-high-resolution-reconstruction]]. The diagram records stencil geometry only; the proofs use the displayed formulas and moment calculations.

```tikz
\begin{tikzpicture}[x=1cm,y=0.75cm]
  \draw (0,0) rectangle (1,0.6);
  \draw (1,0) rectangle (2,0.6);
  \draw (2,0) rectangle (3,0.6);
  \draw (3,0) rectangle (4,0.6);
  \draw (4,0) rectangle (5,0.6);
  \node at (0.5,0.3) {$U_{i-2}$};
  \node at (1.5,0.3) {$U_{i-1}$};
  \node at (2.5,0.3) {$U_i$};
  \node at (3.5,0.3) {$U_{i+1}$};
  \node at (4.5,0.3) {$U_{i+2}$};
  \draw[red,dashed] (3,-0.2) -- (3,1.4);
  \node[red,right] at (3,1.25) {$x_{i+1/2}$};
  \draw[thick] (0,-0.35) -- (3,-0.35);
  \node at (1.5,-0.62) {$S_0$};
  \draw[thick] (1,-0.9) -- (4,-0.9);
  \node at (2.5,-1.17) {$S_1$};
  \draw[thick] (2,-1.45) -- (5,-1.45);
  \node at (3.5,-1.72) {$S_2$};
\end{tikzpicture}
```
