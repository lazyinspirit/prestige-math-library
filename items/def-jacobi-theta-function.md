---
id: def-jacobi-theta-function
kind: definition
title: "The Jacobi theta function $\\theta(t)=\\sum_{n\\in\\mathbb Z} e^{-\\pi n^2 t}$ for $t>0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-exponential]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12, The Theta Relation"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Definition

For $t>0$, define the **Jacobi theta function** by

$$\theta(t):=\sum_{n\in\mathbb Z} e^{-\pi n^2 t}=1+2\sum_{n=1}^\infty e^{-\pi n^2 t}.$$

The terms are real and positive. Since $n^2\ge n$ for $n\ge1$, the tail is
dominated by the geometric series $\sum_{n\ge1}e^{-\pi n t}$, so the defining
series converges absolutely for every $t>0$.
