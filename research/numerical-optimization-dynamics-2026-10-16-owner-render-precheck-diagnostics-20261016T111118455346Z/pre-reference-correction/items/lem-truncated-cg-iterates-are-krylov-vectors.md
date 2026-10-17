---
id: lem-truncated-cg-iterates-are-krylov-vectors
kind: lemma
title: "Truncated-CG iterates are feasible and lie in generated Krylov subspaces"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-truncated-cg-trust-region-step
  - def-krylov-subspace-of-a-matrix-and-start-vector
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7, §7.1, Algorithm 7.2, printed pp. 170–171 / PDF pp. 188–189: truncated-CG iterates and search directions."
---

## Statement

For the interior recurrence of [[alg-truncated-cg-trust-region-step]], before
it exits at the boundary, nonpositive curvature, residual tolerance, or inner
cap, its vectors satisfy
$$z_j\in K_j(B,-g),\qquad r_j,d_j\in K_{j+1}(B,-g),$$
where $K_j$ is the Krylov subspace of
[[def-krylov-subspace-of-a-matrix-and-start-vector]]. Every boundary exit
uses the unique positive root of the displayed formula, and the algorithm
returns a feasible vector.

## Facts & Assumptions

**Given:** A quadratic trust-region model with radius $\Delta>0$, nonzero
$g$, and the truncated-CG procedure.

[F1] [[alg-truncated-cg-trust-region-step]]: $z_0=0$, $r_0=g$, $d_0=-r_0$;
an interior update is
$z_{j+1}=z_j+\alpha_jd_j$,
$r_{j+1}=r_j+\alpha_jBd_j$, and
$d_{j+1}=-r_{j+1}+\beta_{j+1}d_j$. A boundary formula is used only after
the zero-direction guard has passed, and an interior update is made only
when $\|\widehat z\|_2<\Delta$.

[F2] [[def-krylov-subspace-of-a-matrix-and-start-vector]]:
$K_m(B,-g)=\operatorname{span}\{-g,B(-g),\ldots,B^{m-1}(-g)\}$,
$K_0=\{0\}$, and multiplication by $B$ sends $K_m$ into $K_{m+1}$.

[F3] [[alg-trust-region-cauchy-step]]: for $g\ne0$, its formula gives
$0\le\tau\le\Delta/\|g\|_2$ and $p_C=-\tau g$.

[F4] [[def-trust-region-quadratic-model-and-ratio]]: feasible vectors satisfy
$\|p\|_2\le\Delta$, where $\Delta>0$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Initially, $z_0=0\in K_0(B,-g)$, while $r_0=g\in K_1(B,-g)$ and $d_0=-g\in K_1(B,-g)$. Also $\|z_0\|_2=0<\Delta$. [given, F1, F2, F4]

2.1 Suppose the algorithm makes an interior update at index $j$. By [F2], $Bd_j\in K_{j+2}$, while $z_j\in K_j\subseteq K_{j+1}$ and $r_j,d_j\in K_{j+1}$. The first two recurrences in [F1] therefore give $z_{j+1}\in K_{j+1}$ and $r_{j+1}\in K_{j+2}$. The last recurrence gives $d_{j+1}\in K_{j+2}$. The update is made only when $\|\widehat z\|_2<\Delta$, so $z_{j+1}$ remains strictly inside the ball. [step 1.1, F1, F2, F4, induction, algebra]

3.1 At a boundary exit, put $z=z_j$, $d=d_j$, $a=\|d\|_2^2$, $b=\langle z,d\rangle$, and $c=\|z\|_2^2-\Delta^2$. Steps 1.1–1.2 show $\|z\|_2<\Delta$, and the zero-direction guard in [F1] gives $d\ne0$, so $a>0$ and $c<0$. The boundary equation is $$a t^2+2bt+c=0.$$ Its discriminant is $4(b^2-ac)>4b^2$, and the product of its roots is $c/a<0$. Thus it has exactly one positive root, namely $$t=\frac{-b+\sqrt{b^2+a(\Delta^2-\|z\|_2^2)}}{a},$$ which is the algorithm's formula. In the positive-curvature exit, the unconstrained point $\widehat z=z+\alpha_jd$ satisfies $\|\widehat z\|_2\ge\Delta$, so the quadratic is nonnegative at $\alpha_j$. It is negative on $[0,t_+)$, where $t_+$ is its unique positive root; hence $t_+\le\alpha_j$. In either boundary branch, $\|z+t_+d\|_2=\Delta$. [given, F1, F4, step 1.1, step 2.1, algebra]

4.1 Before a non-boundary stop, the current recurrence vector is strictly inside the ball by steps 1.1–1.2. Thus residual-tolerance and zero-direction stops, and the inner-cap stop, use a feasible current vector. A boundary stop uses a vector of norm $\Delta$ by step 3.1. The stationary branch returns zero, and the final comparison returns either its feasible candidate or the Cauchy step, which is feasible because [F3] gives $\|p_C\|_2=\tau\|g\|_2\le\Delta$. Hence every returned vector is feasible. [step 1.1, step 2.1, step 3.1, F1, F3, F4, cases]

5.1 Induction on the interior updates proves the claimed Krylov memberships. The base case is step 1.1, and the induction step is step 2.1. [step 1.1, step 2.1, induction] ∎

