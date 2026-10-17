---
id: thm-ctrl1-objective-and-control-error-from-consistency-bounds
kind: theorem
title: "Strong convexity converts transcription objective error into a control bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence, def-countable-choice, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–248: transcription objectives and nonlinear-program solution concepts; the conditional error conversion is proved locally."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.5"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 21–25: coercive LQ costs, adjoints, and optimality; this theorem gives the explicit strong-convexity estimate."
---

## Statement

Let $u^*$ minimize the LQR objective $J$ on a convex feasible set $\mathcal F$, with control weight $R(t)\succeq rI$ for $r>0$. Let $u_N\in\mathcal F$ and let $v_N\in\mathcal F$ be a recovered comparison control. Suppose the computed objective $J_N$ satisfies $|J_N(w)-J(w)|\le\delta_N$ for $w=u_N,v_N$, and $J_N(u_N)\le J_N(v_N)+\eta_N$. If $J(v_N)\le J(u^*)+\rho_N$, then $J(v)-J(u^*)\ge\frac r2\|v-u^*\|_2^2$ for every $v\in\mathcal F$, and
$$0\le J(u_N)-J(u^*)\le2\delta_N+\eta_N+\rho_N,\qquad \|u_N-u^*\|_{L^2}\le\sqrt{\frac{2(2\delta_N+\eta_N+\rho_N)}{r}}.$$
The conclusion is conditional on the stated objective consistency and comparison bounds. A raw embedded RK error estimate is not a certified value of $\delta_N$.

Here are sufficient bounds that derive the two error terms from transcription errors and recovery. Set $C_s=e^{\|A\|_\infty T}\|B\|_\infty\sqrt T$, $M_c=\sup_{c\in U_c}\|c\|_2$, $M_x=e^{\|A\|_\infty T}(\|x_0\|_2+\|B\|_\infty T M_c)$, $E=\sqrt T M_x+\|x_d\|_2$, and $M_T=M_x+\|x_T\|_2$. Suppose, for $w=u_N,v_N$, a pointwise representative and sampling rule are fixed, $J_N(w)$ has the form
$$J_N(w)=\sum_k\omega_{Nk}\widetilde\ell_{N,w}(\tau_{Nk})+\tfrac12(\widetilde x_N[w](T)-x_T)^TP(\widetilde x_N[w](T)-x_T),$$
where $\widetilde\ell_{N,w}(t)=\tfrac12((\widetilde x_N[w](t)-x_d(t))^TQ(t)(\widetilde x_N[w](t)-x_d(t))+w(t)^TR(t)w(t))$, $\omega_{Nk}\ge0$, $\sum_k\omega_{Nk}=T$, and the chosen samples satisfy $\|Q(\tau_{Nk})\|_2\le\|Q\|_\infty$. Suppose $\|\widetilde x_N[w]-x_w\|_\infty\le e_N$, $\|x_w(\tau_{Nk})-x_d(\tau_{Nk})\|_2\le E_N$, $\|x_w(T)-x_T\|_2\le M_T$, and
$$\left|\sum_k\omega_{Nk}\ell_w(\tau_{Nk})-\int_0^T\ell_w(t)dt\right|\le q_N,$$
where $\ell_w(t)=\tfrac12((x_w(t)-x_d(t))^TQ(t)(x_w(t)-x_d(t))+w(t)^TR(t)w(t))$. Then one may take
$$\delta_N=q_N+\tfrac T2\|Q\|_\infty(2E_N+e_N)e_N+\tfrac12\|P\|(2M_T+e_N)e_N.$$
If a feasible recovery sequence also satisfies $\|v_N-u^*\|_2\le\sigma_N$, then one may take $\rho_N=C_J\sigma_N$, where
$$C_J=\|Q\|_\infty E\sqrt T C_s+\|P\|M_T C_s+M\sqrt T M_c,$$
with $M$ any essential upper bound for $\|R(t)\|_2$. In the control-only case, under Countable Choice the cell-average lemma supplies $v_N=P_Nu^*$ and $\sigma_N\to0$. If $u^*$ is Lipschitz with constant $L_u$, then $\sigma_N=\sqrt T L_u h_N$ is a valid rate for mesh size $h_N$. For a general $L^2$ minimizer, no rate for $\sigma_N$ is asserted.

## Facts & Assumptions

**Given:** The LQR model, $r>0$, a continuous minimizer, two feasible controls, and the finite objective inequalities in the Statement. For the explicit numerical-error estimate, also assume the stated pointwise sampling, state, and quadrature bounds.

[F1] The state map is affine and bounded from $L^2$ to the supremum norm ([[lem-ctrl1-measurable-linear-ode-state-map]]).

[F2] Expanding the LQR quadratic forms for $d=v-u$ gives
$$J(v)-J(u)=G_u[d]+\tfrac12\int_0^T(\delta x^TQ\delta x+d^TRd)dt+\tfrac12\delta x(T)^TP\delta x(T),$$
where $\delta x=x_v-x_u$ and $G_u[d]=\int_0^T((x_u-x_d)^TQ\delta x+u^TRd)dt+(x_u(T)-x_T)^TP\delta x(T)$; this follows from [F1] and the definition of $J$ ([[def-ctrl1-linear-lqr-control-problem]], [[lem-ctrl1-measurable-linear-ode-state-map]]).

[F3] For admissible controls, $\|u\|_2\le\sqrt T M_c$ and $\|x_u\|_\infty\le M_x$ by compactness of $U_c$ and the state-map bound ([[def-ctrl1-linear-lqr-control-problem]], [[lem-ctrl1-measurable-linear-ode-state-map]]).

[A1] Countable Choice is assumed only for the control-only cell-average recovery specialization ([[def-countable-choice]], [[lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence]]).

## Proof

1.1 Fix $v\in\mathcal F$ and put $d=v-u^*$. Convexity gives $u^*+\theta d\in\mathcal F$ for $0\le\theta\le1$. By [F2], $J(u^*+\theta d)-J(u^*)=\theta G_{u^*}[d]+\theta^2 R_d$, where $R_d=\tfrac12\int_0^T(\delta x_d^TQ\delta x_d+d^TRd)dt+\tfrac12\delta x_d(T)^TP\delta x_d(T)$. Minimality makes this expression nonnegative for $0<\theta\le1$; divide by $\theta$ and let $\theta\downarrow0$ to get $G_{u^*}[d]\ge0$. Also $R_d\ge\frac r2\|d\|_2^2$ since $Q,P\succeq0$ and $R\succeq rI$. Taking $\theta=1$ proves $J(v)-J(u^*)\ge\frac r2\|v-u^*\|_2^2$. [F2, given, algebra]

2.1 The assumed inequalities and consistency give $J(u_N)\le J_N(u_N)+\delta_N\le J_N(v_N)+\eta_N+\delta_N\le J(v_N)+\eta_N+2\delta_N\le J(u^*)+\rho_N+\eta_N+2\delta_N$. Subtract $J(u^*)$ and combine with step 1.1 to get the objective-gap bound. [given, step 1.1, algebra]

3.1 Apply the growth inequality of step 1.1 at $v=u_N$. Substitute the upper objective-gap bound from step 2.1, divide by $r/2>0$, and take nonnegative square roots to obtain the control-error estimate. [step 1.1, step 2.1, algebra]

4.1 For the stated sampled objective, subtract the quadrature of $\ell_w$ evaluated at the exact state. At every quadrature node, the state-cost difference is bounded by $\tfrac12\|Q\|_\infty(2E_N+e_N)e_N$; the control-cost summand is unchanged. Nonnegative weights with sum $T$ therefore bound the accumulated state perturbation by $\tfrac T2\|Q\|_\infty(2E_N+e_N)e_N$. The exact-state quadrature discrepancy is at most $q_N$. At $T$, the terminal quadratic difference is at most $\tfrac12\|P\|(2M_T+e_N)e_N$. Thus $|J_N(w)-J(w)|\le\delta_N$ for $w=u_N,v_N$ with the displayed $\delta_N$. [given, F3, algebra]

5.1 For any feasible $v$ with $\|v-u^*\|_2\le\sigma$, [F2] and [F3] bound the absolute difference of the state running terms by $\|Q\|_\infty E\sqrt T C_s\sigma$, the terminal terms by $\|P\|M_T C_s\sigma$, and the control terms by $M\sqrt T M_c\sigma$. Hence $J(v)-J(u^*)\le C_J\sigma$. Under [A1] the cell-average lemma gives strong recovery for the control-only case. If $u^*$ is $L_u$-Lipschitz, for each $t$ in a cell its distance from the cell average is at most $L_uh_N$, so $\|P_Nu^*-u^*\|_2\le\sqrt T L_uh_N$. Substitution gives the stated $\rho_N$ rate and completes the sufficient-estimate branch. [A1, F2, F3, given, algebra] ∎
