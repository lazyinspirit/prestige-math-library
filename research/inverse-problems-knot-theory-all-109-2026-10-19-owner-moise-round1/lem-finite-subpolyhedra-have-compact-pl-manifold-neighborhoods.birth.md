---
id: lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods
kind: lemma
title: "Compact manifold neighborhoods of a finite subpolyhedron"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-barycentric-subdivision-realizes-homeomorphically, lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero, thm-lebesgue-number-lemma]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, proof of Theorem 3.1, printed p.45: compact manifold neighborhoods of the finite image subcomplex in the covering tower"
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Chapter 3, regular neighborhoods; the proof here gives a barycentric level-set construction directly"
---

## Statement

Let $M$ be a compact piecewise linear three-manifold, possibly with boundary, equipped with a finite triangulation in which the boundary is a subcomplex and simplex links have the standard sphere or ball forms. Let $P$ be a subcomplex and let $W$ be any relatively open neighborhood of $|P|$ in $M$. There is a compact piecewise linear three-manifold $V\subset W$, with $|P|\subset\operatorname{Int}_M V$, such that $V$ strongly deformation retracts onto $|P|$. It has a finite triangulation extending a subdivision of $P$. Its trace $V\cap\partial M$ is a compact piecewise linear subsurface of $\partial M$, and its remaining frontier is a properly embedded piecewise linear surface; these surfaces meet along their common boundary. The trace may be empty. If $|P|$ is connected, $V$ is connected.

## Statement references

[[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

## Facts & Assumptions

**Given:** $M,P,W$ and the specified finite triangulation $K$.

[F1] Finite barycentric subdivisions realize the same space, their meshes tend to zero, and compact metric open covers have Lebesgue numbers ([[thm-barycentric-subdivision-realizes-homeomorphically]], [[lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero]], [[thm-lebesgue-number-lemma]]).

[F2] A finite collection of compatible convex polyhedral cells can be triangulated compatibly, preserving all faces ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The data above; write $P$ also for its realization.

1.1 Subdivide $K$ sufficiently finely that the closed union of its simplices meeting $P$ lies in $W$. To see this, when $M\setminus W$ is nonempty its compactness and that of $P$ give a positive distance between them in the finite realization metric; take the mesh smaller than that distance. If $W=M$, there is no restriction. After one further barycentric subdivision, the subdivided $P$ is a full subcomplex: vertices of a simplex are a chain of faces of the preceding triangulation, so if all those vertices belong to the subdivided $P$, every face in the chain belongs to $P$, and the whole chain simplex belongs to it. Denote this final triangulation again by $K$. For each vertex $v$ put $a_v=1$ when $v\in P$ and $a_v=0$ otherwise, and extend linearly on simplices to a function $r:M\to[0,1]$. Fullness gives $r^{-1}(1)=P$. Set $V=\{r\ge1/2\}$. This is compact, contains the relatively open neighborhood $\{r>1/2\}$ of $P$, and lies in $W$: every simplex meeting $V$ has a vertex in $P$ and hence belongs to the closed union chosen above. [given, F1, construct]

2.1 On a simplex with barycentric coordinates $(\lambda_v)$ and with $r\ge1/2$, define a homotopy by replacing each coordinate at a vertex of $P$ by $\lambda_v(r+t(1-r))/r$ and each other coordinate by $(1-t)\lambda_v$, for $0\le t\le1$. The new coordinates are nonnegative and sum to one; their sum at the vertices of $P$ is $r+t(1-r)\ge1/2$. The formulas agree on common faces and have denominator bounded below by $1/2$, so they give a continuous homotopy of $V$ into itself. At time zero it is the identity, at time one it maps into the face spanned by the $P$ vertices, which lies in $P$ by fullness, and it fixes every point of $P$ throughout. This is the required strong deformation retraction. It also gives a path in $V$ from each point to $P$, so $V$ is connected when $P$ is. [step 1.1, construct]

2.2 The cuts of each simplex by $r=1/2$ are convex polyhedral cells and agree on common faces. Their finite collection has a compatible triangulation by [F2], including their faces in $P$ and in $\partial M$. Thus $V$, its level frontier $L=\{r=1/2\}$, and its boundary trace $A=V\cap\partial M$ are finite subpolyhedra. It remains to verify the manifold and surface assertions, rather than inferring them merely from this triangulation. [F2, step 1.1, construct]

3.1 Let $x\in L$, and let $\sigma$ be the unique simplex whose relative interior contains $x$. Since its barycentric coordinates are all positive and their weighted sum is $1/2$, $\sigma$ has both a vertex of $P$ and one outside $P$. Choose a vector $d$ in its affine span with coordinate sum zero and with $dr(d)=1$, for example the difference between such two vertices. In every coface of $\sigma$, translation a sufficiently small distance along $d$ changes only the coordinates of vertices of $\sigma$; these remain positive near $x$, all other coordinates remain unchanged, and $r$ changes by exactly that distance. The translations agree on shared faces. Consequently the maps $z\mapsto(z-(r(z)-1/2)d,r(z)-1/2)$ and $(w,s)\mapsto w+sd$ give inverse local piecewise linear product coordinates with $w\in L$. The simplex-link hypothesis supplies the usual local manifold chart for the remaining coordinates. If $x$ is in the interior of $M$, these coordinates identify $V$ locally with a half-space and $L$ with its boundary plane. If $x\in\partial M$, the vector $d$ is tangent to the boundary simplex and these coordinates also preserve $\partial M$; $V$ is locally a quadrant times a line, with its two faces equal to $A$ and $L$. [given, step 2.2, construct]

4.1 A quadrant times a line is a piecewise linear half-space: in its two-dimensional factor send the two boundary rays to the positive and negative horizontal rays and send the diagonal ray to the positive vertical ray, extending linearly on the two intervening cones. This is a piecewise linear homeomorphism with piecewise linear inverse, and take its product with the remaining line coordinate. Away from $L$, a point of $V$ has $r>1/2$ and hence inherits the ordinary manifold or boundary chart of $M$. Together with step 3.1 these charts prove that $V$ is a compact piecewise linear three-manifold, $A$ is a subsurface of $\partial M$, and $L$ is a proper piecewise linear surface. At their common points the quadrant model identifies their boundaries with the same line, so their common boundary is exactly $A\cap L$. The finite triangulation of step 2.2 and the deformation retraction of step 2.1 finish the proof. All subdivision, triangulation and coordinate selections are finite. [step 2.1, step 2.2, step 3.1, construct] ∎

## Remarks

No triangulation of an arbitrary topological three-manifold is constructed here: the finite compatible manifold triangulation is input. The lemma supplies compact neighborhoods in the piecewise linear covering-tower argument. If a marked subsurface of $\partial M$ contains $P\cap\partial M$ in its relative interior, choose $W$ with boundary trace contained in that interior; the construction then keeps $V\cap\partial M$ inside the marked subsurface.
