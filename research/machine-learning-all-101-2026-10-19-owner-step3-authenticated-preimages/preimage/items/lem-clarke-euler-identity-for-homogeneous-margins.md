---
id: lem-clarke-euler-identity-for-homogeneous-margins
kind: lemma
title: "Euler identity for Clarke subgradients of homogeneous margins"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-clarke-subdifferential-and-gradient-flow
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Theorem B.2"
      url: "https://arxiv.org/pdf/1906.05890"
---

## Statement

Let $q:\mathbb R^d\to\mathbb R$ be locally Lipschitz and positively homogeneous of degree $L>0$, meaning $q(c\theta)=c^Lq(\theta)$ for every $c>0$. For every $\theta\ne0$ and every $h\in\partial^\circ q(\theta)$, one has $\partial^\circ q(c\theta)=c^{L-1}\partial^\circ q(\theta)$ for $c>0$ and $\langle\theta,h\rangle=Lq(\theta)$.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Clarke subdifferential convention]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Theorem B.2](https://arxiv.org/pdf/1906.05890)

## Facts & Assumptions

**Given:** The locally Lipschitz map $q$, its positive homogeneity degree $L$, a nonzero parameter $\theta$, and the Clarke subdifferential convention.

[F1] [[def-clarke-subdifferential-and-gradient-flow]]: for locally Lipschitz maps, the Clarke subdifferential is the closed convex hull of limits of ordinary gradients along differentiability points.

## Proof

**Proof technique:** differentiate the homogeneity identity on the dense differentiability set, then pass to the Clarke closure.

1.1 If $q$ is differentiable at $x$, then $q$ is differentiable at $cx$ and the homogeneity identity gives $Dq(cx)[v]=c^{L-1}Dq(x)[v]$ for every direction $v$, by writing $q(cx+tv)=c^Lq(x+(t/c)v)$ and taking the difference-quotient limit as $t\to0$. [given, algebra]

1.2 At every differentiability point $x\ne0$, differentiating $q(cx)=c^Lq(x)$ with respect to $c$ at $c=1$ gives $\langle x,\nabla q(x)\rangle=Lq(x)$. [given, algebra]

2.1 Conversely, differentiability at $cx$ implies differentiability at $x$ by applying the same argument with scale $1/c$. Thus scaling by $c$ bijects the differentiability points and sends each gradient to $c^{L-1}$ times that gradient. Taking all gradient limits as $x\to\theta$, and then their closed convex hull as in [F1], proves $\partial^\circ q(c\theta)=c^{L-1}\partial^\circ q(\theta)$. [F1, step 1.1, construct]

3.1 For any gradient limit $h=\lim_k\nabla q(x_k)$ with differentiability points $x_k\to\theta$, continuity of $q$ gives $\langle\theta,h\rangle=Lq(\theta)$. This identity is preserved by convex combinations and limits, so [F1] yields it for every $h\in\partial^\circ q(\theta)$. [F1, step 1.2, construct] ∎
