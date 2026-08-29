---
id: def-order-of-an-entire-function
kind: definition
title: "The order of an entire function"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Functions of finite order"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Definition

Let $f$ be entire and put

$$M_f(r):=\max_{|z|=r}|f(z)|\qquad(r>0).$$

The **order** of $f$ is

$$\rho(f):=\limsup_{r\to\infty}\frac{\log\log M_f(r)}{\log r},$$

with the convention that a constant nonzero entire function has order $0$ and
the zero function is left outside this definition unless stated otherwise.
