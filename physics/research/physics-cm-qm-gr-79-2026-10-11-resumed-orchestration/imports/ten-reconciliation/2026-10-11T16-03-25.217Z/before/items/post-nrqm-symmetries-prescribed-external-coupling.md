---
id: post-nrqm-symmetries-prescribed-external-coupling
aliases: [nrqm-symmetries-prescribed-external-coupling]
kind: postulate
domain: physics
title: "Prescribed external electromagnetic coupling P5a: the minimal-coupling model and its gauge transformations"
status: draft
origin: session
dependency_level: 8
deps: [def-axiom-of-choice, def-complex-exponential, def-countable-choice,
       def-nrqm-autonomous-dynamics-framework-evolution,
       def-nrqm-framework-quantities-and-units,
       def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator,
       def-sobolev-space-wkp-and-its-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint,
       def-weak-derivative-of-a-locally-integrable-function,
       thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The prescribed-external-coupling assumption P5a of the framework: a spinless particle of mass m>0 and charge q in a named Newtonian inertial frame with admissible prescribed potentials (A,Phi) of the bounded-coefficient class, whose energy operator is the minimal-coupling magnetic Schrodinger operator on the domain W^{2,2}; the adopted field definitions, the units, and the adopted gauge transformation of potentials and state phase. Adoption is a model assumption for the stated potential class; it asserts no Maxwell equation or source model, no time-dependent well-posedness beyond the stated class, no derivation from P1-P5, and no identification of any laboratory arrangement or measured field with the declared data."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.3 and its subsection 'Gauge transformations', printed pages 45-47 (PDF pages 53-55): the Hamiltonian (3.31) of a charged particle in a magnetic field with minimal coupling, and the gauge transformation of the potentials and of the phase of the wave function (equations (3.43)-(3.45)); PDF page = printed page + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "J. Zinn-Justin and R. Guida, 'Gauge invariance', Scholarpedia 3(12):8287 (2008), Section 2.2 'Quantum Hamiltonian in a magnetic field and gauge invariance', equations (15)-(18): the unitary transformation U=exp(i e Omega(q)/hbar) transporting the covariant momentum and the Hamiltonian to the gauge-transformed vector potential, and the corresponding transformation of the state phase (their sign convention is A^Omega = A - grad Omega with charge e)"
      url: "http://www.scholarpedia.org/article/Gauge_invariance"
verification:
  precheck: n/a
---

## Postulate

Adopt as a physical assumption of the framework, additional to P1-P5 and valid
only for the model of this page, the following prescribed-coupling statement
for a **spinless** particle. Assume the Axiom of Countable Choice and the Axiom
of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), the choice
hypotheses of the cited magnetic-operator suppliers.

**(i) Frame and particle data.** Fix a named Newtonian inertial frame in the
class of P5 and a declared spinless particle of mass parameter $m>0$ and charge
parameter $q\in\mathbb R$; the model state space is the scalar component of the
massive model, $L^{2}(\mathbb R^{3};\mathbb C)$, with the position and momentum
operators of the massive model. The frame, the mass and the charge are part of
the model specification; the frame is not derived from the potentials, and
$m$ and $q$ are empirical parameters of a species when one is identified.

**(ii) Admissible prescribed potentials.** The external data are an
**admissible pair** $(\mathbf A_{\rm ext},\Phi_{\rm ext})$ in the sense of
[[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]]: real
classes $\mathbf A_{\rm ext}=(A_{1},A_{2},A_{3})$ with
$A_{j}\in L^{\infty}(\mathbb R^{3};\mathbb R)$ whose weak first derivatives
$D_{k}A_{j}$ are bounded, and $\Phi_{\rm ext}\in L^{\infty}(\mathbb R^{3};\mathbb R)$
([[def-weak-derivative-of-a-locally-integrable-function]],
[[def-sobolev-space-wkp-and-its-norm]]). The potentials are **prescribed**: no
field equation, source model or back-reaction is assumed.

**(iii) Energy operator.** The model's energy operator is the
minimal-coupling magnetic Schrodinger operator
$$H_{\rm ext}:=K_{\mathbf A_{\rm ext},\Phi_{\rm ext}},\qquad D(H_{\rm ext})=W^{2,2}(\mathbb R^{3};\mathbb C),$$
of [[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]], that is
$$H_{\rm ext}=\frac{1}{2m}\sum_{j=1}^{3}\bigl(P_{j}-qA_{{\rm ext},j}(Q)\bigr)^{2}+q\,\Phi_{\rm ext}(Q)$$
on the displayed domain. This operator is self-adjoint with domain
$W^{2,2}(\mathbb R^{3};\mathbb C)$ by
[[thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]], so
it satisfies the self-adjointness requirement of the dynamics postulate P4 in
the reading of [[def-nrqm-autonomous-dynamics-framework-evolution]]; the
adoption here is the identification of this operator as the energy of the
declared particle, which is a model assumption and not a consequence of
P1-P5.

**(iv) Units.** Use the units of [[def-nrqm-framework-quantities-and-units]];
the additional assignments are: $\mathbf A_{\rm ext}$ in
$\mathrm{T\,m}=\mathrm{V\,s\,m^{-1}}$, $\Phi_{\rm ext}$ in V, $q$ in C, so
$q\mathbf A_{\rm ext}$ has momentum units and $q\Phi_{\rm ext}$ energy units.
The exponential of clause (vi) uses [[def-complex-exponential]] and
$\chi$ is measured in $\mathrm{J\,s\,C^{-1}}$, so the phase $q\chi/\hbar$ is
dimensionless.

**(v) Field definitions.** Define, wherever the displayed derivatives exist as
weak derivatives, $\mathbf B:=\nabla\times\mathbf A_{\rm ext}$ in T and
$\mathbf E:=-\nabla\Phi_{\rm ext}-\partial_{t}\mathbf A_{\rm ext}$ in
$\mathrm{V\,m^{-1}}$. These are **definitions of the model's field symbols**;
they assert no Maxwell equation, no relation to measured fields, and no
coupling of the particle back on the sources.

**(vi) Gauge transformations.** For a real gauge function $\chi$ in the
regularity class of the gauge items of this page, the model relates the pair
$(\mathbf A_{\rm ext},\Phi_{\rm ext})$ to
$$\mathbf A'_{\rm ext}=\mathbf A_{\rm ext}+\nabla\chi,\qquad \Phi'_{\rm ext}=\Phi_{\rm ext}-\partial_{t}\chi,$$
and the state phase by $\psi'=e^{iq\chi/\hbar}\psi$. The operator consequences,
the criterion under which the multiplier is a symmetry of a fixed model, and
the propagator transported to the transformed pair are proved on this page for
the stated regularity; the **reading** that the two coefficient pairs describe
the same physical situation is part of this assumption, not a theorem, and the
theorem statements of this page are independent of that reading.

**(vii) Status and scope.** Clauses (i)-(vi) are adopted model assumptions for
the declared potential class only. They assert nothing about a laboratory
realization, about field sources, about singular or unbounded potentials,
about time-dependent data beyond the hypotheses of the gauge items, about
statistical or measurement models, or about the accuracy of the spinless
minimal-coupling description of any species; the identification of a physical
arrangement with the model is a tested identification in the sense of P7.

## Status and scope

- **What is assumed and what is proved.** The minimal-coupling form of the
  energy operator, the field definitions and the gauge transformation formulas
  are adopted; self-adjointness on $W^{2,2}$ is a mathematical theorem cited
  from the magnetic-operator development, and the covariance, symmetry and
  propagator consequences are proved on this page.
- **Bounded coefficients only.** The assumption is restricted to admissible
  pairs with bounded potentials and bounded weak first derivatives; Coulomb,
  singular, unbounded and general time-dependent potentials are separate model
  realizations requiring their own self-adjointness and evolution statements.
- **No Maxwell theory.** The field symbols of clause (v) are definitions; no
  Maxwell equation, constitutive relation or measured field value appears.
