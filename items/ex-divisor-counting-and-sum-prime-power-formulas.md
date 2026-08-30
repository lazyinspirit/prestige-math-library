---
id: ex-divisor-counting-and-sum-prime-power-formulas
kind: example
title: "Prime-power formulas for $\\tau$ and $\\sigma_k$ in concrete cases"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-divisor-functions-under-dirichlet-convolution, thm-canonical-prime-factorisation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Sections 2.9 and 2.10"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

Using the prime-power formulas from
[[prop-divisor-functions-under-dirichlet-convolution]]:

$$
\tau(12)=(2+1)(1+1)=6,\qquad \sigma(12)=(1+2+4)(1+3)=28,
$$

since $12=2^2\cdot3$, and

$$
\tau(18)=(1+1)(2+1)=6,\qquad \sigma_2(18)=(1+2^2)(1+3^2+3^4)=455,
$$

since $18=2\cdot3^2$.

## Facts & Assumptions

**Given:** The integers $12$ and $18$.

## Verification

**Proof technique:** direct.

1.1 By [[thm-canonical-prime-factorisation]], $12=2^2\cdot3$ and $18=2\cdot3^2$. Applying the prime-power formulas of [[prop-divisor-functions-under-dirichlet-convolution]] gives the displayed products for $\tau(12)$, $\sigma(12)$, $\tau(18)$, and $\sigma_2(18)$. [given]

2.1 Evaluating those products yields $\tau(12)=6$, $\sigma(12)=7\cdot4=28$, $\tau(18)=6$, and $\sigma_2(18)=5\cdot91=455$. [step 1.1, algebra]

3.1 The direct divisor lists $\{1,2,3,4,6,12\}$ and $\{1,2,3,6,9,18\}$ have six elements each, and $1+2+3+4+6+12=28$ while $1+2^2+3^2+6^2+9^2+18^2=455$, so the prime-power formulas agree with direct computation in these cases. [step 2.1, algebra] ∎
