---
id: alg-qa-22-lcu-block-encoding
kind: algorithm
title: LCU block-encoding construction
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
verification:
  precheck: n/a
deps:
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - alg-qc-state-preparation
  - thm-qc-state-preparation-rotation-level-upper-bound
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
  - def-qc-state-preparation-cost-model
  - thm-qc-state-preparation-cost
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 52
      url: https://arxiv.org/pdf/1806.01838
---

## Definition

**Inputs.** Integers $n\ge1$ and $m\ge1$, a finite family of square matrices $A_j\in\mathbb C^{n\times n}$, positive numbers $\alpha_j\ge\|A_j\|_{\rm op}$, and exact $(\alpha_j,a_j,0)$ block-encoding unitaries $U_j$. Also supply coefficients $\beta_j\in\mathbb C$ after omitting zero coefficients, with $\Lambda:=\sum_{j=0}^{m-1}|\beta_j|\alpha_j>0$. The component circuits and their controlled access are separate access inputs.

**Instructions.** Let $a_*:=\max_j a_j$. Extend each component unitary to the common ordered ancilla register by identities on its unused ancillas, so its all-zero block is unchanged. Let $b:=\lceil\log_2m\rceil$, $D:=2^b$, and provide a unitary $P$ on the $b$-qubit coefficient register satisfying

$$P|0^b\rangle=|\chi\rangle:=\sum_{j=0}^{m-1}\sqrt{\frac{|\beta_j|\alpha_j}{\Lambda}}\,|j\rangle.$$

The squared amplitudes sum to one by the definition of $\Lambda$. Define the unitary

$$\mathrm{SELECT}:=\sum_{j=0}^{m-1}|j\rangle\langle j|\otimes\frac{\beta_j}{|\beta_j|}\,U_j+\sum_{j=m}^{D-1}|j\rangle\langle j|\otimes I,$$

where each $U_j$ acts on its padded component ancilla and the data register; an empty second sum is zero. Return $W:=P^{\dagger}\,\mathrm{SELECT}\,P$, acting on the coefficient register, common component ancillas, and data system.

The instance must supply or compile $P$, $P^{\dagger}$, and SELECT, and state the cost of each separately. A coefficient table is not itself a state-preparation circuit; table access, synthesis, controlled component calls, phases, precision, and classical preprocessing are charged under [[def-qa-22-block-encoding-access-model]].

If $P$ is synthesized from the explicit exact normalized amplitude table $(\sqrt{w_j})_{j<D}$, where $w_j:=|\beta_j|\alpha_j/\Lambda$ for $j<m$ and $w_j:=0$ for $j\ge m$, the exact-table procedure [[alg-qc-state-preparation]] is an optional construction. Since zero coefficients were omitted and each $\alpha_j>0$, $w_0>0$ and the first nonzero amplitude $\sqrt{w_0}$ is positive real. The state-preparation procedure omits only this reference phase, which is $0$ here, so the prepared vector equals $|\chi\rangle$ exactly. Under its ideal continuous-angle model, [[thm-qc-state-preparation-rotation-level-upper-bound]] gives at most $D-1$ prefix rotations, at most $D$ phases, $O((b+1)D)$ bounded-arity gates and serial depth, and at most $\max\{b-1,0\}$ reusable clean work bits. Supply or compile the inverse circuit $P^{\dagger}$ separately and charge it separately. If the table uses exactly $s$ bits for each real and imaginary coordinate, [[thm-qc-state-preparation-cost]] separately charges its $2Ds$ input bits and full-table preprocessing scan. These suppliers assert no finite-alphabet arbitrary-angle implementation or Turing bit-time bound; a supplied circuit for $P$ instead carries its own declared costs.

## Remarks

The current XOR-valued interface [[def-qc-coherent-function-oracle]] does not itself implement this unitary-valued SELECT; if SELECT is assembled from component calls, its separate controlled-call and phase construction must be supplied and costed.

The projected block and normalization of the returned unitary are proved in [[thm-qa-22-lcu-block-encoding-correctness]].
