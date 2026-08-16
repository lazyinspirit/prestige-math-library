---
id: prop-reversal-and-concatenation-of-complex-line-integrals
kind: proposition
title: "Complex line integrals change sign under reversal and add under concatenation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-complex-line-integral-over-a-rectifiable-path, def-absolute-line-integral-over-a-rectifiable-path, thm-riemann-stieltjes-linearity-and-additivity, thm-line-integrals-under-reversal-and-concatenation, thm-riemann-stieltjes-change-of-variable]
aliases: []
landmark: false
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

[L5] Let $c<d$ and $a<b$, and let $\phi:[c,d]\to[a,b]$ be a strictly increasing continuous bijection. For $f,\alpha:[a,b]\to\mathbb R$, one of the two Riemann–Stieltjes integrals below exists if and only if the other does, and then $\int_a^b f\,d\alpha=\int_c^d(f\circ\phi)\,d(\alpha\circ\phi)$ ([[thm-riemann-stieltjes-change-of-variable]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the reversal is $\gamma^-(t)=\gamma(a+b-t)$. The map $t\mapsto a+b-t$ sends a partition $a=t_0<\dots<t_n=b$ to the partition with points $a+b-t_n<\dots<a+b-t_0$ and sends tags to tags, so it is a mesh-preserving bijection between tagged partitions of $[a,b]$ and tagged partitions of $[a,b]$. Under it each coordinate increment for $\gamma^-$ is the negative of the matching increment for $\gamma$, since the two subinterval endpoints are exchanged; each arc-length increment is instead unchanged, because by [L1] length is unaffected by monotone reparametrization. Hence every Riemann–Stieltjes sum in the coordinate integrators of [L4] for $\gamma^-$ is the negative of the corresponding sum for $\gamma$, and every sum in the arc-length integrator is equal to it. Passing to the limit over refinements yields the two reversal identities. [L1, L4, algebra]

1.2 By [L1] the concatenation $\alpha*\beta$ is given on $[0,\tfrac12]$ and $[\tfrac12,1]$ by the two standard affine pieces, each a strictly increasing continuous bijection onto its factor's parameter interval. Apply [L5] to each component Stieltjes integral in [L4] to transport it to the factor's own interval. The integrators are coordinates and arc length of a rectifiable path, hence of bounded variation, and the integrand is continuous, so the join $\tfrac12$ satisfies the additivity hypotheses of [L2]; splitting there and recombining gives both additive identities. [L1, L2, L4, L5]

2.1 On piecewise-$C^1$ contours these conclusions agree exactly with [L3], whose hypotheses and orientation distinction are preserved. Constant pieces contribute $0$. [step 1.1, step 1.2, L3] ∎
