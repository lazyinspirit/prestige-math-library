---
id: alg-neural-operator-mesh-discretization
kind: algorithm
title: "Riemann-sum realization of a neural operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-discretization-invariant-operator-family, def-neural-operator, lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures]
forward_refs: [cex-raw-neural-operator-local-term-needs-input-reconstruction]
provenance:
  statement: ai-altered
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

The raw quadrature rule below takes the continuous input function, including any off-grid values used by a local term or pointwise lifting. It is not by itself asserted to factor through its stored input samples. A finite-sampling version is specified after the raw rule.

For the continuous-function architecture, given a finite partition of $D$ into measurable cells $E_1,\dots,E_N$, choose tags $\xi_j\in E_j$ and weights $\omega_j=|E_j|$. For input samples $v_0(\xi_j)$, replace each integral layer by
$$v_{t+1}^{(i)}=\sigma_t\!\left(W_tv_t^{(i)}+\sum_{j=1}^N\omega_j\kappa_t(\xi_i,\xi_j)v_t^{(j)}+b_t(\xi_i)\right),\qquad 1\le i\le N.$$
At an arbitrary output query $x\in\bar D'$, evaluate the same layer formula using $x$ in the first kernel argument and the stored input-cell values in the sum. Apply the pointwise lifting and projection networks with the same parameters at every discretization. A refinement changes the cells, tags, and weights, but not the continuum parameters $W_t,\kappa_t,b_t$ or the pointwise network parameters.

For a finite-sampling realization on continuous inputs, first reconstruct the input from its prescribed tags by the normalized nonnegative weights in the finite-sampling reconstruction bridge. Run the raw rule on this reconstructed function, including in the pointwise lifting and every local term. Its output is then a function of the finite input sample vector alone, with the same continuum parameters. The weights and reconstruction change with the partition; the learned parameters do not. The bridge proves compact-uniform convergence in the output supremum norm. For a stronger compatible Banach input/output formulation, supply reconstructions into the actual input Banach space that converge compact-uniformly in that input norm; the same bridge then preserves the raw rule's proved output Banach norm convergence. The explicit continuous-input weights alone do not assert this stronger reconstruction property.

## Definition references
[Kovachki et al., Appendix E: compatible finite-dimensional Riemann-sum maps](https://arxiv.org/pdf/2108.08481)

## Remark

At every refinement, each cell contributes its volume weight, all kernels and pointwise-network parameters are shared with the continuum operator, and the output can be evaluated at any query point. Changing only the mesh size without preserving these three conventions does not instantiate the discretization family defined above.

The integral universality subclass also admits $L^1$ input equivalence classes. Point samples of those classes are not canonical; this algorithm uses continuous representatives when applying sampling and makes no assertion of an intrinsic point-sampling rule on arbitrary $L^1$ classes. Norm convergence of the reconstructions requires the hypotheses of the discretization theorem for the chosen norm.

When the first input-dependent layer is integral-only, the raw rule already has a finite-sample reconstruction: its first output is a finite sum of kernel sections with coefficients given by the sampled lifting values. All later reconstructed fields depend only on those coefficients and fixed parameters. The finite-sampling bridge proves this exact factorization and transfers the full compatible-Banach raw convergence without an input-reconstruction premise. No such assertion is made for a raw local path retaining the original input.

The failure of exact finite sampling for an unchanged raw local path is illustrated in the counterexample cited below. This is a nonlogical reader example; the reconstruction and convergence claims above use the proved finite-sampling bridge.

## Remark references

[[cex-raw-neural-operator-local-term-needs-input-reconstruction|A raw local term can require input reconstruction]].
