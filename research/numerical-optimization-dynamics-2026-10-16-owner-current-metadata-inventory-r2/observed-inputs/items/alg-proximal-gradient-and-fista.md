---
id: alg-proximal-gradient-and-fista
kind: algorithm
title: "Proximal-gradient, FISTA, and fixed-period restarted FISTA"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-proximal-gradient-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, §§3–4"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §§4.2–4.3"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Definition

Assume $f:\mathbb R^n\to\mathbb R$ is convex and continuously differentiable with $L$-Lipschitz gradient, $L>0$, and $g:\mathbb R^n\to(-\infty,+\infty]$ is proper, closed and convex. For a finite iteration budget $N\ge1$, initial point $x_0\in\mathbb R^n$, and exact evaluations of $T_L$ from [[def-proximal-gradient-mapping]], the proximal-gradient mode returns
$$x_k=T_L(x_{k-1}),\qquad k=1,\ldots,N.$$

The FISTA mode sets $t_1=1$, $y_1=x_0$, and for $k=1,\ldots,N$ computes
$$x_k=T_L(y_k),\qquad t_{k+1}=\frac{1+\sqrt{1+4t_k^2}}2,\qquad y_{k+1}=x_k+\frac{t_k-1}{t_{k+1}}(x_k-x_{k-1}).$$
It returns $x_N$. A fixed-period restart with period $m\in\mathbb N$, $m\ge1$, runs this FISTA recurrence for at most $m$ updates per block and, after each full block, resets $t_1=1$, $y_1$ to the block's last iterate, and the previous iterate to that same point. A final shorter block stops at the budget. Each call uses the exact proximal point; no inexact call is covered by this algorithm definition. The finite budget makes the output a finite iterate even when no convergence or monotonicity of consecutive accelerated objective values is asserted.
