---
id: def-homogeneous-classifier-margin-and-exponential-risk
kind: definition
title: "Homogeneous classifier margins and exponential training risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-feedforward-neural-network
  - def-clarke-subdifferential-and-gradient-flow
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, §§3–4"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §§10.1–10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Definition

Let $d,p\ge1$, let $X\subseteq\mathbb R^d$ be an input set, and let $\Phi:\mathbb R^p\times X\to\mathbb R$ be the scalar output of a finite feedforward computation graph: the graph is finite and acyclic, its vertices are evaluated in a fixed topological order, and each non-input value is a scalar activation applied to a weighted sum of earlier values and a bias. For a finite sample $(x_i,y_i)_{i=1}^n$ with $n\ge1$, $x_i\in X$, and $y_i\in\{-1,+1\}$, define the signed margin $q_i(\theta):=y_i\Phi(\theta;x_i)$, the minimum margin $q_{\min}(\theta):=\min_{1\le i\le n}q_i(\theta)$, and the exponential empirical risk $\mathcal L(\theta):=\sum_{i=1}^n e^{-q_i(\theta)}$. The score map is **positively homogeneous of degree $L>0$ in its parameters** if $\Phi(c\theta;x)=c^L\Phi(\theta;x)$ for every $c>0$, $\theta\in\mathbb R^p$, and $x\in X$; this then gives $q_i(c\theta)=c^Lq_i(\theta)$. For the gradient-flow results, assume each sample margin is locally Lipschitz, and let $\partial^\circ q_i(\theta)$ denote the closed convex hull of limits of ordinary gradients at differentiability points approaching $\theta$. Assume also that along every absolutely continuous arc $\theta(t)$, $\frac{d}{dt}q_i(\theta(t))=\langle h,\dot\theta(t)\rangle$ for every $h\in\partial^\circ q_i(\theta(t))$ at almost every $t$. For $\theta\ne0$, the normalized margin is $\bar\gamma(\theta):=q_{\min}(\theta)/\|\theta\|_2^L$. When $\mathcal L(\theta)<1$, define the smoothed normalized margin by $\widetilde\gamma(\theta):=\log(1/\mathcal L(\theta))/\|\theta\|_2^L$.

## Definition references

[[def-feedforward-neural-network|Finite acyclic feedforward graph and node-evaluation convention]]

[[def-clarke-subdifferential-and-gradient-flow|Clarke subdifferential and chain-rule convention]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, §§3–4](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §§10.1–10.2](https://mjt.cs.illinois.edu/dlt/)
