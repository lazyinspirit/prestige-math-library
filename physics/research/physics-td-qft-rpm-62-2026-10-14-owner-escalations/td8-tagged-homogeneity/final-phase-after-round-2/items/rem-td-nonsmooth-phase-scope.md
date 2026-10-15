---
id: rem-td-nonsmooth-phase-scope
kind: remark
title: Scope at phase boundaries and in the thermodynamic limit
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Interpretive limits for the phase-branch, coexistence, Clapeyron, and compact-mixture statements on this page; this remark establishes no universal critical or thermodynamic-limit result.
dependency_level: 11
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-thermodynamic-limit-contract
  - pthm-td-clapeyron-local
  - pthm-td-compact-continuous-phase-mixture
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-thermodynamic-limit-contract: formulation-prerequisite
  pthm-td-clapeyron-local: physical-result
  pthm-td-compact-continuous-phase-mixture: physical-result
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §§5.1–5.4"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §§4.1–4.2"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Remarks

The branch theorems on this page require the stated smooth local charts. At a phase boundary, a composition boundary, or a critical point, the branch derivatives may fail to exist or may cease to distinguish the phases. In particular, [[pthm-td-clapeyron-local]] requires a nonzero molar-volume jump; when that jump vanishes, its local graph argument and quotient formula do not apply.

The compact-mixture result [[pthm-td-compact-continuous-phase-mixture]] requires a compact phase-generator domain, a continuous entropy map, a fixed barycenter, and feasibility of all probability mixtures with that barycenter. It supplies no attainment theorem for noncompact domains. Likewise, [[def-td-thermodynamic-limit-contract]] specifies the sequence and normalization for a limiting claim but proves no limit exists and no derivatives commute with that limit.

A finite-state partition sum is finite and positive at each finite system size. A singular phase behavior therefore needs a separately specified limit or another model with a separately established domain and regularity analysis. This page does not assert a universal thermodynamic-limit theorem, ensemble equivalence, critical exponent, or physical applicability of the van der Waals equation.

The local homogeneity used by [[pthm-td-clapeyron-local]] may be independently stipulated in a phase model or supplied on the separately designated common-law bulk branch under the local Euler theorem's inverse-chart and common-reference conditions. A constructed local Gibbs model need not be embedded in a global bulk cone to use the general conditional result. The added branch supplies no universal finite-size, long-range or gravitational extensivity and does not remove any smoothness, exchange or nonzero-volume-jump condition.
