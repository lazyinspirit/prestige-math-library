---
id: thm-jaco-tollefson-normal-essential-disk-vertex-existence
kind: theorem
title: Jaco–Tollefson normal essential-disk vertex theorem
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 15
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
  - thm-least-weight-lexicographic-essential-normal-disks-are-vertex-disks
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
      locator: §5, Theorem 5.6, printed p.13; the source states the vertex-disk
        theorem and cites Jaco–Tollefson Corollary6.4.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note; it cites rather than proves Haken
        essential-surface completeness.
    - title: Jeffrey L. Tollefson, Normal surface Q-theory, Pacific Journal of
        Mathematics 183 (1998), 359–374
      url: https://msp.org/pjm/1998/183-2/pjm-v183-n2-p07-p.pdf
      locator: Complete §4, printed pp.366–369, actual exchange-patch proof with
        irreducible/boundary-irreducible hypotheses; it does not prove this
        general disk theorem.
    - title: Joel Hass and Jeffrey C. Lagarias, The number of Reidemeister moves
        needed for unknotting
      url: https://arxiv.org/pdf/math/9807012
      locator: "Theorem3.1 and following remark, printed pp.10–11: fundamental-disk
        theorem and discussion of hypotheses; no unrestricted vertex-disk
        extension proof is inferred from this remark."
---

## Statement

Let $M$ be a compact triangulated piecewise-linear $3$-manifold with nonempty boundary. If $M$ contains a properly embedded disk whose boundary is not null-homotopic in $\partial M$, then $M$ contains such a disk whose primitive normal-coordinate vector lies on an extreme ray of the Haken cone.

## Statement references

[[def-normal-surface-coordinate-box]] — Haken cone, extreme rays and primitive vertex vectors.

[Hass–Lagarias–Pippenger, Theorem 5.6](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — Jaco–Tollefson vertex-surface theorem.

## Facts & Assumptions

**Given:** The compact triangulated PL three-manifold with nonempty boundary and the stated essential properly embedded disk.

[F1] An essential proper PL disk has an essential normal replacement in the same triangulation. [[lem-essential-pl-disks-admit-normal-replacements]]

[F2] A least-weight essential normal disk with lexicographically least vector has primitive vector on an extreme ray of the original full Haken cone. Its proof handles both original two-copy summand alternatives and all proper exchanges without irreducibility, orientability, sphere-separation or projective-plane hypotheses. [[thm-least-weight-lexicographic-essential-normal-disks-are-vertex-disks]]

## Proof

1.1 Normalize the supplied essential disk by [F1]. Choose the least positive edge weight among essential normal disks and then minimize the finitely many coordinates successively at that weight. This uses only natural-number minima, not a choice principle. [given, F1, construct]

2.1 The selected disk satisfies [F2]. It is essential and normal in the same original triangulation, and its normal vector is primitive and lies on an extreme ray of the Haken cone. These are exactly the required conclusions for arbitrary compact PL input. [given, F2, step 1.1, construct] ∎
