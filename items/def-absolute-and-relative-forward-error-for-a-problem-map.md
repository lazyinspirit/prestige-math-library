---
id: def-absolute-and-relative-forward-error-for-a-problem-map
kind: definition
title: "Absolute and relative forward error for an approximate value of a problem map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Definition

Let $X$ and $Y$ be normed spaces over $\mathbb{R}$
([[def-norm-and-normed-space]]), let $f:X\to Y$ be a map, and let $x$ be an
element of the domain of $f$. Let $\widehat y\in Y$ be an **approximate value**
of $f$ at $x$: an element of the target space meant to stand for $f(x)$.

The **absolute forward error** of $\widehat y$ at $x$ is the norm

$$\lVert \widehat y-f(x)\rVert,$$

and, provided $f(x)\ne 0$, the **relative forward error** of $\widehat y$ at
$x$ is

$$\frac{\lVert \widehat y-f(x)\rVert}{\lVert f(x)\rVert}.$$

The exact value $f(x)$ is called the **exact answer**, and $\widehat y$ the
**computed** (or approximate) answer. Forward error is the error in the answer
itself; it is measured in the target space $Y$ and knows nothing about how
$\widehat y$ was produced.

## Remarks

- **Why the relative version needs $f(x)\ne 0$.** Relative error divides by
  $\lVert f(x)\rVert$; when $f(x)=0$ the division is not defined, and the only
  sensible quantity is the absolute error. Every statement on this page that
  writes a relative forward error carries the hypothesis $f(x)\ne 0$.

- **Approximate values are plain elements of $Y$.** No machine arithmetic is
  assumed here: $\widehat y$ can come from hand calculation, a rounded formula,
  or an algorithm. The floating-point model is introduced separately in
  [[def-standard-relative-floating-point-model-and-unit-roundoff]], and nothing
  in this definition depends on it.
