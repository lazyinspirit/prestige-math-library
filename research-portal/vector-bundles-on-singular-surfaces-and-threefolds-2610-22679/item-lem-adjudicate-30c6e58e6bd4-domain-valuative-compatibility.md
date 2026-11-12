---
title: Agreement of the domain and prime-quotient valuative formulas
status: published
research_item: lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility
dependency_level: 0
sources:
  references:
    - title: Lombardi, Neuwirth and Yengui, Valuative dimension, constructive points
        of view, arXiv:2311.05218v2
      url: https://arxiv.org/html/2311.05218v2
      locator: English introduction, printed p. E3 (PDF page 5), classical definitions
        immediately preceding Theorem 1.1; Theorem 1.1, (1) iff (3), including
        its final nonintegral-ring clause
      statement: For a domain R, define c(R) by finite strict chains of valuation
        overrings ending in Frac(R). For a nonzero commutative ring A, set
        c_*(A)=sup over proper prime p of c(A/p). For each integer n>=0, c(R)<=n
        is equivalent to dim R[T_1,...,T_k]<=n+k for every integer k>=0. For A
        not necessarily a domain, the same polynomial test is equivalent to
        c_*(A)<=n. Only these parts of Theorem 1.1 are imported.
      hypotheses: Classical mathematics with Choice; commutative unital nonzero rings,
        nonzero domains in the domain clause; n and k nonnegative finite
        integers; Krull dimension via finite strict prime chains, allowing
        infinity. No Noetherian, finite-type, or finite-dimensional assumption.
        Proper primes are used; the trivial ring is excluded from the imported
        equivalences.
      reading_limits: Read the English classical-definition paragraphs, complete
        Theorem 1.1 and its final clause in the primary arXiv HTML, and
        corresponding extracted PDF text on p. E3. Also read the subsequent
        basic-terminology and valuation-ring paragraphs to distinguish
        constructive conventions. Theorem 1.1 is imported as an established
        classical characterization, not reconstructed; no reading of its cited
        Cahen source or the later constructive proofs is claimed. Translation
        from overring chains to Krull dimensions, and the application comparing
        the two local formulas, are proved here. The PDF screenshot request
        failed; no visual PDF inspection is claimed.
---

## Prerequisites

- [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring)
- [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)
- [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)
- [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)
- [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal)
- [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring)
- [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local)
- [math:def-multivariate-polynomial-ring-by-iteration](https://alphabetamath.cc/item/def-multivariate-polynomial-ring-by-iteration)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Lombardi, Neuwirth and Yengui, Valuative dimension, constructive points of view, arXiv:2311.05218v2 · English introduction, printed p. E3 (PDF page 5), classical definitions immediately preceding Theorem 1.1; Theorem 1.1, (1) iff (3), including its final nonintegral-ring clause `](https://arxiv.org/html/2311.05218v2)


## Statement
Assume the Axiom of Choice. For every nonzero commutative domain $D$, let $\delta(D)$ be the supremum of the Krull dimensions of valuation subrings of $\operatorname{Frac}(D)$ containing the embedded copy of $D$. The supremum is taken in $\{0,1,\ldots,\infty\}$. Then

$$\delta(D)=\sup_{\mathfrak p\in\operatorname{Spec}D}\delta(D/\mathfrak p).$$

Thus extending the domain formula to general rings by the supremum over their prime quotients leaves its value on domains unchanged, including the value infinity.

## Facts & Assumptions
**Given:** A nonzero commutative domain $D$ in the classical foundational setting below.

**Goal:** Compare the domain invariant with its prime-quotient extension.

[F1] [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring) gives the field-membership definition of a valuation ring. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions) constructs the fraction field, and [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds) gives its field structure and canonical embedding. Krull dimension is the prime-chain supremum of [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring).

[F2] Proper prime ideals and their spectrum use [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets). Quotients use [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring), and [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime) ensures that every $D/\mathfrak p$ in the statement is a nonzero domain.

[F3] [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local) identifies the nonunits of a valuation ring with its unique maximal ideal. [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal) supplies $V_{\mathfrak p}$ and its fractions, and [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring) identifies its primes with those of $V$ contained in $\mathfrak p$.

[F4] $A[T_1,\ldots,T_k]$ is the polynomial ring in finitely many commuting indeterminates, including $k=0$, as in [math:def-multivariate-polynomial-ring-by-iteration](https://alphabetamath.cc/item/def-multivariate-polynomial-ring-by-iteration).

[F5] Reference 0 supplies the classical polynomial-dimension tests stated in External input.

[F6] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is retained in the imported classical valuation-dimension characterization [F5]; no choice-free reconstruction of that characterization is claimed.

## External input
Reference 0 defines $c(R)$ for a domain $R$ as the supremum of the lengths of finite strict chains of valuation overrings ending in $\operatorname{Frac}(R)$. For nonzero $A$, it defines $c_*(A)=\sup_{\mathfrak p\in\operatorname{Spec}A}c(A/\mathfrak p)$. Theorem 1.1, (1) iff (3), states for each integer $n\geq0$ that $c(R)\leq n$ is equivalent to $\dim R[T_1,\ldots,T_k]\leq n+k$ for every integer $k\geq0$; its final clause gives the same equivalence for $c_*(A)$ and every nonzero commutative ring $A$. This uses [F4] and the classical setting [F6]. The translation to the Krull dimensions of valuation overrings is local below.

## Proof
1.1 Fix a valuation overring $V$ of a domain $R$, with fraction field $K=\operatorname{Frac}(R)$. Its fraction field is $K$, since $R\subseteq V\subseteq K$. Any overring $W$ of $V$ in $K$ is again a valuation ring by [F1]. By [F3], it has maximal ideal $\mathfrak m_W$ consisting of its nonunits; this is prime because a product is a unit exactly when both factors are units. Hence $\mathfrak p=\mathfrak m_W\cap V$ is prime. Every $s\in V\setminus\mathfrak p$ is a unit in $W$, so $V_{\mathfrak p}\subseteq W$. Conversely, if $w\in W\setminus V$, then $w^{-1}\in V$ by [F1], and it is a unit of $W$, so $w^{-1}\notin\mathfrak p$ and $w\in V_{\mathfrak p}$. Thus $W=V_{\mathfrak p}$. Each $V_{\mathfrak p}$ is a valuation ring, and [F3] recovers $\mathfrak p$ as the contraction of its unique maximal ideal. These correspondences reverse inclusions: inclusion of primes reverses the denominator sets, and inclusion of overrings preserves units and therefore reverses the contractions of their nonunits. They preserve strictness by being inverse bijections. The endpoints are $V=V_{\mathfrak m_V}$ and $K=V_{(0)}$. Finite prime chains in $V$ can be extended by these endpoints, so their length supremum equals that of finite strict chains of valuation overrings from $V$ to $K$. Taking the supremum over all $V$ containing $R$ yields $\delta(R)=c(R)$. [F1, F3, given, construct]

2.1 Put $\rho(D)=\sup_{\mathfrak p\in\operatorname{Spec}D}\delta(D/\mathfrak p)$. These are domain inputs by [F2]. Applying step 1.1 to each quotient gives $\rho(D)=c_*(D)$, and applying it to $D$ gives $\delta(D)=c(D)$. For every finite integer $n\geq0$, [F5] identifies both $c(D)\leq n$ and $c_*(D)\leq n$ with exactly the same test $\dim D[T_1,\ldots,T_k]\leq n+k$ for all $k\geq0$. The hypotheses hold because $D$ is nonzero and [F6] supplies the imported classical setting. Therefore $\delta(D)$ and $\rho(D)$ have exactly the same finite upper bounds. Both are in $\{0,1,\ldots,\infty\}$: fraction fields provide nonempty valuation-overring families, and $(0)$ is a prime of $D$. Equal finite upper bounds determine the same value, including infinity, proving the equality. [F1, F2, F4, F5, F6, step 1.1] ∎
