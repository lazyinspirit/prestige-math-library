---
id: def-qa-qft-gate-cost-model
kind: definition
title: QFT ideal and finite-set gate-cost models
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: [def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-controlled-phase-rotation, def-qc-elementary-circuit-resources, def-qc-tensor-register-and-permutation, def-qc-cnot-and-control-target-order]
axiom_use: "No choice axiom is used; this item states finite gate-count conventions."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

The **ideal binary-QFT gate-count model** treats each Hadamard $H$ and each exact controlled phase $\mathrm{CP}_s$ as one elementary gate, for integer $s\ge2$, where

$$H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad \mathrm{CP}_s=\operatorname{diag}(1,1,1,e^{2\pi i/2^s}).$$

A named SWAP, the wire permutation from [[def-qc-tensor-register-and-permutation]], counts as one two-qubit gate. If the implementation expands each SWAP into three exact CNOT gates of [[def-qc-cnot-and-control-target-order]], count those three CNOTs in place of that SWAP. These conventions refine the one-qubit alphabet, controlled-phase rotation and elementary circuit-resource interfaces of [[def-qc-one-qubit-gate-alphabet-and-rotations]], [[def-qc-controlled-phase-rotation]] and [[def-qc-elementary-circuit-resources]].

The **finite-set synthesis model** keeps ideal gate count separate from compiled gate count. A one- or two-qubit target block is assigned a projective operator-error tolerance $\delta>0$; a scalar phase returned by the compiler is retained as metadata for the whole standalone circuit. Each CNOT expanded from a SWAP is exact in this model. Any compiled-count theorem must state the fixed-arity decomposition, finite alphabet, inverse-closure, density, exact-arithmetic and compiler-threshold hypotheses it uses. In particular, it makes no claim about classical bit-time for computing an arbitrary target-angle description. This is a cost convention; correctness and compiler resource bounds are separate theorems.
