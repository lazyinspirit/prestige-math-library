---
id: lem-qc-tableau-deterministic-sign
kind: lemma
title: Tableau row reduction returns the deterministic Pauli sign
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-tableau
  - def-qc-stabilizer-state
  - thm-qc-pauli-product-and-adjoint
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-symplectic-form
  - def-qc-pauli-group-on-zero-qubits
  - lem-qc-stabilizer-subgroup-label-space-and-order
  - lem-qc-stabilizer-maximal-isotropic-self-dual
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-pure-projective-branch-norm
  - thm-qc-ray-projector-well-defined-and-bijective
justified_by: []
dependency_level: 16
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $n\ge0$ and let $g_1,\ldots,g_n$ be the independent signed rows of a rank-$n$ stabilizer
tableau with unit stabilizer representative $\psi$, and let a Hermitian Pauli
$M$ commute with every row. Binary Gaussian
elimination finds the unique $c\in\mathbb F_2^n$ whose row-label sum is
$\lambda(M)$. The phase-aware product
$G=\prod_{j=1}^n g_j^{c_j}$, taken in increasing row order, is exactly
$(-1)^bM$ for the deterministic measurement bit $b$.

## Facts & Assumptions

**Given:** A valid generator tableau and a Hermitian Pauli $M$ commuting with
its stabilizer subgroup.

[F1] [[def-qc-stabilizer-tableau]]: tableau rows store exact phase-aware
Paulis and independent binary labels.

[F2] [[lem-qc-stabilizer-subgroup-label-space-and-order]]: the row labels span
an isotropic space $L$, the label map is injective on the stabilizer group,
and the row labels form a basis of $L$ in a rank-$n$ tableau.

[F3] [[lem-qc-stabilizer-maximal-isotropic-self-dual]]: for this rank-$n$
stabilizer, $L^\perp=L$.

[F4] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: commutation is
equivalent to zero label pairing.

[F5] [[thm-qc-hermitian-pauli-phase-criterion]]: $P(k,x,z)$ is Hermitian
exactly when $k\equiv x\cdot z\pmod2$, and a Hermitian Pauli squares to $I$.

[F6] [[def-qc-stabilizer-state]]: every stabilizer row fixes the represented
ray.

[F7] [[thm-qc-pauli-product-and-adjoint]]: phase-aware row multiplication
uses the exact formula
$P(k,x,z)P(k',x',z')=P(k+k'+2(z\cdot x'),x+x',z+z')$, with the binary dot
product evaluated as $0$ or $1$ before doubling in $\mathbb Z/4\mathbb Z$.

[F8] [[def-qc-pauli-measurement-branch-semantics]]: outcome $b$ has projector
$P_b$ onto the $(-1)^b$ eigenspace and probability
$\operatorname{Tr}(|\psi\rangle\langle\psi|P_b)$.

[F9] [[lem-qc-pure-projective-branch-norm]]: for normalized $\psi$,
$\operatorname{Tr}(|\psi\rangle\langle\psi|P_b)=\|P_b\psi\|^2$.

[F10] [[thm-qc-binary-pauli-quotient-isomorphism]]: equal binary labels mean
the Pauli operators differ by a scalar phase.

[F11] [[thm-qc-ray-projector-well-defined-and-bijective]]: a unit
representative of the stabilizer ray defines a density operator.

[F12] [[def-qc-pauli-group-on-zero-qubits]]: on the empty register, the
Hermitian Paulis are $I$ and $-I$, and the binary-label space is the zero
space.

## Proof

**Given:** The data in the Statement.

1.1 If $n=0$, the row list and its label list are empty, so the unique coefficient vector is $c=()$ and the row product is the empty product $G=I$. By [F12], $M=\pm I$, so there is a unique bit $b$ with $G=(-1)^bM$. The stabilizer ray has a unit representative $\psi$ and $M\psi=(-1)^b\psi$. Therefore $P_b\psi=\psi$ and $P_{1-b}\psi=0$. By [F11], [F8], and [F9], the branch probabilities are one and zero, so the deterministic measurement bit is $b$. [F8, F9, F11, F12, given, algebra]

1.2 Assume now $n\ge1$. Since $M$ commutes with every stabilizer row, [F4] gives $\lambda(M)\in L^\perp=L$ by [F3]. The row labels form a basis of $L$ by [F2], so the linear system with those rows and target $\lambda(M)$ is consistent and has a unique coefficient vector $c$. Gaussian elimination over $\mathbb F_2$ returns it by pivoting on the independent rows. [F1, F2, F3, F4, given, algebra]

2.1 Multiplying the selected commuting rows in increasing order using [F7] produces the group element $G$ with label $\sum_jc_j\lambda(g_j)=\lambda(M)$. By [F10], $G$ and $M$ differ by a scalar; as both are Hermitian, [F5] makes that scalar $+1$ or $-1$. The exact product phase therefore determines the unique bit $b$ with $G=(-1)^bM$. [F1, F2, F5, F7, F10, step 1.2]

3.1 Since $G$ is a product of stabilizer rows (the empty product when $n=0$), [F6] gives $G\psi=\psi$. Thus $M\psi=(-1)^b\psi$. By [F11], the unit ray projector is a density operator, and [F8] and [F9] give that the corresponding branch has probability one and the opposite branch has probability zero. Hence the phase returned by the row reduction is exactly the deterministic measurement bit. [F6, F8, F9, F11, F12, step 1.1, step 2.1, algebra] ∎

## Sources

Aaronson–Gottesman §III, PDF pp. 4–5, explains phase accumulation and the
deterministic measurement sign; de Wolf §20.3, PDF p. 188, identifies the
sign as the measured eigenvalue.
