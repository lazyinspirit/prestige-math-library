---
title: Equal value groups preserve valuation rank
status: draft
research_item: lem-adjudicate-8e6efd435bbb-equal-value-group-rank
dependency_level: 0
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

- [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring)
- [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:def-value-group-of-a-valuation-ring](https://alphabetamath.cc/item/def-value-group-of-a-valuation-ring)
- [math:thm-every-valuation-ring-arises-from-its-value-group](https://alphabetamath.cc/item/thm-every-valuation-ring-arises-from-its-value-group)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)
- [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)


## Statement
For a valuation ring $V$, its rank means its Krull dimension, the supremum of lengths of finite strict chains of prime ideals. An extension of valuation rings $f:V\hookrightarrow W$ means an injective ring homomorphism with $f^{-1}(\mathfrak m_W)=\mathfrak m_V$, where $\mathfrak m_V$ and $\mathfrak m_W$ are the unique maximal ideals. Put $K=\operatorname{Frac}(V)$, $L=\operatorname{Frac}(W)$ and $\Gamma_V=K^\times/V^\times$, and similarly for $W$. If the induced value-group map $\phi:\Gamma_V\to\Gamma_W$ is surjective, it is an isomorphism of ordered groups. Contraction and extension give mutually inverse inclusion-preserving bijections between the prime ideals of $W$ and $V$, and $\operatorname{rank}(W)=\operatorname{rank}(V)$, allowing infinite rank.

## Statement references
[math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring)

[math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local)

[math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)

[math:def-value-group-of-a-valuation-ring](https://alphabetamath.cc/item/def-value-group-of-a-valuation-ring)

[math:thm-every-valuation-ring-arises-from-its-value-group](https://alphabetamath.cc/item/thm-every-valuation-ring-arises-from-its-value-group)

[math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)

## Facts & Assumptions
**Given:** The extension $f$ and the surjectivity of $\phi$ in the statement. Identify $V$ with its image in $W$, and embed $K$ in $L$ by $a/b\mapsto f(a)/f(b)$; the fraction equivalence makes this well defined and injective.

**Goal:** Identify prime ideals and compare their finite strict chains.

[F1] Valuation rings are domains satisfying the inverse-membership alternative, and their nonunits form the unique maximal ideal. [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring) [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local)

[F2] The fraction field is formed from fractions with nonzero denominators. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)

[F3] Write $v_V$ and $v_W$ for the canonical valuations. Their ordered groups have $v_V(y)\ge v_V(x)$ exactly when $y/x\in V$ for nonzero $x,y$; values are nonnegative exactly on the ring, and the ultrametric inequality holds. Equality of values means that the quotient is a unit. [math:def-value-group-of-a-valuation-ring](https://alphabetamath.cc/item/def-value-group-of-a-valuation-ring) [math:thm-every-valuation-ring-arises-from-its-value-group](https://alphabetamath.cc/item/thm-every-valuation-ring-arises-from-its-value-group)

[F4] A prime ideal is a proper ideal satisfying the product test; Krull dimension is the supremum of the lengths of finite strict prime chains. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[F5] A ring homomorphism preserves addition, multiplication and $1$; in particular, $f(u)f(u^{-1})=1$ for every unit $u$. [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[F6] An ideal of a commutative ring is an additive subgroup stable under multiplication by every ring element; in particular it is closed under finite sums. [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)

## Proof
1.1 A nonzero $z\in K$ outside $V$ has $z^{-1}\in\mathfrak m_V$: otherwise $z^{-1}$ would be a unit of $V$. Localness sends this inverse into $\mathfrak m_W$, so $z$ cannot belong to $W$. Hence $W\cap K=V$. The map $\phi$ is well defined since units of $V$ remain units of $W$, and it is injective since $V\cap W^\times=V^\times$. The equality $W\cap K=V$ shows that $\phi(v_V(z))\ge0$ if and only if $v_V(z)\ge0$, so $\phi$ preserves and reflects order. Its assumed surjectivity makes it an ordered-group isomorphism. Every nonzero $w\in W$ now has the same value as some nonzero $a\in V$: surjectivity first gives $a\in K^\times$, and order reflection puts $a$ in $V$. Thus $w/a\in W^\times$. Consequently every ideal $J$ of $W$ satisfies $J=(J\cap V)W$, since each nonzero $w\in J$ is a unit times such an $a\in J\cap V$. Here $IW$ denotes finite sums of products $aw$ with $a\in I,w\in W$, and $J\cap V$ denotes contraction. [given, F1, F2, F3, F5, F6]

2.1 For a prime ideal $\mathfrak p$ of $V$, show $(\mathfrak pW)\cap V=\mathfrak p$. If $0\ne x\in(\mathfrak pW)\cap V$, write $x=\sum_{i=1}^n a_iw_i$ with $a_i\in\mathfrak p,w_i\in W$. Some $a_i$ is nonzero; choose a nonzero $a_j$ with least value among this finite list. Then each $a_i/a_j\in V$ (including zero coefficients), so $x/a_j\in W\cap K=V$, and $x\in\mathfrak p$. The reverse containment is immediate. In particular $\mathfrak pW$ is proper. If $ww'\in\mathfrak pW$ with $w,w'\ne0$, step 1.1 writes them as units times $a,a'\in V$. Thus $aa'\in\mathfrak pW\cap V=\mathfrak p$, so $a\in\mathfrak p$ or $a'\in\mathfrak p$, and $w\in\mathfrak pW$ or $w'\in\mathfrak pW$. A zero factor already lies in this ideal. Hence $\mathfrak pW$ is prime. Contraction of a prime of $W$ is prime by the product test and preservation of $1$. Step 1.1 and the contraction equality give inverse maps, each preserving inclusion; they therefore preserve strict chains and their lengths. Taking suprema proves equality of ranks, also for fields and for infinite rank. Only finitely many witnesses at a time were chosen. [F3, F4, F5, F6, step 1.1] ∎
