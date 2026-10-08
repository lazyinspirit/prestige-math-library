---
id: "ex-cg-right-angled-cube-davis-complex"
kind: example
title: "The right-angled cube Davis complex and its boundary 2-sphere"
status: draft
origin: pipeline
dependency_level: 19
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization", "lem-cg-spherical-coset-inclusion-and-intersection", "lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics", "thm-cg-davis-complex-cell-incidence-and-stabilizers", "def-cg-coxeter-diagram-components-and-finite-type", "lem-cg-diagram-products-and-invariant-form-comparison", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "thm-hh-parabolic-minimal-representatives-and-length-additivity", "def-generated-subgroup", "def-coset", "def-euler-characteristic-of-a-finite-cw-complex", "thm-cg-finite-chamber-tiling-and-coset-face-identification", "def-hh-coxeter-matrix-word-group-and-length", "thm-lagrange"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (MSC lecture slides, Tsinghua, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: '§2.3, Example 2.17 (when $W_T=(\mathbb Z/2)^n$, $P_T$ is a cube) and Theorem 2.19(vi) (right-angled Coxeter cells are cubes), printed pp. 13-14'
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§7.3, Example 7.3.2(iii) (products of intervals and the equal-distance cube), Lemma 7.3.3, and Proposition 7.3.4, printed pp. 129-131"
---

## Example

Let $S=\{a,b,c\}$ with $m(s,t)=2$ for all distinct $s,t$, let $W$ be the
presented group with length $\ell$, let $V=\mathbb R^S$ carry the Coxeter form
$B$, and let $\mathbb S$, $WS$, $\Sigma=|WS|$, $K=|\mathbb S|$ be as in
[[def-cg-spherical-nerve-coset-poset-and-davis-realization]]. The diagram of
$(S,m)$ then has no edges ([[def-cg-coxeter-diagram-components-and-finite-type]]
(1)); by the disconnected-diagram product theorem and the one-generator presentation,
$W\cong(\mathbb Z/2)^3$ ([[lem-cg-diagram-products-and-invariant-form-comparison]]
(1), [[def-hh-coxeter-matrix-word-group-and-length]]), so every subset of $S$
generates a finite subgroup:

**(i)** For every $T\subseteq S$ one has $W_T\cong(\mathbb Z/2)^T$ and
$|W_T|=2^{|T|}$, so every subset of $S$ is spherical; and in the $B$-orthogonal
decomposition $V_T=\bigoplus_{s\in T}\mathbb Re_s$
([[lem-cg-diagram-products-and-invariant-form-comparison]] (1),(2)) the Coxeter
cell of [[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] (1) is the
rectangular box
$$C_T=\prod_{s\in T}\,[-d_se_s,\ d_se_s],$$
a compact convex polyhedral cell of dimension $|T|$ whose nonempty face poset is the
coset poset of $W_T$: each nonempty face is indexed uniquely by a coset $uW_U$, and
face containment matches coset containment; it is a Euclidean cube when the
numbers $d_s$, $s\in T$, are equal. For $T=S$ the cell is a (possibly
rectangular) $3$-cube.

**(ii)** The cellulation of $\Sigma$ has $8$ vertices, $12$ edges, $6$
rectangular $2$-cells (combinatorial squares) and one $3$-cell, hence $27$ cells
in all
([[lem-cg-spherical-coset-inclusion-and-intersection]] (1),(3));
$\Sigma$ is homeomorphic to the barycentrically subdivided box $C_S$
([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)), which is convex
and hence contractible, and the alternating cell count gives Euler
characteristic $8-12+6-1=1$.

**(iii)** The proper cells of the cellulation form the boundary
$\partial\Sigma\cong S^2$, the cubical $2$-sphere with $8$ vertices, $12$ edges
and $6$ rectangular $2$-faces (combinatorial squares). The Coxeter complex of
[[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (4) is the dual
cellulation of the same sphere: it has $6$ vertices, the codimension-one cosets
$wW_{S\setminus\{s\}}$, and $8$ triangles, one for each vertex of the box; it
is an octahedron.

**(iv)** The chamber $K=|\mathbb S|$ is the Boolean-lattice order complex;
under $T\mapsto\mathbf 1_T$ it is the six-tetrahedron staircase triangulation
of $[0,1]^S$, since its maximal chains are the $3!=6$ chains
$\emptyset\subset\{s_1\}\subset\{s_1,s_2\}\subset S$. The quotient
$W\backslash\Sigma\cong K$ is compact
([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (4)); the barycentric
subdivision of $C_S$ has $8\cdot3\cdot2=48$ tetrahedra, matching the $|W|=8$
chambers, each with six tetrahedra.

**(v)** Thus the right-angled cells are boxes, cubes when the $d_s$ agree, in
contrast to the dihedral hexagon and octagon of the companion examples.

## Facts & Assumptions

**Given:** $S=\{a,b,c\}$ with $m(s,t)=2$ for all distinct $s,t$; the presented
group $W$ with length $\ell$; the space $V=\mathbb R^S$ with the Coxeter form
$B$, the canonical representation $\rho$ and the reflections $r_a$; the diagram
$\Gamma$; positive numbers $(d_s)_{s\in S}$; and the objects $\mathbb S$, $WS$,
$\Sigma$, $K$ of
[[def-cg-spherical-nerve-coset-poset-and-davis-realization]].

[F1] The diagram has vertex set $S$ and an edge between distinct $s,t$ exactly
when $m(s,t)\ge3$, so here $\Gamma$ has no edges and its components are the
singletons $\{a\},\{b\},\{c\}$; moreover $W_T=\langle s:s\in T\rangle$ is a
Coxeter system for the restricted matrix. ([[def-cg-coxeter-diagram-components-and-finite-type]]
(1),(2), [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]
(1),(2), [[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] For every $T\subseteq S$, $W_T=\langle T\rangle$ has the Coxeter
presentation restricted to $T$; in particular $W_{\{s\}}$ has the single
generator $s$ and the single relator $s^2=1$.
([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2),
[[def-hh-coxeter-matrix-word-group-and-length]], [[def-generated-subgroup]]).

[F3] If the diagram is disconnected with components $S_1,\dots,S_k$, the
multiplication map $W_{S_1}\times\dots\times W_{S_k}\to W$ is a group
isomorphism.
([[lem-cg-diagram-products-and-invariant-form-comparison]] (1)).

[F4] The Coxeter cell: for spherical $T$ the point
$x_T=\sum_{s\in T}d_sv_s^{(T)}\in V_T$ lies at distance $d_s$ from the simple
mirror of $s$, and $C_T=\operatorname{conv}(W_Tx_T)$ is a compact convex
polyhedral cell of dimension $|T|$ whose nonempty faces are exactly the sets
$\operatorname{conv}(uW_Ux_T)$, $u\in W_T$, $U\subseteq T$, each occurring for
exactly one coset $uW_U$, with face inclusion agreeing with coset inclusion. ([[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] (1)).

[F5] Reflection formula and invariance: for $a\in V$ with $B(a,a)\ne0$ the map
$r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ is linear and involutive, preserves $B$,
fixes $\{v:B(v,a)=0\}$ pointwise and satisfies $r_a(a)=-a$; moreover
$\rho(s)=r_{e_s}$.
([[def-cg-real-coxeter-form-and-reflection]] (2),(3),
[[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2),
[[def-cg-canonical-reflection-homomorphism]] (1)).

[F6] The projection $\pi\colon WS\to\mathbb S$, $wW_T\mapsto T$, is
well-defined; the members of $WS$ are the left cosets of the subgroups $W_T$,
and each fixed-type coset family partitions $W$.
([[lem-cg-spherical-coset-inclusion-and-intersection]] (1), [[def-coset]]).

[F7] The canonical barycentric-subdivision map $|WS|\to X$ is a homeomorphism
$\Sigma\cong X$ carrying the subposet below each cell address $q$ onto the
barycentric subdivision of $C_q$.
([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)).

[F8] Under this identification, cells indexed by $wW_T$ have dimension $|T|$,
and there is one $W$-orbit of cells for each spherical type.
([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)).

[F9] The quotient $W\backslash\Sigma$ is compact and $K$ is a strict
fundamental domain.
([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (4)).

[F10] The chamber is $K=|\mathbb S|$, the order complex of the poset of
spherical subsets; since $S$ is finite, $K$ is finite and compact.
([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (3)).

[F11] The chambers of $\Sigma$ are the images $wK$ and the map $w\mapsto wK$
is injective.
([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (4)).

[F12] Coxeter complex: in finite type the assignment
$wW_I\mapsto w\overline{C_I}$ is a bijection from the proper spherical cosets
onto the proper faces of the chamber decomposition with
$wW_I\subseteq vW_J\iff w\overline{C_J}\subseteq v\overline{C_I}$, and the
abstract simplicial complex with vertices the cosets $wW_{S\setminus\{s\}}$
and simplices the sets $\{wW_{S\setminus\{s\}}:s\notin I\}$, $I\subsetneq S$,
is a triangulation of $S^{|S|-1}$.
([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (3),(4)).

[F13] The Euler characteristic of a finite CW complex is the alternating sum of
its numbers of cells by dimension.
([[def-euler-characteristic-of-a-finite-cw-complex]]).

[F14] When $W_T\cong(\mathbb Z/2)^n$, the Coxeter polytope is a product of
intervals and is a regular $n$-cube when the generating point is equidistant
from the bounding hyperplanes (Davis, *The Geometry and Topology of Coxeter
Groups*, Example 7.3.2(iii), p. 129).

[F15] For disconnected diagram components, the spaces $V_i$ form a
$B$-orthogonal direct sum, and each factor action preserves its own component
space and fixes the other component spaces pointwise.
([[lem-cg-diagram-products-and-invariant-form-comparison]] (2)).

[F16] For a finite group $G$ and a subgroup $H$, $|G|=[G:H]|H|$.
([[thm-lagrange]]).

[F17] Coset inclusion satisfies $wW_U\subseteq w'W_T$ if and only if
$U\subseteq T$ and $w^{-1}w'\in W_T$.
([[lem-cg-spherical-coset-inclusion-and-intersection]] (2)).

[F18] The Coxeter form has $B(e_s,e_s)=1$ for every $s\in S$.
([[def-cg-real-coxeter-form-and-reflection]] (2)).

## Verification

**Proof technique:** direct construction in the orthogonal decomposition.

1.1 The diagram $\Gamma$ has no edges by [F1], so its components are the singletons $\{a\},\{b\},\{c\}$. For each singleton $s$, [F2] gives the restricted presentation with only the relator $s^2=1$: every word reduces to $1$ or $s$, while the map sending $s$ to the nonidentity element of $\mathbb Z/2$ respects the relator and separates them. Thus $W_{\{s\}}=\{1,s\}$ has order $2$. By [F3], multiplication is an isomorphism $W_{\{a\}}\times W_{\{b\}}\times W_{\{c\}}\to W$, so $W\cong(\mathbb Z/2)^3$ and $|W|=8$. For $T=\emptyset$, $W_T=\{1\}$; for $|T|=1$ the order-two calculation applies; and for $|T|\ge2$ the restricted diagram has singleton components, so [F3] gives $W_T\cong(\mathbb Z/2)^T$ and $|W_T|=2^{|T|}$. Hence every subset of $S$ is spherical and $\mathbb S$ is the full power set. [F1, F2, F3, algebra]

2.1 For $T=\emptyset$, step 1.1 and the convention $\langle\emptyset\rangle=\{1\}$ give $W_T=\{1\}$, while $V_T=\{0\}$, $x_T=0$, and $C_T=\{0\}$, the product over the empty set. For every nonempty $T$, step 1.1 gives sphericality; fix such a $T$ and let $x_T=\sum_{s\in T}d_sv_s^{(T)}$ be as in [F4]. By [F15] applied to $T$, the sum $V_T=\bigoplus_{s\in T}\mathbb Re_s$ is $B$-orthogonal, and by [F18] $B(e_s,e_s)=1$, so $B(v_s^{(T)},e_t)=\delta_{st}$ forces $v_s^{(T)}=e_s$ and $x_T=\sum_{s\in T}d_se_s$. For $s\in T$ the reflection $\rho(s)=r_{e_s}$ fixes $e_t$ pointwise for $t\in T\setminus\{s\}$, because $B(e_t,e_s)=0$ and the reflection formula of [F5] reduces to $r_{e_s}(v)=v$ when $B(v,e_s)=0$, while $r_{e_s}(e_s)=-e_s$ since $B(e_s,e_s)=1$; hence $\rho(W_T)x_T$ is exactly the set of points $\sum_{s\in T}\varepsilon_sd_se_s$ with $\varepsilon_s\in\{+1,-1\}$, the vertex set of the box of (i). [step 1.1, F4, F5, F15, F18, algebra]

2.2 By step 1.1 every $T\subseteq S$ is spherical. The cells of the cellulation are the cosets $wW_T$, one for each element of $WS$, and have dimension $|T|$ by [F7,F8]. The cosets of each $W_T$ partition $W$ by [F6], and Lagrange's formula [F16] gives their number as $|W|/|W_T|=8/2^{|T|}$: there are $8$ cosets of $W_\emptyset$ (the vertices), $3\cdot4=12$ of the rank-one parabolics (the edges), $3\cdot2=6$ of the rank-two parabolics (the rectangular $2$-cells, combinatorial squares) and one coset $W_S$ (the top $3$-cell), so there are $27$ cells in all. Since $W_S=W$ is the maximum coset, every cell is a face of the top cell, and $\Sigma=|WS|=|WS_{\le W_S}|$ is the barycentric subdivision of $C_S$ by [F7]; the contraction $H(t,x)=(1-t)x$ of the convex box $C_S$ to $0$ transfers through this homeomorphism to a contraction of $\Sigma$, while the alternating count of [F13] gives $\chi=8-12+6-1=1$. [step 1.1, F6, F7, F8, F13, F16, algebra]

3.1 Write $I_s:=[-d_se_s,d_se_s]$ and $A_s:=\{-d_se_s,d_se_s\}$. The convex hull of a product of finite sets is the product of the convex hulls: a convex combination $\sum_i\lambda_i(a_i^1,\dots,a_i^k)$ of product points has coordinates $\sum_i\lambda_ia_i^s\in\operatorname{conv}(A_s)$, and conversely a tuple of convex combinations with coefficient vectors $\lambda^1,\dots,\lambda^k$ is the convex combination of product points with weights $\lambda^1_{i_1}\cdots\lambda^k_{i_k}$; therefore $C_T=\operatorname{conv}(\rho(W_T)x_T)=\prod_{s\in T}I_s$ by [step 2.1], a box of dimension $|T|$, agreeing with the product-of-intervals description [F14]. Its nonempty faces are products with a set $U\subseteq T$ of free coordinates and signs fixed on $T\setminus U$; the face indexed by $uW_U$ has the signs of $u$ on $T\setminus U$. For $u,v\in W_T$ these faces satisfy $F(u,U)\subseteq F(v,V)$ exactly when $U\subseteq V$ and $u,v$ have the same signs outside $V$, which, by [F17], is equivalent to $uW_U\subseteq vW_V$. Thus every nonempty box face is indexed by exactly one parabolic coset, and face-containment and coset-containment agree (so the reverse-inclusion nonempty face and coset posets agree as well); the additional empty face has no coset index. [F4, F17, F14, step 2.1, algebra]

4.1 By step 1.1 all proper subsets are spherical, and they index exactly the proper nonempty faces of the top cell $C_S$ by [F4]; by [F7] those faces are the boundary cells of $\Sigma$, so they are the $8$ vertices, $12$ edges and $6$ rectangular $2$-faces of [step 2.2]. By step 3.1, $C_S=\prod_{s\in S}[-d_se_s,d_se_s]$ in the orthonormal coordinates $e_a,e_b,e_c$; radial projection $x\mapsto x/\|x\|$ sends $\partial C_S$ to $S^2$ and has continuous inverse $u\mapsto u/\max_{s\in S}(|u_s|/d_s)$, so this boundary is a $2$-sphere; the alternating count gives $8-12+6=2$ by [F13]. [step 1.1, step 2.2, step 3.1, F4, F7, F13, algebra]

4.2 The chamber $K=|\mathbb S|$ is the order complex of the full power set of $S$ by [F10] and [step 1.1]. Every chain extends to a maximal chain. Map each vertex $T$ to its characteristic vector $\mathbf 1_T\in[0,1]^S$. For a permutation $(s_1,s_2,s_3)$, the chain $\emptyset\subset\{s_1\}\subset\{s_1,s_2\}\subset S$ gives a tetrahedron with vertices $0,e_{s_1},e_{s_1}+e_{s_2},\mathbf 1_S$. Every point $y\in[0,1]^S$ lies in one of these tetrahedra: choose an ordering $y_{s_1}\ge y_{s_2}\ge y_{s_3}$ and write it as the convex combination with coefficients $1-y_{s_1}$, $y_{s_1}-y_{s_2}$, $y_{s_2}-y_{s_3}$, and $y_{s_3}$ on those four vertices. The coefficients are nonnegative and sum to one; strict coordinate orders give disjoint tetrahedron interiors, while ties make the corresponding coefficient differences zero and put the point in a shared face. Hence these six characteristic-vector tetrahedra triangulate the cube and give a homeomorphism $K\cong[0,1]^S$; $K$ has six top simplices. By [F9] the quotient $W\backslash\Sigma$ is homeomorphic to $K$, and by [F11] the chambers are the eight distinct translates $wK$ [step 1.1]. By step 3.1, $C_S$ is a box; its barycentric subdivision has $8\cdot3\cdot2=48$ top simplices, by choosing a box vertex, an incident edge and an incident $2$-face; this agrees with the $8\cdot6=48$ tetrahedra in the chamber translates. [F9, F10, F11, step 1.1, step 2.2, step 3.1, algebra]

5.1 Write an element of $W$ as its sign vector $(\varepsilon_a,\varepsilon_b,\varepsilon_c)\in\{\pm1\}^3$ under the direct-product isomorphism of step 1.1. A Coxeter-complex vertex of type $S\setminus\{s\}$ is the coset $wW_{S\setminus\{s\}}$; it is determined exactly by the $s$-coordinate $\varepsilon_s$, since that parabolic changes the other two coordinates freely. Thus the six Coxeter-complex vertices are the three opposite pairs $(s,+1),(s,-1)$ for $s\in S$. The chamber indexed by $w$ is the triangle with vertices $(a,\varepsilon_a),(b,\varepsilon_b),(c,\varepsilon_c)$, so the eight chambers are precisely all choices of one vertex from each opposite pair. This is the octahedral triangulation: its vertices are the six signed coordinate directions and its triangles choose one from each opposite pair. By step 3.1 these labels are the coordinate faces of the box; a rectangular $2$-face with fixed $s$-coordinate $\varepsilon_s$ corresponds to the Coxeter vertex $(s,\varepsilon_s)$; a box vertex $(\varepsilon_a,\varepsilon_b,\varepsilon_c)$ corresponds to the Coxeter triangle with those three vertices; a box edge with two fixed coordinates corresponds to the Coxeter edge joining the two matching signed vertices; and their incidences are reversed. This proves that the cubical boundary and the Coxeter complex are dual cellulations of the same $2$-sphere, not the same cellulation. [step 1.1, step 3.1, step 4.1, F12, algebra]

6.1 The clauses are proved: (i) is [step 2.1] with [step 3.1], (ii) is [step 2.2], (iii) is [step 4.1] with [step 5.1], (iv) is [step 4.2], and (v) restates (i). No Choice is used: all groups, hulls and cell families here are finite, and the only identifications are the explicit ones of the cited clauses. [step 2.1, step 2.2, step 3.1, step 4.1, step 4.2, step 5.1, given] ∎

## Remarks

The item remains escalated while these in-run suppliers require current decisions or audits. Consumer `ex-cg-right-angled-cube-davis-complex` uses `def-cg-spherical-nerve-coset-poset-and-davis-realization` in step 4.2; `lem-cg-spherical-coset-inclusion-and-intersection` in steps 2.2 and 3.1; `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` in steps 2.1, 3.1, and 4.1; and `thm-cg-davis-complex-cell-incidence-and-stabilizers` in steps 2.2, 4.1, and 4.2. Its cross-batch suppliers are `def-cg-coxeter-diagram-components-and-finite-type` (step 1.1); `lem-cg-diagram-products-and-invariant-form-comparison` (steps 1.1 and 2.1); `def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`, and `def-cg-canonical-reflection-homomorphism` (step 2.1); `thm-hh-parabolic-minimal-representatives-and-length-additivity` and `def-hh-coxeter-matrix-word-group-and-length` (step 1.1); and `thm-cg-finite-chamber-tiling-and-coset-face-identification` (step 5.1). These supplier statements were inspected provisionally; keep each obligation open until its current Step-3 decision and this exact use are reconciled.
