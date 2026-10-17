---
page: csm-fluctuations-countermodels-examples
title: "Finite Bernoulli fluctuations and matching exponential rates — Examples"
status: published
library: physics
requires:
  - csm-fluctuations-countermodels
items: []
examples:
  - ex-csm-bernoulli-fluctuation-bounds
  - ex-csm-nonadditive-phase-countermodel
  - ex-csm-walk-recurrence-and-entropy
---

These worked calculations specialize the finite Bernoulli bounds, compare the two preparations for a four-member three-sector model, and evaluate one diffusive step scale, one rotor period, and the first three coarse and fine entropy values of the exact four-state permutation. They are theoretical model calculations, not sample data or reported observations.

In the diagram, arrows show the permutation $\mathcal T$, and the two node colors mark the coarse cells $\{0,1\}$ and $\{2,3\}$. The initial distribution assigns probability $1/2$ to states $0$ and $1$, as in [[ex-csm-walk-recurrence-and-entropy]]. The drawing is schematic; the item gives the exact map, probability vectors, and entropy calculation, and the proof does not rely on the diagram.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={circle,draw,minimum size=8mm}]
  \node[fill=blue!18] (s0) at (0,0) {$0$};
  \node[fill=blue!18] (s1) at (2,0) {$1$};
  \node[fill=orange!25] (s2) at (2,-2) {$2$};
  \node[fill=orange!25] (s3) at (0,-2) {$3$};
  \draw[->] (s0) -- (s1);
  \draw[->] (s1) -- (s2);
  \draw[->] (s2) -- (s3);
  \draw[->] (s3) -- (s0);
\end{tikzpicture}
```

