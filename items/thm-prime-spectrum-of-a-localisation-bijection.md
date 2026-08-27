---
id: thm-prime-spectrum-of-a-localisation-bijection
kind: theorem
title: "Prime ideals of a localization are exactly the primes disjoint from the denominator set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-primes-of-a-localisation-avoid-the-multiplicative-set, thm-prime-spectrum-map-by-contraction]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S\subseteq R$ be a multiplicative subset, and let $\lambda:R\to S^{-1}R$ be the localization map. Then contraction along $\lambda$ induces an inclusion-preserving bijection $\operatorname{Spec}(S^{-1}R)\to\{\mathfrak p\in\operatorname{Spec}(R):\mathfrak p\cap S=\varnothing\}$. Its inverse sends $\mathfrak p$ to $S^{-1}\mathfrak p$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S\subseteq R$, and the localization map $\lambda:R\to S^{-1}R$.

[L1] Every localization map induces a spectrum map by contraction ([[thm-prime-spectrum-map-by-contraction]]).

[L2] Primes of the localization correspond exactly to primes of $R$ disjoint from $S$ ([[lem-primes-of-a-localisation-avoid-the-multiplicative-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], contraction along $\lambda$ gives a map from $\operatorname{Spec}(S^{-1}R)$ to $\operatorname{Spec}(R)$. [L1]

1.2 The localization-prime correspondence [L2] says that this map lands exactly in the primes disjoint from $S$, and that extension and contraction are inverse inclusion-preserving bijections on that subset. [L2]

2.1 Therefore $\operatorname{Spec}(S^{-1}R)$ is identified with the primes of $R$ that avoid the denominator set. [step 1.1, step 1.2] ∎
