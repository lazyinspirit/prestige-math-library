---
id: cor-sum-of-roots-of-unity
kind: corollary
title: "For $n\\ge2$, the sum of all $n$-th roots of unity is zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-nth-roots-and-roots-of-unity, thm-complex-numbers-form-a-field, def-complex-integer-powers, def-monoid-finite-product, thm-generalised-associativity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For $n\in\mathbb N$ with $n\ge2$, the sum of all $n$th roots of unity is $0$. The conventions and prerequisite facts used below are recorded in [[thm-complex-nth-roots-and-roots-of-unity]], [[thm-complex-numbers-form-a-field]], [[def-complex-integer-powers]], [[def-monoid-finite-product]], [[thm-generalised-associativity]].

## Facts & Assumptions

**Given:** A natural $n\ge2$ and $\zeta=\exp\!\left(i\frac{2\pi}{\iota_{\mathbb R}(n)}\right)$, with $\iota_{\mathbb R}$ as in [[thm-complex-nth-roots-and-roots-of-unity]].

## Proof

**Proof technique:** direct.

1.1 The roots are the distinct list $1,\zeta,\ldots,\zeta^{n-1}$, with $\zeta^n=1$ and $\zeta\ne1$. [given]

1.2 The cyclic successor map on the initial segment $n$ is a permutation; the commutative-monoid permutation rule therefore gives $\zeta S=S$ for $S=\sum_{k<n}\zeta^k$. [given]

2.1 Thus $(\zeta-1)S=0$, and field cancellation gives $S=0$. [algebra] ∎
