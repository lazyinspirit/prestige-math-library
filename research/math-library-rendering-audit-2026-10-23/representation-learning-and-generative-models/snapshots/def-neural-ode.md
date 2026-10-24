---
id: def-neural-ode
kind: definition
title: A parameterized neural ordinary differential equation
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference"
      url: "https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf"
verification:
  precheck: n/a
---

## Definition

Let $d,q\ge1$, let $I\subseteq\mathbb R$ and $\Theta\subseteq\mathbb R^q$ be open, and let $v:I\times\mathbb R^d\times\Theta\to\mathbb R^d$. For a parameter $\theta\in\Theta$, write $v_\theta(t,z):=v(t,z,\theta)$. The **parameterized ordinary differential equation** on $I$ is the initial-value problem

$$\dot z(t)=v_\theta(t,z(t)),\qquad z(s)=z_s,$$

where $s\in I$ and $z_s\in\mathbb R^d$. A trajectory on an interval $J\subseteq I$ containing $s$ is a differentiable function $z:J\to\mathbb R^d$ satisfying both displayed conditions. Here $v_\theta$ is the state-velocity field.

It is a **parameterized neural ordinary differential equation**, or **neural ODE**, when $v_\theta(t,z)$ is specified by a neural network with input $(t,z)$ and $d$ outputs. Here a network is a fixed finite directed acyclic graph evaluated in an order in which every edge points to a later vertex: input vertices hold the coordinates of $(t,z)$, each other vertex applies a fixed scalar activation to an affine combination of earlier vertex values, and the output vertices use the identity activation. The weights and biases are specified functions of $\theta$ and may be shared or fixed. No particular depth, width, or hidden activation is prescribed; affine networks with no hidden vertices are allowed.

The general parameterized ODE remains defined for fields without such a network specification. This definition alone asserts neither solution existence beyond its stated interval nor numerical accuracy.

## Definition references

[Chen et al., equation (2) and continuous normalizing flows](https://arxiv.org/pdf/1806.07366)

[Papamakarios et al., §4.1](https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf)
