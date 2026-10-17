---
id: lem-sdc-fixed-point-is-collocation-stage
kind: lemma
title: Fixed points of the SDC sweep are collocation stages
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-explicit-left-euler-sdc-sweep
  - def-collocation-quadrature-tableau
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
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §1.1
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

For an admissible stage vector $U$, the fixed-point equation for one sweep of [[alg-explicit-left-euler-sdc-sweep]] holds if and only if $U=\mathbf1u+hQF(U)$, the collocation stage equation of [[def-collocation-quadrature-tableau]].

## Facts & Assumptions

**Given:** The nodes and collocation data, the vector field, and an admissible stage vector $U$ in the stated stage domain.

[F1] [[def-collocation-quadrature-tableau]]: the collocation stage equation is $U=\mathbf1u+hQF(U)$.

[F2] [[alg-explicit-left-euler-sdc-sweep]]: the sweep is defined by $U^+=\mathbf1u+h\widehat Q_\Delta\widehat F(U^+)+h(\widehat Q-\widehat Q_\Delta)\widehat F(U)$, with $\widehat Q=(0\mid Q)$ and $\widehat F(U)=(f(t,u),F(U))$.

## Proof

1.1 If $U$ is a fixed point of the sweep, set $U^+=U$ in [F2]. The two preconditioner matrices add to $\widehat Q$, so $U=\mathbf1u+h\widehat Q\widehat F(U)=\mathbf1u+hQF(U)$ because the first column of $\widehat Q$ is zero. This is [F1]. [given, F1, F2, algebra]

2.1 Conversely, if $U=\mathbf1u+hQF(U)$, then the right-hand side of [F2] with $U^+=U$ is $\mathbf1u+h(\widehat Q_\Delta+\widehat Q-\widehat Q_\Delta)\widehat F(U)=\mathbf1u+hQF(U)=U$. Thus $U$ is a fixed point. [given, F1, F2, algebra] ∎
