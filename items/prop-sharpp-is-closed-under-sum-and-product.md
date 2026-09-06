---
id: prop-sharpp-is-closed-under-sum-and-product
kind: proposition
title: "Sharp-P is closed under sum and product"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharpp-and-gap-p-functions]
proof_strategy: direct
verification:
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

If $f,g\in\#\mathrm P$, then $f+g$ and $fg$ belong to $\#\mathrm P$.

## Facts & Assumptions

**Given:** polynomial-time nondeterministic machines $M_f,M_g$ whose accepting-path counts are $f,g$.

[L1] #P functions are accepting-path counts. by [[def-sharpp-and-gap-p-functions]].

## Proof

**Proof technique:** direct.

1.1 For the sum, make one initial binary choice. On its $0$ branch simulate $M_f(x)$ and on its $1$ branch simulate $M_g(x)$. The accepting paths are a disjoint tagged union, so their number is $f(x)+g(x)$. [L1, given, construct]

1.2 For the product, simulate $M_f(x)$; after each accepting path, independently simulate $M_g(x)$, while every rejecting $M_f$ path rejects. Each of the $f(x)$ accepting first-stage paths has exactly $g(x)$ accepting continuations, so the total is $f(x)g(x)$. This also covers either count being zero. [L1, given, construct, algebra]

2.1 Both composite machines run in polynomial time, so [L1] puts their two counting functions in $\#\mathrm P$. [L1, step 1.1, step 1.2] ∎
