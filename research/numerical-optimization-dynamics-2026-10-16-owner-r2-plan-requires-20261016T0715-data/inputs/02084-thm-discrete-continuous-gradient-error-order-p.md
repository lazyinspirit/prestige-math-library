---
id: thm-discrete-continuous-gradient-error-order-p
kind: theorem
title: Discrete and continuous ODE gradients agree to order p under augmented error bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-discrete-adjoint-gradient-recursion, thm-continuous-ode-adjoint-gradient-formula, thm-global-error-from-one-step-defect-and-stability, prop-explicit-rk-order-conditions-through-four]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §§3–5"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §§2.4 and 4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Let $J$ and $J_h$ be the continuous and finite state-step objectives of [[thm-continuous-ode-adjoint-gradient-formula]] and [[thm-discrete-adjoint-gradient-recursion]], respectively, and put $h=T/N$. Let $q(t,u,p)=D_\theta\ell(t,u,\theta)^T+D_\theta f(t,u,\theta)^Tp$ be the continuous running-gradient vector, evaluated on its exact state and adjoint as $q(t):=q(t,u(t),p(t))$. Suppose the exact and numerical state/adjoint pairs lie in a common tube and
$$\max_n\bigl(\|u_n-u(t_n)\|_2+\|p_n-p(t_n)\|_2\bigr)\le C_xh^p.$$
For the state part of this bound, it is sufficient that the hypotheses of [[thm-global-error-from-one-step-defect-and-stability]] hold with a uniform $O(h^{p+1})$ exact-start defect; the coefficient conditions of [[prop-explicit-rk-order-conditions-through-four]] supply that defect for an explicit Runge--Kutta method of order $p\le4$ under that item's $C^4$ and common-tube assumptions. No cited state-error result supplies the adjoint part, which is an independent hypothesis here. Suppose the numerical running-gradient vector $\widehat q_n$ also satisfies
$$\|\widehat q_n-q(t_n,u_n,p_n)\|_2\le C_dh^p,$$
the endpoint contributions in the two gradient formulas differ by at most $C_bh^p$, and the quadrature $Q_h(q)=\sum_{n=0}^Nw_nq(t_n)$ has nonnegative weights with $\sum_nw_n=T$ and
$$\left\|Q_h(q)-\int_0^Tq(t)\,dt\right\|_2\le C_Qh^p.$$
If $q$ is Lipschitz in $(u,p)$ on the common tube with constant $L_q$ in the sum norm, then
$$\|\nabla J_h-\nabla J\|_2\le\bigl(C_b+T(C_d+L_qC_x)+C_Q\bigr)h^p.$$
The adjoint, derivative-data and quadrature hypotheses are separate from state accuracy; without them the state estimate alone gives no gradient error conclusion.

## Facts & Assumptions

**Given:** The stated continuous and discrete objectives, exact adjoint formulas, uniform state/adjoint error bound, derivative-data perturbation bound, quadrature bound, and common compact tube.

[F1] [[thm-continuous-ode-adjoint-gradient-formula]]: the continuous gradient is the initial/terminal contribution plus $\int_0^T q(t)\,dt$.

[F2] [[thm-discrete-adjoint-gradient-recursion]]: the discrete gradient is the corresponding initial/terminal contribution plus the reverse-mode sum of the discrete running derivative terms.

[F3] [[thm-global-error-from-one-step-defect-and-stability]]: the common-tube, uniform local-defect, one-step stability and initial-error hypotheses imply the stated uniform state-error bound.

[F4] [[prop-explicit-rk-order-conditions-through-four]]: for an explicit tableau satisfying the stated coefficient equations through $p\le4$, a $C^4$ vector field on the common compact tube has uniform exact-start defect $O(h^{p+1})$. It supplies a state local-defect premise only; it makes no adjoint or tangent error claim.

[A1] The constants $C_b,C_x,C_d,C_Q,L_q$ are independent of $h$, and all error, quadrature and derivative-data hypotheses in the Statement hold.

## Proof

1.1 If the stated explicit Runge--Kutta conditions are used, [F4] supplies the exact-start defect required by [F3]. Under the stated stability, common-tube and initial-error hypotheses, [F3] gives the state part of the asserted $C_xh^p$ bound; the adjoint part remains the separately assumed bound. [F3, F4, given]

2.1 By [F1] and [F2], the two gradients are their respective endpoint terms plus, respectively, the weighted sum of $\widehat q_n$ and the integral of $q$. At each node, insert and subtract $q(t_n,u_n,p_n)$. The derivative-data assumption and Lipschitz bound give $\|\widehat q_n-q(t_n)\|_2\le(C_d+L_qC_x)h^p$. [A1, F1, F2, step 1.1, algebra]

3.1 Since $w_n\ge0$ and $\sum_nw_n=T$, the node-data perturbation contributes at most $T(C_d+L_qC_x)h^p$. The exact-integrand quadrature error contributes at most $C_Qh^p$, and the endpoint difference at most $C_bh^p$. The Euclidean triangle inequality gives the displayed bound. [A1, F1, F2, step 2.1, algebra] ∎

