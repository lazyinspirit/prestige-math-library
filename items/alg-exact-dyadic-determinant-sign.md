---
id: alg-exact-dyadic-determinant-sign
kind: algorithm
title: Exact dyadic determinant sign by integer clearance
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 2
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-certified-geometric-predicate-determinants, lem-dyadic-determinant-integer-clearance-preserves-sign]
justified_by: [lem-exact-dyadic-determinant-sign-correct-and-terminates]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Definition

Input: a finite $s\times s$ matrix $M$ of exact dyadic rationals with $s\ge1$. Output: the
sign of its exact determinant, including zero.

1. In row $i$, write each nonzero entry in reduced form
   $M_{ij}=a_{ij}/2^{b_{ij}}$ in reduced form with $b_{ij}\ge0$ and
   $a_{ij}$ odd when $b_{ij}>0$; write a zero entry with $b_{ij}=0$. Set
   $k_i=\max_j b_{ij}$ and form
   $N_{ij}=2^{k_i}M_{ij}$, an integer matrix.
2. Compute $\sum_{\pi\in S_s}\operatorname{sgn}(\pi)\prod_iN_{i,\pi(i)}$
   using arbitrary-precision integer arithmetic.
3. Return the sign of this integer sum.


