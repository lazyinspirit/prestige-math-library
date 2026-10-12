---
id: def-subnormal-normal-series-refinement-and-equivalence
kind: definition
title: "Subnormal and normal series, factors, refinements, and equivalence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-subgroup, def-group-isomorphism-and-automorphism]
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

A **subnormal series** of a group $G$ is a finite chain
$$G=G_0\trianglerighteq G_1\trianglerighteq\cdots\trianglerighteq G_n=1$$
in which $G_{i+1}\trianglelefteq G_i$ for every $0\le i<n$ ([[def-normal-subgroup]]). Its **factors** are the quotient groups $G_i/G_{i+1}$. The case $n=0$ is allowed and is the unique subnormal series of the trivial group.

A **normal series** is a subnormal series in which every $G_i$ is normal in $G$. Thus “normal series” is stronger than “subnormal series” here.

A subnormal series $G=H_0\trianglerighteq\cdots\trianglerighteq H_m=1$ is a **refinement** of the displayed series if the $G_i$ occur among the $H_j$ in the same order. Repeated adjacent terms may be deleted without changing the nontrivial factors. Two subnormal series are **equivalent** if, after deleting repeated adjacent terms, their factors can be paired by a permutation so that paired factors are isomorphic ([[def-group-isomorphism-and-automorphism]]).
