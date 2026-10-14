---
id: cex-one-observation-does-not-identify-a-smoothing-spline
kind: counterexample
title: One observation does not determine a natural cubic smoothing fit
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-natural-cubic-smoothing-spline]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Ryan Tibshirani, Nonparametric Regression: Splines and RKHS Methods, §2.3"
      url: https://www.stat.berkeley.edu/~ryantibs/statlearn-s23/lectures/splines_rkhs.pdf
---

## Statement refuted

The formula $\sum_i(y_i-g(x_i))^2+\lambda\int_a^b|D^2g|^2$ has a unique minimizing function for every nonempty data set whenever $\lambda>0$, including data with only one distinct input.

## Facts & Assumptions

**Given:** The same squared-residual plus roughness criterion as the natural cubic smoothing spline, but with one distinct observed input.

[F1] On data sets with at least two distinct inputs, the natural cubic smoothing criterion is $\sum_i(y_i-g(x_i))^2+\lambda\int_a^b|D^2g|^2$ ([[def-natural-cubic-smoothing-spline]]); the counterexample below evaluates this same formula on one input, outside that definition's domain.

[A1] The extended criterion has one input $x_1=1/2$, response $y_1=1$, and $\lambda>0$.

## Counterexample

Take the domain $[0,1]$, one observation $(x_1,y_1)=(1/2,1)$, and $\lambda>0$. Extend the displayed criterion formula to this data set. For every $c\in\mathbb R$, set $g_c(x)=1+c(x-1/2)$. Then $g_c(1/2)=1$ and $D^2g_c=0$.

**Given:** The one-point criterion $J(g)=(1-g(1/2))^2+\lambda\int_0^1|g''(x)|^2dx$.

1.1 For every $c$, both terms in [F1] vanish at $g_c$, so $J(g_c)=0$. The criterion is a sum of nonnegative terms, hence zero is its minimum. [A1, F1, algebra]

2.1 If $c\ne d$, then $g_c(1)=1+c/2\ne1+d/2=g_d(1)$, so $g_c$ and $g_d$ are distinct minimizers. The one-observation extension is not unique, proving the lower bound of two distinct inputs is necessary. [A1, step 1.1, algebra] ∎