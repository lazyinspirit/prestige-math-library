---
id: lem-smooth-euclidean-hypersurface-graph-and-localization
kind: lemma
title: Smooth Euclidean hypersurface graphs and compact localization
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- thm-euclidean-inverse-function-theorem
- thm-euclidean-implicit-function-theorem
- thm-chain-rule-for-total-derivatives
- thm-algebra-of-total-derivatives
- thm-algebra-of-derivatives
- thm-continuous-partial-derivatives-imply-total-differentiability
- thm-total-derivative-computes-directional-and-partial-derivatives
- def-ck-and-multi-index-notation-in-several-variables
- thm-symmetry-of-higher-mixed-partials
- thm-laplace-cofactor-expansion
- thm-determinant-multiplicative
- cor-real-spectral-theorem-for-self-adjoint-endomorphisms
- def-embedded-submanifold-and-slice-chart
- def-euclidean-hypersurface-normal-shape-operator-and-curvature
- lem-schwartz-cutoffs-from-the-standard-smooth-step
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Lebl, Basic Analysis II, §8.5
    url: https://www.jirka.org/ra/html/sec_svinvfuncthm.html
    locator: Theorem 8.5.1 inverse derivative formula; the smooth adjugate bootstrap and finite localization are derived locally.
  - title: Ved Datar, Lectures on Riemannian Geometry
    url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    locator: Definition 14.2.1 and Corollary 14.2.2, printed p.104; Example 14.2.4, p.105; Definition 14.2.7 and Remark 14.2.8, p.106. The explicit graph determinant is derived locally in this item or its suppliers.
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

For $n\ge2$, every smooth embedded hypersurface $S\subset\mathbb R^n$ is locally, after a rigid motion, the graph $X(y)=(y,h(y))$ of a $C^\infty$ function. The tangent, normal, shape operator and curvature of [[def-euclidean-hypersurface-normal-shape-operator-and-curvature]] are well defined and agree with their usual Euclidean hypersurface meanings. Every continuous unit normal on $S$ is locally smooth. Every compact $K\subset S$ admits finitely many graph pieces $S_j$ and nonnegative smooth functions $\chi_j$ on $S$, compactly supported in $S_j$, whose sum is one on a neighbourhood of $K$. If $S$ itself is compact, that sum is one everywhere.

## Facts & Assumptions

[F1] The earlier inverse and implicit function theorems supply $C^1$ inverses and their derivative formulas. ([[thm-euclidean-inverse-function-theorem]], [[thm-euclidean-implicit-function-theorem]])

[F2] The first-order total chain rule and sum/scalar rules hold. One-variable product and quotient rules apply on coordinate lines; continuous partials give total derivatives, whose columns are the partials. Smoothness is defined by all ordered iterated partials, mixed partials are symmetric at the stated regularity, and the cited determinant and spectral identities hold. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]], [[thm-symmetry-of-higher-mixed-partials]], [[thm-laplace-cofactor-expansion]], [[thm-determinant-multiplicative]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]])

[F3] Embedded hypersurfaces have slice charts. ([[def-embedded-submanifold-and-slice-chart]])

[F4] Tangents, normals and curvature have the local Euclidean definitions. ([[def-euclidean-hypersurface-normal-shape-operator-and-curvature]])

[F5] Smooth cutoffs exist on Euclidean balls. ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]])

[F6] Euclidean compactness gives finite subcovers and extrema. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]])

## Proof

**Given:** A smooth embedded hypersurface $S$ and, for the localization assertion, a compact subset $K\subset S$.

1.1 Smooth inverse bootstrap. On coordinate lines the one-variable rules [F2] give $\partial_j(uv)=(\partial_ju)v+u\partial_jv$ and $\partial_j(1/u)=-(\partial_ju)/u^2$ where $u\ne0$. Induction on derivative order proves that products and nonvanishing quotients of $C^r$ functions are $C^r$. For compositions, [F2] gives $\partial_j(f\circ g)=\sum_k(\partial_k f\circ g)\partial_jg_k$; induction using the product rule and continuity proves $C^r$ closure under composition for each finite $r$. The earlier $C^1$ inverse theorem [F1] gives a $C^1$ inverse $g$ to a smooth map $f$ with invertible derivative, with $Dg=(Df\circ g)^{-1}$. For an invertible finite matrix $A$, cofactor expansion gives $A^{-1}=\operatorname{adj}(A)/\det A$: multiplying either side by $A$ gives the identity by Laplace expansion, including the off-diagonal expansions with two equal rows. Its entries are polynomial quotients with nonzero denominator, hence smooth. If $g$ is $C^r$ and $f$ smooth, the repeated product and chain rules make $(Df\circ g)^{-1}$ $C^r$, so the displayed derivative makes $g$ $C^{r+1}$. Induction from $r=1$ proves $g$ smooth. The same bootstrap applies to the implicit theorem, whose solution is a component of the inverse of $(x,z)\mapsto(x,F(x,z))$. [F1, F2, algebra]

2.1 Graphs from slices. In a slice chart $\theta$ near $p$, let $F$ be its last coordinate. Then $S\cap V=F^{-1}(0)$ and $DF$ has rank one, because $D\theta$ is invertible by differentiating the chart inverse identities. Apply the real spectral theorem in [F2] to the self-adjoint rank-one orthogonal projection $v\mapsto(v\cdot u)u$, where $u=\nabla F(p)/|\nabla F(p)|$. Its eigenvalue-one space is $\mathbb Ru$, so, after reordering and changing one sign, its orthonormal eigenbasis has last vector $u$; in these rigid coordinates $\partial_nF(p)\ne0$. The implicit theorem and step 1.1 solve $F(y,z)=0$ as $z=h(y)$ on a product neighbourhood, with $h$ smooth. Projection onto $y$ is the inverse of $X(y)=(y,h(y))$; its derivative has independent columns $(e_j,h_j)$, so $X$ is a smooth parametrization of the relatively open piece. [F1, F2, F3, step 1.1, algebra]

3.1 Coordinate independence and normal derivatives. If two parametrizations overlap, their transition is smooth and has invertible derivative, so the chain rule makes their derivative images identical and makes $D(\nu\circ X)(DX)^{-1}$ independent of the parametrization. The positive square root is smooth because it is the inverse of $t\mapsto t^2$ on $(0,\infty)$, to which step 1.1 applies. For a graph, $\nu_h=(-\nabla h,1)/\sqrt{1+|\nabla h|^2}$ is therefore smooth, unit, and perpendicular to every $(e_j,h_j)$. Since the normal space has dimension one, any continuous unit normal is $\epsilon\nu_h$ with $\epsilon$ continuous and valued in $\{1,-1\}$, hence constant on a sufficiently small connected piece. It is therefore smooth. Differentiating $|\nu|^2=1$ gives $d\nu(v)\cdot\nu=0$, so $d\nu(v)\in T_pS$. Also differentiating $\nu\cdot X_k=0$ gives $-\partial_j\nu\cdot X_k=\nu\cdot X_{jk}$, a symmetric expression by equality of mixed partials. Thus $S_\nu$ is self-adjoint. [F2, F4, step 1.1, step 2.1, algebra]

4.1 Equivalence with the Euclidean Weingarten operator. Cartesian differentiation of an ambient field along a curve is its componentwise derivative; extending a field from a graph by holding its graph coordinates fixed in the last ambient coordinate gives exactly that derivative along tangent vectors, independent of the extension because two extensions agree on every curve in $S$. Orthogonal projection therefore gives the usual Euclidean second fundamental form $(D_vw)^\perp=(D_vw\cdot\nu)\nu$. The differentiated orthogonality in step 3.1 gives $\langle S_\nu v,w\rangle=\langle(D_vw)^\perp,\nu\rangle$ and $S_\nu=-(D_v\nu)^\top=-d\nu(v)$. This is precisely the shape operator for the Euclidean ambient connection. Its self-adjoint eigenvalues are the usual principal curvatures, and their product is its determinant. Replacing $\nu$ by $-\nu$ replaces $S_\nu$ by $-S_\nu$, so $K_{-\nu}=(-1)^{n-1}K_\nu$ and nonvanishing is independent of local orientation. Rigid motions conjugate the shape operators by their orthogonal derivative and preserve the determinant. [F2, F4, step 3.1, algebra]

5.1 Compact localization. For each point of $K$, choose a graph neighbourhood and an ambient ball whose closed, slightly larger ball meets $S$ only inside that graph neighbourhood. An ambient smooth bump supported in the larger ball and equal to one on the smaller ball exists by [F5]. Compactness gives finitely many smaller balls covering $K$, with bumps $\beta_j$. Their restrictions have supports compact in their graph pieces: inside the larger closed ball the hypersurface is a relatively closed zero set of the defining function from step 2.1. Put $B=\sum_j\beta_j$. It has positive minimum on $K$. Choose a smooth real cutoff $\eta$ that is zero for $B\le c/2$ and one for $B\ge c$, where $0<c<\min_K B$. Define $\chi_j=\eta(B)\beta_j/B$ where $B>0$, and zero where $B=0$. These functions are smooth, nonnegative, supported compactly in their graph pieces, and sum to $\eta(B)=1$ on a neighbourhood of $K$. If $K=S$, the sum is one on $S$. If $K$ is empty, take the empty family. [F5, F6, step 2.1, algebra] ∎
