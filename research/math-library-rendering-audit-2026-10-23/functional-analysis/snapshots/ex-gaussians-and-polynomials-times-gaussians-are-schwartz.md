---
id: ex-gaussians-and-polynomials-times-gaussians-are-schwartz
kind: example
title: Polynomial Gaussians are Schwartz
deps: ["def-schwartz-space-and-its-seminorms", "thm-exponential-beats-every-polynomial", "thm-derivative-of-exponential", "def-ck-and-multi-index-notation-in-several-variables"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1
---

## Statement

For $t>0$ and every complex polynomial $P$ on $\mathbb R^n$, $P(x)e^{-\pi t|x|^2}\in\mathcal S(\mathbb R^n)$. No choice is required.

## Facts & Assumptions

**Given:** The Schwartz and multi-index conventions ([[def-schwartz-space-and-its-seminorms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F1] The derivative of the real exponential is itself ([[thm-derivative-of-exponential]]).

[F2] Exponential decay dominates every fixed power ([[thm-exponential-beats-every-polynomial]]).

## Verification

1.1 Differentiation in coordinate $j$ sends $Q(x)e^{-\pi t|x|^2}$ to $(\partial_jQ(x)-2\pi t x_jQ(x))e^{-\pi t|x|^2}$ by [F1]. Starting at $Q=P$, this recurrence proves that every ordered derivative is a polynomial times the same Gaussian and is continuous. Multiplication by any $x^\alpha$ leaves this form unchanged. [F1, given, algebra]

2.1 For any polynomial $Q$ of degree at most $d$, the sum of the absolute coefficients gives a constant $C$ with $|Q(x)|\le C(1+|x|)^d$. For $|x|\ge1$, choose an integer $N$ with $2N\ge d$; then $(1+|x|)^de^{-\pi t|x|^2}\le2^d(|x|^2)^Ne^{-\pi t|x|^2}\to0$ by [F2]. On $|x|\le1$ the bound is at most $C2^d$. Thus every weighted derivative in step 1.1 has finite supremum, which is precisely the Schwartz condition. If $P=0$, all derivatives and bounds are zero directly. [step 1.1, F2, given] ∎
