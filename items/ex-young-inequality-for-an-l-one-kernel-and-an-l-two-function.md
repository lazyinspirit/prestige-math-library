---
id: ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function
kind: example
title: "Young's inequality on an $L^1 * L^2$ pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-young-convolution-inequality]
landmark: false
proof_strategy: "Choose an explicit integrable kernel and an explicit square-integrable function, compute the convolution where it is easy, and verify the stated $L^2$ bound from the theorem."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Example

Let $f=g=\mathbf{1}_{[0,1]}$ on $\mathbb{R}$. Then $f \in L^1(\mathbb{R})$,
$g \in L^2(\mathbb{R})$, and Young's inequality gives

$$ \|f*g\|_2 \le \|f\|_1\|g\|_2 = 1. $$

In fact
$$ \|f*g\|_2 = \left(\int_0^1 x^2\,dx + \int_1^2 (2-x)^2\,dx\right)^{1/2} = \sqrt{\frac23}. $$

## Facts & Assumptions

**Given:** The indicator $f=g=\mathbf{1}_{[0,1]}$.

[L1] Young's inequality holds
([[thm-young-convolution-inequality]]).

## Verification

**Proof technique:** direct.

1.1 The previous tent-function computation gives [L1, given, algebra]
$$ (f*g)(x)= \begin{cases} x,& 0 \le x \le 1,\\ 2-x,& 1 \le x \le 2,\\ 0,& \text{otherwise}. \end{cases} $$ [L1, given, algebra]

2.1 Therefore [step 1.1, algebra]
$$ \|f*g\|_2^2 = \int_0^1 x^2\,dx + \int_1^2 (2-x)^2\,dx = \frac13 + \frac13 = \frac23. $$ [step 1.1, algebra]

3.1 Since $\|f\|_1=1$ and $\|g\|_2=1$, this gives [L1, step 2.1]
$\|f*g\|_2=\sqrt{2/3} \le 1 = \|f\|_1\|g\|_2$, exactly as [L1] predicts. [L1, step 2.1] ∎