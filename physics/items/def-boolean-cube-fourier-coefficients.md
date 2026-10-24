---
id: def-boolean-cube-fourier-coefficients
kind: definition
title: "Characters and normalized Fourier coefficients"
status: published
origin: pipeline
deps: [def-linearity-test]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a719.3.1, pp.388\u2013389"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Use the cube and dot product of [[def-linearity-test]]. For $a,x\in\mathbb F_2^n$, $n\geq0$, the real-valued **character** is $\chi_a(x)=(-1)^{a\cdot x}$. For $h:\mathbb F_2^n\to\mathbb R$, define
$$\widehat h(a)=\mathbb E_x h(x)\chi_a(x)=2^{-n}\sum_{x\in\mathbb F_2^n}h(x)\chi_a(x).$$
The expectation symbol is just the uniform arithmetic mean. Products, sums of coefficients, and these averages are in $\mathbb R$; only the dot product and vector addition are modulo two. In particular $\chi_0=1$ and $\widehat h(0)$ is the mean of $h$.
