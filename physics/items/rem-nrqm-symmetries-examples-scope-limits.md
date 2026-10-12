---
id: rem-nrqm-symmetries-examples-scope-limits
aliases: [ nrqm-symmetries-examples-scope-limits ]
kind: remark
domain: physics
title: "What the worked items of the symmetry companion page establish"
status: draft
origin: session
dependency_level: 13
deps:
  [
    cex-nrqm-symmetries-nonconstant-potential-breaks-translation,
    def-nrqm-framework-quantities-and-units,
    ex-nrqm-symmetries-central-potential-rotation-invariance,
    ex-nrqm-symmetries-free-translation-and-momentum,
    ex-nrqm-symmetries-parity-selection-rule,
    pthm-nrqm-symmetries-generator-conservation,
    pthm-nrqm-symmetries-rotational-and-parity-invariance,
    pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation
  ]
dependency_roles:
  cex-nrqm-symmetries-nonconstant-potential-breaks-translation: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  ex-nrqm-symmetries-central-potential-rotation-invariance: formulation-prerequisite
  ex-nrqm-symmetries-free-translation-and-momentum: formulation-prerequisite
  ex-nrqm-symmetries-parity-selection-rule: formulation-prerequisite
  pthm-nrqm-symmetries-generator-conservation: physical-result
  pthm-nrqm-symmetries-rotational-and-parity-invariance: physical-result
  pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the companion examples page: an inventory of the exact
  model computations, the conditional construction and the counterexample it
  contains, and of the physical questions it does not address. The remark
  asserts no new dynamics and records no empirical data."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1.3-4.3, printed pages 62-70 (PDF pages 70-78): the rotation operator,
        parity and vector operators, symmetry of the Hamiltonian and
        conservation laws; PDF page = printed page + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        2.2-2.3.1 and 4.1.1, printed pages 39-47 and 96-99 (PDF pages 42-50 and
        99-102): parity of energy eigenfunctions and even/odd bound states, and
        the angular momentum commutation relations"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): conserved
        operators and their constant Heisenberg representatives"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: n/a
---
## The worked items and what they establish

[[ex-nrqm-symmetries-free-translation-and-momentum]] is the exact free-model
computation: with $V\equiv0$ every translation is a symmetry, the free flow in
the momentum representation is the unimodular multiplier
$M_{f_{t}}$, $f_{t}(p)=e^{-it|p|^{2}/(2m\hbar)}$, the translations are the
multipliers $M_{e^{-ia\cdot p/\hbar}}$, and the momentum components are
conserved sharp observables with the law, moment and generator statements of
[[pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]];
the modulus of the momentum representative is invariant in time almost
everywhere.
[[cex-nrqm-symmetries-nonconstant-potential-breaks-translation]] shows that
this fails as soon as the potential is nonconstant in the relevant direction:
for the bounded measurable indicator potential $1_{B(0,1)}$ no nonzero
translation is a symmetry, because the shifted potential differs from the
original on a set of positive measure, so the symmetry criterion of the
translation theorem is not met.
[[ex-nrqm-symmetries-parity-selection-rule]] derives, for a potential even
almost everywhere, that every energy eigenspace is invariant under the parity
action, that a nondegenerate eigenstate has definite parity, and that the
position matrix element of two states of equal parity vanishes.
[[ex-nrqm-symmetries-central-potential-rotation-invariance]] verifies the
almost-everywhere rotational and parity invariance of a bounded radial
potential and instantiates
[[pthm-nrqm-symmetries-rotational-and-parity-invariance]]: all rotations are
symmetries, the rotation action is a strongly continuous unitary symmetry
group, and the coordinate-rotation generators $L_{i}$ are conserved sharp
observables, with the underlying conservation mechanism of
[[pthm-nrqm-symmetries-generator-conservation]].

## What none of the items establishes

None of the four items is an experiment: no apparatus, preparation map,
calibration, detection model, efficiency, resolution, background model,
sampling model, uncertainty budget, count or dataset appears, and no measured
value of any model parameter is asserted. The objects $m$, $q$ when present,
$s$, the potentials and the conserved laws are model data and model statements
in the units of [[def-nrqm-framework-quantities-and-units]]; deciding that a
laboratory system realizes the model, that its potential is approximately
radial or even, or that a transition amplitude is the matrix element computed
here, is a tested identification with uncertainty under the preparation and
apparatus assumptions, and it is external to this page. In particular the
parity selection rule is an identity about the model's assigned position
observables: turning it into a statement about observed intensities requires a
time-dependent coupling model, the corresponding transition-rate analysis, a
detection model and a sampling model, none of which is supplied here.

## Limits of the statements

The free computation is conditional on $V\equiv0$; the counterexample concerns
one potential inside the bounded measurable class and refutes only the
universal claim that every bounded nonconstant potential has all nonzero
translations as symmetries (potentials constant along a direction keep the
corresponding translations). The central-potential example assumes the radial
identity almost everywhere and a bounded radial function; it asserts no
eigenvalue, bound state, degeneracy, radial solution or spectral line, and its
boundedness hypothesis excludes the Coulomb and other unbounded radial
models. The parity example requires the evenness hypothesis and, for definite
parity, the nondegeneracy of the eigenvalue; at a degenerate eigenvalue only
the eigenspace invariance is asserted. No item of this page makes a claim about
antiunitary or time-reversal symmetries, about superselection, about spinorial
rotations or the internal factor, or about relativistic and field-theoretic
structures.
