---
id: lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders
kind: lemma
title: "Finite simplicial maps have explicit compatible triangulated mapping cylinders"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-continuous-map-top,
       def-geometric-realization-of-an-abstract-simplicial-complex,
       def-initial-and-final-topology,
       def-quotient-topology,
       def-subspace-topology-top,
       lem-algebra-of-continuous-real-maps-on-a-space,
       lem-continuity-is-local-and-pastes,
       lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology,
       prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "R. M. Goresky, Triangulation of stratified objects, Proc. AMS 72 (1978), 193-200"
      url: "https://www.math.ias.edu/~goresky/pdf/triangulations.pdf"
      locator: "section 4, printed pp. 197-199 (mapping-cylinder construction); bibliographic identity verified, available copy is an image scan without text layer"
---

## Statement

Let $f:K\to L$ be a simplicial map of finite complexes; vertex identifications
are allowed. Its topological mapping cylinder
$$M_f=(|K|\times[0,1]\sqcup|L|)/((x,0)\sim f(x))$$
has a finite triangulation of dimension at most $\max(\dim K+1,\dim L)$ and a
homeomorphism $H$ to $M_f$ fixing both boundary copies. The triangulated
cylinder retraction to $|L|$ is piecewise linear. Before triangulating, its
cells and $H$ have the explicit formulas in the proof. For every finite
collection of pairs of subcomplexes $(K_j,L_j)$ with $f(K_j)\subseteq L_j$, the
corresponding cylinders are subpolyhedra; one simultaneous subdivision makes
them subcomplexes. The construction also retains the top subpolyhedron
$f^{-1}(|L_j|)$ for each $L_j$. On each cell away from the collapsed end, $H$
is smooth in affine coordinates; no immersion or smooth tangent-star claim is
made at a collapsed end. All boundaries may be subdivided: the lemma does not
promise an extension of an arbitrarily fixed boundary triangulation without
subdivision.

## Facts & Assumptions

**Given:** Finite simplicial complexes $K,L$, a simplicial map $f:K\to L$, and finitely many pairs of subcomplexes $(K_j,L_j)$ with $f(K_j)\subseteq L_j$.

[F1] Realizations carry barycentric coordinates; for finite complexes the weak and Euclidean topologies agree, the realization is compact Hausdorff and metrizable, each $|\sigma|$ is a closed convex polytope, and joins are realized as $A*C=\{(1-t)y+tx:y\in A,x\in C,t\in[0,1]\}$ inside the Euclidean join of two disjoint realizations ([[def-geometric-realization-of-an-abstract-simplicial-complex]], [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]], [[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]).

[F2] The quotient topology on $M_f$ is characterized by: a map out of $M_f$ is continuous exactly when its composite with the quotient projection $q$ is continuous ([[def-quotient-topology]], [[def-initial-and-final-topology]]). Continuity may be checked on a finite closed cover, and finite maxima, minima and quotients of continuous real functions with nonvanishing denominators are continuous ([[lem-continuity-is-local-and-pastes]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[def-continuous-map-top]], [[def-subspace-topology-top]]).

[A1] None: the construction exhibits all cells, maps and inverse formulas explicitly, so no choice principle is used.

## Proof

**Proof technique:** direct.

1.1 Write $x_v$ for the barycentric coordinates of a point of $|K|$ and put $f_i(x)=\sum_{f(v)=i}x_v$, so that $f(x)=(f_i(x))_i$ is a convex combination. In every simplex of $K$ cut by the finitely many hyperplanes $f_i=f_j$ and take the resulting closed convex cells and all their faces; the same arrangement intersected with a simplex gives intersections as faces, so these cells form a finite polytopal subdivision of $K$. For a cell $C$ let $I(C)$ be the set of vertices $i$ such that $f_i$ is maximal on $C$; it is nonempty, and $I(C)\subseteq I(C')$ whenever $C'$ is a face of $C$. For every $i\in I(C)$ the image of $C$ under $f$ lies in the star of $i$, and the set $I(C)$ spans a simplex of $L$ contained in the image simplex. For every nonempty simplex $A$ on vertices in $I(C)$ include the join cell $A*C$ in the Euclidean join of $|L|$ and $|K|$, and include $|L|$ itself and every face of every such join. The join identities $(A*C)\cap(A'*C')=(A\cap A')*(C\cap C')$ and the face structure of the underlying cells make this a finite polytopal complex $T_f$ whose upper boundary is $|K|$ and whose lower boundary is $|L|$. A point of its relative interior has unique join coordinates $(1-t)y+tx$ with $0<t<1$, $y\in|L|$, $x\in|K|$, and lies in $T_f$ exactly when the support of $y$ consists of vertices where $f_i(x)$ attains its maximum. [F1, construct]

2.1 Any finite polytopal complex $P$ is triangulated by induction on dimension: for each cell choose a point in its relative interior, having already chosen one for every proper face, and cone the already triangulated boundary from that point. Each ray from the interior point meets the boundary in exactly one point, the cones over cells have disjoint relative interiors and meet along the cones over their intersections, and the constructions agree on common faces, so this is a finite simplicial complex with the same underlying subset and the same dimension. Applied to the finite list of cells of $T_f$ (and to any finite sublist, coning subcomplexes first) it also respects unions of cells. Its dimension is at most $\max(\dim K+1,\dim L)$: if $C$ lies in a source simplex $\sigma$ with image simplex $\tau$, then $f|_\sigma$ is the affine surjection onto $\tau$, and the $k-1$ equations $f_i=f_j$ with $i,j\in I(C)$ (where $k=|I(C)|$) are independent on $\tau$; hence $\dim C\le\dim\sigma-(k-1)$ and $\dim(A*C)=k+\dim C\le\dim\sigma+1$ for every join cell, while the remaining lower cells have dimension at most $\dim L$. For each pair $(K_j,L_j)$ the cells with $C\subseteq|K_j|$ and $A\subseteq|L_j|$, together with $|L_j|$, form a subcomplex: faces of such cells again satisfy those inclusions, because $K_j$ and $L_j$ are subcomplexes and $f(K_j)\subseteq L_j$. The top preimage $f^{-1}(|L_j|)$ is a union of source faces, since $f$ is simplicial, hence a union of cells of the subdivision. One further barycentric subdivision makes all these subcomplexes full: its vertices are cells, and a chain all of whose vertices lie in a selected subcomplex is a chain of cells of that subcomplex. [F1, step 1.1, construct]

3.1 For $x\in C$ and $i\in I(C)$ put $P_i(x)_v=x_v/f_i(x)$ when $f(v)=i$ and $P_i(x)_v=0$ otherwise. Since $f(x)$ is a point of the simplex $\tau\subseteq L$, some coordinate $f_i(x)$ is at least $1/N$ with $N$ the number of vertices of $L$, so the denominators are bounded below on every cell and $P_i$ is continuous on $C$ with values in the face of the source simplex over $i$. Define $H$ on the join cell $A*C$ by $H((1-t)y+tx)=[u,t]$, where $u=t\,x+(1-t)\sum_{i\in A}y_iP_i(x)$ and the bracket denotes the class in $M_f$ of the point $(u,t)\in|K|\times[0,1]$. The vector $u$ is a convex combination of points of the source simplex, so it lies in $|K|$, and $f(u)=t\,f(x)+(1-t)y$. For $0<t<1$ the join coordinates of a point are unique, and on intersections $A*C\cap A'*C'$ the representation has $y\in A\cap A'$, $x\in C\cap C'$, so the values agree; at $t=1$ the value is $[x,1]$ and at $t=0$ it is $[u,0]=f(u)=y$, the lower point itself, so the formula is well defined and fixes both boundary copies. It is continuous on each closed cell, because the $P_i$ are continuous and the map $(u,t)\mapsto[u,t]$ is the composite of a continuous map with the quotient projection; by the finite closed-cover form of [F2] it is continuous on all of $T_f$. [F1, F2, step 1.1, step 2.1, algebra, construct]

4.1 Define a map $\Psi$ on $|K|\times[0,1]\sqcup|L|$ as follows: $\Psi$ is the identity on $|L|$; for $u\in|K|$ and $0<t<1$ put $z=f(u)$ and let $m=m(u,t)>0$ be the unique number with $\sum_i\min(z_i,m)=t$ (unique because the left side is continuous, vanishes at $m=0$, is strictly increasing while below $\sum_iz_i=1$, and $t<1$), and set $v_i=\min(z_i,m)/t$ for $t>0$, $y_i=(z_i-m)_+/(1-t)$, and $x_w=(v_{f(w)}/z_{f(w)})u_w$ when $z_{f(w)}>0$ and $x_w=0$ otherwise; at $t=0$ define $\Psi(u,0)=f(u)$ directly, and at $t=1$ define $\Psi(u,1)=u$ on the upper copy. Then $z=t\,v+(1-t)y$ with $v,y$ probability vectors, $f(x)=v$, and $x$ lies in every source simplex containing $u$; moreover $x_w=u_w/t$ when $z_{f(w)}\le m$ and $x_w=m\,u_w/(t\,z_{f(w)})$ when $z_{f(w)}\ge m$, so the formulas are continuous on their finitely many closed regions with denominators bounded below by $t/N$ on each collar $t\ge t_0>0$ and extend continuously to $t=0$ with value $y=f(u)$ and to $t=1$ with value $x=u$. Hence $\Psi$ is continuous and satisfies $\Psi(u,0)=f(u)=\Psi(f(u))$, so it respects the equivalence relation and descends to a continuous map $\Phi:M_f\to T_f$. The two constructions are inverse: substituting $H$'s formula into the threshold equations recovers $\sum_i\min(z_i,m)=t$ and returns the given $[u,t]$, while for a join point $(1-t)y+tx\in T_f$ and $u=t\,x+(1-t)\sum y_iP_i(x)$ one computes $z_i=t f_i(x)+(1-t)y_i\le t\max_jf_j(x)=:m$ when $y_i=0$, and $z_i=m+(1-t)y_i$ with $f_i(x)=\max_jf_j(x)$ when $y_i>0$; the threshold equation then determines $m=t\max_jf_j(x)$, and the normalized coordinates of $u$ recover $x$ and $y$ as $(t+(1-t)y_i/f_i(x))x_w=u_w$. So $H\circ\Phi=\mathrm{id}$ and $\Phi\circ H=\mathrm{id}$, and the continuous bijection $H$ is a homeomorphism with inverse $\Phi$. [F1, F2, step 1.1, step 3.1, algebra, construct]

5.1 The retraction $R$ of the cylinder onto $|L|$, read through $H$, is $R((1-t)y+tx)=(1-t)y+t\,f(x)$ on each join cell, an affine map that is piecewise linear after step 2.1. For a pair $(K_j,L_j)$, if $x\in|K_j|$ then each $P_i(x)$ has support in the same source simplex, hence $u\in|K_j|$. Conversely the inverse formula has $\operatorname{supp}(x)\subseteq\operatorname{supp}(u)$, so $u\in|K_j|$ implies $x\in|K_j|$; the collapsed end is precisely the chosen $|L_j|$. Thus the preimage of the mapping cylinder of $f|_{K_j}:K_j\to L_j$ is exactly the subcomplex described in step 2.1. Separately, $f^{-1}(|L_j|)$ is a source subcomplex and is retained on the top boundary, as proved in step 2.1. Finally, on each join cell with $t$ bounded away from zero the map $H$ is given by rational functions of the affine coordinates with denominators bounded away from zero, hence is smooth there in the ambient affine coordinates; nothing is asserted about differentiability at the collapsed end $t=0$, where the quotient is not a manifold chart. This proves all asserted clauses. [F1, step 3.1, step 4.1] ∎

## Remarks

- The lemma concerns a simplicial map that has already been constructed, and it supplies no triangulation or simpliciality statement for arbitrary algebraic maps. The simultaneous subdivision in step 2.1 may change an initially chosen boundary triangulation, which is why no extension claim for an arbitrary fixed boundary triangulation is made.
