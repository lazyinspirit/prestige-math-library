---
id: thm-signed-dobrushin-stability-with-force-defect
kind: theorem
title: Signed Dobrushin stability with bounded force defects
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-bounded-lipschitz-dual-norm-for-signed-measures
  - def-signed-split-transport-cost
  - def-axiom-of-choice
  - thm-jordan-decomposition-for-signed-measures
  - def-signed-vorticity-characteristic-solution
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - def-countable-choice
  - lem-signed-bl-norm-dominated-by-split-coupling-cost
  - def-mollified-biot-savart-vortex-kernel
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - thm-gronwall-integral-inequality
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
axiom_use: AC supplies the Jordan parts. Countable Choice is used for the cited mollified-kernel regularity supplier; the stability estimate is conditional on the stated paths and uses no optimal split coupling.
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

Assume AC and Countable Choice. Let $K_\varepsilon$ have one-variable Lipschitz constant $L_\varepsilon$; then $(x,y)\mapsto K_\varepsilon(x-y)$ has two-variable constant $L_\varepsilon$. Let $\omega_0,\nu_0$ have separately matching positive and negative Jordan masses and total variation mass $M$. For $M>0$, use the Jordan-label probability spaces of [[def-signed-vorticity-characteristic-solution]] and suppose their path maps $X^\omega_t(x,s)$ and $X^\nu_t(y,s)$ have integrable time suprema, satisfy $X^\omega_0(x,s)=x$ and $X^\nu_0(y,s)=y$, and represent $\omega_t,\nu_t$ by the signed pushforward formula there. Assume at each time the positive and negative label pushforwards are the Jordan parts. Write
$$u^\omega_t(x)=\int K_\varepsilon(x-z)d\omega_t(z),\qquad u^\nu_t(y)=\int K_\varepsilon(y-z)d\nu_t(z).$$
Suppose their absolutely continuous sign-labelled trajectories satisfy
$$\dot X^\omega_t(x,s)=u^\omega_t(X^\omega_t(x,s))+r_\omega(t,x,s),\qquad \dot X^\nu_t(y,s)=u^\nu_t(X^\nu_t(y,s))+r_\nu(t,y,s)$$
for almost every time and almost every label of sign $s\in\{+,-\}$, with $|r_\omega|\le\eta_\omega$ and $|r_\nu|\le\eta_\nu$ on $[0,T]$. For every prescribed initial pair of sign-preserving couplings of total cost $D_0$,
$$d_{BL}(\omega_t,\nu_t)\le C_{\pm}(\omega_t,\nu_t)\le e^{2L_\varepsilon Mt}\bigl(D_0+M(\eta_\omega+\eta_\nu)t\bigr).$$
If $M=0$, both curves are zero and the inequalities hold with zero right side. Taking the infimum over initial couplings in the $M>0$ case gives the same bound with $D_0=C_{\pm}(\omega_0,\nu_0)$, without assuming attainment.

## Facts & Assumptions

**Given:** Two signed-label path representations as specified in the Statement, equal positive-part and negative-part masses, common total variation mass $M$, and measurable label defects bounded by the stated constants.

[A1] Assume AC for the signed Jordan parts ([[def-axiom-of-choice]], [[thm-jordan-decomposition-for-signed-measures]]).

[A2] Assume Countable Choice for the mollified-kernel Lipschitz supplier ([[def-countable-choice]], [[lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz]]).

[F1] For every sign-matched coupling, the bounded-Lipschitz dual discrepancy is at most its split transport cost ([[lem-signed-bl-norm-dominated-by-split-coupling-cost]]).

[F2] The one-variable bound $|K_\varepsilon(a)-K_\varepsilon(b)|\le L_\varepsilon|a-b|$ and $|(x-y)-(x'-y')|\le|x-x'|+|y-y'|$ give the stated two-variable estimate ([[lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] The bounded-Lipschitz dual discrepancy uses bounded 1-Lipschitz tests ([[def-bounded-lipschitz-dual-norm-for-signed-measures]]); $C_{\pm}$ is the infimum over separate positive and negative Borel couplings ([[def-signed-split-transport-cost]]). The coordinatewise Borel path maps give Borel pair maps on the Euclidean product ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F4] Gronwall bounds a nonnegative continuous function satisfying the resulting integral inequality ([[thm-gronwall-integral-inequality]]).

[F5] Tonelli and Fubini justify the coupled label and time integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] Dominated convergence gives continuity of the transported cost from integrable path suprema ([[thm-dominated-convergence]]).

[F7] Matching Jordan masses and finite first moments give nonempty finite-cost sign-coupling sets, including the zero-mass case ([[lem-signed-bl-norm-dominated-by-split-coupling-cost]]).

## Proof
1.1 If $M=0$, the zero-mass condition and equality of total variation masses make $\omega_t=\nu_t=0$, so all conclusions hold. Suppose $M>0$. Fix the prescribed couplings $\pi_0^+,\pi_0^-$. Transport each by the corresponding two characteristic flows to obtain couplings $\pi_t^+,\pi_t^-$. Let $D(t)=\sum_{s\in\{+,-\}}\int|X_t^\omega(x,s)-X_t^\nu(y,s)|d\pi_0^s(x,y).$ The initial-position identities give $D(0)=D_0$. Their marginals are the Jordan parts at time $t$ by the sign-preservation assumption, so [F3] gives $C_{\pm}(\omega_t,\nu_t)\le D(t)$. Integrable path suprema and [F6] make $D$ continuous. [A1, given, F3, F6, construct]

2.1 For a coupled pair, subtract the two label equations. Decompose each signed interaction into its positive and negative Jordan-label integrals and apply [F2]. The interaction difference is at most $L_\varepsilon M|X^\omega-X^\nu|+L_\varepsilon D(t)$: the first term uses total variation mass $M$, and the inner second-coordinate differences integrate to the two transported coupling costs whose sum is $D(t)$. The defects add at most $\eta_\omega+\eta_\nu$. Integrating this pointwise estimate against the outer couplings, whose total mass is $M$, yields $D(t)\le D_0+2L_\varepsilon M\int_0^tD(s)ds+M(\eta_\omega+\eta_\nu)t.$ The last term and $D_0$ are nondecreasing, so [F4] gives the displayed exponential bound. [A1, A2, F2, F4, F5, F6, step 1.1, algebra]

3.1 Apply [F1] and step 1.1 to obtain the bounded-Lipschitz estimate. By [F7], the initial coupling sets are nonempty and their infimum is finite; taking the infimum of the step 2.1 bound gives the stated result with $D_0=C_{\pm}(\omega_0,\nu_0)$. No infimum is assumed to be attained. [F1, F3, F7, step 1.1, step 2.1] ∎
