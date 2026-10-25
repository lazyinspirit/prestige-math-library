---
id: thm-koksma-hlawka-integration-bound
kind: theorem
title: "Koksma–Hlawka integration bound with upper-anchor variation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-star-discrepancy-and-digital-net
  - def-hardykrause-variation
  - def-multidimensional-grid-partition
  - lem-finite-hardykrause-variation-implies-riemann-integrability
  - lem-anchored-box-summation-by-parts-hk-variation
  - thm-multidimensional-darboux-equals-riemann
  - cor-archimedean-reciprocal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.4 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.2"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
    - title: "Lukas Einkemmer, Quasi-Monte Carlo Methods, §2.3"
      url: "https://www.einkemmer.net/files/qmm.pdf"
---

## Statement

Let $N\ge1$ and let $P=(x_0,\ldots,x_{N-1})$ be a finite nonempty point multiset in $[0,1)^d$. If $f:[0,1]^d\to\mathbb R$ has finite Hardy–Krause variation anchored at $1$, then
$$\left|Q_P(f)-I_d(f)\right|\le D_N^*(P)V_{HK,1}(f),$$
where $Q_P$, $I_d$, and $D_N^*$ use the conventions of [[def-star-discrepancy-and-digital-net]], and $V_{HK,1}$ uses the face convention of [[def-hardykrause-variation]]. The point set and integrand are otherwise arbitrary; no construction-specific rate or computability of the two factors is asserted.

## Facts & Assumptions
**Given:** The finite nonempty point multiset and finite upper-anchor variation stated above.

[F1] For every finite coordinate grid containing the nodes, its lower-corner sum differs from $Q_P(f)$ by at most $D_N^*(P)V_{HK,1}(f)$. ([[lem-anchored-box-summation-by-parts-hk-variation]])

[F2] For a bounded Riemann-integrable function, all tagged grid sums converge to its Riemann integral as the mesh tends to zero. ([[thm-multidimensional-darboux-equals-riemann]])

[F3] Adding finitely many coordinate knots refines a grid without increasing its mesh; uniform grids with mesh $1/r$ can be made arbitrarily fine. ([[def-multidimensional-grid-partition]], [[cor-archimedean-reciprocal]])

[F4] Finite upper-anchor Hardy–Krause variation implies that $f$ is bounded and Riemann integrable. ([[lem-finite-hardykrause-variation-implies-riemann-integrability]])




## Proof

1.1 For each integer $r\ge1$, start with a uniform coordinate grid of mesh at most $1/r$ and refine each coordinate partition by inserting every coordinate of every node of $P$. The resulting finite grid $G_r$ contains all node coordinates and has mesh at most $1/r$ by [F3]. Let $S_{G_r}(f)$ be its lower-corner Riemann sum. [F3, given, construct]

2.1 Applying [F1] to each $G_r$ gives $|Q_P(f)-S_{G_r}(f)|\le D_N^*(P)V_{HK,1}(f)$ for every $r$. [F1, step 1.1]

3.1 By [F4], $f$ is bounded and Riemann integrable. The mesh of $G_r$ tends to zero, so [F2] gives $S_{G_r}(f)\to I_d(f)$. Since $Q_P(f)$ and the bound on the right are fixed, continuity of absolute value passes the inequality in step 2.1 to the limit and yields the stated Koksma–Hlawka bound. [F2, F4, step 2.1] ∎
