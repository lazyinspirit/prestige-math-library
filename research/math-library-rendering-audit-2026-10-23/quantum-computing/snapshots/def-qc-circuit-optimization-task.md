---
id: def-qc-circuit-optimization-task
kind: definition
title: "Circuit Optimization Task"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-cost-model
  - def-qc-global-phase-equivalence
  - def-qc-clean-and-dirty-ancillas
  - def-qc-clifford-t-gate-library
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
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Definition

A circuit-optimization instance consists of (i) a finite circuit in the ordered syntax of [[def-qc-circuit-syntax-and-register-order]], with denotation given by [[def-qc-circuit-denotational-semantics]], over one fixed finite exact gate alphabet, (ii) a declared equivalence relation—exact equality of those denoted matrices, or the whole-circuit phase relation $U\sim_{\mathrm{phase}}V$ from [[def-qc-global-phase-equivalence]], and (iii) an ancilla policy and one applicable cost coordinate. The ancilla policy specifies the allowed initial ancilla states and exact return obligations under [[def-qc-clean-and-dirty-ancillas]]. The cost coordinate is chosen from gate-occurrence count (size), minimum-layer depth, T-count, or width, using the precise meanings of [[def-qc-elementary-circuit-resources]] and [[def-qc-circuit-cost-model]]. Here minimum-layer depth is $d(C)$ from [[def-qc-circuit-cost-model]]; T-count is the number of occurrences labeled $T$ or $T^\dagger$ from [[def-qc-clifford-t-gate-library]], so that coordinate is applicable only when the instance's alphabet contains those gates. The selected coordinate is part of the instance and remains fixed when comparing outputs.

Phase equivalence is applied only to the denotation of the whole standalone circuit. A phase on a unitary generally becomes a relative phase when that unitary is placed under control, so an optimizer may not silently replace a controlled subcircuit by a phase-equivalent one. The instance must specify controlled access explicitly when controls are present.

A feasible output is a circuit over the same gate alphabet and wire policy, with the same denotation under the chosen equivalence and no greater value of the selected cost coordinate. A globally optimal output has minimum selected cost among all feasible circuits in that declared model. This defines an optimization task; it supplies no algorithm or general optimality guarantee.

