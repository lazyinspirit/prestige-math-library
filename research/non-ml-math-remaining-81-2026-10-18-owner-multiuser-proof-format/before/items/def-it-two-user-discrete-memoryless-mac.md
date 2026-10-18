---
id: def-it-two-user-discrete-memoryless-mac
kind: definition
title: Two-user discrete memoryless multiple-access channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-finite-stochastic-kernel]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; alphabets and block products are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §15.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Multiple Access Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

A two-user finite discrete memoryless multiple-access channel (DM-MAC) consists of finite nonempty input alphabets $\mathcal X_1,\mathcal X_2$, a finite nonempty output alphabet $\mathcal Y$, and a stochastic kernel $W(y\mid x_1,x_2)$ from $\mathcal X_1\times\mathcal X_2$ to $\mathcal Y$ in the convention of [[def-finite-stochastic-kernel]]. Its length-$n$ conditional law is $W^n(y^n\mid x_1^n,x_2^n)=\prod_{i=1}^nW(y_i\mid x_{1i},x_{2i})$.

## Facts & Assumptions

**Given:** Finite nonempty alphabets and a two-input stochastic kernel.

[F1] [[def-finite-stochastic-kernel]]: a finite stochastic kernel has nonnegative entries and each row sums to one.

## Proof

1.1 For each input pair, $W(\cdot\mid x_1,x_2)$ is a probability vector by [F1]. [given, F1]

1.2 Summing the product law over $\mathcal Y^n$ factors into $n$ row sums, each equal to one; therefore $W^n$ is a stochastic kernel and the block law is well-defined. [given, F1, algebra] ∎
