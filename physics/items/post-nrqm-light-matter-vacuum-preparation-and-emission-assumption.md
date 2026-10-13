---
id: post-nrqm-light-matter-vacuum-preparation-and-emission-assumption
aliases: [nrqm-light-matter-vacuum-preparation-and-emission-assumption]
kind: postulate
domain: physics
title: "The vacuum-preparation and quantized-field assumption for spontaneous emission in the cutoff dipole model"
status: published
origin: pipeline
dependency_level: 16
deps: [def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-spectral-transition-and-detection, post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus, post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-photons-framework-radiation-sector-and-quantum-assignments, def-nrqm-photons-framework-ideal-counting-and-detection-model, def-nrqm-state-geometry-framework-state-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-inner-product-space, def-countable-choice, def-axiom-of-choice, def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]
dependency_roles:
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-light-matter-framework-spectral-transition-and-detection: formulation-prerequisite
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  post-nrqm-approximations-static-finite-level-dipole-coupling: formulation-prerequisite
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The adopted assumption that a preparation described as a declared finite-level model in its upper level with no quanta in the declared transverse radiation sector is represented by the ray of v_a tensor Omega and evolves under the declared cutoff dipole model, together with the model reading of vacuum-initiated emission as the model's one-photon projection probability, and the explicit absence of any environment, thermal radiation, extra modes, detector or rate law from the postulate. The postulate is an adopted model assumption: it is not derived, and it asserts no measured emission, lifetime, linewidth or rate."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Box 9.2 printed page 218 (PDF page 226): spontaneous emission as emission stimulated by the zero-point energy, the explicit statement that the classical treatment of the field omits it, and Einstein's A/B relation as an added argument rather than a deduction of the spontaneous rate"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 14 Section 14.3 printed page 221: a classical current coupled to the field radiates coherent states and is unaffected by the emission, in contrast to an atom that changes state when it emits"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.4.2 printed pages 118-122 (PDF pages 121-125): the photon energy relation E=hbar*omega and the limits of a single-particle Schrodinger treatment of photon dynamics, with quantum field theory identified as a field-theoretic framework"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
---

## Postulate

Adopt, as additional model assumptions of this pair, the following clauses. It
is adopted together with the state and composition postulate P1, the observable
and probability postulate P2, the autonomous-dynamics postulate P4 and the
preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-preparation-and-apparatus]]), the radiation extension
postulate
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]], the
static finite-level dipole postulate
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] and the
coupled model
[[def-nrqm-light-matter-framework-finite-level-coupled-model]], in the
readings of [[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-framework-quantities-and-units]]. Assume the Axioms of Countable
Choice and of Choice, the choice hypotheses of the cited mathematics
([[def-countable-choice]], [[def-axiom-of-choice]]).

**(i) Vacuum preparation.** Let $(a,b)$ be a declared upward level pair of
[[def-nrqm-light-matter-framework-spectral-transition-and-detection]] clause
(b), with $\Omega$ the vacuum of the radiation sector. The postulate declares
that a preparation described as **the declared finite-level matter in level
$a$ with no quanta in the declared transverse radiation sector** is represented
by the ray of the unit vector $v_{a}\otimes\Omega$ of
$\mathbb C^{d}\otimes F(\mathfrak h)$, and that its evolution is the model's
autonomous evolution $t\mapsto e^{-itH_{\mathrm{LM}}/\hbar}(v_{a}\otimes\Omega)$.
This representation of a physical preparation is an adopted model assumption;
it is not derived from P1-P7, from the radiation extension or from the
Coulomb model.

**(ii) The emission question.** The postulate declares that the model's
**vacuum-initiated emission question** for the pair is read through the
declared ideal sharp measurement with outcome projection
$Q_{b}=|v_{b}\rangle\langle v_{b}|\otimes\Pi_{1}$ (or through any other
declared measurement of [[def-nrqm-photons-framework-ideal-counting-and-detection-model]]
whose outcome structure is explicitly declared), with its Born probability
read as in P2; the model's exact probability of that outcome is the quantity
studied by the emission items of this page. The identification of this
outcome with the registration of an emitted photon by a laboratory apparatus
is a tested identification with uncertainty under P7.

**(iii) The entire field and environment content.** The declared field content
of the model is the quantized transverse sector with its vacuum $\Omega$, the
mode vectors $g_{1},\dots,g_{J}$ with cutoff $\Lambda$ and the coupling
$\eta_{0}$ of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] clauses (c),(d).
The postulate adopts **no** thermal radiation state, no additional modes, no
reservoir or environment, no measurement apparatus and no noise model. In
particular the reading of $\Omega$ as the field's zero-point (vacuum) state is
a model reading, and the term "spontaneous" refers to the emission process
initiated by this declared vacuum state, not to a derivation of the vacuum
from classical electrodynamics or of the coupling from a current.

**(iv) What a rate claim would require.** The postulate explicitly does not
declare a rate, a lifetime, a linewidth or an exponential decay law. Such a
claim would require additional adopted assumptions — for instance a declared
weak-coupling window, a declared mode-density or environment model, and a
declared measurement and sampling model — together with the corresponding
mathematics; the theorems of this page state only the limits of the model's
explicit single-vertex coefficient and the exact-model control of one
projection probability, and they record those limits as model quantities.

**(v) Contrast with the prescribed drive.** The prescribed-field dipole-drive
model of [[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]]
is a different model class: its field is an external datum unaffected by the
matter, it contains no vacuum state and no photon number, and it supplies only
stimulated transitions. The present postulate is the additional assumption
under which an emission process at all is represented by the model; the two
classes are not interchangeable, and no derivation of one from the other is
asserted.

**(vi) Scope.** Clauses (i)-(v) are adopted assumptions and readings. They
assert no laboratory source, atom, mode content, cutoff or coupling value; no
detector response, efficiency, background or calibration; no observed
spectrum, count, rate or lifetime; and no statistical inference. The
identification of a laboratory system and apparatus with the model and its
outcome structure is a tested identification with uncertainty under P7, and
the empirical support of the radiation extension or of the coupling is the
nonlogical relation recorded on this page, not a proof of the postulate.
