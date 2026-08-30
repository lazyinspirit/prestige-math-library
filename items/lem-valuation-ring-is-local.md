---
id: lem-valuation-ring-is-local
kind: lemma
title: "A valuation ring is local"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-valuation-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Remark 8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (26.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a valuation ring. Then the nonunits of $V$ form an ideal. That ideal
is the unique maximal ideal of $V$, so $V$ is a local ring.

## Facts & Assumptions

**Given:** A valuation ring $V$ contained in a field $K$.

[F1] For every $x\in K^\times$, at least one of $x$ and $x^{-1}$ belongs to $V$ ([[def-valuation-ring]]).

[A1] If $x\in V$ and $x^{-1}\in V$, then $x$ is a unit of the ring $V$.

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak m:=\{x\in V:x=0\text{ or }x^{-1}\notin V\}$. By [A1], an element of $V$ lies outside $\mathfrak m$ exactly when it is a unit, so $1\notin\mathfrak m$ and $\mathfrak m$ is proper. [A1, given]

2.1 If $r\in V$ and $x\in\mathfrak m$, then $rx\in\mathfrak m$: if $rx\ne0$ and $(rx)^{-1}\in V$, then $x^{-1}=r(rx)^{-1}\in V$, contradicting $x\in\mathfrak m$. [step 1.1, algebra]

2.2 Let $x,y\in\mathfrak m$. If $x+y\notin\mathfrak m$, then $x+y$ is a unit by step 1.1. If $x=0$ or $y=0$ this contradicts $x,y\in\mathfrak m$, so assume $x,y\ne0$. By [F1], either $y/x\in V$ or $x/y\in V$; in the first case $x^{-1}=(x+y)^{-1}(1+y/x)\in V$, and in the second case $y^{-1}=(x+y)^{-1}(1+x/y)\in V$, again a contradiction. Thus $x+y\in\mathfrak m$. [F1, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 show that $\mathfrak m$ is an ideal. Every proper ideal contains no unit, so every proper ideal is contained in $\mathfrak m$. Hence $\mathfrak m$ is the unique maximal ideal of $V$, and $V$ is local. [step 1.1, step 2.1, step 2.2, algebra] ∎
