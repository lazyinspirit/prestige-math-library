---
id: ex-unit-group-modulo-two-hundred-forty
kind: example
title: "The unit group modulo $240$ decomposes as $C_2^2\\times C_4^2$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-structure-of-the-unit-group-modulo-n, cor-euler-totient-is-multiplicative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The unit group modulo $240$ has the decomposition

$$ (\mathbb Z/240)^\times\cong C_2^2\times C_4^2.$$

## Facts & Assumptions

**Given:** The factorisation $240=16\cdot3\cdot5$.

[L1] The unit-group structure theorem decomposes a modulus into its prime-power unit groups ([[thm-structure-of-the-unit-group-modulo-n]]).

[L2] Euler's totient is multiplicative on coprime positive arguments ([[cor-euler-totient-is-multiplicative]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $U(16)\cong C_2\times C_4$, $U(3)\cong C_2$, and $U(5)\cong C_4$. [L1, algebra]

2.1 Their product is $C_2^2\times C_4^2$. Its order is $2^2\cdot4^2=64$, agreeing with $\varphi(240)=\varphi(16)\varphi(3)\varphi(5)=8\cdot2\cdot4=64$ by [L2]. [step 1.1, L2, algebra] ∎
