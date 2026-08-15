---
id: ex-riemann-stieltjes-integral-on-a-polygonal-contour
kind: example
title: "The rectifiable Riemann–Stieltjes definition on an explicit polygonal contour with corners"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-line-integral-over-a-rectifiable-path, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, prop-reversal-and-concatenation-of-complex-line-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Example 6.2.4"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Example

Let $\gamma$ follow the three segments $0\to1\to1+i\to i$, and let $f(z)=z$. Then the componentwise Riemann–Stieltjes definition gives
$$\int_\gamma z\,dz=-\frac12,$$
the same value as the piecewise-$C^1$ parametric formula. The corners require no matching derivatives.

## Facts & Assumptions

**Given:** The polygonal contour and affine integrand in the Example.

[L1] The complex integral is the combination of four real Riemann–Stieltjes integrals ([[def-complex-line-integral-over-a-rectifiable-path]]).

[L2] On piecewise-$C^1$ contours it agrees with the parametric complex integral ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L3] Integrals add under concatenation ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Verification

**Proof technique:** direct.

1.1 On each affine segment, the four Stieltjes components in [L1] reduce to ordinary integrals against constant coordinate derivatives. Recombination gives $\int_0^1\gamma_j(t)\gamma'_j(t)dt$ on that segment. [L1, algebra]

2.1 Each segment integral is $(z_1^2-z_0^2)/2$. Adding the three endpoint increments by [L3] telescopes to $(i^2-0^2)/2=-1/2$. [step 1.1, L3, algebra]

3.1 Formula [L2] gives the same three parametric integrals. The one-sided derivatives at the two corners need not agree. [step 1.1, step 2.1, L2] ∎
