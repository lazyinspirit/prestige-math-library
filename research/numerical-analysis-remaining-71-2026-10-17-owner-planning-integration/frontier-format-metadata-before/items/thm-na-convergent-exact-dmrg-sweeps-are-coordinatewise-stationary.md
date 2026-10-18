---
id: thm-na-convergent-exact-dmrg-sweeps-are-coordinatewise-stationary
kind: theorem
title: "Convergent fixed-rank exact sweeps are coordinatewise stationary"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - alg-na-alternating-tensor-optimization-and-effective-eigenproblems
  - lem-na-mps-environment-isometry-and-effective-hamiltonian
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
verification:
  precheck: pass
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§6.3–6.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §2.7"
      url: "https://arxiv.org/pdf/2606.24803"
---

## Statement

Consider an infinite sequence of full no-truncation sweeps following [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]], with fixed bond dimensions and a fixed finite list of one-site or two-site update windows. Assume the canonical core arrays at every stage of each sweep are bounded and converge componentwise in one consistent gauge to a single normalized canonical core tuple. Then the limit is **coordinatewise stationary**, meaning that for each update window, its limiting center vector minimizes the Rayleigh quotient of the effective Hermitian Hamiltonian over all unit center vectors with the other limiting cores fixed. In particular, each limiting center is a lowest eigenvector of its limiting effective Hamiltonian. This is conditional on the stated convergence; it asserts neither convergence of DMRG nor global minimality.

## Facts & Assumptions

**Given:** An infinite sequence of exact no-truncation sweeps, fixed finite tensor dimensions and bond dimensions, and bounded componentwise convergence of the canonical core arrays at every update stage in a consistent gauge.

[F1] [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]]: each local update is an exact ground solve in the one-site or two-site center space, and no truncation occurs in this branch.

[F2] [[lem-na-mps-environment-isometry-and-effective-hamiltonian]]: each local center embedding is isometric and its effective Hamiltonian is Hermitian.

[F3] [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]]: the quotient minimizers of a finite Hermitian matrix are precisely its least eigenspace, and the selected ground vector is unit.

## Proof



1.1 Fix one update window. Each entry of its prefix and suffix interface and of its effective Hamiltonian is a finite sum of products of core entries and fixed entries of $H$. Therefore these entries depend continuously on the canonical core arrays. By the assumed componentwise convergence at every stage, the center vectors and effective Hamiltonians at this window converge to limits $x_*$ and $H_{\mathrm{eff},*}$. [given, F1, F2, algebra]

2.1 For every sweep index $m$ and every unit vector $y$ in this fixed center coefficient space, the exact update at the chosen window gives $x_m^*H_{\mathrm{eff},m}x_m\le y^*H_{\mathrm{eff},m}y$ by [F1] and [F3]. Taking the limit as $m\to\infty$ preserves the inequality because matrix multiplication is continuous, giving $x_*^*H_{\mathrm{eff},*}x_*\le y^*H_{\mathrm{eff},*}y$ for every unit $y$. Thus the limiting center minimizes its local Rayleigh quotient and, by [F3], is a lowest eigenvector. [F1, F2, F3, step 1.1, algebra]

3.1 The update-window list is finite. Apply steps 1.1 and 2.1 to each window in that list. Every limiting center is therefore a local Rayleigh minimizer with all other limiting cores fixed, which is exactly coordinatewise stationarity as defined in the Statement. The argument makes no comparison with states outside those local coordinate spaces. [given, step 1.1, step 2.1, algebra] ∎
