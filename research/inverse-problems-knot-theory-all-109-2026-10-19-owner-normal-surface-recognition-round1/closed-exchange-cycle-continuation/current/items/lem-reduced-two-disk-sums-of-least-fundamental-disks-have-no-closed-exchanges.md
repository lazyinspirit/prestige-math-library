---
id: lem-reduced-two-disk-sums-of-least-fundamental-disks-have-no-closed-exchanges
kind: lemma
title: "Reduced two-disk sums of least fundamental disks have no closed exchanges"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-reduced-sphere-annulus-sums-cannot-realize-two-least-fundamental-disks
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Let $D$ be a least-weight essential fundamental normal disk with lexicographically least vector at that weight, in a finite simplicial triangulation of a compact PL three-manifold; put $d=v(D)$. Let $X,Y$ be connected embedded normal disks with neither vector proportional to $d$ and $v(X)+v(Y)=2d$.

Suppose an actual original-triangulation regular-sum diagram for them has full resolution $D_0\cup D_1$, the two disk copies of $D$, and retains genuine normal tetrahedral disk pieces under every partial regular resolution. Choose it with the smallest number of double curves among eligible two-disk diagrams, including those obtained by a partial regular switch when its resulting disk families are embedded and nonproportional to $d$.

Then every original double curve is a proper arc. At least one of $\partial X,\partial Y$ is null-homotopic in $\partial M$. The conclusion does not exclude those remaining proper exchanges, and assumes neither orientability nor irreducibility nor a choice principle.

## Facts & Assumptions

**Given:** The exact reduced original diagram and least fundamental disk from the Statement.

[F1] The annular minimum-patch construction in steps 1.1–3.1 and 5.1–7.1 of [[lem-reduced-sphere-annulus-sums-cannot-realize-two-least-fundamental-disks]] uses only these data: a nonempty finite set of interior one-circle disk patches; disjoint adjacent opposite caps with equal positive weight on the resolved disks; and the original partial-resolution property. The proof cuts opposite caps into a rooted tree, takes a cycle of unique minimum leaves, and either obtains a reciprocal pair of disk patches at one original circle or a union of nonempty zero-edge annuli closed under the original unswitched continuations. These are constructions in the resolved disks, not a use of the sphere-annulus conclusion. The disjointness, equal-count and adjacency suppliers are explicitly bound in that source's [F2] and [F3].

[F2] Actual original diagrams have disjoint proper-arc and circle traces, with normal-cell arcs joining distinct sides. Cutting at all traces gives the original patches with edge-free half-switch collars. Partial regular switches leave the stated original normal tetrahedral pieces. [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[F3] An interior disk patch with one circle frontier has positive edge weight. [[lem-normal-exchange-disk-patches-have-positive-edge-weight]]

## Proof

1.1 At least one original boundary is null-homotopic. Otherwise both $X,Y$ are essential normal disks, so their weights are at least $w(D)$. Their weights add to $2w(D)$ and hence both equal $w(D)$. Their vectors add to $2d$; unless both equal $d$, the first coordinate at which they differ from $d$ is smaller than $d$ in one vector and larger in the other. This contradicts lexicographic minimality. Equality of both vectors to $d$ contradicts the assumed nonproportionality. This proves the claimed boundary assertion. [given, construct, algebra, contradiction]

1.2 Suppose there is an original double circle. An innermost such circle on the original disk $X$ cuts off an interior disk with no other double circle. It contains no proper double arc: the endpoints of such an arc lie on $\partial X$, outside this cap, so entry would require crossing its frontier, contrary to the disjoint double-curve position. It is therefore an original interior disk patch. Choose smallest positive weight $m$ among all such patches on both families, using [F3]. For each chosen minimum patch $E$, its annular exchange has an opposite disk cap $B(E)$ in the full resolution; its disjointness, adjacency and weight $m$ follow from the same-copy or between-copy suppliers in [F1]. No proper trace enters $B(E)$ either: its boundary is a circle in the interior of one resolved disk, all proper trace endpoints lie on that disk's original boundary, and traces are disjoint. [given, F1, F2, F3, construct]

2.1 Thus every cap in the minimum-leaf construction [F1] is cut only by circles. To specify the application, cut $B(E)$ into planar original patches, root its adjacency tree at the outer frontier, and note that every non-root leaf is an interior original disk patch of weight at least $m$. Total weight $m$ forces a unique such leaf $L(E)$, of weight $m$, and a zero-edge annular corridor from it to the outer frontier unless the cap is that leaf. Iteration gives a finite cycle $E_i\mapsto E_{i+1}\subset B_i$. On each resolved disk the caps are disjoint or nested; uniqueness of their minimum leaf excludes nesting, so the $B_i$ are disjoint. If all corridors are nonempty, the local four-ray check in [F1] applies unchanged: leave the selected circles unswitched, keep every other curve, including every proper arc, regular, and glue each corridor to the preceding one by the original diagonals. No proper trace meets a corridor. The resulting nonempty annular union is closed in the parametrizing normalization and has zero edge weight. Every nonempty component of that actual partial resolution contains a genuine normal tetrahedral disk and hence an original edge point, a contradiction. Consequently some $B_i$ equals its minimum leaf, giving a reciprocal two-cycle at one original double circle. [F1, F2, F3, step 1.2, construct, contradiction]

3.1 At that circle both opposite caps are original disk patches. Adjacency makes their cap rays belong to different original families. Regularly switching only this circle swaps the patches: each original disk, with one interior disk removed, is an annulus, which the other disk patch caps back to a disk. The interiors of the swapped patches contain no other double curve, so every remaining circle and proper arc still joins the unchanged parts of different families. Both new disks are therefore embedded and normal by [F2], and retain exactly their respective original boundary circles. In particular the null-homotopic boundary from step 1.1 persists. The disk with that boundary cannot have vector proportional to $d$: fundamentalness makes $d$ primitive, a positive proportional integral vector is then $jd$ for an integer $j\ge1$, and its abstract normal surface is $j$ copies of $D$ by [F2]. Connectedness would force $j=1$ and an essential boundary. Since the two new vectors still sum to $2d$, neither is proportional to $d$. The patch swap is consequently an eligible two-disk diagram with one fewer double curve, contradicting the stipulated minimum. No double circle exists, proving the result. [given, F1, F2, step 1.1, step 1.2, step 2.1, construct, contradiction, algebra] ∎
