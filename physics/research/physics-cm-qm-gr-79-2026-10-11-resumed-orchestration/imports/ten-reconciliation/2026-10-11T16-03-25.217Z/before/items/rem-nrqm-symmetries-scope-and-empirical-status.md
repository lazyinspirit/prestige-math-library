---
id: rem-nrqm-symmetries-scope-and-empirical-status
aliases: [nrqm-symmetries-scope-and-empirical-status]
kind: remark
domain: physics
title: "Scope and empirical status of the symmetry and conservation items"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-framework-quantities-and-units,
       def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
       lem-nrqm-symmetries-free-flow-multiplier-form,
       lem-nrqm-symmetries-parity-action, lem-nrqm-symmetries-rotation-generators-on-schwartz-classes,
       lem-nrqm-symmetries-spatial-rotation-action, lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus,
       post-nrqm-symmetries-prescribed-external-coupling, pthm-nrqm-symmetries-gauge-covariance,
       pthm-nrqm-symmetries-generator-conservation, pthm-nrqm-symmetries-rotational-and-parity-invariance,
       pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  lem-nrqm-symmetries-free-flow-multiplier-form: mathematical-premise
  lem-nrqm-symmetries-parity-action: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus: mathematical-premise
  post-nrqm-symmetries-prescribed-external-coupling: physical-assumption
  pthm-nrqm-symmetries-gauge-covariance: physical-result
  pthm-nrqm-symmetries-generator-conservation: physical-result
  pthm-nrqm-symmetries-rotational-and-parity-invariance: physical-result
  pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The reading of the symmetry-and-conservation page as a whole: the conditional status of its symmetry statements, the empirical status of the model parameters and of any symmetry identification for a laboratory system, and the limits of the conservation and gauge claims. The remark asserts no new mathematics or dynamics, records no experiment and no measured value."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 4.1-4.4, printed pages 58-71 (PDF pages 66-79): symmetries, generators, conserved quantities and their empirical role"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): conserved operators commuting with the Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: n/a
---
## What the page establishes

The items of this page are conditional consequences of the framework's
postulates and of the cited mathematics.
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] fixes the
vocabulary: a symmetry of the declared dynamics is a unitary preserving the
energy domain and commuting with the energy operator, a unitary symmetry group
is a group of such symmetries, a conserved sharp observable is one whose
outcome law is time-independent in every preparation, and the translations,
spatial rotations, parity and gauge multipliers are recorded as the model's
candidate actions, not as symmetries.
[[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]] proves the
equivalence between flow commutation, strong spectral commutation and domain
invariance of a self-adjoint observable;
[[lem-nrqm-symmetries-spatial-rotation-action]],
[[lem-nrqm-symmetries-parity-action]],
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] and
[[lem-nrqm-symmetries-free-flow-multiplier-form]] provide the concrete actions
and their operator identities on the component-valued model.
[[pthm-nrqm-symmetries-generator-conservation]] proves the equivalence of the
commutation conditions with the conservation of the outcome law and the
conservation of moments, and covers self-adjoint unitary symmetries;
[[pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]]
decides exactly which bounded potentials have the translations as symmetries
and derives momentum conservation for the translation-invariant case;
[[pthm-nrqm-symmetries-rotational-and-parity-invariance]] does the same for
rotations (with conservation of the coordinate-rotation generators) and for
parity; and [[pthm-nrqm-symmetries-gauge-covariance]] transports the
prescribed-coupling operator under gauge transformations of
[[post-nrqm-symmetries-prescribed-external-coupling]], exhibits the exact
criterion under which a gauge multiplier is a symmetry of the fixed dynamics
and identifies the global-phase case. Every one of these statements is
conditional on P1, P2, P4, P5, P5a and P6 in their stated readings, on the
choice assumptions displayed with the items, and on the cited operator
analysis.

## Empirical status of the symmetry and conservation statements

The conservation laws proved here are model consequences: they hold for the
declared massive model with the displayed potential class and follow from the
invariance hypotheses as identities about that model. They are not reports of
measurements and do not establish that any laboratory preparation is exactly
described by the model. In particular, the mass parameter $m>0$, the charge
parameter $q$, the spin label $s$ and the potentials $(\mathbf A_{\rm ext},\Phi_{\rm ext})$
are declared model data in the units of
[[def-nrqm-framework-quantities-and-units]]; the statement that a concrete
species, field configuration or apparatus realizes them is a tested
identification with uncertainty, external to these items. A selection rule or
a conservation law deduced here becomes an empirical prediction only after a
preparation map, a detection model, a sampling model and an uncertainty
budget are supplied, none of which this page provides. The agreement of such
an identified model with data is evidence about the combined model and
apparatus assumptions; it is not a proof of the postulates.

## What is not claimed

The page asserts no symmetry of any concrete potential outside the displayed
almost-everywhere invariance hypotheses, no classification of centrally
symmetric or parity-even systems beyond those hypotheses, no definite value
of a conserved observable, and no converse from the constancy of outcome laws
to the commutation conditions for unbounded observables. The rotation and
parity actions act on the spatial factor only: no SU(2) lift, no rotation of
the internal factor and no spin angular momentum appear here; antiunitary and
time-reversal symmetries, superselection sectors, gauge freedom beyond the
prescribed bounded-coefficient class, singular or unbounded potentials,
confined and boundary realizations, periodic potentials, time-dependent
external fields, relativistic matter and full field theory are all outside
the scope of these items and require their own model assumptions.

## Recorded supplier note

The gauge items of this page consume the magnetic-operator development of an
earlier batch of this run. A scoped physics-content check over this page's
dependency closure currently reports no error naming any consumed supplier:
the role metadata of the consumed magnetic-operator items was repaired upstream
after an earlier batch reported it, and the statements and complete proofs
consumed here were inspected in their current form. Separately, the batch notes
of this page record that two consumed supplier items still cite a Teschl
section that does not exist in the author-hosted full text named by their URL
(the citation locators `Section 7.8 pp. 168-171` in
`def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator`,
`thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` and
`thm-nrqm-magnetic-and-detection-gauge-transported-propagator`); the
mathematical content of those items is proved locally by their own complete
arguments, which is what this page consumes, and the citation repair belongs to
their owning batch.
