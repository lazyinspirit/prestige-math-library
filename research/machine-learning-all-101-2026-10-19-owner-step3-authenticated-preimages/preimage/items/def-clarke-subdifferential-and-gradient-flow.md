---
id: def-clarke-subdifferential-and-gradient-flow
kind: definition
title: "Clarke subdifferential and gradient-flow trajectory"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix I.2–I.3"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §9.1"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Definition

Let $d\ge1$, let $U\subseteq\mathbb R^d$ be open, and let $F:U\to\mathbb R$ be locally Lipschitz. For $x\in U$ and $v\in\mathbb R^d$, define the Clarke generalized directional derivative by

$$F^\circ(x;v):=\limsup_{z\to x,\,s\downarrow0,\,z,z+sv\in U}\frac{F(z+sv)-F(z)}{s}.$$

The **Clarke subdifferential** (also called the Clarke generalized gradient) is

$$\partial^\circ F(x):=\{\xi\in\mathbb R^d:\langle \xi,v\rangle\le F^\circ(x;v)\text{ for every }v\in\mathbb R^d\}.$$

For locally Lipschitz $F$, this is a nonempty compact convex set and is equivalently the closed convex hull of all limits of ordinary gradients $\nabla F(x_k)$ along differentiability points $x_k\to x$. Its support function is $F^\circ(x;v)=\max_{\xi\in\partial^\circ F(x)}\langle\xi,v\rangle$. The pairing is Euclidean: $\langle a,b\rangle=\sum_{j=1}^d a_jb_j$.

The set-valued map $x\mapsto\partial^\circ F(x)$ is locally bounded and has closed graph: if $x_k\to x$, $\xi_k\in\partial^\circ F(x_k)$, and $\xi_k\to\xi$, then $\xi\in\partial^\circ F(x)$. Here locally bounded means that every point has a neighborhood on which all subgradients have bounded norm. For each fixed $v$, the function $x\mapsto F^\circ(x;v)$ is upper semicontinuous: if $a>F^\circ(x;v)$, some neighborhood $V$ of $x$ satisfies $F^\circ(y;v)<a$ for all $y\in V$.

A locally Lipschitz function $F$ **admits the chain rule along absolutely continuous arcs** if, for every arc $z:[0,T]\to U$ that is absolutely continuous on the compact interval $[0,T]$, for almost every $t\in[0,T]$ the derivative $(F\circ z)'(t)$ exists and equals $\langle\xi,\dot z(t)\rangle$ for every $\xi\in\partial^\circ F(z(t))$.

A **global Clarke gradient-flow trajectory** for $F$ is a curve $\theta:[0,\infty)\to U$ that is absolutely continuous on every compact time interval and satisfies $\dot\theta(t)\in-\partial^\circ F(\theta(t))$ for almost every $t\ge0$. The definition names a trajectory when it exists; it does not assert existence or continuation.

## Definition references

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix I.2–I.3](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §9.1](https://mjt.cs.illinois.edu/dlt/)
