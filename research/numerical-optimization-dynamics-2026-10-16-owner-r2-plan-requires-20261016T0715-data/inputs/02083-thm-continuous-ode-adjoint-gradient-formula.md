---
id: thm-continuous-ode-adjoint-gradient-formula
kind: theorem
title: The continuous ODE adjoint gives the parameter gradient with endpoint terms
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [lem-parameter-ode-flow-tangent-on-common-tube, lem-ode-adjoint-pairing-integration-by-parts, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, Chapter 3"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Let $u_\theta$ solve the parameter-dependent ODE of [[lem-parameter-ode-flow-tangent-on-common-tube]] on $[0,T]$. Let
$$J(\theta)=\phi(u_\theta(T),\theta)+\int_0^T\ell(t,u_\theta(t),\theta)\,dt,$$
where $\phi$ and $\ell$ are $C^1$ on a neighborhood of the trajectory tube and their first derivatives are bounded and uniformly continuous there. Let $S=D_\theta u_\theta$ be the tangent from that lemma. Let $p$ solve the terminal adjoint problem
$$-p'(t)=D_u f(t,u_\theta(t),\theta)^Tp(t)+D_u\ell(t,u_\theta(t),\theta)^T,\qquad p(T)=D_u\phi(u_\theta(T),\theta)^T.$$
Then
$$\nabla_\theta J=D_\theta\phi(u_\theta(T),\theta)^T+p(0)^TD_\theta u_0(\theta)+\int_0^T\bigl(D_\theta\ell(t,u_\theta,\theta)^T+D_\theta f(t,u_\theta,\theta)^Tp(t)\bigr)\,dt.$$
This formula separates initial, terminal, running-cost and vector-field parameter terms. It applies only while the common-tube and differentiability hypotheses hold.

## Facts & Assumptions

**Given:** The common-tube ODE, $C^1$ initial map, objective, and bounded uniformly continuous first derivatives in the Statement.

[F1] [[lem-parameter-ode-flow-tangent-on-common-tube]]: the parameter flow is $C^1$ and $S'=D_uf\,S+D_\theta f$, $S(0)=D_\theta u_0$.

[F2] [[lem-ode-adjoint-pairing-integration-by-parts]]: if $S'=AS+B$ and $p'=-A^Tp-g$, then $p(T)^TS(T)-p(0)^TS(0)=\int_0^T(-g^TS+p^TB)\,dt$.

[F3] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: a continuous coefficient linear matrix IVP has a unique solution on the full compact interval.

[A1] All objective derivatives and ODE derivative coefficients are continuous and bounded on the common compact tube, and their first derivatives have the uniform continuity needed to differentiate the integral objective.

## Proof

1.1 By [F3], the terminal linear adjoint equation has a unique $C^1$ solution on $[0,T]$. [F3, given]

1.2 For a parameter increment $h$, the mean-value integral formula for the $C^1$ integrand, uniform continuity on the compact tube, and [F1] show that the objective difference quotient converges uniformly in $t$ to $D_\theta\ell(t,u_\theta,\theta)^T+D_u\ell(t,u_\theta,\theta)S(t)$. The terminal difference quotient converges to $D_\theta\phi^T+D_u\phi\,S(T)$. Uniform convergence permits integrating the running derivative, so $\nabla_\theta J=D_\theta\phi^T+S(T)^TD_u\phi^T+\int_0^T(D_\theta\ell^T+S^TD_u\ell^T)\,dt$. [F1, A1, given]

1.3 In [F2], set $A=D_uf$, $B=D_\theta f$, and $g=D_u\ell^T$. The adjoint equation in the Statement and tangent equation in [F1] satisfy its hypotheses. Since $p(T)=D_u\phi^T$, the identity gives $$S(T)^TD_u\phi^T-p(0)^TD_\theta u_0=\int_0^T(-D_u\ell\,S+p^TD_\theta f)\,dt.$$ [F1, F2, given]

2.1 Substitute step 1.3 into step 1.2; the terms involving $D_u\ell\,S$ cancel, leaving the asserted continuous adjoint gradient formula. [step 1.2, step 1.3, algebra] ∎

