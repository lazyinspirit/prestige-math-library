---
id: alg-gradient-descent
kind: algorithm
title: "Gradient descent"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-jacobian-matrix-and-gradient
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
justified_by:
  - lem-armijo-backtracking-terminates-for-strict-descent-directions
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §§9.2–9.3, especially Algorithm 9.3, PDF pp. 477–483"
---

## Definition

Let $U\subseteq\mathbb R^d$ be open and let $f:U\to\mathbb R$ be continuously
Fréchet differentiable. The gradient $\nabla f(x)$ is the vector of partial
derivatives in the Euclidean coordinates, with the convention of
def-jacobian-matrix-and-gradient; differentiability is the Fréchet
condition of def-real-frechet-derivative-on-real-and-complex-matrix-spaces.

**Inputs:** an initial point $x_0\in U$; either a positive fixed-step
sequence $(t_k)_{k\ge0}$ or backtracking parameters $\alpha\in(0,1)$ and
$\beta\in(0,1)$; and an optional caller stopping predicate
$S(k,x,g)\in\{\mathrm{false},\mathrm{true}\}$, with
$S:\{0,1,2,\ldots\}\times U\times\mathbb R^d\to\{\mathrm{false},\mathrm{true}\}$.
If no predicate is supplied, use $S\equiv\mathrm{false}$. **Output:** when the
procedure stops, return the last valid iterate $x_k$ and the status
`stationary`, `caller-stop`, or `domain-failure`.
If no stopping status occurs, the sequence continues and there is no finite
return.
For example, an outer procedure's at-most-$M$-updates limit, for finite real
$M\ge0$, is implemented by $S(k,x,g):=(k+1>M)$.

At iteration $k$, where $k$ is the number of accepted updates so far and the
current iterate is $x_k$:

1. Compute $g_k:=\nabla f(x_k)$ and set $p_k:=-g_k$. If $g_k=0$, return
   $(x_k,\texttt{stationary})$.
2. If $S(k,x_k,g_k)$ is true, return $(x_k,\texttt{caller-stop})$. Check this
   predicate at the current iterate after its gradient is computed and before
   any step is selected.
3. In fixed-step mode, set $t=t_k$. If $x_k+tp_k\notin U$, return
   $(x_k,\texttt{domain-failure})$ without accepting that candidate.
4. In backtracking mode, start with $t=1$ and repeatedly replace $t$ by
   $\beta t$ until $x_k+tp_k\in U$ and
   $f(x_k+tp_k)\le f(x_k)+\alpha t\,\langle g_k,p_k\rangle$.
5. Set $x_{k+1}:=x_k+t p_k$ and continue at iteration $k+1$.

The fixed-step update map is $x\mapsto x-t_k\nabla f(x)$; at a stationary
point its value is $x$, which is the returned iterate. A backtracking search
that is reached at a nonstationary iterate is well-defined by
lem-armijo-backtracking-terminates-for-strict-descent-directions. The
procedure asserts no convergence or global-minimization property for an
arbitrary objective.

## Definition references

[[def-jacobian-matrix-and-gradient]]

[[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]

[[lem-armijo-backtracking-terminates-for-strict-descent-directions]]

