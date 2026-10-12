---
id: rem-nrqm-observables-examples-scope-limits
aliases: [nrqm-observables-examples-scope-limits]
kind: remark
domain: physics
title: "What the worked readouts of the companion page establish"
status: draft
origin: pipeline
dependency_level: 10
deps: [cex-nrqm-observables-plane-wave-is-not-a-preparation, ex-nrqm-observables-position-bin-probabilities, ex-nrqm-observables-position-mean-without-variance, ex-nrqm-observables-two-level-energy-readout]
dependency_roles:
  cex-nrqm-observables-plane-wave-is-not-a-preparation: operational-prerequisite
  ex-nrqm-observables-position-bin-probabilities: operational-prerequisite
  ex-nrqm-observables-position-mean-without-variance: operational-prerequisite
  ex-nrqm-observables-two-level-energy-readout: operational-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the companion page of worked readouts: it records what each finite computation verifies inside the framework's outcome law and what none of them claims. It proves nothing, records no measurement and reports no observation."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2 and 3.2-3.3, printed pages 3-14 and 65-84 (probability densities, plane-wave caveats and expectation values)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.3.6 and 6.3, printed pages 13-14 and 121-126 (two-state probabilities and the trace rule for mixed states)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Scope of the worked readouts

**Finite energy readout.** [[ex-nrqm-observables-two-level-energy-readout]] computes, on the explicit two-dimensional state space, the spectral measure of the bounded observable $E_{1}P_{1}+E_{2}P_{2}$, the exact outcome probabilities of a pure and of a mixed preparation, and the mean, second moment and variance of the readout. The energies $E_{1}\ne E_{2}$ are parameters of the assigned observable; the computation verifies the framework's law on finite data and asserts no apparatus realization, no measured level and no identification with a specific physical system.

**Position bins.** [[ex-nrqm-observables-position-bin-probabilities]] computes the first-coordinate law of a normalized Gaussian packet in the model's state space, its exact-value probability zero and explicit elementary bounds on the probability of a bin of positive length. The computation verifies the Born density reading of the model on a normalizable state; it reports no counts, no detector response and no resolution, and its bounds are mathematical estimates rather than uncertainty statements about an experiment.

**Distribution caveats.** [[cex-nrqm-observables-plane-wave-is-not-a-preparation]] refutes the informal claim that a free plane wave or a point-localized delta symbol is a preparation of the model: both fail to be elements of the state space, and the model's exact-position statement is that the probability of an exact value is zero. The refutation concerns the state assignment; it does not deny the usefulness of these objects as distributional idealizations, and it makes no claim about approximation schemes in which they are formally employed.

**Domains of the moment statements.** [[ex-nrqm-observables-position-mean-without-variance]] exhibits a legitimate preparation whose position law has a finite mean and infinite second moment, so that the variance of the position law does not exist; the computation verifies that the domain hypotheses of the moment statements are genuine and not automatic. It asserts no measurement error, no disturbance and no apparatus behaviour.

**Empirical neutrality.** None of the four items is an experiment. Each is a finite or asymptotic computation inside the model's state space and outcome law, or a refutation of an informal claim about that model; none records data, calibration, sampling, uncertainty or a comparison with observation. Agreement or disagreement with data would test the combined model and apparatus assumptions and is not established or claimed here.
