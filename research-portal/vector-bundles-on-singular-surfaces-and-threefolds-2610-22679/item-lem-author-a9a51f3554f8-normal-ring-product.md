---
title: A normal noetherian ring is a finite product of normal domains
status: published
research_item: lem-author-a9a51f3554f8-normal-ring-product
dependency_level: 0
---

PDF p. 9: Normal schemes and smooth-locus restriction

## Prerequisites

- [math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)
- [math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian](https://alphabetamath.cc/item/cor-radical-ideal-has-finitely-many-minimal-primes-noetherian)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)
- [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)
- [math:def-product-ring](https://alphabetamath.cc/item/def-product-ring)
- [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)
- [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)
- [math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal)
- [math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime)
- [math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection)
- [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)
- [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)
- [math:def-polynomial-degree-leading-coefficient-and-monic](https://alphabetamath.cc/item/def-polynomial-degree-leading-coefficient-and-monic)
- [math:def-polynomial-evaluation-and-root](https://alphabetamath.cc/item/def-polynomial-evaluation-and-root)


## Statement
Assume the Axiom of Choice. Let $A$ be a commutative noetherian ring such that every localization $A_{\mathfrak p}$ at a prime ideal is an integrally closed domain. Then $A$ is canonically isomorphic to the finite product of its quotients by its minimal prime ideals, and those quotients are noetherian integrally closed domains. The zero ring is the empty product.

A prime is minimal if it contains no strictly smaller prime. A domain is integrally closed if every element of its fraction field satisfying a monic polynomial over the domain belongs to the domain. A ring is noetherian if every ideal is finitely generated.

## Statement references

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)

[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)

[math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[math:def-product-ring](https://alphabetamath.cc/item/def-product-ring)

[math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)

[math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)

[math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)

[math:def-polynomial-degree-leading-coefficient-and-monic](https://alphabetamath.cc/item/def-polynomial-degree-leading-coefficient-and-monic)

[math:def-polynomial-evaluation-and-root](https://alphabetamath.cc/item/def-polynomial-evaluation-and-root)

## Facts & Assumptions

[F1] A normal noetherian ring has the prime-localization property in the statement; the zero ring satisfies it vacuously ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[F2] A radical ideal in a noetherian ring is the intersection of finitely many primes minimal over it; the supplier uses dependent choice, available here from the assumed Axiom of Choice ([math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian](https://alphabetamath.cc/item/cor-radical-ideal-has-finitely-many-minimal-primes-noetherian)).

[A1] The Axiom of Choice is assumed ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). In particular it supplies the choice assumption of [F2] and [F3].

[F3] Under the Axiom of Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([math:thm-proper-ideal-contained-in-maximal-ideal](https://alphabetamath.cc/item/thm-proper-ideal-contained-in-maximal-ideal)). Every maximal ideal of a commutative ring is prime ([math:cor-maximal-ideals-are-prime](https://alphabetamath.cc/item/cor-maximal-ideals-are-prime)).

[F4] The ring and domain conventions are those of [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) and [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain); in particular a domain has $1\ne0$ and no zero divisors. Prime and maximal ideals are proper ideals with the properties in [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals). The quotient $A/I$ has cosets as elements and the induced ring operations ([math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)). A finite product is the ring of tuples with coordinatewise operations, obtained by iterating the binary construction of [math:def-product-ring](https://alphabetamath.cc/item/def-product-ring); the set consisting of the empty tuple is the one-element ring, and all ring laws hold coordinatewise. A ring homomorphism preserves addition, multiplication and identity; a ring isomorphism is a bijective ring homomorphism ([math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)).

[F5] At a prime $\mathfrak p$, the localization consists of fractions with denominators outside $\mathfrak p$ ([math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)). The fraction construction gives $a/s=a'/s'$ exactly when $u(as'-a's)=0$ for some allowed denominator $u$; in particular $a/1=0$ exactly when some allowed denominator annihilates $a$ ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)). For a domain $B$, its fraction field is the localization at its nonzero elements ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)). Thus $B$ and each $B_{\mathfrak q}$ embed in that field: equality of fractions there is cross multiplication, and a nonzero extra factor in the localization equivalence relation cancels by the domain property.

[F6] For a multiplicative subset $S$ of a commutative ring, extension and contraction are inverse inclusion-preserving bijections between primes of $S^{-1}A$ and primes of $A$ disjoint from $S$ ([math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection)).

[F7] A quotient of a commutative ring by a prime ideal is a domain ([math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)). A quotient of a noetherian commutative ring is noetherian ([math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)).

[F8] An ideal of a commutative ring $D$ is an additive subgroup closed under multiplication by elements of $D$ ([math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)); explicitly it contains $0$, is closed under subtraction, and contains $du$ whenever it contains $u$ and $d\in D$. It is proper when it is not all of $D$, equivalently when it does not contain $1$. The sum of ideals $I,J$ means $I+J=\{u+v:u\in I,\ v\in J\}$; this is an ideal because $0\in I+J$, differences and scalar multiples are computed componentwise. An ideal $I$ is finitely generated when there are $u_1,\ldots,u_n\in I$ with $I=\{\sum_{k=1}^n d_ku_k:d_k\in D\}$; for $n=0$ this is the zero ideal. A radical ideal means an ideal $I$ for which $a^m\in I$, $m\ge1$, implies $a\in I$.

[F9] A polynomial over a commutative ring $D$ is a finitely supported coefficient sequence, written $\sum_i c_iT^i$ ([math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)). A nonzero polynomial is monic when its highest nonzero coefficient is $1_D$ ([math:def-polynomial-degree-leading-coefficient-and-monic](https://alphabetamath.cc/item/def-polynomial-degree-leading-coefficient-and-monic)). Evaluation at an element $x$ of a commutative target ring along a unital map $\iota:D\to E$ is the finite sum $\sum_i\iota(c_i)x^i$; satisfying the polynomial means that this value is zero ([math:def-polynomial-evaluation-and-root](https://alphabetamath.cc/item/def-polynomial-evaluation-and-root)). In particular, for a domain $D$ and $x\in\operatorname{Frac}(D)$, being integral over $D$ means that $x^n+\sum_{k=0}^{n-1}c_kx^k=0$ for some $n\ge1$ and $c_k\in D$, using the inclusion into the fraction field. A monic polynomial of degree zero is $1$, which cannot vanish in this field, so the positive-degree formulation loses no equations.

## Proof

**Given:** A ring $A$ and the Axiom of Choice as in the statement.

**Goal:** Obtain the stated canonical product and prove that each factor is a normal noetherian domain.

1.1 If $a\ne0$ in $A$, then $A$ is nonzero and its annihilator $\{b\in A:ba=0\}$ is an ideal by [F8]: it contains $0$, and $ba=ca=0$ implies $(b-c)a=0$, while $ba=0$ implies $(db)a=d(ba)=0$ for $d\in A$. It is proper since it does not contain $1$. By [F3] and [A1], it is contained in a maximal, hence prime, ideal $\mathfrak m$. Then $a/1\ne0$ in $A_{\mathfrak m}$ by [F5]: otherwise some $s\notin\mathfrak m$ annihilates $a$, contrary to containment of the annihilator. A nilpotent element maps to zero in every prime localization because these localizations are domains by [F1]. Thus no nonzero element can be nilpotent. Equivalently, the zero ideal is radical: $a^n=0$ with $n\ge1$ implies $a=0$. This also holds for the zero ring. [F1, F3, F4, F5, F8, A1, given]

2.1 By [F2], $0=\bigcap_{i=1}^r\mathfrak p_i$ for the distinct minimal primes. They are pairwise comaximal, meaning $\mathfrak p_i+\mathfrak p_j=A$ for $i\ne j$. Otherwise their sum is an ideal by [F8], is proper and, by [F3] and [A1], lies in a maximal, hence prime, ideal $\mathfrak m$. Apply [F6] with $S=A\setminus\mathfrak m$. Each $\mathfrak p_i\subseteq\mathfrak m$ extends to a prime of $A_{\mathfrak m}$ with contraction $\mathfrak p_i$. A prime below this extension contracts to a prime below $\mathfrak p_i$, so minimality and the inverse correspondence make the extension minimal. The extensions of $\mathfrak p_i$ and $\mathfrak p_j$ are distinct because their contractions differ. This contradicts [F1]: in a domain the zero ideal is prime and is contained in every prime, so it is the only minimal prime. [F1, F2, F3, F4, F6, F8, A1, step 1.1]

3.1 For each $i$ and each $j\ne i$, comaximality supplies an element $b_{ij}\in\mathfrak p_j$ congruent to $1$ modulo $\mathfrak p_i$. Set $e_i=\prod_{j\ne i}b_{ij}$, taking an empty product to be $1$. Then $e_i$ is $1$ modulo $\mathfrak p_i$ and $0$ modulo every other $\mathfrak p_j$. The canonical map $\phi:A\to R=\prod_{i=1}^r A/\mathfrak p_i$, given by $a\mapsto(a+\mathfrak p_i)_i$, is a unital ring homomorphism by the coordinatewise and quotient operations in [F4]. Any tuple of residue classes, with chosen representatives $a_i$, is the image of $\sum_i e_i a_i$, so $\phi$ is surjective. Its kernel, the set of elements mapping to zero, is $\bigcap_i\mathfrak p_i=0$; if $\phi(a)=\phi(b)$, then $a-b$ belongs to this kernel, so $a=b$. Thus $\phi$ is an isomorphism. Each factor is a noetherian domain by [F7]. When $r=0$, step 2.1 says $0=A$ and $\phi$ identifies the zero ring with the empty product. [F4, F7, F8, step 2.1, algebra]

4.1 Fix a factor $B=A/\mathfrak p_i$ and a prime $\mathfrak q$ of $B$. In the product $R$ of step 3.1, let $Q=\{r\in R:r_i\in\mathfrak q\}$. This is a proper prime ideal: the ideal laws of [F8] and prime property are checked in coordinate $i$. Its inverse image $P=\phi^{-1}(Q)$ is likewise prime, and $\phi$ induces $A_P\cong R_Q$ by sending a fraction $a/s$ to $\phi(a)/\phi(s)$, with the inverse induced by $\phi^{-1}$; [F5] checks both maps on fraction equivalence classes. Projection onto coordinate $i$ similarly defines a ring map $R_Q\to B_{\mathfrak q}$. It is surjective: for $b/t\in B_{\mathfrak q}$ use a numerator tuple with coordinate $i$ equal to $b$ and all others zero, and a denominator tuple with coordinate $i$ equal to $t$ and all others one. It is injective: if $r/s$ maps to zero, [F5] and the domain property of $B$ give $r_i=0$; the tuple $\varepsilon_i$ with coordinate $i$ equal to $1$ and all others zero lies outside $Q$ and satisfies $\varepsilon_i r=0$, so $r/s=0$ in $R_Q$. Hence $B_{\mathfrak q}\cong A_P$ is an integrally closed domain by [F1]. Indeed, an isomorphism $g:C\to D$ of domains extends to their fraction fields by $a/b\mapsto g(a)/g(b)$, well-defined by cross multiplication in [F5], with inverse induced by $g^{-1}$. It transports $x^n+\sum_{k=0}^{n-1}c_kx^k=0$ to the equation with $x$ and all coefficients mapped by this extension, by the homomorphism laws in [F4] and the finite evaluation formula in [F9]. The leading coefficient remains $1$. Applying $g^{-1}$ to any such equation over $D$, integral closedness of $C$ puts its root in $C$, and then the original root lies in $D$. Thus isomorphisms preserve integral closedness. [F1, F4, F5, F8, F9, step 3.1, algebra]

5.1 Regard all $B_{\mathfrak q}$ inside $\operatorname{Frac}(B)$ using [F5]. If $x\in\operatorname{Frac}(B)$ is integral over $B$, [F9] gives $x^n+\sum_{k=0}^{n-1}c_kx^k=0$ with $c_k\in B$. The inclusions $B\subseteq B_{\mathfrak q}\subseteq\operatorname{Frac}(B)$ preserve this same finite equation, so it shows that $x$ is integral over every $B_{\mathfrak q}$. Moreover $\operatorname{Frac}(B_{\mathfrak q})=\operatorname{Frac}(B)$ under these embeddings: ratios of elements of $B_{\mathfrak q}$ lie in $\operatorname{Frac}(B)$, and every $b/c\in\operatorname{Frac}(B)$ is the ratio of $b/1$ and the nonzero $c/1$ in $B_{\mathfrak q}$. Step 4.1 therefore gives $x\in B_{\mathfrak q}$ for every prime $\mathfrak q$. If $x\notin B$, then $I=\{b\in B:bx\in B\}$ is an ideal by [F8] (it contains $0$ and is closed under subtraction and multiplication by elements of $B$), and is proper since $1\notin I$. Because $B$ is nonzero, [F3] and [A1] give a maximal, hence prime, ideal $\mathfrak m\supseteq I$. But $x\in B_{\mathfrak m}$ means $x=c/s$ in the fraction field with $c\in B$ and $s\notin\mathfrak m$. Then $sx=c\in B$, so $s\in I\subseteq\mathfrak m$, a contradiction. Thus $B$ is integrally closed. Together with step 3.1 this proves every stated assertion. [F3, F5, F8, F9, A1, step 3.1, step 4.1, algebra] ∎
