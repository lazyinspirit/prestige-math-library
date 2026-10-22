---
id: cor-ip-wave-coefficient-uniqueness-under-simple-geometry
kind: corollary
title: Static wave coefficients are determined on a simple surface with adequate observation time
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 6
deps:
  - thm-ip-wave-data-determine-light-ray-integrals
  - def-ip-simple-riemannian-background
  - def-ip-simple-surface-and-geodesic-xray-transform
  - thm-ip-2d-simple-surface-xray-injectivity
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Theorem 3.2 and Remark 3.3, PDF pp. 21–22: wave coefficient uniqueness after the ray-integral reduction and the observation-time restriction."
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions (2022 monograph)"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 4, §4.4, printed pp. 117–121: unweighted scalar geodesic X-ray injectivity on simple surfaces."
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple two-dimensional Riemannian background with smooth boundary. Suppose $L_*<\infty$ bounds the lengths of all maximal unit-speed geodesics in $M$, and let $T>L_*$. For real static potentials $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$, if the full time-dependent Dirichlet-to-Neumann maps for $\partial_t^2-\Delta_g+q_1$ and $\partial_t^2-\Delta_g+q_2$ agree for every smooth boundary input compactly supported in $(0,T)\times\partial M$, then $q_1=q_2$ on $M$. This equality statement asserts no stability modulus or recovery in the presence of noisy data.

## Statement references

[[thm-ip-wave-data-determine-light-ray-integrals]]

[[def-ip-simple-riemannian-background]]

[[def-ip-simple-surface-and-geodesic-xray-transform]]

[[thm-ip-2d-simple-surface-xray-injectivity]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; a simple compact connected nonempty Riemannian surface; a finite upper bound $L_*$ on all maximal unit-speed geodesic lengths; $T>L_*$; real smooth interior potentials with equal full time-dependent DN maps.

[A1] Countable Choice is the axiom base of the wave-data and two-dimensional X-ray suppliers. ([[def-countable-choice]])

[F1] Equal wave DN maps on a simple background imply that the integral of $q_1-q_2$ over every maximal unit-speed geodesic of length less than $T$ is zero. ([[thm-ip-wave-data-determine-light-ray-integrals]])

[F2] The scalar geodesic X-ray transform integrates a real interior function over each incoming maximal unit-speed boundary geodesic. ([[def-ip-simple-surface-and-geodesic-xray-transform]])

[F3] On a compact simple surface, zero unweighted scalar geodesic X-ray data for a real smooth interior function imply that the function vanishes. ([[thm-ip-2d-simple-surface-xray-injectivity]])

## Proof

1.1 Every maximal unit-speed geodesic has length at most $L_*<T$. Therefore [F1] applies to each such ray and gives $I_0(q_1-q_2)=0$ on all incoming boundary unit vectors, using the transform convention in [F2]. [A1, F1, F2, given]

2.1 The real function $q_1-q_2$ lies in the class covered by [F3]. Its transform vanishes by step 1.1, so [F3] gives $q_1-q_2=0$ throughout $M$. Hence $q_1=q_2$. [A1, F3, step 1.1, given] ∎
