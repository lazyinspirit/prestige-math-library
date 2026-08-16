---
id: ex-lacunary-factorial-exponent-power-series
kind: example
title: "The lacunary power series with factorial exponents has radius one and diverges at 1"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cauchy-hadamard-for-complex-power-series, lem-nth-term-test, def-factorial-and-falling-factorial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Define $c_m=1$ when $m=n!$ for some $n\ge2$, and $c_m=0$ otherwise. Then $\sum_{m\ge0}c_mz^m$ has radius $1$ and diverges at $z=1$.

## Facts & Assumptions

**Given:** The coefficient sequence $(c_m)$ in the Example.

[L1] If $L=\limsup_{k\to\infty}|c_{k+1}|^{1/(k+1)}$, Cauchy–Hadamard gives radius $1/L$ when $0<L<+\infty$ ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L2] A convergent real series has terms tending to $0$ ([[lem-nth-term-test]]).

[L3] The factorial satisfies $F(0)=1$ and $F(\sigma(n))=F(n)\cdot\sigma(n)$, with $n!:=F(n)$, and $n!\ne0$ for every $n$ ([[def-factorial-and-falling-factorial]]).

## Verification

**Proof technique:** direct.

1.1 Every coefficient root is $0$ or $1$, since each $c_m$ is $0$ or $1$. By [L3] every $n!$ is a nonzero natural, hence $n!\ge1$, and the recursion clause then gives $\sigma(n)!=n!\cdot\sigma(n)\ge\sigma(n)$; so $m!\ge m$ for every $m\ge1$ and the set $\{n!:n\ge2\}$ of indices carrying $c_m=1$ is unbounded. The value $1$ therefore occurs at arbitrarily large indices, so the root limsup is $1$. [L3, algebra]

2.1 By [L1] the radius is $1$. At $z=1$, the terms $c_m$ do not tend to $0$ because $c_{n!}=1$ for every $n\ge2$, so [L2] gives divergence. [step 1.1, L1, L2] ∎
