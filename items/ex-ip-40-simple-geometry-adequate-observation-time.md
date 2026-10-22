---
id: ex-ip-40-simple-geometry-adequate-observation-time
kind: example
title: Adequate observation time on a simple surface
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 7
deps:
  - cor-ip-wave-coefficient-uniqueness-under-simple-geometry
  - thm-ip-2d-simple-surface-xray-injectivity
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Theorems 3.1–3.2 and Remark 3.3, PDF pp. 21–22: the ray length restriction imposed by the observation time."
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions (2022 monograph)"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 4, §4.4, printed pp. 117–121: unweighted scalar X-ray injectivity on simple surfaces."
proof_strategy: direct application of the finite-time uniqueness corollary
---

## Example

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple two-dimensional Riemannian manifold with smooth boundary. Suppose $L_*<\infty$ is an upper bound for the lengths of all maximal unit-speed geodesics in $M$. Let $T>L_*$ and let $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$ be static interior potentials. If their full time-dependent Dirichlet-to-Neumann maps agree for every smooth boundary input compactly supported in $(0,T)\times\partial M$, then $q_1=q_2$ throughout $M$.

This gives a concrete observation-time condition: observing longer than a uniform upper bound on the maximal geodesic lengths suffices for coefficient uniqueness in the simple-surface case.

## Example references

[[cor-ip-wave-coefficient-uniqueness-under-simple-geometry]]

[[thm-ip-2d-simple-surface-xray-injectivity]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; a simple compact Riemannian surface; a finite uniform upper bound $L_*$ on all maximal geodesic lengths; $T>L_*$; two real smooth interior potentials with equal full time-dependent DN maps.

[A1] Countable Choice is the axiom base of the finite-time coefficient-uniqueness and two-dimensional X-ray injectivity suppliers. ([[def-countable-choice]])

[F1] Under Countable Choice, on a compact connected nonempty simple surface, if $L_*<\infty$ bounds all maximal unit-speed geodesic lengths and $T>L_*$, equality of the full forward DN maps on smooth time-compact boundary inputs implies $q_1=q_2$ for real static $q_1,q_2\in C_c^\infty(M^\circ;\mathbb R)$. The vanishing ray integrals are proved inside this corollary, not required as an additional premise. ([[cor-ip-wave-coefficient-uniqueness-under-simple-geometry]])

[F2] The unweighted scalar geodesic X-ray transform is injective on a compact simple surface. ([[thm-ip-2d-simple-surface-xray-injectivity]])

## Proof

1.1 By hypothesis, every maximal unit-speed geodesic has length at most $L_*<T$. Thus all maximal rays relevant to the finite-time coefficient-uniqueness corollary lie within the observation interval; the strict inequality also covers a ray attaining the upper bound. [given]

2.1 Equal DN maps and the simple-surface hypotheses satisfy [F1]; since $T>L_*$, the corollary yields $q_1-q_2=0$ on $M$. Its X-ray injectivity step is justified by [F2], so $q_1=q_2$ as claimed. [A1, F1, F2, step 1.1, given] ∎
