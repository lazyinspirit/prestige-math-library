---
id: def-projective-object
kind: definition
title: "Projective object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abelian-category]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Definition 1.6.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Definition

An object $P$ of an abelian category is **projective** when for every epimorphism
$q:E\twoheadrightarrow M$ and every morphism $f:P\to M$, there exists a
morphism $\widetilde f:P\to E$ with

$$q\widetilde f=f.$$

The lift $\widetilde f$ need not be unique.
