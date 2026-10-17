---
id: lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate
kind: lemma
title: "A feasible strictly convex linear-constrained QP has a unique KKT minimizer with independent active support"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sqp-linearized-quadratic-subproblem
  - thm-farkas-alternative-for-finite-linear-systems
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 16 §§16.1–16.4, printed pp. 451–465 / PDF pp. 469–483; convex QP KKT and active-set support."
---

## Statement

Let $q(p)=c^Tp+\tfrac12p^TBp$ on $\mathbb R^n$, where $B=B^T$ is positive
definite. Let the feasible set be the nonempty polyhedron
$$C=\{p:Ap=b,\ G_ip+d_i\le0\ (1\le i\le m)\},$$
where the equality rows of $A$ are linearly independent (zero rows are
allowed). Then $q$ has a unique minimizer $p_*$. There are equality
multipliers $\nu$ and inequality multipliers $\lambda_i\ge0$ such that
$$Bp_*+c+A^T\nu+\sum_i\lambda_iG_i^T=0, \qquad \lambda_i(G_ip_*+d_i)=0.$$
They can be chosen so that the equality rows and the active inequality rows
with $\lambda_i>0$ are linearly independent. This KKT tuple certifies the
global minimizer.

## Facts & Assumptions

**Given:** The quadratic objective, the nonempty feasible polyhedron, and the
independent equality-row convention in the Statement.

[A1] $B$ is symmetric positive definite and $C$ is nonempty.

[F1] [[def-sqp-linearized-quadratic-subproblem]]: the SQP subproblem has a
positive-definite quadratic objective and affine equality and inequality
constraints, with inequalities in the $\le0$ convention.

[F2] [[thm-farkas-alternative-for-finite-linear-systems]]: for a matrix $M$
and vector $v$, either $Mz=v$ for some $z\ge0$, or there is $y$ with
$M^Ty\ge0$ and $v^Ty<0$, but not both.

[F3] [[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]: a feasible
KKT tuple for a differentiable convex objective with affine convex
inequalities and affine equalities is a global minimizer.

[F4] [[thm-heine-borel-rn]] and [[thm-extreme-value-metric]]: closed bounded
subsets of $\mathbb R^n$ are compact, and a continuous function on a
nonempty compact metric space attains its minimum.

[F5] [[def-euclidean-inner-product]] defines the Euclidean inner product
$u^Tv$ and norm $\|u\|_2=\sqrt{u^Tu}$.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$.

## Proof

1.1 The unit sphere is compact by [F4]. The continuous function $z\mapsto z^TBz$ is positive on it, so it attains a positive minimum $\alpha$. Thus $q(p)\ge\frac{\alpha}{2}\|p\|_2^2-\|c\|_2\|p\|_2$ by [F6], which tends to $+\infty$ as $\|p\|_2\to\infty$. By [F1], the constraint rows are affine, so their closed half-spaces and affine equality sets intersect in a closed set; choosing one feasible $p_0$, the nonempty sublevel $\{p\in C:q(p)\le q(p_0)\}$ is bounded and closed, hence compact by [F4]. The minimum is attained there and therefore on $C$. [given, F1, F4, F5, F6, algebra, choose]

2.1 If two distinct feasible points $p_1,p_2$ minimized $q$, their midpoint is feasible and $$q\bigl((p_1+p_2)/2\bigr)=\tfrac12q(p_1)+\tfrac12q(p_2)-\tfrac18(p_1-p_2)^TB(p_1-p_2)<q(p_1),$$ contradicting minimality. Hence the minimizer $p_*$ is unique. [step 1.1, given, A1, algebra]

2.2 Let $I=\{i:G_ip_*+d_i=0\}$. For any $z$ with $Az=0$ and $G_iz\le0$ for $i\in I$, inactive constraints have positive slack, so for all sufficiently small $t>0$, $p_*+tz\in C$. Minimality and the one-sided derivative at $t=0$ give $(Bp_*+c)^Tz\ge0$. Therefore $v:=-(Bp_*+c)$ satisfies $v^Tz\le0$ for every such $z$. [given, A1, F1, step 1.1, choose, algebra]

3.1 If $v$ were not representable as $A^T\eta+\sum_{i\in I}\mu_iG_i^T$ with $\mu_i\ge0$, apply [F2] to the matrix whose columns are $G_i^T$ for $i\in I$, the columns of $A^T$, and their negatives, with right-hand side $v$. The alternative gives $y$ with $G_iy\ge0$, $Ay=0$, and $v^Ty<0$. Then $z=-y$ satisfies the direction conditions of step 2.2 but $v^Tz>0$, a contradiction. Thus $v=A^T\eta+\sum_{i\in I}\mu_iG_i^T$ for some $\mu_i\ge0$. Since $v=-(Bp_*+c)$, this is KKT stationarity with equality multiplier $\eta$; setting inactive multipliers to zero gives complementarity. [F2, step 2.2, algebra, assume-contra, discharge-contradiction]

4.1 If $A$ has positive row count, full row rank makes $AA^T$ positive definite, so set $P=I-A^T(AA^T)^{-1}A$; if it has zero rows, set $P=I$. Direct multiplication gives $AP=0$, $P^T=P$, and $P^2=P$, and $Pz=z$ for every $z\in\ker A$. Thus $P$ is the orthogonal projection onto $\ker A$ and $\ker P=\operatorname{range}(A^T)$. Project the multiplier representation from step 3.1. If the projected active normals with positive coefficients are dependent, choose a nonzero dependence, change its sign to give a positive coefficient, and subtract $t$ times that relation, where $t$ is the minimum ratio of a current multiplier to a positive dependence coefficient. All coefficients remain nonnegative and at least one becomes zero. Repeating finitely many times leaves independent projected normals. Their unprojected remainder lies in $\ker P=\operatorname{range}(A^T)$, so it is absorbed into the equality multiplier. If a linear combination of the equality rows and supported active rows is zero, projecting it by $P$ first forces all active coefficients to be zero by projected independence; full row rank then forces the equality coefficients to be zero. [A1, step 3.1, given, algebra, construct, induction]

5.1 The feasible tuple from steps 3.1–3.1 satisfies the hypotheses of [F3], because $q$ is differentiable and convex and every constraint is affine. Thus it certifies a global minimizer; step 2.1 makes that global minimizer unique. [F3, step 2.1, step 3.1] ∎
