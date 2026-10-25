---
id: def-low-rank-adaptation-of-a-linear-layer
kind: definition
title: "Low-rank adaptation of a linear layer"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feedforward-neural-network]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Edward Hu et al., LoRA: Low-Rank Adaptation of Large Language Models, arXiv:2106.09685v2, §4.1"
      url: "https://arxiv.org/pdf/2106.09685"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 5 Part 3, §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf"
---

## Definition

Let $d,k$ be positive integers, let $1\le r\le\min(d,k)$, let $c\in\mathbb R\setminus\{0\}$, and fix a matrix $W_0\in\mathbb R^{d\times k}$. A rank-$r$ adapter for the linear layer $x\mapsto W_0x$ consists of trainable factor matrices $B\in\mathbb R^{d\times r}$ and $A\in\mathbb R^{r\times k}$ and the updated weight matrix

$$W=W_0+cBA.$$

Its output on $x\in\mathbb R^k$ is $Wx=W_0x+cB(Ax)\in\mathbb R^d$. The base matrix $W_0$ is frozen, meaning that an adaptation procedure does not update its entries; only entries of $A$ and $B$ are trainable in this definition. The update matrix is $W-W_0=cBA$, whose rank is the dimension of its image as a linear map from $\mathbb R^k$ to $\mathbb R^d$. No bias, dropout, random initialization, optimization rule, or convergence guarantee is part of this definition.

## Definition references

[[def-feedforward-neural-network]]: its finite layered perceptron specializes to a linear matrix map when the layer has identity output activation and zero bias.

[Hu et al., §4.1: frozen base matrix and trainable low-rank factors](https://arxiv.org/pdf/2106.09685)

[MIT OCW, §§8.3–8.4: finite differentiable computation graphs and reverse-mode gradients](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf)
