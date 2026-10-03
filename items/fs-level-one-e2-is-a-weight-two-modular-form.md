---
id: fs-level-one-e2-is-a-weight-two-modular-form
kind: false-statement
title: "FALSE: the weight-two Eisenstein series E_2 is a modular form"
status: draft
origin: pipeline
deps:
  - lem-e2-transformation-law
  - def-level-one-modular-form-and-cusp-form
  - def-level-one-eisenstein-series
  - def-modular-group-action-on-the-upper-half-plane
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Equation (17), Proposition 6 and equation (21), printed pp. 19–20: E2 and its nonholomorphic completion."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, printed pp. 98–104: modular-form background; the E2 correction and completion are supplied by Zagier Proposition 6."
---

## Statement

The function $E_2(\tau)=1-24\sum_{n\ge1}\sigma_1(n)q^n$ satisfies the weight-two transformation law $f(\tau+1)=f(\tau)$, and its completion $E_2^*(\tau)=E_2(\tau)-\frac{3}{\pi\Im\tau}$ is real-analytic and transforms like a weight-two form, so one might expect $E_2$ itself to be a modular form of weight $2$. This is false.

## Facts & Assumptions

**Given:** $E_2(\tau)=1-24\sum_{n\ge1}\sigma_1(n)q^n$ on $\mathfrak H$ ([[def-level-one-eisenstein-series]]), and the weight-two transformation law of [[def-level-one-modular-form-and-cusp-form]].

[F1] $E_2(-1/\tau)=\tau^2E_2(\tau)-\frac{6i}{\pi}\tau$ for every $\tau\in\mathfrak H$ ([[lem-e2-transformation-law]], [[def-modular-group-action-on-the-upper-half-plane]]).

[F2] A modular form $f$ of weight $2$ satisfies $f(-1/\tau)=\tau^2f(\tau)$ ([[def-level-one-modular-form-and-cusp-form]]).

## Refutation

1.1 Evaluating [F1] at $\tau=i$, where $-1/i=i$ and $i^2=-1$, gives $E_2(i)=i^2E_2(i)-\frac{6i}{\pi}i=-E_2(i)+\frac{6}{\pi}$, because $1/i=-i$ and $i^2=-1$; hence $2E_2(i)=\frac{6}{\pi}$ and therefore $E_2(i)=\frac{3}{\pi}\ne0$. [F1, given, algebra]

2.1 A weight-two modular form would satisfy, by [F2] at $\tau=i$, the equation $f(i)=i^2f(i)=-f(i)$, hence $f(i)=0$; but $E_2(i)=3/\pi\ne0$ by 1.1. Moreover [F1] shows directly that $E_2(-1/i)=E_2(i)=3/\pi$ while $i^2E_2(i)=-3/\pi$, so $E_2(-1/\tau)\ne\tau^2E_2(\tau)$ at $\tau=i$. Hence $E_2$ is not a modular form of weight $2$; the correctly transforming object is the non-holomorphic completion $E_2^*$. [F1, F2, step 1.1, given, algebra] ∎
