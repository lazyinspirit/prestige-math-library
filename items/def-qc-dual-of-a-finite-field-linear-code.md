---
id: def-qc-dual-of-a-finite-field-linear-code
kind: definition
title: Bilinear dual of a finite-field linear code
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: [def-linear-subspace, def-qc-classical-linear-code-over-finite-field]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.1
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

For $x,y\in F^n$, define the standard **bilinear dot product** $x\cdot y:=\sum_{j<n}x_jy_j$. For any linear subspace $C\le F^n$ ([[def-linear-subspace]])—in particular, the codeword subspace of a classical linear code as in [[def-qc-classical-linear-code-over-finite-field]]—its **dual code** is

$$C^\perp:=\{y\in F^n: x\cdot y=0\text{ for every }x\in C\}.$$

This is a bilinear pairing over $F$; it is not a positive-definite or Hermitian inner product. The proof that $C^\perp$ is a linear subspace, has dimension $n-k$, and satisfies $(C^\perp)^\perp=C$ is [[thm-qc-dual-code-dimension-and-double-dual]].
