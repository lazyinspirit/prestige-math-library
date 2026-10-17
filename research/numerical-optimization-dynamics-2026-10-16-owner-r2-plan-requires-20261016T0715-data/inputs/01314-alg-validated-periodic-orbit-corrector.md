---
id: alg-validated-periodic-orbit-corrector
kind: algorithm
title: "Finite-budget phase-fixed periodic-orbit correction and validation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-phase-bordered-multiple-shooting-and-midpoint-collocation
  - def-validated-periodic-shooting-jet-enclosure
  - alg-single-shooting-for-nonlinear-bvps
  - alg-multiple-shooting-for-nonlinear-bvps
  - alg-midpoint-collocation-for-nonlinear-bvps
  - alg-finite-budget-newton-for-vector-residuals
  - alg-krawczyk-root-certification
  - def-verified-flow-variational-range-oracle
  - lem-real-interval-arithmetic-preserves-enclosure
justified_by:
  - thm-validated-periodic-orbit-certificate-soundness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "Full PDF retrieved and verified as 23 pages; inspected §§1–2 on interval sets, outward enclosure, Brouwer, and interval Newton/Krawczyk."
---

## Definition

Inputs are a $C^2$ autonomous field, an affine phase with rational covector and reference point, a compact convex validation tube, the sound range provider of [[def-verified-flow-variational-range-oracle]], a finite candidate budget, a rational point preconditioner $C$, and a rational real-box Krawczyk budget. In fixed-parameter mode the rational candidate box is $Z=X\times\Theta\subset U\times(0,\infty)$ with the parameter held fixed; in section mode it is $Z=X\times\Theta\times\Lambda$ for a rational parameter interval $\Lambda$.

The procedure has two candidate modes:

1. **Single shooting:** run [[alg-single-shooting-for-nonlinear-bvps]] with the finite-budget Newton candidate solver [[alg-finite-budget-newton-for-vector-residuals]] on the phase-bordered shooting residual of [[def-phase-bordered-periodic-orbit-bvp]].
2. **Discretized candidate:** run [[alg-multiple-shooting-for-nonlinear-bvps]] or [[alg-midpoint-collocation-for-nonlinear-bvps]] on the residuals of [[def-phase-bordered-multiple-shooting-and-midpoint-collocation]], then use its last finite candidate as a shooting initial guess.

Either mode may return no candidate, an invalid trial, or budget exhaustion; none is a proof of existence. For each candidate center $z_c\in Z$, form a validated jet enclosure on $Z$ as in [[def-validated-periodic-shooting-jet-enclosure]]. Supply the resulting outward enclosure of $G(z_c)$ as $F_0$ and of $DG(Z)$ as $J(Z)$ to [[alg-krawczyk-root-certification]]. Its finite interval arithmetic is governed by [[lem-real-interval-arithmetic-preserves-enclosure]]. Run it only when the entire box is in the flow domain and all interval operations succeed. Separately require a sound field range on $X$ to have at least one component interval excluding zero; this excludes an equilibrium root.

In **section mode**, used for continuation, the unknown is $z=(x,\theta,\mu)$ and the residual is $(G(x,\theta,\mu),\tau^\top(z-z_p))$, where $G$ is the parameterized map in [[def-validated-periodic-shooting-jet-enclosure]], $\tau$ is a supplied unit normal, and $z_p$ is a supplied predictor. Append the exact linear row to the validated residual and Jacobian boxes before Krawczyk validation. The nonstationarity range in fixed-parameter mode is over $X$; in section mode it is over $X\times\Lambda$.

Return `validated-root` only if the Krawczyk procedure proves strict inclusion and its separate contraction bound, the field range excludes zero, and the validated jet run encloses the full trajectory and monodromy. Otherwise return `inconclusive` or the precise finite candidate failure status. Every output records its box, point residual enclosure, Jacobian enclosure, strict inequalities, field component excluding zero, trajectory tube, and monodromy enclosure. A validated root is unique only within the stated box.
