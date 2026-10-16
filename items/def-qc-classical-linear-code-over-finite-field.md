---
id: def-qc-classical-linear-code-over-finite-field
kind: definition
title: Classical linear code over a finite field
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: [cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension, def-dimension, def-finite-field-and-its-order, def-linear-subspace, def-vector-space, lem-standard-basis-of-f-n, thm-dimension-of-a-linear-subspace, thm-qc-full-column-rank-matrix-image-has-dimension]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Let $F$ be a finite field of order $q$, let $n\ge1$, and let $C\le F^n$ be a linear subspace ([[def-finite-field-and-its-order]], [[def-vector-space]], [[def-linear-subspace]]). Put $k:=\dim_F C$; since $F^n$ has dimension $n$, $0\le k\le n$ ([[lem-standard-basis-of-f-n]], [[thm-dimension-of-a-linear-subspace]]). A **classical linear code over $F$** with a specified encoding is the data $(F,n,C,\operatorname{Enc})$, where $\operatorname{Enc}:F^k\to C$ is a linear isomorphism. Such an isomorphism exists because $\dim_F F^k=k$ and finite-dimensional vector spaces of equal dimension are isomorphic ([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]). The field is part of the data: notation $F_q$ does not identify the field with $\mathbb Z/q\mathbb Z$; that quotient is a field only when $q$ is prime.

If $C=\{0\}$, then $k=0$, $F^0=\{0\}$, and the encoding is the unique map between these zero spaces. If an encoding is represented by a full-column-rank matrix $G\in M_{n\times k}(F)$, its image has dimension $k$ by [[thm-qc-full-column-rank-matrix-image-has-dimension]].

## Remarks

The code is the linear subspace together with a declared message encoding. No field existence or uniqueness theorem is repeated here.
