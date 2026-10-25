---
id: alg-qa-21-one-step-oblivious-amplification
kind: algorithm
title: One-step oblivious amplitude amplification
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-21-lcu-block-encoding
  - def-qa-21-oblivious-reflection
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
justified_by: []
axiom_use: None; the procedure is a finite composition of declared unitaries.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.22)–(28.25), printed p.142: two reflections and the exact projected block."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Exercise 9 and the discussion after Eq. (9.3), printed pp.74–76."
---

## Definition

**Input:** A unitary $W$ on coefficient/work ancillas and system, explicit inverse access to $W$, the reflection $R_0=I-2\Pi_0$ of [[def-qa-21-oblivious-reflection]], and an operator $M$ satisfying $J^\dagger WJ=M/2$ for the clean injection $Jx=|0_{\rm anc}\rangle\otimes x$.

**Procedure:** Chronologically apply $W$, then $R_0$, then $W^\dagger$, then $R_0$, then $W$. The resulting unitary is
$$C:=-WR_0W^\dagger R_0W.$$
The scalar $-1$ is an explicit phase correction; it is not omitted when this procedure is controlled. The circuit uses two $W$ calls, one $W^\dagger$ call, and two reflection calls. A controlled invocation requires the declared controlled forward, inverse, reflection, and phase-correction gates. This procedure makes no measurement and asserts no exact ancilla cleanup for a nonunitary or approximate $M$; the robust clean-input guarantee is proved separately.
