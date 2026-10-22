---
id: lem-normal-disk-candidate-check-characterization
kind: lemma
title: Finite normal-coordinate tests characterize essential disk candidates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-normal-surface-coordinate-box
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - lem-fundamental-normal-surfaces-are-connected
  - lem-connected-normal-surface-chi-one-is-disk
  - lem-essential-disk-boundary-is-longitude
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
      locator: §§4–6, peripheral homology, disk criteria and normal-surface disk tests.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note on normal surfaces and knot disks.
---

## Statement

Let $E$ be a triangulated compact exterior of a smooth knot with peripheral torus $T$ and a marked simple fibre meridian $\mu$ in the boundary triangulation. For an admissible normal-coordinate vector $v$ and its associated normal surface $S$, the following tests hold exactly when $S$ is a connected properly embedded disk with non-null-homotopic boundary in $T$: (i) $S$ is connected; (ii) $\partial S\ne\varnothing$; (iii) $\chi(S)=1$; and (iv) $\partial S$ has odd mod-two intersection with $\mu$. If $v$ is fundamental, connectedness follows from fundamentalness.

## Statement references

[[def-normal-surface-coordinate-box]] — normal-coordinate and admissibility conventions.

[[lem-normal-coordinate-matching-equations-and-finite-bounds]] — admissible vectors represent normal surfaces.

[[lem-fundamental-normal-surfaces-are-connected]] — fundamental normal surfaces are connected.

[[lem-connected-normal-surface-chi-one-is-disk]] — a connected surface with boundary and Euler characteristic one is a disk.

[[lem-essential-disk-boundary-is-longitude]] — essential disk boundaries in this exterior meet the original meridian oddly.

## Facts & Assumptions

**Given:** The triangulated knot exterior $E$, its peripheral torus $T$, marked fibre meridian $\mu$, and admissible vector $v$.

[F1] [[def-normal-surface-coordinate-box]]: an admissible vector is a nonnegative integer vector satisfying all normal matching equations and the quadrilateral condition.

[F2] [[lem-normal-coordinate-matching-equations-and-finite-bounds]]: every admissible integer vector is realized by a properly embedded normal surface with that vector.

[F3] [[lem-connected-normal-surface-chi-one-is-disk]]: a connected compact triangulated surface with nonempty boundary and Euler characteristic $1$ is a disk.

[F4] [[lem-essential-disk-boundary-is-longitude]]: every properly embedded disk with non-null-homotopic boundary in $T$ has boundary $\pm[\lambda]$ and odd mod-two intersection with $\mu$.

[F5] [[lem-fundamental-normal-surfaces-are-connected]]: every nonempty fundamental normal surface is connected.

## Proof

1.1 The hypothesis that $v$ is admissible has the meaning fixed in [F1]. By [F2], it determines a properly embedded normal surface $S$, so its boundary lies in $T$. If tests (i)–(iv) pass, then $S$ is connected, has nonempty boundary, and has Euler characteristic one. By [F3], it is a disk. [given, F1, F2, F3, construct]

1.2 Conversely, suppose $S$ is a properly embedded disk with non-null-homotopic boundary. A disk is connected, has nonempty boundary, and has Euler characteristic one. By [F4], its boundary has odd mod-two intersection with $\mu$, so all four tests pass. [given, F4, algebra]

2.1 If $\partial S$ were null-homotopic in $T$, its product projection would have degree zero. After a PL transverse perturbation, the mod-two intersection with the fibre meridian equals the parity of the preimages of a regular point under this projection; a lift to $\mathbb R$ with zero net change crosses that regular level an even number of times. This contradicts test (iv). Thus the disk has non-null-homotopic boundary. [given, step 1.1, construct, contradiction]

3.1 If $v$ is fundamental, [F5] already supplies test (i); the other tests remain exactly those stated. Steps 1.1–1.2 prove the equivalence. [given, F5, step 1.1, step 1.2] ∎

