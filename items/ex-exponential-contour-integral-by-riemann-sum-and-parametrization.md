---
id: ex-exponential-contour-integral-by-riemann-sum-and-parametrization
kind: example
title: "An exponential contour integral approximated by Riemann sums and evaluated by parametrization and a primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-line-integral-over-a-rectifiable-path, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, thm-fundamental-theorem-for-complex-line-integrals, thm-complex-exponential-is-entire-with-derivative-itself]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, §§6.1–6.2"
      url: "https://complexanalysis.org/web/sec_complex-integrals.html"
pipeline_run: null
---

## Example

Let $w=2+i\pi/4$ and $\gamma(t)=tw$ for $0\le t\le1$. Then
$$\int_\gamma \exp z\,dz=\exp(2+i\pi/4)-1.$$
The integral is obtained both as the limit of midpoint sums and from parametrization or a primitive.

## Facts & Assumptions

**Given:** The segment $\gamma(t)=tw$ and the integrand $\exp z$.

[L1] The rectifiable complex integral is defined by componentwise Riemann–Stieltjes integrals ([[def-complex-line-integral-over-a-rectifiable-path]]).

[L2] On a piecewise-$C^1$ contour it agrees with the parametric integral $\int f(\gamma(t))\gamma'(t)\,dt$ ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L3] The complex exponential is entire and has derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L4] Let $F$ be a primitive of a continuous function $f$ on an open set containing the trace of a rectifiable contour $\gamma:[a,b]\to\mathbb C$. If $F'=f$ is continuous, then $\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

## Verification

**Proof technique:** direct.

1.1 The midpoint sum for the uniform $N$-partition is $S_N=\sum_{j=0}^{N-1}\exp((j+1/2)w/N)\,w/N$; by [L1] these sums converge componentwise to the contour integral. [L1]

1.2 By [L2], the same limit is $\int_0^1\exp(tw)w\,dt$. Since $(\exp(tw))'=w\exp(tw)$ by [L3], this equals $\exp w-1$. [L2, L3, algebra]

2.1 Alternatively, [L3] makes $\exp$ its own primitive on all of $\mathbb C$, and since that derivative is $\exp$ itself it is continuous, so [L4] applies and gives the same endpoint increment $\exp w-\exp 0$ directly. [step 1.2, L3, L4] ∎
