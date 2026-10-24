---
id: lem-qc-acceptance-probability-phase-invariance
kind: lemma
title: "Acceptance is invariant under an unconditional global phase"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qc-quantum-acceptance-probability
  - def-promise-problem
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-clifford-t-gate-library
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections III.2 and IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For a finite promise computation, replacing its entire unconditional circuit unitary $U_C$ by $\lambda U_C$, where $\lambda\in\mathbb C$ and $|\lambda|=1$, leaves every output probability $p_C(z\mid x)$ and hence $p_C(x)$ unchanged. A scalar inserted only in the target block of a controlled operation need not preserve acceptance: there is an explicit two-qubit finite-circuit witness below.

## Facts & Assumptions

**Given:** The finite-dimensional circuit and output law of [[def-qc-quantum-acceptance-probability]], a scalar $\lambda\in\mathbb C$ with $|\lambda|=1$, and the control-first tensor order.

[F1] [[def-qc-quantum-acceptance-probability]]: each output weight is a finite sum of squared moduli of root-inner-product coordinates of the prepared output vector.

[F2] [[def-qc-clifford-t-gate-library]]: $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $T=\operatorname{diag}(1,e^{i\pi/4})$, and $T^4=Z=\operatorname{diag}(1,-1)$ in the fixed finite gate library.

[F3] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: $|0\rangle,|1\rangle$ are the orthonormal basis of the one-qubit register, and the two-qubit input $|00\rangle$ is a unit vector.

[F4] [[def-qc-tensor-register-and-permutation]]: tensor factors retain their displayed order, and the associated product basis is ordered lexicographically by its factor-index tuple.

[F5] [[def-promise-problem]]: a promise problem is a pair of disjoint subsets of $\{0,1\}^*$, with no answer condition off their union.

[A1] [[def-qc-circuit-syntax-and-register-order]] fixes the ordered wire tuple of each gate. [[def-qc-circuit-denotational-semantics]] embeds the local matrix on those factors with identity on the complement and composes gates chronologically with later matrices on the left.

## Proof


1.1 Let $\psi_x=U_C(|x\rangle\otimes|0^{a(n)}\rangle)$. Replacing the entire unconditional unitary $U_C$ by $\lambda U_C$ replaces $\psi_x$ by $\lambda\psi_x$. Since the root pairing is linear in its first argument, every coordinate $\langle P_O\psi_x,e_{z,w}\rangle_{\rm root}$ is multiplied by $\lambda$. Its squared modulus is unchanged because $|\lambda|^2=1$. [given, F1, algebra]

1.2 On a control-first pair of qubits, define $C(U)=\begin{pmatrix}I&0\\0&U\end{pmatrix}$. For target $U=I_2$ and phase $\lambda=-1$, $C(U)=I_4$ while $C(\lambda U)=\operatorname{diag}(I_2,-I_2)=Z\otimes I_2$. By [F2], this second matrix is implemented by applying $T$ four times to the control wire. On input $|00\rangle$, apply $H$ to the control, then respectively $C(I_2)$ or $C(-I_2)$, then $H$ to the control again. The first gate list maps $|00\rangle$ to $|00\rangle$ because $H^2=I_2$; the second maps it to $|10\rangle$ because direct matrix multiplication gives $HZH=X$ and $X|0\rangle=|1\rangle$. Each list uses only the fixed finite gates and the second is an explicit circuit realizing the target phase inside the control block. [given, F2, F3, F4, A1, algebra]

2.1 The finite sums over $w$ and then over the accepting strings $z$ are therefore unchanged term by term. Thus both $p_C(z\mid x)$ and $p_C(x)$ are unchanged under an unconditional global phase. [step 1.1, F1, algebra]

3.1 Use these as the length-two circuits in two finite families, taking gate-free circuits with empty output tuples at other lengths. Let the promise pair be $Y=\{00\}$ and $N=\varnothing$, and let the total predicate accept exactly when $n=2$, $x=00$, and the measured control bit is $0$. Designate wire $0$ as the length-two output. The two families differ only by whether the target block is $I_2$ or $-I_2$. By [F1], the first has acceptance probability $1$ and the second has acceptance probability $0$, since their length-two outputs are the distinct basis vectors $|00\rangle$ and $|10\rangle$. Thus a phase applied only inside a controlled target block can change acceptance, even though the same scalar on an entire unitary leaves acceptance invariant. [step 1.2, F1, F5, algebra] ∎

