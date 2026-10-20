---
id: alg-neural-operator-mesh-discretization
kind: algorithm
title: "Riemann-sum realization of a neural operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-discretization-invariant-operator-family, def-neural-operator]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Appendix E, Riemann-sum discretizations of integral layers"
---

## Definition

Given a finite partition of $D$ into measurable cells $E_1,\dots,E_N$, choose tags $\xi_j\in E_j$ and weights $\omega_j=|E_j|$. For input samples $v_0(\xi_j)$, replace each integral layer by
$$v_{t+1}^{(i)}=\sigma_t\!\left(W_tv_t^{(i)}+\sum_{j=1}^N\omega_j\kappa_t(\xi_i,\xi_j)v_t^{(j)}+b_t(\xi_i)\right),\qquad 1\le i\le N.$$
At an arbitrary output query $x\in\bar D'$, evaluate the same layer formula using $x$ in the first kernel argument and the stored input-cell values in the sum. Apply the pointwise lifting and projection networks with the same parameters at every discretization. A refinement changes the cells, tags, and weights, but not the continuum parameters $W_t,\kappa_t,b_t$ or the pointwise network parameters.

## Definition references
[Kovachki et al., Appendix E: compatible finite-dimensional Riemann-sum maps](https://arxiv.org/pdf/2108.08481)

## Remark

At every refinement, each cell contributes its volume weight, all kernels and pointwise-network parameters are shared with the continuum operator, and the output can be evaluated at any query point. Changing only the mesh size without preserving these three conventions does not instantiate the discretization family defined above.
