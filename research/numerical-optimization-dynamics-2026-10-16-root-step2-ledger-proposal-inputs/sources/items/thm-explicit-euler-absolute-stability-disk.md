---
id: thm-explicit-euler-absolute-stability-disk
kind: theorem
title: "Forward Euler has the closed unit disk centered at −1 as its absolute-stability region"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-absolute-stability-regions-for-one-step-and-multistep-methods
  - prop-euler-midpoint-rk4-orders-and-stability-functions
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"

---
## Statement

For forward Euler applied to $y'=\lambda y$, let $z=h\lambda$. Its stability function is $R_{\mathrm E}(z)=1+z$, and its absolute-stability region is exactly the closed disk

$$\{z\in\mathbb C:|z+1|\le1\}.$$

On the negative real axis, for $y'=-\rho y$ with $\rho>0$, the method is absolutely stable exactly when $0<h\rho\le2$.

## Facts & Assumptions

**Given:** Forward Euler's scalar test equation, a step size $h>0$, and $\lambda\in\mathbb C$.

[F1] [[def-absolute-stability-regions-for-one-step-and-multistep-methods]]: the one-step region is the set of defined $z$ for which $|R(z)|\le1$.

[F2] [[prop-euler-midpoint-rk4-orders-and-stability-functions]]: the forward-Euler stability function is $R_{\mathrm E}(z)=1+z$.

## Proof
1.1 By [F2], the forward-Euler multiplier is defined for every $z\in\mathbb C$ and equals $1+z$. Thus [F1] makes its absolute-stability condition $|1+z|\le1$, which is the closed disk centered at $-1$ with radius one. [given, F1, F2]

2.1 For $\lambda=-\rho$ with $\rho>0$, $z=-h\rho$ is real and the disk condition is $|1-h\rho|\le1$. This is equivalent to $-1\le1-h\rho\le1$, hence $0\le h\rho\le2$; since $h\rho>0$, it is exactly $0<h\rho\le2$. [given, step 1.1, algebra] ∎
