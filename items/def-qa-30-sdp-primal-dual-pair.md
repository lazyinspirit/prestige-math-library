---
id: def-qa-30-sdp-primal-dual-pair
kind: definition
title: "Finite semidefinite primal-dual pair"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-trace-of-a-square-matrix
  - def-non-negative-and-positive-operator
  - def-real-and-complex-inner-product-space
  - def-qc-dirac-notation-conversion
  - lem-qa-30-hermitian-product-trace-real
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1609.05537v5"
      url: "https://arxiv.org/pdf/1609.05537"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Fix integers $n\ge0$ and $m\ge0$, Hermitian matrices $C,A_1,\ldots,A_m\in\mathbb C^{n\times n}$, and $b=(b_1,\ldots,b_m)\in\mathbb R^m$. The **primal semidefinite program** is
$$\sup\{\operatorname{tr}(CX):X\in\mathbb C^{n\times n},\ X\succeq0,\ \operatorname{tr}(A_jX)\le b_j\ (1\le j\le m)\},$$
and its declared **dual program** is
$$\inf\{b\cdot y:y\in\mathbb R^m,\ y_j\ge0,\ \sum_{j=1}^m y_jA_j-C\succeq0\}.$$
Here $X\succeq0$ and $D\succeq0$ mean positive semidefinite in the finite-dimensional quadratic-form sense. By [[lem-qa-30-hermitian-product-trace-real]], all displayed trace objectives and constraints are real. Primal and dual feasibility, boundedness, attainment, trace bounds, sparsity, and normalizations such as $A_1=I,b_1=R$ are separate promises and do not follow from this definition.

The sign convention is maximize for the primal, minimize for the dual, $\le$ for primal scalar constraints, nonnegative dual multipliers, and dual slack $\sum_jy_jA_j-C\succeq0$.
