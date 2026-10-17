---
page: qsm-infinite-spin-physical-models-examples
title: Infinite quantum spin quantities and physical adoption — Examples
status: draft
library: physics
items: []
examples:
  - ex-qsm-ising-phase-regimes
requires:
  - qsm-infinite-spin-physical-models
---

This example specializes the conditional diagonal Ising theorem to one-dimensional uniqueness and two-dimensional sufficient high- and low-temperature regimes. The bounds do not identify the two-dimensional critical temperature, and no behavior outside the stated conditions is inferred.

## Nearest-neighbor square-lattice schematic

The dots represent sites in a finite window of $\mathbb Z^2$; each solid edge represents one unordered nearest-neighbor pair in the Hamiltonian. Each site also has one field term. The picture shows only edges wholly inside the displayed window, matching the free-boundary finite-volume sum. It illustrates the convention and is not part of the proof.

~~~tikz
\begin{tikzpicture}[scale=0.85]
  \foreach \y in {0,1,2} {
    \draw[thick] (0,\y) -- (1,\y) -- (2,\y);
  }
  \foreach \x in {0,1,2} {
    \draw[thick] (\x,0) -- (\x,1) -- (\x,2);
  }
  \foreach \x in {0,1,2} {
    \foreach \y in {0,1,2} {
      \fill[blue!70!black] (\x,\y) circle (2.5pt);
    }
  }
  \node[above] at (1,2.1) {$\Lambda$};
\end{tikzpicture}
~~~

