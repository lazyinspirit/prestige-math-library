---
id: thm-word-problem-for-finitely-generated-abelian-groups
kind: theorem
title: "The word problem for finitely generated abelian groups is solvable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-word-problem-for-a-fixed-finite-presentation, rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jack Jeffries, Math 817: Introduction to Modern Algebra I (Fall 2025)"
      url: "https://jack-jeffries.github.io/F25/817text.html"
pipeline_run: null
---

## Statement

Every finitely generated abelian group has solvable word problem.

## Facts & Assumptions

**Given:** A finitely generated abelian group $A$ with a fixed finite presentation.

[L1] Every finitely generated abelian group admits an invariant-factor decomposition $\mathbb Z^r\times \mathbb Z/d_1\mathbb Z\times\cdots\times \mathbb Z/d_k\mathbb Z$ with $d_1\mid\cdots\mid d_k$. ([[rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form]])

## Proof

**Proof technique:** direct.

1.1 By [L1], identify $A$ with $\mathbb Z^r\times \mathbb Z/d_1\mathbb Z\times\cdots\times \mathbb Z/d_k\mathbb Z$. Any input word on a finite generating set evaluates, using commutativity, to one integer exponent sum in each of these finitely many coordinates. [L1, given]

2.1 The word represents the identity exactly when the $\mathbb Z^r$ coordinates are all $0$ and each torsion coordinate is congruent to $0$ modulo its invariant factor $d_i$. Those are finitely many integer checks, so they give a terminating decision procedure. [step 1.1, algebra]

3.1 Therefore finitely generated abelian groups have solvable word problem. [step 2.1] ∎
