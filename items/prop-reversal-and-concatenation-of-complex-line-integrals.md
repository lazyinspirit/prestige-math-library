---
id: prop-reversal-and-concatenation-of-complex-line-integrals
kind: proposition
title: "Complex line integrals change sign under reversal and add under concatenation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-complex-line-integral-over-a-rectifiable-path, def-absolute-line-integral-over-a-rectifiable-path, thm-riemann-stieltjes-linearity-and-additivity, thm-line-integrals-under-reversal-and-concatenation]
aliases: []
landmark: false
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

For a rectifiable contour $\gamma$,
$$\int_{\gamma^-}f\,dz=-\int_\gamma f\,dz,\qquad \int_{\gamma^-}|f|\,|dz|=\int_\gamma|f|\,|dz|.$$
For composable rectifiable contours $\alpha,\beta$,
$$\int_{\alpha*\beta}f\,dz=\int_\alpha f\,dz+\int_\beta f\,dz,$$
and the analogous additive identity holds for the absolute integral.

## Facts & Assumptions

**Given:** Continuous integrands and rectifiable contours with matching endpoints when concatenated.

[L1] A contour reversal is $\gamma^-(t)=\gamma(a+b-t)$; unit-interval contours with matching endpoints concatenate by the two standard affine pieces, and length is unchanged by monotone reparametrization ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[L2] Real Riemann–Stieltjes integrals are additive across a join and linear in the integrator ([[thm-riemann-stieltjes-linearity-and-additivity]]).

[L3] For piecewise-$C^1$ paths, published vector line integrals change sign under reversal and both scalar and vector line integrals add under concatenation ([[thm-line-integrals-under-reversal-and-concatenation]]).

[L4] The complex integral is the combination of four component Riemann–Stieltjes integrals, and the absolute integral is the Riemann–Stieltjes integral against arc length ([[def-complex-line-integral-over-a-rectifiable-path]], [[def-absolute-line-integral-over-a-rectifiable-path]]).

## Proof

**Proof technique:** direct.

1.1 Apply the decreasing affine change of parameter defining [L1] to each component Stieltjes integral in [L4]: the coordinate increments change sign, while the arc-length increments do not. This yields the two reversal identities. [L1, L2, L4]

1.2 Split each component Stieltjes integral from [L4] at the concatenation join and apply [L2]; recombination gives both additive identities. [L1, L2, L4]

2.1 On piecewise-$C^1$ contours these conclusions agree exactly with [L3], whose hypotheses and orientation distinction are preserved. Constant pieces contribute $0$. [step 1.1, step 1.2, L3] ∎
