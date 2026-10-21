---
id: thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties
kind: theorem
title: "Enumeration up to a crossing bound procedure properties"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-enumerate-diagrams-up-to-crossing-bound
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), sections 1 and 7"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1, web text lines 92–105 (finite diagram inputs); §7 Triangulations, lines 758–854 (polygonal realization of a diagram)"
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
---

## Statement

For every nonnegative integer $N$, the bounded enumeration procedure
terminates and returns exactly the reconstructed candidates represented by
normalized connected one-component planar-diagram codes with at most $N$
crossings. Each returned candidate has a valid spherical face structure and a
selected outer face. The procedure does not identify candidates that represent
the same knot type.

## Statement references

[[alg-enumerate-diagrams-up-to-crossing-bound]] — finite sign, pairing, and face-selection loops.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — exact validation and reconstruction of each candidate.

[Hass–Lagarias–Pippenger, §§1, 7](https://arxiv.org/pdf/math/9807016) — finite code input and reconstructed diagram candidates.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — rotation systems and outer-face choices.

## Facts & Assumptions

**Given:** A nonnegative integer $N$ and the finite enumeration procedure on normalized planar-diagram codes.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: a normalized code with $c>0$ has crossing set $\{1,\ldots,c\}$, four ordered darts at each crossing, sign-determined incoming/outgoing positions, a canonical edge labeling, and one selected face.

[F2] [[alg-enumerate-diagrams-up-to-crossing-bound]]: for each $c=1,\ldots,N$, the procedure enumerates every sign vector, every bijection from outgoing to incoming darts, and every face cycle as outer face, then retains exactly valid codes with one component.

[F3] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: the validator terminates and returns a diagram exactly for codes satisfying the prescribed format, incidence, crossing, component, connectedness, Euler face-count, and outer-face conditions.

[F4] [[def-planar-diagram-gauss-and-dowker-codes]]: the $c=0$ normalized crossingless code has one of two orientation markers, `ccw` or `cw`, for its one component.

## Proof

1.1 Fix $c\ge1$. There are $2^c$ crossing-sign vectors. Each vector has exactly $2c$ outgoing and $2c$ incoming darts by [F1], so it has $(2c)!$ bijections between them. Every resulting edge involution has $4c$ darts, hence at most $4c$ face cycles because its cycles are nonempty and disjoint. The number of candidate records considered at this $c$ is therefore at most $2^c(2c)!(4c)$. At $c=0$ the two orientation markers in [F4] give exactly two crossingless codes. Summing these finite bounds over $0\le c\le N$ proves that all loops and validator calls are finite; each validator call terminates by [F3]. [given, F1, F2, F3, F4, algebra]

2.1 Every appended record is produced from a normalized code in the finite loops. It is appended only when the validator returns `Valid` and its component tracing has exactly one cycle. By [F3] this code is connected, has the required face count and outer face, and reconstructs the corresponding decorated diagram. Conversely, consider any normalized connected one-component code with $c\le N$. Its signs occur in the enumerated sign-vector list. Its edge involution pairs each outgoing dart with one incoming dart, so it is one of the enumerated bijections; its selected outer face is one of the enumerated face cycles. Canonical edge labels in [F1] then give exactly that normalized code. The validator returns `Valid` by [F3], and its one component passes the final filter, so the candidate is appended. At $c=0$, each of the two orientation markers in [F4] is among the initial candidates. [given, F1, F2, F3, F4, step 1.1]

3.1 The procedure's only equivalence-related operation is the fixed label normalization in [F1]. It performs no test between two returned diagrams and removes no candidates on the basis of planar isotopy or ambient isotopy in $S^3$. Thus the exact output is the finite list of reconstructed code candidates, with possible repeated knot types, not a classification of knot types. [given, F1, F2, step 2.1] ∎
