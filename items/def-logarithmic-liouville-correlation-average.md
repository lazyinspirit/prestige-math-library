---
id: def-logarithmic-liouville-correlation-average
kind: definition
title: "Logarithmically averaged Liouville correlation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-liouville-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Terence Tao, The logarithmically averaged Chowla and Elliott conjectures for two-point correlations, Theorem 1.2"
      url: "https://arxiv.org/pdf/1509.05422v4"
    - title: "Terence Tao, Correlations of multiplicative functions, slides 11–12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf"
---

## Definition

Let $\lambda(n)=(-1)^{\Omega(n)}$ for $n\ge1$, where $\Omega(n)$ counts the
prime factors of $n$ with multiplicity and $\Omega(1)=0$. Fix positive
integers $a_1,a_2$ and integers $b_1,b_2$ with
$a_1b_2-a_2b_1\ne0$. For real $X>1$ and $1<\omega\le X$, the
**logarithmically averaged Liouville correlation** along these two affine
forms is
$$
L_{\mathbf a,\mathbf b}(X,\omega):=\frac1{\log\omega}\sum_{\substack{n\in\mathbb Z_{>0}\\ X/\omega<n\le X\\ a_1n+b_1\ge1,\ a_2n+b_2\ge1}}\frac{\lambda(a_1n+b_1)\lambda(a_2n+b_2)}n,
$$
where $\log$ is the natural logarithm. Since $\omega>1$, strict increase and
$\log1=0$ give $\log\omega>0$, so the normalization is defined. The summation
uses the open lower
endpoint $X/\omega$ and closed upper endpoint $X$; it omits any initial terms
where an affine argument is not positive. In an asymptotic application,
$\omega=\omega(X)$ satisfies $1\le\omega(X)\le X$ and
$\omega(X)\to\infty$, so $\omega(X)>1$ for all sufficiently large $X$.

## Definition references

[[def-liouville-function|Liouville function and its positive-integer domain]]

[[def-natural-logarithm|natural logarithm]]

[[thm-natural-logarithm-laws|logarithm is strictly increasing and log 1=0]]

[Tao, Theorem 1.2, logarithmically averaged Chowla, PDF p. 2](https://arxiv.org/pdf/1509.05422v4)

[Tao, logarithmic weighting convention, slide 12](https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf)
