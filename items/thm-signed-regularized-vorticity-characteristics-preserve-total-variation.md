---
id: thm-signed-regularized-vorticity-characteristics-preserve-total-variation
kind: theorem
title: Characteristic existence and total-variation preservation for regularized signed vorticity
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-mollified-biot-savart-vortex-kernel
  - def-signed-vorticity-characteristic-solution
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - def-signed-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - def-axiom-of-choice
  - def-countable-choice
  - lem-weighted-continuous-path-space-is-complete
  - thm-banach-fixed-point
  - thm-jordan-decomposition-for-signed-measures
  - prop-jordan-parts-and-total-variation-formulas-for-signed-measures
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-gronwall-integral-inequality
  - thm-dominated-convergence
proof_strategy: direct
axiom_use: The general Jordan decomposition invokes AC; weighted path-space completeness invokes Countable Choice. The local ODE and transport estimates add no choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: Gregory R. Baker and Lan D. Pham, A Comparison of Blob Methods for Vortex Sheet Roll Up
      url: https://people.math.osu.edu/baker.27/blobs.pdf
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Assume AC and Countable Choice. Let $\omega_0$ be a finite signed Borel measure on $\mathbb R^2$ whose total variation has finite first moment, and let $K_\varepsilon$ be the smooth mollified Biot-Savart kernel of [[def-mollified-biot-savart-vortex-kernel]]. There is a unique signed characteristic solution in the sense of [[def-signed-vorticity-characteristic-solution]] on every finite interval $[0,T]$, and it represents the measure curve with velocity
$$u_t(x)=\int K_\varepsilon(x-y)d\omega_t(y),\qquad \omega_t=(X_t)_\#\omega_0.$$
The flow is a homeomorphism of $\mathbb R^2$ at each time and
$$|\omega_t|(\mathbb R^2)=|\omega_0|(\mathbb R^2).$$
If $\omega_0=0$, the only transported measure curve is identically zero.

## Facts & Assumptions

**Given:** A finite signed Borel measure with finite first moment of its total variation, $T>0$, and the stated smooth globally Lipschitz kernel.

[A1] Assume AC to obtain the Jordan decomposition ([[def-axiom-of-choice]], [[thm-jordan-decomposition-for-signed-measures]]).

[A2] Countable Choice is used for the weighted continuous path space completeness supplier ([[def-countable-choice]], [[lem-weighted-continuous-path-space-is-complete]]).

[F1] The mollified kernel is smooth and globally Lipschitz for fixed $\varepsilon$ ([[lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz]]).

[F2] The signed characteristic solution uses the Jordan-label probability and the weighted path integrability convention ([[def-signed-vorticity-characteristic-solution]]).

[F3] The weighted trajectory space is complete and the contraction theorem gives a unique fixed point ([[lem-weighted-continuous-path-space-is-complete]], [[thm-banach-fixed-point]]).

[F4] Local Lipschitz ODEs have unique local solutions and unique maximal solutions ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F5] Gronwall bounds a nonnegative function satisfying a linear integral inequality ([[thm-gronwall-integral-inequality]]).

[F6] Dominated convergence passes the kernel integral through continuous time changes under an integrable path-supremum bound ([[thm-dominated-convergence]]).

[F7] For Jordan parts, total variation is $|\omega|=\omega^++\omega^-$ ([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]).

[F8] For $M>0$, the Jordan-label probability has first moment $M^{-1}\int_{\mathbb R^2}|x|\,d|\omega_0|(x)$. For nonnegative simple functions this follows by summing the defining label masses on the two sign components and using $|\omega_0|=\omega_0^++\omega_0^-$; increasing simple approximation and monotone convergence extend the equality to $|x|$ ([[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]], [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]).

[F9] The label product measure exists and Tonelli justifies the nonnegative label bounds. For each fixed sign pair, composing the Borel label maps with the continuous kernel after forming the pair is measurable in the Euclidean product Borel sigma-algebra; the finite sign coordinates are handled componentwise ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

## Proof
1.1 Let $M=|\omega_0|(\mathbb R^2)$. If $M=0$, [F7] implies $\omega_0=0$, the represented curve is zero by [F2], and $u_t=0$ has the identity flow; all claims follow. Hence suppose $M>0$. By [A1], write $\omega_0=\omega_0^+-\omega_0^-$ with mutually singular positive parts. The definition [F2] supplies the label probability $\lambda_0$ on $E=\mathbb R^2\times\{+1,-1\}$, with $\lambda_0(A\times\{s\})=\omega_0^s(A)/M$; [F8] and the assumed total-variation moment give its finite first moment. [given, A1, F1, F2, F7, F8, construct]

2.1 On a subinterval $[a,a+T']$, use the weighted path space over $(E,\lambda_0)$ and fix the attained initial label map $Z_a$ (with $Z_0(x,s)=x$ at the first interval). The constant-in-time path $Z_a$ shows the space is nonempty. Define $\Phi(Z)_t(x,s)=Z_a(x,s)+M\int_a^t\int_E rK_\varepsilon(Z_u(x,s)-Z_u(y,r))d\lambda_0(y,r)du.$ Linear growth and the integrable path supremum make this a well-defined continuous-path map; [F9] supplies measurability of the paired kernel integrand. The Lipschitz bound in [F1] gives $\|\Phi Z-\Phi W\|\le2ML_\varepsilon T'\|Z-W\|$ on each interval. Choose $T'<1/(2ML_\varepsilon)$ (any finite $T'$ if $L_\varepsilon=0$); [F3] gives a unique fixed point. Its endpoint has finite first moment by the weighted path norm, so the same construction restarts there; finitely many intervals cover $[0,T]$. [A2, F1, F3, F9, step 1.1, construct]

3.1 The fixed point defines the curve in [F2]. The positive and negative label masses remain fixed, and its signed integral defines $u_t(x)=\int K_\varepsilon(x-y)d\omega_t(y)$. The integrable path supremum and [F6] give dominated continuity in $t$; [F1] gives spatial Lipschitz constant at most $ML_\varepsilon$ and at most linear growth. [A1, F1, F2, F6, step 2.1]

4.1 By [F4], the velocity field has a unique maximal flow from each point. The linear-growth estimate and [F5] bound every trajectory on $[0,T]$ by a finite constant depending on its initial point, $T$, $M$, and $\varepsilon$. A bounded trajectory has a limit at any finite endpoint because its derivative is bounded on the resulting compact time-state set; local existence at that endpoint extends it. Hence the maximal flow $\phi_t$ exists for all $[0,T]$. Each label path from step 2.1 solves this same ODE from its initial position, so ODE uniqueness gives $Z_t(x,s)=\phi_t(x)$ for $\lambda_0$-almost every label. Solving the time-reversed equation gives an inverse; Gronwall [F5] applied to two initial states in both time orientations makes the forward and inverse maps Lipschitz on each finite interval. Thus each time map is a homeomorphism and both Jordan parts follow that common position flow. [F1, F4, F5, step 2.1, step 3.1]

5.1 The initial Jordan parts are mutually singular by [A1]. The common homeomorphism in step 4.1 transports a witnessing disjoint Borel partition to a disjoint Borel partition, so their pushforwards remain mutually singular. They are therefore the Jordan parts of $\omega_t$; their masses are unchanged by pushforward under the bijection. Thus $|\omega_t|(\mathbb R^2)=\omega_0^+(\mathbb R^2)+\omega_0^-(\mathbb R^2)=M$ by [F7]. Every solution in [F2] is a fixed point of the same contraction on each subinterval, so uniqueness in [F3] gives uniqueness of the represented curve. [A1, F2, F3, F7, step 2.1, step 4.1] ∎
