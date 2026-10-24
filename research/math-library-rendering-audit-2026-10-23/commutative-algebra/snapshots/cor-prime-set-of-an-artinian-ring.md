---
id: cor-prime-set-of-an-artinian-ring
kind: corollary
title: "The prime ideals of an Artinian ring are exactly its finitely many maximal ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-artinian-ring-primes-are-maximal, thm-artinian-ring-has-finitely-many-maximal-ideals, cor-maximal-ideals-are-prime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Section 16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Let $R$ be a commutative Artinian ring. Then the prime ideals of $R$ are exactly its maximal ideals, and this set is finite.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-artinian-ring-primes-are-maximal]], every prime ideal of $R$ is maximal. By [[thm-artinian-ring-has-finitely-many-maximal-ideals]], the set of maximal ideals is finite. [given, algebra]

2.1 Conversely every maximal ideal of a commutative ring is prime by [[cor-maximal-ideals-are-prime]]. Therefore the prime ideals of $R$ are exactly its maximal ideals, and there are only finitely many of them. [step 1.1, given, algebra] ∎
