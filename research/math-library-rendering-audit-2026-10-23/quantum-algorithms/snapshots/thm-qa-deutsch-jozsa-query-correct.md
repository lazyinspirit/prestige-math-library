---
id: thm-qa-deutsch-jozsa-query-correct
kind: theorem
title: Deutsch–Jozsa algorithm is exact
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-deutsch-jozsa-query
  - def-qa-deutsch-jozsa-promise
  - def-qa-finite-branch-output-law
  - def-qa-nonoracle-gate-cost
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

For every $n\ge1$ and every function satisfying the Deutsch–Jozsa promise, [[alg-qa-deutsch-jozsa-query]] outputs constant with probability one on constant inputs and balanced with probability one on balanced inputs. In the algorithm's declared exact $X,H$ gate model, it uses exactly one oracle query and one $X$ and $2n+1$ $H$ gates, totaling $2n+2$ one-qubit gates. The terminal measurement is a separate resource.

## Facts & Assumptions

**Given:** $n\ge1$, $N=2^n$, and a total Boolean function $f:\{0,1\}^n\to\{0,1\}$ that is constant or exactly balanced.

[F1] [[alg-qa-deutsch-jozsa-query]]: prepare $|+\rangle^{\otimes n}| -\rangle$, query once, apply $H^{\otimes n}$ to the address, and output constant exactly at measured address $0^n$.

[F2] [[def-qa-deutsch-jozsa-promise]]: constant functions have one value everywhere; balanced functions have $N/2$ zeros and $N/2$ ones.

[F3] [[thm-qa-bit-query-to-phase-query]]: the target $| -\rangle$ stays unchanged and the address acquires phase $(-1)^{f(x)}$ after one XOR query.

[F4] [[lem-qa-hadamard-f2-kernel]]: $H^{\otimes n}|x\rangle=2^{-n/2}\sum_y(-1)^{x\cdot y}|y\rangle$, and the sum $\sum_x(-1)^{x\cdot z}$ is $2^n$ for $z=0^n$ and $0$ otherwise.

[F5] [[def-qa-finite-branch-output-law]]: the terminal address measurement has nonnegative output weights summing to one, with each weight obtained by summing diagonal state weights over the remaining target register.

[F6] [[thm-qc-unit-vector-projector-is-density]]: a unit vector's rank-one projector is a density operator.

[F7] [[def-qc-tensor-register-and-permutation]]: ordered product basis vectors use the product inner product and retain the displayed register order.

[F8] [[def-qa-nonoracle-gate-cost]]: each declared nonoracle gate occurrence, including preparation, is counted once; oracle calls and terminal measurement are separate resources under the algorithm's gate model.

## Proof

1.1 By [F1] and [F3], after the oracle and final Hadamards the amplitude at address $y$ is $\alpha_y=2^{-n}\sum_{x\in\{0,1\}^n}(-1)^{f(x)+x\cdot y}.$ For constant $f(x)=c$, factor out $(-1)^c$ and apply [F4] with $z=y$: $\alpha_y=(-1)^c$ if $y=0^n$ and $0$ otherwise. [given, F1, F3, F4, algebra]

2.1 For balanced $f$, [F2] gives equally many $+1$ and $-1$ terms in $\alpha_{0^n}$, so $\alpha_{0^n}=0$. For every $y$, the terminal output weight is $|\alpha_y|^2$ after summing the target coordinates: the state is $\sum_y\alpha_y|y\rangle\otimes| -\rangle$, the target has squared coordinate moduli $1/2,1/2$ by [F3]. Its unit-vector projector is a density operator by [F6], and [F5] and [F7] give the stated marginal. Thus the constant case outputs $0^n$ surely, while in the balanced case the probability of $0^n$ is zero. [given, F2, F3, F5, F6, F7, step 1.1, algebra]

3.1 The output weights sum to one by [F5]. Hence, when $f$ is balanced, all output probability is on strings other than $0^n$, which the output rule of [F1] labels balanced; in the constant case step 1.1 places all probability at $0^n$. [F1, F5, step 1.1, step 2.1, algebra]

4.1 The procedure [F1] contains one oracle invocation. Its target preparation has one $X$ and one $H$, and its address has $n$ Hadamard gates before and $n$ after the query. Thus [F8] gives exactly one query and one $X$ and $2n+1$ $H$ gates, totaling $2n+2$ one-qubit gates; the terminal measurement is counted separately. [F1, F8, algebra] ∎
