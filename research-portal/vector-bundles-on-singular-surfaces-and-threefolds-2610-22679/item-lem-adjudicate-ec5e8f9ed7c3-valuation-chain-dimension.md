---
title: Valuation-overring chains compute Krull valuative dimension
status: published
research_item: lem-adjudicate-ec5e8f9ed7c3-valuation-chain-dimension
dependency_level: 0
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-subring](https://alphabetamath.cc/item/def-subring)
- [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)
- [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring)
- [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)


## Statement
Let $D$ be a nonzero commutative domain and $K=\operatorname{Frac}(D)$. All subrings have the same identity as $K$. If $V$ is a valuation ring with $D\subseteq V\subseteq K$, an **overring of $V$ in $K$** means a subring $W$ with $V\subseteq W\subseteq K$. Every such $W$ is a valuation ring. Write $\mathfrak m_W$ for its ideal of nonunits, where a unit means an element with a multiplicative inverse in $W$. The assignments $\mathfrak p\mapsto V_{\mathfrak p}$ and $W\mapsto\mathfrak m_W\cap V$ are inverse inclusion-reversing bijections between prime ideals of $V$ and its overrings in $K$. Here $V_{\mathfrak p}=\{a/s\in K:a\in V,\ s\in V\setminus\mathfrak p\}$.

The Krull dimension $\dim V$ is consequently the supremum of the lengths $n$ of finite strict chains $V=W_0\subsetneq\cdots\subsetneq W_n=K$ of overrings of $V$. Define $\delta(D)=\sup_{D\subseteq V\subseteq K,\ V\text{ valuation}}\dim V$, and let $c(D)$ be the supremum of integers $n\geq0$ for which there is a chain $D\subseteq V_0\subsetneq\cdots\subsetneq V_n\subseteq K$ of valuation rings. Then $\delta(D)=c(D)$, including the value infinity. Requiring $V_n=K$ leaves $c(D)$ unchanged. No Axiom of Choice is required for these assertions.

## Facts & Assumptions
**Given:** A nonzero commutative domain $D$ and its specified fraction field $K$; all rings and subrings lie in fixed universes.

**Goal:** Translate finite valuation-overring chains into prime-chain Krull dimensions without importing an unstated intermediate conclusion.

[F1] [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-subring](https://alphabetamath.cc/item/def-subring) and [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain) supply the ring, unital-subring and domain conventions. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions) and [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds) supply the field $K$, its fractions and the embedding of $D$. Any intermediate ring $D\subseteq V\subseteq K$ has fraction field $K$: fractions of $D$ already exhaust $K$.

[F2] [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring) supplies the condition that for every nonzero $x\in K$, either $x$ or $x^{-1}$ belongs to the valuation ring. [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local) supplies its proper ideal of nonunits and its unique maximal ideal.

[F3] [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) supplies the proper-ideal product criterion for primality. [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal) supplies localization by the complement of a prime; in the present domain inside $K$ it is realized by the displayed fractions. Its ring operations are the inherited fraction operations: addition has denominator $st$, multiplication has denominator $st$, and a prime's complement is closed under multiplication.

[F4] [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring) defines dimension of a nonzero ring by finite strict prime chains, allowing infinity. The chain lengths and suprema in the Statement use this same convention. All rings here are nonzero because they are unital subrings of $K$.

## Proof
1.1 Fix $V$ as in the Statement. Every overring $W$ is a valuation ring because it contains $V$, so [F2] supplies its proper nonunit ideal $\mathfrak m_W$. A product is a unit exactly when both factors are units: if $ab$ has inverse $u$, then $bu$ inverts $a$ and $au$ inverts $b$. Thus $\mathfrak m_W$ is prime by [F3], and its contraction $\mathfrak p=\mathfrak m_W\cap V$ is a proper ideal satisfying the same product criterion. Each $s\in V\setminus\mathfrak p$ is invertible in $W$, so $V_{\mathfrak p}\subseteq W$. If $w\in W\setminus V$, then $w\ne0$ and $w^{-1}\in V$ by [F2]; since $w^{-1}$ is invertible in $W$, it lies outside $\mathfrak p$, whence $w=1/(w^{-1})\in V_{\mathfrak p}$. This proves $W=V_{\mathfrak p}$. Conversely, for a prime $\mathfrak p$ of $V$, the fractions in [F3] form an overring and hence a valuation ring. An element $a\in V\setminus\mathfrak p$ is invertible in $V_{\mathfrak p}$. If a nonzero $a\in\mathfrak p$ had inverse $b/s$ there, then $s=ab\in\mathfrak p$, contrary to $s\notin\mathfrak p$; zero is not invertible. Therefore $\mathfrak m_{V_{\mathfrak p}}\cap V=\mathfrak p$. The two assignments are inverse. Prime inclusion reverses the denominator sets, and overring inclusion preserves units, so both assignments reverse inclusions; inverse bijections preserve strictness. [F1, F2, F3, given, construct]

2.1 By [F1], $V$ has fraction field $K$, so the endpoints under step 1.1 are $V_{(0)}=K$ and $V_{\mathfrak m_V}=V$. Here $(0)$ is prime because $V$ is a subring of a field, and every prime of $V$ lies in $\mathfrak m_V$ because a proper ideal contains no unit. Thus any finite strict prime chain can be extended to these endpoints, discarding repetitions. Step 1.1 reverses such chains to strict overring chains from $V$ to $K$, with the same length. Conversely, every such overring chain reverses to a prime chain. By [F4] their length suprema agree, including infinity. Each chain counted by $c(D)$ lies among the overrings of its first ring $V_0$; appending $K$ if necessary shows its length is at most $\dim V_0\leq\delta(D)$. Conversely, every prime-chain length in any valuation overring $V$ of $D$ is bounded above by the length of an overring chain from $V$ to $K$, hence by $c(D)$. Taking both suprema gives $\delta(D)=c(D)$ and also proves the assertion with the final ring required to be $K$. These families are sets of subrings of a fixed field and finite sequences of them; they contain a length-zero chain via $K$. Their suprema therefore exist in $\{0,1,\ldots,\infty\}$. The constructions used a specified ring or chain at each point and no simultaneous selection of witnesses, so no Choice premise is used. [F1, F2, F3, F4, step 1.1] ∎
