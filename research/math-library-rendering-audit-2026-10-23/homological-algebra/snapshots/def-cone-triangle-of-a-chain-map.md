---
id: def-cone-triangle-of-a-chain-map
kind: definition
title: "The cone triangle of a chain map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-mapping-cone-of-a-chain-map, def-canonical-inclusion-and-projection-for-a-mapping-cone]
verification:
  audited: 2026-08-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Definition

Let $f:C_\bullet\to D_\bullet$ be a chain map. The associated **cone triangle**
is the chain-level sequence
$$C_\bullet\xrightarrow{f}D_\bullet\xrightarrow{j}\operatorname{Cone}(f)_\bullet\xrightarrow{q}C[1]_\bullet,$$
where $j$ and $q$ are the canonical maps of
[[def-canonical-inclusion-and-projection-for-a-mapping-cone]].

On this page the term "cone triangle" refers only to this explicit construction;
the later triangulated-category page supplies the abstract distinguished-triangle
language.
