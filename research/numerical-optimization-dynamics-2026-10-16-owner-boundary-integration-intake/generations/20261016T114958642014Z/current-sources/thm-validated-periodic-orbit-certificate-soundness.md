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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
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

Suppose [[alg-validated-periodic-orbit-corrector]] returns `validated-root` for a rational shooting box $Z=X\times\Theta$, with outward residual and Jacobian enclosures, strict Krawczyk inclusion, a separately verified contraction bound, and a component of $f(X)$ excluding zero. Then there is exactly one zero $(x_*,T_*)\in Z$ of the phase-bordered shooting residual. It generates a nonconstant periodic solution with $\psi(x_*)=0$, period $T_*>0$, and the returned trajectory and monodromy boxes contain its exact trajectory and monodromy. Uniqueness is within $Z$ only.

## Facts & Assumptions

**Given:** The successful finite corrector record, its rational box and all interval enclosures and strict inequalities.

[F1] Strict Krawczyk inclusion proves existence, and the separate interval norm bound $q<1$ proves uniqueness in the box; strict inclusion alone does not prove uniqueness ([[thm-krawczyk-inclusion-exclusion-and-uniqueness]]).

[F2] A zero of the phase-bordered residual with positive period and nonzero vector field is exactly a phase-fixed nonconstant periodic solution ([[prop-phase-bordered-bvp-root-equivalence]]).

[F3] The successful corrector returns only after its validated residual/Jacobian, trajectory, and monodromy enclosures succeed, and its field component excludes zero ([[alg-validated-periodic-orbit-corrector]]).

[F4] A successful validated Euler range-oracle run encloses the exact trajectory and variational solution ([[thm-validated-euler-flow-and-monodromy-enclosure-soundness]]).

## Proof
1.1 The Krawczyk hypotheses of [F1] are the exact interval residual and Jacobian enclosures in the successful output [F3]; its strict inclusion therefore supplies a zero in $Z$. The separately reported contraction bound gives at most one zero there. Thus there is exactly one shooting root in the box. [F1, F3, given]

2.1 Since $\Theta\subset(0,\infty)$, this root has positive period. The field range component excludes zero throughout $X$, so $f(x_*)\ne0$. Apply [F2] to obtain the phase-fixed nonconstant periodic solution. [F2, F3, step 1.1]

3.1 The successful run's range-oracle and interval inclusions contain each exact trajectory and variational solution by [F4]; [F3] makes these the trajectory and monodromy boxes of the root from step 1.1. The uniqueness assertion remains restricted to $Z$, as in [F1]. [F1, F3, F4, step 1.1] ∎
