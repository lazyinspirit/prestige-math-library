---
id: def-majority-sat
kind: definition
title: "MajoritySAT"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-number-sat]
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

## Definition

On a well-formed NumberSAT input consisting of a formula $\varphi$ and a declared list $(x_1,\ldots,x_n)$ of $n$ distinct variables, **MajoritySAT** asks whether $\mathrm{NumberSAT}(\varphi,(x_1,\ldots,x_n))>2^{n-1}$. Every malformed input is a no-instance. At $n=0$ the inequality is equivalent to the empty assignment satisfying $\varphi$.
