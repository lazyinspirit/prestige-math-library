---
id: def-natural-cubic-smoothing-spline
kind: definition
title: Natural cubic smoothing spline
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-natural-cubic-spline, def-sobolev-space-wkp-and-its-norm, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice]
justified_by: [thm-natural-cubic-smoothing-spline-exists-uniquely]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ryan Tibshirani, Nonparametric Regression: Splines and RKHS Methods, §§2.2–2.4"
      url: https://www.stat.berkeley.edu/~ryantibs/statlearn-s23/lectures/splines_rkhs.pdf
---

## Definition

Assume AC. Let $[a,b]$ be a bounded interval, let $(x_i,y_i)_{i=1}^n\in([a,b]\times\mathbb R)^n$, assume at least two distinct input values, and let $\lambda>0$. For $g\in W^{2,2}(a,b)$ use its unique continuous representative on $[a,b]$ supplied by the one-dimensional Sobolev representative theorem. The natural cubic smoothing spline is the unique minimizer, whose existence and uniqueness are proved in [[thm-natural-cubic-smoothing-spline-exists-uniquely]], of
$$J(g)=\sum_{i=1}^n(y_i-g(x_i))^2+\lambda\int_a^b|D^2g(t)|^2\,dt.$$

The requirement of two distinct inputs is essential. The penalty is the squared $L^2$ norm of the second weak derivative. The data term includes every observation, including repeated inputs; only the spline knots are the distinct input values, as in [[def-natural-cubic-spline]].
