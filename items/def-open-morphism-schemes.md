---
id: def-open-morphism-schemes
kind: definition
title: "Open and universally open morphisms of schemes"
status: draft
origin: pipeline
deps:
  - def-scheme-over-base
  - def-base-change-morphism-schemes
  - def-homeomorphism-and-open-maps
  - def-morphism-of-schemes
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.24.1 (tag 01U0) and Section 29.24"
      url: https://stacks.math.columbia.edu/tag/01U0
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.26 (flat morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
---

## Definition

Let $f:X\to S$ be a morphism of schemes; write $|f|:|X|\to|S|$ for its
underlying continuous map of topological spaces ([[def-morphism-of-schemes]]).

The morphism $f$ is **open** if $|f|$ is an open map: for every open subset
$U\subseteq|X|$ the image $|f|(U)$ is open in $|S|$
([[def-homeomorphism-and-open-maps]]).

The morphism $f$ is **universally open** if for every $S$-scheme $T$, that is,
every morphism of schemes $T\to S$ ([[def-scheme-over-base]]), the base-changed
projection
$$ f_T:X_T=X\times_S T\longrightarrow T $$
is open, where the base change is as in [[def-base-change-morphism-schemes]].

The quantifier in the second clause ranges over all $S$-schemes $T$; no
finiteness, quasi-compactness or separatedness hypothesis is part of the
definition. Universal openness implies openness by taking $T=S$. A morphism
whose source is empty is open, and a morphism whose target is empty has empty
source and is open.
