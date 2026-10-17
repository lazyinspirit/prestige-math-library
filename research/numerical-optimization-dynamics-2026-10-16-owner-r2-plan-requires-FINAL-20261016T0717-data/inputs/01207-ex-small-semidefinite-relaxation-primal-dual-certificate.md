---
id: ex-small-semidefinite-relaxation-primal-dual-certificate
kind: example
title: "A two-variable semidefinite relaxation with a matching dual certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-conic-optimization-primal-dual-models
  - lem-psd-cone-self-dual-logdet-barrier
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
proof_strategy: direct
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 4 §4.6 and Chapter 11 §§11.6.1–11.6.2, semidefinite programming and its barrier."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full §16.3, semidefinite programming."
---

## Example

The binary problem $\max\{u_1u_2:u_i\in\{-1,1\}\}$ lifts to $\max X_{12}$ with $X=uu^T$, $X_{11}=X_{22}=1$, and $X\succeq0$. Dropping $\operatorname{rank}X=1$ gives a two-by-two SDP relaxation.

## Facts & Assumptions

**Given:** The SDP relaxation and the trace-inner-product primal-dual convention of [[def-conic-optimization-primal-dual-models]].

[F1] $X\succeq0$ iff $v^TXv\ge0$ for every $v$, and the positive-semidefinite cone is self-dual ([[lem-psd-cone-self-dual-logdet-barrier]]).

## Verification

1.1 Write the minimization objective as $C\bullet X=-X_{12}$ with $C=\begin{pmatrix}0&-1/2\\-1/2&0\end{pmatrix}$. For any feasible $X$, [F1] applied to $e_1-e_2$ gives $2-2X_{12}\ge0$, hence $-X_{12}\ge-1$. The feasible matrix $X_*=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ attains $-1$. [F1, given, algebra]

2.1 The dual multiplier $y=(-1/2,-1/2)$ and slack $S=\tfrac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ satisfy $v^TSv=\tfrac12(v_1-v_2)^2\ge0$ for every $v$, hence $S\succeq0$. Direct addition gives $\operatorname{diag}(y)+S=C$. Their dual value is $y_1+y_2=-1$, and $X_*\bullet S=0$. Thus the displayed primal and dual values match and certify the relaxation optimum. [F1, step 1.1, algebra] ∎
