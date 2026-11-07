---
id: thm-relative-k0-determinant-fiber-comparison
kind: theorem
title: Relative K0 Is the Component Group of the Determinant-Functor Homotopy Fiber
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-relative-algebraic-k0-group
- def-universal-determinant-functor-on-a-perfect-derived-category
- thm-universal-determinant-functor-exists-on-small-triangulated-categories
- thm-k1-of-perfect-complex-category-is-a-quotient
- thm-determinant-k0-of-perfect-category-is-projective-k0
- thm-bounded-heart-determinant-comparison
- thm-relative-k-theory-localization-sequence
sources:
  references:
  - title: Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups, Lemma 6.1
    url: https://arxiv.org/pdf/0812.1556
---

## Statement

Let $f:R\to S$ be a homomorphism from a unital associative ring to a noetherian ring $S$ (not necessarily commutative), assume $S$ is flat as a right $R$-module, and assume every finitely generated left $S$-module has a finite projective resolution. Let $F:D_{\mathrm{perf}}(R)\to D_{\mathrm{perf}}(S)$ be derived scalar extension. Choose universal determinant functors $g_R:D_{\mathrm{perf}}(R)\to\mathcal W(R)$ and $g_S:D_{\mathrm{perf}}(S)\to\mathcal W(S)$, a monoidal functor $N:\mathcal W(R)\to\mathcal W(S)$, and a monoidal natural isomorphism $\mu:N\circ g_R\cong g_S\circ F$. Define $\mathcal F(N)$ to have objects $(X,\epsilon)$ with $X\in\mathcal W(R)$ and an isomorphism $\epsilon:N(X)\xrightarrow{\sim}1_{\mathcal W(S)}$; its morphisms are morphisms in $\mathcal W(R)$ commuting with $\epsilon$. The assignment from a relative triple $(P,\alpha,Q)$ to the determinant class of $g_R(P)\otimes g_R(Q)^{-1}$ with the fiber isomorphism induced by $\mu$ and $\alpha$ induces an isomorphism $\eta:K_0(R,S)\xrightarrow{\sim}\pi_0(\mathcal F(N))$.

## Statement references

[Breuning, Lemma 6.1](https://arxiv.org/pdf/0812.1556)

## Facts & Assumptions

**Given:** The ring map and determinant-functor data in the Statement.

[F1] [[def-relative-algebraic-k0-group]]: $K_0(R,S)$ is the abelian group of relative triples with exact-sequence and composition relations.

[F2] [[thm-k1-of-perfect-complex-category-is-a-quotient]]: the canonical map from ring $K_1$ to determinant-category $K_1$ is surjective for every ring.

[F3] [[thm-universal-determinant-functor-exists-on-small-triangulated-categories]]: universal determinant functors exist for small triangulated categories.

[F4] [[thm-determinant-k0-of-perfect-category-is-projective-k0]]: $K_0^{\det}(D_{\mathrm{perf}}(R))$ identifies with the split $K_0$ of finitely generated projective $R$-modules.


[F5] The exact relative-triple sequence is $K_1(R)\to K_1(S)\xrightarrow{\partial}K_0(R,S)\xrightarrow\rho K_0(R)\to K_0(S)$, with $\partial[u]=[R^n,u,R^n]$. [[thm-relative-k-theory-localization-sequence]]

[F6] For a left Noetherian ring whose finite modules individually have finite projective resolutions, the canonical ring-to-perfect-determinant $K_1$ map is an isomorphism. No uniform global-dimension bound or choice axiom is added. [[thm-bounded-heart-determinant-comparison]]

## Proof

**Proof technique:** explicit fiber exact sequence and a two-sided diagram chase using regular-target injectivity.

1.1 The assignment in the Statement defines a homomorphism $\eta$. An isomorphism of relative triples gives an isomorphism of their determinant pairs by naturality of $\mu$ and of the determinant. A short exact sequence of triples gives the tensor product of the two endpoint fiber objects: its projective sequences split, and the two split determinant comparisons commute with the generic isomorphisms by determinant naturality. Their evaluations and inverse comparisons have the same labelled factors, so the trivializations agree. For composable $\alpha,\beta$, the middle determinant and its inverse cancel; functoriality gives the trivialization for $\beta\alpha$. These are all relations of [F1], so the displayed assignment is well defined, with the prescribed orientation $g_R(P)\otimes g_R(Q)^{-1}$. [F1, F3, given, construct, algebra]

1.2 For any monoidal functor $N$ between Picard categories, its stated fiber has the exact sequence $$\pi_1\mathcal W(R)\longrightarrow\pi_1\mathcal W(S)\xrightarrow b\pi_0\mathcal F(N)\xrightarrow r\pi_0\mathcal W(R)\longrightarrow\pi_0\mathcal W(S).$$ Here $b(u)$ is $(1,u)$, using the monoidal unit comparison for $N$, and $r$ forgets the trivialization. Tensor makes the component set a group: inverses and their evaluations transport inverse trivializations. Exactness can be checked directly. The object $(1,u)$ is isomorphic to $(1,1)$ precisely when $u$ is the image of a unit automorphism in $\mathcal W(R)$, with inversion of that automorphism if required by the commuting-square orientation; its image subgroup is unchanged. A fiber object with zero underlying component admits $X\cong1$, and transport of its trivialization identifies it with some $(1,u)$. Finally a component $[X]$ is killed by $N$ precisely when there is an actual isomorphism $N(X)\cong1$, which is exactly the extra datum of a fiber object. Thus every asserted kernel equals the preceding image. This uses existence for each object under consideration, not a simultaneous choice of trivializations. [given, construct, algebra]

1.3 The leftmost vertical map is surjective by [F2]. The next vertical map is bijective by [F6], since the original target $S$ is left Noetherian and every finite left $S$-module has a finite projective resolution. This application does not replace the hypothesis by finite global dimension, nor assume commutativity or semisimplicity. Flatness ensures the stated derived scalar-extension functor is represented on a bounded projective complex by ordinary $S\otimes_R-$; its terms remain finite projective by tensoring their finite-free summand decompositions. The $K_0$ vertical maps are bijective by [F4]. [F2, F4, F6, given, algebra]

2.1 Compare the sequence in step 1.2 with [F5]. Degree-zero determinants give vertical maps on both $K_1$ terms, the map $\eta$ on relative terms, and the identifications of [F4] on both $K_0$ terms. Every square commutes. For the boundary square a free automorphism $u$ has triple $[R^n,u,R^n]$; its determinant pair cancels the two identical free determinants, leaving exactly the unit automorphism induced by $g_S(u)$. The $\mu$ comparison conjugates the two cancelled factors equally and hence does not change this unit automorphism, since unit automorphisms are abelian. The forgetful square is $[P]-[Q]$ on both sides. The outer scalar-extension squares follow from the monoidal isomorphism $\mu$. Hence this is the actual boundary dictionary, not merely two abstractly isomorphic sequences. [F1, F4, F5, step 1.1, step 1.2, algebra]

3.1 To prove surjectivity, let $y\in\pi_0\mathcal F(N)$ and let $x\in K_0(R)$ be its underlying class through [F4]. Its image in $K_0(S)$ is zero by step 1.2 and the commutative outer square. Exactness of [F5] supplies $z\in K_0(R,S)$ with $\rho z=x$. The difference $y-\eta z$ has underlying component zero, so step 1.2 writes it as $b(v)$ for $v\in\pi_1\mathcal W(S)$. Lift $v$ to $u\in K_1(S)$ by step 1.3. The boundary square in step 2.1 gives $y=\eta(z+\partial u)$. Only these finitely many elementwise choices were used. [F4, F5, step 1.2, step 2.1, step 1.3, construct, algebra]

4.1 For injectivity suppose $\eta z=0$. Its underlying class vanishes, so [F4] and [F5] give $z=\partial u$ with $u\in K_1(S)$. Its determinant image lies in $\ker b$, hence is $N_*(v)$ for some $v\in\pi_1\mathcal W(R)$ by step 1.2. Lift $v$ to $w\in K_1(R)$ by source surjectivity in step 1.3. Commutativity says that the determinant image of $u-f_*w$ is zero. Target injectivity in step 1.3 therefore gives $u=f_*w$; [F5] then gives $z=\partial f_*w=0$. Thus $\eta$ is bijective. Both chases preserve the assignment in the original Statement and its signs. No extra target condition, maximal-order reduction, Smith form, or axiom of choice has entered the proof. [F2, F4, F5, F6, step 1.2, step 2.1, step 1.3, algebra] ∎
