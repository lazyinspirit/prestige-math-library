---
id: thm-local-index-one-saddle-certificate-from-enclosures
kind: theorem
title: "Validated Hessian enclosures and a small gradient residual certify a nearby index-one saddle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - def-validated-eigenvalue-enclosures-for-an-index-one-hessian
  - lem-local-root-from-uniformly-small-residual
  - thm-courant-fischer-min-max-principle
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Graeme Henkelman, Blas P. Uberuaga, and Hannes Jónsson, A climbing image nudged elastic band method for finding saddle points and minimum energy paths"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect04/climbimageNEB.pdf"
      locator: "§I: a first-order saddle has one negative-curvature mode; interval validation and residual transfer are proved here"
    - title: "Xuanyu Liu, Huajie Chen, and Christoph Ortner, Convergence of the Discrete Minimum Energy Path"
      url: "https://arxiv.org/pdf/2204.07467"
      locator: "§2.1: C4 potential and index-one saddle hypotheses used in rigorous MEP analysis"
---

## Statement

Let $d\ge2$, let $V\in C^4(U,\mathbb R)$ on an open $U\subseteq\mathbb R^d$, and let $x\in U$. Put $H=\nabla^2V(x)$ and $\epsilon_g=\|\nabla V(x)\|_2$. Suppose a validated ordered eigenvalue enclosure certifies index one with gap $\gamma>0$ in the sense of [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]. If $\epsilon_g=0$, then $x$ is an exact critical point with Hessian index one.

If $\epsilon_g>0$, put $\rho=2\epsilon_g/\gamma$. Assume $B_2(x,2\rho)\subset U$, the Hessian is $L$-Lipschitz there, and $L\rho/\gamma\le1/2$. Then there is exactly one critical point $x_*$ in $\overline B_2(x,\rho)$, it satisfies $\|x_*-x\|_2\le\rho$, and its Hessian has exactly one negative eigenvalue and no zero eigenvalues. The reported residual $\epsilon_g$, gap $\gamma$, conditioning bound $1/\gamma$, Hessian Lipschitz constant $L$, and radius condition are part of the certificate; a residual or a Ritz value alone is not a certificate.

## Facts & Assumptions

**Given:** The potential, point, gradient residual, interval evidence, gap, and local Hessian-Lipschitz hypotheses in the Statement.

[F1] [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]: the validated intervals certify $\lambda_1(H)\le-\gamma$ and $\lambda_j(H)\ge\gamma$ for $j\ge2$.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric Hessian has an orthonormal eigenbasis.

[F3] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: the Jacobian of $F=\nabla V$ is $H=\nabla^2V$, and a critical point is a zero of the gradient.

[F4] [[lem-local-root-from-uniformly-small-residual]]: if $DF(x)$ is invertible, has inverse norm at most $\beta$, and is $L$-Lipschitz on a sufficiently large ball, then $\|F(x)\|$ small enough gives a unique nearby zero within $2\beta\|F(x)\|$.

[F5] [[thm-courant-fischer-min-max-principle]]: the largest eigenvalue is the maximum Rayleigh quotient, and the second largest is at most the maximum Rayleigh quotient on the orthogonal complement of a leading eigenvector.



**Given:** The data in the Statement.

## Proof

1.1 By [F1], the eigenvalues of $H$ are all at least distance $\gamma$ from zero. Using the orthonormal eigenbasis in [F2], $H$ is invertible and $\|H^{-1}\|_{\rm op}\le1/\gamma$. [F1, F2, given, algebra]

2.1 If $\epsilon_g=0$, [F3] says $x$ is critical, and [F1] says its Hessian has exactly one negative eigenvalue. Suppose henceforth $\epsilon_g>0$ and use the inverse bound $\beta=1/\gamma$ from step 1.1. The radius in [F4] is then exactly $2\beta\epsilon_g=\rho$, and its Lipschitz condition is $\beta L\rho=L\rho/\gamma\le1/2$. Since $B_2(x,2\rho)\subset U$, every hypothesis of [F4] holds on the stated ball, so there is exactly one zero $x_*$ of $\nabla V$ in $\overline B_2(x,\rho)$ and $\|x_*-x\|_2\le\rho$. [F1, F3, F4, given, step 1.1, algebra]

3.1 Set $A=-H(x)$ and $E=-(H(x_*)-H(x))$. Then $A$ is symmetric with largest eigenvalue at least $\gamma$ and second-largest at most $-\gamma$. The Lipschitz hypothesis and $\|x_*-x\|_2\le\rho$ from step 2.1 give $\|E\|_{\rm op}\le L\rho\le\gamma/2$. [F1, F2, step 2.1, given, algebra]

4.1 Let $q_1$ be a unit leading eigenvector of $A$. The maximum Rayleigh formula in [F5] yields $\lambda_1(A+E)\ge q_1^T(A+E)q_1\ge\lambda_1(A)-\|E\|_{\rm op}\ge\gamma/2>0$. The second-eigenvalue min-max formula in [F5], applied to $q_1^\perp$, yields $\lambda_2(A+E)\le\lambda_2(A)+\|E\|_{\rm op}\le-\gamma/2<0$. Every later eigenvalue is at most the second, so $A+E=-H(x_*)$ has exactly one positive eigenvalue and no zero eigenvalue. Thus $H(x_*)$ has exactly one negative eigenvalue and no zero eigenvalues. Together with step 2.1 this proves the stated local certificate; if $\epsilon_g=0$, step 2.1 already proved it. [F1, F2, F5, step 2.1, step 3.1, algebra] ∎

