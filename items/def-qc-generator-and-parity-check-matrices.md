---
id: def-qc-generator-and-parity-check-matrices
kind: definition
title: Generator and parity-check matrices over a finite field
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-matrix-product-and-identity-matrix, def-matrix-space, def-qc-classical-linear-code-over-finite-field, def-qc-dual-of-a-finite-field-linear-code, def-row-space-column-space-nullspace-and-matrix-ranks, thm-qc-dual-code-dimension-and-double-dual]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.2
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Let $C\le F^n$ have dimension $k$. A **generator matrix** for $C$ is a matrix $G\in M_{n\times k}(F)$ with linearly independent columns and column space $C$. A **parity-check matrix** for $C$ is a matrix $H\in M_{(n-k)\times n}(F)$ with linearly independent rows and nullspace $C$. With column-vector conventions, $G:F^k\to F^n$ and $H:F^n\to F^{n-k}$; the product $HG$ is defined and is the zero matrix. Existence for every code, the identity $HG=0$, and the boundary shapes are proved in [[thm-qc-generator-and-parity-check-matrix-existence]].

The row vectors of $H$, identified with their coordinate columns by transpose and the bilinear dot product, span $C^\perp$. No Hermitian conjugation is used. The matrices have shapes $n\times k$ and $(n-k)\times n$, including $n\times0$ and $0\times n$ matrices.
