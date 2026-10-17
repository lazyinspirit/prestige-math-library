---
id: ex-multiple-shooting-sensitivity-jacobian
kind: example
title: A two-interval shooting residual has a block-bidiagonal sensitivity Jacobian
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [lem-parameter-ode-flow-tangent-on-common-tube, thm-discrete-adjoint-gradient-recursion, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant]
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

[F1] The parameterized ODE flow has its variational tangent when its uniqueness and common-tube hypotheses hold ([[lem-parameter-ode-flow-tangent-on-common-tube]]).

[F2] The reverse recursion computes the exact gradient of a finite state-step objective ([[thm-discrete-adjoint-gradient-recursion]]).

[F3] The exponential is smooth with derivative equal to itself, is positive, satisfies $e^{-x}=1/e^x$, and is increasing ([[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]).

[F4] The chain and product rules differentiate the displayed functions; a continuous function on an interval with zero interior derivative is constant ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[cor-zero-derivative-implies-constant]]).

## Verification

1.1 The function $u(t)=e^{\theta t}s$ satisfies $u'=\theta u$ and $u(0)=s$. Conversely, for any solution $v$ with this initial value, the product and chain rules give $(e^{-\theta t}v(t))'=0$. By [F4] this product is constantly $s$ on its solution interval, and positivity and the reciprocal identity in [F3] imply $v(t)=e^{\theta t}s$. Thus the displayed solution exists globally and is unique. [F3, F4]

1.2 Verify the actual common-tube hypotheses locally at any $(s_*,\theta_*)$. Fix $\varepsilon,\delta,\eta>0$ and restrict the parameters to $|s-s_*|<\varepsilon$, $|\theta-\theta_*|<\delta$. For $-\eta\le t\le\tau+\eta$,
$$|e^{\theta t}s|\le B:=(|s_*|+\varepsilon)\exp((|\theta_*|+\delta)(\tau+\eta)).$$
Treat $(s,\theta)$ as the flow parameter, with initial map $(s,\theta)\mapsto s$ and field $(t,u,s,\theta)\mapsto\theta u$ on $\mathbb R^4$. The bounded convex open set
$$(-\eta,\tau+\eta)\times(-B-1,B+1)\times(s_*-2\varepsilon,s_*+2\varepsilon)\times(\theta_*-2\delta,\theta_*+2\delta)$$
has compact closure inside that field's domain and contains all these trajectories for $0\le t\le\tau$ and the restricted parameters. The field and initial map are $C^1$. Step 1.1 supplies existence and uniqueness, so [F1] applies. Each shooting interval uses this same argument with its own initial node; since there are two intervals, a common finite bound may also be taken. [F1, F3, step 1.1]

1.3 The exact interval map is therefore $\Phi_\tau(s,\theta)=e^{\tau\theta}s$. Differentiate the residuals with respect to $(z_0,z_1,z_2)$ and $\theta$, writing $E=e^{\tau\theta}$:
$$D_zR=\begin{pmatrix}1&0&0\\-E&1&0\\0&-E&1\end{pmatrix},\qquad D_\theta R=\begin{pmatrix}0\\-\tau E z_0\\-\tau E z_1\end{pmatrix}.$$
The state Jacobian is lower bidiagonal, and the parameter column contains the two local flow sensitivities. [F3, F4, step 1.1, step 1.2, algebra]

2.1 Solving $R=0$ gives $z_0=a$, $z_1=Ea$, and $z_2=E^2a$. Direct differentiation yields $D_\theta z_2=2\tau E^2a$. The discrete adjoint for the two flow steps seeds $p_2=1$, then gives $p_1=E$ and $p_0=E^2$; its parameter sum is $\tau E z_0p_1+\tau E z_1p_2=2\tau E^2a$. Thus the reverse gradient agrees with the differentiated shooting solution. [F2, F3, F4, step 1.3, algebra] ∎
