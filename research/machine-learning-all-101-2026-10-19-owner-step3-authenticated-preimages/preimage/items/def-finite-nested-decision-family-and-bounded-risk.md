---
id: def-finite-nested-decision-family-and-bounded-risk
kind: definition
title: "Finite nested decision families and bounded risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-random-element-and-real-random-variable
  - def-exchangeable-random-elements
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§1.1, finite-sample risk-control setup in terms of exchangeable nonincreasing random loss functions."
    - title: "Anastasios N. Angelopoulos, Rina Foygel Barber, and Stephen Bates, Theoretical Foundations of Conformal Prediction, prepublication book manuscript"
      url: "https://arxiv.org/pdf/2411.11824"
      locator: "Chapter 2 §§2.1–2.2, finite exchangeability and joint-law invariance under permutations."
verification:
  precheck: n/a
---

## Definition

Let $n,M\ge1$, $B>0$, and $\alpha\in[0,B)$. Fix a deterministic strictly ordered grid $\Lambda=\{\lambda_1<\cdots<\lambda_M\}\subset\mathbb R$ and a probability space $(\Omega,\mathcal F,\mathbb P)$. For $i=1,\ldots,n+1$, let $W_i$ be a random element of $[0,B]^M$ with its Borel sigma-algebra, and write $L_i(\lambda_j)=(W_i)_j$. The rows $W_1,\ldots,W_{n+1}$ are **exchangeable** when their joint law is invariant under every permutation of the $n+1$ row indices. The coordinates $L_i(\lambda_j)$ are the losses of the finite decision family at observation $i$; in a prediction problem they may be obtained by applying each fixed prediction rule to that observation and evaluating a specified loss.

The family is **loss-nested** when, with probability one, $L_i(\lambda_1)\ge\cdots\ge L_i(\lambda_M)$ for every $i$. It is **endpoint-safe at level $\alpha$** when, with probability one, $L_i(\lambda_M)\le\alpha$ for every $i$. For any measurable selector $\hat\lambda$ taking values in $\Lambda$ and determined by the calibration rows $W_1,\ldots,W_n$, its **marginal expected test risk** is $\mathbb E[L_{n+1}(\hat\lambda)]$, with expectation over all $n+1$ rows. This expectation is finite because every loss lies in $[0,B]$. Here “nested” means nonincreasing loss on the specified grid; literal inclusion of prediction sets is not required.

## Definition references

[[def-exchangeable-random-elements]]: exchangeability means invariance of the joint law under every coordinate permutation.

[[def-random-element-and-real-random-variable]]: a random element is a measurable map from a probability space into a measurable space.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of a bounded nonnegative loss is its Lebesgue integral against the probability measure.

[Angelopoulos et al., Conformal Risk Control, §1.1](https://arxiv.org/pdf/2208.02814v4)

[Angelopoulos, Barber, and Bates, Theoretical Foundations of Conformal Prediction, Chapter 2 §§2.1–2.2](https://arxiv.org/pdf/2411.11824)
