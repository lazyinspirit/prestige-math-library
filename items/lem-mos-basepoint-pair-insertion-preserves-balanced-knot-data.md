---
id: lem-mos-basepoint-pair-insertion-preserves-balanced-knot-data
kind: lemma
title: "The MOS basepoint-pair insertion preserves balanced knot data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-smooth-bridge-witnesses-admit-neat-corner-parametrizations-after-normalization
  - lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-collar-neighborhood-theorem
  - thm-isotopy-extension
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Figure5, Lemma2.4, and the topological destabilization in the proof of Proposition2.3, printed9–11; explicit local tangle and disk construction here"
---

## Statement

Assume Countable Choice. In a balanced diagram for an oriented knot in $S^3$, with the actual disk systems and trivial arcs of the balanced pointed-diagram definition, choose an old $z$ point. There is an insertion in an arbitrarily small neighborhood of this point, leaving all other marks and all old attaching curves fixed, with two new marks $w_0,z_0$ and two new attaching curves $\alpha_0,\beta_0$. They bound surface disks $A_0,B_0$, meet transversely in two points, and miss all old curves of either system. Their intersection is a bigon containing exactly $w_0$; $A_0\setminus B_0$ contains exactly $z_0$, and $B_0\setminus A_0$ contains exactly the chosen old $z$ point. The genus $h$ is unchanged, while $k$ and $m=h+k-1$ both increase by one. The new compression disks cut each handlebody into $k+1$ balls, with one trivial arc per ball and simultaneous disjoint boundary-parallelism disks. The represented oriented knot is ambient isotopic to the old knot.

More precisely, if the old cyclic pairing included $w_i\to z_i$ on the $\alpha$ side and $z_i\to w_{i-1}$ on the $\beta$ side, the insertion at $z_i$ replaces only the latter part of the oriented traversal by
$$z_i\longrightarrow w_0\longrightarrow z_0\longrightarrow w_{i-1},$$
with sides $\beta,\alpha,\beta$, respectively. Thus the new pair is inserted along the existing knot. Removing the two curves and the two new marks from this configuration and undoing the indicated local detour is its inverse, fixing every surviving mark. The same conclusion holds for any configuration explicitly identified with this local model by an orientation-preserving diagram isomorphism carrying its disk and trivial-arc data. This lemma does not assert that every relative Morse birth is of this form.

## Statement references

[[def-admissible-pointed-heegaard-floer-data]]

## Facts & Assumptions

**Given:** A balanced diagram, actual disjoint compression and bridge disks, and the chosen old $z_i$.

[F1] [[def-admissible-pointed-heegaard-floer-data]] specifies the cyclic arc orientation and the disk/ball/bridge conditions.

[F2] Product collars and supported extensions of compact embedding isotopies, including boundary-valued ones, are available under Countable Choice ([[thm-collar-neighborhood-theorem]], [[thm-isotopy-extension]]).

[F3] Smooth planar disk boundary maps, prescribed collar maps and interior orientation-preserving germs extend over a disk under Countable Choice ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]]).

[F5] Neat proper disk isotopies, with interior in the manifold interior and boundary in its boundary, extend to boundary-preserving ambient isotopies with prescribed support ([[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]]). Before applying the smooth-boundary extension theorem to a cut manifold, round its finitely many disk-face corners in small product collars, away from marks and actual arcs, transporting the band and face coordinates through this rounding. The local rounding is a monotone smoothing of the quadrant corner in its two normal coordinates and is the identity outside those collars. All proper compression-disk isotopies below are chosen product-neat in the resulting boundary collars. For a bridge-boundary path change, first extend its isotopy on the boundary surface and then through a thin product collar; it is stationary near its marked endpoints, so that collar support can miss the actual knot arcs.

[F6] [[lem-smooth-bridge-witnesses-admit-neat-corner-parametrizations-after-normalization]] supplies the explicit knot normalization inside the fixed splitting, with marks and side membership retained, starting from the smooth embedded bridge witnesses of [F1]. It permits ordinary smooth boundary and collinear endpoint tangents, changes auxiliary boundary arcs where necessary, and produces simultaneous neat corner-parametrized witnesses. The ambient knot-isotopy extension is not asserted to preserve the splitting surface.

[F7] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] supplies the local smooth inverse of the normal coordinate restricted to a transverse knot interval.

[F8] [[lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system]] replaces simultaneous smooth bridge witnesses by witnesses disjoint from all compression disks, keeping their entire boundary curves and smaller boundary collars fixed. It accepts ordinary smooth or corner witnesses and broad proper compression disks. Its boundary-disjointness premise follows here from [F1]: actual knot arcs avoid the compression disks, and each bottom boundary arc lies in the attaching-system complement. It does not assume witness interiors were already disjoint.

## Proof

1.1 Choose a small surface disk about $z_i$ meeting no other mark or attaching curve. The witnesses in [F1] are in the standing smooth embedded-disk category, including ordinary smooth boundary at a tangential mark. First apply [F8] separately on both sides of the splitting, keeping every actual arc, bottom boundary interval and full witness boundary fixed. The resulting simultaneous witnesses miss the compression disks in their interiors as well as on their boundaries. Choose their finitely many parametrizations and then apply [F6], supported near this mark and away from the compression disks; its whole-witness disjointness premise is now satisfied. This is an allowed arc normalization in the FIXED splitting: it retains the old surface, all old curves and marks, the side assignments and simultaneous witnesses, and preserves the oriented knot type by an actual ambient knot isotopy. Its new knot is smooth and transverse at the mark. Choose a smaller coordinate ball meeting only that knot interval. Write the surface as $v=0$, with $U_\alpha$ on $v\ge0$ and $U_\beta$ on $v\le0$. Transversality gives its tangential coordinates as smooth functions of $v$ by the local inverse theorem. Subtract those functions from the two tangential coordinates, and then add $-v/c$ to the first one for a fixed $c>0$. This is an invertible triangular coordinate change preserving the surface, and makes the ONE smooth oriented knot have $y=0$, $v=-cx$, traversed with increasing $x$. A sign change of the remaining tangential coordinate fixes the ambient orientation if necessary. The old $z_i$ is the origin. Thus the two halves match because they are restrictions of the actual normalized smooth knot, not merely because their endpoints agree. The normalization and these coordinate choices can be confined to the chosen mark neighborhood, leaving every other datum fixed. [F1, F2, F5, F6, F7, F8, given, construct]

2.1 Choose $\epsilon>0$ much smaller than the model ball. Replace the height on the interval containing $0,\epsilon,2\epsilon$ by $v=-a x(x-\epsilon)(x-2\epsilon)$, $a>0$. Join it smoothly to the old negative-slope height outside a slightly larger interval. On the left of zero both heights are positive, and on the right of $2\epsilon$ both are negative, so a nonnegative cutoff interpolation creates no additional zero there. The new planar arc still has strictly increasing $x$, hence is embedded. A linear interpolation of its height with the old height is an isotopy of embedded arcs, fixed near the model-ball boundary; [F2] extends it to an ambient isotopy of the knot. Mark $w_0$ at $x=\epsilon$ and $z_0$ at $x=2\epsilon$ on the surface. The three consecutive crossings have sides $\alpha\to\beta$, $\beta\to\alpha$, $\alpha\to\beta$, giving exactly the oriented sequence in the Statement. [F5, F1, F2, step 1.1, construct]

3.1 In the $(x,y)$ surface plane take disks with centers $(3\epsilon/2,0)$ and $(\epsilon/2,0)$ and radius $4\epsilon/5$, naming them $A_0$ and $B_0$. Their boundaries meet transversely in two points. The lens $A_0\cap B_0$ contains $(\epsilon,0)$ and neither $(0,0)$ nor $(2\epsilon,0)$; $A_0\setminus B_0$ contains $(2\epsilon,0)$, and $B_0\setminus A_0$ contains $(0,0)$. No other mark or old curve lies in their union. Each lens or crescent is a disk, so the common lens is the required bigon. The boundaries are the desired $\alpha_0,\beta_0$. Their disks and collars can be transported by [F3] to the original surface coordinates. [F3, step 1.1, step 2.1, construct]

4.1 Push the interior of $A_0$ slightly into $U_\alpha$ to a compression disk which lies above the new arc from $w_0$ to $z_0$. This can be done with a cap $v=b(x,y)>0$ in the disk interior and zero on its boundary: the arc projection is the compact segment $[\epsilon,2\epsilon]\times\{0\}$ strictly inside $A_0$, so choose a positive bump cap and then choose $a$ in step2.1 sufficiently small that the arc height is below the cap. Similarly push $B_0$ downward to a cap enclosing the new $\beta$ arc from $z_i$ to $w_0$. The segment projections lie strictly inside their corresponding disks. The remaining local pieces of the old $\alpha$ arc have $x<0$ and miss $A_0$, while the remaining $\beta$ piece has $x>2\epsilon$ and misses $B_0$. Each cap therefore cuts off a boundary-parallel ball with exactly its designated new trivial arc. All old compression disks are disjoint from the model ball. In the original cut ball, deleting this boundary cap leaves a ball: its collar graph can be flattened to the original boundary by a compactly supported normal displacement with positive normal derivative, chosen small in its collar coordinates. Thus each system now cuts into one additional ball, without changing any other ball. [F1, F2, step 2.1, step 3.1, construct]

5.1 The short arcs inside the two new cap balls have explicit bridge disks in the plane $y=0$, between their height graphs and the intervals on $v=0$. For the old $\beta$ arc, its residual piece now starts at $z_0$ and joins its unchanged exterior piece. In the old bridge disk, remove the end strip which entered the new cap ball and replace its remaining initial strip by the corresponding graph strip beginning at $z_0$; this is an embedded strip on the exterior side of the cap, glued with matching product collars. It is disjoint from the bridge disk of the short new arc, because they lie on opposite sides of the cap. Modify the terminal strip of the old $\alpha$ bridge disk to bound the new height graph on $x\le0$ and its surface interval; it stays outside $A_0$. The short new $\alpha$ bridge disk lies inside the new cap. Every other bridge disk was outside the model ball. These constructions give disjoint simultaneous bridge disks on each side. The two new surface complementary components are precisely the interiors of $A_0,B_0$; the old $\alpha$ component retains its old $w_i,z_i$, while the old $\beta$ component loses $z_i$ to $B_0$ and receives $z_0$, retaining its old $w_{i-1}$. Hence every component has one mark of each type, with the displayed cyclic pairing after insertion of the new pair in the ordering. The number of curves and of pairs both increased by one, so $m+1=h+(k+1)-1$. Reversing the cap and graph-strip constructions removes exactly the new marks and curves, concatenates the three oriented pieces, and fixes all old marks. Supported isotopy from step2.1 proves knot preservation in both directions. Transport by a specified diagram isomorphism preserves every property just checked. Countable Choice is used only through [F2]–[F3]. [F5, F1, F2, F3, step 2.1, step 3.1, step 4.1, construct] ∎
