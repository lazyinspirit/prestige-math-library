---
id: def-linear-hyperplane
kind: definition
title: Linear hyperplane
status: published
origin: pipeline
deps: [def-linear-subspace, def-quotient-vector-space-and-canonical-projection, def-dimension]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Definition 2.46
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Definition

Let $X$ be a vector space over a field $\mathbb F$.  A **linear hyperplane**
of $X$ is a linear subspace $H$ such that $X/H$ is finite-dimensional over $\mathbb F$ and
$\dim_{\mathbb F}(X/H)=1$.  This is
algebraic codimension one; closedness is an additional topological property,
not part of the definition.
