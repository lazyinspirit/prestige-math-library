---
id: def-adaptive-cubic-regularization-model
kind: definition
title: "The cubic-regularized quadratic model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - def-induced-matrix-p-norm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part I: motivation, convergence and numerical results (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05a.pdf"
      locator: "§§1–2.1 and Algorithm 2.1: cubic model, actual-to-predicted ratio, acceptance, and regularization updates in the 38-page author preprint."
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part II: worst-case iteration complexity (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf"
      locator: "§§1–2.1: generic ARC model and first-order evaluation framework in the 19-page author preprint."
---

## Definition

Let $f:\mathbb R^n\to\mathbb R$ be twice differentiable at $x$, let
$g:=\nabla f(x)$, let $B\in\mathbb R^{n\times n}$ be symmetric, and let
$\sigma>0$. The cubic-regularized quadratic model is

$$m_\sigma(s):=f(x)+\langle g,s\rangle+\tfrac12s^TBs+\tfrac{\sigma}{3}\|s\|_2^3,\qquad s\in\mathbb R^n,$$

using the Euclidean conventions of [[def-euclidean-inner-product]], the
gradient and Hessian conventions of [[def-jacobian-matrix-and-gradient]] and
[[def-hessian-and-euclidean-critical-point]], and the induced matrix norm of
[[def-induced-matrix-p-norm]]. Its predicted reduction is
$m_\sigma(0)-m_\sigma(s)$. Define the actual reduction by
$\operatorname{ared}(s):=f(x)-f(x+s)$ and, when the predicted reduction is
positive, define the ratio
$$\rho_\sigma(s):=\frac{\operatorname{ared}(s)} {m_\sigma(0)-m_\sigma(s)}.$$
When $B=\nabla^2f(x)$, this is the exact-Hessian ARC model; approximation
error in a different $B$ requires separate bounds. The definition alone
gives no convergence or evaluation-complexity guarantee.
