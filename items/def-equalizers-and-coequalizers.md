---
id: def-equalizers-and-coequalizers
kind: definition
title: "Equalizers and coequalizers as limits and colimits of a parallel pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: [def-equalizer, def-coequalizer]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.1.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

For parallel morphisms $f,g:A\rightrightarrows B$, an **equalizer** is a limit
of that parallel-pair diagram ([[def-limit-and-colimit-of-a-diagram]]). It is a
morphism $e:E\to A$ satisfying $fe=ge$ such that, whenever $h:X\to A$ satisfies
$fh=gh$, there is a unique $u:X\to E$ with $eu=h$.

A **coequalizer** is a colimit of the parallel pair. It is a morphism
$q:B\to Q$ satisfying $qf=qg$ such that, whenever $h:B\to X$ satisfies
$hf=hg$, there is a unique $u:Q\to X$ with $uq=h$.
