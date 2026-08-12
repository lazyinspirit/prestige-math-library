---
id: def-independence-of-finite-random-variables
kind: definition
title: "Pairwise and mutual independence of finite-valued random variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-real-random-variable-and-distribution, def-pairwise-and-mutual-independence-of-events]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Definition 1.1.8"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 4.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Definition

A finite family of finite-valued random variables $(X_i)_{i\in I}$ is **mutually independent** when for every nonempty $J\subseteq I$ and every selection $x_j\in X_j(\Omega)$,
$$\mathbb P(X_j=x_j\text{ for every }j\in J)=\prod_{j\in J}\mathbb P(X_j=x_j).$$
It is **pairwise independent** when this identity is required only for two distinct indices. The empty family is mutually independent vacuously, and a one-member family is mutually independent.
