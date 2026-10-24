---
id: rem-qa-20-higher-order-formula-proof-obligations
kind: remark
title: Scope of higher-order Suzuki claims
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-20-term-list-access-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed p. 135: higher-order product-formula asymptotics; no recursive cancellation proof is supplied."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: first-order error scaling and higher-order context; Chapter 9, Exercise 4, printed p. 79: the second-order local-error fact. No higher-order recursive proof is supplied."
---

## Remarks

The finite Suzuki recursion, finite-order cancellation, and the explicit conservative norm bound proved on this page are the higher-order claims supplied here. They use signed term times and charge every expanded term call. No asymptotic complexity claim with hidden commutator constants, no generic nested-commutator estimate, and no free negative-time access is part of this remark; any stronger resource assertion needs its own complete proof and access-cost accounting.
