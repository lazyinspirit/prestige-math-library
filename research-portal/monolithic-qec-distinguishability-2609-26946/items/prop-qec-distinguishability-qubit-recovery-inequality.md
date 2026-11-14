---
id: prop-qec-distinguishability-qubit-recovery-inequality
kind: proposition
domain: mathematics
title: Pauli-complementary qubit recovery fidelity inequality
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-entanglement-fidelity
  - lem-qec-prereq-qubit-pauli-recovery-ceiling
  - math:def-qc-quantum-channel
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  lem-qec-prereq-qubit-pauli-recovery-ceiling: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, Comparison of Recoveries and Fidelity Measures, paragraph
        after Eq. (S1.9)
      statement: The article uses the inequality F_e(R composed with U) + F_e(R
        composed with ZU) at most 1 for a qubit recovery in its dephasing
        optimality argument.
      hypotheses: The article discusses a logical qubit, a unitary rotation, Pauli Z
        dephasing, and a recovery channel.
      reading_limits: The supplied extracted text of PDF page 9 was read for
        attribution. The article is not used as proof of this inequality.
formulation_deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-entanglement-fidelity
  - math:def-qc-quantum-channel
argument_deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-entanglement-fidelity
  - lem-qec-prereq-qubit-pauli-recovery-ceiling
  - math:def-qc-quantum-channel
dependency_level: 2
---

## Statement

Let $H=\mathbb C^2$ with standard ordered basis, and let $\mathcal R:\mathcal L(H)\to\mathcal L(H)$ be a quantum channel, meaning a complex-linear, completely positive, trace-preserving map. Let $U$ be a unitary matrix, let $Z=\operatorname{diag}(1,-1)$, and write $\operatorname{Ad}_V(X)=VXV^\dagger$. For entanglement fidelity $F_e$ at the maximally mixed input $I/2$,

$$F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})\leq 1.$$

Here $V^\dagger$ is the conjugate transpose, and composition applies the right-hand channel first.

## Statement references

[[def-qec-prereq-finite-operator-conventions]]

[[def-qec-prereq-entanglement-fidelity]]

[[math:def-qc-quantum-channel]]

## Facts & Assumptions

**Given:** The qubit space, channel $\mathcal R$, unitary $U$, and matrix $Z$ in the Statement.

**Goal:** Prove that the displayed sum of entanglement fidelities is at most one.

[F1] The finite operator conventions use the standard basis and conjugate-transpose adjoints. [[def-qec-prereq-finite-operator-conventions]]

[F2] A quantum channel is complex-linear, completely positive and trace-preserving; $F_e$ is the maximally entangled-state overlap for the specified maximally mixed input. [[math:def-qc-quantum-channel]] [[def-qec-prereq-entanglement-fidelity]]

[F3] For a qubit channel $\mathcal R$, unitary $U$, and $Z=\operatorname{diag}(1,-1)$, the sum $F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})$ is at most one, with fidelities evaluated at $I/2$. [[lem-qec-prereq-qubit-pauli-recovery-ceiling]]

## Proof

1.1 The given $H$, $\mathcal R$, $U$, and $Z$ satisfy the hypotheses of [F3]: the space is a qubit, $\mathcal R$ is a quantum channel, $U$ is unitary, and $Z$ has the required diagonal entries. The adjoint and fidelity conventions are those in [F1] and [F2]. [given, F1, F2, F3]

2.1 Applying [F3] to these data gives the displayed inequality, with both fidelities evaluated at $I/2$, as required. [step 1.1, F3] ∎
