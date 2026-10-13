---
id: rem-nrqm-approximations-scope-and-empirical-status
aliases: [nrqm-approximations-scope-and-empirical-status]
kind: remark
domain: physics
title: "What the controlled-approximations page adopts, proves and does not claim: gaps, branch populations, turning points and the static-Stark limitation"
status: draft
origin: session
dependency_level: 14
deps: [def-nrqm-approximations-framework-variational-trial-model, def-nrqm-approximations-framework-perturbed-family-model, def-nrqm-approximations-framework-wkb-regime-model, pthm-nrqm-approximations-variational-bounds-and-min-max, pthm-nrqm-approximations-nondegenerate-perturbation-expansion, pthm-nrqm-approximations-degenerate-first-order-splitting, pthm-nrqm-approximations-wkb-allowed-region-error, pthm-nrqm-approximations-turning-point-connection, pthm-nrqm-approximations-barrier-transmission-asymptotics, post-nrqm-approximations-static-finite-level-dipole-coupling, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  def-nrqm-approximations-framework-variational-trial-model: formulation-prerequisite
  def-nrqm-approximations-framework-perturbed-family-model: formulation-prerequisite
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  pthm-nrqm-approximations-variational-bounds-and-min-max: physical-result
  pthm-nrqm-approximations-nondegenerate-perturbation-expansion: physical-result
  pthm-nrqm-approximations-degenerate-first-order-splitting: physical-result
  pthm-nrqm-approximations-wkb-allowed-region-error: physical-result
  pthm-nrqm-approximations-turning-point-connection: physical-result
  pthm-nrqm-approximations-barrier-transmission-asymptotics: physical-result
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and status record for the controlled-approximations page: the adopted model clauses, the proved conditional statements with their gap, smoothness and boundedness hypotheses, the explicit exclusions (equilibration and branch selection, unbounded and static-field perturbations, rectangular and coalescing turning-point configurations, detectors and measurements), and the absence of any empirical record on this page."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1.2 printed pages 206-208 (PDF pages 214-216): the degenerate-subspace diagonalisation of the perturbation, together with the conjecture that the system 'jumps' to the lowest branch, which is not imported as a deduction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 4.3 printed pages 117-119 (PDF pages 129-131) and Section 6.6 printed pages 153-159 (PDF pages 165-171): the min-max theorem and the bounded-perturbation resolvent estimates on which the page's conditional statements rest"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Adopted model clauses.** The page declares three models: the variational
  trial model [[def-nrqm-approximations-framework-variational-trial-model]]
  (a self-adjoint energy observable bounded below, its form domain and trial
  value), the perturbed family
  [[def-nrqm-approximations-framework-perturbed-family-model]] (a bounded
  self-adjoint perturbation of a gapped isolated label) and the WKB regime
  model [[def-nrqm-approximations-framework-wkb-regime-model]] (the
  nondimensionalised one-dimensional stationary equation with a declared
  semiclassical parameter and a compactly supported $C^{5}$ potential), plus
  the static finite-level dipole coupling
  [[post-nrqm-approximations-static-finite-level-dipole-coupling]]. Each
  declaration is a model assumption; none is derived from P1-P7.

- **What is proved.** Conditional on those declarations the page proves: the
  trial lower bound, the gap-overlap control and the min-max characterisation
  of the discrete ladder
  ([[pthm-nrqm-approximations-variational-bounds-and-min-max]]); the
  nondegenerate perturbation expansion with explicit cubic remainder
  ([[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]]); the
  degenerate first-order splitting localisation within
  $4\lambda^{2}v^{2}/g$
  ([[pthm-nrqm-approximations-degenerate-first-order-splitting]]); the
  allowed-region WKB Gronwall error
  ([[pthm-nrqm-approximations-wkb-allowed-region-error]]); the single
  simple-turning-point Airy connection with envelope errors
  ([[pthm-nrqm-approximations-turning-point-connection]]); and the separated
  smooth-barrier transmission asymptotics
  ([[pthm-nrqm-approximations-barrier-transmission-asymptotics]]). Every one
  of these statements carries its hypotheses explicitly: the gap $g>0$, the
  boundedness of the perturbation, the smoothness of $W$, the separation of
  the turning points, and the value of the semiclassical parameter.

- **No attained ground state is assumed.** The variational statements use the
  form domain $Q(H)$ and the declared spectral lower bound; they do not
  assume that the bottom $E_{0}$ is an eigenvalue, that a ground eigenvector
  exists, or that the trial infimum is attained. The gap-overlap clause is
  the only place where an isolated bottom is used, and it states exactly the
  overlap forced by a trial value within $\varepsilon$ of the bottom.

- **No branch population or equilibration.** The perturbation theorems locate
  spectral labels of the declared families; they assert no instantaneous
  transition of a preparation to the branch with the smallest first-order
  shift, no relaxation to a lowest branch and no equilibration. The
  motivating textbook conjecture of a jump to the lowest branch is not
  imported. For each fixed coupling $\lambda$, P4 assigns the autonomous
  flow $e^{-itH(\lambda)/\hbar}$; it commutes with the spectral projections
  of that fixed operator, so their populations are fixed by the initial
  preparation. The textbook conjecture instead concerns a time ramp
  $\lambda(t)$: P4 supplies no propagator for that ramp and gives no
  conservation law for its instantaneous spectral-branch populations
  ([[post-nrqm-framework-autonomous-dynamics]] clauses (ii), (iv)). Such a
  question requires separately specified driven dynamics; an equilibration statement
  would require a separately declared environment or dissipation model, which
  this page does not supply.

- **Turning points and barriers.** The allowed-region error excludes turning
  points by hypothesis; the connection theorem treats a single simple
  turning point and does not produce a transmission coefficient; the barrier
  theorem assumes exactly two separated simple turning points of a compactly
  supported $C^{5}$ barrier and excludes rectangular walls, coalescing
  turning points, barrier-top uniformity and resonant multiwell interference.
  The declared transmission coefficient is a matching datum of the model, not
  a detector response.

- **The static-Stark limitation.** For $\mathbf E_{\rm ext}\ne0$, the
  uncompressed static perturbation of a Coulomb model by a uniform field is the unbounded multiplication term
  $-\mathbf E_{\rm ext}\cdot\mathbf D$. The common-test-domain calculation in
  [[post-nrqm-approximations-static-finite-level-dipole-coupling]] translates
  a normalized fixed $\varphi\in C_c^\infty(B(0,\rho))$ to
  $\psi_R(\mathbf r)=\varphi(\mathbf r+R\widehat e)$, where
  $\widehat e=\mathbf E_{\rm ext}/|\mathbf E_{\rm ext}|$. Its kinetic
  expectation is constant, its Coulomb integral is bounded by
  $1/(R-\rho)$, and the linear term contains $-qR|\mathbf E_{\rm ext}|$;
  hence the operator expectations tend to $-\infty$ on the explicit common
  test domain. No quadratic form bounded below there can agree with those
  values, although no particular closed-form domain is asserted. No
  bounded-perturbation theorem
  of this page applies to that nonzero-field interaction. At
  $\mathbf E_{\rm ext}=0$, the maximal interaction is the bounded zero
  operator on $L^2(\mathbb R^3;\mathbb C)$; $\widehat e$ is not defined, and
  the preceding translation argument and bounded-perturbation exclusion do
  not apply. This page covers only the compressed finite-level operator of
  [[post-nrqm-approximations-static-finite-level-dipole-coupling]], and it
  states no eigenvalue theorem for the uncompressed model.

- **Empirical status.** No experiment, reported observation, measured shift,
  splitting, transmission or count appears on this page; no apparatus,
  calibration, sampling or uncertainty record is supplied. The statements are
  conditional predictions of the declared models. A comparison with data
  would test the combined assumptions -- preparation, isolation, parameter
  identification, truncation, field description and detection response --
  under the preparation and apparatus discipline P7
  ([[post-nrqm-framework-preparation-and-apparatus]]); agreement would be
  evidence about that combination, not a deductive proof of the model, and a
  discrepancy would require the auxiliary assumptions to be examined before
  the model is rejected.
