---
id: lem-cg-convex-root-subcomplex-intersection-and-purity
kind: lemma
title: "Intersection of root subcomplexes and purity under convexity"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 21
deps:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - def-cg-brady-watt-ordered-spherical-root-complex
  - lem-cg-ordered-root-complex-is-geometric-simplicial
  - lem-cg-steinberg-bipartite-root-enumeration
  - def-real-and-complex-inner-product-space
  - def-linear-independence
  - def-linear-subspace
  - def-linear-basis
  - def-dimension
  - cor-finite-dimensional-subspaces-are-closed
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-abstract-simplicial-complex
  - def-geometric-realization-of-an-abstract-simplicial-complex
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "T. Brady and C. Watt, Lattices in Finite Real Reflection Groups, Transactions of the American Mathematical Society 360 (2008), 4809–4844, arXiv:math/0501502"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "§7, proof of Theorem 7.8, printed pp. 24–25: the source asserts that a maximal simplex of the intersection spans the intersection complex, without proof; §7.8 also uses the common-face realization identity. The complete 29-page article was read."
---

## Statement

Let $(W,S)$ be an irreducible finite-type Coxeter system, and let $c$ be the bipartite Coxeter element with positive-root order, ordered root complex $X(c)$, cones $c[F]$, $c[Y]$, and realizations $|Y|=c[Y]\cap S^{n-1}\subset V=\mathbb R^S$ of [[def-cg-brady-watt-ordered-spherical-root-complex]] (1)–(3), [[lem-cg-steinberg-bipartite-root-enumeration]] (3), and [[def-real-and-complex-inner-product-space]]. The vertices of every face are linearly independent unit positive roots, all in a common open half-space ([[lem-cg-ordered-root-complex-is-geometric-simplicial]] (2)); all spans are taken in $V$ ([[def-linear-subspace]]). Set $c[\emptyset]=\{0\}$, and let $Y,Z$ be subcomplexes of $X(c)$ ([[def-abstract-simplicial-complex]], [[def-geometric-realization-of-an-abstract-simplicial-complex]]). Then:

**(1) Realization of an intersection.** If $Y\cap Z$ is the subcomplex consisting of simplices common to both, then
$$c[Y\cap Z]=c[Y]\cap c[Z],\qquad |Y\cap Z|=|Y|\cap|Z|.$$
If $Y$ and $Z$ have no common vertex, this reads $c[Y]\cap c[Z]=\{0\}$ and $|Y\cap Z|=\emptyset$.

**(2) Purity under convexity.** Suppose $Y\cap Z$ has at least one vertex. Put $C=c[Y]\cap c[Z]$ and $K=|Y|\cap|Z|$. If $C$ is convex, then every maximal simplex $F$ of $Y\cap Z$ satisfies
$$\operatorname{span}(F)=\operatorname{span}(C).$$
Under the common-open-half-space condition above, convexity of $C$ is equivalent to geodesic convexity of $K$: for any two points of $K$, the shorter great-circle arc between them lies in $K$. Consequently all maximal simplices have dimension $\dim\operatorname{span}(C)-1$, so $Y\cap Z$ is pure (all maximal simplices have the same dimension).

**(3) Small cases.** If $Y\cap Z$ consists of one vertex $v$, its unique maximal simplex is $\{v\}$ and its span is $\operatorname{span}(C)=\operatorname{span}(v)$. If $Y\cap Z$ has no vertex, then $c[Y\cap Z]=\{0\}$, $|Y\cap Z|=\emptyset$, and (2) is vacuous.

**(4) Limits.** The result does not identify $\operatorname{span}(c[Y]\cap c[Z])$ with $\operatorname{span}(c[Y])\cap\operatorname{span}(c[Z])$. In particular, it does not determine $M(\alpha)\cap M(\beta)$ for $Y=X(\alpha)$ and $Z=X(\beta)$. No Choice is used.

## Facts & Assumptions

**Given:** The bipartite ordered root complex $X(c)$ of an irreducible finite-type Coxeter system, and two of its subcomplexes $Y,Z$.

[F1] The vertex set $\Phi_+$ is finite. Every face has linearly independent unit vertices, these vertices lie in a common open half-space, and for any two faces $F,F'$ one has $c[F]\cap c[F']=c[F\cap F']$ ([[def-cg-brady-watt-ordered-spherical-root-complex]], [[lem-cg-steinberg-bipartite-root-enumeration]], [[lem-cg-ordered-root-complex-is-geometric-simplicial]] (2),(4)).

[F2] The empty face is a simplex, subcomplexes are closed under taking faces, and their realizations are the sphere sections of their positive-cone unions ([[def-abstract-simplicial-complex]], [[def-geometric-realization-of-an-abstract-simplicial-complex]], [[def-cg-brady-watt-ordered-spherical-root-complex]] (3)).

[F3] A finite-dimensional subspace of a normed space is closed ([[cor-finite-dimensional-subspaces-are-closed]]). For each fixed $v\in V$, $x\mapsto\langle x,v\rangle$ is continuous by Cauchy–Schwarz ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F4] The dimension of a simplex with $m$ vertices is $m-1$; an independent list spanning a subspace is a basis of that subspace ([[def-abstract-simplicial-complex]], [[def-linear-basis]], [[def-dimension]]).

## Proof

**Proof technique:** use unique simplex carriers for the cone identity, then use a limit point and finiteness of the face set to prove purity.

**Given:** The finite root complex and subcomplexes $Y,Z$ above. Write $C=c[Y]\cap c[Z]$ and $K=|Y|\cap|Z|$.

1.1 (Cone and realization intersections.) If $x\in c[Y]\cap c[Z]$, then $x\in c[F]$ for some face $F\in Y$ and $x\in c[F']$ for some face $F'\in Z$. By [F1], $x\in c[F\cap F']$, and $F\cap F'$ is a common face, so $x\in c[Y\cap Z]$. The reverse inclusion follows from $Y\cap Z\subseteq Y,Z$. Intersecting this cone equality with $S^{n-1}$ gives the realization equality. If there is no common vertex, every common face is empty, so the cone intersection is $c[\emptyset]=\{0\}$ and its sphere section is empty. [F1, F2]

1.2 (Closed face cones.) The empty-face cone is $\{0\}$ and is closed. Let $F=\{v_1,\ldots,v_m\}$ be a nonempty face, $U=\operatorname{span}(F)$, and let $G=(\langle v_i,v_j\rangle)_{i,j}$ be its Gram matrix. For any nonzero coefficient vector $a$, $a^{\mathsf T}Ga=\|\sum_i a_i v_i\|^2>0$ by independence, so $G$ is invertible. For $x\in U$, its unique coordinate vector in the basis $F$ is $G^{-1}(\langle x,v_j\rangle)_j$, whose coordinates are continuous by [F3]. Hence $c[F]$ is the intersection of the closed subspace $U$ with the inverse images of the closed half-line $[0,\infty)$ under these coordinate maps; it is closed in $V$. Since $X(c)$ has finitely many faces, $c[Y]$, $c[Z]$, and $C$ are finite unions or intersections of closed face cones and are closed. [F1, F3, F4, algebra]

1.3 (Cone and spherical convexity.) Every nonzero vector of $C$ is a nonnegative combination of positive-root vertices, so the common open-half-space functional in [F1] is strictly positive on it; in particular $K$ contains no antipodal pair. If $C$ is convex, the segment between any $u,v\in K$ lies in $C$ and avoids $0$; normalizing that segment gives the shorter great-circle arc, so $K$ is geodesically convex. Conversely, suppose $K$ is geodesically convex. For nonzero $x,y\in C$, write $x=ru$, $y=sv$ with $r,s>0$ and $u,v\in K$. If $u=v$, then $x+y\in C$. Otherwise the normalized positive combination $(ru+sv)/\|ru+sv\|$ lies on the shorter arc from $u$ to $v$, hence in $K$, so again $x+y\in C$. Thus $C$ is closed under addition and nonnegative scaling, and is convex. [F1, algebra]

2.1 (Full span of each maximal simplex.) Let $L=\operatorname{span}(C)$. Since $Y\cap Z$ has a vertex, $L\ne\{0\}$. Choose a maximal simplex $F$ of $Y\cap Z$; it is nonempty. Suppose $U:=\operatorname{span}(F)$ is a proper subspace of $L$. The point $x:=\sum_{v\in F}v$ has strictly positive coordinates in the independent list $F$. The common vertices span $L$ by step 1.1, so some common vertex $q$ lies outside $U$. For $0<t\le1$, convexity gives $x_t=(1-t)x+tq\in C$, and $x_t\notin U$. Take $t_j=1/j$ for $j\ge2$. There are finitely many faces of $Y\cap Z$, so one face $F'$ has $x_{t_j}\in c[F']$ for infinitely many $j$. Along that subsequence $x_{t_j}\to x$, and step 1.2 makes $c[F']$ closed; hence $x\in c[F']$. Since $x\in c[F]$, [F1] gives $x\in c[F\cap F']$. The coordinates of $x$ in the independent family $F$ are all strictly positive, so uniqueness of those coordinates forces $F\subseteq F'$. Maximality gives $F=F'$, contradicting $x_{t_j}\notin U$. Therefore $\operatorname{span}(F)=L$. [F1, step 1.1, step 1.2, algebra]

3.1 (Empty and one-vertex cases; dimensions.) If $Y\cap Z$ has no vertex, its sole face is $\emptyset$, step 1.1 gives the empty realization, and the nonempty hypothesis of (2) fails. If it has exactly one vertex $v$, its only nonempty face is $\{v\}$; then $C=c[\{v\}]$ is a ray, its span is $\operatorname{span}(v)$, and the unique maximal simplex spans it. In the general nonempty case, step 2.1 gives $\operatorname{span}(F)=L$ for every maximal simplex. By [F4], $|F|=\dim L$ and $\dim F=\dim L-1$; hence all maximal simplices have the same dimension, as claimed. [F2, F4, step 1.1, step 2.1]

4.1 The span of $K$ equals $L$: every nonzero point of $C$ is a positive scalar multiple of its normalization in $K$, and $K\subseteq C$. This also verifies the span formulation for the single-vertex case and completes (2)–(3). [F1, step 3.1] ∎

## Remarks

- **Open supplier obligations.** `def-cg-brady-watt-ordered-spherical-root-complex` supplies the bipartite complex, cone and realization conventions in the Statement, Facts [F1]–[F2], and proof steps 1.1 and 1.3; `lem-cg-steinberg-bipartite-root-enumeration` supplies the finite positive-root order and common-half-space data in the Statement, Facts [F1], and proof steps 1.3 and 4.1; `lem-cg-ordered-root-complex-is-geometric-simplicial` supplies face independence, the common-half-space condition, and common-face cone intersections in the Statement, Fact [F1], and proof steps 1.1, 1.2, 1.3, 2.1, and 4.1. These three batch-19 suppliers currently have no closed Step-3 dispositions; reconcile their completed statements and these exact uses before clearing this item's decision.
