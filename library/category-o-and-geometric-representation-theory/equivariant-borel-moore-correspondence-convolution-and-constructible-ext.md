---
page: equivariant-borel-moore-correspondence-convolution-and-constructible-ext
title: "Equivariant Borel–Moore Correspondence Convolution and Constructible Ext"
status: draft
requires: [analytic-derived-six-operations-and-duality,
           chern-and-pontryagin-classes-by-splitting-and-complexification,
           equivariant-constructible-perverse-foundations,
           relations-functions-and-quotients,
           unipotent-solvable-groups-and-borel-fixed-points]
items: [lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
        def-equivariant-borel-moore-homology-and-correspondence-convolution,
        thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product,
        thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution,
        lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]
examples: []
---

**Objective.** This page builds the convolution/Ext interface used by the geometric
realizations of quiver Hecke algebras and their canonical bases. It develops the
complex-oriented diagonal Thom operation, the equivariant Borel–Moore correspondence
algebra, the identification of its corners with Ext groups of proper pushforwards, the
product compatibility of that identification, and the flag-incidence geometry on which the
construction is applied. The Axiom of Choice is declared and inherited from the
constructible six-functor and Borel-stabilization suppliers; every geometric and diagram
computation below is otherwise choice-free, and no semismallness, purity, decomposition
theorem or smoothness of fiber products is used.

## The oriented diagonal operation

[[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]]
fixes the local input: on a smooth complex $M$ of pure dimension $d$, the diagonal has
purity $\Delta^!k_{M\times M}\cong k_M[-2d]$, the positive middle-diagonal Thom class is
normalized by the positive compactly supported generator of a complex coordinate ball, and
pulling that class back along a support square identifies cap product with the Thom class
with the adjunction mate $\mathrm{ex}:a^*q^!\to b^!u^*$ of proper base change, on arbitrary
closed supports and without transversality; ordered iterated diagonals compose, signs being
absent because all complex normal degrees are even, and zero-section self-intersection is cap
product with the oriented Euler class.

## Borel–Moore homology and convolution

[[def-equivariant-borel-moore-homology-and-correspondence-convolution]] defines
$H_j^{\mathrm{BM},G}(X;k)=H_G^{-j}(X,\omega_X^G)$ with the normalized dualizing object
$\omega_X^G|_X=\omega_X$ (never a quotient-stack shift) and its equivalent stable Borel value
$H^{\mathrm{BM}}_{j+2b}(X\times_GU;k)$; for proper $G$-equivariant maps $f_i:X_i\to E$ with
smooth pure-dimensional sources it defines the source-first product
$a*b=h_*\Delta_{X_j}^!(a\boxtimes b)$ in degree $p+q-2d_j$, with the corner degree
$d_i+d_j-p$ and the normalized diagonal class of corner degree zero.

## The Ext dictionary and its product

[[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]]
proves that the adjunction chain $f_{i!}\dashv f_i^!$, extraordinary proper base change and
dualizing transitivity give natural isomorphisms
$\Phi_{ij}^r:\operatorname{Hom}(L_i,L_j[r])\xrightarrow{\sim}H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij};k)$
for the objects $L_i=f_{i!}k_{X_i}[d_i]$, all corners, degreewise finite, and natural in
constructible coefficient morphisms. [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]]
then proves that this identification carries the Yoneda product with the opposite-composition
convention $\alpha*\beta=\beta[r]\circ\alpha$ to the convolution product, sends the identity
to the diagonal class, and therefore is an isomorphism of unital graded algebras on the direct
sum of corners.

## Flag-incidence geometry

[[lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]]
supplies the geometric input: for an arbitrary finite loopless quiver, the incidence spaces
$X_\nu\to B_\nu$ are complex algebraic vector bundles over products of flag varieties, the
structure maps $\pi_\nu:X_\nu\to E_V$ are projective and the middle-forgetting projections are
proper, so the oriented Thom, trace and Euler-class calculus applies in every corner with the
shift $d_\nu=\dim_{\mathbb C}X_\nu$, without smoothness or transversality of the fiber
products. The companion [[equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples]]
works the point/projective-line instance explicitly.
