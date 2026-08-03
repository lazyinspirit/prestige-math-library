---
id: def-sunflower
kind: definition
title: "Sunflowers, petals, and their common core"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Definition

Let $r\in\mathbb N$ with $r\ge2$. Distinct finite sets
$F_1,\ldots,F_r$ form an
**$r$-petal sunflower** if there is a set $C$ such that

$$F_i\cap F_j=C\qquad(i\ne j).$$

The set $C$ is the **core**, the sets $F_i$ are the **flowers**, and the
pairwise disjoint sets $F_i\setminus C$ are the **petals**. Equivalently,
$F_1,\ldots,F_r$ form a sunflower precisely when their pairwise intersections
are all equal.

A sunflower is **$k$-uniform** when every flower has cardinality $k$. The core
may be empty; in that case the flowers themselves are pairwise disjoint.
