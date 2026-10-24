---
id: thm-comparison-test-for-improper-integrals
kind: theorem
title: "Comparison tests for improper integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-nonnegative-improper-integral-bounded-primitive-criterion,
       thm-absolute-improper-convergence-implies-convergence,
       lem-improper-integral-splitting-and-tail-invariance,
       thm-monotonicity-of-the-integral,
       cor-integrability-of-absolute-values-products-and-lattice-operations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 3.4.6"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Suppose $0\le f\le g$ eventually toward a singular end. If the improper integral of $g$ converges there, then the integral of $f$ converges. If instead $|f|\le g$ eventually and $\int g$ converges, then $\int f$ converges absolutely and hence converges.

The same assertions hold separately at $+\infty$, at $-\infty$, and at either finite singular endpoint.

## Facts & Assumptions

**Given:** The stated eventual pointwise bounds and local Riemann integrability.

[L1] Proper integration preserves pointwise order ([[thm-monotonicity-of-the-integral]]).

[L2] A nonnegative improper integral converges exactly when its truncation integrals are bounded ([[thm-nonnegative-improper-integral-bounded-primitive-criterion]]).

[L3] Absolute convergence implies convergence ([[thm-absolute-improper-convergence-implies-convergence]]).

[L4] Finite initial pieces do not affect convergence ([[lem-improper-integral-splitting-and-tail-invariance]]).

## Proof

**Proof technique:** direct.

1.1 Discard the finite portion before the eventual inequality using [L4]. On every remaining compact truncation, [L1] gives $0\le\int f\le\int g$. Convergence of $\int g$ bounds the latter truncations, so [L2] gives convergence of $\int f$. [L4, L1, L2]

2.1 If $|f|\le g$, step 1.1 applied to $|f|$ proves absolute convergence; [L3] then proves convergence of $f$. The argument depends only on the direction of truncation and therefore proves every endpoint form. [L3, step 1.1] ∎
