---
id: ex-it-dmc-one-shot-error-bound
kind: example
title: Exact evaluation of a one-use BSC dependence-testing bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [thm-it-one-shot-decision-threshold-achievability, def-discrete-memoryless-channel]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the example has two input and two output symbols.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_obligations:
  - Compute the information density on both positive-probability BSC events.
  - Evaluate the positive-part threshold expression exactly, including the tie convention.
sources:
  references:
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: "Theorem 17, PDF pp. 15–16; dependence-testing expression."
---

## Statement

For a one-use BSC with crossover $p=0.1$, uniform input, and $M=2$, the dependence-testing upper bound on achievable average error is exactly $0.35$.

## Facts & Assumptions

**Given:** The BSC transition probabilities $W(y\mid x)=0.9$ for $y=x$ and $0.1$ for $y\ne x$, uniform input, and $M=2$.

[F1] [[thm-it-one-shot-decision-threshold-achievability]]: a deterministic code exists whose average error is at most $\mathbb E\exp(-[\imath(X;Y)-\ln((M-1)/2)]_+)$.

[F2] [[def-discrete-memoryless-channel]]: a BSC row is a probability vector, and its output law under an input vector is the matrix product $PW$.

## Proof
1.1 Under the uniform input, the output is uniform. Therefore $\imath(X;Y)=\ln(0.9/0.5)=\ln1.8$ with probability $0.9$ and $\imath(X;Y)=\ln(0.1/0.5)=\ln0.2$ with probability $0.1$. [F2, given, algebra]

2.1 The threshold is $\ln((M-1)/2)=\ln(1/2)$. On the correct-output event, the integrand is $\exp[-(\ln1.8-\ln(1/2))]=1/3.6=5/18$, contributing $0.9(5/18)=1/4$. On the crossover event, $\ln0.2<\ln(1/2)$, so the positive part is zero and the integrand is one, contributing $0.1$. Thus the expectation is $1/4+1/10=7/20=0.35$, and [F1] supplies a code with average error at most this value. [F1, step 1.1, cases, algebra] ∎
