---
id: lem-qc-stabilizer-subgroup-label-space-and-order
kind: lemma
title: Stabilizer labels form an isotropic space of the same rank
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-subgroup
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-group-on-zero-qubits
  - thm-qc-pauli-product-and-adjoint
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-binary-symplectic-form
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - def-finite-field-and-its-order
  - thm-z-mod-p-is-a-field
  - def-dimension
  - lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field
justified_by: []
dependency_level: 11
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §II
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

Let $S$ be a stabilizer subgroup on $n\ge0$ qubits and let
$\lambda(P(k,x,z))=(x,z)$. Then $\lambda|_S$ is injective, its image $L$ is an
isotropic $\mathbb F_2$-subspace, the rank $\dim_{\mathbb F_2}L$ depends only
on $S$ and not on a generating list, and
$|S|=2^{\dim_{\mathbb F_2}L}$.

## Facts & Assumptions

**Given:** A stabilizer subgroup $S$ and the phase-aware Pauli convention
$P(k,x,z)=i^kX^xZ^z$.

[F1] [[def-qc-stabilizer-subgroup]]: $S$ is an abelian subgroup of Hermitian
Paulis and $-I\notin S$.

[F2] [[def-qc-binary-pauli-label-and-quotient]]: the binary label is
$\lambda(P(k,x,z))=(x,z)$ and forgets only scalar phase.

[F3] [[thm-qc-binary-pauli-quotient-isomorphism]]: the label map is a group
homomorphism, and its kernel on phase-aware Paulis is the scalar center.

[F4] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: two Pauli operators
commute exactly when their labels have symplectic pairing zero.

[F5] [[thm-qc-hermitian-pauli-phase-criterion]]: $P(k,x,z)$ is Hermitian
exactly when $k\equiv x\cdot z\pmod2$; every Hermitian Pauli squares to $I$.

[F6] [[def-finite-field-and-its-order]] and
[[thm-z-mod-p-is-a-field]]: $\mathbb F_2$ is a field with exactly two
elements.

[F7] [[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]]:
an $r$-dimensional vector space over a field of order $q$ has $q^r$ elements.

[F8] [[def-qc-phase-aware-n-qubit-pauli-group]] and
[[def-qc-pauli-group-on-zero-qubits]]: the ambient Pauli set is finite, so
every subgroup $S$ is finite.

[F9] [[def-qc-pauli-group-on-zero-qubits]]: for $n=0$, the Hermitian scalar
Paulis are $I$ and $-I$, and the binary-label space has one element.

## Proof

**Given:** The data in the Statement.

1.1 If $n=0$, then $S=\{I\}$: a subgroup contains $I$ and its only other possible Hermitian scalar Pauli is $-I$, which is excluded. Thus $\lambda|_S$ is injective, its image is the zero subspace of dimension $0$, this dimension is independent of any generating list, and $|S|=1=2^0$. [F1, F9, given]

1.2 Assume now $n\ge1$. The identity of $S$ has zero label. If $P,Q\in S$, then $PQ\in S$ and $\lambda(PQ)=\lambda(P)+\lambda(Q)$ by [F3]. Thus $L=\lambda(S)$ contains zero and is closed under addition; over $\mathbb F_2$, closure under the only scalars $0,1$ follows, so $L$ is a subspace. [F1, F2, F3, F6, given]

1.3 Suppose $P,Q\in S$ have the same label. By the homomorphism in [F3], $\lambda(P^{-1}Q)=0$, so $P^{-1}Q$ is a scalar Pauli. Since Hermitian Paulis square to $I$ by [F5], $P^{-1}=P$; as $P,Q$ commute and are Hermitian, $P^{-1}Q=PQ$ is Hermitian. The phase criterion [F5] then makes this scalar equal to $I$ or $-I$. The latter is excluded by [F1], hence $P=Q$ and $\lambda|_S$ is injective. [F1, F3, F5, given]

2.1 For $n\ge1$, any two labels in $L$ come from commuting elements of the abelian group $S$, so [F4] gives symplectic pairing zero. Bilinearity then makes every pair in their span pair to zero; hence $L$ is isotropic. The image $L$ is defined from $S$ alone, so its dimension is unchanged by replacing one generating list of $S$ by another. [F1, F4, step 1.2, algebra]

2.2 For $n\ge1$, the map $\lambda|_S:S\to L$ is onto by the definition of $L$ and injective by step 1.3, so it is a bijection of finite sets by [F8]. If $r=\dim_{\mathbb F_2}L$, [F6] and [F7] give $|L|=2^r$. Therefore $|S|=|L|=2^r$, as claimed. [F6, F7, F8, step 1.3]

3.1 Step 1.1 proves the claim for $n=0$, and step 1.2 and step 1.3 and step 2.1 and step 2.2 prove it for $n\ge1$. These cases exhaust all $n\ge0$. [step 1.1, step 1.2, step 2.2] ∎

## Sources

De Wolf §20.1, PDF pp. 185–186, describes the finite Pauli group, commuting
independent stabilizers, and the rank-$n$ state condition. Aaronson–Gottesman
§II, PDF pp. 2–4, gives the binary phase-aware Pauli row representation. The
current batch-15 label-quotient and commutator supplier bodies are listed in
the Facts & Assumptions above; this draft does not claim their independent
acceptance.
