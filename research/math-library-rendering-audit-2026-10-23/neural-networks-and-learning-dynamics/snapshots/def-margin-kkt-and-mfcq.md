---
id: def-margin-kkt-and-mfcq
kind: definition
title: "KKT conditions and MFCQ for margin constraints"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-clarke-subdifferential-and-gradient-flow
  - def-homogeneous-classifier-margin-and-exponential-risk
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix C.1–C.2"
      url: "https://arxiv.org/pdf/1906.05890"
---

## Definition

Let $q_1,\ldots,q_N:\mathbb R^d\to\mathbb R$ be locally Lipschitz functions, with $N,d\ge1$. Write $\partial^\circ q_i(\theta)$ for the closed convex hull of limits of ordinary gradients at differentiability points approaching $\theta$. The **margin-constrained problem** is to minimize $\frac12\|\theta\|_2^2$ subject to $q_i(\theta)\ge1$ for every $i$. A point $\theta$ is feasible when all these inequalities hold; an index $i$ is active at a feasible point when $q_i(\theta)=1$.

A feasible point $\theta$ is a **Clarke KKT point** if there are multipliers $\lambda_i\ge0$ and vectors $h_i\in\partial^\circ q_i(\theta)$ such that

$$\theta=\sum_{i=1}^N\lambda_i h_i,\qquad \lambda_i(q_i(\theta)-1)=0\quad(1\le i\le N).$$

A feasible point satisfies the **Mangasarian–Fromovitz constraint qualification (MFCQ) in margin form** if there is a direction $v\in\mathbb R^d$ such that $\langle h_i,v\rangle>0$ for every active $i$ and every $h_i\in\partial^\circ q_i(\theta)$. If the same constraints are written $g_i(\theta):=1-q_i(\theta)\le0$, this condition is equivalently $\langle k_i,v\rangle<0$ for every active $i$ and $k_i\in\partial^\circ g_i(\theta)$, since $\partial^\circ g_i(\theta)=-\partial^\circ q_i(\theta)$.

A feasible point is an **$(\varepsilon,\delta)$-approximate Clarke KKT point** if there are $\lambda_i\ge0$ and $h_i\in\partial^\circ q_i(\theta)$ such that

$$\left\|\theta-\sum_{i=1}^N\lambda_i h_i\right\|_2\le\varepsilon,\qquad \sum_{i=1}^N\lambda_i(q_i(\theta)-1)\le\delta,$$

where $\varepsilon,\delta>0$. The second inequality measures total complementary-slackness error; every summand is nonnegative at a feasible point.

## Definition references

[[def-clarke-subdifferential-and-gradient-flow|Clarke generalized gradient and Euclidean pairing]]

[[def-homogeneous-classifier-margin-and-exponential-risk|Training margins and homogeneity convention]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix C.1–C.2](https://arxiv.org/pdf/1906.05890)

## Remarks

The margin form fixes the sign convention for lower constraints $q_i\ge1$: a strict MFCQ direction increases every active margin. For upper constraints $g_i\le0$, the corresponding active directional derivatives are negative. This sign convention is used in all local KKT arguments on this page.

The cited Lyu–Li Appendix C defines $g_i=1-q_i\le0$ but states MFCQ using positive directional derivatives of $g_i$. This conflicts with its Lemma C.7: since $\partial^\circ g_i=-\partial^\circ q_i$, homogeneity gives $\langle h,\theta\rangle=-Lq_i(\theta)$ for $h\in\partial^\circ g_i(\theta)$, not $+Lq_i(\theta)$. The margin-form convention above is sign-consistent, and the assigned homogeneous MFCQ lemma proves its positive-direction claim directly.
