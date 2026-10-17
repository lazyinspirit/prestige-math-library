---
id: lem-small-step-implicit-rk-branch-and-residual-error
title: "Small-step implicit Runge–Kutta stages have a unique branch and controlled residual error"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-implicit-residual-and-algebraic-error-units
  - def-implicit-runge-kutta-stage-equations
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-metric-space
  - def-complete-metric-space
  - thm-euclidean-space-complete
  - thm-banach-fixed-point
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.3, PDF pp. 66–68 / printed pp. 64–65: local defect, step-map stability, and global order for Runge–Kutta methods."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 1–9: implicit Runge–Kutta stage equations and order-condition framework."
---

## Statement

Let $m,d\ge1$, $h>0$, $A\in\mathbb R^{m\times m}$, and centers $c=(c_1,\ldots,c_m)\in(\mathbb R^d)^m$. On block vectors define

$$\|Y\|_{\infty,2}:=\max_{1\le i\le m}\|Y_i\|_2,\qquad \|A\|_\infty:=\max_i\sum_{j=1}^m|a_{ij}|.$$

Let $F:\mathcal B\to(\mathbb R^d)^m$, with components $F_i:\mathcal B\to\mathbb R^d$, be defined on the closed product ball $\mathcal B=\{Y:\|Y-c\|_{\infty,2}\le R\}$, where $R>0$. Suppose constants $M,L\ge0$ satisfy, for all $Y,Z\in\mathcal B$,

$$\|F(Y)\|_{\infty,2}\le M,\qquad \|F(Y)-F(Z)\|_{\infty,2}\le L\|Y-Z\|_{\infty,2},$$

and $h\|A\|_\infty M\le R$, $q:=h\|A\|_\infty L<1$. Define $\Phi(Y)=c+h(A\otimes I_d)F(Y)$ and $G(Y)=Y-\Phi(Y)$. Then $\Phi$ has a unique fixed point $Y^*\in\mathcal B$, equivalently $G(Y^*)=0$. Every approximate stage vector $\widetilde Y\in\mathcal B$ satisfies

$$\|\widetilde Y-Y^*\|_{\infty,2}\le\frac{\|G(\widetilde Y)\|_{\infty,2}}{1-q}.$$

If the derivative-scaled stage residual is $r=G(\widetilde Y)/h$, the right side is $h\|r\|_{\infty,2}/(1-q)$. The hypotheses $h\|A\|_\infty L<1$ and the invariant-ball bound are local solvability conditions; this result gives no global branch outside $\mathcal B$.

## Facts & Assumptions

**Given:** The finite-dimensional block space, $h,A,c,R,F,M,L$, the product ball $\mathcal B$, and the inequalities in the Statement. The residual $G$ uses the update-residual scaling of [[def-implicit-residual-and-algebraic-error-units]]; for Runge–Kutta stages it is the block residual defined by [[def-implicit-runge-kutta-stage-equations]].

[F1] [[def-euclidean-inner-product]] defines the Euclidean inner product and norm on each $\mathbb R^d$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives the Euclidean triangle inequality.

[F3] [[thm-euclidean-space-complete]]: every Euclidean Cauchy sequence in $\mathbb R^d$ converges in $\mathbb R^d$.

[F4] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space to itself has a unique fixed point.

[F5] [[def-metric-space]]: a metric satisfies separation, symmetry, and the triangle inequality.

[F6] [[def-complete-metric-space]]: every Cauchy sequence in a complete metric space converges to a point of that space.

[A1] $R>0$, $h\|A\|_\infty M\le R$, and $q=h\|A\|_\infty L<1$.

## Proof


1.1 The formula $d(Y,Z)=\|Y-Z\|_{\infty,2}$ satisfies the metric axioms [F5]: symmetry and separation hold coordinatewise from the Euclidean norm, while the triangle inequality follows from [F2] in each block and then taking the maximum. The ball $\mathcal B$ is nonempty because it contains $c$. Any Cauchy sequence in $(\mathcal B,d)$ is Cauchy in each of its $m$ Euclidean coordinates, so [F3] gives coordinate limits $Y_i$. Since $\|Y_i-c_i\|_2\le\|Y_i-Y_i^{(n)}\|_2+\|Y_i^{(n)}-c_i\|_2$, passing to the limit shows $\|Y_i-c_i\|_2\le R$; hence the block limit lies in $\mathcal B$. By [F6], $(\mathcal B,d)$ is complete. [given, F1, F2, F3, F5, F6, construct]

1.2 For each block $i$, the Euclidean triangle inequality and homogeneity give $\|\sum_j a_{ij}F_j(Y)\|_2\le\sum_j|a_{ij}|\|F_j(Y)\|_2\le(\sum_j|a_{ij}|)M$; taking the maximum over $i$ gives $\|\Phi(Y)-c\|_{\infty,2}\le h\|A\|_\infty M\le R$, so $\Phi(Y)\in\mathcal B$. Applying the same blockwise estimate to $F(Y)-F(Z)$ gives $\|\Phi(Y)-\Phi(Z)\|_{\infty,2}\le h\|A\|_\infty L\|Y-Z\|_{\infty,2}=q\|Y-Z\|_{\infty,2}$. [given, A1, F1, F2, algebra]

2.1 The hypotheses of [F4] hold by step 1.1 and step 1.2, so there is exactly one $Y^*\in\mathcal B$ with $\Phi(Y^*)=Y^*$. The equation $\Phi(Y^*)=Y^*$ is equivalent to $G(Y^*)=0$ by the definition of $G$. [step 1.1, step 1.2, F4]

3.1 For any $\widetilde Y\in\mathcal B$, $G(\widetilde Y)=\widetilde Y-\Phi(\widetilde Y)$ and $Y^*=\Phi(Y^*)$, so $\|\widetilde Y-Y^*\|_{\infty,2}\le\|G(\widetilde Y)\|_{\infty,2}+\|\Phi(\widetilde Y)-\Phi(Y^*)\|_{\infty,2}\le\|G(\widetilde Y)\|_{\infty,2}+q\|\widetilde Y-Y^*\|_{\infty,2}$. Since $1-q>0$, rearranging proves the stated residual-to-stage-error bound, and $G(\widetilde Y)=h r$ proves the derivative-scaled form. [A1, step 1.2, step 2.1, algebra] ∎
