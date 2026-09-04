---
id: ex-expectation-under-a-measurable-transformation
kind: example
title: "Expectation under a measurable transformation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-change-of-variables-for-expectation]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "S. R. S. Varadhan, Probability Theory, Section 1.4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
---

## Example

Let $X$ take the values $-1$, $0$, and $2$ with probabilities $1/4$, $1/2$, and
$1/4$, and let $g(x)=x^2+1$. Then
$$\mathbb E[g(X)]=\int_{\mathbb R}(x^2+1)\,d\mathbb P_X(x)=\frac94.$$

## Facts & Assumptions

**Given:** The law $\mathbb P_X$ with masses $\mathbb P_X(\{-1\})=1/4$, $\mathbb P_X(\{0\})=1/2$, and $\mathbb P_X(\{2\})=1/4$, and the measurable map $g(x)=x^2+1$.

[L1] Change of variables for expectation allows computation against the law instead of the original sample space ([[thm-change-of-variables-for-expectation]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $$\mathbb E[g(X)]=\int_{\mathbb R}g\,d\mathbb P_X.$$ Because the law is supported on $\{-1,0,2\}$, this is the weighted sum $$g(-1)\frac14+g(0)\frac12+g(2)\frac14=\frac{2}{4}+\frac{1}{2}+\frac{5}{4}=\frac94.$$ [L1, algebra]

2.1 The nonlinear expectation is therefore computed entirely from the law on the target space. [step 1.1] ∎
