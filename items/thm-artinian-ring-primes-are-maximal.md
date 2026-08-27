---
id: thm-artinian-ring-primes-are-maximal
kind: theorem
title: "Every prime ideal of an Artinian ring is maximal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-artinian-domain-is-a-field, thm-correspondence-theorem-ideals, thm-quotient-is-domain-iff-ideal-prime, thm-quotient-is-field-iff-ideal-maximal, def-artinian-ring]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 16.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Let $R$ be a commutative Artinian ring and let $\mathfrak p$ be a prime ideal of $R$. Then $\mathfrak p$ is maximal.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$ and a prime ideal $\mathfrak p\subseteq R$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-correspondence-theorem-ideals]], ideals of $R/\mathfrak p$ correspond to ideals of $R$ containing $\mathfrak p$. Hence every descending chain of ideals in $R/\mathfrak p$ lifts to a descending chain of ideals in $R$, so $R/\mathfrak p$ is Artinian. Because $\mathfrak p$ is prime, [[thm-quotient-is-domain-iff-ideal-prime]] says that $R/\mathfrak p$ is an integral domain. [given, algebra]

2.1 The quotient $R/\mathfrak p$ is therefore an Artinian integral domain, so [[lem-artinian-domain-is-a-field]] makes it a field. Then [[thm-quotient-is-field-iff-ideal-maximal]] forces $\mathfrak p$ to be maximal. [step 1.1, given, algebra]

3.1 Hence every prime ideal of an Artinian ring is maximal. [step 2.1] ∎
