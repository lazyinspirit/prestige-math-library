---
title: Valuative dimension can be computed on an affine cover
status: published
research_item: lem-author-14463ef2f4e5-affine-cover
dependency_level: 7
---

PDF p. 4: Finite valuative dimension

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [lem-author-14463ef2f4e5-valuation-center](item-lem-author-14463ef2f4e5-valuation-center)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)
- [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)
- [math:def-morphism-affine-schemes-from-ring-map](https://alphabetamath.cc/item/def-morphism-affine-schemes-from-ring-map)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)
- [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)


## Statement
If $X=\bigcup_{i\in I}U_i$ is an affine open cover with $U_i=\operatorname{Spec}A_i$, then $\dim_v X=\sup_i\dim_v A_i$, with empty supremum $-1$.

## Facts & Assumptions
**Given:** A scheme $X$ and an affine open cover as in the statement. Schemes, affine schemes and affine open subschemes use the restricted structure sheaf conventions of [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) and [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme).

**Goal:** Compare the supremum over all affine opens with that over the given cover.

[F1] The scheme valuative dimension is the supremum over all affine opens, and the ring valuative dimension is the supremum over prime quotients and their valuation overrings. For a valuation overring $V$ in a fraction field $K$, every nonzero $z\in K$ has $z\in V$ or $z^{-1}\in V$. Valuative dimension is unchanged by ring isomorphisms, by the fraction-field transport argument in the definition's Justification. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[F2] A valuation overring $V$ has a unique maximal ideal $\mathfrak m$. [lem-author-14463ef2f4e5-valuation-center](item-lem-author-14463ef2f4e5-valuation-center) A unit means an element $u\in V$ with $uv=vu=1$ for some $v\in V$; a nonunit is an element without such an inverse. The identification of $\mathfrak m$ with the nonunits, and its primality, are proved directly below from the valuation property in [F1].

[F3] An ideal is an additive subgroup closed under multiplication by ring elements. [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal) A prime ideal is proper and satisfies the product criterion; prime quotients are domains. Quotients use cosets with their induced ring operations. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)

[F4] For a domain $D$, the field $\operatorname{Frac}(D)$ consists of fractions $a/b$ with $b\ne0$, and $d\mapsto d/1$ embeds $D$ into it. A subring of this field is a domain. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions) [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)

[F5] Ring homomorphisms preserve addition, multiplication and the identity. [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism) The points of $\operatorname{Spec}R$ are prime ideals, and its basic opens are $D(s)=\{\mathfrak q:s\notin\mathfrak q\}$. A ring map induces a continuous spectrum morphism by contraction, and every morphism between affine schemes is uniquely obtained from its map on coordinate rings. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:def-morphism-affine-schemes-from-ring-map](https://alphabetamath.cc/item/def-morphism-affine-schemes-from-ring-map) [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

[F6] A scheme morphism has local stalk maps and section maps compatible with restrictions. For an open $W$ of an open subspace $U\subseteq X$, one has $(\mathcal O_X|_U)(W)=\mathcal O_X(W)$, and restriction to $U$ leaves the stalks at its points unchanged. Indeed a stalk consists of germs $(W,s)$, with two representatives equal when their sections agree on a smaller neighbourhood; intersecting any neighbourhood with $U$ gives a representative inside $U$, and the same intersection preserves germ equality. [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[F7] The residue field at a point $y$ is the quotient of its local ring by its maximal ideal. In an affine chart where $y$ corresponds to $\mathfrak p\subset A$, it is canonically $\operatorname{Frac}(A/\mathfrak p)$. These identifications use the stalk of the restricted structure sheaf, so they agree on overlapping charts. [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[F8] A sheaf satisfies locality and gluing for every open cover, including the empty cover of the empty set. [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space) Hence its sections over the empty set form a singleton: gluing gives a section of the empty matching family and locality makes it unique. For a sheaf of rings this is the zero ring.

## Proof
1.1 The supremum over the cover is at most $\dim_v X$ by [F1]. Conversely, take an arbitrary affine open $U=\operatorname{Spec}A$, a prime $\mathfrak p\subset A$ and a valuation overring $V$ of $D=A/\mathfrak p$ in $K=\operatorname{Frac}(D)$. Since $D\subseteq V\subseteq K$, every fraction of $V$ lies in $K$, while every element of $K$ is a fraction of elements of $D\subseteq V$; hence $\operatorname{Frac}(V)=K$. By [F5], $A\to D\hookrightarrow V$ induces a morphism $f:\operatorname{Spec}V\to U\subseteq X$. Let $\mathfrak m$ be the unique maximal ideal supplied by [F2]. We identify it with the nonunits directly. Let $N$ be the set of nonunits of $V$. If $a\in N$ and $v\in V$, an inverse of $va$ would give an inverse of $a$, so $va\in N$; the same argument gives $-a\in N$. For nonzero $a,b\in N$, the valuation property in [F1] gives $a/b\in V$ or $b/a\in V$. In the first case $a+b=b(1+a/b)\in N$ by the product observation, and the second case is symmetric. When either summand is zero the conclusion is immediate. Thus [F3] makes $N$ an ideal, proper because $0\in N$ and $1\notin N$. A proper ideal contains no unit, since an inverse would force it to contain $1$; hence $\mathfrak m\subseteq N$. Maximality now gives $N=\mathfrak m$. Elements outside $N$ are units, and the product of units has the product of their inverses as an inverse; therefore $N$ is prime by [F3]. In particular $\mathfrak m$ is a point of $\operatorname{Spec}V$. Let $x=f(\mathfrak m)$ and choose $U_i=\operatorname{Spec}B$ containing $x$. The open $f^{-1}(U_i)$ contains $\mathfrak m$, so [F5] gives a basic open $D(s)$ containing $\mathfrak m$ inside it. By the identification $N=\mathfrak m$ just proved, $s\notin\mathfrak m$ is a unit; a proper prime ideal contains no unit, so $D(s)=\operatorname{Spec}V$. Thus $f$ has image in $U_i$. To factor $f$ as a scheme morphism $g:\operatorname{Spec}V\to U_i$, use its same continuous map with codomain $U_i$. For every open $W\subseteq U_i$, which is also open in $X$, use the section map $f^\sharp_W:\mathcal O_X(W)\to\mathcal O_{\operatorname{Spec}V}(f^{-1}W)$. By [F6] these are precisely maps from the restricted structure sheaf, they commute with restrictions, and their stalk maps are the original local maps. They therefore define $g$, whose composite with the inclusion is $f$. [F1, F2, F3, F4, F5, F6, given, choose, construct]

2.1 By [F5], $g$ corresponds to a unital homomorphism $\varphi:B\to V$. Its kernel $\mathfrak r=\{b\in B:\varphi(b)=0\}$ is an ideal: it is closed under differences and multiplication by elements of $B$ because $\varphi$ preserves addition and multiplication. It is proper since $\varphi(1)=1\ne0$, and if a product maps to zero, one of its factors does because $V$ is a domain; thus $\mathfrak r$ is prime by [F3]. The induced map $B/\mathfrak r\to V$, $b+\mathfrak r\mapsto\varphi(b)$, is well-defined since equal cosets differ by a kernel element, is a unital homomorphism by the quotient operations, and is injective since a coset maps to zero precisely when it is the zero coset. The point $(0)$ of $\operatorname{Spec}V$ maps by contraction to $\mathfrak p$ in $U$ and to $\mathfrak r$ in $U_i$, representing the same point $y\in X$. The local stalk map at $(0)$ induces a map $\kappa_X(y)\to\kappa_{\operatorname{Spec}V}((0))=\operatorname{Frac}(V)=K$: it descends to the quotients because it carries the maximal ideal into the maximal ideal. In the $A$-chart, [F7] identifies this map with $\operatorname{Frac}(A/\mathfrak p)\to K$, sending each fraction to that same fraction, hence with the identity of $K$. In the $B$-chart the same stalk map identifies it with the fraction extension of $B/\mathfrak r\hookrightarrow V\subseteq K$. Thus [F7] canonically identifies $\operatorname{Frac}(B/\mathfrak r)$ with $K$, compatibly with that embedding, rather than merely giving an abstract field isomorphism. Transporting $V$ along its inverse gives a subring of $\operatorname{Frac}(B/\mathfrak r)$ containing $B/\mathfrak r$; the condition that $z$ or $z^{-1}$ belongs to it is preserved, as are prime-chain lengths under the ring isomorphism. It is therefore a valuation overring of $B/\mathfrak r$ with dimension $\dim V$. Consequently $\dim V\leq\dim_v B\leq\sup_i\dim_v A_i$. Taking the suprema over these valuation overrings, prime quotients and affine opens in [F1] proves the reverse inequality. If $X$ is empty, every affine open and cover member is empty. Its coordinate ring is its ring of global sections by the affine-scheme convention in the Given; [F8] makes that ring the zero ring. Thus [F1] makes both sides $-1$, also when the indexing set is empty. [F1, F3, F4, F5, F6, F7, F8, step 1.1, algebra] ∎
