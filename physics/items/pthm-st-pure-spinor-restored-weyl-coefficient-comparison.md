---
id: pthm-st-pure-spinor-restored-weyl-coefficient-comparison
kind: physics-theorem
title: Restored Type II Weyl Coefficients in the Original Eight-Coupling Basis
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
category: string-theory
deps:
  - pthm-st-pure-spinor-curved-one-loop-qme-restoration
  - lem-st-pure-spinor-bv-semidensity-transfer-defect
  - lem-st-pure-spinor-cone-volume-current-cocycle
dependency_roles:
  pthm-st-pure-spinor-curved-one-loop-qme-restoration: physical-result
  lem-st-pure-spinor-bv-semidensity-transfer-defect: mathematical-premise
  lem-st-pure-spinor-cone-volume-current-cocycle: mathematical-premise
physical_scope: "Conditional formal one-worldsheet-loop Type II pure-spinor model calculation in the original Bedoya–Chandia conventions; only the eight original weight-(1,1) couplings."
empirical_limits: "No measurements or empirical confirmation are asserted."
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Pablo A. Bedoya and Aníbal Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§5.1, equations (5.5)–(5.12): the original eight beta-function slots; the source does not compute the restored BV Weyl representative claimed here."
    - title: "Nikita Nekrasov, Lectures on Curved Beta-Gamma Systems, Pure Spinors, and Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0511008v1"
      locator: "§§3.3–3.4: local cone-current anomaly; no all-eight curved Type II coefficient projection is claimed."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Compute $\delta_\sigma(J_1+C_1)$ with full density, moving-projector, metric-graph and off-shell source/EOM partners, and identify its eight independent original weight-$(1,1)$ coefficients with the Bedoya–Chandía (5.5)–(5.12) normal form, including explicit high-row tensors. Prove the equality of representatives; no BRST-exact or EOM term may be dropped before its full projection is evaluated.

**Hypotheses.** The same original model and one-loop scheme, the restored-QME supplier, and all eight source-defined coupling slots. Higher beta sets and higher loops remain outside scope. The current restoration supplier is unresolved, and no complete restored metric vertex or all-eight coefficient comparison is available.

## Statement references

[[pthm-st-pure-spinor-curved-one-loop-qme-restoration]]

[[lem-st-pure-spinor-bv-semidensity-transfer-defect]]

[[lem-st-pure-spinor-cone-volume-current-cocycle]]

[Bedoya–Chandía, §5.1, equations (5.5)–(5.12)](https://arxiv.org/pdf/hep-th/0609161v2)

## Facts & Assumptions

**Given:** The original source-defined eight coupling slots and the exact restored-QME supplier interface, at their currently inspected statements.

[F1] [[pthm-st-pure-spinor-curved-one-loop-qme-restoration]] requires an admissible $C_1$ and states the restored one-loop equation; that existence proof is not present in its current carrier.

[F2] [[lem-st-pure-spinor-bv-semidensity-transfer-defect]] gives the finite metric-variation identity, with density and moving-subspace derivatives retained after transport to fixed Darboux coordinates.

[F3] [[lem-st-pure-spinor-cone-volume-current-cocycle]] gives the constrained current's local third-pole coefficient; it does not supply the complete interacting metric vertex.

## Proof

The following is the Ward identity conditional on the missing restored-QME supplier; it does not identify the eight coefficients in the Statement.

1.1 Assume conditionally that the same local representative satisfies $(S_0,J_1+C_1)=\Delta_0S_0$. Put $G_\sigma=\delta_\sigma S_0$ and $W_\sigma=\delta_\sigma(J_1+C_1)$, with the derivative taken after the prescribed metric transport. Varying the equation at fixed transported Darboux coordinates gives $(G_\sigma,J_1+C_1)+(S_0,W_\sigma)=\Delta_0G_\sigma$, hence $(S_0,W_\sigma)=\Delta_0G_\sigma-(G_\sigma,J_1+C_1)$. [F1, F2, given, algebra]

2.1 To reach the Statement one must now evaluate this representative in every source-defined weight-$(1,1)$ slot, retaining the full density, projector, metric-graph, antifield, and off-shell EOM terms through projection. Neither the conditional identity in step 1.1 nor the local current cocycle in [F3] evaluates those coefficients; no equality of representatives follows here. [F1, F2, F3, step 1.1, algebra] ∎

## Unresolved proof obligations

The missing inputs are a completed restored-QME carrier, the full metric/source insertion and its transported projector derivative, explicit evaluation of all eight coefficient projections including the high-row tensors, and a proof that no discarded BRST-exact or EOM term changes those projections. The paper's first-eight beta calculation does not prove this distinct restored-BV comparison. Readiness is escalated.
