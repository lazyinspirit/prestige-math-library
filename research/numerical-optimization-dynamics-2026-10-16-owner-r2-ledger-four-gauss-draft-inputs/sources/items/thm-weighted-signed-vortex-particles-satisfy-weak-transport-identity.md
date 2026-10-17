---
id: thm-weighted-signed-vortex-particles-satisfy-weak-transport-identity
kind: theorem
title: Exact weak transport identity for weighted signed vortex particles
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-mean-field-and-weighted-vortex-particle-systems
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
axiom_use: No choice principle is used; the proof is a finite signed sum.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Let $x_i:[0,T]\to\mathbb R^2$ be $C^1$ trajectories with fixed real weights $\Gamma_i$, and let $g:[0,T]\times\mathbb R^2\to\mathbb R^2$ be a common continuous force correction. Suppose
$$\dot x_i(t)=\sum_{j=1}^N\Gamma_jK_\varepsilon(x_i(t)-x_j(t))+g(t,x_i(t)),$$
where $K_\varepsilon$ is the mollified kernel in [[def-mean-field-and-weighted-vortex-particle-systems]]. For $\omega_N(t)=\sum_i\Gamma_i\delta_{x_i(t)}$ and every $\varphi\in C_c^1(\mathbb R^2)$,
$$\int\varphi d\omega_N(t)-\int\varphi d\omega_N(0) =\int_0^t\int\nabla\varphi(x)\cdot\left(\int K_\varepsilon(x-y)d\omega_N(s)(y)+g(s,x)\right)d\omega_N(s)(x)ds.$$
In particular, the uncorrected regularized particle system satisfies the same weak identity with $g=0$.

## Facts & Assumptions

**Given:** The weighted particle paths, fixed weights, common continuous force correction, and $\varphi\in C_c^1(\mathbb R^2)$.

[F1] The weighted system and its signed particle measure use the finite sums $\dot x_i=\sum_j\Gamma_jK_\varepsilon(x_i-x_j)$ and $\omega_N=\sum_i\Gamma_i\delta_{x_i}$ ([[def-mean-field-and-weighted-vortex-particle-systems]]).

[F2] Differentiable compositions obey the chain rule ([[thm-chain-rule-for-total-derivatives]]).

## Proof
1.1 By [F2] and the ODE in the Statement, $\frac d{dt}\sum_i\Gamma_i\varphi(x_i(t)) =\sum_{i,j}\Gamma_i\Gamma_j\nabla\varphi(x_i(t))\cdot K_\varepsilon(x_i(t)-x_j(t)) +\sum_i\Gamma_i\nabla\varphi(x_i(t))\cdot g(t,x_i(t)).$ All sums are finite, so integrating this equality in time is valid. [given, F1, F2, algebra]

2.1 Expanding the two signed-measure integrals on the right of the Statement gives exactly the two finite sums in step 1.1. The left side is the weighted test sum at times $t$ and $0$, so integration of step 1.1 proves the identity. [F1, step 1.1, algebra] ∎
