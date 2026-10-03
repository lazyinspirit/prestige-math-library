---
id: thm-nonaffine-pseudo-abelian-perfect-field-is-complete
kind: theorem
title: "Pseudo-abelian varieties over perfect fields are complete"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, def-abelian-variety-over-a-field, lem-nonaffine-pseudo-abelian-separable-field-extension, lem-nonaffine-geometric-properness-field-descent, lem-nonaffine-reduced-neutral-subgroup-over-perfect-field, thm-nonaffine-rosenlicht-dichotomy, thm-nonaffine-rosenlicht-almost-complement, lem-nonaffine-centre-is-stable-jet-kernel, thm-nonaffine-group-scheme-normal-subgroup-quotient, lem-nonaffine-group-monomorphism-closed-immersion, lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties, lem-nonaffine-connected-group-geometrically-connected]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Theorem 8.26, p.154"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Sections 4.2-4.3"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume AC and DC. Every pseudo-abelian variety over a perfect field $k$ is complete, that is, proper over $k$, and hence is an abelian variety. Explicitly, a smooth connected separated finite-type $k$-group scheme with no nontrivial smooth connected affine normal subgroup is proper. Perfectness and smoothness are essential hypotheses of this assertion.

## Facts & Assumptions

[F1] Pseudo-abelianness persists under separable algebraic extension, and properness descends from any field extension. ([[lem-nonaffine-pseudo-abelian-separable-field-extension]], [[lem-nonaffine-geometric-properness-field-descent]])

[F2] Connected finite-type groups are geometrically connected. Over a perfect field the reduced identity component of a subgroup is smooth connected, has the subgroup's dimension, and remains normal in a smooth ambient group. Over an algebraically closed field a nonproper smooth connected group contains a smooth connected affine subgroup of positive dimension. ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[thm-nonaffine-rosenlicht-dichotomy]], [[lem-nonaffine-connected-group-geometrically-connected]])

[F3] The centre is the stable scheme kernel of conjugation on finite local jets. Normal quotients exist as fppf schemes, and a group homomorphism with trivial scheme kernel is a closed immersion. ([[lem-nonaffine-centre-is-stable-jet-kernel]], [[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-monomorphism-closed-immersion]])

[F4] An abelian subvariety of a smooth connected group over a perfect field has a smooth connected normal almost-complement, with finite faithfully flat multiplication. In an exact group sequence, an extension of affine groups is affine. ([[thm-nonaffine-rosenlicht-almost-complement]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]], [[lem-nonaffine-connected-group-geometrically-connected]])

## Proof

**Given:** AC, DC, perfect $k$, and pseudo-abelian $G/k$.

1.1 An algebraic closure of a perfect field is separable algebraic over it. By [F1] we may extend to that closure, retain pseudo-abelianness, prove properness there, and descend properness afterward. Work henceforth over algebraically closed $k$. Let $Z=Z(G)$ and $A=(Z_{\mathrm{red}})^0$. By [F2], $A$ is a smooth connected central subgroup. If $A$ were nonproper, the dichotomy in [F2] would produce a smooth connected affine subgroup $U\subset A$ of positive dimension. Since $A$ is central, $U$ is normal in $G$, contradicting pseudo-abelianness. Thus $A$ is proper, and is an abelian variety, including when it is the trivial group. [F1, F2, given, construct, algebra]

2.1 Choose a sufficiently large finite identity jet so that its conjugation representation $\rho:G\to\operatorname{GL}(V)$ has scheme kernel $Z$, by [F3]. The quotient $G/Z$ exists and $\rho$ factors through it. The induced map has trivial scheme kernel: fppf locally any quotient point lifts to $G$, and a lift with trivial representation lies in $Z$, hence represents the identity quotient point. Therefore [F3] embeds $G/Z$ as a closed subgroup of the affine $\operatorname{GL}(V)$, so $G/Z$ is affine. The quotient $Z/A$ is finite. Indeed every connected component of $Z$ has reduction a translate of $A$: reduction is a smooth group and its components are translates of its identity component. On geometric points, dividing each component by $A$ leaves one point. Thus $Z/A$, a separated finite-type scheme, has finitely many geometric points and dimension zero. A finite-type zero-dimensional scheme over a field is finite: on finitely many affine charts its Noetherian rings have dimension zero and are Artinian; its finitely many points are open and closed, their local Artinian affine neighbourhoods form a disjoint finite cover, and the resulting finite-dimensional rings give finiteness. The quotient maps now form the exact sequence $$1\longrightarrow Z/A\longrightarrow G/A\longrightarrow G/Z\longrightarrow1.$$ Its kernel and fppf surjectivity follow directly by lifting quotient representatives, and [F4] makes $G/A$ affine, since $Z/A$ is finite and hence affine. This includes zero-dimensional centres; no global-function assertion about $G$ is needed. [F2, F3, F4, step 1.1, algebra]

3.1 By [F4] choose a smooth connected normal almost-complement $H$ to $A$. The map $H\to G/A$ has finite kernel $J=A\cap H$, and induces an isomorphism $H/J\cong G/A$: every local representative in $G$ is fppf locally $ah$ by the almost-complement, and two $H$ representatives give the same coset precisely when their ratio belongs to $J$. The represented quotient in [F3] therefore gives an exact sequence $1\to J\to H\to G/A\to1$. Both outer terms are affine, so [F4] makes $H$ affine. It is smooth, connected, and normal in $G$, hence pseudo-abelianness makes it trivial. The finite faithfully flat multiplication $A\times H\to G$ becomes the closed immersion $A\hookrightarrow G$; a faithfully flat closed immersion has zero defining ideal, by faithful flatness of its quotient ring, so it is an isomorphism. Thus $G=A$ is proper over the algebraic closure. Descend properness by [F1]. Smoothness and geometric connectedness then make $G$ an abelian variety under the stated definition. AC and DC are inherited from [F1]–[F4]. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎

## Source reconciliation

This is the centre-quotient proof of Brion Theorem 4.3.2(1), applied to a pseudo-abelian group. Milne Theorem 8.26 instead uses induction and almost-complements. The proof above retains the same perfect-field and smooth connected hypotheses, and replaces Milne's unsupported invocation of $\Gamma(G,\mathcal O)=k$ in the zero-dimensional-centre case with the pseudo-abelian condition. It uses the maximal affine normal subgroup theorem only through separable-extension stability; it assumes no abelian quotient of $G$ in advance.
