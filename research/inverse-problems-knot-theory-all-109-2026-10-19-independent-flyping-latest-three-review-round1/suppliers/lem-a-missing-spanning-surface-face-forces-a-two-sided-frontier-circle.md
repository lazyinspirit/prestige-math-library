---
id: lem-a-missing-spanning-surface-face-forces-a-two-sided-frontier-circle
kind: lemma
title: "A missing spanning-surface face forces a two-sided frontier circle"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-parametric-transversality
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from relative finite-dimensional transversality for the path-position arguments. All normal tubes, face counts, path crossings and sector comparisons are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Theorem 11 Proof I, printed p.66"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume countable choice. Let $F_0,F_1\subset S^3$ be connected compact smooth spanning surfaces for the same nonempty link $L$. Suppose their interiors are transverse, their interior intersection $\Gamma$ is a finite disjoint union of embedded circles, and their interior boundary collars are disjoint in a neighborhood of $L$. A regular face is a connected component of $(\operatorname{int}F_i)\setminus\Gamma$. A complement region $R$ is a component of $S^3\setminus(F_0\cup F_1)$; it is incident to a regular face if its closure contains a point of that face.

Each individual complement $S^3\setminus F_i$ is path-connected. There are finitely many regular faces and complement regions, and each region is incident to a face of each surface. If a region $R$ is not incident to every regular face of both surfaces, then some circle $\gamma\subset\Gamma$ is two-sided in both surfaces and has this property: in a small normal disk at any point of $\gamma$, the sectors belonging to $R$ are exactly one of the four sectors cut by the two transverse surfaces, or exactly two adjacent sectors. In particular they are not two opposite sectors.

More generally, transporting the four sectors once around any common circle either fixes all sectors or exchanges each with its opposite. In the second case the circle is one-sided in both surfaces, and the sector set of any incident region is either an opposite pair or all four sectors.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice and the two connected compact smooth surfaces, their common nonempty boundary, the finite transverse interior circle family and the separated boundary collars.

[F1] For a finite-dimensional smooth family transverse to a target submanifold, parameters with nontransverse slices form a null set under countable choice. A finite union of such null sets does not fill a parameter ball. ([[thm-parametric-transversality]])

[F2] The inverse function theorem gives local normal coordinate inverses; its derivative formula upgrades them to smooth inverses for smooth maps. ([[thm-euclidean-inverse-function-theorem]])

## Proof


1.1 Let $F$ be either surface. Any two points outside $F$ can first be joined by a smooth path in $S^3$ with endpoint collars outside $F$: use two round geodesic segments if one segment is antipodal, and round their junction. A finite chart family perturbing only the interior of this path has parameter derivatives spanning the ambient tangent directions wherever an intersection is possible. By [F1] make it transverse to $\operatorname{int}F$ and to $\partial F$ simultaneously, retaining its endpoint collars. Transversality to the one-dimensional boundary makes the latter preimage empty, and transversality to the interior gives finitely many crossings, by compactness and the now positive separation from $\partial F$. Remove each crossing separately as follows. Join its point on $F$ to $\partial F$ by a compact embedded surface arc with interior in $\operatorname{int}F$, using connectedness and shortening a finite chart path to remove its loops. The normal interval bundle along this arc is a product, with a sufficiently small embedded tube by [F2] and compactness. Detour from the positive endpoint of the short crossing segment along one normal push of that arc, pass around its boundary endpoint in the local half-plane chart of $F$, and return along its other normal push to the negative endpoint. This detour misses the whole surface. It may intersect the rest of the path, which is harmless for path-connectedness, and it introduces no surface crossing. Finitely many replacements give a path in $S^3\setminus F$ with the original endpoints. [given, F1, F2, construct]

1.2 The interior of a connected surface with boundary is connected: a path on the surface can be pushed off its boundary using finitely many half-disk collar charts. Cutting a connected surface along one embedded interior circle gives at most two complementary components. Indeed its small regular neighborhood has one or two connected sides after removing the central circle, and every complementary component meets one of those sides; otherwise it would be open and closed in the original connected surface. Applying this successively to the finite disjoint family $\Gamma$ proves that each surface has finitely many regular faces. On a connected regular face there are at most two incident complement regions. Choose one base point of the face and its two local normal sides. A path within the face transports any incident local side to one of those two base sides, through finitely many normal coordinate charts avoiding the other surface. Each transported side remains in the same complement region. Thus every incident region is one of the at most two determined at the base point, even if going around a loop exchanges those sides. [given, F2, construct]

1.3 Along a common circle orient its tangent and its normal plane using the ambient orientation. The two tangent lines to the surfaces in that plane are distinct. Follow a unit vector on the first line around a cut parameter interval for the circle, and choose the vector on the second line by the unique positive angle in $(0,\pi)$. At the final endpoint both vectors return with the same sign: the angle difference is periodic and neither line becomes equal to the other. The sign is positive precisely when both lines have trivial monodromy, and negative precisely when both have Möbius monodromy. Thus the four sector labels return either unchanged or rotated by two positions. Membership in one complement region is constant along each transported sector. It follows that in the negative case the region's sector subset is invariant under opposite exchange and therefore is empty, an opposite pair or all four. This proves the general monodromy assertion and includes circles one-sided on both surfaces. [given, F2, construct]

2.1 Every complement region has a frontier point on $F_0\cup F_1$: otherwise it would be open and closed in connected $S^3$ and equal to all of it. At a regular face this gives incidence immediately. At a common interior circle the transverse normal chart has four sectors, and each sector has boundary portions on regular faces of both surfaces. At a point of $L$ the two distinct collar rays bound two normal sectors, again with boundary on both surfaces. If their inward directions agree at the boundary, use a chart at a nearby positive collar radius, where the given disjoint interior collars still bound a narrow gap and its other side; approaching that gap likewise meets regular faces. Hence every region is incident to a regular face somewhere. The finite face count and step 1.2 now imply finitely many regions. If a region were incident to no face of $F_1$, these same local charts would prevent its closure from meeting any point of $F_1$, including its common circles and boundary. Its frontier would lie in $F_0\setminus F_1$, making it open and closed in $S^3\setminus F_0$. Step 1.1 would force it to equal that whole connected complement, which contains points of $F_1\setminus F_0$, a contradiction. Thus it is incident to a face of $F_1$, and the interchanged argument proves incidence to $F_0$. [given, step 1.1, step 1.2, F2, construct, contradiction]

3.1 Suppose $R$ misses some regular face. By step 2.1 it is incident to a face of that same surface, so choose an interior surface path from an incident face to a missing one. Use [F1] in finitely many intrinsic surface charts to make that path transverse to $\Gamma$, avoiding its endpoints; it has finitely many crossings. Take the first circle crossing where the incidence changes. In a normal disk there, label the rays of $F_0,F_1$ cyclically $r_0,r_1,r_2,r_3$ and the sector between $r_j,r_{j+1}$ by $q_j$, with indices modulo four. A ray is incident to $R$ exactly when at least one of its two neighboring sectors belongs to $R$. The empty sector set makes all rays nonincident. An opposite pair, any three sectors and all four sectors make all rays incident. The remaining nonempty subsets are one sector and two adjacent sectors. Thus a change of incidence across one surface line can occur only in one of those two remaining cases. The transported sector set has the same type all along the circle. Neither type is invariant under opposite exchange, so step 1.3 implies that this circle is two-sided in both surfaces. This supplies the circle and exact sector alternatives in the Statement. All arguments were finite after the stated path transversality choices. [step 1.2, step 2.1, step 1.3, F1, construct] ∎
