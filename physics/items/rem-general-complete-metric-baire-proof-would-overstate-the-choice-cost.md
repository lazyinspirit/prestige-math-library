---
id: rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost
kind: remark
title: "Why the unrestricted complete-metric Baire theorem would overstate the choice cost here"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-banach-space-no-countably-infinite-hamel-basis]
justified_by: []
forward_refs: [thm-separable-complete-metric-baire-in-zf, thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf]
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: frontier-29
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost.json
---

## Remark

The proof of
[[thm-banach-space-no-countably-infinite-hamel-basis]] does not need the full
statement "every complete metric space is Baire". Its nested-ball argument uses a fixed dense sequence. The two available general results separating this route from the unrestricted principle are
[[thm-separable-complete-metric-baire-in-zf]] and [[thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf]]: over ZF, the separable theorem is
choice free, whereas the unrestricted complete-metric theorem is equivalent to
Dependent Choice.

That matters here because the countable Hamel basis already supplies an explicit
countable dense set, namely the rational span of the basis. Using the sharper
argument records the actual cost of the theorem proved on this page. Invoking
the unrestricted theorem would still yield a correct proof of the Banach-space
claim, but it would advertise a stronger choice principle than the written
argument spends.
