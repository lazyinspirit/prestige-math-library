---
id: ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine
kind: example
title: "$\\lambda(1729)=36$ although $\\varphi(1729)=1296$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-carmichael-function-formula, cor-euler-totient-is-multiplicative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Example C.V.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

The number $1729$ satisfies

$$\lambda(1729)=36\qquad\text{and}\qquad\varphi(1729)=1296.$$

## Facts & Assumptions

**Given:** The factorisation $1729=7\cdot13\cdot19$.

[L1] Carmichael's function is the least common multiple of its prime-power values ([[thm-carmichael-function-formula]]).

[L2] Euler's totient is multiplicative on coprime positive arguments ([[cor-euler-totient-is-multiplicative]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\lambda(1729)=\operatorname{lcm}(6,12,18)=36$. [L1, algebra]

2.1 By [L2], $\varphi(1729)=6\cdot12\cdot18=1296$, which is strictly larger than the value in step 1.1. [step 1.1, L2, algebra] ∎
