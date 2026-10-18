---
id: thm-na-diagonal-diffusion-scheme-half-relaxed-limits
kind: theorem
title: Half-relaxed limits of the monotone diagonal-diffusion HJB scheme
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-explicit-diagonal-diffusion-hjb-grid-step, lem-na-diagonal-diffusion-stencil-is-monotone, thm-na-diagonal-diffusion-stencil-consistency, lem-na-diagonal-diffusion-discrete-initial-trace, lem-na-grid-contact-localization-for-half-relaxed-limits, lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity, def-half-relaxed-limits, def-na-second-order-parabolic-viscosity-solution, def-countable-choice]
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
axiom_base: Countable Choice is used only for sequential half-relaxed recovery and contact localization; all stencil estimates and finite control operations are choice-free.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§6 stability of viscosity solutions and upper/lower relaxed limits; §8 parabolic test conventions, printed pp. 34–35 and 49–52."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2, Theorem 2.1 proof: monotonicity, consistency, and grid-contact half-relaxed passage, printed pp. 274–276."
verification:
  precheck: pass
---

## Statement

Let $h_{k,j}\to0$, $\tau_k=T/M_k\to0$, and let $U_k$ be the finite
solutions of [[alg-na-explicit-diagonal-diffusion-hjb-grid-step]] with its
diffusion-dominance and CFL inequalities at every row. Extend each array
multilinearly in space, constantly on each time interval, and by its initial
interpolant for $-1<t<0$; identify the mesh sequence with the parameter
family convention of [[def-half-relaxed-limits]]. Its upper
half-relaxed limit is a bounded upper semicontinuous viscosity subsolution,
and its lower half-relaxed limit is a bounded lower semicontinuous viscosity
supersolution of the periodic diagonal-diffusion Cauchy problem, with the
respective relaxed initial inequalities equal to $u_0$. This is a stability
statement only; it does not claim that the two limits coincide.

## Facts & Assumptions

**Given:** The scheme, its finite horizon and mesh assumptions in the
statement, and a smooth test function at a strict interior contact.

[F1] Every fixed-control row is order-preserving and commutes with constant
shifts. Its nonnegative weights sum to one; therefore the max update is
order-preserving and changes the sup norm by at most $\tau_kF$
([[lem-na-diagonal-diffusion-stencil-is-monotone]],
[[alg-na-explicit-diagonal-diffusion-hjb-grid-step]]).

[F2] The normalized smooth-test residual tends uniformly on compact sets to
$$\phi_t-\max_a\{\sum_j(\alpha_j^a\phi_{x_jx_j}+b_j^a\phi_{x_j})+f^a\}$$
as $h_{k,\max},\tau_k\to0$
([[thm-na-diagonal-diffusion-stencil-consistency]]).

[F3] Strict upper/lower contacts of the half-relaxed limits localize to
nodal maxima/minima on a fixed cylinder, with nodes converging to the contact
([[lem-na-grid-contact-localization-for-half-relaxed-limits]]).

[F4] For this operator, smooth tests suffice to establish the viscosity
inequality for all $C^{1,2}$ tests
([[lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity]]).

[F5] The initial nodal values converge uniformly to $u_0$ as $t_n\to0$ for
this scheme ([[lem-na-diagonal-diffusion-discrete-initial-trace]]).

[F6] The half-relaxed limits are the set-defined USC/LSC envelopes of the
locally bounded interpolant family and satisfy $\underline U\le\overline U$
([[def-half-relaxed-limits]]).

[A1] Countable Choice is used only through [F3] and the sequential recovery
form of [F6] ([[def-countable-choice]]).

## Proof

1.1 The row weights in [F1] give $$\|U_k^n\|_\infty\le\|u_0\|_\infty+n\tau_kF \le\|u_0\|_\infty+TF.$$ Multilinear interpolation is a convex combination, so the same bound holds for the space-time extensions. They are locally bounded and their half-relaxed limits have the semicontinuity and order properties in [F6]. [F1, F6, given, algebra]

2.1 Let $\overline U-\phi$ have a local maximum at $(x_0,t_0)$, with $0<t_0<T$ and smooth $\phi$. Add $\varepsilon(|x-x_0|^4+|t-t_0|^4)$ to $\phi$; this makes the contact strict without changing its derivatives used by the PDE at $(x_0,t_0)$, as in [F4]. Select nodal local maxima $(x_k,t_k)$ from [F3] and put $c_k=U_{i_k}^{n_k}-\phi(x_k,t_k)$. All coordinate neighbors used by the explicit stencil at the previous time lie in the fixed contact cylinder for sufficiently large $k$, because their distance to $(x_k,t_k)$ is at most $h_{k,\max}+\tau_k$. Thus $U_j^{n_k-1}\le\phi(x_j,t_k-\tau_k)+c_k$ at every stencil node. Monotonicity and shift invariance in [F1] give $$U_{i_k}^{n_k}=S_k(U^{n_k-1})_{i_k} \le S_k(\phi(\cdot,t_k-\tau_k)+c_k)_{i_k} =S_k(\phi(\cdot,t_k-\tau_k))_{i_k}+c_k.$$ At the contact node $U_{i_k}^{n_k}=\phi(x_k,t_k)+c_k$, so the normalized residual is nonpositive. Passing to the limit by [F2] yields $$\phi_t-\max_a\{\sum_j(\alpha_j^a\phi_{x_jx_j}+b_j^a\phi_{x_j})+f^a\}\le0$$ at $(x_0,t_0)$. [A1, F1, F2, F3, F4, step 1.1, algebra]

2.2 At a local minimum of $\underline U-\phi$, subtract $\varepsilon(|x-x_0|^4+|t-t_0|^4)$ from $\phi$ to make the contact strict without changing its tested derivatives, as in [F4]. The minimizing nodes in [F3] give $U_j^{n_k-1}\ge\phi(x_j,t_k-\tau_k)+c_k$ on the stencil. Order preservation reverses the update inequality, so the residual is nonnegative and its limit gives the supersolution inequality. By [F4], both inequalities extend from smooth tests to all tests in the declared $C^{1,2}$ class. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 The initial-trace estimate [F5] and uniform continuity of $u_0$ show that every space-time sequence with mesh tending to zero and time tending to zero has values tending to $u_0$ at its limiting spatial point; the spatial interpolation adds at most the modulus of $u_0$ at distance $\sqrt d\,h_{k,\max}$. Therefore the upper and lower relaxed limits both have the prescribed relaxed initial trace. Boundedness and semicontinuity were proved in step 1.1, completing the stability statement. [F5, F6, step 1.1, algebra] ∎
