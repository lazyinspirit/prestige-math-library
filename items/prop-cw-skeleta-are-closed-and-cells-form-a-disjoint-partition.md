---
id: prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition
kind: proposition
title: CW skeleta are closed and cells form a disjoint partition
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Chapter 0
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For a CW complex $X$, every skeleton $X^n$ is closed, and $X^n\setminus X^{n-1}$ is the disjoint union of the open $n$-cells.

## Facts & Assumptions

**Given:** A CW complex and its skeleta as in [[def-skeleta-cw-subcomplex-and-relative-cw-complex]].

## Proof

**Proof technique:** direct.

1.1 Let $\chi_e:D^m\to X$ be the characteristic map of an $m$-cell.  If $m\le n$, then $\chi_e^{-1}(X^n)=D^m$.  If $m>n$, this inverse image lies in $S^{m-1}$ and equals the inverse image there of the already closed lower skeleton $X^n\subseteq X^{m-1}$; induction on $m$ makes it closed in $S^{m-1}$ and hence in $D^m$.  The weak-topology clause now makes $X^n$ closed in $X$. [given]

2.1 The open-cell interiors are disjoint by the cellular partition, and [[lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure]] identifies precisely the new interior points after $X^{n-1}$. This gives the asserted difference. [step 1.1] ∎
