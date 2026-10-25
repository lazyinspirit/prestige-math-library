---
id: def-aqft-cubic-anomaly-polynomial
kind: definition
title: Degree-six cubic trace polynomial for a chiral representation
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies
deps: []
dependency_roles: {}
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§10.4, equations (10.49)–(10.54), printed pp. 87–88: anti-Hermitian connection convention and the degree-six gauge anomaly polynomial as the descent source."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§2.1–2.2, printed pp. 25–34: invariant-polynomial normalization, Chern–Simons transgression, and Stora–Zumino descent."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $H=SU(3)\times U(1)$, where $SU(3)=\{g\in M_3(\mathbb C):g^\dagger g=I_3,\det g=1\}$ and $U(1)=\{z\in\mathbb C:|z|=1\}$. For a finite-dimensional unitary representation $\rho:H\to U(V_\rho)$, let $A_\rho$ be a smooth anti-Hermitian matrix-valued one-form on a smooth manifold $X$, representing a connection in a local trivialization, and set $F_\rho=dA_\rho+A_\rho\wedge A_\rho$. Define the degree-six invariant polynomial

$$\mathcal I_6(\rho,A_\rho):=2\pi\left[\operatorname{tr}_{V_\rho}\exp\!\left(-\frac{iF_\rho}{2\pi}\right)\right]_6=\frac{i}{24\pi^2}\operatorname{tr}_{V_\rho}(F_\rho\wedge F_\rho\wedge F_\rho),$$

where the exponential is its formal power series and $[\,\cdot\,]_6$ selects the differential-form component of degree six. This is a homogeneous polynomial in the formal curvature; on a four-dimensional physical spacetime it is interpreted on the formal six-dimensional extension used for descent, not integrated as a six-form over spacetime. The normalization fixes anti-Hermitian generators, the fundamental trace, and the overall coefficient once and for all.

For the defining representation $E=\mathbb C^3$ with $\rho_E(g,z)=zg$, a background connection is $A_E=A+iB I_3$, where $A$ is an $\mathfrak{su}(3)$-valued one-form and $B$ is a real $U(1)$ connection one-form. The dual representation is $E^*=\operatorname{Hom}_{\mathbb C}(E,\mathbb C)$ with $\rho_{E^*}(g,z)=\rho_E(g,z)^{-T}$; its induced connection and curvature are $A_{E^*}=-A_E^T$ and $F_{E^*}=-F_E^T$.

## Definition references

[Bilal, §10.4, equations (10.49)–(10.54)](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§2.1–2.2](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)
