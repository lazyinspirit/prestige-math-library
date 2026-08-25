---
id: lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing
kind: lemma
title: "The square map is well defined on the central quotient and satisfies $q(\\bar x\\bar y)=q(\\bar x)+q(\\bar y)+b(\\bar x,\\bar y)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, lem-power-of-a-product-in-a-group-of-class-two, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-square-map-of-an-extraspecial-two-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-elementary-abelian-p-group, def-quotient-group, def-center-of-a-group, def-order-in-a-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups, \u00a72 opening and \u00a72.1"
      url: "https://arxiv.org/pdf/1510.06583"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $2$-group with $Z(P)=\langle z\rangle$ and $V=P/Z(P)$,
and let $q=q_z$ be its square map and $b=b_z$ its commutator pairing. Then $q$ is
well defined on $V$ and

$$q(\bar x\bar y)=q(\bar x)+q(\bar y)+b(\bar x,\bar y)\qquad\text{for all }\bar x,\bar y\in V.$$

Moreover $q(\bar x)=0$ exactly when the elements of the coset $\bar x$ satisfy
$x^2=1$; a subgroup $U\le V$ on which $q$ vanishes satisfies $U\le U^{\perp}$ and
has elementary abelian preimage in $P$ of order $2\lvert U\rvert$; and every
maximal elementary abelian subgroup of $P$ contains $Z(P)$.

## Facts & Assumptions

**Given:** An extraspecial $2$-group $P$ with $Z(P)=\langle z\rangle$ of order two, the quotient $V=P/Z(P)$, the commutator pairing $b$ and the square map $q$.

[F1] The square map of $P$ relative to $z$ is $q_z:V\to\mathbb F_2$ determined by $x^2=z^{\,q_z(\bar x)}$ ([[def-square-map-of-an-extraspecial-two-group]]).

[F2] The commutator pairing of $P$ relative to $z$ is $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F4] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

[F5] $\operatorname{ord}(g)$ is the least $k\ge1$ with $g^k=e$ ([[def-order-in-a-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] If $[G,G]\le Z(G)$ then $(xy)^n=[y,x]^{\binom n2}x^ny^n$ for every $n\in\mathbb N$ ([[lem-power-of-a-product-in-a-group-of-class-two]]).

[L3] An extraspecial $p$-group is nilpotent of class exactly two, its derived subgroup satisfies $P'=Z(P)$ and has order $p$ ([[cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p]]).

[L4] The commutator pairing is well defined, $\mathbb F_p$-bilinear and alternating, with $b_z(\bar y,\bar x)=-b_z(\bar x,\bar y)$ ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L5] The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]).

[L6] The quotient group $G/N$ has the left cosets $gN$ as elements ([[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 Since $P/Z(P)$ is elementary abelian, $x^2\in Z(P)=\{1,z\}$ for every $x\in P$, and $z^2=1$; so $(xz)^2=x^2z^2=x^2$ and the value of $q$ depends only on the coset $\bar x$, which makes $q$ well defined on $V$. [F1, F3, L1, L6]

2.1 By definition $q(\bar x)=0$ exactly when $x^2=1$, and since $q$ is well defined this holds for one element of the coset exactly when it holds for both. [F1, F5, step 1.1]

2.2 The class-two power formula at exponent two gives $(xy)^2=[y,x]^{\binom 22}x^2y^2=[y,x]x^2y^2$, and $[y,x]=z^{b(\bar y,\bar x)}$. Over $\mathbb F_2$ one has $-1=1$, so $b(\bar y,\bar x)=-b(\bar x,\bar y)=b(\bar x,\bar y)$; hence $z^{q(\bar x\bar y)}=z^{b(\bar x,\bar y)+q(\bar x)+q(\bar y)}$ and the displayed identity holds. [F1, F2, L2, L3, L4, L5, step 1.1]

3.1 Let $U\le V$ satisfy $q(u)=0$ for every $u\in U$. Then for $u,u'\in U$ the identity gives $0=q(uu')=q(u)+q(u')+b(u,u')=b(u,u')$, so $U\le U^{\perp}$. [F2, step 2.2]

4.1 Let $E$ be the preimage of such a $U$ in $P$. It contains $Z(P)$, has order $2\lvert U\rvert$, is abelian because $b$ vanishes on $U$, and every one of its elements $x$ satisfies $x^2=1$ by step 2.1 together with $z^2=1$; so $E$ is elementary abelian of order $2\lvert U\rvert$. [F3, F4, L6, step 2.1, step 3.1]

5.1 If $E$ is elementary abelian and does not contain $Z(P)$, then $E\cap Z(P)$ is trivial and $EZ(P)$ is an abelian subgroup all of whose elements square to the identity, properly containing $E$; so a maximal elementary abelian subgroup contains $Z(P)$. [F3, F4, step 2.1, step 4.1] ∎

## Remarks

The identity is not additivity, and the correction term is where the two isomorphism types differ: on a subspace where $b$ vanishes the map $q$ is additive and its zero set is a subspace, and it is precisely the size of the largest such subspace that separates the two extraspecial groups of a given order.
