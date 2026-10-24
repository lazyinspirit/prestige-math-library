---
id: alg-qa-12-arbitrary-phase-amplification
kind: algorithm
title: "Amplitude amplification with independently chosen phase rotations"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-12-prepared-success-subspace
  - def-qc-relative-phase
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-controlled-unitary-access
  - thm-qc-controlled-global-phase-is-relative-phase
  - def-qc-dirac-notation-conversion
  - def-qa-quantum-query-algorithm
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Høyer, On Arbitrary Phases in Quantum Amplitude Amplification"
      url: "https://arxiv.org/pdf/quant-ph/0006031"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Input a prepared sampler $A$, a success projection $\Pi_{\mathrm{good}}$, an integer $m\ge0$, and phases $\phi,\varphi\in[0,2\pi)$. In addition to $A,A^\dagger$, the access contract must supply the exact phase operations
$
S_0(\phi)=I+(e^{i\phi}-1)|0\rangle\langle0|,\qquad
S_{\mathrm{good}}(\varphi)=I+(e^{i\varphi}-1)\Pi_{\mathrm{good}},
$
and charge each call. Such access does not follow from a $\pi$-phase reflection alone. Prepare $A|0\rangle$, apply
$
Q(\phi,\varphi):=-A S_0(\phi)A^\dagger S_{\mathrm{good}}(\varphi)
$
exactly $m$ times, and apply the declared good/bad projective instrument. Return the conditional quantum output on a positive-probability good branch or fail on the bad branch. A classical output additionally needs the diagonal-predicate and costed-verifier conditions in [[def-qa-12-prepared-success-subspace]].

## Remarks

The outer minus sign is retained in the operator. An uncontrolled $m$-fold sequence differs from the sequence without that scalar only by the global factor $(-1)^m$. It cannot be dropped inside a controlled use: the controlled block treats the two control branches differently, as in [[thm-qc-controlled-global-phase-is-relative-phase]]. Controlled access to any factor is separately supplied and charged.
