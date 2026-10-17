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

2.1 If the displayed list has length $n\le1$, the root condition makes its constant evaluation zero, so choose the zero polynomial $q$. For $n\ge2$, define $b_d=\sum_{k=d+1}^{n-1}a_k a^{k-1-d}$ for $0\le d\le n-2$. Reindexing the finite sums in steps 1.1–1.2 gives $p(x)=(x-a)\sum_{d=0}^{n-2}b_dx^d$. If every $b_d$ vanishes choose the zero formal polynomial; otherwise truncate the list $(b_0,\ldots,b_{n-2})$ after its last nonzero entry. This is a formal polynomial $q$ with the required evaluation. In particular, when $p$ has degree $N\ge1$ and its actual list is $(a_0,\ldots,a_N)$, take $n=N+1$: then $b_{N-1}=a_Na^0=a_N\ne0$, and no exponent above $N-1$ occurs. Thus this construction gives $q$ of degree exactly $N-1$ and leading coefficient $a_N$. [step 1.1, step 1.2, construct, algebra, discharge-construct] ∎
