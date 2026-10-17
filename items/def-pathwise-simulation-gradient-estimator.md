---
id: def-pathwise-simulation-gradient-estimator
kind: definition
title: "Pathwise and reparameterized simulation-gradient estimators"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-simulation-gradient-objective-and-payoff-oracle
  - thm-chain-rule-for-total-derivatives
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3.1"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
    - title: "Paul Glasserman, Monte Carlo Methods in Financial Engineering, §7.2"
      url: "https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf"
---

## Definition

Use [[def-simulation-gradient-objective-and-payoff-oracle]] and write $J(\theta)=\mathbb E[H(\theta,Z)]$ using one fixed random input $Z$ whose law does not depend on $\theta$. If, for almost every input, the map $\theta\mapsto H(\theta,Z)$ is differentiable, its pathwise (or reparameterized) gradient estimator is
$G_{\mathrm{pw}}(\theta,Z):=D_\theta H(\theta,Z).$
When $H(\theta,Z)=h(T(\theta,Z),\theta)$, with differentiable $T$ and $h$, the chain rule gives
$G_{\mathrm{pw}}=D_xh(T(\theta,Z),\theta)D_\theta T(\theta,Z)+\partial_\theta h(T(\theta,Z),\theta).$
The estimator differentiates the simulated outcome while holding the same random input fixed. This definition alone does not assert that its expectation equals $\nabla J(\theta)$.
