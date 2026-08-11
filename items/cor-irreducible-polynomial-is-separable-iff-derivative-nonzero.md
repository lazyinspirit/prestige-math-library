---
id: cor-irreducible-polynomial-is-separable-iff-derivative-nonzero
kind: corollary
title: 'An irreducible polynomial over a field is separable exactly when its derivative is nonzero'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-polynomial-is-separable-iff-coprime-to-its-derivative, prop-formal-derivative-laws, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Section 1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field and let $p\in F[x]$ be irreducible. Then $p$ is separable if and only if $p'\ne0$.

## Facts & Assumptions

**Given:** A field $F$ and an irreducible polynomial $p\in F[x]$.

[L1] A nonzero polynomial is separable exactly when its monic gcd with its derivative is $1$ ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L2] If $p'\ne0$, then $\deg p'\le\deg p-1$ ([[prop-formal-derivative-laws]]).

[L3] An irreducible polynomial is a nonzero nonunit whose only divisors are units and associates ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 If $p'\ne0$, any common divisor of $p$ and $p'$ is a unit: a nonunit divisor of irreducible $p$ would be associate to $p$ by [L3], contradicting the strict degree bound [L2]; hence $\gcd(p,p')=1$ and [L1] makes $p$ separable. [given, L1, L2, L3]

2.1 If $p'=0$, then the monic associate of $p$ is the nonconstant gcd of $p$ and $0$, so [L1] says that $p$ is not separable; this proves the converse and the biconditional. [given, L1, L3] ∎
