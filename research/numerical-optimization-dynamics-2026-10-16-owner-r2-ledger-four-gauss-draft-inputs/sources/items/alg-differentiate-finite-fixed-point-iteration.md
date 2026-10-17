---
id: alg-differentiate-finite-fixed-point-iteration
kind: algorithm
title: "Differentiate a finite fixed-point iteration as a finite composed map"
status: draft
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

Input a $C^1$ map $G(z,\theta)$, a $C^1$ initial-state map $z_0(\theta)$, a parameter $\theta$, and a finite budget $K\ge0$. Form the finite computational graph for $z_{k+1}(\theta)=G(z_k(\theta),\theta)$, $k=0,\ldots,K-1$. Evaluate that graph and run forward mode to compute both $z_K(\theta)$ and its derivative $D_\theta z_K(\theta)$. Return that pair with status ITERATES_DIFFERENTIATED. A primitive-domain failure returns DOMAIN_ERROR; a nonsmooth active-branch switch returns NONDIFFERENTIABLE. This procedure differentiates the $K$-step map actually specified by $G,z_0,K$; it does not substitute the derivative of an exact fixed point.
