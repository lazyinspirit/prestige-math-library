---
id: ex-implicit-linear-solve-adjoint
kind: example
title: "An implicit linear solve and its adjoint gradient"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [thm-implicit-differentiation-forward-and-adjoint-formulas]
justified_by: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.6 and proof, §8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
---

## Example

Let $A(\theta)=\begin{bmatrix}1&\theta\\0&1\end{bmatrix}$, $b=(2,1)^T$, and define $u(\theta)$ by $A(\theta)u(\theta)=b$. For the scalar objective $J(\theta)=\begin{bmatrix}1&1\end{bmatrix}u(\theta)$, at $\theta=0$ the exact derivative and the adjoint formula both equal $-1$.

## Facts & Assumptions

**Given:** A square linear residual with an invertible state Jacobian and a scalar objective.

[F1] [[thm-implicit-differentiation-forward-and-adjoint-formulas]]: if $R_z$ is nonsingular, the branch derivative is $-R_z^{-1}R_\theta$ and the objective gradient can be computed from $R_z^T\lambda=J_z^T$ as $J_\theta-\lambda^TR_\theta$.

## Verification

**Proof technique:** direct solve and adjoint substitution.

1.1 The system gives $u_2=1$ and $u_1+\theta u_2=2$, hence $u(\theta)=(2-\theta,1)^T$ and $J(\theta)=3-\theta$. Therefore $J'(0)=-1$. [given, algebra]

2.1 Write $R(u,\theta)=A(\theta)u-b$. At $\theta=0$, $u=(2,1)^T$, $R_u=A(0)=I$, $R_\theta=A_\theta u=(1,0)^T$, and $J_u=(1,1)$. The adjoint equation $R_u^T\lambda=J_u^T$ gives $\lambda=(1,1)^T$. [given, step 1.1, algebra]

3.1 The objective has no explicit $\theta$ dependence, so $J_\theta=0$; the adjoint formula gives $J_\theta-\lambda^TR_\theta=-(1,1)\cdot(1,0)=-1$. [F1, step 2.1, algebra]

4.1 The adjoint result agrees with the direct derivative in step 1.1, verifying this nonsingular linear-solve instance. [step 1.1, step 3.1] ∎
