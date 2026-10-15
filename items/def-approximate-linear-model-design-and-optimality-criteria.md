---
id: def-approximate-linear-model-design-and-optimality-criteria
kind: definition
title: "Approximate designs and linear-model optimality criteria"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §7.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 19"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Definition

Let $\mathcal X$ be a finite nonempty candidate set, let $p\ge1$, and let $f:\mathcal X\to\mathbb R^p$ be the declared regression-vector map. Work under the stated linear mean model $Y=f(x)^{\mathsf T}\beta+\epsilon$, with mean-zero independent run errors of common variance $\sigma^2>0$. These are modeling assumptions, not claims about an experiment's empirical adequacy.

An **approximate design** is a weight function $\xi:\mathcal X\to[0,1]$ with $\sum_{x\in\mathcal X}\xi_x=1$. Its support is $\operatorname{supp}(\xi)=\{x:\xi_x>0\}$ and its information matrix is
$$M(\xi)=\sum_{x\in\mathcal X}\xi_x f(x)f(x)^{\mathsf T}.$$
This matrix is symmetric and positive semidefinite. A design is **nonsingular** when $M(\xi)$ is positive definite. For a singular design, the page's estimability convention is that a specified coefficient contrast $c^{\mathsf T}\beta$ is estimable exactly when $c\in\operatorname{span}\{f(x):x\in\operatorname{supp}(\xi)\}$; the inverse-matrix criteria below are defined only for nonsingular designs.

For nonsingular designs on this fixed $f$ and $\mathcal X$, **D-optimality** maximizes $\log\det M(\xi)$, **A-optimality** minimizes $\operatorname{tr}(M(\xi)^{-1})$, **E-optimality** maximizes $\lambda_{\min}(M(\xi))$, and **$c$-optimality** for a fixed $c\in\mathbb R^p$ minimizes $c^{\mathsf T}M(\xi)^{-1}c$; $c=0$ gives a trivial tie. The smallest eigenvalue is real because $M(\xi)$ is real symmetric ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]). These are different model- and candidate-dependent objectives; none is a universal design ranking.

An **exact $n$-run design**, for an integer $n\ge1$, has weights $\xi_x=n_x/n$ with nonnegative integer counts $n_x$ summing to $n$; optimizing over those integer allocations is a separate finite problem.

## Remarks

The equivalence criterion for D-optimality is proved in [[thm-d-optimality-equivalence-theorem]].
