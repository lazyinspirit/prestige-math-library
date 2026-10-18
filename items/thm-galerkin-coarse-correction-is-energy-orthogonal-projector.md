---
id: thm-galerkin-coarse-correction-is-energy-orthogonal-projector
kind: theorem
title: "The Galerkin coarse correction is an energy-orthogonal projector"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-galerkin-coarse-grid-correction,
       thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       prop-transpose-laws]
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

Let $A_h\in\mathbb R^{n\times n}$ be symmetric positive definite and let
$P\in\mathbb R^{n\times m}$ have full column rank, where $1\le m\le n$. Put
$A_H=P^{\mathsf T}A_hP$. Then $A_H$ is symmetric positive definite, hence
invertible, and the map $C=I_n-PA_H^{-1}P^{\mathsf T}A_h$ of
[[def-galerkin-coarse-grid-correction]] satisfies

$$C^2=C,\qquad CP=0,\qquad P^{\mathsf T}A_hC=0,\qquad C^{\mathsf T}A_h=A_hC.$$

Consequently $\operatorname{Ran}(C)=\operatorname{Ran}(P)^{\perp_{A_h}}$;
$C$ is the orthogonal projector onto that complement in the energy inner
product $\langle x,y\rangle_{A_h}:=x^{\mathsf T}A_hy$.

## Facts & Assumptions

**Given:** A symmetric positive-definite $A_h\in\mathbb R^{n\times n}$ and a full-column-rank $P\in\mathbb R^{n\times m}$, where $1\le m\le n$.

[F1] [[def-galerkin-coarse-grid-correction]]: $A_H=P^{\mathsf T}A_hP$, and when $A_H$ is invertible, $C=I_n-PA_H^{-1}P^{\mathsf T}A_h$.

[F2] [[thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer]]: a real symmetric positive-definite matrix has a unique solution to $A_Hz=b$ for every right-hand side $b$, so it is invertible.

[F3] [[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]: $\langle x,y\rangle_{A_h}=x^{\mathsf T}A_hy$ is an inner product and $\|x\|_{A_h}^2=x^{\mathsf T}A_hx$.

[F4] [[prop-transpose-laws]]: transposition is involutive and reverses matrix products, $(XY)^{\mathsf T}=Y^{\mathsf T}X^{\mathsf T}$.

## Proof

1.1 For every nonzero $q\in\mathbb R^m$, full column rank gives $Pq\ne0$, so $q^{\mathsf T}A_Hq=(Pq)^{\mathsf T}A_h(Pq)>0$. Also $A_H^{\mathsf T}=P^{\mathsf T}A_h^{\mathsf T}P=A_H$ by [F4]. Thus $A_H$ is symmetric positive definite and [F2] makes it invertible; [F1] therefore defines $C$. [given, F1, F2, F4, algebra]

2.1 From $P^{\mathsf T}A_hP=A_H$, direct multiplication gives $CP=P-PA_H^{-1}A_H=0$ and $P^{\mathsf T}A_hC=P^{\mathsf T}A_h-A_HA_H^{-1}P^{\mathsf T}A_h=0$. Moreover, $$C^2=I_n-2PA_H^{-1}P^{\mathsf T}A_h+PA_H^{-1}(P^{\mathsf T}A_hP)A_H^{-1}P^{\mathsf T}A_h=C.$$ [F1, step 1.1, algebra]

3.1 Transposing $A_HA_H^{-1}=I=A_H^{-1}A_H$ and using [F4] shows that $(A_H^{-1})^{\mathsf T}$ is an inverse of $A_H^{\mathsf T}=A_H$. If $B$ and $D$ are two-sided inverses of $A_H$, then $B=B(A_HD)=(BA_H)D=D$, so the inverse is unique and $(A_H^{-1})^{\mathsf T}=A_H^{-1}$. Thus [F4] yields $C^{\mathsf T}A_h=A_h-A_hPA_H^{-1}P^{\mathsf T}A_h=A_hC$, so $C$ is self-adjoint in [F3]. Also $P^{\mathsf T}A_hC=0$ says $\operatorname{Ran}(C)\subseteq\operatorname{Ran}(P)^{\perp_{A_h}}$. If $w$ is in that complement, then $P^{\mathsf T}A_hw=0$, so [F1] gives $Cw=w$; therefore every such $w$ is in $\operatorname{Ran}(C)$ and the ranges are equal. [F1, F3, F4, step 2.1, algebra]

4.1 The identities in step 2.1 and the range equality in step 3.1 prove all stated projection properties. [step 2.1, step 3.1] ∎
