---
title: Root and sign certificates for parameter-dependent polynomials
status: draft
research_item: def-expander-prereq-polynomial-root-certificates
dependency_level: 0
---

## Prerequisites

- [math:def-polynomial-ring-on-a-family-of-indeterminates](https://alphabetamath.cc/item/def-polynomial-ring-on-a-family-of-indeterminates)
- [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value)
- [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)
- [math:lem-real-interval-arithmetic-preserves-enclosure](https://alphabetamath.cc/item/lem-real-interval-arithmetic-preserves-enclosure)
- [math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family)
- [math:def-interval](https://alphabetamath.cc/item/def-interval)
- [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)
- [math:lem-of-sign-rules](https://alphabetamath.cc/item/lem-of-sign-rules)
- [math:def-derivative](https://alphabetamath.cc/item/def-derivative)


## Definition

Let $p$ be a real polynomial in two formal indeterminates $X,T$, understood as a finite coefficient family. For real $x,a$, define $p(x,a)$ as the image of $p$ under the evaluation homomorphism $\operatorname{ev}_{x,a}:\mathbb{R}[X,T]\to\mathbb{R}$ that fixes real constants and sends $X$ to $x$ and $T$ to $a$. Let $A=[a_-,a_+]$ and $I=[u,v]$ be nonempty closed bounded real intervals, with $u<v$.

A **sign certificate** for $p$ on $I\times A$ is a proof of a stated sign inequality for every $(x,a)\in I\times A$, or a proof of an enclosure $p(x,a)\in[L,U]$ for every such pair. An enclosure proves $p>0$ if $L>0$, and proves $p<0$ if $U<0$; non-strict endpoint inequalities give the corresponding non-strict signs.

A **root certificate** on $I$ over $A$ consists of proofs that, for every $a\in A$, the function $x\mapsto p(x,a)$ is continuous on $I$, its endpoint values have strictly opposite signs, and it is strictly monotone on $I$. Strict monotonicity means either $p(x,a)<p(y,a)$ for every $u\le x<y\le v$, or $p(x,a)>p(y,a)$ for every such pair; the direction may depend on $a$. To certify uniqueness on a larger specified real set $I\subseteq D\subseteq\mathbb{R}$, the certificate also contains a proof that $p(x,a)\ne0$ for every $x\in D\setminus I$ and every $a\in A$.

For a cubic $b_3x^3+b_2x^2+b_1x+b_0$ with $b_3\ne0$, its **discriminant** is $\Delta=b_2^2b_1^2-4b_3b_1^3-4b_2^3b_0-27b_3^2b_0^2+18b_3b_2b_1b_0$. A discriminant-based certificate must state the applicable root-count theorem and verify its hypotheses separately in the cases $\Delta<0$, $\Delta=0$, and $\Delta>0$ that occur in the parameter range, including parameter endpoints. This definition itself asserts no root count from the discriminant.

## Definition references

[math:def-polynomial-ring-on-a-family-of-indeterminates](https://alphabetamath.cc/item/def-polynomial-ring-on-a-family-of-indeterminates)

[math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family)

[math:def-interval](https://alphabetamath.cc/item/def-interval)

[math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)

## Justification

The evaluation homomorphism exists uniquely by [math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family), applied with both coefficient and target ring equal to $\mathbb{R}$, the coefficient homomorphism the identity, and the two assigned values $x,a$. The closed intervals are those of [math:def-interval](https://alphabetamath.cc/item/def-interval), and continuity on $I$ means continuity at every point of $I$ as in [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real).

For each fixed $a\in A$, the continuity and opposite-sign conditions give a zero in $[u,v]$ by [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value). Strict monotonicity gives at most one zero there: two distinct zeros would have strictly ordered values. The additional exclusion gives uniqueness throughout $D$. A derivative-sign proof of strict monotonicity may use [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) only after checking continuity on the interval, differentiability at its interior points, and a strictly positive or strictly negative derivative throughout those points.

A finite outward-rounded interval calculation may establish an enclosure only under the domain and finite-result conditions of [math:lem-real-interval-arithmetic-preserves-enclosure](https://alphabetamath.cc/item/lem-real-interval-arithmetic-preserves-enclosure); an inconclusive enclosure does not establish a sign. Multiplication of an inequality by a denominator requires a proof of its sign on the relevant domain: a positive denominator preserves the inequality, a negative one reverses it, by [math:lem-of-sign-rules](https://alphabetamath.cc/item/lem-of-sign-rules); equality is preserved by either multiplication, so the same rules apply to non-strict inequalities. Division requires the denominator to be nonzero. These certificates are proof obligations for the particular polynomial and parameter range; they do not themselves establish a sign or root count for any article polynomial.
