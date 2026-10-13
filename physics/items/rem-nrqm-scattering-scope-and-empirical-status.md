---
id: rem-nrqm-scattering-scope-and-empirical-status
aliases: [nrqm-scattering-scope-and-empirical-status]
kind: remark
domain: physics
title: "Scope and empirical status of the three-dimensional scattering page"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-scattering-framework-short-range-model, def-nrqm-scattering-stationary-beam-and-cross-section-model, def-nrqm-scattering-coulomb-dollard-model, def-nrqm-scattering-single-channel-resonance-model, pthm-nrqm-scattering-wave-operator-existence-and-free-continuity, pthm-nrqm-scattering-compact-support-asymptotic-completeness, pthm-nrqm-scattering-stationary-wave-amplitude-and-flux, pthm-nrqm-scattering-controlled-born-approximation, pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness, pthm-nrqm-scattering-partial-wave-cross-section, pthm-nrqm-scattering-stationary-dynamical-identification, pthm-nrqm-scattering-single-channel-resonance-cross-section]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-stationary-beam-and-cross-section-model: formulation-prerequisite
  def-nrqm-scattering-coulomb-dollard-model: formulation-prerequisite
  def-nrqm-scattering-single-channel-resonance-model: formulation-prerequisite
  pthm-nrqm-scattering-wave-operator-existence-and-free-continuity: physical-result
  pthm-nrqm-scattering-compact-support-asymptotic-completeness: physical-result
  pthm-nrqm-scattering-stationary-wave-amplitude-and-flux: physical-result
  pthm-nrqm-scattering-controlled-born-approximation: physical-result
  pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness: physical-result
  pthm-nrqm-scattering-partial-wave-cross-section: physical-result
  pthm-nrqm-scattering-stationary-dynamical-identification: physical-result
  pthm-nrqm-scattering-single-channel-resonance-cross-section: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope and empirical status of the three-dimensional scattering page: the distinction between the page's model deductions (existence, completeness, stationary amplitude, cross-section readings, Born and resonance models) and any observation; the apparatus and statistical qualifications needed before any measured count cross section could be compared with the model quantities; and the explicit absence of measured data on this page."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.3 printed pages 264-270 (PDF pages 272-278): cross sections and scattering experiments, the relation between the scattering amplitude and the measured count rate"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Remarks

**What the page establishes, and what it does not.**

- *Model deductions.* The page proves, conditionally on the declared
  short-range model and the cited mathematics, the existence of the wave
  operators, their isometry and intertwining
  ([[pthm-nrqm-scattering-wave-operator-existence-and-free-continuity]]), the
  asymptotic completeness and unitarity of the scattering operator for the
  compact-support and resolvent-tail classes
  ([[pthm-nrqm-scattering-compact-support-asymptotic-completeness]],
  [[pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness]]), the
  stationary outgoing solution with its amplitude and the cross-section
  readings ([[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]]), the controlled
  Born approximation with its operator-norm condition
  ([[pthm-nrqm-scattering-controlled-born-approximation]]), the phase-shift
  cross-section series ([[pthm-nrqm-scattering-partial-wave-cross-section]]),
  the on-shell operator identification
  ([[pthm-nrqm-scattering-stationary-dynamical-identification]]), and the
  conditional resonance-model algebra
  ([[pthm-nrqm-scattering-single-channel-resonance-cross-section]]). Every one of these is a logical
  consequence of the stated postulates, model declarations, hypotheses and
  mathematics; none of them is an observation.
- *No observations.* The page reports no experiment: it contains no apparatus,
  no calibration, no sample, no count, no uncertainty budget and no measured
  cross section. Nothing on the page should be read as a measurement of $V$,
  $\kappa$, a phase shift or a resonance parameter.
- *What a comparison would require.* To compare the model quantities
  $d\sigma/d\Omega$ or $\sigma$ with data one needs a declared target
  preparation (target density and composition), an incident fluence with its
  own uncertainty, a stated scattering geometry, a detector acceptance and
  efficiency model, and a background model, together with a declared
  statistical model for the counts. The equal-channel elastic flux assumptions
  of the beam model ([[def-nrqm-scattering-stationary-beam-and-cross-section-model]]
  clause (d)) must be justified for the particular apparatus; inelastic or
  multichannel processes lie outside the model and would require separate
  channels.
- *Interpretation.* Agreement of a measured count rate with the model reading
  is evidence for the combined model-plus-apparatus assumptions; it is not a
  deduction that the declared model, its potential class or the framework
  describes nature. Disagreement would not by itself falsify the whole
  framework, and a finite dataset can be compatible with a model without
  confirming it.

**Scope of the model declarations.** The potential is prescribed, not derived;
the Coulomb coupling $\kappa$ and the resonance parameters $E_{r},\Gamma$ are
model parameters, not measured constants; and the modified Dollard comparison
of the Coulomb model is a declared construction whose phase convention changes
only asymptotic channel phases
([[def-nrqm-scattering-coulomb-dollard-model]] clauses (c), (d)).
