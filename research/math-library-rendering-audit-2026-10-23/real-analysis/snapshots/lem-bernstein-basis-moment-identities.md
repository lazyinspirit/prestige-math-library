---
id: lem-bernstein-basis-moment-identities
kind: lemma
title: "The zeroth, first, and second centred moments of the Bernstein basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bernstein-polynomial, thm-binomial-theorem, lem-finite-sum-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Bernstein polynomial (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Bernstein_polynomial"
pipeline_run: null
---

## Statement

For $n\ge1$, $0\le x\le1$, and $b_{n,k}(x)=\iota\binom nkx^k(1-x)^{n-k}$,

$$\sum_{k=0}^n b_{n,k}=1,\qquad \sum_{k=0}^n\frac{k}{n}b_{n,k}=x,\qquad \sum_{k=0}^n\left(\frac{k}{n}-x\right)^2b_{n,k}=\frac{x(1-x)}n.$$

## Facts & Assumptions
**Given:** $n\ge1$ and $x\in[0,1]$.

[L1] The binomial theorem gives $(u+v)^n=\sum_{k=0}^n\iota\binom nk u^kv^{n-k}$ ([[thm-binomial-theorem]]).

[L2] Finite sums are additive, scale, and split as in [[lem-finite-sum-laws]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $u=x$ and $v=1-x$ to obtain the zeroth identity. [L1, algebra]

1.2 Reindex the terms $k\binom nk=n\binom{n-1}{k-1}$ and apply [L1] at exponent $n-1$ to obtain the first identity. [L1, L2, algebra]

2.1 Apply the same reindexing to $k(k-1)\binom nk=n(n-1)\binom{n-2}{k-2}$ when $n\ge2$, combine it with step 1.2, and expand the square. [step 1.2, L1, L2, algebra]

3.1 For $n=1$ the displayed centred identity is checked directly; together with step 2.1 this proves it for all $n\ge1$. [step 2.1, algebra] ∎
