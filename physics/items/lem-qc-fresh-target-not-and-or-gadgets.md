---
id: lem-qc-fresh-target-not-and-or-gadgets
kind: lemma
title: "Fresh-target NOT and OR gadgets"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-pauli-matrices
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-denotational-semantics
  - def-qc-toffoli-and-fredkin
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - def-qc-ordered-bitstring-encoding
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2, printed pp.14–19: NOT, CNOT and Toffoli basis actions; the exact gadgets below are checked locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2, printed pp.14–15: X, CNOT, Toffoli, and Boolean gate simulation."
---

## Statement

Let $a,b$ be distinct source wires and let $t$ be a distinct target wire initialized to $0$. The chronological sequence $X(t)$ followed by $\operatorname{CNOT}_{a\to t}$ writes $1\oplus a$ into $t$. The sequence $\operatorname{CNOT}_{a\to t}$, $\operatorname{CNOT}_{b\to t}$, $T(a,b,t)$ writes $a\lor b$ into $t$, since $a\lor b=a\oplus b\oplus ab$. Every source wire is unchanged.

## Facts & Assumptions

**Given:** Distinct source and target wires and the stated Pauli-$X$, CNOT, and Toffoli actions on the ordered computational basis. Verify the target values and preservation of controls.

[F1] [[def-qc-pauli-matrices]]: In the ordered computational basis, $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, which sends $|t\rangle$ to $|t\oplus1\rangle$ by matrix multiplication.

[F2] [[def-qc-cnot-and-control-target-order]]: In the ordered two-qubit basis, $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle$.

[F3] [[def-qc-toffoli-and-fredkin]]: $T|a,b,t\rangle=|a,b,t\oplus ab\rangle$.

[F4] [[def-qc-circuit-denotational-semantics]]: A chronological list of layers $L_1,\ldots,L_d$, with $L_1$ applied first, denotes $U_{L_d}\cdots U_{L_1}$.

[F5] [[lem-qc-x-cnot-toffoli-and-fredkin-are-involutions]]: $X$, CNOT, and Toffoli are unitary gates on their ordered registers.

## Proof

1.1 Starting with $t=0$, $X(t)$ sets it to $1$ and the following CNOT changes it to $1\oplus a$. Both gates target only $t$, so $a$ is unchanged; [F5] supplies their gate unitarity. [given, F1, F2, F4, F5, algebra]

2.1 For the second sequence, the final target is $0\oplus a\oplus b\oplus ab$. For $(a,b)=(0,0),(0,1),(1,0),(1,1)$ these values are $0,1,1,1$, respectively, which are exactly $a\lor b$. The two CNOTs and Toffoli have controls only on $a,b$, so neither source changes; [F5] supplies their gate unitarity. [given, F2, F3, F4, F5, choose, algebra] ∎

