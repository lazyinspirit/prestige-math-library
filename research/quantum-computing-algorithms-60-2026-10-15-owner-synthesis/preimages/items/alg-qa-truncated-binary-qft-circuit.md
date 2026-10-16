---
id: alg-qa-truncated-binary-qft-circuit
kind: algorithm
title: Truncated binary QFT
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: [alg-qa-exact-binary-qft-circuit, def-qa-qft-gate-cost-model, def-qc-circuit-denotational-semantics]
axiom_use: "No choice axiom is used; the truncated list is a finite deletion from the exact list."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Input: an $n$-qubit ordered register as in [[alg-qa-exact-binary-qft-circuit]] and an integer cutoff $m\ge1$.

Output: run the exact binary QFT circuit except omit every controlled phase $\mathrm{CP}_s$ with denominator index $s>m$. Retain every Hadamard and every final reversal SWAP. The resulting gate list is finite and unitary for every $n\ge0,m\ge1$ under [[def-qc-circuit-denotational-semantics]]. If $m\ge n$, no controlled phase is omitted and the circuit is exactly the full circuit. The ideal gate-count convention is [[def-qa-qft-gate-cost-model]]. The assigned semantics supplier body is absent, so its denotational interpretation remains an unresolved supplier check.
