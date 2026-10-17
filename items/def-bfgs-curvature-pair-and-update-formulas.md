---
id: def-bfgs-curvature-pair-and-update-formulas
kind: definition
title: "Bfgs curvature pairs and Hessian/inverse updates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
axiom_use: "None. This definition uses finite-dimensional real operations; no choice principle is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1, equations (6.5)–(6.7), (6.17), and (6.19), printed pp. 137–141 / PDF pp. 155–159."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§§6–7, printed pp. 20–25 / PDF pp. 21–26."
---

## Definition

Fix an integer $n\ge1$. For successive points $x,x^+\in\mathbb R^n$ and vectors $g,g^+\in\mathbb R^n$, define the **step vector** $s:=x^+-x$ and the **gradient-difference vector** $y:=g^+-g$. Their **curvature** is $s^Ty$, using the Euclidean inner product of [[def-euclidean-inner-product]].

A real matrix $B\in\mathbb R^{n\times n}$ is **symmetric positive definite (SPD)** when $B=B^T$ and $z^TBz>0$ for every nonzero $z\in\mathbb R^n$. For an SPD matrix $B$, write $H=B^{-1}$ for its inverse; $I$ denotes the identity matrix of [[def-matrix-product-and-identity-matrix]]. If $s\ne0$ and $s^Ty>0$, set $\rho:=(s^Ty)^{-1}$. The **BFGS Hessian update** and its inverse form are
$$ B^+:=B-\frac{Bss^TB}{s^TBs}+\frac{yy^T}{s^Ty}, \qquad H^+:=(I-\rho sy^T)H(I-\rho ys^T)+\rho ss^T. $$
The denominators are positive under the stated hypotheses.

For **Powell damping**, first set $c:=s^TBs$. If $s^Ty\ge0.2c$, set $\widetilde y:=y$. If $s^Ty<0.2c$, set
$$ \theta:=\frac{0.8c}{c-s^Ty}, \qquad \widetilde y:=\theta y+(1-\theta)Bs. $$
The damped BFGS update is the same formula with $y$ replaced by $\widetilde y$ and $\rho=(s^T\widetilde y)^{-1}$.

The **secant equations** are $B^+s=y$ and $H^+y=s$ for an undamped pair; for a damped pair they use $\widetilde y$. An inverse pair $(B,H)$ is **consistent** when $BH=HB=I$.

## Remarks

The two update formulas are algebraically equivalent when $B$ and $H$ are consistent. A positive curvature pair is required for both updates. Powell damping changes the gradient-difference vector used in the secant equation; a convergence theorem for the undamped update does not automatically cover the damped branch.
