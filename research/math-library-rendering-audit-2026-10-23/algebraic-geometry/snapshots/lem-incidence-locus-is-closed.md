---
id: lem-incidence-locus-is-closed
kind: lemma
title: The standard incidence locus is closed
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-incidence-correspondence-varieties, thm-segre-image-rank-one-minors, thm-plucker-image-closed]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Lemma 16
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The point--plane and plane-containment loci in the definition are closed in their constructed projective products.

## Facts & Assumptions

**Given:** A basis of $V$ and Plucker coordinates for its subspaces.

## Proof

1.1 A point $[v]$ belongs to an $r$-plane with decomposable wedge $w$ exactly when $v\wedge w=0$. Expanding this wedge gives homogeneous bilinear equations in the point and Plucker coordinates. [given, algebra]

2.1 These equations vanish precisely on $\mathcal I_{1,r}(V)$ by the annihilator characterization used for the Plucker map. The ambient product is closedly modeled by Segre and Plucker coordinates, so their common zero locus there is closed. [step 1.1]

3.1 For the containment locus, cover both Grassmannians by their finitely many standard affine charts. On a product of two such charts, the planes $A$ and $B$ have canonical row-frame matrices. The condition $A\subseteq B$ is equivalent to the stacked $(a+b)\times\dim V$ matrix having rank at most $b$, which is cut out by all of its $(b+1)\times(b+1)$ minors. Thus the containment locus is closed on every member of this finite open cover. Closedness is local on an open cover, so it is closed globally. Together with steps 1.1--2.1 this proves both assertions without choosing global basis vectors of the varying plane $A$. [step 2.1, algebra] ∎
