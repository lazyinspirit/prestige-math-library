---
id: def-integral-of-a-compactly-supported-smooth-density
title: "Integral of a compactly supported smooth density"
kind: definition
status: draft
origin: pipeline
deps: ["def-density-bundle-and-smooth-density", "lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions", "lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary"]
justified_by: ["thm-density-integration-is-defined-without-an-orientation"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee density-integral construction pp.431–432; Nicolaescu Proposition 3.4.3"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---
## Definition

Assume $\mathrm{AC}_\omega$. Let $\delta$ be a compactly supported smooth density on $M^n$, with boundary allowed. Choose a chart partition $(\rho_i)$ and write $\rho_i\delta=f_i|dx_i|$. For $n\geq1$ define
$$\int_M\delta=\sum_i\int_{\mathbb R^n}\widetilde f_i(x_i)\,dx_i.$$
The zero extensions are Riemann integrable, including at genuine faces, by [[lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions]]. The compact-support/local-finiteness argument of [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]] applies to density supports as closed sets, so the sum is finite. For $n=0$ sum the scalar density values over the finite support, without orientation signs. Empty support gives zero. Choice independence is discharged by [[thm-density-integration-is-defined-without-an-orientation]].
