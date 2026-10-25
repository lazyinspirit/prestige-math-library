---
id: ex-qftx-sphere-gauge-s3-components
kind: example
title: "Integer components of the based S3 gauge group"
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy-examples
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - lem-qftx-based-gauge-sphere-homotopy
  - lem-qftx-low-unitary-homotopy-inputs
  - thm-qftx-reduced-gauge-group-sphere-nontriviality
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-path-lifting-for-covering-maps
  - lem-qftx-parametric-gauge-smoothing
  - def-qftx-smooth-sobolev-gauge-configuration
  - def-axiom-of-choice
dependency_roles:
  lem-qftx-based-gauge-sphere-homotopy: mathematical-premise
  lem-qftx-low-unitary-homotopy-inputs: mathematical-premise
  thm-qftx-reduced-gauge-group-sphere-nontriviality: mathematical-premise
  thm-based-sphere-maps-are-classified-by-geometric-degree: mathematical-premise
  thm-path-lifting-for-covering-maps: mathematical-premise
  lem-qftx-parametric-gauge-smoothing: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; degree and Hopf bundle background."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; bundle LES framework."
verification:
  precheck: pending
---
## Example

Take the trivial principal $SU(2)$ bundle over the oriented sphere $S^3$, fix a point and a frame over it, and identify $SU(2)$ with the unit quaternions $S^3$. Use $\mathcal G_\infty$ and $\overline{\mathcal G}_\infty$ from the configuration definition, with based smooth subgroup $\mathcal G_{\infty,m}$; for brevity put $\mathcal G_m:=\mathcal G_{\infty,m}$. For every integer $k$, a based map $u_k:S^3\to S^3$ of degree $k$ defines a based smooth gauge transformation after relative smoothing. These transformations represent distinct components of the based gauge group, so $\pi_0(\mathcal G_m)\cong\pi_3(S^3)\cong\mathbb Z$. The full smooth gauge group has the same component set, and quotienting by the two-element center can merge at most two components; both the full and reduced smooth groups therefore have infinitely many path components. This example is specific to the trivial $SU(2)$ bundle over $S^3$ and does not establish the $S^4$ statement or an arbitrary-rank claim.

## Example references

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

## Facts & Assumptions

**Given:** The trivial bundle over the oriented $S^3$, the chosen evaluation frame, and the based maps $u_k$ in the Example. The actual configuration carrier exists, but its current hash-bound Step 1 record is `ready` according to `loadStep1Record` and `step1Decision`; this is authoring readiness, not independent approval.

[F1] The based gauge-group components in the trivial or nontrivial bundle sector are $\pi_0(\mathcal G_m)\cong\pi_3(SU(2))$ for the $S^3$ case. [[lem-qftx-based-gauge-sphere-homotopy]]

[F2] Unit quaternions identify $SU(2)$ with $S^3$, and degree classifies based self-maps of $S^3$. [[lem-qftx-low-unitary-homotopy-inputs]], [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

[F3] The full and reduced gauge groups have infinitely many components in the $r=3$ case; the finite quotient acts on components with orbits of size at most $2$. [[thm-qftx-reduced-gauge-group-sphere-nontriviality]]

[F4] The actual configuration definition fixes the smooth gauge group $\mathcal G_\infty$ with finite-atlas $C^\infty$ section topology, its based subgroup, and the quotient $\overline{\mathcal G}_\infty=\mathcal G_\infty/Z_N$, along with the bundle, frame, and right-action conventions. Its carrier was inspected in full, but its current hash-bound Step 1 record is `ready` according to `loadStep1Record` and `step1Decision`; this is authoring readiness, not independent approval. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F5] Smooth and continuous based gauge sections have the same sphere/disk parameter homotopy classes. [[lem-qftx-parametric-gauge-smoothing]]

[F6] Paths lift to a covering once their initial lift is fixed. [[thm-path-lifting-for-covering-maps]]

[A1] Degree is normalized by the standard orientations on source and target $S^3$; the component comparison for the center quotient uses the covering-space topology fixed in [F3].

## Verification

1.1 By [F2], each integer $k$ is represented by a based map $u_k:S^3\to SU(2)$ of degree $k$. The standard degree representative may be chosen smooth by a relative smooth approximation; [F5] then identifies its class with one in the smooth based section topology. Distinct integers give distinct elements of $\pi_3(SU(2))$ by degree classification, so [F1] proves that the based gauge group has components indexed by $\mathbb Z$. [A1, F1, F2, F5, construct]

2.1 The evaluation fibration has connected base $SU(2)$ and $\pi_1(SU(2))=0$ by [F2, F3]. Its component LES therefore identifies $\pi_0(\mathcal G_m)$ with $\pi_0(\mathcal G)$, so the full group also has infinitely many components. The quotient by $Z_2$ is a two-sheeted covering; [F6] shows its components are the orbits of the two-element deck action on the components upstairs. Each orbit has at most two members, so an infinite component set remains infinite after quotient; this instance is also the $r=3,N=2$ case of [F3]. [F1, F2, F3, F4, F6, algebra] ∎

