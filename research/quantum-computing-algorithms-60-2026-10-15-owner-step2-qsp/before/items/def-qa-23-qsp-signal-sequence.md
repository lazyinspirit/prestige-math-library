---
id: def-qa-23-qsp-signal-sequence
kind: definition
title: QSP signal matrix and ordered phase sequence
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - def-real-and-complex-inner-product-space
  - def-qc-relative-phase
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
  - thm-of-square-roots
  - thm-complex-exponential-addition-and-real-extension
  - thm-eulers-formula
  - def-complex-conjugate-real-imaginary-part-and-modulus
justified_by:
  - lem-qa-23-phase-sequence-unitarity
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

Let $x\in[-1,1]$, put $s(x)=\sqrt{1-x^2}$ using the nonnegative real square root, and define the Hermitian-reflection signal matrix
$$W_R(x)=\begin{pmatrix}x&s(x)\\s(x)&-x\end{pmatrix}.$$
For each real $\phi$, define $Z(\phi)=\operatorname{diag}(e^{i\phi},e^{-i\phi})$. For an integer $d\ge0$ and real phase list $\Phi=(\phi_0,\ldots,\phi_d)$, the length-$d$ QSP sequence is the ordered matrix product
$$U_\Phi(x)=Z(\phi_0)\prod_{j=1}^{d}\bigl(W_R(x)Z(\phi_j)\bigr),$$
where the product is written left to right in increasing $j$ and matrix multiplication acts right to left. For $d=0$ this is $Z(\phi_0)$. This definition fixes the sign of the off-diagonal signal entry, both endpoint phases, and the product order.

The phases are in matrix order: when the factors are applied as chronological circuit layers, the rightmost factor acts first, in accordance with [[def-qc-circuit-denotational-semantics]]. In the ordered signal basis, if both coordinates are nonzero, applying $Z(\phi)$ multiplies the ratio of the second coordinate to the first by $e^{-2i\phi}$; if either coordinate is zero, that relative phase is undefined, while the displayed matrix action remains defined. This is the relative phase convention fixed by [[def-qc-relative-phase]].
