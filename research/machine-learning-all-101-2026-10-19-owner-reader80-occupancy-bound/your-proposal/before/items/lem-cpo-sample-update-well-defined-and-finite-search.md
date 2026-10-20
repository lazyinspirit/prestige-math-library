---
id: lem-cpo-sample-update-well-defined-and-finite-search
kind: lemma
title: "The sample CPO update has a well-defined proposal and finite backtracking search"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-constrained-policy-optimization
  - lem-definite-quadratic-forms-have-a-uniform-sphere-bound
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - lem-closed-subset-of-a-compact-space-is-compact
  - thm-invertible-matrix-theorem
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Achiam et al., Constrained Policy Optimization, Sections 6.1–6.3"
      url: https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf
      locator: "Equations (11) and (14), Algorithm 1; the canonical tie rule, finite budget and their proof below concern the locally specified procedure."
proof_strategy: direct
---

## Statement

Under the inputs and assumptions of the sample-based constrained policy
optimization update, with finite parameter dimension $d$ and nonnegative
integer backtracking budget $L$, the update has a unique mathematical output,
either `no-step` or an accepted parameter. Its proposals satisfy these properties.

If its matrix $H$ is symmetric positive definite and its local quadratic
program is feasible, the program has a nonempty compact global-maximizer set
and a unique lexicographically least global maximizer. This is the proposal
selected by the update and satisfies every linearized cost constraint and
the quadratic trust-region constraint.

If the program is infeasible with one cost and $u_1\ne0$, the inverse used
by the update exists, $a=u_1^TH^{-1}u_1>0$, and its recovery proposal is
$$ x^*=-\sqrt{2\delta/a}\,H^{-1}u_1. $$
It is the unique minimizer of $u_1^Tx$ on $\{x:x^THx/2\le\delta\}$,
satisfies $(x^*)^THx^*/2=\delta$, and decreases the linearized cost by
$\sqrt{2\delta a}$. It need not make the infeasible cost constraint feasible.
The non-positive-definite, zero-recovery-gradient and multiple-cost infeasible
branches return `no-step` as specified.

Once the specified exact subproblem decisions and operations have been
performed, backtracking terminates after at most $L+1$ candidate tests.
It returns the first passing candidate, which belongs to the parameter
domain and satisfies the empirical KL and all empirical cost tests, or
returns `no-step` if none passes. These are well-definedness and finite-search
properties of the exact mathematical update. They do not bound the cost of
exact feasibility/optimization operations or certify the true expected costs,
exact population KL, policy improvement, or convergence of sampled iterates.

## Statement references

[[alg-constrained-policy-optimization]]

[Achiam et al., Constrained Policy Optimization, Sections 6.1–6.3](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf)

## Facts & Assumptions

**Given:** The complete inputs and hypotheses of the algorithm, its real
sample coefficients $g,u_i,q_i,H$, radius $\delta>0$, factor $0<\beta<1$,
and finite integer budget $L\ge0$. The algorithm's Axiom of Choice hypothesis
for its theoretical KL comparison is retained; the finite-dimensional
proposal argument below makes no additional use of choice.

[F1] [[alg-constrained-policy-optimization]] specifies all proposal branches, the lexicographic tie rule and the ordered sample-test search.

[F2] [[lem-definite-quadratic-forms-have-a-uniform-sphere-bound]] gives $c>0$ with $z^THz\ge c$ on the unit sphere for a positive definite quadratic form in positive dimension.

[F3] [[thm-heine-borel-rn]] makes a closed bounded Euclidean set compact, and [[lem-closed-subset-of-a-compact-space-is-compact]] preserves compactness under closed restriction.

[F4] [[thm-extreme-value-metric]] gives attained maxima and minima for a continuous real function on a nonempty compact metric space.

[F5] [[thm-invertible-matrix-theorem]] makes a square real matrix with trivial nullspace invertible.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]] and [[def-euclidean-inner-product]] give Euclidean Cauchy–Schwarz, the triangle inequality, coordinate bounds and bilinear norm identities.

## Proof

1.1 First consider $d\ge1$ and symmetric positive definite $H$. By homogeneity, [F2] gives $x^THx\ge c\|x\|_2^2$ for all $x$, with zero handled directly. Put $C=\sum_{a,b}|H_{ab}|$. Coordinate bounds in [F6] and the identity $x_ax_b-y_ay_b=(x_a-y_a)x_b+y_a(x_b-y_b)$ give $|x^THx-y^THy|\le C\|x-y\|_2(\|x\|_2+\|y\|_2)$, so the quadratic form is continuous. The ellipsoid $E=\{x:x^THx/2\le\delta\}$ is therefore closed and contained in the ball of radius $\sqrt{2\delta/c}$, hence compact by [F3]. Each linear functional $x\mapsto v^Tx$ is continuous because $|v^T(x-y)|\le\|v\|_2\|x-y\|_2$. Thus the feasible set $F=E\cap\bigcap_i\{x:q_i+u_i^Tx\le0\}$ is a closed subset of $E$, and is compact. [F2, F3, F6, given, algebra]

2.1 If $F$ is nonempty, [F4] gives an attained maximum $M$ of $g^Tx$ on $F$. Its maximizer set $K_0=\{x\in F:g^Tx=M\}$ is nonempty and compact by closedness and [F3]. Successively for coordinates $h=1,\ldots,d$, let $a_h$ be the minimum of coordinate $h$ on $K_{h-1}$ and set $K_h=\{x\in K_{h-1}:x_h=a_h\}$. Each minimum exists by [F4], and each restriction remains nonempty and compact by [F3]. After $d$ restrictions all coordinates are fixed, so $K_d$ is a singleton. For any other maximizer, the first coordinate where it differs from this singleton must be greater, by the construction of that coordinate's minimum. The singleton is therefore exactly the unique lexicographically least maximizer. As a member of $F$, it satisfies all stated constraints. [F1, F3, F4, F6, step 1.1, given, construct, algebra]

2.2 If $Hz=0$, then $z^THz=0$ and positive definiteness forces $z=0$. Thus [F5] supplies $H^{-1}$. In the single-cost recovery branch write $u=u_1\ne0$, $v=H^{-1}u$. Then $v\ne0$, $Hv=u$ and $a=u^Tv=v^THv>0$. For every $x\in E$, nonnegativity of the quadratic form at $x-(u^Tx/a)v$ gives $0\le x^THx-(u^Tx)^2/a$, using symmetry. Consequently $u^Tx\ge-\sqrt{2\delta a}$. For $x^*=-\sqrt{2\delta/a}\,v$, direct substitution gives $(x^*)^THx^*=2\delta$ and $u^Tx^*=-\sqrt{2\delta a}$, attaining the bound. If another point attains it, equality in the preceding inequalities gives $(x-(u^Tx/a)v)^TH(x-(u^Tx/a)v)=0$, hence $x=(u^Tx/a)v=x^*$ by positive definiteness. The recovery proposal is therefore unique, and its linearized cost is $q_1-\sqrt{2\delta a}$. Since it is the minimum over $E$, infeasibility implies that this last value is strictly positive, rather than implying feasibility. [F1, F5, F6, step 1.1, given, algebra]

3.1 The remaining proposal branches are the explicit returns in [F1]: non-positive-definite $H$, infeasible single-cost problem with $u_1=0$, and infeasible problem with $m>1$ all return `no-step`. If $d=0$, the only parameter displacement is the zero vector, so a feasible program has that unique maximizer, and in the infeasible case all $u_i=0$ and one of the specified no-step branches applies. Thus zero dimension introduces no missing proposal case. Together with steps 2.1 and 2.2, every branch either gives one uniquely specified proposal or returns `no-step`. [F1, F6, step 2.1, step 2.2, given, cases]

4.1 For a proposal $x^*$, the candidates $\theta_k+\beta^jx^*$ for integer $j=0,\ldots,L$ form a prescribed ordered list of $L+1$ points. The parameter-domain check precedes evaluation of the policy tests, so no value outside the domain is required. On the domain, the finite common-support policy probabilities define the empirical KL and surrogates in [F1]. Either there is a least passing index in this finite list, or there is none; [F1] returns its candidate or `no-step`, respectively. Inspecting successive indices therefore terminates in at most $L+1$ candidate tests. The definition of passing supplies exactly the stated sample inequalities. All choices and returns are single-valued by steps 2.1, 2.2 and 3.1 and this least-index rule, establishing the asserted output and finite-search properties. No step in this argument compares the sample estimates to population expectations. [F1, step 2.1, step 2.2, step 3.1, given, algebra] ∎

## Remarks

The source's practical approximate CPO implementation motivates the quadratic
program and the recovery direction. This lemma proves properties of the
library's explicitly specified exact finite-data update, including its
local lexicographic tie rule and finite search budget. It does not attribute
those additional conventions or their proof to the paper.
