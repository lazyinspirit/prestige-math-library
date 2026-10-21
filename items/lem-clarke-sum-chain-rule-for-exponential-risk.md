---
id: lem-clarke-sum-chain-rule-for-exponential-risk
kind: lemma
title: "Clarke chain rule for finite exponential empirical risk"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-clarke-subdifferential-and-gradient-flow
  - def-homogeneous-classifier-margin-and-exponential-risk
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix I.2–I.4"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §§9.1 and 10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $N,d\ge1$ and let $q_1,\ldots,q_N:\mathbb R^d\to\mathbb R$ be the locally Lipschitz sample-margin functions in a homogeneous-classifier model, and suppose each $q_i$ admits the Clarke chain rule along absolutely continuous arcs. Set $\mathcal L(\theta)=\sum_{i=1}^N e^{-q_i(\theta)}$. Then

$$\partial^\circ\mathcal L(\theta)\subseteq\left\{-\sum_{i=1}^N e^{-q_i(\theta)}h_i:h_i\in\partial^\circ q_i(\theta)\right\}.$$

Along every absolutely continuous arc $\theta(t)$, for almost every $t$ and every choice $h_i(t)\in\partial^\circ q_i(\theta(t))$, the derivative is

$$\frac{d}{dt}\mathcal L(\theta(t))=-\left\langle\sum_{i=1}^N e^{-q_i(\theta(t))}h_i(t),\dot\theta(t)\right\rangle.$$

In particular, if the arc also satisfies the negative Clarke gradient-flow inclusion, its loss derivative is $-\|\dot\theta(t)\|_2^2$ almost everywhere.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Clarke derivative and chain-rule convention]]

[[def-homogeneous-classifier-margin-and-exponential-risk|Finite homogeneous margin model]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix I.2–I.4](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §§9.1 and 10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The finite sample margins, their local Lipschitz and chain-rule hypotheses, and the empirical exponential risk.

[F1] [[def-clarke-subdifferential-and-gradient-flow]]: Clarke subdifferentials are closed convex hulls of limiting ordinary gradients and their support functions are the Clarke generalized directional derivatives.

[F2] [[def-homogeneous-classifier-margin-and-exponential-risk]]: the empirical exponential risk is the finite sum $\mathcal L=\sum_i e^{-q_i}$.

[F3] [[thm-strict-separation-of-a-point-from-a-closed-convex-set]]: a point outside a nonempty closed convex subset of a finite-dimensional Euclidean space is strictly separated from that set by a linear functional.

## Proof

**Proof technique:** apply the smooth scalar chain rule to each margin and use support functions to prove the finite-sum subdifferential inclusion.

1.1 Put $f_i(\theta)=e^{-q_i(\theta)}$. At every differentiability point of $q_i$, ordinary differentiation gives $\nabla f_i=-e^{-q_i}\nabla q_i$. The exponential has nonzero derivative, so $f_i$ is differentiable exactly where $q_i$ is; passing to limits of gradients and then closed convex hulls as in [F1] gives $\partial^\circ f_i(\theta)=-e^{-q_i(\theta)}\partial^\circ q_i(\theta)$. Along an absolutely continuous arc, the assumed chain rule for $q_i$ and the one-variable chain rule give $(f_i\circ\theta)'=-e^{-q_i}\langle h_i,\dot\theta\rangle$ for every $h_i\in\partial^\circ q_i(\theta)$. [F1, F2, given, algebra]

2.1 For any direction $v$, the limsup of the finite sum of difference quotients is at most the sum of their limsups, so $\mathcal L^\circ(\theta;v)\le\sum_i f_i^\circ(\theta;v)$. The right side is the support function of the nonempty compact convex set $C:=\sum_i\partial^\circ f_i(\theta)$ by [F1]. If some $g\in\partial^\circ\mathcal L(\theta)$ lay outside $C$, [F3] would give a direction $v$ with $\langle g,v\rangle>\sup_{c\in C}\langle c,v\rangle=\sum_i f_i^\circ(\theta;v)$, contradicting $\langle g,v\rangle\le\mathcal L^\circ(\theta;v)$. Thus $\partial^\circ\mathcal L(\theta)\subseteq C$. Using step 1.1 expands this inclusion to the displayed weighted-margin form. [F1, F2, F3, step 1.1, algebra]

3.1 Summing the ordinary arc derivatives from step 1.1 gives the displayed derivative formula. For a negative Clarke gradient-flow arc, step 2.1 supplies $h_i$ with $\dot\theta=\sum_i e^{-q_i}h_i$; substitution makes the derivative $-\langle\dot\theta,\dot\theta\rangle=-\|\dot\theta\|_2^2$. [step 1.1, step 2.1, algebra] ∎
