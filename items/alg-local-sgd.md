---
id: alg-local-sgd
kind: algorithm
title: Local SGD with periodic synchronization
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-independent-random-elements
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Sebastian U. Stich, Local SGD Converges Fast and Communicates Little, §§2–3 and Appendix A"
      url: https://arxiv.org/pdf/1805.09767v3
    - title: "Eduard Gorbunov, Filip Hanzely, Peter Richtárik, Local SGD: Unified Theory and New Efficient Methods, §§1–4"
      url: https://proceedings.mlr.press/v130/gorbunov21a/gorbunov21a.pdf
---

## Definition

Let $n,d,K,T,b,m$ be positive integers, let $f_j:\mathbb R^d\to\mathbb R$ be
differentiable for $1\le j\le n$, and define
$f(x)=n^{-1}\sum_{j=1}^n f_j(x)$. The inputs are a starting point
$x_0\in\mathbb R^d$, positive step sizes $\eta_0,\ldots,\eta_{T-1}$, and
integer synchronization times
$$ 0<t_1<\cdots<t_m=T,\qquad \mathcal I_T=\{t_1,\ldots,t_m\}. $$
Set $t_0=0$ and
$$ H=\max_{1\le j\le m}(t_j-t_{j-1}). $$
Initialize $x_0^k=x_0$ for each worker $k\in\{1,\ldots,K\}$. For each
$t=0,\ldots,T-1$, each worker $k$ and each within-step draw
$q=1,\ldots,b$, draw $i_{t,q}^k$ uniformly from $\{1,\ldots,n\}$, with all
draws mutually independent, and form
$$g_t^k(x)=\frac1b\sum_{q=1}^b\nabla f_{i_{t,q}^k}(x),\qquad z_{t+1}^k=x_t^k-\eta_t g_t^k(x_t^k).$$
For $b=1$ this is a single stochastic gradient. If
$t+1\notin\mathcal I_T$, set $x_{t+1}^k=z_{t+1}^k$ for every worker. If
$t+1\in\mathcal I_T$, set
$$x_{t+1}^k=\frac1K\sum_{\ell=1}^Kz_{t+1}^{\ell} \quad\text{for every }k.$$
The procedure returns the worker trajectories
$(x_t^k)_{0\le t\le T,\,1\le k\le K}$. The common initialization at time
$0$ is included when measuring the largest synchronization gap, and a
convergence statement must specify any particular average or iterate it
analyzes.

## Definition references

[[def-independent-random-elements|Independent random elements]]

[Stich, Local SGD Converges Fast and Communicates Little, Algorithm 1 and Definition 2.1](https://arxiv.org/pdf/1805.09767v3)

[Gorbunov et al., Local SGD: Unified Theory and New Efficient Methods, equation (4)](https://proceedings.mlr.press/v130/gorbunov21a/gorbunov21a.pdf)
