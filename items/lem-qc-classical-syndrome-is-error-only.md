---
id: lem-qc-classical-syndrome-is-error-only
kind: lemma
title: A received-word syndrome depends only on the error vector
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: [def-qc-classical-error-syndrome, thm-qc-generator-and-parity-check-matrix-existence]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

For a codeword $c\in C$, an error $e\in F^n$, and received word $r=c+e$, the syndrome satisfies $s(r)=He$.

## Facts & Assumptions

**Given:** A codeword $c\in C$, error vector $e\in F^n$, received word $r=c+e$, and a parity-check matrix $H$ for $C$.

[L1] [[def-qc-classical-error-syndrome]]: The syndrome map is $s(r)=Hr$ for each received word $r$.

[L2] [[def-qc-classical-error-syndrome]]: Its hypothesis makes $H$ a parity-check matrix of $C$; the matrix convention in that definition's prerequisites is $\ker H=C$, hence $Hc=0$ for every codeword.

## Proof

1.1 By [L1] and the linearity of matrix multiplication, $s(r)=H(c+e)=Hc+He$. [L1, given, algebra]

2.1 Since $c\in C=\ker H$ by [L2], $Hc=0$, so step 1.1 gives $s(r)=He$. The value depends on $e$ and not on which codeword was transmitted. [L2, step 1.1] ∎
