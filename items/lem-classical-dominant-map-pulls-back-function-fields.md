---
id: "lem-classical-dominant-map-pulls-back-function-fields"
kind: "lemma"
title: "Dominant maps pull back function fields functorially"
status: published
origin: "pipeline"
deps: ["def-classical-variety-function-field", "thm-classical-function-field-independent-of-affine-open", "def-classical-dominant-morphism-and-rational-map", "thm-classical-rational-map-maximal-domain-affine-target", "thm-universal-property-of-the-field-of-fractions", "lem-classical-regular-functions-on-open-embed-in-function-field", "lem-classical-dominant-rational-maps-compose", "lem-classical-morphism-inverse-image-of-closed-is-closed", "def-axiom-of-choice", "thm-classical-polynomial-functions-equal-coordinate-ring", "thm-classical-affine-zero-loci-form-zariski-closed-sets"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5k and Proposition 5.38, pp. 116–117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. A dominant rational map $\Phi:X\dashrightarrow Y$ of affine varieties induces a canonical injective $k$-homomorphism $\Phi^*:k(Y)\hookrightarrow k(X)$. It agrees with pullback of regular functions wherever defined, is independent of representatives, preserves identities, and reverses composition of dominant rational maps.

## Facts & Assumptions

**Given:** AC, affine varieties $X,Y$ over algebraically closed $k$, and a dominant rational map $\Phi:X\dashrightarrow Y$.

[F1] Function fields are fraction fields of coordinate domains ([[def-classical-variety-function-field]]).

[F2] Regular functions on a nonempty open embed faithfully into the ambient function field ([[lem-classical-regular-functions-on-open-embed-in-function-field]]).

[F3] Dominant maps have dense images and remain dominant on nonempty open restrictions ([[def-classical-dominant-morphism-and-rational-map]]).

[F4] An injective domain map to a field extends uniquely to an injective map of fraction fields ([[thm-universal-property-of-the-field-of-fractions]]).

[F5] Dominant rational maps compose independently of representatives ([[lem-classical-dominant-rational-maps-compose]]).

[F6] Morphisms pull back regular functions on target opens ([[lem-classical-morphism-inverse-image-of-closed-is-closed]]).

[F7] Polynomial functions identify faithfully with coordinate-ring elements ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

[F8] The zero set of a polynomial function is closed ([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

## Proof

**Proof technique:** direct.

1.1 Take a representative $\phi:U\to Y$. Pullback maps $B=k[Y]$ into $\mathcal O_X(U)$, and F2 embeds the latter into $K=k(X)$. If b has zero image, F2 says $b\circ\phi$ is the zero function on U. Its closed zero locus in Y contains the dense image of $\phi$, so b vanishes everywhere on Y and is zero as a coordinate function. Thus the composite $B\to K$ is injective and fixes k. [F1, F2, F3, given, F7, F8]

2.1 F4 extends that injection uniquely to $\Phi^*:k(Y)\to K$ by $a/b\mapsto\phi^*(a)/\phi^*(b)$. Here $b\ne0$ has nonzero pullback by step 1.1, so the quotient is defined. If two representatives agree on a nonempty open, each pulled-back coordinate function agrees there; restriction compatibility and injectivity in F2 make their images in K equal. Uniqueness in F4 then identifies their field maps. [F2, F4, step 1.1, algebra]

3.1 Let s be regular on a nonempty target open W, with a quotient expression $s=a/b$ on a nonempty subopen. By F3 the inverse image of that subopen is nonempty open. F6 pulls s back regularly there, and its value is $(a\circ\phi)/(b\circ\phi)$. F2 identifies this fraction with the field element in step 2.1. By restriction compatibility, this also proves agreement on the whole nonempty inverse-image domain. [F2, F3, F6, step 2.1, algebra]

4.1 For a composable dominant rational map $\Psi:Y\dashrightarrow Z$, F5 supplies a nonempty composition domain. For a coordinate function c on Z, substitution there gives $c\circ(\psi\circ\phi)=(c\circ\psi)\circ\phi$. Step 3.1 identifies the right side with $\Phi^*(\Psi^*(c))$. F2 gives equality in k(X), and F4 extends it from coordinate-ring elements to all fractions. Thus $(\Psi\circ\Phi)^*=\Phi^*\circ\Psi^*$. Identity pullback fixes every fraction. [F2, F4, F5, step 3.1, algebra] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5k and Proposition 5.38, pp. 116–117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
