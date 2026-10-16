---
id: def-qa-quantum-query-algorithm
kind: definition
title: "Quantum query algorithm"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-promise-query-instance
  - def-qa-task-and-promise-domain
  - def-qa-finite-branch-output-law
  - def-qc-register-and-computational-basis
  - def-qc-promise-computation-model
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-coherent-function-oracle
  - def-qc-uniform-circuit-family
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-qc-reversible-xor-oracle-unitary
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

For each input length $n$, a **quantum query algorithm** is a specified finite circuit family acting on the encoded input and declared work registers. A register is a finite-dimensional complex inner-product space with its ordered computational basis; an $r$-qubit register uses the lexicographic bit-string basis, with the first wire most significant ([[def-qc-register-and-computational-basis]]). The finite promise-computation model [[def-qc-promise-computation-model]] supplies the classical input, zero-initialized ancillary registers, ordered output tuple, and final classical predicate. Circuit syntax fixes the ordered wires and finite gate list [[def-qc-circuit-syntax-and-register-order]], and its denotation fixes the chronological gate composition [[def-qc-circuit-denotational-semantics]]. Non-input registers start in the zero state unless an explicit input or preparation interface is supplied. Intermediate measurements and classical feed-forward are represented by finite trees of instrument outcomes and branch-specific unitary operations, with the resulting normalized output law defined and proved in [[def-qa-finite-branch-output-law]]. The output is interpreted according to the decision bit or search relation in [[def-qa-task-and-promise-domain]].

A **$T$-query algorithm** has at most $T$ designated calls to the oracle $U_{f_z}$ of [[def-qa-promise-query-instance]] and [[def-qc-coherent-function-oracle]] on every execution branch for every promised $z\in P_n$. Calls count once each; gates in the circuit outside those designated calls are not query calls. Uniformity is asserted only when the family satisfies [[def-qc-uniform-circuit-family]]. A controlled call has the block action in [[def-qc-controlled-unitary-access]] and is available only when the access contract explicitly supplies and charges it. An inverse call to this XOR oracle has the same action as an ordinary call by [[thm-qc-reversible-xor-oracle-unitary]]; inverses of other unitaries use the separate availability and charge convention in [[def-qc-inverse-unitary-access]].

## Remarks

The finite promise-computation model supplies the input and terminal-output data. This definition extends it to intermediate measurements by using the finite instrument tree and normalized branch law stated on the QA01 A page; it makes no uniformity claim unless the full-list condition is supplied.
