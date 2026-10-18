---
id: thm-two-grid-energy-contraction-under-joint-estimate
kind: theorem
title: "A joint smoothing-correction estimate gives symmetric two-grid energy contraction"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-symmetric-two-grid-error-operator,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       def-operator-norm-on-a-finite-dimensional-inner-product-space,
       thm-operator-norm-is-the-largest-singular-value,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Statement

Let $A_h$, $C$, $S$, and $E=S^{*_{A_h}}CS$ be as in
[[def-symmetric-two-grid-error-operator]]. Suppose $0\le\rho<1$ and

$$\|CSx\|_{A_h}^2\le\rho\|x\|_{A_h}^2\qquad\text{for every }x\in\mathbb R^n.$$

Then $E$ is self-adjoint and nonnegative in the $A_h$ inner product, and its
operator norm induced by $\|\cdot\|_{A_h}$ satisfies $\|E\|_{A_h}\le\rho$.
A rate derived from separate smoothing and approximation inequalities requires
a proof that those inequalities imply this joint estimate.

## Facts & Assumptions

**Given:** The fine-grid SPD matrix, exact Galerkin correction $C$, linear pre-smoother $S$, and $0\le\rho<1$ satisfying the displayed joint estimate.

[F1] [[def-symmetric-two-grid-error-operator]]: $S^{*_{A_h}}$ is the adjoint in the $A_h$ inner product and $E=S^{*_{A_h}}CS$.

[F2] [[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]]: $C^2=C$ and $C$ is self-adjoint in the energy inner product.

[F3] [[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]: the $A_h$ energy inner product is a finite-dimensional real inner product and $\|x\|_{A_h}^2=\langle x,x\rangle_{A_h}$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|E\|_{A_h}=\max_{\|x\|_{A_h}=1}\|Ex\|_{A_h}$.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: every self-adjoint endomorphism on a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F6] [[thm-operator-norm-is-the-largest-singular-value]]: on a nonzero finite-dimensional real inner-product space, the operator-norm maximum in [F4] exists and is attained.

## Proof
1.1 Put $u=Sx$. Since $C^2=C$ and $C$ is $A_h$-self-adjoint, $C(I-C)=0$ and $\langle Cu,(I-C)u\rangle_{A_h}=\langle u,C(I-C)u\rangle_{A_h}=0$. Thus [F1] gives $$\langle Ex,x\rangle_{A_h}=\langle CSx,Sx\rangle_{A_h}=\langle CSx,CSx\rangle_{A_h}=\|CSx\|_{A_h}^2\ge0.$$ [F1, F2, F3, algebra]

1.2 For all $x,y$, the adjoint identity in [F1] and self-adjointness of $C$ in [F2] give $$\langle Ex,y\rangle_{A_h}=\langle CSx,Sy\rangle_{A_h}=\langle Sx,CSy\rangle_{A_h}=\langle x,Ey\rangle_{A_h}.$$ Hence $E$ is self-adjoint. [F1, F2, algebra]

2.1 By [F5], choose an $A_h$-orthonormal eigenbasis $v_1,\ldots,v_n$ for the self-adjoint map $E$, with eigenvalues $\lambda_j$. Step 1.1 gives $\lambda_j=\langle Ev_j,v_j\rangle_{A_h}\ge0$; the joint hypothesis gives $\lambda_j=\|CSv_j\|_{A_h}^2\le\rho$. For $x=\sum_j c_jv_j$, orthonormality yields $$\|Ex\|_{A_h}^2=\sum_j\lambda_j^2c_j^2\le\rho^2\sum_jc_j^2=\rho^2\|x\|_{A_h}^2.$$ The nonzero finite-dimensional domain has an attained operator-norm maximum by [F6], so taking the maximum over unit $x$ in [F4] proves $\|E\|_{A_h}\le\rho$. Since $\rho<1$, the two-grid error map is a strict energy contraction. [F1, F4, F5, F6, step 1.1, step 1.2, algebra] ∎
