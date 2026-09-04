---
id: thm-jacobi-theta-transformation
kind: theorem
title: "The Jacobi theta function satisfies $\\theta(t)=t^{-1/2}\\theta(1/t)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-jacobi-theta-function, thm-gaussian-integral]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12, The Theta Relation"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

For every $t>0$,

$$\theta(t)=t^{-1/2}\theta(1/t).$$

## Facts & Assumptions

**Given:** A real number $t>0$.

[L1] The Jacobi theta function is $$\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2 t}$$ ([[def-jacobi-theta-function]]).

[L2] The Gaussian integral is $$\int_{-\infty}^{\infty} e^{-x^2}\,dx=\sqrt{\pi}$$ ([[thm-gaussian-integral]]).

[L3] The cited zeta sources record the local Fourier/Poisson seam used here: for $g_t(x):=e^{-\pi t x^2}$, the fixed Fourier normalization gives a Gaussian transform of the form $$\widehat g_t(\xi)=C_t e^{-\pi \xi^2/t},$$ and Poisson summation for this Gaussian periodization gives $$\sum_{n\in\mathbb Z}g_t(n)=\sum_{m\in\mathbb Z}\widehat g_t(m).$$ This is the same seam recorded in the batch notes.

## Proof

**Proof technique:** direct.

1.1 Evaluating the transform in [L3] at $\xi=0$ gives $$C_t=\widehat g_t(0)=\int_{-\infty}^{\infty} e^{-\pi t x^2}\,dx.$$ With the change of variables $u=\sqrt{\pi t}\,x$ and [L2], this integral equals $t^{-1/2}$. Therefore $$\widehat g_t(\xi)=t^{-1/2}e^{-\pi \xi^2/t}.$$ [given, L2, L3, algebra]

2.1 By [L1], $\theta(t)=\sum_{n\in\mathbb Z}g_t(n)$. Poisson summation from [L3] and step 1.1 therefore give $$\theta(t)=\sum_{m\in\mathbb Z}\widehat g_t(m)=t^{-1/2}\sum_{m\in\mathbb Z}e^{-\pi m^2/t}=t^{-1/2}\theta(1/t).$$ [L1, L3, step 1.1, algebra] ∎
