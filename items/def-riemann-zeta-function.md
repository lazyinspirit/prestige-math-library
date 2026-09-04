---
id: def-riemann-zeta-function
kind: definition
title: "The Riemann zeta function on the half-plane $\\operatorname{Re}s>1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-exponential, def-natural-logarithm]
justified_by: [lem-riemann-zeta-dirichlet-series-converges-locally-uniformly]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Definition

For $s\in\mathbb C$ with $\operatorname{Re}s>1$, define the **Riemann zeta
function** by

$$\zeta(s):=\sum_{n=1}^\infty n^{-s},\qquad n^{-s}:=\exp(-s\log n).$$

Here $\exp$ is the complex exponential and $\log n$ is the real logarithm of
the positive integer $n$. The preceding lemma
[[lem-riemann-zeta-dirichlet-series-converges-locally-uniformly]] proves that
this Dirichlet series converges absolutely and locally uniformly on the open
half-plane $\operatorname{Re}s>1$, so the definition is well posed exactly on
that domain.
