---
id: alg-anchored-irgnm-with-discrepancy-stopping
kind: algorithm
title: "Anchored iteratively regularized Gauss-Newton with finite discrepancy stopping"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-natural-numbers
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - def-bounded-linear-operator
  - def-frechet-derivative-between-banach-spaces
  - lem-hilbert-tikhonov-normal-operator-invertible
  - def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods (full lecture); anchored formulation/source-filter context, local constants proved here"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Full 15-page lecture read; pp. 9–13 distinguish anchored IRGNM and spectral source arguments. The exact fixed-reference theorem here is locally derived, not attributed to the slide theorem."
    - title: "Christian Clason, Regularization of Inverse Problems (anchored formulation and spectral-error proof context)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Section 11.3, printed pp. 112–116, full local anchored proof read; that source proves an a-priori theorem, not the direct-discrepancy result authored here."
---

## Definition

Assume Countable Choice. Let $X,Y$ be Hilbert spaces over the same field
$\mathbb F\in\{\mathbb R,\mathbb C\}$, let $U\subseteq X$ be open, and let
$F:U\to Y$ be continuously Fréchet differentiable over $\mathbb F$: for each
$x\in U$, $F'(x)$ is bounded $\mathbb F$-linear, the map $x\mapsto F'(x)$ is
operator-norm continuous, and
$$\lim_{\substack{h\to0,\ h\ne0\\x+h\in U}} \frac{\|F(x+h)-F(x)-F'(x)h\|}{\|h\|}=0,$$
where $h$ ranges over increments in $\mathbb F$. In the complex case the
derivative is complex-linear and the limit uses complex increments.
Inputs are anchor and
initial point $x_0\in U$, datum $y_\delta$, noise bound $\delta\ge0$,
discrepancy factor $\tau>1$, finite update cap $N\in\mathbb N_0$,
$\alpha_0>0$ and $q\in(0,1)$. For $k=0,\ldots,N$, first check $x_k\in U$;
otherwise return $(x_k,k,\texttt{domain-failure})$. The output of every return
is a tuple $(x_k,k,\text{status})$. Use an exact-call interface with these
outcomes: an evaluation call returns either $\texttt{ok}(v_k)$ with the exact
value $v_k=F(x_k)$ or $\texttt{failure}$; a normal-solve call returns either
$\texttt{ok}(s_k)$ with the exact solution of the displayed equation or
$\texttt{unverified}$. The interface never returns an incorrect value. If the
evaluation call returns $\texttt{failure}$, return
$(x_k,k,\texttt{evaluation-failure})$. If the evaluation returns
$\texttt{ok}(v_k)$ and $\|v_k-y_\delta\|\le\tau\delta$, return
$(x_k,k,\texttt{discrepancy})$. If $k=N$, return
$(x_k,k,\texttt{budget-exhausted})$. Otherwise set
$A_k=F'(x_k)$, $\alpha_k=\alpha_0q^k$, and call the normal solver on
$$(A_k^*A_k+\alpha_k I)s_k=A_k^*(y_\delta-v_k)+\alpha_k(x_0-x_k),$$
whose exact solution exists uniquely by [[lem-hilbert-tikhonov-normal-operator-invertible]]. If the solve call returns
$\texttt{unverified}$, return $(x_k,k,\texttt{solve-unverified})$; otherwise
set $x_{k+1}=x_k+s_k$. The mathematical evaluation and solve succeed because
$F$ is defined on $U$ and the shifted normal equation has a unique solution;
the failure outcomes record only a finite implementation's inability to
return the exact value or certify the exact solve. No success or convergence
claim is attached to these failure statuses.

The mathematical extended recurrence means the same exact updates with the discrepancy and finite-cap tests suppressed, for as long as the states lie in $U$. It is used only for comparison in proofs. A finite actual run follows its prefix and stops at its first test crossing. This anchored update is distinct from the retained unanchored Levenberg-Marquardt step; its extra term is $\alpha_k(x_0-x_k)$.
