---
id: ex-ewald-mesh-energy-force-consistency
kind: example
title: "The energy-gradient mesh force matches the differentiated mesh energy"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-countable-choice, def-ewald-pme-cardinal-assignment-model, def-ewald-three-dimensional-periodic-source-data, lem-ewald-pme-spline-alias-and-dft-normalization, thm-ewald-pme-reciprocal-energy-force-error-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Take the unit cubic cell, $q_1=1$ at $x_1=(1/8,1/8,1/8)$ and $q_2=-1$ at
$x_2=(5/8,1/8,1/8)$, a $4\times4\times4$ mesh, order $P=3$, and retained
modes $\mathcal K=\{(1,0,0),(-1,0,0)\}$. The sources are neutral and lie off
mesh knots. The mesh force from the energy-gradient gather is the gradient of
the finite mesh reciprocal energy; the optional self correction has the
displayed differentiated force. The theorem's deterministic bound applies.

## Facts & Assumptions

**Given:** Countable Choice; the dipole configuration, $M_1=M_2=M_3=4$,
$P=3$, the displayed signed modes, and the unitary mesh assignment.

[A1] The Ewald reciprocal error theorem carries Countable Choice from the periodic Gaussian construction ([[def-countable-choice]]).

[F1] The DFT-deconvolved spread coefficient obeys $z_k=\sum_iq_ib_k(t_i)$ with the stated normalization ([[lem-ewald-pme-spline-alias-and-dft-normalization]]).

[F2] The mesh energy is $\frac12\sum_{k\in\mathcal K}c_k|z_k|^2$, and its declared force is the real-part gather; the corrected energy subtracts $C_M$ ([[def-ewald-pme-cardinal-assignment-model]]).

[F3] For $P\ge3$ the mesh force is the energy gradient; the self-corrected force and deterministic energy/force bounds are as stated in the reciprocal PME theorem ([[thm-ewald-pme-reciprocal-energy-force-error-bound]]).

## Verification

**Proof technique:** direct.

1.1 The two positions are distinct and neutral. Each coordinate multiplied by $M_r=4$ is either $1/2$ or $5/2$, hence no coordinate is an integer and both particles are off assignment knots. The mode set is symmetric, injective modulo $(4,4,4)$, nonzero, and satisfies $|k_r|<2$. Since $\operatorname{sinc}(\pi/4)\ne0$, the required window denominators are nonzero. [given, algebra]

1.2 By [F1], $z_k=q_1b_k(t_1)+q_2b_k(t_2)$. With $P=3$, the factors $b_k$ are differentiable. The chain rule gives $\nabla_{x_i}z_k=q_i\nabla_xb_k(t_i)$. Therefore $\nabla_{x_i}(\frac12c_k|z_k|^2)=q_ic_k\operatorname{Re}(\overline{z_k}\nabla_xb_k(t_i))$. Summing over $k\in\mathcal K$ and negating yields exactly the stated energy-gradient force. [F1, F2, algebra]

2.1 Differentiating $C_M=\frac12\sum_jq_j^2\sum_kc_k(|b_k(t_j)|^2-1)$ with respect to $x_i$ gives $\nabla_{x_i}C_M=q_i^2\sum_kc_k\operatorname{Re}(\overline{b_k(t_i)}\nabla_xb_k(t_i))$. Hence $-\nabla_{x_i}(E_M-C_M)=-q_i\sum_kc_k\operatorname{Re}(\overline{z_k-q_ib_k(t_i)}\nabla_xb_k(t_i))$, the corrected force formula. [F2, step 1.2, algebra]

3.1 Since $P=3$, this instance has classical derivatives at all positions. Applying [F3] to the same admissible data gives the deterministic retained-mode error certificate, including the corrected bound when the correction is selected. A spectral differentiation rule is a different force choice and does not inherit this energy-gradient identity; at $P=2$ knots the assignment definition supplies a branch value but no classical-gradient claim. [A1, F3, step 2.1] ∎

