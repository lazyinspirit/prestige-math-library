---
id: def-ip-analytic-double-fibration-transform
kind: definition
title: "Analytic double-fibration transform and canonical relation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-density-bundle-and-smooth-density
  - def-real-analytic-germ-in-several-variables
  - def-multivariable-power-series
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "Definition 1.5 and §2.2, printed pp. 5 and 13–15."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Definition 6.1 and Proposition 6.2, printed pp. 36–45, for the analytic packet convention."
proof_strategy: direct
---

## Definition

An analytic double fibration is a diagram of real-analytic manifolds and real-analytic submersions
$$
G\xleftarrow{\ \pi_G\ }Z\xrightarrow{\ \pi_X\ }X
$$
such that $Z$ is embedded in $G\times X$, both projections are submersions, and
$$
\dim G+\dim X>\dim Z>\dim G\ge\dim X.
$$
Write $C_Z=\{(g,\eta;x,\xi):(g,x;\eta,-\xi)\in N^*Z\setminus0\}$ for the incidence cotangent relation. Assume $\pi_G$ is proper on $\pi_X^{-1}(K)$ for every compact $K\subset X$. Let $\omega_Z$ be a real-analytic smooth density on $Z$ and let $\kappa\colon Z\to\mathbb C$ be real analytic and nowhere zero. For a compactly supported distribution $u$ on $X$, the weighted transform is the distributional density
$$
Ru=(\pi_G)_*\bigl(\kappa\,\omega_Z\,\pi_X^*u\bigr),
$$
where pullback, multiplication by a density, proper pushforward, and $C_Z$ use the conventions of the preceding definition. In local fiber coordinates this is integration of $u$ over the incidence fibers with weight $\kappa$ and density $\omega_Z$. The hypotheses on proper support ensure this transform is defined for every compactly supported input. This is the class treated on this page; no noisy-data or stability assertion is included.

## Definition references

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Incidence kernel, distribution operations, and relation]]

[[def-smooth-manifold|Smooth manifolds]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds|Smooth maps and submersions]]

[[def-density-bundle-and-smooth-density|Smooth density]]

[[def-real-analytic-germ-in-several-variables|Real-analytic structure]]

[[def-multivariable-power-series|Power-series convention]]

## Facts & Assumptions

**Given:** The real-analytic double fibration, its density and nonvanishing analytic weight, and a compactly supported distribution $u$ on $X$.

[F1] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: submersion pullback is defined by transposed fiber integration; density multiplication turns it into a distributional density; pushforward is defined when proper on support; the canonical relation uses $(\eta,-\xi)$.

[F2] [[def-smooth-manifold]]: local charts define the smooth manifold structures.

[F3] [[def-c-r-and-smooth-maps-between-smooth-manifolds]]: smooth submersions have smooth local coordinate representatives.

[F4] [[def-density-bundle-and-smooth-density]]: densities transform by absolute Jacobians and can be integrated without orientations.

[F5] [[def-real-analytic-germ-in-several-variables]]: the analytic maps and coefficients have holomorphic local complexifications.

[F6] [[def-multivariable-power-series]]: those complexifications are represented by convergent power series on smaller polydiscs.

## Proof

**Given:** The manifolds $G,Z,X$, maps $\pi_G,\pi_X$, density $\omega_Z$, weight $\kappa$, and input $u$.

1.1 The chart representatives are smooth submersions by [F2]–[F3], and their analytic representatives have local holomorphic extensions by [F5]–[F6]. Hence the fiber and incidence data in the statement are well-defined in the stated smooth and analytic categories. [given, F2, F3, F5, F6]

1.2 The pullback $\pi_X^*u$ exists by [F1]. Multiplying it by the smooth density $\omega_Z$ gives a distributional density; multiplication by the smooth function $\kappa$ preserves that type. If $\operatorname{supp}u\subset K$ with $K$ compact, the support of this product lies in $\pi_X^{-1}(K)$, on which $\pi_G$ is proper by hypothesis. [F1, given]

2.1 The proper pushforward in [F1] therefore defines $Ru$ as a distributional density on $G$. In coordinates, transposing fiber integration in the two submersions shows that it pairs a data test function with the integral over the corresponding incidence fiber, weighted by $\kappa\omega_Z$; the density Jacobians cancel by [F4]. The cotangent relation of the kernel is precisely $C_Z$ by the sign convention in [F1]. [F1, F3, F4, step 1.1, step 1.2] ∎
