---
id: lem-jump-is-well-defined-on-degrees
kind: lemma
title: "The jump is well-defined on degrees"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-degree-and-degree-order, def-turing-jump, def-turing-reducibility-and-equivalence]
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
    - title: "Ludovic Patey, Computability Theory, Exercise 6.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

If $A\equiv_TB$, then $A'\equiv_TB'$. Thus $[A]_T\mapsto[A']_T$ is a
well-defined operation on Turing degrees.

## Facts & Assumptions

**Given:** total oracle deciders witnessing $A\le_TB$ and $B\le_TA$.

## Proof

**Proof technique:** direct.

1.1 Compile an $A$-oracle program $e$ into a $B$-oracle program $q(e)$ that answers each simulated $A$-query using the fixed $B$-oracle decider for $A$; $q$ is computable and preserves halting on the same input. [given, construct]

2.1 By parameter specialization, compute an index $r(e)$ for the program that on its own input simulates $q(e)$ on $e$. Then $e\in A'$ iff $r(e)\in B'$, so $A'\le_TB'$. [step 1.1, construct]

3.1 Repeat the construction of step 2.1 using $B\le_TA$ to obtain $B'\le_TA'$. Therefore $A'\equiv_TB'$. [step 2.1] ∎
