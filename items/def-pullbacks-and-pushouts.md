---
id: def-pullbacks-and-pushouts
kind: definition
title: "Pullbacks and pushouts as limits and colimits of cospans and spans"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: [def-pullback, def-pushout, def-fiber-product]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.1.23"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

For a cospan $X\xrightarrow f Z\xleftarrow gY$, a **pullback** is its limit
([[def-limit-and-colimit-of-a-diagram]]). It consists of an object
$X\times_ZY$ and morphisms $p:X\times_ZY\to X$, $q:X\times_ZY\to Y$ with
$fp=gq$, such that every $a:W\to X$, $b:W\to Y$ satisfying $fa=gb$ admit a
unique $u:W\to X\times_ZY$ with $pu=a$ and $qu=b$.

For a span $X\xleftarrow f Z\xrightarrow gY$, a **pushout** is its colimit. It
consists of $X\amalg_ZY$ and morphisms $i:X\to X\amalg_ZY$,
$j:Y\to X\amalg_ZY$ with $if=jg$, such that every compatible pair
$a:X\to W$, $b:Y\to W$ has a unique $u:X\amalg_ZY\to W$ satisfying
$ui=a$ and $uj=b$.
