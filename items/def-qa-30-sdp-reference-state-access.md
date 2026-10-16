---
id: def-qa-30-sdp-reference-state-access
kind: definition
title: "SDP maximally entangled reference-state access"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-register-and-computational-basis
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-circuit-cost-model
  - thm-qc-computational-basis-orthonormal
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
---

## Definition

For an integer matrix dimension $d\ge1$, define the maximally entangled reference vector
$$|\Phi_d\rangle=d^{-1/2}\sum_{i=0}^{d-1}|i\rangle|i\rangle$$
on two ordered $d$-dimensional registers. The access contract supplies a finite preparation unitary $V_\Phi$, its inverse, width/ancillas, input encoding, and costs $C_\Phi$, satisfying $V_\Phi(|0\rangle|0\rangle|0^a\rangle)=|\Phi_d\rangle|0^a\rangle$ exactly in the declared encoding. Its action on other inputs is any supplied unitary completion; the inverse is that of the complete unitary. When $d=2^q$, a concrete preparation applies $H$ to each of the $q$ first-register qubits and then CNOT from each first-register qubit to its matching second-register qubit, using exactly $q$ Hadamards and $q$ CNOTs on $2q$ wires. For other $d$, $V_\Phi$ and its cost are supplied inputs satisfying the same preparation equation; unused encoded labels have zero output amplitude, and no padding is allowed unless its effect on traces is accounted for.

## Facts & Assumptions

**Given:** Ordered computational-basis registers and the finite tensor-product basis convention.

[F1] [[def-qc-register-and-computational-basis]]: basis labels determine the ordered register states.

[F2] [[thm-qc-computational-basis-orthonormal]]: the computational basis is orthonormal.

[F3] [[def-qc-circuit-denotational-semantics]]: Hadamard and CNOT layers denote their finite unitary products.

## Verification

**Proof technique:** direct.

1.1 Applying $H^{\otimes q}$ to $|0^q\rangle$ gives $2^{-q/2}\sum_{i=0}^{2^q-1}|i\rangle$ by the one-qubit formula and tensor expansion. The subsequent CNOT layer maps each basis vector $|i\rangle|0^q\rangle$ to $|i\rangle|i\rangle$, so the output is exactly $2^{-q/2}\sum_i|i,i\rangle=|\Phi_d\rangle$ when $d=2^q$. [given, F1, F2, F3, algebra]

2.1 The construction in step 1.1 has one Hadamard and one CNOT for each of $q$ bit positions and acts on the two declared $q$-qubit registers. For non-power-of-two $d$, the separately supplied $V_\Phi$ contract is the entire preparation claim, and its cost is retained as $C_\Phi$. [given, step 1.1, algebra] ∎
