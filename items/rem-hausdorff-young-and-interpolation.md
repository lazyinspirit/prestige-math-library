---
id: rem-hausdorff-young-and-interpolation
kind: remark
title: Hausdorff–Young and interpolation orientation
deps: ["thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-plancherel", "thm-l-one-l-two-agreement-of-fourier-transform", "lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1 equation (14.2), Theorem 14.10; §15.1 Theorem 15.2 and Corollary 15.3, pp.414–415, interpolation orientation only
---

## Remark

Assume countable choice. In the fixed negative-sign, $2\pi$ normalization, the Fourier operator has norm one at both endpoints $L^1\to L^\infty$ and $L^2\to L^2$.

For the first endpoint, [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] gives the upper bound one. The nonnegative Gaussian $g(x)=e^{-\pi|x|^2}$ has $\|g\|_1=1$ and $\widehat g(0)=1$ by [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]. Continuity means its essential supremum is also one: every smaller positive bound is exceeded on a neighbourhood of zero of positive measure. Thus the operator norm is at least one. [[thm-plancherel]] supplies the second norm-one endpoint, and [[thm-l-one-l-two-agreement-of-fourier-transform]] verifies agreement on their common domain.

These are the inputs to the Hausdorff–Young interpolation route. Teschl's endpoint-capable interpolation theorem, Theorem 15.2 and its extension Corollary 15.3, permits infinite endpoint exponents. A theorem restricting both target endpoint exponents to finite values cannot supply the $L^1\to L^\infty$ endpoint. The published page `complex-riesz-thorin-endpoint-interpolation` develops this separate subject outside this pair's authorized prerequisite closure. It is orientation here, not an input to any proof on this pair; no intermediate-exponent Hausdorff–Young theorem is asserted by this remark. Countable choice ([[def-countable-choice]]) is inherited from the Gaussian and Plancherel suppliers.
