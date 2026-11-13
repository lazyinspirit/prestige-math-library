---
title: Free object actions give orbit coverings
status: draft
research_item: prop-groupoid-orbit-interface-artin-tits-prerequisites
dependency_level: 7
---

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)
- [math:def-group-action](https://alphabetamath.cc/item/def-group-action)
- [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)
- [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)


## Statement

Let a group $N$ act on a connected small groupoid $G$ by automorphisms, with a left action on objects and arrows: $(nm)a=n(ma)$. Assume that the object action is free, meaning that $nx=x$ implies $n=1$. Arrow products are read left to right. An orbit is the set of translates of an object or arrow.

The object and arrow orbits form a connected groupoid $G/N$: the source and target of an arrow orbit are the orbits of its source and target, and composition is defined by choosing consecutive representatives. For each object $x$, every arrow orbit whose source is $[x]$ has exactly one representative with source $x$. The orbit functor $p:G\to G/N$ is a normal covering, and $n\mapsto(a\mapsto na)$ identifies $N$ with its group of deck transformations, whose multiplication is ordinary function composition.

For every object $x$, there is an exact sequence of groups $1\to G_x\xrightarrow{p}(G/N)_{[x]}\xrightarrow{\delta}N\to1$. Here $G_x$ and $(G/N)_{[x]}$ are the groups of arrows from the indicated object to itself, and $\delta([a])=n$ when the unique representative $a$ with source $x$ has target $nx$. Exactness means that the first map is injective, the last is surjective, and the image of the first equals the kernel of the last.

## Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Facts & Assumptions

**Given:** The group action and the connected small groupoid in the Statement.

[F1] A groupoid has associative arrow composition, identities and two-sided inverses; its automorphisms preserve all of these and the source and target of arrows. Connectedness means nonemptiness and an arrow between any ordered pair of objects. [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[F2] In a left group action, $1$ acts as the identity and $(nm)$ acts as $n$ after $m$. The orbit relation is an equivalence relation, and freeness means that an element fixing an object is the identity. [math:def-group-action](https://alphabetamath.cc/item/def-group-action) [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action) [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[F3] A covering of connected groupoids is a functor bijective on arrows with each fixed source. A deck transformation is an automorphism over the base, and the covering is normal when its deck transformations act transitively on a fibre. [thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[F4] A group homomorphism $f:H\to K$ satisfies $f(uv)=f(u)f(v)$. Its kernel is $\{u\in H:f(u)=1_K\}$, and its image is $\{f(u):u\in H\}$. [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Proof

**Proof technique:** direct.

**Goal:** Construct the orbit groupoid and establish the covering, deck group and exact sequence.

1.1 **Representatives and composition.** If an arrow orbit has source $[x]$, translate any representative so its source is $x$. Two representatives in that orbit with source $x$ differ by an element fixing $x$, hence are equal by freeness. For composable arrow orbits, choose a representative $a:x\to y$ of the first and the unique representative $b:y\to z$ of the second with source $y$; define their product to be $[ab]$. Replacing $a$ by $na$ replaces $b$ by $nb$, so the product orbit is unchanged. Sources and targets are well defined because automorphisms preserve them. [F1, F2, given]

2.1 **Groupoid and covering.** For three composable orbits, choose consecutive representatives $a,b,c$. Both parenthesizations have orbit $[abc]$, by uniqueness in 1.1 and associativity in $G$. Identity and inverse orbits satisfy the groupoid laws by the same construction. Thus the orbit maps define a functor $p$. It is bijective on every source-star by 1.1. The quotient is nonempty and connected because an arrow between representatives of any two object orbits exists in $G$. Consequently $p$ is a covering of connected groupoids. [F1, F3, step 1.1]

3.1 **Deck transformations.** Each $n\in N$ acts as an automorphism over $G/N$, so gives a deck transformation; these act transitively on every object fibre, which is an $N$-orbit. If a deck transformation fixes one object $x$, then it fixes every arrow with source $x$ by source-star injectivity, and hence fixes their targets. Connectedness reaches every object this way; source-star injectivity then fixes every arrow. For any deck transformation $d$, its value at $x$ is $nx$ for a unique $n$ by freeness. The deck transformation $n^{-1}d$ fixes $x$, so is the identity. Thus $N$ is exactly the deck group, with multiplication preserved by the left-action law, and the covering is normal. [F1, F2, F3, F4, step 2.1]

4.1 **Vertex sequence.** For a loop orbit at $[x]$, its unique representative $a$ from $x$ ends at a unique $nx$, defining $\delta([a])=n$. If $b:x\to mx$ represents a second loop orbit, the consecutive representative after $a$ is $nb:nx\to nmx$; hence $\delta([a][b])=nm$, so $\delta$ is a homomorphism. Connectedness supplies an arrow $x\to nx$ for each $n$, proving surjectivity. Its kernel consists exactly of orbit classes represented by arrows $x\to x$, which are the image of $G_x$. The restriction of $p$ to $G_x$ is injective by source-star uniqueness. This proves the exact sequence and all assertions. [F1, F2, F4, step 1.1, step 2.1, step 3.1] ∎
