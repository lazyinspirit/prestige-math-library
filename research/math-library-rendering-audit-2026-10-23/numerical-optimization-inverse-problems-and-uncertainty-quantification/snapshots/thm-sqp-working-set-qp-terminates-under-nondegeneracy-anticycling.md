---
id: thm-sqp-working-set-qp-terminates-under-nondegeneracy-anticycling
kind: theorem
title: "A feasible working-set QP solve terminates under nondegenerate steps"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate
  - alg-sqp-feasible-working-set-qp-solve
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 16 §16.4, Theorems 16.4–16.5 and finite termination of Algorithm 16.1, printed pp. 457–465 / PDF pp. 477–484."
---

## Statement

Consider a feasible SQP quadratic subproblem with $B\succ0$, $m$ inequality
rows, and $r$ independent equality rows. Run
[[alg-sqp-feasible-working-set-qp-solve]] with an independent initial working
set and cap $N\ge(n+2)2^m$. Assume exact subproblem solves, every nonzero
working-set direction has a strictly positive maximal feasible step, and a
blocker is selected by the algorithm's least-index tie rule. Then the
algorithm returns the unique global minimizer and a KKT certificate in at
most $N$ iterations. If a zero blocking step, dependent blocker, failed solve,
or smaller user cap occurs, the algorithm returns its stated inconclusive
status and no optimality claim follows.

The positive-step hypothesis is the nondegeneracy condition that prevents
zero-length working-set cycling. The proof also shows that a working set
already minimized with negative multipliers cannot recur after progress.

## Facts & Assumptions

**Given:** The feasible QP, exact arithmetic, the working-set algorithm, and
the hypotheses in the Statement.

[A1] $B$ is symmetric positive definite; all active/equality rows in the
current working set are independent; every nonzero direction has $\alpha>0$.

[F1] [[alg-sqp-feasible-working-set-qp-solve]] solves the strictly convex
quadratic on the current working-set face, takes the largest feasible step,
adds a least-index blocker, and deletes a least-index negative-multiplier row.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] makes each
working-set KKT system nonsingular when its rows are independent.

[F3] [[lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate]]: a
feasible strictly convex QP has a unique minimizer and admits a KKT certificate
with independent positive support.

## Proof

1.1 Let $z$ be a feasible iterate, $W$ its working set, and $u\ne0$ the exact direction minimizer. Its KKT equation is $Bu+(Bz+c)+A^T\nu+\sum_{i\in W}\mu_iG_i^T=0$, with $Au=0$ and $G_iu=0$ for $i\in W$. Multiplying by $u^T$ gives $(Bz+c)^Tu=-u^TBu$. Hence for every accepted $0<\alpha\le1$, $$q(z+\alpha u)-q(z)=-\alpha(1-\alpha/2)u^TBu<0.$$ If $\alpha<1$, a blocking row cannot lie in the span of the current rows, since it has $G_iu>0$ while every row in that span annihilates $u$; adding it preserves independence. [A1, F1, F2, algebra]

1.2 Suppose instead $u=0$ and the multiplier of a working inequality $j$ is negative. After deleting $j$, let $v$ be the next exact direction. If $v=0$, the new stationarity equation, extended with a zero multiplier on row $j$, and the old one give two multiplier representations for the same gradient on independent old working rows; uniqueness would force $\mu_j=0$, a contradiction. Hence $v\ne0$. The new direction stationarity, dotted with $v$, gives $(Bz+c)^Tv=-v^TBv$. The old face stationarity, also dotted with $v$, gives $(Bz+c)^Tv+\mu_jG_jv=0$, because all retained working rows annihilate $v$. Therefore $\mu_jG_jv=v^TBv>0$, so $v\ne0$ and $G_jv<0$. The dropped inequality is feasible to first order, and by the positive-step hypothesis the next iterate moves strictly along this descent direction. [A1, F1, F2, algebra]

2.1 For a fixed working set $W$, positive definiteness makes the face objective have at most one minimizer. Once the algorithm reaches that face minimizer, either all working inequality multipliers are nonnegative and it terminates, or step 1.2 gives a strict objective decrease after a negative multiplier is dropped. Every later iterate is then below the minimum value on that face, so the same working set cannot be face-minimized again. There are at most $2^m$ working sets. [A1, step 1.1, step 1.2, algebra]

3.1 Between successive face minimizers, each nonterminal partial step adds an independent blocker, so there can be at most $n-r$ such additions before the feasible direction space is zero. A full step with no blocker reaches a face minimizer immediately. Thus each of the at most $2^m$ face-minimization episodes uses at most $n-r+2\le n+2$ iterations. The cap $N\ge(n+2)2^m$ cannot be reached before a terminal KKT point. [step 2.1, F1, induction, algebra]

4.1 At termination, feasibility is maintained and every working inequality multiplier is nonnegative; assign zero multipliers to inequalities outside the working set. This is a KKT tuple at a point $z$. For every feasible $y$, stationarity and complementarity give $(Bz+c)^T(y-z)=-\sum_i\lambda_iG_i(y-z)\ge0$. Consequently $q(y)-q(z)=(Bz+c)^T(y-z)+\tfrac12(y-z)^TB(y-z)\ge0$, strictly if $y\ne z$ by [A1]. Thus $z$ is the unique global minimizer. If a degeneracy or cap status occurs instead, the algorithm reports no KKT certificate, as stated. [A1, F1, F3, step 3.1] ∎
