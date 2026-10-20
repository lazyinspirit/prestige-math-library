---
id: def-negative-gradient-pseudo-residual
kind: definition
title: "Negative-gradient pseudo-residuals for a finite empirical loss"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 0
deps: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., 12th printing'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'Alexey Natekin and Alois Knoll, "Gradient boosting machines, a tutorial," Frontiers in Neurorobotics 7 (2013), Article 21'
      url: 'https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

Let $N\ge1$, let $(x_i,y_i)_{i=1}^N$ be a finite sample with $x_i\in\mathcal X$ and $y_i\in\mathcal Y$, let $f:\mathcal X\to\mathbb R$ be a score function, and let $\ell:\mathcal Y\times\mathbb R\to\mathbb R$ be finite-valued. Assume that for each $i$, the one-variable function $t\mapsto\ell(y_i,t)$ is differentiable at $z_i=f(x_i)$. For a score vector $z=(z_1,\ldots,z_N)$, define the empirical score loss $\Phi(z)=\sum_{i=1}^N\ell(y_i,z_i)$. The pseudo-residual at observation $i$ for $f$ is

$$r_i(f)=-\left.\frac{d}{dt}\ell(y_i,t)\right|_{t=f(x_i)}.$$

The sample-score gradient, when its coordinate partial derivatives exist, is the vector $\nabla\Phi(z)=(\partial_{z_1}\Phi(z),\ldots,\partial_{z_N}\Phi(z))$. The sample pseudo-residual vector is $(r_1(f),\ldots,r_N(f))$; the word “pseudo” distinguishes these score derivatives from derivatives with respect to parameters of a restricted model.

## Definition references

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, 2nd ed., §10.10.3, printed p. 361](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Alexey Natekin and Alois Knoll, “Gradient boosting machines, a tutorial,” §2.4](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2013.00021/full)
