---
id: def-four-dini-derivatives-at-a-point
kind: definition
title: "The four Dini derivatives of a real function at a point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-derivative, def-one-sided-limits, def-extended-reals]
justified_by: [thm-dini-derivatives-exist-are-ordered-and-detect-differentiability]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.6"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Definition

Let $I \subseteq \mathbb{R}$ be an interval, let $f : I \to \mathbb{R}$, and let
$x \in I$.

If $x$ has points of $I$ arbitrarily close on the right, the **upper right Dini
derivative** and **lower right Dini derivative** of $f$ at $x$ are

$$D^{+}f(x) := \limsup_{h \to 0^{+}} \frac{f(x+h)-f(x)}{h},$$

$$D_{+}f(x) := \liminf_{h \to 0^{+}} \frac{f(x+h)-f(x)}{h}.$$

If $x$ has points of $I$ arbitrarily close on the left, the **upper left Dini
derivative** and **lower left Dini derivative** of $f$ at $x$ are

$$D^{-}f(x) := \limsup_{h \to 0^{+}} \frac{f(x)-f(x-h)}{h},$$

$$D_{-}f(x) := \liminf_{h \to 0^{+}} \frac{f(x)-f(x-h)}{h}.$$

Each value is taken in the extended real line [[def-extended-reals]], so the
symbols remain meaningful even when the difference quotients are unbounded.
When $x$ is an interior point of $I$ and the usual finite derivative of
[[def-derivative]] exists, it is the common finite value of all four Dini
derivatives.

## Remarks

- The point of the Dini package is that no boundedness hypothesis is hidden in
  the notation: $+\infty$ and $-\infty$ are permitted values.
- The one-sided direction of the limit is the same $h \to 0^{+}$ in all four
  formulas. The left derivatives use the quotient at $x-h$, not a separate
  limit with $h \to 0^{-}$.
