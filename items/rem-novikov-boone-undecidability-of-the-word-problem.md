---
id: rem-novikov-boone-undecidability-of-the-word-problem
kind: remark
title: "Novikov-Boone: some finitely presented group has unsolvable word problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-word-problem-for-a-fixed-finite-presentation]
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
  exact_statement: "There exists a finitely presented group whose word problem is recursively unsolvable."
  local_proof_attempt: "A local proof would need the Novikov-Boone simulation construction and the associated reduction from general algorithmic undecidability to triviality of words in one fixed finitely presented group."
  necessity: "The page needs this theorem as the exact negative boundary for the fixed-presentation word problem and for the companion false statements."
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

There exists a finitely presented group whose word problem is unsolvable.

## Remarks

This is the fixed-presentation form of the classical Novikov-Boone theorem. It
already says that one particular finitely presented group has no decision
algorithm for triviality of words; it is not merely a statement about varying
the presentation as part of the input.
