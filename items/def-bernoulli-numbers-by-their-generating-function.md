---
id: def-bernoulli-numbers-by-their-generating-function
kind: definition
title: "The Bernoulli numbers are defined by the generating series $t/(e^t-1)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-exponential]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Definition

Near $t=0$, the quotient $t/(e^t-1)$ is holomorphic because
$e^t-1=t+O(t^2)$. Its Maclaurin expansion therefore has a unique form

$$\frac{t}{e^t-1}=\sum_{n=0}^\infty \frac{B_n}{n!}t^n.$$

The coefficients $B_n$ are the **Bernoulli numbers**. This normalization gives
$B_0=1$ and $B_1=-1/2$.
