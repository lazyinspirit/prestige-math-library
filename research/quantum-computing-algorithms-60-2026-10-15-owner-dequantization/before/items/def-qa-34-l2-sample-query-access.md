---
id: def-qa-34-l2-sample-query-access
kind: definition
title: ℓ2 sample/query access to vectors and matrices
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-34-output-and-cost-types
  - def-finite-probability-space-and-event
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: Alan Frieze, Ravi Kannan, and Santosh Vempala, Fast Monte-Carlo Algorithms for Finding Low-Rank Approximations, full author manuscript
      url: https://www.cs.princeton.edu/courses/archive/spring04/cos598B/bib/FriezeKV-lowrank.pdf
---

## Definition

For a finite real vector $v=(v_1,\ldots,v_n)$, put $\|v\|_2=(\sum_{i=1}^n v_i^2)^{1/2}$. Its squared-entry distribution is $D_v(i)=v_i^2/\|v\|_2^2$ on $[n]$ when $\|v\|_2>0$. A vector has **ℓ2 sample/query access** when the interface supplies: (a) an entry query returning $v_i$; (b) its norm $\|v\|_2$; and (c) a sample distributed according to $D_v$. The interface states the cost and precision of every query, norm computation, and sample, and any preprocessing or storage cost. If $v=0$, $D_v$ is undefined and the sampler returns the explicit status ZERO; it does not return a fictitious normalized sample.

For a finite real matrix $A\in\mathbb R^{m\times n}$, put $\|A\|_F=(\sum_{i=1}^m\sum_{j=1}^n A_{ij}^2)^{1/2}$. Row and column ℓ2 access supplies entry queries, row and column norms, and samplers for each nonzero row and column according to its squared-entry distribution. It also declares preprocessing, storage, and whether their costs are amortized. The common row sampler $i\sim D_A$ has law $\mathbb P(i)=\|A_{i,*}\|_2^2/\|A\|_F^2$ for $A\ne0$; zero rows have probability zero. An all-zero matrix returns ZERO for a request for a norm-normalized sample. Access to entries alone does not imply either sampler. The access and output costs are recorded separately under [[def-qa-34-output-and-cost-types]], and the distributions are finite probability laws as in [[def-finite-probability-space-and-event]].

This is an input-data structure assumption. It is not a quantum circuit, state-preparation oracle, QRAM, or an assertion that the preprocessing needed to implement it is sublinear.
