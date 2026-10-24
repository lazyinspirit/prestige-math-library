---
id: def-matrix-variance-of-a-random-vector
kind: definition
title: Matrix variance for covariance estimation
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, §2"
      url: "https://arxiv.org/pdf/1708.00502"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 1
---

## Definition

For a random vector $X\in\mathbb R^p$ with mean $\mu$ and covariance
$\Sigma$ as in [[def-covariance-matrix-of-a-random-vector]], assume
$\mathbb E\|X-\mu\|_2^4<\infty$. Its **matrix variance** is
$$\sigma_0^2:=\left\|\mathbb E\!\left[\|X-\mu\|_2^2 (X-\mu)(X-\mu)^T\right]\right\|_{\rm op}.$$
When $\|\Sigma\|_{\rm op}>0$, define the intrinsic ratio
$$d:=\frac{\sigma_0^2}{\|\Sigma\|_{\rm op}^2}.$$

The expectation is entrywise. The finite fourth moment makes every entry
integrable. This definition imposes neither Huber contamination nor sample
replacement.

