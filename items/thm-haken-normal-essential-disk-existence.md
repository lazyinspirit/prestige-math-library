---
id: thm-haken-normal-essential-disk-existence
kind: theorem
title: Haken normal essential-disk existence theorem
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
  - thm-least-weight-lexicographic-essential-normal-disks-are-fundamental
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
      locator: §5, Theorem 5.4, printed p.12/web lines 502–506; the source states the
        theorem and directs readers to earlier proofs.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note; it cites rather than proves Haken
        essential-surface completeness.
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den
        Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Introduction§d, printed pp.253–254, and complete Chapter5, printed
        pp.360–374. Chapter5 proves its fundamental-surface construction under
        the additional condition that every embedded sphere separates, in an
        adapted cell/normal decomposition.
---

## Statement

Let $M$ be a compact triangulated piecewise-linear $3$-manifold with nonempty boundary and with no embedded projective plane. If $M$ contains a properly embedded disk whose boundary is not null-homotopic in $\partial M$, then $M$ contains such a disk that is a fundamental normal surface.

## Statement references

[[def-normal-surface-coordinate-box]] — normal disks, normal-coordinate vectors and fundamentalness.

[Hass–Lagarias–Pippenger, Theorem 5.4](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Haken's essential-surface theorem and the no-projective-plane hypothesis.

## Facts & Assumptions

**Given:** The compact triangulated PL three-manifold with nonempty boundary, no embedded projective plane, and the stated essential properly embedded disk.

[F1] An essential proper PL disk has an essential normal replacement in the same triangulation. [[lem-essential-pl-disks-admit-normal-replacements]]

[F2] Among essential normal disks, a least-weight disk with lexicographically least vector is fundamental in the original seven-coordinate system. This supplier does not require irreducibility, sphere separation, orientability or projective-plane exclusion. [[thm-least-weight-lexicographic-essential-normal-disks-are-fundamental]]

## Proof

1.1 Apply [F1] to obtain an essential normal disk. The weights of such disks form a nonempty set of positive integers and therefore have a least value. Successively minimize the finitely many normal coordinates among vectors at that weight. Each natural-number minimum leaves a nonempty set, so this finite construction requires no choice principle. [given, F1, construct]

2.1 Apply [F2] to the selected disk. It is an essential fundamental normal disk for the original triangulation, as required. The no-projective-plane hypothesis is retained in the Statement; the proved supplier in fact needs no such exclusion. [given, F2, step 1.1, construct] ∎
