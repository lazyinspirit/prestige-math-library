---
id: alg-landweber-iteration-with-discrepancy-stopping
kind: algorithm
title: Landweber iteration with discrepancy and budget statuses
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-compact-linear-operator
  - def-operator-norm
  - def-natural-numbers
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 5–10: Landweber update, iteration polynomial, singular-value filter, and semiconvergence."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, §§7.1–7.3, printed pp. 66–70 / PDF pp. 78–82: Landweber filter, residual monotonicity, source bounds, and discrepancy stopping."
---

## Definition

Assume Countable Choice, as required for the Hilbert-space adjoint in the
iteration.

Let $X,Y$ be real or complex Hilbert spaces, let $A:X\to Y$ be a nonzero
compact linear operator, and let $\omega$ satisfy
$0<\omega<2/\|A\|^2$. The input consists of data $y_\delta\in Y$, a noise
bound $\delta\ge0$, a discrepancy factor $\tau>1$, and a finite iteration
budget $N\in\mathbb N$. Define the associated infinite mathematical path by
$x_0=0$ and
$$x_{k+1}=x_k+\omega A^*(y_\delta-Ax_k),\qquad k\ge0.$$
For the finite procedure, evaluate only the prefix through index $N$, in
increasing order, and return at its first stopping condition. Values of the
mathematical path after an earlier return remain defined by the recurrence but
need not be computed by an implementation.

For $k=0,\ldots,N$ in increasing order, compute
$r_k=y_\delta-Ax_k$. If $\|r_k\|\le\tau\delta$, return
$(x_k,k,\texttt{discrepancy})$. If $k=N$, return
$(x_k,k,\texttt{budget-exhausted})$. Otherwise set
$$x_{k+1}=x_k+\omega A^*(y_\delta-Ax_k).$$

The procedure uses exact Hilbert-space operations. It reports a finite-budget
failure to cross as inconclusive; that status is not a convergence conclusion.
