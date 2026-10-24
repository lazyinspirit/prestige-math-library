---
id: thm-jump-is-monotone
kind: theorem
title: "The jump is monotone"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-jump, def-turing-reducibility-and-equivalence, lem-jump-is-well-defined-on-degrees]
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

For all $A,B\subseteq\mathbb N$, if $A\le_TB$, then $A'\le_TB'$.

## Facts & Assumptions

**Given:** a total $B$-oracle decider for $A$.

## Proof

**Proof technique:** direct.

1.1 Uniformly compile an $A$-oracle program $e$ into a $B$-oracle program $q(e)$ by replacing each $A$-query with the given total $B$-oracle computation of that bit. Its compilation is effective. [given, construct]

2.1 Parameter specialization produces an index $r(e)$ which halts with oracle $B$ on input $r(e)$ exactly when program $e$ halts with oracle $A$ on input $e$. Hence $e\in A'$ iff $r(e)\in B'$. [step 1.1, construct]

3.1 An oracle machine with oracle $B'$ computes $r(e)$ and queries its membership, deciding $A'$. [step 2.1] ∎
