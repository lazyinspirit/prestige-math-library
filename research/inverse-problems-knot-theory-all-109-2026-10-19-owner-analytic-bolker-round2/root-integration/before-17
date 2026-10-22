---
id: thm-ip-analytic-wavefront-recovery-under-bolker
kind: theorem
title: "Analytic wavefront recovery under Bolker"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-double-fibration-transform
  - def-ip-bolker-condition
  - lem-ip-double-fibration-conormal-kernel
  - lem-ip-bolker-geometric-criteria
  - def-ip-analytic-wavefront-fbi-transform
  - lem-ip-analytic-cutoff-sequence-and-fbi-invariance
  - lem-ip-holomorphic-morse-normalization-and-gaussian-contour
  - thm-ip-analytic-stationary-phase-with-exponential-remainder
  - thm-real-analytic-inverse-and-implicit-function-theorems
  - lem-ip-local-bolker-positive-packet-estimate
  - lem-ip-analytic-nonstationary-incidence-localization
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "Theorem 1.2, printed p. 5; §§5.1–5.6, complete proof, printed pp. 27–42."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Proposition 6.2 and proof, printed pp. 37–38, for analytic packet independence."
proof_strategy: direct
---

## Statement

Let $R$ be an analytic double-fibration transform and let
$$
(z_0,\zeta_0;x_0,\xi_0)\in C_Z
$$
be a point of its incidence cotangent relation. Assume the Bolker condition holds at this point, meaning $\pi_L^{-1}(z_0,\zeta_0)=\{(z_0,\zeta_0;x_0,\xi_0)\}$ and $d\pi_L$ is injective at that relation point. For every compactly supported distribution $f\in\mathcal E'(X)$, if $(z_0,\zeta_0)\notin\operatorname{WF}_A(Rf)$, then $(x_0,\xi_0)\notin\operatorname{WF}_A(f)$. This is a qualitative microlocal implication; it asserts no noisy-data stability estimate.

## Statement references

[[def-ip-analytic-double-fibration-transform|Analytic transform]]

[[def-ip-bolker-condition|Bolker condition]]

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Incidence relation]]

[[def-ip-analytic-wavefront-fbi-transform|Gaussian FBI criterion]]

[[lem-ip-analytic-cutoff-sequence-and-fbi-invariance|Cutoff and FBI invariance]]

[[lem-ip-bolker-geometric-criteria|Bolker rank criteria]]

[[lem-ip-double-fibration-conormal-kernel|Local conormal kernel]]

[[lem-ip-holomorphic-morse-normalization-and-gaussian-contour|Holomorphic Morse normalization]]

[[thm-ip-analytic-stationary-phase-with-exponential-remainder|Optimal analytic stationary phase]]

## Facts & Assumptions

**Given:** The analytic transform $R$, the relation point with singleton full left fiber and injective left differential, and compactly supported $f$ with the stated data analytic regularity.

[F1] [[def-ip-analytic-double-fibration-transform]]: the transform is properly supported on compact object supports and has a nowhere vanishing analytic incidence density and weight.

[F2] [[def-ip-bolker-condition]]: the pointwise condition gives the entire singleton left fiber and injective differential at this point.

[F3] [[lem-ip-analytic-nonstationary-incidence-localization]]: input support with no incidence cotangent relation over the supplied data covector has an exponentially small data Gaussian transform, with finite-order distributional estimates.

[F4] [[lem-ip-local-bolker-positive-packet-estimate]]: for distributions supported sufficiently near the supplied object point, data Gaussian regularity implies object Gaussian regularity, by the exact packet resolution, reduced positive phase, estimated stationary phase and elliptic packet criterion.

[F5] [[lem-ip-analytic-cutoff-sequence-and-fbi-invariance]]: the Gaussian criterion is independent of local cutoff and analytic chart and applies to distributional densities as well as scalar distributions.

## Proof

**Given:** The data in the statement.

1.1 Choose a smooth compact object cutoff $\rho$ equal to one near $x_0$ and supported in the small object neighborhood supplied by [F4]. Write $f=\rho f+(1-\rho)f$. The second summand is compactly supported away from $x_0$. By [F2] its support has no relation point over $(z_0,\zeta_0)$, because that full fiber consists of the supplied point over $x_0$. Hence [F3] gives $(z_0,\zeta_0)\notin\operatorname{WF}_A(R((1-\rho)f))$. This includes all incidence points outside the local coordinate patch; it is not inferred merely from local injectivity. [F1, F2, F3, given, choose]

2.1 By hypothesis the Gaussian data transform of $Rf$ is exponentially small on some data parameter neighborhood. Subtract the exponential estimate from step 1.1, using the same data chart and a common smaller cutoff neighborhood by [F5]. Linearity gives the same estimate for $R(\rho f)$ at the supplied data covector. The differential clause of [F2] supplies the local Bolker hypothesis in [F4]. Since $\rho f$ is supported in its chosen small object neighborhood, [F4] yields $(x_0,\xi_0)\notin\operatorname{WF}_A(\rho f)$. [F2, F4, F5, step 1.1, given, algebra]

3.1 The localized distributions $\rho f$ and $f$ agree on a neighborhood of $x_0$. Their Gaussian transforms with any common cutoff supported there agree exactly; all other cutoff choices differ only by the exponential Gaussian tails in [F5]. Thus step 2.1 gives $(x_0,\xi_0)\notin\operatorname{WF}_A(f)$, as asserted. The two suppliers account separately for global fiber uniqueness and local differential injectivity, and all errors are controlled in the finite number of derivatives needed by the compact distribution. No stability or choice assumption has been added. [F4, F5, step 2.1, algebra] ∎
