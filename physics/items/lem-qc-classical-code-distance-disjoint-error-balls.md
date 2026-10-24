---
id: lem-qc-classical-code-distance-disjoint-error-balls
kind: lemma
title: Hamming balls below half the code distance are disjoint
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-hamming-weight-distance-and-linear-code-distance, thm-qc-hamming-distance-is-a-metric-and-code-distance]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $C\le F^n$ have distance parameter $d=d(C)$ and put $t=\lfloor(d-1)/2\rfloor$. For distinct codewords $c,c'\in C$, the closed Hamming balls $B_t(c):=\{r:d_H(r,c)\le t\}$ and $B_t(c')$ are disjoint.

## Facts & Assumptions

**Given:** A finite-field linear code $C\le F^n$, its distance parameter $d(C)$, and $t=\lfloor(d(C)-1)/2\rfloor$.

[L1] [[def-qc-hamming-weight-distance-and-linear-code-distance]]: $d(C)$ is the minimum distance between distinct codewords for nonzero $C$ and is $n+1$ for $C=\{0\}$.

[L2] [[thm-qc-hamming-distance-is-a-metric-and-code-distance]]: Hamming distance is a metric and its minimum over distinct codeword pairs is $d(C)$ when such pairs exist.

## Proof


1.1 The defining floor gives $2t\le d-1<d$. [L1, given, algebra]

2.1 If $r$ belonged to both balls, [L2] and the triangle inequality would give $d_H(c,c')\le d_H(c,r)+d_H(r,c')\le2t<d$, contradicting the minimum-distance property [L2]. Thus the balls are disjoint. If $C=\{0\}$ there are no distinct codewords, so the conclusion is vacuous. [L1, L2, step 1.1] ∎

