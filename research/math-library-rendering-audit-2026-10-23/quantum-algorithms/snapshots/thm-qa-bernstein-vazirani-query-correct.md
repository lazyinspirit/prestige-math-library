---
id: thm-qa-bernstein-vazirani-query-correct
kind: theorem
title: Bernstein–Vazirani algorithm returns the secret exactly
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-bernstein-vazirani-query
  - def-qa-bernstein-vazirani-promise
  - def-qa-binary-dot-product
  - def-qa-finite-branch-output-law
  - def-qa-nonoracle-gate-cost
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - lem-qa-hadamard-f2-kernel
  - thm-qa-bit-query-to-phase-query
  - thm-qc-computational-basis-orthonormal
  - thm-qc-unit-vector-projector-is-density
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Statement

For every $n\ge1$ and every no-offset Bernstein–Vazirani function $f_a(x)=a\cdot x$, [[alg-qa-bernstein-vazirani-query]] outputs the secret $a$ with probability one. In the algorithm's declared exact $X,H$ gate model, it uses exactly one oracle query and one $X$ and $2n+1$ $H$ gates, totaling $2n+2$ one-qubit gates. The terminal measurement is a separate resource.

## Facts & Assumptions

**Given:** $n\ge1$, $a\in\{0,1\}^n$, and the total function $f_a(x)=a\cdot x$.

[F1] [[alg-qa-bernstein-vazirani-query]]: the algorithm prepares $|+\rangle^{\otimes n}| -\rangle$, invokes the standard XOR query once, applies $H^{\otimes n}$ to the address, then measures and outputs it.

[F2] [[def-qa-bernstein-vazirani-promise]] and [[def-qa-binary-dot-product]]: $f_a(x)=a\cdot x$ is the bitwise parity of the products $a_ix_i$, with no additive offset.

[F3] [[thm-qa-bit-query-to-phase-query]]: one query with target $| -\rangle$ maps each address basis state to $(-1)^{f_a(x)}|x\rangle| -\rangle$.

[F4] [[lem-qa-hadamard-f2-kernel]]: for $z\in\{0,1\}^n$, $\sum_x(-1)^{x\cdot z}=2^n$ when $z=0^n$ and $0$ otherwise.

[F5] [[def-qa-finite-branch-output-law]]: terminal output probabilities sum the diagonal state weights over the unmeasured target register and form a normalized finite law.

[F6] [[thm-qc-unit-vector-projector-is-density]]: the rank-one projector of a unit vector is a density operator.

[F7] [[def-qc-tensor-register-and-permutation]]: the address and target product basis retains the declared factor order and product inner product.

[F8] [[def-qa-nonoracle-gate-cost]]: each declared nonoracle gate occurrence, including preparation, is counted once; oracle calls and terminal measurement are separate resources under the algorithm's gate model.

## Proof

1.1 By [F1]–[F3], after phase kickback and the final address Hadamards the amplitude at $y$ is $\alpha_y=2^{-n}\sum_{x\in\{0,1\}^n}(-1)^{a\cdot x+x\cdot y}=2^{-n}\sum_x(-1)^{x\cdot(a\oplus y)},$ where $\oplus$ is coordinatewise addition modulo two; the parity formula in [F2] gives the exponent identity coordinate by coordinate. [given, F1, F2, F3, algebra]

2.1 By [F4], $\alpha_y=1$ for $y=a$ and $0$ for $y\ne a$. The target remains the unit vector $| -\rangle$ by [F3], so [F5]–[F7] give output weight $|\alpha_y|^2$ at each measured address. Therefore the output distribution is concentrated at $a$. [F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 The procedure [F1] contains one oracle invocation. Its target preparation has one $X$ and one $H$, and its address has $n$ Hadamard gates before and $n$ after the query. Thus [F8] gives exactly one query and one $X$ and $2n+1$ $H$ gates, totaling $2n+2$ one-qubit gates; the terminal measurement is counted separately. [F1, F8, algebra] ∎
