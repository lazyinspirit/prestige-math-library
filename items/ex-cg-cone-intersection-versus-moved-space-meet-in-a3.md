---
id: ex-cg-cone-intersection-versus-moved-space-meet-in-a3
kind: example
title: "In A3 the moved spaces meet in a line, while the root complexes have no common nonempty face"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 22
deps: [ex-cg-ordered-roots-and-mu-matrix-in-a3, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-cg-brady-watt-ordered-spherical-root-complex, lem-cg-ordered-root-complex-is-geometric-simplicial, thm-cg-root-inversion-formulas-and-strong-exchange]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Thomas Brady and Colum Watt, Lattices in finite real reflection groups (arXiv:math/0501502, 29-page PDF)"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "Section 4 discussion preceding Definition 4.1, printed pp. 9-10: the source's A3 example uses gamma=(1 2 3 4), alpha=(1 3)gamma=(1 2)(3 4), and beta=(2 4)gamma=(1 4)(2 3). That is a comparison example with different gamma and beta; all data for the bipartite model below are recomputed locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Use the standard $A_3=S_4$ model, simple roots, and bipartite Coxeter element $c=(1\ 2\ 4\ 3)$ of [[ex-cg-ordered-roots-and-mu-matrix-in-a3]]. Put
$$\alpha:=(1\ 2)(3\ 4)=(1\ 4)c=R(\rho_3)c,\qquad \beta:=(1\ 3)(2\ 4)=(2\ 3)c=R(\rho_6)c.$$
Then:

**(i)** $\alpha,\beta\le_Tc$ and $\ell_T(\alpha)=\ell_T(\beta)=2$. Their lower intervals are exactly
$$[1,\alpha]_T=\{1,(1\ 2),(3\ 4),\alpha\},\qquad [1,\beta]_T=\{1,(1\ 3),(2\ 4),\beta\}.$$
Thus their only common lower bound is $1$, so their meet in $[1,c]_T$ is $1$.

**(ii)** $P_\alpha=\{\rho_1,\rho_2\}$ and $P_\beta=\{\rho_4,\rho_5\}$. The complexes are the edges $X(\alpha)=\langle\rho_1,\rho_2\rangle$ and $X(\beta)=\langle\rho_4,\rho_5\rangle$. Their only common face is the empty face, so $X(\alpha)\cap X(\beta)=\{\emptyset\}$, their spherical realizations are disjoint, and
$$c[X(\alpha)]\cap c[X(\beta)]=c[\emptyset]=\{0\}.$$

**(iii)** The moved spaces are $M(\alpha)=\mathrm{span}\{E_1-E_2,E_3-E_4\}$ and $M(\beta)=\mathrm{span}\{E_1-E_3,E_2-E_4\}$, both two dimensional, and
$$M(\alpha)\cap M(\beta)=\mathbb R\,(E_1-E_2-E_3+E_4).$$
This line contains no root: every root has exactly two nonzero coordinates, whereas every nonzero vector on the displayed line has four. In the standard Euclidean norm the displayed generator has norm $2$, while every root has norm $\sqrt2$. Hence $M(\alpha)\cap M(\beta)$ strictly contains $M(1)=\{0\}$ and is not the moved space of any common lower bound.

**(iv)** The common upper bound is $c=(1\ 4)\alpha=\beta(1\ 4)$. Thus this example has positive-root cones meeting only at $0$ and a nonzero moved-space intersection; intersecting moved spaces does not compute the meet in the absolute interval.

No Choice is used.

## Facts & Assumptions

**Given:** The A3 coordinate model, root order, and reflection convention of [[ex-cg-ordered-roots-and-mu-matrix-in-a3]]. The standard Euclidean norm is denoted $\|\cdot\|_{std}$; its half-scaled inner product is the Coxeter form $B$ used for unit roots.

[F1] In the A3 model, $\Phi_+=\{E_i-E_j:1\le i<j\le4\}$ with order $\rho_1=(12),\rho_2=(34),\rho_3=(14),\rho_4=(24),\rho_5=(13),\rho_6=(23)$, and $R(E_i-E_j)$ acts as the coordinate transposition $(i\ j)$. [[ex-cg-ordered-roots-and-mu-matrix-in-a3]] [[def-cg-real-coxeter-form-and-reflection]]

[F2] $\ell_T(w)$ is the least number of reflections in $T$ whose product is $w$, and $u\le_Tv$ means $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$. [[def-cg-reflection-length-absolute-order-and-moved-space]] (1)-(2)

[F3] For a linear map $A$, $M(A)=\operatorname{im}(A-I)$ and $F(A)=\ker(A-I)$. [[def-cg-reflection-length-absolute-order-and-moved-space]] (3)

[F4] The ordered edge relation defines $X(c)$; $P_\sigma=\{\gamma\in\Phi_+:t_\gamma\le_T\sigma\}$ and $X(\sigma)$ is its full subcomplex on $P_\sigma$; $c[\emptyset]=\{0\}$ and $c[X(\sigma)]$ is the union of the positive cones on its faces. [[def-cg-brady-watt-ordered-spherical-root-complex]] (1)-(3)

[F5] The root-reflection dictionary identifies each positive-root reflection with the reflection in its normal. [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)

[F6] Cones on two faces of $X(c)$ intersect in the cone on their common face. [[lem-cg-ordered-root-complex-is-geometric-simplicial]] (4)

## Proof

**Proof technique:** use the four coordinate permutations to compute the absolute intervals, then solve the moved-space intersection directly.

1.1 In $S_4$, $\alpha$ and $\beta$ are products of two disjoint transpositions but are not themselves transpositions, so each has reflection length $2$. The four-cycle $c=(1\ 2\ 4\ 3)=(1\ 3)(1\ 4)(1\ 2)$ has reflection length $3$: no product of at most two transpositions is a 4-cycle, since a product of two is the identity, a 3-cycle, or two disjoint transpositions. The identities $c=(1\ 4)\alpha$ and $c=\beta(1\ 4)$ show that $\alpha^{-1}c$ and $\beta^{-1}c$ are reflections (the first is a conjugate of $(1\ 4)$), hence $\alpha,\beta\le_Tc$. [F1, F2]

2.1 A reflection in this model is a transposition. For $t\in T$, $t\le_T\alpha$ exactly when $t\alpha$ is a reflection, because $\ell_T(\alpha)=2$ and $\ell_T(t)=1$. If $t=(1\ 2)$ or $(3\ 4)$, $t\alpha$ is the other factor transposition. Any other transposition connects the two pairs $\{1,2\}$ and $\{3,4\}$, and $t\alpha$ is a four-cycle. Thus the only reflections below $\alpha$ are $(1\ 2)$ and $(3\ 4)$. The same argument with the factor pairs $\{1,3\}$ and $\{2,4\}$ shows that the only reflections below $\beta$ are $(1\ 3)$ and $(2\ 4)$. By the defining length equality, a proper lower element has strictly smaller reflection length, so the two lower intervals are exactly those listed in (i), and their intersection is $\{1\}$. [F1, F2, step 1.1]

3.1 The coordinate action gives $M(\alpha)=\mathrm{span}\{E_1-E_2,E_3-E_4\}$ and $M(\beta)=\mathrm{span}\{E_1-E_3,E_2-E_4\}$. By [F4]-[F5] and step 2.1, their positive-root sets are respectively $\{\rho_1,\rho_2\}$ and $\{\rho_4,\rho_5\}$. The reverse products for the ordered pairs are $R(\rho_2)R(\rho_1)=(3\ 4)(1\ 2)=\alpha\le_Tc$ and $R(\rho_5)R(\rho_4)=(1\ 3)(2\ 4)=\beta\le_Tc$, so both pairs are edges by [F4]. The vertex sets are disjoint, hence every face of $X(\alpha)$ and every face of $X(\beta)$ have common face $\emptyset$. By [F6], each corresponding pair of face cones intersects in $c[\emptyset]=\{0\}$; taking the finite unions of these face cones gives $c[X(\alpha)]\cap c[X(\beta)]=\{0\}$. Intersecting with the unit sphere also gives disjoint spherical realizations. [F1, F4, F5, F6, step 1.1, step 2.1]

4.1 Write a vector of $M(\alpha)$ as $a(E_1-E_2)+b(E_3-E_4)=(a,-a,b,-b)$ and a vector of $M(\beta)$ as $d(E_1-E_3)+e(E_2-E_4)=(d,e,-d,-e)$. Equating coordinates gives $d=a$, $e=-a$, and $b=-a$, so the intersection is exactly $\mathbb R(E_1-E_2-E_3+E_4)$. Every nonzero vector on this line has four nonzero coordinates, whereas every root in [F1] has two; therefore the line contains no root. The standard norm of its displayed generator is $2$ and that of each root is $\sqrt2$. By step 2.1, the meet is $1$, whose moved space is $\{0\}$; thus the moved-space intersection is strictly larger and is not the moved space of any common lower bound. Finally $c=(1\ 4)\alpha=\beta(1\ 4)$ is the asserted common upper bound. [F1, F3, step 1.1, step 2.1, step 3.1] ∎
