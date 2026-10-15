---
id: def-state-dependent-one-step-minorization
kind: definition
title: State-dependent one-step minorization
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Assumption 3 and Theorem 2"
      url: "https://arxiv.org/pdf/0811.1729"
verification:
  precheck: n/a
axiom_use: "No choice principle is used; the function and probability measure are supplied data."
---

## Definition

Let $P$ be a probability kernel on $(\mathsf X,\mathcal X)$. A **state-dependent one-step minorization** is supplied measurable data $s:\mathsf X\to[0,1]$ and a probability measure $Q$ on $(\mathsf X,\mathcal X)$ such that
$$P(x,A)\ge s(x)Q(A)\quad\text{for every }x\in\mathsf X,\ A\in\mathcal X.$$

The function $s$ need not have a positive uniform lower bound; this is the exact one-step assumption used in the overlapping-batch-means theorem below.
