---
id: "ex-cg-a2-davis-complex-hexagon-and-boundary-circle"
kind: example
title: "The A2 Davis complex is a hexagon whose boundary is the Coxeter complex circle"
status: draft
origin: pipeline
dependency_level: 19
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization","lem-cg-spherical-coset-inclusion-and-intersection","lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics","thm-cg-davis-complex-cell-incidence-and-stabilizers","lem-cg-reflection-form-invariance-and-rank-two-orders","thm-hh-parabolic-minimal-representatives-and-length-additivity","thm-cg-finite-chamber-tiling-and-coset-face-identification","def-hh-coxeter-matrix-word-group-and-length","def-cg-canonical-reflection-homomorphism"]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§7.3, Example 7.3.2(ii), Lemma 7.3.3 with proof, the General Case and Proposition 7.3.4, printed pp. 128-131"
    - title: "R. Boyd, Homology of Coxeter and Artin groups, PhD thesis, University of Aberdeen, 2018 (with corrections)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
      locator: "§1.3, Example 1.3.5, Proposition 1.3.9, Definition 1.3.10 and Example 1.3.11, printed pp. 21-24 (the I2(3) spherical-coset realization and its coarser 6-vertex, 6-edge, 1-face cell structure)"
---

## Statement

Let $S=\{s,t\}$ with $m(s,t)=3$, and let $W$ be the Coxeter group of type $A_2$, so $W\cong S_3$ and $|W|=6$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)). Let $\mathbb S$, $WS$, and $\Sigma=|WS|$ be as in [[def-cg-spherical-nerve-coset-poset-and-davis-realization]], and let $C_T$ be the Coxeter cells of [[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]].

**(i)** The spherical subsets are $\mathbb S=\{\emptyset,\{s\},\{t\},S\}$. The spherical-coset cellulation has six $0$-cells, three edges of type $\{s\}$, three edges of type $\{t\}$, and one $2$-cell, hence $13$ cells.

**(ii)** If $d_s=d_t$, then $C_S=\operatorname{conv}(W x_S)$ is a regular hexagon. The order-complex realization $\Sigma$ is homeomorphic to the barycentric subdivision of $C_S$, so the Davis complex is a closed disk. Its coarse Coxeter-cell structure has Euler characteristic $6-6+1=1$.

**(iii)** The proper spherical-coset cells form the boundary cycle: six vertices and six edges. This circle is the Coxeter complex of type $A_2$, namely the Coxeter complex of the proper parabolic subgroups, as in [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (4).

**(iv)** The chamber $K=|\mathbb S|$ consists of the two triangles $\emptyset<\{s\}<S$ and $\emptyset<\{t\}<S$ glued along their common edge $\emptyset<S$, so it is a square with a diagonal. The quotient $W\backslash\Sigma$ is homeomorphic to $K$ and is compact ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (4)). The link of each vertex in the hexagonal cell structure is a closed interval, the nerve $L$ consisting of the single $1$-simplex with vertices $s,t$.

**(v)** Thus the finite Coxeter complex is the boundary circle $\partial\Sigma\cong S^1$, while the Davis complex itself is the disk $C_S$ and is contractible. These are different spaces.

## Facts & Assumptions

**Given:** The Coxeter matrix on $S=\{s,t\}$ with $m(s,t)=3$, its group $W$, the spherical subsets $\mathbb S$, the spherical-coset poset $WS$, and $\Sigma=|WS|$.

[F1] The spherical subsets are those $T$ for which $W_T$ is finite; the nerve $L$ has vertex set $S$ and its nonempty simplices are the nonempty spherical subsets; $\Sigma=|WS|$ and $K=|\mathbb S|$ ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1),(3)).

[F2] Typed spherical cosets are equal exactly when their types agree and their representatives differ by an element of the corresponding parabolic; their nonempty intersections and quotient-poset structure are given by the coset criteria ([[lem-cg-spherical-coset-inclusion-and-intersection]] (1),(3),(4)).

[F3] For spherical $T$, $x_T=\sum_{u\in T}d_u v_u^{(T)}$ satisfies $B(x_T,e_u)=d_u$, and $C_T=\operatorname{conv}(W_Tx_T)$ is a compact convex polyhedral cell of dimension $|T|$ with $0$ in its interior; its nonempty faces are exactly the faces indexed by spherical cosets inside $W_T$ ([[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] (1)).

[F4] The canonical map from $|WS|$ to the cell gluing is a homeomorphism and carries the subposet below each spherical coset onto the barycentric subdivision of its Coxeter cell ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)).

[F5] Under the cellulation, a coset $wW_T$ indexes a cell of dimension $|T|$, and the cells are exactly the images of the corresponding Coxeter cells ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)).

[F6] The quotient $W\backslash\Sigma$ is homeomorphic to the chamber $K$ and is compact ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (4)).

[F7] On the rank-two plane, $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-\cos(\pi/m)$; the simple reflections preserve $B$, and $r_sr_t$ has determinant $1$ and trace $2\cos(2\pi/m)$ when $m<\infty$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2),(3)).

[F8] The canonical reflection representation satisfies $\rho(s)=r_s$ and $\rho(t)=r_t$ ([[def-cg-canonical-reflection-homomorphism]] (1)).

[F9] The Coxeter presentation has relators $s^2$ for each generator and $(st)^{m(s,t)}$ for each distinct pair with finite $m(s,t)$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F10] In type $A_2$, the assignment of the two generators to adjacent transpositions extends to an isomorphism $W\cong S_3$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)).

[F11] For a finite Coxeter system of rank at least one, the cosets of proper parabolics give the spherical Coxeter complex, a triangulation of the unit sphere, with face poset the coset face poset ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (4)).

[F12] A finite dihedral orbit polytope of order $2m$ is a $2m$-gon and is regular when its generating point is equidistant from the two rays bounding the fundamental sector (Davis, *The Geometry and Topology of Coxeter Groups*, Example 7.3.2(ii), p. 129).

[F13] In type $I_2(3)$, the coarser cell structure has six $0$-cells, six $1$-cells, and one $2$-cell (Boyd, *Homology of Coxeter and Artin groups*, Example 1.3.11, pp. 23-24).

## Proof

**Proof technique:** direct.

1.1 By [F9], the relations are $s^2=t^2=1$ and $(st)^3=1$. Put $r=st$; then $srs=r^{-1}$, so every word reduces to $r^k$ or $sr^k$ with $0\le k<3$. The map $s\mapsto(12)$, $t\mapsto(23)$ is onto $S_3$, so the six normal forms are distinct and $|W|=6$, in agreement with [F10]. Thus $W_{\{s\}}=\{1,s\}$ and $W_{\{t\}}=\{1,t\}$ each have index $3$, while $W_S=W$. The cosets are
$$W_{\{s\}},\ tW_{\{s\}},\ stW_{\{s\}};\qquad W_{\{t\}},\ sW_{\{t\}},\ tsW_{\{t\}};\qquad W,$$
and the six singleton cosets $wW_\emptyset$. The equality criterion [F2] shows that these are distinct within each type, and different types give different cells. Since every subset of $S$ is spherical, these are all cells; their dimensions are $0,1,2$ by [F3],[F5]. This gives $6+3+3+1=13$ cells, agreeing with the coarser counts of [F13]. [F1, F2, F3, F5, F9, F10, F13, algebra]

1.2 In the rank-two reflection plane, the reflecting lines bound a sector of angle $\pi/3$: by [F7] their unit normals have inner product $-\cos(\pi/3)=-1/2$, so the normals meet at angle $2\pi/3$ and their perpendicular lines meet at angle $\pi/3$. By [F8], the action defining $C_S$ sends $s,t$ to these two reflections. The distances of $x_S$ from the two walls are $B(x_S,e_s)=d_s$ and $B(x_S,e_t)=d_t$ by [F3]. If $d_s=d_t$, then $x_S$ lies on the sector's internal angle bisector. Choose angular coordinates with the walls at $0$ and $\pi/3$; then $x_S$ has angle $\theta=\pi/6$. The reflections preserve $B$, and their product has determinant $1$ and trace $2\cos(2\pi/3)=-1$ by [F7], so in this Euclidean plane it is a rotation by $2\pi/3$ or $-2\pi/3$. The orbit angles are therefore $\theta+2k\pi/3$ and $-\theta+2k\pi/3$ for $k=0,1,2$. These are the six equally spaced angles $\theta+j\pi/3$, $0\le j<6$. Their convex hull is a regular hexagon, as also recorded in [F12]. [F3, F7, F8, F12, algebra]

2.1 The proper nonempty faces of $C_S$ are its six vertices and six edge cosets by [F3] and the lists in step 1.1. The boundary walk alternates the two labels and has vertices $1,s,st,sts,ts,t,1$: they are distinct up to the repeated endpoint by the six normal forms in step 1.1. Hence the proper cells form a $6$-cycle, which is the rank-two Coxeter complex described by [F11]. Since $S$ itself is spherical, [F1] makes $L$ the single $1$-simplex on $s,t$. At each hexagon vertex there are exactly two incident edges, one of each label, and the unique $2$-cell joins their directions; its local link is therefore one closed interval, the same $1$-simplex $L$. [step 1.1, F1, F3, F5, F11, algebra]

3.1 The order complex of the four-element poset $\mathbb S$ has the two triangles $\emptyset<\{s\}<S$ and $\emptyset<\{t\}<S$, glued along $\emptyset<S$, so its realization is the stated square chamber $K$. By [F4], the subposet below the maximal coset $W$ (which is all of $WS$) realizes the barycentric subdivision of $C_S$; consequently $\Sigma$ is homeomorphic to the closed disk $C_S$. Its coarse cellulation has the six vertices, six edges, and one face from step 1.1, giving Euler characteristic $1$, in agreement with [F13]. Since $C_S$ is convex and contains $0$ by [F3], the homotopy $H(u,z)=(1-u)z$ contracts it to $0$. The quotient statement follows from [F6]. All group and coset lists are finite and explicit, so no Choice is used. [step 1.1, F1, F3, F4, F6, F13, algebra] ∎

## Remarks

The presentation and type-A suppliers are used in step 1.1; the rank-two reflection formula and canonical action in step 1.2; the finite chamber theorem in step 2.1; and the cellulation and chamber-quotient theorem in step 3.1. Source comparisons [F12] and [F13] corroborate the local computations; they do not replace those arguments.
