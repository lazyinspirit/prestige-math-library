---
id: thm-patankar-inexact-solve-residual-ledger
kind: theorem
title: "Certified residuals bound mass drift and the exact-solve positivity margin"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-modified-patankar-euler
  - alg-mprk22-1
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
  - lem-rounded-linear-and-normal-residual-certificates
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the argument uses finite matrix identities and the stated floating-point residual certificate."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, Lemmas 2.6–2.7"
      url: "https://arxiv.org/pdf/1702.04589"
verification:
  precheck: pass
---

## Statement

Let $M\in\mathbb R^{m\times m}$ be an exact linear-system matrix from [[alg-modified-patankar-euler]] with admissible positive denominators, or from a stage/final solve of [[alg-mprk22-1]], for a finite conservative PDS. Let $b\ge0$ be its exact right-hand side. For either scheme, the PDS transfer identity gives $\mathbf 1^TM=\mathbf 1^T$ and strict column diagonal dominance, so $M^{-1}\ge0$. Let $\widehat y$ be a stored candidate and compute $\widehat v=\operatorname{fl}(M\widehat y)$ and $\widehat w=\operatorname{fl}(\widehat v-b)$ in the operationwise model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with $0<u<1$, $(m-1)u<1$, every nonzero exact intermediate normal, zero operations exact, successful sequential dot products and subtraction, and exact or certified upper bounds for the norms used by the supplier. Let $W$ be the certified allowance from [[lem-rounded-linear-and-normal-residual-certificates]], using exact norms or certified upper bounds, and set $\rho:=\|\widehat w\|_2+W$. Then

$$\|M\widehat y-b\|_2\le\rho,\qquad \left|\mathbf1^T\widehat y-\mathbf1^Tb\right|\le\sqrt m\,\rho.$$

If $y^*:=M^{-1}b$ is the exact solution of the stored linear system, then

$$\|\widehat y-y^*\|_1\le\sqrt m\,\rho.$$

Consequently, the componentwise margin condition $\widehat y_i\ge\sqrt m\,\rho$ for every $i$ certifies $y^*\ge0$. A residual bound alone does not certify that the computed candidate $\widehat y$ is nonnegative. This certificate is relative to the stated stored matrix and right-hand side; any coefficient-assembly error relative to the intended real system must be separately bounded and added to the residual allowance.

## Facts & Assumptions

**Given:** A finite conservative PDS matrix $M$ from the stated Patankar systems, an exact right-hand side $b\ge0$, a stored candidate $\widehat y$, $0<u<1$ with $(m-1)u<1$, normal nonzero exact intermediates, exact zero operations, successful residual calculations, and exact or certified upper bounds for all norms used in $W$.

[F1] [[def-finite-conservative-production-destruction-system]]: paired transfers satisfy $p_{ij}=d_{ji}$.

[F2] [[alg-modified-patankar-euler]] and [[alg-mprk22-1]]: with positive declared denominators, each solve matrix has nonpositive off-diagonal entries, positive diagonal, and column sums equal to one by $p_{ij}=d_{ji}$.

[F3] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: each such solve matrix has an entrywise nonnegative inverse.

[F4] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: successful real additions, subtractions and products follow the stated no-underflow, round-to-nearest operation model.

[F5] [[lem-rounded-linear-and-normal-residual-certificates]]: for stored $M,\widehat y,b$ and the stated successful evaluation order, $\|\widehat w-(M\widehat y-b)\|_2\le W$ when its unit-roundoff and normal-intermediate hypotheses hold; the norms used in $W$ are exact or certified upper bounds.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$, in particular $\|r\|_1\le\sqrt m\,\|r\|_2$ and $|\mathbf1^Tr|\le\sqrt m\,\|r\|_2$.

## Proof


1.1 For modified Patankar Euler, column $j$ of $M$ has off-diagonal entries $-hp_{ij}(y^n)/\sigma_j$ and diagonal $1+h\sum_{k\ne j}d_{jk}(y^n)/\sigma_j$; for an MPRK final matrix the same form uses averaged rates and denominators $z_j$, and its stage is the first form with $\sigma_j=y_j^n>0$. By [F1]–[F2], each such matrix has column sum one and strict column-dominance margin one, so [F3] gives $M^{-1}\ge0$. [F1, F2, F3, algebra]

1.2 Put $r:=M\widehat y-b$. By [F5] and the triangle inequality, $\|r\|_2\le\|\widehat w\|_2+\|r-\widehat w\|_2\le\|\widehat w\|_2+W=\rho$. [F4, F5, algebra]

1.3 Multiplying $\mathbf1^TM=\mathbf1^T$ on the right by $M^{-1}$ gives $\mathbf1^TM^{-1}=\mathbf1^T$. [F2, F3, algebra]

2.1 Since $\mathbf1^TM=\mathbf1^T$, $\mathbf1^T\widehat y-\mathbf1^Tb=\mathbf1^T(M\widehat y-b)=\mathbf1^Tr$; [F6] and step 1.2 give $|\mathbf1^T\widehat y-\mathbf1^Tb|\le\sqrt m\,\rho$. [F2, F6, step 1.2, algebra]

2.2 With $y^*=M^{-1}b$, we have $\widehat y-y^*=M^{-1}r$ and, since $M^{-1}\ge0$ and its columns sum to one, $\|M^{-1}r\|_1=\sum_i|\sum_j(M^{-1})_{ij}r_j|\le\sum_j(\sum_i(M^{-1})_{ij})|r_j|=\|r\|_1\le\sqrt m\,\rho$ by [F6] and step 1.2. [F3, F6, step 1.2, step 1.3, algebra]

3.1 For each coordinate, $y_i^*\ge\widehat y_i-|\widehat y_i-y_i^*|\ge\widehat y_i-\|\widehat y-y^*\|_1$; step 2.2 therefore gives $y_i^*\ge0$ whenever $\widehat y_i\ge\sqrt m\,\rho$. A residual bound alone places no sign condition on $\widehat y$, so it does not certify that the computed candidate is nonnegative. [step 2.2, algebra] ∎
