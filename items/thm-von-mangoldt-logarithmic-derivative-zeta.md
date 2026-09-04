---
id: thm-von-mangoldt-logarithmic-derivative-zeta
kind: theorem
title: "The logarithmic derivative of the zeta Dirichlet series is the Dirichlet series of the von Mangoldt function on Re s greater than 1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-von-mangoldt-function, cor-completely-multiplicative-dirichlet-series-euler-product, thm-dirichlet-series-multiplication-convolution, cor-von-mangoldt-mobius-inversion-formula]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.9"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Jan-Hendrik Evertse, Analytic Number Theory, Chapter 2"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/ant20-2.pdf"
pipeline_run: null
---

## Statement

For $\Re s>1$, if

$$\zeta(s):=\sum_{n \ge 1} n^{-s},$$

then

$$-\frac{\zeta'(s)}{\zeta(s)} = \sum_{n \ge 1} \Lambda(n)n^{-s}.$$

## Facts & Assumptions

**Given:** A complex number $s$ with $\Re s>1$.

[L1] Completely multiplicative Dirichlet series admit geometric Euler factors,
and absolutely convergent Dirichlet series multiply by Dirichlet convolution
([[cor-completely-multiplicative-dirichlet-series-euler-product]],
[[thm-dirichlet-series-multiplication-convolution]]).

[L2] $\Lambda$ is the von Mangoldt function ([[def-von-mangoldt-function]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the constant function $1$: for $\Re s>1$, $$\zeta(s)=\prod_p \frac{1}{1-p^{-s}}.$$ Taking the logarithmic derivative termwise in the absolutely convergent Euler product gives $$-\frac{\zeta'(s)}{\zeta(s)} = \sum_p \sum_{k \ge 1} (\log p)\,p^{-ks}.$$ [L1, given, algebra]

2.1 The coefficient of $n^{-s}$ on the right is $\log p$ when $n=p^k$ is a prime power and $0$ otherwise, which is exactly $\Lambda(n)$ by [L2]. Therefore $$-\frac{\zeta'(s)}{\zeta(s)} = \sum_{n \ge 1} \Lambda(n)n^{-s}.$$ [L2, step 1.1, algebra] ∎
