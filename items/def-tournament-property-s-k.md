---
id: def-tournament-property-s-k
kind: definition
title: "Tournament property $S_k$: every set of at most $k$ vertices is dominated by one vertex"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-tournament]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Bucic, Probabilistic Method, Section 1.1"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Definition

For $k\in\mathbb N$, a tournament $T=(V,A)$ has **property $S_k$** when for every set $S\subseteq V$ with $|S|\le k$, there is a vertex $v\in V\setminus S$ such that $(v,s)\in A$ for every $s\in S$. For $S=\varnothing$, this requires $V$ to be nonempty.
