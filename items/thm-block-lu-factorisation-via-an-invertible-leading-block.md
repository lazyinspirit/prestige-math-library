---
id: thm-block-lu-factorisation-via-an-invertible-leading-block
kind: theorem
title: "An invertible leading block yields block LU through its Schur complement"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-block-lu-factorisation, thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost, def-invertible-matrix-and-general-linear-group, def-matrix-product-and-identity-matrix]
aliases: []
proof_strategy: direct
verification:
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

Let

$$A=\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix}$$

be a square block matrix over a field, with $A_{11}$ square and invertible, and
let $S:=A_{22}-A_{21}A_{11}^{-1}A_{12}$.

1. One has the exact block factorisation
   $$A=\begin{pmatrix}I&0\\A_{21}A_{11}^{-1}&I\end{pmatrix}\begin{pmatrix}A_{11}&A_{12}\\0&S\end{pmatrix}.$$
2. If $S=\widetilde L\widetilde U$ is any normalised LU factorisation, then
   $$A=\begin{pmatrix}I&0\\A_{21}A_{11}^{-1}&\widetilde L\end{pmatrix}\begin{pmatrix}A_{11}&A_{12}\\0&\widetilde U\end{pmatrix}$$
   is a block LU factorisation across the same partition.

## Facts & Assumptions

**Given:** The displayed block matrix $A$, an invertible leading block
$A_{11}$, and the Schur complement
$S=A_{22}-A_{21}A_{11}^{-1}A_{12}$.

[L1] Block LU factorisation and Schur complement are defined as in
[[def-block-lu-factorisation]].

[L2] Triangular solves with nonzero diagonal are correct and unique
([[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]).

[L3] An invertible matrix has a two-sided inverse
([[def-invertible-matrix-and-general-linear-group]]).

[L4] Matrix multiplication is associative and uses the product convention of
[[def-matrix-product-and-identity-matrix]].

## Proof

**Proof technique:** explicit block multiplication.

1.1 By [L3], $A_{11}^{-1}$ exists, and by [L4] the block product $$ \begin{pmatrix}I&0\\A_{21}A_{11}^{-1}&I\end{pmatrix} \begin{pmatrix}A_{11}&A_{12}\\0&S\end{pmatrix} $$ has upper-left block $A_{11}$, upper-right block $A_{12}$, lower-left block $A_{21}A_{11}^{-1}A_{11}=A_{21}$, and lower-right block $A_{21}A_{11}^{-1}A_{12}+S=A_{22}$. Hence it equals $A$. [L1, L3, L4, algebra]
2.1 If $S=\widetilde L\widetilde U$, substitute this into step 1.1 and absorb the factorisation of $S$ into the lower-right block. The resulting left factor is block lower triangular and the right factor is block upper triangular, so this is a block LU factorisation in the sense of [L1]. [step 1.1, L1, algebra]
2.2 The off-diagonal block $A_{21}A_{11}^{-1}$ is exactly the block of multipliers obtained by solving $X A_{11}=A_{21}$. If $A_{11}$ itself has a triangular factorisation, [L2] computes these multipliers by triangular solves. [L2, step 1.1]
3.1 Steps 1.1 and 2.1 prove claims 1 and 2, and step 2.2 identifies the solve interpretation of the multiplier block. [step 1.1, step 2.1, step 2.2] ∎
