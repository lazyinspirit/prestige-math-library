---
id: ex-carmichael-function-of-five-hundred-sixty-one
kind: example
title: "$\\lambda(561)=80$ and every integer coprime to $561$ has eightieth power congruent to one"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-carmichael-function-formula, cor-carmichael-exponent-theorem, cor-euler-totient-is-multiplicative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

One has $\lambda(561)=80$ and $\varphi(561)=320$. Consequently every $a$ coprime to $561$ satisfies $a^{80}\equiv1\pmod{561}$.

## Facts & Assumptions

**Given:** The factorisation $561=3\cdot11\cdot17$.

[L1] Carmichael's function is the least common multiple of its prime-power values ([[thm-carmichael-function-formula]]).

[L2] If $\gcd(a,n)=1$, then $a^{\lambda(n)}\equiv1\pmod n$ ([[cor-carmichael-exponent-theorem]]).

[L3] Euler's totient is multiplicative on coprime arguments ([[cor-euler-totient-is-multiplicative]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\lambda(561)=\operatorname{lcm}(2,10,16)=80$, while [L3] gives $\varphi(561)=2\cdot10\cdot16=320$. [L1, L3, algebra]

2.1 Apply [L2] to the value in step 1.1 to obtain $a^{80}\equiv1\pmod{561}$ for every $a$ coprime to $561$. [step 1.1, L2] ∎
