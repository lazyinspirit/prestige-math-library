---
id: lem-minimal-prime-over-an-ideal-exists
kind: lemma
title: "Minimal primes over a proper ideal exist"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-prime-containing-a-multiplicative-set-disjoint-ideal, thm-zorn, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $I\trianglelefteq R$ be a proper ideal. Then there exists a prime ideal $\mathfrak p$ of $R$ containing $I$ that is minimal with respect to inclusion among the prime ideals containing $I$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a proper ideal $I\trianglelefteq R$, and the Axiom of Choice.

[L1] If an ideal is disjoint from a multiplicative set, then some prime ideal contains it and stays disjoint from that set ([[lem-prime-containing-a-multiplicative-set-disjoint-ideal]]).

[L2] Assuming the Axiom of Choice, every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L3] Prime ideals are ordered by inclusion as ideals ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 The singleton set $\{1\}$ is multiplicative and is disjoint from $I$ because $I$ is proper. Applying [L1] gives at least one prime ideal containing $I$. Let $\Sigma$ be the set of all prime ideals containing $I$, ordered by reverse inclusion. Then $\Sigma\neq\varnothing$. [L1, given, construct]

1.2 Let $\mathcal C\subseteq\Sigma$ be a chain. Put
$$
\mathfrak q=\bigcap_{\mathfrak p\in\mathcal C}\mathfrak p.
$$
Then $I\subseteq\mathfrak q$. To see that $\mathfrak q$ is prime, let $ab\in\mathfrak q$ and assume $a,b\notin\mathfrak q$. Choose $\mathfrak p_a,\mathfrak p_b\in\mathcal C$ with $a\notin\mathfrak p_a$ and $b\notin\mathfrak p_b$. Since $\mathcal C$ is totally ordered by inclusion, either $\mathfrak p_a\subseteq\mathfrak p_b$ or $\mathfrak p_b\subseteq\mathfrak p_a$. In the first case $b\notin\mathfrak p_a$ because $\mathfrak p_a\subseteq\mathfrak p_b$; in the second case $a\notin\mathfrak p_b$. Either way one of the primes in the chain contains $ab$ but neither factor, a contradiction. Thus $\mathfrak q\in\Sigma$, and it is an upper bound of $\mathcal C$ in the reverse-inclusion order. [L3, choose, algebra]

2.1 By [L2], the poset $\Sigma$ has a maximal element for reverse inclusion. Such an element is exactly a prime ideal minimal by ordinary inclusion among the primes containing $I$. [L2, step 1.1, step 1.2]

3.1 Therefore every proper ideal lies under a minimal prime ideal. [step 2.1] ∎
