---
id: def-dedekind-infinite-set
kind: definition
title: "Dedekind-infinite and Dedekind-finite sets"
status: draft
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (3), §6 definition and §8"
      url: https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/
---

## Definition

A set $X$ is **Dedekind-infinite** if some injection $f:X\to X$ is not surjective, equivalently if $X$ is equipotent with a proper subset. It is **Dedekind-finite** otherwise. “Infinite” alone means not bijective with a natural number; it does not include an assumption that $\omega$ embeds into $X$.
