---
id: def-qa-32-zqp-promise-class
kind: definition
title: ZQP on promise problems with bounded failure
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

In this page, $\mathrm{ZQP}$ denotes the following bounded-failure zero-error promise class. A promise problem $\Pi=(Y,N)$ belongs to $\mathrm{ZQP}$ if there are a full-list uniform QC14 family $(C_n)$, a polynomial-time total label decoder $D_n(x,z)\in\{\mathrm{YES},\mathrm{NO},?\}$, and the finite output law of [[def-qc-promise-computation-model]], [[def-qc-uniform-circuit-family]], and [[def-qc-quantum-acceptance-probability]], such that for every $x\in Y$ the probability of $\mathrm{YES}$ is at least $2/3$ and the probability of $\mathrm{NO}$ is zero, while for every $x\in N$ the probability of $\mathrm{NO}$ is at least $2/3$ and the probability of $\mathrm{YES}$ is zero. All output strings receive one of the three labels, so the remaining probability is the allowed failure label $?$; the output law is normalized by [[thm-qc-output-acceptance-law-normalizes]]. No promise condition is imposed off $Y\cup N$.

This explicit fixed-circuit, bounded-failure convention is sufficient for the containments proved on this page. No equivalence with an expected-time quantum zero-error model or with $\mathrm{BQP}\cap\mathrm{coBQP}$ is asserted.
