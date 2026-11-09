---
title: Length orders on an integral curve
status: published
research_item: lem-author-1437578267d2-length-orders
dependency_level: 0
---

PDF p. 13: Divisor presentation for supported degree six

## Prerequisites

- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:cor-length-is-additive-in-short-exact-sequences](https://alphabetamath.cc/item/cor-length-is-additive-in-short-exact-sequences)
- [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. Let $T$ be an integral finite-type curve over a field, $K=k(T)$, and $R=\mathcal O_{T,x}$ for a closed point $x$. For nonzero $a,b\in R$ set $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$. These lengths are finite, the integer is independent of the fraction, and it is additive under multiplication. It vanishes for all but finitely many closed $x$ for each $f\in K^\times$. Thus $\operatorname{div}_T(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism to the free zero-cycle group. A nonzero function regular near $x$ has order $\ell_R(R/fR)$; a unit has order zero. In a discrete valuation ring (DVR), meaning a local domain whose nonzero elements are units times nonnegative powers of one uniformizer, this order is its normalized valuation. No normality is assumed.

## Facts & Assumptions
**Given:** AC and $T,K,x,R$ as stated.

**Goal:** Establish the length formula and divisor homomorphism.

[F1] Module length counts the factors of a composition series and is additive in short exact sequences of finite-length modules. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:cor-length-is-additive-in-short-exact-sequences](https://alphabetamath.cc/item/cor-length-is-additive-in-short-exact-sequences)

[F2] Closed-point local rings of a finite-type integral curve are one-dimensional noetherian local domains, and a proper closed subset of such a curve is finite. [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
1.1 For nonzero $a\in R$, if $a$ is not a unit, the only prime containing $(a)$ is the maximal ideal $\mathfrak m$. Choose generators $u_i$ of $\mathfrak m$ and exponents $e_i>0$ with $u_i^{e_i}\in(a)$. A sufficiently high power of $\mathfrak m$ lies in $(a)$. The successive quotients of the resulting finite filtration of $R/aR$ are finite-dimensional over $R/\mathfrak m$, and hence have finite composition series. The unit case gives the zero module. [F1, F2, algebra]

2.1 For nonzero $a,c\in R$, cancellation gives the exact sequence $0\to R/aR\xrightarrow{c}R/acR\to R/cR\to0$. Length additivity therefore gives $\ell(R/acR)=\ell(R/aR)+\ell(R/cR)$. If $a/b=c/d$, then $ad=bc$, proving independence of the displayed difference. The same product formula proves additivity. [F1, step 1.1, algebra]

3.1 On each member of a finite affine cover write $f=a/b$ with nonzero regular $a,b$. Its order vanishes where both are units. The exceptional set is a proper closed subset of the curve, hence finite by [F2]. The finite sum is therefore defined, and step 2.1 makes it a homomorphism. [F2, step 2.1]

4.1 The regular and unit assertions follow by taking denominator one. In a DVR the filtration of $R/(\pi^n)$ by powers of a uniformizer has $n$ residue-field factors; subtracting numerator and denominator exponents gives the normalized valuation. [F1, step 2.1, step 3.1] ∎
