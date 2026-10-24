---
id: ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere
kind: example
title: "A BV function can fail continuity at one point and still be differentiable almost everywhere"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-bounded-variation-and-total-variation, def-derivative, thm-bv-functions-are-differentiable-almost-everywhere]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references: []
---

## Example

Let

$$H(x) := \begin{cases} 0,& 0 \le x < 1/2,\\ 1,& 1/2 \le x \le 1. \end{cases}$$

Then $H$ has bounded variation, is discontinuous at $1/2$, and is
differentiable almost everywhere with derivative $0$.

## Facts & Assumptions

**Given:** The step function $H$ above.

[A1] The symbols are those of the statement.

## Verification

**Proof technique:** direct.

1.1 For every partition of $[0,1]$, all endpoint increments vanish except possibly the one crossing $1/2$, and that increment has absolute value $1$. Hence the total variation of $H$ is $1$, so $H$ is of bounded variation. [given]

2.1 On each side of $1/2$ the function is locally constant, so $H'(x)=0$ for every $x \neq 1/2$. Thus $H$ is differentiable almost everywhere. This is exactly the phenomenon asserted abstractly by [[thm-bv-functions-are-differentiable-almost-everywhere]]. [step 1.1]

3.1 Steps 1.1 and 2.1 prove the example. [step 1.1, step 2.1] ∎
