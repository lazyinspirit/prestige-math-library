---
id: def-universally-closed-morphism
kind: definition
title: Universally closed morphisms
status: published
origin: pipeline
deps:
  - def-base-change-morphism-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Stacks Project, Schemes, §26.20 Definition 26.20.1"
      url: "https://stacks.math.columbia.edu/tag/01KA"
---

## Definition

A morphism of schemes $f:X\to S$ is **universally closed** if, for every
$S$-scheme $T$ (that is, every morphism $T\to S$), the base-changed projection
$$f_T:X_T=X\times_S T\longrightarrow T$$
is a closed map of topological spaces, where base change is as in
[[def-base-change-morphism-schemes]]. Explicitly, for every closed subset
$Z\subseteq |X_T|$, its image $f_T(|Z|)$ is closed in $|T|$. The quantifier
ranges over all schemes $T\to S$; no finite-type, quasi-compactness, or
separatedness hypothesis is part of this definition.
