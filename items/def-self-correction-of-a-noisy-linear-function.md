---
id: def-self-correction-of-a-noisy-linear-function
kind: definition
title: "Two-query linear self-correction"
status: draft
origin: pipeline
deps: [def-linearity-test]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a718.4.1 Local decoding of Walsh-Hadamard code pp.364\u2013365"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

For fixed oracle $f:\mathbb F_2^n\to\mathbb F_2$, $n\geq0$, and a requested point $x$, the **two-query self-corrector** chooses uniform $y\in\mathbb F_2^n$ and returns
$$\operatorname{Corr}_f(x;y)=f(y)+f(x+y)\quad\text{in }\mathbb F_2.$$
It uses $n$ random bits and two oracle calls, possibly at the same location. Linearity and distance have the conventions of [[def-linearity-test]]. Correctness will require proximity of the fixed oracle to a linear function. This procedure does not assume that the original value $f(x)$ is correct.
