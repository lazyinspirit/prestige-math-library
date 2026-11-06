---
id: pthm-closed-string-genus-npoint-coupling-power
kind: physics-theorem
title: Closed string genus-n-point coupling power
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 5
domain: physics
physical_scope: "Normalization identity for connected oriented closed surfaces and canonically sphere-normalized closed vertices; it is not an integral, convergence theorem, or open-string coupling rule."
deps:
  - def-string-vertex-operator-and-covariant-insertion
  - def-string-coupling-genus-weight
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
dependency_roles:
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  def-string-coupling-genus-weight: formulation-prerequisite
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.1.1, printed pp. 129–131, Euler-characteristic genus weights and formal/asymptotic genus expansion."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\Sigma$ be a connected compact oriented closed worldsheet of genus $g$, and assume full AC as required by the supplied genus classification. If its adopted constant-dilaton topology factor is $g_s^{2g-2}$ and each of $n\ge0$ canonically sphere-normalized closed external vertices contributes $g_s$, then the explicit coupling factor is $g_s^{2g-2+n}$. This is a multiplication identity only; it supplies no convergence of the genus series. The formula does not apply to a boundary worldsheet.

## Facts & Assumptions

**Given:** $g_s=e^{\Phi_0}>0$, the exact R2 closed constant-dilaton convention, and $n$ external closed vertices in the stated sphere normalization.

[F1] [[def-string-coupling-genus-weight]] derives the weight $g_s^{2g-2}$ for a compact connected Riemann surface with complex structure, compatible Euclidean metric, supplied Spin structure, and full AC. The present Statement explicitly assumes that numerical topology factor; it does not extend the supplier's action derivation to surfaces lacking those structures.

[F2] [[def-genus-and-euler-characteristic-compact-riemann-surface]] defines genus using the topological classification of a compact Riemann surface under full AC. This supplier fixes the intended worldsheet genus convention; the multiplication below does not require a new classification theorem or use a curvature integral.

[F3] [[def-string-vertex-operator-and-covariant-insertion]] distinguishes the local vertex datum from its separately declared external-state normalization; the present given fixes that normalization as one factor $g_s$ per closed insertion.

[A1] [[def-axiom-of-choice]] is assumed because [F2] requires full AC.

## Proof

1.1 By the explicit topology-factor hypothesis in the Statement and Given, the contribution is $g_s^{2g-2}$; [F1] identifies the structured worldsheet model in which that factor was derived. By [F3] and the explicit normalization in Given, the product of the $n$ closed external factors is $\prod_{i=1}^n g_s=g_s^n$ (the empty product is $1$ when $n=0$). [given, F1, F3, algebra]

2.1 Multiplication gives $g_s^{2g-2}g_s^n=g_s^{2g-2+n}$ because $g_s>0$ and exponents add. The argument uses only the closed topology convention; a worldsheet with boundary has a different Euler characteristic and its own open-vertex normalization, so it is outside this statement. [F1, F2, A1, step 1.1, algebra] ∎

## Remarks

The local vertex supplier depends on stale CFT readiness records, so this result remains conditional on its interface. The formula is not inferred for the disk and does not imply that the coefficient series in $g_s$ converges.
