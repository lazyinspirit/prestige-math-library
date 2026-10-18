---
id: thm-it-entanglement-assisted-classical-capacity-additive-formula
kind: theorem
title: Additive entanglement-assisted classical capacity formula
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-it-quantum-channel-operational-capacities
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-finite-quantum-information-measures
  - lem-it-entanglement-assisted-information-is-additive
  - lem-it-maximum-coherent-information-attained
  - thm-it-schumacher-quantum-source-coding
  - thm-it-hsw-classical-quantum-channel-capacity
  - thm-qc-schmidt-decomposition
  - def-it-von-neumann-entropy
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorem 8.41 and Lemmas 8.36–8.40"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Bennett, Shor, Smolin, and Thapliyal, Entanglement-assisted capacity of a quantum channel and the reverse Shannon theorem, §II"
      url: "https://arxiv.org/pdf/quant-ph/0106052"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §§21.3–21.5"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
---
## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional quantum channel. Under the shared-entanglement coding convention in [[def-it-quantum-channel-operational-capacities]],

$$C_E(\mathcal N)=\max_{\rho\in\mathcal D(A)}\bigl(S(\rho)+I_c(\rho,\mathcal N)\bigr)=\max_{\rho\in\mathcal D(A)}I(R;B)_{(\operatorname{id}_R\otimes\mathcal N)(\psi_\rho)},$$

where $\psi_\rho$ is any finite purification of $\rho$ on $R\otimes A$. The value is additive: $C_E(\mathcal N_1\otimes\mathcal N_2)=C_E(\mathcal N_1)+C_E(\mathcal N_2)$ for finite-dimensional channels.

## Facts & Assumptions

**Given:** The finite-dimensional channels, prior shared entanglement, and purification convention in the Statement.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]], [[def-it-von-neumann-entropy]], and [[thm-qc-schmidt-decomposition]]: for a purification $\psi_{RA}$, $I_c(\rho,\mathcal N)=S(B)-S(RB)$ and $S(R)=S(\rho)$.

[F2] [[def-it-finite-quantum-information-measures]]: $I(R;B)=S(R)+S(B)-S(RB)$.

[F3] [[lem-it-maximum-coherent-information-attained]]: the finite-dimensional maximum of $S(\rho)+I_c(\rho,\mathcal N)$ exists.

[F4] [[lem-it-entanglement-assisted-information-is-additive]]: $F(\mathcal N):=\sup_\rho[S(\rho)+I_c(\rho,\mathcal N)]$ is additive for tensor-product channels.

## Proof

**Proved subclaim:** For each input state, the reference-output mutual information equals $S(\rho)+I_c(\rho,\mathcal N)$, and this optimized information is additive.

1.1 For any purification $\psi_{RA}$, its reference marginal is $\rho_R$ with the same positive eigenvalues as $\rho_A$, so $S(R)=S(\rho)$ by [F1]. Substituting [F1] into [F2] gives $I(R;B)=S(\rho)+I_c(\rho,\mathcal N)$. Thus the two maximized information expressions in the Statement agree, and [F3] supplies their maximizers. [F1, F2, F3, given, algebra]

2.1 By [F4], the optimized one-use information is additive across every finite tensor power; hence its regularized information value is the same one-use maximum. This proves additivity for the information expression itself. [F4, algebra] ∎

## Authoring status

The operational equality with $C_E(\mathcal N)$ is not proved by steps 1.1–2.1. The missing direct coding argument is the entanglement-assisted coding theorem: the cited full proofs use a finite unitary ensemble, typical-subspace truncation for general input states, HSW coding on the induced receiver ensemble, and a converse bounding every shared-entanglement code by one-use mutual information. Those typical-subspace and coding estimates are not developed here, so the complete capacity claim is escalated.

