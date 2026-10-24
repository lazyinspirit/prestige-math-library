---
id: def-finite-discrete-coagulation-fragmentation-system
kind: definition
title: Finite discrete coagulation and fragmentation with a mass reservoir
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §1
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §1
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Definition

Fix a basic mass $a>0$ and an integer $N\ge2$. Species $i\in\{1,\ldots,N\}$ has mass $m_i=ia$ and number concentration $n_i\ge0$. A symmetric nonnegative array $K_{ij}=K_{ji}$ specifies binary aggregation. In the ordered-pair convention, the event rate for $(i,j)$ is $K_{ij}n_in_j/2$; summing over ordered pairs counts an unequal pair twice and an equal pair once with its required factor $1/2$.

If $i+j\le N$, an aggregation event has stoichiometric increment $e_{i+j}-e_i-e_j$, where $e_i$ is the $i$th coordinate vector. If $i+j>N$, it removes the two parents from the retained bins and adds mass $m_i+m_j$ to a scalar overflow reservoir $L$; the reservoir has no return dynamics. Thus this branch is a truncation model and is not a physical state law for particles that later fragment.

For fragmentation, each species $i\ge2$ has event rate $\beta_i n_i$, where $\beta_i\ge0$. The monomer does not fragment: set $\beta_1=0$ and impose no daughter normalization for $i=1$. Its expected daughter counts are $b_i(k)\ge0$ for $1\le k<i$, with $\sum_{k<i}k b_i(k)=i$. One event has increment $-e_i+\sum_{k<i}b_i(k)e_k$. The mean equations are the finite sums of these event rates times their increments, together with the stated overflow-reservoir equation. When $b_i$ is specified as an actual random daughter law, these equations describe its expected event increment.
