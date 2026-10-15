---
id: alg-euler-maruyama-autonomous
kind: algorithm
title: "Autonomous Euler–Maruyama scheme and interpolation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-d-dimensional-brownian-motion
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Definition

Assume AC. Fix finite integers $d,m\ge1$, $T>0$, and $N\ge1$ such that
$h=T/N\le1$. Work on a filtered probability space whose filtration is
right-continuous and contains every $P$-null subset of $\mathcal F$ in
$\mathcal F_0$. Let $W$ be an adapted standard
$m$-dimensional Brownian motion whose increments after time $s$ are
independent of $\mathcal F_s$. Let $X_0$ be finite, $\mathcal F_0$-measurable,
and independent of $\sigma(W_t-W_0:0\le t\le T)$.
Let $f:\mathbb R^d\to\mathbb R^d$ and
$g:\mathbb R^d\to\mathbb R^{d\times m}$ be $C^1$. Assume finite constants
$\mu,c,D\ge0$ and an integer $q\ge1$ satisfy, for all $x,y\in\mathbb R^d$,
$$ \langle x-y,f(x)-f(y)\rangle\le\mu|x-y|^2,\qquad \|g(x)-g(y)\|_F^2\le c|x-y|^2, $$
$$ |f(x)-f(y)|^2\le D(1+|x|^q+|y|^q)|x-y|^2. $$
Here $|\cdot|$ is the Euclidean norm and $\|\cdot\|_F$ is the Frobenius
norm.

Set $t_k=kh$ and construct the grid approximation recursively by
$$ Y_0=X_0,\qquad Y_{k+1}=Y_k+f(Y_k)h+g(Y_k)(W_{t_{k+1}}-W_{t_k}),\quad 0\le k<N. $$
The output also includes the left-endpoint step process
$$ \bar Y_t=Y_k\quad(t_k\le t<t_{k+1}),\qquad \bar Y_T=Y_N, $$
and the continuous interpolation
$$ Y_t=Y_k+f(Y_k)(t-t_k)+g(Y_k)(W_t-W_{t_k})\quad(t_k\le t\le t_{k+1}). $$
The recursion makes the two interpolation formulas agree at every shared
endpoint. The finite recursion is defined pathwise: $C^1$ coefficients are
finite-valued, each $Y_k$ is finite almost surely by induction, and Brownian
paths are continuous. This algorithm defines no moment or convergence claim.
