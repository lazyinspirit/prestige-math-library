---
id: thm-turing-degrees-form-an-upper-semilattice
kind: theorem
title: "Turing degrees form an upper semilattice"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-degree-and-degree-order, lem-degree-order-is-representative-independent, def-tagged-join-of-oracles]
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

For all degrees $[A]_T,[B]_T$, the degree $[A\oplus B]_T$ is their least upper
bound. Hence the Turing degrees form an upper semilattice.

## Facts & Assumptions

**Given:** $A,B,C\subseteq\mathbb N$ and the tagged-join convention of
[[def-tagged-join-of-oracles]].

## Proof

**Proof technique:** direct.

1.1 An $(A\oplus B)$-oracle machine decides $A$ by querying $2n$, and decides $B$ by querying $2n+1$. Hence $[A]_T\le[A\oplus B]_T$ and $[B]_T\le[A\oplus B]_T$. [given, construct]

1.2 If $A\le_TC$ and $B\le_TC$, a $C$-oracle machine deciding $A\oplus B$ tests parity: on $2n$ it runs the decider for $A(n)$, and on $2n+1$ that for $B(n)$. Thus $A\oplus B\le_TC$. [given, construct]

2.1 Step 1.2 says every common upper bound lies above $[A\oplus B]_T$; step 1.1 says it is a common upper bound. Representative-independence makes this a statement about degrees. [step 1.1, step 1.2] ∎
