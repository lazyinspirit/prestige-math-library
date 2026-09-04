---
id: thm-euler-totient-summatory-estimate
kind: theorem
title: "The summatory totient function is 3 over pi squared times x squared plus O(x log x)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-classical-mobius-inversion,
       thm-sum-of-totients-over-divisors,
       def-divisor-power-sum-functions,
       lem-harmonic-sum-asymptotic,
       cor-basel-sum-by-residues,
       def-number-theoretic-mobius-function,
       def-dirichlet-convolution-identity]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge1$,

$$ \sum_{n\le x}\varphi(n)=\frac{3}{\pi^2}x^2+O(x\log x). $$

## Facts & Assumptions

**Given:** A real $x\ge1$ and, for each positive integer $d\le x$, the integer $y_d:=\lfloor x/d\rfloor$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-sum-of-totients-over-divisors]], one has $\sum_{d\mid n}\varphi(d)=n=\operatorname{id}_1(n)$, where $\operatorname{id}_1$ is from [[def-divisor-power-sum-functions]]. Applying [[cor-classical-mobius-inversion]] gives $$\varphi(n)=\sum_{d\mid n}\mu(d)\frac nd.$$ The same inversion applied to the identity $\sum_{d\mid n}\varepsilon(d)=1$, with $\varepsilon$ from [[def-dirichlet-convolution-identity]], yields $$\sum_{d\mid n}\mu(d)=\varepsilon(n)=\begin{cases}1,&n=1,\\0,&n>1.\end{cases}$$ [given, algebra]

2.1 Summing the divisor formula from step 1.1 over $n\le x$ and writing $n=dm$ gives $$\sum_{n\le x}\varphi(n)=\sum_{d\le x}\mu(d)\sum_{m\le x/d} m.$$ Also, multiplying the second identity of step 1.1 by $1/n^2$ and summing over $n\le x$ yields the finite identity $$1=\sum_{d\le x}\frac{\mu(d)}{d^2}\sum_{m\le x/d}\frac1{m^2}.$$ [step 1.1, given, algebra]

3.1 For a positive integer $Y$, let $S(Y):=\sum_{m\le Y}1/m^2$. For every $m\ge Y+1$ one has $$ \frac1{m^2}\le\frac1{m(m-1)}=\frac1{m-1}-\frac1m, $$ so $$ \sum_{m>Y}\frac1{m^2}\le\sum_{m>Y}\left(\frac1{m-1}-\frac1m\right)=\frac1Y. $$ Since [[cor-basel-sum-by-residues]] gives $\sum_{m=1}^{\infty}1/m^2=\pi^2/6$, it follows that $S(Y)=\pi^2/6+O(1/Y)$. Apply this in the second formula of step 2.1 with $Y=y_d$. Because $1/y_d\le2d/x$ for every $d\le x$, one gets $$ \sum_{d\le x}\frac1{d^2y_d}=O\!\left(\frac1x\sum_{d\le x}\frac1d\right). $$ Together with $|\mu(d)|\le1$ from [[def-number-theoretic-mobius-function]] and [[lem-harmonic-sum-asymptotic]], this yields $$ \sum_{d\le x}\frac{\mu(d)}{d^2}=\frac{6}{\pi^2}+O\!\left(\frac{\log x}{x}\right). $$ [step 2.1, given, algebra]

4.1 For each $d\le x$, $$\sum_{m\le x/d}m=\frac{y_d(y_d+1)}2=\frac{y_d^2}{2}+O(y_d),\qquad y_d=\frac{x}{d}+O(1).$$ Therefore step 2.1 becomes $$\sum_{n\le x}\varphi(n)=\frac{x^2}{2}\sum_{d\le x}\frac{\mu(d)}{d^2}+O\!\left(x\sum_{d\le x}\frac1d\right).$$ Using step 3.1 and [[lem-harmonic-sum-asymptotic]] now yields $$\sum_{n\le x}\varphi(n)=\frac{3}{\pi^2}x^2+O(x\log x).$$ [step 2.1, step 3.1, given, algebra] ∎
