---
id: rem-roydens-vitali-route-is-a-third-proof
kind: remark
title: "Royden's classical Vitali-covering proof is a third route and is not run on this page"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun, thm-vitali-covering-theorem-for-fine-covers-on-the-line]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "H. L. Royden and P. Fitzpatrick, Real Analysis, monotone differentiation proof"
      url: "https://archive.org/details/realanalysis0000royd"
---

## Remark

There is a third classical proof that monotone functions are differentiable
almost everywhere. One first proves measurability of the Dini derivative level
sets, then applies the Vitali covering theorem to the sets where the upper and
lower derived numbers disagree.

This page does not run that route. The rising-sun proof and the
Lebesgue-Stieltjes proof already expose the mathematical comparison the design
wanted:

- the rising-sun route reaches the theorem without the Vitali covering theorem;
- the measure route factors the result through differentiation of measures and
  the Stieltjes correspondence;
- the Vitali route is historically important, but it duplicates the
  almost-everywhere differentiability conclusion without adding a later
  dependency that this page needs.
