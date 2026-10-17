---
id: def-simulation-gradient-objective-and-payoff-oracle
kind: definition
title: "Simulation objectives and unbiased payoff oracles"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
    - title: "Paul Glasserman, Monte Carlo Methods in Financial Engineering, §7"
      url: "https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf"
---

## Definition

Fix a finite dimension $d\ge1$, an open set $\Theta\subseteq\mathbb R^d$, and a probability space $(\Omega,\mathcal F,P)$. A simulation payoff is a jointly measurable map $H:\Theta\times\Omega\to\mathbb R$ such that $H(\theta,\cdot)$ is integrable for each $\theta\in\Theta$. Its objective is
$J(\theta):=\mathbb E[H(\theta,\cdot)].$
A payoff-oracle call at $\theta$ returns an integrable real random variable $Y(\theta)$ with $\mathbb E[Y(\theta)]=J(\theta)$. Two calls may use the same random input or different random inputs; their joint law is part of the chosen coupling. A single oracle call is one function evaluation, regardless of the cost of its internal simulation.
