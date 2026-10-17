---
page: emg-ms02
title: Selected ingoing RN extension and time orientation
status: draft
library: mathematics
requires:
- emg-ms01
- geodesics-the-exponential-map-completeness-and-hopf-rinow
- emg-cp01
items:
- def-emg-xs-ingoing-rn
- prop-emg-xs-rn-local-gauges
- prop-emg-xs-rn-horizon-data
- thm-emg-xs-rn-crossing
- thm-emg-xs-kn-extension
- prop-emg-xs-kn-horizon-data
- prop-emg-xs-kn-ergoregion
- prop-emg-xs-charged-ring-obstruction
- lem-emg-xs-null-barrier
- thm-emg-xs-rn-escape
- thm-emg-xs-kn-escape
examples: []
---

This page fixes two selected ingoing coordinate models on explicit product
domains. The RN model uses the smooth block
$-f\,dv^2+2\,dv\,dr$ for all positive $r$. The KN model extends across the
axes with the global sphere one-form $\beta=X\,dY-Y\,dX$. The radial and
angular coordinates, parameter dimensions, time orientation, and the
$(-+++)$ signature are part of each mathematical definition.

For a simple RN outer root, the chart drawing shows the local orbit space of
the bifurcation construction. Each point of the drawing stands for an
$S^2$ section; it is not a maximal RN extension diagram. The equations and
proofs establish regularity and causal claims independently of the drawing.

~~~tikz
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-2.6,0) -- (2.6,0) node[right] {$U$};
  \draw[->] (0,-2.0) -- (0,2.0) node[above] {$V$};
  \node at (-1.25,1.18) {$UV<0$: exterior};
  \node at (1.2,1.18) {$UV>0$: $r<r_+$};
  \node at (-1.2,-1.15) {$UV>0$: $r<r_+$};
  \node at (1.25,-1.15) {$UV<0$: exterior};
  \node[anchor=west] at (0.12,1.72) {$U=0$: null horizon};
  \node[anchor=north] at (1.65,0.08) {$V=0$: null horizon};
  \fill (0,0) circle (1.6pt);
  \node[anchor=north west] at (0.08,-0.08) {bifurcation sphere};
  \node[align=left] at (-1.25,0.62) {selected ingoing\\ exterior branch};
\end{tikzpicture}
~~~

The simple-root RN chart uses
$UV=-K(r)$ with $K'(r_H)>0$ and a stated auxiliary length $\ell_*$.
The extremal case has $\kappa=0$ and uses the regular ingoing chart only.
The two null axes $U=0$ and $V=0$ are the local horizon branches and their
intersection represents the bifurcation sphere. Since $K$ has the sign of
$r-r_+$, opposite-sign quadrants have $r>r_+$ and same-sign quadrants have
$r<r_+$. The original ingoing exterior occupies only the $U<0,V>0$ branch
shown in the upper left. This orbit-space sketch records chart signs; the
metric and field proofs establish regularity independently.
The causal results define escape by future piecewise $C^1$ paths reaching
arbitrarily large $r$ in the selected model. Their boundary is not silently
identified with an event horizon requiring a conformal completion.

For nonzero rotation, the KN stationary-limit set of $T=\partial_v$ differs
from the rotating Killing horizon away from the axis. The charged-ring
argument uses the conditional draft Ricci invariant at its exact current
interface. The RN potential patches and fluxes are classical mathematical
data; they imply neither a regular center source nor charge quantization.

Carroll's complete GR lecture notes and Adamo–Newman's full Kerr–Newman
review support the coordinate and root context. Their different signature
and normalization conventions are not imported. The local proof contracts
record exact supplier statements and current draft qualifications;
independent review remains pending.
