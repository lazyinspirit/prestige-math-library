---
id: ex-pe03-conservative-positivity-rescaling
kind: example
title: Two Euler quadrature nodes rescaled to a positive margin
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-pe03-euler-positive-margin-domain
  - alg-pe03-convex-scaling-positivity-limiter
  - thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity
proof_strategy: direct
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, convex scaling limiter for Euler density and pressure, PDF pp. 5–9; full article read"
    - title: "J.-L. Guermond and B. Popov, Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf"
      locator: "§2.2, preservation by convex combinations, PDF pp. 3–4; complete article read"
---

## Example

With weights $w_1=w_2=1/2$, cell mean $\bar U=(1,0,1)$, and candidate
conserved states $V_1=(1,4,1)$ and $V_2=(1,-4,1)$, apply the limiter to
$K_{7/5,1/2}$. It returns $\theta_*=1/4$, giving states $(1,1,1)$ and
$(1,-1,1)$ with positive pressure and the original cell mean.

## Facts & Assumptions

**Given:** The weights, mean, nodes, and set $K_{7/5,1/2}$. Compute the maximal scaling and verify the mean and positive margin.

[F1] [[alg-pe03-convex-scaling-positivity-limiter]]: the limiter chooses the largest $\theta\in[0,1]$ keeping each $\bar U+\theta(V_j-\bar U)$ in $K$.

[F2] [[def-pe03-euler-positive-margin-domain]]: $K_{\gamma,\varepsilon}$ requires $\rho\ge\varepsilon$ and $E-m^2/(2\rho)\ge\varepsilon$.

[F3] [[def-ideal-gas-euler-state-and-pressure]]: $p=(\gamma-1)(E-m^2/(2\rho))$.

[F4] [[thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity]]: the maximal scaling exists, preserves the weighted mean, and returns nodes in the positive-margin set.

## Verification

1.1 The weighted mean is $(V_1+V_2)/2=(1,0,1)$. Its density is $1$ and its internal-energy density is $1$, so it belongs to $K_{7/5,1/2}$ by [F2]. The scaled states are $(1,4\theta,1)$ and $(1,-4\theta,1)$, each with internal energy $1-8\theta^2$. Hence they lie in $K_{7/5,1/2}$ exactly when $1-8\theta^2\ge1/2$, or $0\le\theta\le1/4$. [given, F2, algebra]

2.1 The largest feasible parameter is $\theta_*=1/4$ by [F1]. The outputs are $(1,1,1)$ and $(1,-1,1)$; each has internal-energy density $1/2$ and pressure $(2/5)(1/2)=1/5>0$ by [F3]. Their weighted mean is $(1,0,1)$, also as guaranteed by [F4]. [given, F1, F2, F3, F4, algebra] ∎

