---
id: def-na-second-order-parabolic-viscosity-solution
kind: definition
title: Second-order parabolic viscosity subsolutions and supersolutions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-periodic-diagonal-controlled-diffusion-hjb-problem, def-viscosity-subsolution-and-supersolution]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: not-applicable
axiom_base: Definition only; no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§2 viscosity definitions and §8 parabolic problems, printed pp. 9–13 and 49–52."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§1, second-order viscosity subsolution and supersolution definition, printed pp. 272–274."
verification:
  precheck: n/a
---

## Definition

Let $u$ be upper semicontinuous and $v$ lower semicontinuous on the periodic
space-time cylinder. A **second-order parabolic viscosity subsolution** of
[[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]] is a function $u$
such that every $C^{1,2}$ test function $\phi$ for which $u-\phi$ has a local
maximum at $(x_0,t_0)$, $0<t_0<T$, satisfies
$$\phi_t(x_0,t_0)-\max_{a\in A}\left\{\sum_j\left(\alpha_j^a\phi_{x_jx_j}+b_j^a\phi_{x_j}\right)(x_0,t_0)+f^a(x_0,t_0)\right\}\le0.$$
Here $C^{1,2}$ means that $\phi_t$, all first spatial derivatives, and all
second spatial derivatives exist and are continuous near the contact point.
A **supersolution** is lower semicontinuous and satisfies the reverse
inequality at every local minimum. A viscosity solution is both. For the Cauchy
problem, the relaxed initial conditions are
$$\limsup_{(y,s)\to(x,0),\ s>0}u(y,s)\le u_0(x),\qquad \liminf_{(y,s)\to(x,0),\ s>0}v(y,s)\ge u_0(x).$$

## Remarks

This extends the contact convention in
[[def-viscosity-subsolution-and-supersolution]] to tests with the spatial Hessian
required by the diffusion operator. The definition does not assert a comparison
principle, existence, or uniqueness; those are separate theorems.
