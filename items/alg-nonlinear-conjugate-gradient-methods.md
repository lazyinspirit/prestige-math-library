---
id: alg-nonlinear-conjugate-gradient-methods
kind: algorithm
title: "Fletcher–Reeves and safeguarded Polak–Ribière nonlinear conjugate gradients"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-wolfe-and-strong-wolfe-conditions
  - alg-bracketing-zoom-strong-wolfe-search
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 5 §5.2, printed pp. 121–125: Fletcher–Reeves and Polak–Ribière recurrences, PR+ truncation, and restart discussion."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§1, printed pp. 21–22: nonlinear recurrence conventions and relation to linear CG; §§3–4, printed pp. 25–34: FR and nonnegative-PR convergence analyses."
---

## Definition

Work in finite-dimensional real Euclidean space $\mathbb R^n$, $n\ge1$, with its standard inner product and norm ([[def-euclidean-inner-product]]). Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$ ([[def-c-one-map-and-local-inverse]]), and write $g(x)=\nabla f(x)$ using the gradient convention of [[def-jacobian-matrix-and-gradient]].

The inputs are $x_0\in D$, a method choice $\mathrm{FR}$ or $\mathrm{PR+}$, constants $0<c_1<c_2<1/2$, an outer iteration limit $K\in\mathbb N$, and a line-search mode. In bounded-strong-Wolfe mode, also supply finite expansion and zoom limits $E,Z\in\mathbb N$. In exact-SPD-quadratic mode, supply a real symmetric positive-definite matrix $A$ and vector $b$ such that $D=\mathbb R^n$ and $f(x)=\tfrac12x^TAx-b^Tx$. The $\mathrm{PR+}$ choice also takes $\sigma,C>0$. Evaluations and arithmetic are exact real operations; this definition makes no finite-precision error claim.

1. Evaluate $g_0=g(x_0)$. If $g_0=0$, return status **stationary** with $x_0$. Otherwise set $d_0=-g_0$.

2. For $k=0,\ldots,K-1$, if $g_k=0$, return **stationary** with $x_k$. For $k\ge1$, set
   $$ \beta_{k-1}^{\rm FR}=\frac{\|g_k\|_2^2}{\|g_{k-1}\|_2^2},\qquad \beta_{k-1}^{\rm PR+}=\max\!\left\{0,\frac{g_k^T(g_k-g_{k-1})}{\|g_{k-1}\|_2^2}\right\}. $$
   Choose the selected coefficient and form $d_k^{\rm cand}=-g_k+\beta_{k-1}d_{k-1}$. For $k=0$, set $d_0^{\rm cand}=d_0=-g_0$. Denominators are nonzero because the procedure has already returned at any zero gradient.

3. In the $\mathrm{PR+}$ method, test the candidate at the current point. If $g_k^Td_k^{\rm cand}>-\sigma\|g_k\|_2^2$ or $\|d_k^{\rm cand}\|_2>C\|g_k\|_2$, restart by setting $d_k=-g_k$ and, only when $k\ge1$, $\beta_{k-1}=0$, and record that a restart occurred. Otherwise set $d_k=d_k^{\rm cand}$. In the $\mathrm{FR}$ method set $d_k=d_k^{\rm cand}$ without this safeguard. If $g_k^Td_k\ge0$, return **search-failure** with cause **invalid-direction**.

4. In bounded-strong-Wolfe mode, call [[alg-bracketing-zoom-strong-wolfe-search]] at $(f,x_k,d_k,c_1,c_2)$ with budgets $E,Z$. That procedure returns a step only after checking both strong Wolfe inequalities. If it instead returns **invalid-direction**, **domain-exit**, or **evaluation-budget-exhausted**, return **search-failure** with that cause.

5. In exact-SPD-quadratic mode, when $g_k^Td_k<0$, compute
   $$ t_k=-\frac{g_k^Td_k}{d_k^TAd_k}. $$
   If the denominator is nonpositive or the computed step is not positive, return **search-failure** with cause **invalid-exact-model**. Otherwise verify the strong Wolfe inequalities and return **search-failure** if either fails. This mode records the exact-line-search specialization; it does not replace the finite-budget search mode.

6. For an accepted step, set $x_{k+1}=x_k+t_kd_k$ and evaluate $g_{k+1}$. If $g_{k+1}=0$, return **stationary** with $x_{k+1}$. After the loop, return **iteration-limit** with the last iterate, the accepted trace, and all restart flags. A failure or stationary status returns immediately with the trace so far.

The FR and safeguarded PR+ convergence statements concern infinite sequences following the respective recurrences and direction rules above, with a successful strong Wolfe update at every index; they do not concern an infinite execution of this finite-$K$ procedure. Each finite execution can realize only a prefix of such a sequence. A finite search budget can return **search-failure**; it does not certify convergence.
