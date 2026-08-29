---
id: fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition
kind: false-statement
title: "FALSE: the fundamental group of a graph of groups is a topological fundamental group by definition"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement

The fundamental group of a graph of groups is, by definition, a topological
fundamental group of a space.

## Facts & Assumptions

**Given:** The algebraic definition of the graph-of-groups fundamental group.

[L1] The graph-of-groups fundamental group is defined as a quotient of the path group by killing tree edges. ([[def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], the definition is algebraic: it starts from generators, edge relations, and a quotient by tree-edge relations. [L1, given]

2.1 A topological realization may exist later, but it is not part of the definition recorded in step 1.1. Therefore the statement is false. [step 1.1, algebra] ∎
