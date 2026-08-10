---
id: cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
kind: corollary
title: 'A polynomial ring in finitely many indeterminates over an integral domain is an integral domain'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multivariate-polynomial-ring-by-iteration, cor-polynomial-ring-over-a-domain-is-a-domain, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22, More general constructions'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

If $R$ is an integral domain, then $R[x_1,\ldots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$.

## Facts & Assumptions

**Given:** An integral domain $R$ and the iterated polynomial rings $P_0=R$ and $P_{n+1}=P_n[x_{n+1}]$.

[L1] The iterated ring satisfies $R[x_1,\ldots,x_0]=R$ and $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$ ([[def-multivariate-polynomial-ring-by-iteration]]).

[L2] A one-variable polynomial ring over an integral domain is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[L3] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 The ring $P_0=R$ is a domain, giving the zero-indeterminate case. [base, given, L1]

1.2 Fix $n\in\mathbb N$ and assume that $P_n$ is a domain. [ih, given]

2.1 Under that hypothesis, [L1] and [L2] make $P_{n+1}=P_n[x_{n+1}]$ a domain; together with the base case, [L3] proves the claim for every $n$. [step 1.1, step 1.2, L1, L2, L3, discharge-induction] ∎
