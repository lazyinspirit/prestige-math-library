---
id: alg-strong-rank-revealing-qr-with-finite-swaps
kind: algorithm
title: "Strong rank-revealing QR with finite swaps and explicit statuses"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations, thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]
dependency_level: 0
verification:
  precheck: n/a
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, §§3–4"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Lecture Notes on Matrix Computations, Remark 3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Definition

Input a real or complex matrix $A\in\mathbb F^{m\times n}$ with $m\ge n$, a target $k$ with $0\le k<n$, a factor $f\ge1$, and a finite swap cap $S\in\mathbb N\cup\{0\}$. The exact-arithmetic version is specified below. A finite-precision implementation uses the same branches, tests finiteness after each operation, and returns `range-failure` if a required quantity is nonfinite.

1. If $A$ is not full column rank, return `rank-deficient-input`. Otherwise initialize a column permutation $\Pi$ and the full column-pivoted QR factorization $A\Pi=QR$, where $Q\in\mathbb F^{m\times m}$ is unitary and $R\in\mathbb F^{m\times n}$ is upper trapezoidal, using the greedy residual-norm pivot convention. Partition $R=\begin{bmatrix}R_{11}&R_{12}\\0&R_{22}\end{bmatrix}$ after the first $k$ rows and columns. Do not return the reduced QR form. The selected first $k$ columns then have a nonsingular leading block. For $k=0$, return this full factorization with `success`.
2. For $k>0$, refactor the current fixed column order in the full QR form, without further pivoting whenever needed, using unitary Householder or Givens transformations. If the selected leading block is singular, return `singular-selected-block`.
3. Form $X=R_{11}^{-1}R_{12}$. For $1\le i\le k$ let $\omega_i=\|e_i^*R_{11}^{-1}\|_2$; for $1\le j\le n-k$ let $\gamma_j=\|R_{22}(:,j)\|_2$. Define the swap score $s_{ij}=\bigl(|X_{ij}|^2+(\omega_i\gamma_j)^2\bigr)^{1/2}$.
4. If $\max_{i,j}|X_{ij}|>f$, choose the lexicographically first pair attaining the largest $|X_{ij}|$. Otherwise, if $\max_{i,j}s_{ij}>f$, choose the lexicographically first pair attaining the largest score. If neither inequality holds, return `success` and the factors, permutation, $X$, and maximum score. The first branch retains the usual coefficient-triggered swap; the second controls the trailing residual needed for the strong spectral comparison.
5. When a violating pair was chosen, if the swap count is already $S$, return `swap-budget-exhausted` with the current partial factors. Otherwise interchange the chosen selected and trailing columns, restore triangular form with Givens rotations, increment the swap count, and return to step 2. Thus a cap $S\ge\binom nk-1$ is sufficient in exact arithmetic whenever the input is full column rank.

The statuses are `success`, `rank-deficient-input`, `singular-selected-block`, `swap-budget-exhausted`, and `range-failure`. In particular, ordinary column-pivoted QR is only the initialization: the procedure does not assert that its output alone satisfies the strong bounds. Both exact and finite-precision outputs use the full factor shape; the singular-value comparison theorem applies to exact-arithmetic success only.
