---
page: distributed-source-coding
title: "Distributed Source Coding"
status: published
requires:
  - iid-lossless-source-coding-and-the-aep
  - method-of-types-and-finite-large-deviations
items:
  - def-it-gacs-korner-and-wyner-common-information
  - lem-it-finite-conditional-entropy-continuity
  - def-it-finite-iid-multisource
  - lem-it-conditional-type-class-cardinality
  - def-it-multiterminal-lossless-code
  - lem-it-multisource-block-conditional-law-factorization
  - def-it-jointly-typical-multisource-blocks
  - lem-it-conditional-typical-fan-cardinality
  - lem-it-multisource-typicality-probability
  - thm-it-slepian-wolf-rate-region
examples: []
---

This page treats finite-alphabet IID lossless coding with separate encoders and one common decoder. It proves the $k$-source Slepian–Wolf region through an all-subset converse and independent random-binning achievability. Rates and entropies use natural logarithms and nats per source symbol. The converse and achievability allow zero-probability source letters by restricting likelihoods to the joint support.

The finite Gács–Körner common part and Wyner common information are defined separately. This page does not identify these quantities with Slepian–Wolf rate coordinates or assert an exact general rate-distortion region for lossy distributed coding.

The diagram shows the separate encoder maps and common decoder for a block of length $n$. The dashed diagonal is the target identity map, not an additional encoder; the triangle commutes exactly on correctly decoded source blocks. The proofs use the definitions and probability bounds directly, not the diagram.

```tikzcd
\prod_{i=1}^k\mathcal X_i^n \arrow[r, "F_n=(f_{1,n},\ldots,f_{k,n})"] \arrow[dr, dashed, "\mathrm{id}"'] & \prod_{i=1}^k[M_{i,n}] \arrow[d, "g_n"] \\
& \prod_{i=1}^k\mathcal X_i^n
```
