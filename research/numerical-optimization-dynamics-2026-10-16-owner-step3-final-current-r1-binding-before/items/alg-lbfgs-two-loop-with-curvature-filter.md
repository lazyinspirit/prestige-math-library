---
id: alg-lbfgs-two-loop-with-curvature-filter
kind: algorithm
title: "Limited-memory Bfgs two-loop recursion with curvature filtering"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-euclidean-inner-product
  - alg-bracketing-zoom-strong-wolfe-search
axiom_use: "None. This algorithm uses deterministic finite branches and loops with its listed numerical-analysis dependencies; no choice principle is used."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7 §7.2, equations (7.15)–(7.20) and Algorithms 7.4–7.5, printed pp. 177–179 / PDF pp. 195–197."
    - title: "Dong C. Liu and Jorge Nocedal, On the limited memory BFGS method for large scale optimization"
      url: "https://people.sc.fsu.edu/~inavon/5420a/liu89limited.pdf"
      locator: "§§2–6, limited-memory Algorithm 6.1 and Theorem 6.1, printed pp. 510–526 / PDF pp. 10–23."
---

## Definition

Inputs are a $C^1$ objective $f:D\to\mathbb R$ on an open set $D\subseteq\mathbb R^n$ with $n\ge1$, an initial point $x_0\in D$, a positive integer memory length $m$, a fallback scale $\gamma_0>0$, line-search constants $0<c_1<c_2<1/2$, and finite expansion, zoom, and iteration budgets $E,Z,K\in\mathbb N$ (zero is allowed). All evaluations of $f$ and $\nabla f$, and all scalar and vector arithmetic, are exact over $\mathbb R$. Initialize $k:=0$, the current point $x:=x_0$, the current gradient $g:=\nabla f(x_0)$, and an empty history list. If $g=0$, return stationary. Otherwise, while $k<K$, store at most $m$ pairs $(s_i,y_i)$ in chronological order, retaining only pairs with $s_i^Ty_i>0$. Let $\rho_i=(s_i^Ty_i)^{-1}$ for each stored pair.

At each nonstationary iterate $x$ with current gradient $g$, all inner products are the Euclidean ones of [[def-euclidean-inner-product]]. Choose $\gamma=\gamma_0$ if the list is empty; otherwise choose
$$ \gamma=\frac{s_{\rm last}^Ty_{\rm last}}{y_{\rm last}^Ty_{\rm last}}. $$
The denominator is positive because the retained pair has positive curvature, so $y_{\rm last}\ne0$. Compute $r=H_k g$ by the following two loops, then set $p=-r$:

1. Set $q:=g$. Traverse the stored pairs from newest to oldest, setting $\alpha_i:=\rho_i s_i^Tq$ and then $q:=q-\alpha_i y_i$.
2. Set $r:=\gamma q$. Traverse the pairs from oldest to newest, setting $\beta_i:=\rho_i y_i^Tr$ and then $r:=r+s_i(\alpha_i-\beta_i)$.

If $g=0$, return stationary. If $g^Tp\ge0$, clear the list, set $p:=-\gamma_0g$, and return direction-failure only if this fallback is not a strict descent direction.

Call [[alg-bracketing-zoom-strong-wolfe-search]] with $(f,x,p,c_1,c_2,E,Z)$. If it returns a failure status, return that status with the current point. If it returns $\alpha>0$, set $x^+:=x+\alpha p$, compute $g^+:=\nabla f(x^+)$, and set $s:=x^+-x$, $y:=g^+-g$. If $s^Ty>0$, append $(s,y)$ and $\rho=(s^Ty)^{-1}$, dropping the oldest pair if the list would exceed $m$. If $s^Ty\le0$, skip that pair and preserve the existing valid list.

After either storing or skipping the new pair, commit the accepted step by setting $x:=x^+$ and $g:=g^+$, then increment $k:=k+1$. If the updated gradient is zero, return stationary at $x$; otherwise continue while $k<K$. When the iteration budget is exhausted, return the current point and iteration-budget-exhausted. A line-search failure returns its status with the current point, and the fallback branch returns direction-failure only if the fallback direction is not a strict descent direction. Finite line-search budgets may fail even when a strong Wolfe step exists.

Output the last point and one of stationary, the line-search status, direction-failure, or iteration-budget-exhausted.

## Remarks

The initial inverse-Hessian scale is $\gamma I$, an SPD matrix. Positive curvature is checked before storing a pair. The pair filter protects the recursion from a zero or negative denominator; it does not turn a failed finite search into an accepted step.
