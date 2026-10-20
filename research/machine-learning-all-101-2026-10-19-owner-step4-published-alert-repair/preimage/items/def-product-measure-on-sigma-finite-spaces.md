---
id: def-product-measure-on-sigma-finite-spaces
kind: definition
title: "The product measure of two sigma-finite measure spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-iterated-section-measures-agree-on-product-measurable-sets, prop-sigma-finite-section-measure-functions-are-measurable]
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.7.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Definition

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure
spaces. For $E \in \mathcal A \otimes \mathcal B$, define

$$(\mu \times \nu)(E) := \int_X \nu(E_x)\,d\mu = \int_Y \mu(E^y)\,d\nu.$$

The two displayed integrals are well-defined by
[[prop-sigma-finite-section-measure-functions-are-measurable]] and equal by
[[thm-iterated-section-measures-agree-on-product-measurable-sets]]. This is the
**product measure** of $\mu$ and $\nu$.
