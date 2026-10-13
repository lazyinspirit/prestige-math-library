---
id: post-sr-ideal-massless-particle-momentum
kind: postulate
title: "Adopted momentum model for an ideal massless particle"
status: published
origin: pipeline
domain: physics
physical_scope: "Ideal classical massless point particles in flat Minkowski spacetime, modelled by a nonzero future null four-momentum whose energy and momentum are identified with the observer quantities, and whose scale is fixed by a measured energy. Excludes four-velocities, proper time and rest frames for the particle, any massive limit m -> 0, the identification with light or classical waves, quantum properties, and every interaction, decay, production or empirical claim."
deps:
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-sr-si-units-and-coordinate-conventions
  - def-sr-four-velocity-and-four-acceleration
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-lorentz-form-and-inertia: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: formulation-prerequisite
  def-time-orientation-and-future-causal-sets: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-four-velocity-and-four-acceleration: formulation-prerequisite
  def-sr-observed-energy-momentum-and-kinetic-energy: formulation-prerequisite
  lem-sr-energy-momentum-observer-identities: mathematical-premise
dependency_level: 14
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Sections 4.3.5 pp. 96-97 (massless particles travel at c, no rest frame, and p = m gamma v is not general enough because it is indeterminate as m -> 0) and p. 94 Example 12 (one-photon pair production forbidden)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 6.3 pp. 63-64 (P^a = m u^a is defined for a rest mass m and a timelike four-velocity only; a null momentum needs its own construction)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Postulate

Adopt as a separate model premise for ideal massless particles, independent of
[[post-sr-massive-particle-dynamics]] whose formula $P=mU$ uses $m>0$ and does
not define a massless case:

**(i) The object.** An ideal massless particle of the model is described by a
nonzero future null vector $P\in V$
([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]) whose SI unit is kilogram
metre per second ([[def-sr-si-units-and-coordinate-conventions]]). Such a $P$
is not of the form $mU$ for any $m>0$ and any future timelike $U$ with
$\eta(U,U)=-c^2$: a positive multiple of a timelike vector is timelike, and
the zero vector is neither timelike, null nor spacelike, so the massive
expression $mU$ with this normalized $U$ degenerates
to $0$ at $m=0$ and does not describe a nonzero null momentum. The particle
therefore has no four-velocity, no proper-time parametrisation and no rest
frame. Its scale is fixed by a measured energy in an observer's frame.

**(ii) Observer identification.** Relative to a future unit observer $n$, the
model identifies the measured energy and spatial momentum of the particle with
the quantities $E_n(P)=-c\,\eta(P,n)$ and $q_n(P)=h(P)$ of
[[def-sr-observed-energy-momentum-and-kinetic-energy]]. Necessarily
$E_n(P)=c\,|q_n(P)|>0$, by
[[lem-sr-energy-momentum-observer-identities]]\,(a)(i), and no rest mass, rest
energy or kinetic energy is assigned to the particle — the definition of
$T_n$ requires a rest-mass parameter $m$ and no such parameter is introduced
here. This clause is a formulation convention identifying mathematical
quantities with the quantities the model calls measured; it is not a
measurement report and no experiment is claimed.

**(iii) No identification with light or quantum objects.** The ideal massless
particle is not identified here with light, with a classical wave or with any
quantum object: no frequency, wavelength, quantisation, polarisation or
Planck constant enters this premise, and the identification of light with
massless particles requires the wave model and its own postulates on a
separate page.

**(iv) No process.** This premise asserts no interaction of massless
particles and no decay or production process; such processes require a
stipulated dynamics. Empirical support for the assumption is a nonlogical
relation of the framework, not a proof, and the idealisations inherited from
the flat spacetime model and the ideal-point description travel to every
consumer of this premise.
