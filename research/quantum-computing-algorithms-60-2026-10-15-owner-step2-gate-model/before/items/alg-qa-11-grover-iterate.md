---
id: alg-qa-11-grover-iterate
kind: algorithm
title: One Grover iterate in the standard bit-query model
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-11-marked-search-problem
  - def-qa-standard-bit-query
  - thm-qa-bit-query-to-phase-query
  - def-qc-reflection
  - def-qa-quantum-query-algorithm
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-elementary-circuit-resources
  - thm-qc-reflection-unitary-involution
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: No proof phase is supplied; the definition is finite operational data and uses only the declared input operations.
---

## Definition

For a marked-search instance on $D_n$, let $|s\rangle=H^{\otimes n}|0^n\rangle=N^{-1/2}\sum_{x\in D_n}|x\rangle$ and $R_s=2|s\rangle\langle s|-I$. Prepare a response qubit from $|0\rangle$ by applying $X$ and then $H$, giving $|-\rangle$. Apply the standard bit query $U_f$ to the address and response registers; phase kickback applies $O_M$ to the address and leaves the response in $|-\rangle$. Then apply $R_s$ to the address register. This defines $G=R_sO_M$ with one standard bit query and no intermediate measurement. Repeated iterates reuse the response qubit in $|-\rangle$. The query count is separate from the preparation and reflection gate costs. A reflection about $|s\rangle$ may be represented as $H^{\otimes n}(2|0^n\rangle\langle0^n|-I)H^{\otimes n}$, whose reflection cost must be charged under the declared gate model.
