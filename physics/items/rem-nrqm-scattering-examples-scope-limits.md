---
id: rem-nrqm-scattering-examples-scope-limits
aliases: [nrqm-scattering-examples-scope-limits]
kind: remark
domain: physics
title: "Scope of the scattering examples page"
status: draft
origin: session
dependency_level: 16
deps: [ex-nrqm-scattering-square-well-s-wave-phase-shift, ex-nrqm-scattering-single-channel-resonance-cross-section, ex-nrqm-scattering-born-uniform-ball-amplitude, ex-nrqm-scattering-long-range-tail-and-coulomb-warning, def-nrqm-scattering-framework-short-range-model]
dependency_roles:
  ex-nrqm-scattering-square-well-s-wave-phase-shift: formulation-prerequisite
  ex-nrqm-scattering-single-channel-resonance-cross-section: formulation-prerequisite
  ex-nrqm-scattering-born-uniform-ball-amplitude: formulation-prerequisite
  ex-nrqm-scattering-long-range-tail-and-coulomb-warning: formulation-prerequisite
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the four examples of the scattering examples page: their status as idealised conditional model calculations with complete verifications, the parameters they leave symbolic, and the absence of any measured data, apparatus or statistical inference on the companion page."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 12 printed pages 257-284 (PDF pages 265-292): the scattering chapter whose idealised models the examples instantiate"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Status of the examples.** Every item on this companion page is an
  idealised setup with a complete verification inside the declared model:
  the square well of
  [[ex-nrqm-scattering-square-well-s-wave-phase-shift]], the declared
  resonance factor of
  [[ex-nrqm-scattering-single-channel-resonance-cross-section]], the uniform
  ball Born amplitude of
  [[ex-nrqm-scattering-born-uniform-ball-amplitude]], and the Yukawa class
  check of
  [[ex-nrqm-scattering-long-range-tail-and-coulomb-warning]]. None is a
  reported experiment: there is no apparatus, calibration, sample, count or
  uncertainty budget on this page, and no number appearing here is a measured
  value.
- **Symbolic parameters.** The depth and radius of the well, the resonance
  energy and width, the ball strength and radius, and the Yukawa coupling and
  screening parameter remain symbolic throughout; the examples verify
  identities and class memberships, and assert no numerical value of $m$ or
  $\hbar$.
- **No extrapolation.** The hard-sphere comparison of the square-well example
  is a limit inside the declared family of wells; the low-energy limit is
  taken for the exact phase shift of the declared well and is not asserted as
  a universal low-energy law. The failures and limits recorded in the Yukawa
  example are statements about the declared potential class, not about any
  material target.
