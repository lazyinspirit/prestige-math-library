---
id: thm-w1-dobrushin-stability-with-force-defect
kind: theorem
title: Probability W1 stability under bounded force defects
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-p-one-wasserstein-one
  - def-globally-lipschitz-mean-field-kernel
  - def-characteristic-mean-field-solution
  - lem-w1-is-finite-on-probability-measures-with-finite-first-moment
  - thm-gronwall-integral-inequality
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
proof_strategy: direct
axiom_use: No choice is used in the coupling estimate; an optimal coupling is not assumed.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: Simon Mayer, The Vlasov Equation and Mean Field Limit of a Particle System
      url: https://mathphys.pages.ist.ac.at/wp-content/uploads/sites/193/2023/10/Handout_Mayer.pdf
---

## Statement

Let $K$ have two-variable global Lipschitz constant $L$ as in [[def-globally-lipschitz-mean-field-kernel]]. Let $\mu_t=(X_t)_\#\mu_0$ and $\nu_t=(Y_t)_\#\nu_0$ be probability curves from finite-first-moment initial laws, with absolutely continuous characteristic paths satisfying
$$\dot X_t(x)=\int K(X_t(x),X_t(z))d\mu_0(z)+r_\mu(t,x),\qquad \dot Y_t(y)=\int K(Y_t(y),Y_t(w))d\nu_0(w)+r_\nu(t,y)$$
for almost every time and almost every label, with $X_0(x)=x$ and $Y_0(y)=y$. Assume additionally the weighted path integrability conditions $\int\sup_{s\le T}|X_s|d\mu_0<\infty$ and $\int\sup_{s\le T}|Y_s|d\nu_0<\infty$. Assume the measurable label defects satisfy $|r_\mu|\le\eta_\mu$ and $|r_\nu|\le\eta_\nu$ on $[0,T]$. For every prescribed initial coupling $\pi_0$ of cost $D_0$, its transport by the two characteristic paths has cost at time $t$ at most
$$e^{2Lt}\bigl(D_0+(\eta_\mu+\eta_\nu)t\bigr).$$
Consequently $W_1(\mu_t,\nu_t)\le e^{2Lt}\bigl(W_1(\mu_0,\nu_0)+(\eta_\mu+\eta_\nu)t\bigr)$. The estimate is first proved for each coupling; no optimal plan is assumed.

## Facts & Assumptions

**Given:** Two characteristic flows for the same kernel, finite-first-moment probability initial laws, bounded label defects, and a fixed initial coupling.

[F1] The two-variable kernel difference is at most $L(|x-x'|+|y-y'|)$ ([[def-globally-lipschitz-mean-field-kernel]]).

[F2] The characteristic equations and pushforward laws are those in [[def-characteristic-mean-field-solution]].

[F3] Product coupling shows the initial $W_1$ infimum is finite ([[lem-w1-is-finite-on-probability-measures-with-finite-first-moment]]).

[F4] Gronwall gives $u(t)\le a(t)e^{bt}$ when $u(t)\le a(t)+b\int_0^tu(s)ds$ and $a$ is nondecreasing ([[thm-gronwall-integral-inequality]]).

[F5] Tonelli and Fubini justify integration of the coupled force bounds over the two label measures and time ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] Dominated convergence gives continuity of the transported cost from the integrable path suprema ([[thm-dominated-convergence]]).

## Proof
1.1 Transport the prescribed coupling by the two flows: $\pi_t=(X_t,Y_t)_\#\pi_0.$ Its marginals are $\mu_t,\nu_t$. Put $D(t)=\int|X_t(x)-Y_t(y)|d\pi_0(x,y)$. This is finite and continuous by the first moments, integrable path suprema, and [F6]. [F2, F3, F6, construct]

2.1 Subtract the two characteristic equations and apply [F1, F5]. Integrating over the outer coupling, whose mass is one, gives $D(t)\le D_0+2L\int_0^tD(s)ds+(\eta_\mu+\eta_\nu)t.$ The inhomogeneous term is nondecreasing, so [F4] yields $D(t)\le e^{2Lt}(D_0+(\eta_\mu+\eta_\nu)t)$. Since $\pi_t$ is a coupling, this is the asserted transported-coupling bound. [F1, F2, F4, F5, F6, step 1.1]

3.1 The bound in step 2.1 holds for every initial coupling. Taking the infimum over their costs gives the claimed $W_1$ inequality by [F3] and the definition of $W_1$. [F3, step 2.1] ∎
