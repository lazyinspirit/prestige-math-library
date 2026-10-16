---
id: thm-qc-exact-unitary-synthesis-from-qsd
kind: theorem
title: "Exact finite unitary synthesis from cosine-sine recursion"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [thm-qc-cosine-sine-block-decomposition, lem-qc-two-unitary-block-demultiplexing, lem-qc-r-y-r-z-multiplexor-gray-code, thm-qc-two-qubit-unitary-three-cnot-synthesis, thm-polar-form-with-unique-principal-argument, def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics, def-qc-cnot-and-control-target-order, def-qc-tensor-register-and-permutation, lem-qc-local-gate-wire-embedding]
justified_by: []
dependency_level: 10
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5, §§5.1–5.3"
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §2.2"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For every $n\ge1$ and $U\in U(2^n)$, there is a finite exact $n$-wire
circuit with no ancillas, using arbitrary one-qubit gates and CNOT gates,
whose denotation is exactly $U$. For $n=0$, the unitary channel on the
one-dimensional register is the identity channel and is represented by the
empty circuit. The finite alphabet may be chosen to contain the exact gate
matrices used in the construction. This is an existence theorem for exact
mathematical gate labels; it gives no finite-bit encoding or decomposition-time
bound.

## Facts & Assumptions

**Given:** A finite-dimensional unitary matrix and the exact finite-circuit
semantics on ordered qubit wires.

[F1] The cosine-sine theorem writes a $2k$-dimensional unitary as two
block-diagonal unitaries around a central block
$\begin{pmatrix}C&-S\\S&C\end{pmatrix}$, with nonnegative diagonal
$C,S$ and $C^2+S^2=I$
([[thm-qc-cosine-sine-block-decomposition]]).

[F2] A block unitary $U_0\oplus U_1$ factors exactly as
$(I\otimes V)(D\oplus D^*)(I\otimes W)$ for unitaries $V,W$ and a diagonal
unitary $D$ ([[lem-qc-two-unitary-block-demultiplexing]]). Its proof writes
$U_0U_1^*=VD^2V^*$ with $D$ a diagonal coordinate matrix; the eigenbasis
change is carried by $V$.

[F3] The local Gray-code result exactly synthesizes finite multiplexors of
$R_y$ and $R_z$ rotations with CNOTs, without ancillas, retaining their
matrix phase conventions ([[lem-qc-r-y-r-z-multiplexor-gray-code]]).

[F4] Every two-qubit unitary has an exact no-ancilla circuit using arbitrary
one-qubit gates and at most three CNOTs
([[thm-qc-two-qubit-unitary-three-cnot-synthesis]]).

[F5] Every unit-modulus complex number has a real argument, so each diagonal
entry $d$ of a diagonal unitary can be written $d=e^{i\eta}$ for a real
$\eta$ ([[thm-polar-form-with-unique-principal-argument]]).

[F6] A finite circuit is a finite ordered list of gates on the specified
ordered wires, and its denotation is the exact chronological matrix product
([[def-qc-circuit-syntax-and-register-order]],
[[def-qc-circuit-denotational-semantics]],
[[def-qc-cnot-and-control-target-order]],
[[def-qc-tensor-register-and-permutation]],
[[lem-qc-local-gate-wire-embedding]]).

## Proof


1.1 For $n=1$, use the single gate $U$ itself. For $n=2$, [F4] gives an exact circuit with at most three CNOTs and no ancillas. For $n=0$, the only unitary channel on $\mathbb C$ is the identity, represented by the empty circuit. These establish the base cases. [given, F4, F6, base, cases]

1.2 Let $n\ge3$ and split the ordered register into its first wire and the remaining $n-1$ wires. Apply [F1] to write $$U=L\,W\,R,$$ where $L=L_0\oplus L_1$ and $R=R_0\oplus R_1$ are block-diagonal unitaries on that split and $$W=\begin{pmatrix}C&-S\\S&C\end{pmatrix}.$$ For each computational word $x$ of the lower register, let $c_x,s_x$ be the corresponding diagonal entries of $C,S$. Since $c_x,s_x\ge0$ and $c_x^2+s_x^2=1$, the unit complex number $c_x+is_x$ has modulus one; by [F5] write it as $e^{i\eta_x}$ and put $\theta_x=2\eta_x$. Its real and imaginary parts show $c_x=\cos(\theta_x/2)$ and $s_x=\sin(\theta_x/2)$, so $W$ is a multiplexed $R_y$ rotation on the first wire, controlled by the lower word $x$. [F1, F5, algebra, construct]

1.3 Apply [F2] separately to $L_0\oplus L_1$ and $R_0\oplus R_1$. Each side factor becomes two unitaries on the lower $n-1$ wires, with one intervening $D\oplus D^*$ factor. In the ordered computational coordinates of the lower register, write the diagonal entries of each factor as $d_x=e^{i\eta_x}$; the eigenbasis change is in the outer $V,W$ factors by [F2]. The two-dimensional block on the first wire at lower word $x$ is $\operatorname{diag}(d_x,d_x^*)=R_z(-2\eta_x)$. Thus each intervening factor is a multiplexed $R_z$ rotation controlled by the lower register. The two such factors and the central $R_y$ factor have finite exact circuits by [F3]; the wire permutation that places the first wire as target is only a relabeling of the specified ordered local gate embeddings in [F6], so no extra wire or approximation is introduced. [F2, F3, F5, F6, algebra]

2.1 By induction, each of the four lower-register unitaries from step 1.3 has a finite exact circuit with no ancillas on its $n-1$ wires. Place those circuits in the product order of [F6] together with the three multiplexor circuits from step 1.3. The resulting finite $n$-wire circuit denotes $LWR=U$ exactly; all recursive factors act on existing wires, so no ancilla is added. Since every construction uses finitely many exact gate matrices, the union of the finitely many recursive gate alphabets and the three multiplexor constructs is finite, so it is an instance-specific gate alphabet. [step 1.2, step 1.3, F6, induction, algebra, discharge-induction] ∎

