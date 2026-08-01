---
id: lem-cauchy-mean-value-quotient-form
kind: lemma
title: "Cauchy's mean-value theorem in quotient form when the denominator derivative is nonzero"
status: published
origin: session
deps: [thm-cauchy-mean-value, thm-rolle, def-derivative, def-one-sided-limits]
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

Let $a<b$. If $f,g$ are continuous on $[a,b]$, differentiable on $(a,b)$, and $g'(x)\ne0$ throughout $(a,b)$, then $g(b)\ne g(a)$ and there is $c\in(a,b)$ such that
$$\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(c)}{g'(c)}.$$

## Facts & Assumptions

**Given:** The functions and hypotheses in the statement.

[L1] Cauchy's mean value theorem gives $(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)$ for some $c\in(a,b)$ ([[thm-cauchy-mean-value]]).

[L2] Rolle's theorem says equal endpoint values force an interior zero of the derivative ([[thm-rolle]]).

## Proof

**Proof technique:** direct.

1.1 If $g(a)=g(b)$, Rolle gives $d\in(a,b)$ with $g'(d)=0$, contrary to the hypothesis. Hence $g(b)-g(a)\ne0$.  [L2, given]

1.2 Cauchy's theorem supplies $c\in(a,b)$ with the cross-product identity in [L1].  [L1]

2.1 Divide that identity by the two nonzero factors $g(b)-g(a)$ and $g'(c)$ to obtain the quotient formula.  [step 1.1, step 1.2, algebra] ∎
