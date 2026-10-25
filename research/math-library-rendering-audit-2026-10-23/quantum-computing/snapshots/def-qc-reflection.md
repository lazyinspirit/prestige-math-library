---
id: def-qc-reflection
kind: definition
title: Orthogonal-Projector Reflection and Access Contract
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-dirac-notation-conversion
  - def-qc-pure-state-and-ray
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
justified_by:
  - thm-qc-reflection-unitary-involution
  - thm-qc-rank-one-reflection-phase-and-control-sign
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
dependency_level: 8
---

## Definition

Let $H$ be a finite-dimensional complex-inner-product space and let $\Pi$ be an orthogonal projection on $H$. Fix the two signs

$$R_\Pi:=2\Pi-I,\qquad S_\Pi:=I-2\Pi=-R_\Pi.$$

Thus $R_\Pi$ acts as $+I$ on $\operatorname{ran}\Pi$ and $-I$ on $\ker\Pi$; $S_\Pi$ reverses those signs. They are not interchangeable inside a controlled block. For a unit vector $\psi$, the rank-one reflection is $R_\psi=2|\psi\rangle\langle\psi|-I$ with the Dirac convention of [[def-qc-dirac-notation-conversion]].

An access model counts a direct reflection as one primitive call only when that call is explicitly declared. Controlled reflection access is a separate declaration. If $|0\rangle$ is a specified unit input in the same space $H$, the state is prepared as $\psi=U|0\rangle$ for a declared unitary $U$, and a reflection is implemented by conjugating $R_0=2|0\rangle\langle0|-I$, the construction is $UR_0U^\dagger$ and its cost must include the calls to $U$, $R_0$, and $U^\dagger$. A state vector or matrix description alone implies neither an efficient reflection nor inverse access.

## Remarks

The root theorem [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]] identifies an orthogonal projection as a self-adjoint idempotent. [[thm-qc-reflection-unitary-involution]] proves the algebraic identities for both signs; [[thm-qc-rank-one-reflection-phase-and-control-sign]] proves ray invariance and the controlled sign relation. Their actual proof inputs remain subject to cross-pair supplier reconciliation.
