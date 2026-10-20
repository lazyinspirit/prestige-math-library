---
id: rem-differential-privacy-scope-and-limitations
kind: remark
title: Record-level scope and limits of differential privacy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-differential-privacy-and-adjacency
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: No choice axiom is used.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Remark

The definition on this page is central, record-level privacy for add/remove adjacency. It does not by itself define client-level or local privacy, and keeping data on a device or applying secure aggregation does not establish the event inequalities in this definition. Differential privacy limits the effect of one record on a release; it does not prevent conclusions about an attribute that is strongly correlated with other records or public information.

## Remark references

[[def-differential-privacy-and-adjacency|Central record-level add/remove adjacency]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §§2.1, 2.3–2.4, printed pp. 11–27.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §§1.6 and 9.2, PDF pp. 9–10 and 93–94.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)
