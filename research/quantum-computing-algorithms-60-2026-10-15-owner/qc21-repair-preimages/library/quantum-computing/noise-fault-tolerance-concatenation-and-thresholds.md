---
page: noise-fault-tolerance-concatenation-and-thresholds
title: "Noise, Fault Tolerance, Concatenation, and Thresholds"
status: draft
items:
  - def-qc-local-stochastic-fault-set-law
  - lem-qc-local-stochastic-fault-witness-bound
  - def-qc-code-deviation-and-spread
  - def-qc-finite-channel-location-schedule
  - def-qc-noise-channel-model
  - lem-qc-noise-channel-model-composes-with-circuit-semantics
  - def-qc-fault-location-path-and-rectangle
  - lem-qc-disjoint-fault-location-events-are-independent
  - def-qc-ft-gadget-and-proper-code-contract
  - lem-qc-planar-mw-recovery-failure-yields-half-error-path
  - def-qc-level-r-good-and-bad-rectangles
  - def-qc-local-stochastic-noise-model
  - thm-qc-explicit-proper-code-and-universal-gadgets
  - thm-qc-planar-surface-code-iid-z-memory-bound
  - lem-qc-recursive-bad-rectangle-probability
  - lem-qc-sparse-fault-path-implies-code-deviation
  - thm-qc-t1-extended-rectangle-threshold
  - thm-qc-local-stochastic-concatenated-threshold
  - thm-qc-proper-code-concatenated-threshold
---

## Objective

Define finite ordered channel-location schedules, independent and local-stochastic
fault models, fault rectangles, code deviation and gadget contracts. Prove
conditional concatenated-threshold bounds from explicit correction, spread and
disjoint-location hypotheses, and separately prove an iid-$Z$ planar-code
memory bound for one perfect syndrome round.

## Scope and caveats

The concatenated bounds are conditional on the stated proper-gadget contracts. Local-stochastic fault indicators may be correlated, and conditional fault-map choices may depend on the full fault pattern; the channels remain attached to their individual locations.
The distance-three extended-rectangle estimate also assumes a disjoint-witness
reduction for overlapping extended rectangles. The explicit universal-gadget
construction and that overlap reduction remain proof obligations. The planar
memory result concerns ideal syndrome extraction; it does not establish a
faulty-gate circuit threshold.
