---
id: def-normal-subgroup
kind: definition
title: "Normal subgroup: invariance under conjugation"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, def-coset]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $N\le G$ be a subgroup ([[def-subgroup]]). For
$g\in G$, write

$$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$

The subgroup $N$ is **normal in $G$** when

$$gNg^{-1}=N\qquad\text{for every }g\in G.$$

In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner
conjugation of $G$ maps $N$ onto itself. The connection with equality of the
left and right cosets of [[def-coset]] is proved in
[[thm-normal-subgroup-characterisations]].
