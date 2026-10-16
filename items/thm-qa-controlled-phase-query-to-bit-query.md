---
id: thm-qa-controlled-phase-query-to-bit-query
kind: theorem
title: "Controlled phase access implements a standard bit query"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-standard-bit-query
  - def-qa-phase-query
  - def-qc-controlled-unitary-access
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-elementary-circuit-resources
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - def-qa-nonoracle-gate-cost
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §2.4, PDF pp. 25–33 and the controlled-phase query exercise in Chapter 2: query conversion under controlled access."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 21, §21.2, PDF pp. 105–106: oracle conventions; the reverse conversion is proved locally."
---

## Statement

Let $f:\{0,1\}^{a}\to\{0,1\}$ be total. Assume the operation model explicitly supplies the controlled phase call
$$
C(P_f)=\begin{pmatrix}I&0\\0&P_f\end{pmatrix}
$$
with the output qubit as the first, control register. On address $|x\rangle$ and output $|y\rangle$, apply $H$ to the output, make one controlled phase call, and apply $H$ again. The result is $|x\rangle|y\oplus f(x)\rangle$, so this implements one standard query with one controlled phase call and two nonoracle $H$ gates. Bare uncontrolled $P_f$ access does not satisfy the stated access hypothesis.

## Facts & Assumptions

**Given:** A Boolean function and explicit controlled access to $P_f$, with control-first register order. The operation model's declared finite nonoracle gate alphabet contains and permits $H$ as a callable gate, counting each occurrence once; the controlled phase-query call is an oracle operation charged separately from those gates.

[F1] [[def-qa-phase-query]]: $P_f|x\rangle=(-1)^{f(x)}|x\rangle$.

[F2] [[def-qa-standard-bit-query]]: the standard query maps $|x\rangle|y\rangle$ to $|x\rangle|y\oplus f(x)\rangle$.

[F3] [[def-qc-controlled-unitary-access]]: controlled access is the explicit block operation $\operatorname{diag}(I,U)$; it is not inferred from an ordinary call.

[F4] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

[F5] [[def-qc-elementary-circuit-resources]]: each gate occurrence is counted once in the declared gate model.

[F6] [[def-qa-nonoracle-gate-cost]]: gates outside a designated query call are charged separately from that query.

[F7] [[def-qc-register-and-computational-basis]], [[thm-qc-computational-basis-orthonormal]] and [[lem-qc-tensor-product-basis-and-dimension]]: the ordered address-output computational states form a complete basis of the joint register.

## Proof

1.1 Fix $x$. By [F1] and [F3], the controlled phase call acts on the output qubit by $\operatorname{diag}(1,(-1)^{f(x)})$. If $f(x)=0$, this is $I$; if $f(x)=1$, it is $\operatorname{diag}(1,-1)$. [given, F1, F3]

2.1 The two possible output operators after the surrounding Hadamards are $H I H=I$ and $H\operatorname{diag}(1,-1)H=\begin{pmatrix}0&1\\1&0\end{pmatrix}=X$, using the matrix in [F4]. Thus for both $y=0$ and $y=1$ the output bit becomes $y\oplus f(x)$, while $x$ is unchanged. By [F7], these computational states form a basis, so the equality extends by linearity to every input superposition, which is exactly [F2]. [step 1.1, F2, F4, F7, algebra]

3.1 The circuit uses the explicitly granted controlled phase call once and has two $H$ occurrences. By [F5]–[F6] these are two separately charged nonoracle gates; no uncontrolled call is promoted to controlled access. [given, F3, F5, F6] ∎
