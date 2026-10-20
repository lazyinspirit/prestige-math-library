---
id: def-relu-network
kind: definition
title: "ReLU feedforward networks and complexity conventions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feedforward-neural-network]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

Fix integers $d,r\ge1$. A ReLU feedforward network from $[0,1]^d$ to $\mathbb R^r$ is a finite acyclic feedforward computation graph with $d$ input coordinates, hidden units applying $\rho(z)=\max\{0,z\}$ to affine combinations of earlier unit values, and $r$ affine output units. Edges may skip layers. Its depth is the maximum number of layers met on an input-to-output path, counting the input and output layers, so a network with one hidden layer has depth $3$. Its computation units are its hidden and output units; its connections are its directed weighted edges; its weights are all connection coefficients and unit biases. The number of each quantity counts scalar entries, including zero entries only when the architecture explicitly includes them. A layered fully connected ReLU network is the specialization in which edges join consecutive layers and every such edge is present.

## Definition references

[[def-feedforward-neural-network|Finite feedforward computation graphs and layered MLPs]]

[Yarotsky, §2: ReLU network and depth convention](https://arxiv.org/pdf/1610.01145)

[Sullivan, §2.1: layered feedforward network convention](https://mjt.cs.illinois.edu/dlt/index.html)
