---
id: def-qa-phase-query
kind: definition
title: "Binary phase-query convention"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-promise-query-instance
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-ordered-bitstring-encoding
  - def-qc-dirac-notation-conversion
justified_by: []
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
      locator: "Chapter 2, §§2.1.2–2.4, PDF pp. 25–33: standard and phase queries."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 21, §21.2, PDF pp. 105–106: bit-flip and phase oracle conventions."
---

## Definition

For a Boolean function $f:\{0,1\}^{a}\to\{0,1\}$, the **phase query** is the linear operator on the address register defined on its ordered computational basis by
$$
P_f|x\rangle=(-1)^{f(x)}|x\rangle.
$$
This definition supplies uncontrolled access only. Controlled access to $P_f$ is a separate promise and is not implied by an uncontrolled call.

## Facts & Assumptions

**Given:** A Boolean function $f$ on $\{0,1\}^{a}$ and the ordered computational basis of the $a$-bit address register.

[F1] [[def-qc-register-and-computational-basis]]: the $a$-bit register has the ordered computational basis indexed by $\{0,1\}^{a}$, including the one-dimensional empty register when $a=0$.

[F3] [[def-qa-promise-query-instance]]: a query function is total on the address domain; the promise restricts instances, not addresses.

[F4] [[lem-qc-tensor-product-basis-and-dimension]]: the ordered computational-basis vectors of the address register form an orthonormal basis, including the empty register.

## Verification

1.1 For each basis vector $|x\rangle$, the coefficient $(-1)^{f(x)}$ is either $1$ or $-1$. Therefore $P_f$ maps the ordered basis to scalar multiples of itself and preserves each basis vector's norm. [given, F1, F3, F4, algebra]

2.1 Distinct basis vectors remain orthogonal because their images are scalar multiples of the same distinct basis vectors; the diagonal coefficients have modulus one. By [F4] these vectors form an orthonormal basis, so the linear extension preserves the inner product on a basis and hence on every vector; it is unitary in finite dimension. [step 1.1, F1, F4, algebra]

3.1 Applying $P_f$ twice to $|x\rangle$ gives $(-1)^{2f(x)}|x\rangle=|x\rangle$. The basis spans the register by [F4], so $P_f^2=I$ on the whole register. [given, F1, F4, algebra] ∎
