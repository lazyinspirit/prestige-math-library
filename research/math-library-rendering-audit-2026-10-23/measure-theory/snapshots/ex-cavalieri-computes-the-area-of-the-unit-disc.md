---
id: ex-cavalieri-computes-the-area-of-the-unit-disc
kind: example
title: "Cavalieri computes the area of the unit disc from its sections"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-real-power-continuity-and-derivatives, cor-volume-of-the-unit-n-ball]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.7.24"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Example

Let
$$D:=\{(x,y)\in\mathbb R^2 : x^2+y^2<1\}.$$
Then
$$\lambda_2(D)=\int_{-1}^1 2\sqrt{1-x^2}\,dx=\pi.$$

## Facts & Assumptions

**Given:** The unit disc $D \subseteq \mathbb R^2$.

[L1] Tonelli computes the area of a measurable set from the lengths of its sections. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] The unit ball in $\mathbb R^2$ has area $\pi$. ([[cor-volume-of-the-unit-n-ball]])

## Verification

**Proof technique:** direct.

1.1 For $x \in [-1,1]$, the vertical section of $D$ is $$D_x=(-\sqrt{1-x^2},\sqrt{1-x^2}),$$ so $\lambda_1(D_x)=2\sqrt{1-x^2}$; outside $[-1,1]$ the section is empty. Applying [L1] to $\mathbf 1_D$ therefore gives $$\lambda_2(D)=\int_{-1}^1 2\sqrt{1-x^2}\,dx.$$ [L1]

2.1 The same set $D$ is the unit ball in $\mathbb R^2$, so [L2] gives $$\int_{-1}^1 2\sqrt{1-x^2}\,dx=\lambda_2(D)=\pi.$$ [L2, step 1.1] ∎
