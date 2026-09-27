---
id: ex-np-is-contained-in-p-sharpp
kind: example
title: "Deciding satisfiability by a NumberSAT oracle query"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-number-sat, def-p-with-a-sharpp-oracle]
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

For
$\varphi(x,y)=(x\lor y)\land(\neg x\lor y)$ with declared variables $(x,y)$,
one NumberSAT query returns $2$ (binary $10$), so a nonzero test decides that
$\varphi$ is satisfiable.

## Facts & Assumptions

**Given:** the displayed formula and declared-variable list.

[L1] NumberSAT is the exact number of satisfying declared assignments ([[def-number-sat]]).

[L2] A $\mathrm P^{\#\mathrm P}$ machine may query NumberSAT and receive its exact binary integer value ([[def-p-with-a-sharpp-oracle]]).

## Verification

**Proof technique:** direct.

1.1 The formula is equivalent to $y$: the assignments $(0,1)$ and $(1,1)$ satisfy it, while $(0,0)$ and $(1,0)$ do not. Thus [L1] gives $\mathrm{NumberSAT}(\varphi)=2$, returned as $10_2$. [L1, given, algebra]

2.1 Testing the returned integer against zero accepts, which is correct because the displayed satisfying assignments exist. The single exact query summarizes all four assignments. [step 1.1]

3.1 By [L2], this is a finite instance of deciding satisfiability in $\mathrm P^{\#\mathrm P}$ with one NumberSAT query. [L2, step 1.1, step 2.1] ∎
