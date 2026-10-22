---
id: lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings
kind: lemma
title: "Relative smoothing of finite compatible PL surfaces in dimension three"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation
  - lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§§8–9, whole-star embeddings and relative strong approximation; the dimension-three edge and vertex rounding argument is supplied locally."
---

## Statement

Assume countable choice. Let a compact embedded surface in a smooth three-manifold have a supplied finite whole-star piecewise smooth triangulation: its simplex maps extend smoothly, and their differential fan is injective on the entire tangent star at every point. Suppose its boundary has an already smooth embedded collar in the surface. Then the surface can be replaced, in any prescribed neighborhood and fixed on a smaller boundary collar, by a smooth embedded surface homeomorphic to it relative to that collar. The replacement can also be fixed on any specified compact subset on a neighborhood of which the surface is already smooth. In particular an embedded disk with such data and smooth boundary collar has a smooth embedded disk replacement with exactly the same boundary.

A finite PL surface in the compatible PL structure of a supplied whole-star smooth triangulation of the ambient manifold has the required piecewise smooth data after common subdivision. This clause concerns compatibility with the specified smooth triangulation; it does not assert compatibility of an arbitrary topological marking.

## Statement references

[[def-relative-smooth-triangulation-and-projection-preserving-fitting]] — the whole-star and compatibility conventions.

[[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]] — finite strong-approximation stability.

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]] — disk regions bounded by smooth simple circles on the two-sphere.

[[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]] — smooth parametrizations of those disk regions.

## Facts & Assumptions

**Given:** Countable choice, the finite surface map, a neighborhood in which the replacement is required to lie, and the protected smooth collars and compact subsets.

[F1] Whole-star piecewise smooth embeddings have a positive finite strong-approximation tolerance, including after subdivision. Small corrections on a subcomplex have supported extensions with controlled strong error. ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], [[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]])

[F2] Under countable choice, a smooth simple circle on $S^2$ bounds an embedded disk region and that region has a smooth disk parametrization. For smooth inputs the disk-parametrization construction in that supplier uses smooth handle and collar maps throughout, so its parametrization is smooth. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]])

[A1] Countable choice is used only through [F2]; all stars, radii, cutoffs and local replacements chosen below form finite collections. ([[def-countable-choice]])

## Proof

1.1 First restrict the nonsmooth locus to the complement of a protected open neighborhood of the given compact smooth set and a smaller boundary collar. Subdivide along the boundaries of finitely many smaller coordinate neighborhoods as necessary. Compactness and finiteness give positive separation between disjoint closed simplices away from their common stars, and between a sufficiently small replacement neighborhood and the closed complement of the prescribed neighborhood. Thus it suffices to smooth the finitely many unprotected vertices and edge portions inside these neighborhoods. All other points are already in smooth face interiors. [given, F1, construct]

2.1 At an unprotected vertex use an ambient smooth chart centered at its image and affine coordinates on its finitely many incident triangles centered at the vertex. Write their common map as $f(x)=A(x)+R(x)$, where $A$ is the piecewise linear differential fan. On a sufficiently small star, $|R(x)|=o(|x|)$ and $\|DR(x)\|=o(1)$, uniformly over those triangles. Let $\eta$ be a radial cutoff equal to one on a smaller star and zero outside a slightly larger star of radius $\epsilon$, with derivative bounded by $C/\epsilon$. Replacing $f$ by $f-\eta R$ changes its derivative by $o(1)$, because $|R|\,|D\eta|=o(\epsilon)/\epsilon=o(1)$. Apply [F1] to keep it an embedding. This makes the surface exactly its linear cone near the vertex, with the original map retained outside the larger star. The vertices have disjoint neighborhoods, so these finite replacements do not interfere. The link of the resulting cone on a small round sphere is a simple closed piecewise smooth curve: the surface vertex link is a circle and the differential fan is injective. [F1, step 1.1, construct]

3.1 Smooth an open edge portion away from the vertex centers. Its two incident smooth half-surfaces have distinct tangent half-planes meeting along their common edge. In a small tubular coordinate box their union is a graph $z=h(s,u)$ over a plane, with the edge at $u=0$ and $h$ smooth for each sign of $u$. For unit transverse rays $v_+$ and $v_-$ pointing out from the edge into the two half-surfaces, whole-star injectivity gives $v_+\ne v_-$. The linear functional $\ell(w)=\langle v_+-v_-,w\rangle$ has $\ell(v_+)>0$ and $\ell(v_-)<0$. Projection onto the plane consisting of the edge direction and this signed transverse coordinate therefore gives the required graph, and remains regular on a smaller box by continuity. Replace $h$ near $u=0$ by convolution in $(s,u)$, using a cutoff supported in that box and equal to one near a smaller edge core. The new graph is smooth at its core, remains an embedded graph, and agrees with the old surface outside the box. Where the cutoff changes the old graph is already smooth, so the interpolation is smooth there. Use arbitrarily small value errors and the finite separation margins to prevent collisions with the rest of the surface. Covering each remaining compact edge portion by finitely many such boxes and retaining earlier smooth cores completes the open-edge smoothing. [step 1.1, step 2.1, construct]

4.1 In the linear conical neighborhoods of step 2.1 choose the edge rounding radially: round the finitely many corners of the link curve on the unit sphere in disjoint spherical graph charts, and take rays over this rounded link. A radial cutoff joins this choice to the open-edge graph choices farther out. On the overlap the chosen graph projection is still injective, so graph interpolation joins them without intersections. After this operation the only unsmoothed point in each vertex neighborhood is its center, and on an annulus about that center the surface is $r\gamma(s)$, where $\gamma:S^1\to S^2$ is a smooth embedded circle. These operations are fixed near the protected set. [step 2.1, step 3.1, construct]

5.1 By [F2], $\gamma$ bounds a smoothly parametrized disk region $e:D^2\to S^2$. The circles $s\mapsto e(\rho s)$, with $\rho$ decreasing from $1$ to a small positive number, give a smooth isotopy of embedded circles. In a small chart about $e(0)$, choose a fixed small $r>0$ and use the expression $E(trs)/t$, continued at $t=0$ by $r\,dE_0(s)$; these circles remain inside that chart and are smooth and embedded for sufficiently small $r$: its derivative is uniformly close to the injective linear map, and projection onto its image plane gives injectivity by integration on segments. Deform the final linear ellipse to a round circle by its positive Gram square root, and carry it back through a spherical chart. This gives an isotopy $\gamma_t$ of smooth embedded spherical circles from $\gamma$ to a small latitude circle. Flatten its time parameter near both endpoints. No extension to a diffeomorphism of $S^2$ or of a three-ball is used. [F2, step 4.1, construct]

6.1 In a smaller conical annulus replace $r\gamma(s)$ by $r\gamma_{\tau(r)}(s)$, where $\tau$ goes from zero on its outer collar to one on its inner collar. This is an embedded smooth annulus: different radial levels lie on disjoint round spheres, and at each fixed level the curve is embedded; its radial derivative has nonzero radial component, while its circle derivative is tangent to that sphere. Near the inner collar it is a circular cone. Close that cone by a surface of revolution lying inside the inner sphere: in coordinates around its axis, replace the conical graph $z=a\varrho$ near $\varrho=0$ by $z=a\psi(\varrho)$, where $\psi$ is smooth and even near zero, agrees with $\varrho$ near the outer radius and is positive at zero. Choose its modification supported in a much smaller radius so its graph lies strictly inside the inner sphere; a smooth convex rounding of the graph of $|\varrho|$ has these properties. This gives a smooth disk cap, unchanged on the annular seam. The cap replaces a conical disk by a disk with the same boundary, hence preserves the surface's homeomorphism type relative to everything outside the vertex neighborhood. [step 5.1, construct]

7.1 Apply step 6.1 in each of the disjoint vertex neighborhoods. The result is smooth on the face interiors, the edge cores, the connecting annuli and the caps, with identical maps on open seam collars. It is embedded by the graph, radial-level and separation arguments, and is unchanged on the protected smooth neighborhood. Replacing finitely many disks and edge strips by disks and strips with the same attaching collars gives a homeomorphism from the original surface to the result fixed there. All changes fit inside the prescribed neighborhood by step 1.1. [A1, step 1.1, step 3.1, step 4.1, step 6.1, construct]

8.1 Finally, a surface PL in the specified compatible triangulation becomes a subcomplex after a common finite subdivision. Each restricted ambient simplex map is smooth and its differential fan is injective on the ambient star, hence on the surface's substar. Thus it has exactly the piecewise smooth whole-star data used in steps 1.1–4.1. The argument requires only this supplied compatibility and the stated countable choice, proving all clauses. [F1, A1, step 7.1, construct] ∎
