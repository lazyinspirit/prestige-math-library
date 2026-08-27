---
id: lem-artinian-domain-is-a-field
kind: lemma
title: "An Artinian integral domain is a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-ring, def-generated-and-principal-ideals, def-zero-divisor-and-integral-domain, def-field]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 19"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $D$ be a commutative Artinian integral domain. Then $D$ is a field.

## Facts & Assumptions

**Given:** A commutative Artinian integral domain $D$ and a nonzero element $a\in D$.

## Proof

**Proof technique:** direct.

1.1 By [[def-generated-and-principal-ideals]], the principal ideals $(a)\supseteq(a^2)\supseteq(a^3)\supseteq\cdots$ form a descending chain of ideals. Since $D$ is Artinian, this chain stabilizes, so $(a^n)=(a^{n+1})$ for some integer $n\ge 1$. [given, algebra]

2.1 Because $a^n\in(a^{n+1})$, there is $b\in D$ with $a^n=a^{n+1}b$, hence $a^n(1-ab)=0$. As $D$ is an integral domain, every power of the nonzero element $a$ is nonzero, so $a^n\ne0$ and therefore $1-ab=0$. Thus $ab=1$, and the chosen nonzero element $a$ is a unit. [step 1.1, given, algebra]

3.1 Every nonzero element of $D$ is a unit, so [[def-field]] makes $D$ a field. [step 2.1] ∎
