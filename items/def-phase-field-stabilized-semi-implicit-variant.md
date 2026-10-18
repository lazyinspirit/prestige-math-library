---
id: def-phase-field-stabilized-semi-implicit-variant
kind: definition
title: Stabilized semi-implicit phase-field step
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: '§2.1.1, equation (2.6), PDF pp. 4–5, for the stabilized Allen–Cahn update; §3.1.1, equation (3.7), printed p. 1682 / PDF p. 14, for its Cahn–Hilliard counterpart. The paper writes its stabilization as $S/\varepsilon^2$ and takes unit mobility and stiffness; the definition here permits general $M,\kappa$ and defines its own coefficient $S$. The source''s stability statements require the hypotheses stated there and are not imported.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

On either discrete realization of [[def-phase-field-discrete-realizations]], write $X_h=\mathbb R^{\mathcal K}$ for the finite-volume state space and $X_h=V_h$ for the conforming interval state space; use its inner product $\langle\cdot,\cdot\rangle_h$ and the energy components $E_{c,h},E_{e,h}$ defined there. Let $g_h(u)=\nabla_h(E_{c,h}-E_{e,h})(u)$ be the Riesz gradient of the full potential energy. In the finite-volume realization, $(g_h(u))_K=f_\varepsilon(u_K)$. In the conforming interval realization, $g_h(u)\in V_h$ is defined by
$$\langle g_h(u),v_h\rangle_h=\int_0^L f_\varepsilon(u_h(x))v_h(x)\,dx\qquad(v_h\in V_h),$$
where $\langle\cdot,\cdot\rangle_h$ is the exact $L^2$ inner product. Given a previous state $u^n\in X_h$, parameters $\varepsilon,\kappa,M,\tau>0$, and a stabilization parameter $S\ge0$, the **stabilized semi-implicit Allen–Cahn step** is the linear equation
$$\frac{u^{n+1}-u^n}{\tau}=-M\left(\kappa A_hu^{n+1}+g_h(u^n)+S(u^{n+1}-u^n)\right).$$
For the same input, the **stabilized semi-implicit Cahn–Hilliard step** is
$$\frac{u^{n+1}-u^n}{\tau}=-M A_h\mu^{n+1},\qquad \mu^{n+1}=\kappa A_hu^{n+1}+g_h(u^n)+S(u^{n+1}-u^n).$$
These formulas define alternative updates with an explicitly lagged nonlinear potential and an added increment term. No energy law, unconditional solvability, maximum principle, or error estimate is asserted here for the quartic double well; any such property requires its own hypotheses and proof. In particular, no stability estimate proved for the convex-splitting update is silently transferred to this variant.
