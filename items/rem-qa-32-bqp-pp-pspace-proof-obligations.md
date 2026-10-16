---
id: rem-qa-32-bqp-pp-pspace-proof-obligations
kind: remark
title: BQP to PP and PSPACE proof obligations in the exact QC14 basis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 14
deps:
  - def-qc-bqp-promise-class
  - def-qc-clifford-t-gate-library
  - def-sharpp-and-gap-p-functions
  - thm-pp-is-sign-testing-gap-p
  - def-polynomial-space-and-nondeterministic-polynomial-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Section III"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Sections 13.2–13.3"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Remarks

The established containments $\mathrm{BQP}\subseteq\mathrm{PP}$ and $\mathrm{BQP}\subseteq\mathrm{PSPACE}$ remain proof obligations for the exact QC14 gate alphabet $H,T,T^\dagger,\mathrm{CNOT}$, whose entries lie in $\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2)$ ([[def-qc-bqp-promise-class]], [[def-qc-clifford-t-gate-library]]). The PP route must encode amplitudes and acceptance weights over this number field, prove the required GapP closure, and compare against the strict $1/2$ threshold. The BQP thresholds $2/3$ and $1/3$ differ by $1/3$; each is at distance $1/6$ from $1/2$ (equivalently, $2p-1$ has margin at least $1/3$). A rational path count cannot simply replace the exact $\mathbb Q(\zeta_8)$ computation, since the probabilities can contain $\sqrt2$. The PSPACE route needs exact-field or certified-precision recursive evaluation with explicit bit-length and space bounds for each arithmetic and threshold step. The source containment arguments are context, not local proof suppliers; no containment item is claimed here.
