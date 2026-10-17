---
id: post-tgr-local-entropy-admissibility
kind: postulate
title: "Local entropy-current admissibility in a separately defined model"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-local-fluid-state
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-local-fluid-state: mathematical-premise
justified_by: []
physical_scope: "Given defined smooth current and material model,∇S≥0; not a geometry theorem, globalGSL or statistical/horizon identification."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page PDF; §4.1, PDF pp. 9–10: a model-specific non-equilibrium entropy-current divergence condition, its conformal-fluid calculation, and the author's statement that he knew of no experimental verification."
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.3 and 6.1–6.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; local equation-of-state discussion and perfect-fluid entropy/vorticity development, PDF pp. 15–24. The material regime is context, not a universal entropy-current proof."
---

## Postulate

On an open region of the smooth spacetime of [[def-tgr-framework-units]], take a separately specified material/current model in its declared smooth regime. Its entropy current is a supplied $C^1$ vector field $S^a$ of the type and units in [[def-tgr-local-fluid-state]]. Adopt the local admissibility condition

$$\nabla_aS^a\geq 0$$

throughout that region. This inequality is a physical restriction on the chosen model and current; it is not a construction of an undefined constitutive current. Each application must state its current, regime, boundary/exchange data, and any source or sink terms it includes.

The inequality is not deduced from Lorentzian geometry, the local state function, or finite data. It does not assert statistical thermalization, a universal microscopic $H$-theorem, entropy-area identification, or a generalized second law. Romatschke's cited calculation is restricted to a specified conformal-fluid model and itself records the absence of experimental verification known to that author; that source limitation does not turn this postulate into an observed law. No experimental observation or uncertainty is supplied by this item.
