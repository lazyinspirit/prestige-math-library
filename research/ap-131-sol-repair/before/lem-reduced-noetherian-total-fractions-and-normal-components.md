---
id: "lem-reduced-noetherian-total-fractions-and-normal-components"
kind: "lemma"
title: "reduced noetherian total fractions and normal components"
deps: ["def-total-ring-of-fractions", "def-normal-noetherian-ring", "thm-noetherian-ring-has-finitely-many-minimal-primes", "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian", "thm-normality-is-local-for-domains", "thm-chinese-remainder-theorem-for-comaximal-ideals", "lem-finite-prime-avoidance"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.37.16, full proof"
      url: "https://stacks.math.columbia.edu/tag/030C"
    - title: "Lemma 10.25.4, full proof"
      url: "https://stacks.math.columbia.edu/tag/02LX"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a reduced commutative Noetherian ring $R$ with minimal primes $\mathfrak p_1,\ldots,\mathfrak p_s$, there is a canonical isomorphism $Q(R)\cong\prod_{i=1}^s\operatorname{Frac}(R/\mathfrak p_i)$. The following are equivalent: $R$ is normal; $R$ is integrally closed in $Q(R)$; and $R$ is a finite product of normal domains. For $R=0$ this is the empty product.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-total-ring-of-fractions]]: For a nonzero commutative ring $R$, let $S$ be the set of its nonzerodivisors, meaning elements whose multiplication maps on $R$ are injective. Its **total ring of fractions** is $Q(R)=S^{-1}R$. The set $S$ is multiplicative since composites of injective multiplication maps are injective. The natural map $R\to Q(R)$ is injective: $a/1=0$ implies $sa=0$ for some $s\in S$, hence $a=0$. Set $Q(0)=0$. For a domain this recovers the fraction field; for a ring with zero divisors it need not be a field.

[F2] [[def-normal-noetherian-ring]]: A commutative Noetherian ring $R$ is **normal** if every prime localization $R_{\mathfrak p}$ is an integrally closed domain. This is a local condition and does not require $R$ itself to be a domain. The zero ring satisfies it vacuously. For a domain, integrally closed means that every element of its fraction field integral over it belongs to it.

[F3] [[thm-noetherian-ring-has-finitely-many-minimal-primes]]: Let $R$ be a Noetherian commutative ring. Then $R$ has only finitely many minimal prime ideals. This theorem inherits only the dependent-choice cost already recorded in the cited Noetherian-induction corollary.

[F4] [[cor-radical-ideals-as-intersections-of-minimal-primes-noetherian]]: Assume Dependent Choice. Let $R$ be a Noetherian commutative ring and let $I \trianglelefteq R$ be a radical ideal. Then there exist finitely many prime ideals $\mathfrak p_1,\dots,\mathfrak p_m$ minimal over $I$ such that $$ I=\mathfrak p_1\cap\cdots\cap \mathfrak p_m. $$ When $I=R$, this is the empty intersection.

[F5] [[thm-normality-is-local-for-domains]]: Assume the Axiom of Choice. Let $A$ be a domain. Then the following are equivalent: 1. $A$ is integrally closed. 2. For every prime ideal $\mathfrak p$ of $A$, the localisation $A_{\mathfrak p}$ is integrally closed. 3. For every maximal ideal $\mathfrak m$ of $A$, the localisation $A_{\mathfrak m}$ is integrally closed.

[F6] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: Let $R$ be a commutative ring and let $I_1,\ldots,I_r$ be pairwise comaximal ideals, where $r\ge1$. Then the canonical map $$ R\longrightarrow \prod_{i=1}^r R/I_i,\qquad x\longmapsto(x+I_1,\ldots,x+I_r) $$ is surjective, its kernel is $\bigcap_{i=1}^r I_i$, and $$ \bigcap_{i=1}^r I_i=\prod_{i=1}^r I_i. $$ Equivalently, $$ R/\prod_{i=1}^r I_i\cong\prod_{i=1}^r R/I_i. $$

[F7] [[lem-finite-prime-avoidance]]: Let $R$ be a commutative ring, let $I \trianglelefteq R$ be an ideal, and let $\mathfrak p_1,\dots,\mathfrak p_n$ be prime ideals with $n \ge 1$. If $$ I\subseteq \mathfrak p_1\cup\cdots\cup \mathfrak p_n, $$ then $I\subseteq \mathfrak p_i$ for some $i$.

## Proof

1.1 For $R\ne0$, the finite minimal-prime intersection is zero. If $a$ avoids every minimal prime, $ab=0$ forces $b=0$. If $a\in\mathfrak p_i$, a product of elements in $\mathfrak p_j\setminus\mathfrak p_i$ for $j\ne i$ supplies nonzero $b$ with $ab=0$. Thus the nonzerodivisors are the complement of the union of the minimal primes. Prime avoidance implies that the primes surviving in $Q(R)$ are exactly these minimal primes. [F3, F4, F7, F1]

2.1 The surviving primes of the reduced ring $Q(R)$ are finitely many distinct maximal ideals with intersection zero. CRT decomposes $Q(R)$ as their residue fields. Localization at the corresponding minimal prime of $R$ is reduced with only the zero prime, hence is a field, and is the fraction field of $R/\mathfrak p_i$. This identifies each factor and the canonical map. [F6, step 1.1]

3.1 If $R$ is integrally closed in $Q(R)$, it contains every coordinate idempotent $e_i$, since each solves $T^2-T=0$. Thus $R=\prod e_iR$, with $e_iR\cong R/\mathfrak p_i$. For an element integral over one factor, put it in that coordinate and zero in the other coordinates. A monic equation in the factor, multiplied by $T$ if necessary and with coefficients lifted to that coordinate, gives a monic equation over the product ring; integral closedness puts it in $R$. Each factor is integrally closed, hence a normal domain by local normality. [F5, step 2.1, algebra]

4.1 If $R$ is normal, no prime can contain two distinct minimal primes: localization would give two distinct minimal primes in a domain. Hence the minimal primes are pairwise comaximal. CRT gives $R=\prod R/\mathfrak p_i$; the localizations of a component are the corresponding localizations of $R$, so the components are normal domains. Conversely a finite product of normal domains has normal prime localizations, and a monic equation in its total fractions is coordinatewise integral, so the product is integrally closed there. For $R=0$ all assertions hold directly without applying CRT to an empty family. [F2, F6, F5, step 2.1] ∎
