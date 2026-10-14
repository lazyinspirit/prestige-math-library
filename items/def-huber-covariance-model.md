---
id: def-huber-covariance-model
kind: definition
title: Gaussian Huber contamination model for covariance estimation
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-huber-contamination-model
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
justified_by:
  - lem-huber-covariance-mixture-is-a-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: AC is inherited through the published finite-dimensional Gaussian-law construction to supply $N_p(0,\Sigma);$ the mixture definition itself makes no further choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §2"
      url: "https://arxiv.org/pdf/1506.00691"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 2
---

## Definition

Let $p\ge1$, $0\le\epsilon\le1$, and let $\Sigma$ be a real positive
semidefinite $p\times p$ covariance matrix. For any Borel probability law
$Q$ on $\mathbb R^p$, define
$$P_{\epsilon,\Sigma,Q}:=(1-\epsilon)N_p(0,\Sigma)+\epsilon Q,$$
where $N_p(0,\Sigma)$ is the finite-dimensional Gaussian law from
[[def-multivariate-normal-law]]. A sample in this model consists of
independent observations with common law $P_{\epsilon,\Sigma,Q}$. The target
is the covariance $\Sigma$ of the uncontaminated Gaussian component, not the
covariance of the mixture.

This is the covariance specialization of the Huber model in
[[def-huber-contamination-model]]. It is distinct from a clean heavy-tail
moment model and from adversarial sample replacement.

