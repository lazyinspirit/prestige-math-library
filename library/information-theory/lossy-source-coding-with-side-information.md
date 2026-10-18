---
page: lossy-source-coding-with-side-information
title: "Lossy Source Coding with Side Information"
status: published
requires:
  - rate-distortion-and-lossy-source-coding
  - distributed-source-coding
  - cost-constrained-gaussian-and-feedback-channels
items:
  - def-it-finite-strongly-typical-set
  - lem-it-finite-type-class-cardinality-bounds
  - lem-it-finite-codebook-covering-selection-law
  - lem-it-finite-random-bin-packing-bound
  - lem-it-finite-selected-codeword-markov-typicality
  - def-it-finite-wyner-ziv-code
  - def-it-finite-multiterminal-lossy-code
  - lem-it-wyner-ziv-auxiliary-cardinality-bound
  - lem-it-finite-wyner-ziv-function-convexity-continuity
  - thm-it-berger-tung-finite-multiterminal-inner-bound
  - thm-it-finite-alphabet-wyner-ziv-rate-distortion
examples: []
---

This page proves the finite-alphabet memoryless Wyner-Ziv theorem for expected normalized additive distortion, with natural logarithms and rates in nats. The encoder sees $X^n$ only, the decoder sees both the message and $Y^n$, and the single-letter distortion $d(x,\hat x)$ does not depend on $Y$. The exact rate is the minimum of $I(X;U|Y)$ over $U-X-Y$ and reconstructions $\hat X=g(Y,U)$; the finite auxiliary bound is $|\mathcal U|\le|\mathcal X|+1$.

For multiple encoders, the page proves the finite-alphabet Berger-Tung subset inequalities as an achievable inner bound. It does not claim those inequalities characterize the general multiterminal lossy rate-distortion region. Random codebook covering, selected-codeword Markov typicality, and joint-bin packing are proved locally before either coding theorem uses them.

The first data-flow diagram depicts the Wyner-Ziv operational model. The source feeds only the encoder; the decoder uses both the message and the side-information block to form the reconstruction. The second diagram depicts separate encoders with one shared decoder. Both are schematic descriptions of the code maps defined in the items above; neither diagram is used as proof evidence.

```tikz
\begin{tikzpicture}[>=stealth]
\node (x) at (0,0) {$X^n$};
\node[draw] (enc) at (2,0) {encoder $f_n$};
\node (m) at (4,0) {$M$};
\node[draw] (dec) at (6,0) {decoder $g_n$};
\node (y) at (6,-1.4) {$Y^n$};
\node (xh) at (8,0) {$\widehat X^n$};
\draw[->] (x)--(enc);
\draw[->] (enc)--(m);
\draw[->] (m)--(dec);
\draw[->] (y)--(dec);
\draw[->] (dec)--(xh);
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[>=stealth]
\node (x1) at (0,1) {$X_1^n$};
\node[draw] (e1) at (2,1) {encoder $f_{1,n}$};
\node (m1) at (4,1) {$M_1$};
\node (x2) at (0,-1) {$X_2^n$};
\node[draw] (e2) at (2,-1) {encoder $f_{2,n}$};
\node (m2) at (4,-1) {$M_2$};
\node[draw] (dec) at (6,0) {common decoder};
\node (xh) at (9,0) {$(\widehat X_1^n,\widehat X_2^n)$};
\draw[->] (x1)--(e1);
\draw[->] (e1)--(m1);
\draw[->] (x2)--(e2);
\draw[->] (e2)--(m2);
\draw[->] (m1)--(dec);
\draw[->] (m2)--(dec);
\draw[->] (dec)--(xh);
\end{tikzpicture}
```
