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

Inputs are a $C^1$ objective $f:D\to\mathbb R$ on an open set $D\subseteq\mathbb R^n$, an initial point $x_0\in D$, a positive integer memory length $m$, a fallback scale $\gamma_0>0$, line-search constants $0<c_1<c_2<1/2$, finite expansion and zoom budgets $E,Z$, and an iteration budget $K$. At every iteration, store a list of at most $m$ pairs $(s_i,y_i)$ in chronological order, retaining only pairs with $s_i^Ty_i>0$. Let $\rho_i=(s_i^Ty_i)^{-1}$.

At a nonstationary iterate $x$ with $g=\nabla f(x)$, all inner products are the Euclidean ones of [[def-euclidean-inner-product]]. Choose $\gamma=\gamma_0$ if the list is empty; otherwise choose
$$ \gamma=\frac{s_{\rm last}^Ty_{\rm last}}{y_{\rm last}^Ty_{\rm last}}. $$
If this scalar cannot be computed as a finite positive real in the arithmetic used, clear the list and use $\gamma_0$. Compute $r=H_k g$ by the following two loops, then set $p=-r$:

1. Set $q:=g$. Traverse the stored pairs from newest to oldest, setting $\alpha_i:=\rho_i s_i^Tq$ and then $q:=q-\alpha_i y_i$.
2. Set $r:=\gamma q$. Traverse the pairs from oldest to newest, setting $\beta_i:=\rho_i y_i^Tr$ and then $r:=r+s_i(\alpha_i-\beta_i)$.

If $g=0$, return stationary. If $g^Tp\ge0$, clear the list, set $p:=-\gamma_0g$, and return direction-failure only if this fallback is not a strict descent direction.

Call [[alg-bracketing-zoom-strong-wolfe-search]] with $(f,x,p,c_1,c_2,E,Z)$. If it returns a failure status, return that status with the current point. If it returns $\alpha>0$, set $x^+:=x+\alpha p$, compute $g^+:=\nabla f(x^+)$, and set $s:=x^+-x$, $y:=g^+-g$. If $s^Ty>0$, append $(s,y)$ and $\rho=(s^Ty)^{-1}$, dropping the oldest pair if the list would exceed $m$. If $s^Ty\le0$ or the pair arithmetic fails, skip that pair and preserve the existing valid list.

Repeat until $g=0$, the iteration budget is reached, or a failure status is returned. Output the last point and one of stationary, the line-search status, direction-failure, or iteration-budget-exhausted. Finite line-search budgets may fail even when a strong Wolfe step exists.

With $m\ge1$, each two-loop application uses $O(mn)$ scalar operations and stores $O(mn)$ pair entries plus $O(n)$ work vectors. These are operation/storage counts, not convergence guarantees.

## Remarks

The initial inverse-Hessian scale is $\gamma I$, an SPD matrix. Positive curvature is checked before storing a pair. The pair filter protects the recursion from a zero or negative denominator; it does not turn a failed finite search into an accepted step.
