---
id: alg-riemannian-armijo-backtracking
kind: algorithm
title: Finite-budget retraction Armijo backtracking
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-stiefel-grassmann-optimization-conventions
  - def-riemannian-gradient-of-a-smooth-function
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §4.2: retraction Armijo search and sufficient decrease."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§4.3–4.5: line searches and pullback regularity."
  - title: "Nicolas Boumal, P.-A. Absil, and Coralia Cartis, Global rates of convergence for nonconvex optimization on manifolds (2018), arXiv v2"
    url: "https://arxiv.org/pdf/1605.08101"
    locator: "Complete 33-page PDF, §2.2 and Appendices B–C: Armijo steps, local retraction radius and sufficient-decrease proof."
verification:
  precheck: n/a
---

## Definition

Let $M$ be $\operatorname{St}(n,r)$ or $\operatorname{Gr}(r,n)$, let $f:M\to\mathbb R$
be smooth, and choose one retraction $R$ from
[[def-stiefel-qr-polar-retractions]]. At $x\in M$, let $g=\operatorname{grad}f(x)$.
Fix $a\in(0,1)$, $\beta\in(0,1)$ and an integer budget $J\ge0$.

If $g=0$, return `(x, stationary)`. Otherwise test, in order,
$t_j=\beta^j$ for $j=0,\ldots,J$. At each trial form $y_j=R_x(-t_jg)$;
if the chosen retraction's full-rank condition fails, reject that trial without
evaluating $f(y_j)$. Otherwise accept and return $(y_j,t_j)$ at the first index
with
$$f(y_j)\le f(x)-a t_j\|g\|^2.$$
If no trial passes, return `(x, budget-exhausted)`.
