---
id: lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties
kind: lemma
title: "Affine smooth and connected properties in exact sequences of algebraic groups"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-connected-group-geometrically-connected, lem-nonaffine-affine-and-finite-morphism-fppf-descent, thm-flat-finite-presentation-is-open, def-smooth-morphism-schemes, thm-smooth-morphisms-stable-base-change-composition, thm-nonaffine-affine-normal-group-quotient-affine, lem-ag-geometric-regularity-field-tests, thm-existence-of-algebraic-closures, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.1 and references 1.62, 2.70, 5.29, 5.59, p.149"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Proposition 3.1.2"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Let $1\to N\to G\xrightarrow{q}Q\to1$ be an exact sequence of separated finite-type $k$-group schemes, meaning $q$ is faithfully flat of finite presentation and $N$ is its scheme-theoretic kernel. Then:

- if $N,Q$ are affine, smooth, or connected, respectively, so is $G$;
- if $G$ is affine, smooth, or connected, respectively, so is $Q$;
- if $N$ is affine, then $q$ is affine; if $N$ is smooth, then $q$ is smooth.

## Facts & Assumptions

[F1] Affineness descends under fppf base change; affine groups have affine normal quotients. ([[lem-nonaffine-affine-and-finite-morphism-fppf-descent]], [[thm-nonaffine-affine-normal-group-quotient-affine]])

[F2] Connected groups are geometrically connected; geometrically reduced finite-type groups are smooth. ([[lem-nonaffine-connected-group-geometrically-connected]])

[F3] Flat finite-presentation morphisms are open. Smoothness is flatness, local finite presentation, and geometrically regular fibres; smooth morphisms remain smooth under base change and composition, and geometric regularity descends under field extension. ([[thm-flat-finite-presentation-is-open]], [[def-smooth-morphism-schemes]], [[thm-smooth-morphisms-stable-base-change-composition]], [[lem-ag-geometric-regularity-field-tests]])

[F4] Algebraic closures exist under AC, and nonempty finite-type schemes over an algebraically closed field have rational closed points, by the maximal-ideal description in the weak Nullstellensatz. ([[thm-existence-of-algebraic-closures]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** AC and the exact sequence in the statement.

1.1 The morphism $(g,n)\mapsto(g,gn)$ is an isomorphism $G\times N\cong G\times_QG$; its inverse sends $(g,h)$ to $(g,g^{-1}h)$, which factors through the kernel by the group law. Thus base change of $q$ by itself is projection from $G\times N$. If $N$ is affine this projection is affine, and [F1] gives that $q$ is affine. If $Q$ also is affine, its inverse image $G$ is affine. Conversely if $G$ is affine, [F1] supplies affine $Q$; its exact quotient agrees with the represented normal quotient by the fppf lifting and kernel-pair identity just proved. [F1, given, algebra, construct]

2.1 For each $z\in Q$, choose an algebraic closure $\Omega$ of $\kappa(z)$ by [F4]. The nonempty finite-type fibre $G_z\times_{\kappa(z)}\Omega$ has an $\Omega$-point by [F4], and translation by it identifies that fibre with $N_\Omega$ using step 1.1. If $N$ is smooth, $N_\Omega$ is smooth by [F3]; hence its affine chart rings are geometrically regular. Field descent in [F3] makes $G_z$ geometrically regular over $\kappa(z)$. The given flatness and finite presentation of $q$ now make $q$ smooth by [F3]. If $Q$ is smooth too, composition in [F3] makes $G$ smooth. Conversely if $G$ is smooth, it is geometrically reduced. Faithful flat pullback injects the local coordinate sections of $Q$ into those of $G$, so every nilpotent section of the geometric $Q$ is zero. Thus $Q$ is geometrically reduced, and [F2] makes it smooth. [F2, F3, F4, step 1.1, algebra]

3.1 Surjectivity makes a quotient of connected $G$ connected. If both $N$ and $Q$ are connected, [F2] and the fibre identification in step 2.1 make every fibre of $q$ connected. For a decomposition of $G$ into two disjoint open-and-closed subsets, each connected fibre lies entirely in one; their images are disjoint opens in $Q$ by [F3] and cover $Q$. Connectedness of $Q$ forces one image empty and hence one original subset empty. Thus $G$ is connected. AC is inherited from [F1]–[F3]. [F1, F2, F3, step 2.1, algebra] ∎
