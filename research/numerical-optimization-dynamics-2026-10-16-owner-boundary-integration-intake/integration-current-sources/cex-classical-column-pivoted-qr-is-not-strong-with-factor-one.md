---
id: cex-classical-column-pivoted-qr-is-not-strong-with-factor-one
kind: counterexample
title: "Classical column-pivoted QR can fail the strong coefficient bound"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations, thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block, alg-strong-rank-revealing-qr-with-finite-swaps]
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
---

## Statement refuted

Every exact classical column-pivoted QR output satisfies the strong rank-revealing coefficient bound $\max_{i,j}|(R_{11}^{-1}R_{12})_{ij}|\le1$ for every target rank $k$.

## Facts & Assumptions

**Given:** The real matrix defined below, greedy residual-norm column pivoting, tie-breaking by the smallest original column index, and target rank $k=3$.

[F1] [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]: a CPQR factorization permutes columns and has orthonormal $Q$ with upper trapezoidal $R$.

[F2] The exact-arithmetic `success` condition in [[alg-strong-rank-revealing-qr-with-finite-swaps]] with factor $f=1$ gives $|(R_{11}^{-1}R_{12})_{ij}|\le1$ for every entry; this counterexample compares exact factors.

[F3] [[thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block]]: column pivoting chooses a remaining column with maximal residual norm at each step; the statement applies to rank $r=n$ here.

[A1] Equal residual norms are resolved by the smallest original column index, as specified for this example.

## Counterexample

Let $c=1/2$, $s=\sqrt{3}/2$, and define
$$D=\operatorname{diag}(1,s,s^2,s^3),\qquad K=\begin{pmatrix}1&-c&-c&-c\\0&1&-c&-c\\0&0&1&-c\\0&0&0&1\end{pmatrix},\qquad A=DK.$$

1.1 Column $j$ of $A$ has entries $-cs^{i-1}$ for $i<j$, $s^{j-1}$ for $i=j$, and zero below. Its squared norm is $c^2\sum_{r=0}^{j-2}s^{2r}+s^{2(j-1)}=1$, using $c^2=1-s^2$. After the first $r$ columns have been selected, they span the first $r$ coordinate vectors because their leading triangular block has nonzero diagonal. The residual of each remaining column $j>r$ has squared norm $s^{2r}\left(c^2\sum_{t=0}^{j-r-2}s^{2t}+s^{2(j-r-1)}\right)=s^{2r}$ (the sum is empty when $j=r+1$). Thus all remaining residuals tie at every step, and the declared tie rule makes CPQR select columns in their original order. [F3, A1, algebra]

2.1 By [F1] and step 1.1, the resulting permutation is the identity. The matrix $A$ is upper triangular with positive diagonal, so the QR factors can be taken as $Q=I$ and $R=A$. For $k=3$, solving $R_{11}x=R_{12}$ gives $x_3=-c$, $x_2=-c(1+c)$, and $x_1=-c(1+c)^2=-9/8$. Hence $\max_i|x_i|\ge9/8>1$, violating the coefficient condition in [F2]. [step 1.1, F1, F2, algebra]

3.1 This CPQR output therefore fails the strong coefficient test with $f=1$. It does not contradict the strong RRQR procedure: that procedure performs additional swaps when its coefficient or combined residual score exceeds the threshold. [step 2.1, F2] ∎
