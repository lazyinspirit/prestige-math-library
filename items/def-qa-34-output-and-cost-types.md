---
id: def-qa-34-output-and-cost-types
kind: definition
title: Classical output, quantum-state output, and access costs
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qc-circuit-cost-model
  - def-qc-density-operator
  - def-qc-state-preparation-cost-model
  - alg-qc-state-preparation
  - thm-qc-state-preparation-cost
  - alg-qc-solovay-kitaev-unitary-compiler
  - thm-qc-solovay-kitaev-error-and-resource-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Definition

An algorithm result contract declares exactly one output type:

- **Classical string:** a finite bit string in a stated encoding. Its cost includes every output bit written and any required formatting.
- **Classical sample:** an element of a stated finite set, with the output law and the cost of writing the sample encoding.
- **Quantum state:** a density operator, as in [[def-qc-density-operator]], on an explicitly named finite register, produced by a declared state-preparation procedure. This does not mean that its amplitude list or a classical description of the state is output.

The accompanying cost record keeps separate: input encoding length and preprocessing; each data-structure or oracle operation; state preparation and its inverse or controlled forms; ordinary gates, controlled gates, and inverse gates; register width and clean/dirty/other workspace; measurement and classical postprocessing; finite-gate approximation precision; and classical output bits. A coordinate that the model does not use is marked not applicable. No state-preparation oracle, QRAM, controlled access, inverse access, or full classical state description is assigned zero cost without an explicit interface.

For the exact continuous-rotation table model, [[def-qc-state-preparation-cost-model]] and [[alg-qc-state-preparation]] specify the table input and circuit procedure; [[thm-qc-state-preparation-cost]] gives the corresponding $D=2^n$ gate/ancilla upper bound. That bound uses exact continuous rotations and gives no finite-gate or uniform bit-time claim. For a fixed finite gate set, [[alg-qc-solovay-kitaev-unitary-compiler]] and [[thm-qc-solovay-kitaev-error-and-resource-bound]] supply a separate approximation and resource contract. The circuit-family coordinates are those of [[def-qc-circuit-cost-model]].
