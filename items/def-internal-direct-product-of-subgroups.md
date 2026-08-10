---
id: def-internal-direct-product-of-subgroups
kind: definition
title: "Internal direct products of finitely many normal subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-subgroup, def-generated-subgroup, def-external-direct-product-of-groups]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Definition

Let $G$ be a group and let $N_0,\ldots,N_{r-1}$ be normal subgroups, where $r\in\mathbb N$. They form an **internal direct product** when they generate $G$ and, for each $i<r$, $$N_i\cap\langle N_j:j<r,\ j\ne i\rangle=\{e\}.$$ The empty family is an internal direct product of the trivial group. For two subgroups of an abelian group this says $G=HK$ and $H\cap K=\{e\}$; in additive notation one writes $G=H\oplus K$. Normal subgroups and generated subgroups are those of [[def-normal-subgroup]] and [[def-generated-subgroup]], and the comparison product is [[def-external-direct-product-of-groups]].
