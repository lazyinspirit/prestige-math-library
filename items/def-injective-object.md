---
id: def-injective-object
kind: definition
title: "Injective object"
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

An object $I$ of an abelian category is **injective** when for every monomorphism
$m:M\rightarrowtail E$ and every morphism $f:M\to I$, there exists a morphism
$\widetilde f:E\to I$ with

$$\widetilde f\,m=f.$$

The extension $\widetilde f$ need not be unique.
