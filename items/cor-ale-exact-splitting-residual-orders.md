---
id: cor-ale-exact-splitting-residual-orders
kind: corollary
title: "Conditional finite-dimensional Lie and Strang splitting residual orders"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-additive-ode-and-partition
  - def-exact-split-flows-lie-strang-and-bracket
  - thm-lie-strang-global-orders-and-subflow-error
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, Lecture 2: Symplectic Integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "§5, Lie–Trotter and Strang splitting and their finite-dimensional global orders, PDF pp. 12–14."
---

## Statement

For the optional splitting branch of the finite-dimensional coupled model, suppose $a,b\in C^3(U,\mathbb R^d)$ define the additive autonomous ODE of [[def-additive-ode-and-partition]], their exact subflows use the Lie and Strang compositions of [[def-exact-split-flows-lie-strang-and-bracket]], and all exact and numerical paths lie with positive margin in a common compact convex tube on $[0,T]$. Initialize both schemes at the exact initial value $y_0=y(0)$. Under the remaining Lipschitz, regularity, and step-size hypotheses of [[thm-lie-strang-global-orders-and-subflow-error]], the exact Lie and Strang schemes have global errors $O(h)$ and $O(h^2)$ respectively. Approximate subflows retain these orders only under the separate per-subflow error budgets and composition stability condition stated in that theorem. This corollary makes no claim for unbounded operators or general moving-domain PDEs.

## Facts & Assumptions

**Given:** The finite-dimensional autonomous split ODE, exact subflows, exact initial data, and common-tube hypotheses in the Statement.

[F1] [[def-additive-ode-and-partition]]: the total field is the autonomous sum $a+b$ on an open subset of $\mathbb R^d$.

[F2] [[def-exact-split-flows-lie-strang-and-bracket]]: the Lie map is $\Phi_b^h\circ\Phi_a^h$ and the Strang map is $\Phi_a^{h/2}\circ\Phi_b^h\circ\Phi_a^{h/2}$.

[F3] [[thm-lie-strang-global-orders-and-subflow-error]]: on a common compact convex tube with the theorem's regularity and step hypotheses, the exact maps have global orders one and two; approximate subflows preserve these orders only under its separate local error budgets and composed-map stability bound.

## Proof

1.1 By [F1] and [F2], the optional split system and its stage maps are exactly the finite-dimensional additive ODE, Lie map, and Strang map covered by [F3]. The common-tube, regularity, and exact-initial-data assumptions of [F3] are explicit hypotheses here. [given, F1, F2, F3]

2.1 Apply [F3] to these maps. Its exact-flow conclusion gives global errors $O(h)$ for Lie and $O(h^2)$ for Strang. Its approximate-subflow conclusion requires the additional individual error budgets and one-step stability bound and keeps these contributions separate from the splitting defects. No unbounded-operator conclusion is imported. [F3, step 1.1] ∎
