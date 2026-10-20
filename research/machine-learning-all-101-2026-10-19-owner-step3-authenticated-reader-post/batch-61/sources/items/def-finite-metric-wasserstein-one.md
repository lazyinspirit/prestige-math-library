---
id: def-finite-metric-wasserstein-one
kind: definition
title: "The finite-metric 1-Wasserstein transport cost"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-metric-space
  - def-finite-probability-vector
  - def-finite-metric-coupling
justified_by:
  - lem-finite-metric-transport-optima-attained
axiom_use: "No choice principle is used; the feasible matrices have finitely many real coordinates."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §§2.1–2.3 and 6.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1 and 1.3, PDF pp. 3–6"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Definition

Let $X=\{x_1,\ldots,x_m\}$ be a nonempty finite set and let $d:X\times X\to\mathbb R$ satisfy $d(x,y)=0$ if and only if $x=y$, $d(x,y)=d(y,x)$, and $d(x,z)\le d(x,y)+d(y,z)$. Let $p=(p_i)_{i=1}^m$ and $q=(q_i)_{i=1}^m$ be probability vectors, so their coordinates are nonnegative and each vector sums to $1$. A coupling is an $m\times m$ matrix $\pi$ with $\pi_{ij}\ge0$, row sums $\sum_j\pi_{ij}=p_i$, and column sums $\sum_i\pi_{ij}=q_j$; write $\Gamma(p,q)$ for the set of all such matrices. Writing $d_{ij}=d(x_i,x_j)$, define the finite-metric 1-Wasserstein transport cost by
$$
W_1(p,q):=\min_{\pi\in\Gamma(p,q)}\sum_{i=1}^m\sum_{j=1}^m d_{ij}\pi_{ij}.
$$

## Definition references

[[def-metric-space|Metric spaces]]

[[def-finite-probability-vector|Finite probability vectors]]

[[def-finite-metric-coupling|Couplings of finite probability vectors]]

[Peyré and Cuturi, Computational Optimal Transport, §§2.1–2.3 and 6.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §§1.1 and 1.3](https://arxiv.org/pdf/1009.3856)
