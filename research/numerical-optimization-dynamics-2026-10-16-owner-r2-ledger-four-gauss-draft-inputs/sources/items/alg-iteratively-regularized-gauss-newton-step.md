---
id: alg-iteratively-regularized-gauss-newton-step
kind: algorithm
title: Iteratively regularized Gauss–Newton step with explicit early stopping
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-bounded-linear-operator
  - def-countable-choice
  - def-natural-numbers
  - def-integer-power
  - lem-hilbert-tikhonov-normal-operator-invertible
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 11, §11.2, equation (115), printed pp. 107–111 / PDF pp. 119–123: the unanchored Levenberg–Marquardt update."
    - title: "Qinian Jin, A convergence analysis of the iteratively regularized Gauss-Newton method under Lipschitz condition"
      url: "https://arxiv.org/pdf/0803.2373"
      locator: "§1, equation (1.4), printed pp. 2–3 / PDF pp. 2–3: standard anchored IRGNM update, cited here as a formulation comparison."
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods, author lecture notes"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Complete 15-page PDF, pp. 2–7: unanchored Levenberg–Marquardt formula (4), and pp. 9–13: the distinct anchored IRGNM formula (14)."
---

## Definition

Assume Countable Choice, as required for the Hilbert-space adjoints in the
normal equation.

Let $X,Y$ be real or complex Hilbert spaces, let $U\subseteq X$ be open, and
let $F:U\to Y$ be continuously Fréchet differentiable. Inputs are
$x_0\in U$, noisy data $y_\delta\in Y$, a bound $\delta\ge0$, a discrepancy
factor $\tau>1$, a finite budget $N\in\mathbb N$, and parameters
$\alpha_0>0$ and $q\in(0,1)$. At iteration $k$, if $x_k\notin U$ return
$(x_k,k,\text{domain-failure})$. Otherwise put $A_k=F'(x_k)$ and
$\alpha_k=\alpha_0q^k$. Before computing an update, if
$\|F(x_k)-y_\delta\|\le\tau\delta$, return
$(x_k,k,\text{discrepancy})$. If $k=N$, return
$(x_k,k,\text{budget-exhausted})$.

For $k<N$, solve the unique Hilbert-space Tikhonov normal equation
$$\bigl(A_k^*A_k+\alpha_k I_X\bigr)s_k=A_k^*(y_\delta-F(x_k))$$
and set $x_{k+1}=x_k+s_k$. The shifted normal operator is invertible by
[[lem-hilbert-tikhonov-normal-operator-invertible]]. If the returned iterate
leaves $U$, the next call returns domain-failure. The procedure asserts no
convergence theorem; its prescribed step is the unanchored Levenberg–Marquardt
form used in the assigned contract.
