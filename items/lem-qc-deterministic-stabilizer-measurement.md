---
id: lem-qc-deterministic-stabilizer-measurement
kind: lemma
title: Deterministic Pauli measurement on a pure stabilizer state
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-qc-binary-pauli-quotient-isomorphism
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-stabilizer-subgroup
  - def-qc-pauli-group-on-zero-qubits
  - lem-qc-stabilizer-subgroup-label-space-and-order
  - lem-qc-stabilizer-maximal-isotropic-self-dual
  - def-qc-stabilizer-state
  - thm-qc-stabilizer-projector-rank-and-code-dimension
  - def-qc-pauli-measurement-branch-semantics
  - def-qc-pure-state-and-ray
  - lem-qc-pure-projective-branch-norm
  - thm-qc-ray-projector-well-defined-and-bijective
  - lem-qc-zero-probability-branch
justified_by: []
dependency_level: 15
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

Let $S$ be a rank-$n$ stabilizer subgroup on $n\ge0$ qubits and let $M$ be a Hermitian Pauli
observable commuting with every element of $S$. There is a unique $g\in S$
with the same binary label as $M$, and $g=(-1)^bM$ for a unique
$b\in\{0,1\}$. On the stabilizer state of $S$, outcome $b$ has probability
one and the other outcome has probability zero. Moreover $P_b\psi=\psi$, so
the conditional state in the nonzero branch is the original ray.

## Facts & Assumptions

**Given:** A rank-$n$ stabilizer subgroup $S$, its common $+1$ state, and a
Hermitian Pauli $M$ commuting with $S$.

[F1] [[lem-qc-stabilizer-subgroup-label-space-and-order]]: $L=\lambda(S)$ is
isotropic, $\lambda|_S$ is injective, and $\dim L=n$.

[F2] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: commutation of $M$
with $S$ means its label lies in $L^\perp$.

[F3] [[lem-qc-stabilizer-maximal-isotropic-self-dual]]: $L^\perp=L$ for this
rank-$n$ isotropic space.

[F4] [[thm-qc-binary-pauli-quotient-isomorphism]]: equal binary labels mean
the Pauli operators differ by a scalar phase.

[F5] [[thm-qc-hermitian-pauli-phase-criterion]]: if both Paulis are
Hermitian, their scalar ratio is $+1$ or $-1$.

[F6] [[def-qc-stabilizer-state]]: every element of $S$ fixes the state.

[F7] [[def-qc-pure-state-and-ray]]: $\psi$ is a normalized representative of
the stabilizer ray.

[F8] [[thm-qc-ray-projector-well-defined-and-bijective]]: the projector of a
unit representative of a pure-state ray is a positive trace-one density
operator.

[F9] [[def-qc-pauli-measurement-branch-semantics]]: the probability of bit $b$
is $\operatorname{Tr}(|\psi\rangle\langle\psi|P_b)$.

[F10] [[lem-qc-pure-projective-branch-norm]]: this branch probability equals
$\|P_b\psi\|^2$ for normalized $\psi$.

[F11] [[def-qc-pauli-group-on-zero-qubits]]: on the empty register, the
Hermitian Paulis are $I$ and $-I$, both with the unique zero binary label.

## Proof

**Given:** The data in the Statement.

1.1 If $n=0$, then $S=\{I\}$ by [F11] and the exclusion of $-I$. Write $M=(-1)^bI$ for its unique sign bit $b$. The empty row product is $g=I=(-1)^bM$, so the matching group element and bit are unique. On $H_0=\mathbb C$, the given stabilizer ray has a unit representative $\psi$. The projector formula gives $P_b\psi=\psi$ and $P_{1-b}\psi=0$. By [F8]–[F10] the probabilities are $1$ and $0$, respectively; the nonzero branch is the original ray and the other branch has no normalized state by [[lem-qc-zero-probability-branch]]. [F8, F9, F10, F11, given, algebra]

1.2 Assume now $n\ge1$. Since $M$ commutes with $S$, [F2] gives $\lambda(M)\in L^\perp$. By [F3], this is $L$, so there is $g\in S$ with $\lambda(g)=\lambda(M)$. Injectivity in [F1] makes this $g$ unique. [F1, F2, F3, given]

2.1 Both $g$ and $M$ are Hermitian and have the same binary label, so [F4] and [F5] give $g=(-1)^bM$ for exactly one bit $b$. Since $g\psi=\psi$ by [F6], $M\psi=(-1)^b\psi$. [F4, F5, F6, step 1.2, algebra]

3.1 For $n\ge1$, the relation $M\psi=(-1)^b\psi$ gives $P_b\psi=\psi$ and $P_{1-b}\psi=0$. By [F8], the unit ray has its rank-one density projector; [F9] and [F10] then give branch probabilities $1$ and $0$. The nonzero branch is the original ray, while the zero-probability branch has no normalized state by [[lem-qc-zero-probability-branch]]. [F6, F7, F8, F9, F10, step 2.1, algebra]

4.1 Step 1.1 proves the full claim for $n=0$, and step 1.2 and step 2.1 and step 3.1 prove it for $n\ge1$. Thus the statement holds for every $n\ge0$. [step 1.1, step 1.2, step 3.1] ∎

## Sources

De Wolf §20.3, PDF p. 188, identifies the deterministic case from maximal
commuting stabilizers and the measured Pauli's signed product. Aaronson–
Gottesman §III, PDF pp. 4–5, describes phase recovery for deterministic
tableau measurements.
