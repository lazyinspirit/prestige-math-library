---
id: def-relu-network
kind: definition
title: "ReLU feedforward networks and complexity conventions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feedforward-neural-network]
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
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, §2"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "§2, pp. 4–6; depth, nodes, weights, and skip-edge conventions."
    - title: "Michael J. Sullivan, Deep Learning Theory, §2.1"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§2.1, feedforward network definitions and layer conventions."
---

## Definition

Fix integers $d,r\ge1$. A ReLU feedforward network with $d$ input coordinates and $r$ affine output units is a finite acyclic computation graph whose hidden units apply $\rho(z)=\max\{0,z\}$ to real affine combinations of input coordinates and earlier hidden-unit values, and whose output units apply real affine combinations of input coordinates and hidden-unit values. There are no edges into input vertices or out of output vertices. For each hidden unit $v$, define its canonical level by
$$\ell(v)=1+\max\bigl(\{\ell(u):u\text{ is a hidden unit with an edge }u\to v\}\cup\{0\}\bigr).$$
Thus units with no hidden-unit predecessor have level $1$, and edges between hidden units may skip levels. Let $H$ be the largest hidden-unit level, with $H=0$ when there are no hidden units. The network depth is $H+2$, counting an input layer and a final affine output layer; equivalently, it is two plus the maximum number of hidden units on a directed path in the hidden-unit graph. A network on $[0,1]^d$ means the restriction to that domain of the graph's globally defined formula on $\mathbb R^d$; an approximation domain restricts evaluation, not the formula. Its computation units are its hidden and output vertices; its connections are its directed weighted edges; its weights are all connection coefficients and unit biases. Units and connections are counted as vertices and edges, while weights are counted as scalar entries, with zero-valued entries counted only when the architecture explicitly includes them. A layered fully connected ReLU network with $L$ hidden layers is the specialization in which every edge joins consecutive layers and every such edge is present; its depth is $L+2$.

## Definition references

[[def-feedforward-neural-network|Finite feedforward computation graphs and layered MLPs]]

[Yarotsky, §2: ReLU network and depth convention](https://arxiv.org/pdf/1610.01145)

[Sullivan, §2.1: layered feedforward network convention](https://mjt.cs.illinois.edu/dlt/index.html)
