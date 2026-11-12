---
title: Matching families of abelian presheaves
status: published
research_item: lem-author-a44f2061570d-matching-groups
dependency_level: 0
---

PDF p. 4: Derived Nisnevich and cdh sections

## Prerequisites

- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-small-locally-small-and-large-category](https://alphabetamath.cc/item/def-small-locally-small-and-large-category)
- [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)
- [math:def-product-of-an-indexed-family](https://alphabetamath.cc/item/def-product-of-an-indexed-family)
- [math:lem-the-product-of-an-indexed-family-is-a-set](https://alphabetamath.cc/item/lem-the-product-of-an-indexed-family-is-a-set)
- [math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)


## Statement
Let $\mathcal C$ be a small site and $F$ a presheaf of abelian groups. For a sieve $R$ on an object $U$, the compatible families of sections of $F$ indexed by arrows in $R$ form an abelian group under componentwise addition. If $F$ is a sheaf, restriction from $F(U)$ to this group is an isomorphism for every covering sieve $R$.

Here a small site is a small category $\mathcal C$ equipped with a Grothendieck topology $J$. Small means that both its object collection and its morphism collection are sets. A sieve $R$ on $U$ is a set of arrows with codomain $U$ closed under precomposition. For $f:V\to U$, write $f^*R=\{g:W\to V\mid f\circ g\in R\}$. The topology assigns to each $U$ a set $J(U)$ of covering sieves: the maximal sieve covers, $f^*R$ covers $V$ whenever $R$ covers $U$, and a sieve $S$ covers $U$ if some covering sieve $R$ on $U$ has $f^*S$ covering the domain of every $f\in R$.

The category of abelian groups has set-based abelian groups as objects and group homomorphisms as morphisms, with the usual identity maps and composition of functions. A presheaf of abelian groups is a contravariant functor from $\mathcal C$ to this category. Write $fg=f\circ g$. A compatible family assigns $s_f\in F(V)$ to every $f:V\to U$ in $R$, with $F(g)(s_f)=s_{fg}$ for every $g:W\to V$. Write $\operatorname{Match}(R,F)$ for the subset of $\prod_{f\in R}F(\operatorname{dom}f)$ consisting of these families. The restriction map is $\rho_R:F(U)\to\operatorname{Match}(R,F)$, $s\mapsto(F(f)(s))_{f\in R}$. Here $F$ is a sheaf when every compatible family on every covering sieve has a unique amalgamation, meaning a section $s\in F(U)$ whose restrictions are that family.

## Facts & Assumptions

**Given:** A small site $(\mathcal C,J)$, an abelian presheaf $F$, an object $U$, and a sieve $R$ on $U$, with the conventions above.

**Goal:** Prove the group assertion and, when $F$ is a sheaf and $R$ covers $U$, the isomorphism assertion.

[F1] Use the site, sieve, matching-family and sheaf definitions stated above. The category and smallness interfaces are [math:def-category](https://alphabetamath.cc/item/def-category) and [math:def-small-locally-small-and-large-category](https://alphabetamath.cc/item/def-small-locally-small-and-large-category).

[F2] The values of $F$ satisfy the abelian group axioms, its restriction maps preserve addition, and contravariance gives $F(g)F(f)=F(fg)$ and $F(1_U)=1_{F(U)}$. The target category uses identity and composite homomorphisms. [math:def-group](https://alphabetamath.cc/item/def-group) [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[F3] For a set-indexed family of sets the indexed product is a set of functions with the specified component values; imposing a predicate on a set gives a subset by Separation. [math:def-product-of-an-indexed-family](https://alphabetamath.cc/item/def-product-of-an-indexed-family) [math:lem-the-product-of-an-indexed-family-is-a-set](https://alphabetamath.cc/item/lem-the-product-of-an-indexed-family-is-a-set) [math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)

[F4] A group isomorphism means a bijective group homomorphism. [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Proof

**Proof technique:** Check the matching equations and the restriction map componentwise.

1.1 Since $\mathcal C$ is small, $R$ is a set and $(F(\operatorname{dom}f))_{f\in R}$ is a set-indexed family of sets. By [F3] its indexed product is a set, and Separation with the matching equations gives the set $\operatorname{Match}(R,F)$. For any restriction homomorphism $h$, the equation $h(0)=h(0)+h(0)$ gives $h(0)=0$ after adding $-h(0)$; then $h(x)+h(-x)=h(0)=0$ gives $h(-x)=-h(x)$ by the group axioms. Thus the specified zero family is compatible. If $s,t$ are compatible, then $F(g)(s_f+t_f)=s_{fg}+t_{fg}$ and $F(g)(-s_f)=-s_{fg}$, so componentwise sum and inverse remain compatible. Associativity, commutativity, the identity law and the inverse law follow in each component from the abelian group axioms, proving that $\operatorname{Match}(R,F)$ is an abelian group. For $R=\varnothing$ there is exactly one empty family and these laws still hold. The zero family is specified componentwise, so no choice principle is needed. [given, F1, F2, F3, construct, algebra]

2.1 For $s\in F(U)$ and $f:V\to U$ in $R$, contravariance gives $F(g)(F(f)(s))=F(fg)(s)$ for every $g:W\to V$, so $\rho_R(s)$ is compatible. Each $F(f)$ preserves addition, hence $\rho_R(s+t)=\rho_R(s)+\rho_R(t)$ componentwise, making $\rho_R$ a homomorphism to the group in step 1.1. If $F$ is a sheaf and $R$ covers $U$, the stated sheaf condition gives exactly one preimage under $\rho_R$ for each compatible family. Thus $\rho_R$ is bijective and is a group isomorphism by [F4]. [F1, F2, F4, step 1.1] ∎
