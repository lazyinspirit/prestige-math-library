---
id: ex-zeta-four-equals-pi-to-the-four-over-ninety
kind: example
title: "The special-value formula gives $\\zeta(4)=\\pi^4/90$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-riemann-zeta-function, def-bernoulli-numbers-by-their-generating-function, thm-mittag-leffler-expansion-of-pi-cotangent]
proof_strategy: direct
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

$$\zeta(4)=\frac{\pi^4}{90}.$$

## Facts & Assumptions

**Given:** The Bernoulli generating function and the cotangent expansion.

[L1] Bernoulli numbers are defined by $$\frac{t}{e^t-1}=\sum_{n\ge0}\frac{B_n}{n!}t^n$$ ([[def-bernoulli-numbers-by-their-generating-function]]).

[L2] The cotangent expansion is $\pi\cot(\pi z)=1/z+\sum_{n\ge1}2z/(z^2-n^2)$ ([[thm-mittag-leffler-expansion-of-pi-cotangent]]).

[L3] For $\operatorname{Re}s>1$, $\zeta(s)=\sum_{n\ge1}n^{-s}$ ([[def-riemann-zeta-function]]).

## Verification

**Proof technique:** direct.

1.1 Expanding $e^t-1=t+t^2/2+t^3/6+t^4/24+\cdots$ and solving for the quotient in [L1] gives $$\frac{t}{e^t-1}=1-\frac{t}{2}+\frac{t^2}{12}-\frac{t^4}{720}+\cdots,$$ so $B_4=-1/30$. [L1, given, algebra]

2.1 For $|z|<1$, expand each term of [L2] into an absolutely locally convergent geometric series and use [L3]. The coefficient of $z^4$ in $\pi z\cot(\pi z)$ is then $-2\sum_{n\ge1}n^{-4}=-2\zeta(4)$. On the other hand, setting $t=2\pi iz$ in [L1] gives $\pi z\cot(\pi z)=t/(e^t-1)+t/2$; the coefficient of $z^4$ is $B_4(2\pi i)^4/4!=-\pi^4/45$ by step 1.1. Equating these coefficients yields $\zeta(4)=\pi^4/90$. [step 1.1, L1, L2, L3, algebra] ∎
