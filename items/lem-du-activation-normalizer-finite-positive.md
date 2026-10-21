---
id: lem-du-activation-normalizer-finite-positive
kind: lemma
title: "The Gaussian activation normalizer is finite and positive"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-standard-normal-and-normal-laws, lem-gaussian-even-moment-bound-for-brownian-increments, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the standard-normal-law and Gaussian-moment suppliers; the integrability and positivity argument itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Condition 3.1 and equation (2)"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Statement

Assume AC. Let $Z$ have the standard normal law on $\mathbb R$. Suppose $\sigma:\mathbb R\to\mathbb R$ is analytic, nonpolynomial, satisfies $|\sigma(0)|\le B$ for some finite $B$, and is $L$-Lipschitz for a finite $L$. Then $0<\mathbb E[\sigma(Z)^2]<\infty$. Consequently the normalization constant

$$c_\sigma:=\bigl(\mathbb E[\sigma(Z)^2]\bigr)^{-1}$$

is a well-defined positive finite real number.

## Statement references

[Du et al., Condition 3.1 and equation (2)](https://proceedings.mlr.press/v97/du19c.html)

[Feller, Gaussian distribution and finite second moment](https://archive.org/details/introductiontopr0000fell)

## Facts & Assumptions

**Given:** AC, the activation $\sigma$, its constants $B,L$, and a standard normal random variable $Z$.

[A1] AC is assumed by the standard-normal-law and Gaussian-moment suppliers. [[def-axiom-of-choice]]

[F1] The standard normal law has second moment $1$. [[def-standard-normal-and-normal-laws]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

## Proof

**Proof technique:** bound the activation by an affine function of $|Z|$, then use continuity and nonpolynomiality for strict positivity.

1.1 Lipschitz continuity gives $|\sigma(z)|\le B+L|z|$, hence $\sigma(z)^2\le2B^2+2L^2z^2$. By [F1], $\mathbb E\sigma(Z)^2\le2B^2+2L^2<\infty$. [A1, F1, given, algebra]

1.2 A nonpolynomial analytic function is not identically zero, so choose $z_0$ with $\sigma(z_0)\ne0$. Continuity gives an open interval around $z_0$ on which $|\sigma|\ge|\sigma(z_0)|/2$. The standard normal density is strictly positive on that interval, so its integral of $\sigma^2$ is positive. [A1, F1, given, choose]

2.1 The expectation is both finite and strictly positive by steps 1.1 and 1.2, so its reciprocal exists and is positive and finite. [step 1.1, step 1.2, algebra] ∎
