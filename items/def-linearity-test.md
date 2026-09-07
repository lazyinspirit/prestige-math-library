---
id: def-linearity-test
kind: definition
title: "The BLR linearity test over F_2"
status: draft
origin: pipeline
deps: [def-field]
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
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a718.4.1, Definition 18.22, pp.363\u2013364"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $n\geq0$ and let $f:\mathbb F_2^n\to\mathbb F_2$ be a fixed oracle table. Here $\mathbb F_2=\{0,1\}$ has addition and multiplication modulo two, with the field convention of [[def-field]]. For $a,x\in\mathbb F_2^n$, put $a\cdot x=\sum_i a_ix_i$ modulo two. A **linear function** here is $\ell_a(x)=a\cdot x$; no affine constant is added.

The **BLR test** chooses independent uniform $x,y\in\mathbb F_2^n$, queries $f(x),f(y),f(x+y)$, and accepts exactly when
$$f(x)+f(y)=f(x+y).$$
It uses three oracle calls (locations can coincide) and $2n$ random bits. Its acceptance probability is over the two uniform choices, with $f$ fixed.

The **normalized distance** is $\operatorname{dist}(f,g)=2^{-n}|\{x:f(x)\ne g(x)\}|$. Agreement is $1-\operatorname{dist}(f,g)$; distance to linear functions is $\min_a\operatorname{dist}(f,\ell_a)$. The ordered truth table of $\ell_a$ is the **Walsh–Hadamard encoding** of $a$, a string of length $2^n$. When $n=0$, the cube has one point and the sole linear function is zero.
