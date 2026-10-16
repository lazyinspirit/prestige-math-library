---
id: alg-qc-stabilizer-exact-simulator
kind: algorithm
title: Exact generator-tableau simulator for stabilizer circuits
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-qc-stabilizer-tableau
  - def-qc-adaptive-pauli-circuit-tree
  - def-qc-circuit-syntax-and-register-order
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-group-on-zero-qubits
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-elementary-circuit-resources
  - lem-qc-tableau-clifford-update
  - lem-qc-tableau-deterministic-sign
  - lem-qc-random-measurement-stabilizer-update
justified_by: []
dependency_level: 17
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Definition

**Inputs and admissible conditions.** An integer $n\ge0$, a basis string
$x=(x_0,\ldots,x_{n-1})\in\mathbb F_2^n$, and a finite adaptive
Pauli-measurement circuit tree on
$H_n=(\mathbb C^2)^{\otimes n}$. Circuit wire labels are
$j\in[n]=\{0,\ldots,n-1\}$. Tableau/Pauli wire labels are $a\in\{1,\ldots,n\}$,
with circuit wire $j$ represented by Pauli wire $a=j+1$. Unitary instructions
are $H_j,S_j,S^\dagger_j$ and
$\operatorname{CNOT}_{c\to t}$ with distinct $c,t\in[n]$. Here
$S^\dagger:=S^*$, the conjugate transpose of the matrix
$S=\operatorname{diag}(1,i)$, so $S^*=\operatorname{diag}(1,-i)$.
Measurement instructions are Hermitian phase-aware Paulis $M=P(k,u,v)$
satisfying the Hermitian phase criterion. The tree uses the branch semantics
of [[def-qc-adaptive-pauli-circuit-tree]]. Its classical bit operations are
charged separately under [[def-qc-elementary-circuit-resources]]. A malformed
input, unsupported gate, out-of-range wire, or non-Hermitian measurement
operand returns INVALID.

**Output.** For a valid input, the sampled measurement transcript and the
final signed generator rows representing the final pure stabilizer ray.
Fair randomness is used exactly when the measured Pauli anticommutes with a
stabilizer row.

**Initialization.** For each circuit wire $j\in[n]$, store the signed
stabilizer row $s_{j+1}=(-1)^{x_j}Z_{j+1}$. The simulator stores only these
generator rows; if $n=0$, the row list is empty.

**Execution.** Set the current tree node to the root and the transcript to the
empty list. While the current node is not a leaf, perform the instruction at
that node and move to its indicated child:

1. **Gate node.** For $H_j$, $S_j$, or $S^\dagger_j$, apply
   [[lem-qc-tableau-clifford-update]] to every generator row using Pauli wire
   $j+1$. For $\operatorname{CNOT}_{c\to t}$, apply the same supplier using
   control wire $c+1$ and target wire $t+1$. Then move to the gate node's
   unique successor.
2. **Measurement node with a pivot.** Compute
   $\omega(\lambda(s_a),\lambda(M))$ for each row $a=1,\ldots,n$. If any
   value is $1$, choose the least such $a$ and retain the old row
   $g=s_a$. Sample a fair bit $b$. For every other row $s_\ell$ that
   anticommutes with $M$, replace it by the exact phase-aware product
   $s_\ell g$. Replace the pivot row by $(-1)^bM$, keep the other rows,
   append $b$ to the transcript, and move to the child edge labelled $b$.
3. **Measurement node without a pivot.** If every row commutes with $M$,
   form the augmented matrix over $\mathbb F_2$ whose columns are
   $\lambda(s_1),\ldots,\lambda(s_n)$ in the fixed $(x,z)$ coordinate order
   and whose right-hand side is $\lambda(M)$. Scan the generator columns in
   increasing order. For each column, choose the least row not already used as
   a pivot that has entry $1$ in that column, swap it into the next pivot row,
   and add that pivot row to every other row having entry $1$ in the column.
   If a column has no pivot, or a row with zero coefficient part has right-hand
   side $1$, return INVALID. Otherwise read the unique coefficient vector
   $c=(c_1,\ldots,c_n)$ from the right-hand sides of the pivot rows. For $n=0$
   this is the empty system with the empty solution. Multiply the selected
   signed rows in increasing row order using the exact phase-aware product
   rule, obtaining $G$. Set $b=0$ if $G=M$ and $b=1$ if $G=-M$; the unique
   matching sign is guaranteed by
   [[lem-qc-tableau-deterministic-sign]]. Leave the tableau unchanged, append
   $b$ to the transcript, and move to the child edge labelled $b$.

For a valid rank-$n$ pure stabilizer tableau, each deterministic system is
consistent and has full column rank. Each iteration moves to a child, and the
finite tree ensures that execution reaches a leaf. Return the transcript and
current stabilizer rows there. Correctness and resource bounds are separate
results.

## Sources

De Wolf §20.3, PDF pp. 187–188, gives the generator-only random and
deterministic measurement updates. Aaronson–Gottesman §III, PDF pp. 3–5,
gives the phase-aware tableau algorithm:
https://arxiv.org/pdf/1907.09415;
https://arxiv.org/pdf/quant-ph/0406196.
