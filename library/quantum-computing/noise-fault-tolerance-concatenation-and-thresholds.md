---
page: noise-fault-tolerance-concatenation-and-thresholds
title: "Noise, Fault Tolerance, Concatenation, and Thresholds"
status: published
items:
  - def-qc-local-stochastic-fault-set-law
  - lem-qc-local-stochastic-fault-witness-bound
  - def-qc-code-deviation-and-spread
  - def-qc-finite-channel-location-schedule
  - def-qc-noise-channel-model
  - lem-qc-noise-channel-model-composes-with-circuit-semantics
  - lem-qc-scalar-phase-completes-clifford-t-universality
  - def-qc-fault-location-path-and-rectangle
  - lem-qc-t1-truncated-exrec-witness-reduction
  - lem-qc-disjoint-fault-location-events-are-independent
  - thm-qc-t1-extended-rectangle-threshold
  - lem-qc-concatenated-steane-distance-and-transversal-cliffords
  - lem-qc-planar-mw-recovery-failure-yields-half-error-path
  - lem-qc-encoded-error-instrument-and-cptp-distinction
  - lem-qc-four-round-verified-shor-correction
  - thm-qc-planar-surface-code-iid-z-memory-bound
  - def-qc-ft-gadget-and-proper-code-contract
  - lem-qc-verified-steane-magic-state-and-injection
  - def-qc-level-r-good-and-bad-rectangles
  - def-qc-local-stochastic-noise-model
  - lem-qc-verified-steane-initialization-and-readout
  - lem-qc-recursive-bad-rectangle-probability
  - lem-qc-sparse-fault-path-implies-code-deviation
  - thm-qc-explicit-proper-code-and-universal-gadgets
  - thm-qc-local-stochastic-concatenated-threshold
  - thm-qc-proper-code-concatenated-threshold
requires:
  - channels-kraus-choi-and-stinespring-representations
  - circuit-syntax-denotational-semantics-and-measurement
  - classical-and-quantum-error-correcting-codes
  - finite-probability-spaces-and-random-variables
  - independence-borel-cantelli-and-zero-one-laws
  - knill-laflamme-recovery-and-subsystem-codes
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - stabilizer-css-codes-syndromes-and-procedures
  - trace-distance-fidelity-and-information-limits
  - approximate-universality-and-solovay-kitaev
---

## Objective

Define finite ordered channel schedules and independent or local-stochastic fault models. Construct a fixed protected universal family and prove conditional concatenated-threshold bounds from its explicit encoded-instrument contracts and proved finite port-substitution certificate, using recursive decoded recovery. Separately prove the ideal-syndrome iid-$Z$ planar-memory bound.

## Scope and caveats

The finite construction uses the $[\![49,1,9]\!]$ code with declared capacity two and effective spread budget one. Verified cats, four-round correction, magic-state injection, pure initialization, protected encoded-classical readout, physical Boolean controls, full-unitary scalar phases and recursive replacement are proved locally. No unknown unprotected input is assumed to admit fault-free recovery from its first possible logical fault; noisy guarantees begin on encoded input or a verified prescribed initialization.

The general threshold results require the additional finite port-substitution hypothesis: noisy arbitrary-input attraction, typed intermediate sectors, attached syndromes, local first-use refresh and residual-support accounting. The concrete family proves this certificate before simultaneous induction through the concatenation levels. Higher-level residual sectors are hierarchical; only their recursively decoded logical outputs are compared with the ideal computation. The general probability theorems retain their explicit proper-gadget and hierarchy hypotheses. Local-stochastic fault indicators may be correlated, while conditional replacement maps remain attached to their declared physical locations. The distance-three exRec result has its own source-derived pure-preparation, basis-measurement and explicit-port hypotheses; its overlap analysis is separate from the nonvacuous capacity-two proper-code construction. The planar result concerns perfect syndrome extraction and iid $Z$ noise, rather than a faulty-gate circuit threshold.
