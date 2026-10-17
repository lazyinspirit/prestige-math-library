---
id: thm-determinant-differential-and-jacobis-formula
kind: theorem
title: "The determinant differential is $D\\det(A)[H]=\\operatorname{tr}(\\operatorname{adj}(A)H)$ at every matrix, and Jacobi's formula holds on the invertible locus"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - def-frobenius-matrix-norm
  - def-matrix-space
  - def-determinant-of-a-square-matrix
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - def-matrix-minors-cofactors-and-adjugate
  - thm-laplace-cofactor-expansion
  - thm-adjugate-identity-over-a-commutative-ring
  - def-trace-of-a-square-matrix
  - def-invertible-matrix-and-general-linear-group
  - def-ring-matrix-product-identity-and-transpose
  - thm-ring-matrix-arithmetic-laws
  - prop-field-and-ring-matrix-interfaces-agree
  - lem-complex-conjugation-and-modulus-laws
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-published-matrix-calculus/application-2/repair.json
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Let $A$ be an $n\times n$ matrix and let $H$ be a direction matrix. Then

$$D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H).$$

If $A$ is invertible, then

$$D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H).$$

## Facts & Assumptions

**Given:** Matrices $A,H\in M_n(\mathbb F)$, where $\mathbb F=\mathbb R$ or $\mathbb C$, and the real Fréchet derivative with the Frobenius norm. In the complex case the target is $\mathbb C$ viewed as a two-dimensional real normed space with modulus.

[A1] Matrix spaces include $n=0$. For that case only, use the local conventions $\det(\varnothing)=1$ and $\operatorname{adj}(\varnothing)=\varnothing$. The empty matrix has Frobenius norm and trace zero and is its own inverse. For $n\ge1$, determinant and adjugate have the published meanings below. [[def-matrix-space]], [[def-frobenius-matrix-norm]], [[def-trace-of-a-square-matrix]], [[def-invertible-matrix-and-general-linear-group]]

[L1] For $n\ge1$, determinant is the signed Leibniz sum of the $n!$ products $\prod_{j<n}a_{\sigma(j),j}$. [[def-determinant-of-a-square-matrix]]

[L2] That determinant is multilinear in its columns over every commutative ring. [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]

[L3] The cofactor is $C_{ij}(A)=(-1)^{i+j}\det(A^{(i,j)})$ and $\operatorname{adj}(A)_{ji}=C_{ij}(A)$. When $n=1$, the deleted minor has determinant $1$. [[def-matrix-minors-cofactors-and-adjugate]]

[L4] Laplace expansion along column $j$ is $\det(B)=\sum_{i<n}b_{ij}C_{ij}(B)$. [[thm-laplace-cofactor-expansion]]

[L5] For every positive-sized square matrix, $A\operatorname{adj}(A)=\det(A)I_n$. [[thm-adjugate-identity-over-a-commutative-ring]]

[L6] Matrix multiplication is the entrywise finite-sum product, is associative and unital, and obeys the scalar laws. Over a field this agrees with the ring-matrix interface; invertibility means $A^{-1}A=AA^{-1}=I_n$. [[def-ring-matrix-product-identity-and-transpose]], [[thm-ring-matrix-arithmetic-laws]], [[prop-field-and-ring-matrix-interfaces-agree]], [[def-invertible-matrix-and-general-linear-group]]

[L7] Scalar modulus is multiplicative and satisfies the triangle inequality, including for real scalars. [[lem-complex-conjugation-and-modulus-laws]]

[L8] The Frobenius norm is $\|H\|_F=(\sum_{i,j}|h_{ij}|^2)^{1/2}$. The real Fréchet criterion is the normwise first-order remainder estimate; in a positive-dimensional source this is equivalently that the remainder after a bounded real-linear map, divided by $\|H\|_F$, tends to zero as $H\to0$, $H\ne0$. [[def-frobenius-matrix-norm]], [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]

[L9] Trace is the sum of the diagonal entries. [[def-trace-of-a-square-matrix]]

## Proof

**Proof technique:** expand all column perturbations and bound the terms of degree at least two uniformly in the direction.

1.1 For $n=0$, the domain is the zero vector space and the determinant is the constant $1$ by [A1]. Its derivative is the unique linear map from that space, namely zero; its Fréchet remainder vanishes identically. The adjugate product has trace zero, as does $A^{-1}H$, so both asserted formulas hold. Henceforth let $n\ge1$. [A1, L8, L9, given]

1.2 Write $A_j,H_j$ for the columns. For $S\subseteq\{0,\ldots,n-1\}$, let $B_S$ have column $H_j$ if $j\in S$ and $A_j$ otherwise. By [L2], $$\det(A+H)=\sum_S\det(B_S)=\det(A)+L_A(H)+R_A(H),$$ where $L_A(H)=\sum_{j<n}\det(B_{\{j\}})$ and $R_A(H)=\sum_{|S|\ge2}\det(B_S)$. Expanding $B_{\{j\}}$ along column $j$ with [L4], its deleted-column minors are those of $A$, so $$L_A(H)=\sum_{j<n}\sum_{i<n}h_{ij}C_{ij}(A)=\operatorname{tr}(\operatorname{adj}(A)H)$$ by [L3], [L6] and [L9]. This map is $\mathbb F$-linear and in particular real-linear. Each $|h_{ij}|\le\|H\|_F$ by [L8], so [L7] gives $|L_A(H)|\le(\sum_{i,j}|C_{ij}(A)|)\|H\|_F$; thus it is bounded. [L2, L3, L4, L6, L7, L8, L9, given, construct, algebra]

2.1 Put $h=\|H\|_F$ and $M=\max(1,\|A\|_F)$. Every entry of $A$ has modulus at most $M$, and every entry of $H$ has modulus at most $h$. A Leibniz monomial of $B_S$ contains exactly $k=|S|$ entries from $H$ and $n-k$ from $A$, so [L1] and [L7] imply $$|\det(B_S)|\le n! M^{n-k}h^k.$$ For $0<h\le1$ and $k\ge2$, this is at most $n!M^n h^2$. There are at most $2^n$ subsets $S$, hence $$|R_A(H)|\le n!2^n M^n\|H\|_F^2.$$ When $n=1$, the remainder sum is empty and the same bound holds with remainder zero. Dividing by $\|H\|_F$ makes the bound tend to zero independently of the direction of $H$. The bounded real-linear map from step 1.2 therefore satisfies the full Fréchet criterion [L8], over both real and complex matrices, including every singular $A$. Consequently $D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H)$. [L1, L7, L8, step 1.2, algebra]

3.1 If $A$ is invertible and $n\ge1$, multiply [L5] on the left by $A^{-1}$. By [L6], $$\operatorname{adj}(A)=\det(A)A^{-1}.$$ Substitute this into step 2.1 and take the scalar outside the finite diagonal sum [L9] to obtain $$D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H).$$ Step 1.1 already proves the same formula at the invertible empty matrix. No inverse is used in the general adjugate formula, so its singular-matrix scope is retained. [L5, L6, L9, step 1.1, step 2.1, algebra] ∎