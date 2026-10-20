---
id: def-neural-ode
kind: definition
title: A parameterized neural ordinary differential equation
status: draft
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

Let $d,q\ge1$, let $I\subseteq\mathbb R$ and $\Theta\subseteq\mathbb R^q$ be open, and let $v:I\times\mathbb R^d\times\Theta\to\mathbb R^d$. For a parameter $\theta\in\Theta$, write $v_\theta(t,z):=v(t,z,\theta)$. A **parameterized neural ordinary differential equation**, or **neural ODE**, on $I$ is the initial-value problem

$$\dot z(t)=v_\theta(t,z(t)),\qquad z(s)=z_s,$$

where $s\in I$ and $z_s\in\mathbb R^d$. A trajectory on an interval $J\subseteq I$ containing $s$ is a differentiable function $z:J\to\mathbb R^d$ satisfying both displayed conditions. Here $v_\theta$ is the state-velocity field. The term names this parameterized vector-field model and imposes no particular neural-network architecture. This definition alone asserts neither solution existence beyond its stated interval nor numerical accuracy.

## Definition references

[Chen et al., equation (2) and continuous normalizing flows](https://arxiv.org/pdf/1806.07366)

[Papamakarios et al., §4.1](https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf)
