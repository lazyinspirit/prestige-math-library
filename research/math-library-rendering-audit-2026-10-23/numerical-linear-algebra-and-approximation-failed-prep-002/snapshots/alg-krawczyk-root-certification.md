---
id: alg-krawczyk-root-certification
kind: algorithm
title: Finite-budget multidimensional Krawczyk root certification
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 5
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-real-boxes-and-interval-jacobian-enclosures
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - lem-real-interval-arithmetic-preserves-enclosure
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-rank-nullity
justified_by:
  - thm-krawczyk-inclusion-exclusion-and-uniqueness
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §13, Theorem 13.3 and Algorithm 13.4"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input $F:U\to\mathbb R^n$ of class $C^1$ on an open convex $U$, a nonempty initial real box $X_0\subset U$, interval evaluators whose returned $F(x_0)$ and $J(Y)$ enclose the exact values at each processed box $Y$, a dyadic point matrix $C$, a rational matrix $W$, an exactly represented rational minimum side width $\eta>0$, and a nonnegative integer box budget $B\ge0$. Check the inverse witness exactly by computing $WC$ and testing $WC=I$. If this test fails, return "inconclusive: preconditioner not certified nonsingular". For square matrices, a left inverse implies nonsingularity by rank-nullity ([[thm-rank-nullity]]).

Initialize a queue with $X_0$. Process at most $B$ boxes. For each box $Y$, take its coordinatewise midpoint $x_0$, evaluate a finite interval vector $F_0$ enclosing $F(x_0)$ and a finite interval Jacobian enclosure $J(Y)$, and compute
$$
K(Y)=x_0-CF_0+(I-CJ(Y))(Y-x_0)
$$
by outward real interval operations. If an evaluation or operation is non-finite, record that box as "unresolved" and continue with the remaining queue. If $K(Y)\cap Y=\varnothing$, record "root-free". If $K(Y)\subset\operatorname{int}Y$, compute $E=I-CJ(Y)$ and
$$
\bar q=\max_i\sum_j\max(|\inf E_{ij}|,|\sup E_{ij}|).
$$
Record "unique-root" if $\bar q<1$, and "existence-only" otherwise. In every other case, bisect a longest side at its midpoint and append the two closed halves if the maximum side width exceeds $\eta$; ties use the lowest coordinate index. If no side exceeds $\eta$, record "unresolved". When the budget is exhausted, record every remaining queued box as "unresolved". The overall status is "complete" only if every output box is root-free or unique-root; existence-only and unresolved outputs do not establish an all-roots result.

