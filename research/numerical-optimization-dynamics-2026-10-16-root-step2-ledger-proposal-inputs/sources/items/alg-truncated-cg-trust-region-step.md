---
id: alg-truncated-cg-trust-region-step
kind: algorithm
title: "Truncated conjugate gradients with boundary and negative-curvature exits"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - def-krylov-subspace-of-a-matrix-and-start-vector
justified_by:
  - lem-truncated-cg-iterates-are-krylov-vectors
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7, §7.1, Algorithm 7.2, printed pp. 170–171 / PDF pp. 188–189: CG recurrence, negative-curvature exit, trust-boundary exit, and residual stopping."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 22–24: truncated-CG subproblem solve and the boundary/negative-curvature termination logic."
---

## Definition

Input a model of [[def-trust-region-quadratic-model-and-ratio]], a finite
inner cap $J\in\mathbb N_0$, and a
residual tolerance $\tau_{tol}\ge0$. If $g=0$, return $0$ with status
`stationary`. Otherwise initialize $z_0=0$, $r_0=g$, $d_0=-r_0$, and $j=0$.
For at most $J$ inner iterations:

1. If $\|r_j\|_2\le\tau_{tol}$, take $z_j$ as the candidate and stop.
2. If $d_j=0$, take $z_j$ as the candidate and stop; the final comparison
   below then returns $p_C$ whenever $z_j$ does not give at least its model
   decrease.
3. Put $c_j:=d_j^TBd_j$. If $c_j\le0$, set
   $$t_j:=\frac{-\langle z_j,d_j\rangle+
   \sqrt{\langle z_j,d_j\rangle^2+\|d_j\|_2^2(\Delta^2-\|z_j\|_2^2)}}
   {\|d_j\|_2^2},$$
   take $z_j+t_jd_j$ as the candidate, and stop. This is the nonpositive
   curvature boundary exit.
4. Otherwise put $\alpha_j:=\|r_j\|_2^2/c_j$ and
   $\widehat z:=z_j+\alpha_jd_j$.
   If $\|\widehat z\|_2\ge\Delta$, use the same positive-root formula in
   step 3, take $z_j+t_jd_j$ as the candidate, and stop at the trust boundary.
5. Set $r_{j+1}:=r_j+\alpha_jBd_j$ and $z_{j+1}:=\widehat z$. If
   $\|r_{j+1}\|_2\le\tau_{tol}$, take $z_{j+1}$ as the candidate and stop.
   Otherwise set
   $$\beta_{j+1}:=\frac{\|r_{j+1}\|_2^2}{\|r_j\|_2^2},\qquad
   d_{j+1}:=-r_{j+1}+\beta_{j+1}d_j,$$
   and increase $j$ by one.

If the cap is reached, take the current $z_j$ as the candidate. In
all nonstationary cases compute the Cauchy step $p_C$ and compare model values:
return the candidate if its model value is no greater than $m(p_C)$, and
otherwise return $p_C$. Thus a capped or unhelpful inner recurrence still
returns the selected candidate or Cauchy step.
