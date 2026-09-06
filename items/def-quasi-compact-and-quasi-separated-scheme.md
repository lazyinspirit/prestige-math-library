---
id: def-quasi-compact-and-quasi-separated-scheme
kind: definition
title: "Quasi-compact and quasi-separated schemes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme, def-affine-open-subscheme]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 19"
      url: "https://stacks.math.columbia.edu/tag/01KV"
---
## Definition

A scheme $X$ is **quasi-compact** if $|X|$ is quasi-compact. It is
**quasi-separated** if the intersection of every two affine open subschemes is
quasi-compact. These conditions are properties of the indicated underlying
open covers; they do not mean that $X$ is separated.
