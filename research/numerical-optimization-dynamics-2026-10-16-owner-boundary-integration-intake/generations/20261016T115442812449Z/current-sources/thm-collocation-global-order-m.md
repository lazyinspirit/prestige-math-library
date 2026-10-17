---
id: thm-collocation-global-order-m
kind: theorem
title: M-node collocation has global order M
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-collocation-local-defect-order-m
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
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: https://www.unige.ch/~hairer/poly/poly.pdf
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

Let $M\ge1$ and suppose the hypotheses of [[thm-collocation-local-defect-order-m]] and [[thm-collocation-one-step-stability]] hold uniformly on a fixed interval $[0,T]$. Starting with the exact initial value and using the collocation endpoint map on a uniform mesh, the maximum grid error is $O(h^M)$ as $h=T/N\downarrow0$.

## Facts & Assumptions

**Given:** The exact IVP solution, a uniform mesh, the $M$-node collocation endpoint map, and uniform tube and branch hypotheses.

[F1] [[thm-collocation-local-defect-order-m]]: the exact-start one-step defect is uniformly $O(h^{M+1})$.

[F2] [[thm-collocation-one-step-stability]]: for sufficiently small $h$, the one-step map is Lipschitz with a bound $1+L_0h$ for a fixed $L_0$.

[F3] [[thm-global-error-from-one-step-defect-and-stability]]: on a fixed interval, exact initial data, local defect $O(h^{p+1})$ and a $(1+L_0h)$ stability bound imply global error $O(h^p)$.

[A1] The exact solution, numerical grid states, stages and comparison segments stay in the common compact tube for every mesh step.

## Proof

1.1 By [F1], take a mesh-independent constant $C$ with $\|\Psi_{h,n}(y(t_n))-y(t_{n+1})\|_2\le Ch^{M+1}$ for every step. This is the local-defect hypothesis of [F3] with $p=M$. [A1, F1, F3]

2.1 By [F2] the same endpoint maps satisfy the fiberwise stability bound required in [F3]; the initial error is zero by hypothesis. Applying [F3] with $p=M$ proves $\max_n\|y_n-y(t_n)\|_2=O(h^M)$. [A1, F2, F3, step 1.1] ∎