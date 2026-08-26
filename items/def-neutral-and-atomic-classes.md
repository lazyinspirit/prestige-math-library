---
id: def-neutral-and-atomic-classes
kind: definition
title: "The neutral class $\\mathcal{E}$ and the atomic class $\\mathcal{Z}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Robert Sedgewick and Kevin Wayne, Analysis of Algorithms, Section 3.9"
      url: "https://aofa.cs.princeton.edu/30gf/"
pipeline_run: null
---

## Definition

The **neutral class** $\mathcal{E}$ has one object $\epsilon$ of size $0$ and no
objects of any other size. Its counting sequence is $1,0,0,\dots$, so its
ordinary generating function is $1$.

The **atomic class** $\mathcal{Z}$ has one object $z$ of size $1$ and no objects
of any other size. Its counting sequence is $0,1,0,0,\dots$, so its ordinary
generating function is $x$.

Both are combinatorial classes in the sense of
[[def-combinatorial-class-and-ordinary-generating-function]].
