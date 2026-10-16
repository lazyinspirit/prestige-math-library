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

Input is a finite word of H,T,T†,CNOT gates with ordered wire labels. Fix the rule list H²→I, T⁸→I, TT†→I, T†T→I, and CNOT²→I, only when the adjacent gates have the same ordered support. Scan left-to-right, choose the first match, replace it, restart the scan, and halt when no rule matches. Empty words are permitted. The algorithm returns a word locally irreducible for this displayed rule set; it makes no global-minimum claim.

The gate labels use the exact matrices and ordered supports fixed by [[def-qc-clifford-t-gate-library]].
