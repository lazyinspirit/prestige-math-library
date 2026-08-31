---
id: thm-divisor-sum-summatory-estimate
kind: theorem
title: "The summatory divisor-sum function is pi squared over 12 times x squared plus O(x log x)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-divisor-functions-under-dirichlet-convolution,
       lem-harmonic-sum-asymptotic,
       cor-basel-sum-by-residues]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge1$,

$$
\sum_{n\le x}\sigma(n)=\frac{\pi^2}{12}x^2+O(x\log x).
$$

## Facts & Assumptions

**Given:** A real $x\ge1$, an integer $M:=\lfloor x\rfloor$, and $y_m:=\lfloor x/m\rfloor$ for $1\le m\le M$.

## Proof

**Proof technique:** direct.

1.1 By [[prop-divisor-functions-under-dirichlet-convolution]], $\sigma(n)=\sum_{d\mid n} d$. Summing over $n\le x$ and writing each such $n$ as $dm$ gives $$\sum_{n\le x}\sigma(n)=\sum_{m=1}^{M}\sum_{d=1}^{y_m} d.$$ [given, algebra]

2.1 For each $m$, $$\sum_{d=1}^{y_m} d=\frac{y_m(y_m+1)}2=\frac{y_m^2}{2}+O(y_m).$$ Therefore $$\sum_{n\le x}\sigma(n)=\frac12\sum_{m=1}^{M}y_m^2+O\!\left(\sum_{m=1}^{M}y_m\right).$$ [step 1.1, given, algebra]

3.1 Since $y_m=x/m+O(1)$ uniformly in $m$, one has $y_m^2=x^2/m^2+O(x/m)+O(1)$. Summing and using [[cor-basel-sum-by-residues]] together with [[lem-harmonic-sum-asymptotic]] gives $$\sum_{m=1}^{M}y_m^2=\frac{\pi^2}{6}x^2+O(x\log x),\qquad \sum_{m=1}^{M}y_m=O(x\log x).$$ [step 2.1, given, algebra]

4.1 Substituting step 3.1 into step 2.1 yields $$\sum_{n\le x}\sigma(n)=\frac{\pi^2}{12}x^2+O(x\log x).$$ [step 2.1, step 3.1, given, algebra] ∎
