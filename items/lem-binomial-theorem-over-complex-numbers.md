---
id: lem-binomial-theorem-over-complex-numbers
kind: lemma
title: "The binomial theorem over the complex field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-numbers-form-a-field, def-complex-integer-powers, def-binomial-coefficient, thm-pascals-rule, def-monoid-finite-product, thm-generalised-associativity, thm-induction-principle, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (lem-binomial-theorem-over-complex-numbers). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For $z,w\in\mathbb C$ and $n\in\mathbb N$, write $\iota_{\mathbb C}:\mathbb N\to\mathbb C$ for the canonical-natural map of [[def-canonical-natural]]. Then
$$ (z+w)^n=\sum_{k\le n}\iota_{\mathbb C}\!\left(\binom nk\right) z^kw^{n-k}. $$ The conventions and prerequisite facts used below are recorded in [[thm-complex-numbers-form-a-field]], [[def-complex-integer-powers]], [[def-binomial-coefficient]], [[thm-pascals-rule]], [[def-monoid-finite-product]], [[thm-generalised-associativity]], [[thm-induction-principle]].

## Facts & Assumptions

**Given:** Complex $z,w$ and natural $n$.

## Proof

**Proof technique:** induction.

1.1 For $n=0$ the sum has the single index $k=0$. Its term is $\iota_{\mathbb C}(\binom00)z^0w^0=1$, since $\binom00=1$ and both zeroth powers are $1$. The left side is $(z+w)^0=1$ as well. [base]

1.2 Assume the formula at $n$. [ih]

2.1 Multiply the formula in step 1.2 by $z+w$, split the finite initial-segment sums, prove the shift $k\mapsto k+1$ from the recursive monoid-sum clauses, and group equal powers. [given]

3.1 Pascal's rule gives the complex coefficient $\iota_{\mathbb C}\!\left(\binom{n+1}k\right)$ at every index, including the endpoints, so the formula holds at $n+1$. [discharge-induction] ∎
