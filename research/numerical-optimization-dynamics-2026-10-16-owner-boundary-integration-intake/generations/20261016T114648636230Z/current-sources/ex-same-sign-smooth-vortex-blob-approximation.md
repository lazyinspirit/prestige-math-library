---
id: ex-same-sign-smooth-vortex-blob-approximation
kind: example
title: Same-sign smooth vortex density and probability blob error budget
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-p-one-wasserstein-one
  - lem-w1-is-finite-on-probability-measures-with-finite-first-moment
  - def-mollified-biot-savart-vortex-kernel
  - def-countable-choice
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - thm-mollified-biot-savart-kernel-has-l1-consistency
  - thm-tensor-simpson-force-error
  - thm-w1-dobrushin-stability-with-force-defect
  - thm-rk4-global-error-for-regularized-vortex-particles
proof_strategy: direct
axiom_use: Countable Choice is used by the cited polar-coordinate kernel estimate; the probability coupling and particle-label arguments use no Axiom of Choice.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: Gregory R. Baker and Lan D. Pham, A Comparison of Blob Methods for Vortex Sheet Roll Up
      url: https://people.math.osu.edu/baker.27/blobs.pdf
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Example


Assume Countable Choice. Let $\omega_0\in C_c^\infty(\mathbb R^2)$ be nonnegative with mass one, and suppose the smooth Euler flow satisfies $\omega_t=(X_t)_\#\omega_0$, $\dot X_t=(K*\omega_t)(X_t)$, and $\sup_{t\le T}\|\omega_t\|_\infty\le W$, with $\int\sup_{t\le T}|X_t(x)|d\omega_0(x)<\infty$. Approximate it by $N\ge1$ distinct initial positions $x_1^0,\ldots,x_N^0$ with equal weights $1/N$, define $\mu_N^0=N^{-1}\sum_i\delta_{x_i^0}$, and let $E_0=W_1(\omega_0,\mu_N^0)$. Let $r_q(t,x)$ be a common smooth force correction whose tensor Simpson residual is bounded by $\eta_q$, and let the exact particles solve $\dot x_i=\frac1N\sum_jK_\varepsilon(x_i-x_j)+r_q(t,x_i)$. Assume the resulting finite-particle field is jointly $C^4$ in time and state with derivatives through order four bounded on a compact tube containing the exact paths and RK4 stages. For an integer $n\ge1$ with $h=T/n\le h_0$, let $x_i^h(T)$ be their RK4 approximations from the same initial nodes, with all paths and stages in that tube. Define $\omega_{N,h}^{\varepsilon,q}(T)=N^{-1}\sum_i\delta_{x_i^h(T)}$. If $C_{RK}$ is the coefficient from [[thm-rk4-global-error-for-regularized-vortex-particles]] for this $h_0$, then

$$W_1(\omega_T,\omega_{N,h}^{\varepsilon,q}(T))\le e^{2L_\varepsilon T}\left(E_0+T(C_\rho\varepsilon W+\eta_q)\right)+C_{RK}h^4.$$

The RK4 tube hypothesis includes all numerical grid states and every stage generated at each grid step from both the exact start and the numerical start, and both one-step maps are defined, as required by [[thm-rk4-global-error-for-regularized-vortex-particles]].

## Facts & Assumptions

**Given:** The smooth probability vorticity and Euler flow; distinct initial particle nodes; fixed $\varepsilon>0$; a common smooth spatial quadrature field with residual $\eta_q$; and the RK4 tube and derivative hypotheses.

[A1] Assume Countable Choice for the polar-coordinate kernel-consistency estimate ([[def-countable-choice]]).

[F1] $W_1$ is the coupling infimum for finite-first-moment probability measures ([[def-p-one-wasserstein-one]]); the product coupling has finite cost ([[lem-w1-is-finite-on-probability-measures-with-finite-first-moment]]).

[F2] Kernel mollification gives force defect at most $C_\rho\varepsilon W$ ([[thm-mollified-biot-savart-kernel-has-l1-consistency]]).

[F3] Tensor Simpson gives the uniform residual $\eta_q=\sqrt2|R|(h_x^4M_{40}+h_y^4M_{04})/180$ ([[thm-tensor-simpson-force-error]]).

[F4] Given characteristic flows with force defects $\eta_1,\eta_2$, every initial coupling transports with cost at most $e^{2Lt}(D_0+(\eta_1+\eta_2)t)$ ([[thm-w1-dobrushin-stability-with-force-defect]]).

[F5] RK4 on the controlled smooth particle tube has maximum Euclidean state error at most $C_{RK}h^4$ ([[thm-rk4-global-error-for-regularized-vortex-particles]]).

[F6] The mollified kernel has a finite global Lipschitz constant $L_\varepsilon$ ([[lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz]]).

## Verification

**Given:** The data in the Example and the estimate $E_0=W_1(\omega_0,\mu_N^0)$ for the initial empirical probability.

1.1 Write the exact Euler characteristic velocity as the mollified interaction plus residual $(K-K_\varepsilon)*\omega_t$, whose norm is at most $C_\rho\varepsilon W$ by [F2]. The quadrature particle field is the mollified interaction plus a common residual of norm at most $\eta_q$ by [F3]. Fix any initial coupling with cost $D_0\le E_0+\delta$, where $\delta>0$. Transport it by the Euler flow and the exact quadrature-force particle flow. By [F4], the resulting coupling has cost at time $T$ at most $e^{2L_\varepsilon T}\bigl(E_0+\delta+T(C_\rho\varepsilon W+\eta_q)\bigr).$ [A1, given, F2, F3, F4, F6, choose]

2.1 Use the same initial particle label in the exact quadrature-force path and the RK4 path. The RK4 state error in [F5] is Euclidean on the full particle state, so each particle-block displacement is at most $C_{RK}h^4$. Since the initial nodes are distinct, partition the coupling by its second coordinate and label each part by its unique particle index. Push this labelled coupling through the exact Euler flow in the first coordinate and the RK4 particle map in the second. The resulting coupling from the Euler law to the RK4 empirical law has cost at most the step 1.1 bound plus $C_{RK}h^4$. Thus it bounds their $W_1$. Since $\delta>0$ was arbitrary, let $\delta\downarrow0$ to obtain $W_1(\omega_T,\omega_{N,h}^{\varepsilon,q}(T)) \le e^{2L_\varepsilon T}\bigl(E_0+T(C_\rho\varepsilon W+\eta_q)\bigr)+C_{RK}h^4.$ This same-sign estimate uses probability transport and has no AC hypothesis; it makes no uniform claim as $\varepsilon\to0$. [F1, F5, F6, step 1.1] ∎
