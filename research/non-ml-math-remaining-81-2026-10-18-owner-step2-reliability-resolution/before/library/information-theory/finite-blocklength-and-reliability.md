---
page: finite-blocklength-and-reliability
title: "Finite-Blocklength Bounds and Reliability"
status: draft
items:
  - lem-it-finite-affine-slice-error-bound
  - thm-it-berry-essen-independent-array
  - def-it-one-letter-gallager-exponent-functions
  - lem-it-dmc-mutual-information-concave-in-input
  - lem-it-finite-pinsker-euclidean-bound
  - lem-it-gallager-input-maxima-attained
  - def-it-channel-dispersion
  - def-it-gallager-and-expurgated-exponent-functions
  - def-it-reliability-function
  - lem-it-dmc-capacity-output-law-is-unique
  - lem-it-optimized-constant-composition-gallager-identity
  - thm-it-one-shot-decision-threshold-achievability
  - thm-it-one-shot-meta-converse
  - lem-it-dmc-caid-conditional-variance-identity
  - lem-it-dmc-dispersion-attains-minimum
  - thm-it-dmc-uniform-quadratic-capacity-decay
  - thm-it-expurgated-error-exponent-lower-bound
  - thm-it-random-coding-error-exponent
  - thm-it-sphere-packing-strict-feasibility-converse
  - thm-it-normal-approximation-nondegenerate-dmc
  - thm-it-error-exponent-zero-above-capacity
requires:
  - cost-constrained-gaussian-and-feedback-channels
  - concentration-inequalities-and-tail-bounds
  - detection-and-quantification-limits

---

This page treats finite-alphabet, unconstrained, no-feedback discrete memoryless channels using natural logarithms and deterministic fixed-length encoders and decoders. It develops one-shot dependence-testing achievability and meta-converse bounds, Gallager random-coding and expurgated lower bounds, and a sphere-packing converse only above its stated finite-divergence strict-feasibility threshold. Reliability exponents are defined with separate liminf and limsup conventions; an exact general low-rate reliability formula is not asserted. Expected ensemble-average error does not by itself control maximal error; the explicit expurgation arguments state their rate and error costs.

The normal-approximation theorem is limited to a fixed $0<\epsilon<1/2$ and a channel with $V_{\min}>0$. Its proof supplies a finite Pinsker bound, a finite affine-slice error estimate, and a uniform Berry–Esseen step before the type converse. The page makes no cost-constrained, feedback, zero-dispersion, $\epsilon\ge1/2$, success-exponent, or third-order claim. The sphere-packing converse states its Axiom of Choice and Countable Choice assumptions where it uses Euclidean separation.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (m) at (0,0) {$J\in[M]$};
  \node[draw] (enc) at (2,0) {$e:[M]\to\mathcal X^n$};
  \node (x) at (4.5,0) {$X^n=e(J)$};
  \node[draw] (ch) at (6.7,0) {$W^n$};
  \node (y) at (9,0) {$Y^n$};
  \node[draw] (dec) at (11,0) {$d:\mathcal Y^n\to[M]$};
  \node (mhat) at (13.2,0) {$\widehat J$};
  \draw[->] (m) -- (enc);
  \draw[->] (enc) -- (x);
  \draw[->] (x) -- (ch);
  \draw[->] (ch) -- (y);
  \draw[->] (y) -- (dec);
  \draw[->] (dec) -- (mhat);
\end{tikzpicture}
```

The boxes are deterministic maps and $W^n$ is the memoryless product channel. This diagram records the fixed-length code interface; the proofs establish the stated error bounds directly and do not rely on the diagram.
