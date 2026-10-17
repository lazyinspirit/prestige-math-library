---
id: alg-discrete-l-curve-parameter-choice
kind: algorithm
title: Discrete maximum-curvature L-curve parameter selection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 0
deps:
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
aliases: []
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 10–14 define the log-log L-curve and its curvature corner.
---

## Definition

Input a real matrix $A\in\mathbb R^{m\times n}$, data $b\in\mathbb R^m$,
and a strictly increasing finite grid $0<\lambda_1<\cdots<\lambda_q$ with
$q\ge3$. For each grid point, compute the unique Tikhonov minimizer
$$x_j=(A^TA+\lambda_j I)^{-1}A^Tb,$$
and the residual $r_j=\|Ax_j-b\|$ and solution norm $s_j=\|x_j\|$.
Discard any index with $r_j=0$ or $s_j=0$. If fewer than three indices
remain, return failure status `insufficient-valid-points`.

For consecutive retained indices $i_0<i_1<i_2$, set
$p_k=(\log r_{i_k},\log s_{i_k})\in\mathbb R^2$, $u=p_1-p_0$,
and $v=p_2-p_1$. Define their discrete curvature by
$$\kappa=\begin{cases} \dfrac{2|\det(u,v)|}{\|u\|\,\|v\|\,\|u+v\|},&\|u\|\,\|v\|\,\|u+v\|>0,\\ 0,&\text{otherwise}. \end{cases}$$
Assign this curvature to the middle retained index. Among the resulting
$q'-2$ values, return the original grid parameter whose curvature is largest;
if there is a tie, return the tied parameter with the smallest original index.
No uniform-grid spacing is assumed in log parameter. This is a finite-grid
heuristic and carries no universal optimality claim.

The output is either a selected $\lambda_j$ with its discrete curvature and
index, or the stated failure status. Every step uses a finite loop over the
input grid.

