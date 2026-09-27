---
id: ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function
kind: example
title: "Young's inequality on an $L^1 * L^2$ pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: []
landmark: false
proof_strategy: "Compute the indicator overlap and its L2 norm directly."
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Example

Let $f=g=\mathbf{1}_{[0,1]}$ on $\mathbb{R}$. Then $f \in L^1(\mathbb{R})$,
$g \in L^2(\mathbb{R})$, and the convolution satisfies

$$ \|f*g\|_2 \le \|f\|_1\|g\|_2 = 1. $$

In fact
$$ \|f*g\|_2 = \left(\int_0^1 x^2\,dx + \int_1^2 (2-x)^2\,dx\right)^{1/2} = \sqrt{\frac23}. $$

## Facts & Assumptions

**Given:** The indicator $f=g=\mathbf{1}_{[0,1]}$.

## Verification

**Proof technique:** direct.

1.1 For each $x$, the convolution integral is the length of $[0,1]\cap[x-1,x]$; direct interval overlap gives [given, algebra]
$$ (f*g)(x)= \begin{cases} x,& 0 \le x \le 1,\\ 2-x,& 1 \le x \le 2,\\ 0,& \text{otherwise}. \end{cases} $$ [given, algebra]

2.1 Therefore [step 1.1, algebra]
$$ \|f*g\|_2^2 = \int_0^1 x^2\,dx + \int_1^2 (2-x)^2\,dx = \frac13 + \frac13 = \frac23. $$ [step 1.1, algebra]

3.1 Since $\|f\|_1=1$ and $\|g\|_2=1$, this gives [step 2.1]
$\|f*g\|_2=\sqrt{2/3} \le 1 = \|f\|_1\|g\|_2$. [step 2.1] ∎