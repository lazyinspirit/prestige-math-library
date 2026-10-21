---
id: lem-fundamental-normal-surfaces-are-connected
kind: lemma
title: Fundamental normal surfaces are connected
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-normal-surface-coordinate-box
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–8; complete relevant passages on normal coordinates, finite bounds,
        triangulations and unknot searches.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page notes on normal disks, matching, normal
        surfaces and knots.
---

## Statement

Every nonempty fundamental normal surface in a finite tetrahedral triangulation of a compact piecewise-linear $3$-manifold is connected.

## Statement references

[[def-normal-surface-coordinate-box]] — a normal surface has a finite normal-coordinate vector and fundamentalness means no nonzero admissible decomposition.

[Hass–Lagarias–Pippenger, Lemma 5.3](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — fundamental normal surfaces are connected.

[Erickson, “Normal Surfaces and Knots,” §14.3](https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf) — connectedness of fundamental normal surfaces.

## Facts & Assumptions

**Given:** A nonempty fundamental normal surface $S$ in a finite tetrahedral triangulation.

[F1] [[def-normal-surface-coordinate-box]]: $v(S)$ is an admissible integer vector and fundamentalness excludes every decomposition into two nonzero admissible integer vectors.

## Proof

1.1 Suppose $S$ is disconnected. Since $S$ is a finite normal surface, its connected components are finite in number; let $S_1$ be one component and let $S_2$ be the union of all remaining components. Both are nonempty properly embedded normal surfaces: each normal disk and each face-matched arc belongs to exactly one component. Disk counts add coordinatewise, so $v(S)=v(S_1)+v(S_2)$, and both summands are admissible nonzero integer vectors. [given, F1, construct]

2.1 The decomposition in step 1.1 contradicts the defining indecomposability of the fundamental vector $v(S)$. Therefore $S$ is connected. [F1, step 1.1, contradiction] ∎

