---
id: ex-local-versus-periodic-synchronization
kind: example
title: Local updates and periodic synchronization give different averages
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-local-sgd
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Sebastian U. Stich, Local SGD Converges Fast and Communicates Little, Definition 2.1"
      url: https://arxiv.org/pdf/1805.09767v3
proof_strategy: direct
---

## Example

Let $f_1(x)=x^2/2$ and $f_2(x)=x^2$ on $\mathbb R$, let the two local-SGD
workers start at $x_0^1=x_0^2=1$, and use step size $\eta=1/2$ with one
uniform component draw per worker and step from $\{f_1,f_2\}$. Couple two
executions by choosing the positive-probability draw sequence in which worker
1 draws $f_1$ twice and worker 2 draws $f_2$ twice. After two steps without
intermediate synchronization their mean is $1/8$. If they instead synchronize
after the first step and again after the second, their final mean is $1/16$.

## Example references

[Stich, Local SGD Converges Fast and Communicates Little, Definition 2.1](https://arxiv.org/pdf/1805.09767v3)

## Facts & Assumptions
**Given:** The two differentiable component functions and the common starting point in the Example.

[F1] [[alg-local-sgd]]: each step samples a component uniformly and updates $x\leftarrow x-\eta\nabla f_j(x)$; a synchronization replaces all worker states by their arithmetic mean.

[A1] The two workers' component draws are independent and uniform at each step, as in [F1]. The displayed coupled draw sequence therefore has probability $(1/2)^4>0$ in either schedule.



**Proof technique:** direct.

## Proof

1.1 The gradients are $\nabla f_1(x)=x$ and $\nabla f_2(x)=2x$. Without an intermediate synchronization, worker 1 follows $1\mapsto1/2\mapsto1/4$ and worker 2 follows $1\mapsto0\mapsto0$. Their arithmetic mean is $(1/4+0)/2=1/8$. [F1, given, algebra]

2.1 With synchronization after the first step, the worker states are first $1/2$ and $0$, so their common synchronized value is $1/4$. On the second step, the same coupled draws give worker states $1/4-(1/2)(1/4)=1/8$ and $1/4-(1/2)(2)(1/4)=0$. Their mean is $(1/8+0)/2=1/16$. [F1, step 1.1, given, algebra]

3.1 Since $1/8\ne1/16$ and the draw sequence in [A1] has positive probability under the algorithm, the two schedules can produce different final worker means. [A1, step 1.1, step 2.1] ∎