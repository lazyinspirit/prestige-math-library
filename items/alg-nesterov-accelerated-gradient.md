---
id: alg-nesterov-accelerated-gradient
kind: algorithm
title: "Nesterov accelerated gradient"
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
      locator: "§7.2, Accelerated Gradient Methods, printed pp. 70–71."
    - title: "Yudong Chen, UW–Madison CS/ISyE/Math/Stat 726, Lecture 9–10: Accelerated Gradient Descent"
      url: "https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf"
      locator: "Algorithm 1, PDF p. 2."
---

## Definition

Let $d\ge1$ be an integer and let $F:\mathbb R^d\to\mathbb R$ be continuously Fréchet differentiable: at every $w$, $DF(w)$ is a linear first-order approximation with normwise remainder tending to zero, and $w\mapsto DF(w)$ is continuous. Write its coordinate gradient as $\nabla F(w)=(\partial_jF(w))_{0\le j<d}$. Given an initial vector $w_{\mathrm{init}}\in\mathbb R^d$, an integer horizon $T\ge1$, and prescribed real parameter sequences $(\alpha_t)_{1\le t<T}$ with $\alpha_t>0$ and $(\beta_t)_{1\le t<T}$, initialize $w_0=w_1=w_{\mathrm{init}}$. For each integer $t=1,\ldots,T-1$, first set the look-ahead point

$$\tilde w_t:=w_t+\beta_t(w_t-w_{t-1}),$$

then set

$$w_{t+1}:=\tilde w_t-\alpha_t\nabla F(\tilde w_t).$$

Output $(w_0,w_1,\ldots,w_T)$. The gradient is evaluated after the look-ahead displacement.
When $\beta_t=0$, that update is the fixed-step gradient-descent update at $w_t$ with step size $\alpha_t$.

## Definition references

[[alg-gradient-descent]]

[[def-total-derivative-in-euclidean-space]]

[[def-jacobian-matrix-and-gradient]]
