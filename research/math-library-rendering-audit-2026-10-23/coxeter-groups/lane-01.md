# Coxeter Groups visual audit — lane 01

## Scope and coverage

Reviewed all 36 assigned frozen item titles and full rendered bodies. Each item source SHA256 matches its frozen snapshot; each rendered HTML hash matches the assignment. Opened all 102 assigned screenshot tiles individually with the image viewer at original resolution. Every tile hash matches its receipt. The complete source, snapshot, HTML, receipt, and tile hash inventory is in [lane-01.json](lane-01.json). No item or tile was unreviewed, and no source/snapshot/HTML/tile drift was found.

## Rendering findings

- **Confirmed raw math in titles:** `cex-cg-artin-positive-lift-is-not-a-homomorphism` line 4 and `thm-cg-reduced-positive-section-and-length-additive-products` line 4 show `b_w` literally with an underscore. See the first tile for each item.
- **Confirmed raw parabolic notation in title:** `lem-cg-double-coset-intersection-parabolic` line 4 shows `W_I cap dW_Jd inverse for d in ^IW^J` as ASCII. See its first tile.
- **Confirmed raw internal IDs in rendered remark:** `ex-cg-right-angled-cube-davis-complex` line 204 prints the consumer and supplier IDs as prose. See its final tile.

LaTeX in item bodies rendered without KaTeX errors. Technique banners use the expected uppercase CSS styling; linked references intentionally appear as block lines. I found no confirmed clipping from any standalone original tile.

## Potential diagrams

No assigned item contains an existing TikZ diagram: all 36 screenshot receipts report `tikz_count: 0` and no diagram failures. These source-supported additions appear useful; each remains an editorial aid, not a proof dependency.

- **Strong candidate — `ex-cg-right-angled-cube-davis-complex`, lines 39–67.** Show the 3-cube boundary and its dual octahedral Coxeter cellulation as separate cell structures. Check the 8 sign-vector vertices, 6 square faces, 6 dual vertices, and 8 dual triangles; distinguish face incidence from chamber incidence.
- **Strong candidate — `ex-cg-distributive-weak-intervals-of-fully-commutative-elements`, lines 39–43.** Pair the two-element antichain and V-shaped heap with their order-ideal lattices and label the weak-order-to-ideal maps. Keep order direction increasing with length/inclusion.
- **Candidate — `ex-cg-circle-coxeter-complex-of-i2-5`, lines 52–67 and 113–115.** Show five root lines, ten arcs/chambers, the fundamental arc of angle (pi/5), and the two vertex types. An oriented word labeling around the circle still needs an explicit convention check.
- **Optional — `ex-cg-s4-subwords-and-covers`, lines 40–42.** A local Bruhat cover star below 4321 can distinguish its three rank-five covers from single-deletion values of lower rank. Do not present all six single deletions as covers.
- **Optional — `ex-cg-heap-of-one-two-one-in-a2-and-long-braid`, lines 39–45.** A labeled three-node heap chain can show the alternating braid factor; the two braid-related reduced words must remain separate commutation classes.

The exact map labels, claims, uncertainty, and proposed checks are recorded in the JSON ledger.

## Existing diagram checks and limits

There were no existing diagrams among the assigned items to check for mathematical direction, indices, or signs. No clipping was confirmed from original single-tile images. This review covers only the frozen local render and screenshots, not a live website. No content, app/tool, or publication metadata was edited.
