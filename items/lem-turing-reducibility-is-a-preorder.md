---
id: lem-turing-reducibility-is-a-preorder
kind: lemma
title: "Turing reducibility is a preorder"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-reducibility-and-equivalence]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Sebastiaan Terwijn, Computability Theory, §5.1"
      url: "https://www.math.ru.nl/~terwijn/teaching/syllabus.pdf"
---

## Statement

For all $A,B,C\subseteq\mathbb N$, $A\le_TA$, and
$A\le_TB\le_TC$ implies $A\le_TC$.

## Facts & Assumptions

**Given:** sets $A,B,C\subseteq\mathbb N$ and, in the second assertion,
oracle deciders witnessing $A\le_TB$ and $B\le_TC$.

## Proof

**Proof technique:** direct.

1.1 The machine which asks its oracle whether $n$ belongs to it and returns that answer is an $A$-oracle decider for $A$. [given, construct]

2.1 For transitivity, simulate the $B$-oracle decider for $A$; answer each query $q\in B$ by the total $C$-oracle decider for $B$. Every inner query terminates and the outer run makes finitely many, so this is a total $C$-oracle decider for $A$. [given, construct] ∎
