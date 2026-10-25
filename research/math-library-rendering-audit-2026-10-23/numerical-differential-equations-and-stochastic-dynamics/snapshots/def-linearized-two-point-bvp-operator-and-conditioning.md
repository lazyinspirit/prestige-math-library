---
id: def-linearized-two-point-bvp-operator-and-conditioning
kind: definition
title: "Continuous linearized BVP operator and its conditioning"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-nonlinear-two-point-bvp-and-boundary-residual, def-total-derivative-in-euclidean-space, def-c-one-map-and-local-inverse]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $y^*\in C^1([a,b],\mathbb R^d)$ solve a square BVP, with $f$ and $B$ continuously differentiable on open neighborhoods of the trajectory and endpoint pair. Put $A(t)=D_yf(t,y^*(t))$, $B_1=D_1B(y^*(a),y^*(b))$, and $B_2=D_2B(y^*(a),y^*(b))$. Let

$$X=C^1([a,b],\mathbb R^d),\quad \|v\|_X=\|v\|_\infty+\|v'\|_\infty,$$

and

$$Z=C([a,b],\mathbb R^d)\times\mathbb R^d,\quad \|(g,q)\|_Z=\max\{\|g\|_\infty,\|q\|_2\}.$$

The **continuous linearized BVP operator** is the bounded linear map $\mathcal L:X\to Z$ given by

$$\mathcal L v=(v'-A v,\ B_1v(a)+B_2v(b)).$$

It is **boundedly invertible** when it is bijective and its inverse $\mathcal L^{-1}:Z\to X$ has finite operator norm. That norm is the conditioning constant for the linearized BVP used in the local discretization theorem.
