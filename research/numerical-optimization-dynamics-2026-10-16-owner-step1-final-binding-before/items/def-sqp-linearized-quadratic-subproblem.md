---
id: def-sqp-linearized-quadratic-subproblem
kind: definition
title: "The linearized quadratic subproblem in sequential quadratic programming"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-inequality-constrained-program-and-kkt-geometry
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.1, printed pp. 528–532 / PDF pp. 546–550; equality and inequality SQP subproblems and active-set identification."
    - title: "Ralf Herzog, Algorithms and Preconditioning in PDE-Constrained Optimization, lecture notes"
      url: "https://citeseerx.ist.psu.edu/document?doi=f681cd3f5021097b647a085b869853e713894a51&repid=rep1&type=pdf"
      locator: "Chapter 1 §§2.2.2–2.2.3 and 3.1.1–3.1.2, printed pp. 14–21 / PDF pp. 14–21; SQP KKT models and active-set handling of inequality constraints."
---

## Definition

Use the smooth nonlinear program convention of
[[def-inequality-constrained-program-and-kkt-geometry]]: minimize a $C^2$
objective $f:U\to\mathbb R$ on an open $U\subseteq\mathbb R^n$, subject to
$h(x)=0$ and componentwise $g(x)\le0$. Fix a current point $x\in U$ and a
symmetric positive-definite matrix $B\in\mathbb R^{n\times n}$. The
**SQP quadratic subproblem** is
$$\min_{p\in\mathbb R^n}\quad \nabla f(x)^Tp+\tfrac12p^TBp \quad\text{subject to}\quad h(x)+Dh(x)p=0,\quad g(x)+Dg(x)p\le0.$$
The variable $p$ is the proposed displacement. Its feasible set is the
polyhedron defined by the displayed affine constraints. A constraint index
$i$ is **active at $p$** when $g_i(x)+Dg_i(x)p=0$. For equality multiplier
$\nu$ and inequality multipliers $\lambda\ge0$, a **KKT tuple** for the
subproblem satisfies primal feasibility,
$$Bp+\nabla f(x)+Dh(x)^T\nu+Dg(x)^T\lambda=0, \qquad \lambda_i\bigl(g_i(x)+Dg_i(x)p\bigr)=0\quad(1\le i\le m).$$
Rows of $Dh(x)$ and active rows of $Dg(x)$ are stacked in that order in the
subproblem KKT matrix $\begin{bmatrix}B&A^T\\A&0\end{bmatrix}$.

All inequality signs and multiplier signs here agree with the source program:
$g_i\le0$ and $\lambda_i\ge0$.

## Facts & Assumptions

**Given:** A $C^2$ program, a current point $x$, and a symmetric positive-
definite model matrix $B$.

[F1] [[def-inequality-constrained-program-and-kkt-geometry]] fixes the
program's equality and componentwise $g_i\le0$ inequality convention, with
Lagrangian $f+\nu^Th+\lambda^Tg$ and $\lambda\ge0$.

[A1] The model matrix $B$ is symmetric positive definite.

## Proof

1.1 Differentiability at $x$ gives the affine first-order models $h(x)+Dh(x)p$ and $g(x)+Dg(x)p$; the positive-definite quadratic model is finite for every $p\in\mathbb R^n$. Thus the displayed feasible set is a well-defined polyhedron, possibly empty. [given, A1, F1, algebra]

2.1 For an active affine inequality, the multiplier convention in the Lagrangian contributes $Dg_i(x)^T\lambda_i$ to stationarity, while complementarity is $\lambda_i(g_i(x)+Dg_i(x)p)=0$. Hence the stated KKT tuple uses the same sign convention as [F1]. [F1, algebra] ∎
