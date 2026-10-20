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

For the continuous-function architecture, take its pointwise lift $P$, layers indexed by $0\le t<L$, and pointwise projection $Q$. Given a finite partition of $D$ into nonempty measurable cells $E_1,\dots,E_N$, choose tags $\xi_j\in E_j$ and weights $\omega_j=|E_j|$. Initialize the raw lifted field $v_{0,n}(x)=P(a(x))$ on $\bar D$ and store $v_{0,n}(\xi_j)$. For each layer whose output domain is $\bar D$, define at every $x\in\bar D$
$$v_{t+1,n}(x)=\sigma_t\!\left(W_tv_{t,n}(x)+\sum_{j=1}^N\omega_j\kappa_t(x,\xi_j)v_{t,n}(\xi_j)+b_t(x)\right),$$
and store its values at all tags for the next layer. If the last layer instead has output domain $\bar D'\ne\bar D$, use its required zero local term and define, for $x\in\bar D'$,
$$v_{L,n}(x)=\sigma_{L-1}\!\left(\sum_{j=1}^N\omega_j\kappa_{L-1}(x,\xi_j)v_{L-1,n}(\xi_j)+b_{L-1}(x)\right).$$
Return the function $x\mapsto Q(v_{L,n}(x))$ on the output closure, evaluating these same formulas at each requested query point. A refinement changes cells, tags, and weights, while all layer, lifting, and projection parameters remain fixed.

For a finite-sampling realization on continuous inputs, first reconstruct the input from its prescribed tags by the normalized nonnegative weights in the finite-sampling reconstruction bridge. Run the raw rule on this reconstructed function, including in the pointwise lifting and every local term. Its output is then a function of the finite input sample vector alone, with the same continuum parameters. The weights and reconstruction change with the partition; the learned parameters do not. Along partition sequences whose maximal cell diameters $h_n=\max_j\operatorname{diam}(E_{n,j})$ tend to zero, if the raw maps converge compact-uniformly in the output supremum norm, the bridge transfers that convergence to this finite-sampling realization. For a stronger compatible Banach input/output formulation, supply reconstructions into the actual input Banach space that converge compact-uniformly in that input norm; the same bridge then preserves the raw rule's proved output Banach norm convergence. The explicit continuous-input weights alone do not assert this stronger reconstruction property.

## Definition references
[Kovachki et al., Appendix E: compatible finite-dimensional Riemann-sum maps](https://arxiv.org/pdf/2108.08481)

## Remarks

At every refinement, each cell contributes its volume weight, all kernels and pointwise-network parameters are shared with the continuum operator, and the output can be evaluated at any query point. Changing only the mesh size without preserving these three conventions does not instantiate the discretization family defined above.

The integral universality subclass also admits $L^1$ input equivalence classes. Point samples of those classes are not canonical; this algorithm uses continuous representatives when applying sampling and makes no assertion of an intrinsic point-sampling rule on arbitrary $L^1$ classes. Norm convergence of the reconstructions requires the hypotheses of the discretization theorem for the chosen norm.

When the first input-dependent layer is integral-only, the raw rule already has a finite-sample reconstruction: its first preactivation is a finite sum of kernel sections plus the fixed bias, with coefficients given by the sampled lifting values. Its first output is the coordinatewise activation of this preactivation and need not lie in the span of the kernel sections. All later reconstructed fields depend only on the sampled lifting values and fixed parameters. The finite-sampling bridge applies with this activation among the subsequent maps and transfers the full compatible-Banach raw convergence without an input-reconstruction premise. No such assertion is made for a raw local path retaining the original input.

The failure of exact finite sampling for an unchanged raw local path is illustrated in the counterexample cited below. This is a nonlogical reader example; the reconstruction and convergence claims above use the proved finite-sampling bridge.

## Remarks references

[[cex-raw-neural-operator-local-term-needs-input-reconstruction|A raw local term can require input reconstruction]].
