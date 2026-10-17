---
page: tgr-pet02-examples
title: Actually constructed Gibbs/KMS preparation — Examples
status: draft
library: physics
items: []
examples:
  - ex-tgr-independent-redshifted-cells
requires:
  - tgr-pet02
---

The example places two uncoupled two-level cells at different lapse values in one explicit Rindler stationary domain. It computes each finite Gibbs density, their tensor-product state, and the two proper-time KMS widths from the same Killing-time preparation. The picture shows constant-Rindler-position worldlines at $x=L$ and $x=2L$; the calculation uses the metric and finite matrices, not the sketch.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[->] (0,0) -- (4.4,0) node[right] {$x/L$};
  \draw[->] (0,0) -- (0,3.5) node[above] {$x^0/L$};
  \draw[thick] (1,0) -- (1,3.1);
  \draw[thick] (2,0) -- (2,3.1);
  \fill (1,1.5) circle (2pt);
  \fill (2,2.2) circle (2pt);
  \node[below] at (1,0) {$x=L,\ N_1=1$};
  \node[below] at (2,0) {$x=2L,\ N_2=2$};
  \node[right] at (1,2.7) {$T_1=T_K$};
  \node[right] at (2,2.7) {$T_2=T_K/2$};
\end{tikzpicture}
```
