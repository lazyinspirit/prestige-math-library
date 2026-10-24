---
id: ex-euler-product-numerically-approximates-zeta-at-two
kind: example
title: "A short Euler-product truncation already numerically approximates zeta at $2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-euler-product-for-riemann-zeta, def-riemann-zeta-function, cor-basel-sum-by-residues]
proof_strategy: direct
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
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

Using the first four primes,

$$\prod_{p\in\{2,3,5,7\}}\frac{1}{1-p^{-2}}=\frac{1225}{768}\approx1.59505,$$

while

$$\zeta(2)=\frac{\pi^2}{6}\approx1.64493.$$

## Facts & Assumptions

**Given:** The Euler product and the independent Basel sum.

[L1] For $\operatorname{Re}s>1$, $$\zeta(s)=\prod_p(1-p^{-s})^{-1}$$ ([[thm-euler-product-for-riemann-zeta]]).

[L2] The Basel sum is $\sum_{n\ge1}n^{-2}=\pi^2/6$ ([[cor-basel-sum-by-residues]]), and this convergent Dirichlet series is $\zeta(2)$ ([[def-riemann-zeta-function]]).

## Verification

**Proof technique:** direct.

1.1 Evaluating the Euler factors from [L1] at $s=2$ gives $$\left(1-\frac14\right)^{-1}\left(1-\frac19\right)^{-1}\left(1-\frac1{25}\right)^{-1}\left(1-\frac1{49}\right)^{-1}=\frac43\cdot\frac98\cdot\frac{25}{24}\cdot\frac{49}{48}=\frac{1225}{768}.$$ [L1, given, algebra]

2.1 By [L2], the target value is $\pi^2/6\approx1.64493$. Comparing with step 1.1 shows that even this short prime truncation already lands within about five hundredths of $\zeta(2)$. [step 1.1, L2, algebra] ∎
