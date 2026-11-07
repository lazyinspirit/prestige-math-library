---
id: lem-reduced-alternating-checkerboards-are-essential
kind: lemma
title: "The checkerboard surfaces of a connected reduced alternating diagram are essential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reduced-alternating-link-diagram
  - lem-alternating-checkerboard-normal-pairing-is-definite
  - lem-reduced-alternating-diagram-has-finite-diagrammatic-prime-splitting
  - lem-prime-reduced-alternating-checkerboards-are-essential
  - lem-sutured-boundary-sum-preserves-disk-essentiality
  - lem-exterior-boundary-compression-gives-one-suture-cap
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: use the supplied finite diagrammatic splitting tree and explicit disk collars. No topological prime-decomposition theorem or Schoenflies theorem in dimension three is invoked."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, End-essential spanning surfaces for links in thickened surfaces, Theorem 1.1, Proposition 1.5, and proofs, manuscript pp. 6–9"
      url: "https://arxiv.org/pdf/2210.03218v2"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.1, Fact 2.7, manuscript p. 6"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Let $D$ be any connected reduced alternating spherical diagram, including a crossingless circle, and let $F$ be either checkerboard surface for its link $L$. Regard $F$ as properly embedded in the link exterior $E$. Then $F$ is geometrically incompressible and boundary-incompressible: an embedded disk with boundary on $F$ and interior disjoint from $F$ has boundary bounding a disk in $F$, and any proper arc of $F$ parallel through an embedded disk in $E$ into $\partial E$ is boundary-parallel in $F$.

More strongly, let $N$ be $E$ cut along $F$, and let $s$ be the union of the core curves of its boundary annuli coming from the tori of $\partial E$. Every properly embedded disk $X\subset N$ with $|\partial X\cap s|\le1$ has no such intersection and has boundary bounding a disk in $\partial N\setminus s$. No primeness assumption on the represented link or diagram is required.

## Statement references

[Kindred, *End-essential spanning surfaces for links in thickened surfaces*, Theorem 1.1](https://arxiv.org/pdf/2210.03218v2)

[Kindred, *A geometric proof of the flyping theorem*, Fact 2.7](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** The connected reduced alternating diagram and either checkerboard color.

[F1] Connectedness, reducedness and alternation concern the finite diagram. Its checkerboard has a finite disk-and-band presentation. ([[def-reduced-alternating-link-diagram]], [[lem-alternating-checkerboard-normal-pairing-is-definite]])

[F2] A connected reduced alternating diagram with crossings has a finite splitting tree with diagrammatically prime reduced alternating leaves. Each parent checkerboard is an explicit geometric boundary sum of its children, constructed in projection-disk product balls. ([[lem-reduced-alternating-diagram-has-finite-diagrammatic-prime-splitting]])

[F3] The statement's zero- and one-suture disk property, and geometric essentiality, hold at every leaf of that tree. ([[lem-prime-reduced-alternating-checkerboards-are-essential]])

[F4] The zero- and one-suture disk property is preserved by boundary sum of two sutured manifolds along disks each bisected by one suture arc. ([[lem-sutured-boundary-sum-preserves-disk-essentiality]])

[F5] Geometric incompressibility together with absence of a one-suture disk in the cut-open exterior implies exterior boundary-incompressibility. ([[lem-exterior-boundary-compression-gives-one-suture-cap]])

## Proof

1.1 For a crossingless connected diagram, $F$ is a disk, and the cut-open exterior is a ball whose suture is one circle dividing its boundary into two disks. A circle bounding a proper disk in this ball cannot meet that suture exactly once, because a closed curve crosses a separating circle an even number of times. If it misses the suture, it lies in one of the two complementary disks and bounds a disk there. This is the same stronger disk property. [given, F1, construct]

1.2 Suppose first that the diagram has crossings. Use [F2] to obtain its finite splitting tree, retaining the specified color at every node. Each node surface comes with the standard capping disks and link arcs in the product balls used in its split, so no comparison of abstract prime decompositions is needed. [given, F1, F2, construct]

2.1 For each such surface boundary sum, its complementary sutured manifold is the boundary sum in [F4]. This can be checked in a boundary-arc chart: take the surface locally as $\{z=0,y\ge0\}$, with boundary on the $x$-axis, and its interval thickening locally as $\{y\ge0,|z|\le\varepsilon\}$. Its vertical boundary is $y=0$, and the link is the arc $z=0$ in that boundary. Choose a small disk there bisected by this arc. Gluing the two complementary manifolds along these disks removes the two marked link arcs and joins their exterior portions at the endpoints, while the two middle surfaces are joined by the boundary-sum strip. The coordinates round to smooth collars; away from them nothing changes. In the projection-product construction in [F2] the marked disks are precisely the complementary disks of the sphere cut along the surface strip. Thus the cores of the boundary annuli splice as in [F4], and this identification matches the actual diagrammatic parent, not just an unmarked abstract manifold. [F2, F4, step 1.2, construct]

3.1 Apply [F3] at all leaves and [F4] at their parent nodes, using step 2.1. Continuing upward through the finite tree proves the stronger disk property at its root. Formally, induction on the number of vertices of a finite subtree suffices: the single-vertex case is [F3], and at a nonleaf root the two smaller subtrees give the hypotheses for [F4]. This proves the property for either checkerboard when crossings are present. Together with step 1.1 it covers every diagram in the statement. All choices of annular cores give the same result: isotope the cores within their annuli and extend over a boundary collar to transport both the proper disks and their boundary disks. [F2, F3, F4, step 1.1, step 1.2, step 2.1, construct]

4.1 To deduce geometric incompressibility, lift a hypothetical compressing disk to $N$. Its boundary is one lift of a simple closed curve $\gamma$ in $F$ and misses $s$. By steps 1.1 and 3.1 it bounds a disk on $\partial N\setminus s$. Push this disk out of the half-annular collars into the normal double cover of $F$, keeping its boundary fixed. It projects to an embedded disk in $F$: the disk and its deck translate have disjoint boundaries, and therefore are disjoint or nested unless their union is a sphere component. Each component of the normal double cover has nonempty boundary, excluding the sphere alternative. Strict nesting is incompatible with the deck involution, which would reverse that strict inclusion. Hence the disks are disjoint, so the projection is injective and bounds $\gamma$. The original disk was therefore not a compression. [step 3.1, step 1.1, construct]

5.1 By [F5], an exterior boundary compression would now yield a one-suture disk in $N$, excluded by steps 1.1 and 3.1. Thus both checkerboards are geometrically incompressible and boundary-incompressible, including for diagrams which split nontrivially in [F2]. [F2, F5, step 3.1, step 1.1, step 4.1, construct] ∎
