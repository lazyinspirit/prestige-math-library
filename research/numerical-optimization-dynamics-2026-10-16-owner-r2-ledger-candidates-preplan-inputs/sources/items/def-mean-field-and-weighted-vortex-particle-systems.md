---
id: def-mean-field-and-weighted-vortex-particle-systems
kind: definition
title: Equal-probability mean-field and weighted signed vortex particle systems
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-globally-lipschitz-mean-field-kernel
  - def-mollified-biot-savart-vortex-kernel
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used in these finite systems.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
---

## Definition

For a globally Lipschitz interaction kernel $K$ and $N\ge1$, the equal-probability mean-field particle system is
$$\dot x_i(t)=\frac1N\sum_{j=1}^N K(x_i(t),x_j(t)),\qquad i=1,\ldots,N.$$
Its empirical probability measure is $\mu_N(t)=N^{-1}\sum_i\delta_{x_i(t)}$.

For a mollified two-dimensional Biot-Savart kernel $K_\varepsilon$ from [[def-mollified-biot-savart-vortex-kernel]] and real weights $\Gamma_1,\ldots,\Gamma_N$, the weighted signed vortex particle system is
$$\dot x_i(t)=\sum_{j=1}^N\Gamma_jK_\varepsilon(x_i(t)-x_j(t)),\qquad i=1,\ldots,N,$$
with vorticity measure $\omega_N(t)=\sum_i\Gamma_i\delta_{x_i(t)}$. If $\Gamma_i=1/N$ and $K(x,y)=K_\varepsilon(x-y)$, the first system is the probability special case. The weighted signed system is a first-order Biot-Savart model.
