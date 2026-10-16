---
id: alg-qa-16-controlled-consistency-reflection
kind: algorithm
title: Controlled input-consistency reflection from a bit query
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-16-boolean-query-domain
  - def-qa-standard-bit-query
  - def-qc-clean-and-dirty-ancillas
  - def-qc-dirac-notation-conversion
  - def-qc-reflection
  - def-qa-quantum-query-algorithm
  - thm-qc-reflection-unitary-involution
  - def-qc-register-and-computational-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For each x∈D define
$$\mathcal H=\operatorname{span}\{|start\rangle\}\oplus(\mathbb C^N\otimes K\otimes\mathbb C^2),\qquad \Pi_x=|start\rangle\langle start|+\sum_{i=1}^N |i\rangle\langle i|\otimes I_K\otimes|x_i\rangle\langle x_i|.$$
Given a control bit c, compute x_i into a clean scratch bit with one standard XOR query in query mode, phase-flip exactly the controlled query-mode states whose response bit differs from x_i, and uncompute with a second query. In the distinguished start mode route the oracle address to a fixed i_0∈[N] and put the scratch target in |+⟩ for both unconditional oracle calls; the oracle fixes |+⟩ and the phase is disabled on start, so the logical start state is unchanged. The induced operation is I for c=0 and R_{Π_x}=2Π_x−I for c=1.

## Facts & Assumptions

**Given:** The finite address, response, work and mode registers and a promised input x.



[F1] [[def-qa-16-boolean-query-domain]]: each promised input x supplies the bit x_i at each address i.

[F2] [[def-qa-standard-bit-query]]: the XOR oracle toggles a response bit by x_i and is an involution.

[F3] [[def-qc-clean-and-dirty-ancillas]]: a clean scratch qubit is initialized to |0⟩ and must be returned to |0⟩.

[F4] [[thm-qc-reflection-unitary-involution]]: R_Π=2Π-I is the unitary reflection acting +1 on ran Π and −1 on ker Π.

[F5] [[def-qc-register-and-computational-basis]]: orthogonal finite registers give the declared mode, address, response and work tensor decomposition.

## Proof

1.1 Let H=span{|start⟩}⊕(C^N⊗K⊗C²), where |start⟩ is orthogonal to all query modes, K is the work space, and the last factor is the response bit. Define Π_x=|start⟩⟨start|+Σ_i |i⟩⟨i|⊗I_K⊗|x_i⟩⟨x_i|. The summands are mutually orthogonal projections, so Π_x is an orthogonal projection. [given, F5, algebra]

2.1 Append a clean scratch bit u=0. In query mode, call O_x at address i to write u=x_i. In start mode route the oracle address to a fixed i_0∈[N] and apply H to u so the target is |+⟩; since X^{x_{i_0}}|+⟩=|+⟩, the unconditional oracle call leaves start unchanged. Apply a fixed phase −1 exactly when c=1, the mode is a query state, and z≠u; apply +1 on the start mode and when c=0. On query basis states this phase is +1 exactly when z=x_i, and −1 otherwise. [given, F1, F2, F3, step 1.1, algebra]

3.1 Call O_x again at the same address to reset u to 0 in query mode, using O_x²=I from [F2]. In start mode the second call again fixes |+⟩, and the final controlled H returns u to |0⟩. For c=1 the induced operator on H is 2Π_x-I; for c=0 it is I. Thus this fixed circuit realizes controlled R_{Π_x} with the plus-on-range sign specified in [F4], without a controlled unknown-oracle call. [given, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
