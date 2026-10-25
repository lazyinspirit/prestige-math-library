---
id: alg-exact-gradient-line-search-step
kind: algorithm
title: "Ideal exact gradient line-search step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - alg-gradient-descent
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - thm-extreme-value-metric
justified_by:
  - thm-exact-line-search-gradient-descent-global-contraction
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Philip E. Gill and Margaret H. Wright, Math 171B Numerical Optimization Class Notes"
      url: "https://mathweb.ucsd.edu/~njw/Teaching/Math171B/notes171B.pdf"
---

## Definition

This is an ideal one-step line-search oracle that uses the negative-gradient direction of [[alg-gradient-descent]] and replaces only its step-selection rule. It is not a second definition of the gradient-descent iteration.

**Inputs:** an open convex set $U\subseteq\mathbb R^d$, a $C^2$ objective $f:U\to\mathbb R$, an initial point $x_0\in U$ whose sublevel set $K:=\{y\in U:f(y)\le f(x_0)\}$ is compact, and a current point $x\in K$. **Admissible conditions:** for some $0<m\le M$, there is a convex open set $V\subseteq U$ containing $K$ on which the Hessian satisfies $mI\preceq H_f(y)\preceq MI$. **Output:** if $\nabla f(x)=0$, return $(x,\texttt{stationary})$. Otherwise set $g:=\nabla f(x)$ and return $(x-t_*g,\texttt{exact-step})$, where $t_*$ is the unique minimizer of $t\mapsto f(x-tg)$ over all $t\ge0$ with $x-tg\in U$. The set $K$ is nonempty because $x_0\in K$, and the continuous restriction $f|_K$ attains a minimum at some $x^*\in K$ by [[thm-extreme-value-metric]]. Every $y\in U\setminus K$ satisfies $f(y)>f(x_0)\ge f(x^*)$, so $x^*$ is an attained global minimizer of $f$ on $U$. Thus the algorithm inputs supply the minimizer premise of [[thm-exact-line-search-gradient-descent-global-contraction]], whose remaining hypotheses are stated above.

The minimization is an exact real-valued oracle; this definition gives no finite evaluation procedure or floating-point accuracy claim. A finite implementation must report its own search status and error bounds.
