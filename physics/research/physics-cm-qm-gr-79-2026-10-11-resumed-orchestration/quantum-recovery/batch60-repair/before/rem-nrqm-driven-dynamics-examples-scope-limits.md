---
id: rem-nrqm-driven-dynamics-examples-scope-limits
aliases: [nrqm-driven-dynamics-examples-scope-limits]
kind: remark
domain: physics
title: "What the examples check, what they do not contain, and the empirical status of the companion page"
status: draft
origin: session
deps: [ex-nrqm-driven-dynamics-circular-drive-exact-populations, ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget, ex-nrqm-driven-dynamics-ammonia-two-level-resonance, ex-nrqm-driven-dynamics-driven-oscillator-coherent-response, pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error, pthm-nrqm-driven-dynamics-common-domain-propagator, rem-nrqm-driven-dynamics-scope-and-empirical-status, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  ex-nrqm-driven-dynamics-circular-drive-exact-populations: physical-result
  ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget: physical-result
  ex-nrqm-driven-dynamics-ammonia-two-level-resonance: physical-result
  ex-nrqm-driven-dynamics-driven-oscillator-coherent-response: physical-result
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error: physical-result
  pthm-nrqm-driven-dynamics-common-domain-propagator: physical-result
  rem-nrqm-driven-dynamics-scope-and-empirical-status: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the examples page: what each worked model computation checks, what it deliberately does not contain (measured frequencies, populations, rates, damping, apparatus records, identifications of laboratory species), and its empirical status. The remark records no observation and no measured quantity."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapters 6-7 (quantum dynamics and two-state systems), the framework-neutral treatment of the worked models"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/pages/lecture-notes/"
verification:
  precheck: n/a
dependency_level: 17
---

## What the examples check

[[ex-nrqm-driven-dynamics-circular-drive-exact-populations]] checks the exact Rabi populations of the declared circular two-level model at rational multiples of the Rabi period, including the quarter-inversion value $1/2$, the pi-pulse value $1$, the return value $0$ and a detuned value $1/4$; [[ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget]] evaluates the rotating-wave error contract of [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] at declared dimensionless times, including one exact rational averaged population and the observation that the contract is conservative at the initial time; [[ex-nrqm-driven-dynamics-ammonia-two-level-resonance]] matches the declared linear model onto an inversion-doublet family with an oscillating field, computes the averaged inversion probability and its pulse time and evaluates the error contract there for a declared coupling ratio; and [[ex-nrqm-driven-dynamics-driven-oscillator-coherent-response]] checks the exact classical mean response and the stationary fluctuations of a coherent preparation of the driven oscillator of [[pthm-nrqm-driven-dynamics-common-domain-propagator]] clause (c).

## What the examples do not contain

The examples contain no measured frequency, energy, population, rate or lifetime; no apparatus, detector, calibration, sampling model or uncertainty record; no damping, relaxation, decoherence or environmental coupling; no identification of a laboratory spin, molecule, cavity or oscillator with the declared models or of a laboratory field with the declared drive parameters; and no claim that any declared parameter value is realized in nature. They also contain no Fermi golden rule, no continuum density of states and no long-time limit, in agreement with the scope of the companion A page ([[rem-nrqm-driven-dynamics-scope-and-empirical-status]]).

## Empirical status

All four examples are conditional computations inside declared models: their inputs are declared parameters, the cited mathematics and the postulates P1, P2 and P4. The sources cited are mathematical and textbook treatments, not experimental reports, so no empirical premise and no statistical inference enters any statement of the page. Comparing any of these model outputs with a laboratory oscillation or pulse would require a separately declared preparation and apparatus model with its own uncertainty and would test the combined model and apparatus assumptions; it is a tested identification in the sense of P7 ([[post-nrqm-framework-preparation-and-apparatus]]), not a consequence of the computations here.
