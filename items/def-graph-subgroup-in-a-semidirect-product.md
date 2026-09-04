---
id: def-graph-subgroup-in-a-semidirect-product
kind: definition
title: "The graph subgroup attached to a map into a semidirect product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-external-semidirect-product]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Definition

Let $G$ act on a group $M$, and let $M\rtimes G$ be the corresponding external
semidirect product ([[def-external-semidirect-product]]).

For any function $z:G\to M$, its **graph subgroup candidate** is the subset

$$\Gamma_z:=\{(z(g),g):g\in G\}\subseteq M\rtimes G.$$

It is called the **graph subgroup** of $z$ when this subset is actually a
subgroup.
