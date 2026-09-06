---
id: ex-np-is-contained-in-p-sharpp
kind: example
title: "Deciding satisfiability by a NumberSAT oracle query"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-number-sat, prop-np-is-contained-in-p-sharpp]
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

[L1] NumberSAT is the exact number of satisfying declared assignments. by [[def-number-sat]].

## Verification

**Proof technique:** direct.

1.1 The formula is equivalent to $y$: the assignments $(0,1)$ and $(1,1)$ satisfy it, while $(0,0)$ and $(1,0)$ do not. Thus [L1] gives $\mathrm{NumberSAT}(\varphi)=2$, returned as $10_2$. [L1, given, algebra]

2.1 Testing the returned integer against zero accepts, which is correct because the displayed satisfying assignments exist. The single exact query summarizes all four assignments. [step 1.1]

3.1 This is the promised finite instance of the $\mathrm{NP}\subseteq \mathrm P^{\#\mathrm P}$ route. [step 1.1, step 2.1] ∎
