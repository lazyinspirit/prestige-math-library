---
id: thm-gauss-collocation-global-order-2m
kind: theorem
title: M-node Gauss collocation has global order 2M
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - thm-gauss-collocation-local-defect-order-2m
  - thm-collocation-one-step-stability
  - thm-global-error-from-one-step-defect-and-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7, Theorems 7.9–7.10
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: https://www.unige.ch/~hairer/poly/poly.pdf
---

## Statement

Assume Countable Choice as required by [[thm-gauss-collocation-local-defect-order-2m]]. Let $M\ge1$ and suppose the hypotheses of that theorem and [[thm-collocation-one-step-stability]] hold uniformly on a fixed interval $[0,T]$. Starting with the exact initial value and using the $M$-node Gauss collocation endpoint map on a uniform mesh, the maximum grid error is $O(h^{2M})$ as $h=T/N\downarrow0$.

## Facts & Assumptions

**Given:** The exact IVP solution, a uniform mesh, the $M$-node Gauss collocation endpoint map, and the common-tube and branch hypotheses.

[F1] [[thm-gauss-collocation-local-defect-order-2m]]: the exact-start defect is uniformly $O(h^{2M+1})$.

[F2] [[thm-collocation-one-step-stability]]: for sufficiently small $h$, the endpoint map has a uniform Lipschitz bound $1+L_0h$.

[F3] [[thm-global-error-from-one-step-defect-and-stability]]: a uniform exact-start $O(h^{p+1})$ defect and $(1+L_0h)$ stability on a fixed interval imply global error $O(h^p)$ from exact initial data.

[A1] The exact solution, numerical grid states, stages and comparison segments remain in the common tube on every mesh step.

## Proof

1.1 By [F1], for a constant independent of the mesh and step index, $\|\Psi_{h,n}(y(t_n))-y(t_{n+1})\|_2\le Ch^{2M+1}$. This is the local-defect hypothesis of [F3] with $p=2M$. [A1, F1, F3]

2.1 By [F2] the stability premise of [F3] holds uniformly; the starting value is exact. Applying [F3] with $p=2M$ gives $\max_n\|y_n-y(t_n)\|_2=O(h^{2M})$. [A1, F2, F3, step 1.1] ∎