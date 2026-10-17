---
id: thm-dobrushin-w1-stability-for-characteristic-flows
kind: theorem
title: Dobrushin stability in 1-Wasserstein distance for mean-field flows
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-p-one-wasserstein-one
  - def-globally-lipschitz-mean-field-kernel
  - def-characteristic-mean-field-solution
  - lem-w1-is-finite-on-probability-measures-with-finite-first-moment
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-gronwall-integral-inequality
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
proof_strategy: direct
axiom_use: No choice principle is used; no optimal coupling is selected.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: Simon Mayer, The Vlasov Equation and Mean Field Limit of a Particle System
      url: https://mathphys.pages.ist.ac.at/wp-content/uploads/sites/193/2023/10/Handout_Mayer.pdf
---

## Statement

Let $K$ have two-variable Lipschitz constant $L$ as in [[def-globally-lipschitz-mean-field-kernel]], and let $\mu_t,\nu_t$ be characteristic solutions from probability measures with finite first moments. For every $t\in[0,T]$,
$$W_1(\mu_t,\nu_t)\le e^{2Lt}W_1(\mu_0,\nu_0).$$
The estimate is proved for every prescribed initial coupling before taking the infimum; existence of an optimal coupling is not assumed.

## Facts & Assumptions

**Given:** Two characteristic solutions for the same kernel $K$, with finite-first-moment initial probabilities.

[F1] The two-variable kernel difference is at most $L(|x-x'|+|y-y'|)$ ([[def-globally-lipschitz-mean-field-kernel]]).

[F2] Each solution is the pushforward of its initial law by its characteristic flow ([[def-characteristic-mean-field-solution]]); the coordinatewise Borel pair maps take values in the Euclidean product Borel space ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F3] The relevant $W_1$ values are finite by the product-coupling bound ([[lem-w1-is-finite-on-probability-measures-with-finite-first-moment]]).

[F4] Tonelli and Fubini justify the nonnegative bounds and exchanges over the coupling and time variables ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Dominated convergence gives continuity of the transported cost from the integrable path supremum ([[thm-dominated-convergence]]).

[L1] If $u(t)\le a+\int_0^t b u(s)ds$ for nonnegative continuous $u$ and constants $a,b\ge0$, then $u(t)\le ae^{bt}$ ([[thm-gronwall-integral-inequality]]).

## Proof
1.1 Fix any $\pi_0\in\Pi(\mu_0,\nu_0)$ and transport it by the two flows: $\pi_t=(X_t,Y_t)_\#\pi_0.$ Its marginals are $\mu_t,\nu_t$. Set $D(t)=\int|X_t(x)-Y_t(y)|d\pi_0(x,y)$. This is finite and continuous by the first moments, the integrable path suprema, and [F5]. [F2, F3, F5, construct]

2.1 For each initial pair, subtract the characteristic equations and apply [F1]. Integrating over $\pi_0$ yields $D(t)\le D(0)+2L\int_0^tD(s)ds,$ because the first coordinate difference contributes $LD(s)$, while the averaged interaction-coordinate difference contributes another $LD(s)$ by the marginal identities of $\pi_0$. Applying [L1] gives $D(t)\le e^{2Lt}D(0)$. Since $\pi_t$ is an admissible coupling, [F3] implies $W_1(\mu_t,\nu_t)\le e^{2Lt}\int|x-y|d\pi_0$. [F1, F2, F3, F4, F5, L1, step 1.1]

3.1 The inequality in step 2.1 holds for every $\pi_0\in\Pi(\mu_0,\nu_0)$. Taking the infimum of its right side gives the Statement by the definition of $W_1$ in [F3]; no minimizer is required. [F3, step 2.1] ∎
