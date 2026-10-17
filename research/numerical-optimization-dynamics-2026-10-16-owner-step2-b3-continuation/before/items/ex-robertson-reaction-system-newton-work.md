---
id: ex-robertson-reaction-system-newton-work
title: "One Robertson reaction step: Newton work and the chord reuse tradeoff"
kind: example
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-implicit-stiff-time-stepper-with-consistent-starts
  - alg-newton-chord-implicit-residual-with-factorization-reuse
  - def-implicit-residual-and-algebraic-error-units
  - def-euclidean-inner-product
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
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
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §4.5.2 Newton for nonlinear systems"
      url: "https://fncbook.com/newtonsys/"
      locator: "§4.5.2: Newton corrections for nonlinear systems and finite residual monitoring."
    - title: "University of Saskatchewan ODE lecture notes, Chapter 1: Getting Started"
      url: "https://www.cs.usask.ca/~spiteri/M314/notes/GST/chapter1.pdf"
      locator: "PDF pp. 51–52, Robertson’s problem (1966): system, initial state, and conserved sum."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 21–25: modified Newton and Jacobian factorization reuse."
---

## Example

The Robertson stiff reaction field is
$$f(y)=\begin{pmatrix}-0.04y_1+10^4y_2y_3\\0.04y_1-10^4y_2y_3-3\cdot10^7y_2^2\\3\cdot10^7y_2^2\end{pmatrix},\qquad y_0=(1,0,0)^T.$$
For one backward Euler step with $h=10^{-3}$, compare exact-Jacobian Newton (budget 12) and chord iteration with the Jacobian frozen at $y_0$ (budget 8, refresh period 8). Both use the Euclidean residual norm and tolerance $10^{-12}$ with partial-pivoting binary64 Gaussian elimination. The record below is finite-precision work evidence; it is not a general convergence or forward-error theorem.

## Numerical record

The residual is $G(y)=y-y_0-hf(y)$. The Jacobian used is
$$J_G(y)=I-hDf(y),\qquad Df(y)=\begin{pmatrix}-0.04&10^4y_3&10^4y_2\\0.04&-10^4y_3-6\cdot10^7y_2&-10^4y_2\\0&6\cdot10^7y_2&0\end{pmatrix}.$$
Also $\sum_i f_i(y)=0$ identically, so every exact root preserves $\sum_i y_i=1$ when the input sum is one.

With binary64 arithmetic and partial pivoting, Newton's residual norms at correction counts $0,1,2,3,4,5$ are respectively
$$5.65685425\cdot10^{-5},\ 6.78768207\cdot10^{-5},\ 8.45562545\cdot10^{-6},\ 2.32643360\cdot10^{-7},\ 1.97215675\cdot10^{-10},\ 1.43041174\cdot10^{-16}.$$
It returns `root` after five corrections, with five Jacobian assemblies/factorizations and five linear solves. Its last iterate is approximately
$$(0.9999600054781065,\ 2.346970720497856\cdot10^{-5},\ 1.652481468852211\cdot10^{-5})^T$$
The component sum is one to binary64 rounding.

For chord iteration, residual norms at correction counts $0$ through $8$ are
$$5.65685425\cdot10^{-5},\ 6.78768207\cdot10^{-5},\ 6.51657654\cdot10^{-5},\ 5.88221242\cdot10^{-5},\ 6.10108196\cdot10^{-5},\ 6.61093086\cdot10^{-5},\ 6.44848425\cdot10^{-5},\ 6.06814747\cdot10^{-5},\ 6.19977506\cdot10^{-5}.$$
It returns `iteration-budget-exhausted` after eight corrections, with one Jacobian assembly/factorization and eight linear solves. The chord iterates include negative $y_2$ values; no positivity or chemistry invariant is enforced by these unconstrained corrections.

## Facts & Assumptions

**Given:** The field and initial state in `## Example`, one backward Euler step with $h=10^{-3}$, $y^{(0)}=y_0$, tolerance $10^{-12}$, the stated correction budgets and refresh periods, and binary64 partial-pivoting elimination.

[F1] [[def-implicit-residual-and-algebraic-error-units]]: an implicit update residual is the equation's left side minus its right side, in update units.

[F2] [[alg-newton-chord-implicit-residual-with-factorization-reuse]]: updated Newton refreshes the Jacobian every correction; chord mode retains its factorization to the scheduled refresh; a finite solve reports residual and budget status without asserting forward accuracy.

[F3] [[alg-implicit-stiff-time-stepper-with-consistent-starts]]: record Jacobian refreshes, factorizations, solves, residuals, and finite solver status; the work record is not an accuracy theorem.

[F4] [[def-c-one-map-and-local-inverse]]: a $C^1$ map is totally differentiable at every point and its derivative-matrix entries are continuous.

[F5] [[def-jacobian-matrix-and-gradient]]: the Jacobian matrix consists of the first partial derivatives of the component functions.

[F6] [[def-euclidean-inner-product]]: $\|v\|_2=\sqrt{\sum_i v_i^2}$.

## Verification

1.1 Differentiating the polynomial components gives the displayed $Df$ by [F5]. For an increment $v$, the remainder $f(y+v)-f(y)-Df(y)v$ is $(10^4v_2v_3,-10^4v_2v_3-3\cdot10^7v_2^2,3\cdot10^7v_2^2)^T$, whose Euclidean norm is bounded by $C\|v\|_2^2$; hence $Df(y)$ is the total derivative and its affine entries are continuous. Thus $J_G=I-hDf$; by [F4], both $f$ and $G(y)=y-y_0-hf(y)$ are $C^1$, as required by [F2]. Summing the components of $f$ cancels all terms, so a root satisfies $\sum_i(y_i-y_{0,i})=0$ and preserves total concentration. [F1, F2, F4, F5, algebra]

1.2 At the start, $f(y_0)=(-0.04,0.04,0)^T$, so $G(y_0)=(0.00004,-0.00004,0)^T$ and $\|G(y_0)\|_2=\sqrt{2}(4\cdot10^{-5})=5.65685425\cdot10^{-5}>10^{-12}$ by [F6]. Thus neither mode returns at count zero. [F1, F6, algebra]

2.1 Applying the stated Newton correction formula with the displayed Jacobian and binary64 partial-pivoting elimination gives the Newton residual sequence in the Numerical record. It first falls below $10^{-12}$ at count five; the residuals at counts zero through four exceed the tolerance. Since the budget is 12, the algorithm returns `root` after five corrections. Each correction refreshes and factors one Jacobian, then solves once, giving five assemblies/factorizations and five solves. [F2, F3, step 1.2, algebra]

3.1 With chord refresh period eight, [F2] refreshes at count zero and retains that factorization for corrections zero through seven. The residuals at counts zero through eight all exceed $10^{-12}$, and the budget is eight, so the algorithm returns `iteration-budget-exhausted`. This uses one assembly/factorization and eight linear solves. The mode is unconstrained, so negative intermediate second components do not violate its domain $\mathbb R^3$. [F2, F3, step 1.2, algebra] ∎
