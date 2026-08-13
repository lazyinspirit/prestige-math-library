---
id: def-composition-series-composition-factors-and-length
kind: definition
title: "Composition series, composition factors, and composition length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subnormal-normal-series-refinement-and-equivalence, def-simple-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
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

A **composition series** of a group $G$ is a subnormal series
$$G=G_0\triangleright G_1\triangleright\cdots\triangleright G_n=1$$
whose inclusions are strict and whose factors $G_i/G_{i+1}$ are simple groups ([[def-simple-group]]). The factors are the **composition factors**, and $n$ is the **composition length** of this series.

The trivial group has the length-zero composition series consisting only of $1$. A nontrivial group has a composition series exactly when it has a finite subnormal series with simple factors.
