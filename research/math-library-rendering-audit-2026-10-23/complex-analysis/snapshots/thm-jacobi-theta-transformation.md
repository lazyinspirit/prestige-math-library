---
id: thm-jacobi-theta-transformation
kind: theorem
title: "The Jacobi theta function satisfies $\\theta(t)=t^{-1/2}\\theta(1/t)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-jacobi-theta-function, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-poisson-summation-for-schwartz-functions, def-countable-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12, The Theta Relation"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

Assume countable choice. For every $t>0$,

$$\theta(t)=t^{-1/2}\theta(1/t).$$

## Facts & Assumptions

**Given:** Countable choice and a real number $t>0$.

[L1] The Jacobi theta function is $$\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2 t}$$ ([[def-jacobi-theta-function]]).

[L2] Assuming countable choice, for $g_t(x)=e^{-\pi t x^2}$ the Fourier transform with $e^{-2\pi i x\xi}$ normalization is $\widehat g_t(\xi)=t^{-1/2}e^{-\pi\xi^2/t}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[L3] Assuming countable choice, Poisson summation gives $\sum_{n\in\mathbb Z}f(n)=\sum_{m\in\mathbb Z}\widehat f(m)$ for every Schwartz function $f$ on $\mathbb R$ ([[thm-poisson-summation-for-schwartz-functions]]).

## Proof

**Proof technique:** direct.

1.1 Repeated differentiation of $g_t(x)=e^{-\pi t x^2}$ gives a polynomial times the same Gaussian. For every polynomial $P$, $P(x)e^{-\pi t x^2}\to0$ faster than any reciprocal power as $|x|\to\infty$, since $t>0$. Thus $g_t$ is Schwartz and [L3] applies. [given, L3, algebra]

2.1 By [L1], $\theta(t)=\sum_{n\in\mathbb Z}g_t(n)$. Poisson summation from [L3], step 1.1 and the exact Gaussian transform [L2] therefore give $$\theta(t)=\sum_{m\in\mathbb Z}\widehat g_t(m)=t^{-1/2}\sum_{m\in\mathbb Z}e^{-\pi m^2/t}=t^{-1/2}\theta(1/t).$$ [L1, L2, L3, step 1.1, algebra] ∎
