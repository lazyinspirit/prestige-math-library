---
id: alg-qc-basic-clifford-t-rewrite
kind: algorithm
title: "Basic Clifford T Rewrite"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-clifford-t-gate-library
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Barenco et al., Elementary gates for quantum computation"
      url: https://arxiv.org/pdf/quant-ph/9503016
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Definition

Input is a finite word of H,T,T†,CNOT gates with ordered wire labels. Fix the rules H²→ε, T⁸→ε, TT†→ε, T†T→ε, and CNOT²→ε, where ε means the empty subword; apply the cancellation rules only when the adjacent gates have the same ordered support. Scan left-to-right, choose the first match, delete the matched subword, restart the scan, and halt when no rule matches. Empty words are permitted. The output remains a word over the input gate alphabet and is locally irreducible for this displayed rule set; it makes no global-minimum claim.

The gate labels use the exact matrices and ordered supports fixed by [[def-qc-clifford-t-gate-library]].
