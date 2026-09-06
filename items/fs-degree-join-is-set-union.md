---
id: fs-degree-join-is-set-union
kind: false-statement
title: "Degree join is set union"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tagged-join-of-oracles, thm-turing-degrees-form-an-upper-semilattice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 5.7"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For all $A,B$, the join of $[A]_T$ and $[B]_T$ is $[A\cup B]_T$.

## Refutation

**Proof technique:** direct.

**Given:** the ordinary halting set $0'$.

1.1 Take $A=0'$ and $B=\mathbb N\setminus0'$. Since complementation is computable, $[A]_T=[B]_T=[0']_T$, and their degree join is $[0']_T$. [given, construct]

2.1 But $A\cup B=\mathbb N$ is computable, so $[A\cup B]_T=[\varnothing]_T$, which cannot equal $[0']_T$. Hence ordinary union does not compute the degree join in general; tagged join is relevant. [step 1.1] ∎
