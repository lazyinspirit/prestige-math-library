---
id: ex-zeta-four-equals-pi-to-the-four-over-ninety
kind: example
title: "The special-value formula gives $\\zeta(4)=\\pi^4/90$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-special-values-of-riemann-zeta-at-integers, def-bernoulli-numbers-by-their-generating-function]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Example

$$\zeta(4)=\frac{\pi^4}{90}.$$

## Facts & Assumptions

**Given:** The Bernoulli generating function and the even-integer zeta formula.

[L1] Bernoulli numbers are defined by
$$\frac{t}{e^t-1}=\sum_{n\ge0}\frac{B_n}{n!}t^n$$
([[def-bernoulli-numbers-by-their-generating-function]]).

[L2] For $m\ge1$,
$$\zeta(2m)=(-1)^{m+1}\frac{B_{2m}(2\pi)^{2m}}{2(2m)!}$$
([[thm-special-values-of-riemann-zeta-at-integers]]).

## Verification

**Proof technique:** direct.

1.1 Expanding $e^t-1=t+t^2/2+t^3/6+t^4/24+\cdots$ and solving for the quotient in [L1] gives $$\frac{t}{e^t-1}=1-\frac{t}{2}+\frac{t^2}{12}-\frac{t^4}{720}+\cdots,$$ so $B_4=-1/30$. [L1, given, algebra]

2.1 Substitute $m=2$ and $B_4=-1/30$ into [L2]: $$\zeta(4)=-\frac{(-1/30)(2\pi)^4}{2\cdot4!}=\frac{\pi^4}{90}.$$ [step 1.1, L2, algebra] ∎
