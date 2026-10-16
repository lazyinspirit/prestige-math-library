---
id: thm-qa-16-controlled-consistency-reflection-correct
kind: theorem
title: The controlled input-consistency circuit realizes the exact reflection
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-16-controlled-consistency-reflection
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - def-qa-standard-bit-query
  - def-qa-16-query-address-projectors
  - def-qa-16-boolean-query-domain
  - def-qc-clean-and-dirty-ancillas
  - def-qc-dirac-notation-conversion
  - def-qa-quantum-query-algorithm
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


For every promised input x, the circuit of [[alg-qa-16-controlled-consistency-reflection]] realizes the control-first block operator
$$\operatorname{diag}(I_{\mathcal H},R_{\Pi_x}),\qquad R_{\Pi_x}=2\Pi_x-I,$$
where $\Pi_x$ projects onto the start vector and all query states whose response equals x_i. The controlled operation uses the plus-on-range sign, including on the distinguished start state.

The displayed consistency sum is an orthogonal projection. For arbitrary control/data superpositions, the supplied circuit restores its scratch qubit to zero, including the start mode protected by a $|+\rangle$ scratch during both unconditional calls; no controlled unknown-oracle call is required.

## Facts & Assumptions

**Given:** The finite controlled consistency-reflection circuit and its projection Π_x.



[F1] [[alg-qa-16-controlled-consistency-reflection]]: compute x_i into a clean scratch bit, phase-flip exactly controlled inconsistent query states, then uncompute.

[F2] [[def-qc-reflection]]: R_Π=2Π-I is the plus-on-range reflection.

[F3] [[thm-qc-reflection-unitary-involution]]: this sign is unitary and acts +1 on ran Π and −1 on ker Π.

[F4] [[def-qa-standard-bit-query]]: the XOR query is self-inverse.

[F5] [[def-qa-16-query-address-projectors]]: Π_i resolve identity on all query addresses and other registers.

[F21] [[def-qa-16-boolean-query-domain]]: each promised input x supplies the bit x_i at each address i.

[F22] [[def-qa-standard-bit-query]]: the XOR oracle toggles a response bit by x_i and is an involution.

[F23] [[def-qc-clean-and-dirty-ancillas]]: a clean scratch qubit is initialized to |0⟩ and must be returned to |0⟩.

[F24] [[thm-qc-reflection-unitary-involution]]: R_Π=2Π-I is the unitary reflection acting +1 on ran Π and −1 on ker Π.

[F25] [[def-qc-register-and-computational-basis]]: orthogonal finite registers give the declared mode, address, response and work tensor decomposition.

## Proof

1.1 Let H=span{|start⟩}⊕(C^N⊗K⊗C²), where |start⟩ is orthogonal to all query modes, K is the work space, and the last factor is the response bit. Define Π_x=|start⟩⟨start|+Σ_i |i⟩⟨i|⊗I_K⊗|x_i⟩⟨x_i|. The summands are mutually orthogonal projections, so Π_x is an orthogonal projection. [given, F25, algebra]

2.1 Append a clean scratch bit u=0. In query mode, call O_x at address i to write u=x_i. In start mode route the oracle address to a fixed i_0∈[N] and apply H to u so the target is |+⟩; since X^{x_{i_0}}|+⟩=|+⟩, the unconditional oracle call leaves start unchanged. Apply a fixed phase −1 exactly when c=1, the mode is a query state, and z≠u; apply +1 on the start mode and when c=0. On query basis states this phase is +1 exactly when z=x_i, and −1 otherwise. [given, F21, F22, F23, step 1.1, algebra]

3.1 Call O_x again at the same address to reset u to 0 in query mode, using O_x²=I from [F22]. In start mode the second call again fixes |+⟩, and the final controlled H returns u to |0⟩. For c=1 the induced operator on H is 2Π_x-I; for c=0 it is I. Thus this fixed circuit realizes controlled R_{Π_x} with the plus-on-range sign specified in [F24], without a controlled unknown-oracle call. By linearity the same control/data action holds for arbitrary superpositions with the scratch returned clean. [given, F22, F23, F24, step 1.1, step 2.1, algebra] ∎
