---
id: "thm-classical-affine-morphisms-coordinate-ring-antiequivalence"
kind: "theorem"
title: "Classical affine morphisms are contravariantly equivalent to coordinate-ring homomorphisms"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "thm-classical-polynomial-functions-equal-coordinate-ring", "thm-classical-affine-global-regular-functions-coordinate-ring", "def-classical-affine-variety-morphism", "lem-classical-morphism-inverse-image-of-closed-is-closed", "thm-quotient-ring-universal-property", "thm-universal-property-of-a-polynomial-ring", "def-finite-type-and-module-finite-algebras", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Propositions 3.24–3.26, pp. 66–67"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For affine algebraic sets $X,Y$, pullback gives a natural bijection $$\operatorname{Mor}_k(X,Y)\cong\operatorname{Hom}_{k\text{-alg}}(k[Y],k[X]).$$ It reverses composition and preserves identities. Restricted to nonempty irreducible sets, this is an antiequivalence with nonzero finite-type domain $k$-algebras: every such domain is a coordinate ring. Empty algebraic sets and zero unital algebras are allowed in the displayed bijection.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, affine algebraic sets $X,Y$, and, for the object realization, a nonzero finite-type domain $k$-algebra $B$.

[F1] Global regular functions identify with coordinate rings ([[thm-classical-affine-global-regular-functions-coordinate-ring]]).

[F2] A morphism is defined by pullback of global regular functions ([[def-classical-affine-variety-morphism]]).

[F3] Coordinate-ring elements are polynomial functions ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

[F4] A homomorphism is uniquely determined by its values on coefficients and variables ([[thm-universal-property-of-a-polynomial-ring]]).

[F5] A map killing an ideal factors uniquely through its quotient ([[thm-quotient-ring-universal-property]]).

[F6] A prime presentation ideal defines a nonempty irreducible set with exactly that vanishing ideal ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F7] Finite-type algebras admit finite polynomial presentations ([[def-finite-type-and-module-finite-algebras]]).

[F8] Affine-target morphisms pull back locally regular functions on arbitrary opens ([[lem-classical-morphism-inverse-image-of-closed-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 If $\phi:X\to Y$ is a morphism, F1 and F2 identify $s\mapsto s\circ\phi$ as a map $k[Y]\to k[X]$. Pointwise addition, multiplication and constants show it is a unital $k$-algebra homomorphism. [F1, F2, given, algebra]

1.2 Conversely let $\alpha:k[Y]\to k[X]$ be a unital $k$-algebra map, with $Y\subseteq k^m$ and coordinate classes $y_j$. Define $\phi(x)=(\alpha(y_1)(x),\ldots,\alpha(y_m)(x))$. If $P\in I(Y)$ then polynomial evaluation and the homomorphism laws give $P(\phi(x))=\alpha(P(y_1,\ldots,y_m))(x)=0$. Hence $\phi(x)\in V(I(Y))=Y$. [F3, F4, F5, F6, given, algebra]

2.1 Every global regular function of $Y$ is a polynomial in the $y_j$ by F1 and F3. Substitution in step 1.2 gives $s\circ\phi=\alpha(s)$, a polynomial and hence regular function on $X$. Thus $\phi$ is a morphism and its pullback is $\alpha$. If one starts with $\phi$, its pulled-back coordinate values reconstruct exactly $\phi(x)$, so the constructions are inverses. [F1, F2, F3, step 1.2]

3.1 For composable morphisms, $s\circ(\psi\circ\phi)=(s\circ\psi)\circ\phi$, so $(\psi\circ\phi)^*=\phi^*\circ\psi^*$; F8 ensures the composites are morphisms, and the identity pulls each function to itself. This also gives naturality of the bijection. If $X$ is empty there is one map to any $Y$ and one unital homomorphism to $k[X]=0$. If $Y$ is empty and $X$ nonempty there is neither a set map nor a unital map $0\to k[X]$, since $0=1$ would force $k[X]=0$. Both empty gives one on each side. [F8, step 1.1, step 2.1, algebra]

4.1 Let $B$ be a nonzero finite-type domain. By F7 choose a surjection $k[T_1,\ldots,T_r]\to B$ with kernel $P$. It is proper since $B\ne0$, and $uv\in P$ forces one image to be zero since $B$ is a domain; thus $P$ is prime. F6 gives a variety $V(P)$ with $I(V(P))=P$. Its coordinate ring is the presentation quotient $B$. Together with the bijection and composition law this proves the stated antiequivalence on domains. [F6, F7, step 2.1, step 3.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Propositions 3.24–3.26, pp. 66–67. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
