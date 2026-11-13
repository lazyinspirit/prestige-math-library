---
title: Free actions and quotient groupoids
status: draft
research_item: def-groupoid-action-quotient-artin-tits-normalisers
dependency_level: 8
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 6, §2.4, quotient-category construction
      statement: A group acting by groupoid automorphisms and freely on objects gives
        a quotient whose objects and morphisms are orbits, with composition
        obtained by aligning representatives; the quotient is a groupoid.
      hypotheses: A group acts on a connected small groupoid by automorphisms and acts
        freely on its objects.
      reading_limits: The frozen article text at the cited passage was inspected. This
        reference attributes the article's construction; the well-definedness
        justification uses the separately supplied orbit-groupoid proposition.
---

PDF p. 6: ` §2.4, quotient-category construction `

## Prerequisites

- [def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)
- [prop-groupoid-orbit-interface-artin-tits-prerequisites](item-prop-groupoid-orbit-interface-artin-tits-prerequisites)
- [math:def-group-action](https://alphabetamath.cc/item/def-group-action)
- [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)
- [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)
- [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)


## Definition

Let $N$ be a group and let $\mathcal G$ be a connected small groupoid: its objects and arrows form sets, every arrow is invertible, and there is an arrow between every ordered pair of objects. Composition is read left to right, so $ab$ means first $a$ and then $b$.

An automorphism of $\mathcal G$ is an invertible functor from $\mathcal G$ to itself. An action of $N$ on $\mathcal G$ is a homomorphism from $N$ to the group of these automorphisms, whose multiplication is composition of functors. Write $nx$ and $na$ for the images of an object $x$ and an arrow $a$ under the automorphism assigned to $n$; thus $(nm)x=n(mx)$ and $(nm)a=n(ma)$. The action is free on objects if $nx=x$ implies $n=1$.

Assume freeness on objects. The quotient groupoid $\mathcal G/N$ has as objects the object orbits $[x]=\{nx:n\in N\}$. Its arrows are the arrow orbits $[a]=\{na:n\in N\}$, with source $[x]$ and target $[y]$ when $a:x\to y$. Equivalently, the arrows from $[x]$ to $[y]$ are precisely the orbits $[a]$ for which some representative has the form $a:gx\to g'y$, with $g,g'\in N$.

To compose $[a]:[x]\to[y]$ and $[b]:[y]\to[z]$, choose a representative $a$ and then the unique representative $b'$ of $[b]$ whose source is the target of $a$; define $[a][b]=[ab']$. The identity at $[x]$ is $[1_x]$, and the inverse of $[a]$ is $[a^{-1}]$.

## Definition references

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[prop-groupoid-orbit-interface-artin-tits-prerequisites](item-prop-groupoid-orbit-interface-artin-tits-prerequisites)

## Justification

The homomorphism supplies compatible left actions on objects and arrows, and functors preserve sources, targets, identities and composition. Group-action orbits are equivalence classes, so the displayed object and arrow collections are well-defined sets. The source and target of an arrow orbit do not depend on the representative. An arrow orbit has source $[x]$ and target $[y]$ exactly when a representative has endpoints $gx$ and $g'y$ for suitable $g,g'\in N$.

By [prop-groupoid-orbit-interface-artin-tits-prerequisites](item-prop-groupoid-orbit-interface-artin-tits-prerequisites), freeness gives a unique representative of an arrow orbit with any prescribed source in its source orbit. Consequently the prescribed $b'$ exists uniquely; changing the representative $a$ changes the consecutive pair by a common translate, so the composite orbit is independent of the choice. The same proposition establishes associativity, the stated identity and inverse orbits, and connectedness of the resulting small groupoid.
