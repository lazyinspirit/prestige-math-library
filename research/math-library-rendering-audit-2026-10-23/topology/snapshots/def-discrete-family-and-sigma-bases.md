---
id: def-discrete-family-and-sigma-bases
kind: definition
title: 'Discrete families and $\sigma$-locally-finite and $\sigma$-discrete bases'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-topology-basis-subbasis, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Definition

Let $X$ be a topological space. A family $\mathcal D$ of subsets of $X$ is **discrete** if every $x\in X$ has a neighbourhood meeting at most one member of $\mathcal D$. It is therefore a locally finite family in the sense of [[def-cover-refinement-and-local-finiteness]].

An open basis $\mathcal B$ ([[def-topology-basis-subbasis]]) is **$\sigma$-locally finite** if $\mathcal B=\bigcup_{n\in\mathbb N}\mathcal B_n$ for locally finite families $\mathcal B_n$, and **$\sigma$-discrete** if the families $\mathcal B_n$ can be taken discrete. Empty layers are permitted; the word $\sigma$ records the countable indexing convention of [[def-countable]].
