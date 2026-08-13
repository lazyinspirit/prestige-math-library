---
id: def-small-finite-and-large-limits-completeness-and-cocompleteness
kind: definition
title: "Finite, small, and large limits and colimits; complete and cocomplete categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-and-colimit-of-a-diagram, def-cardinality-of-a-small-category-and-kappa-small-diagram, def-small-locally-small-and-large-category]
justified_by: []
aliases: [def-complete-category, def-cocomplete-category]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definitions 3.2.1 and 3.2.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

A diagram is **finite** when its indexing category has finitely many morphisms,
**small** when its indexing category is small, and **large** otherwise
([[def-cardinality-of-a-small-category-and-kappa-small-diagram]],
[[def-small-locally-small-and-large-category]]).

A category has **finite limits**, **small limits**, or a specified class of
limits when every diagram of the corresponding class has a limit in the sense
of [[def-limit-and-colimit-of-a-diagram]]. It is **complete** when it has all
small limits. The dual terms are **finite colimits**, **small colimits**, and
**cocomplete**. Completeness and cocompleteness do not assert the existence of
limits or colimits of large diagrams.
