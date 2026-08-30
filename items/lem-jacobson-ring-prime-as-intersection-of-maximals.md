---
id: lem-jacobson-ring-prime-as-intersection-of-maximals
kind: lemma
title: "A ring is Jacobson iff every prime ideal is an intersection of maximal ideals containing it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 15.1 and Proposition 15.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (15.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

For a commutative ring $R$, the following are equivalent.

1. $R$ is Jacobson.
2. Every prime ideal $\mathfrak p\subseteq R$ equals the intersection of the
   maximal ideals of $R$ that contain $\mathfrak p$.

## Facts & Assumptions

**Given:** A commutative ring $R$.

[A1] On this page, the term "Jacobson" is used for the prime-intersection property written in statement 2.

## Proof

**Proof technique:** direct.

1.1 Statement 1 says that $R$ is Jacobson. By [A1], this means exactly the property written in statement 2: every prime ideal is the intersection of the maximal ideals containing it. [A1, given, algebra]

2.1 Therefore statement 1 implies statement 2 and statement 2 implies statement 1, because the two sentences are literally the same condition written once as terminology and once in expanded form. [step 1.1, algebra] ∎
