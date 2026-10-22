---
id: thm-jaco-tollefson-normal-essential-disk-vertex-existence
kind: theorem
title: "Jaco–Tollefson normal essential-disk vertex theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-normal-surface-coordinate-box
justified_by: []
aliases: []
proof_strategy: not-supplied
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§5, Theorem 5.4, printed p.12/web lines 502–506; the source states the theorem and directs readers to earlier proofs."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page note; it cites rather than proves Haken essential-surface completeness."
---

## Statement

Let $M$ be a compact triangulated piecewise-linear $3$-manifold with nonempty boundary. If $M$ contains a properly embedded disk whose boundary is not null-homotopic in $\partial M$, then $M$ contains such a disk whose primitive normal-coordinate vector lies on an extreme ray of the Haken cone.

## Statement references

[[def-normal-surface-coordinate-box]] — Haken cone, extreme rays and primitive vertex vectors.

[Hass–Lagarias–Pippenger, Theorem 5.6](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Jaco–Tollefson vertex-surface theorem.

## Source proof status

HLP §5, Theorem 5.6, states the vertex-disk result but says only that it is an immediate consequence of Jaco–Tollefson Corollary 6.4. The primary Corollary 6.4 proof was not recovered, and the secondary treatments inspected also cite it without proof. The primitive vertex-disk claim remains present and is escalated; the citation is not treated as a proof.
