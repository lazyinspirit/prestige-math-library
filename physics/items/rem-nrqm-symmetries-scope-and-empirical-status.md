---
id: rem-nrqm-symmetries-scope-and-empirical-status
aliases: [ nrqm-symmetries-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the symmetry and conservation items"
status: published
origin: session
dependency_level: 12
deps:
  [
    def-nrqm-framework-quantities-and-units,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    lem-nrqm-symmetries-free-flow-multiplier-form,
    lem-nrqm-symmetries-parity-action,
    lem-nrqm-symmetries-rotation-generators-on-schwartz-classes,
    lem-nrqm-symmetries-spatial-rotation-action,
    lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus,
    post-nrqm-symmetries-prescribed-external-coupling,
    pthm-nrqm-symmetries-gauge-covariance,
    pthm-nrqm-symmetries-generator-conservation,
    pthm-nrqm-symmetries-rotational-and-parity-invariance,
    pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation
  ]
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
physical_scope: "The reading of the symmetry-and-conservation page as a whole:
  the conditional status of its symmetry statements, the empirical status of the
  model parameters and of any symmetry identification for a laboratory system,
  and the limits of the conservation and gauge claims. The remark asserts no new
  mathematics or dynamics, records no experiment and no measured value."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1-4.4, printed pages 58-71 (PDF pages 66-79): symmetries, generators,
        conserved quantities and their empirical role"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): conserved
        operators commuting with the Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: n/a
---
## What the page establishes

The mathematical lemmas of this page follow from their stated mathematical
hypotheses; its physics theorems follow conditionally from their stated model
postulates and mathematical hypotheses.
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] fixes the
vocabulary: a symmetry of the declared dynamics is a unitary preserving the
energy domain and commuting with the energy operator, a unitary symmetry group
is a group of such symmetries, a conserved assigned sharp observable $(A,u_A)$ is one whose
outcome law is time-independent in every preparation, and the translations,
spatial rotations, parity and gauge multipliers are recorded as the model's
candidate actions, not as symmetries.
[[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]] proves the
equivalence between flow commutation, strong spectral commutation and domain
invariance together with invariance of the observable under conjugation:
for self-adjoint $K,A$ on a nonzero complex Hilbert space and $\hbar>0$,
clause (b)(iii) requires both $U_K(t)D(A)=D(A)$ and
$U_K(t)AU_K(t)^{*}=A$ for every $t\in\mathbb R$, where
$U_K(t)=e^{-itK/\hbar}$. Domain invariance alone is insufficient;
[[lem-nrqm-symmetries-spatial-rotation-action]],
[[lem-nrqm-symmetries-parity-action]],
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] and
[[lem-nrqm-symmetries-free-flow-multiplier-form]] provide the concrete actions
and their operator identities on the component-valued model.
[[pthm-nrqm-symmetries-generator-conservation]] proves the equivalence of its
three commutation conditions, deduces conservation of the outcome law and of
domain-qualified moments, and covers self-adjoint unitary symmetries;
[[pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]]
decides exactly which bounded potentials have the translations as symmetries
and derives momentum conservation for the translation-invariant case;
[[pthm-nrqm-symmetries-rotational-and-parity-invariance]] does the same for
rotations (with conservation of the coordinate-rotation generators) and for
parity; and [[pthm-nrqm-symmetries-gauge-covariance]] transports the
prescribed-coupling operator under gauge transformations of
[[post-nrqm-symmetries-prescribed-external-coupling]], exhibits the exact
criterion under which a gauge multiplier is a symmetry of the fixed dynamics
and identifies the global-phase case. The mathematical lemmas are conditional
on their displayed mathematical hypotheses, including the stated choice
assumptions; they do not depend on physical postulates. The physics theorems
and examples are conditional on the postulates and model hypotheses stated in
each item: the general conservation result uses P1, P2 and P4; the bounded-
potential translation, rotation and parity results use P1, P2, P4, P5 and P6;
and gauge covariance uses P1, P2, P4 and the prescribed-coupling assumption
P5a. P5a is adopted and is not derived by the gauge theorem. None of these
conditional results establishes that its assumptions describe a laboratory
system.

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
confined and boundary realizations, arbitrary driven external fields,
relativistic matter and full field theory are outside the scope of these items.
Bounded periodic potentials remain within the bounded-potential class; no
periodic-band classification is claimed. The stated time-dependent gauge
transports are covered by [[pthm-nrqm-symmetries-gauge-covariance]] clause (c),
with its prescribed coefficient class and gauge regularity; they supply no
general driven-field model.

## Recorded supplier note

The gauge items of this page consume the magnetic-operator development of an
earlier batch of this run. The batch-53 notes preserve historical reports of
role-metadata and source-locator defects in earlier versions of those
suppliers; those notes are not a description of their current text. The
current files inspected for this review declare the mathematics dependencies
with role `mathematical-premise` and have these source locators:

- `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator` cites
  Teschl, Sections 6.1 and 7.2, and Binney and Skinner, Sections 3.3 and
  3.3.1.
- `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` cites
  Teschl, Section 7.2, equations (7.22)-(7.24) and Theorem 7.8, and Binney
  and Skinner, Section 3.3.1, equations (3.40)-(3.45).
- `thm-nrqm-magnetic-and-detection-gauge-transported-propagator` cites
  Teschl, Section 5.1, Theorem 5.1, and Binney and Skinner, Section 3.3.1,
  equations (3.40)-(3.45).

The current Teschl text has the cited free-operator material in Section 7.2
(printed pages 167-168), the Kato-Rellich theorem in Section 6.1 (printed
page 135), and Stone's theorem in Section 5.1 (printed pages 123-124). The
current Binney text has the static gauge phase and covariant-momentum
intertwining in Section 3.3.1 (printed pages 46-47). I checked these current
locators against the hosted full texts. They provide background for the
magnetic results; the bounded-coefficient operator and time-dependent
propagator arguments are supplied locally in the magnetic items. The earlier
false locators recorded in the batch notes are absent from the current files.
