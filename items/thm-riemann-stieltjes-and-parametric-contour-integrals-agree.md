---
id: thm-riemann-stieltjes-and-parametric-contour-integrals-agree
kind: theorem
title: "For piecewise-C1 contours the Riemann–Stieltjes integral agrees with the parametric complex integral and the published real line integrals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-riemann-stieltjes-c1-integrator-reduction, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-vector-valued-derivative-and-integral, cor-piecewise-c1-paths-have-additive-speed-integral-length]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be piecewise-$C^1$ and let $f$ be continuous on its trace. Then
$$\int_\gamma f(z)\,dz=\sum_j\int_{t_j}^{t_{j+1}}f(\gamma(t))\gamma'_j(t)\,dt,$$
and
$$\int_\gamma |f(z)|\,|dz|=\sum_j\int_{t_j}^{t_{j+1}}|f(\gamma(t))|\,|\gamma'_j(t)|\,dt.$$
The real and imaginary parts of the first display are the published vector line integrals of $(u,-v)$ and $(v,u)$, while the second is the published scalar line integral.

## Facts & Assumptions

**Given:** A piecewise-$C^1$ contour $\gamma=x+iy$, a continuous $f=u+iv$, and an admissible partition $(t_j)$.

[L1] For a continuous integrator whose derivative extends continuously, the Riemann–Stieltjes integral equals the ordinary integral against that derivative ([[thm-riemann-stieltjes-c1-integrator-reduction]]).

[L2] The published scalar and vector line integrals are the sums of $\int f(\gamma)|\gamma'|$ and $\int\langle F(\gamma),\gamma'\rangle$ over the smooth pieces ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L3] A piecewise-$C^1$ path has length equal to the sum of the speed integrals, with corners and singleton intervals allowed ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L4] Vector-valued derivatives and integrals are defined componentwise ([[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** direct.

1.1 On each smooth piece, apply [L1] to the four component Stieltjes integrals; recombination gives $\int f(\gamma(t))(x'_j(t)+iy'_j(t))\,dt=\int f(\gamma(t))\gamma'_j(t)\,dt$. [L1, L4, algebra]

1.2 Applying [L1] to the arc-length integrator and using [L3] gives the absolute-integral formula, which is the scalar line integral in [L2]. [L1, L2, L3]

2.1 The real and imaginary parts in step 1.1 are exactly the vector line integrals of $(u,-v)$ and $(v,u)$ from [L2]. This uses the published real construction in a numbered step, with its piecewise-$C^1$ hypothesis unchanged. [step 1.1, L2]

3.1 Summing the identities over the pieces proves both displays. No equality of one-sided derivatives at corners is needed, and zero-speed pieces contribute $0$. [step 1.1, step 2.1, step 1.2] ∎
