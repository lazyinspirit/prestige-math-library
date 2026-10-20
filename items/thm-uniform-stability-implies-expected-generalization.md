---
id: thm-uniform-stability-implies-expected-generalization
kind: theorem
title: Uniform stability implies expected generalization
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-uniform-stability
  - lem-iid-sample-plus-ghost-point-are-exchangeable
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-identically-distributed-and-iid-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-integral-triangle-inequality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, Theorem 2.2 and proof"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§2.2, Theorem 2.2 and complete coordinate-replacement proof"
    - title: "Nikolai Matni, ESE680 Lecture 16: Algorithmic Stability and Stochastic Gradient Descent, Theorem 2 and proof"
      url: "https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf"
      locator: "§3.1, PDF pp. 3–4"
---

## Statement

Let $n\ge1$ and consider a supervised prediction problem with measurable observation space $\mathsf Z=\mathsf X\times\mathsf Y$, probability law $P$, measurable predictor class $\mathcal F$, and nonnegative measurable loss $\ell$. For $f\in\mathcal F$ and $z=(x,y)$, write $L_f(z)=\ell(f(x),y)$, $R_P(f)=\int L_f(z)\,P(dz)$, and, for $S=(Z_1,\ldots,Z_n)$, $\widehat R_S(f)=n^{-1}\sum_{i=1}^nL_f(Z_i)$. Let $Z_1,\ldots,Z_n$ be IID with law $P$, and let $U_n$ be internal randomness independent of the sample. Suppose the randomized learning rule $A_n(S,U_n)$ takes values in $\mathcal F$, the joint loss map $(S,U_n,z)\mapsto L_{A_n(S,U_n)}(z)$ is measurable, and all displayed risks are integrable. If $A_n$ has uniform replacement stability at level $\varepsilon$, then

$$\left|\mathbb E_{S,U_n}\left[R_P(A_n(S,U_n))-\widehat R_S(A_n(S,U_n))\right]\right|\le\varepsilon.$$

The expectation is over both the IID sample and the algorithm's internal randomness. No permutation-invariance assumption on $A_n$ is required.

## Statement references

Hardt, Recht, and Singer, Theorem 2.2 and proof: [full arXiv paper](https://arxiv.org/pdf/1509.01240).

Matni, Lecture 16, Theorem 2 and proof: [full lecture notes](https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf).

## Facts & Assumptions

**Given:** The supervised prediction problem, IID sample, independent algorithmic randomness, measurable and integrable loss maps, and uniform replacement stability in the Statement.

[F1] [[def-supervised-learning-problem]]: the joint observation law is a probability measure and the loss is nonnegative and measurable.

[F2] [[def-population-and-empirical-risk]]: population risk is the nonnegative integral of test loss and empirical risk is its finite sample average.

[F3] [[def-identically-distributed-and-iid-random-variables]]: the observations are mutually independent and have common law $P$.

[F4] [[lem-iid-sample-plus-ghost-point-are-exchangeable]]: if $Z_*$ is an independent observation with law $P$, then $(S,Z_*)$ and $(S^{(i)},Z_i)$ have the same law for each $i$, where $S^{(i)}$ replaces coordinate $i$ by $Z_*$.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: for the integrable joint loss map, its product integral equals either iterated integral, including integration over the independent algorithm seed and test observation.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral of a finite sum of integrable functions is the sum of their integrals.

[F7] [[thm-integral-triangle-inequality]]: the absolute value of an integral is at most the integral of the absolute value.

[F8] [[def-uniform-stability]]: for every fixed adjacent pair of ordered samples and test observation, the difference of their expected losses over $U_n$ has absolute value at most $\varepsilon$.

[A1] The joint loss map is measurable and integrable, as required in the Statement, so Fubini and every displayed expectation are defined.

## Proof

1.1 Extend the sample by an independent ghost observation $Z_*\sim P$. By [F1], [F2], and [F5], $\mathbb E_{S,U_n}R_P(A_n(S,U_n))=\mathbb E_{S,U_n,Z_*}L_{A_n(S,U_n)}(Z_*)$. For each $i$, [F4] and independence of $U_n$ imply $\mathbb E_{S,U_n,Z_*}L_{A_n(S,U_n)}(Z_*)=\mathbb E_{S,U_n,Z_*}L_{A_n(S^{(i)},U_n)}(Z_i)$. [A1, F1, F2, F3, F4, F5, given, construct]

2.1 By [F2] and [F6], subtracting the expected empirical risk and averaging the equalities in step 1.1 gives $\mathbb E_{S,U_n}\left[R_P(A_n(S,U_n))-\widehat R_S(A_n(S,U_n))\right]=\frac1n\sum_{i=1}^n\mathbb E_{S,U_n,Z_*}\left[L_{A_n(S^{(i)},U_n)}(Z_i)-L_{A_n(S,U_n)}(Z_i)\right].$ For every fixed $S,Z_*$, the samples $S^{(i)}$ and $S$ differ in one coordinate, so [F8] bounds the absolute value of the inner expectation over $U_n$ by $\varepsilon$. Applying [F7] to the outer expectations and then averaging gives the claimed absolute bound. [A1, F2, F6, F7, F8, step 1.1, given, algebra] ∎
