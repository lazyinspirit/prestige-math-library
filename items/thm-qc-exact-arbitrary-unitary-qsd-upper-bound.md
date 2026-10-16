---
id: thm-qc-exact-arbitrary-unitary-qsd-upper-bound
kind: theorem
title: Exact QSD CNOT Upper Bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - thm-qc-computational-basis-orthonormal
  - thm-qc-cosine-sine-block-decomposition
  - thm-qc-one-qubit-euler-decomposition
  - thm-qc-two-qubit-unitary-three-cnot-synthesis
  - lem-qc-two-unitary-block-demultiplexing
  - lem-qc-multiplexed-axis-rotation-gray-code
  - lem-qc-terminal-diagonal-migration
  - lem-qc-recursive-qsd-central-cz-absorption
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $n\ge2$, every $n$-qubit unitary has an exact no-ancilla circuit with arbitrary one-qubit gates and at most
$$\frac{23}{48}4^n-\frac32 2^n+\frac43$$
CNOTs. For $n=1$, no CNOT is needed. For $n=0$, a circuit on the empty register realizes a scalar unitary exactly if and only if it is $1$; the empty circuit realizes this identity with no gates. This is a gate-count bound; it makes no numerical decomposition-time or finite-precision bit-complexity claim.

## Facts & Assumptions

**Given:** Exact $n$-qubit matrix semantics, no ancillas, arbitrary one-qubit gates, and CNOT count as the resource.

[F1] [[thm-qc-cosine-sine-block-decomposition]]: an even-dimensional unitary factors into block-diagonal unitaries and one central cosine-sine rotation with exact boundary sectors.

[F2] [[lem-qc-two-unitary-block-demultiplexing]]: each two-block unitary factors into two smaller unitaries and a diagonal two-block factor.

[F3] [[lem-qc-multiplexed-axis-rotation-gray-code]]: for either fixed axis $a=y,z$, a multiplexed $R_a$ with $k>0$ select bits has an exact cyclic Gray construction with $2^k$ CNOTs; for $k=0$ it is one rotation with no CNOT.

[F4] [[thm-qc-two-qubit-unitary-three-cnot-synthesis]]: an arbitrary two-qubit terminal block has a three-CNOT exact synthesis.

[F5] [[thm-qc-one-qubit-euler-decomposition]]: $R_y(t)=\left(\begin{smallmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{smallmatrix}\right)$ in the QC7 convention.

[F6] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers $L_1,\ldots,L_d$ denote $U_{L_d}\cdots U_{L_1}$.

[F7] [[def-qc-elementary-circuit-resources]]: the declared gate count counts occurrences of the allowed gates in the explicit operation model.

[F8] [[def-qc-cnot-and-control-target-order]]: a CNOT is the exact controlled-$X$ permutation with the stated wire order.

[F9] [[thm-qc-computational-basis-orthonormal]]: the computational basis on the CNOT wires is orthonormal.

[F10] [[lem-qc-recursive-qsd-central-cz-absorption]] proves the exact identity $LMR=\operatorname{diag}(L_0,L_1Z_r)TR$ when the terminal Gray controlled-$Z$ is deleted from the central rotation, leaving four generic recursive slots and two multiplexed $R_z$ factors.

[F11] [[def-qc-circuit-syntax-and-register-order]]: every gate has positive arity, and a gate occurrence requires that many distinct wires.

[A1] [[lem-qc-terminal-diagonal-migration]] proves that every two-qubit unitary is exactly a diagonal times a two-CNOT circuit, and that these diagonals migrate through separators which preserve the two slot-wire labels, saving one CNOT in every slot except the last.

## Proof



1.1 Split off the first wire and recurse on the remaining contiguous wire interval. Apply [F1] to split an $n$-qubit unitary into a central multiplexed $R_y$ and two block-diagonal factors. Apply [F2] to each side factor: each produces two recursive $(n-1)$-qubit unitaries and one diagonal two-block factor, which is a multiplexed $R_z$. Thus the recursive stage contains four $(n-1)$-qubit calls and three multiplexed rotations, interpreted with exact chronological composition [F6] and the declared no-ancilla width [F7]. [given, F1, F2, F6, F7, algebra]

2.1 Each of the three multiplexed rotations has $n-1$ select bits, so [F3] uses at most $2^{n-1}$ CNOTs per rotation. With $c_2=3$ from [F4], the recurrence is $c_n\le4c_{n-1}+3\cdot2^{n-1}$ for $n\ge3$. Induction gives the unoptimized bound $c_n\le(9/16)4^n-(3/2)2^n$: it equals $3$ at $n=2$, and substituting the expression for $c_{n-1}$ into the recurrence gives the expression for $c_n$. The counts are gate occurrences in [F7]. [step 1.1, F3, F4, F7, induction, algebra]

3.1 For the central multiplexed $R_y$, use the Gray traversal of [F3] with controlled-$Z$ in place of CNOT. Indeed $ZR_y(t)Z=R_y(-t)$ by [F5], so the same Walsh angles give branch sign $(-1)^{p_j\cdot x}$ at mask $p_j$ and the final cyclic edge restores the accumulated $Z$ parity. This is exactly the desired multiplexed rotation. Each controlled-$Z$ costs one CNOT: $CZ=(I\otimes R_y(-\pi/2))\,CNOT\,(I\otimes R_y(\pi/2))$, since the active block is $R_y(-\pi/2)XR_y(\pi/2)=Z$; [F8]–[F9] justify the CNOT matrix and unitarity. Take the last Gray edge as a terminal controlled-$Z$ and absorb it into the neighboring generic block-diagonal factor before demultiplexing that factor. In its first-wire control blocks it multiplies the lower-register branch by $I$ or by the single-wire $Z$ on its select wire. Both branches remain arbitrary unitaries, so [F2] still gives four recursive children and two multiplexed $R_z$ factors. The full block identity is $LMR=(LE_r)TR=\operatorname{diag}(L_0,L_1Z_r)TR$ by [F10], where $M=E_rT$ and $T$ omits the terminal controlled-$Z$. Thus one CNOT is saved at each nonterminal recursive node. There are $(4^{n-2}-1)/3$ such nodes, zero when $n=2$. Subtracting this from step 2.1 gives $c_n\le\frac{13}{24}4^n-\frac32 2^n+\frac13$. [step 1.1, step 2.1, F2, F3, F5, F7, F8, F9, F10, algebra]

4.1 Each recursive call removes the first wire of its contiguous interval, so all $N=4^{n-2}$ terminal slots act on the same last two wires. Every nonterminal multiplexed rotation targets a wire strictly before these two. Its select operations preserve the computational labels of the last two wires: branch by branch in those labels, its rotations and controlled-$X$ or controlled-$Z$ gates act on other wires. Products of these separator operations therefore have exactly the block form required by [A1]. The preceding controlled-$Z$ absorption only changes the arbitrary child matrices before their recursive decomposition and does not change this target/select invariant. Apply [A1] to the complete ordered slot list: the first $N-1$ slots now use two CNOTs, and the last uses three, instead of three in every slot. No diagonal is synthesized separately and no wire is added. The additional saving is $N-1=4^{n-2}-1$. Consequently $c_n\le\left(\frac{13}{24}-\frac1{16}\right)4^n-\frac32 2^n+\frac13+1=\frac{23}{48}4^n-\frac32 2^n+\frac43$. When $n=2$, $N=1$, so there is no migration or saving and the formula is the three-CNOT base case. [step 1.1, step 3.1, F4, F6, F7, A1, algebra]

5.1 For $n=1$, the unitary is itself one allowed one-qubit gate and uses zero CNOTs. For $n=0$, [F11] permits no gate occurrence, so every layer is empty and [F6] makes every circuit denote $1$ on $\mathbb C$. Conversely, the empty circuit realizes $1$. Thus an arbitrary scalar unitary has an exact zero-wire circuit precisely when it equals $1$. The bound for $n\ge2$ follows from step 4.1; these gate counts imply no arithmetic or precision bound. [given, F6, F11, step 4.1, algebra] ∎
