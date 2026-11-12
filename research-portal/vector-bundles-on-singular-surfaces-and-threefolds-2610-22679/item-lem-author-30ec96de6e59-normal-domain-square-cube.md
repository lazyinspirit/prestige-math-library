---
title: Square-cube roots in a normal domain
status: published
research_item: lem-author-30ec96de6e59-normal-domain-square-cube
dependency_level: 1
---

PDF p. 5: Seminormalization in Lemma 2.4

## Prerequisites

- [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)
- [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)


## Statement
Let $A$ be an integrally closed domain. For every $x,y\in A$ with $x^3=y^2$ there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. An integrally closed domain is a domain containing every element of its fraction field that satisfies a monic polynomial over it.

## Statement references

[math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)

## Facts & Assumptions

**Given:** An integrally closed domain $A$ and $x,y\in A$ satisfying $x^3=y^2$.

**Goal:** Produce the unique simultaneous square and cube root.

[F1] Equal squares and cubes in a reduced ring determine an element uniquely; reduced means that the only element with a zero positive power is zero ([lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)).

[F2] A domain is a commutative ring with $1\ne0$ and no zero divisors: $uv=0$ implies $u=0$ or $v=0$ ([math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)).

[F3] The fraction field $K=\operatorname{Frac}(A)$ consists of fractions $u/v$ with $u,v\in A$ and $v\ne0$ ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)). It is a field, and $u\mapsto u/1$ is an injective unital ring homomorphism; we identify $A$ with its image in $K$ ([math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)).

[A1] The integral-closedness assumption is used in its inline sense: if $z\in K$ satisfies $z^n+c_{n-1}z^{n-1}+\cdots+c_0=0$ for an integer $n\ge1$ and coefficients $c_i\in A$, then $z\in A$. Such an equation is monic because the leading coefficient is $1$.

## Proof

1.1 If $x=0$, then $y^2=0$, so [F2] gives $y=0$, and $a=0$ works. If $x\ne0$, [F3] lets us put $a=y/x$ in $K$. Field arithmetic and $y^2=x^3$ give $a^2=y^2/x^2=x$ and $a^3=a\,a^2=(y/x)x=y$. [given, F2, F3, algebra]

2.1 In the second case $a$ satisfies the monic equation $T^2-x=0$, so [A1] puts $a$ in $A$; the embedding in [F3] makes the equations from step 1.1 equations in $A$. A domain is reduced: if $b\ne0$, induction using [F2] shows $b^n\ne0$ for every integer $n\ge1$. Hence [F1] gives uniqueness in both cases. [given, A1, F1, F2, F3, step 1.1] ∎
