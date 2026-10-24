---
id: rem-distinct-odd-proof-agreement
kind: remark
title: "The generating-function proof and Glaisher's bijection prove the same Euler theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-euler-distinct-parts-equal-odd-parts-by-generating-functions,
       thm-glaisher-bijection-between-odd-and-distinct-partitions]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Remarks

[[thm-euler-distinct-parts-equal-odd-parts-by-generating-functions]] proves
Euler's theorem by identifying two formal products and then comparing
coefficients. [[thm-glaisher-bijection-between-odd-and-distinct-partitions]]
proves the same equality by explicitly transporting one partition family to the
other.

The two routes therefore agree in the strongest possible sense: one gives
coefficientwise equality of generating series, the other gives an actual
bijection on each size-$n$ layer. The page keeps both because they use
different ideas, not because they assert different numerical claims.
