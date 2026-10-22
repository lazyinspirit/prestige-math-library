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
      locator: "§6, Proposition 6.2 and proof, printed pp. 41–45, for analytic packet independence."
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

**Given:** The analytic double-fibration transform $R$, a relation point $(z_0,\zeta_0;x_0,\xi_0)$ satisfying Bolker, and $f\in\mathcal E'(X)$.

[F1] [[def-ip-analytic-double-fibration-transform]]: $R$ is a properly supported analytic incidence transform on compactly supported distributions.

[F2] [[def-ip-bolker-condition]]: Bolker means that the left cotangent projection is globally injective and has injective differential.

[F3] [[lem-ip-double-fibration-conormal-kernel]]: in local defining coordinates, the relation is the signed conormal $(\eta,-\xi)$ of the incidence set.

[F4] [[lem-ip-bolker-geometric-criteria]]: the local differential condition is the injectivity of the stated conormal-fiber rank system.

[F5] [[thm-real-analytic-inverse-and-implicit-function-theorems]]: a real-analytic submersion incidence equation can be solved locally as an analytic graph.

## Proof

**Given:** The data in the statement.

The following steps establish the local geometric reduction needed for the theorem; the FBI packet-transfer implication itself remains unresolved below.

1.1 By [F2], a fixed data covector $(z_0,\zeta_0)$ has at most one object covector paired with it, and the differential of the left projection has no nonzero kernel at the supplied relation point. By [F4], in a fiber chart this is exactly the global uniqueness and local full-rank condition for the conormal equations. [F2, F4, given]

1.2 The analytic defining equation for $Z$ has a surjective differential; [F5] therefore gives local analytic graph coordinates. In these coordinates, [F3] makes the kernel a smooth nonvanishing density multiple of a delta distribution on that graph, and its cotangent relation is obtained by differentiating the graph equation with the fixed $(\eta,-\xi)$ sign. Thus the transform near the supplied relation point has a local analytic conormal model with the unique left fiber and rank hypotheses from step 1.1. [F1, F3, F5, step 1.1] ∎

## Unresolved supplier check

Steps 1.1–1.2 do not prove that exponential decay of the data FBI packet forces exponential decay of the object FBI packet. The theorem's full claim is preserved above.

- Exact gap: prove the local FBI packet-transfer estimate for the analytic conormal model, including localization of all input support away from the unique relation point, the wave-packet resolution formula, uniform nonstationary/boundary exponential errors, and inversion of the elliptic Gaussian stationary-phase kernel.
- Source status: MST §§5.1–5.6, pp. 27–42, supplies a complete proof by wave-packet decomposition and estimates, including critical-point uniqueness, Hessian positivity, and boundary terms. Those arguments have been read, but their full packet-kernel reduction and quantitative estimates are not reproduced in this carrier; citation alone is not treated as proof. Sjöstrand §6 supplies the additional chart/packet invariance route but does not replace the missing local estimate here.
- Affected claims: this theorem, thm-ip-local-support-from-one-sided-vanishing, and ex-ip-visible-conormal-under-bolker.
- Proposed supplier and placement: a local analytic Bolker packet-transfer lemma on the A page, immediately before this theorem, proving the model FBI kernel estimate and its elliptic inverse with all exponential tails.
