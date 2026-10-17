---
id: thm-strong-rrqr-swap-rule-terminates
kind: theorem
title: "The strong RRQR swap rule terminates after finitely many swaps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-strong-rank-revealing-qr-with-finite-swaps, lem-strong-rrqr-column-swap-volume-ratio]
dependency_level: 2
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, §§3–4"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Lecture Notes on Matrix Computations, Remark 3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

For a full-column-rank $A\in\mathbb F^{m\times n}$, $m\ge n$, $0\le k<n$, and $f\ge1$, run the exact-arithmetic version of [[alg-strong-rank-revealing-qr-with-finite-swaps]]. For $k=0$ the algorithm returns `success` without swaps. For $1\le k<n$, every accepted swap strictly increases the volume of the selected $k$ columns. Therefore the procedure makes at most $\binom nk-1$ swaps and returns `success` if its cap is at least that number. On exact-arithmetic success with $k\ge1$, every score is at most $f$ and hence $\max_{i,j}|(R_{11}^{-1}R_{12})_{ij}|\le f$. If a smaller cap is reached while a violation remains, it returns `swap-budget-exhausted`; a smaller cap can still suffice when the criterion is met earlier.

## Facts & Assumptions

**Given:** A full-column-rank matrix, target $k$, factor $f\ge1$, and the finite-swap procedure.

[F1] [[alg-strong-rank-revealing-qr-with-finite-swaps]] swaps only when the chosen score exceeds $f$ and returns success only when no score exceeds $f$.

[F2] [[lem-strong-rrqr-column-swap-volume-ratio]]: swapping the chosen columns multiplies selected volume by that score.

## Proof

1.1 If $k=0$, the algorithm's first branch returns `success` without a swap. Assume $1\le k<n$. Every accepted swap has score strictly greater than $f\ge1$. By [F2] it multiplies the selected volume by a factor strictly greater than one. Thus the selected volume strictly increases at each swap, so no selected subset can recur because its volume is determined by the fixed input matrix and subset. [F1, F2, algebra]

2.1 For $1\le k<n$, there are exactly $\binom nk$ possible selected $k$-column subsets. The initial subset has positive volume by full column rank, and by step 1.1 no subset can recur after a strict increase. If $\binom nk-1$ swaps have occurred, all $\binom nk$ subsets have therefore been visited; a remaining violation would prescribe another swap to an already visited subset, contradicting step 1.1. Thus a cap at least $\binom nk-1$ cannot be reached with a violation remaining, and the algorithm returns success. [step 1.1, F1, algebra]

3.1 For $k=0$ the coefficient assertion is vacuous. For $1\le k<n$, success gives $s_{ij}\le f$ for all pairs. Since $|X_{ij}|\le s_{ij}$ by the score definition, $\max_{i,j}|X_{ij}|\le f$. If a smaller cap is reached while a violation remains, the algorithm returns `swap-budget-exhausted`; if no violation remains first, it returns success. [F1, algebra] ∎
