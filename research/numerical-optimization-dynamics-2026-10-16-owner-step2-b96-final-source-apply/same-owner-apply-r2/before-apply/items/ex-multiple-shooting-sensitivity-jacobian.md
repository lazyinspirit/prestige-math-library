---
id: ex-multiple-shooting-sensitivity-jacobian
kind: example
title: A two-interval shooting residual has a block-bidiagonal sensitivity Jacobian
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [lem-parameter-ode-flow-tangent-on-common-tube, thm-discrete-adjoint-gradient-recursion]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§2–3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Example

For $u'=\theta u$ on two intervals of length $\tau>0$, define shooting nodes $z_0,z_1,z_2$ and residuals $R_0=z_0-a$, $R_1=z_1-e^{\tau\theta}z_0$, and $R_2=z_2-e^{\tau\theta}z_1$. This uses the exact parameterized ODE flow covered locally by [[lem-parameter-ode-flow-tangent-on-common-tube]]. On the shooting solution set, take terminal objective $J=z_2$.

## Facts & Assumptions

**Given:** $a\in\mathbb R$, $\tau>0$, the two exact-flow intervals, and the finite shooting graph.

[F1] The parameterized ODE flow has its variational tangent on a common tube ([[lem-parameter-ode-flow-tangent-on-common-tube]]).

[F2] The reverse recursion computes the exact gradient of a finite state-step objective ([[thm-discrete-adjoint-gradient-recursion]]).

## Verification

1.1 The function $u(t)=e^{\theta t}s$ satisfies $u'=\theta u$ and $u(0)=s$, so uniqueness of the IVP identifies the exact interval flow with $\Phi_\tau(s,\theta)=e^{\tau\theta}s$. Differentiating its two shooting residuals with respect to $(z_0,z_1,z_2)$, and writing $E=e^{\tau\theta}$, gives $$D_zR=\begin{pmatrix}1&0&0\\-E&1&0\\0&-E&1\end{pmatrix},\qquad D_\theta R=\begin{pmatrix}0\\-\tau E z_0\\-\tau E z_1\end{pmatrix}.$$ The state Jacobian is lower bidiagonal, and the parameter column contains the two local flow sensitivities. [F1, given, algebra]

2.1 Solving $R=0$ gives $z_0=a$, $z_1=Ea$, and $z_2=E^2a$. Direct differentiation yields $D_\theta z_2=2\tau E^2a$. The discrete adjoint for the two flow steps seeds $p_2=1$, then gives $p_1=E$ and $p_0=E^2$; its parameter sum is $\tau E z_0p_1+\tau E z_1p_2=2\tau E^2a$. Thus the reverse gradient agrees with the differentiated shooting solution. [F2, step 1.1, algebra] ∎ 