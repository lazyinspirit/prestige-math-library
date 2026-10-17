---
id: thm-proximal-bundle-accumulation-under-accurate-aggregate-model
kind: theorem
title: "Proximal bundle accumulation under vanishing aggregate-model error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-proximal-bundle-serious-null-method
  - lem-proximal-bundle-subproblem-has-unique-minimizer
  - lem-aggregate-model-error-controls-proximal-candidate
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-extended-real-epsilon-subdifferential
  - def-euclidean-inner-product
  - def-metric-compactness
  - thm-compact-implies-the-other-compactness-forms
  - thm-extreme-value-metric
  - def-metric-continuity
  - def-metric-convergence
  - def-sequence
  - lem-metric-limits-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mateo Díaz and Benjamin Grimmer, Optimal Convergence Rates for the Proximal Bundle Method, §§2–3"
      url: https://arxiv.org/pdf/2105.07874
    - title: "Dominikus Noll, Olivier Prot, and Aude Rondepierre, A proximity control algorithm to minimize nonsmooth and nonconvex functions, §§2–4"
      url: https://www.math.univ-toulouse.fr/~noll/PAPERS/pjo.pdf
verification:
  precheck: pass
---

## Statement

Let $F:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed, and convex. Suppose $C=\operatorname{dom}F$ is nonempty, closed, and convex, and $F|_C$ is continuous. Consider an infinite full-memory continuation of [[alg-proximal-bundle-serious-null-method]] with fixed $t>0$ and $m_s\in(0,1)$, centers $x_k\in C$, finite affine models $M_k\le F$ on $C$ touching their centers ($M_k(x_k)=F(x_k)$), and exact candidates
$$z_k=\arg\min_{y\in C}\left(M_k(y)+\frac{\|y-x_k\|_2^2}{2t}\right).$$
Assume every predicted decrease $P_k=F(x_k)-M_k(z_k)$ is positive, each trial uses the stated serious/null acceptance test, the initial sublevel set $K=\{x\in C:F(x)\le F(x_0)\}$ is compact, and the aggregate-model errors $e_k=F(z_k)-M_k(z_k)$ satisfy $e_k\to0$. Then every accumulation point, meaning a limit of a subsequence in the Euclidean metric, is a global minimizer of $F$. At least one accumulation point exists. The vanishing-error premise is an additional assumption; full-memory cutting planes alone are not asserted to imply it.

## Facts & Assumptions

**Given:** The serious/null algorithm [[alg-proximal-bundle-serious-null-method]], model-subproblem existence [[lem-proximal-bundle-subproblem-has-unique-minimizer]], the aggregate-error estimate [[lem-aggregate-model-error-controls-proximal-candidate]], proximal resolvent [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]], extended-real subgradient definition [[def-extended-real-epsilon-subdifferential]], compact sequential compactness [[thm-compact-implies-the-other-compactness-forms]], and attainment on compact metric spaces [[thm-extreme-value-metric]].

[F1] Each candidate is unique, and the exact proximal point $p_k=\operatorname{prox}_{tF}(x_k)$ exists, is unique, and the proximal map is nonexpansive ([[lem-proximal-bundle-subproblem-has-unique-minimizer]], [[def-proximal-mapping]], [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]).

[F2] The model error is nonnegative and $\|z_k-p_k\|_2^2\le4te_k$ ([[lem-aggregate-model-error-controls-proximal-candidate]]).

[F3] If $0\in\partial F(x)$, then $F(y)\ge F(x)$ for every $y$ by the extended-real subgradient definition ([[def-extended-real-epsilon-subdifferential]]).

[F4] A sequence is a function on the naturals, convergence is the metric limit, and every sequence in compact $K$ has a subsequence converging in $K$ ([[def-sequence]], [[def-metric-convergence]], [[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness]]). Two limits in a metric space agree ([[lem-metric-limits-unique]]). A continuous real function on compact $K$ is bounded below ([[thm-extreme-value-metric]], [[def-metric-continuity]]).

## Proof

1.1 A serious step has $F(x_k)-F(z_k)\ge m_sP_k>0$; a null step leaves the center fixed. Thus centers remain in the initial sublevel set $K$, and $F(x_k)$ is nonincreasing and bounded below there by [F4]. The decreases $d_k=F(x_k)-F(x_{k+1})\ge0$ have bounded partial sums, since $\sum_{k<q}d_k=F(x_0)-F(x_q)$. If $d_k$ failed to tend to zero, some positive $\epsilon$ would be exceeded by infinitely many terms, making these partial sums unbounded; hence $d_k\to0$. [given, F4, algebra]

1.2 Let $x_{k_j}\to\bar x$ be any accumulation subsequence, which exists for at least one subsequence by [F4]. For any chosen convergent subsequence, compactness gives a further subsequence converging to a point of $K$; the uniqueness-of-limits fact in [F4] identifies that point with $\bar x$, so $\bar x\in K$. Applying compactness to the whole center sequence also supplies at least one accumulation subsequence. By nonexpansiveness in [F1], $p_{k_j}=\operatorname{prox}_{tF}(x_{k_j})\to p=\operatorname{prox}_{tF}(\bar x)$. By [F2] and $e_{k_j}\to0$, $\|z_{k_j}-p_{k_j}\|_2\to0$, so $z_{k_j}\to p$. Since $F|_C$ is continuous and all these points lie in $C$, $F(x_{k_j})\to F(\bar x)$ and $F(z_{k_j})\to F(p)$. [F1, F2, F4, given, algebra]

2.1 Suppose for contradiction that $\bar x$ is not a global minimizer. Then $p\ne\bar x$: otherwise the resolvent equivalence in [F1] gives $0=(\bar x-p)/t\in\partial F(\bar x)$, and [F3] would make $\bar x$ globally minimizing. By proximal minimality, $F(p)+\|p-\bar x\|_2^2/(2t)\le F(\bar x)$; therefore $\delta:=F(\bar x)-F(p)>0$. [F1, F3, step 1.2, algebra, assume-contra]

3.1 Along the chosen subsequence, $D_j:=F(x_{k_j})-F(z_{k_j})\to\delta$ by step 1.2, while $P_{k_j}=F(x_{k_j})-M_{k_j}(z_{k_j})=D_j+e_{k_j}$. Hence $D_j-m_sP_{k_j}=(1-m_s)D_j-m_se_{k_j}\to(1-m_s)\delta>0$. For all sufficiently large $j$ the step is serious and $d_{k_j}=D_j\ge\delta/2$, contradicting $d_k\to0$ from step 1.1. Thus every accumulation point is a global minimizer. [given, step 1.1, step 1.2, step 2.1, algebra, discharge-contradiction] ∎

