---
id: thm-boundary-arc-homotopies-give-finite-pl-surface-products
kind: theorem
title: Boundary arc homotopies give finite PL surface products
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-incompressible-boundary-complements-give-controlled-pl-arc-disks
  - lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk
  - lem-finite-polygonal-disk-and-collar-surgery
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: Lemma5.2 printed73; the prescribed-arc disks, simultaneous disk system and marked ball reconstruction are supplied explicitly
---

## Statement

Let $M$ be a compact connected orientable irreducible PL three-manifold with a supplied finite compatible triangulation. Let $G$ be a connected boundary component, let $F\subset G$ be a connected compact PL subsurface with nonempty boundary, and set $E=\overline{G\setminus F}$. Suppose that $F$ and every component of $E$ induce injective fundamental-group maps into $M$.

Suppose every essential properly embedded polygonal arc $k\subset F$ is homotopic in $M$, with its endpoints fixed, to a path in $E$. Then $M$ is PL homeomorphic to $F\times[0,1]$, with its bottom face equal to the specified $F$ and its remaining boundary equal to $E$. In particular $E$ is connected, and $F$ is boundary-parallel by an actual PL product. Comparison paths need not be simple, and no extra restriction on separating arc or disk classes is imposed.

## Facts & Assumptions

**Given:** The finite oriented irreducible PL manifold, its boundary decomposition and arc homotopies.

[F1] An essential polygonal arc in $F$, homotopic with endpoints fixed into a $\pi_1$-injective boundary complement, is the exact $F$-trace of a proper embedded PL disk. This theorem needs no irreducibility premise and permits a singular comparison path. [[lem-incompressible-boundary-complements-give-controlled-pl-arc-disks]]

[F2] Cutting an irreducible finite oriented PL three-manifold along finitely many disjoint proper $\pi_1$-injective surfaces preserves irreducibility; properly embedded disks are allowed. [[lem-finite-pi1-injective-surface-cuts-preserve-three-manifold-irreducibility]]

[F3] A connected finite PL boundary surface has an embedded finite graph spine with a graph-thickening presentation. Nullhomotopic simple interior circles bound PL disks; every boundary circle of a compact connected oriented surface other than a disk is infinite order. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]] Polygonal disk boundary maps extend over disks, finite arcs have strip neighborhoods and the two disk double-arc resolutions join respectively the two outer pieces and all three cut pieces, retaining each chosen piece at most once. [[lem-finite-polygonal-disk-and-collar-surgery]], [[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]

[F4] Compact PL boundaries have PL collars. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

## Proof

1.1 First suppose $F$ is not a disk. Take the finite graph thickening of [F3], choose a spanning tree in its spine and take co-core arcs across the bands of all edges outside that tree. They are disjoint properly embedded polygonal arcs $k_1,\ldots,k_r$, and cutting $F$ at all of them leaves the thickening of the tree, a disk $F_0$. Every such arc is essential already in $F$: its edge lies on a cycle, and cutting its band reduces the first graph rank without splitting off a disk. Equivalently a disk cobounded by it and a boundary arc would make that band a tree finger, contrary to its being an edge outside the spanning tree. Apply [F1] to obtain proper embedded disks $D_j$ with boundaries $k_j\cup l_j$, where each $l_j$ is a simple arc in $E$. Their interiors miss $\partial M$. [F1, F3, given, construct]

2.1 Make the finite disk union PL transverse relative to the disjoint prescribed arcs $k_j$. Its other boundaries may move inside $E$. Finite vertex-star ambient moves in interior balls and boundary half-balls avoid vertices on another sheet and edge-edge intersections, permit transverse edge-face crossings, and give ordinary double curves, isolated triple values and no fourfold values. Every intersection arc has both endpoints in $E$, because the $k_j$ are disjoint. For an intersection circle between two distinct disks, exchange their bounded disk pieces and resolve to adjacent arms in a small product-cross strip. For an intersection arc, each disk has a disk cap cut off away from its specified $k_j$ boundary, since both endpoints lie on its $E$ boundary arc. Exchange these caps and attach each to the other disk remainder. The outputs are disks with their respective entire prescribed $k_j$ unchanged. All joins are finite polygonal disk joins from [F3]. [F3, F4, step 1.1, construct]

3.1 Intermediate disks may have self intersections. A self double circle has two preimage circles bounding disjoint or nested subdisks; exchange the disjoint disk maps or replace the larger nested disk by the smaller and resolve the crossing, as in [F3]. A self double arc has two disjoint proper preimage arcs with endpoints on the $E$ portion of the boundary. Use the double-arc resolution joining all three parameter pieces: its boundary retains each original exposed boundary segment, so in particular it retains the whole $k_j$ exactly once. The local resolution may reverse an $E$ segment but changes nothing on $k_j$. These operations retain or discard old pieces without duplication. They have no new double or triple values in their product strips and use boundary half-plane versions at endpoints. [F3, step 2.1, construct]

4.1 Count triple values $t$ and double-curve components $d$ of the full system. Resolving a whole chosen double component which contains triple points removes those triple points: the two resolved sheets are disjoint there, and a third sheet crosses them in separate double segments. No new triple is created because each old sheet piece is retained once at most. If the component has no triple, take its strip disjoint from all other double curves and nonincident sheet pieces, so exactly that double component disappears and no other one is added. Thus $(t,d)$ strictly decreases lexicographically at each operation. Finite termination gives pairwise disjoint embedded disks with the same respective $k_j$ boundaries; all self intersections have also disappeared. No boundary intersection remains in $E$. [step 2.1, step 3.1, construct]

5.1 Cut $M$ along these disks and call the result $M_0$. It is connected. Indeed cutting $F$ along all the $k_j$ leaves the connected disk $F_0$, so all disk shores adjacent to that disk lie in one component of $M_0$. Every component is reached from that component by crossing some cut disk, because $M$ was connected. Both shores of every cut disk abut the same connected $F_0$, so crossing any such disk stays in that component. Thus there are no others. By [F2], $M_0$ is irreducible. Put $E_0$ equal to the cut copy of $E$ together with both copies of every cut disk, regarded as boundary flaps along their $l_j$ shores; their other shores adjoin $\partial F_0$. Adding such a disk flap along an interval changes no fundamental group. Cutting a surface along disjoint proper arcs also injects each piece's fundamental group into the original: in the finite graph-thickening model this is cutting bands, and reduced paths in the remaining graph cannot acquire a cancellation using a removed band. Consequently every component of $E_0$ is $\pi_1$-injective in $M_0$: a loop nullhomotopic in $M_0$ becomes null in $M$, hence null in $E$ by the given injection, and then null in its cut component; the disk flaps do not affect that conclusion. [F2, F3, step 1.1, step 4.1, given, construct]

6.1 The boundary component of $M_0$ containing $F_0$ is made of that disk and its complementary connected surface $E_0$ with one boundary circle. Other original boundary components are for now left separate. Connectedness of this complement follows directly by removing the interior of one disk from a connected closed surface; any path crossing the removed disk can be replaced by a path along its boundary. The common circle is nullhomotopic in $M_0$ via $F_0$, and hence null in $E_0$ by step 5.1. Its class is trivial only when $E_0$ is a disk, by the boundary-circle assertion in [F3]. Thus this entire boundary component is a sphere. Push it slightly into its boundary collar. Irreducibility makes the pushed sphere bound a PL ball. That ball must be on the side away from the original boundary sphere, because it is contained in the manifold interior and cannot contain any point of that boundary; adjoining the thin collar recovers a ball bounded by the original sphere. Since this ball has no interior frontier in connected $M_0$, it is all of $M_0$. In particular no other boundary component is present. [F2, F3, F4, step 5.1, construct]

7.1 We reconstruct the marked product, rather than concluding it just from the number of disks. Cutting the standard product $F\times[0,1]$ along the rectangles $k_j\times[0,1]$ gives a ball with bottom disk the cut $F_0$. Each rectangle gives two disk windows on its boundary, meeting that bottom disk along the paired $k_j$ shores. In the actual ball $M_0$, the two copies of each $D_j$ are exactly such disk windows in the complementary disk $E_0$, each adjoining $F_0$ along its prescribed shore. Their interiors are disjoint. Removing finitely many such boundary caps from the disk $E_0$ leaves a disk: remove one cap and its attaching interval at a time, and use the finite polygonal disk parametrization in [F3]. This remaining disk is precisely the cut copy of $E$, so it is connected as well. The same finite marked-cap configuration holds in the standard cut product. [F3, step 1.1, step 5.1, step 6.1, construct]

8.1 Map the bottom disk of the actual ball to the standard $F_0$ by its original identification with the cut surface. For each paired disk window choose the map of one copy matching its prescribed $k_j$ shore and any compatible PL parameter on its $l_j$ shore; define the map on its paired copy using the actual and standard disk gluing identifications. These boundary parameters agree because both identifications recover the same original $k_j$ in $F$. Extend across the windows by polygonal disk extension [F3]. The remaining complementary disks now have prescribed PL boundary homeomorphisms; extend across them by [F3]. This gives a homeomorphism of the two boundary spheres, respecting every paired window and the specified bottom $F_0$. Parametrize both PL balls by a standard ball and cone this sphere map after a common finite subdivision; this extends it to a PL ball homeomorphism. Descending under the paired disk identifications gives a PL homeomorphism $M\to F\times[0,1]$, whose bottom restriction is identity and whose other boundary is exactly $E$. [F3, step 7.1, construct]

9.1 If $F$ is a disk, take no cutting arcs or disks. Its boundary circle is nullhomotopic in $M$, so injectivity of $E$ makes it null in the complementary connected surface $E$. That complement is connected because it is the complement of a disk in the connected closed boundary component $G$. The boundary-circle clause of [F3] forces $E$ to be a disk. The argument of step 6.1 makes $M$ a ball, and the disk-marked boundary extension of step 8.1 identifies it with $F\times[0,1]$. This includes the vacuous arc-homotopy case, completing all stated surface types. [F3, F4, step 6.1, step 8.1, given, construct] ∎

## Authoring status

This is an unfrozen proof-development source for the next complete relative marking chain. All simultaneous disk surgeries, preservation of the prescribed arcs and compatibility of the paired-window ball reconstruction require full checking before independent review. It is not a current approved supplier and supplies no full relative marking theorem by itself.
