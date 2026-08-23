---
id: thm-monoids-and-rings-are-monadic-over-sets
kind: theorem
title: "Monoids and unital rings are strictly monadic over sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, thm-the-free-monoid-monad-and-its-algebras-are-monoids, thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor, thm-the-comparison-functor-exists-and-is-unique, def-t-algebra-and-algebra-homomorphism, thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor, lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers, thm-becks-strict-monadicity-theorem]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "D. Mehrle, Category Theory Part III, Example 5.18"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

The underlying-set functors from monoids and from unital rings to $\mathbf{Set}$ are strictly monadic, and hence monadic.

## Facts & Assumptions

**Given:** The free-monoid and free-ring adjunctions.

[L1] The Eilenberg–Moore category of the free-monoid monad is isomorphic over $\mathbf{Set}$ to the category of monoids ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

[L2] The free unital ring functor is left adjoint to the underlying-set functor ([[thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L3] The underlying-set functor on unital rings strictly creates split coequalizers ([[lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers]]).

[L4] A right adjoint is strictly monadic if and only if it strictly creates coequalizers of its split pairs ([[thm-becks-strict-monadicity-theorem]]).

[L5] Choosing a free monoid $(X^*,i_X)$ on every set $X$ makes the finite-word functor left adjoint to the underlying-set functor, the adjunction bijection sending $\varphi:X^*\to M$ to $U(\varphi)i_X$ ([[thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L6] The comparison functor is $K(d)=(Ud,U\varepsilon_d)$ and $K(h)=U(h)$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

[L7] An algebra $(A,a)$ for a monad $(T,\eta,\mu)$ satisfies $a\eta_A=1_A$ and $aT(a)=a\mu_A$, and an algebra homomorphism is a map commuting with the two structure maps ([[def-t-algebra-and-algebra-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L6], the comparison for the free-monoid adjunction is $K(M)=(UM,U\varepsilon_M)$ with $K(h)=U(h)$. Under [L5] the counit $\varepsilon_M$ corresponds to the identity of $UM$, so it is the unique monoid homomorphism $(UM)^*\to M$ carrying each one-letter word $[m]$ to $m$; a homomorphism out of a free monoid is determined on the letters, so $\varepsilon_M$ evaluates a word in the elements of $M$ to its product. [L5, L6, construct]

1.2 For rings, [L2] supplies the left adjoint and [L3] supplies strict creation of the required split coequalizers. [L2, L3]

2.1 Applying strict Beck [L4] to step 1.2 makes the ring underlying-set functor strictly monadic. The construction includes the empty generating set and the zero ring. [step 1.2, L4]

2.2 A function $f:UM\to UN$ commutes with word evaluation exactly when it is a monoid homomorphism, by evaluating the two-letter words and the empty word in one direction and every word in the other; with [L7] and $K(h)=U(h)$ this makes $K$ bijective on morphisms. It is injective on objects because step 1.1 recovers the product of $M$ from $U\varepsilon_M$ on two-letter words. [step 1.1, L7, algebra]

2.3 $K$ is surjective on objects: for an algebra $(A,a)$ of the free-monoid monad put $x\cdot y:=a([x,y])$ and $1:=a([\,])$. Splitting a word into its first letter and its tail and applying the multiplication law $aT(a)=a\mu_A$ of [L7] gives $a(w)=a([x_1])\cdot a(\text{tail})$, while the unit law gives $a([x])=x$; induction on length identifies $a$ with evaluation of words in these operations, and substituting the monoid-word identities into the same law gives associativity and the unit laws. Hence $A$ is a monoid $M_A$ with $a=U\varepsilon_{M_A}$, that is $(A,a)=K(M_A)$. [step 1.1, L7, construct]

3.1 By steps 2.2 and 2.3 the monoid comparison is bijective on objects and morphisms, hence an isomorphism of categories over $\mathbf{Set}$ — the isomorphism [L1] asserts may be taken to be it — so the monoid underlying-set functor is strictly monadic. With step 2.1 this proves the assertion for both concrete categories, and strict monadicity implies monadicity. [step 2.1, step 2.2, step 2.3, L1] ∎
