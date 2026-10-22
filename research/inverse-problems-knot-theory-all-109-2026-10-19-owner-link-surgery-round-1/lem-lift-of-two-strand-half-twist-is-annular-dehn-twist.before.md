---
id: lem-lift-of-two-strand-half-twist-is-annular-dehn-twist
kind: lemma
title: "A two-strand half-twist lifts to an annular Dehn twist"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - lem-double-cover-of-two-arc-rational-tangle-is-solid-torus
  - def-dehn-twist-on-oriented-surface
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §2, Figure 2"
      url: "https://arxiv.org/pdf/math/0309170v1"
---

## Statement

Let $\tau$ be a positive half-twist of a disk interchanging two marked branch points and fixed near the disk boundary. Lift $\tau$ to the connected two-fold cover of the disk branched at those points. Under an orientation of the annular cover, the lift is the positive Dehn twist about the core if the half-twist orientation agrees with the annular orientation, and is the inverse twist if the orientation is reversed.

## Statement references

[[lem-double-cover-of-two-arc-rational-tangle-is-solid-torus|The two-point disk cover is an annulus cross-section]]

[[def-dehn-twist-on-oriented-surface|Annular Dehn twist convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §2, Figure 2](https://arxiv.org/pdf/math/0309170v1)

## Facts & Assumptions

**Given:** The annular double cover of a disk with two marked branch points, and the positive half-twist fixing the boundary.

[F1] The two-point branched cover of the disk is an annulus ([[lem-double-cover-of-two-arc-rational-tangle-is-solid-torus]]).

[F2] A Dehn twist is the annulus map rotating one boundary once relative to the other, with a radial interpolation ([[def-dehn-twist-on-oriented-surface]]).

## Proof

1.1 Cut the annulus along a spanning arc joining its two boundary components. The annulus becomes a disk with the two branch sheets visible as two copies of the cut disk; gluing the cut sides crosswise reconstructs the annular cover. [F1, given, construct]

1.2 A half-twist exchanges the two branch points and carries the branch cut to an arc that winds once around the pair. Its lift fixes both boundary components of the annulus and changes the spanning cut by one full turn about the core. In the coordinates of [F2], this is the map $(e^{i\theta},t)\mapsto(e^{i(\theta+2\pi t)},t)$ or its inverse according to the handedness convention. A complete local isotopy identifying the chosen positive braid orientation with this sign convention is not supplied in the current proof, so the exact sign identification remains escalated. [F1, F2, step 1.1]
