---
id: ex-euler-product-numerically-approximates-zeta-at-two
kind: example
title: "A short Euler-product truncation already numerically approximates zeta at $2$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-euler-product-for-riemann-zeta, thm-special-values-of-riemann-zeta-at-integers]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

Using the first four primes,

$$\prod_{p\in\{2,3,5,7\}}\frac{1}{1-p^{-2}}=\frac{1225}{768}\approx1.59505,$$

while

$$\zeta(2)=\frac{\pi^2}{6}\approx1.64493.$$

## Facts & Assumptions

**Given:** The Euler product and the special-value formula for zeta.

[L1] For $\operatorname{Re}s>1$,
$$\zeta(s)=\prod_p(1-p^{-s})^{-1}$$
([[thm-euler-product-for-riemann-zeta]]).

[L2] One has $\zeta(2)=\pi^2/6$ ([[thm-special-values-of-riemann-zeta-at-integers]]).

## Verification

**Proof technique:** direct.

1.1 Evaluating the Euler factors from [L1] at $s=2$ gives $$\left(1-\frac14\right)^{-1}\left(1-\frac19\right)^{-1}\left(1-\frac1{25}\right)^{-1}\left(1-\frac1{49}\right)^{-1}=\frac43\cdot\frac98\cdot\frac{25}{24}\cdot\frac{49}{48}=\frac{1225}{768}.$$ [L1, given, algebra]

2.1 By [L2], the target value is $\pi^2/6\approx1.64493$. Comparing with step 1.1 shows that even this short prime truncation already lands within about five hundredths of $\zeta(2)$. [step 1.1, L2, algebra] ∎
