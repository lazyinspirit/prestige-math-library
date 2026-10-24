---
id: cex-a-smooth-integrable-function-need-not-be-schwartz
kind: counterexample
title: Smooth and integrable does not imply Schwartz
deps: ["def-schwartz-space-and-its-seminorms", "thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line", "def-countable-choice"]
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

Assume countable choice. The function $f(x)=(1+x^2)^{-1}$ belongs to $C^\infty(\mathbb R)\cap L^1(\mathbb R)$ but not to $\mathcal S(\mathbb R)$.

## Facts & Assumptions

**Given:** [[def-countable-choice]] and the seminorm definition [[def-schwartz-space-and-its-seminorms]].

[F1] Nonnegative continuous improper Riemann integrals on half-lines agree with their Lebesgue integrals under countable choice ([[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]).

## Counterexample

1.1 The denominator $1+x^2$ is strictly positive. Inductively $f^{(k)}(x)=Q_k(x)/(1+x^2)^{k+1}$, where $Q_0=1$ and $Q_{k+1}=(1+x^2)Q_k'-2(k+1)xQ_k$; these derivatives are continuous, proving smoothness. On $[0,1]$, $f\le1$, and for $x\ge1$, $f(x)\le x^{-2}$. Thus for $R\ge1$, $\int_0^Rf\le1+\int_1^Rx^{-2}\,dx=2-1/R\le2$. The nonnegative improper integral exists and is finite; evenness gives the identical bound on the negative half-line. [F1] identifies the two improper integrals with the Lebesgue integrals, so $\|f\|_1\le4$. [F1, given, algebra]

2.1 For $|x|\ge1$, $x^4f(x)=x^4/(1+x^2)\ge x^2/2\to\infty$ as $|x|\to\infty$. Therefore $p_{4,0}(f)=\infty$, violating the defining Schwartz condition despite step 1.1. Countable choice is used only through the improper-to-Lebesgue interface, not for the explicit smoothness or failed seminorm. [step 1.1, given] ∎
