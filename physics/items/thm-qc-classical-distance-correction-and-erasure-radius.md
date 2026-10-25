---
id: thm-qc-classical-distance-correction-and-erasure-radius
kind: theorem
title: Classical distance gives error detection, unique decoding, and erasure recovery
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-qc-classical-error-syndrome, def-qc-classical-linear-code-over-finite-field, def-qc-hamming-weight-distance-and-linear-code-distance, lem-qc-classical-code-distance-disjoint-error-balls, lem-qc-classical-syndrome-is-error-only, lem-qc-equal-syndrome-errors-differ-by-a-codeword, thm-qc-generator-and-parity-check-matrix-existence]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §§37.1–37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $C\le F^n$ have distance parameter $d=d(C)$ and let $t=\lfloor(d-1)/2\rfloor$. Then:

1. Every nonzero error $e$ of weight less than $d$ is detected by a parity-check matrix: $He\ne0$.
2. If $r=c+e$ for $c\in C$ and $\operatorname{wt}(e)\le t$, then $c$ is the unique codeword $c'\in C$ with $\operatorname{wt}(r-c')\le t$; moreover distinct errors of weight at most $t$ have distinct syndromes.
3. If the erased coordinate set $S\subseteq\{0,\ldots,n-1\}$ is known and $|S|<d$, at most one codeword agrees with the received word outside $S$.

These are detection, unique-decoding, and erasure-uniqueness guarantees. They do not assert an efficient decoder or a complexity bound.

## Facts & Assumptions

**Given:** A finite-field linear code $C\le F^n$ with distance $d(C)$, its parity-check matrix $H$, and $t=\lfloor(d(C)-1)/2\rfloor$.

[L1] [[def-qc-hamming-weight-distance-and-linear-code-distance]]: Every nonzero codeword has weight at least $d(C)$; for the zero code $d(C)=n+1$.

[L2] [[lem-qc-classical-code-distance-disjoint-error-balls]]: Hamming balls of radius $t$ around distinct codewords are disjoint.

[L3] [[def-qc-classical-error-syndrome]]: The syndrome map on a received word is $s(r)=Hr$.

[L4] [[lem-qc-classical-syndrome-is-error-only]]: If $r=c+e$ with $c\in C$, then $s(r)=He$.

[L5] [[lem-qc-equal-syndrome-errors-differ-by-a-codeword]]: Equal syndromes force errors to differ by a codeword; errors of weight at most $t$ with $2t<d(C)$ are equal.

[L6] [[def-qc-classical-error-syndrome]]: Its hypothesis makes $H$ a parity-check matrix of $C$; the matrix convention in that definition's prerequisites is $\ker H=C$.

## Proof


1.1 The floor formula gives $2t<d$. If $He=0$, [L6] gives $e\in C$; if $e\ne0$ and $\operatorname{wt}(e)<d$, [L1] is contradicted. Hence every such nonzero error is detected. [L1, L6, given, algebra]

1.2 The transmitted codeword $c$ lies in the radius-$t$ ball around $r$. Any other codeword $c'$ in that ball would put $r$ in two distinct radius-$t$ balls, contradicting [L2]; therefore $c$ is the unique such word. [L2, given]

1.3 If two errors $e,f$ of weight at most $t$ have the same syndrome, [L5] gives $e=f$. For a received word $r=c+e$, [L3] and [L4] identify the measured syndrome as $He$, so it uniquely identifies the error within that weight range. [L3, L4, L5, given]

2.1 If $c,c'\in C$ both agree with the received word outside the known set $S$, then $c-c'$ is supported in $S$, so $\operatorname{wt}(c-c')\le |S|<d$. If $c\ne c'$, this is a nonzero codeword contradicting [L1]. Thus at most one codeword is compatible. For $C=\{0\}$, the only candidate is already unique and $d=n+1$. [L1, given, algebra] ∎

## Remarks

The theorem is an information-theoretic uniqueness statement, not an algorithm or complexity claim. A decoder's representation of field elements, search procedure, termination proof, and cost would be separate algorithmic content.
