---
id: ex-it-noiseless-qubit-entanglement-assisted-capacity
kind: example
title: Entanglement-assisted capacity of a noiseless qubit
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - thm-it-entanglement-assisted-classical-capacity-additive-formula
  - thm-qc-dense-coding-correctness-and-resource-count
  - def-qc-bell-basis
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-von-neumann-entropy
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §6.3.1 and Theorem 8.41"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Bennett, Shor, Smolin, and Thapliyal, Entanglement-assisted capacity of a quantum channel and the reverse Shannon theorem, §II"
      url: "https://arxiv.org/pdf/quant-ph/0106052"
---
## Example

For the identity channel on a qubit, the entanglement-assisted classical capacity is $2\ln2$ nats per use, or two classical bits per transmitted qubit. A shared Bell pair and the four-message dense-coding protocol attain the value.

## Facts & Assumptions

**Given:** The noiseless identity channel $\operatorname{id}_{\mathbb C^2}$ and prior shared entanglement.

[F1] [[thm-it-entanglement-assisted-classical-capacity-additive-formula]]: $C_E(\mathcal N)=\max_\rho[S(\rho)+I_c(\rho,\mathcal N)]$.

[F2] [[def-it-quantum-channel-complement-and-coherent-information]]: $I_c(\rho,\mathcal N)=S(B)-S(RB)$ for a purification.

[F3] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]]: for a qubit, $S(\rho)\le\ln2$, with equality at $I/2$.

[F4] [[def-qc-bell-basis]]: the four Bell vectors form an orthonormal basis of $\mathbb C^2\otimes\mathbb C^2$.

[F5] [[thm-qc-dense-coding-correctness-and-resource-count]]: the four Pauli encodings on one half of a shared Bell pair produce the four orthogonal Bell states, which Bob distinguishes with zero error using one transmitted qubit.

## Verification

1.1 For any qubit input $\rho$, the identity channel leaves its purification $\psi_{RA}$ pure. Hence $S(RB)=0$ and $S(B)=S(\rho)$, so [F2] gives $I_c(\rho,\operatorname{id})=S(\rho)$. By [F1] and [F3], $C_E(\operatorname{id})=\max_\rho2S(\rho)=2\ln2$. [F1, F2, F3, given, algebra]

2.1 For a maximally entangled Bell pair, Alice's four Pauli choices produce the four orthogonal Bell states by [F4]–[F5]. Bob's Bell-basis measurement identifies the message without error, so four messages are sent per channel use and the rate is $\ln4=2\ln2$. This attains the capacity computed in step 1.1. [F4, F5, step 1.1, algebra] ∎

