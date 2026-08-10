---
id: def-core-of-a-subgroup
kind: definition
title: 'The core $\operatorname{Core}_G(H)=\bigcap_{g\in G}gHg^{-1}$ of a subgroup'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, thm-conjugation-is-an-automorphism]
justified_by: [lem-core-is-largest-normal-subgroup-contained]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 6.8"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Definition

Let $H\le G$ be a subgroup ([[def-subgroup]]). Its **core in $G$** is

$$\operatorname{Core}_G(H):=\bigcap_{g\in G}gHg^{-1}.$$

Each $gHg^{-1}$ is a subgroup because conjugation is an automorphism
([[thm-conjugation-is-an-automorphism]]). The facts that the displayed
intersection is normal in $G$ and is the largest normal subgroup of $G$
contained in $H$ are proved in
[[lem-core-is-largest-normal-subgroup-contained]].
