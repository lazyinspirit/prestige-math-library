---
id: thm-qa-deutsch-query-correct
kind: theorem
title: Deutsch algorithm is exact
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-deutsch-query
  - def-qa-deutsch-promise
  - def-qa-finite-branch-output-law
  - def-qa-nonoracle-gate-cost
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
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

For either promised one-bit function $f$, the final measurement of [[alg-qa-deutsch-query]] outputs $0$ with probability one when $f$ is constant and $1$ with probability one when $f$ is balanced. In the algorithm's declared exact $X,H$ gate model, it uses exactly one oracle query and one $X$ and three $H$ gates, totaling four one-qubit gates. The terminal measurement is a separate resource.

## Facts & Assumptions

**Given:** A total Boolean function on one address bit satisfying the Deutsch promise.

[F1] [[alg-qa-deutsch-query]]: the circuit prepares $|+\rangle_A| -\rangle_T$, invokes $U_f$ once, then applies $H$ to $A$ and measures $A$.

[F2] [[def-qa-deutsch-promise]]: constant means $f(0)=f(1)$ and balanced means $f(0)\ne f(1)$.

[F3] [[thm-qa-bit-query-to-phase-query]]: with a one-bit target $| -\rangle$, the XOR query applies phase $(-1)^{f(x)}$ to each address basis state and leaves the target unchanged.

[F4] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $H|1\rangle=(|0\rangle-|1\rangle)/\sqrt2$.

[F5] [[def-qa-finite-branch-output-law]]: at the terminal measured leaf, output weights are the sums of the diagonal state weights over unmeasured basis strings and form a normalized finite probability law.

[F6] [[thm-qc-unit-vector-projector-is-density]]: if $u$ is a unit vector, $|u\rangle\langle u|$ is a density operator, with root pairing linear in the first argument.

[F7] [[def-qc-tensor-register-and-permutation]]: the product basis retains the address-then-target order and its inner product is the product of factor inner products.

[F8] [[def-qa-nonoracle-gate-cost]]: each declared nonoracle gate occurrence, including preparation, is counted once; oracle calls and terminal measurement are separate resources under the algorithm's gate model.

## Proof

1.1 By [F1], the address is initially $|+\rangle=2^{-1/2}\sum_{x\in\{0,1\}}|x\rangle$ and the target is $| -\rangle$. By [F3], after the query and final address Hadamard, the output amplitude at $y\in\{0,1\}$ is $\alpha_y=\frac12\sum_{x\in\{0,1\}}(-1)^{f(x)+xy}.$ The target remains the same unit vector [F3]. [given, F1, F3, F4, algebra]

2.1 For $y=0$, $\alpha_0=\bigl((-1)^{f(0)}+(-1)^{f(1)}\bigr)/2$; for $y=1$, $\alpha_1=\bigl((-1)^{f(0)}-(-1)^{f(1)}\bigr)/2$. If $f(0)=f(1)$, these are respectively $\pm1$ and $0$; if they differ, they are $0$ and $\pm1$, by [F2]. [given, F2, step 1.1, algebra]

3.1 In each case the address amplitudes have squared moduli $1$ at the correct output and $0$ at the other. Since the terminal state is the product of that address vector and the unit target $| -\rangle$, [F5] and [F7] sum the target's two squared coordinate moduli to one and give exactly the same address output law. Thus the measured output is correct with probability one. [F3, F5, F6, F7, step 2.1, algebra]

4.1 The procedure [F1] contains one oracle invocation. Its target preparation has one $X$ and one $H$, and its address has $1$ Hadamard gates before and $1$ after the query. Thus [F8] gives exactly one query and one $X$ and three $H$ gates, totaling four one-qubit gates; the terminal measurement is counted separately. [F1, F8, algebra] ∎
