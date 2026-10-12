---
id: rem-nrqm-driven-dynamics-scope-and-empirical-status
aliases: [nrqm-driven-dynamics-scope-and-empirical-status]
kind: remark
domain: physics
title: "Scope and empirical status of the page: what is adopted, what is proved, and what is excluded"
status: draft
origin: session
dependency_level: 16
deps: [def-nrqm-driven-dynamics-framework-driven-model, def-nrqm-driven-dynamics-framework-interaction-picture, def-nrqm-driven-dynamics-framework-adiabatic-protocol, pthm-nrqm-driven-dynamics-bounded-norm-propagator, pthm-nrqm-driven-dynamics-mild-propagator-and-pictures, pthm-nrqm-driven-dynamics-first-order-transition-amplitude, pthm-nrqm-driven-dynamics-common-domain-propagator, pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error, pthm-nrqm-driven-dynamics-finite-adiabatic-leakage, pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  def-nrqm-driven-dynamics-framework-interaction-picture: formulation-prerequisite
  def-nrqm-driven-dynamics-framework-adiabatic-protocol: formulation-prerequisite
  pthm-nrqm-driven-dynamics-bounded-norm-propagator: physical-result
  pthm-nrqm-driven-dynamics-mild-propagator-and-pictures: physical-result
  pthm-nrqm-driven-dynamics-first-order-transition-amplitude: physical-result
  pthm-nrqm-driven-dynamics-common-domain-propagator: physical-result
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error: physical-result
  pthm-nrqm-driven-dynamics-finite-adiabatic-leakage: physical-result
  pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the driven-dynamics pair: the model assumptions it adopts (the driven-dynamics reading of P4 clause (iv), the two declared two-level drive models and the declared adiabatic protocol), the statements it proves, the physical situations it excludes, and its empirical status. The remark records no observation, no measured quantity and no uncertainty, and asserts no laboratory identification."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapters 6-7 (quantum dynamics and two-state systems), as the framework-neutral treatment of the models discussed here"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/pages/lecture-notes/"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapters 5-6 (dynamics and perturbation), as the mathematical treatment underlying the page"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## What the page adopts

The page works inside the framework's postulates P1, P2, P4 and P7 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-autonomous-dynamics]], [[post-nrqm-framework-preparation-and-apparatus]]) and adopts, as additional model assumptions, the driven-dynamics reading of clause (iv) of P4 in [[def-nrqm-driven-dynamics-framework-driven-model]]: a prescribed time-dependent self-adjoint energy family in one of three regularity classes, carried by a unitary two-time propagator, with the evolved preparation and outcome-law readings and with the two declared two-level drive models of its clause (f). [[def-nrqm-driven-dynamics-framework-interaction-picture]] fixes the interaction-picture readings, and [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] fixes the slow-family protocol, its followed spectral subspace and its leakage probability. All three are readings and model assumptions, not derived statements.

## What the page proves

[[pthm-nrqm-driven-dynamics-bounded-norm-propagator]] proves well-posedness, the Dyson truncation budget and the outcome-law error in the bounded norm-continuous class; [[pthm-nrqm-driven-dynamics-mild-propagator-and-pictures]] proves the mild propagator and the equivalence of the Schroedinger and interaction readings in the bounded-control class; [[pthm-nrqm-driven-dynamics-first-order-transition-amplitude]] proves the first-order amplitude with its explicit Dyson remainder and the closed sinusoidal drive with the co- and counter-rotating parts and the linear-in-time resonant growth; [[pthm-nrqm-driven-dynamics-common-domain-propagator]] proves the strong propagator and its domain invariance in the common-domain class and verifies the driven oscillator as an instance; [[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] proves the exact rotating-frame reduction and Rabi populations of the declared circular two-level model; [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] proves the rotating-wave error contract for the linearly polarized model with the bound on the population difference; and [[pthm-nrqm-driven-dynamics-finite-adiabatic-leakage]] and [[pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage]] prove the $1/T$ leakage estimates in the finite and Coulomb-family branches. Every one of these is a conditional consequence of the adopted model data, the cited mathematics and P1, P2 and P4.

## What the page excludes

The page asserts no open-system or environment coupling, no non-unitary reduced dynamics, no thermalization or equilibration, no Fermi golden rule, no transition rate, no exponential decay, no resonance width, no spontaneous emission, no measurement or apparatus model and no branch selection by a ramping protocol; in particular the rotating-wave contract of [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] is linear in the elapsed time and gives no uniform-in-time approximation, the first-order amplitude theorem is a finite-time statement with an explicit remainder, and the adiabatic theorems are conditional on a uniform positive gap and coherent following. The uncompressed linear Stark coupling is not a bounded perturbation and does not appear.

## Empirical status

The page records no experiment, no measured population, rate, frequency or lifetime, and no uncertainty record; its sources are mathematical and textbook treatments of the models, not experimental reports, so no measured value, no sampling model and no statistical inference enters any statement. The identification of a laboratory two-level system, spin, molecule or slowly varying source with the declared models and their parameters is a tested identification in the sense of P7 with its own uncertainty; agreement of a model computation with data would be evidence about the combined model and apparatus assumptions, not a proof of the framework.
