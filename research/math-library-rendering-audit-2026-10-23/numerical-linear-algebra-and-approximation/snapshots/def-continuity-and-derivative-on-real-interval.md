---
id: def-continuity-and-derivative-on-real-interval
kind: definition
title: Continuity and derivative on a real interval
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-real-field]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 15: Derivatives; Laws for Differentiation"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec15.pdf"
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 16"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec16.pdf"
---

## Definition

For $f:[a,b]\to\mathbb R$, continuity at $x\in[a,b]$ means that for every
$\varepsilon>0$ there is $\delta>0$ such that
$|f(t)-f(x)|<\varepsilon$ whenever $t\in[a,b]$ and $|t-x|<\delta$.
Differentiability at an interior point $c$ means that the two-sided limit
$$
f'(c)=\lim_{h\to0}\frac{f(c+h)-f(c)}{h}
$$
exists in the real field; differentiability on $(a,b)$ means this holds at
every interior point. For higher derivatives, define recursively
$f^{(j+1)}=(f^{(j)})'$ on the points where the derivative exists. The class
$C^{n+1}$ on an open interval means that these derivatives through order
$n+1$ exist and are continuous there.
