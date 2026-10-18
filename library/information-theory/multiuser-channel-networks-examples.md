---
page: multiuser-channel-networks-examples
title: "Multiuser Channel Networks — Examples"
status: published
requires: [multiuser-channel-networks]
items:
  - ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho
  - ex-it-binary-xor-dm-mac-product-input-region
  - ex-it-correlated-source-binary-adder-dm-mac
---

These examples calculate finite instances of the models and regions defined on [[multiuser-channel-networks]]. Each example keeps its own channel and message model explicit.

For the correlated-source example, the adder output is $0,1,2$ and the source support omits $(1,0)$, so the three supported source pairs map injectively to the three outputs. Its source law is
$$P_{S_1S_2}=\frac13\begin{pmatrix}1&1\\0&1\end{pmatrix},$$
with row index $S_1$ and column index $S_2$. The separate product-input MAC theorem concerns independent private messages and is a different operational problem.

The binary XOR example gives the triangle $R_1+R_2\le\ln2$. Its single-letter conditional input laws are product for each public time-sharing value; an unconditional mixture may be correlated, but a common mixture variable carries no private-message rate once conditioned on it.

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.7cm]
\node (x1) {$X_1\in\{0,1\}$};
\node (x2) [below of=x1] {$X_2\in\{0,1\}$};
\node[draw,right of=x1,yshift=-.85cm] (adder) {$Y=X_1+X_2$};
\draw[->] (x1)--(adder); \draw[->] (x2)--(adder);
\node[right of=adder] (out) {$Y\in\{0,1,2\}$};
\draw[->] (adder)--(out);
\end{tikzpicture}
```
