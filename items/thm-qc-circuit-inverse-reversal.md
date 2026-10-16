---
id: thm-qc-circuit-inverse-reversal
kind: theorem
title: "Reversing a circuit implements its inverse"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-circuit-denotational-semantics
  - lem-qc-local-gate-wire-embedding
  - def-qc-inverse-unitary-access
  - def-qc-elementary-circuit-resources
  - prop-adjoint-algebra
justified_by: []
dependency_level: 9
proof_strategy: direct
axiom_use: "None; only finite products and adjoints of declared finite-dimensional unitaries are used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
---

## Statement

Let $C$ be a finite measurement-free unitary circuit. Assume that for every gate occurrence its adjoint is a legal gate occurrence on the same ordered wires and that the operation model explicitly grants each inverse call, as required by [[def-qc-inverse-unitary-access]]. Reverse the chronological layer order and, within each layer, reverse its gate list while replacing each gate by its adjoint. The resulting circuit $C^{-1}$ has
$$U_{C^{-1}}=U_C^\dagger=U_C^{-1}.$$
It has the same number of gate occurrences as $C$; inverse calls retain their separately declared access cost.

## Facts & Assumptions

**Given:** A finite layered unitary circuit $C$ and explicit inverse access to every gate occurrence.

[F1] [[def-qc-circuit-denotational-semantics]]: if the chronological layer maps are $U_{L_1},\ldots,U_{L_d}$, then $U_C=U_{L_d}\cdots U_{L_1}$.

[F2] [[def-qc-inverse-unitary-access]]: inverse access supplies $U^\dagger=U^{-1}$ as an explicitly declared operation, with its own charge.

[F3] [[def-qc-elementary-circuit-resources]]: size is the number of gate occurrences; controlled and inverse calls require explicitly granted access and separately recorded charges; inverse charges remain separate from controlled forward charges.

[F4] [[prop-adjoint-algebra]]: $(ST)^\dagger=T^\dagger S^\dagger$ for compatible finite-dimensional maps.

[F5] [[lem-qc-local-gate-wire-embedding]]: the full-register embedding of a local unitary is uniquely determined by its action on the named ordered wires and identity action on every other wire.

## Proof


1.1 Enumerate one layer as $L_t=(g_1,\ldots,g_s)$. By [F1] its denotation is $\widetilde U_{g_s}\cdots\widetilde U_{g_1}$, so [F4] gives its adjoint $\widetilde U_{g_1}^\dagger\cdots\widetilde U_{g_s}^\dagger$. [given, F1, F4, algebra]

2.1 For each occurrence, its global embedding $T=\widetilde U_{g_j}$ is unitary by [F1]. The inverse $T^{-1}=T^\dagger$ acts on each ordered product basis vector by applying $U_{g_j}^{-1}=U_{g_j}^\dagger$ to the selected factors and leaving every complement factor fixed: applying $T$ to that result returns the original vector. The legal local-adjoint embedding has the same action, so uniqueness in [F5] identifies it with $T^\dagger$. The assumed legal inverse occurrence and [F2] provide this call. There is one inverse occurrence per original gate, so the size is unchanged by [F3]. [given, step 1.1, F1, F2, F3, F5, algebra]

2.2 By [F1], the whole circuit is $U_{L_d}\cdots U_{L_1}$. Repeated use of [F4] yields $U_C^\dagger=U_{L_1}^\dagger\cdots U_{L_d}^\dagger$, which acts by executing the inverse of $L_d$ first and the inverse of $L_1$ last. Since each layer is unitary, $U_C^\dagger U_C=U_CU_C^\dagger=I$, so $U_C^\dagger=U_C^{-1}$ and it is the denotation of the reversed circuit. [given, F1, F2, F4, step 1.1, algebra]

3.1 If $d=0$, both circuits are empty and denote the identity; the occurrence count is zero on both sides by [F3]. [F1, F3, algebra] ∎

