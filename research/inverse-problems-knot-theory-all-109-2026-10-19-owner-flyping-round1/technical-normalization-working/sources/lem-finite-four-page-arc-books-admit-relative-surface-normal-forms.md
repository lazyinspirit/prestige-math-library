---
id: lem-finite-four-page-arc-books-admit-relative-surface-normal-forms
kind: lemma
title: "Finite four-page arc books admit relative surface normal forms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: all books and boundary collars are supplied; compactness gives finite graph charts and separation bounds. The explicit supported vector fields have finite-box ODE evolutions. No assertion of arbitrary global diagram-book existence is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Definition3.2 and proof of Lemma3.3, PDF pp.19 and41; explicit finite book-coordinate normalization supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

No choice axiom is assumed. Supply finitely many pairwise disjoint smooth coordinate books $P=[-1,1]\times D^2$, with coordinates $(z,x,y)$, axis $v=[-1,1]\times\{(0,0)\}$, pages $W=\{y=0\}$ and $B=\{x=0\}$, and actual product collars on the two end caps $z=\pm1$. On the lateral cylinder designate the two opposite open quadrant strips $xy<0$ as $C_+$ and the two with $xy>0$ as $C_-$. Let a compact smooth embedded surface $F$ meet each book neatly, with boundary there only on its end caps. Assume each book has one of the following two types:

- Its whole axis lies in $F$, and $F$ is transverse to $W$ along that axis, including the supplied neat end charts.
- Its intersection with the axis is a finite set of transverse interior points, with no endpoint intersections.

Then, in arbitrarily small neighborhoods of these axes, there is a supported smooth ambient isotopy preserving $W$ setwise and fixing the axes pointwise, tangent to the end caps and fixed near the lateral book boundaries. For some sufficiently thin inner books, its final surface consists exactly of the following pieces. In the first type it is the single rectangular band $x=k y$, for any prescribed $k>0$. In the second type it is the disjoint union of flat section disks $z=z_j$, at the original axis-intersection heights. There are no additional pieces.

Each section disk meets the lateral $C_+$ strips in two arcs and the lateral $C_-$ strips in two arcs, with four page-seam corners. The common-axis band misses $C_+$ entirely. The union of the two pages cuts each of these surface pieces into disks. The construction concerns actual supplied finite books; it does not assert that unprepared global diagram or link-torus data already have these coordinates.

## Statement references

[[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

## Facts & Assumptions

**Given:** The supplied finite books, product end collars, compact embedded surface and its specified axis-intersection type in every book.

[F1] The smooth inverse function theorem in Euclidean space is choice-free; a nonsingular coordinate minor gives a smooth local graph. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

[F2] A compactly supported smooth time-dependent field on a finite coordinate neighborhood has a smooth evolution for a prescribed compact time interval. The finite-box proof bounds the field and its first derivatives, chooses a common positive local time, and composes the unique local evolutions on a fixed finite subdivision; the maps are diffeomorphisms with reverse-time inverse. This is the actual choice-free construction in Proof4.1 of the compact-source isotopy-extension supplier. ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Proof4.1)

## Proof

1.1 Consider a common-axis book. The surface tangent plane contains the axis direction and is transverse to $W=\{y=0\}$, so the projection of that plane to the $(z,y)$ coordinates has rank two. By [F1], near each axis point $F$ is a graph $x=f(z,y)$ with $f(z,0)=0$. The supplied neat end collars give the same graph on a half-neighborhood at $z=\pm1$ and a small extension across it. Finitely many such charts cover the compact axis. Their graph functions agree on smaller overlaps, since they describe the same local embedded sheet containing the axis. Shrinking uniformly gives a single graph on $[-1,1]\times[-a,a]$. There are no other surface sheets in a sufficiently thin axis neighborhood: after removing smaller source neighborhoods of the axis, the remaining compact source image has a positive separation from it. Also $|f(z,y)|\leq A|y|$ for a finite derivative bound $A$, by the fundamental theorem of calculus. [given, F1, construct]

2.1 Put $f_u(z,y)=(1-u)f(z,y)+u k y$, for $0\leq u\leq1$. On a thin neighborhood of its compact graph track take the time-dependent field $V_u=(k y-f(z,y))\partial_x$, multiplied by a smooth cutoff equal to one on the entire inner graph track and supported in a larger axis neighborhood. The cutoff can be constant through the end caps and extended across their product collars. The field has no $z$ component, so it is tangent to both end caps; it is zero on $W$, because $f(z,0)=0$, and is zero near the lateral boundary. The derivative bound in step1.1 makes the entire graph track lie in the chosen larger neighborhood for sufficiently small $|y|$. Its velocity is exactly $V_u$ there. By uniqueness in [F2] the field evolution carries that graph to $x=f_u(z,y)$ and fixes the axis and $W$ pointwise. The rest of the surface is transported by the same ambient diffeomorphisms. Shrinking the final inner radius further excludes the transported compact complement, whose image is disjoint from the fixed axis. Thus the final intersection with that inner book is exactly $x=k y$. [step 1.1, F2, construct]

3.1 In a transverse-axis book, list its finitely many intersection heights $z_j$. At each such point, projection of $F$ to $(x,y)$ has rank two, so [F1] gives a graph $z=h_j(x,y)$ with $h_j(0,0)=z_j$. Use disjoint height neighborhoods for these finitely many graphs. Compactness excludes all other sheets from a smaller axis neighborhood, as in step1.1. For each graph use $h_{j,u}=(1-u)h_j+u z_j$ and the field $(z_j-h_j(x,y))\partial_z$, with a cutoff equal to one on its inner graph track and supported in its height neighborhood and a small radial disk. These supports miss the end caps and the lateral boundary. Each field vanishes on the axis, and is tangent to $W$, since it has only a $z$ component. Its evolution from [F2] therefore fixes the axis pointwise and preserves $W$ setwise. Uniqueness carries the inner graph to $z=h_{j,u}$. The finitely many disjointly supported evolutions leave exactly the flat section disks $z=z_j$ in a sufficiently thin final book; exclude the transported compact source complement exactly as in step2.1. [given, step 1.1, step 2.1, F1, F2, construct]

4.1 All the fields are tangent to the supplied cap boundaries or vanish near them, and vanish near the lateral boundaries, so their evolutions restrict to book diffeomorphisms. The product collar extensions paste them to an ambient isotopy outside the books; extend the fields by zero beyond those collar neighborhoods. The finite disjoint supports permit concatenation, and a smooth time reparametrization makes all stages stationary at their ends. This preserves the fixed axes, the set $W$ and the asserted boundary behavior. No new surface pieces can enter the thin final books, by the compact-complement separation already proved. [given, step 2.1, step 3.1, F2, construct]

5.1 A flat section disk intersects the lateral circle in its entire circumference. The axes $x=0$ and $y=0$ mark four successive corner points; between them are alternately two $xy<0$ and two $xy>0$ arcs. Its two page diameters cut it into four disk quadrants. In a common-axis band $x=k y$, $k>0$ gives $xy=k y^2>0$ on each lateral edge, so it misses the $C_+$ strips. Both pages cut this band along the single common axis, leaving two rectangular disks. These are literal coordinate computations, so they persist under the actual supplied book maps. Together with steps2.1–4.1 they give all the claimed normal forms, without an additional choice or a global gluing assumption. [given, step 2.1, step 3.1, step 4.1, algebra] ∎
