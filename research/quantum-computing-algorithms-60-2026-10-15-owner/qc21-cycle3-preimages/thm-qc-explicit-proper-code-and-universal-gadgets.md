---
id: thm-qc-explicit-proper-code-and-universal-gadgets
kind: theorem
title: "An Explicit Proper Code and Universal Fault-Tolerant Gadgets"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-qc-code-deviation-and-spread
  - def-qc-ft-gadget-and-proper-code-contract
  - lem-qc-concatenated-steane-distance-and-transversal-cliffords
  - thm-qc-css-syndrome-correction
  - def-qc-circuit-denotational-semantics
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-finite-channel-location-schedule
  - def-qc-pauli-matrices
  - alg-qc-stabilizer-encoder-by-symplectic-elimination
dependency_level: 19
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

There is an explicit fixed quantum code and finite logical gate set whose generated subgroup, including adjoints, is dense in the unitary group on its logical space in operator norm, and whose encoder, error-correction, initialization, readout, and gate gadgets satisfy the proper-code contract of [[def-qc-ft-gadget-and-proper-code-contract]]. A Steane $t=1$ construction must be paired with a separately proved extended-rectangle correctness and overlap analysis. A route using the concatenated threshold theorem with $d\ge2\ell$ must exhibit a code correcting at least $2\ell$ located errors and prove every required gadget contract.

## Authoring status

This is an established theorem with an unfinished local proof, not an open problem. The explicit $[[49,1,9]]$ code, one fixed ideal recovery through weight four, and exact spread-one transversal Clifford circuits are proved in [[lem-qc-concatenated-steane-distance-and-transversal-cliffords]]. This supplies actual code and Clifford prerequisites; it does not supply the noisy correction or non-Clifford gadgets. The Aharonov–Ben-Or paper gives a proper-code blueprint but refers to external gate constructions; Preskill’s handwritten notes provide $t=1$ memory and gate-gadget material but do not prove a complete circuit-level threshold family. The correcting-gadget spread obligation uses the admitted-sector effective-error identities of [[def-qc-code-deviation-and-spread]], while the proved transversal circuits have literal unitary support propagation. No false full-space recovery/fault intertwiner is required. The required local construction proof must include verified ancillas, syndrome processing, initialization, readout, universal gates, exact location/depth bounds, spread, recursive gate-set closure, and all zero-, one-, and sparse-multifault branches. No proof or acceptance is claimed here.

