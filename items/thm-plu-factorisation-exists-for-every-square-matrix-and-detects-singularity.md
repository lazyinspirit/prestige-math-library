---
id: thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity
kind: theorem
title: "Every real or complex square matrix admits a PLU factorisation, and the first failed pivot marks the singular boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-permutation-matrix-partial-pivoting-and-pivot-growth, def-normalised-lu-factorisation, thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors, def-invertible-matrix-and-general-linear-group]
aliases: []
proof_strategy: induction
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Statement

Let $\mathbb F=\mathbb R$ or $\mathbb C$, let $n\ge 1$, and let
$A\in M_n(\mathbb F)$.

1. There exist a permutation matrix $P$, a unit lower-triangular matrix $L$,
   and an upper-triangular matrix $U$ such that
   $$PA=LU.$$
2. If partial pivoting encounters a stage at which the whole active pivot column
   is zero, then the active trailing block is singular, hence $A$ is singular.
   Equivalently, if $A$ is invertible, partial pivoting finds a nonzero pivot at
   every stage.

## Facts & Assumptions

**Given:** A field $\mathbb F=\mathbb R$ or $\mathbb C$, a natural number $n\ge 1$, and a matrix $A\in M_n(\mathbb F)$.

[L1] Permutation matrices, partial pivoting, and pivot growth are defined as in [[def-permutation-matrix-partial-pivoting-and-pivot-growth]].

[L2] If unpivoted elimination on a matrix reaches an upper-triangular matrix without a zero pivot, the multipliers form the unit lower factor in the resulting normalised LU factorisation ([[thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors]]).

[L3] An invertible matrix has a two-sided inverse ([[def-invertible-matrix-and-general-linear-group]]).

## Proof

**Proof technique:** induction on the matrix size.

1.1 For $n=1$, either $A=[a]$ with $a\ne 0$ or $a=0$. In both cases $I_1A=(1)[a]$ is a PLU factorisation, and the zero-pivot case is exactly the singular case. [base, L3, algebra]

1.2 Assume $n>1$. After an initial row swap, write $$PA=\begin{pmatrix}a&r^{\mathsf T}\\ c&C\end{pmatrix},$$ where $|a|$ is maximal in the first column below the swap position. If $a\ne 0$, perform the first elimination step. This produces $$ \begin{pmatrix}a&r^{\mathsf T}\\ 0&S\end{pmatrix} $$ with multipliers $c/a$. By the induction hypothesis, the trailing block $S$ has a PLU factorisation. Reassembling the first elimination step and the recursive factorisation gives $P'A=LU$ for suitable $P',L,U$. If $a=0$, then the whole first column is zero, so $PA$ already has the block form $\begin{pmatrix}0&r^{\mathsf T}\\0&C\end{pmatrix}$; by the induction hypothesis $C$ has a PLU factorisation, and adjoining the zero first column yields a PLU factorisation of $PA$, hence of $A$. [ih, L1, L2, algebra]

2.1 If the first failed pivot occurs at stage $k$, then after the previous row swaps and eliminations the active matrix has the form $$ \begin{pmatrix} *&*\\ 0&T \end{pmatrix}, $$ where the first column of $T$ is zero. Therefore $T$ is singular because $Te_0=0$ for a nonzero standard basis vector $e_0$. The whole active matrix is then singular, hence so are all earlier row permutations and elimination preimages, including $A$. [step 1.2, L1, algebra]

3.1 Claim 1 is steps 1.1-1.2. Step 2.1 proves claim 2, and its contrapositive is the final sentence: an invertible matrix cannot reach a zero pivot under partial pivoting. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
