---
id: rem-gr-local-and-global-energy-scope-and-deferrals
kind: remark
title: "Scope and status of the local-and-global-energy page: what is defined, what is conditional, and what is deferred"
status: draft
origin: session
domain: physics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [pthm-gr-local-energy-balance, rem-gr-no-universal-global-energy, def-gr-measured-energy-density-flux-and-stress, def-gr-killing-energy-charge, def-gr-observer-energy-momentum-current, def-gr-observer-congruence-and-adapted-charts, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-energy-momentum-current-divergence, lem-gr-killing-congruence-kinematics-and-energy-current, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-classical-gravitational-action, rem-gr-einstein-matter-scope-and-conventions, def-gr-si-unit-and-coordinate-conventions, def-countable-choice]
dependency_roles:
  pthm-gr-local-energy-balance: physical-result
  rem-gr-no-universal-global-energy: formulation-prerequisite
  def-gr-measured-energy-density-flux-and-stress: formulation-prerequisite
  def-gr-killing-energy-charge: formulation-prerequisite
  def-gr-observer-energy-momentum-current: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-energy-momentum-current-divergence: mathematical-premise
  lem-gr-killing-congruence-kinematics-and-energy-current: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: formulation-prerequisite
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-einstein-field-law: physical-assumption
  post-gr-classical-gravitational-action: physical-assumption
  rem-gr-einstein-matter-scope-and-conventions: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: "Scope, convention and status note for the energy material of the classical gravitational framework: the objects defined on this page, the status of the balance and conservation claims, the smooth and finite-chain restrictions, the choice assumptions, and the obligations deferred to other pages. The note asserts no theorem, no measured value and no claim about nature."
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5: covariant conservation of T is not actual conservation, and the Killing current yields conserved charges with an energy interpretation, printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 9.3: conservation of the energy-momentum tensor and its matter origin, printed pp. 116-118 (PDF pp. 117-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Scope and status

This note fixes the scope of the page's energy content and the status of its
claims; it proves nothing by itself.

- **What is defined.** For a smooth symmetric covariant $2$-tensor field $T$
  and a smooth observer congruence $n$, the page defines the measured energy
  density, energy-momentum current, energy flux and spatial stress
  ([[def-gr-observer-energy-momentum-current]]), their physical reading and
  units ([[def-gr-measured-energy-density-flux-and-stress]]), the acceleration
  and expansion of the congruence
  ([[def-gr-congruence-acceleration-and-expansion]]), and, for a model with an
  everywhere timelike future-directed Killing field, the Killing current and
  the Killing charge of a finite three-chain (read as an energy in joules when
  the field is length-normalized under the framework's length-coordinate
  convention)
  ([[def-gr-killing-energy-charge]]). The algebraic decomposition behind the
  measured fields is proved in
  [[lem-gr-observer-energy-momentum-decomposition]], and the divergence and
  finite-chain identities in
  [[lem-gr-energy-momentum-current-divergence]] and
  [[lem-gr-killing-congruence-kinematics-and-energy-current]].

- **What is conditional.** The local energy balance and conservation of the
  Killing charge (whose energy reading requires the stated normalization) are
  established by theorem
  [[pthm-gr-local-energy-balance]]: they are conditional on the adopted field
  law, on the smooth hypotheses of
  [[post-gr-spacetime-and-classical-domain]] and
  [[post-gr-field-and-matter-assumptions]], and, for the conservation
  statement, on the existence of the timelike Killing field and on the
  vanishing of the side flux. Nothing on the page establishes that a Killing
  field exists for a given metric
  ([[def-gr-killing-field]],
  [[thm-gr-killing-and-on-shell-matter-identities]]), and the finite-chain
  flux statements are those of
  [[def-gr-metric-volume-form-and-current-flux]] and
  [[thm-gr-density-divergence-and-finite-chain-flux]].

- **Smooth and finite branch.** The local constructions and identities use
  smooth fields on nonempty open domains, which may be noncompact; the flux
  statements integrate over finite smooth singular chains. This restricts
  the integration objects, not the ambient manifold or matter domain.
  Distributional sources, interfaces with nonsmooth fields and rough regions
  need the additional mathematics deferred in
  [[rem-gr-einstein-matter-scope-and-conventions]]. Integration over unbounded
  slices and passage to asymptotic limits require additional convergence and
  boundary hypotheses not supplied by the finite-chain statements. The observer congruence is
  an idealization of a family of ideal-clock worldlines; the physical reading
  of measured quantities is the framework's reading of
  [[def-gr-si-unit-and-coordinate-conventions]], and no numerical value is
  asserted by any item of the page.

- **Deferred obligations.** The absence of a universal global energy, the
  observer dependence of measured energy and the deferral of ADM-, Bondi- and
  Komar-type masses to a future boundary-asymptotic module are recorded in
  [[rem-gr-no-universal-global-energy]]. In particular, no asymptotic energy,
  quasilocal mass, radiative loss or initial-data energy is defined or used
  here. Later pages of this framework may consume the redshift-weighted
  Killing current and the measured-energy identities for stationary and
  spherical models and for linearized waves; each such use must verify the
  hypotheses of the items it consumes and carry the item's scope
  qualifications with it.

- **Choice convention.** The smooth-bundle structure used throughout the page
  assumes the axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]] through
  [[def-gr-observer-congruence-and-adapted-charts]] (and
  [[def-gr-observer-energy-momentum-current]]); no other choice principle is
  used, and no foundational item of this page introduces a choice principle of
  its own.

- **Empirical status.** The page contains no experiment, no measured input and
  no empirical premise. Its physics claims are conditional deductions from the
  adopted postulates and stated hypotheses; any later comparison with reported
  observations tests the combined model and apparatus assumptions and is
  evidence rather than proof.
