---
id: def-ramsey-colouring-and-arrow-notation
kind: definition
title: "Finite colourings of $k$-element subsets, monochromatic sets, and the arrow notations $N\\to(s,t)^2$ and $N\\to(r)^k_c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 9, Section 9.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
    - title: "I. B. Leader, Ramsey Theory, Sections 1.1-1.2"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Definition

For a set $X$ and a positive natural number $k$, write $[X]^k$ for the set of all $k$-element subsets of $X$, where finite cardinality is understood as in [[def-finite-cardinality]]. A **$c$-colouring of $[X]^k$** is a function $d:[X]^k\to C$ into a set $C$ with $c$ elements. A set $H\subseteq X$ is **monochromatic** when $d$ is constant on $[H]^k$. These notions are unchanged when $X$ is replaced by an equinumerous set ([[def-equinumerous]]).

For positive naturals $N,s,t$, the asymmetric arrow

$$N\to(s,t)^2$$

means that every red-blue colouring of the pairs from any $N$-element set has either a red $s$-element set or a blue $t$-element set. Equivalently, the red pairs form a complete graph on some $s$ vertices or the blue pairs form a complete graph on some $t$ vertices. Thus a red-blue colouring witnesses $N\to(s,t)^2$ when it contains a red $s$-set or a blue $t$-set.

For positive naturals $N,r,k,c$, the uniform arrow

$$N\to(r)^k_c$$

means that every $c$-colouring of the $k$-element subsets of an $N$-element set has a monochromatic $r$-element set. Natural-number parameters use [[def-natural-numbers]]; in particular, all four parameters in this notation are explicitly positive.

