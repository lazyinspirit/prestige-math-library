---
id: lem-jt-search-acceptance-is-an-essential-normal-disk
kind: lemma
title: Jaco–Tollefson-search acceptance supplies an essential normal disk
status: draft
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
---

## Statement

Whenever the JT branch of the Haken–Jaco–Tollefson search returns a disk-certificate, its primitive vertex normal surface is a properly embedded disk with non-null-homotopic boundary in the triangulated knot exterior.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — JT primitive-ray enumeration and candidate tests.

[[lem-normal-disk-candidate-check-characterization]] — exact disk and essential-boundary characterization.

## Facts & Assumptions

**Given:** A valid one-component knot code and a primitive ray vector returned by the JT branch as a disk-certificate.

[F1] [[alg-haken-jaco-tollefson-unknot-recognition]]: a returned JT vector is primitive on an extreme ray, admissible, and passes the nonempty-boundary, Euler-characteristic-one and odd-meridian-intersection tests.

[F2] [[lem-fundamental-normal-surfaces-are-connected]]: a fundamental normal surface is connected.

[F3] [[lem-normal-disk-candidate-check-characterization]]: an admissible normal vector with those three tests represents a properly embedded disk with essential boundary.

[F2] [[lem-fundamental-normal-surfaces-are-connected]]: a fundamental normal surface is connected.

[F3] [[lem-normal-disk-candidate-check-characterization]]: the boundary, Euler-characteristic and meridian tests characterize a properly embedded disk with essential boundary.

## Proof

1.1 By [F1], the returned vector is admissible and is the primitive integer generator of an extreme ray. If it split into two nonzero admissible integer vectors, both summands would lie on that same extreme ray; primitivity forbids such a positive integral split. Hence the vector is fundamental, and [F2] makes its surface connected. [given, F1, F2, algebra]

2.1 The remaining tests checked by [F1], together with [F3], identify the connected surface as a properly embedded disk with non-null-homotopic boundary. [F1, F3, step 1.1, construct] ∎

