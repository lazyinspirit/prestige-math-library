---
id: def-type-iia-potential-gauge-transformations
kind: definition
title: Type Iia Potential Gauge Transformations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-type-iia-two-derivative-supergravity-action
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
physical_scope: "Local potential gauge transformations in the source-free massless Hamilton convention. The verification is kinematic and does not establish a global gauge group, gerbe data, quantization, or source transformation law."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Definition 6.1 and the potential gauge transformations immediately following it."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Definition

On a smooth ten-dimensional local patch $U$, take smooth real potentials $B_2\in\Omega^2(U)$, $C_1\in\Omega^1(U)$, $C_3\in\Omega^3(U)$ with $H_3=dB_2$ and $dH_3=0$, and let $\zeta_1,\Lambda_0,\Lambda_2$ be smooth one-, zero-, and two-form gauge parameters. The Hamilton massless type IIA potential transformations are
$$B_2\longmapsto B_2+d\zeta_1,\qquad C_1\longmapsto C_1+d\Lambda_0,\qquad C_3\longmapsto C_3+d\Lambda_2+H_3\Lambda_0.$$
The gauge-invariant local field strengths are $H_3=dB_2$, $G_2=dC_1$, and $\widetilde G_4=dC_3-C_1\wedge H_3$. The auxiliary strength $G_4:=dC_3$ transforms by $G_4\longmapsto G_4-H_3\wedge d\Lambda_0$ and is generally not invariant. In the length-valued coordinates of the adopted action, potential components are dimensionless; gauge-parameter components have dimension length so that each displayed potential shift is dimensionless.

## Definition references

[M. J. D. Hamilton, §6.1, Definition 6.1](https://arxiv.org/pdf/1607.00327v3)

[[post-type-iia-two-derivative-supergravity-action]]

## Facts & Assumptions

**Given:** Smooth gauge parameters, $dH_3=0$, and the potential/field-strength conventions stated above.

[A1] [[def-supergravity-conventions-and-normalizations]] (current batch-56 carrier and current ready Step 1 record inspected; its stated hypotheses match this use): ordinary exterior differentiation and wedge products are used in Lorentzian ten dimensions.

[A2] [[post-type-iia-two-derivative-supergravity-action]] adopts the local definitions of $H_3,G_2,G_4,\widetilde G_4$ used here.

[F1] [[thm-the-exterior-derivative-is-a-graded-derivation]]: $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$.

[F2] [[thm-the-exterior-derivative-squares-to-zero]]: $d^2=0$ on smooth forms.

## Verification

1.1 Under $B_2\mapsto B_2+d\zeta_1$, $H_3\mapsto H_3+d^2\zeta_1=H_3$ by [F2]. Under $C_1\mapsto C_1+d\Lambda_0$, $G_2\mapsto G_2+d^2\Lambda_0=G_2$. [given, A2, F2, algebra]

2.1 With $C_3\mapsto C_3+d\Lambda_2+H_3\Lambda_0$, the change in $G_4$ is $d(H_3\Lambda_0)=dH_3\,\Lambda_0-H_3\wedge d\Lambda_0=-H_3\wedge d\Lambda_0$, by [F1] and $dH_3=0$. The change in $C_1\wedge H_3$ is $d\Lambda_0\wedge H_3=-H_3\wedge d\Lambda_0$, since degrees 1 and 3 anticommute in [A1]. Thus $\widetilde G_4$ is unchanged. [given, A1, A2, F1, step 1.1, algebra]

3.1 The transformation leaves $H_3,G_2,\widetilde G_4$ invariant by steps 1.1 and 2.1; step 2.1 also gives the stated transformation of $G_4$. This is the stated local gauge invariance of the field-strength data; it does not by itself assert invariance of a global action with boundary or source terms. [given, A2, step 1.1, step 2.1] ∎

