---
id: def-regular-oriented-link-diagram
kind: definition
title: "Regular oriented link diagrams"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-immersion-submersion-and-constant-rank-map, def-transverse-smooth-maps]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2 and Figures 3-12, printed pp. 12-26"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1 and Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3"
      url: "https://arxiv.org/pdf/2406.18203v1"
---

## Definition

Let $\pi\colon\mathbb R^3\to\mathbb R^2$ be the orthogonal projection forgetting
the last coordinate, $\pi(x_1,x_2,x_3):=(x_1,x_2)$, and let $L\colon C\to S^3$ be
an oriented link contained in $\mathbb R^3\subset S^3$
([[def-oriented-link-in-s-three-and-ambient-isotopy]], so $C$ is a finite
disjoint union of oriented circles and $L$ is a smooth embedding).

The projection $\pi\circ L$ is **regular** when:

1. it is an immersion, that is, the projected derivative never vanishes
   ([[def-immersion-submersion-and-constant-rank-map]]);
2. its only multiple points are finitely many **double points**, and at every
   double point the two branches meet transversely: the two projected tangent
   lines are distinct ([[def-transverse-smooth-maps]]);
3. there are no triple or higher multiple points: no point of the plane is the
   image of three or more distinct source points.

A **regular oriented link diagram** $D$ consists of the image $\pi(L)$ together
with

(a) the **over/under datum** at every double point: which of the two branches
    lies above the other, read from the forgotten third coordinate (the branch
    with the larger $x_3$-coordinate at the crossing is drawn over); and
(b) the **orientations of the strands**, induced by the orientation of $L$.

Thus a diagram is a decorated immersed oriented $4$-valent planar graph: the
vertices are the double points, the edges are the strands between consecutive
double points, and the decoration records which strand passes over at each
vertex. A diagram is understood up to planar isotopy
([[def-planar-isotopy-of-link-diagrams]]); two links that differ by an ambient
isotopy moved off $\infty$ may be represented by diagrams differing by planar
isotopy and the local moves of [[def-oriented-reidemeister-moves]], which is the
content of the Reidemeister equivalence theorem below.

**Finiteness is part of the definition.** Condition (2) is the clause that
makes the finitely many double points available for the slicing arguments used
in the Reidemeister and Markov proofs; a projection with infinitely many double
points, accumulations, or tangential double points is not regular and is not
used below. The definition fixes the ambient plane, the projection and the
over/under convention once and for all.
