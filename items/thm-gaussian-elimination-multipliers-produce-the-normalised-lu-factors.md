---
id: thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors
kind: theorem
title: "When unpivoted elimination runs to completion, the elimination multipliers are the entries of the normalised LU factors"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normalised-lu-factorisation, thm-block-lu-factorisation-via-an-invertible-leading-block, def-matrix-product-and-identity-matrix]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
---

## Statement

Let $n\ge 1$, let $F$ be a field, and let $A\in M_n(F)$. Assume unpivoted Gaussian elimination reaches an
upper-triangular matrix without encountering a zero pivot. Let $m_{ik}$ be the
multiplier used to eliminate entry $(i,k)$, so the $k$-th elimination matrix is

$$E_k:=I-\sum_{i>k} m_{ik} e_i e_k^{\mathsf T}.$$If $U:=E_{n-2}\cdots E_0A$ is the final upper-triangular matrix, with this product understood as the empty product and $U=A$ when $n=1$, then$$A=LU,$$

where $L$ is unit lower triangular and its strict lower entry in position
$(i,k)$ is exactly $m_{ik}$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$, a field $F$, a matrix $A\in M_n(F)$, unpivoted Gaussian elimination
with no zero pivot, the elimination matrices $E_k$, and the final
upper-triangular matrix $U=E_{n-2}\cdots E_0A$, where $U=A$ when $n=1$.

[L1] A normalised LU factorisation is $A=LU$ with $L$ unit lower triangular and
$U$ upper triangular ([[def-normalised-lu-factorisation]]).

[L2] An invertible leading block yields block LU through the Schur complement
([[thm-block-lu-factorisation-via-an-invertible-leading-block]]).

[L3] Matrix multiplication uses the usual product convention
([[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** induction on the elimination stages.

1.1 At stage $k$, the matrix $E_k$ is unit lower triangular and differs from $I$ only in column $k$ below the diagonal. Its inverse is $E_k^{-1}=I+\sum_{i>k} m_{ik} e_i e_k^{\mathsf T}$, because all cross terms vanish: $e_i e_k^{\mathsf T} e_j e_k^{\mathsf T}=0$ for $i,j>k$. Thus $E_k^{-1}$ is unit lower triangular with strict lower entries exactly the multipliers from column $k$. [given, L3, algebra]

2.1 Since $U=E_{n-2}\cdots E_0A$, one has $A=E_0^{-1}\cdots E_{n-2}^{-1}U$. The product of unit lower triangular matrices is unit lower triangular, and the first time a strict lower entry in column $k$ appears is in $E_k^{-1}$, so later factors do not change that column above the already-created zeros. Hence the strict lower entries of $L:=E_0^{-1}\cdots E_{n-2}^{-1}$ are exactly the stored multipliers $m_{ik}$. [step 1.1, L3, induction]

3.1 The matrix $U$ is upper triangular by construction, so step 2.1 is a normalised LU factorisation in the sense of [L1]. This is the scalar-entry form of the same elimination mechanism that [L2] packages blockwise. Equivalently, the row operations of elimination store their multipliers in $L$ and leave the final reduced matrix as $U$. [step 2.1, L1, L2]

4.1 Steps 2.1 and 3.1 prove the claim. [step 2.1, step 3.1, discharge-induction] ∎
