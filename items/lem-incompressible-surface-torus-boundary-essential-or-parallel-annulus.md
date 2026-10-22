---
id: lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus
kind: lemma
title: "Boundary-compressible incompressible surfaces at torus boundary are parallel annuli"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-boundary-compressible-annulus-is-boundary-parallel
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. The finite torus strips and the primitive marked-ball product supplier have choice-free proofs; no smooth global partition or triangulation supplier is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

**Given:** The compact connected orientable irreducible smooth manifold with torus boundary and the connected two-sided proper incompressible surface $S$ with nonempty boundary.

[F1] The geometric disk obstructions and boundary-parallelity are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] Disjoint essential smooth torus circles bound parametrized smooth annulus strips, without choice ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement).

[F3] A proper incompressible annulus with a boundary compression in this manifold is boundary-parallel, by the primitive-winding marked-ball construction ([[lem-boundary-compressible-annulus-is-boundary-parallel]], full proof).

[F9] Every compact smooth boundary-preimage surface has a boundary-fixed smooth embedding neatification with an explicit topological ambient extension. The actual smooth disk obstructions and boundary-compressing witnesses transport as stated in the endpoint-witness supplier. Products here are the products in the original Definition; on a broad nonneat input their pullbacks are topological products, not newly asserted smooth collars. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]] [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

## Proof

1.1 First apply [F9] to the given surface, fixed pointwise on its boundary. The resulting surface is neat. Incompressibility passes to it, and a boundary-compressing witness passes in either direction; absence of boundary compressions therefore passes as well. Work with this neat representative for the following smooth collar constructions. The boundary-fixing topological ambient extension pulls any resulting boundary-parallel product back to the actual original surface. Thus this preparation does not add a neatness hypothesis to the Statement. If $S$ is boundary-incompressible, the first conclusion holds. Otherwise choose a boundary-compressing disk $D$, with $\partial D=\alpha\cup\beta$ and $\alpha$ an essential proper arc of $S$. A boundary disk on a torus whose interior misses $\partial S$ can be pushed inward to compress $S$, unless $S$ is itself a disk: a boundary circle bounding a disk on the connected surface forces the surface to be that disk. An innermost choice among the finitely many inessential boundary circles provides such a boundary disk. But a disk has no essential proper arc. Therefore every boundary circle of $S$ on the torus $T$ containing $\beta$ is essential. By [F2] its complementary regions are annulus strips. The arc $\beta$ lies in one of them. If both endpoints lie on the same boundary copy of that strip, it cuts off a disk there. Gluing this disk to $D$ gives a disk with boundary $\alpha$ and an interval of $\partial S$; incompressibility of $S$ forces that circle to bound a disk on $S$, so $\alpha$ would cut off a disk on $S$, contrary to essentiality. Thus $\beta$ spans its annulus strip $A_0$. [F1, F2, given, construct]

2.1 The two endpoints of $\alpha$ lie on distinct actual boundary circles of $S$. The only alternative after step 1.1 would be that the two ends of $A_0$ are the two copies of one circle $c$, with $c$ the only boundary circle of $S$ on $T$. Two-sidedness rules this out. Along the connected arc $\alpha$, the interior of $D$ lies on one fixed normal side of $S$. Along $c$, that same side restricts to one fixed side of $c$ in $T$, since the proper surface is two-sided. Hence $\beta$ must approach the same side of $c$ at both endpoints; a spanning arc of $T$ cut along $c$ approaches opposite sides. This contradiction proves the assertion. Let $P$ be a small regular neighborhood in $S$ of $\alpha$ and its two incident boundary circles. It is a pair of pants. Its third circle $d$ bounds a disk just off $S$: boundary-compress the annulus strip $A_0$ along $D$ and push the resulting disk a little inward. Its interior misses $S$, because the interior of $A_0$ misses $\partial S$ and the interior of $D$ misses $S$. Incompressibility makes $d$ bound a disk on $S$. This disk is on the side opposite $P$: if it contained $P$, the two boundary circles of $S$ in $P$ would lie in the interior of that disk, contrary to the surface half-space charts. Gluing the disk to $P$ fills a whole connected component of $S$, so $S$ is an annulus. The original $D$ is its boundary compression. Apply [F3] to get the second conclusion. Every neighborhood and disk surgery used only finitely many explicit surface and quadrant charts; [F2] and [F3] introduce no choice assumption. [F1, F2, F3, step 1.1, construct] ∎
