---
id: alg-it-exhaustive-global-empirical-quantizer
kind: algorithm
title: Exhaustive global empirical squared-error quantizer
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
axiom_use: No choice principle is used; the search is over a finite ordered set.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §5.2, printed pp. 117–119, finite codebooks, partitions and empirical distortion structure.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2, printed pp. 65–68, fixed finite codebooks, nearest assignments and centroid minimization.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §III, printed pp. 2341–2343, finite encoder partitions and centroid reconstruction.
---

## Definition

Input: integers $N,d,k\ge1$, indexed data $x_1,\ldots,x_N\in\mathbb R^d$, and exact positive weights $w_i$ with $\sum_iw_i=1$. Enumerate all assignments $a=(a_1,\ldots,a_N)\in\{1,\ldots,k\}^N$ in lexicographic order. For each assignment, let $S_j(a)=\{i:a_i=j\}$. For a nonempty $S_j(a)$ set

$$c_j(a):=\frac{\sum_{i\in S_j(a)}w_ix_i}{\sum_{i\in S_j(a)}w_i};$$

for an empty $S_j(a)$ set $c_j(a):=x_1$. Compute the exact assigned cost $L(a):=\sum_iw_i\|x_i-c_{a_i}(a)\|_2^2$. Retain the first assignment with minimal cost and its center tuple. Return that tuple together with the least-index nearest-center assignment for it. The finite enumeration, tie rule and empty-cluster convention are part of the algorithm.
