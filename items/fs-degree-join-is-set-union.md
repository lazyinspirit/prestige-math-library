---
id: fs-degree-join-is-set-union
kind: false-statement
title: "Degree join is set union"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tagged-join-of-oracles, thm-turing-degrees-form-an-upper-semilattice, thm-halting-is-recognizable-and-undecidable]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 5.7"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For all $A,B$, the join of $[A]_T$ and $[B]_T$ is $[A\cup B]_T$.

## Refutation

**Proof technique:** direct.

**Given:** Let $0'\subseteq\mathbb N$ be an effective numerical coding of the halting language $HALT_{TM}$.

[F1] The halting problem is undecidable ([[thm-halting-is-recognizable-and-undecidable]]), so the effectively coded set $0'$ is not computable.

1.1 Take $A=0'$ and $B=\mathbb N\setminus0'$. Since complementation is computable, $[A]_T=[B]_T=[0']_T$, and their degree join is $[0']_T$. [given, construct]

2.1 But $A\cup B=\mathbb N$ is computable, so $[A\cup B]_T=[\varnothing]_T$, which cannot equal $[0']_T$ by [F1]. Hence ordinary union does not compute the degree join in general; tagged join is relevant. [F1, step 1.1] ∎
