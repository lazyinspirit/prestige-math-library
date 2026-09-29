---
id: def-proper-morphism
kind: definition
title: Proper morphisms
status: draft
origin: pipeline
deps:
  - def-separated-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-universally-closed-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.42 Definition 29.42.1"
      url: https://stacks.math.columbia.edu/tag/01W0
---

## Definition

A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated,
of finite type, and universally closed. Here separatedness has the meaning of
[[def-separated-morphism-schemes]], finite type has the meaning of
[[def-locally-finite-type-and-finite-type-morphism]], and universally closed
has the meaning of [[def-universally-closed-morphism]]. The definition applies
to arbitrary schemes: it assumes neither Noetherian hypotheses nor finite
presentation.
