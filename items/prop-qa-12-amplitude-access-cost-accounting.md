---
id: prop-qa-12-amplitude-access-cost-accounting
kind: proposition
title: "Amplitude-amplification access and resource accounting"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-12-prepared-success-subspace
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - def-qc-circuit-cost-model
  - def-qa-quantum-query-complexity
  - alg-qa-12-amplitude-amplification
justified_by: []
proof_strategy: direct
axiom_use: "None; the count is a finite expansion of the displayed iterate."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

One standard iterate expands as
$
Q=-A(I-2|0\rangle\langle0|)A^\dagger(I-2\Pi_{\mathrm{good}}).
$
It therefore uses one good-subspace phase operation, one zero-input phase operation, one forward $A$, and one inverse $A^\dagger$. The initial preparation adds one further forward $A$; optional final verification is separate. For $|\psi\rangle=A|0\rangle$, the prepared-state $S$-sign reflection is $S_\psi:=I-2|\psi\rangle\langle\psi|=A S_0 A^\dagger=-R_\psi$, where $R_\psi=2|\psi\rangle\langle\psi|-I$ is the rank-one reflection of [[def-qc-reflection]]. The composite is not a free primitive unless that separate access is explicitly supplied. Query calls, gates, state preparation, controlled access, and classical costs remain distinct.

## Facts & Assumptions

**Given:** The fixed-iterate algorithm and its declared access model.

[F1] [[alg-qa-12-amplitude-amplification]]: the standard iterate has the displayed factorization and is applied $k$ times after one initial preparation.

[F2] [[def-qc-reflection]]: $S_{\Pi}=I-2\Pi$ is the specified $S$-sign reflection, and reflection access/cost is explicit.

[F3] [[def-qc-inverse-unitary-access]] and [[def-qc-controlled-unitary-access]]: inverse and controlled capabilities are separately granted and charged.

[F4] [[def-qc-circuit-cost-model]] and [[def-qa-quantum-query-complexity]]: query, gate, width, preparation, and classical costs are separate coordinates.

## Proof

1.1 Expanding $Q$ in [F1] places $S_{\mathrm{good}}$ once, $S_0$ once, $A^\dagger$ once, $A$ once, and the scalar minus once. Repeating $k$ times and adding the initial preparation gives $k$ good phases, $k$ zero-input phases, $k$ inverse calls, and $k+1$ forward calls. [given, F1, algebra]

2.1 Since $A$ is unitary and $|\psi\rangle=A|0\rangle$, conjugation gives $A S_0 A^\dagger=I-2|\psi\rangle\langle\psi|=S_\psi=-R_\psi$ with the signs of [F2]. Implementing this $S$-sign reflection includes its two access calls and zero-state phase; it is not added again as a separate free call. By [F2]–[F4], any separately supplied reflection or controlled-access primitive replaces only the operations its interface explicitly covers, with the specified sign retained under control. [given, F2, F3, F4, step 1.1, algebra] ∎
