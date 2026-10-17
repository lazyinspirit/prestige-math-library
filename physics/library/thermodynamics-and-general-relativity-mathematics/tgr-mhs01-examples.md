---
page: tgr-mhs01-examples
title: Smooth null screen and KN parameter family — Examples
status: published
library: mathematics
requires:
  - tgr-mhs01
items: []
examples:
  - ex-tgr-schwarzschild-family-data
  - cex-tgr-ingoing-null-cone-area
---

The example computes the Schwarzschild and nonrotating charged specializations of the exact family identities and records the extremal Reissner–Nordström endpoint as a boundary value. The counterexample computes a flat ingoing null cone with zero Ricci curvature and strictly decreasing area before its finite-affine-parameter vertex. That cone fails the future-complete persistent-cut assumption, so it refutes a weaker local claim without contradicting the restricted area theorem.

The diagram is the $(t,r)$ orbit-space section of the Minkowski example. A point on the cone represents a round two-sphere; the marked points show the sample cuts $(t,r)=(-2,2)$ and $(-1,1)$. The generator direction is future-directed along $k=\partial_t-\partial_r$, toward the excluded vertex. The proof uses the equations and area calculation, not the drawing.

~~~tikz
\begin{tikzpicture}[scale=0.95]
  \draw[->] (0,0.2) -- (3.1,0.2) node[right] {$r$};
  \draw[->] (0,-2.7) -- (0,0.55) node[above] {$t$};
  \draw[thick] (0,0) -- (2.55,-2.55) node[pos=0.78,below right] {$t+r=0$};
  \draw[dashed] (0,-2) -- (2,-2);
  \draw[dashed] (0,-1) -- (1,-1);
  \fill (2,-2) circle (1.7pt);
  \fill (1,-1) circle (1.7pt);
  \fill (0,0) circle (1.7pt);
  \node[anchor=west] at (2.02,-2.02) {$S_{\lambda_0}$, $r_0=2$};
  \node[anchor=west] at (1.02,-1.02) {$S_{\lambda_0+1}$, $r=1$};
  \node[anchor=south west] at (0.06,0.02) {vertex excluded};
  \draw[->,very thick] (1.65,-1.65) -- (0.42,-0.42);
  \node[anchor=south east] at (1.15,-1.08) {$k=\partial_t-\partial_r$};
\end{tikzpicture}
~~~

