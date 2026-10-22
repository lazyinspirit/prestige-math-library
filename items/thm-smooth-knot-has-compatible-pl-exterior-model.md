---
id: thm-smooth-knot-has-compatible-pl-exterior-model
kind: theorem
title: Smooth knots have compatible piecewise-linear exterior models
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - lem-smooth-to-pl-knot-exterior-ambient-isotopy
  - lem-good-linear-size-exterior-triangulation-from-diagram
  - def-regular-oriented-link-diagram
  - def-planar-diagram-gauss-and-dowker-codes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §7, complete diagram-to-exterior triangulation construction and
        linear-size estimates, printed pp.17–20/web lines 757–879.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §14.4, complete knot and exterior-triangulation overview, printed pp.5–6.
---

## Statement

Assume countable choice. Let $K$ be a smooth oriented knot with a finite regular projection diagram $D$ having $n$ crossings and a supplied product tube. There is a polygonal knot $P$ inside that tube with the same crossing code as $D$ and a smooth rounding $K^\sharp$ of $P$ such that $K^\sharp$ is smoothly ambient isotopic to $K$. The compact exterior of this same $P$ has a good triangulation with at most $C(n+1)$ tetrahedra and a marked path for the original meridian with at most $C(n+1)$ boundary edges, for one universal constant $C$. The peripheral-preserving exterior homeomorphism transfers this model to $K^\sharp$.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy]] — smooth knot and ambient-isotopy convention.

[[def-regular-oriented-link-diagram]] — finite regular diagram and crossing-code conventions.

[[def-planar-diagram-gauss-and-dowker-codes]] — finite regular diagram and crossing-code conventions.

[[lem-smooth-to-pl-knot-exterior-ambient-isotopy]] — code-preserving polygonal approximation, smooth rounding and peripheral-preserving exterior homeomorphism.

[[lem-good-linear-size-exterior-triangulation-from-diagram]] — linear-size triangulation of the supplied polygonal realization and marked meridian.

[Hass–Lagarias–Pippenger, §7](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — diagram-to-exterior triangulation and linear-size bound.

## Facts & Assumptions

**Given:** Countable choice, a smooth knot $K$, its finite regular diagram $D$, and a supplied product tube.

[A1] $\mathrm{AC}_\omega$ is used only through the smooth isotopy extension in [[lem-smooth-to-pl-knot-exterior-ambient-isotopy]].

[F1] [[lem-smooth-to-pl-knot-exterior-ambient-isotopy]]: $D$ admits a polygonal knot $P$ with the same code; a smooth rounding $K^\sharp$ is smoothly ambient isotopic to $K$; and a homeomorphism carries $P$'s exterior and marked meridian to those of $K^\sharp$.

[F2] [[lem-good-linear-size-exterior-triangulation-from-diagram]]: for a specified polygonal realization $P$ of the code, the construction triangulates that same exterior with at most $C_0(n+1)$ tetrahedra and a meridian path of at most $C_0(n+1)$ edges.

## Proof

1.1 Apply [F1] to the supplied knot and diagram. It gives the polygonal realization $P$ with the same code, the smooth rounding $K^\sharp$ ambient isotopic to $K$, and the peripheral-preserving exterior homeomorphism. [given, A1, F1, construct]

2.1 Apply [F2] to this same specified polygonal knot $P$. It gives its good exterior triangulation and marked meridian path with the stated $C_0(n+1)$ bounds. Transport both through the peripheral-preserving homeomorphism in [F1]; homeomorphism does not change the number of tetrahedra or boundary edges in the combinatorial model. [F1, F2, step 1.1, construct]

3.1 Taking $C=C_0$ (or a larger fixed constant covering the zero-crossing template) proves the two bounds for the exterior of $K^\sharp$. Its smooth ambient isotopy to $K$ is supplied by [F1]. [F1, F2, step 1.1, step 2.1, algebra] ∎

