---
id: def-qa-quantum-query-algorithm
kind: definition
title: "Quantum query algorithm"
status: published
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

For each encoded instance length $n$ and explicitly declared public data $p$, a **quantum query algorithm** is a specified finite circuit protocol on its query and work registers, fixed independently of the hidden instance $z$ at fixed $(n,p)$. The hidden encoding labels the oracle instance; it is not supplied as a readable input register. A register is a finite-dimensional complex inner-product space with its ordered computational basis; an $r$-qubit register uses the lexicographic bit-string basis, with the first wire most significant ([[def-qc-register-and-computational-basis]]). The finite promise-computation model [[def-qc-promise-computation-model]] supplies the public-classical-input, zero-initialized ancillary-register, ordered-output-tuple, and final-predicate conventions. Its classical input and terminal predicate receive only the declared public data, not the hidden encoding. Circuit syntax fixes the ordered wires and finite gate list [[def-qc-circuit-syntax-and-register-order]], and its denotation fixes the chronological gate composition [[def-qc-circuit-denotational-semantics]]. The execution tree starts in the standard public-input basis state with all other registers zero. Any explicit preparation interface is executed as a specified finite prefix of unitary or instrument nodes of this tree, with its preparation calls and other resource costs charged under the declared access contract. Intermediate measurements and classical feed-forward are represented by finite trees of instrument outcomes and branch-specific unitary operations. In the ordinary oracle-only model, all preparation operations, nonoracle gates and instruments, branch-control rules, and terminal output rules are independent of the hidden instance at fixed $(n,p)$; later operations may depend on observed outcomes. For each instantiated oracle, [[def-qa-finite-branch-output-law]] gives the normalized output law of this tree with its public classical input. The output is interpreted according to the decision bit or search relation in [[def-qa-task-and-promise-domain]].

In the ordinary oracle-only model, hidden-instance dependence enters only through the designated oracle calls. Explicit public parameters and arithmetic inputs remain available when the task declares them. Any additional instance-dependent state preparation or data-access operation is a separately declared and charged resource. Oracle-only lower bounds compare instances with the same public data and without such additional input access; the hidden encoding itself supplies none.

A **$T$-query algorithm** has at most $T$ designated calls to the oracle $U_{f_z}$ of [[def-qa-promise-query-instance]] and [[def-qc-coherent-function-oracle]] on every execution branch for every promised $z\in P_n$. Calls count once each; gates in the circuit outside those designated calls are not query calls. Uniformity is asserted only when the family satisfies [[def-qc-uniform-circuit-family]]. A controlled call has the block action in [[def-qc-controlled-unitary-access]] and is available only when the access contract explicitly supplies and charges it. An inverse call to this XOR oracle has the same action as an ordinary call by [[thm-qc-reversible-xor-oracle-unitary]]; inverses of other unitaries use the separate availability and charge convention in [[def-qc-inverse-unitary-access]].

## Remarks

The finite promise-computation model supplies the public-input and terminal-output conventions. The finite instrument tree extends it to intermediate measurements; its branch law is applied separately to each instantiated oracle, without granting the terminal predicate access to the hidden encoding. No uniformity claim is made unless the full-list condition is supplied.
