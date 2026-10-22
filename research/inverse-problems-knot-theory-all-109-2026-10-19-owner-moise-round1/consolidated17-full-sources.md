# Full source bundle for the seventeen new drafts

Exact current sources in dependency order. Root mathematical review is pending. Full TOP Moise is not claimed.

## 1. lem-bounded-euclidean-homeomorphism-has-compactly-supported-local-model

Source: `items/lem-bounded-euclidean-homeomorphism-has-compactly-supported-local-model.md`; raw SHA256: `df572da5490cac8cb5000fa5af53077bd42e27b05ceec70a338b1d83e4d8c8d7`.

```markdown
---
id: lem-bounded-euclidean-homeomorphism-has-compactly-supported-local-model
kind: lemma
title: "A bounded Euclidean homeomorphism has a compactly supported local model"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-homeomorphism-and-open-maps, def-homotopy-relative-and-path-homotopy]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds, Quarterly Journal of Mathematics Oxford (2) 27 (1976), 63–70"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf"
      locator: "Printed pp.65,67–68: bounded universal-cover homeomorphism, compactification and Alexander isotopy; the present lemma isolates the Euclidean case"
---

## Statement

Let $n\ge1$, let $f:\mathbb R^n\to\mathbb R^n$ be a homeomorphism, and suppose there is a finite constant $C\ge0$ such that $\lVert f(x)-x\rVert\le C$ for every $x$. For every compact subset $K\subset\mathbb R^n$, there are an open neighborhood $U$ of $K$, a closed Euclidean ball $B$ centered at the origin, and an ambient isotopy $G_t$ of $\mathbb R^n$, $0\le t\le1$, such that $G_0$ is the identity, every $G_t$ is the identity outside $B$, and $G_1|_U=f|_U$. In particular, if $f$ is piecewise linear on a neighborhood of $K$, the final map is piecewise linear on some neighborhood of $K$. No global piecewise linearity of the isotopy or its final map is asserted.

## Statement references

[[def-homeomorphism-and-open-maps]]

[[def-homotopy-relative-and-path-homotopy]]

## Facts & Assumptions

**Given:** $n,f,C,K$ as in the Statement, with the Euclidean norm.

[F1] A homeomorphism is a continuous bijection with continuous inverse, and an ambient isotopy is a continuous family of homeomorphisms starting at the identity, whose associated map on the product with the parameter interval is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Given:** The data above.

1.1 Choose $R>1$ so large that $K\cup f(K)$ lies in the open radius-$R$ ball; this is possible because the continuous image of a compact set is compact, and compact Euclidean sets are bounded. Set $L=R+1$. Define an increasing homeomorphism $\rho:[0,\infty)\to[0,L)$ by $\rho(r)=r$ for $r\le R$ and $\rho(r)=R+(r-R)/(1+r-R)$ for $r\ge R$. The radial map $y(0)=0$, $y(x)=\rho(\lVert x\rVert)x/\lVert x\rVert$ for $x\ne0$, is a homeomorphism from $\mathbb R^n$ onto the open radius-$L$ ball, and it is the identity on the closed radius-$R$ ball. On the open radius-$L$ ball put $g=y\circ f\circ y^{-1}$. This is a homeomorphism there. [given, F1, construct]

1.2 Extend $g$ by the identity on the radius-$L$ sphere. To verify continuity there, put $r=\lVert x\rVert$ and $s=\lVert f(x)\rVert$. The displacement bound gives $s\ge r-C$. For $r>C$, insert $f(x)/r$ between the two unit vectors to obtain
$$\left\lVert\frac{f(x)}{s}-\frac{x}{r}\right\rVert\le\frac{|s-r|}{r}+\frac{C}{r}\le\frac{2C}{r}.$$
Consequently
$$\lVert y(f(x))-y(x)\rVert\le |\rho(s)-\rho(r)|+\rho(r)\frac{2C}{r}\le (L-\rho(s))+(L-\rho(r))+\frac{2LC}{r}.$$
The right side tends to zero as $r\to\infty$, uniformly over directions, since $s\ge r-C$ and $\rho$ is increasing with limit $L$. For an interior point $z=y(x)$ approaching a boundary point $b$, the equality $\lVert z\rVert=\rho(r)$ forces $r\to\infty$, and $\lVert g(z)-b\rVert\le\lVert g(z)-z\rVert+\lVert z-b\rVert$ tends to zero by this bound. This proves continuity directly. The inverse $f^{-1}$ has the same displacement bound: if $z=f(x)$ then $\lVert f^{-1}(z)-z\rVert=\lVert x-f(x)\rVert\le C$. Applying the same calculation to $f^{-1}$ gives the continuous inverse extension. Extend once more by the identity outside the closed radius-$L$ ball to obtain a homeomorphism $G$ of $\mathbb R^n$. The formulas and their inverse formulas agree on the joining sphere. [given, F1, step 1.1, construct]

2.1 The set $U=\{x:\lVert x\rVert<R,\ \lVert f(x)\rVert<R\}$ is an open neighborhood of $K$. On $U$ both $y^{-1}(x)=x$ and $y(f(x))=f(x)$, so $G(x)=f(x)$. Thus any piecewise linearity of $f$ on an open neighborhood of $K$ is retained after intersecting that neighborhood with $U$. This is an equality of actual local maps, rather than an approximation statement about their images. [given, step 1.1, step 1.2]

3.1 For $0<t\le1$ define $G_t(x)=tG(x/t)$ when $\lVert x\rVert\le tL$, and $G_t(x)=x$ when $\lVert x\rVert\ge tL$; put $G_0(x)=x$. The branches agree at $\lVert x\rVert=tL$ because $G$ fixes the radius-$L$ sphere. Each $G_t$ is a homeomorphism, with inverse given by the same formula using $G^{-1}$; it fixes every point outside the radius-$tL$ ball. The formulas give joint continuity for $t>0$. At $t=0$, both $x$ and its image lie in the radius-$tL$ ball whenever a point moves, so $\lVert G_t(x)-x\rVert\le2tL$. This proves joint continuity at zero, uniformly in $x$. The identical estimate applies to the inverse family, hence $(x,t)\mapsto(G_t(x),t)$ is a homeomorphism with continuous inverse $(x,t)\mapsto(G_t^{-1}(x),t)$. Therefore $G_t$ is an ambient isotopy, supported in the radius-$L$ ball, from the identity to $G$. Together with step 2.1 this proves all conclusions. [F1, step 1.2, step 2.1, construct] ∎

## Remarks

The construction uses only a choice of one sufficiently large real number, with no countable or arbitrary-index choice assumption. It supplies the bounded-homeomorphism compactification step in the Euclidean part of Hamilton's torus argument. It does not prove that a topological three-manifold admits a piecewise linear structure, and it does not straighten an arbitrary topological coordinate change.
```

## 2. lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar

Source: `items/lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar.md`; raw SHA256: `a6c543e17109b1b0880467251b5655e3521d5a09ef282b8798f9d565d55de506`.

```markdown
---
id: lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
kind: lemma
title: "A compact locally collared polyhedron has a piecewise linear collar"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Theorem 2.25 and Corollary 2.26, printed pp.24–26; complete finite local-push proof"
---

## Statement

Let $P$ be a compact subpolyhedron of a polyhedron $Q$. Suppose $P$ is locally piecewise linearly collared in $Q$: each point has a product neighborhood in which $P$ is the bottom of a piecewise linear product with $[0,1)$. Then there is a piecewise linear embedding $c:P\times[0,1]\to Q$ with $c(x,0)=x$ such that $c(P\times[0,1))$ is an open neighborhood of $P$ in $Q$. In particular the boundary of every compact piecewise linear manifold has such a collar.

## Statement references

[[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

## Facts & Assumptions

**Given:** $P\subset Q$ and the compactness and local collar hypotheses above.

[F1] Finite compatible polyhedral subdivisions admit compatible triangulations; piecewise linear maps and subpolyhedra admit finite compatible subdivisions on compact parts ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

## Proof

**Given:** The stated pair. The empty case has the empty collar, so assume $P$ is nonempty.

1.1 Attach an external collar and denote the resulting polyhedron by $Q^+=(Q\times\{1\})\cup(P\times[0,1])$, identifying $P\subset Q$ with $P\times\{1\}$. This is a polyhedron: triangulate the compact marked part of $Q$ with $P$ a subcomplex, triangulate its product prisms compatibly, and glue the equal marked faces. Outside this compact part keep the original locally finite triangulation. A local collar chart about $a\in P$, shrunk to the closed star $S_a=a*L_a$ of a vertex in a finite triangulation of $P$, identifies $S_a\times[1,2]$ with a neighborhood in $Q$ of that star. Combining it with the external collar gives $S_a\times[0,2]\subset Q^+$. The product is the cone from $(a,1)$ over $(L_a\times[0,2])\cup(S_a\times\{0,2\})$. Triangulate that boundary and cone it to $(a,1)$. Moving the cone vertex to $(a,1/2)$ and extending linearly on the cone simplices defines a piecewise linear homeomorphism of this product fixed on the displayed cone base, which is the relative frontier of the local neighborhood in $Q^+$. The remaining sides, if the star meets the boundary of $P$, may move along the boundary of $Q^+$. Both cone decompositions cover the product: on every radial line in the star factor the product has a single interval in each height direction, so each ray from either vertex has a unique final boundary point. Extend this map by the identity to $Q^+$ and call it $h_a$. [given, F1, construct]

2.1 On the external collar, $h_a$ preserves the $P$ coordinate and decreases the height weakly. In a cone simplex this follows directly from affine coordinates: only the cone vertex changes, by the vertical displacement $-1/2$, so a point with cone-vertex coefficient $\lambda$ has the same first coordinate and height reduced by $\lambda/2$. The decrease is strict for points over the relative interior $S_a\setminus L_a$ with height strictly between $0$ and $2$. Compactness provides finitely many such star interiors covering $P$. Compose their pushes in any fixed order to obtain a piecewise linear homeomorphism $h'$ of $Q^+$. Every point $(x,1)$ is then sent to $(x,t(x))$ with $0<t(x)<1$: at least one selected star contains $x$ in its interior, that push strictly decreases the height, subsequent pushes cannot increase it, and all pushes fix height zero and are injective. Since each push preserves the ordered vertical intervals in the external collar, $h'(Q)\cap(P\times[0,1])$ is exactly the region $T=\{(x,s):t(x)\le s\le1\}$. Also $h'(Q)$ contains all of $Q\times\{1\}$, since the inverse of every push increases height on any point at height at least one in its local chart. [step 1.1, construct]

3.1 The function $t$ is piecewise linear on a finite subdivision of $P$: the graph $h'(P)$ is a finite polyhedron projecting bijectively to $P$, and subdividing the projection gives an affine bijection on every simplex with affine inverse on its image. Refine its projected cells compatibly using [F1]. For each simplex $A$ in this subdivision, $T\cap(A\times[0,1])$ is a convex prism cut out by the affine bottom $s=t(x)$ and the constant top $s=1$. Its faces correspond exactly to the faces of $A\times[0,1]$. Construct compatible piecewise linear homeomorphisms between these prisms by induction over their faces: prescribe the identity on the top, the projection $(x,t(x))\mapsto(x,0)$ on the bottom, use the already constructed face maps on the vertical sides, and cone from interior points to extend over each remaining cell. The finite convex cell triangulation argument in [F1] verifies bijectivity and a piecewise linear inverse. These maps paste to $g:T\to P\times[0,1]$, fixed on the top and sending the graph to the bottom by its first coordinate. Extend $g$ by the identity on $Q\times\{1\}$ to obtain a piecewise linear homeomorphism $h'(Q)\to Q^+$. [F1, step 2.1, construct]

4.1 The composite $h=g\circ h'|_Q:Q\to Q^+$ is a piecewise linear homeomorphism and sends each $x\in P$ to $(x,0)$. Pull back the external collar by $h$: put $c(x,s)=h^{-1}(x,s)$. This is a piecewise linear embedding with the required bottom restriction, and its half-open image is an open neighborhood because $P\times[0,1)$ is an open neighborhood of $P\times\{0\}$ in $Q^+$. A piecewise linear boundary chart is a local product chart of the required kind, so the manifold assertion follows. Only the finite local cover and finite subdivisions were selected; no countable or arbitrary-index choice assumption is used. [given, step 3.1, construct] ∎
```

## 3. lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods

Source: `items/lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods.md`; raw SHA256: `48d5fa9191f498828245df51ce5995351615aee9b34e15419863b8c2933b14c3`.

```markdown
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

1.1 If $P$ is empty, take $V$ empty, with the empty triangulation and homotopy; all assertions hold. Otherwise subdivide $K$ sufficiently finely that the closed union of its simplices meeting $P$ lies in $W$. To see this, when $M\setminus W$ is nonempty its compactness and that of $P$ give a positive distance between them in the finite realization metric; take the mesh smaller than that distance. If $W=M$, there is no restriction. After one further barycentric subdivision, the subdivided $P$ is a full subcomplex: vertices of a simplex are a chain of faces of the preceding triangulation, so if all those vertices belong to the subdivided $P$, every face in the chain belongs to $P$, and the whole chain simplex belongs to it. Denote this final triangulation again by $K$. For each vertex $v$ put $a_v=1$ when $v\in P$ and $a_v=0$ otherwise, and extend linearly on simplices to a function $r:M\to[0,1]$. Fullness gives $r^{-1}(1)=P$. Set $V=\{r\ge1/2\}$. This is compact, contains the relatively open neighborhood $\{r>1/2\}$ of $P$, and lies in $W$: every simplex meeting $V$ has a vertex in $P$ and hence belongs to the closed union chosen above. [given, F1, construct]

2.1 On a simplex with barycentric coordinates $(\lambda_v)$ and with $r\ge1/2$, define a homotopy by replacing each coordinate at a vertex of $P$ by $\lambda_v(r+t(1-r))/r$ and each other coordinate by $(1-t)\lambda_v$, for $0\le t\le1$. The new coordinates are nonnegative and sum to one; their sum at the vertices of $P$ is $r+t(1-r)\ge1/2$. The formulas agree on common faces and have denominator bounded below by $1/2$, so they give a continuous homotopy of $V$ into itself. At time zero it is the identity, at time one it maps into the face spanned by the $P$ vertices, which lies in $P$ by fullness, and it fixes every point of $P$ throughout. This is the required strong deformation retraction. It also gives a path in $V$ from each point to $P$, so $V$ is connected when $P$ is. [step 1.1, construct]

2.2 The cuts of each simplex by $r=1/2$ are convex polyhedral cells and agree on common faces. Their finite collection has a compatible triangulation by [F2], including their faces in $P$ and in $\partial M$. Thus $V$, its level frontier $L=\{r=1/2\}$, and its boundary trace $A=V\cap\partial M$ are finite subpolyhedra. It remains to verify the manifold and surface assertions, rather than inferring them merely from this triangulation. [F2, step 1.1, construct]

3.1 Let $x\in L$, and let $\sigma$ be the unique simplex whose relative interior contains $x$. Since its barycentric coordinates are all positive and their weighted sum is $1/2$, $\sigma$ has both a vertex of $P$ and one outside $P$. Choose a vector $d$ in its affine span with coordinate sum zero and with $dr(d)=1$, for example the difference between such two vertices. In every coface of $\sigma$, translation a sufficiently small distance along $d$ changes only the coordinates of vertices of $\sigma$; these remain positive near $x$, all other coordinates remain unchanged, and $r$ changes by exactly that distance. The translations agree on shared faces. Consequently the maps $z\mapsto(z-(r(z)-1/2)d,r(z)-1/2)$ and $(w,s)\mapsto w+sd$ give inverse local piecewise linear product coordinates with $w\in L$. The simplex-link hypothesis supplies the usual local manifold chart for the remaining coordinates. If $x$ is in the interior of $M$, these coordinates identify $V$ locally with a half-space and $L$ with its boundary plane. If $x\in\partial M$, the vector $d$ is tangent to the boundary simplex and these coordinates also preserve $\partial M$; $V$ is locally a quadrant times a line, with its two faces equal to $A$ and $L$. [given, step 2.2, construct]

4.1 A quadrant times a line is a piecewise linear half-space: in its two-dimensional factor send the two boundary rays to the positive and negative horizontal rays and send the diagonal ray to the positive vertical ray, extending linearly on the two intervening cones. This is a piecewise linear homeomorphism with piecewise linear inverse, and take its product with the remaining line coordinate. Away from $L$, a point of $V$ has $r>1/2$ and hence inherits the ordinary manifold or boundary chart of $M$. Together with step 3.1 these charts prove that $V$ is a compact piecewise linear three-manifold, $A$ is a subsurface of $\partial M$, and $L$ is a proper piecewise linear surface. At their common points the quadrant model identifies their boundaries with the same line, so their common boundary is exactly $A\cap L$. The finite triangulation of step 2.2 and the deformation retraction of step 2.1 finish the proof. All subdivision, triangulation and coordinate selections are finite. [step 2.1, step 2.2, step 3.1, construct] ∎

## Remarks

No triangulation of an arbitrary topological three-manifold is constructed here: the finite compatible manifold triangulation is input. The lemma supplies compact neighborhoods in the piecewise linear covering-tower argument. If a marked subsurface of $\partial M$ contains $P\cap\partial M$ in its relative interior, choose $W$ with boundary trace contained in that interior; the construction then keeps $V\cap\partial M$ inside the marked subsurface.
```

## 4. lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold

Source: `items/lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold.md`; raw SHA256: `0d2b27243da5bc6f348e96e29f3f02f5b935a88e605847770aff91161a73d336`.

```markdown
---
id: lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold
kind: lemma
title: "The finite covering-tower endpoint has spherical boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-cellular-homology-computes-singular-homology, thm-relative-cellular-homology-computes-relative-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema, lem-polygonal-schema-reduction-moves, lem-finite-polygonal-disk-and-collar-surgery]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, proof of Theorem 3.1, printed p.46: the last twofold-cover tower stage has spherical boundary"
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Chapter 2, final exercises, printed p.27, dual cells; the finite dual-chain calculation is supplied explicitly here"
---

## Statement

Let $V$ be a compact connected orientable piecewise linear three-manifold with a finite compatible triangulation $K$, with boundary a subcomplex, and with every simplex link a standard piecewise linear sphere or ball of the appropriate dimension. If $V$ has no connected twofold covering space, every connected component of $\partial V$ is piecewise linearly homeomorphic to the standard two-sphere. This conclusion uses only finite simplicial and cellular calculations and has no choice hypothesis.

## Facts & Assumptions

**Given:** $V,K$ and the stated covering condition. All chains, cochains and matrices in this proof have coefficients in $\mathbb F_2$ and have finite dimension.

[F1] Finite cellular chain complexes compute singular homology, including relative CW pairs, and the pair homology sequence is exact ([[thm-cellular-homology-computes-singular-homology]], [[thm-relative-cellular-homology-computes-relative-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F2] A finite triangulated surface has a one-polygon schema; its finite polygonal reduction moves preserve the realization, and prescribed PL maps of polygonal disk boundaries extend over those disks ([[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]], [[lem-polygonal-schema-reduction-moves]], [[lem-finite-polygonal-disk-and-collar-surgery]]).

## Proof

**Given:** The data above. Fix an ordering of the finite vertex and simplex sets, used for all pivot selections.

1.1 Let $C_*(K)$ be the simplicial chain complex and $C^*(K)$ its vector-space dual, with coboundary $\delta$. Every simplicial one-cocycle $a$ is a coboundary. To prove this, construct a twofold simplicial cover from $a$: its vertices are $(v,\epsilon)$ for $\epsilon\in\mathbb F_2$, its lifted edge over $vw$ goes from $(v,\epsilon)$ to $(w,\epsilon+a(vw))$, and its lifted simplex over a simplex with vertices $v_0,\ldots,v_k$ has labels $\epsilon+a(v_0v_j)$ at $v_j$, with $a(v_0v_0)=0$. The cocycle identity on every triangle makes these prescriptions agree on faces and makes the two lifts of each vertex star disjoint copies of that star. Their realization is a genuine twofold covering space of $V$. If it were connected, it would contradict the hypothesis. Otherwise it has exactly two connected components, each projecting homeomorphically to $V$: path lifting connects a chosen fiber point to one point in every other fiber; if the same component contained both points of one fiber, it would contain both points of every fiber and the whole cover would be connected. Choose one component. The label $b(v)$ of its unique vertex over $v$ satisfies $a(vw)=b(v)+b(w)$, so $a=\delta b$. Thus $H^1(C^*(K))=0$. [given, construct]

2.1 Write $d_j:C_j(K)\to C_{j-1}(K)$ for the finite boundary matrices. Gaussian elimination, always taking the first available pivot in the fixed ordering, proves that a matrix and its transpose have the same rank. Consequently $$\dim H_1(C_*(K))=\dim C_1-\operatorname{rank}d_1-\operatorname{rank}d_2=\dim H^1(C^*(K))=0.$$ Thus $H_1(V;\mathbb F_2)=0$ by [F1]. No infinite basis or extension of a functional is selected. [F1, step 1.1, algebra]

2.2 For the finite triangulation fixed in step 1.1, there is also a relative dual-cell decomposition of $(V,\partial V)$. For a $k$-simplex $\sigma$ of $K$, let $B_\sigma$ be the closed union of barycentric simplices whose defining face chain begins with $\sigma$, together with all their faces. Its coface poset identifies it piecewise linearly with the cone on the barycentric subdivision of $\operatorname{lk}(\sigma,K)$. Hence it is a $(3-k)$-ball by the simplex-link hypothesis. For an interior simplex its boundary is the union of the blocks $B_\tau$ for proper cofaces $\tau\supsetneq\sigma$. For a boundary simplex its boundary additionally contains its side in $\partial V$: in the cone-on-ball model that side is the cone on the boundary of the link ball. The boundary side and the coface blocks are the two parts of its ball boundary. The interiors of the blocks off $\partial V$ are pairwise disjoint and cover $V\setminus\partial V$. Indeed, the least face with positive barycentric-chain coordinate determines the unique block interior, while a point whose chain lies wholly in $\partial V$ belongs to the boundary subcomplex. Starting with a finite triangulation of $\partial V$ and attaching these blocks in increasing dimension therefore gives a finite relative CW decomposition of $(V,\partial V)$. [given, step 1.1, construct]

3.1 Its relative cellular boundary is $$\partial B_\sigma=\sum_{\substack{\tau\supset\sigma\\\dim\tau=k+1}}B_\tau\quad\pmod{\partial V}.$$ Each listed block is an embedded codimension-one facet of $B_\sigma$ and occurs once. All other boundary faces have smaller dimension or lie in $\partial V$. Equivalently, in its barycentric triangulation the faces obtained by omitting an intermediate chain member cancel in pairs, and the uncanceled faces are precisely those with the least member replaced by an immediate coface; boundary-side faces are zero in the relative complex. Thus the basis correspondence from the cochain dual to $\sigma$ to $B_\sigma$ identifies $C^k(K)$, with coboundary, with the degree-reversed relative dual-cell complex in degree $3-k$. By [F1], this gives $$H_2(V,\partial V;\mathbb F_2)\cong H^1(C^*(K))=0.$$ This is a finite chain-matrix duality calculation, not an invocation of a general Poincaré duality theorem. [F1, step 1.1, step 2.2, construct]

4.1 The portion $H_2(V,\partial V;\mathbb F_2)\to H_1(\partial V;\mathbb F_2)\to H_1(V;\mathbb F_2)$ of the exact sequence in [F1] now has zero outer groups. Therefore $H_1(\partial V;\mathbb F_2)=0$. In particular this holds for each boundary component, since the finite boundary chain complex is the direct sum of its component complexes. Each component is a closed orientable finite PL surface. [F1, step 2.1, step 3.1, algebra]

5.1 For completeness, apply the finite surface procedure [F2] to such a component $S$. Coherent triangle orientations give opposite directions on the two occurrences of every paired polygon side. Cancel adjacent inverse pairs, retaining the terminal sphere bigon. If an uncanceled residue is nonempty and is not that bigon, it has interlaced pairs: otherwise all pairing chords on its boundary circle would be noncrossing, and an innermost chord would give an adjacent inverse pair. Extract an interlaced pair as a commutator block using [F2]'s explicit cut-and-merge identity, reserve that block, and repeat on the residue. Each cancellation deletes a pair, and each extraction removes two pairs from the unprocessed residue, so this terminates with either the sphere bigon or a product of $g\ge1$ commutator blocks. All cuts and disk identifications are polygonal, and their parametrizations are PL by the disk-extension clause of [F2], so the resulting model is PL homeomorphic to $S$. [F2, step 4.1, construct]

6.1 A nonempty commutator model has one vertex, $2g$ one-cells, and one two-cell. Its first boundary is zero and its second boundary is zero modulo two, since every side occurs twice. Hence its first homology has dimension $2g>0$ by [F1], contrary to step 4.1. The only remaining model is the sphere bigon, whose quotient is the standard PL two-sphere; one may subdivide its two boundary arcs and realize it as two polygonal disks glued along their common boundary. Thus every component is a PL sphere. All covers, blocks, reductions and pivots used finite data; no arbitrary-index or countable choice was required. [F1, F2, step 4.1, step 5.1] ∎ ```

## 5. lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk

Source: `items/lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk.md`; raw SHA256: `54c4b8b578d77cf103d0de404279688b183420e0c911ba1f44aa87c730fa90aa`.

```markdown
---
id: lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk
kind: lemma
title: "Eliminating double curves of a two-sheeted polygonal disk"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, def-based-loops-and-fundamental-group, def-normal-subgroup]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, proof of Theorem 3.1, printed pp.46–48, double-circle and double-arc elimination; the present statement is the orientable PL special case"
---

## Statement

Let $M$ be an orientable piecewise linear three-manifold with boundary, let $F$ be a connected subsurface of its boundary, and let $N$ be a normal subgroup of $\pi_1(F)$. Suppose $f:D\to M$ is a proper piecewise linear immersion of a finite polygonal disk, with $f(\partial D)\subset F$, having only regular double curves and with no point having more than two inverse images. More precisely, the double-value set is a finite disjoint union of circles in the interior and arcs properly ending in the boundary; near a double value the two sheets are transverse planes, or transverse half-planes at an endpoint, and there are no other singularities. If the boundary loop of $f$ does not represent an element of $N$, then there is a properly embedded piecewise linear disk in $M$ whose boundary lies in $F$ and does not represent an element of $N$.

Membership in $N$ for an unbased boundary loop is interpreted after joining it to a fixed basepoint in $F$. It is independent of that joining path because $N$ is normal. The disk produced need not have the same boundary as $f$.

## Statement references

[[def-based-loops-and-fundamental-group]]

[[def-normal-subgroup]]

## Facts & Assumptions

**Given:** $M,F,N,D,f$ with the stated finite regular-double-curve conditions.

[F1] Finite simple polygonal circles in a disk bound polygonal subdisks; cutting along a proper simple polygonal arc splits a disk into two disks. Prescribed piecewise linear boundary identifications between polygonal disks extend over them, and finite arcs have polygonal strip neighborhoods ([[lem-finite-polygonal-disk-and-collar-surgery]]). For the cutting assertion, join the proper arc to each of the two boundary intervals and apply the polygonal disk assertion after separating shared endpoints by a small polygonal collar.

[F2] Loop concatenation and reversal define $\pi_1(F)$; conjugating a loop changes its chosen basepath, and a normal subgroup is closed under conjugation, products and inverses ([[def-based-loops-and-fundamental-group]], [[def-normal-subgroup]]).

## Proof

**Given:** The data of the Statement. All modifications below use finite polygonal subdivisions and sufficiently small polygonal neighborhoods.

1.1 Each double circle has two distinct preimage circles in $D$, and its normal crossing neighborhood is a product of that circle with a planar cross. To check the possible monodromy, orient $D$ and $M$. Each sheet has its induced coorientation, and the ordered pair of sheet coorientations orients their intersection line. If continuation once around the double circle interchanged the sheets, this orientation of the intersection line would be reversed, which is impossible on a circle. Thus the two sheets return individually. The orientation of each sheet and of the intersection line also preserves each of its transverse directions; consequently no pair of opposite arms is interchanged. Trivializing the interval strips in the two sheets therefore gives the product cross. No rotation or reflection monodromy remains. [given, construct]

2.1 The two preimage circles of a chosen double circle bound disks $D_1,D_2\subset D$ by [F1]. If they are nested, say $D_1\subset\operatorname{Int}D_2$, replace the part $D_2$ by a copy of $D_1$, matching boundary points with the same image under $f$, and retain the outside of $D_2$. If they are disjoint, interchange the maps on $D_1$ and $D_2$, with those same boundary identifications, and retain the rest. The identifications extend over the disks by [F1]. At the joining circle resolve the crossing by connecting adjacent arms of the planar cross instead of opposite arms. The resolution can be made polygonal: in a small square normal section replace the two crossing segments by two disjoint bent polygonal arcs joining the selected adjacent pairs, equal to the old arms near the square boundary. Taking products with successive subintervals of the double circle gives matching polygonal annuli; step 1.1 ensures their end identifications agree. This removes that double circle. The retained domain is a disk, its external boundary map is unchanged, and each retained old sheet piece is used at most once. Outside the crossing neighborhood no new double value is introduced; inside it the replacement sheets are disjoint. Other double curves miss this neighborhood and are either retained or discarded. [F1, step 1.1, construct]

3.1 Repeat step 2.1 until there are no double circles. The number of double curves strictly decreases at every repetition and was finite initially. Each new disk is still a proper polygonal immersion with at most two preimages per value, regular double arcs, and the original boundary loop. The intermediate disk need not lift to an embedding in any covering space; this proof concerns the immersion in $M$ itself. [given, step 2.1]

4.1 Choose a double arc $C$. Its two preimage arcs $a,b$ are disjoint proper arcs in the disk. They cut it into three polygonal disks, in order an outer piece, a middle piece, and the other outer piece. Orient the boundary of $D$, and label its four successive portions by $\alpha,\beta,\gamma,\delta$ so that $\alpha$ and $\gamma$ are the exposed boundary intervals of the outer pieces. The two ways of matching the orientations of $a$ and $b$ give the following boundary words after the two possible crossing resolutions: $$\begin{array}{c|c|c|c} &\text{original}&\text{first disk}&\text{second disk}\\ \text{same orientation}&\alpha\beta\gamma\delta&\alpha\gamma&\alpha\beta^{-1}\gamma\delta^{-1}\\ \text{opposite orientations}&\alpha\beta\gamma\delta&\alpha\gamma^{-1}&\alpha\delta\gamma\beta\end{array}.$$ Here all boundary paths are their images in $F$; short joining paths inside the endpoint half-disk neighborhoods have been collapsed in the written words. They are homotopic to the actual polygonal boundary paths. To verify the domains and the words, cut along $a,b$, and use the common parametrization of their images $C$ to match the cut shores. Joining the two outer disks along one shore produces the first disk, with the exposed intervals $\alpha,\gamma$ read in the matching directions. Joining all three disks in the other order along two shores produces the second disk; following its boundary reads the remaining word in the table. Each join is along a full boundary interval, hence gives a disk by [F1]. Each old piece is used at most once in either candidate. This surgery will be applied after the circle eliminations of step 3.1. [F1, given, step 3.1, construct]

5.1 Realize each of these two gluings in $M$ by the corresponding adjacent-arm resolution along $C$. In a transverse square use the two disjoint bent arcs described in step 2.1. At an endpoint use its half-space version; the changed boundary arcs stay in $F$, since that endpoint has a neighborhood in the subsurface containing the original boundary germs. Subdivide finitely along $C$ to obtain polygonal product strips, and use a width smaller than their positive distances to all other double curves and to nonincident sheet pieces. Thus the replacement is a proper polygonal immersion with no double value along $C$ and with no newly introduced double curve. Away from the strip it uses a subset of the old sheet pieces, with no repetition. The two-to-one bound is therefore preserved. The remaining double curves are among the old ones other than $C$. [given, F1, step 2.1, step 4.1, construct]

6.1 At least one candidate disk still has its boundary class outside $N$. In the first row of the table put $w=\alpha\beta\gamma\delta$, $u=\alpha\gamma$, $v=\alpha\beta^{-1}\gamma\delta^{-1}$. Cancellation of successive reversed paths gives $$w=u\delta^{-1}v^{-1}u\delta.$$ In the second row put $u=\alpha\gamma^{-1}$ and $v=\alpha\delta\gamma\beta$. Then the corresponding cancellation identity is $$w=u(\gamma\delta)^{-1}u^{-1}v(\gamma\delta).$$ These are identities of composable paths with the indicated common endpoint identifications; inserting basepaths turns them into products of conjugates in $\pi_1(F)$. By [F2], if both candidate boundary classes belonged to $N$, so would $w$, contradicting the induction hypothesis. Retain a candidate whose boundary class is outside $N$. [F2, step 4.1, step 5.1]

7.1 Repeat steps 4.1–6.1. Each repetition removes at least one double arc and introduces none, so after finitely many repetitions there is a proper polygonal immersion of a disk with no double values and with boundary class outside $N$. It is injective. A continuous injection of the compact disk into the Hausdorff manifold $M$ is an embedding; its polygonal local models make this a piecewise linear proper embedding. Its boundary is in $F$, as required. All choices made in the construction are finite; no countable or arbitrary-index choice assumption has been used. [given, step 3.1, step 5.1, step 6.1] ∎

## Remarks

This is the local double-curve-elimination half of the orientable loop theorem. An arbitrary nullhomotopy disk need not satisfy its two-sheeted immersion hypothesis. Establishing that reduction requires the separate finite twofold-cover tower argument; this lemma does not replace that argument or assert the full loop theorem.
```

## 6. thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds

Source: `items/thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds.md`; raw SHA256: `205b9e6431aa4d0bc324365d8a44c8cb7a2ce87748a4bb56fbed533ae25ffcd5`.

```markdown
---
id: thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
kind: theorem
title: "The loop theorem for finitely triangulated orientable PL three-manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-finite-simplicial-approximation-for-maps-of-pairs, thm-covering-space-lifting-criterion, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk, lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, Theorem 3.1 and its full twofold-cover tower proof, printed pp.45–48"
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Chapter 5, Theorem 5.3 and its complete finite vertex-push/chart-induction proof, printed pp.60–63; the proof below uses paired charts for a free involution"
---

## Statement

Let $M$ be a compact connected orientable piecewise linear three-manifold with a given finite compatible manifold triangulation and with boundary a subcomplex. Let $F\subset\partial M$ be a connected compact piecewise linear subsurface and $N\trianglelefteq\pi_1(F)$ a normal subgroup. Suppose there is a continuous map $f:(D^2,\partial D^2)\to(M,F)$ whose boundary lies in the relative interior of $F$ and has class outside $N$. Then there is a properly embedded piecewise linear disk in $M$, with boundary in the relative interior of $F$, whose boundary class is outside $N$.

In particular, if a connected boundary component has noninjective induced fundamental-group map into $M$, it contains an essential simple closed curve bounding a properly embedded piecewise linear disk in $M$. Boundary classes outside $N$ are understood up to conjugation by a basepath in $F$.

## Statement references

[[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]

## Facts & Assumptions

**Given:** $M,F,N,f$ as in the Statement.

[F1] Continuous maps of finite polyhedral pairs admit simplicial approximations homotopic as maps of pairs; PL maps admit compatible finite subdivisions ([[thm-finite-simplicial-approximation-for-maps-of-pairs]]).

[F2] A finite subpolyhedron in a finitely triangulated PL three-manifold has a compact PL manifold neighborhood strongly retracting onto it, with controlled trace in a marked boundary subsurface ([[lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods]]).

[F3] Compact locally collared PL subpolyhedra have PL collars; in particular this applies to the boundary of a compact PL manifold and to boundary curves of a compact PL surface ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F4] A disk map lifts to any covering after fixing its initial lift ([[thm-covering-space-lifting-criterion]]). Pulling back finitely many triangulation simplices gives a finite compatible PL structure on a twofold cover. Its deck involution sends each point to the other point in the same fiber; its continuity follows by interchanging the two sheets on every evenly covered neighborhood. It has no fixed point.

[F5] If a compact connected orientable finite PL three-manifold has no connected twofold cover, its boundary components are PL spheres. This has a local proof using explicit twofold covers from finite edge cocycles, dual-cell boundary matrices, finite pivots, and finite polygonal surface reduction, with no choice assumption ([[lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold]]).

[F6] On a PL two-sphere, a simple polygonal circle bounds polygonal disks on its two sides. Finite polygonal disk parametrizations and their boundary extensions are supplied by [[lem-finite-polygonal-disk-and-collar-surgery]] after using a standard two-disk sphere model. A connected compact subsurface is planar; its finitely many boundary components bound the complementary disk regions, as follows by applying the same polygonal separation successively.

[F7] A proper PL disk immersion with only regular double arcs and circles and no values of multiplicity greater than two has an essential embedded disk with respect to any prescribed normal boundary subgroup ([[lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk]]).

## Proof

**Given:** The data above.

1.1 By [F1], replace $f$ by a PL map with boundary homotopic to the original one in $F$. Choose the approximation sufficiently fine on its compact boundary image to keep that image in $\operatorname{Int}F$. Make the map proper without changing its boundary: in a boundary collar $c(u,s)$, a push with parameter $a\ge0$ replaces the height $s$ by $\max(s,a)$ for $s$ below the collar top and is the identity elsewhere, with $a$ smaller than that top. This is a continuous PL function jointly in $(s,a)$. Choose a nonnegative PL function $a$ on the source disk, zero precisely on its boundary and everywhere sufficiently small, and apply that push to the value of the map at each point. Its straight parameter interpolation gives a homotopy relative to the source boundary. After compatible subdivisions the resulting proper PL map $f_0:D\to M$ is simplicial for one fixed finite triangulation of $D$. Its boundary class is still outside $N$. Put $D_0=f_0(D)$ and use [F2] to choose a connected compact manifold neighborhood $V_0$ retracting onto $D_0$ whose trace in $\partial M$ lies in $\operatorname{Int}F$. Let $F_0$ be the component of that trace containing $f_0(\partial D)$. [given, F1, F2, F3, construct]

2.1 If $V_0$ has a connected twofold cover $p_1:M_1\to V_0$, lift $f_0$ to $f_1:D\to M_1$ by [F4], put $D_1=f_1(D)$, and choose by [F2] a connected compact manifold neighborhood $V_1$ retracting onto $D_1$. Its trace is chosen inside the relative interior of $p_1^{-1}(F_0)$; let $F_1$ be the component containing $f_1(\partial D)$. Repeat whenever $V_i$ has a connected twofold cover. Write $q_i:V_i\to M$ for the composite of the covers and neighborhood inclusions. Then $q_if_i=f_0$, $q_i(F_i)\subset F$, and $N_i=(q_i|_{F_i})_*^{-1}(N)$ is normal. The boundary class of $f_i$ is outside $N_i$ at every stage. Orientability and the finite compatible PL structures pass to the covers and the neighborhoods. [F2, F4, step 1.1, construct]

3.1 This tower is finite. Give $D_i$ the simplicial structure obtained by lifting the original image simplices of $D_0$, irrespective of any additional subdivisions used for $V_i$. Its number of simplices is at most the number of simplices in the fixed source disk: each image simplex is the image of at least one source simplex, and each such source simplex has just one lift in the image of $f_i$. Let $\tau_i$ be the deck involution of $p_i$. The inverse image of $D_{i-1}$ is $D_i\cup\tau_i(D_i)$: every point of $D_{i-1}$ is hit by $f_{i-1}$ and its two lifts are interchanged by $\tau_i$. This inverse image is connected, because lifting the deformation retraction of $V_{i-1}$ onto $D_{i-1}$ retracts the connected $M_i$ onto it. The two finite closed sets $D_i$ and $\tau_i(D_i)$ must therefore meet. Since their union is a lifted simplicial complex, their intersection contains a common simplex. Thus $\tau_i$ identifies two distinct simplices of $D_i$ under projection; they are distinct because a deck transformation fixing a simplex would fix its barycenter. Projection takes $D_i$ onto $D_{i-1}$, so $D_i$ has strictly more simplices than $D_{i-1}$. This strict increase is bounded by the fixed finite source count. We reach a last $V_n$ with no connected twofold cover. [F4, step 2.1, construct]

4.1 Apply [F5] to the last $V_n$ of step 3.1. It has the required finite compatible PL manifold triangulation and orientation by step 2.1 and has no connected twofold cover. Therefore each component of $\partial V_n$ is a PL two-sphere. In particular the endpoint argument uses no general Poincaré duality theorem, singular UCT splitting or unrestricted surface-classification hypothesis; their required finite calculations have been proved in [F5]. [F5, step 2.1, step 3.1]

5.1 The marked $F_n$ is a compact connected subsurface of one of these spheres. It is planar. Its fundamental group is normally generated by its boundary circles: join its finitely many complementary disk regions by disjoint polygonal arcs in the sphere; cutting along the corresponding arcs in $F_n$ gives a polygonal disk, and identifying its paired cut shores expresses each loop as a product of conjugates of boundary loops. The same conclusion follows by collapsing those cut arcs to a finite tree; the unfilled boundary circles supply the remaining generators. If $F_n$ is the whole sphere, its fundamental group is trivial, contradicting the boundary class of $f_n$ being outside $N_n$. Hence some boundary component of $F_n$ has class outside $N_n$. Move it slightly into $\operatorname{Int}F_n$ using [F3], without changing its free homotopy class, and call the resulting embedded polygonal circle $C$. By the PL sphere model of [F6] and the polygonal disk construction there, $C$ bounds a PL disk in $\partial V_n$. Push this disk into $V_n$ relative to $C$ by its boundary collar: in that collar use the graph of a small PL function on the disk, positive on its interior and zero on its boundary. The graph is embedded and proper and is PL after subdivision. We obtain a proper PL embedded disk $g_n:D\to V_n$ with boundary in $\operatorname{Int}F_n$ outside $N_n$. [F3, F6, step 4.1, construct]

6.1 Suppose a proper PL embedded disk $g_i:D\to V_i$ has been obtained with its boundary class outside $N_i$. Regard it in $M_i$ and perturb it into general position with its deck translate, using the following finite vertex-push construction. Cover its compact image and its translate by finitely many linear coordinate balls $U$ with $U\cap\tau_iU=\varnothing$, together with boundary half-balls. In each ball triangulate the compact disk pieces and the ambient ball, shift one disk vertex a sufficiently small distance, and extend the move by coning to the fixed boundary of its ambient vertex star. The cone construction gives an ambient PL homeomorphism; the disk therefore remains embedded. In $U$, a move of $g_i$ supported in $U$ leaves $\tau_i g_i$ fixed, since that translate changes only in $\tau_iU$. Choose the finitely many shifts in general affine position relative to the fixed translated simplices. Each excluded affine dependence is a proper determinant zero set, so the allowed small open parameter box contains a choice outside their finite union. Applying $\tau_i$ shows that the paired intersection in $\tau_iU$ is also in general position. Process the finite chart pairs in order, retaining the previously treated compact pieces; later moves can be taken sufficiently small to preserve the finitely many nonzero determinants and positive separations already obtained. First do the boundary in its two-dimensional charts, and extend its moves over a small collar by [F3]; then do the interiors relative to that collar. The resulting intersections avoid sheet vertices and pairs of sheet edges. An intersection across one sheet edge and a face of the other has two incident intersection segments, and a face-face intersection is a transverse segment. Thus the double-value set is a disjoint finite union of regular polygonal circles and proper arcs, with the transverse half-plane model at their endpoints. There are no triple values because $g_i$ is embedded and $p_i$ has two sheets. The boundary motions are homotopies in the open marked surface and preserve the class modulo $N_i$. This construction uses only PL coordinate charts and cone moves, without assuming a smoothing of $M_i$. [F3, F4, step 5.1, construct]

7.1 Apply [F7] in the orientable $V_{i-1}$ to $p_i g_i$ and the normal subgroup $N_{i-1}$. Its boundary lies in $\operatorname{Int}F_{i-1}$ by the marked-neighborhood construction. Its boundary class is outside $N_{i-1}$ because its further image in $F$ is outside $N$. Thus [F7] gives a properly embedded PL disk $g_{i-1}$ with boundary class outside $N_{i-1}$. Every boundary surgery can be kept inside the open marked surface, so its boundary still lies in $\operatorname{Int}F_{i-1}$. Repeat steps 6.1–7.1 down the finite tower. No embeddedness of an intermediate disk lift is assumed after the double-curve surgeries; at the end of each descent step [F7] gives a new embedded disk, which is the input to the next descent. [F7, step 6.1, construct]

8.1 We finish with a proper PL embedded disk $g_0$ in $V_0$. Its interior is disjoint from $\partial V_0$, hence from $\partial M$, while its boundary lies in $F_0\subset\operatorname{Int}F$; it is therefore a proper embedded disk in $M$. Its boundary class maps outside $N$ by definition of $N_0$. For the final particular case, take $F$ to be the indicated boundary component and $N$ the trivial subgroup. A nontrivial element of the kernel has a nullhomotopy disk, and the preceding argument gives an embedded disk whose boundary is still nontrivial in that component. This proves the theorem. Every tower has the finite bound proved in step 3.1, and all perturbation, surgery and matrix choices are finite. No countable or arbitrary-index choice hypothesis is introduced. [given, step 7.1] ∎

## Remarks

This theorem starts with an actual finite PL manifold triangulation. It supplies the orientable loop-theorem input for the PL product-recognition part of Hamilton's triangulation proof. It supplies no triangulation or smoothing of an arbitrary topological three-manifold.
```

## 7. lem-simply-connected-pl-end-has-spherical-compact-neighborhoods

Source: `items/lem-simply-connected-pl-end-has-spherical-compact-neighborhoods.md`; raw SHA256: `03d90a06f2541a7fe0c14623e3cdbfaf46a9d67251e7b4e670816a24a1c6ac64`.

```markdown
---
id: lem-simply-connected-pl-end-has-spherical-compact-neighborhoods
kind: lemma
title: "A simply connected PL end has compact cores with one spherical frontier"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds, lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema, lem-polygonal-schema-reduction-moves, thm-finite-simplicial-approximation-for-maps-of-pairs]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds, Quarterly Journal of Mathematics Oxford (2) 27 (1976), 63–70"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf"
      locator: "Lemma 2, printed pp.64–65, the compact-neighborhood conclusion attributed there to Wall; the compression proof is supplied locally here"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§3.1, Corollary 3.3, printed p.48, the innermost-preimage-circle reduction to a boundary loop theorem"
---

## Statement

Let $X$ be a connected noncompact orientable piecewise linear three-manifold with compact boundary and a given locally finite compatible manifold triangulation. Assume the following precise one-end and simple-connectivity conditions:

1. If $C$ is a compact connected codimension-zero PL submanifold containing $\partial X$, exactly one component of $X\setminus\operatorname{Int}_X C$ has noncompact closure.
2. For every compact subset $A\subset X$, there is a compact subset $C\supset A$ such that every loop in $X\setminus C$ is nullhomotopic in $X\setminus A$.

Then every compact subset $A\subset X$ lies in the relative interior of a compact connected codimension-zero PL submanifold $K\subset X$ whose boundary is the disjoint union of $\partial X$ and one PL two-sphere in $\operatorname{Int}X$. The construction is finite and introduces no choice hypothesis. No assertion that $K$ itself is a ball is made.

## Statement references

[[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]

## Facts & Assumptions

**Given:** $X,A$ and the stated triangulation and end conditions.

[F1] Finite subcomplexes have compact PL manifold neighborhoods, with explicit barycentric level-set construction and strong retraction ([[lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods]]).

[F2] Compact locally collared PL subpolyhedra have PL collars ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F3] A nullhomotopic nontrivial boundary loop in a finitely triangulated compact orientable PL three-manifold gives a properly embedded PL disk with essential boundary ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]]).

[F4] Finite polygonal disks admit prescribed PL boundary extensions and strip surgery; a finite triangulated orientable closed surface has a one-polygon schema reducible by the explicit finite cancellation and commutator-extraction moves ([[lem-finite-polygonal-disk-and-collar-surgery]], [[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]], [[lem-polygonal-schema-reduction-moves]]). Thus its genus and the effect of disk compression can be computed from the resulting finite disk-and-band model, without a general surface triangulation theorem.

[F5] Continuous maps of finite polyhedral pairs have finite simplicial approximations ([[thm-finite-simplicial-approximation-for-maps-of-pairs]]).

## Proof

**Given:** The data above.

1.1 We shall use compact PL neighborhoods in open parts of $X$. The construction in [F1] applies to a compact set inside such a part even though $X$ is not compact. Indeed, local finiteness and compactness give a finite union of closed simplex stars containing that set in its relative interior. Subdivide this finite union sufficiently finely that a further closed star neighborhood stays in the specified open part; compactness gives the required positive separation in any of the finitely many local realization metrics. For a resulting finite subcomplex $P$, make it full by one barycentric subdivision and use $r$, the sum of barycentric coordinates at its vertices, to form $\{r\ge1/2\}$. The support of $r$ lies in the finite union of stars incident to those vertices, so this neighborhood is compact. The translation charts and retraction formulas in [F1] verify its manifold structure and marked boundary traces without using any simplex outside that finite union. If connectedness is needed, connect the finitely many components of the chosen finite subcomplex by finitely many PL paths first. [given, F1, F5, construct]

2.1 Enlarge the given $A$ to a compact connected PL core $A_0$ containing both $A$ and $\partial X$ in its relative interior, using step 1.1. Apply end condition 2 to $A_0$, obtaining a compact $C\supset A_0$ outside which every loop contracts in $X\setminus A_0$. Choose a compact connected PL core $N_0$ containing $C$ in its relative interior and containing $\partial X$. Its frontier $S_0=\partial N_0\setminus\partial X$ is a finite disjoint union of closed orientable PL surfaces in $\operatorname{Int}X$, disjoint from $C$. Every loop of $S_0$ therefore contracts in $X\setminus A_0$. [given, step 1.1, construct]

3.1 Suppose a compact PL core $N$ containing $A_0$ has frontier $S$ disjoint from $A_0$, every loop of $S$ contracts in $X\setminus A_0$, and a component of $S$ has positive genus. We produce a compression disk outside $A_0$. Choose a nontrivial polygonal loop on that component using its finite disk-and-band model in [F4], and choose a nullhomotopy in $X\setminus A_0$. Its compact image and $S$ lie in a compact PL manifold neighborhood $Y\subset X\setminus A_0$ by step 1.1. Approximate the map piecewise linearly by [F5] and put it transverse to $S$: subdivide its finite triangles in the product charts of the two-sided $S$ and choose vertex heights avoiding zero; the zero-height segments form a finite collection of simple polygonal circles in the source interior, in addition to its boundary. If such an interior preimage circle gives a trivial loop in $S$, replace its entire inside map by a nullhomotopy in $S$ pushed to the side occupied by its outside collar. The target side collar exists by [F2] after cutting $Y$ along $S$. Moving the source circle slightly to that side removes it and all circles inside it, introducing none. Repeat finitely. An innermost remaining circle, allowing the source boundary itself, now bounds a disk map whose interior misses $S$ and whose boundary is nontrivial on $S$. It lies in one of the compact pieces obtained by cutting $Y$ along $S$. Apply [F3] to that piece and its marked copy of $S$. The resulting properly embedded PL disk $D$ has interior disjoint from $S$, boundary essential on $S$, and is disjoint from $A_0$. [F2, F3, F4, F5, step 1.1, step 2.1, construct]

4.1 Compress $S$ along $D$ and update $N$. The disk has a product neighborhood relative to its boundary: in a finite PL disk the local links are polygonal circles or arcs in the ambient link sphere or disk, and [F4]'s disk parametrizations flatten them. After cutting along the disk, [F2] supplies its two side collars, giving $D\times[-\epsilon,\epsilon]$ when they are glued back. Choose it disjoint from $A_0$. If $D$ lies outside $N$, attach this two-handle to $N$; if it lies inside, remove its open product neighborhood. Keep the component containing the connected $A_0$ and discard any others. In either case the new core still contains $A_0$ and has the compressed surface as its frontier, possibly with some components discarded. Every loop on the new frontier is still nullhomotopic in $X\setminus A_0$: perturb it off the centers of the finitely many new cap disks, then push each portion in a punctured cap to its boundary circle. It becomes a loop on the old frontier, and these pushes take place outside $A_0$. [F2, F4, step 3.1, construct]

5.1 The operation terminates after finitely many applications. Give a closed orientable surface of genus $g>0$ the complexity $2g-1$, and give a sphere complexity zero; sum over frontier components. These are finite integers by [F4]. A nonseparating compression decreases genus by one; a separating essential compression splits a genus $g$ component into genera $g_1,g_2\ge1$ with $g_1+g_2=g$. These assertions follow directly by cutting the disk-and-band polygon along the essential curve and capping its two new boundary circles; an essential separating curve has positive genus on both sides, since a genus-zero side with one boundary is a disk. Thus the complexity decreases by at least one, also in the case $g=1$ yielding a sphere. Discarding components cannot increase it. Repeating steps 3.1–4.1 produces a compact connected PL core $N$ containing $A_0$ and with frontier a finite union of PL two-spheres. [F4, step 4.1, construct]

6.1 There are finitely many complementary components: each has at least one of those finitely many frontier spheres in its boundary, and each sphere is incident to just one outside component. End condition 1 says precisely one component has noncompact closure. Adjoin the closures of all other components to $N$. Their union is compact, since there are finitely many and each closure is compact. The adjunction is along complete boundary components and preserves the PL manifold structure and connectedness. The resulting compact core still contains $A_0$, its frontier is still a finite union of spheres, and its exterior is connected with noncompact closure. There is at least one frontier sphere: otherwise this nonempty compact codimension-zero core would be both open and closed in the connected noncompact $X$. [given, step 5.1, construct]

7.1 If more than one frontier sphere remains, join two of them by a proper embedded polygonal arc in the connected exterior, with interior in the exterior interior. Such an arc exists: take a finite polygonal path, erase its closed subpaths, and perturb its finitely many remaining segments in three-dimensional charts to avoid self-intersections. It has a product neighborhood $D^2\times[0,1]$, with its end disks in those two spheres. Construct it from disjoint small coordinate balls at its successive vertices and thin boxes along its edges; the polygonal disk extension in [F4] matches their transverse disk coordinates successively along the interval, so no transition obstruction occurs. Attach this one-handle to the core. Its two end disks are removed from the frontier spheres and joined by a cylinder; the result is a single PL sphere, since each punctured sphere is a polygonal disk and their connecting cylinder gives the standard two-disk sphere model. The exterior stays connected: any finite path between two points may be perturbed off the arc, and its portions in the small tube may then be pushed to the tube frontier; this uses only avoidance of finitely many line segments in three-dimensional boxes. Repeat finitely until there is one frontier sphere. The final core is the required $K$, since all alterations were outside $A_0$ and hence preserve the original $A$ in its relative interior. The entire construction uses finitely many nullhomotopy, disk, path and coordinate choices, with the finite bound in step 5.1; no countable or arbitrary-index choice hypothesis is introduced. [given, F4, step 6.1, construct] ∎

## Remarks

The two explicit end conditions isolate the hypotheses used in the argument; in particular one end alone does not imply the nullhomotopy condition. The lemma works within a supplied PL structure and neither triangulates a topological manifold nor invokes the held topological prime-decomposition theorem.
```

## 8. lem-parametrized-pl-balls-absorb-standard-boundary-windows

Source: `items/lem-parametrized-pl-balls-absorb-standard-boundary-windows.md`; raw SHA256: `8f287bdcb187b461f35c9de205dbcdb79274fe95ef139b0ae831409cd2d83860`.

```markdown
---
id: lem-parametrized-pl-balls-absorb-standard-boundary-windows
kind: lemma
title: "Parametrized piecewise linear balls absorb standard boundary windows"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. W. Alexander, On the subdivision of 3-space by a polyhedron"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1085499/"
      locator: "PNAS 10 (1924), pp.6–8; fundamental lemma on p.6. The finite PL parameter constructions below supply the needed restricted ball-window lemma directly."
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Theorem 2.25 and Corollary 2.26, pp.24–26, for the locally collared to collared construction proved by the listed supplier."
---

## Statement

Here a parametrized PL ball means a finite polyhedron supplied with a piecewise linear homeomorphism, with piecewise linear inverse, to a convex polyhedral ball of the stated dimension. All subpolyhedra and maps in the following assertions are finite.

(a) Let $B_1,B_2$ be parametrized PL three-balls and $D_i\subset\partial B_i$ parametrized PL two-disks. Every PL homeomorphism $f:D_1\to D_2$ extends to a PL homeomorphism $B_1\to B_2$.

(b) The space obtained by gluing two parametrized PL three-balls along parametrized PL two-disks in their boundaries, by a specified PL homeomorphism, is a parametrized PL three-ball.

(c) Let $B$ and $A\subset B$ be parametrized PL three-balls, with $A\ne B$. Suppose $A\cap\partial B=\partial A\cap\partial B=D$ is a parametrized PL two-disk and $A\setminus D\subset\operatorname{Int}B$. Impose the following standard boundary-window condition at $C=\partial D$: every point of $C$ has a PL coordinate neighborhood in which
$$B=\{(u,v,w):w\ge0\},\qquad A=\{(u,v,w):w\ge0,\ v\le0\},\qquad D=\{w=0,\ v\le0\}.$$
The equalities are understood after intersection with the coordinate neighborhood, and $C$ corresponds to $v=w=0$. Then $Q=\overline{B\setminus A}$, with closure in $B$, is a parametrized PL three-ball.

No assertion about a sphere in an arbitrary PL three-manifold is assumed. In (c) the closure of the set difference is essential: $B\setminus\operatorname{Int}_{\mathbb R^3}A$ would retain the interior of the contact disk as an extra sheet. These statements introduce no choice hypothesis.

## Statement references

[[lem-finite-polygonal-disk-and-collar-surgery]]

[[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

## Facts & Assumptions

**Given:** The finite parametrized balls, marked disks, maps and, for (c), the displayed boundary-window charts.

[F1] A simple polygon has a polygonal disk on its bounded side; prescribed PL boundary maps extend over polygonal disks ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Finite convex cell decompositions and finite PL embedded polyhedra admit compatible triangulations and subdivisions ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F3] A compact locally PL collared subpolyhedron has a PL collar, including at boundary vertices of the subpolyhedron ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

## Proof

**Given:** The data in the statement. A PL disk or ball below is always accompanied by the finite PL parameter construction being used.

1.1 We first establish the boundary-disk fact needed for (a): the closure of the complement of a parametrized PL disk $D$ in the boundary $S$ of a parametrized three-ball is another parametrized PL disk. Use the supplied ball parameter to replace $S$ by the boundary of a tetrahedron. This replacement is legitimate for any convex polyhedral ball model: triangulate its boundary and the tetrahedral boundary, choose an interior point in each, and cone a boundary parameter when available; alternatively a direct radial face subdivision identifies the two convex boundaries, since each ray from an interior point has one endpoint on each boundary. To verify that last identification is PL, subdivide both radial face decompositions into their common polyhedral cones, take their sections, and map corresponding sections by face-compatible coning; no assertion that the radial formula itself is affine is needed. Pick a point off $D$. A finite succession of small PL disk-chart point pushes on $S$ sends it to a tetrahedral vertex $q$: choose a polygonal path to $q$, cover it by finitely many small polygonal charts, and in each chart triangulate a convex polygon as a fan from the current point and move the fan center to the next nearby point, fixing the polygon boundary. These affine triangle maps give the required point push and inverse. After this boundary homeomorphism, $q\notin D$. Choose a small triangular section $\Gamma$ of the cone at $q$ whose closed cone misses $D$. The closure $K$ of the rest of the tetrahedral boundary consists of the opposite face $T$ and the three quadrilateral strips between $\partial T$ and $\Gamma$. It has an explicit PL parameter as a larger planar triangle: send $T$ to a smaller concentric triangle and the three strips to the corresponding trapezoids of the surrounding planar triangular annulus. On every strip prescribe its four boundary sides linearly after subdivision and extend by [F1]. The maps agree on shared sides. Thus $K$ is a planar polygonal disk containing $D$ away from its boundary. [given, F1, F2, construct]

2.1 In this planar parameter, $\partial D$ is a simple polygon. Its bounded side is precisely $D$. Indeed the interior of the embedded disk is open on the local interior side of its polygonal boundary: at an interior simplex this follows from its planar triangle star, and at boundary simplices from the half-disk fan. It is also closed relative to the polygon complement, since $D$ is compact. Its connected interior therefore fills one component of that complement; it is bounded and hence fills the bounded component by [F1]. The region between $D$ and the outer triangle is a parametrized PL annulus. Here is an explicit disk reduction: choose an embedded polygonal arc joining the two boundaries, with interior disjoint from both, by a finite chain of triangles of a compatible triangulation; delete loops from the finite edge path and perturb it off boundary edges. A narrow polygonal strip along this arc joins the two boundaries. The closure of the remaining region is a polygonal disk: its boundary traces the outer boundary, one strip shore, the inner boundary in reverse, and the other shore, with no repeated vertices except its closing endpoint. [F1] parametrizes that disk and extends any prescribed boundary map respecting this cyclic order. Match it to a rectangle cut open along one spanning strip in a standard polygonal annulus, then restore the strip by its disk boundary-extension map. Thus the annulus has a PL parameter with its two boundary circles prescribed. Glue its inner boundary to the disk $q*\Gamma$. A polygonal annulus glued to a polygonal disk along its inner boundary is a polygonal disk: in the standard annulus parameter fill its inner polygon using [F1]. This gives a finite PL parameter of $\overline{S\setminus D}$. This argument also proves extension of any prescribed boundary map between the complementary disks, by applying [F1] in their disk parameters. [F1, F2, step 1.1, construct]

3.1 For (a), extend $f|_{\partial D_1}$ over the complementary disks furnished by step 2.1. Paste this extension with $f$ to obtain a PL homeomorphism $\partial B_1\to\partial B_2$. Transfer it by the supplied ball parameters to the boundaries of convex polyhedral balls. Subdivide until that boundary map is affine on every boundary triangle and cone these triangles from an interior point in each ball. The affine maps of corresponding tetrahedra match on faces and are bijective, since the cones cover each ball with disjoint interiors. They give the extension and a PL inverse. This proves (a). For (b), apply (a) to send the two marked balls to $[-1,0]\times[-1,1]^2$ and $[0,1]\times[-1,1]^2$, taking their attaching disks to the common square and their specified attaching map to its identity. The resulting quotient is the rectangular box $[-1,1]\times[-1,1]^2$, with the finite compatible PL parameter obtained by gluing these maps. [F1, F2, step 2.1, construct]

3.2 Now assume (c), and put $F=\overline{\partial A\setminus D}$. It is a parametrized disk by step 2.1. The space $Q=\overline{B\setminus A}$ is locally a PL three-manifold with boundary. At a point of $F\setminus C$, take a compatible finite triangulation for the ambient ball chart and the supplied parameter of $A$. Its ambient link is a standard PL two-sphere and its link on the $A$ side is a parametrized disk: this follows by subdividing the local PL ball parameter until it is linear on the incident simplices. The complementary link disk is supplied by steps 1.1–2.1. Parametrize those two disks compatibly on their common circle, using [F1], to identify the link pair with two standard hemispherical disks. Coning this link identification gives the local half-ball chart on the $Q$ side and a product collar of $F$. Elsewhere away from $C$ the ordinary interior charts of $B\setminus A$ or boundary charts of $B$ apply. Along $C$ the given window chart identifies $Q$ with the quadrant $v\ge0,w\ge0$; subdivision into finitely many angular sectors flattens that quadrant to a half-space. In these same charts $F$ is the face $v=0,w\ge0$. It is locally PL collared in $Q$, including along $\partial F=C$, where its local collar is the quadrant product. Consequently [F3] gives $c:F\times[0,1]\to Q$ with bottom $F$ and half-open image a neighborhood of $F$. Its side $c(C\times[0,1])$ lies in $\partial B$. To check this last assertion, the local product has boundary $C\times[0,1)$ away from the bottom, while the boundary of $Q$ off $F$ is $\partial B\setminus D$; PL local charts distinguish boundary points by their ball or half-ball links. The top side follows by continuity. Thus $N=A\cup c(F\times[0,1])$ is a neighborhood of $A$ in $B$ whose relative frontier is the outer disk $c(F\times\{1\})$. [given, F2, F3, step 2.1, construct]

4.1 Give $A$ a PL parameter as a convex pyramid $P$ with flat base $D_0$, carrying $D$ to that base, by (a). Choose a point $p$ in the relative interior of $D_0$ as follows. The composite of this parameter's inverse with the supplied parameter of $B$ is PL; after a finite common subdivision its restriction near the relative interior of some base triangle lies in a single incident three-simplex and is affine there. Its image base triangle can also be taken inside one flat boundary face of the convex model of $B$. Choose $p$ inside that base triangle, avoiding its edges. For sufficiently small $\epsilon>0$, the homothetic pyramid $\epsilon P=p+\epsilon(P-p)$ therefore maps affinely into that one boundary three-simplex of $B$. The radial shells between $P$ and $2P=p+2(P-p)$ are finite convex prisms over the free boundary faces of $P$, including their boundary faces on the base. There is a PL homeomorphism $N\to2P$ agreeing with the chosen parameter on $A=P$: on $F\times[0,1]$ map the bottom to the free face of $P$ and the top to its doubled face, and fill the corresponding face prisms compatibly. More explicitly, first prescribe all vertex and boundary face maps, then extend over each convex cell by coning its already parametrized boundary to an interior point. Both sides are convex cells with corresponding faces, so the resulting map is bijective with PL inverse. This is a finite prism construction using [F2], not the generally non-PL radial interpolation formula. [F2, step 3.1, step 3.2, construct]

5.1 Construct a PL self-homeomorphism of $2P$ taking $P$ to $\epsilon P$ and fixing its outer free boundary. On $P$ use the affine homothety of ratio $\epsilon$ about $p$. On each shell prism between a free face of $P$ and its doubled face use the corresponding prism between the $\epsilon$-scaled face and the doubled face. Their face structures agree; the finite face-coning construction of step 4.1 extends the prescribed bottom and fixed top maps compatibly. On the base this map carries the base annulus to the corresponding base annulus, and is allowed to move base points. It fixes the relative frontier of $N$ in $B$, so transfer it to $N$ and extend by the identity on $B\setminus\operatorname{Int}_B N$. We obtain a PL homeomorphism $h:B\to B$ taking $A$ to a ball $A_\epsilon$ which, in the supplied convex parameter of $B$, is an affine pyramid with its base in the interior of a flat boundary face and its remaining points inside $B$. In particular $h(Q)=\overline{B\setminus A_\epsilon}$. [F2, step 4.1, construct]

6.1 The complement of this small affine pyramid has a direct PL parameter as $B$. In its flat boundary chart choose an inward transverse direction along the segment from an interior base point to the pyramid apex. In the resulting oblique coordinates the pyramid is $\{(x,z):x\in D_\epsilon,\ 0\le z\le\phi(x)\}$, where $\phi$ is the nonnegative piecewise affine pyramid roof, zero on $\partial D_\epsilon$. Choose a larger convex polygon $R$ in that flat boundary face, extend $\phi$ by zero on $R\setminus D_\epsilon$, and choose $H>\max\phi$ such that $R\times[0,H]$ lies in the boundary chart in $B$. These choices can be made by first taking $\epsilon$ sufficiently small: the affine pyramid shrinks to the interior point of a boundary face, where $B$ contains a fixed oblique half-prism. Subdivide $R$ until $\phi$ is affine on each cell. The cells $\{(x,z):x\in\sigma,\ \phi(x)\le z\le H\}$ are convex prisms with the same face incidences as $\sigma\times[0,H]$. Map their graph bottoms to $z=0$ by the identity in $x$, their tops identically, and their side faces compatibly by the finite face-coning construction. Where $\phi=0$ choose the identity throughout. The resulting PL homeomorphism straightens the graph prism onto $R\times[0,H]$, fixes its top and outer sides, and extends by the identity outside that prism. Its domain is exactly $\overline{B\setminus A_\epsilon}$: above an interior base point only the roof and points above it survive the closure, while at the edge of the base $\phi=0$. It therefore gives a finite PL homeomorphism $\overline{B\setminus A_\epsilon}\to B$. Composing with $h|_Q$ proves (c). Only finitely many subdivisions, disk cuts, chart points and convex cell extensions were used, so none of (a)–(c) requires countable or arbitrary-index choice. [given, F2, step 5.1, construct] ∎
```

## 9. lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products

Source: `items/lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products.md`; raw SHA256: `17d80a84c022a5ab3eab314a2f85247350ce3c751fd47a22c03704017b6c6d97`.

```markdown
---
id: lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products
kind: lemma
title: "Finite polyhedral slabs without vertex levels have piecewise linear product parameters"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
---

## Statement

Let $\mathcal K$ be a finite convex polyhedral cell complex with compact cells (convex polytopes) in $\mathbb R^m$, let $P$ be its underlying polyhedron, and let $\ell:\mathbb R^m\to\mathbb R$ be affine. Suppose $a<b$ and no vertex of $\mathcal K$ has height in $[a,b]$. Set $P_t=P\cap\ell^{-1}(t)$ and $P_{[a,b]}=P\cap\ell^{-1}([a,b])$. Then there is a piecewise linear homeomorphism
$$H:P_a\times[a,b]\longrightarrow P_{[a,b]}$$
with piecewise linear inverse, $H(x,a)=x$ and $\ell(H(x,t))=t$. For every cell $C$ of $\mathcal K$ meeting the slab it maps $(C\cap P_a)\times[a,b]$ onto $C\cap P_{[a,b]}$. In particular any union of cells and all their intersections receive compatible product parameters. The construction is finite and introduces no choice hypothesis. If $P_a$ is empty, both sides are empty.

## Facts & Assumptions

**Given:** The finite convex cell complex, affine height and interval avoiding every vertex height.

[F1] Finite convex cell complexes admit compatible triangulations; an already triangulated cell boundary can be extended by coning to an interior point ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The stated data.

1.1 If a cell $C$ meets some level in $[a,b]$, it has vertices strictly below $a$ and strictly above $b$. Indeed the minimum and maximum of the affine function on the convex polytope occur at vertices; a cell meeting the slab cannot have either extremum inside it, by hypothesis. The same holds for every face that meets the slab. Its section $C_t=C\cap\ell^{-1}(t)$ is consequently nonempty for every $t\in[a,b]$ and meets the relative interior of $C$: take an interior point of $C$, and join it to points near the minimum and maximum to obtain interior points below and above $t$, then intersect their segment with the level. In particular no new face begins or ends while the section level traverses this interval. [given, construct]

2.1 More precisely, the faces of $C_t$ correspond to the proper faces $G$ of $C$ meeting the slab, together with $C$ itself: intersect each such face with the level and retain the empty face separately. Every face of the section is of this form because an exposing affine functional on its hyperplane extends to the ambient affine span and its maximizing face on the section is cut out by a collection of the supporting facet equations of $C$. The correspondence is injective: $G_t$ meets the relative interior of $G$ by step 1.1, so its smallest containing face of $C$ is $G$. It preserves inclusions and is independent of $t$. The faces of the truncated cell $\widehat C=C\cap\ell^{-1}([a,b])$ are its bottom and top sections and the truncated faces $\widehat G$ for the same $G$. This follows by adding the two slab inequalities to the facet inequalities of $C$; any proper face not contained in an end hyperplane is obtained from original facet equalities. A face contained in an end hyperplane is a face of that end section. Thus $\widehat C$ has exactly the face incidences of the product prism $C_a\times[a,b]$, with end faces distinguished. These incidences agree on intersections of cells of $\mathcal K$. [step 1.1, construct]

3.1 Construct the maps by induction over these common face incidences. On each bottom face use the identity. On the top faces choose compatible PL maps from their corresponding bottom faces as follows: match vertices using the face correspondence, and extend over each higher-dimensional face by coning its already defined boundary map from an interior point to an interior point. Both faces are convex, so the cones cover them with disjoint relative interiors, proving bijectivity and a PL inverse. For every remaining, vertical face pair choose interior points at height $(a+b)/2$ on both sides; such points exist by step 1.1. The height on the source prism is its second coordinate. Once the boundary map is constructed, triangulate the boundary compatibly and extend over that face by coning between these two interior points. The same convex-cone argument proves that this is a PL homeomorphism on the face. It preserves height: its boundary map already does, its two cone points have the same height, and height is affine on each cone simplex. This induction includes the full truncated cells. Shared faces have only one previously prescribed map, so all maps agree on intersections. Only finitely many cells occur. [F1, step 2.1, construct]

4.1 Paste the maps to obtain $H$. A point in the relative interior of a source prism cell maps to the relative interior of its corresponding target cell, so the pasted map is a bijection. The cellwise inverses agree on intersections and paste to its inverse. Both are PL on finite compatible subdivisions furnished by [F1], hence continuous. The bottom restriction and height identity follow from step 3.1. A union of original cells is a union of the corresponding prism cells, giving the compatibility assertion. If $P_a$ is empty there is no cell meeting the slab by step 1.1, so both sides are empty. All selections involved finite sets of cells and interior points, and require no countable or arbitrary-index choice. [given, F1, step 3.1, construct] ∎
```

## 10. lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings

Source: `items/lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings.md`; raw SHA256: `c1c031d7d7c68567032e011ca13fd866786afa3e795a7955b9228057466f1cb6`.

```markdown
---
id: lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings
kind: lemma
title: "Regular polyhedral surface cones have height-preserving piecewise linear straightenings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
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
```

## 11. lem-finite-pl-level-collars-give-global-band-products

Source: `items/lem-finite-pl-level-collars-give-global-band-products.md`; raw SHA256: `02bedc4d83eb79ac1272922cff9f6060a5fbdee0d3ab5555c2e8c389d86e85be`.

```markdown
---
id: lem-finite-pl-level-collars-give-global-band-products
kind: lemma
title: "Finite piecewise linear level collars give global band products"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-altered
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "Printed pp.57–59, 4.21–4.24; full extending-collars, collar-leveling, and finite interval-pasting proofs. The precise height-band formulation below is proved directly."
---

## Statement

Let $P$ be a compact finite polyhedron and $h:P\to[a,b]$ a surjective PL function, where $a<b$. Write $X_t=h^{-1}(t)$, $P_{\ge t}=h^{-1}([t,b])$ and $P_{\le t}=h^{-1}([a,t])$. Suppose, for every $t<b$, $X_t$ is locally PL collared in $P_{\ge t}$ and, for every $t>a$, it is locally PL collared in $P_{\le t}$. Local collars here have open half-product images, including at boundary points of the fiber. Then there is a PL homeomorphism with PL inverse
$$H:X_a\times[a,b]\longrightarrow P,\qquad H(x,a)=x,\qquad h(H(x,t))=t.$$
The construction is finite and introduces no choice hypothesis. In particular this conclusion holds when each point has a local PL height-product chart, with the appropriate one-sided chart at the end levels.

## Facts & Assumptions

**Given:** The compact finite polyhedron, surjective PL height and the two-sided or endpoint one-sided level-collar hypotheses.

[F1] A compact locally PL collared subpolyhedron has a PL collar ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F2] Finite PL maps and marked subpolyhedra admit compatible finite subdivisions, and finite convex cell complexes admit compatible finite triangulations ([[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]], [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** The stated data.

1.1 First consider a compact finite polyhedron $Y$ with a PL function $q:Y\to[0,M]$, zero set $X$, and a PL collar $c:X\times[0,1]\to Y$ of $X$. Its image contains an open neighborhood $U$ of $X$. The compact complement $Y\setminus U$ has strictly positive minimum $q$ when nonempty. Thus, for sufficiently small positive $\eta$, the whole set $q^{-1}([0,\eta])$ lies in the collar image. On the collar domain let $r(x,s)=s$ and $k(x,s)=q(c(x,s))$. Both are PL, nonnegative, and vanish precisely on $X\times\{0\}$: injectivity of $c$ precludes any other collar point from mapping to the zero set. Choose a finite triangulation of the domain on which $c,r,k$ are linear, with the bottom a subcomplex, by [F2]. Corresponding source and image simplices of $c$ consequently have exactly the same zero vertices, all their other vertices having strictly positive $r$ and $q$ values. Choose $0<\delta<\eta$ smaller than all these finitely many positive values. [given, F2, construct]

2.1 Cut each source simplex by $r\le\delta$ and its corresponding image simplex by $q\le\delta$. Only simplices with at least one zero vertex occur. On a mixed simplex the truncated polytope has its original zero face, its top section at $\delta$, and the truncated faces of the original simplex. Its vertices are the zero vertices and the intersections of zero-positive edges with the top section. In particular its face incidences depend only on which original vertices are zero, not on the strictly positive values at the remaining vertices. This assertion follows directly from the simplex inequalities $\lambda_i\ge0$, $\sum\lambda_i=1$ and the cut $\sum q_i\lambda_i\le\delta$: the cut meets exactly the edges from zero vertices to positive vertices and no edge joining positive vertices. The corresponding truncated source and target cells therefore have identical face posets, compatible on common faces. Their zero faces are identified pointwise by $c(x,0)=x$. [step 1.1, construct]

3.1 Construct compatible PL homeomorphisms of these truncated cells, preserving $r$ as target height $q$. On zero faces use the identity. On top faces, match the corresponding vertices and extend inductively over their faces by coning from relative interior points; all these points have height $\delta$, so these maps preserve height. Any remaining face spans heights zero to $\delta$ and has a relative interior point at height $\delta/2$ on both sides: its section at that level meets its relative interior by convexity. Having already defined its boundary map, triangulate the boundary compatibly and cone that map between those two points. Convexity makes each extension bijective with PL inverse. Height is preserved on every cone simplex because it is affine, agrees on the boundary, and has equal values at the two cone points. Induction over faces gives a PL homeomorphism from the entire source truncation $X\times[0,\delta]$ onto the target truncation $q^{-1}([0,\delta])$, fixed on the bottom and with $q$ equal to the parameter. The target equality uses the neighborhood inclusion from step 1.1. Thus every collar satisfying the stated positivity has an exact short height-product replacement, rather than only an abstract collar parameter. [F2, step 2.1, construct]

4.1 Apply this construction to each $t<b$, with $Y=P_{\ge t}$ and $q=h-t$. The fiber $X_t$ is a compact subpolyhedron by [F2], and [F1] supplies its collar in $Y$. Hence a whole short upper slab has a height-product parameter based on $X_t$. For $t>a$ apply it to $Y=P_{\le t}$ and $q=t-h$ for a lower slab. Paste the two parameters at their common identity bottom fiber, reversing the lower parameter. This gives a PL height-product parameter $\Phi_t:X_t\times J_t\to h^{-1}(J_t)$ on a relative open interval $J_t$ about $t$ in $[a,b]$, after restricting the closed short parameters slightly if necessary. At endpoints use just the one-sided parameter. All fibers are nonempty by surjectivity. [given, F1, F2, step 3.1, construct]

5.1 The intervals $J_t$ cover $[a,b]$. Compactness gives a finite subcover and a finite subdivision $a=t_0<t_1<\cdots<t_N=b$ such that each closed interval $[t_{i-1},t_i]$ is contained in one $J_{s_i}$. For completeness, such a subdivision can be selected without an infinite sequence of choices: a finite open interval cover of a compact real interval has a positive Lebesgue number, as follows by taking, at each point, an interval contained in one cover member, then a finite subcover by intervals of half that radius and the minimum of their finitely many half-radii. Any sufficiently fine equal subdivision works. Restrict $\Phi_{s_i}$ to the corresponding closed subinterval. Its inverse at height $t_{i-1}$ identifies that initial fiber with $X_{s_i}$. Reparametrize this restricted product by that identification to obtain $\Psi_i:X_{t_{i-1}}\times[t_{i-1},t_i]\to h^{-1}([t_{i-1},t_i])$ with $\Psi_i(y,t_{i-1})=y$. [step 4.1, construct]

6.1 Define $H$ inductively. On the first band put $H(x,t)=\Psi_1(x,t)$. On the $i$th band put $H(x,t)=\Psi_i(H(x,t_{i-1}),t)$. These formulas agree at the joining fibers, are PL on finite compatible subdivisions, and preserve height. On every fiber the map is a composition of PL homeomorphisms; the inverse formulas likewise paste on the bands. Therefore $H$ is a PL homeomorphism onto $P$ with the claimed initial restriction. A local height-product chart supplies exactly the local collar charts used in step 4.1. Every cover, subdivision, cell extension and selection in this proof is finite; no countable or arbitrary-index choice was used. [given, F2, step 5.1, construct] ∎
```

## 12. lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls

Source: `items/lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls.md`; raw SHA256: `c7c0a24534d3f5e3912ecd5d24618a18d5ba2adfc3e2978c5d0e97216015e844`.

```markdown
---
id: lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls
kind: lemma
title: "Polyhedral two-spheres without height saddles bound parametrized piecewise linear balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-parametrized-pl-balls-absorb-standard-boundary-windows, lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings, lem-finite-pl-level-collars-give-global-band-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. W. Alexander, On the subdivision of 3-space by a polyhedron"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1085499/"
      locator: "PNAS 10 (1924), pp.6–8, especially the zero-critical-loop base case on p.7. The finite PL parameter construction below replaces the source's potential-coordinate construction."
---

## Statement

Let $S\subset\mathbb R^3$ be a finite linearly embedded triangulated two-sphere and $h$ an affine height function taking distinct values on its vertices. Assume there is exactly one minimum vertex $v_-$, exactly one maximum vertex $v_+$, and every other vertex has the following regular height link: its small centered polyhedral link circle meets the horizontal plane through that vertex in exactly two crossing points, with its positive and negative parts each one open arc. Then $S$ is the boundary of a compact finite polyhedron $Q\subset\mathbb R^3$ admitting a finite PL homeomorphism, with PL inverse, to a convex three-ball. The set $Q$ is the closure of the bounded side of $S$, and the other side is connected and unbounded. No choice hypothesis or general three-dimensional Schoenflies theorem is assumed.

## Facts & Assumptions

**Given:** The finite embedded sphere and the stated generic height and regular-link conditions.

[F1] Simple polygons bound parametrized polygonal disks, prescribed boundary maps extend over these disks, and polygonal arcs admit finite disk-and-strip neighborhoods ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Finite convex cell complexes and finite PL marked subpolyhedra admit compatible triangulations and subdivisions ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F3] Parametrized PL three-balls glued along parametrized boundary two-disks form a parametrized PL three-ball ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

[F4] A regular polyhedral surface cone has a local height-preserving PL straightening ([[lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings]]).

[F5] Compact finite PL height bands with locally collared level fibers on both sides have global height-preserving PL product parameters ([[lem-finite-pl-level-collars-give-global-band-products]]).

## Proof

**Given:** The stated embedded sphere and height. Apply an affine coordinate change so $h$ is the last coordinate.

1.1 We will use the following finite two-dimensional link construction. A simple polygonal circle $C$ in a standard PL two-sphere bounds two parametrized PL disks. To verify it, replace the sphere by a tetrahedral boundary using its supplied standard parameter and choose a tetrahedral vertex $q$ off $C$. If necessary move a point off $C$ to that vertex by finitely many small polygonal chart point pushes, each obtained by moving the center of a triangle fan in a convex polygon and fixing its boundary. Truncate a sufficiently small cone at $q$ disjoint from $C$. The remainder of the tetrahedral boundary has a finite planar disk parameter: its opposite face maps to a smaller concentric planar triangle, and its three quadrilateral strips to the surrounding triangular annulus, by the disk boundary extension in [F1]. The image of $C$ is a simple polygon inside this triangle. Its inner disk is supplied by [F1]. The region between it and the outer triangle is a PL annulus: cut along a thin strip about a polygonal joining arc, parametrize the resulting polygonal disk by [F1], then restore the strip. Filling the annulus's outer end with the removed cone at $q$ gives the second disk. The same disk boundary-extension result makes their common circle parameters agree. Consequently a cone on either link disk is a half-ball, and coning the two compatible disk parameters gives the standard local pair of a plane and its two half-spaces. This construction applies to the link circle at every point of $S$, including points made vertices by subdivision. [given, F1, F2, construct]

2.1 Construct a compact finite polyhedral region with boundary $S$ without assuming a three-dimensional separation theorem. Choose a point $p$ off the finitely many triangle planes and cone each triangle $\tau$ of $S$ to $p$, obtaining finitely many nondegenerate tetrahedra. Regard their sum with coefficients in $\mathbb F_2$. Its boundary is exactly the triangle sum of $S$: the cone on each sphere edge occurs twice and cancels. Subdivide the union of these tetrahedra by their finitely many face planes and triangulate compatibly by [F2]. Give each full-dimensional cell the parity of the number of tetrahedra containing its interior, and let $Q$ be the union of the closures of odd cells. It is a compact finite polyhedron. At a generic point of a subdivision face not in $S$, the two adjacent parity coefficients agree by the preceding boundary cancellation; at a face in $S$ they differ by one. Thus parity extends as a locally constant function on $\mathbb R^3\setminus S$ and changes across $S$. To justify extension at subdivision edges or vertices off $S$, join nearby full-dimensional cells by a small polygonal path missing the codimension-two skeleton; each crossed face is outside $S$ and preserves parity. At a point of $S$, use the two half-ball charts of step 1.1; on each side the same small-path argument makes parity constant, and a transverse face crossing shows the two values differ. Therefore $\partial Q=S$ and $Q$ has a local PL half-ball chart along $S$ and an ordinary interior chart elsewhere. [F2, step 1.1, construct]

3.1 Both sides of $S$ are connected. The local $Q$ side along $S$ belongs to a single component of $\operatorname{Int}Q$: each surface chart has a connected half-ball side, and paths in the connected sphere propagate that component from one chart to the next. Any additional component would have a nonempty boundary in $S$, since an open nonempty bounded component cannot be closed in $\mathbb R^3$; a boundary point would contradict the chart description just given. The same reasoning applies to $\mathbb R^3\setminus Q$: all its local sides along $S$ belong to one component, and any component has a boundary point in $S$ unless it is both open and closed in $\mathbb R^3$. Hence it is connected; it contains the complement of a large box and is unbounded. These arguments use only elementary polygonal path connectedness of open subsets and connectedness of Euclidean space; a nonempty bounded open component has a boundary point by intersecting a segment from one of its points to a point outside its closure. Thus $Q$ is precisely the closure of the bounded side. Moreover $h$ achieves its minimum and maximum on $Q$ at $S$: an interior extremum of a nonconstant affine coordinate is impossible. They are consequently $h(v_-)$ and $h(v_+)$. [given, step 2.1, construct]

4.1 At the minimum vertex $v_-$, the whole surface link lies strictly above its horizontal plane. The link disk on the $Q$ side supplied by step 1.1 also lies strictly above that plane. Indeed the complementary link component contains every lower direction, which cannot belong to $Q$ by step 3.1; hence the $Q$ link is the other disk, disjoint from the closed lower hemisphere. Choose $\alpha>h(v_-)$ sufficiently close to the minimum that $Q\cap\{h\le\alpha\}$ lies within the conical star of this vertex. Such a choice exists by compactness of the complement of any smaller vertex neighborhood, whose minimum height is strictly larger. In that star the set is exactly the cone from $v_-$ to its planar section $D_-=Q\cap\{h=\alpha\}$. This section is a parametrized polygonal disk: radial projection of the upper link disk to the section plane is a homeomorphism, and each cone face cuts it in a finite straight segment. Its boundary is a simple polygon, its interior is its bounded side, and [F1] supplies a finite PL disk parameter. Coning that parameter from $v_-$ gives a PL parameter of the cap as a three-ball. Apply the reversed-height argument at $v_+$ to obtain $\beta< h(v_+)$ with a parametrized upper cap and disk section $D_+$. Take the caps small enough that $\alpha<\beta$ and neither end level contains a sphere vertex. [F1, F2, step 1.1, step 3.1, construct]

5.1 Every point of the middle band $P=Q\cap\{\alpha\le h\le\beta\}$ has a local PL height-product chart, with a one-sided chart at the two end levels. At an interior point of $Q$ this is the ordinary linear coordinate chart. At a sphere vertex it follows from the assumed regular link and [F4], using the $Q$ half-space side identified in step 2.1. At an interior point of a sphere triangle its plane is not horizontal because its vertices have distinct heights, so the regular cone condition holds there as well. At an interior point of a sphere edge that edge has nonzero height slope, again by distinct vertex heights; the two incident face half-planes give a link circle with exactly two horizontal crossings, so [F4] applies after subdividing at that point. These charts give precisely the local one-sided fiber collars required by [F5]. Thus [F5] gives a finite PL height-preserving homeomorphism $D_-\times[\alpha,\beta]\to P$, fixed on the bottom. In particular the whole middle band, not just the individual vertex-free slabs, has a verified finite product parameter. [given, F4, F5, step 2.1, step 4.1, construct]

6.1 The product of the disk parameter of $D_-$ with the interval identifies $P$ with a convex polygon times an interval, a convex three-ball; compatible prism triangulations in [F2] make this a finite PL parameter. The lower cap meets $P$ in exactly its entire disk $D_-$, and the upper cap meets it in exactly $D_+$. Both disks lie in the respective boundaries, and the cap interiors are disjoint from the middle band and from one another by their height ranges. Glue the lower cap to $P$ by [F3], obtaining a parametrized three-ball; the remaining upper disk is still a boundary disk, since locally it is the untouched top face of the middle product. Glue the upper cap by [F3] once more. The resulting parametrized ball is exactly $Q$. Its boundary is the original $S$ by step 2.1. All coning, plane arrangements, collar-leveling operations, interval subdivisions and gluings were finite. Thus this no-saddle ball parameter requires neither choice nor an already known general three-dimensional Schoenflies theorem. [given, F2, F3, step 2.1, step 5.1, construct] ∎
```

## 13. lem-three-disk-pl-severing-reassembles-parametrized-balls

Source: `items/lem-three-disk-pl-severing-reassembles-parametrized-balls.md`; raw SHA256: `3598d2cce64f90477df1aefda52af1d82d95c9f5a01207b5d7414f95bc0250df`.

```markdown
---
id: lem-three-disk-pl-severing-reassembles-parametrized-balls
kind: lemma
title: "Three-disk piecewise linear severing reassembles parametrized balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-parametrized-pl-balls-absorb-standard-boundary-windows]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. W. Alexander, On the subdivision of 3-space by a polyhedron"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1085499/"
      locator: "PNAS 10 (1924), p.7, fundamental combinatorial lemma; explicit finite PL proof and boundary-window verification supplied below."
---

## Statement

Let $E_1,E_2,D\subset\mathbb R^3$ be three finite parametrized embedded PL two-disks with common boundary $C$, any two intersecting exactly in $C$. Suppose $E_i\cup D$ is the boundary of a supplied parametrized embedded PL three-ball $B_i$, for $i=1,2$. Then $E_1\cup E_2$ bounds a parametrized embedded PL three-ball $B$. More precisely, exactly one of the following three configurations holds:

- $B_1\cap B_2=D$, and $B=B_1\cup B_2$;
- $B_1\subset B_2$, and $B=\overline{B_2\setminus B_1}$;
- $B_2\subset B_1$, and $B=\overline{B_1\setminus B_2}$.

All parameters and identifications can be made finite PL. No choice hypothesis or general three-dimensional Schoenflies theorem is required.

## Facts & Assumptions

**Given:** The three finite embedded parametrized disks and two parametrized balls with the stated intersections and boundaries.

[F1] Polygonal Jordan disks, their prescribed-boundary PL extensions, and finite disk-and-strip neighborhoods of arcs ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Compatible finite triangulations and subdivisions for convex cells and marked PL subpolyhedra ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F3] Marked PL balls glue along boundary disks, and a parametrized ball with a standard boundary window can be removed from another parametrized ball leaving a parametrized ball ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

## Proof

**Given:** The stated disks and balls.

1.1 Their local configuration along $C$ is a standard three-page book. Here is the finite link verification, including at vertices of $C$. Take compatible ambient and disk triangulations by [F2], and a small polyhedral link sphere at a point of $C$. Each disk meets it in a polygonal arc, since its intrinsic parameter is a disk parameter. Their three arcs have the same two endpoints, the directions of $C$, and have disjoint interiors because the disks meet only in $C$. The resulting theta graph cuts the link sphere into three parametrized polygonal disks. To verify the disk assertion without a sphere theorem, move a point off the graph to a vertex of a tetrahedral sphere by finite polygonal chart point pushes, truncate a small cone disjoint from the graph, and flatten the remainder to a planar triangle by mapping its opposite face and three strips to concentric triangular regions. Each simple cycle in the theta graph then has a planar Jordan disk by [F1]. First apply this to two arcs; the third arc lies in one of the resulting disks and splits it into two by the same polygonal Jordan argument. The other disk is the annulus to the outer triangle capped by the removed cone; a thin joining strip cuts that annulus into a polygonal disk, giving its PL parameter. Thus the three complementary link regions are parametrized disks. Map the three graph arcs to the three meridians of a standard three-page book, extend over those three disks by [F1], and cone the resulting link homeomorphism. This gives the claimed local PL book chart. At an interior point of $D$ the same two-disk link construction gives the ordinary plane/half-space charts for the two ball sides. [given, F1, F2, construct]

2.1 The complement of the boundary of either supplied ball has exactly its connected bounded ball interior and a connected unbounded exterior. For completeness, its local interior and exterior sides are half-balls by the link construction of step 1.1, applied also to the remaining boundary points using their simple link circles. Interior points are ordinary three-space points: compatible simplex links transported by its ball parameter give sphere links. The ball interior is connected. Along its connected boundary all local exterior sides lie in one complement component, by chaining boundary charts. Any additional exterior component would have a boundary point on that boundary, since a nonempty proper open subset of connected Euclidean space cannot be both open and closed; such a point contradicts the local half-ball chart. The exterior is unbounded since the ball is compact. These observations require no general sphere-separation assertion for unparametrized spheres. [given, step 1.1, construct]

3.1 Compare the two balls along the connected disk interior $\operatorname{Int}D$. Each occupies one local side of its plane chart, and the choices are constant there by connectedness. First exclude the local book ordering in which each open page lies inside the other ball. By connectedness and step 2.1 these inside relations would hold on both whole open disks, giving $\partial B_1\subset B_2$ and $\partial B_2\subset B_1$. But $\partial B_1\subset B_2$ implies $B_1\subset B_2$: the connected unbounded exterior of $B_2$ misses $\partial B_1$, hence lies in the unbounded exterior of $B_1$, and taking complements gives the inclusion. The reversed relation would give equality, contradicting the distinct open boundary pages. If their choices along $D$ are opposite, the book chart therefore has the other ordering: $\operatorname{Int}E_1$ is locally outside $B_2$ and $\operatorname{Int}E_2$ is locally outside $B_1$. Since these open disk interiors are connected and disjoint from the other ball boundary, they are globally outside by step 2.1. The connected interior of $B_1$ is disjoint from $\partial B_2$: it meets neither $D\subset\partial B_1$ nor $E_2$, which is outside $B_1$. It is therefore wholly inside or wholly outside $B_2$; its points near $\operatorname{Int}D$ lie outside, so it is outside. Hence $B_1\cap B_2=D$. If the choices on $D$ are the same, the three-page chart instead puts one of $\operatorname{Int}E_1,\operatorname{Int}E_2$ inside the other ball and the other outside. Suppose the former is inside $B_2$. The same connectedness argument shows that $\operatorname{Int}B_1$, which misses $\partial B_2$, lies inside $B_2$: near $D$ it is on its inside side. Thus $B_1\subset B_2$. Interchanging indices gives the third case. The disk interiors cannot coincide and all three pages are distinct, so these cases are exclusive. [given, step 1.1, step 2.1, construct]

4.1 In the disjoint-interior case, [F3] glues the given ball parameters along $D$ and gives a PL ball parameter on $B_1\cup B_2$. Its boundary is exactly $E_1\cup E_2$, as is also seen in the local book charts. In the nested case $B_1\subset B_2$, the intersection $B_1\cap\partial B_2$ is exactly $D$: off $C$, $E_1$ is inside $B_2$ by step 3.1, and $E_2$ is outside $B_1$. The rest of $B_1$ is in $\operatorname{Int}B_2$. The required standard boundary-window condition holds along $C$. Namely the local book chart has three ordered pages; choose the outer two to bound the outer half-space and the inner page to cut out the inner quadrant. A finite linear angular subdivision takes those sectors to $w\ge0$ for $B_2$ and $w\ge0,v\le0$ for $B_1$, with common disk $w=0,v\le0$. This is precisely the window condition of [F3], so $\overline{B_2\setminus B_1}$ has a finite PL ball parameter. Its boundary consists of $E_1$ and $E_2$, joined along $C$. The reversed nesting is identical with the indices exchanged. Every link map, subdivision and application of the gluing or window construction is finite; no choice assumption is introduced. [F3, step 1.1, step 3.1, construct] ∎
```

## 14. lem-pl-height-product-caps-replace-by-one-extremum

Source: `items/lem-pl-height-product-caps-replace-by-one-extremum.md`; raw SHA256: `09dc6369ef3c1f853c0de42bc3c426dcf6050592611ce516833bdb926b297cde`.

```markdown
---
id: lem-pl-height-product-caps-replace-by-one-extremum
kind: lemma
title: "Piecewise linear height-product caps can be replaced by one extremum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-parametrized-pl-balls-absorb-standard-boundary-windows, lem-three-disk-pl-severing-reassembles-parametrized-balls]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
---

## Statement

Let $D$ be a finite parametrized PL two-disk and let $J:D\times[0,1]\to\mathbb R^3$ be a finite PL embedding with $h(J(x,t))=t$ for an affine height $h$. Put $Z=J(D\times[0,1])$, $C=J(\partial D\times\{1\})$ and $F=J((D\times\{0\})\cup(\partial D\times[0,1]))$. Let $E$ be a finite parametrized embedded PL two-disk with boundary $C$ and $E\cap Z=C$.

There exists a finite embedded parametrized PL disk $G\subset Z$ with boundary $C$, $G\cap F=C$, such that its height has exactly one interior extremum, a minimum, and every other point of $G\setminus C$ has a regular height-product chart. The set $F\cup G$ bounds a supplied parametrized PL three-ball. Consequently, if $E\cup G$ bounds a parametrized PL three-ball, then $E\cup F$ does as well. The reversed-height assertion replaces a maximum cap. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The disk, height-product embedding and exterior disk in the statement.

[F1] Polygonal disk parameters and extensions of prescribed boundary maps ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Compatible finite triangulations of convex polyhedral cells ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

[F3] Parametrized PL balls admit standard-window removal ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

[F4] Three embedded PL disks with common boundary and disjoint interiors satisfy the finite PL ball-reassembly implication ([[lem-three-disk-pl-severing-reassembles-parametrized-balls]]).

## Proof

**Given:** The stated product and disk.

1.1 Use the supplied disk parameter to replace $D$ by a convex polygon $P$. Its product parameter and $J$ are finite PL after compatible prism subdivisions by [F2]. Choose $p\in\operatorname{Int}P$ and $0<c<1$, and let $K$ be the convex pyramid with apex $(p,c)$ and base $P\times\{1\}$ in $P\times[0,1]$. Its lateral boundary $G_0=(p,c)* (\partial P\times\{1\})$ is a parametrized PL disk. It intersects the disk $F_0=(P\times\{0\})\cup(\partial P\times[0,1])$ exactly in their common boundary $\partial P\times\{1\}$. The latter is also a parametrized PL disk: it is the complement of the top face in the boundary of a convex prism, and mapping its bottom and side strips to concentric planar polygonal regions gives the finite disk parameter. [given, F1, F2, construct]

2.1 The pyramid meets the boundary of the prism exactly in its top base. The boundary-window charts along its base perimeter are ordinary linear dihedral-sector charts, including at polygon corners after a finite angular subdivision; these identify the outer prism with a half-space and the inner pyramid with a quadrant. Thus [F3] gives a finite PL ball parameter on $W_0=\overline{(P\times[0,1])\setminus K}$. Its boundary is exactly $F_0\cup G_0$. Transfer these disks, the pyramid and $W_0$ to $Z$ by the product parameter and $J$. This gives the required $G$ and ball $W$ with boundary $F\cup G$. [F3, step 1.1, construct]

3.1 Each horizontal section of $G_0$ above height $c$ and below height one is the boundary of a homothetic polygon $p+\frac{t-c}{1-c}(P-p)$. Thus its only interior height extremum is its apex minimum. At every other interior point its incident cone faces have nonzero height slope along their common generator, so a finite face-strip chart gives a local PL product with height as interval coordinate. Equivalently these strips are truncated convex cone faces, mapped to rectangular strips by matching their end edges and coning boundary maps with cone points at equal height. Composing with the height-preserving $J$ preserves these charts and the unique extremum. No conclusion about the height on the exterior disk $E$ is needed. [F2, step 1.1, step 2.1, construct]

4.1 The disks $E,F,G$ have the same boundary and pairwise disjoint interiors, because $E\cap Z=C$ and step 1.1 gives the other intersection. Their parameters are supplied above. If $E\cup G$ bounds a supplied PL ball, then this ball and $W$ satisfy [F4], which supplies the ball bounded by $E\cup F$. Replacing $h$ by $-h$ gives the reversed-height statement. Every selection, cone, prism subdivision and window construction is finite, so no choice assumption is required. [given, F4, step 2.1, step 3.1, construct] ∎
```

## 15. lem-pointed-flat-pl-caps-admit-saddle-free-replacements

Source: `items/lem-pointed-flat-pl-caps-admit-saddle-free-replacements.md`; raw SHA256: `b14c10feda828bf0e50cc2d287e96f66b390755a81f33a3522eb7eb5e385c289`.

```markdown
---
id: lem-pointed-flat-pl-caps-admit-saddle-free-replacements
kind: lemma
title: "Pointed flat piecewise linear caps admit saddle-free replacements"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-three-disk-pl-severing-reassembles-parametrized-balls]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
---

## Statement

Let $Z$ be a supplied finite parametrized embedded PL three-ball with a nonnegative affine height $h$, and let $Z_0$ be a convex three-dimensional polytope with an affine height $h_0$. Assume $D=h^{-1}(0)\cap Z$ and $D_0=h_0^{-1}(0)\cap Z_0$ are boundary disks. Suppose a supplied PL boundary homeomorphism $j:\partial Z\to\partial Z_0$ preserves height and maps $D$ onto $D_0$. Let $Q_0$ be a vertex of the polygonal face $D_0$. Assume the faces of $Z_0$ other than $D_0$ are partitioned into one triangular side face $G_0$ meeting $D_0$ exactly at $Q_0$, a top face $T_0$ at positive constant height, and the remaining side faces. Put $Q=j^{-1}(Q_0)$.

For some arbitrarily short positive height range there is a parametrized PL disk $A\subset\partial Z$ containing $D$, meeting $j^{-1}(G_0)$ exactly at $Q$, and a parametrized PL disk $A'\subset Z$ with $A\cap A'=\partial A=\partial A'$, such that $A\cup A'$ bounds a supplied parametrized PL three-ball. On the boundary obtained by replacing $A$ by $A'$, every new interior point away from $Q$ has a regular local height-product chart; no positive-height saddle is introduced. The new cap meets height zero exactly at $Q$. Consequently, whenever the replaced disk lies in an embedded PL sphere whose remaining disk misses the constructed ball except along the common boundary, and the sphere after replacement bounds a supplied PL ball, the original sphere also bounds one. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The two balls, heights, boundary height-preserving map, bottom disks, side triangle and top face as stated.

[F1] Compatible finite triangulations of convex cells and finite PL maps or marked subpolyhedra ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F2] Three-disk PL severing transfers supplied ball parameters ([[lem-three-disk-pl-severing-reassembles-parametrized-balls]]).

[F3] Planar polygonal disks admit finite parameters and prescribed-boundary extensions ([[lem-finite-polygonal-disk-and-collar-surgery]]).

## Proof

**Given:** The stated data.

1.1 Extend $j$ to a PL homeomorphism $f:Z\to Z_0$. Use the supplied parameter of $Z$ to transfer $j$ to the boundary of a convex ball, triangulate it there and on $\partial Z_0$, and cone the boundary map from interior points. Convexity makes the matching cone-simplex maps bijective with PL inverses. Choose a common finite triangulation on which $f,h,h_0\circ f$ are linear. The last two functions have exactly the same zero vertices, namely those on $D$, and are strictly positive at all other vertices. Cut at a number $\delta>0$ below all their positive vertex values and below the top height. On corresponding simplices the two cuts have identical face posets: they retain the zero vertices and cut precisely the zero-positive edges. Inductively match the truncated cells, fixing $j$ on their old boundary faces, matching the top sections by compatible face maps, and coning the remaining boundaries between interior points at height $\delta/2$. Such points exist on every mixed face by convexity. The map preserves height on every cone simplex. This gives a PL homeomorphism $f_\delta:Z\cap\{h\le\delta\}\to Z_0\cap\{h_0\le\delta\}$ preserving height and equal to $j$ on the old boundary. This is the explicit zero-vertex collar-leveling argument; it does not assert that the original extension $f$ preserved height. [given, F1, construct]

2.1 Choose an affine function $L$ with $L(Q_0)=0$, $L>0$ on $D_0\setminus\{Q_0\}$, and $L\ge0$ on $D_0$: the sum of two supporting inequalities of the polygon at its vertex does this. For sufficiently small $e>0$, $h_0>eL$ on $G_0\setminus\{Q_0\}$ and on the section $h_0=\delta$. The first assertion follows by checking the two nonzero vertices of the triangle and using affinity; the second follows from compactness and $\delta>0$. Then $$W_0=Z_0\cap\{h_0\le\delta,\ h_0\le eL\}$$ is a convex three-ball. Its new face $A'_0=Z_0\cap\{h_0=eL\}$ is a convex polygonal disk lying below $\delta$, and its remaining boundary $A_0$ lies in the old boundary of $Z_0$. It contains $D_0$, meets $G_0$ exactly at $Q_0$, and misses the top section. Both boundary disks have finite PL parameters: $A'_0$ is convex, and the complement of the relative interior of a face in a convex polyhedral sphere is a PL disk, as follows by the finite truncated-vertex planar chart and polygonal disk-extension construction. In particular $\partial W_0=A_0\cup A'_0$ and their intersection is their common boundary. [F1, F3, step 1.1, construct]

3.1 The retained body $Z_0\cap\{h_0\ge eL\}$ is convex and has its unique height-zero point at $Q_0$. Every new point of its boundary away from $Q_0$ and from the unchanged attachment boundary is regular for height: at a new vertex strictly between the extrema, its convex link circle has a positive arc and a negative arc, each connected, because its lower and upper cone sections are convex; face and edge charts give the same conclusion. Choose $L$ and then $e$ outside the finitely many exceptional values making the new planar face horizontal or introducing a non-extremal horizontal face. This retains the strict inequalities in step 2.1. Coning the link arcs gives the local height-product charts, equivalently by the explicit two-half-space polygonal fan straightening. Pull $W_0,A_0,A'_0$ back by $f_\delta$. Height preservation gives the claimed new regular charts and the single zero point $Q$. The disk replacement is confined below any initially prescribed positive bound by taking $\delta$ smaller. [F1, step 1.1, step 2.1, construct]

4.1 Let $E$ be the rest of the sphere after deleting $\operatorname{Int}A$. Its intersection with the pulled-back ball is $\partial A$ by the stated transfer hypothesis. Thus $E,A,A'$ satisfy [F2]. The supplied ball bounded by $A\cup A'$ and any supplied ball bounded by $E\cup A'$ give a supplied ball bounded by $E\cup A$. All triangulations, cuts, cones and exceptional-value exclusions used finite collections; no choice assumption is introduced. [F2, step 2.1, step 3.1, construct] ∎
```

## 16. lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction

Source: `items/lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction.md`; raw SHA256: `51108f2253087b8f34f32b5db4c37df84474df794eb761d4219ee40bf2827658`.

```markdown
---
id: lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction
kind: lemma
title: "Innermost critical height loops admit strict piecewise linear cap reduction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-finite-pl-level-collars-give-global-band-products, lem-pl-height-product-caps-replace-by-one-extremum, lem-pointed-flat-pl-caps-admit-saddle-free-replacements, lem-three-disk-pl-severing-reassembles-parametrized-balls]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. W. Alexander, On the subdivision of 3-space by a polyhedron"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1085499/"
      locator: "PNAS 10 (1924), pp.7–8, both critical cap cases; finite pointed layer, relative boundary model and ball-transfer constructions supplied explicitly below."
---

## Statement

Let $S\subset\mathbb R^3$ be the image of a supplied finite PL embedding of the standard PL two-sphere. Choose an affine height $h$ distinct on the vertices of a linear triangulation of $S$. At a vertex $v$ with both lower and upper incident directions, let $r_v$ be the number of positive arcs of its small link circle; it is also the number of negative arcs. Call $v$ a saddle when $r_v\ge2$. Its horizontal section consists of $r_v$ simple loops meeting only at $v$, together with finitely many disjoint regular circles. Let $n(S,h)$ be the sum of the numbers of all these loops, including the regular circles, over the distinct saddle heights.

If $n(S,h)>0$, there are two supplied finite PL embedded two-spheres $S'_1,S'_2$, with generic affine heights $h_1,h_2$, for which
$$n(S'_1,h_1)+n(S'_2,h_2)\le n(S,h)-1.$$
Moreover supplied parametrized PL balls bounded by $S'_1,S'_2$ give, by explicit finite PL constructions, a parametrized PL ball bounded by $S$. No general three-dimensional Schoenflies theorem or choice hypothesis is used.

## Facts & Assumptions

**Given:** The embedded parametrized sphere and its generic affine height with positive complexity.

[F1] Finite polygonal Jordan disks and prescribed-boundary disk extensions ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Compatible finite triangulations and subdivisions for convex cells, PL maps and marked subpolyhedra ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F3] Local one-sided PL level collars on a compact finite height band give a finite global height-preserving PL product ([[lem-finite-pl-level-collars-give-global-band-products]]).

[F4] Height-product caps have one-extremum replacements with finite PL ball transfer ([[lem-pl-height-product-caps-replace-by-one-extremum]]).

[F5] Pointed flat caps with the supplied convex boundary model have saddle-free replacements with finite PL ball transfer ([[lem-pointed-flat-pl-caps-admit-saddle-free-replacements]]).

[F6] The three-disk severing implication reassembles parametrized balls, including the nested cases ([[lem-three-disk-pl-severing-reassembles-parametrized-balls]]).

## Proof

**Given:** The stated surface and height. The constructions below are all made on compact finite polyhedra.

1.1 Choose a saddle plane $h=a$ with critical vertex $q$. The section is a finite graph with every point of degree two except $q$, whose degree is $2r_q$. Following each edge from $q$ until it first returns to $q$ decomposes its nonregular component into simple loops; distinct loops meet only at $q$. Other components are simple circles. A finite collection of such planar loops has an innermost simple loop $C$ bounding a polygonal disk $D$ with $\operatorname{Int}D\cap S=\varnothing$: choose an innermost bounded complementary face inside a loop, and if its boundary passes $q$, follow its simple loop boundary; the only possible common vertex is $q$. The circle $C$ cuts $S$ into two parametrized PL disks $E_1,E_2$. To check the finite PL parameter assertion, transfer to the supplied standard sphere, choose a tetrahedral vertex off the transferred circle by polygonal chart point pushes, and truncate a small cone disjoint from it. The remaining sphere has a planar triangular disk parameter by mapping its opposite face and three strips to concentric triangles. Apply [F1] to the circle there; the other disk is the surrounding annulus capped by the removed cone, parametrized by cutting a joining strip and using [F1]. Thus $\Sigma_i=E_i\cup D$ are finite PL spheres, with their flat caps explicitly parametrized. [given, F1, F2, construct]

2.1 First suppose $q\notin C$. In each $E_i$ a sufficiently narrow collar of $C$ lies entirely on one side of $h=a$, since $C$ has no critical point and the collar's open connected side has constant height sign. Write $t=\pm(h-a)\ge0$ with that sign. For small $0<t\le\epsilon$, the collar meets its level plane in one polygonal circle $C_t$ approaching $C$. Its bounded planar disk $D_t$ varies in a finite polyhedral layer $Z$ with bottom $D$ and side that collar: subdivide by the finitely many incident triangle planes and use planar crossing parity to select the bounded disk cells. Taking $\epsilon$ small keeps every other surface part outside $Z$. Away from $C$ this follows from the positive separation of compact nonincident pieces and $\operatorname{Int}D\cap S=\varnothing$; along $C$ it follows from the ordinary two-face regular height charts. The layer is a PL manifold with boundary: interior cells have ball charts, side points have half-ball charts, and its bottom rim has quadrant charts from the same planar fans. Its level fibers have local collars at both sides, including its bottom and top. Thus [F3] supplies a height-product disk parameter on all of $Z$. Apply [F4] to replace $D$ and the collar by a cap with one extremum and otherwise regular height. The rest of $E_i$ meets $Z$ only in its top circle. The ball-transfer conclusion of [F4] is therefore applicable. This supplies the required cap replacement for $\Sigma_i$ in the nonpointed case. [F1, F2, F3, F4, step 1.1, construct]

3.1 Now suppose $q\in C$. For each $i$, the open boundary arc $C\setminus\{q\}$ has a one-sided collar in $E_i$ of constant height sign. Orient $t=\pm(h-a)$ with this sign. Choose one positive ray in each of its two incident face sectors at $q$, very close to the corresponding zero ray of $C$, and call them $\rho_1,\rho_2$. For small $0<t\le\epsilon$, the part of the collar between these rays is one embedded polygonal arc $l_t$ joining $t\rho_1$ to $t\rho_2$; choose ray generators of height one. This follows by tracing the level segments in the finitely many incident triangles along $C\setminus\{q\}$; none of their other vertices has height between zero and $\epsilon$. The two terminal sectors are linear cones. The planar disk $D$ has an empty angular sector at $q$: its link arc lies in the horizontal circle and meets no other surface direction except its endpoints, since its interior is disjoint from the section graph. Just inside the chosen positive side of this arc choose a finite polygonal joining arc at level $\epsilon$ from $\epsilon\rho_1$ to $\epsilon\rho_2$, disjoint from $S$ except at its ends. Such an arc is obtained by following that empty link sector and projecting radially to the positive level; its compact interior stays in the adjacent open complementary sector. Call this arc $g_\epsilon$ and put $g_t=(t/\epsilon)g_\epsilon$. Then $l_t\cup g_t$ is a simple polygon. Its bounded disk $D_t$ contains no other surface piece: away from $q$ use finite positive separations as in step 2.1; in the small conical neighborhood of $q$, the chosen joining arc cuts off exactly the sector adjacent to the empty disk, excluding the remaining link branches. Shrink $\epsilon$ once for these finitely many requirements. [given, F1, F2, step 1.1, construct]

4.1 Let $Z$ be the layer of these disks for $0<t\le\epsilon$, with bottom $D$. It is a compact finite polyhedron: its boundary consists of the bottom disk, the finite surface strip $L=\bigcup l_t$, the cone $G=\bigcup g_t=q*g_\epsilon$, and the top disk $T=D_\epsilon$; a common plane arrangement with planar parity selects its finitely many solid cells. It is a PL manifold with boundary, also at $q$. The link there has boundary made of the bottom disk arc, two positive surface-sector arcs and the closing arc of $G$, forming one simple polygonal circle on the standard link sphere. The disk on its positive side gives its half-ball chart. The disk assertion follows by the finite tetrahedral planar chart and [F1] as in step 1.1; coning gives the chart. The bottom arc is an ordinary boundary interval of that link disk, so $D$ is locally collared even at $q$. Everywhere at positive height, the side arcs and their endpoints give the ordinary half-space or quadrant height charts; there are no other vertices of the surface in the layer. Therefore [F3] gives a height-product parameter $D\times[0,\epsilon]\to Z$. In particular $Z$ is a supplied parametrized PL ball. The old cap part $F=D\cup L$ is a disk with boundary $l_\epsilon\cup\rho_1[0,\epsilon]\cup\rho_2[0,\epsilon]$. Splitting its strip corner $q$ into its two boundary occurrences makes $L$ a finite PL disk with bottom the interval obtained by cutting $C$ at $q$, top $l_\epsilon$ and two monotone sides $\rho_1,\rho_2$. Its bottom and positive fibers have local one-sided collars, so [F3] also supplies a height-product interval parameter for this normalized strip. Restoring the two occurrences gives the actual strip in $\partial Z$. [F1, F2, F3, step 3.1, construct]

5.1 Supply the convex pointed boundary model required by [F5], rather than assuming it. Let $D_0=[0,2]^2\times\{0\}$ with $q_0=(0,0,0)$, and take the convex hull with the top triangle having vertices $(-1,1,\epsilon),(1,-1,\epsilon),(1,1,\epsilon)$. Its face in $x+y=0$ is the triangle $G_0$ from $q_0$ to the first two top vertices, meeting $D_0$ only at $q_0$. The remaining side strip, normalized by splitting $q_0$, has a height-product interval parameter by the same [F3] argument, or directly from its convex faces. Map $D$ to $D_0$, taking $q$ to $q_0$, by [F1]. Match the two normalized strip parameters by their induced bottom interval map; this is height-preserving and matches the two side rays at every height. Map the cone $G$ to $G_0$ by coning its top arc map linearly from $q$ to $q_0$; choose its endpoints to match the strip maps. On the top disk extend the already prescribed boundary map by [F1]. These four maps paste to a finite PL boundary homeomorphism preserving height on $D,L,G,T$. All hypotheses of [F5] are now supplied. Its supporting-plane cut replaces a subdisk of $F$ containing $D$ by a pointed cap meeting $t=0$ only at $q$, introducing no positive-height saddle. The old sphere meets the cut ball only in that subdisk, by step 3.1, so [F5]'s ball transfer applies. The replacement is confined to an arbitrarily short positive height range. On the critical plane it deletes precisely the chosen loop $C$; all other branches at $q$ are outside the layer and remain unchanged. [F1, F3, F5, step 4.1, construct]

6.1 Perform the respective replacements on both $\Sigma_i$, in a height range containing no other original saddle height, obtaining $S'_i$. In step 2.1 only a new extremum was inserted. In step 5.1 all new positive-height points are regular, and at height $a$ exactly the selected loop has disappeared. Every other original critical-plane loop belongs to one of the two cut disks and is unchanged. If the remaining vertex at height $a$ becomes regular or an extremum in either sphere, that plane no longer contributes to its complexity, which can only decrease the count further. Thus the total contribution at this height is at most the former contribution minus one; at other saddle heights the contributions partition the original ones. Restore generic affine heights by arbitrarily small direction perturbations and compatible subdivisions. This does not add saddles: each new nonextremal vertex has a link circle with exactly two transverse zero crossings, a condition stable under a small perturbation on its finite link edges; the cap extremum has all incident directions of one sign. The other critical link signs and the order of their heights are preserved by choosing the perturbation below the finitely many nonzero sign and height gaps. There are no horizontal surface faces left in the replaced caps. The section graph incidence at each unchanged critical vertex is determined by these signs, so its loop count is preserved. This proves the stated complexity inequality. Finally, supplied balls for $S'_i$ transfer by steps 2.1 or 5.1 to supplied balls for $\Sigma_i$. Apply [F6] to the three disks $E_1,E_2,D$ to obtain the ball bounded by $S$. All constructions and exclusions were finite, so no choice principle was introduced. [given, F2, F4, F5, F6, step 2.1, step 5.1, construct] ∎
```

## 17. thm-finite-pl-schoenflies-in-dimension-three

Source: `items/thm-finite-pl-schoenflies-in-dimension-three.md`; raw SHA256: `df65660b38ae59f1a165f76234a75033a4493ea0f29062a8c06a453efe4cbec9`.

```markdown
---
id: thm-finite-pl-schoenflies-in-dimension-three
kind: theorem
title: "Finite piecewise linear Schoenflies in dimension three"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls, lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction, lem-parametrized-pl-balls-absorb-standard-boundary-windows, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: strong-induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. W. Alexander, On the subdivision of 3-space by a polyhedron"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1085499/"
      locator: "PNAS 10 (1924), pp.6–8, full genus-zero height induction. Listed local suppliers give finite PL base, both cap constructions, strict complexity descent and ball reassembly."
---

## Statement

A supplied finite PL embedding of the standard PL two-sphere in $\mathbb R^3$ bounds a compact parametrized PL three-ball; its two complementary components are the bounded ball interior and a connected unbounded exterior. A supplied finite PL embedding of the standard PL two-sphere in the standard PL three-sphere bounds two parametrized PL three-balls, and a PL homeomorphism of that three-sphere carries it to the common boundary in a standard double of a convex three-ball. All parameters and homeomorphisms are finite PL on the compact spaces in question. No choice hypothesis is introduced.

This is a PL assertion in already supplied standard PL ambient spaces. It does not assert triangulability of arbitrary topological three-manifolds or tame arbitrary wild sphere embeddings.

## Facts & Assumptions

**Given:** The supplied finite PL embedding of a standard PL two-sphere in the stated standard PL ambient space.

[F1] A generic-height polyhedral two-sphere with one minimum, one maximum and regular links elsewhere has an explicit finite PL ball parameter ([[lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls]]).

[F2] Positive Alexander height complexity admits two strictly simpler finite PL sphere reductions whose supplied balls reconstruct the original supplied ball ([[lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction]]).

[F3] Prescribed boundary-disk maps of parametrized PL balls extend over the balls, with finite PL inverse ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

[F4] Finite convex cell complexes admit compatible triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** First a finite polyhedral image $S$ in $\mathbb R^3$, with its supplied standard sphere parameter. Choose an affine height distinct on its finitely many vertices, excluding the finite union of direction planes perpendicular to vertex differences. Let $n=n(S,h)$ be the nonnegative integer complexity of [F2].

1.1 Compute the finite height index sum. Assign each simplex of the surface triangulation to its highest vertex. The contribution at a vertex $v$ to the alternating vertex-edge-triangle count is $1-\chi(L_v^-)$, where $L_v^-$ is its lower link: an assigned incident edge contributes minus one for each lower link vertex and an assigned incident triangle contributes plus one for each lower link edge. If all directions are above $v$, the lower link is empty and the contribution is one. If all are below, it is the whole link circle, whose Euler characteristic is zero, again giving one. Otherwise it is a disjoint union of $r_v$ intervals, giving contribution $1-r_v$. These interval components are counted by the positive and negative link arcs of [F2]. Summing over vertices gives $$m+M-\sum_{v\text{ saddle}}(r_v-1)=2,$$ where $m,M$ are the numbers of minimum and maximum vertices. The right side is the Euler count of the standard sphere. It can be checked in the boundary of a tetrahedron and is unchanged by finite common subdivisions: subdividing an edge or coning a subdivided triangle boundary preserves the alternating count, by the interval and disk face counts. The supplied finite PL sphere parameter gives such common subdivisions with the tetrahedral boundary. [given, F4, algebra]

2.1 If $n=0$, there are no saddles, since a saddle section contains at least its two loops and contributes positively to $n$. Step 1.1 gives $m+M=2$. Both are at least one because the finite nonconstant height has a minimum and maximum, so $m=M=1$. Every other vertex has $r_v=1$, precisely the regular height-link condition. Apply [F1] to obtain a finite PL ball parameter. For general $n$ use strong induction: when $n>0$, [F2] gives two embedded parametrized PL spheres with nonnegative complexities $n_1,n_2$ satisfying $n_1+n_2\le n-1$. Hence each is smaller than $n$, so the induction hypothesis supplies their PL balls. The explicit transfer and reassembly operations of [F2] supply the ball bounded by $S$. This is a finite induction terminating at the zero case, not a citation to a general Schoenflies theorem. [given, F1, F2, step 1.1, induction]

3.1 The complement of this parametrized ball has a connected unbounded exterior. A finite compatible link subdivision gives local plane/half-space charts at its boundary: the boundary link circle splits the standard two-sphere link into two parametrized disks by the polygonal planar chart construction. Its interior has ball charts transported by its supplied ball parameter. Along the connected boundary, exterior half-ball charts chain into one complement component. Every other complement component would have a boundary point on that boundary, contradicting these charts; an open component with no boundary in connected Euclidean space would be all of Euclidean space. The exterior contains the complement of a large box and is therefore unbounded. The bounded component is the connected ball interior. This proves all complementary-component assertions in $\mathbb R^3$. [given, step 2.1, construct]

3.2 We describe the standard ambient charts needed to pass to $S^3$ without a manifold triangulation theorem. Realize standard PL $S^3$ as the boundary of a four-simplex. A point off the embedded sphere can be carried to a fixed vertex by finitely many PL point pushes in linear ball charts along a polygonal path: triangulate a small convex ball by coning its boundary from the current point and move that cone point to a sufficiently close next point, fixing the boundary. The punctured four-simplex boundary has an explicit locally finite PL chart to $\mathbb R^3$: map the opposite three-face to a convex tetrahedron, and successive truncated conical shells toward the deleted vertex to successive shells between tetrahedra of radii $2^j$. Their matching convex cell decompositions have compatible face-cone maps by [F4]. On every compact subset only finitely many shells occur. The shell cells and cone points can be determined from their vertices and barycenters, so this description requires no countable choice. Thus the given compact sphere becomes a finite polyhedral sphere in $\mathbb R^3$. Step 2.1 supplies one complementary PL ball in $S^3$. [given, F4, step 2.1, construct]

4.1 Choose a point in that ball's interior and apply the same explicit punctured standard-sphere chart at this new point. The previously unbounded complementary side is now bounded: the omitted point lies on the other side, and a neighborhood of that point is disjoint from this side's compact closure. Step 2.1 in this chart supplies its PL ball parameter. The complementary-side identifications follow from step 3.1 applied in the charts, so these are exactly the two closed complementary balls of the original sphere. Their supplied boundary maps differ by a PL sphere homeomorphism. Extend that homeomorphism over one convex model by coning a compatible boundary triangulation from its interior point; this is the same finite extension used in [F3]. Adjusting that ball parameter makes the two boundary parameters agree. Paste them to obtain a PL homeomorphism from $S^3$ to the double of a convex three-ball, taking the embedded sphere to the common boundary. Both domains are compact finite polyhedra, so the pasted parameters and inverses have finite compatible subdivisions. All selections, chart restrictions, index computations, cap reductions and gluings used finite data. No choice principle is needed, and no arbitrary topological ambient manifold has been given a PL structure in this argument. [F3, F4, step 3.1, step 3.2, construct] ∎
```
