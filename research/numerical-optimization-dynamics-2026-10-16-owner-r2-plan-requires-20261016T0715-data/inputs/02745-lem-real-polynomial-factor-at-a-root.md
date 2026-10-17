---
id: lem-real-polynomial-factor-at-a-root
kind: lemma
title: "A real polynomial vanishing at $a$ is divisible by $x-a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-polynomial-degree-leading-coefficient-and-monic, lem-power-difference-factorisation, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

If $p(x)=\sum_{k<n}a_kx^k$ and $p(a)=0$, then there is a real polynomial $q$ with $p(x)=(x-a)q(x)$ for every real $x$. The conventions and prerequisite facts used below are recorded in [[def-real-polynomial-degree-leading-coefficient-and-monic]], [[lem-power-difference-factorisation]], [[lem-finite-sum-laws]].

## Facts & Assumptions

**Given:** A polynomial $p$ and a real root $a$.

## Proof

**Proof technique:** constructive.

1.1 For each $k\ge1$, the power-difference factorization gives $x^k-a^k=(x-a)\sum_{j<k}a^jx^{k-1-j}$. [given]

1.2 Since $p(a)=0$, write $p(x)=\sum_{k<n}a_k(x^k-a^k)$. [algebra]

2.1 Substitute the factorization from step 1.1 and collect the finite coefficient sums into a polynomial $q$. [construct, discharge-construct] ∎
