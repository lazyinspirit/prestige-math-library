---
id: alg-integer-smith-normal-form
kind: algorithm
title: Exact Smith normal form of an integer matrix with transformations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 0
deps: [def-euclidean-domain, thm-euclidean-algorithm, thm-division-algorithm-in-z]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Proposition 2.1.5"
      url: "https://wstein.org/books/ant/ant.pdf"
verification:
  precheck: n/a
---

## Definition

Input any $r\times m$ integer matrix $A$, including zero matrices and zero dimensions. Initialize $U=I_r$ and $Q=I_m$. Apply the following row and column operations to the active matrix while applying the same operations to $U$ on the left and $Q$ on the right.

1. If the active block is zero, leave its remaining diagonal entries zero and stop that block. Otherwise move a nonzero entry of smallest absolute value to its upper-left position, make it positive, and use integer division to clear the rest of its first column and first row. Whenever a nonzero remainder appears, move that remainder to the pivot and repeat; the positive pivot strictly decreases at each such restart.

2. Once the first row and column are clear, test whether the pivot divides every entry of the lower-right block. If not, add a column containing a nondivisible entry to the pivot column and repeat the division-clearing cycle. The new Euclidean remainder is strictly smaller than the current positive pivot.

3. When the pivot divides the lower-right block, fix it as the first diagonal entry and recurse on that block. Return the diagonal matrix $D=UAQ$, with positive nonzero diagonal entries in divisibility order and all remaining entries zero. If $A=0$, return $D=0$ and the identity transformations.

## Definition references

[Stein, Proposition 2.1.5](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** An integer matrix $A$ of any finite dimensions.

[F1] Euclidean division and the terminating Euclidean remainder algorithm are available for integers ([[thm-division-algorithm-in-z]], [[thm-euclidean-algorithm]]).

[F2] A Euclidean domain is an integral domain with a Euclidean function and division with strictly decreasing remainder ([[def-euclidean-domain]]).

## Verification



1.1 Every row or column addition, swap, and sign change is invertible over $\mathbb Z$; the tracked matrices $U,Q$ multiply by those same elementary matrices, preserving $D=UAQ$ at every operation. [F1, given, algebra]

2.1 A nonzero Euclidean remainder moved to the pivot is a strictly smaller positive integer than the prior pivot. The Euclidean loop therefore terminates; once a pivot divides the remaining block, recursion removes one row and one column, so the finite matrix process terminates unless it reaches an all-zero block, which stops immediately. [F2, given, algebra] ∎

