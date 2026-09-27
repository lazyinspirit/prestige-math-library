---
id: def-separated-scheme-over-base
kind: definition
title: Separated S-scheme
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-scheme-over-base, lem-base-change-open-closed-immersions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Definition 26.21.3 and Lemmas 26.21.13-15, printed pp.40-42"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $S$ be a scheme and let $X$ be an $S$-scheme, that is, a scheme equipped
with a morphism $X\to S$ ([[def-scheme-over-base]]). We say that $X$ is
**separated over $S$**, or that $X$ is a **separated $S$-scheme**, if the
structure morphism $X\to S$ is separated ([[def-separated-morphism-schemes]]).
We say that a scheme $X$ is **absolutely separated**, or simply **separated**,
if it is separated over $\operatorname{Spec}\mathbb Z$.

Relative and absolute statements must name their base. Absolute separatedness
is the case $S=\operatorname{Spec}\mathbb Z$ and concerns the diagonal
$X\to X\times_{\operatorname{Spec}\mathbb Z}X$. Absolute separatedness implies separatedness over every base $S$ equipped with a morphism $X\to S$: the diagonal $\Delta_{X/S}$ is the pullback of $\Delta_{X/\mathbb Z}$ along $X\times_S X\to X\times_{\mathbb Z}X$. Indeed, a pair of maps to $X$ in this pullback must coincide, which identifies the pullback with $X$. Closed immersions survive this base change ([[lem-base-change-open-closed-immersions]]). Conversely separatedness over $S$ is a property
of the structure morphism and constrains only the diagonal $X\to X\times_S X$.
The effect of changing the base and of composing structure morphisms is
established by the lemmas on this page rather than assumed here.
