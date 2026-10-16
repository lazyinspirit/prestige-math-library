---
id: thm-qa-phase-kickback
kind: theorem
title: "Phase kickback from the standard bit query"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-standard-bit-query
  - def-qa-phase-query
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-pure-state-and-ray
  - def-qc-dirac-notation-conversion
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
      locator: "Chapter 2, §2.4, PDF pp. 25–33: preparing the target in |−⟩ and obtaining the phase query."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp. 7–8: bit-flip oracle and phase kickback."
---

## Statement

Let $f:\{0,1\}^{a}\to\{0,1\}$ be a total Boolean function. If the one-bit target of its standard query is prepared in
$$
|-\rangle:=\frac{|0\rangle-|1\rangle}{\sqrt2},
$$
then one standard query acts on every address basis vector by
$$
U_f(|x\rangle|-\rangle)=(-1)^{f(x)}|x\rangle|-\rangle.
$$
Thus the address acquires exactly the phase query $P_f$, while the target returns unchanged. The same identity holds for every address superposition.

## Facts & Assumptions

**Given:** The total Boolean function, the standard XOR query, and the normalized target vector $|-\rangle$.

[F1] [[def-qa-standard-bit-query]]: $U_f|x\rangle|y\rangle=|x\rangle|y\oplus f(x)\rangle$.

[F2] [[def-qa-phase-query]]: $P_f|x\rangle=(-1)^{f(x)}|x\rangle$, extended linearly.

[F3] [[def-qc-pure-state-and-ray]]: a normalized nonzero vector represents a pure state; the displayed unit vector is an allowed target state.

[F4] [[def-qc-register-and-computational-basis]], [[thm-qc-computational-basis-orthonormal]] and [[lem-qc-tensor-product-basis-and-dimension]]: the ordered computational-basis vectors span each finite address register, including the zero-qubit register.

[F5] [[def-qc-dirac-notation-conversion]]: ket notation denotes the corresponding vectors with the repository's stated inner-product convention.

## Proof

1.1 If $f(x)=0$, the query leaves the target bits unchanged, so it fixes $|x\rangle|-\rangle$. If $f(x)=1$, it swaps the target basis vectors and sends $(|0\rangle-|1\rangle)/\sqrt2$ to $(|1\rangle-|0\rangle)/\sqrt2=-|-\rangle$. Therefore in both cases the target returns unchanged and the scalar is $(-1)^{f(x)}$. [given, F1, F3, algebra]

2.1 By [F2], the address factor in step 1.1 is exactly $P_f|x\rangle$. Any address vector is a finite linear combination $\sum_x\alpha_x|x\rangle$ by [F4]; linearity of $U_f$ gives $\sum_x\alpha_x(-1)^{f(x)}|x\rangle|-\rangle=(P_f\sum_x\alpha_x|x\rangle)\otimes|-\rangle$. Hence the target is unchanged and the identity holds on every superposition. [step 1.1, F2, F4, F5, algebra] ∎
