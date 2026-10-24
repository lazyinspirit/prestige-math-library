---
id: fs-every-manifold-is-orientable
kind: false-statement
title: "Every manifold is orientable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, def-oriented-smooth-manifold-and-oriented-chart]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

**False.** The Möbius band is nonorientable.

## Facts & Assumptions

**Given:** The Möbius band presented as $B=[0,1]\times[-1,1]/(0,s)\sim(1,-s)$.

[L1] An orientation is a smooth choice of a determinant-line ray at every point ([[def-oriented-smooth-manifold-and-oriented-chart]]).

## Refutation

**Proof technique:** direct.

1.1 The gluing transition near the core has coordinates $(t,s)\mapsto(t-1,-s)$ and derivative $\operatorname{diag}(1,-1)$, so transporting a local determinant ray once around the core reverses it. [given, algebra]

2.1 A global orientation in the sense of [L1] would return the chosen ray unchanged after this loop, contradicting step 1.1. Hence the Möbius band is a manifold that is not orientable, refuting the universal claim. [L1, step 1.1, contradiction] ∎
