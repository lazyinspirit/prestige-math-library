---
id: lem-prime-containing-a-multiplicative-set-disjoint-ideal
kind: lemma
title: "A prime containing an ideal and avoiding a multiplicative set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, def-multiplicative-subset-and-localisation, thm-zorn]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring, let $S\subseteq R$ be a multiplicative subset, and let $I\trianglelefteq R$ be an ideal with $I\cap S=\varnothing$. Then there exists a prime ideal $\mathfrak p$ of $R$ such that $I\subseteq\mathfrak p$ and $\mathfrak p\cap S=\varnothing$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S\subseteq R$, an ideal $I\trianglelefteq R$ with $I\cap S=\varnothing$, and the Axiom of Choice.

[L1] A prime ideal is a proper ideal $\mathfrak p$ such that $ab\in\mathfrak p$ implies $a\in\mathfrak p$ or $b\in\mathfrak p$ ([[def-prime-and-maximal-ideals]]).

[L2] A multiplicative subset contains $1$ and is closed under multiplication ([[def-multiplicative-subset-and-localisation]]).

[L3] Assuming the Axiom of Choice, every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Sigma$ be the set of ideals $J\trianglelefteq R$ with $I\subseteq J$ and $J\cap S=\varnothing$, ordered by inclusion. The ideal $I$ lies in $\Sigma$, so $\Sigma\neq\varnothing$. [given, construct]

2.1 If $\mathcal C\subseteq\Sigma$ is a chain, then $J=\bigcup\mathcal C$ is an ideal containing $I$. Moreover $J\cap S=\varnothing$, because if $s\in J\cap S$ then $s\in C$ for some $C\in\mathcal C$, contradicting $C\cap S=\varnothing$. Thus every chain in $\Sigma$ has an upper bound. [step 1.1, L2, algebra]

3.1 Zorn's lemma yields a maximal member $\mathfrak p$ of $\Sigma$. Because $1\in S$ by [L2] and $\mathfrak p\cap S=\varnothing$, the ideal $\mathfrak p$ is proper. [L2, L3, step 2.1]

4.1 Suppose $ab\in\mathfrak p$ while $a\notin\mathfrak p$ and $b\notin\mathfrak p$. By maximality of $\mathfrak p$ in $\Sigma$, the larger ideals $\mathfrak p+(a)$ and $\mathfrak p+(b)$ must meet $S$. Choose $\nu=m+ra\in S\cap(\mathfrak p+(a))$ and $\omega=n+tb\in S\cap(\mathfrak p+(b))$ with $m,n\in\mathfrak p$ and $r,t\in R$. Then $\nu\omega=mn+mtb+nra+rtab\in\mathfrak p$, because $m,n,ab\in\mathfrak p$. But $\nu\omega\in S$ by [L2], contradicting $\mathfrak p\cap S=\varnothing$. Therefore $\mathfrak p$ is prime by [L1]. [L1, L2, step 3.1, choose, algebra]

5.1 The ideal $\mathfrak p$ is prime, contains $I$, and is disjoint from $S$, exactly as required. [step 3.1, step 4.1] ∎
