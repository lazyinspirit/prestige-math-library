---
id: thm-haken-normal-essential-disk-existence
kind: theorem
title: "Haken normal essential-disk existence theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
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

Let $M$ be a compact triangulated piecewise-linear $3$-manifold with nonempty boundary and with no embedded projective plane. If $M$ contains a properly embedded disk whose boundary is not null-homotopic in $\partial M$, then $M$ contains such a disk that is a fundamental normal surface.

## Statement references

[[def-normal-surface-coordinate-box]] — normal disks, normal-coordinate vectors and fundamentalness.

[Hass–Lagarias–Pippenger, Theorem 5.4](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Haken's essential-surface theorem and the no-projective-plane hypothesis.

## Source proof status

HLP §5, Theorem 5.4, gives the required existence statement but its proof is only a citation to Haken's Chapter 5, Schubert's Section 5, and other papers. The normal essential-disk replacement, without an irreducibility hypothesis or an isotopy claim, is now proved locally by [[lem-essential-pl-disks-admit-normal-replacements]]. The remaining obligation is the reduced normal-sum disk-patch argument that produces a fundamental essential disk in the full no-projective-plane scope. No proof of that remaining step is supplied here. The full claim remains present and escalated; HLP’s citation is not treated as its proof.
