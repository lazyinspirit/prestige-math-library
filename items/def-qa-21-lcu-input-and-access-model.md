---
id: def-qa-21-lcu-input-and-access-model
kind: definition
title: LCU decomposition and access model
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-clean-and-dirty-ancillas
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - alg-qc-state-preparation
  - def-qc-circuit-cost-model
  - def-qc-state-preparation-cost-model
  - thm-qc-state-preparation-rotation-level-upper-bound
justified_by: []
axiom_use: None; every index set and circuit is finite, and no arbitrary choice is used.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.10)–(28.20), printed pp.141–142: finite LCU, coefficient preparation, SELECT, and projected block."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Method 2 and Eq. (9.3), printed pp.73–74: finite LCU access and the unnormalized zero-index branch."
---

## Definition

Let $S$ be a finite-dimensional complex-inner-product system space and let
$$M=\sum_{j=0}^{m-1}c_jV_j,\qquad c_j\in\mathbb C,$$
where $m\ge1$, each $V_j:S\to S$ is unitary, and
$$\alpha:=\sum_{j=0}^{m-1}|c_j|>0.$$
The finite ordered list $(c_j,V_j)_{j<m}$ is an **LCU representation** of $M$; it is part of the input, and a matrix description alone does not supply circuits for any $V_j$.

Set $q=\lceil\log_2m\rceil$ and let $A_{\rm idx}$ be the $q$-qubit index register, with the one-dimensional $q=0$ case allowed. Its computational indices are $0,\ldots,2^q-1$. For $j<m$ put $\omega_j=c_j/|c_j|$ when $c_j\ne0$ and $\omega_j=1$ when $c_j=0$. Define the complete SELECT unitary by
$$S_{\rm sel}(|j\rangle\otimes x)=\begin{cases}|j\rangle\otimes\omega_jV_jx,&j<m,\\|j\rangle\otimes x,&m\le j<2^q.\end{cases}$$
This basis rule fixes every valid and padded index; it extends linearly to all superpositions and acts as identity on any separately declared work register.

A **PREPARE** access is a fully specified unitary $P$ on the index register and all its declared work registers, with
$$P|0_{\rm anc}\rangle=e^{i\theta}\left(\sum_{j<m}\sqrt{|c_j|/\alpha}\,|j\rangle\right)\otimes|0_{\rm work}\rangle$$
for some phase $\theta\in\mathbb R$. The same full unitary, including its action on every nonzero input, determines $P^\dagger$; neither an inverse nor a controlled call is implied unless explicitly supplied. The allowed global phase cancels between $P$ and $P^\dagger$ in the LCU block. PREPARE work wires are included among the ancillas projected to zero.

For an amplitude-table implementation with $D=2^q$ entries, the dense fixed-width input length, table reading, arithmetic, and coefficient precision are separate costs. If the continuous-rotation QC24 procedure [[alg-qc-state-preparation]] is used, its source theorem [[thm-qc-state-preparation-rotation-level-upper-bound]] gives $O((q+1)D)$ bounded-arity gates and serial depth, with at most $\max\{q-1,0\}$ reusable clean work bits; the table and exact arithmetic costs remain separate. This bound is for continuous rotations. Finite-alphabet synthesis and finite-precision bit-time require separate guarantees. A supplied PREPARE circuit is instead charged by its declared full description, gates, wires, and generation cost.

The **LCU block circuit** is the complete unitary
$$W:=P^\dagger S_{\rm sel}P$$
on all coefficient/work ancillas and the system. The access record separately lists PREPARE, PREPARE$^\dagger$, SELECT, SELECT$^\dagger$, and every controlled form used, together with their query, gate, wire, coefficient-bit, and classical-description costs under [[def-qa-20-simulation-error-and-cost-model]] and [[def-qc-circuit-cost-model]]. Unspecified access, inverse access, controlled access, and table loading have no free cost. The zero LCU representation is outside this access model because $\alpha=0$ does not define a normalized coefficient state.
