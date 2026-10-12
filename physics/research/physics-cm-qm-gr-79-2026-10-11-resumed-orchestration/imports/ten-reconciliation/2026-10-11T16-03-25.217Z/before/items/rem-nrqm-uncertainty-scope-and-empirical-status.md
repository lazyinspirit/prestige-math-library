---
id: rem-nrqm-uncertainty-scope-and-empirical-status
aliases: [nrqm-uncertainty-scope-and-empirical-status]
kind: remark
domain: physics
title: "What the uncertainty and compatibility page adopts, proves and does not claim"
status: draft
origin: pipeline
dependency_level: 12
deps: [def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-uncertainty-preparation-spread, def-nrqm-uncertainty-strong-spectral-commutation, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law, pthm-nrqm-uncertainty-position-momentum-incompatible, pthm-nrqm-uncertainty-position-momentum-relation, pthm-nrqm-uncertainty-robertson-relation, thm-nrqm-uncertainty-joint-pvm-criterion]
dependency_roles:
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  def-nrqm-uncertainty-strong-spectral-commutation: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law: physical-result
  pthm-nrqm-uncertainty-position-momentum-incompatible: physical-result
  pthm-nrqm-uncertainty-position-momentum-relation: physical-result
  pthm-nrqm-uncertainty-robertson-relation: physical-result
  thm-nrqm-uncertainty-joint-pvm-criterion: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the uncertainty and compatibility page: it records that the page reads P1 and P2 in the framework's vocabulary, proves conditional inequalities and compatibility criteria for preparation spreads and spectral projection-valued measures, and asserts no apparatus error, disturbance, approximate joint measurement, time-energy relation, joint position-momentum law, dynamics, empirical value or experimental finding. It proves nothing itself and reports no observation."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 3.4 and 3.4.1, printed pages 81-88 (PDF pages 84-91): commuting observables and simultaneous values, with the non-degeneracy caveat, and the position-momentum uncertainty relation with its Gaussian saturation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', printed pages 1-19: uncertainty defined, the uncertainty inequality and its saturation conditions, the energy-time discussion with time as a parameter, and simultaneous diagonalization of commuting observables"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Sections 2.1, 3.1 and 8.1, printed pages 55-58, 87-100 and 173-175 (PDF pages 67-70, 99-112, 185-187): self-adjoint operators, spectral measures and generators of one-parameter groups"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Scope of the page

**Adopted, not restated.** The physical content of this page is the state and
composition postulate P1 and the observable and probability postulate P2 in
the vocabulary of [[def-nrqm-observables-framework-observable-and-outcome-law]]
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] for the
position and momentum statements). The page adopts no further physical
assumption beyond the model postulates P5 and P6 used to name $Q_{j}$ and
$P_{j}$; the choice hypotheses of the spectral theorem are carried explicitly
in every mathematical item.

**What is proved.** [[def-nrqm-uncertainty-preparation-spread]] fixes the
reading of preparation variance and spread.
[[pthm-nrqm-uncertainty-robertson-relation]] proves the weak Robertson bound
for unit vectors in both domains, the Robertson bound and its anticommutator
refinement on the product domains, and the automatic validity for bounded
observables. [[pthm-nrqm-uncertainty-position-momentum-relation]] proves
$\Delta Q_{j}\Delta P_{j}\ge\hbar/2$ on the full maximal domain of the pair,
with the exact imaginary part $-\hbar/2$ and the equality characterization.
[[def-nrqm-uncertainty-strong-spectral-commutation]],
[[thm-nrqm-uncertainty-joint-pvm-criterion]] and
[[pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law]] fix
strong spectral commutation, prove its equivalence with the existence and
uniqueness of a joint sharp observable and give the joint law with its
marginals; [[pthm-nrqm-uncertainty-position-momentum-incompatible]] proves
that the model's position and momentum are incompatible. All of these are
conditional consequences of the postulates and the cited mathematics.

**What is not claimed.** No item of this page asserts an apparatus resolution,
a measurement error, a disturbance of the preparation, an approximate or
unsharp joint measurement, a joint position-momentum law, a time observable or
a universal energy-time inequality. The inequalities concern the spreads of
the outcome laws of one preparation; they are not statements about the
precision of a laboratory procedure, and the equalities of the position and
momentum item are properties of specific preparations, not of every state. The
identification of a preparation and an apparatus with the model's states and
operators is a tested identification with uncertainty under the preparation
and apparatus postulate P7; neither the postulates nor the theorems here
report a measured value, a trial count or a statistical inference. Agreement
of the conditional predictions with data would test the combined model and
apparatus assumptions; it is not established or claimed here.

**Distinctions preserved.** The page keeps preparation spread, apparatus
resolution and disturbance separate throughout; it also keeps the mathematical
identity $[A,B]u=0$ on a dense core separate from strong spectral commutation.
The examples companion records a domain-sensitive counterexample, the Gaussian
family that saturates the position-momentum bound, the spin-$\tfrac12$ spread
account, the energy-time scope remark and the error-disturbance distinction.
