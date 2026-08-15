---
id: ex-lifting-a-primitive-root-through-powers-of-five
kind: example
title: "$2$ is primitive modulo every power of $5$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-order-of-one-plus-pu-modulo-prime-powers, lem-order-of-a-power-in-a-finite-cyclic-group, lem-order-characterisation, thm-totient-of-a-prime-power, thm-unit-criterion-modulo-n, def-primitive-root-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Theorem 2.5.11"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

For every $k\ge1$, the class of $2$ is a primitive root modulo $5^k$.

## Facts & Assumptions

**Given:** The integer $2$ and powers of the odd prime $5$.

[L1] For an odd prime $p$, an integer $u$ with $p\nmid u$, and $k\ge1$, the class of $1+pu$ has order $p^{k-1}$ modulo $p^k$ ([[lem-order-of-one-plus-pu-modulo-prime-powers]]).

[L2] If an element has order $r$, then its fourth power has order $r/\gcd(r,4)$ ([[lem-order-of-a-power-in-a-finite-cyclic-group]]).

[L3] An element of order $r$ has its $t$th power equal to the identity exactly when $r\mid t$ ([[lem-order-characterisation]]).

[L4] $\varphi(5^k)=4\cdot5^{k-1}$ ([[thm-totient-of-a-prime-power]]).

[L5] A class modulo $n$ is a unit exactly when its representative is coprime to $n$, and a primitive root is a unit of order $\varphi(n)$ ([[thm-unit-criterion-modulo-n]], [[def-primitive-root-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 Modulo $5$, $2^1,2^2,2^3,2^4$ are $2,4,3,1$, so $2$ has order $4$. This settles $k=1$. [L3, L4, L5, algebra]

1.2 Let $k\ge2$ and let $r$ be the order of $2$ modulo $5^k$. Since $2^4=1+5\cdot3$, [L1] says that $2^4$ has order $5^{k-1}$. Hence [L2] gives $r/\gcd(r,4)=5^{k-1}$. [L1, L2]

2.1 Reduction modulo $5$ and step 1.1 show that $4\mid r$ by [L3]. Therefore $\gcd(r,4)=4$, and step 1.2 yields $r=4\cdot5^{k-1}=\varphi(5^k)$ by [L4]. Since $2$ is a unit by [L5], it is primitive by the definition in [L5]. [step 1.1, step 1.2, L3, L4, L5] ∎
