---
id: def-qa-standard-bit-query
kind: definition
title: "Standard bit-flip query convention"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
proof_strategy: direct
deps:
  - def-qa-promise-query-instance
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-dirac-notation-conversion
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.4, PDF pp. 25–33: reversible function queries and the query convention."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §§1.1–1.7, PDF pp. 9–12; Chapter 21, §§21.1–21.2, PDF pp. 105–106: reversible computation and XOR oracle."
---

## Definition

Let $a,b\ge 0$ and let $f:\{0,1\}^{a}\to\{0,1\}^{b}$ be a total function. The **standard bit-flip query** for $f$ is the coherent XOR action
$$
U_f|x\rangle|y\rangle=|x\rangle|y\oplus f(x)\rangle
$$
on the ordered $a$-bit address register followed by the ordered $b$-bit target register. Here $\oplus$ is componentwise addition modulo two, and words label the ordered computational basis as in [[def-qc-register-and-computational-basis]] and [[def-qc-ordered-bitstring-encoding]]. The address is unchanged. One invocation is one query under [[def-qa-promise-query-instance]]; its query cost is separate from elementary gate cost.

The map is an involution and is unitary by [[thm-qc-reversible-xor-oracle-unitary]]. No injectivity of $f$ is assumed.

## Facts & Assumptions

**Given:** A total Boolean function $f$ on finite ordered address and target registers, with the XOR action above.

[F1] [[thm-qc-reversible-xor-oracle-unitary]]: every total Boolean XOR oracle is unitary and its square is the identity, without an injectivity hypothesis.

## Verification

1.1 On each computational-basis input $|x\rangle|y\rangle$, the defined action leaves $x$ fixed and changes $y$ to $y\oplus f(x)$. Applying it twice changes the target to $(y\oplus f(x))\oplus f(x)=y$, since each bit toggled twice returns to its original value. Hence the action is involutive on every basis vector. [given, algebra]

2.1 The displayed action is exactly the total Boolean XOR oracle in [F1], so [F1] gives its unitarity. Because the action retains each address $x$ and only translates its target by $f(x)$, it does not require distinct addresses to have distinct function values; no injectivity assumption is needed. [given, F1, step 1.1, algebra] ∎
