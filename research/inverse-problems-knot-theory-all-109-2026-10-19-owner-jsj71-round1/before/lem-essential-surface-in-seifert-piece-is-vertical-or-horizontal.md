---
id: lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
kind: lemma
title: "Essential annuli and tori in Seifert pieces are vertical or horizontal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
  - lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus
  - lem-relative-transversality-for-embedded-surfaces
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is the formal ambient hypothesis of the finite-triangulation and Schoenflies suppliers; it implies countable choice for the relative-general-position supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition 1.11 and its proof, printed pp.16–18"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–3, essential annuli and tori in Seifert pieces"
---

## Statement

Assume full AC. Let $M$ be a compact connected irreducible Seifert-fibered $3$-manifold, and let $F\subset M$ be a connected, two-sided essential annulus or torus. Then $F$ is ambient isotopic to either a vertical surface, meaning a union of regular fibers, or a horizontal surface, meaning a surface transverse to every fiber. For a horizontal surface $F$ with $n$ sheets over the base orbifold $B$ and exceptional-fiber multiplicities $q_1,\ldots,q_m$, the Euler characteristics satisfy
$$
\frac{\chi(F)}{n}=\chi(B)-\sum_{i=1}^m\left(1-\frac1{q_i}\right).
$$
If $F$ is two-sided and horizontal, cutting $M$ along $F$ gives an interval bundle over a surface.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Proposition 1.11](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a compact connected irreducible Seifert-fibered $3$-manifold $M$ and a connected two-sided essential annulus or torus $F$.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[L1] Full AC implies countable choice, the hypothesis of relative transversality ([[thm-choice-implies-dependent-implies-countable-choice]], Statement; [[def-countable-choice]], Definition).

[F1] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines essential surfaces, Seifert-fibered pieces, regular fibers, and exceptional multiplicities.

[F2] An essential proper surface with nonempty boundary in a solid torus is a meridian disk; an incompressible closed torus in a solid torus is compressible ([[lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel]], Statement).

[F3] An incompressible connected proper surface in an irreducible manifold with torus boundary is either essential or a boundary-parallel annulus ([[lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus]], Statement).

[F4] A compact surface may be put in finite general position with a prescribed finite family of proper surfaces, preserving a boundary collar ([[lem-relative-transversality-for-embedded-surfaces]], Statement).

[F5] Every sphere in the standard solid torus bounds a ball there: smooth Schoenflies gives balls on both sides in $S^3$, and the complementary solid torus lies on one side ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

[A2] Countable choice is [[def-countable-choice]] and is the hypothesis of [F4].

## Proof

1.1 If $F$ is already a union of regular fibers, it is vertical. Otherwise remove small fibered open solid-torus neighbourhoods of all exceptional fibers; if there are none, also remove one regular fiber. The remainder $M_0$ is a circle bundle over a compact connected surface $B_0$ with nonempty boundary. Choose finitely many disjoint proper arcs in $B_0$ that cut it to a disk. Their inverse images are disjoint vertical annuli $A_1,\ldots,A_r$, and cutting $M_0$ along them gives a solid torus $W$. [F1, given, construct]

1.2 Use [F4] to put $F$ transverse to these annuli and to the chosen fiber cores, and minimize the number of intersection components. An inessential circle of $F\cap A_j$ can be removed by an innermost-disk isotopy: if it is essential in $F$ it gives a compression, and otherwise the disk on $F$ together with the disk on $A_j$ bounds a sphere, which bounds a ball in $M$ by irreducibility. Remove outermost arcs with both endpoints on the same boundary component of $A_j$; if their endpoints lie on an original boundary component, they give a boundary compression of $F$, and if they lie on a deleted fiber-neighbourhood boundary, isotopy across the outermost disk lowers the number of intersections with the corresponding core fiber. Thus the remaining components are vertical circles and spanning arcs. [A1, L1, A2, F1, F4, step 1.1, construct]

2.1 Cut $F\cap M_0$ along the annuli to obtain a surface $F_1$ in the solid torus $W$. If a component of $F_1$ had a compressing disk, its boundary is nullhomotopic in $F$ by incompressibility of $F$; [F5] then bounds the resulting sphere by a ball, and pushing across that ball removes intersection curves, contradicting minimality. Every boundary circle of $F_1$ is vertical or horizontal on $\partial W$, hence essential. Each component with boundary is incompressible. By [F3] it is boundary-incompressible or a boundary-parallel annulus; a boundary-incompressible component is not boundary-parallel, since a boundary-parallel annulus has a boundary compression and a boundary-parallel disk has nullhomotopic boundary. Thus [F2] makes each boundary-incompressible component a meridian disk. A closed torus component is compressible by [F2]. A boundary-parallel annulus with horizontal boundary has a boundary-compressing disk whose boundary arc lies in a vertical fiber direction: if that arc is on an original boundary torus, it boundary-compresses $F$, impossible; if it is on a deleted fiber-neighbourhood torus, the outermost-disk isotopy of step 1.2 decreases intersections with the corresponding fiber core. Hence the remaining annuli have vertical boundary and the remaining disks have horizontal boundary. [A1, L1, F1, F2, F3, F5, step 1.2, construct]

2.2 A vertical fiber circle and a horizontal section circle on the same boundary torus have nonzero algebraic intersection. Hence the disjoint boundary circles of $F_1$ are all of one type. If they are vertical, isotope the boundary-parallel annuli to vertical annuli relative to their already vertical boundary; regluing the $A_j$ gives a vertical surface isotopic to $F$. If they are horizontal, isotope the meridian disks to horizontal disks relative to their boundary; regluing gives a horizontal surface isotopic to $F$. [F1, step 2.1, algebra, construct]

3.1 In the horizontal case, the projection to $B$ is an $n$-sheeted branched cover, with branching order $q_i$ over the image of the $i$th exceptional fiber. Triangulate $B$ with these images as vertices and lift the triangulation to $F$. Each ordinary simplex has $n$ lifts, while the vertex over the $i$th exceptional fiber has $n/q_i$ lifts. Counting vertices, edges, and faces gives $\chi(F)=n\chi(B)-n\sum_i(1-1/q_i)$, which is the displayed formula. Since a two-sided horizontal surface meets every fiber, the local fiber charts give a product interval direction normal to $F$; these directions agree on overlaps, so cutting along $F$ is an interval bundle. [F1, step 2.2, algebra] ∎
