---
id: thm-qc-stabilizer-encoder-correctness
kind: theorem
title: Stabilizer encoder correctness
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qc-stabilizer-encoder-by-symplectic-elimination
  - def-qc-circuit-denotational-semantics
  - def-qc-circuit-syntax-and-register-order
  - def-qc-register-and-computational-basis
  - thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count
  - thm-qc-stabilizer-projector-and-dimension
  - thm-qc-computational-basis-orthonormal
  - lem-qc-cnot-pauli-action
  - lem-qc-hadamard-pauli-action
  - lem-qc-phase-gate-pauli-action
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite basis vectors and a finite gate list."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3'
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For every valid input of independent commuting signed Hermitian checks
$g_0,\ldots,g_{r-1}$ on $n$ wires, let the symplectic-elimination encoder
return the forward gate list $D$, its adjoint list $D^\dagger$, and signed
row-operation data $(M,\kappa)$. Thus $M\in GL(r,\mathbb F_2)$ and, for each
$i$, the exact input product
$$G_i:=\prod_{a=0}^{r-1}g_a^{M_{ia}}=P\!\left(\kappa_i,\sum_{a=0}^{r-1}M_{ia}x_a,\sum_{a=0}^{r-1}M_{ia}z_a\right)$$
has recorded phase $\kappa_i\in\mathbb Z/4\mathbb Z$ and satisfies
$D G_iD^\dagger=+Z_i$. Define the logical Hilbert space
$\mathcal H_L=(\mathbb C^2)^{\otimes(n-r)}$ and the encoding isometry
$V:\mathcal H_L\to(\mathbb C^2)^{\otimes n}$ by
$$V|x\rangle:=D^\dagger(|0^r\rangle\otimes|x\rangle),\qquad x\in\mathbb F_2^{n-r}.$$
The vectors $V|x\rangle$ form an orthonormal basis of the stabilizer code
space, which has dimension $2^{n-r}$.

## Facts & Assumptions

**Given:** A valid independent commuting signed Pauli check list on $n$
ordered qubits, its phase-aware tableau, and the encoder output.

[F1] [[alg-qc-stabilizer-encoder-by-symplectic-elimination]]: the finite
procedure records the chronological gate list and signed row-operation data
$(M,\kappa)$, with $M\in GL(r,\mathbb F_2)$ and input-combination rows
$G_i=\prod_a g_a^{M_{ia}}$ whose conjugates are $+Z_i$.

[F2] [[thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count]]:
the pivot loop terminates after $r$ pivots on every valid input.

[F3] [[lem-qc-hadamard-pauli-action]]: $H$ conjugates $X$ to $Z$ and $Z$
to $X$ with the exact phase update.

[F4] [[lem-qc-phase-gate-pauli-action]]: $S$ and its adjoint have the
displayed exact phase-aware Pauli actions.

[F5] [[lem-qc-cnot-pauli-action]]: CNOT conjugation has the stated
control-target binary update and tracks phase.

[F6] [[thm-qc-stabilizer-projector-and-dimension]]: the input common
$+1$ eigenspace has dimension $2^{n-r}$.

[F7] [[def-qc-circuit-syntax-and-register-order]]: each gate occurrence
specifies its ordered wire tuple, and the circuit records finite layers with
their chronological order.

[F8] [[def-qc-circuit-denotational-semantics]]: a chronological layer list
$L_1,\ldots,L_d$ denotes $U_{L_d}\cdots U_{L_1}$ on the ordered register.

[F9] [[thm-qc-computational-basis-orthonormal]]: the ordered computational
basis of each finite qubit register is orthonormal.

## Proof

1.1 The procedure terminates after $r$ pivots on every valid input by [F2]. By [F7]–[F8], each appended local gate acts on its ordered wires and the chronological list denotes its composed unitary. Each tableau coordinate and circuit wire $q$ corresponds to supplier factor $q+1$, as fixed in [F1]; in particular, one-wire updates use factor $q+1$ and a CNOT on circuit wires $q,s$ uses supplier control and target indices $q+1,s+1$. At each pivot, the local $H$, $S^\dagger$, and $H$ transformations send the pivot row's nonidentity one-wire Pauli factors to signed $Z$ factors. The $S^\dagger$ step sends $Y$ to $X$ by the inverse phase-gate action [F4], and then [F3] sends $X$ to $Z$. For each remaining pivot-row $Z_q$, the control-$q$, target-$j$ CNOT changes the pivot label $Z_qZ_j$ to $Z_j$ by [F5]. If the resulting row is negative, $X_j$ changes $-Z_j$ to $+Z_j$. Conjugation preserves commutation, while the exact phase-aware gate actions track every resulting sign. [F1, F2, F3, F4, F5, F7, F8, construct]

2.1 Interchanging the selected pivot row into position $j$ and each subsequent row multiplication are invertible elementary operations on the generator list; the former swaps rows of $M$ and $G$, and the latter updates them by the same binary row addition and exact Pauli product. Thus $M$ remains invertible and $G_i=\prod_a g_a^{M_{ia}}$ retains its recorded phase $\kappa_i$. Row multiplication by the pivot clears the remaining row's $Z_j$ coordinate because that row has no $X_j$ coordinate: it commutes with the now-$Z_j$ pivot. Consequently the transformed input-product rows are exactly $+Z_0,\ldots,+Z_{r-1}$, as asserted by [F1]. [F1, F7, F8, step 1.1, algebra]

3.1 A vector is fixed by every $Z_j$ for $j<r$ exactly when all its computational-basis coordinates with a $1$ among the first $r$ bits vanish. Thus the common $+1$ eigenspace of the canonical checks is $|0^r\rangle\otimes(\mathbb C^2)^{\otimes(n-r)}$. By the row-basis equivalence in step 2.1 and the denotation [F8], this is exactly $D\mathcal C(S)$. [F1, F8, step 2.1, algebra]

4.1 The ordered computational basis is orthonormal by [F9], and $x\mapsto|0^r\rangle\otimes|x\rangle$ embeds the logical computational basis as an orthonormal family. The finite product unitary $D^\dagger$ from [F8] therefore defines the isometry $V$ in the Statement and sends these $2^{n-r}$ vectors to orthonormal vectors in $\mathcal C(S)$. Step 3.1 shows they span that space, and [F6] confirms its dimension is $2^{n-r}$. Hence they form the stated stabilizer code basis. [F1, F6, F7, F8, F9, step 3.1, algebra] ∎

## Remarks

The ordered wire tuple and chronological product in [F7]–[F8] are the only
circuit-semantic interfaces used; the finite list is viewed as singleton
layers in that syntax.
