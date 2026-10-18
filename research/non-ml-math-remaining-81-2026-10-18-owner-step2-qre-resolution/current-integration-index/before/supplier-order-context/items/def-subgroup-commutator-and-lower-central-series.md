---
id: def-subgroup-commutator-and-lower-central-series
kind: definition
title: "Subgroup commutators and the lower central series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutator-and-commutator-subgroup, def-generated-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

For subgroups $A,B\le G$, their **subgroup commutator** is
$$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$
where $[a,b]=aba^{-1}b^{-1}$ ([[def-commutator-and-commutator-subgroup]], [[def-generated-subgroup]]).

The **lower central series** is
$$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$
Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$.
