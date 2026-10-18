---
id: alg-it-finite-data-lloyd-quantizer
kind: algorithm
title: Exact finite-data Lloyd quantizer
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-finite-squared-error-quantizer
  - lem-it-nearest-center-quantizer-is-borel-and-finite-distortion
  - lem-it-weighted-centroid-squared-error-identity
justified_by: []
aliases: []
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2.3, printed pp. 66–68, alternating nearest-region and conditional-mean updates and local-optimum caveat.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §II, printed pp. 2328–2330, Lloyd Method I as alternating partition and centroid updates.
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–119, nearest-neighbor regions and centroid reproduction.
---

## Definition

Input: integers $N,d,k\ge1$, indexed data $x_1,\ldots,x_N\in\mathbb R^d$, exact positive weights $w_i$ with $\sum_iw_i=1$, and an ordered initial center tuple $c^0=(c_1^0,\ldots,c_k^0)\in(\mathbb R^d)^k$. At each pass $t$:

1. Assign index $i$ to the least $j\in\{1,\ldots,k\}$ minimizing $\|x_i-c_j^t\|_2^2$. Let $S_j^t$ be the indices assigned to $j$.
2. If $S_j^t\ne\varnothing$, set $c_j^{t+1}:=(\sum_{i\in S_j^t}w_ix_i)/(\sum_{i\in S_j^t}w_i)$. If $S_j^t=\varnothing$, set $c_j^{t+1}:=c_j^t$.
3. If $c^{t+1}=c^t$ coordinatewise, return $c^t$ and the assignments from this pass. Otherwise begin the next pass with $c^{t+1}$.

All distance comparisons and arithmetic are exact. Rational input coordinates, weights and initial centers give a rational implementation using exact rational operations. For arbitrary real data this is an exact-real operation model; no bit-complexity claim is part of the procedure.
