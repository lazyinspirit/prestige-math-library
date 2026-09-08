---
id: def-complex-l-two-inner-product
kind: definition
title: "The complex $L^2$ pairing on equivalence classes"
status: draft
origin: pipeline
landmark: false
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm]
justified_by: [thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.2, Theorem 10.4 (p=2); convention: Laugesen Ch.1, p.10. Teschl (10.5), p.282, conjugates the first variable; this scaffold reverses that convention as required by MT-16c."
---

## Definition

For $[f],[g]\in L^2(\mu;\mathbb C)$, the proposed pairing is
$$\langle[f],[g]\rangle:=\int_X f\overline g\,d\mu.$$
The integral is computed from measurable representatives. By [[thm-complex-holder-minkowski-and-the-quotient-norm]], $\overline g\in L^2$ and $\int|f\overline g|\le\|f\|_2\|g\|_2<\infty$, so this representative expression is defined. The measurable and integration conventions are those of [[def-complex-lp-and-euclidean-test-function-conventions]]. This fixes the **first-variable-linear** convention. The following theorem, named in `justified_by`, establishes class invariance and the inner-product axioms; the present definition does not assume that obligation.
