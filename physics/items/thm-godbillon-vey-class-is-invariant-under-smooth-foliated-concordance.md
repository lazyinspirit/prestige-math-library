---
id: thm-godbillon-vey-class-is-invariant-under-smooth-foliated-concordance
kind: theorem
title: "Godbillon-Vey invariance under smooth foliated concordance"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-smooth-foliated-concordance, lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary, def-godbillon-vey-class, lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, cor-smoothly-homotopic-maps-induce-the-same-de-rham-map, thm-de-rham-cohomology-is-smooth-homotopy-invariant, prop-de-rham-cohomology-is-a-contravariant-functor, thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-countable-choice-principle-for-foliation-pair, lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed p. 10"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $M$ be a closed smooth manifold and
let $F_0,F_1$ be smoothly foliated-concordant transversely oriented codimension-one
foliations of $M$ ([[def-smooth-foliated-concordance]]). Then
$\mathrm{GV}(F_0)=\mathrm{GV}(F_1)$ in $H^3_{\mathrm{dR}}(M;\mathbb R)$.

## Facts & Assumptions

**Given:** A closed smooth manifold $M$, smoothly foliated-concordant transversely oriented codimension-one foliations $F_0,F_1$ of $M$, a concordance $(G,\omega)$ on $W=M\times[0,1]$, and the standing countable choice assumption.

[F1] The Godbillon-Vey class of a transversely oriented codimension-one foliation with defining form $\omega$ and $d\omega=\eta\wedge\omega$ is the de Rham class $[\eta\wedge d\eta]$. ([[def-godbillon-vey-class]]).

[F2] A codimension-one foliation of a manifold with boundary transverse to the boundary restricts to a codimension-one foliation of the boundary, and if $d\omega=\eta\wedge\omega$ then $d(\omega|_{\partial W})=(\eta|_{\partial W})\wedge(\omega|_{\partial W})$. ([[lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary]]).

[F3] Smoothly homotopic maps induce the same map on de Rham cohomology. ([[cor-smoothly-homotopic-maps-induce-the-same-de-rham-map]]).

[F4] The de Rham complex, wedge identities and natural pullback extend to smooth manifolds with boundary ([[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Let $(G,\omega)$ be the concordance on $W=M\times[0,1]$ and choose $\eta$ with $d\omega=\eta\wedge\omega$ by the divisibility lemma, so that $[\eta\wedge d\eta]=\mathrm{GV}(G)\in H^3_{\mathrm{dR}}(W;\mathbb R)$ according to [F1]. [F1, given]

2.1 By [F2] the inclusions $i_j:M\to W$, $i_j(x)=(x,j)$, pull the defining data back to defining data of $F_j$: $i_j^{*}\omega$ is a defining form for $F_j$ and $d(i_j^{*}\omega)=(i_j^{*}\eta)\wedge(i_j^{*}\omega)$, so $i_j^{*}(\eta\wedge d\eta)=(i_j^{*}\eta)\wedge d(i_j^{*}\eta)$ represents $\mathrm{GV}(F_j)$, that is $i_j^{*}\mathrm{GV}(G)=\mathrm{GV}(F_j)$. [F2, step 1.1]

3.1 For completeness the endpoint equality holds on the boundary cylinder as follows. Write the closed form $\alpha=\eta\wedge d\eta$ on $M\times[0,1]$ as $\alpha_s+ds\wedge\gamma_s$. By [F4], $d\alpha=0$ gives $\partial_s\alpha_s=d_M\gamma_s$. Integrating the smooth coefficients in s yields $i_1^*\alpha-i_0^*\alpha=d_M\int_0^1\gamma_s\,ds$. Thus the endpoint forms represent the same de Rham class, and step 2.1 identifies them with the two Godbillon–Vey classes. This is the homotopy identity of [F3], here derived explicitly on the cylinder. [F3, F4, step 2.1] ∎