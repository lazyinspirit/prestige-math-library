---
id: lem-primes-of-a-localisation-avoid-the-multiplicative-set
kind: lemma
title: "Primes of a localization avoid the denominator set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-ideal-correspondence-for-localisation, def-prime-spectrum-and-vanishing-sets, def-multiplicative-subset-and-localisation]
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
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 The Spectrum of a Ring"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S\subseteq R$ be a multiplicative subset, and let $\lambda:R\to S^{-1}R$ be the localization map. Contraction sends each prime ideal of $S^{-1}R$ to a prime ideal of $R$ disjoint from $S$, and extension sends each prime ideal of $R$ disjoint from $S$ back to a prime ideal of $S^{-1}R$. These two operations are inverse and preserve strict inclusion.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S\subseteq R$, and the localization map $\lambda:R\to S^{-1}R$.

[L1] Ideals of $S^{-1}R$ correspond to $S$-saturated ideals of $R$, and primes correspond exactly to the prime ideals disjoint from $S$ ([[thm-ideal-correspondence-for-localisation]]).

## Proof

**Proof technique:** direct.

1.1 The prime-ideal part of [L1] says exactly that if $\mathfrak q\in\operatorname{Spec}(S^{-1}R)$, then $\lambda^{-1}(\mathfrak q)$ is a prime ideal of $R$ disjoint from $S$, and if $\mathfrak p\in\operatorname{Spec}(R)$ with $\mathfrak p\cap S=\varnothing$, then $S^{-1}\mathfrak p$ is a prime ideal of $S^{-1}R$. [L1]

1.2 The same statement [L1] asserts that these assignments are inverse inclusion-preserving bijections. In particular they preserve strict inclusion. [L1]

2.1 Therefore primes of the localization are exactly the primes of $R$ that avoid the denominator set. [step 1.1, step 1.2] ∎
