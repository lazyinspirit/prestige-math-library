---
page: tgr-phs02-examples
title: Reduced exponential current and defined spectral detector adoption — Examples
status: draft
library: physics
companion: tgr-phs02
requires:
  - tgr-phs02
items: []
examples:
  - texp-tgr-two-accelerations
---

This companion compares two proper accelerations in the specified massless Minkowski-vacuum rate model. The factor-of-two temperature relation and the common reference normalization are conditional model calculations; no detector apparatus or measured outcome is asserted.

The sketch uses length coordinates with $x^1$ horizontal and $x^0=ct$ vertical. Its shaded open wedge is $W_R=\{x^1>|x^0|\}$; the dashed rays are its null boundaries $x^0=\pm x^1$. The plotted branches are the right-wedge hyperbolae $\rho=\sqrt{(x^1)^2-(x^0)^2}$ at two positive radii. They illustrate the coordinate definitions only; the temperature and acceleration calculations use the explicit formulas in the item proof, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.78]
  \fill[blue!8] (0,0) -- (3.5,3.5) -- (4.2,3.5) -- (4.2,-3.5) -- (3.5,-3.5) -- cycle;
  \draw[->] (-0.4,0) -- (4.35,0) node[right] {$x^1$};
  \draw[->] (0,-3.8) -- (0,3.8) node[above] {$x^0=ct$};
  \draw[dashed] (0,0) -- (3.65,3.65) node[pos=0.82,above left] {$x^0=x^1$};
  \draw[dashed] (0,0) -- (3.65,-3.65) node[pos=0.82,below left] {$x^0=-x^1$};
  \draw[thick,orange!85!black,domain=-1.25:1.25,samples=60,variable=\x]
    plot ({1.05*cosh(\x)},{1.05*sinh(\x)});
  \draw[thick,red!75!black,domain=-1.25:1.25,samples=60,variable=\x]
    plot ({1.75*cosh(\x)},{1.75*sinh(\x)});
  \node[orange!85!black] at (2.25,1.45) {$\rho_1$};
  \node[red!75!black] at (3.0,2.55) {$\rho_2>\rho_1$};
  \node[blue!50!black] at (3.85,0.45) {$W_R$};
\end{tikzpicture}
```

