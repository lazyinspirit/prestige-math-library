---
id: cor-ml-estimate-for-complex-line-integrals
kind: corollary
title: "ML estimate: a contour integral is bounded by a supremum bound times path length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-inequality-for-complex-line-integrals, def-arc-length-function, cor-riemann-stieltjes-integral-bound, thm-scalar-and-vector-line-integral-estimates]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$, with $M\ge0$, then
$$\left|\int_\gamma f(z)\,dz\right|\le M L(\gamma).$$

## Facts & Assumptions

**Given:** A continuous $f$ with $|f|\le M$ on a rectifiable contour $\gamma$.

[L1] The fundamental inequality bounds the complex integral by the absolute line integral ([[thm-fundamental-inequality-for-complex-line-integrals]]).

[L2] The arc-length function satisfies $s_\gamma(b)-s_\gamma(a)=L(\gamma)$ ([[def-arc-length-function]]).

[L3] The Stieltjes integral bound gives $|\int f\,d\alpha|\le M\operatorname{Var}(\alpha)$ under $|f|\le M$ ([[cor-riemann-stieltjes-integral-bound]]).

[L4] For piecewise-$C^1$ paths, published scalar and vector line integrals obey the bound $M L(\gamma)$ ([[thm-scalar-and-vector-line-integral-estimates]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] to $|f\circ\gamma|$ and the nondecreasing $s_\gamma$; by [L2], $\int_\gamma|f|\,|dz|\le M L(\gamma)$. [L2, L3]

2.1 Combine step 1.1 with [L1]. [step 1.1, L1]

3.1 This agrees with the published piecewise-$C^1$ estimate [L4] on its exact domain and extends it to rectifiable contours. The cases $M=0$ and $L(\gamma)=0$ give zero directly. [step 2.1, L4] ∎
