---
id: lem-hermitian-rayleigh-residual-spectrum-distance
kind: lemma
title: A Hermitian approximate-eigenpair residual locates a spectral value
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, def-real-and-complex-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1–5.4"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $A=A^*\in\mathbb C^{n\times n}$, $n\ge1$, and equip $\mathbb C^n$ with the standard Hermitian inner product $\langle x,y\rangle=\sum_{j=1}^n x_j\overline{y_j}$ and its induced norm $\|\cdot\|_2$. For $v\in\mathbb C^n\setminus\{0\}$ and $\theta\in\mathbb R$, if $\rho\ge\|Av-\theta v\|_2$ and $0<\nu\le\|v\|_2$, then some eigenvalue $\lambda$ of $A$ satisfies $|\lambda-\theta|\le\rho/\nu$.

## Facts & Assumptions

**Given:** $A,v,\theta,\rho,\nu$ as in the statement.

[F1] A Hermitian matrix has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The displayed standard pairing is an inner product: linearity, conjugate symmetry and positive definiteness follow termwise. Its induced norm satisfies $\|x\|_2^2=\sum_j|x_j|^2$, and expansion in any orthonormal basis gives $\|\sum_jc_ju_j\|_2^2=\sum_j|c_j|^2$ ([[def-real-and-complex-inner-product-space]]).

## Proof

1.1 Choose an orthonormal eigenbasis $u_1,\ldots,u_n$ with real eigenvalues $\lambda_1,\ldots,\lambda_n$, and write $v=\sum_j c_j u_j$. Then $Av-\theta v=\sum_j(\lambda_j-\theta)c_ju_j$, so [F2] gives $\|Av-\theta v\|_2^2=\sum_j|\lambda_j-\theta|^2|c_j|^2\ge d^2\sum_j|c_j|^2=d^2\|v\|_2^2$, where $d=\min_j|\lambda_j-\theta|$. [given, F1, F2, choose, algebra]

2.1 Since $v\ne0$, $\|v\|_2>0$. Taking nonnegative square roots in step 1.1 and dividing by $\|v\|_2$ gives $d\le\|Av-\theta v\|_2/\|v\|_2\le\rho/\nu$. The finite minimum defining $d$ is attained by some $j$, and its eigenvalue obeys the required bound. [given, step 1.1, algebra] ∎

