---
id: def-qc-classical-error-syndrome
kind: definition
title: Syndrome of a received word over a finite field
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: [def-qc-generator-and-parity-check-matrices, thm-qc-generator-and-parity-check-matrix-existence]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Let $C\le F^n$ have parity-check matrix $H\in M_{(n-k)\times n}(F)$. The **syndrome map** is $s:F^n\to F^{n-k}$, $s(r):=Hr$, defined on every received word $r$. If $r=c+e$ with transmitted codeword $c\in C$ and error vector $e\in F^n$, its syndrome is the vector $s(r)$. The identity $s(r)=He$ is proved in [[lem-qc-classical-syndrome-is-error-only]]. A syndrome is not itself a decoded error; a decoding rule is additional data.
