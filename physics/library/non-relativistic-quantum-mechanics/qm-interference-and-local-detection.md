---
page: qm-interference-and-local-detection
title: "Qm Interference And Local Detection"
status: published
library: physics
items:
  - lem-nrqm-interference-component-cross-term-and-recorded-bin-laws
  - def-nrqm-interference-two-path-preparation-and-detection-model
  - def-nrqm-interference-recorded-detector-and-sampling-model
  - pthm-nrqm-interference-coherent-and-mixture-detection-laws
  - pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning
  - pthm-nrqm-interference-continuity-and-local-probability-balance
  - texp-nrqm-interference-finite-sample-fringe-failure
  - rem-nrqm-interference-scope-and-deferred-content
examples: []
requires:
  - qm-massive-particle-kinematics
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-autonomous-dynamics
---

This page develops the interference and local-detection structure of the
massive-model framework on top of the kinematic page
[[qm-massive-particle-kinematics]]. The batch-local mathematics of
[[lem-nrqm-interference-component-cross-term-and-recorded-bin-laws]] collects
the component-valued cross-term identities, the coherent and which-path bin
laws on a measure space of amplitudes, the recorded-weight sub-probability and
conditioning, and the criterion under which the coherent law and the
weighted which-path law coincide on every bin. Separately,
[[def-nrqm-interference-two-path-preparation-and-detection-model]] declares the
pair's model and supplies its joint position PVM and Born-density calculation:
two nonzero path-component classes of the model state space, coherent
preparations of a declared relative phase, which-path preparations with declared
weights, and the ideal detection-bin reading; and
[[def-nrqm-interference-recorded-detector-and-sampling-model]] declares the
finite recorded detector with bounded multiplication effects, its no-record
channel and loss conditioning, and the declared independent-trials model.

[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] derives the
normalized coherent position law with its amplitude cross term, the which-path
law, and the exact criterion for their coincidence when the coherent
preparation is admissible at phase $0$, and
[[pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning]] derives the
recorded-bin laws, the no-record mass and conditioned law, the reduction of
indicator weights to ideal bins, and a sufficient condition for the recorded
laws to agree when the coherent preparation is admissible at phase $0$.
[[pthm-nrqm-interference-continuity-and-local-probability-balance]]
derives the continuity equation and local squared-amplitude balance for the
model's componentwise $C^{1}$-in-time, $C^{2}$-in-space solutions of the P4/P5
equation almost everywhere with the bounded measurable P5 potential. This is
the position probability density when the full-space state is normalized;
under explicit domination and surface-flux hypotheses the finite total
squared-amplitude integral is conserved on an interval. P4 separately gives
norm conservation of the model's flow and hence total probability one for unit
preparations. The
finite-sample behaviour is fixed by
[[texp-nrqm-interference-finite-sample-fringe-failure]]: within the declared
independent-trials model, a criterion that rejects a positive-probability
outcome sequence fails with positive probability, coincident recorded laws are
indistinguishable, and no p-value, error rate or empirical conclusion is
produced. [[rem-nrqm-interference-scope-and-deferred-content]] records what the
page assumes rather than derives, that it makes no which-path claim, that
screen reductions and marker-overlap visibility loss are separate models (the
latter homed on the entanglement page), and that only the companion example
page reports an experiment.

The page is conditional throughout: the path components, phases, weights,
recorded weights and trial independence are declared apparatus and preparation
inputs in the sense of the preparation and apparatus postulate P7, the
identification of a concrete arrangement with any of them is a tested
identification with uncertainty, and no laboratory data appear here.
