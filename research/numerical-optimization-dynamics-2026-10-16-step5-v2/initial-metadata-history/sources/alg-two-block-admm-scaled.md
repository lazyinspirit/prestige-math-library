---
id: alg-two-block-admm-scaled
kind: algorithm
title: "Scaled two-block ADMM with explicit capped-solve statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-proper-closed-convex-function-on-rn
  - def-saddle-point-for-convex-concave-lagrangian
  - def-euclidean-inner-product
  - thm-nearest-point-in-a-nonempty-closed-convex-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3 and Appendix A"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
---

## Definition

Let $f:\mathbb R^n\to(-\infty,+\infty]$ and
$g:\mathbb R^m\to(-\infty,+\infty]$ be proper closed convex, let
$K:\mathbb R^n\to\mathbb R^p$ and $L:\mathbb R^m\to\mathbb R^p$ be linear,
let $c\in\mathbb R^p$, and let $\rho>0$. The primal problem is
$$\min_{x,z}\ f(x)+g(z)\quad\text{subject to }Kx+Lz=c,$$
and its Lagrangian is
$\mathcal L((x,z),y)=f(x)+g(z)+\langle y,Kx+Lz-c\rangle$.
A saddle point means a saddle pair in the sense of
[[def-saddle-point-for-convex-concave-lagrangian]].

Conditional on both block minima being attained, an exact outer sweep with
scaled dual $u^k$ computes, in order,
$$x^{k+1}\in\arg\min_x\left(f(x)+\frac\rho2\|Kx+Lz^k-c+u^k\|_2^2\right),$$
$$z^{k+1}\in\arg\min_z\left(g(z)+\frac\rho2\|Kx^{k+1}+Lz-c+u^k\|_2^2\right),$$
then set $r^{k+1}=Kx^{k+1}+Lz^{k+1}-c$ and
$u^{k+1}=u^k+r^{k+1}$. Report also the unscaled dual
$y^k=\rho u^k$, objective $p_k=f(x^k)+g(z^k)$, and primal residual $r^k$.
If an exact subproblem has multiple minimizers, choose the unique minimum-norm
member of its nonempty closed convex minimizer set; existence and uniqueness of
that tie-break follow from [[thm-nearest-point-in-a-nonempty-closed-convex-set]].

The finite procedure takes the problem data, a current state
$(x^k,z^k,u^k)$, positive integer caps $C_x,C_z$, and deterministic solver
programs $S_x,S_z$ and Boolean certificate-checker programs $V_x,V_z$ with
their complete instructions and data representations. Each program uses
discrete steps that terminate. A solver takes its block objective $H$ and
may halt with **failed** or a candidate-certificate pair $(v,e)$.
The supplied checkers must be sound: $V(H,v,e)=\mathrm{true}$ implies
$H(v)<+\infty$, $H(v)\le H(w)$ for every block vector $w$, and
$\|v\|_2\le\|w\|_2$ for every minimizer $w$ of $H$.
These are admissibility conditions on the input programs, not an automatic
test of arbitrary programs or a promise that an exact certificate is available.
In particular, proper closed convexity alone does not imply block attainment.

Return **invalid-input** for mismatched dimensions, $\rho\le0$, or caps
that are not positive integers. Retain the old state and proceed in order
through the $x$ and $z$ objectives above, using the tentative new $x$ for the
$z$ objective. For block $b\in\{x,z\}$, start $S_b(H)$ and, if it returns
$(v,e)$, run $V_b(H,v,e)$, using at most $C_b$ program steps in total for
the solver and checker. After each step inspect for termination. An explicit
failure, malformed output, or false checker result returns
**$b$-solve-failed** with the unchanged old state. A true checker result
stores $v$ as the tentative block; accept it even on the last allowed step.
If the budget is used without a true result or failure, return
**$b$-cap-exhausted** with the old state. Only after both blocks are accepted,
perform the residual and dual assignments above, commit the new state, and
return **success** with that state, $y^{k+1}$, $p_{k+1}$ and $r^{k+1}$.
A requested finite run repeats this sweep for an input nonnegative integer
number of sweeps and stops at its first nonsuccess status. Failure, including
on a problem without a block minimizer, never advances the outer state.
These statuses give no approximate convergence guarantee.

## Facts & Assumptions

**Given:** The finite-dimensional problem data above, initial $(x^0,z^0,u^0)$, positive integer caps, and supplied solver and sound certificate-checker programs as specified in the Definition.

[A1] The dimensions $n,m,p\in\mathbb N$ may be zero; they match, $f,g$ are proper closed convex, $\rho>0$, caps are positive integers, and the supplied programs satisfy the Definition's step and certificate-soundness requirements.


[F1] [[def-proper-closed-convex-function-on-rn]]: each objective is proper, convex and has closed epigraph.

[F2] [[def-euclidean-inner-product]]: each residual space has its Euclidean inner product and norm.

[F3] [[thm-nearest-point-in-a-nonempty-closed-convex-set]]: in positive-dimensional Euclidean space, every nonempty closed convex minimizer set has a unique point nearest the origin.

[F4] [[def-euclidean-inner-product]]: $\mathbb R^0$ consists of the single zero vector.

## Verification


1.1 For either block write its subproblem objective as $F(v)+Q(v)$, where $F$ is $f$ or $g$ and $Q$ is the finite continuous convex residual quadratic from [F2]. Its epigraph is the inverse image of the closed set $\operatorname{epi}F$ under the continuous map $(v,s)\mapsto(v,s-Q(v))$, so it is closed by [F1]. If its minimum is attained, the minimum value $a$ is finite: properness gives a finite competitor and neither summand takes $-\infty$. Its minimizer set is nonempty and equals $\{v:F(v)+Q(v)\le a\}$, the inverse image of that closed epigraph under $v\mapsto(v,a)$, hence is closed. The sum of the two convex functions is convex; at two minimizers, convexity bounds every segment value by $a$, while minimality bounds it below by $a$. Thus the minimizer set is convex. [A1, F1, F2, given, algebra]

2.1 For either block, if its dimension is zero then [F4] makes its Euclidean space the singleton $\{0\}$, so the nonempty minimizer set in step 1.1 is that singleton and its minimum-norm member is unique. In positive dimension, [F3] gives a unique point nearest the origin in the nonempty closed convex minimizer set. Thus, conditional on attainment, the specified tie-break exists and is unique in every dimension. The finite procedure calls the supplied solver and checker programs with the specified budget and preserves the old state on either failure branch; the existence of the tie-break does not provide a finite evaluator or imply that any cap succeeds. [A1, F3, F4, step 1.1, given, algebra] ∎
