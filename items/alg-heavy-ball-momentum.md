---
id: alg-heavy-ball-momentum
kind: algorithm
title: "Heavy-ball momentum"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - alg-gradient-descent
  - def-jacobian-matrix-and-gradient
  - def-total-derivative-in-euclidean-space
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§7.1, Gradient Methods with Momentum, printed p. 68."
    - title: "Yudong Chen, UW–Madison CS/ISyE/Math/Stat 726, Lecture 9–10: Accelerated Gradient Descent"
      url: "https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf"
      locator: "§1, Warm-up: the heavy-ball method, PDF p. 1."
---

## Definition

Let $d\ge1$ be an integer and let $F:\mathbb R^d\to\mathbb R$ be continuously Fréchet differentiable: at every $w$, $DF(w)$ is a linear first-order approximation with normwise remainder tending to zero, and $w\mapsto DF(w)$ is continuous. Write its coordinate gradient as $\nabla F(w)=(\partial_jF(w))_{0\le j<d}$. Given an initial vector $w_{\mathrm{init}}\in\mathbb R^d$, a constant step size $\alpha>0$, a constant momentum parameter $\beta\ge0$, and an integer horizon $T\ge1$, initialize $w_0=w_1=w_{\mathrm{init}}$. For each integer $t=1,\ldots,T-1$, set

$$w_{t+1}:=w_t-\alpha\nabla F(w_t)+\beta(w_t-w_{t-1}).$$

Output $(w_0,w_1,\ldots,w_T)$. The gradient is evaluated at the current iterate $w_t$.
When $\beta=0$, every update is the fixed-step gradient-descent update with step size $\alpha$.

## Definition references

[[alg-gradient-descent]]

[[def-total-derivative-in-euclidean-space]]

[[def-jacobian-matrix-and-gradient]]
