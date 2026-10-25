---
id: def-ip-error-budget-for-computed-inversion
kind: definition
title: Error budget for computed Tikhonov inversion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-compact-linear-inverse-model
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, Chapter 8"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Chapter 3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html"
---

## Definition

Let $X,Y$ be real or complex Hilbert spaces over the same scalar field, let
$A:X\to Y$ be a compact linear forward map (the closure of $A(B)$ is compact
in $Y$ for every bounded set $B\subseteq X$), and let $A_h:X\to Y$ be a
bounded linear discretized map with finite-dimensional range. For a datum
$b\in Y$, let $\lambda>0$ be the coefficient of $\|x\|_X^2$ in the Tikhonov
objective $\|Ax-b\|_Y^2+\lambda\|x\|_X^2$. Supply adjoints $A^*:Y\to X$ and
$A_h^*:Y\to X$ satisfying
$\langle Ax,y\rangle_Y=\langle x,A^*y\rangle_X$ and
$\langle A_hx,y\rangle_Y=\langle x,A_h^*y\rangle_X$, where the inner products
are linear in their first arguments. Assume the shifted normal operators
$A^*A+\lambda I_X$ and $A_h^*A_h+\lambda I_X$ are bijective, and define
$$R_\lambda=(A^*A+\lambda I_X)^{-1}A^*,\qquad R_{\lambda,h}=(A_h^*A_h+\lambda I_X)^{-1}A_h^*.$$

For a truth $x^\dagger\in X$, data perturbation $e\in Y$, and $\delta\ge0$
with $\|e\|\le\delta$, put
$$y=Ax^\dagger,\qquad y_\delta=y+e,\qquad y_{h,\delta}=A_hx^\dagger+e,\qquad d_h=(A-A_h)x^\dagger=y_\delta-y_{h,\delta}.$$
For any returned output $\widetilde x_h\in X$, define its exact discrete
normal-equation residual by
$$r_{h,h}=(A_h^*A_h+\lambda I_X)\widetilde x_h-A_h^*y_{h,\delta}.$$
The five-channel error budget is the ordered tuple
$(b_{\mathrm{bias}},b_{\mathrm{data}},b_{\mathrm{operator}},b_{\mathrm{pre}},b_{\mathrm{solve}})$, where
$$\begin{aligned}b_{\mathrm{bias}}&=x^\dagger-R_\lambda y,\qquad b_{\mathrm{data}}=R_\lambda y-R_\lambda y_\delta,\\b_{\mathrm{operator}}&=(R_\lambda-R_{\lambda,h})y_{h,\delta},\qquad b_{\mathrm{pre}}=R_\lambda d_h,\\b_{\mathrm{solve}}&=R_{\lambda,h}y_{h,\delta}-\widetilde x_h.\end{aligned}$$
The five entries are, in order, the truth-bias, data-perturbation,
regularized-operator, pre-inversion, and algebraic-solve error vectors.
The scalar total budget is the sum of the five channel norms. The raw
pre-inversion forward residual is $d_h$; its reconstruction contribution is
$b_{\mathrm{pre}}$. The operator channel measures the difference between the
regularized exact and discretized operators. The solve channel measures the
returned output's difference from the exact discrete Tikhonov output. The
definition supplies no rate or arithmetic residual certificate.

## Definition references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, Regularization of Inverse Problems, Chapter 8](https://arxiv.org/pdf/2001.00617v2)

[Hansen, Introduction to Inverse Problems, Chapter 5](https://people.compute.dtu.dk/pcha/DIP/chap5.pdf)

[Van Leeuwen and Brune, 10 Lectures on Inverse Problems and Imaging, Chapter 3](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/ip_function_spaces.html)
