---
id: thm-pdhg-ergodic-saddle-gap-o1k
kind: theorem
title: "PDHG has an O(1/k) ergodic saddle-gap bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - alg-pdhg-primal-dual-hybrid-gradient
  - lem-pdhg-one-step-gap-telescope
  - def-saddle-point-for-convex-concave-lagrangian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, Theorem 1(b), §3.1"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
    - title: "Laurent Vandenberghe, UCLA EE236C Lecture Notes: Douglas–Rachford Splitting, §§4–5"
      url: "https://www.seas.ucla.edu/~vandenbe/236C/lectures/dr.pdf"
---

## Statement

Assume the hypotheses of [[alg-pdhg-primal-dual-hybrid-gradient]] and that
$\Phi(x,y)=f(x)+\langle Kx,y\rangle-g^*(y)$ has a saddle point
$(x_*,y_*)$ in the sense of
[[def-saddle-point-for-convex-concave-lagrangian]]. For $N\ge1$ define
$$\bar x_N=\frac1N\sum_{k=0}^{N-1}x^{k+1},\qquad \bar y_N=\frac1N\sum_{k=0}^{N-1}y^{k+1}.$$
For every $x\in\operatorname{dom}f$, $y\in\operatorname{dom}g^*$,
$$\Phi(\bar x_N,y)-\Phi(x,\bar y_N) \le\frac1N\left(\frac{\|x-x^0\|_2^2}{2\tau} +\frac{\|y-y^0\|_2^2}{2\sigma}\right).$$
In particular, the saddle gap
$\Phi(\bar x_N,y_*)-\Phi(x_*,\bar y_N)$ is nonnegative and obeys this bound
with $(x,y)=(x_*,y_*)$. On bounded test sets the displayed upper bound is
$O(1/N)$. This is an ergodic gap statement; it is not a pointwise objective
bound and does not assert pointwise iterate convergence.

## Facts & Assumptions

**Given:** The exact PDHG recurrence, positive steps with $\tau\sigma\|K\|_2^2<1$, and a saddle point.

[A1] The exact recurrence, strict step condition, and a saddle point hold.


[F1] [[alg-pdhg-primal-dual-hybrid-gradient]]: $f,g^*$ are proper closed convex and the iterates follow the exact recurrence.

[F2] [[lem-pdhg-one-step-gap-telescope]]: for every test pair and $N\ge1$, the sum of the first $N$ saddle differences is at most the initial weighted squared distance.

[F3] [[def-saddle-point-for-convex-concave-lagrangian]]: $\Phi(x_*,y)\le\Phi(x_*,y_*)\le\Phi(x,y_*)$ for all $x,y$.

## Proof


1.1 Every exact proximal output lies in the effective domain of its function. Convexity therefore puts $\bar x_N$ in $\operatorname{dom}f$ and $\bar y_N$ in $\operatorname{dom}g^*$. [A1, F1, given, algebra]

2.1 By convexity in [F1], $f(\bar x_N)\le N^{-1}\sum_{k<N}f(x^{k+1})$ and $g^*(\bar y_N)\le N^{-1}\sum_{k<N}g^*(y^{k+1})$; linearity gives $K\bar x_N=N^{-1}\sum Kx^{k+1}$. Hence $$\Phi(\bar x_N,y)-\Phi(x,\bar y_N) \le\frac1N\sum_{k=0}^{N-1}\bigl(\Phi(x^{k+1},y)-\Phi(x,y^{k+1})\bigr).$$ Apply [F2] and divide by $N$ to get the bound. [A1, F1, F2, step 1.1, algebra]

3.1 By the saddle inequalities [F3], $\Phi(\bar x_N,y_*)\ge\Phi(x_*,y_*)$ and $\Phi(x_*,\bar y_N)\le\Phi(x_*,y_*)$, so their difference is nonnegative. Step 2.1 at $(x_*,y_*)$ supplies the same $O(1/N)$ upper bound. The ergodic estimate makes no claim about a single nonaveraged objective difference or pointwise iterate convergence. [A1, F3, step 2.1] ∎
