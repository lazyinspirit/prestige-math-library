---
id: rem-r5-sw-d4-charge-scope
kind: remark
title: Silverstein Westphal D4 Charge Scope Distinguishes Two Orientations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - post-r5-sw-nil-background-data
  - def-r5-nil-d4-worldvolume-embedding
  - pthm-r5-nil-d4-dbi-reduction
dependency_roles:
  post-r5-sw-nil-background-data: formulation-prerequisite
  def-r5-nil-d4-worldvolume-embedding: formulation-prerequisite
  pthm-r5-nil-d4-dbi-reduction: physical-result
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Source-reported distinction between the main Silverstein–Westphal D4 orientation producing the geometric phi^(2/3) potential and a different charged orientation discussed as a phi-tilde^(2/5) variant; no charge cancellation is derived here."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§§2.2, 2.3.2, 3.1.1–3.1.2, PDF pp. 7–8 and 13, 17–19; main diagonal orientation, orientifold image, and distinct charged orientation."
---

## Remark

Silverstein–Westphal's analyzed geometric $\phi^{2/3}$ branch uses a D4 wrapped on the diagonal $u_2+\widetilde u_2$ direction and moving along the corresponding diagonal $u_1+\widetilde u_1$. In §3.1.1 the orientifold maps this D4 to an anti-D4, so the pair has zero net D4 source charge. The charged $F_2\wedge H_3$ construction in §3.1.2 instead uses a distinct $u_2-\widetilde u_2$ orientation and gives the $\widetilde\phi^{2/5}$ variant. The source's brief §2 discussion of a compensating charge is therefore not a valid blanket premise for the main $\phi^{2/3}$ branch; the detailed orientation-specific discussion governs.

The local D4 calculation in [[pthm-r5-nil-d4-dbi-reduction]] lets the brane move and wrap in the first Nil factor while holding the isomorphic second factor fixed; it derives only the geometric DBI term and does not establish the orientifold projection or any net charge. A flux-charge balance for a source-carrying configuration therefore cannot be attached to the $\phi^{2/3}$ consumer without resolving this orientation difference.

## References

[Silverstein and Westphal, §§2.3.2 and 3.1.1–3.1.2](https://arxiv.org/pdf/0803.3085v2)
