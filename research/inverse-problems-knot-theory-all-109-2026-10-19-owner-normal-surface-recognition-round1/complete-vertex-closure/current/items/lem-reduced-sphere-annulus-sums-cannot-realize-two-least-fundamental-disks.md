---
id: lem-reduced-sphere-annulus-sums-cannot-realize-two-least-fundamental-disks
kind: lemma
title: "Reduced sphere-annulus sums cannot realize two least fundamental disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-same-copy-exchanges-on-least-fundamental-disks-have-disjoint-adjacent-caps
  - lem-actual-same-copy-exchange-caps-have-rigid-original-edge-counts
  - lem-between-copy-annular-exchange-caps-have-rigid-original-edge-counts
  - lem-between-copy-annular-exchanges-on-least-disks-have-adjacent-caps
  - lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Let $D$ be a fundamental essential normal disk in a finite simplicial triangulation of a compact PL three-manifold. Suppose $D$ has least edge weight among all essential normal disks, and lexicographically least normal vector among those of that weight; put $d=v(D)$.

There is no actual original-triangulation regular-sum diagram $X\cup Y$ of the following reduced kind. The surfaces $X,Y$ are respectively a connected normal sphere and a connected normal annulus, their vectors are not proportional to $d$, and $v(X)+v(Y)=2d$. All partial regular resolutions retain normal tetrahedral disk pieces, and the full resolution consists of two copies $D_0,D_1$ of $D$. The number of original double circles is least among diagrams of this kind, including diagrams obtained by regularly switching a subset when the two resulting families remain an embedded sphere and annulus.

No irreducibility, orientability or choice hypothesis is required. The conclusion excludes this sphere-annulus branch only; it does not exclude a sum of two disk summands.

## Facts & Assumptions

**Given:** The least fundamental disk and a hypothetical reduced diagram with the original tetrahedral pieces and switching neighborhoods specified in the Statement. Edge weight always refers to the original triangulation.

[F1] Cutting the full resolution at all exchange traces recovers the original cut patches with small half-switch collars, disjoint from the one-skeleton. The traces are disjoint circles, their normal-cell arcs join distinct sides, and every partial regular resolution has genuine embedded normal tetrahedral parametrizing disks. Every nonempty normalization component therefore has positive original edge weight. [[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[F2] For an annular exchange with both traces on one copy of $D$, its disk caps are disjoint, adjacent and have equal positive edge counts. [[lem-same-copy-exchanges-on-least-fundamental-disks-have-disjoint-adjacent-caps]], [[lem-actual-same-copy-exchange-caps-have-rigid-original-edge-counts]]

[F3] For an annular exchange between distinct copies, its disk caps have equal positive edge counts and are adjacent. The needed cellwise product between those two disjoint equal-vector disks is supplied by the equal-vector product construction. [[lem-between-copy-annular-exchange-caps-have-rigid-original-edge-counts]], [[lem-between-copy-annular-exchanges-on-least-disks-have-adjacent-caps]], [[lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products]]

[F4] Every original disk patch with one trace-circle frontier and no original boundary has positive weight. [[lem-normal-exchange-disk-patches-have-positive-edge-weight]]

[F5] Disjoint polygonal circles on a disk bound disks that are disjoint or nested; none of these disks contains the disk's original boundary. Cutting a disk at a finite such family gives planar regions with a tree as their adjacency graph. On a sphere the analogous graph is also a tree, and a nonempty circle family has disk leaf regions. These facts follow by cutting along one circle at a time and using polygonal separation and disk parametrizations. [[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]]

## Proof

1.1 There is at least one double circle. Otherwise the full resolution would be the disjoint union of the sphere and annulus, not two disks. All double curves are circles, since $X$ is closed. Cut the sphere along them; a leaf region from [F5] is an original disk patch. Thus the finite set of all original disk patches of either family is nonempty. Retain these patches on $D_0\cup D_1$ with their half-switch collars [F1]. Choose one of smallest weight $m$; by [F4], $m>0$. Every trace circle bounds a unique disk cap on its particular full-resolution disk. For the frontier trace of any minimum patch $E$, let $B(E)$ be the disk cap at the other frontier of that same exchange annulus. By [F2] or [F3], $B(E)$ is disjoint from $E$, is adjacent to it, and has edge weight $m$. [given, F1, F2, F3, F4, F5, construct]

2.1 Cut $B(E)$ along every trace circle in its interior. A trace cannot cross its outer boundary, so each remaining trace circle is wholly inside or outside it. The resulting planar regions, with their half-switch collars, are precisely original cut patches. Their adjacency graph is a tree, rooted at the region incident to the outer frontier of $B(E)$. Every non-root leaf is an original disk patch with just one trace-circle frontier and therefore has weight at least $m$. If the tree has one vertex, $B(E)$ itself is an original disk patch. Otherwise there is a non-root leaf, and there can be only one: two would already contribute at least $2m$ to the weight $m$ of $B(E)$. Denote that unique leaf by $L(E)$. Its weight is $m$, and every other region has zero edge weight, since these nonnegative counts partition the edge points of $B(E)$. The tree has no branching: a branch of degree at least three would give at least two non-root leaves. It is therefore a path from its root to $L(E)$. Consequently either $B(E)=L(E)$, or the closure of $B(E)\setminus L(E)$ is a nonempty zero-edge annulus between their two distinct frontier circles. This annulus is on the original resolved disk, without any ambient filling or cap isotopy. [F1, F4, F5, step 1.1, construct, algebra]

3.1 The assignment $E\mapsto L(E)$ is a function on a finite nonempty set of minimum original disk patches. It has no fixed point because $E$ and $B(E)$ are disjoint. Iteration gives a cycle of distinct patches $E_1,\ldots,E_r$, $r\ge2$, with $L(E_i)=E_{i+1}$ and indices taken modulo $r$. Write $B_i=B(E_i)$ and $\alpha_i$ for its original double circle. The caps $B_i$ are pairwise disjoint. Caps on different full-resolution disks are disjoint automatically. On one disk they are disjoint or nested by [F5]. If $B_i\subset B_j$, then $E_{i+1}\subset B_j$; the uniqueness in step 2.1 gives $E_{i+1}=E_{j+1}$, impossible for distinct cycle indices. Equality is excluded by the same argument. There is no covering case: each cap is the interior disk bounded by its trace circle, so their union cannot contain the original disk boundary. [F2, F3, F5, step 1.1, step 2.1, construct, contradiction]

4.1 First suppose $B_i=E_{i+1}$ for some index. Its frontier is the other trace of the original circle $\alpha_i$, so $\alpha_{i+1}=\alpha_i$ and its opposite cap is $E_i$. The cycle is thus a two-cycle using one original circle, with both caps original disk patches. Label the transverse exchange rectangle with upper rays $0,1$ at its left and right frontiers and lower rays $2,3$. The regular resolved pairs are $(0,2),(1,3)$; the original unswitched pairs are $(0,3),(1,2)$. Adjacency says the two cap rays are both upper, after relabeling, namely $0,1$. They consequently belong to different original families. Each is a disk cut off by $\alpha_i$, and neither contains another double curve. Regularly switching just $\alpha_i$ swaps these two disk patches between the families. A sphere minus its disk patch is a disk, which capped by the other patch remains a sphere. An annulus minus its disk patch is a pair of pants, which capped by the other patch remains an annulus. Both images are embedded: there is no other double curve in either swapped patch, so every other original double curve still joins the unchanged portions of the different families. They are normal by the partial-resolution assertion [F1]. Neither vector is proportional to $d$, since a surface with vector proportional to the primitive vector $d$ is a union of disk copies, not a sphere or annulus. To verify primitivity, any common divisor greater than one would split the fundamental vector $d$; a rational scalar producing an integral vector is then integral by a Bezout combination of its coordinates. The new sphere-annulus diagram has one fewer double circle, contradicting reducedness. [given, F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, contradiction, algebra]

5.1 We may therefore assume $R_i=\overline{B_i\setminus E_{i+1}}$ is a nonempty zero-edge annulus for every $i$. The circles $\alpha_i$ are distinct. Indeed each original circle has just its two frontier traces. If two distinct cycle patches came from it, they would occupy those two opposite caps, making each other's opposite caps and giving precisely the equality case of step 4.1. The annuli $R_i$ have pairwise disjoint interiors by step 3.1. Their outer boundaries are the $B_i$ traces; their inner boundaries are the $E_{i+1}$ traces. Every selected trace appears exactly once in this list, and none is the trace of another selected circle. [F1, step 2.1, step 3.1, step 4.1, construct]

6.1 Leave exactly the original circles $\alpha_i$ unswitched, retaining the regular resolution at all other circles. Check its normalization directly in each selected transverse rectangle, using the labeling of step 4.1. The cap $E_i$ occupies upper ray $0$ at the left frontier; its complementary germ is lower ray $2$ and belongs to $R_{i-1}$, since $E_i\subset B_{i-1}$. The adjacent cap $B_i$ occupies upper ray $1$ at the right frontier; near that frontier its germ belongs to $R_i$. Its complementary ray $3$ is outside all the $B_j$, by their disjointness. Undoing the regular switch uses the original diagonal continuations $(0,3)$ and $(1,2)$. Thus it joins $E_i$ to the outside remainder and, separately, joins $R_i$ to $R_{i-1}$. This is an original unswitched continuation, never an irregular switch. Its description is consistent along the whole circle because the annular exchange has its given rectangular product neighborhood. [F1, F2, F3, step 3.1, step 4.1, step 5.1, construct]

7.1 At every other circle keep both regular continuations. The frontier of the union of the $R_i$ consists solely of the selected trace circles listed in step 5.1. Hence an unselected regular trace has either both incident parts in this union or neither: the frontier crosses no such trace. At selected traces the diagonal check of step 6.1 joins every annular frontier to another annular frontier. The annuli, with these short continuations, therefore form a union of entire normalization components of this actual partial regular resolution. This union is nonempty because each $R_i$ is nonempty, and it misses every original edge because all $R_i$ and switching neighborhoods do. Choosing one of its finitely many components yields a nonempty zero-edge normalization component. That contradicts [F1], since every such component contains a genuine normal tetrahedral disk and therefore one of its original normal vertices. The contradiction rules out the hypothetical reduced sphere-annulus diagram. No sphere was filled by a ball, and no normal parallelism of exterior exchange caps was inferred. [F1, step 2.1, step 5.1, step 6.1, construct, contradiction] ∎
