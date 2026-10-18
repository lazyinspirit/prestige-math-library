---
id: thm-periodic-pic-mean-field-error-with-force-defect
kind: theorem
title: Periodic PIC particle and force errors under a prescribed initial coupling
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-periodic-pic-regularized-grid-interaction-kernel
  - thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz
  - def-globally-lipschitz-mean-field-kernel
  - def-p-one-wasserstein-one
  - def-characteristic-mean-field-solution
  - def-mean-field-and-weighted-vortex-particle-systems
  - thm-gronwall-integral-inequality
  - thm-w1-dobrushin-stability-with-force-defect
proof_strategy: direct
axiom_use: No choice principle is used; every coupling bound is proved before its cost infimum.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: Simon Mayer, The Vlasov Equation and Mean Field Limit of a Particle System
      url: https://mathphys.pages.ist.ac.at/wp-content/uploads/sites/193/2023/10/Handout_Mayer.pdf
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Section 5-4
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

Fix $\varepsilon>0$ and grid width $h$. Let $\mathbb K_\varepsilon$ and $\mathbb K_{\varepsilon,h}$ be the phase kernels of [[def-periodic-pic-regularized-grid-interaction-kernel]], and let $L_\varepsilon$ be the two-variable global Lipschitz constant of [[thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz]]. Suppose a probability characteristic solution $\mu_t$ for $\mathbb K_\varepsilon$ and an equal-weight finite-particle grid solution with empirical law $\nu_t^h$ are defined on $[0,T]$, with finite first moments and integrable path suprema. Assume the uniform grid-force defect
$$ \delta_{\varepsilon,h}=\sup_{z,z'\in\mathbb R^{2d}} |\mathbb K_{\varepsilon,h}(z,z')-\mathbb K_\varepsilon(z,z')|<\infty . $$ If $\delta_0=W_1(\nu_0^h,\mu_0)$ is the actual initial empirical-measure error, then for every $0\le t\le T$, $$ W_1(\nu_t^h,\mu_t)\le e^{2L_\varepsilon t} \left(\delta_0+t\delta_{\varepsilon,h}\right). $$
No rate for $\delta_0$ is implied: in particular, no dimension-free $P^{-1/2}$ Wasserstein rate is assumed.

## Facts & Assumptions
**Given:** A fixed regularization and grid, a finite equal-weight particle path, a continuum characteristic solution, finite first moments, a prescribed initial coupling, and the uniform pair-kernel force defect.

[F1] [[def-periodic-pic-regularized-grid-interaction-kernel]]: the equal-weight particle system is $\dot z_i=P^{-1}\sum_j\mathbb K_{\varepsilon,h}(z_i,z_j)$ and the continuum kernel is $\mathbb K_\varepsilon$.

[F2] [[thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz]]: $\mathbb K_{\varepsilon,h}$ and $\mathbb K_\varepsilon$ have two-variable Lipschitz constants $L_{\varepsilon,h}$ and $L_\varepsilon$, respectively, in the stated sum convention.

[F3] [[def-p-one-wasserstein-one]]: $W_1$ is the infimum of $\int|z-z'|\,d\pi$ over Borel probability couplings of finite-first-moment laws; no minimizing coupling is part of the definition.

[F4] [[def-characteristic-mean-field-solution]]: a characteristic solution is the pushforward of its initial probability by an absolutely continuous label flow satisfying its integral equation.

[F5] [[thm-gronwall-integral-inequality]]: if $u(t)\le b\int_0^t u(s)\,ds$ for a nonnegative continuous $u$ and $b\ge0$, then $u(t)=0$.

[F6] [[thm-w1-dobrushin-stability-with-force-defect]]: for two characteristic flows of the same kernel with defects bounded by $\eta_\mu,\eta_\nu$, every initial coupling of cost $D_0$ gives transported cost at most $e^{2L_\varepsilon t}(D_0+(\eta_\mu+\eta_\nu)t)$.

## Proof

1.1 If particles $i$ and $j$ start at the same phase state, subtract their grid equations. The terms with common second argument satisfy $|z_i(t)-z_j(t)|\le L_{\varepsilon,h}\int_0^t|z_i(s)-z_j(s)|\,ds,$ because the two-variable Lipschitz bound in [F2] applies with only the first argument changed. By [F5], the two paths agree. Thus the finite particle flow defines a single path $X_t(a)$ for each distinct atom $a$ of $\nu_0^h$, independent of the label representing $a$. [F1, F2, F5, given, algebra]

2.1 Extend $X_t$ by the identity off the finite support of $\nu_0^h$. This is a jointly Borel map, its paths are absolutely continuous on that support, and their path suprema are integrable because the support is finite and each path is continuous on $[0,T]$. Also $\nu_t^h=(X_t)_\#\nu_0^h$. For a support point $a$, the finite system equation can be written as $r_h(t,a)=\int\left(\mathbb K_{\varepsilon,h}(X_t(a),X_t(b))-\mathbb K_\varepsilon(X_t(a),X_t(b))\right)d\nu_0^h(b).$ Thus $\dot X_t(a)=\int\mathbb K_\varepsilon(X_t(a),X_t(b))d\nu_0^h(b)+r_h(t,a)$. This measurable residual has norm at most $\delta_{\varepsilon,h}$ by the uniform defect hypothesis. The continuum characteristic flow has residual zero. [F1, F2, F4, given, step 1.1, algebra]

3.1 Fix any prescribed initial coupling $\pi_0$ of $\nu_0^h$ and $\mu_0$ with cost $D_0$. Apply [F6] to the two characteristic flows in steps 1.1–1.2, with $\eta_\mu=0$ and $\eta_\nu=\delta_{\varepsilon,h}$. The transported coupling has cost at most $e^{2L_\varepsilon t}(D_0+t\delta_{\varepsilon,h})$, so by [F3] the same expression bounds $W_1(\nu_t^h,\mu_t)$. [F2, F3, F4, F6, step 1.1, step 2.1]

4.1 Step 3.1 holds for every initial coupling. Taking the infimum over its initial cost $D_0$ gives $\delta_0$ by [F3], yielding the claimed inequality. No coupling attaining the infimum is selected. [F3, step 3.1] ∎
