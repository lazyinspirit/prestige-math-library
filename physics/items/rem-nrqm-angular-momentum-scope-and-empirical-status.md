---
id: rem-nrqm-angular-momentum-scope-and-empirical-status
aliases: [ nrqm-angular-momentum-scope-and-empirical-status ]
kind: remark
domain: physics
title: "What the angular momentum and spin page adopts, proves and does not claim"
status: draft
origin: session
dependency_level: 13
deps:
  [
    def-nrqm-angular-momentum-framework-angular-momentum-observables,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    post-nrqm-angular-momentum-magnetic-moment-coupling,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers,
    pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws,
    pthm-nrqm-angular-momentum-stern-gerlach-conditional-force,
    pthm-nrqm-angular-momentum-total-conservation,
    pthm-nrqm-angular-momentum-two-spin-composition,
    pthm-nrqm-angular-momentum-zeeman-precession,
    lem-nrqm-angular-momentum-orbital-casimir-identity,
    lem-nrqm-angular-momentum-product-flow-generator,
    lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action
  ]
dependency_roles:
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  post-nrqm-angular-momentum-magnetic-moment-coupling: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers: physical-result
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  pthm-nrqm-angular-momentum-stern-gerlach-conditional-force: physical-result
  pthm-nrqm-angular-momentum-total-conservation: physical-result
  pthm-nrqm-angular-momentum-two-spin-composition: physical-result
  pthm-nrqm-angular-momentum-zeeman-precession: physical-result
  lem-nrqm-angular-momentum-orbital-casimir-identity: mathematical-premise
  lem-nrqm-angular-momentum-product-flow-generator: mathematical-premise
  lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope and empirical status of the angular momentum and spin
  page: which postulates are adopted, which conditional results are proved,
  which empirical parameters remain input data with uncertainty, and which
  laboratory, relativistic and interaction structures are excluded. The remark
  asserts no model fact, no measurement and no empirical conclusion."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-Half, Bras, Kets, and Operators', Sections 1 and 4, printed pages
        1-7 and 16-19: the historical Stern-Gerlach discussion and the ideal
        spin model, explicitly distinguished from a quantitative apparatus
        analysis"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Preface, printed pages xi-xiii (PDF pages xiii-xv): the scope of the
        operator-theoretic model and its deliberate omission of spin, relativity
        and quantized radiation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---
## Scope and empirical status

- **Adopted assumptions.** This page adopts P1, P2, P4 and P5 in the
  readings of the framework and the spin assignment P6 of
  [[post-nrqm-framework-identical-particles-and-spin]] clause (ii)
  ([[def-nrqm-kinematics-framework-massive-spin-s-model]],
  [[def-nrqm-observables-framework-observable-and-outcome-law]]). The
  effective magnetic-moment coupling with its gyromagnetic parameter
  $\gamma_{s}$ and bounded field profile is the additional model assumption
  [[post-nrqm-angular-momentum-magnetic-moment-coupling]]; like the spin
  label, mass and charge, the parameter $\gamma_{s}$ is a species parameter
  with uncertainty and is not derived on this page.

- **What is proved.** The local mathematics
  [[lem-nrqm-angular-momentum-product-flow-generator]] and
  [[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] supplies the
  bounded-perturbation flow and the lifted SU(2) rotation action with its
  coordinate generators with the explicit transported physical-axes cover (the literal quaternion-coordinate cover is denoted $\rho_0$ there), and
  [[lem-nrqm-angular-momentum-orbital-casimir-identity]] identifies the
  orbital Casimir on the harmonic blocks. On that basis:
  [[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] gives the
  spectra and Born laws of the spin components;
  [[pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers]]
  describes the orbital eigenstates with the quantum numbers $l,m$ and the
  Casimir value; [[pthm-nrqm-angular-momentum-total-conservation]] proves the
  conservation of the total angular momentum for a spin-independent
  rotation-invariant bounded-potential dynamics;
  [[pthm-nrqm-angular-momentum-zeeman-precession]] gives the Larmor
  precession of the transverse spin expectations and the conservation of the
  field component in a uniform static field;
  [[pthm-nrqm-angular-momentum-two-spin-composition]] supplies the
  internal-factor composition with the Clebsch-Gordan decomposition and the
  spin-half singlet; and
  [[pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]] transfers
  the conditional smooth-field force identity to the model.

- **What is not claimed.** No result of this page derives any value of
  $\gamma_{s}$, $s$, $m$, $g$-factor or $\hbar$; no spin-orbit, fine or
  hyperfine structure, relativistic spinor, anomaly or radiative correction
  is included; no spin-statistics theorem is asserted; no atomic, molecular
  or solid-state model is constructed; and no statement about the
  compositeness or internal structure of any particle is made. The internal
  factor is a finite-dimensional bookkeeping device, not a rotating body.

- **Experiments.** This page contains no experiment item: it records no
  apparatus, calibration, sampling, count or uncertainty. The historical
  Stern-Gerlach setup appears only as the name of the conditional model of
  [[pthm-nrqm-angular-momentum-stern-gerlach-conditional-force]], whose
  clause (b) is a prediction of the model conditional on an explicit
  preparation hypothesis. Identifying the operators and parameters of this
  page with a laboratory preparation and apparatus is a tested
  identification with uncertainty under
  [[post-nrqm-framework-preparation-and-apparatus]]; the measurement
  statistics of sequential spin filters are treated on the measurement pages
  of the category, and agreement or disagreement with data there constrains
  the combined model and apparatus assumptions without proving them.

- **Consumers.** Composites, Bell and identical-particle pages of the
  category consume the internal-factor results of
  [[pthm-nrqm-angular-momentum-two-spin-composition]] and the lifted rotation
  action of [[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]];
  their empirical qualifications are added on those pages and are not
  inherited as certainty from this one.
