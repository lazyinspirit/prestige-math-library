---
id: lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors
kind: lemma
title: Minimum boundary exchange leaves have a single-leaf zero-edge corridor
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction
  - lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts
  - lem-zero-edge-normal-exchange-rectangles-and-annuli-have-cellwise-product-structures
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 8
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

Use the least-weight and lexicographically least disk $F$, reduced boundary pair $P,H$, and leaf/opposite-cap construction of the leaf-cap rigidity lemma. Choose a leaf disk patch $E$ of $P$ with smallest weight among all such leaves, and let $E'$ be its opposite end disk.

View these pieces on the regular full-resolution disk $F$, retaining the two traces of every exchange arc and the exchange rectangle off $F$ between them. Then $E'$ contains exactly one original leaf disk patch $L$ of $P$, with its small half-switch-band collars included. It has $w(L)=w(E)>0$. Either $E'=L$, or the closure of $E'\setminus L$ is a disk corridor with two trace-arc sides, two original-boundary sides, and zero edge weight. In the latter case its original normal-cell product structure gives an isotopy of the cap $E'$ onto $L$ on $F$, fixing its original edge intersections and keeping every point in its original normal cell. This is a finite cap transport on the given normal disk; it asserts no ambient three-dimensional filling or cancellation of a cycle of exchanges.

## Statement references

[[lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts]]

[[lem-zero-edge-normal-exchange-rectangles-and-annuli-have-cellwise-product-structures]] — original-cell product parametrization of a zero-edge rectangular corridor.

## Facts & Assumptions

**Given:** The normal disk and retained diagram of the Statement; a normal cell means one particular normal disk or side in its cell structure, rather than merely its tetrahedron.

[F1] There are at least two original leaf disk patches of $P$, each of positive edge weight. The partner $H$ is an annulus or Mobius band; every original intersection arc is nonseparating in $H$, and cutting all the arcs decomposes both summands into disks. ([[lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction]], [[lem-normal-exchange-disk-patches-have-positive-edge-weight]])

[F2] For the chosen leaf, the opposite end disk satisfies $N(E')=N(E)$ at every original edge, and therefore $w(E')=w(E)$. ([[lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts]])

[F3] In the full resolution, the two traces of each switched proper arc can be retained on the resulting normal disk as disjoint proper arcs. The exchange rectangle between them has interior off $F$. Cutting $F$ at those traces leaves the original cut patches with small half-switch-band collars attached to their trace sides. These collars lie in the switching neighborhoods, miss $T^{(1)}$, and change neither the patch topology nor its number of trace sides. Each trace segment in a normal cell joins distinct original tetrahedral faces, since it is parallel to the corresponding original double arc. The construction and its regular disk switch preserve this face incidence. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F4] A finite proper arc family cuts a disk into disks with a tree as adjacency graph. A zero-edge disk corridor with two trace sides and two original-boundary sides has a finite product parametrization within its original normal cells. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]], [[lem-zero-edge-normal-exchange-rectangles-and-annuli-have-cellwise-product-structures]])

## Proof

1.1 Put $m=w(E)>0$, using [F1]. Cut $E'$ along all exchange traces in its interior. Every other trace lies wholly inside or wholly outside $E'$: its interior cannot cross the sole trace side in the boundary of $E'$, and all trace endpoints are on the original boundary. Thus this cutting is a proper arc cutting of the disk $E'$. Its pieces are precisely the original cut patches, with the harmless half-switch-band collars of [F3]. They are all disks, and their adjacency graph is a finite tree by [F4]. Exactly one piece can meet the outer trace side of $E'$; mark that vertex of the tree as its root. [given, F1, F3, F4, construct]

2.1 Every non-root leaf of this tree is an original leaf disk patch of $P$. Its tree degree equals its full number of trace sides, since the added collars in [F3] preserve that number. If that degree is one, it is a boundary disk patch of one of the original summands. It cannot come from $H$: such a patch would be cut off from $H$ by its sole trace arc and make that arc separating, contrary to [F1]. It is therefore one of the original $P$ leaves and has weight at least $m$. If the tree has only its root vertex, the same argument with its sole exterior trace side shows that $E'$ itself is an original $P$ leaf; this is the asserted case $E'=L$. [F1, F3, step 1.1, construct]

3.1 Suppose now that there is more than one vertex. The tree has a non-root leaf. By step 2.1 its weight is at least $m$, whereas the weight of the entire $E'$ is exactly $m$ by [F2]. All edge counts of pieces are nonnegative and add: no cut meets an original edge point. Hence there is exactly one non-root leaf $L$, it has weight $m$, and every other piece has weight zero. There cannot be two such leaves, since they would contribute at least $2m>m$. Every finite tree with at least two vertices has at least two leaves. Thus its only leaves are $L$ and the root. It is a path: a vertex of degree at least three would give at least three leaves by extending paths along its three branches. Removing the end piece $L$ leaves a chain of zero-edge disk pieces with a single exterior trace side at either end. Its union is a disk corridor $R$. The remaining sides are two original-boundary arcs, since each interior piece of the chain has two trace sides alternating with its two original-boundary sides. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 The patch $R$ is a subsurface of the original normal disk $F$, cut off by its two end traces, and misses every original edge by step 3.1. Those traces satisfy the distinct-side condition [F3]. Apply [F4] to give $R$ its original-cell PL product rectangle. This in particular proves the corridor has no unrecorded twist or fold: its two end traces meet exactly the same chain of original normal cells, with corresponding sides in corresponding faces. [F3, F4, step 3.1, construct]

5.1 To transport the entire cap, add a small product collar of the inner trace inside $L$. It can be chosen in the same normal cells and disjoint from $T^{(1)}$: in each normal disk the trace is a finite proper polygonal arc away from its vertices, so a sufficiently thin polygonal strip on its $L$ side exists; choose compatible endpoint intervals on the finitely many shared normal sides. The resulting extended rectangle has transverse coordinate in $[-\varepsilon,1]$, with the original inner trace at zero and the outer trace at one. For $0\le s\le1$, compress this transverse interval increasingly onto $[-\varepsilon,s]$, fixing $-\varepsilon$, and fix the rest of $L$. Conjugating by the product maps gives embeddings of the cap, with image $L$ plus the corridor up to level $s$. These maps are continuous in $s$ and PL for each $s$; the interval maps may be chosen affine and the finitely many polygonal product pieces triangulated. The family from $s=1$ to $s=0$ is the asserted cap isotopy. Each moving piece stays within its original normal cell, its boundary endpoints stay on the same old sides, and its support misses every original edge point. At $s=0$ its image is exactly $L$. [F3, F4, step 3.1, step 4.1, construct] ∎
