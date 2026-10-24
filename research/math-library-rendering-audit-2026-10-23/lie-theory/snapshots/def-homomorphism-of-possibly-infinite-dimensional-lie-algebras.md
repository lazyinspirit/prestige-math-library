---
id: def-homomorphism-of-possibly-infinite-dimensional-lie-algebras
kind: definition
title: Homomorphisms of possibly infinite-dimensional Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-algebra-over-a-field, def-linear-map]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §3.2"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Definition

Let $\mathfrak g$ and $\mathfrak h$ be Lie algebras over the same field $k$,
with no dimension restriction. A **Lie-algebra homomorphism**
$f:\mathfrak g\to\mathfrak h$ is a linear map ([[def-linear-map]]) satisfying

$$f([x,y])=[f(x),f(y)]$$

for all $x,y\in\mathfrak g$. A bijective Lie-algebra homomorphism is an
**isomorphism**; its inverse preserves brackets because applying $f$ reduces
that assertion to bracket preservation by $f$.

