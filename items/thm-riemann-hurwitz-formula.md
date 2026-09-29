---
id: thm-riemann-hurwitz-formula
kind: theorem
title: Riemann–Hurwitz formula for compact Riemann surfaces
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - def-ramification-index-and-branch-value
  - lem-pullback-order-of-meromorphic-differentials-under-branched-maps
  - lem-finite-analytic-chart-triangulation-compact-riemann-surface
  - cor-connected-cover-of-a-simply-connected-space-is-trivial
  - def-axiom-of-choice
  - thm-convex-subsets-have-trivial-fundamental-group
  - def-euler-characteristic-of-a-finite-cw-complex
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-closed-subspace-of-a-compact-space-is-compact
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §3, Theorem 4.8, printed pp. 45–46: the topological cell-deficit proof of the Riemann–Hurwitz formula."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 3, Theorem 3.4, PDF p. 25 (printed p. 24): the Euler-characteristic count for a proper map of finite-type Riemann surfaces, including the compact Riemann–Hurwitz formula."
    - title: "Vladimir Hinich, Riemann Surfaces, lecture 7"
      url: https://math.haifa.ac.il/hinich/RSlec/lec7.pdf
      locator: "§8.5.1–8.5.3, printed pp. 8–9: triangulate the target with the branch values as vertices, lift, and count 2−2g = d·2 − Σ(e_x−1) in the sphere case."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $f:X\to Y$ be a nonconstant holomorphic map
between compact connected Riemann surfaces
([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]), let
$d=\deg f$ be its degree and $e_x=e_x(f)$ the ramification index at $x\in X$
([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]],
[[def-ramification-index-and-branch-value]]). Then the ramification sum is
finite and
$$2g(X)-2=d\bigl(2g(Y)-2\bigr)+\sum_{x\in X}\bigl(e_x-1\bigr),$$
with genus and Euler characteristic as in
[[def-genus-and-euler-characteristic-compact-riemann-surface]].

The proof is a finite cell count: a chartwise topological triangulation of $Y$,
subdivided so that every branch value is a vertex and no triangle has two
branch-value vertices, is lifted through the covering
$f:X\to Y$ off the vertices, and the vertex deficit
$\sum(e_x-1)$ appears there. The local analytic interface
[[lem-pullback-order-of-meromorphic-differentials-under-branched-maps]] records
the same deficit as the order formula for pulled-back differentials; no global
canonical differential and no Stokes or de Rham input is assumed. The Axiom of
Choice enters only through the genus-classification interface of
[[def-genus-and-euler-characteristic-compact-riemann-surface]].

## Facts & Assumptions

**Given:** A nonconstant holomorphic map $f:X\to Y$ of compact connected Riemann surfaces.

[F1] Since $X$ is compact and $Y$ is Hausdorff, and holomorphic maps are continuous, $f$ is proper: for compact $K\subseteq Y$ the preimage $f^{-1}(K)$ is closed in the compact space $X$, hence compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F2] Degree theory of proper maps: $f$ is onto with finite fibres, has a degree $d$ with $d=\sum_{x\in f^{-1}(y)}e_x(f)$ for every $y\in Y$, its branch values are locally finite and finite because $Y$ is compact, and off the branch locus $f$ is a finite-sheeted covering of degree $d$; moreover at every $x$ there are centred charts in which $f$ is $z\mapsto z^{e_x}$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[def-ramification-index-and-branch-value]]).

[F3] Chartwise triangulation: for every finite $F\subseteq Y$ there are finitely many chart-contained closed topological triangles, each supplied with a homeomorphism from the standard closed triangle; they cover $Y$, meet face to face in full edges or vertices, and avoid $F$ on their edges ([[lem-finite-analytic-chart-triangulation-compact-riemann-surface]]). This is the topological refinement supplied by the chart lemma; its new edges carry no asserted analytic regularity.

[F4] The homeomorphism from a standard closed triangle in [F3] transports the elementary face and edge subdivisions of that triangle to topological subdivisions of its image. A face insertion changes $(V,E,F)$ by $(1,3,2)$; an edge insertion in the boundaryless surface changes it by $(1,3,2)$. Thus each operation preserves $V-E+F$. Choose the new arcs to avoid the finitely many other prescribed points and use the same split on both sides of a shared edge. These are finite topological cell operations; no smooth-edge subdivision claim is needed.

[F5] Simply connected bases: every nonempty convex subset of $\mathbb R^n$ is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]), and every connected covering of a locally path-connected simply connected space is one-sheeted and isomorphic to the identity covering ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]).

[F6] Euler characteristic and genus: a finite face-to-face topological triangulation gives a finite CW structure by taking its vertices, open edges and open faces as cells. Hence for a compact Riemann surface $Z$, $\chi(Z)=V-E+F=2-2g(Z)$ ([[def-genus-and-euler-characteristic-compact-riemann-surface]], [[def-euler-characteristic-of-a-finite-cw-complex]]).

[F7] The Axiom of Choice ([[def-axiom-of-choice]]).


## Proof

**Proof technique:** direct.

1.1 (Properness and finiteness of the ramification.) By [F1], $f$ is proper, so [F2] applies. The branch values of $f$ form a finite set $B\subseteq Y$ because $Y$ is compact [F2]. The set $f^{-1}(B)$ is a finite union of finite fibres, hence finite. Every ramification point lies in $f^{-1}(B)$, although a fibre over a branch value can also contain unramified points. Thus $\sum_{x\in X}(e_x-1)$ has only finitely many nonzero terms. [F2]

2.1 (A topological triangulation with isolated branch vertices.) Apply [F3] with $F=B$ to obtain a finite face-to-face topological triangulation $\mathcal T$ whose edges avoid $B$. Insert each $b\in B$ into the open face containing it by joining it to that face's three vertices, choosing the arcs to avoid the other finitely many points of $B$ [F4]. Call the resulting triangulation $\mathcal T_0$; every branch value is now a vertex. Next choose one interior point on every edge of $\mathcal T_0$ and perform the edge subdivision of [F4], including the matching splits in its two incident faces. Call the final triangulation $\mathcal T'$ and its counts $V',E',F'$. Every old edge has been split, while an edge newly drawn during subdivision has its split point as an endpoint. Thus no edge of $\mathcal T'$ joins two vertices of $\mathcal T_0$, although a new edge may join two split points. In particular no edge, and hence no triangular face, has two branch-value vertices. Every subdivision preserves the topological cell count, so $V'-E'+F'=\chi(Y)$ by [F4] and [F6]. [F3, F4, F6, step 1.1]

3.1 ($f$ is a degree-$d$ covering off the vertex set.) Let $V'$ be the vertex set of $\mathcal T'$ and put $Y^\ast:=Y\setminus V'$. By step 2.1 the branch locus is contained in $V'$, so no point of $Y^\ast$ is a branch value; by [F2] the restriction $f^\ast:f^{-1}(Y^\ast)\to Y^\ast$ is then a covering map of degree $d$: every point of $Y^\ast$ has an evenly covered neighbourhood on which $f$ is a $d$-sheeted covering. [F2, step 2.1]

3.2 (Vertices above the vertices.) For each $v\in V'$ the degree formula of [F2] gives $\sum_{x\in f^{-1}(v)}e_x=d$, and every $x$ there satisfies $e_x\ge1$; hence $|f^{-1}(v)|=d-\sum_{x\in f^{-1}(v)}(e_x-1)$. Summing over the finitely many vertices $v\in V'$ gives $V_X=|f^{-1}(V')|=dV'-\sum_{x\in X}(e_x-1)$, because a point with $e_x>1$ is a ramification point and its image in $B$ is a vertex of $\mathcal T'$ by step 2.1, while a point with $e_x=1$ contributes nothing. [F2, step 2.1]

4.1 (Each open cell has exactly $d$ lifts.) Let $C\subseteq Y^\ast$ be the relative interior of an edge or an open face of $\mathcal T'$. An open edge is homeomorphic to the convex open interval, hence simply connected, and an open face is homeomorphic to an open triangle, which is convex, hence simply connected [F5]; a homeomorphism transports null-homotopies of loops, so both are simply connected in the sense of [F5]. Each connected component of $(f^\ast)^{-1}(C)$ is a connected covering of $C$, hence is one-sheeted over $C$ by [F5]; since every fibre of $f^\ast$ over $C$ has exactly $d$ points, $(f^\ast)^{-1}(C)$ has exactly $d$ components, each mapped homeomorphically onto $C$ by $f$. [F5, step 3.1]

5.1 (The lifted cells form a finite topological triangulation of $X$.) Fix a closed target triangle $T$ of $\mathcal T'$. By step 2.1, $T$ contains at most one branch value $v$, and if present it is a vertex. Put $T^\dagger=T\setminus\{v\}$ in that case and $T^\dagger=T$ otherwise. The homeomorphism from a Euclidean closed triangle in [F3] transports its straight-line contraction away from one vertex, so $T^\dagger$ is connected and simply connected. The covering of $Y\setminus B$ supplied by [F2], restricted to $T^\dagger$, therefore has $d$ components, each mapped homeomorphically to $T^\dagger$ by [F5]. At an unramified vertex the local inverse of $f$ extends the sheet uniquely. At a branch vertex $v$, choose a small coordinate disk $D$ about $v$ such that $f^{-1}(D)$ is the disjoint union of coordinate disks about the finitely many points of $f^{-1}(v)$, with $f$ on each given by $z\mapsto z^{e_x}$; compactness of $X$ excludes further preimage components after shrinking $D$. The closed-triangle homeomorphism gives a neighbourhood basis of $v$ inside $T$ whose punctured members are connected. Take one such punctured corner neighbourhood contained in $D$. Its image under any one sheet inverse $T^\dagger\to X$ is connected and therefore lies in one of those disjoint source disks, centred at some $x\in f^{-1}(v)$. As points of that corner approach $v$, the local equation $z^{e_x}=w$ forces their inverse images to approach $x$. Thus this sheet inverse extends continuously to $v$ by assigning it $x$. The extended map from compact $T$ to Hausdorff $X$ is injective, since it was injective on $T^\dagger$ and $x$ lies over the omitted target point, and is therefore a homeomorphism onto a closed topological triangle. The same corner argument closes each lifted open edge to an interval, including at a ramified endpoint. [F2, F3, F5, step 2.1, step 4.1]

6.1 These closed lifted triangles meet face to face. Two different lifts of one target triangle have disjoint interiors and open edge lifts; by the local inverse at every unramified point they can meet only over its possible single branch vertex, hence in at most one vertex. For different target triangles, their images meet in at most one full target edge or one target vertex by [F3]. Over the interior of a common edge, the covering has exactly one lifted face on each local side of each lifted edge. An edge has at most one branch-value endpoint by step 2.1. If two closed lifted faces over adjacent target faces meet above both endpoints of that edge, they meet above an unramified endpoint; its unique local inverse makes their lifted edge germs coincide, and uniqueness of lifting along the connected open edge makes the whole lifted edge coincide. Thus they cannot meet in two vertices without sharing the full edge. Since each closed lifted triangle maps homeomorphically to its target triangle, two lifted triangles either share that one full lifted edge, share one vertex above a target vertex, or are disjoint. The local sectors of $z\mapsto z^{e_x}$ occur cyclically around a ramified source vertex, and ordinary local inverses give the usual circle links elsewhere. The lifted data therefore give a finite topological triangulation and hence a finite CW structure on $X$ by [F6]. There are $V_X:=|f^{-1}(V')|$ vertices, $E_X=dE'$ open edges and $F_X=dF'$ open faces by step 4.1, so $\chi(X)=V_X-E_X+F_X$. [F2, F3, F6, step 2.1, step 4.1, step 5.1]

7.1 (The cell count.) Combining steps 6.1 and 3.2, $$\chi(X)=V_X-E_X+F_X=dV'-\sum_{x\in X}(e_x-1)-dE'+dF'=d\bigl(V'-E'+F'\bigr)-\sum_{x\in X}(e_x-1)=d\,\chi(Y)-\sum_{x\in X}(e_x-1),$$ using $\chi(Y)=V'-E'+F'$ from step 2.1. [step 2.1, step 6.1, step 3.2]

8.1 (Substituting $\chi=2-2g$.) By [F6], $\chi(X)=2-2g(X)$ and $\chi(Y)=2-2g(Y)$; substituting into step 7.1 gives $2-2g(X)=d(2-2g(Y))-\sum_{x\in X}(e_x-1)$, and rearranging yields $2g(X)-2=d(2g(Y)-2)+\sum_{x\in X}(e_x-1)$. [F6, step 7.1]

9.1 (Conclusion.) The formula holds, and the ramification sum is finite by step 1.1. The Axiom of Choice is used exactly through the genus interface [F6] of [F7], that is, through the topological classification theorem on which it rests; the triangulation, its subdivision, the covering triviality over the simply connected cells and the local model are choice-free, every selection being made from finitely many explicit cells and fibres. [F7, step 1.1, step 8.1] ∎


## Remarks

The two interfaces of the statement are deliberately separated. The covering side is [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], which supplies the degree and the local model $z\mapsto z^{e}$; the genus side is [[def-genus-and-euler-characteristic-compact-riemann-surface]]. The local analytic bridge to the divisor language is [[lem-pullback-order-of-meromorphic-differentials-under-branched-maps]], whose formula $\operatorname{ord}_x(f^\ast\eta)=e_x\operatorname{ord}_{f(x)}(\eta)+e_x-1$ produces the same deficit $e_x-1$ as the cell count above, without requiring a global nonzero differential on $Y$. For the sphere case $g(Y)=0$ the formula reads $2g(X)-2=-2d+\sum(e_x-1)$, which is the count $2-2g=d\cdot2-\sum(e_x-1)$ of the sources. The hypothesis that $X$ is compact is essential here only through properness and finite ramification; the proper degree theorem already supplies the latter, so no separate finiteness argument for critical points is needed beyond step 1.1.
