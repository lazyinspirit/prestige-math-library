---
id: lem-qc-random-measurement-stabilizer-update
kind: lemma
title: Random Pauli measurement updates stabilizer generators
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-zero-probability-branch
  - lem-qc-deterministic-stabilizer-measurement
  - lem-qc-anticommuting-stabilizer-measurement-is-fair
  - thm-qc-pauli-product-and-adjoint
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-symplectic-form
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-stabilizer-subgroup
  - def-qc-stabilizer-state
  - lem-qc-stabilizer-subgroup-label-space-and-order
  - thm-qc-stabilizer-projector-rank-and-code-dimension
  - lem-qc-pure-projective-branch-norm
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

Let $n\ge1$ and let $S=\langle g_1,\ldots,g_n\rangle$ be a stabilizer
subgroup whose displayed generators have linearly independent binary labels
and fix a unit vector $\psi$ on $n$ qubits. Let $M$ be a Hermitian Pauli
observable anticommuting with $g_1$. For either outcome $b\in\{0,1\}$, define
$g'_1=(-1)^bM$ and, for $j>1$, set $g'_j=g_jg_1$ if $g_j$ anticommutes with
$M$, and $g'_j=g_j$ otherwise. Then the updated rows generate a rank-$n$
stabilizer subgroup for the normalized post-measurement state
$P_b|\psi\rangle/\|P_b|\psi\rangle\|$.

## Facts & Assumptions

**Given:** Independent commuting Hermitian stabilizer generators $g_1,\ldots,g_n$, a Hermitian Pauli $M$ anticommuting with $g_1$, and an outcome $b$ with positive probability.

[F1] [[lem-qc-anticommuting-stabilizer-measurement-is-fair]]: both outcomes have probability $1/2$.

[A1] [[thm-qc-pauli-product-and-adjoint]]: exact multiplication of signed Pauli rows uses $P(k,x,z)P(k',x',z')=P(k+k'+2\langle z,x'\rangle,x+x',z+z')$, where the binary dot product is evaluated as $0$ or $1$ before doubling in $\mathbb Z/4\mathbb Z$.

[F2] [[def-qc-stabilizer-subgroup]]: the old rows commute and their group excludes $-I$.

[F3] [[def-qc-pauli-measurement-branch-semantics]]: $P_b$ projects onto the $(-1)^b$ eigenspace and the unnormalized branch is $P_b|\psi\rangle$.

[F4] [[lem-qc-pure-projective-branch-norm]]: the branch probability on a unit vector $\psi$ is $\|P_b\psi\|^2$.

[F5] The displayed generator labels are independent by hypothesis. By [[lem-qc-stabilizer-subgroup-label-space-and-order]], they span the isotropic label space $L$ of $S$, which therefore has dimension $n$.

[F6] [[thm-qc-binary-pauli-quotient-isomorphism]]: the label map adds under Pauli multiplication, and zero label means a scalar Pauli.

[F7] [[def-qc-binary-symplectic-form]]: $\omega((x,z),(x',z'))=x\cdot z'+z\cdot x'$ over $\mathbb F_2$.

[F8] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: Pauli rows commute exactly when their label pairing is zero.

[F9] [[thm-qc-hermitian-pauli-phase-criterion]]: a Hermitian Pauli squares to $I$.

## Proof

**Given:** The data in the Statement.

1.1 Each unchanged row commutes with $M$. If $g_j$ anticommutes with $M$, then $g_jg_1$ commutes with $M$ because both factors anticommute with $M$. The changed and unchanged rows commute with each other because they are products of elements of the old abelian group. The new pivot $(-1)^bM$ commutes with each other row by the first two calculations and is Hermitian. Every changed row is Hermitian because its two factors commute and are Hermitian; its exact phase-aware product is the one computed by [A1]. [A1, F2, F9, given, algebra]

2.1 Write $v_j=\lambda(g_j)$ and $m=\lambda(M)$. By [F6] and [F8], the updated rows for $j>1$ have labels $v'_j=v_j+\omega(v_j,m)v_1$. They remain independent: in any zero linear combination, the coefficients of the independent vectors $v_2,\ldots,v_n$ are the coefficients of the updated rows, so each is zero. Also $\omega(v'_j,m)=\omega(v_j,m)+\omega(v_j,m)\omega(v_1,m)=0$; unchanged rows already pair to zero with $m$. Every $v'_j$ lies in $L$, but $m\notin L$ because it pairs nontrivially with $v_1$ while isotropy in [F5] makes every vector in $L$ pair trivially with $v_1$. Thus adjoining $m$ gives $n$ independent labels. Any nonempty product of the new commuting generators has one of these nonzero labels, so it cannot equal the zero-label scalar $-I$. The generated subgroup therefore excludes $-I$. [F5, F6, F7, F8, F9, given, step 1.1, algebra]

2.2 Since $g_1$ anticommutes with $M$, [F1] gives probability $1/2$ to each bit; [F4] therefore gives $\|P_b|\psi\rangle\|^2=1/2$, so the branch vector is nonzero. The new pivot stabilizes it because $M P_b=(-1)^b P_b$. Each unchanged row commutes with $P_b$ and fixes $|\psi\rangle$. For an updated row $g_jg_1$, commutation with $P_b$ and $g_jg_1|\psi\rangle=|\psi\rangle$ give $g_jg_1P_b|\psi\rangle=P_b|\psi\rangle$. Thus all updated generators fix the normalized branch. [F1, F3, F4, step 1.1, algebra]

3.1 The new generators have rank $n$, so their common fixed space is one-dimensional by [[thm-qc-stabilizer-projector-rank-and-code-dimension]]. It contains the normalized post-measurement vector from step 2.2, hence it is exactly that post-measurement ray. [step 2.1, step 2.2, algebra] ∎

## Sources

De Wolf §20.3, PDF p. 188, gives the pivot replacement and row multiplication rule. Aaronson–Gottesman §III, PDF pp. 4–5, verifies the commuting-row update and signed tableau representation. The product, quotient-label, symplectic, commutator, and Hermitian-phase supplier bodies are present in batch 15 and are quoted in the Facts & Assumptions; they remain draft, not accepted.
