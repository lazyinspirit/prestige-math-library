---
page: emg-s02-examples
title: Harmonic static multicenter electrovac model — Examples
status: published
library: physics
items: []
examples:
  - texp-emg-xs-null-curvature
  - texp-emg-xs-two-center-model
requires:
  - emg-s02
---
## Scope

These two thought experiments specialize exact conditional solutions already
proved on the A page. The first has a nonzero null electromagnetic field and
nonzero spacetime curvature while its four listed scalar contractions
vanish. The second fixes two distinct harmonic centers and computes their
regular-sphere SI fluxes. Both are hypothetical model calculations; neither
reports measurements or infers that an observed pair of black holes exists.

## Two-center geometry

The diagram is a schematic cross-section of Euclidean space at fixed $x^0$.
The marked points are omitted centers, the smaller circles are sections of
coordinate spheres with $0<r<d/2$, and the larger circle is a section of an
outer sphere with $R>d$. Arrows show outward orientation. The drawing records
the setup only; harmonicity, field equations, and fluxes follow from the
complete argument in [[texp-emg-xs-two-center-model]] and its suppliers.

~~~tikz
\begin{tikzpicture}[scale=0.9]
  \coordinate (a1) at (0,0);
  \coordinate (a2) at (4,0);
  \draw[dashed,thick] (a1) circle (5);
  \draw[thick] (a1) circle (0.8);
  \draw[thick] (a2) circle (0.8);
  \fill (a1) circle (2pt);
  \fill (a2) circle (2pt);
  \node[below=4pt] at (a1) {$a_1$};
  \node[below=4pt] at (a2) {$a_2$};
  \node at (2,0.32) {$d$};
  \node at (-0.95,0.65) {$S_1(r)$};
  \node at (4.95,0.65) {$S_2(r)$};
  \node at (-2.9,4.1) {$S_R$};
  \draw[->] (-0.57,0.56) -- (-0.34,0.73);
  \draw[->] (4.57,0.56) -- (4.8,0.73);
\end{tikzpicture}
~~~

The radii in the sketch are not to scale. Each circle represents the
intersection of a two-sphere with the displayed spatial plane.

