---
id: thm-rational-polynomial-root-isolation-is-sound-and-finite
kind: theorem
title: Exact Sturm bisection isolates every distinct real rational-polynomial root
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-rational-polynomial-root-isolation
  - lem-polynomial-squarefree-decomposition-and-multiplicity
  - thm-sturm-sign-variation-counts-distinct-roots
  - lem-squarefree-integer-polynomial-root-separation-bound
  - lem-geometric-sequence-null
verification:
  precheck: pass
sources:
  references:
    - title: "Marc Moreno Maza, Tutorial on real root isolation of polynomial systems, Root estimation and Sturm root counting"
      url: "https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf"
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
---

## Statement

For every nonzero $p\in\mathbb Q[x]$, the algorithm [[alg-rational-polynomial-root-isolation]] terminates with status "complete". Each output singleton is an exact real root with its correct multiplicity; each output open dyadic interval contains exactly one distinct real root of $p$ in its interior and is labelled with that root's multiplicity. Every distinct real root occurs in exactly one output record. For $p=0$ the algorithm returns "identically zero", not a finite isolation list.

## Facts & Assumptions

**Given:** A nonzero rational polynomial, exact rational arithmetic, and the procedure in [[alg-rational-polynomial-root-isolation]].

[F1] The gcd decomposition gives pairwise coprime squarefree factors $Q_k$ whose roots are exactly the roots of multiplicity $k$ ([[lem-polynomial-squarefree-decomposition-and-multiplicity]]).

[F2] Sturm variation gives the exact number of distinct roots in an open interval with nonroot endpoints ([[thm-sturm-sign-variation-counts-distinct-roots]]).

[F3] Distinct roots of the initial squarefree primitive integer polynomial are separated by at least its positive rational bound $\sigma$ ([[lem-squarefree-integer-polynomial-root-separation-bound]]).

[F4] If $|r|<1$, then $r^n\to0$ ([[lem-geometric-sequence-null]]).

[F5] The algorithm's normalization, queue, bisection, endpoint-root removal, and output rules are those stated in its Definition ([[alg-rational-polynomial-root-isolation]]).

## Proof

1.1 Clearing denominators and dividing by the nonzero integer content preserves every root and its multiplicity. By [F1], the active squarefree product has exactly the distinct roots of $p$, and its factors assign each such root its unique multiplicity label. [given, F1, F5, algebra]

1.2 The coefficient-height bound in [F3] places every root of the initial squarefree polynomial strictly inside $(-B,B)$ because $B=H+2>H+1$. Thus the initial endpoints are nonroots. Bisection endpoints are midpoints tested exactly: a root midpoint is recorded and removed before its open halves are queued, while a nonroot midpoint leaves both endpoints nonroots for the active product. [F3, F5, algebra]

2.1 In each queued interval with nonroot endpoints, [F2] makes the computed variation difference exactly its number of active roots. A zero count safely discards the interval. A count of one gives an isolating interval; the Sturm counts of the pairwise coprime $Q_k$ identify exactly one factor and hence the multiplicity label. If a midpoint is a root, exact division by $x-m$ removes it from that factor and the singleton record carries its multiplicity; otherwise the two open halves partition the parent interval. [step 1.1, step 1.2, F1, F2, F5]

2.2 Whenever an interval has at least two distinct active roots, their separation [F3] forces its width to be at least $\sigma$. At bisection depth $n$ the width is $2B(1/2)^n$. Since $(1/2)^n\to0$ by [F4], some finite depth has width below $\sigma/4$; such an interval cannot still contain two roots, so each branch stops with count zero or one. The branching factor is at most two and the depth is bounded, so the entire queue tree is finite. For degree one, the initial Sturm count is already zero or one. [step 1.2, F3, F4, F5, algebra]

3.1 At each split, the roots in the parent are partitioned between the open children and, when the midpoint is a root, its exact singleton; a nonroot midpoint contributes no root. Every discarded interval is root-free, and every one-root interval is emitted once. The finite tree therefore accounts for every real root exactly once with the correct multiplicity. [step 1.1, step 2.1, step 2.2, F1, F5] ∎

