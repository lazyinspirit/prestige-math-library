---
id: rem-riesz-thorin-supplied-by-measure-theory
kind: remark
title: The interpolation input belongs to measure theory
deps: ["thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions"]
status: published
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
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

## Interpolation input

The bound $\|\widehat f\|_\infty\le\|f\|_1$ in [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] supplies the Fourier $L^1\to L^\infty$ endpoint. Interpolation requires a theorem that actually permits an infinite target exponent. A theorem stated only with finite target endpoint exponents cannot supply that step.

The published page `complex-riesz-thorin-endpoint-interpolation` is the designated endpoint-capable supplier; it lies outside this pair's current prerequisite closure. Its role here is orientation. Intermediate-exponent Fourier bounds are not asserted or used in this page, and no second Riesz–Thorin theorem is introduced. The later Plancherel pair supplies the other Fourier endpoint and common-domain agreement needed for that route.
