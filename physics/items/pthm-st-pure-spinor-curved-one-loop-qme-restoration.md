---
id: pthm-st-pure-spinor-curved-one-loop-qme-restoration
kind: physics-theorem
title: Curved Type II One-Loop Sourced QME Restoration
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
category: string-theory
deps:
  - pthm-st-pure-spinor-curved-local-master-defect
dependency_roles:
  pthm-st-pure-spinor-curved-local-master-defect: physical-result
physical_scope: "Conditional formal one-worldsheet-loop Type II pure-spinor model calculation in the original Bedoya–Chandia conventions; no higher-loop or unrestricted-background conclusion."
empirical_limits: "No measurements or empirical confirmation are asserted."
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Pablo A. Bedoya and Aníbal Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§§4–5: one-loop effective action and beta functions; neither section constructs the full local sourced functional $C_1$ required here."
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228v1"
      locator: "§§8.5–8.7: the local one-loop anomaly must be computed and shown to be a local BRST variation before counterterm removal."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

For that computed defect, construct an admissible local sourced functional $C_1$ satisfying $(S_0,C_1)=-A_1$ modulo total derivatives, with all antifield, target-frame and cone-chart transition terms and the boundary prescription fixed. Prove the one-loop QME for $J_1+C_1$ without changing the original dilaton/connection conventions or selecting a subtraction from the beta residual.

Here “that computed defect” is the exact interface of [[pthm-st-pure-spinor-curved-local-master-defect]].

**Hypotheses.** The original model premises and the computed defect theorem as supplier. Triviality of the anomaly class is a conclusion to establish, not an added hypothesis. The supplied defect carrier is present but its full calculation is itself unresolved; the local primitive and its gluing are also not supplied.

## Statement references

[[pthm-st-pure-spinor-curved-local-master-defect]]

[Bedoya–Chandía, §§4–5](https://arxiv.org/pdf/hep-th/0609161v2)

[Gomis, París, and Samuel, §§8.5–8.7](https://arxiv.org/pdf/hep-th/9412228v1)

## Facts & Assumptions

**Given:** The exact planned interface of the preceding defect theorem, treated at its written statement and not as an accepted proof.

[F1] [[pthm-st-pure-spinor-curved-local-master-defect]] states the full local continuum defect required as input, but its carrier records that this calculation and its cone boundary/gluing proof are unresolved.

[A1] For the conditional expansion only, $S_0$ is even and satisfies the classical master equation, $\Delta_0$ is the fixed compatible odd Laplacian, and all functionals use the same local total-derivative quotient.

**Given (conditional algebra only):** Write $s=(S_0,-)$, and use the same fixed representative of $A_1$ and the same total-derivative quotient as the planned statement.

## Proof

These steps prove only the implication from an already supplied primitive to the one-loop equation; they do not establish the existence conclusion in the Statement.

1.1 Suppose, conditionally, that a local functional $C_1$ in the declared admissible class has actually been constructed and that $sC_1=-A_1$ modulo total derivatives. Then $(S_0,J_1+C_1)-\Delta_0S_0=A_1+sC_1=0$ in that quotient, by the definition $A_1=(S_0,J_1)-\Delta_0S_0$. [F1, given, algebra]

2.1 Expanding $S_0+\hbar(J_1+C_1)$ in $\frac12(S,S)-\hbar\Delta_0S$ gives $\hbar[(S_0,J_1+C_1)-\Delta_0S_0]+O(\hbar^2)$. By step 1.1 this coefficient is zero under the conditional premise. This is only the one-loop QME coefficient and makes no assertion about higher powers of $\hbar$. [A1, step 1.1, algebra] ∎

## Unresolved proof obligations

The existential claim is the missing proof: compute the exact defect first, then construct an admissible local primitive and prove its antifield completion, chart/frame transition laws and actual boundary prescription. No source cited here proves that this particular curved sourced anomaly class is trivial. A beta-function subtraction cannot supply the missing primitive. Readiness is escalated.
