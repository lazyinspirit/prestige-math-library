---
id: thm-posts-theorem
kind: theorem
title: "Post's theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-relative-computability-and-enumerability, lem-oracle-computation-has-a-finite-query-witness, thm-sigma-one-sets-are-exactly-ce-sets]
proof_strategy: induction
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Theorem 5.5"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
    - title: "Douglas Cenzer and Jeffrey Remmel, Effectively Closed Sets, Theorem II.6.7"
      url: "https://people.clas.ufl.edu/cenzer/files/book4.pdf"
---

## Statement

Put $0^{(0)}=\varnothing$ and let $0^{(n+1)}$ be the halting set for machines
with oracle $0^{(n)}$. For every $n\ge0$ and $A\subseteq\mathbb N$,
$$A\in\Sigma_{n+1}^0\iff A\text{ is }0^{(n)}\text{-c.e.},\qquad A\in\Delta_{n+1}^0\iff A\le_T0^{(n)}.$$
Consequently $A\in\Pi_{n+1}^0$ iff its complement is $0^{(n)}$-c.e.

## Facts & Assumptions

**Given:** $n\ge0$ and a set $A\subseteq\mathbb N$.

## Proof

**Proof technique:** induction.

1.1 For $n=0$, the first equivalence is the $\Sigma_1^0$/c.e. theorem; deciding a set is equivalent to recognizing it and its complement. [given, base]

2.1 Assume the characterizations at $n$. In a $\Sigma_{n+2}^0$ presentation, the predicate following the first existential block is $\Pi_{n+1}^0$. It is co-c.e. in $0^{(n)}$, and is therefore decidable by the halting oracle $0^{(n+1)}$; the first block is consequently a c.e. search in $0^{(n+1)}$. Conversely, record a halting $0^{(n+1)}$-oracle computation together with its finite query transcript. Replace each yes-query by its $\Sigma_{n+1}^0$ halting witness and each no-query by the dual $\Pi_{n+1}^0$ condition. Since the transcript is finite, its conditions merge with the outer existential witness into a $\Sigma_{n+2}^0$ formula. [step 1.1, ih, induction]

3.1 A $0^{(n)}$-decider recognizes both a set and its complement, and two relative recognizers can be dovetailed into a decider. Applying the first equivalence to both sides therefore gives the $\Delta$ equivalence; negation gives the $\Pi$ clause. This closes the induction. [step 2.1, discharge-induction] ∎
