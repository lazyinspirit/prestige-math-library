---
id: alg-haken-jaco-tollefson-unknot-recognition
kind: algorithm
title: Haken–Jaco–Tollefson normal-surface unknot search
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - alg-planar-code-validation-and-diagram-reconstruction
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
  - def-normal-surface-coordinate-box
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - lem-normal-disk-candidate-check-characterization
  - lem-fundamental-normal-surfaces-are-connected
  - lem-good-linear-size-exterior-triangulation-from-diagram
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
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

## Definition

**Input:** A finite tagged Gauss code, signed Dowker–Thistlethwaite code, or oriented planar-diagram code in the code conventions of the planar-code definition, and a mode, either **Haken** or **JT**.

**Output:** The first validation error with its witness; **not-a-knot** for a valid code with more than one component; **disk-certificate** with a normal-coordinate vector and its finite witness data; or **no-candidate** after the selected search is exhausted.

**Procedure:**

1. Run the planar-code validation procedure. Return its first invalid result if validation fails. If the validated code represents more than one component, return **not-a-knot**.
2. Let $n$ be its crossing count. Construct the good triangulated exterior $E$ with $t\le C(n+1)$ tetrahedra and the marked original meridian path.
3. In Haken mode, enumerate all vectors $v\in\mathbb Z^{7t}$ with $0\le v_i\le t2^{7t+2}$ in lexicographic order. Retain a vector only if it satisfies all matching equations and quadrilateral restrictions and is fundamental. Fundamentalness supplies connectedness. Compute nonempty-boundary, Euler-characteristic, and mod-two meridian-intersection data from the compressed coordinates, without expanding the surface. Return **disk-certificate** at the first vector passing these tests; return **no-candidate** after the finite box is exhausted.
4. In JT mode, let $A$ be the integer matching matrix and put $m=7t$. Enumerate all subsets $Z\subseteq\{1,\ldots,m\}$ in lexicographic order. For each $Z$, append the equations $v_i=0$ for $i\in Z$ to $Av=0$. If the combined matrix has rank $m-1$ and its one-dimensional kernel contains a nonzero nonnegative vector, compute the unique relatively prime nonnegative integer generator $v$ of that ray. Require that its positive-coordinate support be exactly the complement of $Z$; this visits each ray once, at its exact zero-coordinate support. Discard vectors that violate the quadrilateral restriction. A primitive generator on an extreme ray is fundamental, so its surface is connected. Compute nonempty-boundary, Euler-characteristic, and mod-two meridian-intersection data from the compressed coordinates, without expanding the surface. Return **disk-certificate** at the first passing vector; return **no-candidate** after all subsets have been processed.

The candidate tests use the boundary arcs and Euler-characteristic data computed from the compressed normal coordinates. No correctness or complexity assertion is part of this algorithm definition.

## Definition references

[[def-planar-diagram-gauss-and-dowker-codes]] — accepted finite knot-code formats and peripheral crossing conventions.

[[alg-planar-code-validation-and-diagram-reconstruction]] — exact finite input validation and oriented component extraction.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — termination and reconstruction output of that validator.

[[def-normal-surface-coordinate-box]] — normal coordinates, admissibility, fundamentalness and extreme rays.

[[lem-normal-coordinate-matching-equations-and-finite-bounds]] — Haken and primitive-ray coordinate bounds.

[[lem-normal-disk-candidate-check-characterization]] — the disk tests applied to each retained vector.

[[lem-fundamental-normal-surfaces-are-connected]] — connectedness supplied by fundamentalness.

[[lem-good-linear-size-exterior-triangulation-from-diagram]] — finite marked exterior construction of linear size.

[Hass–Lagarias–Pippenger, §§5–8](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Haken and JT search architecture, bounds and triangulation interface.
