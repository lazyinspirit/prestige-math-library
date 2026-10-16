---
id: thm-qc-exact-arbitrary-unitary-qsd-upper-bound
kind: theorem
title: Exact QSD CNOT Upper Bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
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
CNOTs. For $n=0$ or $n=1$, no CNOT is needed. This is a gate-count bound; it makes no numerical decomposition-time or finite-precision bit-complexity claim.

## Facts & Assumptions

**Given:** Exact $n$-qubit matrix semantics, no ancillas, arbitrary one-qubit gates, and CNOT count as the resource.

[F1] [[thm-qc-cosine-sine-block-decomposition]]: an even-dimensional unitary factors into block-diagonal unitaries and one central cosine-sine rotation with exact boundary sectors.

[F2] [[lem-qc-two-unitary-block-demultiplexing]]: each two-block unitary factors into two smaller unitaries and a diagonal two-block factor.

[F3] [[lem-qc-multiplexed-axis-rotation-gray-code]]: a multiplexed $R_y$ with $k$ select bits uses $2^k$ CNOTs; the same construction applies to $R_z$ after exchanging axes.

[F4] [[thm-qc-two-qubit-unitary-three-cnot-synthesis]]: an arbitrary two-qubit terminal block has a three-CNOT exact synthesis.

[F5] [[thm-qc-one-qubit-euler-decomposition]]: $R_y(t)=\left(\begin{smallmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{smallmatrix}\right)$ in the QC7 convention.

[F6] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers $L_1,\ldots,L_d$ denote $U_{L_d}\cdots U_{L_1}$.

[F7] [[def-qc-elementary-circuit-resources]]: the declared gate count counts occurrences of the allowed gates in the explicit operation model.

[F8] [[def-qc-cnot-and-control-target-order]]: a CNOT is the exact controlled-$X$ permutation with the stated wire order.

[F9] [[thm-qc-computational-basis-orthonormal]]: the computational basis on the CNOT wires is orthonormal.

[A1] Shende–Bullock–Markov, Appendix A.2, claims that diagonal extraction saves one CNOT at every two-qubit terminal block except the last. The exact Theorem 14 matrix identity and diagonal migration are not proved here. The proposed same-page helper `lem-qc-terminal-diagonal-migration` must state and prove that identity under exact matrix equality before this final count can be marked ready.

## Proof



1.1 Apply [F1] to split an $n$-qubit unitary into a central multiplexed $R_y$ and two block-diagonal factors. Apply [F2] to each side factor: each produces two recursive $(n-1)$-qubit unitaries and one diagonal two-block factor, which is a multiplexed $R_z$. Thus the recursive stage contains four $(n-1)$-qubit calls and three multiplexed rotations, interpreted with exact chronological composition [F6] and the declared no-ancilla width [F7]. [given, F1, F2, F6, F7, algebra]

2.1 Each of the three multiplexed rotations has $n-1$ select bits, so [F3] uses at most $2^{n-1}$ CNOTs per rotation. With $c_2=3$ from [F4], the recurrence is $c_n\le4c_{n-1}+3\cdot2^{n-1}$ for $n\ge3$. Induction gives the unoptimized bound $c_n\le(9/16)4^n-(3/2)2^n$: it equals $3$ at $n=2$, and substituting the expression for $c_{n-1}$ into the recurrence gives the expression for $c_n$. The counts are gate occurrences in [F7]. [step 1.1, F3, F4, F7, induction, algebra]

3.1 In the Gray network, conjugating the unitary CNOT of [F8] (unitarity follows because it permutes the orthonormal basis [F9]) by target rotations gives $CZ=(I\otimes R_y(-\pi/2))\,CNOT\,(I\otimes R_y(\pi/2)),$ because its inactive control block is $I$ and its active block is $R_y(-\pi/2)XR_y(\pi/2)=Z$, as direct multiplication of [F5] shows. Thus each CNOT can be replaced by one controlled-$Z$ without changing the two-qubit-gate count. If $M=\sum_x|x\rangle\langle x|\otimes U_x$ is an adjacent generic multiplexor, then multiplying by controlled-$Z$ on either side replaces its branch $U_x$ by $Z^{x_r}U_x$ or $U_xZ^{x_r}$; each remains unitary, so the same multiplexor shape absorbs the diagonal gate exactly. At every recursive node above the two-qubit leaves, this absorbs one initial controlled-$Z$ from its central multiplexed rotation into the neighboring block multiplexor. When $n=2$, there is no recursive node above a terminal block and the savings are zero; when $n\ge3$, the recursion has $1+4+\cdots+4^{n-3}=(4^{n-2}-1)/3$ such nodes. Subtracting this count from the recurrence bound in step 2.1 gives $c_n\le\frac{13}{24}4^n-\frac32 2^n+\frac13$ before terminal-block extraction. [step 1.1, step 2.1, F5, F7, F8, F9, algebra]

4.1 There are $4^{n-2}$ two-qubit terminal blocks. The source's Appendix A.2 states that diagonal extraction saves one CNOT at each terminal block except the last, a total of $4^{n-2}-1$. The source's Theorem 14 gives a circuit picture but no proof of the diagonal-migration identity, and that identity is not established by the arguments above. If it held, the arithmetic would be $\left(\frac{13}{24}-\frac1{16}\right)4^n-\frac32 2^n+\frac13+1=\frac{23}{48}4^n-\frac32 2^n+\frac43.$ The final claimed bound therefore still depends on the unresolved [A1]; the recurrence and the controlled-$Z$ optimization above establish only the weaker $13/24$ bound. [step 2.1, step 3.1, A1, algebra]

5.1 For $n=0$ the space has one basis state and every unitary is a scalar; for $n=1$ the unitary is itself one allowed one-qubit gate. Both cases therefore use zero CNOTs. No arithmetic algorithm or precision bound follows from these exact gate counts. The final statement for $n\ge2$ remains escalated until [A1] is proved; the argument here establishes the recurrence and the first optimization only. [given, step 4.1, A1, algebra] ∎
