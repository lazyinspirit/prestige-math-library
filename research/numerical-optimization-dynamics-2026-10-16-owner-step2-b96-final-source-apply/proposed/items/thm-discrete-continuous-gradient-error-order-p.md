---
id: thm-discrete-continuous-gradient-error-order-p
kind: theorem
title: Discrete and continuous ODE gradients agree to order p under augmented error bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-discrete-adjoint-gradient-recursion, thm-continuous-ode-adjoint-gradient-formula, thm-global-error-from-one-step-defect-and-stability, prop-explicit-rk-order-conditions-through-four, lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order, lem-explicit-rk-differentiated-stages-give-local-c1-order]
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
For the state part of this bound, it is sufficient that the hypotheses of [[thm-global-error-from-one-step-defect-and-stability]] hold with a uniform $O(h^{p+1})$ exact-start defect; the coefficient conditions of [[prop-explicit-rk-order-conditions-through-four]] supply that defect for an explicit Runge--Kutta method of order $p\le4$ under that item's $C^4$ and common-tube assumptions. No cited state-error result supplies the adjoint part, which is an independent hypothesis here. Write $b$ and $b_h$ for the column initial/terminal contribution vectors in the continuous and discrete gradient formulas. Assume the discrete running-gradient terms admit vectors $\widehat q_n$ and nonnegative weights $w_n$, $0\le n\le N$, with
$$\nabla J_h=b_h+\sum_{n=0}^N w_n\widehat q_n,\qquad \nabla J=b+\int_0^Tq(t)\,dt,\qquad \sum_{n=0}^Nw_n=T.$$
The weighted discrete representation is an explicit premise; it is not implied by the generic finite state-step adjoint recursion. Suppose
$$\|\widehat q_n-q(t_n,u_n,p_n)\|_2\le C_dh^p,\qquad \|b_h-b\|_2\le C_bh^p,$$
and that the same weights give the quadrature $Q_h(q)=\sum_{n=0}^Nw_nq(t_n)$ satisfying
$$\left\|Q_h(q)-\int_0^Tq(t)\,dt\right\|_2\le C_Qh^p.$$
If $q$ is Lipschitz in $(u,p)$ on the common tube with constant $L_q$ in the sum norm, then
$$\|\nabla J_h-\nabla J\|_2\le\bigl(C_b+T(C_d+L_qC_x)+C_Q\bigr)h^p.$$
The adjoint, derivative-data and quadrature hypotheses are separate from state accuracy; without them the state estimate alone gives no gradient error conclusion.

There is also the following independent method-consistency conclusion. Under the local $C^1$ step-and-cost consistency, derivative stability, derivative Lipschitz, initial-data, terminal-derivative and tube hypotheses of [[lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order]], the actual numerical graph satisfies
$$\max_n\|D_\theta u_n-D_\theta u(t_n)\|_2\le C_Sh^p,\qquad \max_n\|p_n-p(t_n)\|_2\le C_Ph^p,$$
$$\|\nabla J_h-\nabla J\|_2\le C_Gh^p,$$
with that lemma's explicit constants, together with its state bound. These conclusions derive the global tangent and adjoint errors from local map errors. They do not assume the preceding global state/adjoint bound or weighted representation.

In particular, [[lem-explicit-rk-differentiated-stages-give-local-c1-order]] supplies these local hypotheses for the actual explicit RK state map and the cost using the same tableau, under its common-tube, base $C^2$, and local augmented-order hypotheses. For $p\le4$, its augmented $C^4$ hypothesis and the existing coefficient conditions suffice; jointly $C^5$ base data are an explicit sufficient smoothness condition, and its displayed classical RK4 tableau gives a concrete order-four instance. Generic $p$ is retained through its genuine local augmented-order hypothesis. This branch permits negative or zero RK weights and makes no internal-stage adjoint accuracy claim.

## Facts & Assumptions

**Given:** In the weighted conclusion, the stated continuous and discrete objectives, exact adjoint formulas, uniform state/adjoint error bound, derivative-data perturbation bound, quadrature bound, and common compact tube. In the method-consistency conclusion, the actual step and cost maps and the separate local hypotheses of the two cited local lemmas.

[F1] [[thm-continuous-ode-adjoint-gradient-formula]]: the continuous gradient is the initial/terminal contribution plus $\int_0^T q(t)\,dt$.

[F2] [[thm-discrete-adjoint-gradient-recursion]]: the discrete gradient is the corresponding initial/terminal contribution plus the reverse-mode sum of the discrete running derivative terms.

[F3] [[thm-global-error-from-one-step-defect-and-stability]]: the common-tube, uniform local-defect, one-step stability and initial-error hypotheses imply the stated uniform state-error bound.

[F4] [[prop-explicit-rk-order-conditions-through-four]]: for an explicit tableau satisfying the stated coefficient equations through $p\le4$, a $C^4$ vector field on the common compact tube has uniform exact-start defect $O(h^{p+1})$. It supplies a state local-defect premise only when applied just to the state field; it makes no adjoint or tangent error claim by itself.

[F5] [[lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order]] derives global state, actual tangent, nodal-adjoint and gradient errors by comparing the exact-flow and numerical graphs under its local value/first-derivative hypotheses.

[F6] [[lem-explicit-rk-differentiated-stages-give-local-c1-order]] identifies derivatives of actual RK stages and matching cost quadrature with the same augmented method, verifies the local hypotheses of [F5], and instantiates local augmented order through four using [F4] on the augmented field.

[A1] For the weighted conclusion, the constants $C_b,C_x,C_d,C_Q,L_q$ are independent of $h$, and all error, quadrature and derivative-data hypotheses in that part of the Statement hold.

[A2] For the independent method-consistency conclusion, every hypothesis of [F5] holds, or is supplied by [F6] together with the initial and terminal hypotheses of [F5]. No global adjoint-error estimate is included in [A2].

## Proof

1.1 If the stated explicit Runge--Kutta conditions are used for the state field, [F4] supplies the exact-start defect required by [F3]. Under the stated stability, common-tube and initial-error hypotheses, [F3] gives the state part of the asserted $C_xh^p$ bound; the adjoint part in the weighted conclusion remains the separately assumed bound. [F3, F4, A1]

2.1 By [F1], [F2], and the explicit weighted representation in the Statement, the two gradients are their respective endpoint terms plus, respectively, the weighted sum of $\widehat q_n$ and the integral of $q$. At each node, insert and subtract $q(t_n,u_n,p_n)$. The derivative-data assumption and Lipschitz bound give $\|\widehat q_n-q(t_n)\|_2\le(C_d+L_qC_x)h^p$. [A1, F1, F2, step 1.1, algebra]

3.1 Since $w_n\ge0$ and $\sum_nw_n=T$, the node-data perturbation contributes at most $T(C_d+L_qC_x)h^p$. The exact-integrand quadrature error contributes at most $C_Qh^p$, and the endpoint difference at most $C_bh^p$. The Euclidean triangle inequality gives the displayed weighted bound. [A1, F1, F2, step 2.1, algebra]

4.1 Independently assume [A2]. Apply [F5] to the actual maps defining $J_h$ and the exact interval flow and running-cost maps defining $J$. Its forward recurrences give state and tangent errors, its backward recurrence gives the nodal-adjoint error, and its graph-gradient comparison gives the stated $C_Gh^p$ bound. This argument uses no weighted decomposition. [A2, F5]

4.2 For the RK specialization, [F6] differentiates the actual finite stages, proves the local derivative-size and Lipschitz bounds, and obtains the needed local $C^1$ consistency from augmented local order. Its application of [F4] to the augmented field verifies this order for $p\le4$ under the actual augmented smoothness and tube assumptions. Its RK4 coefficient calculation supplies the concrete fourth-order instance. Therefore step 4.1 applies. [A2, F4, F6, step 4.1] ∎
