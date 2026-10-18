---
page: isogeometric-galerkin-methods-examples
title: "Isogeometric Galerkin discretization — Examples"
status: draft
items: []
examples:
  - cex-positive-nurbs-weights-do-not-imply-admissible-patch
  - ex-isogeometric-quarter-annulus-nurbs-patch
  - cex-multipatch-trace-mismatch-not-h1
  - ex-isogeometric-k-refinement-of-the-identity-patch
---

The examples compute a folded unit-weight bilinear patch, an interface jump that produces a non-$L^2$ weak derivative, an exact degree-elevation and midpoint-insertion representation of the identity, and a rational quadratic quarter-circle tensor patch covering a quarter annulus. The diagrams show the stated maps and trace values; every conclusion is checked by the equations in the corresponding item proof.

The first diagram marks the two distinct reference points $(1/2,0)$ and $(1/2,1)$ and the single physical point $(1/2,0)$. The central arrow names the map $F(\xi,\eta)=(\xi,\eta(1-2\xi))$; the labels specify the two exact preimages. The diagram makes no claim about the complete image boundary.

```tikz
\begin{tikzpicture}[scale=1.7]
  \draw[->] (-0.12,0) -- (1.2,0) node[right] {$\xi$};
  \draw[->] (0,-0.12) -- (0,1.16) node[above] {$\eta$};
  \draw (0,0) rectangle (1,1);
  \draw[dashed] (0.5,0) -- (0.5,1);
  \fill[red] (0.5,0) circle (0.025) node[below left] {$(1/2,0)$};
  \fill[blue] (0.5,1) circle (0.025) node[above left] {$(1/2,1)$};
  \draw[->,thick] (1.2,0.5) -- (1.65,0.5) node[midway,above] {$F$};
  \begin{scope}[xshift=1.8cm]
    \draw[->] (0,0) -- (1.2,0) node[right] {$x$};
    \draw[->] (0,0) -- (0,1.1) node[above] {$y$};
    \fill (0.5,0) circle (0.025) node[below right] {$(1/2,0)$};
  \end{scope}
\end{tikzpicture}
```

The second diagram labels the common physical face $x=1$ with the left and right field traces. The geometry is the adjacent identity rectangles; the unequal trace values are the only discontinuity used in the counterexample.

```tikz
\begin{tikzpicture}[scale=1.7]
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,0) rectangle (2,1);
  \node at (0.5,0.55) {$v=0$};
  \node at (1.5,0.55) {$v=1$};
  \draw[very thick,dashed] (1,0) -- (1,1);
  \node[below] at (1,0) {$x=1$};
  \node[left] at (0,0.5) {$D_L$};
  \node[right] at (2,0.5) {$D_R$};
  \node[above] at (0.78,1) {$v|_{D_L}=0$};
  \node[above] at (1.25,1) {$v|_{D_R}=1$};
\end{tikzpicture}
```

The final diagram maps the reference square to the quarter annulus. The inner and outer radii are $r_0$ and $1$, and the angular coordinate runs from $0$ to $\pi/2$. The drawing is schematic; the rational formula, unit-circle identity, monotonicity, and Jacobian in the proof establish the exact geometry.

```tikz
\begin{tikzpicture}[scale=2]
  \draw[thick] (0,0) rectangle (1,1);
  \draw[->] (1.15,0.5) -- (1.7,0.5) node[midway,above] {$F$};
  \draw[->] (2,0) -- (3.1,0) node[right] {$x$};
  \draw[->] (2,0) -- (2,1.1) node[above] {$y$};
  \draw[thick] (2.45,0) arc (0:90:0.45);
  \draw[thick] (3,0) arc (0:90:1);
  \draw[thick] (2.45,0) -- (3,0);
  \draw[thick] (2,0.45) -- (2,1);
  \node[below] at (2.45,0) {$r_0$};
  \node[below] at (3,0) {$1$};
  \node at (2.68,0.38) {$r_0\le r\le1$};
\end{tikzpicture}
```
