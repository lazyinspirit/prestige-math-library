---
title: Roots of unity and étale Tate twists
status: draft
research_item: def-etale-tate-coefficients
dependency_level: 6
---

PDF p. 5: Property (5); PDF p. 6: Choice of a primitive root of unity

## Prerequisites

- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

## Definition
Let $n\geq 1$ be an integer invertible on a scheme $X$: its image in every local ring of $X$ is a unit. Work on a size-bounded small étale site of $X$ whose objects are étale $X$-schemes, whose covering families are jointly surjective étale families, and which includes the open restrictions and covers used below.

For an object $U$ put $P_n(U)=\{u\in\Gamma(U,\mathcal O_U)^\times:u^n=1\}$, with multiplication and restriction of functions. The **sheaf of $n$th roots of unity** $\mu_n$ is the sheafification of this presheaf. Its group law is written multiplicatively; multiplication by an integer means taking that power. As every section is annihilated by $n$, $\mu_n$ is a sheaf of $\mathbb Z/n$-modules. Here $\mathbb Z/n$ denotes both the quotient ring and, on the site, the constant sheaf obtained by sheafifying the constant presheaf with that value.

For $j\geq 1$, define the **Tate twist** $\mu_n^{\otimes j}$ to be the $j$-fold tensor product over the constant sheaf $\mathbb Z/n$: form the objectwise tensor product presheaf and sheafify it. Set $\mu_n^{\otimes 0}=\mathbb Z/n$. Only nonnegative twists are defined here.

If $X$ is a scheme over a field $k$ and a primitive $n$th root $\zeta\in k$ is chosen, meaning an element of multiplicative order exactly $n$, then necessarily $n$ is prime to the characteristic of $k$. The map $a\mapsto\zeta^a$ induces an isomorphism of $\mathbb Z/n$-sheaves $\mathbb Z/n\cong\mu_n$ and hence, for every $j\geq0$, an isomorphism $\mathbb Z/n\cong\mu_n^{\otimes j}$ sending $1$ to $\zeta^{\otimes j}$ when $j>0$ and to $1$ when $j=0$. For $n=1$ both sides are zero modules. These isomorphisms depend on the chosen root for positive $j$.

This definition alone asserts no motivic-to-étale comparison. In particular, in characteristic $p>0$ it does not treat $\mu_p$ as a prime-to-characteristic coefficient sheaf.

## Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

## Justification
The restriction maps preserve products and the equation $u^n=1$, so $P_n$ is a presheaf of abelian groups. The sheafification construction and its universal property are supplied by [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). Group operations and the $\mathbb Z/n$-action descend through sheafification: matching families can be added or multiplied after passing to a common covering sieve, and the relations hold locally and therefore in the sheafification. The same construction applied to objectwise tensor products gives the stated tensor sheaf; its universal property follows by applying the presheaf tensor universal property locally and gluing. Thus the constructions do not depend on representatives of local sections.

For the trivialization, if $n>1$ and the characteristic divided $n$, writing $n=p^r m$ would give $\zeta^m=1$ because in a field of characteristic $p$ the equation $t^{p^r}=1$ has only the root $1$; this contradicts the order $n$. Hence $n$ is invertible in $k$. The $n$ elements $1,\zeta,\ldots,\zeta^{n-1}$ are distinct, and their pairwise differences are units on every $k$-scheme. Consequently $T^n-1=\prod_{i=0}^{n-1}(T-\zeta^i)$ with pairwise comaximal factors. If $u\in P_n(U)$, apply the Chinese remainder idempotents to $u$ on each affine open of $U$: the resulting finite disjoint open decomposition has $u=\zeta^i$ on its $i$th part. Open restrictions are étale, and these decompositions cover $U$. Thus $a\mapsto\zeta^a$ is locally surjective. It is locally injective because distinct $\zeta^i-\zeta^h$ are units, so equality can occur only on the empty scheme. The sheafification universal property and the sheaf gluing condition therefore make the induced map an isomorphism. Tensoring this isomorphism $j$ times and using the canonical multiplication isomorphism $(\mathbb Z/n)^{\otimes j}\cong\mathbb Z/n$ gives the displayed twist trivialization. For $n=1$ the root and coefficient groups are trivial, giving the same conclusion.
