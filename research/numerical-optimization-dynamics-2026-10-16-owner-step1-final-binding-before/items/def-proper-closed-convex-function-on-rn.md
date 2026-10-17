---
id: def-proper-closed-convex-function-on-rn
kind: definition
title: "Proper closed convex extended-real functions on $\\mathbb R^n$"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
  - def-proper-coercive-and-weakly-lower-semicontinuous-functional
  - def-extended-reals
  - def-euclidean-inner-product
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.1"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §§2.3 and 3.1.7"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Definition

Let $n\in\mathbb N$ and let $g:\mathbb R^n\to(-\infty,+\infty]$. Its effective domain is $\operatorname{dom}g=\{x:g(x)<+\infty\}$. The function is **proper** if $\operatorname{dom}g\ne\varnothing$; it is **convex** if
$$g((1-\theta)x+\theta y)\le(1-\theta)g(x)+\theta g(y)\qquad(x,y\in\mathbb R^n,\ 0\le\theta\le1),$$
using the endpoint convention $0\cdot(+\infty)=0$ of [[def-convex-and-strictly-convex-functionals-on-a-banach-space]]. It is **closed** (equivalently, lower semicontinuous in the extended-real convex-analysis convention used here) if its epigraph
$$\operatorname{epi}g=\{(x,s)\in\mathbb R^n\times\mathbb R:g(x)\le s\}$$
is closed in $\mathbb R^{n+1}$. The proximal-gradient items on this page assume $g$ is proper, closed and convex.

This page's closed-epigraph convention is explicit: it does not silently use an equivalence between sequential lower semicontinuity and topological closedness that would require an additional choice principle in the library's generic sequential convention. In finite dimensions this is the standard closed proper convex input to proximal algorithms.
