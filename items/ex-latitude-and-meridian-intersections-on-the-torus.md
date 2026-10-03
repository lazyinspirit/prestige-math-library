---
id: ex-latitude-and-meridian-intersections-on-the-torus
kind: example
title: "Latitude and meridian intersections on the torus"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-local-oriented-intersection-sign, def-oriented-intersection-number, def-two-dimensional-torus, def-circle-as-real-line-mod-integers, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-product-orientation, thm-canonical-tangent-and-cotangent-splittings-for-products, thm-a-regular-level-set-is-an-embedded-submanifold]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed p. 79, Figure 2-14 (two complementary circles on $S^1\\times S^1$ have $I_2=1$); Ch. 3 §3, printed p. 112, Figure 3-10 (two circles on the torus with $I(X,Z)=-I(Z,X)$)"
---

## Example

Let $T^2=Q\times Q$ with $Q=\mathbb R/\mathbb Z$ ([[def-two-dimensional-torus]]) carry the product smooth structure and product orientation ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-product-orientation]]). Let $A:=Q\times\{[0]\}$ be the latitude circle and $B:=\{[0]\}\times Q$ the meridian circle, both embedded oriented circles cutting out by the coordinate projections ([[thm-a-regular-level-set-is-an-embedded-submanifold]]). They meet transversely in the single point $([0],[0])$; with the product orientation and the first-factor-first convention of [[def-local-oriented-intersection-sign]] the local sign is $+1$, so $I(A,B)=1$, while $I(B,A)=-1$; the mod 2 number is $I_2(A,B)=I_2(B,A)=1$ and can be computed without orientations. Perturbing $B$ to $B_\varepsilon=\{[t]\}\times Q$ for a fixed nonzero class $[t]$ leaves the mod 2 number equal to $1$ as long as the trace stays transverse to $A$.

## Facts & Assumptions

**Given:** $T^2=Q\times Q$ with the product smooth structure and product orientation, the latitude $A=Q\times\{[0]\}$ oriented by $\partial_x$ and the meridian $B=\{[0]\}\times Q$ oriented by $\partial_y$ in the positive product frame $(\partial_x,\partial_y)$.

[F1] Give $Q=\mathbb R/\mathbb Z$ its standard quotient smooth structure: the projection is a diffeomorphism on sufficiently short intervals, and the overlap transitions are integer translations. The projection of $[0,1]$ covers $Q$, so it is compact. These local coordinates orient $Q$ by the increasing real coordinate, and $T^2=Q\times Q$ has the product smooth structure ([[def-circle-as-real-line-mod-integers]], [[def-two-dimensional-torus]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F2] The coordinate circles are regular level sets of the coordinate projections, hence embedded submanifolds, and the tangent bundle of the product splits canonically as $T_{(x,y)}T^2=T_xQ\oplus T_yQ$ with the positive product frame $(\partial_x,\partial_y)$ ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[thm-canonical-tangent-and-cotangent-splittings-for-products]], [[def-product-orientation]]).

[F3] The local sign compares $(T_pA,T_pB)$ in that order with the orientation of $T_pT^2$, and the intersection number is the sum of the local signs over the finite transverse intersection ([[def-local-oriented-intersection-sign]], [[def-oriented-intersection-number]], [[def-transverse-complementary-dimensional-intersection-set]]).

[F4] The mod 2 intersection number is the cardinality of a transverse intersection modulo two and needs no orientation ([[def-mod-two-intersection-number]]); under $\mathrm{AC}_\omega$ it is invariant under homotopies of the map ([[thm-mod-two-intersection-number-is-homotopy-invariant]]).

## Verification

1.1 By [F2] the sets $A$ and $B$ are embedded circles, and $A\cap B=\{([0],[0])\}$: a point of $A$ has second coordinate $[0]$, a point of $B$ has first coordinate $[0]$. At that point $T_pA=\mathbb R\partial_x$ and $T_pB=\mathbb R\partial_y$, and $(\partial_x,\partial_y)$ is the positive product frame, so $A$ and $B$ are transverse and the local sign is $+1$ by [F3]. Hence $I(A,B)=1$; with the factors exchanged the ordered basis $(\partial_y,\partial_x)$ is negative, so $I(B,A)=-1$. [F2, F3, given, algebra]

2.1 The same computation counts mod two: the transverse intersection has one point, so $I_2(A,B)=I_2(B,A)=1$ by [F4], and no orientation hypothesis was used. For the perturbation, each $B_t:=\{[t]\}\times Q$ with $t\in\mathbb R$ is again a meridian circle with $T_pB_t=\mathbb R\partial_y$ at its unique intersection point $([t],[0])$ with $A$, so the intersection is transverse with one point and $I_2(A,B_t)=1$ for every $t$; the explicit family $t\mapsto\{[t]\}\times Q$ thus has constant mod 2 count by this direct computation. Thus the example realizes the source's count $I_2=1$ and the sign asymmetry $I(A,B)=-I(B,A)$; no choice principle is used: the circles, the product structure and the perturbation are explicit, the perturbation count is computed directly for every $t$, without selecting a homotopy or applying classification. [F1, F4, step 1.1, algebra] ∎
