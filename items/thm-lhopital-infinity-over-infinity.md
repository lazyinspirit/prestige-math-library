---
id: thm-lhopital-infinity-over-infinity
kind: theorem
title: "L'Hôpital's rule for the $\\infty/\\infty$ form at finite or infinite, one-sided endpoints"
status: published
origin: session
deps: [lem-cauchy-mean-value-quotient-form, cor-differentiable-implies-continuous, def-one-sided-limits, def-limits-at-infinity, def-extended-reals, thm-algebra-of-function-limits, def-function-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Statement

Let $f,g$ be differentiable on a one-sided neighbourhood of $c$, or on a tail at $+\infty$ or $-\infty$, with $g'\ne0$. Suppose $|f(x)|\to\infty$ and $|g(x)|\to\infty$ in the selected mode, with each numerator and denominator eventually of fixed sign. If $f'(x)/g'(x)\to L\in\overline{\mathbb R}$, then $f(x)/g(x)\to L$.

## Facts & Assumptions

**Given:** The stated hypotheses in one fixed approach mode.

[L1] Differentiability implies continuity, and the Cauchy quotient lemma compares increments of $f$ and $g$ with a derivative quotient at an intermediate point ([[cor-differentiable-implies-continuous]], [[lem-cauchy-mean-value-quotient-form]]).

[L2] The relevant finite and infinite limits are exactly those of [[def-function-limit]], [[def-one-sided-limits]], [[def-limits-at-infinity]], and [[def-extended-reals]].

## Proof

**Proof technique:** direct.

1.1 Fix a base point $a$ inside the domain. For variable $x$ farther toward the limiting end, [L1] gives $\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(\xi_x)}{g'(\xi_x)}$, where $\xi_x$ lies between $a$ and $x$.  [given, L1]

2.1 First choose $a$ sufficiently far toward the end that the derivative quotient is as close to $L$ as required throughout the remaining tail. Then the quotient of increments has the same bound for every later $x$.  [step 1.1, L2, choose]

3.1 Since $|g(x)|\to\infty$, $g(a)/g(x)\to0$; since the increment quotient is bounded in the finite-$L$ case, the identity $\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}\left(1-\frac{g(a)}{g(x)}\right)+\frac{f(a)}{g(x)}$ gives the finite conclusion. For $L=\pm\infty$, choose the derivative-quotient lower or upper bound first and then make the two fixed-base terms negligible, obtaining the defining arbitrary bound.  [step 2.1, L2, algebra]

4.1 Thus the quotient has limit $L$ in every stated mode.  [step 3.1] ∎
