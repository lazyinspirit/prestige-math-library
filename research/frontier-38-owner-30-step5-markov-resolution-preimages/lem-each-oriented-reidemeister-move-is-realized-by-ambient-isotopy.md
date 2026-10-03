---
id: lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
kind: lemma
title: "Each oriented Reidemeister move is realized by an ambient isotopy"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-reidemeister-moves, def-oriented-link-in-s-three-and-ambient-isotopy,
       def-planar-isotopy-of-link-diagrams]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2 and Figures 3-12, printed pp. 12-26"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Let $D,D'$ be regular oriented diagrams of oriented links $L,L'$. If $D'$ is
obtained from $D$ by one oriented Reidemeister move, or by a planar isotopy,
then $L$ and $L'$ are equivalent oriented links. More precisely the move is
realized by an ambient isotopy of $S^3$ supported in a small ball meeting the
projection plane in the disk of the move.

## Facts & Assumptions

**Given:** Oriented links $L,L'$ contained in $\mathbb R^3$, regular diagrams $D,D'$ with $D'$ obtained from $D$ by one move of the list of [[def-oriented-reidemeister-moves]] or by a planar isotopy, and a small closed disk $\Delta$ of the move.

[F1] The closure of a link not meeting $\infty$ is read in $\mathbb R^3$, and an ambient isotopy of $S^3$ supported in a ball corresponds to an ambient isotopy of $\mathbb R^3$ supported in a compact set ([[def-oriented-link-in-s-three-and-ambient-isotopy]]).

[F2] Planar isotopy of diagrams is induced by an orientation-preserving ambient isotopy of the plane, and cutting the over/under data along such an isotopy is realized by the isotopy of the plane crossed with the identity ([[def-planar-isotopy-of-link-diagrams]]).

[F3] The moves R1, R2, R3 are the local replacements of [[def-oriented-reidemeister-moves]], each supported in a small disk and determined by the local over/under and orientation data.

## Proof

**Proof technique:** direct.

1.1 **R1.** Let the local picture be a kink on one strand, the move deleting it. Parametrize the kink model: the two arcs of the kink lie over a small disk of the projection plane, one at height $+\eta$ and the other at height $-\eta$ according to the over/under datum. The straight-line homotopy that shortens the arc at height $+\eta$ to the straight segment and simultaneously lengthens the arc at height $-\eta$ to the same segment, keeping both graphs over the disk and meeting only at the two ends of the homotopy, is an isotopy of the two arcs through the ball $\Delta\times(-\eta-1,\eta+1)$ with the endpoints fixed; reversing its time direction creates the kink. Both signs of the kink are covered by exchanging over and under. [F3, given]

1.2 **R2.** In the local picture two strands run over the disk, one at height $+\eta$ and the other at height $-\eta$ away from the two crossings, and the move slides the upper strand across the lower one within the vertical slab. Interpolate linearly in the direction transverse to the strands from the configuration with two crossings to the configuration with none, keeping the two strands in the two half-slabs separated by the horizontal plane; since the projection of the linear interpolation has the two strands crossing twice with opposite signs or not at all, and since the vertical coordinates keep the over/under data of the two crossings, the interpolation is an isotopy of the two arcs through the ball with fixed endpoints. [F3, given]

1.3 **R3.** In the local picture three strands run over the disk, two of them crossing once at a fixed height and the third passing to one side; the move is a horizontal translation of the third strand across the crossing region of the other two, keeping the strand in its own vertical slab between the two crossing branches. The linear translation of the third strand, fixed outside the disk, is an isotopy through embeddings because the strand never meets the crossing branches during the motion: at the moments when it is closest to the crossing it lies either above or below both branches, as prescribed by the over/under datum. [F3, given]

2.1 **Planar isotopy and conclusion.** If $D'$ is obtained from $D$ by a planar isotopy, then by [F2] the decorated graph is moved by an orientation-preserving ambient isotopy of the plane; replacing the third coordinate of every strand by the third coordinate dictated by the given over/under data gives an ambient isotopy of $\mathbb R^3$ (extended as the identity in a collar and over the rest of the ball) carrying $L$ to $L'$. Combining with the three local cases, every oriented Reidemeister move or planar isotopy is realized by an ambient isotopy supported in a ball meeting the move disk, so the represented oriented links are equivalent. ∎ [F1, F2, step 1.1, step 1.2, step 1.3]
