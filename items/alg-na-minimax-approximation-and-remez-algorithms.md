---
id: alg-na-minimax-approximation-and-remez-algorithms
kind: algorithm
title: "Finite-budget polynomial Remez exchange with an exact extrema oracle"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-best-polynomial-uniform-error
  - lem-na-polynomial-remez-system-invertible
  - thm-na-polynomial-equioscillation-certificate
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ricardo Pachón and Lloyd N. Trefethen, Barycentric-Remez Algorithms for Best Polynomial Approximation in the Chebfun System, §§2.1–2.2"
      url: "https://people.maths.ox.ac.uk/trefethen/remez_new2.pdf"
      locator: "Printed pp. 5–7, trial alternation system and first/second Remez exchange."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 73–79, best polynomial approximation and equioscillation."
verification:
  precheck: n/a
---

## Definition

**Inputs.** A nondegenerate interval $I=[a,b]$, a degree $n\ge0$, a continuous
real function $f$ on $I$, an integer exchange budget $B\in\mathbb N_0$, and an initial reference
$X=(x_0,\ldots,x_{n+1})$ with $a\le x_0<\cdots<x_{n+1}\le b$. Also supply an
exact extrema oracle for a polynomial candidate $p$. On each call it returns
one of:

- alternation$(E,y_0,\ldots,y_{n+1})$, only when $E=\|f-p\|_{\infty,I}$ and the
  returned ordered distinct nodes lie in $I$ and satisfy
  $f(y_i)-p(y_i)=\sigma(-1)^iE$ for one fixed sign $\sigma$;
- maximum$(E,y)$, only when $y\in I$, $E=\|f-p\|_{\infty,I}$ and
  $|f(y)-p(y)|=E$; or
- inconclusive, when neither exact certificate can be returned.

**Procedure.** For $k=0,\ldots,B$, solve the unique real linear system
$$p_k(x_i)+(-1)^i\lambda_k=f(x_i),\qquad 0\le i\le n+1,$$
for $p_k\in\mathcal P_n(I)$ and $\lambda_k\in\mathbb R$, using
[[lem-na-polynomial-remez-system-invertible]]. Query the oracle for $p_k$.
If it returns alternation$(0,Y)$ or maximum$(0,y)$, return exact$(p_k)$,
since either response certifies zero uniform error. If it returns
alternation$(E,Y)$ with $E>0$, return certified$(p_k,E,Y)$; the optimality
claim is discharged by [[thm-na-polynomial-equioscillation-certificate]]. If
it returns inconclusive, return oracle-inconclusive. If it returns
maximum$(E,y)$ with $E>0$ and $E=|\lambda_k|$, return certified$(p_k,E,X)$,
because the solved equations make $X$ an alternating set and the oracle
certifies the global norm. If $\lambda_k=0<E$, return zero-level-no-exchange.
If $k=B$, return budget-exhausted with $p_k$ and the current reference $X$
before attempting an exchange.

In the remaining case, let $s=\operatorname{sgn}(f(y)-p_k(y))$. Find the
smallest index $i$ for which $s=\operatorname{sgn}(\lambda_k)(-1)^i$ and
replacing $x_i$ by $y$ preserves a strictly increasing reference tuple under
these tests: for $i=0$, require $a\leq y<x_1$; for $i=n+1$, require
$x_n<y\leq b$; and for $0<i<n+1$, require $x_{i-1}<y<x_{i+1}$. Thus a
global maximum at an endpoint may replace the corresponding endpoint reference
node, while distinctness and strict ordering are retained. Replace $x_i$ by
$y$ and continue. If no such index exists, return
no-order-preserving-exchange.

**Outputs.** The procedure returns an exact best-approximation certificate,
an exact zero-error candidate, or one of the explicit inconclusive,
zero-level, no-exchange, or budget statuses. It asserts no convergence of the
iterates. Any implementation must ensure each exact solve and oracle call
terminates.
