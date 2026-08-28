---
id: rem-weak-perfect-graph-theorem-for-the-bull-route
kind: remark
title: "Weak Perfect Graph Theorem"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-perfect-graph-for-the-bull-route, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
external_dependency:
  source_url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
  exact_statement: "A graph G is perfect if and only if its complement is perfect."
  local_proof_attempt: "The source page uses complement-invariance of perfection as a black box. Rebuilding Lovász's theorem here would add a separate perfect-graph theory package well beyond the local bull-free route."
  necessity: "The basic-graph narrowness proof passes to complements and must know that the good-function condition defined through perfect induced subgraphs is preserved by that passage."
verification:
  sources_checked:
    date: 2026-08-28
    scope: citations
    by: session-audit
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 1.5"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

The weak perfect graph theorem states that a finite graph is perfect if and
only if its complement is perfect.

## Remarks

This result is recorded for the bull-free route but not proved here. The page
uses only the complement-invariance conclusion, not the original proof.
