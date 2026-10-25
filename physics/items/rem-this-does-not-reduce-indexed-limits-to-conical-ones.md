---
id: rem-this-does-not-reduce-indexed-limits-to-conical-ones
kind: remark
title: "The completeness test does not reduce indexed limits to conical ones"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-enriched-completeness-is-cotensors-plus-small-conical-limits, thm-conical-limits-do-not-suffice-in-the-enriched-setting]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, closing remark after Theorem 3.73"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Remark

[[thm-enriched-completeness-is-cotensors-plus-small-conical-limits]] is a test
for when all enriched limits exist. It is not a claim that the notion of
weighted limit can be discarded in favor of conical ones. The warning from
[[thm-conical-limits-do-not-suffice-in-the-enriched-setting]] remains in force:
weights carry genuine information, and the completeness theorem only says that
cotensors plus conical limits are enough to reconstruct that information when
they are all available.
