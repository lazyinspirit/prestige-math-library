---
id: def-it-physically-degraded-dm-broadcast-channel
kind: definition
title: Physically degraded two-receiver discrete memoryless broadcast channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-finite-stochastic-kernel]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets and kernels are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §§15.6.1–15.6.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 5, Degraded Broadcast Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

A finite physically degraded two-receiver DM broadcast channel has finite nonempty input/output alphabets $\mathcal X,\mathcal Y_1,\mathcal Y_2$ and kernels $W_1(y_1\mid x)$ and $W_2(y_2\mid y_1)$ such that
$$W(y_1,y_2\mid x)=W_1(y_1\mid x)W_2(y_2\mid y_1).$$
Receiver 1 is called the stronger receiver. This factorization fixes a joint coupling of the outputs and gives the Markov chain $X\to Y_1\to Y_2$ for every input law. No feedback is part of this definition.

## Facts & Assumptions

**Given:** Finite nonempty alphabets and finite stochastic kernels $W_1,W_2$.

[F1] [[def-finite-stochastic-kernel]]: each row of each kernel is a probability vector.

## Proof

1.1 For every $x$, summing $W_1(y_1\mid x)W_2(y_2\mid y_1)$ over $y_1,y_2$ gives $\sum_{y_1}W_1(y_1\mid x)=1$ by [F1], so the displayed joint law is a stochastic kernel. [given, F1, algebra]

2.1 The factorization makes the conditional law of $Y_2$ given $(X,Y_1)$ equal to $W_2(\cdot\mid Y_1)$; hence $X$ and $Y_2$ are conditionally independent given $Y_1$, which is exactly $X\to Y_1\to Y_2$. [given, F1, algebra] ∎

