---
id: lem-qftx-gaga-euclidean-finite-order-refinement
kind: lemma
title: "Locally finite refinements of Euclidean open covers have order at most the dimension plus one"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: "A topological theorem about Euclidean open sets; no physical model or empirical claim is involved."
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-metric-space
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-metric-space: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ian Agol, Complex Analysis and Riemann Surfaces, course notes"
      url: "https://math.berkeley.edu/~ianagol/complexriemann.pdf"
      locator: "§6, Theorem 6.5, printed/PDF p. 29: the sheaf-dimension vanishing theorem is stated from fine covers with empty (m+2)-fold intersections; the refinement construction is supplied in this item."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter IX §4.B, printed/PDF p. 421: the local acyclicity proof uses topological dimension at most real dimension; this item proves the needed Euclidean refinement bound directly."
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Statement

Assume full AC. Let $m\ge1$ and let $\Omega$ be a nonempty open subset of
$\mathbb R^m$ with its Euclidean metric. For every open cover $\mathcal U$ of
$\Omega$, there is a locally finite open cover $\mathcal V$ and a refinement
map $\rho:\mathcal V\to\mathcal U$ with $V\subseteq\rho(V)$ for every
$V\in\mathcal V$, such that each point of $\Omega$ lies in at most $m+1$
members of $\mathcal V$. Here locally finite means that every point has an
open neighborhood meeting only finitely many members, and the order bound
means the stated pointwise multiplicity bound.

## Statement references

[Agol, §6, Theorem 6.5, p. 29](https://math.berkeley.edu/~ianagol/complexriemann.pdf)

[Demailly, Chapter IX §4.B, p. 421](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

## Facts & Assumptions

**Given:** Full AC, $m\ge1$, a nonempty open set $\Omega\subseteq\mathbb R^m$,
and an arbitrary open cover $\mathcal U$ of $\Omega$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-metric-space]]: the Euclidean distance satisfies positivity, symmetry, and the triangle inequality.

## Proof

**Proof technique:** direct.

1.1 For $x\in\Omega$ define $$ \delta(x):=\sup_{U\in\mathcal U}\min\{1,\operatorname{dist}(x,\mathbb R^m\setminus U)\},\qquad \varepsilon(x):=\min\{1,\operatorname{dist}(x,\mathbb R^m\setminus\Omega),\delta(x)\}. $$ The conventions $\operatorname{dist}(x,\varnothing)=+\infty$ and $\min\{1,+\infty\}=1$ cover the case $U=\mathbb R^m$ or $\Omega=\mathbb R^m$. Since $\mathcal U$ covers $\Omega$ and each $U$ is open, $\delta(x)>0$. For any nonempty closed set $E$, the triangle inequality gives $\operatorname{dist}(x,E)\le|x-y|+\operatorname{dist}(y,E)$ by taking the infimum over $E$, and interchanging $x,y$ gives the reverse bound; capping at $1$ preserves this $1$-Lipschitz estimate. The supremum of a family of $1$-Lipschitz functions is $1$-Lipschitz because $f_U(x)\le f_U(y)+|x-y|$ for every $U$, hence $\sup_Uf_U(x)\le\sup_Uf_U(y)+|x-y|$, and likewise after interchanging $x,y$. The minimum of two $1$-Lipschitz functions satisfies the same estimate, so $\varepsilon$ is $1$-Lipschitz. For each $x$, the definition of the supremum supplies $U_x\in\mathcal U$ with $\min\{1,\operatorname{dist}(x,\mathbb R^m\setminus U_x)\}>\delta(x)/2$, hence $B(x,\delta(x)/2)\subset U_x$. Also $\varepsilon(x)\le\operatorname{dist}(x,\mathbb R^m\setminus\Omega)$. [A1, F1, given, construct]

2.1 Let $\mathcal Q$ be the family of all closed dyadic cubes $Q\subset\Omega$ satisfying $$\operatorname{diam}(Q)<\frac1{16}\inf_{y\in Q}\varepsilon(y).$$ Every point of $\Omega$ belongs to such a cube at sufficiently fine dyadic scale, because $\varepsilon$ is continuous and positive there. Each qualifying cube has diameter $<1/16$, so along the nested dyadic ancestors of any such cube only finitely many can qualify; choose a maximal qualifying ancestor. The maximal cubes cover $\Omega$ and have pairwise disjoint interiors, since two dyadic cubes with intersecting interiors are nested and a contained qualifying cube cannot be maximal. [step 1.1, construct]

2.2 The maximal cubes are locally finite. Fix $x\in\Omega$, put $a=\varepsilon(x)>0$, and choose $r=a/8$. If a maximal cube $Q$ meets $B(x,r)$ and has side length $s<a/(512\sqrt m)$, its dyadic parent $P$ has diameter $2\sqrt m\,s<a/256$. Every $y\in P$ then satisfies $|y-x|<a/8+a/256<a/4$, so $P\subset\Omega$ and the Lipschitz bound gives $\varepsilon(y)>3a/4$ on $P$. Thus $\operatorname{diam}(P)<a/256<(3a/4)/16\le\inf_P\varepsilon/16$, so $P$ also qualifies, contradicting maximality of $Q$. Hence each maximal cube meeting $B(x,r)$ has side at least $a/(512\sqrt m)$. All such cubes lie in the bounded set $B(x,r+1/16)$ and their centers are separated by at least this lower bound in the maximum norm, because their interiors are disjoint axis-parallel dyadic cubes. A bounded Euclidean box contains only finitely many points with a fixed positive separation, so only finitely many such cubes meet $B(x,r)$. [step 1.1, F1, algebra]

3.1 We construct a compatible triangulation, allowing subdivision of faces; maximal cubes of different sizes need not initially meet along whole faces. First note that touching maximal cubes have side lengths differing by at most a factor of two. Indeed, let $z\in Q\cap R$, let their sides be $S\ge s$, and let $P$ be the dyadic parent of $R$. The qualification of $Q$ gives $\varepsilon(z)>16\sqrt m S$. Since $\operatorname{diam}(P)=2\sqrt m s\le2\sqrt m S<\varepsilon(z)\le\operatorname{dist}(z,\mathbb R^m\setminus\Omega)$, every point of $P$ lies in $\Omega$; if $\Omega=\mathbb R^m$, this containment is automatic. Thus $P$ is an admissible cube in the maximality comparison for $R$. Maximality of $R$ now implies that $P$ fails the diameter inequality. The Lipschitz bound and $|y-z|\le\operatorname{diam}(P)$ for $y\in P$ give $\inf_P\varepsilon\ge\varepsilon(z)-2\sqrt m s$, so $2\sqrt m s=\operatorname{diam}(P)\ge\frac1{16}\inf_P\varepsilon\ge\frac{\varepsilon(z)-2\sqrt m s}{16}>\sqrt m S-\frac{\sqrt m s}{8}$. Consequently $S<17s/8$. Since the side lengths are dyadic, their ratio is therefore at most two. Subdivide common cube boundaries into their dyadic face pieces: on a face, record the faces of all cubes touching it, and split along their boundary pieces; on its proper subfaces use the same recorded intersections. These are finite rectangular subdivisions locally, since only finitely many cubes touch any compact cube by step 2.2. Compatibility can be seen one coordinate at a time: two collinear dyadic intervals are nested or have disjoint interiors, so every overlap is the smaller interval; in a face, the products of the resulting intervals give its pieces, and restriction to a shared boundary gives exactly the same intersections from either incident cube. Whenever a face is already covered by smaller coplanar faces, use those pieces, rather than retaining the larger face as a cell. Boundary pieces may further subdivide a larger cell's proper faces; that cell itself is retained with this subdivided boundary. Thus the pieces form a locally finite cubical cell decomposition whose closed cells are convex cubes or rectangles and whose intersections are unions of common boundary pieces. Triangulate its boundary pieces inductively by dimension, choosing the center of each positive-dimensional cell and coning it to its already triangulated boundary. In dimension one this simply joins successive boundary points; at every higher dimension convexity makes the cones cover the cell, and distinct cones meet only along their common triangulated boundary cones. Use a single center and boundary triangulation for each shared cell. Finally cone each maximal cube from its center to its triangulated boundary. This gives a locally finite triangulation of $\Omega$ of dimension at most $m$, with every simplex contained in a maximal cube. No infinite hyperplane is extended across unrelated cubes and no finite compact subcomplex is substituted for $\Omega$. [step 1.1, step 2.1, step 2.2, construct, algebra]

4.1 For each vertex $v$ of this triangulation, let $\operatorname{st}(v)$ be the union of the relative interiors of simplices containing $v$. In the geometric realization it is the set where the barycentric coordinate of $v$ is positive, hence it is open. Every point lies in the star of each vertex of its unique minimal simplex, so these stars cover $\Omega$. If a point lies in the stars of $v_0,\ldots,v_k$, all these vertices have positive coordinates in the same minimal simplex. Its dimension is at most $m$, so $k+1\le m+1$. A neighborhood meeting only finitely many simplices meets stars of only their finitely many vertices; hence the star cover is locally finite and has order at most $m+1$. [step 3.1]

5.1 If $y\in\operatorname{st}(v)$, then $y$ and $v$ lie in a simplex contained in a maximal cube $Q$ containing $v$. By step 2.1, $$|y-v|\le\operatorname{diam}(Q)<\varepsilon(v)/16\le\delta(v)/16<\delta(v)/2.$$ Step 1.1 supplies $U_v\in\mathcal U$ with $B(v,\delta(v)/2)\subset U_v$, so $\operatorname{st}(v)\subset U_v$. Choosing one such $U_v$ for each vertex defines a refinement map $\rho$; AC [A1] supplies these simultaneous choices. The star cover is therefore a locally finite open refinement of $\mathcal U$ with the required order. [A1, F1, step 1.1, step 2.1, step 3.1, step 4.1] ∎
