---
id: rem-adian-rabin-undecidability-for-markov-properties
kind: remark
title: "Adian-Rabin: every Markov property is undecidable on finite presentations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-markov-property-of-finitely-presented-groups, rem-novikov-boone-undecidability-of-the-word-problem]
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
  exact_statement: "For every Markov property of finitely presented groups, there is no algorithm deciding from a finite presentation whether the presented group has that property."
  local_proof_attempt: "A local proof would need the Adian-Rabin reduction that turns an arbitrary word-problem instance into a finite presentation whose possession of the chosen property is equivalent to the original triviality question."
  necessity: "The page needs the theorem as the exact boundary result explaining why triviality and finiteness are undecidable and why these are not isolated examples."
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alex Bishop, Minicourse: On Decision Problems in Groups"
      url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
    - title: "MacTutor History of Mathematics, Word problems"
      url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Word_problems/"
pipeline_run: null
---

## Statement

Every Markov property of finitely presented groups is undecidable on finite
presentations.

## Remarks

The witness groups required by [[def-markov-property-of-finitely-presented-groups]]
are part of the theorem's hypotheses, not a dispensable ornament. The point is
that a positive witness and an obstruction witness let one encode arbitrary
word-problem instances into finite presentations whose possession of the
property detects the original instance.

This page records that reduction as a boundary theorem only. It does not
rebuild the Adian-Rabin construction.
