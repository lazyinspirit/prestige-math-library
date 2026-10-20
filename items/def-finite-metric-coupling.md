---
id: def-finite-metric-coupling
kind: definition
title: "Couplings of finite probability vectors"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-finite-probability-vector]
justified_by: []
axiom_use: "No choice principle is used; all coordinates are indexed by the supplied finite set."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §§2.1–2.3 and 3.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.1, PDF pp. 3–4"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Definition

Let $X=\{x_1,\ldots,x_m\}$ be a finite nonempty set with this fixed ordering, and let $p=(p_i)_{i=1}^m$ and $q=(q_j)_{j=1}^m$ be probability vectors on $X$: their coordinates are nonnegative real numbers and $\sum_{i=1}^m p_i=\sum_{j=1}^m q_j=1$. A **coupling** of $p$ and $q$ is a real matrix $\pi=(\pi_{ij})_{i,j=1}^m$ satisfying
$$
\pi_{ij}\ge 0,\qquad \sum_{j=1}^m\pi_{ij}=p_i\quad(1\le i\le m),\qquad \sum_{i=1}^m\pi_{ij}=q_j\quad(1\le j\le m).
$$
Write $\Gamma(p,q)$ for the set of all such matrices. The first index records the source point and the second index records the destination point.

## Definition references

[[def-finite-probability-vector|Finite probability vectors]]

[Peyré and Cuturi, Computational Optimal Transport, §§2.1–2.3 and 3.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §1.1](https://arxiv.org/pdf/1009.3856)
