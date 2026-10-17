---
id: thm-ctrl1-objective-and-control-error-from-consistency-bounds
kind: theorem
title: "Strong convexity converts transcription objective error into a control bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, thm-ctrl1-lqr-existence-and-unique-optimal-control, thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch, lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]
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

## Facts & Assumptions

**Given:** The LQR model, $r>0$, a continuous minimizer, two feasible controls, and the three finite objective inequalities in the Statement.

[F1] The global variational inequality holds at a minimizer over any convex feasible set ([[thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch]]).

[F2] The LQR objective has the exact quadratic expansion with nonnegative state remainders and control remainder at least $\frac r2\|v-u\|_2^2$ ([[def-ctrl1-linear-lqr-control-problem]], [[lem-ctrl1-measurable-linear-ode-state-map]]).

## Proof

1.1 Apply [F2] with $u=u^*$ and any $v\in\mathcal F$. The variational inequality [F1] makes the linear term nonnegative, while the state and terminal quadratic remainders are nonnegative and the control remainder is at least $\frac r2\|v-u^*\|_2^2$. Thus $J(v)-J(u^*)\ge\frac r2\|v-u^*\|_2^2\ge0$ for every feasible $v$, which is the asserted quadratic growth inequality. [F1, F2, given, algebra]

2.1 The assumed inequalities and consistency give $J(u_N)\le J_N(u_N)+\delta_N\le J_N(v_N)+\eta_N+\delta_N\le J(v_N)+\eta_N+2\delta_N\le J(u^*)+\rho_N+\eta_N+2\delta_N$. Subtract $J(u^*)$ and combine with step 1.1 to get the objective-gap bound. [given, step 1.1, algebra]

3.1 Apply the growth inequality of step 1.1 at $v=u_N$. Substitute the upper objective-gap bound from step 2.1, divide by $r/2>0$, and take nonnegative square roots to obtain the control-error estimate. [step 1.1, step 2.1, algebra] ∎
