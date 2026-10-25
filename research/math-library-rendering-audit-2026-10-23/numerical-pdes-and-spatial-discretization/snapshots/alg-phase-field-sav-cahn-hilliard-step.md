---
id: alg-phase-field-sav-cahn-hilliard-step
kind: algorithm
title: First-order scalar-auxiliary-variable Cahn–Hilliard step
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
justified_by: [thm-phase-field-sav-modified-energy-law]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§3, equations (3.1)–(3.2), printed pp. 409–410 / PDF pp. 3–4, for the continuous SAV reformulation and modified-energy law; §4, equations (4.2)–(4.5) and Theorem 4.1, printed pp. 411–412 / PDF pp. 5–6, for a general H^{-1} SAV flow and its Crank–Nicolson energy law. The backward-Euler Cahn–Hilliard equations are specified locally here."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Use either Cahn–Hilliard realization of [[def-phase-field-discrete-realizations]]. Write $X_h=\mathbb R^{\mathcal K}$ for the finite-volume state space and $X_h=V_h$ for the conforming interval state space; use the specified inner product $\langle\cdot,\cdot\rangle_h$ in each case. Set $E_{1,h}=E_{c,h}-E_{e,h}$. Since $F_\varepsilon(s)=(s^2-1)^2/(4\varepsilon^2)\ge0$, this is nonnegative. Explicitly,
$$E_{1,h}(u)=\sum_{K\in\mathcal K}|K|F_\varepsilon(u_K)\quad\text{in the finite-volume realization},$$
and
$$E_{1,h}(u_h)=\int_0^L F_\varepsilon(u_h(x))\,dx\quad\text{in the conforming interval realization}.$$
Its Riesz gradient $g_{1,h}(u)=\nabla_hE_{1,h}(u)$ is specified in the finite-volume realization by $(g_{1,h}(u))_K=f_\varepsilon(u_K)$, where $f_\varepsilon=F_\varepsilon'$. In the conforming interval realization it is the unique $g_{1,h}(u_h)\in V_h$ satisfying
$$\langle g_{1,h}(u),v_h\rangle_h=\int_0^L f_\varepsilon(u_h(x))v_h(x)\,dx\qquad(v_h\in V_h),$$
with the exact $L^2$ inner product from that realization.

**Inputs:** $u^n\in X_h$, $r^n\in\mathbb R$, and parameters $\varepsilon,\kappa,M,\tau,C_0>0$. Set $\alpha_n=(E_{1,h}(u^n)+C_0)^{-1/2}$. **Output:** the tuple $(u^{n+1},r^{n+1},\mu^{n+1})$ obtained by solving the linear equations
$$\frac{u^{n+1}-u^n}{\tau}=-M A_h\mu^{n+1},$$
$$\mu^{n+1}=\kappa A_hu^{n+1}+\alpha_n r^{n+1}g_{1,h}(u^n),$$
$$r^{n+1}-r^n=\frac{\alpha_n}{2}\langle g_{1,h}(u^n),u^{n+1}-u^n\rangle_h.$$
The initial scalar may be set to $r^0=\sqrt{E_{1,h}(u^0)+C_0}$. After a step, $r^{n+1}$ is an independent auxiliary variable determined by the third equation; the scheme does not impose $r^{n+1}=\sqrt{E_{1,h}(u^{n+1})+C_0}$.

## Remarks

The separate result [[thm-phase-field-sav-modified-energy-law]] proves unique solvability of this linear system and its modified-energy identity.
