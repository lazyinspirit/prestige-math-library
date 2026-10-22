---
id: lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus
kind: lemma
title: "Incompressible surfaces at torus boundary are essential or parallel annuli"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.10 and its proof, printed pp.15–16"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, essential annuli and torus-boundary pieces, PDF pp.3–5"
---

## Statement

Let $M$ be a compact connected orientable irreducible $3$-manifold whose boundary components are tori. Let $S\subset M$ be a connected, two-sided, properly embedded incompressible surface with nonempty boundary contained in $\partial M$. Then either $S$ is boundary-incompressible, or $S$ is an annulus boundary-parallel into $\partial M$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** A compact connected orientable irreducible $3$-manifold $M$ with torus boundary and an incompressible connected two-sided proper surface $S$ with nonempty boundary.

[F1] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines incompressibility, boundary-compressibility, boundary-parallelity, and irreducibility.

## Proof

1.1 If $S$ has a boundary-compressing disk $D$, write $\partial D=\alpha\cup\beta$, where $\alpha=D\cap S$ is an essential arc in $S$ and $\beta=D\cap\partial M$ lies in a boundary torus $T$. No circle of $\partial S\cap T$ bounds a disk in $T$: if such a circle were essential in $S$, the disk pushed into a boundary collar would compress $S$; if it were inessential in $S$, the disk it bounds in $S$ would be a whole connected component, so connectedness would make $S$ a disk, which has no essential boundary-compressing arc. Thus $\beta$ lies in an annular component $A$ of $T\setminus\partial S$. If $\beta$ cut off a disk in $A$, adjoining that disk to $D$ and using incompressibility would make $\alpha$ inessential in $S$, contrary to its definition. Hence $\beta$ spans $A$. [given, F1, construct]

1.2 The endpoints of $\beta$ lie on different boundary circles of $A$. If they lay on the same circle, that would be the sole circle of $\partial S\cap T$ incident to $A$; the normal to the two-sided surface $S$ along $\alpha$ would point to opposite sides of that circle at the two endpoints, contradicting that $S$ is two-sided. Let $P\subset S$ be a regular neighbourhood of $\alpha$ together with the two boundary circles of $S$ incident to the ends of $\alpha$. Then $P$ is a pair of pants, and its third boundary circle $c$ bounds a disk in the complement of $S$, obtained by pushing slightly into $M$ the disk near $D\cup A$. Since $S$ is incompressible, $c$ also bounds a disk in $S$. Gluing that disk to $P$ shows that $S$ is an annulus. [F1, step 1.1, construct]

2.1 The annulus $S$ and the spanning annulus $A$ on $T$ form an embedded torus. The boundary-compressing disk $D$ compresses this torus to a sphere. By irreducibility the sphere bounds a ball; reversing the compression shows that the torus bounds a solid torus, with $S$ and $A$ as complementary annuli on its boundary. A collar of $A$ in that solid torus is a product between $S$ and a subsurface of $\partial M$. Thus $S$ is boundary-parallel. [F1, step 1.2, construct] ∎
