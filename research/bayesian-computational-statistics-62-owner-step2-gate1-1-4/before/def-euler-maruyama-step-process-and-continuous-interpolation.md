---
id: def-euler-maruyama-step-process-and-continuous-interpolation
kind: definition
title: "Euler–Maruyama step process and continuous interpolation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-euler-maruyama
  - def-axiom-of-choice
  - def-d-dimensional-brownian-motion
  - def-elementary-predictable-brownian-integrand
  - def-ito-integral-for-square-integrable-predictable-processes
  - def-progressively-measurable-and-predictable-process
  - lem-square-integrable-predictable-step-ito-integral-is-finite-sum
justified_by:
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §1 and §2"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
---

## Definition

Use the data and grid of [[alg-euler-maruyama]], and let
$Y_0,\ldots,Y_N$ be its recursion. The left-endpoint map is
$$ \eta_h(t)=\max\{t_k:t_k\le t\},\qquad 0\le t\le T. $$
The right-continuous step process is
$$ \bar Y_t=Y_k\quad(t_k\le t<t_{k+1}),\qquad \bar Y_T=Y_N. $$
The continuous interpolation is the pathwise process
$$ Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})\quad(t_k\le t\le t_{k+1}). $$
At a shared grid endpoint the formulas agree because the recursion gives
$Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)(W_{t_{k+1}}-W_{t_k})$.
In particular $Y_{t_k}=Y_k$ for every $k$, including $Y_T=Y_N$.

For stochastic integration, define the predictable left-endpoint version by
$\bar Y^-_0=Y_0$ and $\bar Y^-_s=Y_k$ on $(t_k,t_{k+1}]$, and set
$\eta_h^-(0)=0$ and $\eta_h^-(s)=t_k$ on $(t_k,t_{k+1}]$. Its coefficient
integrands use the same fixed left endpoints. When the recursion is adapted,
each coordinate of $\bar Y^-$ and each coefficient composition is a
predictable finite-step process: on $(t_k,t_{k+1}]$ its value is
$\mathcal F_{t_k}$-measurable. These coefficients need not be bounded, so the
integrands need not be elementary in the bounded-coefficient sense of
[[def-elementary-predictable-brownian-integrand]]. Values at the finitely many
grid points do not change either integral. Once square integrability is
established, [[lem-square-integrable-predictable-step-ito-integral-is-finite-sum]]
identifies each finite-coordinate Itô integral of
[[def-ito-integral-for-square-integrable-predictable-processes]] with its
finite-sum version, giving the equivalent formula
$$ Y_t=X_0+\int_0^t b(\eta_h^-(s),\bar Y^-_s)\,ds+\sum_{j=1}^m\int_0^t \sigma_{\cdot j}(\eta_h^-(s),\bar Y^-_s)\,dW_s^j. $$
where $\eta_h^-(s)=t_k$ on $(t_k,t_{k+1}]$ and
$\sigma_{\cdot j}$ denotes column $j$ of the matrix.

The justified-by theorem
[[thm-euler-maruyama-uniform-moment-and-increment-bounds]] establishes the
required integrability and well-definedness under the stated coefficient and
initial-moment conditions.

## Remarks

The distinction between $\bar Y$ and $\bar Y^-$ is only at deterministic
grid times. The first records the value used at each time by the left-endpoint
convention; the second is the predictable representative used by the
stochastic integral.
