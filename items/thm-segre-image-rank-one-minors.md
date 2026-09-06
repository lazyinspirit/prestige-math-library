---
id: thm-segre-image-rank-one-minors
kind: theorem
title: The Segre image is the projective rank-one locus cut out by 2 by 2 minors
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-segre-map-well-defined-injective, def-projective-algebraic-set, thm-closed-projective-embedding-by-homogeneous-generators]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.26
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, The Segre embedding
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

The image of the Segre point map is precisely the nonzero projective matrices $(z_{ij})$ satisfying
$$z_{ij}z_{k\ell}-z_{i\ell}z_{kj}=0\quad\text{for all }i,k,j,\ell.$$
It is a closed projective algebraic set. On every standard open
$z_{i_0j_0}\ne0$, the two factors are recovered by regular coordinate ratios.

## Facts & Assumptions

**Given:** A projective coordinate matrix $z=(z_{ij})$.

## Proof

1.1 If $z_{ij}=x_i y_j$, then $z_{ij}z_{k\ell}=x_ix_ky_jy_\ell=z_{i\ell}z_{kj}$, so every Segre point satisfies every displayed minor. [given, algebra]

2.1 Conversely choose a nonzero entry $z_{i_0j_0}$. The minor equations give $z_{ij}z_{i_0j_0}=z_{ij_0}z_{i_0j}$, hence $z_{ij}=x_i y_j$ for $x_i=z_{ij_0}$ and $y_j=z_{i_0j}/z_{i_0j_0}$. Thus the matrix is a Segre image. [step 1.1, algebra]

3.1 The minors are homogeneous quadrics, so their common zero locus is projectively closed, and step 2.1 identifies it with the image. On $z_{i_0j_0}\ne0$, the ratios $$\frac{z_{ij_0}}{z_{i_0j_0}},\qquad \frac{z_{i_0j}}{z_{i_0j_0}}$$ are regular and recover the standard affine coordinates of both factors. Thus the asserted chartwise inverse is proved directly; injectivity alone is not used as an embedding criterion. [step 2.1, algebra] ∎
