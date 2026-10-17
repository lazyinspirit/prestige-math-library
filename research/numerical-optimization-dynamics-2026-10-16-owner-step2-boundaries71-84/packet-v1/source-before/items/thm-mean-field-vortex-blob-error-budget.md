---
id: thm-mean-field-vortex-blob-error-budget
kind: theorem
title: Mean-field vortex blob error budget with signed particles, force quadrature, and RK4
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-bounded-lipschitz-dual-norm-for-signed-measures
  - def-signed-split-transport-cost
  - def-axiom-of-choice
  - def-countable-choice
  - thm-jordan-decomposition-for-signed-measures
  - prop-jordan-parts-and-total-variation-formulas-for-signed-measures
  - def-mollified-biot-savart-vortex-kernel
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - def-mean-field-and-weighted-vortex-particle-systems
  - thm-signed-dobrushin-stability-with-force-defect
  - thm-mollified-biot-savart-kernel-has-l1-consistency
  - thm-tensor-simpson-force-error
  - thm-rk4-global-error-for-regularized-vortex-particles
proof_strategy: direct
axiom_use: The signed branch uses AC for Jordan decompositions and Countable Choice through the polar-coordinate consistency estimate. These are not needed by the separate probability W1 theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
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

## Statement

Assume AC and Countable Choice. Let $\omega_t$ be a smooth finite signed vorticity density on $[0,T]\times\mathbb R^2$ with finite first moment, transported by a sign-preserving characteristic flow $X_t$ satisfying $\omega_t=(X_t)_\#\omega_0$ and $\dot X_t(x)=(K*\omega_t)(X_t(x))$, where $K$ is the singular kernel in [[def-mollified-biot-savart-vortex-kernel]]. Assume $\sup_{t\le T}\|\omega_t\|_\infty\le W$, $\int\sup_{t\le T}|X_t(x)|d|\omega_0|(x)<\infty$, and the flow transports each Jordan part to the corresponding Jordan part. Put $M=|\omega_0|(\mathbb R^2)$. Let
$$\omega_N^0=\sum_{i=1}^N\Gamma_i\delta_{x_i^0}$$
be a finite signed particle measure whose positive and negative Jordan masses respectively equal those of $\omega_0$, with finite first moment, and with consolidated atoms whose positive and negative supports are disjoint; thus $\sum_i|\Gamma_i|=M$. Let $E_0=C_{\pm}(\omega_0,\omega_N^0)<\infty$.

Fix $\varepsilon>0$. For every time and force location $(t,x)$, suppose the force integrand $F_{t,x}:R\to\mathbb R^2$ lies in $C^4(R,\mathbb R^2)$ and its fourth partial derivatives satisfy the uniform bounds $M_{40},M_{04}$. Let the tensor Simpson evaluator use the even panel counts and widths in [[thm-tensor-simpson-force-error]], and define its residual by $r_q(t,x)=Q_yQ_xF_{t,x}-\int_R F_{t,x}$. Thus
$$\eta_q=\frac{\sqrt2|R|}{180}(h_x^4M_{40}+h_y^4M_{04}).$$
Assume this residual is the same correction function for every particle, $\sup_{t,x}|r_q(t,x)|\le\eta_q$, and the corrected regularized particle flow preserves the two Jordan parts. Write $x_i^{\varepsilon,q}$ for the exact solution from $x_i^0$ of
$$\dot x_i^{\varepsilon,q}(t)=\sum_{j=1}^N\Gamma_jK_\varepsilon(x_i^{\varepsilon,q}(t)-x_j^{\varepsilon,q}(t))+r_q(t,x_i^{\varepsilon,q}(t)),$$
and set $\omega_N^{\varepsilon,q}(t)=\sum_i\Gamma_i\delta_{x_i^{\varepsilon,q}(t)}$. Assume $r_q$ and the resulting finite-dimensional particle field are jointly $C^4$ in time and state with derivatives through order four bounded on a compact tube containing all exact paths and RK4 stages. Let $x_i^h(T)$ be the RK4 states from the same initial data for this ODE, and define $\omega_{N,h}^{\varepsilon,q}(T)=\sum_i\Gamma_i\delta_{x_i^h(T)}$. Let $h=T/n\le h_0$ for an integer $n\ge1$ and define $C_{RK}:=C_4(e^{L_*T}-1)/L_*$ if $L_*>0$, and $C_{RK}:=C_4T$ if $L_*=0$, where $C_4,L_*,h_0$ are the constants in [[thm-rk4-global-error-for-regularized-vortex-particles]]. Then
$$d_{BL}(\omega_T,\omega_{N,h}^{\varepsilon,q}(T)) \le e^{2L_\varepsilon MT}\left(E_0+MT\left(C_\rho\varepsilon W+\eta_q\right)\right)+MC_{RK}h^4,$$
where $L_\varepsilon$ is a one-variable global Lipschitz constant for $K_\varepsilon$; the induced two-variable constant for $K_\varepsilon(x-y)$ is also $L_\varepsilon$. The terms are initial signed particle approximation, blob regularization, force quadrature, and RK4 time error. The constants may depend on $\varepsilon$, particle count, and the tube; no uniform singular limit as $\varepsilon\to0$ is claimed.

The RK4 tube condition in the Statement includes all numerical grid states and every stage generated at each grid step from both the exact solution start and the numerical start; both one-step maps are defined.

## Facts & Assumptions

**Given:** The sign-preserving smooth Euler characteristic flow and its density bound; consolidated signed initial particles with the stated masses and coupling cost; the common smooth quadrature force correction; and the compact tube with its RK4 derivative bounds.

[A1] Assume AC for the signed Jordan parts and Countable Choice for the mollifier consistency estimate ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The mollified Biot-Savart force differs from the singular Euler force by at most $C_\rho\varepsilon\|\omega_t\|_\infty$ ([[thm-mollified-biot-savart-kernel-has-l1-consistency]]).

[F2] The tensor Simpson force residual is bounded by the displayed $\eta_q$ ([[thm-tensor-simpson-force-error]]).

[F3] For sign-matched flows with two bounded force defects, the bounded-Lipschitz difference is bounded by $e^{2L_\varepsilon Mt}$ times the initial split cost plus the integrated defect ([[thm-signed-dobrushin-stability-with-force-defect]]).

[F4] RK4 on the controlled regularized particle tube has state error at most $C_{RK}h^4$ ([[thm-rk4-global-error-for-regularized-vortex-particles]]).

[F5] The bounded-Lipschitz discrepancy is the dual supremum for signed measures; in particular $d_{BL}(0,0)=0$, and the split cost of two zero measures is zero ([[def-bounded-lipschitz-dual-norm-for-signed-measures]], [[def-signed-split-transport-cost]]).

[F6] For a finite signed measure, $|\nu|=\nu^++\nu^-$. Under the stated consolidation and disjoint-sign-support assumptions, the explicit positive and negative atomic parts are mutually singular, so uniqueness of Jordan parts and this formula give $\sum_i|\Gamma_i|=|\omega_N^0|(\mathbb R^2)=M$ ([[thm-jordan-decomposition-for-signed-measures]], [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]).

## Proof

1.1 If $M=0$, then $\omega_0=0$ and [F6] gives $\sum_i|\Gamma_i|=0$, hence every particle weight is zero. Thus both vorticity measures vanish at time $T$. By [F5], $E_0=0$ and the displayed bound is zero; hence the conclusion holds. Suppose $M>0$. By [F1] and the bound $\|\omega_t\|_\infty\le W$, the exact Euler flow, when written with interaction kernel $K_\varepsilon$, has an additive force defect at most $C_\rho\varepsilon W$. The tensor evaluator contributes the second additive defect at most $\eta_q$ by [F2]. [A1, F1, F2, F5, F6, given, algebra]

1.2 By consolidation and disjointness of the positive and negative atomic supports, the finite measures $\sum_{\Gamma_i>0}\Gamma_i\delta_{x_i^0}$ and $\sum_{\Gamma_i<0}|\Gamma_i|\delta_{x_i^0}$ are mutually singular positive measures whose difference is $\omega_N^0$. Uniqueness of Jordan parts and [F6] therefore give $\sum_i|\Gamma_i|=M$. Couple each exact force-evaluated particle trajectory to its RK4 trajectory using the same signed particle label. The state error in [F4] is the Euclidean norm on the full particle state, so each particle-block displacement is no larger than $C_{RK}h^4$. For every bounded 1-Lipschitz test, the change in its signed integral is at most $\sum_i|\Gamma_i|C_{RK}h^4=MC_{RK}h^4$. [F4, F5, F6, given, algebra]

2.1 Apply [F3] to the exact Euler characteristic flow and the common sign-preserving force-evaluated regularized flow, using initial split cost $E_0$, total variation mass $M$, and summed defect $C_\rho\varepsilon W+\eta_q$. It gives $d_{BL}(\omega_T,\omega_N^{\varepsilon,q}(T))\le e^{2L_\varepsilon MT}\bigl(E_0+MT(C_\rho\varepsilon W+\eta_q)\bigr).$ [A1, F3, given, step 1.1]

3.1 For each admissible bounded-Lipschitz test, insert the exact force-evaluated particle measure between the Euler and RK4 measures. The scalar triangle inequality bounds the full difference by the right side of step 2.1 plus the displacement bound in step 1.2. Taking the supremum over tests proves the displayed error budget. [step 2.1, step 1.2, algebra] ∎
## Remarks

This theorem is conditional on a smooth finite-time Euler solution, matched signed initial masses, a common sign-preserving quadrature force field, and the compact RK4 tube. It makes no claim for singular initial vorticity, arbitrary-sign particle sampling without a split coupling, or a rate uniform in $\varepsilon$.
