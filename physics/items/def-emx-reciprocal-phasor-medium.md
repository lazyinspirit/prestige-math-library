---
id: def-emx-reciprocal-phasor-medium
kind: definition
title: "Fixed-frequency reciprocal tensor medium"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps:
  - post-em-material-closure
  - pthm-em-macroscopic-maxwell
  - def-em-si-conventions
dependency_roles:
  post-em-material-closure: formulation-prerequisite
  pthm-em-macroscopic-maxwell: physical-result
  def-em-si-conventions: formulation-prerequisite
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A local, linear, fixed-frequency macroscopic phasor model in a material-rest frame, on a bounded C1 Euclidean region, with continuous possibly complex tensor coefficients and C1 solution phasors. This definition imposes transpose symmetry as the reciprocal-coefficient condition; it does not assert causality, passivity, losslessness, existence, uniqueness, or empirical realization."
sources:
  references:
    - title: "Jin Au Kong, Electromagnetic Wave Theory, last edition 2008, PIERS free release 2021"
      url: "https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf"
      locator: "Chapter 3, §3.2.E, printed pp. 299–300, equations (3.2.15)–(3.2.26): the bilinear reciprocity identity and transpose-symmetry conditions for complex constitutive tensors."
    - title: "Weng Cho Chew, Electromagnetic Field Theory, Purdue ECE 604 lecture notes, 2023–2024 revision"
      url: "https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf"
      locator: "Chapter 12, §12.1–§12.1.1, printed pp. 146–148: reciprocity derivation for general linear anisotropic inhomogeneous tensor media, with no complex conjugation. The source uses exp(+jωt); the convention below is exp(−iωt)."
---

## Definition

Fix a real angular frequency $\omega\in\mathbb R$ and a bounded open region $\Omega\subset\mathbb R^3$ with $C^1$ boundary in a material-rest frame. Here a material-rest frame is the inertial frame in which every modelled material element has fixed spatial coordinates, as stipulated by the framework's material-closure postulate. A map in $C^1(\overline\Omega)$ means the restriction of a $C^1$ map on an open neighborhood of $\overline\Omega$. Let $\varepsilon,\mu:\overline\Omega\to\mathbb C^{3\times3}$ be continuous coefficient fields with units $\mathrm{F\,m^{-1}}$ and $\mathrm{H\,m^{-1}}$. They may be spatially varying and complex. Let $E_j,H_j\in C^1(\overline\Omega;\mathbb C^3)$ and $J_j\in C^0(\overline\Omega;\mathbb C^3)$, for $j=1,2$, be phasor amplitudes with SI units $\mathrm{V\,m^{-1}}$, $\mathrm{A\,m^{-1}}$, and $\mathrm{A\,m^{-2}}$. The corresponding real fields use $e^{-i\omega t}$, for example $E_j^{\mathrm{real}}(x,t)=\operatorname{Re}(E_j(x)e^{-i\omega t})$. Their displacement and magnetic-induction amplitudes are $D_j=\varepsilon E_j$ in $\mathrm{C\,m^{-2}}$ and $B_j=\mu H_j$ in $\mathrm T$.

The fixed-frequency constitutive and source equations are

$$D_j=\varepsilon E_j,\qquad B_j=\mu H_j,\qquad \operatorname{curl}E_j=i\omega B_j,\qquad \operatorname{curl}H_j=J_j-i\omega D_j.$$

All operators act componentwise on the spatial variable. For $u,v\in\mathbb C^3$, define the **bilinear** dot product $u\cdot v=\sum_{r=1}^3u_rv_r$ and the complex-bilinear cross product by the usual right-handed component formula. Neither product conjugates either input. The transpose $T$ is the ordinary matrix transpose, without complex conjugation. This definition calls the coefficient model **reciprocal** when $\varepsilon(x)^T=\varepsilon(x)$ and $\mu(x)^T=\mu(x)$ at every $x\in\overline\Omega$. It places no Hermitian, positive-definite, or passivity condition on these complex matrices.

This is a fixed-frequency phasor data class. Its possibly complex coefficients are not inferred from the framework's real, instantaneous material branch; a separate response model is required to justify any such interpretation.

## Definition references

[[post-em-material-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-em-si-conventions]]
