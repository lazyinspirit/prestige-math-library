---
id: thm-qc-gottesman-knill-exact-simulation
kind: theorem
title: Exact Gottesman–Knill simulation with measurement
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-tableau
  - lem-qc-computational-basis-stabilizer-tableau
  - lem-qc-tableau-clifford-update
  - lem-qc-tableau-deterministic-sign
  - thm-qc-tableau-measurement-update
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-pauli-group-on-zero-qubits
  - def-qc-adaptive-pauli-circuit-tree
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - alg-qc-stabilizer-exact-simulator
justified_by: []
dependency_level: 18
proof_strategy: direct
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Theorem 6 and proof, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

Let $C$ be a finite adaptive circuit on $n\ge0$ ordered qubits, starting in a
computational-basis state $|x\rangle$. Its unitary instructions are from the
finite Clifford generating alphabet $H,S,S^\dagger,\operatorname{CNOT}$ and
its measurements are Hermitian Pauli observables. Its finite deterministic
controller is represented by a circuit tree as in
[[def-qc-adaptive-pauli-circuit-tree]]. Let $T$ be a
worst-case bound on quantum instructions per branch and $C_{\rm cl}$ a
worst-case bound on controller bit operations per branch. Then
[[alg-qc-stabilizer-exact-simulator]] outputs exactly the circuit's
distribution on measurement transcripts and final stabilizer rays.

With dense binary rows and elementary bit operations, tableau and elimination
workspace is $O((n+1)^2)$ bits. Each gate costs $O((n+1)^2)$; each random
measurement costs $O((n+1)^2)$; each deterministic measurement costs
$O((n+1)^3)$. Initializing and outputting the dense signed rows costs
$O((n+1)^2)$ bit operations. Thus the simulator uses
$O((n+1)^2+T(n+1)^3+C_{\rm cl})$ bit operations and stores an $O(T)$-bit
transcript, in addition to the tableau and controller workspace. For $n\ge1$
the time bound is $O(n^2+Tn^3+C_{\rm cl})$. No amplitude vector is formed.

## Facts & Assumptions

**Given:** A finite adaptive circuit, ordered basis input, and its declared
resource accounting.

[F1] [[def-qc-circuit-syntax-and-register-order]]: a circuit has a finite
ordered wire set and finite gate occurrences with distinct ordered operands.

[F2] [[def-qc-circuit-denotational-semantics]]: global gate embeddings are
unitary and chronological layers act in the declared order; the empty circuit
acts as the identity.

[F3] [[def-qc-adaptive-pauli-circuit-tree]]: each Pauli measurement node has
two outcome edges with the corresponding instrument weights, and its tree
selects later instructions from observed outcomes; zero-weight edges have no
conditional state.

[F4] [[def-qc-elementary-circuit-resources]]: gate occurrences, wire width,
and operation-model costs are separately counted; the model may charge
classical bit operations explicitly.

[F5] [[lem-qc-computational-basis-stabilizer-tableau]]: the initial signed
rows represent $|x\rangle$ and satisfy the tableau invariants.

[F6] [[lem-qc-tableau-clifford-update]]: gate conjugation preserves the row
representation and tableau invariant.

[F7] [[thm-qc-tableau-measurement-update]]: every Pauli measurement branch
has exactly the projective probability and conditional tableau prescribed by
the instrument.

[F8] [[alg-qc-stabilizer-exact-simulator]]: the simulator processes the same
finite instructions and samples a fair bit exactly for a random Pauli
measurement branch.

[F9] [[def-qc-pauli-group-on-zero-qubits]]: on the empty register, a
Hermitian Pauli is $I$ or $-I$.

## Proof

**Given:** A circuit and input as in the Statement.

1.1 Before the first instruction, [F5] gives a tableau for the exact input state and transcript. This establishes the simulation invariant at prefix length zero. [F5, given]

1.2 A gate updates at most $2n$ rows, each with $O(n)$ bits. A measurement tests at most $n$ symplectic pairings, each in $O(n)$ bit operations. In its random case it updates at most $n$ rows by an $O(n)$ Pauli product each. In its deterministic case Gaussian elimination on a $2n$-by-$n$ binary system uses $O(n^3)$ bit operations, and multiplying at most $n$ selected rows uses $O(n^2)$. Thus every quantum instruction costs $O((n+1)^3)$. Initializing and writing the $n$ signed rows each takes $O((n+1)^2)$ bit operations because each row stores $2n+O(1)$ bits; writing the transcript takes $O(T)$. Summing instruction costs over $T$ steps, then adding initialization, output, and $C_{\rm cl}$ gives $O((n+1)^2+T(n+1)^3+C_{\rm cl})$. The tableau has $O((n+1)^2)$ bits, elimination scratch has $O((n+1)^2)$ bits, and the output transcript has at most $T$ bits. The register width and controller charge use the accounting in [F4]; gate and measurement instructions are counted in $T$ and charged by the bit-operation bounds just proved. [F4, algebra]

2.1 Suppose the invariant holds after a prefix of $k$ instructions. If the next instruction is a Clifford generator, [F6] conjugates every stabilizer row by the same unitary as the circuit, whose action is ordered by [F2]. If it is a Pauli measurement, [F3] supplies the finite instrument-history branch and [F7] gives its probability and updated tableau; [F8] samples a fair bit exactly in the random case and computes the signed bit in the deterministic case. Equal transcripts therefore select the same next child by [F3]. Thus the conditional transition laws agree after instruction $k+1$. A terminated branch remains in the same final state. Each simulator iteration advances to a child of the finite tree, so it reaches a leaf after at most $T$ quantum instructions. Induction through that path proves equality of the complete transcript and final ray distributions. [F2, F3, F6, F7, F8, step 1.1]

3.1 If $n=0$, no wire gate is admissible and [F9] makes every valid Pauli observable $I$ or $-I$. Its label is the unique zero vector, so the empty row product determines the sign and each measurement is deterministic; the tableau uses constant space. The uniform $(n+1)$ bounds therefore include this boundary. [F1, F8, F9, given, algebra] ∎

## Sources

De Wolf, Theorem 6 and proof in §20.3, PDF pp. 187–188, proves exact
polynomial-time simulation for measurement-controlled Clifford circuits.
Aaronson–Gottesman §III, PDF pp. 3–6, gives the signed tableau and the
$O(n^2)$ random and $O(n^3)$ deterministic generator-only update bounds.
