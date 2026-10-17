---
id: thm-phase-i-margin-status-and-weak-infeasibility
kind: theorem
title: "The conic phase-I margin separates strict feasibility but may leave weak infeasibility undecided"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-conic-optimization-primal-dual-models]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.4, feasibility and Phase I; Chapter 11 §11.6.2, generalized-cone Phase I."
---

## Statement

Let $K$ be a proper cone, let $e\in\operatorname{int}K$, and consider the conic feasibility system $Ax=b$, $h-Gx\in K$. Define its **Phase-I margin value**
$$\rho_* = \inf\{\tau\in\mathbb R: Ax=b,\ h-Gx+\tau e\in K\},$$
with $\rho_*=+\infty$ if the set is empty. If $\rho_*<0$, the original system has a strictly feasible point. If $\rho_*>0$ or $\rho_*=+\infty$, the original system is infeasible. If $\rho_*=0$ and the infimum is attained, the original system is feasible but not strictly feasible; if $\rho_*=0$ and the infimum is not attained, the original system is infeasible. Thus a zero value without an attainment check decides neither. A finite-budget Phase-I computation certifies a negative sign from a verified feasible margin point with $\tau<0$, or a positive sign from a verified positive lower bound; failure to find strict feasibility is not an infeasibility certificate.

## Facts & Assumptions

**Given:** The conic feasibility model and proper-cone convention of [[def-conic-optimization-primal-dual-models]].

[F1] A proper cone is closed, convex, closed under addition and positive scaling, and has nonempty interior ([[def-conic-optimization-primal-dual-models]]).

## Proof

1.1 If $\rho_*<0$, then by the definition of an infimum some feasible pair $(x,\tau)$ has $\tau<0$. Write $h-Gx+\tau e=k\in K$. Then $h-Gx=k+(-\tau)e$. An open ball around $(-\tau)e\in\operatorname{int}K$ lies in $K$; translating that ball by $k\in K$ keeps it in $K+K\subseteq K$. Hence $k+(-\tau)e\in\operatorname{int}K$, so $Ax=b$ and $h-Gx\in\operatorname{int}K$. [given, F1, algebra]

2.1 If the original system has a feasible $x$, then $\tau=0$ is feasible for the Phase-I set, hence $\rho_*\le0$. This proves infeasibility when $\rho_*>0$ or the Phase-I set is empty. If $\rho_*=0$ is attained, the attaining pair cannot have $\tau<0$, since that would force $\rho_*<0$; hence it has $\tau=0$ and its $x$ is originally feasible. Strict feasibility at some $x$ would give $s=h-Gx\in\operatorname{int}K$. Because $\operatorname{int}K$ is open and $e\in\operatorname{int}K$, there is $\delta>0$ small enough that $s-\delta e\in K$, making $\tau=-\delta$ feasible and contradicting $\rho_*=0$. If $\rho_*=0$ is not attained, original feasibility would itself provide an attaining pair at $\tau=0$, a contradiction. Thus zero is inconclusive until attainment is checked. [F1, step 1.1, algebra] ∎
