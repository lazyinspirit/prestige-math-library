---
id: lem-disconnected-link-diagram-represents-a-split-link
kind: lemma
title: "A disconnected link projection represents a split link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - def-split-link
  - lem-disconnected-projection-components-separated-by-jordan-curve
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The proof uses finite planar separation and compactness only; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §5.2 and Exercise 5.14, printed pp. 42–43"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "William W. Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), Theorem 1(a), pp. 37–41"
      url: "https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2"
---

## Statement

If the underlying projection of a regular link diagram on $S^2$ is disconnected, then the represented link is split.

## Statement references

[Calegari, *Introduction to Knot Theory*, §5.2 and Exercise 5.14](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Menasco, *Closed incompressible surfaces in alternating knot and link complements* (1984), Theorem 1(a)](https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2)

## Facts & Assumptions

**Given:** A regular link diagram whose projection graph is a finite disconnected subset $P\subset S^2$.

[F1] A regular diagram is the projection of a finite disjoint union of embedded circles, and its projection has finitely many transverse double points ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]]).

[F2] A link is split if a sphere disjoint from it has link points on both sides ([[def-split-link]]).

[F3] A disconnected finite projection graph admits a Jordan curve in its complement with diagram points on both sides ([[lem-disconnected-projection-components-separated-by-jordan-curve]]).

[F4] The proof of [F3] constructs its separating curve as a smooth boundary component of a finite regular neighborhood. The choice-free smooth Jordan-disk result gives a closed disk on either side of that curve on $S^2$ ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]).

## Proof
1.1 By [F1], the projection graph has finitely many components and the link has compact image. Choose a point of $S^2\setminus P$ as infinity and work in the resulting finite projection plane. Apply the regular-neighborhood construction in the proof of [F3] in this chart; its smooth separating curve $\gamma$ misses the projection and has diagram points on both sides. Choose the bounded closed side as the disk $\Delta$, using [F4]. [given, F1, F3, F4, choose]

2.1 Regard $S^2$ as the projection sphere in $S^3$. The product $\Delta\times[-M,M]$ is a smoothly embedded 3-ball after rounding its corners, where $M$ exceeds the absolute height of every point of the compact link. Its rounded boundary consists of the side annulus over $\gamma$ and the two caps at heights $\pm M$; it is a sphere. Since $\gamma$ misses the projection and the caps lie above and below the link, this sphere misses the link. The two sides meet the link because $\Delta$ and its complementary disk each contain projection points, so [F2] says that the link is split. [given, F1, F2, F3, F4, step 1.1, construct] ∎
