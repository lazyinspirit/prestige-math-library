---
id: pthm-dp-brane-curvature-wz-coupling
kind: physics-theorem
title: Dp Brane Leading Curvature WZ Coupling
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - post-type-ii-dp-brane-dbi-wz-action
  - post-dp-truncated-curvature-wz-factor
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  post-dp-truncated-curvature-wz-factor: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "The source-normalized leading disk-level order-alpha'^2 Dp curvature coupling with vanishing B and worldvolume gauge field; does not establish its worldsheet amplitude locally, convert tension normalization to the R4 charge normalization, or assert an all-orders formula."
sources:
  references:
    - title: "Constantin P. Bachas, Pascal Bain, and Michael B. Green, Curvature terms in D-brane actions and their M-theory origin, arXiv:hep-th/9903210v2"
      url: "https://arxiv.org/pdf/hep-th/9903210v2"
      locator: "§2 equation (2.15), PDF pp. 8–10; leading parity-odd curvature correction at disk level."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, equation (2.19), PDF p. 15; leading WZ normalization and charge/tension distinction."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the democratic WZ convention and under the hypotheses of [A1], for $p\ge3$ the leading curvature correction to the Dp WZ coupling is
$$ \mu_p\int_W\left(\iota^*C_{p+1}+\frac{\pi^2\alpha'^2}{24}\iota^*C_{p-3}\wedge \left(\operatorname{tr}(R_T\wedge R_T)-\operatorname{tr}(R_N\wedge R_N)\right)\right), $$
through order $\alpha'^2$, with the source coefficient $\mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}$ equal to the bare WZ coefficient in [[post-type-ii-dp-brane-dbi-wz-action]]. This is a source-reported disk result, not a local derivation of the worldsheet amplitude.

## Facts & Assumptions

**Given:** A smooth Dp embedding, constant dilaton, $B_2=F_A=0$, the leading WZ coupling, and the separately adopted truncated disk curvature factor.

[F1] [[post-type-ii-dp-brane-dbi-wz-action]]: the leading WZ coupling is $\mu_p\int_W[\iota^*C\wedge e^{\mathcal F}]_{p+1}$ in the democratic component basis, with $\mu_p$ the RR charge normalization and $T_p=\mu_p/g_{\mathrm{str}}$ the constant-dilaton DBI tension.

[A1] [[post-dp-truncated-curvature-wz-factor]]: for an allowed Type II dimension $3\le p\le9$ and a smooth oriented timelike embedding with nondegenerate induced metric, use the projected tangent and normal connections and the ambient democratic RR potentials specified there. At disk level, with constant dilaton and $B_2=F_A=0$, its order-$\alpha'^2$ expression has coefficient $\mu_p$ and tangent-minus-normal curvature traces. The traces are four-forms on $W$; only the ambient potentials are pulled back. In its explicit BBG crosswalk $C_r^{\mathrm{BBG}}=g_{\mathrm{str}}C_r$ and $T_{(p)}^{\mathrm{BBG}}=\mu_p/g_{\mathrm{str}}$, so the WZ product is $\mu_pC_r$, not an identification of BBG tension with $\mu_p$. The supplier retains the massless D8 restriction and separate D9 supplement.

## Proof

1.1 The adopted source expression [A1] has degree-$p+1$ term $\iota^*C_{p+1}$ and order-$\alpha'^2$ term $(\pi^2\alpha'^2/24)\iota^*C_{p-3}\wedge(\operatorname{tr}(R_T\wedge R_T)-\operatorname{tr}(R_N\wedge R_N))$, with the stated tangent-minus-normal sign and coefficient $\mu_p$. These are exactly the terms in the theorem statement. [given, A1, algebra]

2.1 Restricting [A1] to terms through order $\alpha'^2$ leaves precisely the stated formula. The crosswalk in [[post-type-ii-dp-brane-dbi-wz-action]] uses the same WZ polyform and charge normalization; the physical constant-dilaton tension $T_p=\mu_p/g_{\mathrm{str}}$ belongs to the DBI clause and is not substituted into the WZ coefficient. No higher orders are asserted. [given, F1, A1, step 1.1, algebra] ∎
