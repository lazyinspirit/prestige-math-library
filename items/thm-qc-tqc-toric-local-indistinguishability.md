---
id: thm-qc-tqc-toric-local-indistinguishability
kind: theorem
title: Exact indistinguishability in a contractible disk
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-qc-tqc-periodic-square-cellulation
  - def-qc-tqc-toric-checks
  - lem-qc-tqc-toric-check-commutation
  - thm-qc-tqc-toric-code-dimension
  - lem-qc-tqc-finite-square-cycle-is-boundary
  - lem-qc-tqc-contractible-disk-lifts-to-plane
  - def-qc-stabilizer-code-space
  - thm-qc-stabilizer-projector-and-dimension
  - def-qc-stabilizer-syndrome-and-logical-operators
  - def-qc-pauli-matrices
  - def-qc-register-and-computational-basis
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-tensor-map
  - def-qc-local-operator-support-and-weight
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite Pauli expansions and finite mod-two chains."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Statement

Let $\mathcal C$ be the periodic toric code and let $\Pi$ be its orthogonal
code projector. Let $D$ be a compact embedded disk in the torus with
connected complement. Let $S\subseteq E_L$ be a set of edge qubits such that
$D$ contains both the primal edge segment and its crossing dual edge segment
for every $e\in S$. Then every operator $O$ supported on $S$ has scalar compression
to the code:

$$\Pi O\Pi=c(O)\Pi$$

for some $c(O)\in\mathbb C$.

## Facts & Assumptions

**Given:** The periodic toric checks, a disk region $D$ as in the Statement, and an operator supported on its edge set $S$.

[F1] [[def-qc-tqc-toric-checks]]: stars are X on the four edges incident to a vertex and plaquettes are Z on the four edges in a face boundary.

[F2] [[lem-qc-tqc-toric-check-commutation]]: the check operators commute.

[F3] [[def-qc-stabilizer-code-space]]: the code is their common $+1$ eigenspace.

[F4] [[thm-qc-stabilizer-projector-and-dimension]]: $\Pi$ is the orthogonal projector onto the stabilizer code space. Together with [F3], this means every check $g$ satisfies $g\Pi=\Pi g=\Pi$.

[F5] [[def-qc-local-operator-support-and-weight]]: support on $S$ means, after the declared wire permutation, the operator is $O_S\otimes I_{S^c}$.

[F6] [[def-qc-pauli-matrices]]: the one-qubit matrix units are $|0\rangle\langle0|=(I+Z)/2$, $|1\rangle\langle1|=(I-Z)/2$, $|0\rangle\langle1|=(X+iY)/2$, and $|1\rangle\langle0|=(X-iY)/2$, by direct substitution.

[F7] [[lem-qc-tensor-product-basis-and-dimension]]: ordered elementary computational-basis tensors form a basis of the finite register.

[F8] [[def-qc-tensor-map]]: tensor products of one-qubit maps act factor by factor on elementary tensors and extend linearly.

[F9] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: a Pauli commutes with every check exactly when its binary symplectic pairing with each check label is zero.

[F10] [[def-qc-stabilizer-syndrome-and-logical-operators]]: a phase-aware Pauli label records its X and Z supports separately; equal binary labels differ only by a scalar phase.

[F11] [[lem-qc-tqc-finite-square-cycle-is-boundary]]: every finite primal or dual cycle in the infinite square tiling is a sum of face boundaries.

[F12] [[lem-qc-tqc-contractible-disk-lifts-to-plane]]: primal and dual cycles supported in $D$ lift to finite cycles in the infinite square tiling.

[F13] [[def-qc-tqc-periodic-square-cellulation]]: the quotient sends each unit face to the correspondingly indexed torus face and sends its four boundary edges to the displayed periodic edge boundary; the same incidence identity holds for translated dual squares and star supports. By linearity the quotient therefore sends finite primal and dual boundaries to torus boundaries.

[F14] [[thm-qc-tqc-toric-code-dimension]]: the code projector is nonzero.

## Proof

1.1 The basis matrix units $|x\rangle\langle y|$ span all operators on the finite register by [F7]. Each is the tensor product of one-qubit matrix units by [F8]. The four identities in [F6] therefore express every global matrix unit as a linear combination of tensor Pauli operators. Hence tensor Paulis span the full operator space. If $O$ is supported on $S$, apply the same expansion to $O_S$ in [F5] and tensor with identity outside $S$; every resulting Pauli term is supported on a subset of $S$. [F5, F6, F7, F8, algebra]

2.1 Consider one tensor Pauli $E$ from this expansion. If it anticommutes with a check $g$, then the commutation fact [F2] and the common-$+1$ code definition [F3] make the projector relation [F4] applicable. It gives $\Pi E\Pi=\Pi gE\Pi=-\Pi Eg\Pi=-\Pi E\Pi$, so $\Pi E\Pi=0$. If $E$ commutes with all checks, write it as a phase times $X^xZ^z$. By [F1] and [F9], $z$ has even incidence at every primal vertex and $x$ has even incidence at every dual vertex. They are therefore primal and dual cycles. Their supports lie among the qubits in $S$; by [F12] both cycles lift to finite square-grid cycles. By [F11], the lifted Z cycle is a sum of square face boundaries and the lifted X cycle is a sum of dual face boundaries. Projecting these finite face chains to the torus gives products of plaquette checks and star checks with exactly the original support labels. Indeed, the quotient is a chain map because the boundary of each unit face maps to the stated four-edge torus boundary by [F13]; repeated image faces cancel in pairs over $\mathbb F_2$. Thus $E$ differs by a scalar phase from a product of checks, by [F10], and $\Pi E\Pi$ is a scalar multiple of $\Pi$ by [F3] and [F4]. [F1, F2, F3, F4, F9, F10, F11, F12, F13, step 1.1, algebra]

3.1 Every term in the Pauli expansion of $O$ from step 1.1 has either zero compression or scalar compression by step 2.1. Summing these finitely many terms gives $\Pi O\Pi=c(O)\Pi$. The code projector is nonzero by [F14], so the scalar can be chosen as the sum of the scalar coefficients of those terms. [F14, step 1.1, step 2.1, algebra] ∎

## Remarks

The disk and support hypotheses are finite-cellulation statements. This theorem proves exact local indistinguishability for the specified toric stabilizer model; it makes no perturbation-stability or finite-temperature lifetime claim.

