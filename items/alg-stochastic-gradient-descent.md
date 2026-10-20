---
id: alg-stochastic-gradient-descent
kind: algorithm
title: "Stochastic gradient descent"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-random-element-and-real-random-variable
  - def-population-and-empirical-risk
  - def-supervised-learning-problem
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, Algorithm 4.1"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§3.2 and §4.1, Algorithm 4.1 and the adapted-process qualification in footnote 4, PDF pp. 16–24"
    - title: "MIT 6.7220/15.084 Nonlinear Optimization, Lecture 15: Stochastic Gradient Descent"
      url: "https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf"
      locator: "§§L15.1–L15.3, empirical-risk objective and stochastic update, PDF pp. 1–3"

---

## Definition

Given $d\ge1$, a continuously differentiable objective $f:\mathbb R^d\to\mathbb R$, a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0},P)$, an initial iterate $x_1$ measurable with respect to $\mathcal F_1$, an integer horizon $N\ge1$, deterministic finite stepsizes $\alpha_1,\ldots,\alpha_N>0$, and a stochastic-gradient oracle whose output at $x_t$ is a random vector $G_t:\Omega\to\mathbb R^d$ measurable with respect to $\mathcal F_{t+1}$, the procedure returns the trajectory $(x_t)_{t=1}^{N+1}$. For each iteration $t=1,\ldots,N$, query the oracle at $x_t$ and set
$$x_{t+1}=x_t-\alpha_tG_t.$$
No conditional mean, variance, or independence-across-iterations property is part of this procedure's definition.

## Definition references

[[def-stochastic-gradient-oracle-and-unconstrained-update|Stochastic-gradient oracle and unconstrained-update definition]]: fixes the coordinatewise oracle, conditional-moment, and update conventions.

[[def-filtration-and-filtered-probability-space|Filtered probability-space definition]]: fixes the increasing sigma-algebra sequence used to describe information at each iteration.

[[def-adapted-and-integrable-stochastic-process|Adapted-process definition]]: fixes time-indexed measurability and integrability conventions.

[[def-random-element-and-real-random-variable|Random-element definition]]: a vector-valued oracle output is a measurable map into its stated measurable space.

[[def-population-and-empirical-risk|Population and empirical-risk definition]]: distinguishes the fixed finite-sample objective from population risk.

[[def-supervised-learning-problem|Supervised prediction-problem definition]]: fixes the sample, predictor, and loss context for the learning interpretation.

## Remarks

The oracle interface does not specify which risk is being optimized. For empirical risk, the objective is the fixed sample average and sampling is over its finite terms. For population risk, sampling is from the population law; identifying the expected sampled gradient with the population-risk gradient requires a separately justified differentiation-under-expectation step. This algorithm asserts neither mean identity.

## Remarks references

[[def-population-and-empirical-risk|Population and empirical-risk definition]]: gives the distinct finite-sample and population objectives.

[[def-supervised-learning-problem|Supervised prediction-problem definition]]: specifies the joint law and loss whose population risk is integrated.
