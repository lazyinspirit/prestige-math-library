---
id: rem-lone-fourier-series-can-diverge-almost-everywhere
kind: remark
title: Reading the Kolmogorov example at the endpoint
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Grafakos, Classical Fourier Analysis, third edition', url: 'https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf', locator: '§4.2.1, Theorem 4.2.1 and (4.2.13), pp. 255–261'}, {title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorem 8.7 and omitted-proof discussion, pp. 51–52'}]
external_refs: [rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere, rem-carleson-hunt-almost-everywhere-convergence]
status: published
origin: pipeline
---

## Reading the endpoint witness

The function recorded in [[rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere]] belongs to $L^1(\mathbb T)$ and has unbounded Fourier partial sums almost everywhere. Integrability alone therefore does not entail almost-everywhere convergence.

Comparing that external assertion with [[rem-carleson-hunt-almost-everywhere-convergence]], the same witness cannot belong to $L^p(\mathbb T)$ for any $1<p<\infty$. For any fixed such exponent, the two recorded conclusions would otherwise give convergence and unboundedness outside the union of two null sets, which is impossible. It cannot be essentially bounded either: on a torus of mass one, essential boundedness implies membership in $L^2$.

This is an interpretation of the two literature records. No explicit formula or local verification of the Kolmogorov witness is supplied. Its almost-everywhere divergence does not assert divergence at any particular prescribed point, and it is different from unboundedness of the $L^1$ norms of partial sums.
