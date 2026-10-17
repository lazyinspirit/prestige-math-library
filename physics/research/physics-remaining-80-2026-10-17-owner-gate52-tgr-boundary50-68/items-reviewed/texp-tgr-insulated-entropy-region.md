---
id: texp-tgr-insulated-entropy-region
kind: thought-experiment
title: "Entropy-impermeable finite worldtube prediction"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-tgr-finite-entropy-balance
dependency_roles:
  pthm-tgr-finite-entropy-balance: physical-result
justified_by: []
physical_scope: "Conditional ideal boundary; growth equals integrated production and zero production gives equal endpoint charge; no observations/GSL."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.3 and 6.1–6.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 15–24: local entropy and perfect-fluid context; the finite-box conditional prediction is derived only from the assigned theorem."
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 9–10: model-specific local entropy-current divergence and explicit limitation on experimental verification; this imagined setup adds no observation."
---

## Statement

Take the finite chart slab, current and local-admissibility assumptions of [[pthm-tgr-finite-entropy-balance]]. Call the side boundary entropy-impermeable in this setup when the pullback of the entropy-current flux three-form vanishes on every side face; this implies $\Phi_S(B)=0$. Then, conditional on the current draft supplier chain recorded by [[pthm-tgr-finite-entropy-balance]],

$$Q_S(x^0_+)-Q_S(x^0_-)=\int_K\Pi\,\mathrm{vol}_g\geq0.$$

If $\Pi=0$ throughout the slab, the endpoint charges are equal. This is an idealized model prediction, not a reported experiment. It does not identify this finite material entropy with horizon area or exterior quantum entropy, and does not assert a global generalized second law.

## Facts & Assumptions

**Given:** The conditional finite-slab theorem [[pthm-tgr-finite-entropy-balance]], its smooth local entropy-current premise, and the same finite chart slab. The side boundary is entropy-impermeable in the pointwise sense defined in the Statement.

[L1] [[pthm-tgr-finite-entropy-balance]] states, conditionally on the draft mathematical finite-current balance, $Q_S(x^0_+)-Q_S(x^0_-)+\Phi_S(B)=\int_K\Pi\,\mathrm{vol}_g\geq0$.

[A1] For the hypothetical boundary in this item, the entropy-current flux three-form vanishes on every side face, so the defined net outward flux is $\Phi_S(B)=0$.

[A2] In the zero-production case only, assume $\Pi=0$ at every point of $K$.

## Proof

**Proof technique:** direct substitution of the ideal boundary condition into the conditional finite-slab theorem.

1.1 By [A1], the pullback flux vanishes on each side face, so its finite face integral and hence the net outward flux satisfy $\Phi_S(B)=0$. [given, A1]

2.1 Substitute this equality into [L1]. The finite material slice-entropy change equals the integrated local production and is nonnegative under the theorem's adopted local premise. [L1, step 1.1]

3.1 Under the additional zero-production case [A2], the integral in step 2.1 is zero, so the endpoint charges are equal. This remains a conditional model deduction and supplies no measured outcome or horizon-entropy identification. [A2, step 2.1, algebra] ∎
