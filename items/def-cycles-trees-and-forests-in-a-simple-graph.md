---
id: def-cycles-trees-and-forests-in-a-simple-graph
kind: definition
title: "Cycles, trees and forests in a simple graph on an arbitrary vertex set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 3.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a simple graph.

A **cycle** in $G$ is a cycle in the sense of
[[def-graph-walk-trail-path-and-cycle]], that is, a closed walk of length at
least $3$ whose vertices are distinct except for the repeated endpoint.

The graph $G$ is **acyclic** if it contains no cycle.

A **tree** is a connected acyclic simple graph.

A **forest** is an acyclic simple graph.
