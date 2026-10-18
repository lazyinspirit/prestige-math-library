---
page: overlapping-schwarz-and-stable-subspace-decompositions
title: "Overlapping Schwarz and stable subspace decompositions"
status: published
items:
  - lem-schwarz-p1-product-cutoff-interpolation-energy-estimate
  - def-overlapping-schwarz-subspace-correction-data
  - lem-schwarz-local-matrices-are-well-defined
  - thm-two-level-p1-poisson-stable-decomposition
  - lem-schwarz-local-corrections-are-energy-orthogonal-projections
  - lem-schwarz-additive-inverse-is-local-energy-minimum
  - thm-additive-schwarz-stable-decomposition-condition-number
  - thm-multiplicative-schwarz-exact-sweep-contraction
  - thm-two-level-p1-poisson-additive-and-multiplicative-bounds
examples: []
---

This page defines exact and spectrally equivalent inexact Schwarz local
solves for finite-dimensional SPD diffusion energies. It proves the additive
condition bound $\kappa_A(BA)\le C_0C_1$ from a stable decomposition constant
$C_0$ and a synthesis constant $C_1$, then proves a multiplicative sweep bound
from exact projection energy decreases and pairwise overlap constants.

The structured finite-element statements explicitly assume Countable Choice,
matching their Sobolev and interpolation prerequisites. The concrete theorem
uses nested uniform P1 meshes on a cube in dimensions
two and three, a boundary-preserving coarse interpolant, padded shape-regular
cube subdomains, and bounded overlap. It gives explicit
$C_{\rm FE}(1+(H/\delta)^2)$ dependence and a multiplicative contraction
constant. The point-patch example shows that one-level Schwarz can lose
uniformity as the number of local spaces grows.
The ordinary partition proof makes no robustness claim for high coefficient
contrast or anisotropy; those require a coarse space designed for those modes.

## Schematic overlap

The bars illustrate an interval cover only. Shared intervals represent
positive overlap; black ticks are coarse-cell boundaries. All estimates are
proved from the stated mesh, partition, and energy hypotheses, not from this
drawing.

~~~tikz
\begin{tikzpicture}[x=1.25cm,y=0.72cm]
  \draw[->] (-0.15,0) -- (3.25,0);
  \foreach \x in {0,1,2,3} {
    \draw (\x,-0.12) -- (\x,0.12);
  }
  \node[below] at (0,-0.12) {$0$};
  \node[below] at (1,-0.12) {$H$};
  \node[below] at (2,-0.12) {$2H$};
  \node[below] at (3,-0.12) {$3H$};
  \draw[very thick,blue] (0,0.7) -- (1.5,0.7);
  \draw[very thick,blue] (0.5,1.25) -- (2.5,1.25);
  \draw[very thick,blue] (1.5,1.8) -- (3,1.8);
  \node[left] at (0,0.7) {$\Omega_1$};
  \node[left] at (0.5,1.25) {$\Omega_2$};
  \node[left] at (1.5,1.8) {$\Omega_3$};
  \draw[<->] (0.5,0.95) -- (1.5,0.95);
  \node[above] at (1,0.95) {overlap};
\end{tikzpicture}
~~~

## Reading path

Start with [[def-overlapping-schwarz-subspace-correction-data]] and its local
well-definedness and projection lemmas. The abstract additive and
multiplicative theorems come next. The P1 Poisson stable decomposition then
feeds the explicit two-level bounds. Worked finite examples are on
[[overlapping-schwarz-and-stable-subspace-decompositions-examples]].
