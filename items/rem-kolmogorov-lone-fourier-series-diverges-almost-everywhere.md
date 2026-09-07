---
id: rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere
kind: remark
title: Kolmogorov almost-everywhere divergence — recorded theorem
deps: [def-carleson-maximal-partial-sum-operator]
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: 'Grafakos, Classical Fourier Analysis, third edition'
      url: 'https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf'
      locator: '§4.2.1, Theorem 4.2.1 and (4.2.7)–(4.2.13), pp. 255–261'
proved_here: false
external_dependency:
  source_url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
  exact_statement: There exists f in L1(T) for which sup_{N>=0}|S_N f(x)|=infinity for almost every x. In particular the Fourier series diverges almost everywhere.
  local_proof_attempt: Read the full summation construction through (4.2.13). It depends on the unsupplied polynomial lemma. The design explicitly keeps the entire Kolmogorov theorem external, so the polynomial lemma is an external mention, never a deps edge.
  necessity: Required by FR-5’s explicit literature boundary; retained for mathematical scope without making an unproved result a logical prerequisite.
external_refs: [rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima]
status: published
origin: pipeline
verification:
  sources_checked:
    date: 2026-09-07
    scope: citations
    by: session-audit
  precheck: n/a
---

## Recorded theorem

There exists $f\in L^1(\mathbb T)$, where $\mathbb T=\mathbb R/\mathbb Z$ has Haar mass one, such that

$$\sup_{N\ge0}|S_Nf(x)|=\infty\qquad\text{for almost every }x\in\mathbb T.$$

Equivalently, the function in [[def-carleson-maximal-partial-sum-operator]] is infinite almost everywhere for this $f$. Every individual partial sum is finite. The Fourier series therefore diverges almost everywhere.

This records Grafakos, Theorem 4.2.1 and the explicit conclusion (4.2.13). No local proof is supplied, and the claim is not strengthened to divergence at every point.

## Source architecture

The source forms a summable weighted series of the polynomials in [[rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima]]. It chooses weights and polynomial degrees recursively. The large contribution of the current polynomial must exceed both the contribution of earlier polynomials and the tail; those two errors require separate estimates. A full-measure limsup of the good sets supplies arbitrarily large partial sums of the final integrable function. The polynomial construction and this summation argument remain external, so the linked record is a bibliographic mention rather than a logical prerequisite.
