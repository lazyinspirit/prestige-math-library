---
id: thm-nakayama-lemma
kind: theorem
title: "Assuming the Axiom of Choice, Nakayama's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, thm-jacobson-radical-unit-characterisation, lem-determinant-trick-for-nakayama, def-product-of-an-ideal-and-a-module]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-nakayama-lemma). No independent judge or whole-closure certification.
    delegated_by: owner
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

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a commutative ring $R$, an ideal $I \trianglelefteq R$ with $I \subseteq J(R)$, and a finitely generated left $R$-module $M$ with $IM=M$.

[L1] Under AC, an element $x$ lies in $J(R)$ exactly when $1-rx$ is a unit for every $r \in R$ ([[thm-jacobson-radical-unit-characterisation]]). This is the only use of AC in the proof.

[L2] If $IM=M$ for finite $M$, then $(1-a)M=0$ for some $a \in I$ ([[lem-determinant-trick-for-nakayama]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $a \in I$ with $(1-a)M=0$. Since $a \in I \subseteq J(R)$, [L1] makes $1-a$ a unit. [L1, L2, given, choose]

2.1 Multiplying the equality $(1-a)m=0$ by $(1-a)^{-1}$ shows $m=0$ for every $m \in M$. Therefore $M=0$. [step 1.1, algebra] ∎
