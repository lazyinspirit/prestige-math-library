---
id: def-upper-central-series
kind: definition
title: "The upper central series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-center-of-a-group, def-quotient-group, thm-correspondence-theorem-groups]
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

The **upper central series** of a group $G$ begins with $Z_0(G)=1$. Having defined $Z_r(G)\trianglelefteq G$, define $Z_{r+1}(G)$ to be the inverse image of the center $Z(G/Z_r(G))$ under the quotient map $G\to G/Z_r(G)$ ([[def-center-of-a-group]], [[def-quotient-group]]). Equivalently,
$$Z_{r+1}(G)/Z_r(G)=Z(G/Z_r(G)).$$
The correspondence theorem makes this inverse image a uniquely determined normal subgroup containing $Z_r(G)$ ([[thm-correspondence-theorem-groups]]). In particular, $Z_1(G)=Z(G)$.
