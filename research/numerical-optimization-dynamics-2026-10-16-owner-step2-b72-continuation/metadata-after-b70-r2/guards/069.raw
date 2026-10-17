---
id: lem-positive-definite-model-has-unique-newton-step
kind: lemma
title: "Positive-definite Newton and dogleg steps are well-defined"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-trust-region-quadratic-model-and-ratio
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-definite-and-indefinite-hessian-quadratic-forms
  - def-invertible-euclidean-linear-map
  - alg-dogleg-trust-region-step
  - alg-trust-region-cauchy-step
  - thm-intermediate-value
  - thm-algebra-of-continuous-functions
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
      locator: "Chapter 4, §4.1, printed pp. 73–76 / PDF pp. 93–96: positive-definite model, unique unconstrained Newton minimizer, and dogleg boundary intersection."
---

## Statement

Let $B$ be the real symmetric positive-definite model matrix of
[[def-trust-region-quadratic-model-and-ratio]], with $n\ge1$, $g\in\mathbb R^n$,
and radius $\Delta>0$. There is a unique $p_N\in\mathbb R^n$ satisfying
$Bp_N=-g$. The [[alg-dogleg-trust-region-step]] procedure is well-defined on
this input and returns a feasible vector. If its boundary-intersection branch
is taken, the displayed scalar formula is the unique root $t\in(0,1)$ of
$\|p_C+t(p_N-p_C)\|_2^2=\Delta^2$. On a nonstationary input the
procedure performs one linear solve and, only on its boundary branch, one
scalar-root computation; it has no iteration loop.

## Facts & Assumptions

**Given:** A positive-definite symmetric matrix $B$, vector $g$, radius
$\Delta>0$, and the definitions of the Newton and dogleg procedures.

[F1] [[def-definite-and-indefinite-hessian-quadratic-forms]]:
positive definiteness means $v^TBv>0$ for every nonzero $v$.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]:
a real symmetric matrix has an orthonormal eigenbasis.

[F3] [[def-invertible-euclidean-linear-map]]:
an invertible Euclidean linear map has a two-sided linear inverse.

[F4] [[alg-dogleg-trust-region-step]]: after the stationary check, the
procedure computes the Cauchy step, solves $Bp_N=-g$, returns $p_N$ if it is
feasible, returns $p_C$ if it is on the boundary, and otherwise uses the
displayed quadratic-root formula before comparing the two model values.

[F5] [[alg-trust-region-cauchy-step]]: for $g\ne0$, the Cauchy parameter is
nonnegative and at most $\Delta/\|g\|_2$, so $\|p_C\|_2\le\Delta$.

[F6] [[thm-algebra-of-continuous-functions]]: every real polynomial is
continuous.

[F7] [[thm-intermediate-value]]: a continuous real-valued function on a
closed interval takes every value between its endpoint values.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], write $B=U\operatorname{diag}(\mu_1,\ldots,\mu_n)U^T$ with $U$
orthogonal. Positive definiteness [F1] gives $\mu_i>0$ for every unit
eigenvector. Thus $C=U\operatorname{diag}(1/\mu_1,\ldots,1/\mu_n)U^T$
satisfies $CB=BC=I$ and is a linear inverse by [F3]. Hence
$p_N=-Cg$ solves $Bp_N=-g$. If $p$ is another solution, then
$B(p-p_N)=0$, and applying $C$ gives $p=p_N$. [given, F1, F2, F3, algebra]

1.2 If $g=0$, [F4] returns $p=0$, which is feasible. Suppose $g\ne0$.
The Cauchy step exists by its explicit formula and is feasible by [F5], and
step 1.1 gives the unique Newton step. If $\|p_N\|_2\le\Delta$, the
algorithm returns the feasible $p_N$. If $\|p_N\|_2>\Delta$ but
$\|p_C\|_2=\Delta$, it returns the feasible $p_C$. [given, F4, F5, step 1.1,
cases]

2.1 In the remaining branch, $\|p_N\|_2>\Delta$ and $\|p_C\|_2<\Delta$.
Put $d=p_N-p_C$ and
$q(t)=\|p_C+td\|_2^2-\Delta^2$. Then $q$ is a real quadratic polynomial,
$q(0)<0$, and $q(1)>0$. By [F6] it is continuous, and [F7] gives a root
$t\in(0,1)$. Its coefficients are
$a=\|d\|_2^2>0$, $b=2\langle p_C,d\rangle$, and
$c=\|p_C\|_2^2-\Delta^2<0$. Thus its discriminant
$b^2-4ac>b^2$, and the two roots have product $c/a<0$. Exactly one root is
positive, and the quadratic formula identifies it as
$(-b+\sqrt{b^2-4ac})/(2a)$. The root in $(0,1)$ is therefore exactly the
algorithm's scalar $t$. The vector $p_D=p_C+td$ has norm $\Delta$; the
final comparison returns either $p_D$ or $p_C$, both feasible. [given, F4,
F6, F7, step 1.2, algebra]

3.1 Step 1.1 proves unique Newton-step existence, and steps 1.2–2.1 cover
every dogleg branch and establish its feasibility and root formula. The
Definition calls the Newton solve once on every nonstationary input, calls
the scalar-root formula only in branch 3, and has no iteration branch.
[step 1.1, step 1.2, step 2.1, F4, cases] ∎
