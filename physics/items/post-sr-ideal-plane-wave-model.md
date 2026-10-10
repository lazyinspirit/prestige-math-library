---
id: post-sr-ideal-plane-wave-model
kind: postulate
title: 'Adopted ideal plane-wave and frequency-reading model'
status: draft
origin: pipeline
domain: physics
physical_scope: 'Ideal monochromatic vacuum plane waves and ideal observers in the flat classical special-relativity model: the phase model with future null wave covector, the identification of wave fronts and ideal rays, and the phase-per-proper-time frequency reading by an ideal observer. Adopted assumptions, not deductions and not empirical findings; excludes quantum, medium, dispersion, source, detector, intensity, polarization, gravity and real-apparatus effects; empirical tests are reserved to the framework''s experimental work.'
deps: [def-sr-affine-phase-and-wave-covector,
       lem-sr-null-covector-frame-data,
       lem-sr-future-causal-pairing-negative,
       lem-sr-phase-rate-along-worldline,
       def-sr-null-wave-covector-and-observer-frequency,
       post-sr-ideal-clocks-and-light,
       post-sr-inertial-covariance,
       def-sr-si-units-and-coordinate-conventions]
dependency_roles:
  def-sr-affine-phase-and-wave-covector: formulation-prerequisite
  lem-sr-null-covector-frame-data: formulation-prerequisite
  lem-sr-future-causal-pairing-negative: formulation-prerequisite
  lem-sr-phase-rate-along-worldline: formulation-prerequisite
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  post-sr-inertial-covariance: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
dependency_level: 14
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.2 The stretch factor is the Doppler shift pp. 55-57, Section 3.3 Combination of velocities pp. 57-59, Section 6.4 Duality pp. 134-137, Section 6.5.1 Doppler shift p. 137, Section 6.5.2 Aberration pp. 137-139 and Section 6.6.1 Phase velocity pp. 140-141; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
    - title: 'A. Einstein, Zur Elektrodynamik bewegter Koerper, Annalen der Physik 322 (10) 891-921 (1905), Section 7 pp. 910-912: transformed phase and Doppler and aberration laws; proofread transcription of the original at German Wikisource'
      url: 'https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper'
---

## Postulate

Adopt as physical assumptions of this framework, extending [[post-sr-ideal-clocks-and-light]] (ideal vacuum light rays are exactly the future null straight lines, with coordinate speed $c$ in every inertial chart) and [[post-sr-inertial-covariance]] (the affine Minkowski model, with the model's equations covariant under proper orthochronous affine Lorentz maps):

**(i) Ideal plane wave.** An ideal monochromatic light wave in vacuum is modeled, in any inertial chart, by a dimensionless affine phase $\theta$ with future null wave covector $k$ ([[def-sr-affine-phase-and-wave-covector]], [[lem-sr-null-covector-frame-data]]): the level sets of $\theta$ are the wave fronts, and the complete ray trajectories of this wave are the constant-phase lines $\lambda\mapsto p+\lambda k^\sharp$ for $\lambda\in\mathbb R$, whose tangents are future null. Their future portions from $p$ have images $p+\mathbb R_{\ge0}k^\sharp$. The complete trajectories are ideal light rays in the sense of [[post-sr-ideal-clocks-and-light]]; the portions are half-lines. The model is one ideal plane wave: constant wave covector, no medium, no dispersion, no absorption, no modulation or envelope, no boundary or source model, no intensity or polarization model.

**(ii) Frequency reading.** An ideal observer of the model with four-velocity $U_o=cn$ ($n$ future unit timelike) that receives this wave reads the angular frequency $\omega_n:=-ck(n)=-k(U_o)$ and the linear frequency $\omega_n/(2\pi)$ of [[def-sr-null-wave-covector-and-observer-frequency]], that is, minus the rate of change of the phase with respect to the observer's own proper time with the sign convention that this number is positive ([[lem-sr-phase-rate-along-worldline]], [[lem-sr-future-causal-pairing-negative]]). The reading is attached to the observer's worldline at the event of reception.

**(iii) Frequency comparisons.** Comparing the frequency of one wave between two ideal observers or between two inertial descriptions means comparing $\omega_n$ at specified reception events, or the frame data $(\omega,s)$ of the same phase function in specified inertial charts; this postulate asserts no Doppler or aberration formula, and comparing events requires propagating the phase along the specified observer worldlines.

**(iv) Scope and exclusions.** These are adopted idealizations, not deductions from experiment and not claims about nature. No quantum photon model and no identification of energy with $\hbar\omega$ is made; no claim is made that real light, real clocks, real receivers or real sources are exactly described; dispersive, absorbing, nonlinear or modulated media, finite line width, intensity, polarization, source and detector physics, gravitation, quantum effects and accelerated-observer reception are outside the model. Empirical tests of the model belong to the framework's experimental work and are not asserted here.

No choice principle is used in this formulation; the postulate is an adopted assumption of the model, not a proved assertion.
