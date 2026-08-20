---
id: cor-holomorphic-functions-are-real-analytic-and-smooth
kind: corollary
title: "Holomorphic functions are real analytic and smooth in their two real coordinates"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-map-on-the-plane, thm-taylor-expansion-holomorphic-function, lem-binomial-theorem-over-complex-numbers, thm-binomial-closed-formula, thm-cauchy-integral-formula-higher-derivatives, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-complex-differentiability-implies-continuity, def-ck-and-multi-index-notation-in-several-variables, thm-complex-numbers-are-the-real-coordinate-plane, thm-complex-power-series-converge-locally-uniformly]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Taylor, Introduction to Analysis in Several Variables, Ch. 2 §2.2, Exercise 4"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and let $f=u+iv:U\to\mathbb C$ be holomorphic. Under the coordinate identification $\mathbb C=\mathbb R^2$, the map $(u,v):U\to\mathbb R^2$ is real analytic in the sense of [[def-real-analytic-map-on-the-plane]] and is of class $C^k$ for every natural $k$, hence smooth.

## Facts & Assumptions

**Given:** The identification of the complex plane with the real coordinate plane from [[thm-complex-numbers-are-the-real-coordinate-plane]], an open set $U$, and a holomorphic function $f=u+iv$ on $U$.

[L1] Every holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[L2] For complex $z,w$ and a natural $n$, $(z+w)^n=\sum_{p\le n}\binom np z^pw^{n-p}$, with each binomial coefficient regarded as a complex scalar ([[lem-binomial-theorem-over-complex-numbers]]).

[L3] A smooth planar map is real analytic when each component equals its total-degree Taylor series on a neighbourhood of every point ([[def-real-analytic-map-on-the-plane]]).

[L4] A holomorphic function has complex derivatives of every natural order locally ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L5] If $f=u+iv$ is complex differentiable, then $f'=u_x+iv_x=v_y-iu_y$ and the Cauchy–Riemann equations hold ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L6] A real function is $C^k$ when every coordinate-derivative word of length at most $k$, including the word of length zero, exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[L7] Every complex power series converges absolutely and uniformly on closed subdiscs strictly inside its disc of convergence ([[thm-complex-power-series-converge-locally-uniformly]]).

[L8] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L9] If $p\le n$, then the complex scalar corresponding to $\binom np$ is $n!/(p!(n-p)!)$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in U$. By [L1], there is $R>0$ such that $f(a+h)=\sum_{n\ge0}c_nh^n$ for $|h|<R$, where $c_n=f^{(n)}(a)/n!$. [L1]

2.1 Write $h=x+iy$. By [L2], $h^n=\sum_{p\le n}\binom np x^p(iy)^{n-p}$; if $|x|+|y|<R$, [L7] and the binomial identity give absolute convergence of the resulting total-degree series because the sum of the absolute values in degree $n$ is $|c_n|(|x|+|y|)^n$. [step 1.1, L2, L7, algebra]

3.1 From [L5], $\partial_x f=f'$ and $\partial_y f=if'$; induction using [L4] therefore gives $\partial_x^p\partial_y^qf(a)=i^qf^{(p+q)}(a)$. Taking $n=p+q$ in step 2.1 and using [L9], the coefficient of $x^py^q$ is $c_{p+q}\binom{p+q}{p}i^q=D^{(p,q)}f(a)/(p!q!)$. [step 1.1, step 2.1, L4, L5, L9, algebra]

4.1 Taking real and imaginary parts in the absolutely convergent expansion of step 2.1, and using the coefficient identification of step 3.1, gives the total-degree Taylor series of $u$ and $v$ on $|x|+|y|<R$. [step 2.1, step 3.1]

5.1 More generally, every coordinate-derivative word with $p$ occurrences of $x$ and $q$ occurrences of $y$ is the corresponding real or imaginary component of $i^qf^{(p+q)}$; [L4] makes the next complex derivative exist, [L8] makes every $f^{(p+q)}$ continuous, and the word of length zero is $f$ itself, so [L6] makes both components $C^k$ for every natural $k$. Thus the map is smooth, and step 4.1 now satisfies the opening hypothesis of [L3], proving real analyticity as well. [step 3.1, step 4.1, L3, L4, L5, L6, L8] ∎
