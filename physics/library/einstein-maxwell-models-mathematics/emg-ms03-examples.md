---
page: emg-ms03-examples
title: Positive harmonic conformastatic electrovac data — Examples
status: published
library: mathematics
requires:
  - emg-ms03
items: []
examples:
  - cex-emg-xs-nonharmonic-vacuum
  - cex-emg-xs-constant-radius
  - cex-emg-xs-vanishing-scalars
  - ex-emg-xs-two-center
---

## Scope

These examples test the exact interfaces from emg-ms03. The two-center example specializes the proved multicenter exterior and keeps both removed centers outside the manifold. The nonharmonic counterexample uses the arbitrary-positive-H curvature table directly and exhibits a nonzero Einstein-Maxwell residual for one smooth positive function. The Bertotti-Robinson example shows why its constant sphere radius cannot be used as an area-radius coordinate. The null-wave counterexample has all four stated quadratic scalar invariants zero while its field and curvature are nonzero.

## Two-center flux geometry

The sketch is a meridional cross-section of Euclidean coordinate space through two distinct excluded centers. Each pair of concentric circles represents coordinate spheres about one center; the larger dashed circle represents a coordinate sphere enclosing both. Arrows mark the outward Euclidean normal used in the flux calculation. The curves are schematic and do not represent horizons or prove any field equation; exact radii, harmonicity, and fluxes are established in prop-emg-xs-mp-multicenter.

~~~tikz
\begin{tikzpicture}[scale=1.0]
  \coordinate (a) at (-1.45,0);
  \coordinate (b) at (1.45,0);
  \draw[dashed,thick] (0,0) ellipse (3.2 and 1.55);
  \draw[thick] (a) circle (0.78);
  \draw[thick] (a) circle (0.38);
  \draw[thick] (b) circle (0.78);
  \draw[thick] (b) circle (0.38);
  \fill (a) circle (2pt);
  \fill (b) circle (2pt);
  \node[below=4pt] at (a) {$a_1$};
  \node[below=4pt] at (b) {$a_2$};
  \node at (-2.15,0.62) {$S_1(r_1)$};
  \node at (2.15,0.62) {$S_2(r_2)$};
  \node at (0,1.63) {$S_R$};
  \draw[->] (-0.98,0.52) -- (-0.72,0.68);
  \draw[->] (1.92,0.52) -- (2.18,0.68);
\end{tikzpicture}
~~~
