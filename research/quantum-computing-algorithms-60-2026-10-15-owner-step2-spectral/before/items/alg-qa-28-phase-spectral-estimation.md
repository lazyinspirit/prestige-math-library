---
id: alg-qa-28-phase-spectral-estimation
kind: algorithm
title: Quantum phase-estimation spectral sampler
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-28-spectral-estimation-access
  - alg-qa-quantum-phase-estimation
  - def-qc-projective-measurement
  - def-qc-dirac-notation-conversion
  - def-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
axiom_use: "None; this is a finite composition of supplied unitary circuits and a projective measurement."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Inputs.** An instance of [[def-qa-28-spectral-estimation-access]], a phase-register size $m\ge1$ with $Q=2^m$, and an input system register. The access instance fixes the phase encoding $\theta(\lambda)$ and decoder.

**Instructions.** Initialize the phase register to $|0^m\rangle$. Apply [[alg-qa-quantum-phase-estimation]] using the supplied controlled powers for $j=0,\ldots,m-1$, or synthesize each required power from the declared controlled-$U$ interface. Measure the phase register by the computational-basis projective measurement and record $y\in\{0,\ldots,Q-1\}$. Return $y/Q$ as a circular phase sample and apply the specified decoder to return an eigenvalue estimate when the injective encoding promise holds. If $U=e^{iH}$ and $\sigma(H)\subseteq[-1,1]$, use the principal representative in $(-1/2,1/2]$ and output $2\pi\operatorname{unwrap}(y/Q)$.

The phase register, controlled powers, gates, decoder arithmetic, measurement, and output costs follow the access record. In particular, with only a controlled-$U$ oracle, implementing the binary powers uses $\sum_{j=0}^{m-1}2^j=Q-1$ controlled-$U$ calls.

## Remarks

This definition asserts no error probability. The exact mixture law, accuracy, and resource guarantees are established separately by the spectral-law, additive spectral-estimation, and matrix-function error-cost theorem carriers.
