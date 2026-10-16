---
id: def-qa-21-oblivious-reflection
kind: definition
title: Oblivious ancilla reflection
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-21-lcu-input-and-access-model
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-map
  - def-qa-21-clean-ancilla-postselection
  - thm-qc-isometric-encoding-projector
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
justified_by: []
axiom_use: None; the reflector is the explicit finite-dimensional projector formula.
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
      locator: "Eq. (28.22), printed p.142: reflection on the zero coefficient subspace."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "§9.3, printed pp.74–76: oblivious amplification uses only the clean coefficient register."
---

## Definition

Let $A$ be the full coefficient and PREPARE-work ancilla register in [[def-qa-21-lcu-input-and-access-model]], let $S$ be the system, and let $J:S\to A\otimes S$ be the clean injection of [[def-qa-21-clean-ancilla-postselection]]. Set $\Pi_0:=JJ^\dagger$; [[thm-qc-isometric-encoding-projector]] makes this the orthogonal projection onto the image of $J$. Its basis formula is $\Pi_0=|0_A\rangle\langle0_A|\otimes I_S$, where $|0_A\rangle$ is unit by [[thm-qc-computational-basis-orthonormal]] and the tensor action is that of [[def-qc-tensor-map]]. Define
$$R_0:=I-2\Pi_0.$$
Thus $R_0$ acts as $-I$ on the clean-ancilla subspace and as $+I$ on its orthogonal complement; it acts identically on the unknown system state. In the convention of [[def-qc-reflection]], $R_0=S_{\Pi_0}$, while that item writes $R_{\Pi_0}=2\Pi_0-I=-R_0$. These signs are distinct inside controlled blocks: if only the controlled $R_{\Pi_0}$ is supplied, implement controlled $R_0$ with the exact control-$Z$ correction of [[thm-qc-reflection-unitary-involution]] and charge that gate. A projector-reflection call and its controlled form are explicit access operations, not free consequences of a state vector.
