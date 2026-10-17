---
id: thm-validated-periodic-orbit-certificate-soundness
kind: theorem
title: "A Krawczyk inclusion certifies a unique phase-fixed nonconstant periodic orbit"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - alg-validated-periodic-orbit-corrector
  - thm-krawczyk-inclusion-exclusion-and-uniqueness
  - prop-phase-bordered-bvp-root-equivalence
  - thm-validated-euler-flow-and-monodromy-enclosure-soundness
  - lem-rational-box-affine-chart-and-dyadic-enclosure
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "Full PDF retrieved and verified as 23 pages; inspected §§1–2 on interval sets, outward enclosure, Brouwer, and interval Newton/Krawczyk."
---

## Statement

Suppose [[alg-validated-periodic-orbit-corrector]] returns `validated-root` for a rational shooting box $Z=X\times\Theta$, with a complete affinely mapped Krawczyk partition of $Z$ containing exactly one `unique-root` box $Y$ and only `root-free` boxes otherwise, outward residual and Jacobian enclosures on $Y$, a separately verified contraction bound, and a component of $f(X_Y)$ excluding zero, where $X_Y$ is the physical-state projection of $Y$. Then there is exactly one zero $(x_*,T_*)\in Z$ of the phase-bordered shooting residual, and it lies in $Y$. It generates a nonconstant periodic solution with $\psi(x_*)=0$, period $T_*>0$, and the returned trajectory and monodromy boxes contain its exact trajectory and monodromy. No uniqueness outside $Z$ is asserted.

## Facts & Assumptions

**Given:** The successful finite corrector record, its rational box and all interval enclosures and strict inequalities.

[F1] Strict Krawczyk inclusion proves existence, and the separate interval norm bound $q<1$ proves uniqueness in the box; strict inclusion alone does not prove uniqueness ([[thm-krawczyk-inclusion-exclusion-and-uniqueness]]).

[F2] A zero of the phase-bordered residual with positive period and nonzero vector field is exactly a phase-fixed nonconstant periodic solution ([[prop-phase-bordered-bvp-root-equivalence]]).

[F3] The successful corrector returns a complete Krawczyk partition with one `unique-root` box and only `root-free` boxes otherwise; it also returns validated residual/Jacobian, trajectory, monodromy, and nonstationarity enclosures on the unique-root box ([[alg-validated-periodic-orbit-corrector]]).

[F5] The corrector's exact affine bijection between the dyadic unit box and its rational physical box transfers zero sets and partition root statuses; physical derivatives and normalized derivatives satisfy $D\widehat F=DF\,D$ ([[lem-rational-box-affine-chart-and-dyadic-enclosure]]).

[F4] A successful validated Euler range-oracle run encloses the exact trajectory and variational solution ([[thm-validated-euler-flow-and-monodromy-enclosure-soundness]]).

## Proof

1.1 By [F3], the normalized Krawczyk run covers the dyadic unit box with one `unique-root` box $A_Y$ and root-free boxes otherwise. The finite dyadic callback enclosures are for $\widehat F$ and $D\widehat F$, so [F1] gives exactly one zero in $A_Y$ and none in the root-free normalized boxes. By [F5], the exact affine bijection maps their covering partition onto $Z$ and their zero sets onto the corresponding physical zero sets. Hence there is exactly one zero in all of $Z$, and it lies in $Y=T(A_Y)$. All strict inclusion and contraction tests are used in their actual normalized coordinates. [F1, F3, F5, given]

2.1 Since $\Theta\subset(0,\infty)$, this root has positive period. The field range component excludes zero on its physical-state projection $X_Y$, so $f(x_*)\ne0$. Apply [F2] to obtain the phase-fixed nonconstant periodic solution. [F2, F3, step 1.1]

3.1 The successful run's range-oracle and interval inclusions contain each exact trajectory and variational solution by [F4]; [F3] makes these the trajectory and monodromy boxes of the root from step 1.1. Uniqueness is restricted to $Z$, as established in step 1.1. [F1, F3, F4, step 1.1] ∎
