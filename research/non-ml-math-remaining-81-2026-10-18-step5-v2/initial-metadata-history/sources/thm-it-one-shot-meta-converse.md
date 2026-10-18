---
id: thm-it-one-shot-meta-converse
kind: theorem
title: Finite-DMC hypothesis-testing meta-converse
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-finite-hypothesis-testing-beta, def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-finite-probability-vector]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the test and probability vectors are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - State the null/alternative and acceptance/rejection orientation of beta exactly.
  - Build the test from the code's decoder and verify both its type-I and type-II errors.
  - Permit singular auxiliary output laws without taking likelihood ratios.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.3; the meta-converse and its finite test orientation.
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: "Theorem 27, PDF p. 28; finite-blocklength hypothesis-testing converse."
---

## Statement

Let a finite-DMC code have $M\ge1$ messages and average error $\epsilon$. For any output probability vector $Q_{Y^n}$, let $P_{MY^n}(m,y^n)=M^{-1}W^n(y^n\mid x_m^n)$ be the true joint law and let $\widetilde Q_{MY^n}(m,y^n)=M^{-1}Q_{Y^n}(y^n)$. With the type-II testing function $\beta_\epsilon$ of [[def-finite-hypothesis-testing-beta]], which constrains rejection under its first argument, one has
$$\beta_\epsilon(P_{MY^n},\widetilde Q_{MY^n})\le\frac1M.$$

## Facts & Assumptions

**Given:** A deterministic length-$n$ code with $M$ messages, average error $\epsilon$, and any output probability vector $Q_{Y^n}$.

[F1] [[def-finite-hypothesis-testing-beta]]: $\beta_\epsilon(P,Q)$ is the infimum of $\mathbb E_Q(1-\phi)$ over tests $0\le\phi\le1$ with $\mathbb E_P\phi\le\epsilon$; the first law is the null and the second is the alternative.

[F2] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: the decoder is a deterministic map $d:Y^n\to[M]$, and the average error is the uniform-message error probability.

[F3] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: $W^n(\cdot\mid x_m^n)$ is a probability vector for every codeword.

## Proof

1.1 Define $\phi(m,y^n)=\mathbf1\{d(y^n)\ne m\}$. Under the true law $P_{MY^n}$, $\mathbb E_P\phi=\epsilon$, so $\phi$ is feasible in [F1]. Under $\widetilde Q$, its type-II error is $\mathbb E_{\widetilde Q}(1-\phi)=\frac1M\sum_{m=1}^M\sum_{y^n}Q_{Y^n}(y^n)\mathbf1\{d(y^n)=m\}=\frac1M,$ since for each output exactly one message is decoded. No likelihood ratio is used, so zeros in $Q_{Y^n}$ cause no support problem. [F1, F2, F3, given, algebra]

2.1 The infimum over all feasible tests in [F1] is at most the value of the particular test in step 1.1. This gives the claimed bound for every auxiliary output law, including singular ones. [F1, step 1.1, algebra] ∎
