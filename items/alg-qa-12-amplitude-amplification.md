---
id: alg-qa-12-amplitude-amplification
kind: algorithm
title: "Amplitude amplification with a fixed integer iteration count"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-12-prepared-success-subspace
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
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
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

Input a coherent sampler $A$, an orthogonal success projection $\Pi_{\mathrm{good}}$, and a fixed integer $k\ge0$, under the access contract of [[def-qa-12-prepared-success-subspace]]. Additionally supply the good/bad projective instrument $\{\Pi_{\mathrm{good}},I-\Pi_{\mathrm{good}}\}$, charging each measurement and its implementation costs separately. Prepare $|\psi\rangle=A|0\rangle$. In the displayed right-to-left operator convention, set
$
Q:=-A(I-2|0\rangle\langle0|)A^\dagger(I-2\Pi_{\mathrm{good}}).
$
Apply $Q$ exactly $k$ times. Then apply the projective instrument $\{\Pi_{\mathrm{good}},I-\Pi_{\mathrm{good}}\}$. On a positive-probability good outcome return its conditional quantum state; on the bad outcome return fail. The conditional state exists only on a positive-probability branch, as in [[thm-qc-projective-conditional-state]].

For the classical-output specialization, additionally require $\Pi_{\mathrm{good}}$ to be diagonal in the designated output basis and supply a costed verifier. Measure that basis only after the success-projector instrument has accepted; verify the resulting candidate and return it or fail. No arbitrary-projector-to-classical-predicate conversion is implicit.

## Remarks

This fixed-$k$ procedure makes no controlled-$A$ call. Any controlled or inverse access used by an enclosing procedure must be separately declared and charged. The scalar minus sign in $Q$ is retained exactly.
