---
id: def-qa-32-eqp-promise-class
kind: definition
title: EQP on promise problems in the QC14 model
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 13
deps:
  - def-promise-problem
  - def-qc-promise-computation-model
  - def-qc-uniform-circuit-family
  - def-qc-quantum-acceptance-probability
  - def-qc-circuit-cost-model
  - def-qc-clifford-t-gate-library
  - thm-qc-output-acceptance-law-normalizes
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Watrous, Quantum Computational Complexity, Section IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
---

## Definition

A promise problem $\Pi=(Y,N)$ belongs to $\mathrm{EQP}$ in the QC14 model if there is a full-list uniform family $(C_n)_{n\ge0}$ and a polynomial-time total acceptance predicate $A_n$ as in [[def-qc-promise-computation-model]], [[def-qc-uniform-circuit-family]], and [[def-qc-quantum-acceptance-probability]], using the exact gate and cost conventions of [[def-qc-circuit-cost-model]] and [[def-qc-clifford-t-gate-library]], such that

$$ p_{C_{|x|}}(x)=1\quad(x\in Y),\qquad p_{C_{|x|}}(x)=0\quad(x\in N). $$

No condition is imposed on $x\notin Y\cup N$ ([[def-promise-problem]]). The finite output law is normalized by [[thm-qc-output-acceptance-law-normalizes]].
