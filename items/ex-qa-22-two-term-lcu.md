---
id: ex-qa-22-two-term-lcu
kind: example
title: Two-term LCU normalization and access count
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
deps:
  - alg-qa-22-lcu-block-encoding
  - thm-qa-22-lcu-block-encoding-correctness
  - thm-qa-22-block-encoding-error-and-query-cost
  - def-real-and-complex-inner-product-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 52
      url: https://arxiv.org/pdf/1806.01838
---

## Example

Take $A_0=\operatorname{diag}(1,0)$, $A_1=\operatorname{diag}(0,1)$, $\alpha_0=1$, $\alpha_1=2$, and coefficients $\beta_0=1$, $\beta_1=i$. Use the exact one-ancilla block encodings constructed below. The example computes the LCU normalization, coefficient amplitudes, projected block, and charged access calls.

## Facts & Assumptions

**Given:** The finite matrices and scalar values in the Example section, and the procedure and cost convention of [[alg-qa-22-lcu-block-encoding]] and [[thm-qa-22-block-encoding-error-and-query-cost]].

[F1] [[alg-qa-22-lcu-block-encoding]]: the coefficient weights are $|\beta_j|\alpha_j/\Lambda$ and SELECT applies phase $\beta_j/|\beta_j|$ in branch $j$.

[F2] [[thm-qa-22-lcu-block-encoding-correctness]]: the all-zero block is $\sum_j\beta_jA_j/\Lambda$.

[F3] [[thm-qa-22-block-encoding-error-and-query-cost]]: one LCU use invokes PREPARE, SELECT, and PREPARE$^{\dagger}$ once each, with all primitive and synthesis costs kept explicit.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum norm on unit vectors.

[F5] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F6] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary is an invertible linear isometry.

## Verification

1.1 The coordinate formulas give $\|A_0\|_{\rm op}=\|A_1\|_{\rm op}=1$, so the chosen $\alpha_j$ satisfy the normalization promises. For a positive diagonal contraction $C$, put $S:=\sqrt{I-C^2}$ and $D(C):=\begin{pmatrix}C&S\\S&-C\end{pmatrix}$. Since $C$ and $S$ are commuting self-adjoint diagonal matrices and $C^2+S^2=I$, direct block multiplication gives $D(C)^*=D(C)$ and $D(C)^2=I$, hence $D(C)^*D(C)=I$. The adjoint identity [F5] shows $\|D(C)x\|^2=\langle x,D(C)^*D(C)x\rangle=\|x\|^2$, and $D(C)^2=I$ makes it invertible, so [F6] makes it unitary. Its top-left block is $C$. Thus $D(A_0/\alpha_0)$ and $D(A_1/\alpha_1)$ are exact unitary block encodings with one component ancilla each. [given, F4, F5, F6, construct, algebra]

1.2 Here $\Lambda=|1|\cdot1+|i|\cdot2=3$, so $|\chi\rangle=\sqrt{1/3}|0\rangle+\sqrt{2/3}|1\rangle$. By [F1] and [F2], the projected block is $\frac13A_0+\frac{2}{3}i(A_1/2)=(A_0+iA_1)/3=\operatorname{diag}(1/3,i/3)$; the normalization is $3$ and the error is zero. [F1, F2, algebra]

2.1 With PREPARE, SELECT, and PREPARE$^{\dagger}$ separately supplied, the construction uses one call to each. If SELECT is assembled from component calls, its declaration must include one controlled call for each component branch and the relative phase operation; if those circuits are compiled from matrices, their data access and gate costs are added separately. [F3, given, algebra] ∎
