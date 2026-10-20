---
id: def-marginal-score-function
kind: definition
title: Marginal score function
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: score-sdes-and-reverse-time-generation
dependency_level: 0
deps: []
justified_by: []
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
    - title: "Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations, Section 3.3"
      url: "https://arxiv.org/pdf/2011.13456"
    - title: "Maxim Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach, Section 7.2"
      url: "https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf"
---

## Definition

Let $d\ge1$ be an integer, let $I\subseteq\mathbb R$ be a time interval, and let $P_t$ be a probability law on $\mathbb R^d$ for each $t\in I$. Suppose $P_t$ has a density $p_t$ with respect to Lebesgue measure, meaning $P_t(A)=\int_A p_t(x)\,dx$ for every Borel set $A\subseteq\mathbb R^d$. On the set of points $x$ where $0<p_t(x)<\infty$ and the map $x\mapsto p_t(x)$ is differentiable, the **marginal score** of $P_t$ is

$$s_t(x):=\nabla_x\log p_t(x).$$

The score is a spatial vector field; this definition asserts no value where the density is zero, infinite, or not differentiable.

## Definition references

[Song et al., Section 3.3](https://arxiv.org/pdf/2011.13456)

[Raginsky, Section 7.2](https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf)
