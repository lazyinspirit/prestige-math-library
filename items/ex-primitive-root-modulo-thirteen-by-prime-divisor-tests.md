---
id: ex-primitive-root-modulo-thirteen-by-prime-divisor-tests
kind: example
title: "$2$ is a primitive root modulo $13$ by testing the prime divisors of $12$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-primitive-root-modulo-n, cor-totient-at-one-and-at-a-prime, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Example 2.5.9"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

The class of $2$ is a primitive root modulo $13$.

## Facts & Assumptions

**Given:** The prime modulus $13$ and the unit class of $2$.

[L1] A unit is a primitive root modulo $n$ when its order is $\varphi(n)$ ([[def-primitive-root-modulo-n]]).

[L2] $\varphi(13)=12$ ([[cor-totient-at-one-and-at-a-prime]]).

[L3] If an element has finite order $r$, its powers equal the identity exactly at exponents divisible by $r$ ([[lem-order-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Direct calculation gives $2^4\equiv3\not\equiv1$ and $2^6\equiv-1\not\equiv1\pmod{13}$; in particular $2^{12}\equiv1\pmod{13}$. [algebra]

2.1 By step 1.1 and [L3], the order divides $12$. Every proper divisor of $12$ divides either $12/2=6$ or $12/3=4$, so step 1.1 and [L3] exclude every proper divisor. The order is therefore $12=\varphi(13)$ by [L2], and [L1] makes $2$ primitive. [step 1.1, L1, L2, L3] ∎
