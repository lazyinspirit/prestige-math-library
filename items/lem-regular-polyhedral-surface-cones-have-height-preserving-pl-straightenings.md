---
id: lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings
kind: lemma
title: "Regular polyhedral surface cones have height-preserving piecewise linear straightenings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
generation:
  role: reviewed-local-lemma
local_proof_acceptance:
  run: inverse-problems-knot-theory-all-109-2026-10-19
  authorized_by: /root
  decision: preserve-resolved-local-lemma
  independent_review: research/inverse-problems-knot-theory-all-109-2026-10-19-owner-moise-first17-independent-review-cycle1.json
  accepted_body_sha256: 6587123a6270207a1b956ce643a7100388a9cd64b35420f9cae680fc4e2134ff
dependency_level: 0
---

## Statement

In this statement, finite PL means affine on finitely many convex polyhedral pieces, which may be unbounded; on every bounded subpolyhedron compatible finite simplicial subdivisions give the usual PL interpretation. Let $S\subset\mathbb R^2\times\mathbb R$ be a finite polyhedral cone with vertex $0$ whose intersection with a small centered polyhedral sphere is a simple polygonal circle. Write $z$ for the last coordinate. Suppose this circle meets $z=0$ in exactly two points, each a crossing from $z>0$ to $z<0$, and neither lies on a segment contained in $z=0$. Equivalently, the positive and negative parts of the circle are each one open arc and its zero set is their two endpoints. Then there is a finite piecewise linear homeomorphism $H:\mathbb R^3\to\mathbb R^3$, with piecewise linear inverse, such that
$$z(H(x,y,z))=z,\qquad H(S)=\{(x,0,z):x,z\in\mathbb R\}.$$
It fixes the origin. Its restriction to $z=0$ is a homogeneous PL plane homeomorphism sending the two rays of $S\cap\{z=0\}$ to the two rays of the $x$-axis.

Consequently a polyhedral surface in linear three-space at a vertex having this regular height-link condition has a local PL straightening preserving its affine height. This is a local regular-vertex result, not a straightening of arbitrary PL two-spheres. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The finite polyhedral cone and its stated height-link condition.

[F1] Simple polygons bound polygonal disks, and prescribed PL boundary maps between those disks extend to PL homeomorphisms ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Finite convex polyhedral cell complexes admit compatible triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The stated cone and coordinates.

1.1 Its intersection with $z=0$ consists of two distinct rays. Choose a homogeneous PL homeomorphism $g:\mathbb R^2\to\mathbb R^2$ taking them to the positive and negative $x$-axis. Explicitly, insert finitely many further rays to divide both plane sectors between the two marked rays into sectors of angle less than $\pi$, do the same for the two target half-planes with corresponding numbers of sectors, and match their cyclically ordered ray generators. Extend linearly on each sector. Each sector map is a linear bijection onto its corresponding convex sector; these maps and their linear inverses agree on rays and paste to inverse PL homeomorphisms. Extend to three-space by $G(u,z)=(g(u),z)$. Replace $S$ temporarily by $G(S)$. Both its horizontal zero rays are now the $x$-axis rays, and $G$ preserves height. [given, F2, construct]

2.1 The sections $L_+=S\cap\{z=1\}$ and $L_-=\{u:(u,-1)\in S\}$ are each simple proper polygonal lines with finitely many bends and exactly two unbounded rays, one tending to each end of the $x$-direction. To see this, radial projection from each open link arc to its level $z=1$ or $z=-1$ is a homeomorphism. A cone triangle meets that level in a segment, ray or empty set; the finitely many triangles therefore give a polygonal line. Near either endpoint of the link arc its last linear cone sector meets the level in a ray parallel to the corresponding horizontal zero ray. These are its only ends; the projection is proper because any compact part of the level has directions bounded away from $z=0$. The same statements remain valid after step 1.1: a ray eventually lies in one sector of the finite homogeneous fan, and its image is a ray parallel to the image of its limiting direction. Thus both lines have horizontal terminal rays directed to opposite ends. [step 1.1, construct]

3.1 We give an explicit finite PL plane homeomorphism $f$ straightening any such line $L$, with bounded displacement. Take a rectangle $R=[-r,r]\times[-h,h]$ whose interior contains all bends of $L$ and whose two vertical sides meet its horizontal terminal rays once each; enlarge $r,h$ so all finite segments lie in its interior and these are the only boundary intersections. The arc $L\cap R$ divides $R$ into two polygonal disks. Indeed each union of that arc with one of the two boundary arcs between its endpoints is a simple polygon. By the planar separation and disk assertion of [F1], their bounded disks occupy precisely the two sides inside $R$: near the top and bottom edges they occupy the respective sides, their interiors are disjoint by crossing parity, and every point of $R\setminus L$ connects within its polygonal component to one of those sides. Choose on $\partial R$ an order-preserving PL map fixing both horizontal sides and all corners and taking the two line endpoints to $(-r,0)$ and $(r,0)$. Choose any order-preserving PL parameter of the finite line arc onto the horizontal diameter. On each of the two disks these prescriptions form a boundary homeomorphism onto the corresponding upper or lower half-rectangle. Extend them by [F1]. Their maps agree on the line arc, so they give a PL homeomorphism $f_R:R\to R$ taking that arc to the diameter. [F1, F2, step 2.1, construct]

4.1 Write the two vertical boundary maps of $f_R$ as $(-r,y)\mapsto(-r,\gamma_-(y))$ and $(r,y)\mapsto(r,\gamma_+(y))$. Both $\gamma_\pm$ are increasing PL homeomorphisms of $[-h,h]$, fix its endpoints, and send the respective terminal-ray height to zero. Outside $R$ extend $f_R$ on the two half-strips by $f(x,y)=(x,\gamma_+(y))$ for $x\ge r$ and $|y|\le h$, and by the corresponding formula with $\gamma_-$ for $x\le-r$. Use the identity for $|y|\ge h$. These formulas agree along every seam. Their inverses have the same form with $\gamma_\pm^{-1}$, so the extension is a PL plane homeomorphism. Its cells consist of finitely many bounded triangles, half-strips and exterior half-planes, all with compatible finite polyhedral subdivisions; their intersections with a bounded box admit finite simplicial subdivisions by [F2]. It sends the entire $L$ to the $x$-axis. Moreover $f(u)-u$ is bounded: on $R$ this follows from compactness, on the half-strips only the second coordinate changes by at most $2h$, and elsewhere it is zero. Its inverse also has bounded displacement, since $f^{-1}(v)-v=u-f(u)$ for $v=f(u)$. Apply this construction independently to $L_+$ and $L_-$, producing $f_+$ and $f_-$. [F2, step 3.1, construct]

5.1 For $z>0$ set $T(u,z)=(z f_+(u/z),z)$. For $z<0$ put $s=-z>0$ and set $T(u,z)=(s f_-(u/s),z)$. Set $T(u,0)=(u,0)$. These formulas define a finite PL homeomorphism. To check the PL assertion, on a plane cell where $f_\pm(v)=Av+b$ its homogenization is $(u,z)\mapsto(Au+zb,z)$ above zero, or $(u,z)\mapsto(Au-zb,z)$ below zero. The homogenized cells are polyhedral cones: an inequality $av\le c$ becomes $au\le cz$ above zero or $au\le-cz$ below zero. There are finitely many such cones. Their intersections with each bounded cube have compatible finite simplicial subdivisions by [F2]; subdividing successive integer cube shells compatibly, always coning from the barycenter of the vertices of each clipped cell, gives the usual locally finite PL interpretation without any countable choice of centers. Bounded displacement implies that their linear formulas match the identity on the zero plane: $\|z f_+(u/z)-u\|\le M_+z$ and $\|s f_-(u/s)-u\|\le M_-s$. Hence the formulas extend continuously and agree there. Homogenizing the inverse maps in the same way supplies an inverse with identical continuity and PL properties. In particular $T$ preserves height and fixes the zero plane pointwise. [F2, step 4.1, construct]

6.1 Every positive-height point of the cone $S$ is uniquely $(zv,z)$ with $v\in L_+$, and every negative-height point is uniquely $(sv,-s)$ with $v\in L_-$. By step 4.1 their images under $T$ are exactly the positive and negative parts of the vertical plane $y=0$. Its zero-height part is already the full $x$-axis. Therefore $H=T\circ G$, with $G$ from step 1.1 and $T$ applied to the transformed cone, has all the stated properties. For the local consequence take a sufficiently small star at the surface vertex: its finitely many incident triangles agree there with their full cones. Restrict $H$ to a smaller neighborhood of the origin; it gives the required height-preserving local straightening. All fans, polygonal disk extensions, rectangles and affine cells used finite data, so no countable or arbitrary-index choice is needed. [given, step 1.1, step 5.1, construct] ∎
