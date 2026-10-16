---
id: def-qa-18-random-access-gate-model
kind: definition
title: "Random-access quantum-memory gate model"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-circuit-syntax-and-register-order
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §6.2"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
---
## Definition

Let a QRAM contain an ordered classical memory word $z=(z_0,\ldots,z_{L-1})\in\{0,1\}^L$, with $L\ge1$. Its **random-access quantum-memory gate** acts on an address register encoding $i\in\{0,\ldots,L-1\}$, a target bit $b$, and the memory register by

$$|i,b,z_0\cdots z_{L-1}\rangle\longmapsto |i,z_i,z_0\cdots z_{i-1}b z_{i+1}\cdots z_{L-1}\rangle.$$

For address superpositions, this basis action is extended linearly. On valid addresses it swaps the target with the addressed memory bit, so the gate is an involutive permutation of the ordered computational basis and hence unitary; unused address encodings, if any, are fixed. One call has cost one QRAM gate-time unit by this model's convention. A read into a clean scratch target followed by copying and restoring the addressed bit uses the corresponding additional calls. The memory word itself, its address width, the circuit used to construct or update it, and the other ordinary gates are separate charged resources. This is a quantum random-access memory model; it does not assert an implementation by a bounded-arity ordinary circuit of the same gate count.
