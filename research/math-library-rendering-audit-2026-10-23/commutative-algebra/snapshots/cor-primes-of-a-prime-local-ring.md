---
id: cor-primes-of-a-prime-local-ring
kind: corollary
title: "Primes of a localization at a prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-primes-of-a-localisation-avoid-the-multiplicative-set, def-localisation-at-a-prime-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Contraction along $R\to R_{\mathfrak p}$ induces an inclusion-preserving bijection from $\operatorname{Spec}(R_{\mathfrak p})$ to the set of prime ideals $\mathfrak q\subseteq\mathfrak p$ of $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a prime ideal $\mathfrak p\subset R$.

[L1] $R_{\mathfrak p}$ is the localization at the multiplicative set $R\setminus\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

[L2] Primes of a localization correspond to primes of the original ring disjoint from the denominator set ([[lem-primes-of-a-localisation-avoid-the-multiplicative-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the denominator set is $S=R\setminus\mathfrak p$. For a prime ideal $\mathfrak q$ of $R$, the condition $\mathfrak q\cap S=\varnothing$ is equivalent to $\mathfrak q\subseteq\mathfrak p$. [L1, given]

2.1 Applying [L2] to the localization at $S$ yields the claimed bijection between $\operatorname{Spec}(R_{\mathfrak p})$ and the primes $\mathfrak q\subseteq\mathfrak p$. [L2, step 1.1]

3.1 Hence prime ideals of the local ring $R_{\mathfrak p}$ are exactly the primes of $R$ lying below $\mathfrak p$. [step 2.1] ∎
