---
id: def-fpqc-morphism-schemes
kind: definition
title: "Fpqc covering morphisms"
status: draft
origin: pipeline
deps:
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-quasi-compact-and-quasi-separated-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.26 Definition 29.26.1"
      url: https://stacks.math.columbia.edu/tag/01U2
    - title: "Stacks Project, Étale Cohomology, §59.15 Definition 59.15.1 and Example 59.15.3(3)"
      url: https://stacks.math.columbia.edu/tag/03NV
    - title: "Stacks Project, Topologies on Schemes, §34.9 Definition 34.9.1"
      url: https://stacks.math.columbia.edu/tag/022A
---

## Definition

For a scheme morphism $p:S'\to S$, say that $p$ is **flat** if for every
$x\in S'$ the induced local-ring map
$$\mathcal O_{S,p(x)}\longrightarrow\mathcal O_{S',x}$$
is flat as a ring map ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).
Call $p$ an **fpqc covering morphism** on this page if it is flat, surjective,
and quasi-compact ([[def-quasi-compact-and-quasi-separated-morphism]]).

This convention concerns one morphism at a time. Under the Stacks Project's
family definition of fpqc covers, the singleton family consisting of a flat,
surjective, quasi-compact morphism is an fpqc covering. General fpqc covers
may be families, and this page does not identify every such family with one
quasi-compact morphism.
