---
id: thm-nakayama-lemma
kind: theorem
title: "Assuming the Axiom of Choice, Nakayama's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-jacobson-radical-unit-characterisation, lem-determinant-trick-for-nakayama, def-product-of-an-ideal-and-a-module]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 10.12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 3.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \trianglelefteq R$ with $I \subseteq J(R)$, and a finitely generated left $R$-module $M$ with $IM=M$.

[L1] An element $x$ lies in $J(R)$ exactly when $1-rx$ is a unit for every $r \in R$ ([[thm-jacobson-radical-unit-characterisation]]).

[L2] If $IM=M$ for finite $M$, then $(1-a)M=0$ for some $a \in I$ ([[lem-determinant-trick-for-nakayama]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $a \in I$ with $(1-a)M=0$. Since $a \in I \subseteq J(R)$, [L1] makes $1-a$ a unit. [L1, L2, given, choose]

2.1 Multiplying the equality $(1-a)m=0$ by $(1-a)^{-1}$ shows $m=0$ for every $m \in M$. Therefore $M=0$. [step 1.1, algebra] ∎
