---
id: cor-prime-containing-an-ideal-avoiding-an-element
kind: corollary
title: "Separating an element from an ideal by a prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-prime-containing-a-multiplicative-set-disjoint-ideal]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $f\in R$. If $f^n\notin I$ for every integer $n\ge 1$, then there exists a prime ideal $\mathfrak p$ of $R$ such that $I\subseteq\mathfrak p$ and $f\notin\mathfrak p$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, an element $f\in R$ whose positive powers all avoid $I$, and the Axiom of Choice.

[L1] If an ideal is disjoint from a multiplicative set, then some prime ideal contains it and stays disjoint from that multiplicative set ([[lem-prime-containing-a-multiplicative-set-disjoint-ideal]]).

## Proof

**Proof technique:** direct.

1.1 The set $S=\{1,f,f^2,\dots\}$ is multiplicative, and the hypothesis says exactly that $I\cap S=\varnothing$. [given, algebra]

2.1 Applying [L1] to the ideal $I$ and the multiplicative set $S$ yields a prime ideal $\mathfrak p$ with $I\subseteq\mathfrak p$ and $\mathfrak p\cap S=\varnothing$. In particular $f\notin\mathfrak p$. [L1, step 1.1]

3.1 This is the required separating prime. [step 2.1] ∎
