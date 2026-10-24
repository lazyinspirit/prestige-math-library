---
id: cor-classical-mobius-inversion
kind: corollary
title: "Classical Möbius inversion over positive divisors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-number-theoretic-and-poset-mobius-agree, thm-mobius-inversion-for-lower-finite-posets, lem-divisibility-poset-is-lower-finite-and-factorises, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Notes on Number Theory, Theorem 7.9"
      url: "https://maths.qmul.ac.uk/~pjc/notes/nt.pdf"
    - title: "Stanford Pairing-Based Cryptography notes, Möbius inversion"
      url: "https://crypto.stanford.edu/pbc/notes/numbertheory/mobius.html"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $f,g:\mathbb Z_{>0}\to R$. Then

$$g(n)=\sum_{d\mid n}f(d)\quad\text{for every }n\ge1$$

if and only if

$$f(n)=\sum_{d\mid n}\mu(n/d)g(d)=\sum_{d\mid n}\mu(d)g(n/d)\quad\text{for every }n\ge1.$$

All divisors in the sums are positive.

## Facts & Assumptions

**Given:** A commutative ring $R$ and functions $f,g$ on the positive integers.

[L1] Lower-finite poset inversion says $g(n)=\sum_{d\mid n}f(d)$ exactly when $f(n)=\sum_{d\mid n}\mu_{\mid}(d,n)g(d)$ ([[thm-mobius-inversion-for-lower-finite-posets]]).

[L2] For $d\mid n$, $\mu_{\mid}(d,n)=\mu(n/d)$ ([[thm-number-theoretic-and-poset-mobius-agree]]).

[L3] The divisibility poset of positive integers is lower-finite ([[lem-divisibility-poset-is-lower-finite-and-factorises]]).

[L4] A finite sum is invariant under bijective reindexing ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the lower-finite divisibility poset from [L3] and substitute [L2]. This gives $f(n)=\sum_{d\mid n}\mu(n/d)g(d)$. [L1, L2, L3]

2.1 The map $d\mapsto n/d$ is a bijection of the positive divisors of $n$ with itself and is its own inverse. Reindexing the sum in step 1.1 by [L4] gives $f(n)=\sum_{d\mid n}\mu(d)g(n/d)$. [step 1.1, L4]

3.1 Since [L1] is an equivalence, steps 1.1 and 2.1 prove both directions and both standard indexings. [step 1.1, step 2.1, L1] ∎
