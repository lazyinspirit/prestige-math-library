---
id: def-p-one-wasserstein-one
kind: definition
title: The coupling definition of the 1-Wasserstein distance
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-probability-measure, def-euclidean-inner-product]
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used in the definition.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Definition

Let $d\ge1$. For Borel probability measures $\mu,\nu$ on $\mathbb R^d$ with finite first moments $\int |x|\,d\mu(x)<\infty$ and $\int |y|\,d\nu(y)<\infty$, let $\Pi(\mu,\nu)$ be the set of Borel probability measures on $\mathbb R^d\times\mathbb R^d$ whose first and second marginals are $\mu$ and $\nu$. Define
$$W_1(\mu,\nu):=\inf_{\pi\in\Pi(\mu,\nu)}\int_{\mathbb R^d\times\mathbb R^d}|x-y|\,d\pi(x,y).$$
This definition makes no assertion that the infimum is attained. It applies only to probability measures with finite first moment; it is not a distance assigned here to a general signed measure.

Here $|\cdot|$ is the Euclidean norm from [[def-euclidean-inner-product]], and probability measure has the meaning of [[def-probability-measure]].
