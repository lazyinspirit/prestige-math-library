---
id: cor-cauchy-estimates-taylor-coefficients
kind: corollary
title: "Cauchy's inequalities bound the Taylor coefficients by the circle supremum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-taylor-series-holomorphic-function, cor-cauchy-inequalities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Corollary 4.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Corollary 2.2.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.2"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on $D(a,R)$, let $0<r<R$, and suppose $M\ge0$ satisfies $|f(\zeta)|\le M$ whenever $|\zeta-a|=r$. If $c_n=f^{(n)}(a)/n!$ is the $n$th coefficient of the Taylor series of $f$ at $a$, then

$$|c_n|\le\frac{M}{r^n}\qquad(n\in\mathbb N).$$

If $|f(\zeta)|\le M$ on $|\zeta-a|=r$, then the $n$th Taylor coefficient $c_n$ satisfies $|c_n|\le M/r^n$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on $D(a,R)$, a radius $0<r<R$, a bound $M\ge0$ on the radius-$r$ circle, and a natural $n$.

[L1] The Taylor series of $f$ at $a$ is $\sum_{n\ge0}f^{(n)}(a)(z-a)^n/n!$ ([[def-taylor-series-holomorphic-function]]).

[L2] Under the hypotheses above, $|f^{(n)}(a)|\le n!M/r^n$ for every natural $n$ ([[cor-cauchy-inequalities]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $c_n=f^{(n)}(a)/n!$, while [L2] gives $|f^{(n)}(a)|\le n!M/r^n$. [L1, L2]

2.1 Since $n!$ is positive and $r>0$, division in step 1.1 is legitimate and yields $|c_n|\le M/r^n$; for $n=0$ this is $|f(a)|\le M$, and the same calculation permits $M=0$. [step 1.1, algebra] ∎
