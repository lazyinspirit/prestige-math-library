---
id: def-measure-with-density
kind: definition
title: "The measure with density $f$ relative to $\\mu$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-measure-with-density.json
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f:X\to[0,+\infty]$ be measurable. The **measure with density $f$ relative
to $\mu$** is the measure
$$f\,d\mu:\mathcal A\to[0,+\infty],\qquad (f\,d\mu)(A):=\int_A f\,d\mu,$$
whose measure property is supplied by
The indefinite integral of a nonnegative measurable function is a measure.

## Definition references

[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

