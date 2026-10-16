---
id: lem-qc-planar-mw-recovery-failure-yields-half-error-path
kind: lemma
title: "Minimum-Weight Recovery Failure Yields a Half-Error Crossing Path"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-square-planar-surface-code
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-stabilizer-syndrome-and-logical-operators
  - thm-qc-square-planar-surface-code-distance-and-path-count
dependency_level: 18
proof_strategy: direct
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

For an integer $d\ge2$, use the relative $d\times d$ square patch with $n=2d^2$ data edges. Let $E$ be a set of actual $Z$-error edges and let $R$ be any minimum-cardinality correction satisfying $\partial_1R=\partial_1E$ (the same perfect syndrome). Recovery fails logically when $E\triangle R\notin\operatorname{im}\partial_2$. In that case $E\triangle R$ contains a self-avoiding primal path $P$ joining the left and right rough boundaries. Writing $\ell=|P|$, one has $d\le\ell\le n$ and $|P\cap E|\ge\lceil\ell/2\rceil$.

## Facts & Assumptions


**Given:** An integer $d\ge2$, the relative square patch, a finite actual $Z$-error chain $E$, its perfectly measured syndrome, and any correction chain $R$ of minimum cardinality among chains with that syndrome. Prove the crossing-path witness on logical failure.

[F1] [[def-qc-square-planar-surface-code]]: The X-check matrix is $H_X=\partial_1$, with rows indexed by vertices outside $R$ and columns by physical edges.

[F2] [[def-qc-stabilizer-syndrome-and-logical-operators]]: For a phase-aware Pauli error $E$, the syndrome convention is $E g_j=(-1)^{s_j(E)}g_jE$.

[F3] [[thm-qc-pauli-algebra]]: Distinct Pauli matrices anticommute.

[F4] [[thm-qc-square-planar-surface-code-distance-and-path-count]]: Every nontrivial Z logical class contains a rough-to-rough path of length at least $d$, and a straight row attains $d$.

## Proof

1.1 For a $Z$-error chain $E$, its commutation sign with the $X$ check at nonrough vertex $u$ is $(-1)^{(\partial_1 E)_u}$: the exponent is the parity of incident error edges by [F1], and every overlapping $Z$ and $X$ factor anticommutes by [F3]. Thus the X-check component of the syndrome is $\partial_1 E$ by [F2]; every Z-check component is zero because Z-type Paulis commute. Equality of the perfect syndromes of $E$ and $R$ therefore gives $\partial_1(E\triangle R)=0$. [given, F1, F2, F3, algebra]

2.1 Put $C=E\triangle R$. Logical failure means that $C$ is a nontrivial $Z$-logical class. By [F4], it contains a rough-to-rough path of length at least $d$. If that path repeats a vertex, delete the closed subpath between two occurrences; finitely many such deletions produce a self-avoiding path $P$ whose edges remain in $C$ and whose endpoints remain on the left and right rough boundaries. It crosses every one of the $d$ vertical cuts, so $\ell:=|P|\ge d$, and self-avoidance bounds $\ell\le n$. [given, F1, F4, step 1.1, algebra]

3.1 The path $P$ has zero relative boundary because its internal vertices have even degree and its two endpoints are omitted rough vertices. Hence $R\triangle P$ has the same syndrome as $R$. Minimum cardinality gives $|R|\le|R\triangle P|$. Since $P\subseteq E\triangle R$, each edge of $P$ belongs to exactly one of $E$ and $R$; comparing the two cardinalities and canceling the edges outside $P$ yields $|R\cap P|\le|P\setminus R|=|E\cap P|$. These counts sum to $\ell$, so $|E\cap P|\ge\lceil\ell/2\rceil$. [given, F1, step 2.1, algebra] ∎

