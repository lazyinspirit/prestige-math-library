---
id: lem-qc-equal-syndrome-errors-differ-by-a-codeword
kind: lemma
title: Equal classical syndromes imply a codeword difference
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: [def-qc-classical-error-syndrome, def-qc-hamming-weight-distance-and-linear-code-distance, thm-qc-generator-and-parity-check-matrix-existence]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $e,f\in F^n$ and let $H$ be a parity-check matrix of $C$. If $He=Hf$, then $e-f\in C$. If also $\operatorname{wt}(e),\operatorname{wt}(f)\le t$ and $2t<d(C)$, then $e=f$.

## Facts & Assumptions

**Given:** A code $C\le F^n$ with distance parameter $d(C)$, a parity-check matrix $H$, errors $e,f\in F^n$, and a nonnegative integer $t$ with $2t<d(C)$.

[L1] [[def-qc-classical-error-syndrome]]: The syndrome of a vector $u$ is $Hu$.

[L2] [[def-qc-classical-error-syndrome]]: Its hypothesis makes $H$ a parity-check matrix of $C$; the matrix convention in that definition's prerequisites is $\ker H=C$.

[L3] [[def-qc-hamming-weight-distance-and-linear-code-distance]]: The weight counts nonzero coordinates, and every nonzero codeword has weight at least $d(C)$; the zero code has $d(C)=n+1$.

## Proof


1.1 If $He=Hf$, linearity gives $H(e-f)=0$. By [L1] and [L2], $e-f\in\ker H=C$. This uses subtraction in $F^n$; in characteristic two it equals addition. [L1, L2, given, algebra]

2.1 The support of $e-f$ is contained in the union of the supports of $e$ and $f$, so $\operatorname{wt}(e-f)\le\operatorname{wt}(e)+\operatorname{wt}(f)\le2t<d(C)$. If $e-f\ne0$, [L3] contradicts that it is a codeword; for the zero code, its only codeword is already zero. Thus $e-f=0$ and $e=f$. [L3, step 1.1, given, algebra] ∎

