---
id: lem-haken-search-acceptance-is-an-essential-normal-disk
kind: lemma
title: Haken-search acceptance supplies an essential normal disk
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-haken-jaco-tollefson-unknot-recognition
  - lem-normal-disk-candidate-check-characterization
  - lem-fundamental-normal-surfaces-are-connected
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
      locator: §§4–8 and §10, complete passages on normal-surface algorithms, finite
        bounds, triangulations and certificate analysis.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note on normal disks, matching and
        unknot recognition.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Whenever the Haken branch of the Haken–Jaco–Tollefson search returns a disk-certificate, the associated normal surface is a properly embedded disk in the triangulated knot exterior whose boundary is non-null-homotopic in the exterior's boundary torus.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — Haken candidate acceptance tests.

[[lem-normal-disk-candidate-check-characterization]] — exact disk and essential-boundary characterization.

## Facts & Assumptions

**Given:** A valid one-component knot code and a vector returned by the Haken branch as a disk-certificate.

[F1] [[alg-haken-jaco-tollefson-unknot-recognition]]: the Haken branch returns a vector only after checking matching, quadrilateral admissibility, fundamentalness, nonempty boundary, Euler characteristic $1$, and odd mod-two meridian intersection; fundamentalness gives connectedness by [F2].

[F2] [[lem-fundamental-normal-surfaces-are-connected]]: a fundamental normal surface is connected.

[F3] [[lem-normal-disk-candidate-check-characterization]]: for an admissible normal vector with connected normal surface, the nonempty-boundary, Euler-characteristic and meridian tests pass exactly when that surface is a properly embedded disk whose boundary is non-null-homotopic in the exterior's boundary torus.

## Proof

1.1 By [F1], the returned vector satisfies the candidate tests in [F1], including normal matching and quadrilateral admissibility. [given, F1]

2.1 By [F2], the returned fundamental normal surface is connected. The remaining tests in [F1], together with [F3], identify it as a properly embedded disk in the exterior whose boundary is non-null-homotopic in the exterior's boundary torus. [F1, F2, F3, step 1.1, construct] ∎

