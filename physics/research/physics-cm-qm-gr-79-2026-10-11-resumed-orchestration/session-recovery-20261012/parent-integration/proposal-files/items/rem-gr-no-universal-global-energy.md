---
id: rem-gr-no-universal-global-energy
kind: remark
title: "Absence of a universal global energy: observer dependence, no local gravitational energy, and deferred asymptotic masses"
status: draft
origin: session
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [pthm-gr-local-energy-balance, def-gr-killing-energy-charge, lem-gr-killing-congruence-kinematics-and-energy-current, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-measured-energy-density-flux-and-stress, def-gr-observer-energy-momentum-current, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, thm-gr-second-bianchi-and-divergence-free-einstein, def-gr-stress-energy-tensor-field, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-classical-gravitational-action, rem-gr-einstein-matter-scope-and-conventions, thm-gr-point-normal-and-exponential-coordinate-charts, rem-gr-normal-coordinates-and-local-inertial-frames-scope, def-gr-si-unit-and-coordinate-conventions]
dependency_roles:
  pthm-gr-local-energy-balance: physical-result
  def-gr-killing-energy-charge: formulation-prerequisite
  lem-gr-killing-congruence-kinematics-and-energy-current: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-measured-energy-density-flux-and-stress: formulation-prerequisite
  def-gr-observer-energy-momentum-current: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: formulation-prerequisite
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-einstein-field-law: physical-assumption
  post-gr-classical-gravitational-action: physical-assumption
  rem-gr-einstein-matter-scope-and-conventions: formulation-prerequisite
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  rem-gr-normal-coordinates-and-local-inertial-frames-scope: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
physical_scope: "Scope and status note for energy questions of the classical gravitational framework: the observer dependence of measured energy density, the absence of any local gravitational energy density in the framework as built, the additional hypotheses a global energy requires, and the deferral of asymptotic masses. The note asserts no theorem about nature, no no-go theorem and no measured value."
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.3.2 and section 4.5.5: the energy associated with a Killing vector, the de Sitter example in which the Killing field is timelike only in the static patch and there is no global positive conserved energy, and the failure of covariant conservation of T to give actual conservation, printed pp. 163 and 187-189 (PDF pp. 170 and 194-196); section 4.3.3: Komar integrals and their interpretation as the mass of the spacetime, printed pp. 165-167 (PDF pp. 172-174)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.5 'The energy in gravitational waves': the candidate quadratic tensor t_{mu nu} is not gauge invariant, 'the impossibility of localizing gravitational energy', and the ADM energy defined by a surface integral at infinity for asymptotically flat spacetimes, printed pp. 88-89 (PDF pp. 89-90)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the field equations and the energy-momentum tensor as matter content, printed pp. 116-118 (PDF pp. 123-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Scope and status

This note fixes what the framework does and does not provide under the name
"energy". It proves nothing by itself and asserts no fact about nature.

- **Observer dependence of measured energy.** The measured energy density
  $\mu=T_{ab}n^an^b$ and the SI measured energy flux $q=c\Phi$ of
  [[def-gr-measured-energy-density-flux-and-stress]] depend on the observer
  congruence $n$; only the tensor $T$ itself is observer independent. For a
  prescribed model different congruences generally assign different energies
  to the same region, and the framework contains no congruence-independent
  local energy density of matter.

- **No local gravitational energy in the framework as built.** The framework
  defines a stress-energy tensor only for the matter sector
  ([[def-gr-stress-energy-tensor-field]],
  [[post-gr-field-and-matter-assumptions]]): $T$ is the matter content of the
  field law, and the geometric side $G_{ab}+\Lambda g_{ab}$ has identically
  vanishing divergence ([[thm-gr-second-bianchi-and-divergence-free-einstein]]).
  The local balance of [[pthm-gr-local-energy-balance]] is a balance of the
  *matter* current; no item of the framework defines a local gravitational
  energy density or flux that would complete it into a conservation law for a
  total energy. The framework's normal-coordinate material
  ([[thm-gr-point-normal-and-exponential-coordinate-charts]],
  [[rem-gr-normal-coordinates-and-local-inertial-frames-scope]]) records that
  the connection can be made to vanish at a point by an adapted chart while
  the curvature data cannot be removed by that choice; this is recorded here
  only as the scope statement that no construction of a local gravitational
  energy density is available from the connection alone. It is not a no-go
  theorem, and no no-go theorem is claimed. The cited treatments record the
  corresponding physical point: a gauge-invariant local energy density of the
  linearized gravitational field is unavailable, and gravitational energy
  cannot be localized.

- **A global energy needs a symmetry and control of the flux.** The Killing
  energy $Q_\xi$ of [[def-gr-killing-energy-charge]] exists only for a model
  that admits an everywhere timelike future-directed Killing field $\xi$;
  a general metric has no nonzero Killing field beyond $\xi=0$
  ([[def-gr-killing-field]]). Even with such a $\xi$, the finite-chain
  statement of [[pthm-gr-local-energy-balance]] gives
  $Q_\xi(\Sigma_2)-Q_\xi(\Sigma_1)=-Q_\xi(B)$: conservation requires the side
  flux to vanish. For a slice of unbounded spatial extent one further needs
  the limiting flux and the integrals to converge; the flux theorem
  [[thm-gr-density-divergence-and-finite-chain-flux]] is stated for finite
  smooth singular chains and supplies no such limit, and the framework's scope
  note [[rem-gr-einstein-matter-scope-and-conventions]] already excludes
  arbitrary rough or noncompact domains from its smooth branch.

- **A Killing field need not be timelike everywhere.** A Killing field that is
  timelike on one region may be spacelike or past-directed elsewhere, in which
  case the charge is not an energy there; the de Sitter example recorded in the
  cited Tong reference has no globally defined positive conserved energy of
  this kind. Nothing in the framework selects a preferred Killing field or
  normalization: the normalization is part of the model data, and changing
  $\xi$ changes $Q_\xi$ as recorded in
  [[def-gr-killing-energy-charge]] clause (d).

- **Asymptotic and quasilocal masses are deferred.** The ADM energy and
  related Bondi-type quantities are defined by surface integrals at infinity
  for asymptotically flat spacetimes, and Komar-type integrals by fluxes at a
  chosen boundary; both require an asymptotic or boundary structure
  (fall-off conditions, a sphere at infinity, limit arguments) or a chosen
  quasilocal surface. None of this structure is defined on this page or on
  the pages it depends on. Such masses are deferred to a future
  boundary-asymptotic module; no asymptotic mass, quasilocal mass or
  radiative energy loss is defined, computed or used in this framework here.

- **Empirical status.** The note contains no experiment, no measured input and
  no empirical premise. It records the scope of the framework's energy
  statements and the obligations deferred to other pages; it does not assert
  that the framework's energy notions are the only possible ones, nor that
  the model describes nature.
