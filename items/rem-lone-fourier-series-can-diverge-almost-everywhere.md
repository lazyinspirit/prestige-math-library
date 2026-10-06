---
id: rem-lone-fourier-series-can-diverge-almost-everywhere
kind: remark
title: Reading the Kolmogorov example at the endpoint
deps: [thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere, thm-carleson-hunt-maximal-inequality-on-the-torus, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references: [{title: 'Grafakos, Classical Fourier Analysis, third edition', url: 'https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf', locator: '§4.2.1, Theorem 4.2.1 and (4.2.13), pp. 255–261'}, {title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorem 8.7 and omitted-proof discussion, pp. 51–52'}]
status: published
origin: pipeline
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-lone-fourier-series-can-diverge-almost-everywhere.json
---

## Reading the endpoint witness

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The proved theorem [[thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere]] supplies a complex $f\in L^1(\mathbb T)$ whose symmetric Fourier partial sums are unbounded almost everywhere, with normalized period-one torus conventions. Since every convergent sequence of complex numbers is bounded, integrability alone does not entail almost-everywhere convergence.

This witness cannot belong to $L^p(\mathbb T)$ for any fixed $1<p<\infty$. If it did, [[thm-carleson-hunt-maximal-inequality-on-the-torus]] would give $\int(Cf)^p\,dm<\infty$, hence $Cf<\infty$ almost everywhere, contrary to the witness. A nonnegative function with finite integral is finite almost everywhere: if its infinity set had positive measure, every positive constant times the indicator of that set would be an integrable lower bound of arbitrarily large integral. Essential boundedness is also impossible, since on the mass-one torus $\|f\|_2\le\|f\|_\infty$ would put it in $L^2$.

The divergence conclusion concerns a full-measure set and does not identify any prescribed point. Unbounded partial sums almost everywhere and unbounded operator norms on $L^1$ are distinct assertions. AC is inherited from the two local theorems; no additional choice is used in this interpretation.
