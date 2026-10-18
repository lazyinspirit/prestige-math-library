---
page: quantum-source-compression-and-cq-capacity
title: Quantum Source Compression and Classical Communication over Quantum Channels
status: published
requires:
  - quantum-relative-entropy-data-processing-and-strong-subadditivity
  - iid-lossless-source-coding-and-the-aep
  - finite-basis-projector-energies-and-variational-electronic-structure
  - quantum-optimization-sdp-and-variational-algorithms
companion: quantum-source-compression-and-cq-capacity-examples
items:
  - lem-it-finite-gentle-measurement
  - lem-it-finite-positive-square-root-is-order-preserving
  - lem-it-hayashi-nagaoka-finite-operator-inequality
  - def-it-quantum-source-and-compression-code
  - lem-it-finite-quantum-entropy-continuity
  - lem-it-square-root-cq-packing-bound
  - lem-it-schmidt-rank-compression-fidelity-bound
  - def-it-classical-quantum-memoryless-channel
  - def-it-cq-channel-block-code-and-error
  - lem-it-cq-typical-projector-dimension
  - thm-it-schumacher-quantum-source-coding
  - thm-it-hsw-classical-quantum-channel-capacity
examples: []
---

This page proves two finite-dimensional asymptotic coding theorems. For the IID source $\rho^{\otimes n}$, the Schumacher rate is $S(\rho)$ nats, measured using squared entanglement fidelity of a channel that factors through the code space. For a fixed finite-input memoryless cq channel $x\mapsto\rho_x$, the HSW capacity is the maximum ensemble Holevo information in nats/use, with deterministic codewords, collective output POVMs, and vanishing average block error. Bits are obtained by dividing the displayed nats rates by $\ln2$; no infinite-dimensional or general quantum-input single-letter claim is made.

The source-code diagram records the untouched reference register and the two channels in the code definition. The cq diagram records the encoder word, memoryless output state, and decoder measurement. These are type-level diagrams only; the statements and proofs below use the explicit channel, state, and POVM formulas.

~~~tikzcd
R\otimes A^{\otimes n} \arrow[r,"\operatorname{id}_R\otimes\mathcal E_n"] &
R\otimes C_n \arrow[r,"\operatorname{id}_R\otimes\mathcal D_n"] &
R\otimes\widehat A^{\otimes n}
~~~

~~~tikzcd
[M] \arrow[r,"m\mapsto x^n(m)"] &
\mathcal X^n \arrow[r,"x^n\mapsto\bigotimes_i\rho_{x_i}"] &
\mathcal D(H_B^{\otimes n}) \arrow[r,"\{\Lambda_m\}"] &
[M]
~~~
