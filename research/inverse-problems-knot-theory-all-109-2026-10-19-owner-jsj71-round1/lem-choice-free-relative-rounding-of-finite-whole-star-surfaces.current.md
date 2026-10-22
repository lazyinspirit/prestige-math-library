---
id: lem-choice-free-relative-rounding-of-finite-whole-star-surfaces
kind: lemma
title: "Choice-free relative rounding of finite whole-star surfaces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation
  - lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. Whole-star stability and secant extension have finite choice-free proofs; vertex links are parametrized using the new choice-free planar Jordan proof after stereographic projection. All local replacements form finite collections."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "Sections8–9 via the fully read local whole-star stability and secant suppliers. All eight surface-rounding steps are supplied here. This reference is not a claim of new primary-text reading."
---

## Statement

Let a compact embedded surface in a smooth three-manifold have a supplied finite whole-star piecewise smooth triangulation: its simplex maps extend smoothly, and their differential fan is injective on the entire tangent star at every point. Suppose its boundary has an already smooth embedded collar in the surface. Then the surface can be replaced, in any prescribed neighborhood and fixed on a smaller boundary collar, by a smooth embedded surface homeomorphic to it relative to that collar. The replacement can also be fixed on any specified compact subset on a neighborhood of which the surface is already smooth. In particular an embedded disk with such data and smooth boundary collar has a smooth embedded disk replacement with exactly the same boundary.

A finite PL surface in the compatible PL structure of a supplied whole-star smooth triangulation of the ambient manifold has the required piecewise smooth data after common subdivision. This clause concerns compatibility with the specified smooth triangulation; it does not assert compatibility of an arbitrary topological marking.

## Statement references

[[def-relative-smooth-triangulation-and-projection-preserving-fitting]] — the whole-star and compatibility conventions.

[[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]] — finite strong-approximation stability.

[[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]] — the choice-free disk parameter after stereographic projection.

## Facts & Assumptions

**Given:** The finite surface map, a neighborhood in which the replacement is required to lie, and the protected smooth collars and compact subsets.

[F1] Whole-star piecewise smooth embeddings have a positive finite strong-approximation tolerance, including after subdivision. Small corrections on a subcomplex have supported extensions with controlled strong error. ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], [[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]])

[F2] A smooth simple circle $\gamma$ on $S^2$ has a smoothly parametrized disk side without choice. Choose a point off it: a regular graph chart at one circle point has a small transverse displacement off the graph, and compact separation excludes the other circle portions. Stereographic projection from that point gives a compact smooth planar circle. Its bounded disk has a smooth parameter with prescribed collars by [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Statement. Transfer that compact disk back to $S^2$. All these choices are finite.

## Proof

1.1 First restrict the nonsmooth locus to the complement of a protected open neighborhood of the given compact smooth set and a smaller boundary collar. To make the protected region finite, pull it back to the finite geometric source complex and take sufficiently small uniform subdivisions. The compact protected preimage has positive distance from the complement of its smooth neighborhood. A finite union of closed stars containing that preimage, with one extra star layer, is therefore still in the smooth neighborhood and protects an open neighborhood of the given compact set. Do the same along the smooth boundary collar. This uses only finite subcomplexes, rather than assuming arbitrary smooth chart boundaries have finitely many intersections. Compactness and finiteness give positive separation between disjoint closed simplices away from their common stars, and between a sufficiently small replacement neighborhood and the closed complement of the prescribed neighborhood. Thus it suffices to smooth the finitely many unprotected vertices and edge portions inside these neighborhoods. All other points are already in smooth face interiors. [given, F1, construct]

2.1 At an unprotected vertex use an ambient smooth chart centered at its image and affine coordinates on its finitely many incident triangles centered at the vertex. Write their common map as $f(x)=A(x)+R(x)$, where $A$ is the piecewise linear differential fan. On a sufficiently small star, $|R(x)|=o(|x|)$ and $\|DR(x)\|=o(1)$, uniformly over those triangles. Let $\eta$ be a radial cutoff equal to one on a smaller star and zero outside a slightly larger star of radius $\epsilon$, with derivative bounded by $C/\epsilon$. Replacing $f$ by $f-\eta R$ changes its derivative by $o(1)$, because $|R|\,|D\eta|=o(\epsilon)/\epsilon=o(1)$. Apply [F1] to keep it an embedding. This makes the surface exactly its linear cone near the vertex, with the original map retained outside the larger star. The vertices have disjoint neighborhoods, so these finite replacements do not interfere. The link of the resulting cone on a small round sphere is a simple closed piecewise smooth curve: the surface vertex link is a circle and the differential fan is injective. [F1, step 1.1, construct]

3.1 Smooth an open edge portion away from the vertex centers. Its two incident smooth half-surfaces have distinct tangent half-planes meeting along their common edge. In a small tubular coordinate box their union is a graph $z=h(s,u)$ over a plane, with the edge at $u=0$ and $h$ smooth for each sign of $u$. For unit transverse rays $v_+$ and $v_-$ pointing out from the edge into the two half-surfaces, whole-star injectivity gives $v_+\ne v_-$. The linear functional $\ell(w)=\langle v_+-v_-,w\rangle$ has $\ell(v_+)>0$ and $\ell(v_-)<0$. Projection onto the plane consisting of the edge direction and this signed transverse coordinate therefore gives the required graph, and remains regular on a smaller box by continuity. Replace $h$ near $u=0$ by convolution in $(s,u)$, using a cutoff supported in that box and equal to one near a smaller edge core. The new graph is smooth at its core, remains an embedded graph, and agrees with the old surface outside the box. Where the cutoff changes the old graph is already smooth, so the interpolation is smooth there. Use arbitrarily small value errors and the finite separation margins to prevent collisions with the rest of the surface. Covering each remaining compact edge portion by finitely many such boxes and retaining earlier smooth cores completes the open-edge smoothing. [step 1.1, step 2.1, construct]

4.1 In the linear conical neighborhoods of step 2.1 choose the edge rounding radially: round the finitely many corners of the link curve on the unit sphere in disjoint spherical graph charts, and take rays over this rounded link. A radial cutoff joins this choice to the open-edge graph choices farther out. On the overlap the chosen graph projection is still injective, so graph interpolation joins them without intersections. After this operation the only unsmoothed point in each vertex neighborhood is its center, and on an annulus about that center the surface is $r\gamma(s)$, where $\gamma:S^1\to S^2$ is a smooth embedded circle. These operations are fixed near the protected set. [step 2.1, step 3.1, construct]

5.1 By [F2], $\gamma$ bounds a smoothly parametrized disk region $e:D^2\to S^2$. The circles $s\mapsto e(\rho s)$, with $\rho$ decreasing from $1$ to a small positive number, give a smooth isotopy of embedded circles. In a small chart about $e(0)$, choose a fixed small $r>0$ and use the expression $E(trs)/t$, continued at $t=0$ by $r\,dE_0(s)$; these circles remain inside that chart and are smooth and embedded for sufficiently small $r$: its derivative is uniformly close to the injective linear map, and projection onto its image plane gives injectivity by integration on segments. Deform the final linear ellipse to a round circle by its positive Gram square root, and carry it back through a spherical chart. This gives an isotopy $\gamma_t$ of smooth embedded spherical circles from $\gamma$ to a small latitude circle. Flatten its time parameter near both endpoints. No extension to a diffeomorphism of $S^2$ or of a three-ball is used. [F2, step 4.1, construct]

6.1 In a smaller conical annulus replace $r\gamma(s)$ by $r\gamma_{\tau(r)}(s)$, where $\tau$ goes from zero on its outer collar to one on its inner collar. This is an embedded smooth annulus: different radial levels lie on disjoint round spheres, and at each fixed level the curve is embedded; its radial derivative has nonzero radial component, while its circle derivative is tangent to that sphere. Near the inner collar it is a circular cone. Close that cone by a surface of revolution lying inside the inner sphere: in coordinates around its axis, replace the conical graph $z=a\varrho$ near $\varrho=0$ by $z=a\psi(\varrho)$, where $\psi$ is smooth and even near zero, agrees with $\varrho$ near the outer radius and is positive at zero. Choose its modification supported in a much smaller radius so its graph lies strictly inside the inner sphere; a smooth convex rounding of the graph of $|\varrho|$ has these properties. This gives a smooth disk cap, unchanged on the annular seam. The cap replaces a conical disk by a disk with the same boundary, hence preserves the surface's homeomorphism type relative to everything outside the vertex neighborhood. [step 5.1, construct]

7.1 Apply step 6.1 in each of the disjoint vertex neighborhoods. The result is smooth on the face interiors, the edge cores, the connecting annuli and the caps, with identical maps on open seam collars. It is embedded by the graph, radial-level and separation arguments, and is unchanged on the protected smooth neighborhood. Replacing finitely many disks and edge strips by disks and strips with the same attaching collars gives a homeomorphism from the original surface to the result fixed there. All changes fit inside the prescribed neighborhood by step 1.1. [step 1.1, step 3.1, step 4.1, step 6.1, construct]

8.1 Finally, a surface PL in the specified compatible triangulation becomes a subcomplex after a common finite subdivision. Each restricted ambient simplex map is smooth and its differential fan is injective on the ambient star, hence on the surface's substar. Thus it has exactly the piecewise smooth whole-star data used in steps 1.1–4.1. The argument requires only this supplied compatibility and the finite choice-free vertex-link disk parameters, proving all clauses. [F1, step 7.1, construct] ∎
