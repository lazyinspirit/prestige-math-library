---
id: cex-euler-totient-need-not-be-the-unit-group-exponent
kind: counterexample
title: "$\\varphi(8)=4$ but every unit modulo $8$ has square one"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-carmichael-function, thm-unit-group-modulo-two-power-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Example 2.5.10"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement refuted

Euler's totient need not equal the exponent of the unit group: $\varphi(8)=4$, but $\lambda(8)=2$.

## Facts & Assumptions

**Given:** The modulus $8$.

[L1] $\lambda(n)$ is the exponent of the unit group ([[def-carmichael-function]]).

[L2] $(\mathbb Z/8)^\times\cong C_2\times C_2$ ([[thm-unit-group-modulo-two-power-structure]]).

## Counterexample

**Proof technique:** direct.

1.1 The four units are $1,3,5,7$, and each square is congruent to $1$ modulo $8$. [algebra]

2.1 Thus their group has four elements but exponent $2$ by [L1]; this also agrees with [L2]. Hence $\varphi(8)=4\ne2=\lambda(8)$. [step 1.1, L1, L2] ∎
