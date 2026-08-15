---
id: rem-the-choice-behind-assembling-an-adjoint
kind: remark
title: 'Objectwise existence does not itself supply a class-sized choice of adjoint values'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object, thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor, rem-choice-behind-limit-and-colimit-functors]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.7.1 and surrounding discussion'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Corollary 2.3.7'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

The reverse implications in [[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]] and [[thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor]] begin with chosen objects as data. An assertion that a suitable object exists separately for every object of a proper class does not by itself provide one class-function selecting them all. This is the same distinction recorded for limit and colimit functors in [[rem-choice-behind-limit-and-colimit-functors]]: after the object assignment is supplied, universal uniqueness determines the morphism assignment without further choice.
