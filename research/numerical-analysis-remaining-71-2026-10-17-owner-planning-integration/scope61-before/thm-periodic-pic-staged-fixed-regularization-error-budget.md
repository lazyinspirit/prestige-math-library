---
id: thm-periodic-pic-staged-fixed-regularization-error-budget
kind: theorem
title: Staged fixed-regularization PIC error budget
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - thm-periodic-pic-smooth-density-grid-force-consistency
  - def-periodic-pic-regularized-grid-interaction-kernel
  - thm-periodic-pic-mean-field-error-with-force-defect
  - thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube
  - def-p-one-wasserstein-one
proof_strategy: direct
axiom_use: No choice principle is used; each coupling estimate is established before taking its infimum.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Chapters 4 and 5
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Fix $\varepsilon>0$, grid width $h$, particle count $P$, and $T>0$. Assume the smooth fixed-regularization hypotheses of [[thm-periodic-pic-smooth-density-grid-force-consistency]], and that the translated unit-source regularized densities $\eta_\varepsilon(\cdot-y)-L^{-d}$ satisfy its derivative bounds uniformly in $y$. Let $\delta_{\varepsilon,h}$ be the uniform phase-kernel defect from [[thm-periodic-pic-mean-field-error-with-force-defect]]. The consistency theorem gives the explicit estimate
$$ \delta_{\varepsilon,h} \le |cQ|\left[ L^{d/2}h^{2-d/2}\bigl(\gamma_{N,L}C_{\rm src}^{(1)}+C_3^{(1)}\bigr) +C_{\rm int}^{(1)}h^2 \right], $$ where $C_{\rm src}^{(1)},C_3^{(1)},C_{\rm int}^{(1)}$ are the constants of that theorem evaluated at a unit point source; translation of the continuum source leaves their derivative suprema unchanged, while the shape quadrature constants are independent of the translate. Define the RK4 empirical measure by $\nu_{P,h}^{\Delta t}(t_n)=P^{-1}\sum_{p=1}^P\delta_{z_p^{\Delta t}(t_n)}$. Put $$ \delta_0=W_1(\nu_0^h,\mu_0),\qquad C_{\rm RK}= \begin{cases} C_4(e^{L_*T}-1)/L_*,&L_*>0,\\ C_4T,&L_*=0, \end{cases} $$ using the constants of [[thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube]]. For exact initialization, a common admissible initial coupling, and the same compact-tube hypotheses, the RK4 empirical measure $\nu_{P,h}^{\Delta t}(t_n)$ and regularized characteristic solution $\mu_\varepsilon(t_n)$ satisfy $$ W_1\!\left(\nu_{P,h}^{\Delta t}(t_n),\mu_\varepsilon(t_n)\right) \le \frac{C_{\rm RK}}{\sqrt P}\Delta t^4 +e^{2L_\varepsilon T}\left(\delta_0+T\delta_{\varepsilon,h}\right), \qquad t_n\le T. $$
The terms are time error, prescribed initial empirical error, and fixed-$\varepsilon$ mesh-force error. No universal rate for $\delta_0$ and no $\varepsilon\to0$ singular Vlasov–Poisson limit is asserted.

## Facts & Assumptions
**Given:** The fixed-$\varepsilon$ smooth regularized characteristic solution, the finite grid particle solution, a prescribed initial coupling of finite cost, exact initialization, and the common RK4 tube and stage assumptions.

[F1] [[thm-periodic-pic-smooth-density-grid-force-consistency]]: the gathered grid field error is bounded by $L^{d/2}h^{2-d/2}(\gamma C_{\rm src}+C_3)+C_{\rm int}h^2$ with all constants explicit in the source/field derivatives.

[F2] [[thm-periodic-pic-mean-field-error-with-force-defect]]: its proof transports every prescribed initial coupling of cost $D_0$ to an exact-grid/continuum coupling of cost at most $e^{2L_\varepsilon t}(D_0+t\delta_{\varepsilon,h})$.

[F3] [[thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube]]: exact initialization gives stacked state error at most $C_{\rm RK}\Delta t^4$ through time $T$.

[F4] [[def-p-one-wasserstein-one]]: $W_1$ is the infimum of coupling costs for probability measures with finite first moment.

## Proof

1.1 Apply [F1] to each unit source $\mu=\delta_y$. The explicit constants in [F1] depend on the source through $\|\mu\|_{\rm TV}$ and suprema of derivatives of its continuum potential and field. Here $\|\delta_y\|_{\rm TV}=1$, and those continuum functions for $\delta_y$ are translates of the functions for $\delta_0$; their derivative suprema are therefore independent of $y$. The shape quadrature constants also do not depend on the translate. Thus one set of constants $C_{\rm src}^{(1)},C_3^{(1)},C_{\rm int}^{(1)}$ gives the stated uniform phase-kernel defect bound, without asserting translation invariance of the finite grid kernel. [F1, given, algebra]

1.2 Let $A$ be the finite support of $\nu_0^h$ and $I_a=\{p:z_p^h(0)=a\}$, $m_a=|I_a|$ for $a\in A$. For any prescribed coupling $\pi_0$ of $\nu_0^h$ and $\mu_0$, define a measure on the second coordinate for each label $p\in I_a$ by $\lambda_p(B)=\pi_0(\{a\}\times B)/m_a$. Since $\nu_0^h(\{a\})=m_a/P$, each $\lambda_p$ has mass $1/P$, and for each $a$ the sum over $p\in I_a$ is $\pi_0(\{a\}\times\cdot)$. By the duplicate-path argument in [[thm-periodic-pic-mean-field-error-with-force-defect]], all labels in $I_a$ share the same exact path $X_t(a)$. Thus summing these label measures gives exactly the pushforward $\Pi_t=(X_t,Y_t)_\#\pi_0$, the Dobrushin-transported coupling, where $Y_t$ is the continuum characteristic flow. In particular, $\Pi_t$ has the exact grid and continuum marginals. Its cost is at most $e^{2L_\varepsilon T}(D_0+T\delta_{\varepsilon,h})$ by [F2]. Replace $z_p^h(t)$ in each summand by the RK4 state $z_p^{\Delta t}(t)$. The resulting measure is a coupling of $\nu_{P,h}^{\Delta t}(t)$ and $\mu_\varepsilon(t)$, and pointwise triangle inequality increases its cost by at most $P^{-1}\sum_p|z_p^{\Delta t}-z_p^h|$. By Cauchy–Schwarz this is at most $P^{-1/2}\|Z^{\Delta t}-Z^h\|_2\le P^{-1/2}C_{\rm RK}\Delta t^4$ using [F3]. This gives the claimed bound with $D_0$ in place of $\delta_0$. [F2, F3, given, algebra]

2.1 The bound of step 1.2 holds for every prescribed initial coupling. Taking the infimum of $D_0$ gives $\delta_0$ by [F4], without selecting a minimizing plan. This proves the stated staged error budget. [F4, step 1.2] ∎
