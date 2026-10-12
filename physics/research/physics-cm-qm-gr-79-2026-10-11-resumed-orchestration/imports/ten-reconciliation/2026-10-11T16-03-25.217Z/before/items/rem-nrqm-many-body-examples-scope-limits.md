---
id: rem-nrqm-many-body-examples-scope-limits
aliases: [nrqm-many-body-examples-scope-limits]
kind: remark
dependency_level: 14
domain: physics
title: "What the companion examples and the thought experiment establish"
status: draft
origin: pipeline
deps: [ex-nrqm-many-body-two-site-bond-thermal-ensemble, ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble, ex-nrqm-many-body-gas-statistics-dilute-limits, texp-nrqm-many-body-two-site-no-thermalization, pthm-nrqm-many-body-thermal-occupation-predictions, pthm-nrqm-many-body-unitary-evolution-preserves-entropy, post-nrqm-many-body-canonical-equilibrium-ensemble, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  ex-nrqm-many-body-two-site-bond-thermal-ensemble: formulation-prerequisite
  ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble: formulation-prerequisite
  ex-nrqm-many-body-gas-statistics-dilute-limits: formulation-prerequisite
  texp-nrqm-many-body-two-site-no-thermalization: physical-result
  pthm-nrqm-many-body-thermal-occupation-predictions: physical-result
  pthm-nrqm-many-body-unitary-evolution-preserves-entropy: physical-result
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The recorded scope of the companion examples and thought experiment of the many-body and equilibrium pair: exact finite model computations of canonical weights, occupations and readouts; the limits of their interpretation with respect to physical systems, empirical data and thermodynamic limits."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.4 printed pages 129-132 (PDF pages 137-140): the two-level Gibbs distribution and the authors' caution about evaluating partition functions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Sections 1.1.2-1.1.5 and 1.3-1.4: the canonical and grand-canonical weight formulas used in the examples, with the thermodynamic-limit treatment deferred to the continuum density-of-states chapters"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: n/a
---

## Recorded scope

The companion items contain three conditional examples and one hypothetical
scenario in declared finite models:

- [[ex-nrqm-many-body-two-site-bond-thermal-ensemble]] solves the one-particle
  two-site bond model exactly: the tunnelling-split eigenbasis, the canonical
  weights and the exact mean energy, entropy and free energy;
- [[ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble]] evaluates
  the canonical partition sums and occupation means of two fermions in three
  modes and two bosons in two modes, with the total-occupation identity and
  ground energies checked against the page's diagonalisation theorem;
- [[ex-nrqm-many-body-gas-statistics-dilute-limits]] verifies the exact Bose
  and Fermi dilute identities, evaluated in exact rational arithmetic at
  $q=1/10$, and contrasts the finite product partition of geometrically
  spaced mode energies with the divergent product of constant energies;
- [[texp-nrqm-many-body-two-site-no-thermalization]] shows, in one declared
  hypothetical preparation of the bond model, that the unitary evolution
  never produces the canonical preparation, that the site-occupation readout
  takes the canonical value $1/2$ at some times while differing from it at
  others, and that the energy readout never takes its canonical value.

## What they do not establish

None of these items contains measured data, a measured uncertainty, a
calibration, a sampling model or a detector model; all numbers are exact
model values in the declared finite-dimensional idealizations, and the
assignment of a physical system to any of these models is a tested
identification under P7
([[post-nrqm-framework-preparation-and-apparatus]]). In particular:

- the bond model is not any particular molecule, and its splitting $2t$ is an
  assigned parameter, not a measured spectroscopic value;
- the finite-mode examples are not ideal or interacting gases; they make no
  statement about a thermodynamic limit, pressure, condensation or a
  continuum of modes;
- the comparison of readout means with canonical values in the thought
  experiment is a statement about the declared preparation and the exact
  unitary flow; it is not evidence for or against thermalisation in nature,
  and the canonical ensemble remains the adopted assumption of
  [[post-nrqm-many-body-canonical-equilibrium-ensemble]];
- the entropy conservation used in the thought experiment is the exact
  closed-system statement of
  [[pthm-nrqm-many-body-unitary-evolution-preserves-entropy]]; it neither
  forbids nor asserts any open-system or environment-induced behaviour.

## Source limits

The cited treatments supply the model formulas used here at the recorded
locators; they do not supply measured values for these particular finite
models, and no source is used as an empirical premise on this page. Where a
comparison with data would be attempted, the preparation, isolation,
detection and sampling models plus the uncertainty of every assigned
parameter would have to be declared and carried through, as P7 requires.
