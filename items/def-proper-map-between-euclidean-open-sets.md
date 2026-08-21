---
id: def-proper-map-between-euclidean-open-sets
kind: definition
title: "Proper maps between Euclidean open sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-compactness, def-metric-continuity, def-metric-topology]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, Proposition 2.19"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$ and $V\subseteq\mathbb R^n$ be open, with their Euclidean metric topologies ([[def-metric-topology]]). A continuous map $f:U\to V$ is proper when $f^{-1}[K]$ is compact in $U$ for every compact subset $K$ of $V$. Continuity and compactness have the meanings of [[def-metric-continuity]] and [[def-metric-compactness]].

Compactness here is intrinsic to the displayed subspaces. In particular, properness concerns compact subsets of $V$, not merely subsets compact in the ambient space by an unstated convention.
