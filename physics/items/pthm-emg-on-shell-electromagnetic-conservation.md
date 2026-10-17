---
id: pthm-emg-on-shell-electromagnetic-conservation
kind: physics-theorem
title: "Electromagnetic conservation in source-free curved spacetime"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - post-emg-einstein-maxwell-action
  - pthm-emg-action-field-equations
  - lem-emg-maxwell-stress-conservation
  - def-emg-geometry-units
  - def-emg-electrovacuum-cauchy-system
  - def-emg-local-potentials-and-circle-data
  - lem-emg-circle-connection-gluing
dependency_roles:
  post-emg-einstein-maxwell-action: physical-assumption
  pthm-emg-action-field-equations: physical-result
  lem-emg-maxwell-stress-conservation: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
physical_scope: >
  A local model deduction for the smooth zero-matter-action Einstein-Maxwell
  branch on a Lorentzian four-manifold. It asserts covariant conservation of
  electromagnetic stress on stationary source-free configurations only; it
  does not assert existence, global energy conservation, or empirical validity.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, 12 October 2022 revision, complete 125-page notes"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§6.2, equation (6.8), curved-spacetime Maxwell equations; §6.3, equations (6.27)–(6.28), the Maxwell stress tensor and its source-free conservation exercise. Gaussian normalization is not imported."
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), complete 20-page paper"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "§II.2, equations (2.70)–(2.78), electromagnetic stress tensor, trace and observer projections. The Gaussian 1/(4π) factor is replaced by the stated SI μ0 normalization."
verification:
  precheck: pending
---

## Statement

Adopt the zero-matter specialization of [[post-emg-einstein-maxwell-action]]:
the matter functional is identically zero on a singleton matter configuration
space, so its current and Hilbert tensor vanish. Let $(M,g,N,o)$ be a smooth,
time-oriented, oriented Lorentzian four-manifold of signature $(-,+,+,+)$,
and let $F$ be the smooth physical curvature two-form of a connection in a
fixed normalized circle-bundle sector, with the local $F=\kappa_0 da_i$
convention of [[def-emg-local-potentials-and-circle-data]]. If the adopted compact-variation action is
stationary, then its electromagnetic stress tensor

$$T^{\rm EM}_{ab}=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right)$$

obeys

$$\nabla^aT^{\rm EM}_{ab}=0.$$
This is a local conditional deduction for the stated classical model. It does
not assert a global conserved energy, existence of a stationary configuration,
or empirical validity.

## Facts & Assumptions

**Given:** The smooth geometry, fixed-sector connection, adopted action, and
zero-matter specialization in the Statement.

[F1] [[post-emg-einstein-maxwell-action]]: stationarity is adopted for
independent compactly supported metric, fixed-sector connection, and matter
variations. The selected current and stress are the matter first-variation
coefficients.

[F2] [[pthm-emg-action-field-equations]]: for that action and compact
variations, stationarity is equivalent to its Einstein, Maxwell, and matter
Euler–Lagrange equations. The connection equation is
$\nabla_aF^{ab}=-\mu_0j^b$, and $dF=0$ because $F$ is a connection curvature.

[F3] [[lem-emg-maxwell-stress-conservation]]: for a smooth field satisfying
$dF=0$ and $\nabla_aF^{ab}=-\mu_0J^b$,
$\nabla^aT^{\rm EM}_{ab}=-F_{bc}J^c$; its proof derives the identity by
contracting the homogeneous Maxwell equation and applying the product rule.
This supplier is a current draft with Step-1 readiness and
`verification.precheck: pending`; its exact identity is used conditionally.

[F4] [[def-emg-electrovacuum-cauchy-system]] and
[[def-emg-geometry-units]]: $T^{\rm EM}$ has the displayed SI normalization
on the adopted Lorentzian signature.

[F5] [[def-emg-local-potentials-and-circle-data]] and
[[lem-emg-circle-connection-gluing]]: the normalized local representatives
glue in one fixed circle-bundle sector, and their physical curvature is
$F=\kappa_0 da_i$.

[A1] The matter functional is $S_m\equiv0$ on a singleton configuration
space. Hence every matter variation vanishes and the two coefficients
$T^m,j$ in [F1] are zero. This choice introduces no empirical premise.

## Proof

**Given:** The data and assumptions in the Statement.

1.1 Since $S_m$ is the zero functional, its first variation is zero for every
admissible compactly supported metric, connection, or matter variation.
Consequently the matter stress and current defined by [F1] satisfy
$T^m_{ab}=0$ and $j^a=0$. [A1, F1, algebra]

2.1 Apply [F2] to the stationary configuration. Its connection equation and
the value $j=0$ from step 1.1 give $\nabla_aF^{ab}=0$; the homogeneous equation
$dF=0$ also holds because $F$ is the physical curvature of a smooth
connection with the normalization in [F5]. These are exactly the source-free
Maxwell hypotheses of [F3]. [step 1.1, F2, F3, F4, F5, algebra]

3.1 Apply [F3] with $J=0$. Its pointwise identity reduces to
$\nabla^aT^{\rm EM}_{ab}=0$, as claimed. This is covariant local conservation,
not a statement about a global energy charge. [step 2.1, F3, algebra] ∎
