---
id: alg-differentiate-finite-fixed-point-iteration
kind: algorithm
title: "Differentiate a finite fixed-point iteration as a finite composed map"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, alg-forward-mode-automatic-differentiation]
justified_by: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Atilım Güneş Baydin and Barak A. Pearlmutter, Automatic Differentiation of Algorithms for Machine Learning, complete arXiv text, §§2–3"
      url: "https://arxiv.org/pdf/1404.7456"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 2
---

## Definition

Input a finite-dimensional $C^1$ map $G(z,\theta)$, a $C^1$ initial-state map $z_0(\theta)$, a parameter $\theta$ in an open subset of $\mathbb R^p$, and an integer budget $K\ge0$; the states lie in $\mathbb R^m$, with $p,m\ge0$. Use the specified maps $z_0$ and $G$, with their exact derivative evaluations, as primitive maps on their declared open domains. Evaluate $z_0(\theta)$ and then $z_{k+1}(\theta)=G(z_k(\theta),\theta)$ for $k=0,\ldots,K-1$. A primitive-domain failure returns DOMAIN_ERROR; a branch boundary or ambiguous active branch returns NONDIFFERENTIABLE and no derivative. The admissible case requires every evaluation to remain in its declared domain and, for piecewise primitives, on a unique strict active branch.

Allocate an $m\times p$ Jacobian array $J$. For each state coordinate $a=1,\ldots,m$, form the finite scalar-output graph for $f_a(\theta)=(z_K(\theta))_a$ by appending the coordinate projection to the finite recursion. For each parameter coordinate $\ell=1,\ldots,p$, call [[alg-forward-mode-automatic-differentiation]] on this graph at $\theta$ with direction $e_\ell$, the $\ell$th standard basis vector of $\mathbb R^p$, and put its returned tangent in $J_{a\ell}$. Propagate any DOMAIN_ERROR or NONDIFFERENTIABLE status from a call. Return $(z_K(\theta),J)$ with status ITERATES_DIFFERENTIATED. For $K=0$ the recursion contains only the initial-state map. If $m=0$ or $p=0$, the corresponding loops are empty and $J$ has the specified empty shape; the primal recursion is still evaluated. This procedure differentiates the $K$-step map actually specified by $G,z_0,K$; it does not substitute the derivative of an exact fixed point.
