---
id: rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost
kind: remark
title: "Why the unrestricted complete-metric Baire theorem would overstate the choice cost here"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-banach-space-no-countably-infinite-hamel-basis,
       rem-baire-category-choice-strength]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: frontier-29
---

## Remark

The proof of
[[thm-banach-space-no-countably-infinite-hamel-basis]] does not need the full
statement "every complete metric space is Baire". It only needs the separable
complete-metric route, and that is exactly the distinction recorded in
[[rem-baire-category-choice-strength]]: over ZF, the separable theorem is
choice free, whereas the unrestricted complete-metric theorem is equivalent to
Dependent Choice.

That matters here because the countable Hamel basis already supplies an explicit
countable dense set, namely the rational span of the basis. Using the sharper
argument records the actual cost of the theorem proved on this page. Invoking
the unrestricted theorem would still yield a correct proof of the Banach-space
claim, but it would advertise a stronger choice principle than the written
argument spends.
