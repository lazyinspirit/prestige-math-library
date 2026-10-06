---
id: rem-triviality-and-finiteness-are-undecidable-for-finite-presentations
kind: remark
title: "Triviality and finiteness are undecidable for finite presentations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [rem-adian-rabin-undecidability-for-markov-properties]
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Word_problems/"
  exact_statement: "The properties of being the trivial group and of being finite are Markov properties, hence are not recursively decidable from finite presentations."
  local_proof_attempt: "A local proof would first have to verify these two properties satisfy the exact Markov witness hypotheses and then import the full Adian-Rabin theorem, which is not proved here."
  necessity: "These are the concrete corollaries of Adian-Rabin singled out on this introductory page."
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  sources_checked:
    date: 2026-08-29
    scope: citations
    by: session-audit
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "MacTutor History of Mathematics, Word problems"
      url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Word_problems/"
    - title: "Alex Bishop, Minicourse: On Decision Problems in Groups"
      url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
pipeline_run: null
---

## Statement

There is no algorithm which, from a finite presentation, decides whether the
presented group is trivial. There is also no algorithm which decides whether
the presented group is finite.

## Remarks

These are concrete Adian-Rabin corollaries: triviality and finiteness are both
Markov properties, so the undecidability statement is inherited from
[[rem-adian-rabin-undecidability-for-markov-properties]] rather than proved
separately here.
