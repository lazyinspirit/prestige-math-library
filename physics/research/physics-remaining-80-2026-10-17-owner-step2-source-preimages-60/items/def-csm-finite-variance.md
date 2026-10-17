---
id: def-csm-finite-variance
kind: definition
title: "Variance of a finite real random variable"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
dependency_roles:
  def-finite-probability-space-and-event: mathematical-premise
  def-finite-real-random-variable-and-distribution: mathematical-premise
  def-expectation-on-a-finite-probability-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, §4.1, Definition 4.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
---

## Definition

Let $(\Omega,w)$ be a finite probability space: $\Omega$ is a finite set, each weight $w(\omega)$ is nonnegative, and $\sum_{\omega\in\Omega}w(\omega)=1$. Let $X:\Omega\to\mathbb R$ be a real random variable and let $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$. Its **variance** is

$$\operatorname{Var}(X):=\mathbb E[(X-\mathbb E[X])^2]=\sum_{\omega\in\Omega}(X(\omega)-\mathbb E[X])^2w(\omega).$$

All sums are finite, so the definition requires no additional integrability or moment hypothesis.
