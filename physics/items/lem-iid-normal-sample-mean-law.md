---
id: lem-iid-normal-sample-mean-law
kind: lemma
title: "The mean of a finite independent normal sample is normal"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - def-independent-random-elements
  - def-characteristic-function-of-a-real-random-variable
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-complex-exponential-addition-and-real-extension
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the normal-law characteristic-function formula and the uniqueness theorem for characteristic functions; the finite product calculation uses no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., §3.3.1–§3.3.2, Example 3.3.5 and Corollary 3.3.13, printed pp. 125–130"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC. Let $n\ge1$, and let $X_1,\ldots,X_n$ be mutually independent real random variables on one probability space, each with law $N(\mu,\sigma^2)$ for a fixed $\mu\in\mathbb R$ and $\sigma\ge0$. Then $\bar X_n=n^{-1}\sum_{i=1}^nX_i$ has law $N(\mu,\sigma^2/n)$. If $\sigma>0$, then for every $\mu_0\in\mathbb R$,
$$\frac{\sqrt n(\bar X_n-\mu_0)}{\sigma}\sim N\!\left(\frac{\sqrt n(\mu-\mu_0)}{\sigma},1\right).$$

## Facts & Assumptions

**Given:** AC, a positive integer $n$, mutually independent $X_1,\ldots,X_n$, and their common normal law $N(\mu,\sigma^2)$ with $\sigma\ge0$.

[A1] The standard normal and its affine normal laws are defined under AC. [[def-axiom-of-choice]] [[def-standard-normal-and-normal-laws]]

[F0] The characteristic function of a real random variable $X$ is $\varphi_X(t)=\mathbb E[e^{itX}]$ for real $t$. [[def-characteristic-function-of-a-real-random-variable]]

[F1] If $X\sim N(m,s^2)$, then its characteristic function is $\varphi_X(t)=\exp(imt-s^2t^2/2)$. [[lem-characteristic-function-of-a-normal-law]]

[F2] For a finite mutually independent family, the characteristic function of the sum is the product of the individual characteristic functions, and $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$. [[def-independent-random-elements]] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]

[F3] Borel probability laws on $\mathbb R$ with the same characteristic function are equal. [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F4] The complex exponential satisfies $e^{z+w}=e^ze^w$, so finite repeated products combine by adding exponents. [[thm-complex-exponential-addition-and-real-extension]]

## Proof

1.1 By [F0] and [F2], for every $t\in\mathbb R$, $\varphi_{\bar X_n}(t)=\varphi_{\sum_iX_i}(t/n)=\prod_{i=1}^n\varphi_{X_i}(t/n)=\left[\exp\!\left(i\mu t/n-\sigma^2t^2/(2n^2)\right)\right]^n=\exp\!\left(i\mu t-\sigma^2t^2/(2n)\right)$, where [F1] supplies each factor and [F4] combines the $n$ exponents. [A1, F0, F1, F2, F4, algebra]

2.1 By [F1], the last expression is the characteristic function of $N(\mu,\sigma^2/n)$. Uniqueness [F3] proves $\bar X_n\sim N(\mu,\sigma^2/n)$. When $\sigma>0$, the affine identity in [F2] applied to $\sqrt n(\bar X_n-\mu_0)/\sigma$ gives the stated shifted $N(\cdot,1)$ law. The same calculation covers $\sigma=0$, where both laws are point masses at their respective means. [A1, F0, F1, F2, F3, step 1.1, algebra] ∎