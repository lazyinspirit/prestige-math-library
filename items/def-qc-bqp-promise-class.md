---
id: def-qc-bqp-promise-class
kind: definition
title: "BQP for promise problems in the fixed QC14 model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-promise-problem
  - def-qc-uniform-circuit-family
  - def-qc-quantum-acceptance-probability
  - thm-qc-output-acceptance-law-normalizes
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections IV.1–IV.2"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

A promise problem $\Pi=(Y,N)$ belongs to **BQP in the QC14 model** when there exist a full-list uniform family $(C_n)$ and a polynomial-time acceptance predicate $A_n$ as in [[def-qc-uniform-circuit-family]] and [[def-qc-quantum-acceptance-probability]] such that, for every $x\in Y$,
$$p_{C_{|x|}}(x)\ge\frac23,$$
and for every $x\in N$,
$$p_{C_{|x|}}(x)\le\frac13.$$
By [[thm-qc-output-acceptance-law-normalizes]], $p_{C_n}(x)$ is the probability of the specified acceptance event and lies in $[0,1]$. No condition is imposed for $x\notin Y\cup N$ ([[def-promise-problem]]). The gate alphabet is exactly $H,T,T^\dagger,\mathrm{CNOT}$; its matrix entries lie in $\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2)$ as specified by [[def-qc-uniform-circuit-family]]. This definition does not assert a BQP-versus-classical separation, nor does it assert an unproved equivalence with another circuit-uniformity convention.
