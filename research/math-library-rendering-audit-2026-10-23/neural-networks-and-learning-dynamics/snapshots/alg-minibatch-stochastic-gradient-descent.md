---
id: alg-minibatch-stochastic-gradient-descent
kind: algorithm
title: "Minibatch stochastic gradient descent"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-stochastic-gradient-descent
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-random-element-and-real-random-variable
  - def-euclidean-inner-product
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, minibatch stochastic-gradient method"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§§3.4 and 4.2, minibatch direction and finite-sample gradients, PDF pp. 18–20 and 29–30"
    - title: "MIT 6.7220/15.084 Nonlinear Optimization, Lecture 15: Stochastic Gradient Descent"
      url: "https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf"
      locator: "§§L15.1–L15.3, empirical-risk component gradients, PDF pp. 1–3"

---

## Definition

Given $d\ge1$, a continuously differentiable objective $f:\mathbb R^d\to\mathbb R$, a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0},P)$, an initial iterate $x_1$ measurable with respect to $\mathcal F_1$, an integer horizon $N\ge1$, deterministic finite stepsizes $\alpha_1,\ldots,\alpha_N>0$, an integer batch size $b\ge1$, and a batched oracle whose outputs at $x_t$ are random vectors $G_{t,1},\ldots,G_{t,b}:\Omega\to\mathbb R^d$, each measurable with respect to $\mathcal F_{t+1}$. For each iteration $t=1,\ldots,N$, query the batched oracle at the current iterate $x_t$, receive the $b$ vectors, and form
$$\overline G_t=\frac1b\sum_{j=1}^bG_{t,j}$$
and set $x_{t+1}=x_t-\alpha_t\overline G_t$. Return the trajectory $(x_t)_{t=1}^{N+1}$. The batch vectors are evaluated at the same current iterate; no independence, unbiasedness, or variance-reduction claim is part of this procedure's definition.

## Definition references

[[alg-stochastic-gradient-descent|Single-direction stochastic-gradient-descent procedure]]: the averaged direction is supplied to its unconstrained update.

[[def-stochastic-gradient-oracle-and-unconstrained-update|Stochastic-gradient oracle and update definition]]: fixes the vector-update convention.

[[def-filtration-and-filtered-probability-space|Filtered probability-space definition]]: fixes the information sequence for the batch outputs.

[[def-adapted-and-integrable-stochastic-process|Adapted-process definition]]: fixes time-indexed measurability.

[[def-random-element-and-real-random-variable|Random-element definition]]: each vector output is a measurable map into $\mathbb R^d$.

[[def-euclidean-inner-product|Euclidean inner-product and norm definition]]: fixes the finite-dimensional vector operations and norm convention.

## Remarks

The procedure specifies how to average the returned vectors. The chosen batch law must separately justify any claim about the average's mean or variance; no such claim follows from the batch size alone.

