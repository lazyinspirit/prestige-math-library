---
id: pthm-st-pure-spinor-curved-local-master-defect
kind: physics-theorem
title: Curved Type II One-Loop Local Master Defect
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
category: string-theory
deps:
  - def-st-pure-spinor-quantum-bv-data
  - lem-st-pure-spinor-cone-volume-current-cocycle
  - lem-st-pure-spinor-bv-semidensity-transfer-defect
dependency_roles:
  def-st-pure-spinor-quantum-bv-data: formulation-prerequisite
  lem-st-pure-spinor-cone-volume-current-cocycle: mathematical-premise
  lem-st-pure-spinor-bv-semidensity-transfer-defect: mathematical-premise
physical_scope: "Conditional formal one-worldsheet-loop Type II pure-spinor model calculation in the original Bedoya–Chandia conventions; no higher-loop or unrestricted-background conclusion."
empirical_limits: "No measurements or empirical confirmation are asserted."
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Pablo A. Bedoya and Aníbal Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§§3–4, one-loop covariant expansion and UV-divergent effective action; it does not compute the full sourced BV master defect claimed here."
    - title: "Nikita Nekrasov, Lectures on Curved Beta-Gamma Systems, Pure Spinors, and Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0511008v1"
      locator: "§§3.3–3.4, local constrained-current calculation; it does not establish the interacting Type II sourced continuum defect."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

In the original curved Type II one-loop scheme of [[def-st-pure-spinor-quantum-bv-data]], compute the complete sourced renormalized defect $A_1=(S_0,J_1)-\Delta_0S_0$ from the full interacting action and regulator. Prove its local continuum existence and consistency modulo worldsheet total derivatives, with compatible cone-chart and target-frame gluing, and evaluate every density, projector, FT, phase, matter and ghost contribution. Establish the actual integration prescription and boundary contribution rather than assuming a vanishing cone boundary term.

**Hypotheses.** Only the original model constraints and the explicitly constructed quantization data; formal one-loop expansion; no assumed quantum action principle, local anomaly cancellation or exact QME measure. This is the exact planned target. The complete regulator, continuum limit, chart/frame gluing and cone boundary calculation have not been established in this carrier.

## Statement references

[[def-st-pure-spinor-quantum-bv-data]]

[[lem-st-pure-spinor-cone-volume-current-cocycle]]

[[lem-st-pure-spinor-bv-semidensity-transfer-defect]]

[Bedoya–Chandía, §§3–4](https://arxiv.org/pdf/hep-th/0609161v2)

## Facts & Assumptions

**Given:** The original finite/regularized field-antifield data and classical master action, when such a regulator is defined, and the finite BV identities of the supplied lemma.

[F1] [[def-st-pure-spinor-quantum-bv-data]] specifies the source-identical physical action, classical premises, candidate regulator data and unresolved apex/infinity prescription; it does not supply a continuum measure.

[F2] [[lem-st-pure-spinor-cone-volume-current-cocycle]] proves the local constrained-cone current coefficient, not the full interacting target-space source sum.

[F3] [[lem-st-pure-spinor-bv-semidensity-transfer-defect]] proves finite density, consistency and pushforward identities while retaining a nonzero boundary remainder.

[A1] For the conditional finite algebra below only, assume a regulated one-loop functional $J_{1,\Lambda}$ and compatible $\Delta_\Lambda$ exist on one finite chart. No limit in the cutoff $\Lambda$ is assumed.

## Proof

The following deductions establish finite consistency consequences only; they do not compute the complete target in the Statement.

1.1 If the regulated classical action obeys $(S_0,S_0)=0$ and $S_{\Lambda}=S_0+\hbar J_{1,\Lambda}+O(\hbar^2)$, direct expansion gives $\frac12(S_{\Lambda},S_{\Lambda})-\hbar\Delta_\Lambda S_{\Lambda}=\hbar[(S_0,J_{1,\Lambda})-\Delta_\Lambda S_0]+O(\hbar^2)$. Thus the coefficient of $\hbar$ is exactly the regulated defect; this identity supplies no value for it. [F1, A1, algebra]

2.1 The finite BV consistency identity in [F3] gives $s_\Lambda A_{1,\Lambda}=0$, where $s_\Lambda=(S_0,-)$, provided the classical master equation holds. The local current calculation [F2] supplies one constrained-cone channel but not the full interacting source sum. The pushforward identity in [F3] also gives the low defect as the high expectation only after subtracting its explicit high boundary remainder. These are conditional finite statements and neither supplies convergence, all source contractions, patch gluing, nor the cone boundary term required by the Statement. [F2, F3, step 1.1, algebra] ∎

## Unresolved proof obligations

The exact remaining work is the full source-dependent renormalized calculation, proof of a local continuum limit and consistency modulo total derivatives, compatible cone-chart and target-frame gluing, evaluation of all listed contributions, and the actual apex/infinity integration boundary. The finite formulas above are not a proof of the planned physical theorem and no cancellation or source primitive is inferred. Readiness is escalated.
