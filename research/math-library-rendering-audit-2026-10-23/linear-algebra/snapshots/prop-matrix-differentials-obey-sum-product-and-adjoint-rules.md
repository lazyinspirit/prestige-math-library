---
id: prop-matrix-differentials-obey-sum-product-and-adjoint-rules
kind: proposition
title: "Matrix differentials obey the sum rule, product rule, and adjoint rule"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       def-matrix-product-and-identity-matrix,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose,
       def-frobenius-matrix-norm,
       thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-published-matrix-calculus/application-3/repair.json
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

In the real Fr\'echet sense on matrix spaces:

1. $D(A\mapsto A+B)(A)[H]=H$ for fixed $B$;
2. $D(A,B\mapsto AB)(A,B)[H,K]=HB+AK$;
3. $D(A\mapsto A^\ast)(A)[H]=H^\ast$.

Equivalently, differential notation gives
$d(A+B)=dA+dB$, $d(AB)=dA\,B+A\,dB$, and $d(A^\ast)=(dA)^\ast$.

## Facts & Assumptions

**Given:** Compatible matrices and perturbation directions.

[F1] Real Fr\'echet differentiability is the normwise first-order remainder estimate; in a positive-dimensional source it is equivalently $F(A+H)=F(A)+DF(A)[H]+o(\|H\|_F)$ ([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

[F2] The Frobenius norm is the Euclidean norm of the full real or complex entry list, including empty lists ([[def-frobenius-matrix-norm]]). For a pair of perturbations use $N(H,K):=(\|H\|_F^2+\|K\|_F^2)^{1/2}$, the Frobenius norm after concatenating their entry lists into one column. This identifies the product source with a finite-dimensional real normed space (complex entries are viewed as real coordinates).

[F3] Cauchy--Schwarz holds on real and complex coordinate inner-product spaces ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]). Scalar absolute value/modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof
**Proof technique:** direct.

1.1 For the sum map, $(A+H)+B=(A+B)+H$, so the linear term is already $H$. For the adjoint map, $(A+H)^\ast=A^\ast+H^\ast$, so the linear term is $H^\ast$. Both have zero remainder in the sense of [F1]. [F1, algebra]

1.2 If $H$ is $m\times q$ and $K$ is $q\times n$, the entry formula for matrix multiplication and [F3] give $|(HK)_{ij}|\le\sum_{k<q}|H_{ik}||K_{kj}|\le(\sum_{k<q}|H_{ik}|^2)^{1/2}(\sum_{k<q}|K_{kj}|^2)^{1/2}$. Squaring and summing over $i,j$ yields $\|HK\|_F^2\le(\sum_{i,k}|H_{ik}|^2)(\sum_{k,j}|K_{kj}|^2)=\|H\|_F^2\|K\|_F^2$, so $\|HK\|_F\le\|H\|_F\|K\|_F$. Empty index families give zero on the corresponding sides of these same formulas. [given, F2, F3, algebra]

2.1 For the product map, $(A+H)(B+K)=AB+HB+AK+HK$. The proposed derivative $(H,K)\mapsto HB+AK$ is real-linear and bounded, since step 1.2 gives $\|HB+AK\|_F\le\|B\|_F\|H\|_F+\|A\|_F\|K\|_F\le(\|A\|_F+\|B\|_F)N(H,K)$. Moreover $\|HK\|_F\le\|H\|_F\|K\|_F\le N(H,K)^2/2$. Dividing by $N(H,K)>0$ makes this remainder tend to zero; when $N(H,K)=0$ the remainder is exactly zero, so the normwise condition also holds on a zero-dimensional source. Thus [F1] gives the asserted product rule, completing all three rules. [F1, F2, step 1.1, step 1.2, algebra] ∎
