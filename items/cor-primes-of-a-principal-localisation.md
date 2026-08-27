---
id: cor-primes-of-a-principal-localisation
kind: corollary
title: "Primes of a principal localization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-primes-of-a-localisation-avoid-the-multiplicative-set, def-principal-localisation]
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

Let $R$ be a commutative ring and let $f\in R$. Contraction along $R\to R_f$ induces an inclusion-preserving bijection from $\operatorname{Spec}(R_f)$ to the set of prime ideals of $R$ that do not contain $f$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and an element $f\in R$.

[L1] $R_f$ is the localization of $R$ at the multiplicative set $\{1,f,f^2,\dots\}$ ([[def-principal-localisation]]).

[L2] Primes of a localization correspond to primes of the original ring disjoint from the denominator set ([[lem-primes-of-a-localisation-avoid-the-multiplicative-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the denominator set is $S=\{1,f,f^2,\dots\}$. A prime ideal $\mathfrak p$ is disjoint from $S$ exactly when $f\notin\mathfrak p$: if $f\in\mathfrak p$, then every positive power of $f$ lies in $\mathfrak p$; conversely, if some power of $f$ lies in $\mathfrak p$, primality forces $f\in\mathfrak p$. [L1, given, algebra]

2.1 Applying [L2] to the localization at $S$ gives the stated bijection. [L2, step 1.1]

3.1 Therefore primes of $R_f$ are exactly the primes of $R$ that avoid $f$. [step 2.1] ∎
