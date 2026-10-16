---
id: lem-qc-tableau-clifford-update
kind: lemma
title: Phase-aware tableau updates for Clifford generators
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-tableau
  - lem-qc-hadamard-pauli-action
  - lem-qc-phase-gate-pauli-action
  - lem-qc-cnot-pauli-action
  - def-qc-binary-symplectic-form
  - def-qc-one-qubit-gate-alphabet-and-rotations
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.2"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Write a Hermitian row as $P(k,x,z)=i^kX^xZ^z$, with $k\in\mathbb Z/4$.
In this lemma's formulas, label coordinates are numbered by Pauli wires
$a=1,\ldots,n$ in tensor order: the coordinate denoted $x_a$ (respectively
$z_a$) here is the coordinate denoted $x_{a-1}$ (respectively $z_{a-1}$)
in [[def-qc-stabilizer-tableau]]. This reindexing changes no operator or phase.
For wire $a$ with $1\le a\le n$, conjugation by $H_a$, $S_a$, and
$S^\dagger_a$ updates the row by, respectively,

$$H_a:(k,x_a,z_a)\mapsto(k+2x_az_a,z_a,x_a),$$
$$S_a:(k,x_a,z_a)\mapsto(k+x_a,x_a,z_a\oplus x_a),$$
$$S^\dagger_a:(k,x_a,z_a)\mapsto(k-x_a,x_a,z_a\oplus x_a).$$

For distinct wires $c,t$, $\operatorname{CNOT}_{c\to t}$ updates
$x_t\mapsto x_t\oplus x_c$, $z_c\mapsto z_c\oplus z_t$, with all other label
coordinates and $k$ unchanged. Applying these conjugations to every row
preserves the generator tableau and, when present, the extended pairing
invariant.

## Facts & Assumptions

**Given:** A valid phase-aware tableau on $n\ge1$ wires, an index
$1\le a\le n$ for a one-qubit gate, or distinct indices $c,t$ for
$\operatorname{CNOT}_{c\to t}$.

[F1] [[def-qc-stabilizer-tableau]]: a row represents $i^kX^xZ^z$ and
commutation is recorded by $\omega$. Its zero-based label coordinates are
reindexed in tensor order by the one-based wire names used in this lemma.

[A1] [[lem-qc-hadamard-pauli-action]] and
[[lem-qc-phase-gate-pauli-action]]: the exact $H$ and $S$ conjugation updates
are the corresponding formulas in the Statement.

[F2] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H,S,S^\dagger$ are
unitary.

[F3] [[lem-qc-cnot-pauli-action]]: CNOT is unitary and conjugates
$X_c,X_t,Z_c,Z_t$ to
$X_cX_t,X_t,Z_c,Z_cZ_t$, respectively.

[F4] [[def-qc-binary-symplectic-form]]:
$\omega((x,z),(x',z'))=x\cdot z'+z\cdot x'$ over $\mathbb F_2$.

## Proof

**Given:** The data in the Statement.

1.1 For $H$, [A1] gives the exact coordinate swap and phase $2x_az_a$. For $S$, $SXS^\dagger=iXZ$ and $SZS^\dagger=Z$ give the stated shear and phase increment. The second identity and unitarity give $S^\dagger ZS=S^\dagger(SZS^\dagger)S=Z$. Then $X=S^\dagger(SXS^\dagger)S=i(S^\dagger XS)Z$, so it follows that $S^\dagger XS=-iXZ$; hence the inverse shear decrements the phase by $x_a$. All other tensor factors are unchanged. [A1, F1, F2, algebra]

1.2 For CNOT, conjugation sends $X_c\mapsto X_cX_t$, $X_t\mapsto X_t$, $Z_c\mapsto Z_c$, and $Z_t\mapsto Z_cZ_t$ by [F3]. The image of the ordered $X^x$ part is a product of $X$ factors and the image of $Z^z$ is a product of $Z$ factors; the order $X^xZ^z$ is retained, so no $X$ crosses a $Z$ and $k$ is unchanged. This gives the stated toggles. [F1, F3, algebra]

2.1 For $H$, swapping $x_a,z_a$ in both labels leaves their contribution $x_az'_a+z_ax'_a$ unchanged. For $S$, replacing $z_a,z'_a$ by $z_a+x_a,z'_a+x'_a$ adds $x_ax'_a+x_ax'_a=0$. For CNOT, the control and target contributions change by, respectively, $x_cz'_t+z_tx'_c$ and $x_cz'_t+z_tx'_c$, whose sum is zero in $\mathbb F_2$. Thus each update preserves the displayed form [F4] and all row pairings. [F4, step 1.1, step 1.2, algebra]

3.1 Each label update is invertible (the H swap is its own inverse and the S and CNOT shears are invertible over $\mathbb F_2$); conjugation also preserves Hermiticity and fixes $-I$. Consequently row independence, commutation, exclusion of $-I$, and every extended pairing remain valid. [F1, F2, F3, F4, step 2.1, algebra] ∎

## Sources

The one- and two-qubit Pauli conjugation tables appear in de Wolf §20.2,
PDF pp. 186–187, and Aaronson–Gottesman §III, PDF pp. 4–5. The actual H, S,
CNOT, and binary symplectic-form supplier bodies are present in batch 15 and
are cited above; they remain draft, not accepted.
